import { COLORS } from '../core/constants';
import { playerLabel, teamLabel } from '../core/utils';
import { computeMatch } from '../engines/matchEngine';
import { appHooks, showToast } from '../state/runtime';
import { persistActive, store } from '../state/store';
import type { ComputedMatchState, Match } from '../types';
import { flipSides, recordFault, redoPoint, scorePoint, undoPoint } from './matchActions';

let audioCtx: AudioContext | null = null;
let wakeLockSentinel: WakeLockSentinel | null = null;
let speechRec: any = null;
let isSpeakingTTS = false;
let speechBlocked = false;
let interimTimer: ReturnType<typeof setTimeout> | null = null;
let lastInterimText = '';
let lastProcessedAt = 0;
let lastProcessedCmd = '';

export function playTone(kind: string): void {
  if (!store.prefs.sound) return;
  try {
    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!audioCtx) audioCtx = new AudioCtx();
    if (audioCtx.state === 'suspended') audioCtx.resume();
    const now = audioCtx.currentTime;
    const notesMap: Record<string, Array<[number, number, number]>> = {
      point: [[880, 0, 0.06]],
      undo: [
        [520, 0, 0.05],
        [380, 0.06, 0.07]
      ],
      fault: [[320, 0, 0.11]],
      game: [
        [660, 0, 0.08],
        [880, 0.09, 0.14]
      ],
      set: [
        [587, 0, 0.09],
        [784, 0.1, 0.09],
        [1046, 0.2, 0.18]
      ],
      match: [
        [523, 0, 0.1],
        [659, 0.11, 0.1],
        [784, 0.22, 0.1],
        [1046, 0.33, 0.26]
      ]
    };
    const notes = notesMap[kind] || [[880, 0, 0.06]];

    notes.forEach(([freq, delay, dur]) => {
      if (!audioCtx) return;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + delay);
      gain.gain.setValueAtTime(0.18, now + delay);
      gain.gain.exponentialRampToValueAtTime(0.001, now + delay + dur);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now + delay);
      osc.stop(now + delay + dur + 0.01);
    });
  } catch {}
}

export function vibrate(pattern: number | number[]): void {
  if (store.prefs.vibrate && navigator.vibrate) {
    try {
      navigator.vibrate(pattern);
    } catch {}
  }
}

export function speakScore(m: Match, st: ComputedMatchState): void {
  if (!store.prefs.voice || !('speechSynthesis' in window)) return;
  try {
    window.speechSynthesis.cancel();
    let text = '';
    if (st.lastTransition) {
      const tr = st.lastTransition;
      const wName = teamLabel(m, tr.winner ?? 0).replace(/·/g, ' y ');
      if (tr.type === 'match') {
        text = `Juego, set y partido para ${wName}.`;
      } else if (tr.type === 'set') {
        const s = st.sets[tr.setIdx ?? 0];
        text = `Juego y set ${wName}, ${s.games[0]} a ${s.games[1]}.${tr.changeover ? ' Cambio de lado.' : ''}`;
      } else if (tr.type === 'game') {
        const g = st.curSet.games;
        text = `${tr.wasBreak ? 'Break y juego' : 'Juego'} para ${wName}. ${g[0]} a ${g[1]}.${tr.changeover ? ' Cambio de lado.' : ''}`;
      } else if (tr.type === 'tb_changeover') {
        text = `${st.p[0]} a ${st.p[1]}. Cambio de lado.`;
      }
    } else if (st.isTB) {
      const srv = st.srvTeam;
      const a = st.p[srv];
      const b = st.p[1 - srv];
      text = a === b ? `${a} iguales` : `${a} a ${b}, saca ${playerLabel(m, st.srvTeam, st.srvPlayer)}`;
    } else {
      const srv = st.srvTeam;
      const dS = st.pointDisplay[srv];
      const dR = st.pointDisplay[1 - srv];
      const word = (v: string) => ({ '0': 'cero', '15': 'quince', '30': 'treinta', '40': 'cuarenta', '40 ★': 'cuarenta' }[v] || v);
      if (st.isStar) {
        text = 'Cuarenta iguales. Star Point, punto decisivo.';
      } else if (st.isGP) {
        text = 'Cuarenta iguales. Punto de oro.';
      } else if (dS.startsWith('40') && dR.startsWith('40')) {
        text = m.rules.deuceRule === 'star' && st.curDeuceCount === 2 ? 'Iguales. Segunda ventaja.' : 'Iguales.';
      } else if (dS === 'AD') {
        const vTxt = m.rules.deuceRule === 'star' && st.curAdvNumber === 2 ? 'Segunda ventaja' : 'Ventaja';
        text = `${vTxt} al saque, ${teamLabel(m, srv).replace(/·/g, ' y ')}.`;
      } else if (dR === 'AD') {
        const vTxt = m.rules.deuceRule === 'star' && st.curAdvNumber === 2 ? 'Segunda ventaja' : 'Ventaja';
        text = `${vTxt} al resto, ${teamLabel(m, 1 - srv).replace(/·/g, ' y ')}.`;
      } else if (dS === dR) {
        text = `${word(dS)} iguales.`;
      } else {
        text = `${word(dS)}, ${word(dR)}.`;
      }
      if (st.mp[0] || st.mp[1]) text += ' Punto de partido.';
      else if (st.sp[0] || st.sp[1]) text += ' Punto de set.';
      else if (st.isBP && !st.isGP) text += ' Bola de break.';
    }
    if (text) {
      isSpeakingTTS = true;
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'es-ES';
      u.rate = 1.05;
      const resumeMic = () => {
        setTimeout(() => {
          isSpeakingTTS = false;
        }, 280);
      };
      u.onend = resumeMic;
      u.onerror = resumeMic;
      setTimeout(resumeMic, 2800);
      window.speechSynthesis.speak(u);
    }
  } catch {}
}

export async function updateWakeLock(): Promise<void> {
  const { ui, activeMatch, prefs } = store;
  const isPlayingLocal = (ui.route === 'board' || ui.route === 'display') && activeMatch && activeMatch.status === 'playing';
  const isPlayingRemote = ui.route === 'live' && ui.liveMatch && ui.liveMatch.status === 'playing';
  const want = prefs.wakeLock && (isPlayingLocal || isPlayingRemote);
  if (!('wakeLock' in navigator)) return;
  try {
    if (want && !wakeLockSentinel) {
      wakeLockSentinel = await navigator.wakeLock.request('screen');
      wakeLockSentinel.addEventListener('release', () => {
        wakeLockSentinel = null;
      });
    } else if (!want && wakeLockSentinel) {
      await wakeLockSentinel.release();
      wakeLockSentinel = null;
    }
  } catch {}
}

function isInAppWebView(): boolean {
  return /Instagram|FBAN|FBAV|Line\/|MicroMessenger/i.test(navigator.userAgent || '');
}

function dispatchRecognizedSpeech(text: string): void {
  const clean = normVoiceStr(text);
  if (!clean) return;
  const now = Date.now();
  if (clean === lastProcessedCmd && now - lastProcessedAt < 1400) return;
  lastProcessedCmd = clean;
  lastProcessedAt = now;
  if (interimTimer) clearTimeout(interimTimer);
  lastInterimText = '';
  handleVoiceCommand(text);
}

export function startSpeechSession(): void {
  const SR = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
  if (!SR || !store.ui.voiceListening || store.ui.route !== 'board') return;
  try {
    if (!speechRec) {
      speechRec = new SR();
      speechRec.lang = 'es-AR';
      speechRec.continuous = true;
      speechRec.interimResults = true;
      speechRec.maxAlternatives = 3;

      speechRec.onresult = (ev: any) => {
        if (!store.activeMatch || store.ui.route !== 'board' || isSpeakingTTS) return;
        const last = ev.results[ev.results.length - 1];
        if (!last) return;
        const combined = Array.from(last as ArrayLike<{ transcript: string }>)
          .map((a) => a.transcript)
          .join(' ')
          .trim();
        if (!combined) return;

        if (last.isFinal) {
          dispatchRecognizedSpeech(combined);
        } else {
          lastInterimText = combined;
          if (interimTimer) clearTimeout(interimTimer);
          interimTimer = setTimeout(() => {
            if (lastInterimText) {
              const txt = lastInterimText;
              lastInterimText = '';
              dispatchRecognizedSpeech(txt);
            }
          }, 700);
        }
      };

      speechRec.onerror = (ev: any) => {
        const err = ev && ev.error ? ev.error : '';
        if (err === 'not-allowed' || err === 'service-not-allowed') {
          speechBlocked = true;
          store.ui.voiceListening = false;
          appHooks.render();
          showToast('Permiso de micrófono bloqueado en el navegador');
        }
      };

      speechRec.onend = () => {
        if (lastInterimText && !isSpeakingTTS) {
          const txt = lastInterimText;
          lastInterimText = '';
          dispatchRecognizedSpeech(txt);
        }
        if (store.ui.voiceListening && !speechBlocked && store.ui.route === 'board') {
          setTimeout(() => {
            if (store.ui.voiceListening && !speechBlocked && store.ui.route === 'board') {
              try {
                speechRec.start();
              } catch {}
            }
          }, 350);
        } else if (!store.ui.voiceListening || speechBlocked) {
          store.ui.voiceListening = false;
          appHooks.render();
        }
      };
    }

    try {
      speechRec.start();
    } catch {}
  } catch {
    store.ui.voiceListening = false;
    appHooks.render();
    showToast('No se pudo iniciar el micrófono');
  }
}

export function toggleVoiceControl(): void {
  const SR = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
  if (!SR) {
    showToast('Tu navegador no soporta control por voz');
    return;
  }
  if (store.ui.voiceListening) {
    store.ui.voiceListening = false;
    speechBlocked = false;
    if (interimTimer) clearTimeout(interimTimer);
    lastInterimText = '';
    if (speechRec) {
      try {
        speechRec.stop();
      } catch {}
    }
    showToast('Control por voz desactivado');
    appHooks.render();
    return;
  }

  if (isInAppWebView() && /Android/i.test(navigator.userAgent || '')) {
    showToast('Tip: tocá ••• → "Abrir en Chrome" para mejor reconocimiento de voz');
  }

  speechBlocked = false;
  store.ui.voiceListening = true;
  appHooks.render();
  showToast('🎤 Micrófono activo');
  startSpeechSession();
}

function normVoiceStr(s: string): string {
  return String(s || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim();
}

function findPlayerInCommand(cmd: string, m: Match): { team: number; playerIdx: number; name: string } | null {
  const c = normVoiceStr(cmd);
  if (!c) return null;

  if (/\bdrive\s*(2|dos)\b/.test(c)) return { team: 1, playerIdx: 0, name: playerLabel(m, 1, 0) };
  if (/\breves\s*(2|dos)\b/.test(c)) return { team: 1, playerIdx: 1, name: playerLabel(m, 1, 1) };
  if (/\bdrive\s*(1|uno)?\b/.test(c)) return { team: 0, playerIdx: 0, name: playerLabel(m, 0, 0) };
  if (/\breves\s*(1|uno)?\b/.test(c)) return { team: 0, playerIdx: 1, name: playerLabel(m, 0, 1) };
  if (/\bjugador\s*(1|uno)\b/.test(c)) return { team: 0, playerIdx: 0, name: playerLabel(m, 0, 0) };
  if (/\bjugador\s*(2|dos)\b/.test(c)) return { team: 0, playerIdx: 1, name: playerLabel(m, 0, 1) };
  if (/\bjugador\s*(3|tres)\b/.test(c)) return { team: 1, playerIdx: 0, name: playerLabel(m, 1, 0) };
  if (/\bjugador\s*(4|cuatro)\b/.test(c)) return { team: 1, playerIdx: 1, name: playerLabel(m, 1, 1) };

  const words = c.split(/\s+/);
  for (let t = 0; t < 2; t++) {
    for (let pi = 0; pi < 2; pi++) {
      const raw = m.teams[t].players[pi] || '';
      const fn = normVoiceStr(raw);
      if (!fn) continue;
      if (c.includes(fn)) return { team: t, playerIdx: pi, name: playerLabel(m, t, pi) };
      const parts = fn.split(/\s+/).filter((w) => w.length >= 3 && w !== 'jugador');
      for (const part of parts) {
        if (words.includes(part) || c.includes(part)) {
          return { team: t, playerIdx: pi, name: playerLabel(m, t, pi) };
        }
      }
    }
  }
  for (let t = 0; t < 2; t++) {
    for (let pi = 0; pi < 2; pi++) {
      const raw = m.teams[t].players[pi] || '';
      const first = normVoiceStr(raw).split(/\s+/)[0] || '';
      if (first.length >= 4 && first !== 'jugador') {
        const pref = first.slice(0, 4);
        if (words.some((w) => w.startsWith(pref))) {
          return { team: t, playerIdx: pi, name: playerLabel(m, t, pi) };
        }
      }
    }
  }
  return null;
}

function findTeamInCommand(cmd: string, m: Match): number | null {
  const c = normVoiceStr(cmd);
  const c0 = normVoiceStr(COLORS.find((x) => x.c === m.teams[0].color)?.n || 'dorado');
  const c1 = normVoiceStr(COLORS.find((x) => x.c === m.teams[1].color)?.n || 'azul');
  const isGold0 = m.teams[0].color === '#d4af37' && (c.includes('oro') || c.includes('amarillo'));
  const isGold1 = m.teams[1].color === '#d4af37' && (c.includes('oro') || c.includes('amarillo'));
  if (
    c.includes(c0) ||
    isGold0 ||
    c.includes('pareja 1') ||
    c.includes('pareja uno') ||
    c.includes('equipo 1') ||
    c.includes('equipo uno') ||
    c.includes('izquierda') ||
    c.includes('arriba') ||
    c.includes('nosotros')
  ) {
    return 0;
  }
  if (
    c.includes(c1) ||
    isGold1 ||
    c.includes('pareja 2') ||
    c.includes('pareja dos') ||
    c.includes('equipo 2') ||
    c.includes('equipo dos') ||
    c.includes('derecha') ||
    c.includes('abajo') ||
    c.includes('ellos')
  ) {
    return 1;
  }
  return null;
}

function setServerToPlayer(targetTeam: number, targetPlayer: number): void {
  const m = store.activeMatch;
  if (!m) return;
  const st = computeMatch(m);
  const rotIdx = st.totalGamesPlayed % 4;
  if (rotIdx % 2 === 0) {
    const pA1 = rotIdx === 0 ? targetPlayer : 1 - targetPlayer;
    m.firstServer = [targetTeam, pA1];
  } else {
    const prevP = m.firstServer ? m.firstServer[1] : 0;
    m.firstServer = [1 - targetTeam, prevP];
    const pB1 = rotIdx === 1 ? targetPlayer : 1 - targetPlayer;
    m.secondServerIdx = pB1;
  }
  store.ui.secondSrvPrompt = false;
  persistActive();
  appHooks.render();
  showToast(`🎤 Al saque: ${playerLabel(m, targetTeam, targetPlayer)}`);
}

export function handleVoiceCommand(rawCmd: string): void {
  const m = store.activeMatch;
  if (!m) return;
  const cmd = normVoiceStr(rawCmd);
  if (!cmd) return;
  const { ui } = store;

  if (cmd.includes('deshacer') || cmd.includes('atras') || cmd.includes('corregir')) {
    undoPoint();
    showToast('🎤 Punto deshecho');
    return;
  }
  if (cmd.includes('rehacer')) {
    redoPoint();
    showToast('🎤 Punto rehecho');
    return;
  }
  if (cmd.includes('cancelar') || cmd.includes('cerrar')) {
    if (ui.shotSheet || ui.menuOpen || ui.changeoverOverlay) {
      ui.shotSheet = null;
      ui.menuOpen = false;
      ui.changeoverOverlay = null;
      appHooks.render();
      return;
    }
  }
  if (ui.changeoverOverlay && (cmd.includes('continuar') || cmd.includes('reanudar') || cmd.includes('listo'))) {
    ui.changeoverOverlay = null;
    appHooks.render();
    return;
  }
  if (
    cmd.includes('cambio de lado') ||
    cmd.includes('cambiar de lado') ||
    cmd.includes('cambiar lado') ||
    cmd === 'lado' ||
    cmd === 'lados'
  ) {
    flipSides();
    showToast('🎤 Lados cambiados');
    return;
  }

  const st = computeMatch(m);
  if (cmd.includes('doble falta')) {
    m.pendingFault = false;
    showToast(`🎤 Doble falta de ${playerLabel(m, st.srvTeam, st.srvPlayer)}`);
    scorePoint(1 - st.srvTeam, 'df', [st.srvTeam, st.srvPlayer]);
    return;
  }
  if (cmd.includes('falta') || cmd.includes('segundo saque')) {
    recordFault();
    return;
  }

  const isServeAssignCmd = /\b(saca|saque|sirve|sacador|servir)\b/.test(cmd);
  if (ui.secondSrvPrompt || isServeAssignCmd) {
    const pl = findPlayerInCommand(cmd, m);
    if (ui.secondSrvPrompt) {
      const tB = 1 - m.firstServer[0];
      if (pl && pl.team === tB) {
        m.secondServerIdx = pl.playerIdx;
        ui.secondSrvPrompt = false;
        persistActive();
        appHooks.render();
        showToast(`🎤 Al saque: ${pl.name}`);
        return;
      }
      if (pl) {
        setServerToPlayer(pl.team, pl.playerIdx);
        return;
      }
      if (cmd.includes('uno') || cmd.includes('primer')) {
        m.secondServerIdx = 0;
        ui.secondSrvPrompt = false;
        persistActive();
        appHooks.render();
        showToast(`🎤 Al saque: ${playerLabel(m, tB, 0)}`);
        return;
      }
      if (cmd.includes('dos') || cmd.includes('segund')) {
        m.secondServerIdx = 1;
        ui.secondSrvPrompt = false;
        persistActive();
        appHooks.render();
        showToast(`🎤 Al saque: ${playerLabel(m, tB, 1)}`);
        return;
      }
      return;
    }

    if (pl) {
      const isNextKeyword = cmd.includes('siguiente') || cmd.includes('proximo') || cmd.includes('despues');
      if (isNextKeyword && pl.team === 1 - m.firstServer[0] && st.totalGamesPlayed === 0) {
        m.secondServerIdx = pl.playerIdx;
        persistActive();
        appHooks.render();
        showToast(`🎤 Próximo saque (${teamLabel(m, pl.team)}): ${pl.name}`);
        return;
      }
      setServerToPlayer(pl.team, pl.playerIdx);
      return;
    }
    const nextPi = 1 - st.srvPlayer;
    setServerToPlayer(st.srvTeam, nextPi);
    return;
  }

  const isUE =
    cmd.includes('no forzado') ||
    cmd.includes('error no') ||
    cmd.includes('fallo') ||
    cmd.includes('afuera') ||
    cmd.includes('a la red') ||
    cmd.includes('en la red') ||
    cmd.includes('al cristal') ||
    cmd.includes('a la reja') ||
    (cmd.includes('error') && !cmd.includes('forzado'));
  const isFE = !isUE && cmd.includes('forzado');
  const isWinner =
    !isUE &&
    !isFE &&
    (cmd.includes('winner') ||
      cmd.includes('ganador') ||
      cmd.includes('smash') ||
      cmd.includes('remate') ||
      cmd.includes('por tres') ||
      cmd.includes('por 3') ||
      cmd.includes('por cuatro') ||
      cmd.includes('por 4') ||
      cmd.includes('bajada') ||
      cmd.includes('volea') ||
      cmd.includes('bandeja') ||
      cmd.includes('vibora') ||
      cmd.includes('dejada') ||
      cmd.includes('chiquita') ||
      cmd.includes('passing') ||
      cmd.includes('globo'));

  function detectSpecificWinnerShot(str: string): string {
    if (
      str.includes('smash') ||
      str.includes('remate') ||
      str.includes('por tres') ||
      str.includes('por 3') ||
      str.includes('por cuatro') ||
      str.includes('por 4')
    ) {
      return 'smash';
    }
    if (str.includes('volea')) return 'volea';
    if (str.includes('bandeja') || str.includes('vibora') || str.includes('víbora')) return 'bandeja';
    if (str.includes('bajada')) return 'bajada';
    if (str.includes('dejada') || str.includes('chiquita')) return 'dejada';
    if (str.includes('passing') || str.includes('paralelo')) return 'passing';
    if (str.includes('globo')) return 'globo';
    return 'winner';
  }

  const SHOT_NAMES: Record<string, string> = {
    smash: 'Smash',
    volea: 'Volea',
    bandeja: 'Bandeja',
    bajada: 'Bajada de pared',
    dejada: 'Dejada',
    passing: 'Passing',
    globo: 'Globo',
    winner: 'Winner'
  };

  if (isUE || isFE) {
    const sType = isUE ? 'ue' : 'fe';
    const sLabel = isUE ? 'Error no forzado' : 'Error forzado';
    const errMatch = cmd.match(/(?:no forzado|forzado|error|fallo|red|cristal|reja|afuera)(.*)$/);
    const plAfter = errMatch && errMatch[1] ? findPlayerInCommand(errMatch[1], m) : null;
    const pl = plAfter || findPlayerInCommand(cmd, m);

    if (pl) {
      const winTeam = 1 - pl.team;
      showToast(`🎤 ${sLabel} de ${pl.name} → Punto ${teamLabel(m, winTeam)}`);
      scorePoint(winTeam, sType, [pl.team, pl.playerIdx]);
      return;
    }
    if (ui.shotSheet) {
      const w = ui.shotSheet.team;
      const l = 1 - w;
      const pi = cmd.includes('dos') || cmd.includes('segund') ? 1 : 0;
      const errName = playerLabel(m, l, pi);
      showToast(`🎤 ${sLabel} de ${errName}`);
      scorePoint(w, sType, [l, pi]);
      return;
    }
    const tmErr = findTeamInCommand(cmd, m);
    if (tmErr !== null) {
      const winTeam = 1 - tmErr;
      showToast(`🎤 ${sLabel} de ${teamLabel(m, tmErr)} → Punto ${teamLabel(m, winTeam)}`);
      scorePoint(winTeam, sType, [tmErr, 0]);
      return;
    }
    showToast(`🎤 Decí el jugador: "${sLabel.toLowerCase()} de [nombre]"`);
    return;
  }

  if (isWinner) {
    const subShot = detectSpecificWinnerShot(cmd);
    const subLabel = SHOT_NAMES[subShot] || 'Winner';
    const winMatch = cmd.match(
      /(?:winner|ganador|smash|remate|volea|bandeja|vibora|bajada|dejada|chiquita|passing|globo)(.*)$/
    );
    const plAfter = winMatch && winMatch[1] ? findPlayerInCommand(winMatch[1], m) : null;
    const pl = plAfter || findPlayerInCommand(cmd, m);
    if (pl) {
      showToast(`🎤 ${subLabel} de ${pl.name}`);
      scorePoint(pl.team, 'winner', [pl.team, pl.playerIdx], subShot);
      return;
    }
    if (ui.shotSheet) {
      const w = ui.shotSheet.team;
      const pi = cmd.includes('dos') || cmd.includes('segund') ? 1 : 0;
      const wName = playerLabel(m, w, pi);
      showToast(`🎤 ${subLabel} de ${wName}`);
      scorePoint(w, 'winner', [w, pi], subShot);
      return;
    }
    const tmWin = findTeamInCommand(cmd, m);
    if (tmWin !== null) {
      showToast(`🎤 ${subLabel} de ${teamLabel(m, tmWin)}`);
      scorePoint(tmWin, 'winner', [tmWin, 0], subShot);
      return;
    }
  }

  if (ui.shotSheet) {
    const w = ui.shotSheet.team;
    if (cmd.includes('rapido') || cmd.includes('sin detalle') || cmd.includes('normal')) {
      scorePoint(w, 'pt', null);
      return;
    }
    const pl = findPlayerInCommand(cmd, m);
    if (pl) {
      if (pl.team === w) {
        const subShot = detectSpecificWinnerShot(cmd);
        const subLabel = SHOT_NAMES[subShot] || 'Winner';
        showToast(`🎤 ${subLabel} de ${pl.name}`);
        scorePoint(w, 'winner', [w, pl.playerIdx], subShot);
      } else {
        showToast(`🎤 Error no forzado de ${pl.name}`);
        scorePoint(w, 'ue', [pl.team, pl.playerIdx]);
      }
      return;
    }
  }

  const plDirect = findPlayerInCommand(cmd, m);
  if (plDirect) {
    showToast(`🎤 Punto (Winner) de ${plDirect.name}`);
    scorePoint(plDirect.team, 'winner', [plDirect.team, plDirect.playerIdx]);
    return;
  }

  const tmDirect = findTeamInCommand(cmd, m);
  if (tmDirect !== null) {
    showToast(`🎤 Punto ${teamLabel(m, tmDirect)}`);
    scorePoint(tmDirect, 'pt', null);
    return;
  }
  if (cmd.includes('uno')) {
    scorePoint(0, 'pt', null);
    return;
  }
  if (cmd.includes('dos')) {
    scorePoint(1, 'pt', null);
    return;
  }
  showToast(`🎤 Escuché: "${rawCmd.trim()}"`);
}
