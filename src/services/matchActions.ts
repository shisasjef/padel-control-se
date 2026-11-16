import { fmtClock, playerLabel, teamLabel } from '../core/utils';
import { computeMatch, createMatchFromPreset } from '../engines/matchEngine';
import { appHooks, showToast } from '../state/runtime';
import { archiveMatchToHistory, getCompById, LS_PRESET, persistActive, saveJSON, store } from '../state/store';
import { playTone, speakScore, vibrate } from './audioVoice';

export function onTapTeam(team: number): void {
  const m = store.activeMatch;
  if (!m || m.status !== 'playing') return;
  const st = computeMatch(m);
  if (st.matchWinner !== null) return;
  if (m.shotPrompt) {
    store.ui.shotSheet = { team };
    appHooks.render();
  } else {
    scorePoint(team, 'pt', null);
  }
}

export function scorePoint(
  team: number,
  shotType = 'pt',
  byPlayer: number[] | null = null,
  subType: string | null = null
): void {
  const m = store.activeMatch;
  if (!m) return;
  const stBefore = computeMatch(m);
  if (stBefore.matchWinner !== null) return;

  const fs = !m.pendingFault;
  m.pendingFault = false;
  m.redoStack = [];
  m.events.push({
    w: team,
    type: shotType,
    by: byPlayer,
    fs,
    sub: subType || null
  });
  store.ui.shotSheet = null;

  const stAfter = computeMatch(m);
  const tr = stAfter.lastTransition;

  if (tr) {
    if (tr.type === 'match') {
      m.status = 'finished';
      store.ui.matchEndDismissed = false;
      archiveMatchToHistory(m);
      playTone('match');
      vibrate([100, 60, 100, 60, 220]);
    } else if (tr.type === 'set') {
      playTone('set');
      vibrate([90, 50, 140]);
      const setIdx = tr.setIdx ?? 0;
      const setG = stAfter.sets[setIdx].games;
      if (tr.changeover) m.flipped = !m.flipped;
      if (store.prefs.changeoverAlerts) {
        store.ui.changeoverOverlay = {
          title: tr.changeover ? `FIN DEL SET ${setIdx + 1} · CAMBIO DE LADO` : `FIN DEL SET ${setIdx + 1}`,
          sub: `${teamLabel(m, tr.winner ?? 0)} ganó el set ${setG[0]}-${setG[1]}`,
          secondsLeft: 120
        };
      }
    } else if (tr.type === 'game') {
      playTone('game');
      vibrate([80, 50, 80]);
      if (tr.changeover) {
        m.flipped = !m.flipped;
        if (store.prefs.changeoverAlerts) {
          const g = stAfter.curSet.games;
          store.ui.changeoverOverlay = {
            title: 'CAMBIO DE LADO',
            sub: `Marcador del set: ${g[0]} - ${g[1]}`,
            secondsLeft: Number(store.prefs.changeoverTimer) || 90
          };
        }
      }
      if (tr.needSecondServerPrompt) {
        store.ui.secondSrvPrompt = true;
      }
    } else if (tr.type === 'tb_changeover') {
      playTone('game');
      vibrate([70, 50, 70]);
      m.flipped = !m.flipped;
      if (store.prefs.changeoverAlerts) {
        const tb = tr.tbScore || [0, 0];
        store.ui.changeoverOverlay = {
          title: 'CAMBIO DE LADO (TIE-BREAK)',
          sub: `Tie-break: ${tb[0]} - ${tb[1]}`,
          secondsLeft: 20
        };
      }
    }
  } else {
    playTone('point');
    vibrate(35);
  }

  persistActive();
  appHooks.render();
  speakScore(m, stAfter);

  requestAnimationFrame(() => {
    const halfEl = document.querySelector(`.half[data-team="${team}"]`);
    if (halfEl) {
      halfEl.classList.add('flash');
      setTimeout(() => halfEl.classList.remove('flash'), 550);
    }
  });
}

export function recordFault(): void {
  const m = store.activeMatch;
  if (!m || m.status !== 'playing') return;
  const st = computeMatch(m);
  if (st.matchWinner !== null) return;

  if (!m.pendingFault) {
    m.pendingFault = true;
    playTone('fault');
    vibrate(45);
    showToast(`2º saque · ${playerLabel(m, st.srvTeam, st.srvPlayer)}`);
    persistActive();
    appHooks.render();
  } else {
    const srvTeam = st.srvTeam;
    const srvPlayer = st.srvPlayer;
    m.pendingFault = false;
    showToast(`Doble falta de ${playerLabel(m, srvTeam, srvPlayer)}`);
    scorePoint(1 - srvTeam, 'df', [srvTeam, srvPlayer]);
  }
}

export function undoPoint(): void {
  const m = store.activeMatch;
  if (!m) return;
  if (m.pendingFault) {
    m.pendingFault = false;
    playTone('undo');
    persistActive();
    appHooks.render();
    return;
  }
  if (!m.events.length) return;
  const ev = m.events.pop()!;
  m.redoStack = m.redoStack || [];
  m.redoStack.push(ev);
  if (m.status === 'finished') m.status = 'playing';
  store.ui.changeoverOverlay = null;
  store.ui.secondSrvPrompt = false;
  playTone('undo');
  vibrate(30);
  persistActive();
  appHooks.render();
}

export function redoPoint(): void {
  const m = store.activeMatch;
  if (!m || !m.redoStack || !m.redoStack.length) return;
  const ev = m.redoStack.pop()!;
  m.events.push(ev);
  const stAfter = computeMatch(m);
  if (stAfter.matchWinner !== null) {
    m.status = 'finished';
    archiveMatchToHistory(m);
  }
  playTone('point');
  persistActive();
  appHooks.render();
}

export function flipSides(): void {
  const m = store.activeMatch;
  if (!m) return;
  m.flipped = !m.flipped;
  persistActive();
  appHooks.render();
}

export function finishMatchEarly(): void {
  const m = store.activeMatch;
  if (!m) return;
  const st = computeMatch(m);
  m.status = st.matchWinner !== null ? 'finished' : 'abandoned';
  archiveMatchToHistory(m);
  appHooks.publishLiveMatchState(m, true);
  const finishedId = m.id;
  store.activeMatch = null;
  persistActive();
  store.ui.menuOpen = false;
  store.ui.statsId = finishedId;
  store.ui.statsSetFilter = 'all';
  appHooks.navigate('stats');
  showToast('Partido guardado en el historial');
}

export function startNewMatch(): void {
  const p = store.preset;
  const kind = p.matchContext || 'daily';
  const comp = (kind === 'league' || kind === 'tournament') && p.compId ? getCompById(p.compId) : null;
  store.activeMatch = createMatchFromPreset(p, comp);
  store.preset.fixtureId = '';
  saveJSON(LS_PRESET, store.preset);
  persistActive();
  store.ui.shotSheet = null;
  store.ui.changeoverOverlay = null;
  store.ui.secondSrvPrompt = false;
  store.ui.matchEndDismissed = false;
  appHooks.navigate('board');
}

export function startMatchClockTimer(): void {
  let lastTickAt = Date.now();
  setInterval(() => {
    const now = Date.now();
    const dt = Math.min(2500, Math.max(0, now - lastTickAt));
    lastTickAt = now;
    const { ui, activeMatch } = store;

    if (
      activeMatch &&
      activeMatch.status === 'playing' &&
      (ui.route === 'board' || ui.route === 'obs' || ui.route === 'display') &&
      !ui.changeoverOverlay
    ) {
      activeMatch.durationMs = (activeMatch.durationMs || 0) + dt;
      const clkEl = document.getElementById('sb-clock-val');
      if (clkEl) clkEl.textContent = fmtClock(activeMatch.durationMs);
    } else if ((ui.route === 'live' || ui.route === 'obs') && ui.liveMatch && ui.liveMatch.status === 'playing') {
      ui.liveMatch.durationMs = (ui.liveMatch.durationMs || 0) + dt;
      const clkEl = document.getElementById('sb-clock-val');
      if (clkEl) clkEl.textContent = fmtClock(ui.liveMatch.durationMs);
    }

    if (ui.changeoverOverlay && ui.changeoverOverlay.secondsLeft > 0) {
      ui.changeoverOverlay.secondsLeft = Math.max(0, ui.changeoverOverlay.secondsLeft - 1);
      const cdEl = document.getElementById('co-countdown');
      if (cdEl) cdEl.textContent = `${ui.changeoverOverlay.secondsLeft}s`;
      if (ui.changeoverOverlay.secondsLeft === 0) {
        playTone('game');
        vibrate([120, 80, 120]);
      }
    }
  }, 1000);
}
