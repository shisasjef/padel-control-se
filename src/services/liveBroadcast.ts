import {
  cleanLiveTopic,
  decodeMatchShare,
  decodeRankingPayload,
  encodeMatchShare,
  encodeRankingPayloadPure,
  matchStateSignature,
  shortMatchCode
} from '../codecs/shareCodec';
import { fmtDateLong, fmtDurationLong, getDateKey, getMatchKind, pct, teamLabel } from '../core/utils';
import {
  assignPlayerRanks,
  computeScopeStandings,
  getCompSubtitle,
  getEloLevel,
  isProyectoPadelComp,
  sortStandingsRows
} from '../engines/eloEngine';
import { computeMatch } from '../engines/matchEngine';
import { computeStats } from '../engines/statsEngine';
import { appHooks, showToast } from '../state/runtime';
import {
  getCompById,
  getCompetitionMatches,
  getCompetitionScoringConfig,
  getSyncServerBaseUrl,
  loadJSON,
  saveJSON,
  store
} from '../state/store';
import type { Competition, Match, RankingContext, SharedRanking, StandingRow } from '../types';
import { playTone, speakScore, updateWakeLock, vibrate } from './audioVoice';

let livePubTimer: ReturnType<typeof setTimeout> | null = null;
let livePubRetryTimer: ReturnType<typeof setTimeout> | null = null;
let liveEvtSource: EventSource | null = null;
let livePollTimer: ReturnType<typeof setInterval> | null = null;
let livePollBusy = false;
let liveLastPollAt = 0;
let liveLastMsgTime = 0;
let livePollBackoffUntil = 0;
let lastPublishedSig = '';
let lastAppliedSig = '';
let livePubInFlight = false;
let livePubQueued = false;
let livePubLastSentAt = 0;
let livePubRetryCount = 0;
let livePubBackoffUntil = 0;
let livePubTargetMatch: Match | null = null;

export function hasOpenLiveEventSource(): boolean {
  return !!(liveEvtSource && liveEvtSource.readyState !== 2);
}

export function getLastAppliedLiveSig(): string {
  return lastAppliedSig;
}

function scheduleLivePublishRetry(retryAfterSec = 0): void {
  livePubRetryCount++;
  const backoff =
    retryAfterSec > 0
      ? Math.min(20000, retryAfterSec * 1000)
      : Math.min(12000, Math.round(1400 * Math.pow(1.6, livePubRetryCount - 1)));
  livePubBackoffUntil = Date.now() + backoff;
  livePubInFlight = false;
  if (livePubRetryTimer) clearTimeout(livePubRetryTimer);
  livePubRetryTimer = setTimeout(() => {
    flushLiveMatchPublish(false);
  }, backoff);
}

export async function flushLiveMatchPublish(force = false): Promise<boolean> {
  if (livePubInFlight) {
    livePubQueued = true;
    return false;
  }
  const m = livePubTargetMatch || store.activeMatch;
  if (!m || !m.id) return false;
  const sig = matchStateSignature(m);
  if (!force && sig && sig === lastPublishedSig) {
    livePubQueued = false;
    return true;
  }
  const b64 = encodeMatchShare(m);
  if (!b64) return false;

  livePubInFlight = true;
  livePubQueued = false;
  if (livePubRetryTimer) clearTimeout(livePubRetryTimer);
  const topic = cleanLiveTopic(m.id);

  try {
    const res = await fetch(`${getSyncServerBaseUrl()}/${topic}`, {
      method: 'POST',
      body: b64
    });
    if (res && res.ok) {
      lastPublishedSig = sig;
      livePubLastSentAt = Date.now();
      livePubRetryCount = 0;
      livePubBackoffUntil = 0;
      livePubInFlight = false;
      const latest = livePubTargetMatch || store.activeMatch;
      if (latest && (livePubQueued || (latest.id === m.id && matchStateSignature(latest) !== lastPublishedSig))) {
        publishLiveMatchState(latest, false);
      }
      return true;
    }
    const retryHdr = Number(res?.headers?.get?.('Retry-After')) || 0;
    scheduleLivePublishRetry(retryHdr);
    return false;
  } catch {
    scheduleLivePublishRetry(0);
    return false;
  }
}

export function publishLiveMatchState(m: Match, immediate = false, force = false): void {
  if (!m || !m.id) return;
  if (livePubTargetMatch && livePubTargetMatch.id !== m.id) {
    lastPublishedSig = '';
    livePubRetryCount = 0;
    livePubBackoffUntil = 0;
  }
  if (force) lastPublishedSig = '';
  livePubTargetMatch = m;
  const sig = matchStateSignature(m);
  if (!force && !immediate && sig && sig === lastPublishedSig) return;

  if (livePubTimer) clearTimeout(livePubTimer);
  const now = Date.now();
  if (immediate && !livePubInFlight && (force || now >= livePubBackoffUntil)) {
    flushLiveMatchPublish(force);
    return;
  }
  const elapsed = now - livePubLastSentAt;
  const backoffWait = Math.max(0, livePubBackoffUntil - now);
  const delay = Math.max(backoffWait, immediate ? 80 : Math.max(260, 650 - elapsed));
  livePubTimer = setTimeout(() => flushLiveMatchPublish(force), delay);
}

export function canUseMobileWebShare(): boolean {
  if (typeof navigator === 'undefined' || typeof navigator.share !== 'function') return false;
  const uaData = (navigator as Navigator & { userAgentData?: { mobile?: boolean } }).userAgentData;
  if (uaData && typeof uaData.mobile === 'boolean') {
    if (!uaData.mobile) return false;
  }
  const ua = navigator.userAgent || '';
  if (/Windows|Win32|Win64|CrOS|X11/i.test(ua)) return false;
  if (/Linux/i.test(ua) && !/Android/i.test(ua)) return false;
  return /Android|iPhone|iPad|iPod/i.test(ua) || (/Macintosh/i.test(ua) && (navigator.maxTouchPoints || 0) > 1);
}

export async function shareOrCopyText(opts: {
  title?: string;
  text: string;
  url?: string;
  copyText?: string;
  toastMsg?: string;
  promptMsg?: string;
}): Promise<boolean> {
  const { title, text, url, copyText, toastMsg, promptMsg } = opts;
  if (canUseMobileWebShare()) {
    try {
      const payload: ShareData = { title, text };
      if (url) payload.url = url;
      await navigator.share(payload);
      return true;
    } catch {}
  }
  const finalText = copyText != null ? copyText : url ? `${text}\n${url}` : text;
  if (navigator.clipboard && navigator.clipboard.writeText) {
    try {
      await navigator.clipboard.writeText(finalText);
      showToast(toastMsg || 'Enlace copiado al portapapeles');
      return true;
    } catch {}
  }
  prompt(promptMsg || 'Copiá este texto para compartir:', finalText);
  return false;
}

export async function shareLiveMatchLink(m: Match | null | undefined): Promise<void> {
  if (!m) return;
  publishLiveMatchState(m, true, true);
  const code = shortMatchCode(m.id);
  const baseUrl = location.href.split('#')[0];
  const url = `${baseUrl}#v=${code}`;
  const playersLine = `${teamLabel(m, 0)} vs ${teamLabel(m, 1)}`;
  const waText = `🎾 *Seguí mi partido en vivo:*\n*${playersLine}*\n${url}`;
  await shareOrCopyText({
    title: `🎾 Seguí mi partido en vivo · ${playersLine}`,
    text: `🎾 Seguí mi partido en vivo: ${playersLine}`,
    url,
    copyText: waText,
    toastMsg: '📡 Invitación corta EN VIVO copiada para pegar en WhatsApp',
    promptMsg: 'Copiá este mensaje para compartir el partido en vivo:'
  });
}

export function applyIncomingLiveSnapshot(b64: string, isInitial = false): void {
  const incoming = decodeMatchShare(b64);
  if (!incoming || !incoming.teams) return;
  const { ui } = store;
  if (ui.liveId && incoming.id && shortMatchCode(incoming.id) !== shortMatchCode(ui.liveId)) return;

  const prev = ui.liveMatch;
  if (prev && prev.id === incoming.id && (incoming._ts || 0) > 0 && (prev._ts || 0) > 0 && (incoming._ts || 0) < (prev._ts || 0)) {
    return;
  }

  const sig = matchStateSignature(incoming);
  const prevSig = matchStateSignature(prev);

  if (prev && sig === prevSig) {
    if (incoming.durationMs > (prev.durationMs || 0)) {
      prev.durationMs = incoming.durationMs;
    }
    if ((incoming._ts || 0) > (prev._ts || 0)) {
      prev._ts = incoming._ts;
    }
    return;
  }

  const prevLen = prev && prev.events ? prev.events.length : null;
  const newLen = incoming.events ? incoming.events.length : 0;
  const prevFault = prev ? !!prev.pendingFault : false;

  ui.liveMatch = incoming;
  lastAppliedSig = sig;

  if (!isInitial && prev !== null) {
    if (prevLen !== null && newLen > prevLen) {
      const stAfter = computeMatch(incoming);
      const lastEv = incoming.events[newLen - 1];
      const tr = stAfter.lastTransition;
      if (tr) {
        if (tr.type === 'match') {
          ui.matchEndDismissed = false;
          playTone('match');
          vibrate([100, 60, 100, 60, 220]);
        } else if (tr.type === 'set') {
          playTone('set');
          vibrate([90, 50, 140]);
        } else if (tr.type === 'game' || tr.type === 'tb_changeover') {
          playTone('game');
          vibrate([80, 50, 80]);
        }
      } else {
        playTone('point');
        vibrate(35);
      }
      speakScore(incoming, stAfter);
      if (lastEv && (lastEv.w === 0 || lastEv.w === 1)) {
        requestAnimationFrame(() => {
          const halfEl = document.querySelector(`.half[data-team="${lastEv.w}"]`);
          if (halfEl) {
            halfEl.classList.add('flash');
            setTimeout(() => halfEl.classList.remove('flash'), 550);
          }
        });
      }
    } else if (prevLen !== null && newLen < prevLen) {
      playTone('undo');
    } else if (incoming.pendingFault && !prevFault) {
      playTone('fault');
    }
  }

  if (ui.route === 'live' || ui.route === 'obs' || (ui.route === 'stats' && ui.statsId === 'live')) {
    appHooks.render();
  }
}

export async function pollLiveChannelOnce(topic: string, forceFull = false): Promise<void> {
  if (!topic || livePollBusy) return;
  const now = Date.now();
  if (!forceFull && now < livePollBackoffUntil) return;
  livePollBusy = true;
  liveLastPollAt = now;
  const sinceParam = !forceFull && liveLastMsgTime > 0 ? String(Math.max(0, liveLastMsgTime - 3)) : '12h';
  try {
    const res = await fetch(`${getSyncServerBaseUrl()}/${topic}/json?poll=1&since=${encodeURIComponent(sinceParam)}`, {
      cache: 'no-store'
    });
    if (res.status === 429) {
      livePollBackoffUntil = Date.now() + 10000;
      return;
    }
    if (!res.ok) return;
    const txt = await res.text();
    const lines = txt.trim().split('\n').filter(Boolean);
    let latestMsg: string | null = null;
    for (const line of lines) {
      try {
        const obj = JSON.parse(line);
        if (obj && obj.time) liveLastMsgTime = Math.max(liveLastMsgTime, Number(obj.time) || 0);
        if (obj && obj.event === 'message' && obj.message) {
          latestMsg = obj.message;
        }
      } catch {}
    }
    if (latestMsg) {
      applyIncomingLiveSnapshot(latestMsg, false);
    }
  } catch {} finally {
    livePollBusy = false;
  }
}

export function openLiveEventSource(topic: string): void {
  if (!topic || !('EventSource' in window)) return;
  if (liveEvtSource) {
    try {
      liveEvtSource.close();
    } catch {}
    liveEvtSource = null;
  }
  try {
    liveEvtSource = new EventSource(`${getSyncServerBaseUrl()}/${topic}/sse`);
    liveEvtSource.onopen = () => {
      store.ui.liveConnected = true;
      pollLiveChannelOnce(topic);
    };
    liveEvtSource.onmessage = (ev) => {
      try {
        const data = JSON.parse(ev.data);
        if (data && data.time) liveLastMsgTime = Math.max(liveLastMsgTime, Number(data.time) || 0);
        if (data && (data.event === 'message' || !data.event) && data.message) {
          store.ui.liveConnected = true;
          applyIncomingLiveSnapshot(data.message, false);
        }
      } catch {}
    };
    liveEvtSource.onerror = () => {
      store.ui.liveConnected = false;
    };
  } catch {}
}

export function connectLiveSpectator(rawParam: string): void {
  const cleanRaw = String(rawParam || '').trim();
  if (!cleanRaw) return;
  const dotIdx = cleanRaw.indexOf('.');
  const matchId = decodeURIComponent(dotIdx >= 0 ? cleanRaw.slice(0, dotIdx) : cleanRaw);
  const initialSnap = dotIdx >= 0 ? cleanRaw.slice(dotIdx + 1) : '';
  const { ui } = store;

  const isSameChannel = ui.liveId === matchId && liveEvtSource && liveEvtSource.readyState !== 2;
  ui.liveId = matchId;
  if (ui.route !== 'obs') ui.route = 'live';

  if (initialSnap && !ui.liveMatch) {
    applyIncomingLiveSnapshot(initialSnap, true);
  }
  appHooks.render();
  updateWakeLock();

  if (isSameChannel) return;

  disconnectLiveStreamOnly();
  const topic = cleanLiveTopic(matchId);

  pollLiveChannelOnce(topic, true);
  openLiveEventSource(topic);

  livePollTimer = setInterval(() => {
    if (!store.ui.liveId) return;
    if (document.hidden && store.ui.route !== 'obs') return;
    if (liveEvtSource && liveEvtSource.readyState === 2) {
      openLiveEventSource(topic);
    }
    const elapsed = Date.now() - liveLastPollAt;
    if (store.ui.liveConnected && elapsed < 24000) return;
    pollLiveChannelOnce(topic);
  }, 3500);
}

export function disconnectLiveStreamOnly(): void {
  if (liveEvtSource) {
    try {
      liveEvtSource.close();
    } catch {}
    liveEvtSource = null;
  }
  if (livePollTimer) {
    clearInterval(livePollTimer);
    livePollTimer = null;
  }
  livePollBusy = false;
  liveLastPollAt = 0;
  liveLastMsgTime = 0;
  livePollBackoffUntil = 0;
  store.ui.liveConnected = false;
}

export function disconnectLiveSpectator(): void {
  disconnectLiveStreamOnly();
  store.ui.liveId = null;
  store.ui.liveMatch = null;
  if (location.hash.startsWith('#live=') || location.hash.startsWith('#v=')) {
    history.replaceState(null, '', location.pathname + location.search);
  }
}

export async function openShortSharedMatch(rawCode: string): Promise<void> {
  const code = shortMatchCode(rawCode);
  const topic = cleanLiveTopic(code);
  try {
    const res = await fetch(`${getSyncServerBaseUrl()}/${topic}/json?poll=1&since=12h`, { cache: 'no-store' });
    if (res.ok) {
      const txt = await res.text();
      const lines = txt.trim().split('\n').filter(Boolean);
      let latestMsg: string | null = null;
      for (const line of lines) {
        try {
          const obj = JSON.parse(line);
          if (obj && obj.event === 'message' && obj.message) latestMsg = obj.message;
        } catch {}
      }
      if (latestMsg) {
        const m = decodeMatchShare(latestMsg);
        if (m) {
          store.ui.sharedMatch = m;
          store.ui.statsId = 'shared';
          store.ui.route = 'stats';
          appHooks.render();
          return;
        }
      }
    }
  } catch {}
  showToast('No se encontró el partido compartido o expiró');
}

export async function shareMatchLink(m: Match | null | undefined): Promise<void> {
  if (!m) return;
  publishLiveMatchState(m, true, true);
  const code = shortMatchCode(m.id);
  const baseUrl = location.href.split('#')[0];
  const url = `${baseUrl}#s=${code}`;
  const playersLine = `${teamLabel(m, 0)} vs ${teamLabel(m, 1)}`;
  const waText = `🏆 *Resultado y estadísticas del partido:*\n*${playersLine}*\n${url}`;
  await shareOrCopyText({
    title: `🏆 Estadísticas: ${playersLine}`,
    text: `🏆 Resultado y estadísticas del partido: ${playersLine}`,
    url,
    copyText: waText,
    toastMsg: 'Enlace corto del partido copiado al portapapeles',
    promptMsg: 'Copiá este enlace para compartir el partido:'
  });
}

export function triggerBlobDownload(blob: Blob, filename: string): void {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body?.appendChild?.(a);
  a.click();
  a.remove?.();
  if (typeof URL.revokeObjectURL === 'function') {
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
}

export function roundRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number,
  fill: string
): void {
  ctx.beginPath();
  if (ctx.roundRect) ctx.roundRect(x, y, w, h, r);
  else ctx.rect(x, y, w, h);
  ctx.fillStyle = fill;
  ctx.fill();
}

function drawBottomSignatureWatermark(ctx: CanvasRenderingContext2D, W: number, baselineY: number): void {
  ctx.save();
  const labelText = 'PÁDEL CONTROL SÉ  ·  BY';
  const sigText = 'Sairaf Engel';

  ctx.font = '600 18px Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  const labelWidth = ctx.measureText(labelText).width;

  ctx.font = '42px "Great Vibes", cursive';
  const sigWidth = ctx.measureText(sigText).width;

  const gap = 16;
  const totalWidth = labelWidth + gap + sigWidth;
  const startX = Math.round((W - totalWidth) / 2);

  ctx.textAlign = 'left';
  ctx.textBaseline = 'middle';

  ctx.fillStyle = '#a39e93';
  ctx.font = '600 18px Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  ctx.fillText(labelText, startX, baselineY);

  ctx.fillStyle = '#ffe58f';
  ctx.font = '42px "Great Vibes", cursive';
  ctx.fillText(sigText, startX + labelWidth + gap, baselineY - 2);

  const lineY = baselineY + 22;
  const lineGrad = ctx.createLinearGradient(startX + 20, lineY, startX + totalWidth - 20, lineY);
  lineGrad.addColorStop(0, 'rgba(212, 175, 55, 0)');
  lineGrad.addColorStop(0.5, 'rgba(212, 175, 55, 0.4)');
  lineGrad.addColorStop(1, 'rgba(212, 175, 55, 0)');
  ctx.strokeStyle = lineGrad;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(startX + 20, lineY);
  ctx.lineTo(startX + totalWidth - 20, lineY);
  ctx.stroke();

  ctx.restore();
}

export async function exportMatchSummaryImage(m: Match): Promise<void> {
  if (document.fonts && document.fonts.ready) {
    try {
      await document.fonts.ready;
    } catch {}
  }
  const stats = computeStats(m, 'all');
  const st = stats.st;
  const T = stats.T;
  const W = 1080;
  const H = 1400;
  const canvas = document.createElement('canvas');
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const grad = ctx.createLinearGradient(0, 0, 0, H);
  grad.addColorStop(0, '#050507');
  grad.addColorStop(0.5, '#0c0c10');
  grad.addColorStop(1, '#12100a');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, W, H);

  ctx.fillStyle = '#d4af37';
  ctx.font = '800 28px Inter, sans-serif';
  ctx.fillText('PÁDEL CONTROL SÉ · RESUMEN DEL PARTIDO', 64, 78);

  ctx.fillStyle = '#a39e93';
  ctx.font = '500 24px Inter, sans-serif';
  ctx.fillText(`${fmtDateLong(m.createdAt)} · Duración ${fmtDurationLong(m.durationMs)}`, 64, 118);

  ctx.save();
  ctx.textAlign = 'right';
  ctx.fillStyle = '#ffe58f';
  ctx.font = '42px "Great Vibes", cursive';
  ctx.fillText('Sairaf Engel', W - 64, 96);
  ctx.restore();

  roundRect(ctx, 56, 152, W - 112, 250, 28, '#121218');
  for (let t = 0; t < 2; t++) {
    const y = 225 + t * 105;
    ctx.fillStyle = m.teams[t].color;
    roundRect(ctx, 88, y - 38, 12, 54, 6, m.teams[t].color);
    ctx.fillStyle = st.matchWinner === t ? '#ffe58f' : '#e5e0d5';
    ctx.font = `${st.matchWinner === t ? '800' : '700'} 44px "Barlow Condensed", sans-serif`;
    ctx.fillText(teamLabel(m, t).toUpperCase(), 120, y + 6);

    st.sets.forEach((s, idx) => {
      if (s.games[0] === 0 && s.games[1] === 0 && idx > 0 && s.winner === null) return;
      const bx = W - 110 - (st.sets.length - 1 - idx) * 86;
      const won = s.winner === t;
      roundRect(ctx, bx - 54, y - 42, 68, 64, 14, won ? '#d4af37' : '#1b1b24');
      ctx.fillStyle = won ? '#080602' : '#a39e93';
      ctx.font = '800 42px "Barlow Condensed", sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(String(s.games[t]), bx - 20, y + 5);
      ctx.textAlign = 'left';
    });
  }

  const rows: Array<[string, string | number, string | number, number, number]> = [
    ['Puntos ganados', T[0].ptsWon, T[1].ptsWon, T[0].ptsWon, T[1].ptsWon],
    ['Golpes ganadores', T[0].winners, T[1].winners, T[0].winners, T[1].winners],
    ['Errores no forzados', T[0].ue, T[1].ue, T[0].ue, T[1].ue],
    ['Puntos de break', `${T[0].bpWon}/${T[0].bpTotal}`, `${T[1].bpWon}/${T[1].bpTotal}`, T[0].bpWon, T[1].bpWon],
    ['Puntos de oro / Star Point', `${T[0].gpWon}/${T[0].gpTotal}`, `${T[1].gpWon}/${T[1].gpTotal}`, T[0].gpWon, T[1].gpWon],
    [
      'Puntos ganados al saque',
      pct(T[0].srvPtsWon, T[0].srvPtsTotal) + '%',
      pct(T[1].srvPtsWon, T[1].srvPtsTotal) + '%',
      pct(T[0].srvPtsWon, T[0].srvPtsTotal),
      pct(T[1].srvPtsWon, T[1].srvPtsTotal)
    ],
    [
      'Primeros saques dentro',
      pct(T[0].firstServeIn, T[0].srvPtsTotal) + '%',
      pct(T[1].firstServeIn, T[1].srvPtsTotal) + '%',
      pct(T[0].firstServeIn, T[0].srvPtsTotal),
      pct(T[1].firstServeIn, T[1].srvPtsTotal)
    ],
    ['Mejor racha de puntos', T[0].maxPtStreak, T[1].maxPtStreak, T[0].maxPtStreak, T[1].maxPtStreak]
  ];

  roundRect(ctx, 56, 434, W - 112, 820, 28, '#121218');
  rows.forEach((r, i) => {
    const y = 505 + i * 94;
    ctx.fillStyle = '#d4af37';
    ctx.font = '600 22px Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(r[0].toUpperCase(), W / 2, y - 16);

    ctx.fillStyle = '#f8f6f0';
    ctx.font = '800 34px "Barlow Condensed", sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText(String(r[1]), 96, y + 22);
    ctx.textAlign = 'right';
    ctx.fillText(String(r[2]), W - 96, y + 22);

    const barX = 210;
    const barW = W - 420;
    const barY = y + 8;
    roundRect(ctx, barX, barY, barW, 14, 7, '#22222c');
    const sum = (Number(r[3]) || 0) + (Number(r[4]) || 0);
    const p0 = sum > 0 ? Number(r[3]) / sum : 0.5;
    const w0 = Math.round(barW * p0);
    if (w0 > 0) roundRect(ctx, barX, barY, w0, 14, 7, m.teams[0].color);
    if (barW - w0 > 0) roundRect(ctx, barX + w0, barY, barW - w0, 14, 7, m.teams[1].color);
  });

  drawBottomSignatureWatermark(ctx, W, 1322);

  canvas.toBlob((blob) => {
    if (!blob) return;
    triggerBlobDownload(blob, `padel-control-se-${new Date(m.createdAt).toISOString().slice(0, 10)}.png`);
    showToast('Imagen descargada');
  }, 'image/png');
}

export function getEffectiveSortKey(comp: Competition | null, scopeKey = 'daily'): string {
  const tag = comp ? comp.id : scopeKey;
  if (store.ui.playerSortScope === tag && store.ui.playerSort) return store.ui.playerSort;
  return isProyectoPadelComp(comp) ? 'elo' : 'pts';
}

export function getCurrentRankingContext(overrideSort: string | null = null): RankingContext {
  const { ui, competitionsList, historyList, prefs } = store;
  const scope = ui.playerScope || 'daily';

  if (scope === 'shared' || (ui.playerRankingView === 'shared' && ui.sharedRanking?.players?.length)) {
    const sr = ui.sharedRanking;
    const isSrElo = sr?.primaryMetric === 'elo';
    const sortKey = overrideSort || (ui.playerSortScope === 'shared' ? ui.playerSort : isSrElo ? 'elo' : 'pts');
    const raw = (sr?.players || []).map((p) => ({ ...p, shots: { ...(p.shots || {}) } }));
    const players = assignPlayerRanks(
      sortStandingsRows(raw, sortKey, { tiebreakMode: isSrElo ? 'games' : 'sets' }),
      sortKey,
      { tiebreakMode: isSrElo ? 'games' : 'sets' }
    );
    return {
      scope: 'shared',
      id: sr?.id || 'RK-EXT',
      title: sr?.name || 'Ranking Compartido',
      subtitle: sr?.subtitle || 'Ranking compartido',
      entityMode: sr?.entityMode || 'individual',
      primaryMetric: sr?.primaryMetric || 'pts',
      comp: null,
      scoring: null,
      sortKey,
      players
    };
  }

  if (scope === 'league' || scope === 'tournament') {
    const compsOfKind = competitionsList.filter((c) => c.kind === scope);
    let selId = scope === 'league' ? ui.selectedLeagueId : ui.selectedTournId;
    if (!selId || !compsOfKind.some((c) => c.id === selId)) {
      selId = compsOfKind[0]?.id || null;
      if (scope === 'league') ui.selectedLeagueId = selId;
      else ui.selectedTournId = selId;
    }
    const comp = getCompById(selId);
    if (!comp) {
      return {
        scope,
        id: prefs.rankingId || 'RK-OFFICIAL',
        title: scope === 'league' ? 'Ligas' : 'Torneos',
        subtitle: `Sin ${scope === 'league' ? 'ligas' : 'torneos'} todavía`,
        entityMode: 'pairs',
        primaryMetric: 'pts',
        comp: null,
        scoring: { winPts: 3, lossPts: 1, drawPts: 2, setBonusPts: 0, gameBonusPts: 0 },
        sortKey: overrideSort || 'pts',
        players: []
      };
    }
    const isPP = isProyectoPadelComp(comp);
    const sortKey = overrideSort || getEffectiveSortKey(comp, scope);
    const sortOpts = { tiebreakMode: isPP ? 'games' : 'sets' };
    const entityMode = comp.rankingMode === 'both' ? ui.playerEntityMode || 'pairs' : comp.rankingMode || 'pairs';
    const scoring = getCompetitionScoringConfig(comp);
    const compMatches = getCompetitionMatches(comp, false);

    let targetMatches = compMatches;
    let seedParts = comp.participants || [];
    let groupSub = '';
    if (comp.format === 'groups_playoff' && ui.selectedGroupFilter && ui.selectedGroupFilter !== 'all') {
      const gLet = ui.selectedGroupFilter;
      const gFxIds = new Set(
        (comp.fixtures || []).filter((f) => f.phase === 'group' && f.group === gLet).map((f) => f.id)
      );
      targetMatches = compMatches.filter((m) => m.competition?.fixtureId && gFxIds.has(m.competition.fixtureId));
      seedParts = seedParts.filter((p) => p.group === gLet);
      groupSub = ` · Grupo ${gLet}`;
    }

    const raw = computeScopeStandings(targetMatches, {
      ...scoring,
      entityMode,
      eloBaseMatches: compMatches,
      seedParticipants: seedParts
    });
    const players = assignPlayerRanks(sortStandingsRows(raw, sortKey, sortOpts), sortKey, sortOpts);
    return {
      scope,
      id: `${prefs.rankingId || 'RK'}-${comp.id.slice(-4).toUpperCase()}`,
      title: comp.name,
      subtitle: getCompSubtitle(comp, entityMode, scoring, groupSub),
      entityMode,
      primaryMetric: isPP ? 'elo' : 'pts',
      comp,
      scoring,
      sortKey,
      players
    };
  }

  const sortKey = overrideSort || getEffectiveSortKey(null, 'daily');
  const entityMode = ui.playerEntityMode || 'individual';
  const todayOnly = ui.dailyTimeFilter === 'today';
  const dailyMatches = historyList.filter((m) => getMatchKind(m) === 'daily');
  const scoring = getCompetitionScoringConfig(null);
  const raw = computeScopeStandings(dailyMatches, {
    ...scoring,
    entityMode,
    todayOnly,
    todayDateKey: getDateKey(Date.now())
  });
  const players = assignPlayerRanks(sortStandingsRows(raw, sortKey), sortKey);
  const modeWord = entityMode === 'pairs' ? 'Parejas' : 'Individual';
  const timeWord = todayOnly ? 'Hoy' : 'Acumulado';
  return {
    scope: 'daily',
    id: prefs.rankingId || 'RK-OFFICIAL',
    title: `${prefs.rankingName || 'Mi Ranking'} · Partido del Día`,
    subtitle: `${timeWord} · ${modeWord} · +${scoring.winPts}V / +${scoring.lossPts}D + ELO`,
    entityMode,
    primaryMetric: 'pts',
    comp: null,
    scoring,
    sortKey,
    players
  };
}

export function encodeRankingPayload(players: StandingRow[], ctxMeta: Partial<RankingContext> | null = null): string {
  const { ui, historyList, prefs } = store;
  const isShared =
    ui.playerScope === 'shared' ||
    ui.playerRankingView === 'shared' ||
    (!historyList.length && Boolean(ui.sharedRanking?.players?.length));
  const fallbackId = isShared && ui.sharedRanking?.id ? ui.sharedRanking.id : prefs.rankingId || 'RK-OFFICIAL';
  const fallbackName = isShared && ui.sharedRanking?.name ? ui.sharedRanking.name : prefs.rankingName || 'Mi Ranking';
  return encodeRankingPayloadPure(players, ctxMeta, { id: fallbackId, name: fallbackName });
}

export function saveSharedRankingToVault(ranking: SharedRanking | null | undefined): void {
  if (!ranking || !ranking.id) return;
  try {
    const vault = loadJSON<Record<string, SharedRanking>>('padel_ranking_vault', {});
    vault[ranking.id] = ranking;
    saveJSON('padel_ranking_vault', vault);
  } catch {}
}

export function getRankingPlayersList(forceSource: string | null = null): StandingRow[] {
  if (forceSource === 'shared' && store.ui.sharedRanking?.players?.length) {
    return store.ui.sharedRanking.players.map((p) => ({ ...p, shots: { ...(p.shots || {}) } }));
  }
  return getCurrentRankingContext().players;
}

export async function shortenUrl(longUrl: string): Promise<string> {
  if (!longUrl || longUrl.length < 60) return longUrl;
  try {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 2400);
    const res = await fetch(`https://is.gd/create.php?format=json&url=${encodeURIComponent(longUrl)}`, {
      signal: ctrl.signal
    });
    clearTimeout(timer);
    if (res.ok) {
      const data = await res.json();
      if (data && data.shorturl) return data.shorturl;
    }
  } catch {}

  try {
    const ctrl2 = new AbortController();
    const timer2 = setTimeout(() => ctrl2.abort(), 2400);
    const res2 = await fetch(`https://v.gd/create.php?format=json&url=${encodeURIComponent(longUrl)}`, {
      signal: ctrl2.signal
    });
    clearTimeout(timer2);
    if (res2.ok) {
      const data2 = await res2.json();
      if (data2 && data2.shorturl) return data2.shorturl;
    }
  } catch {}

  return longUrl;
}

export function publishRankingSnapshot(code: string, b64: string): void {
  if (!code || !b64) return;
  const clean = String(code).replace(/^rk[-_]?/i, '').replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  const topic = 'padel_se_rk_' + clean;
  fetch(`${getSyncServerBaseUrl()}/${topic}`, {
    method: 'POST',
    body: b64
  }).catch(() => {});
}

export async function openShortSharedRanking(rawCode: string): Promise<void> {
  const clean = String(rawCode || '').replace(/^rk[-_]?/i, '').replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  const topic = 'padel_se_rk_' + clean;
  try {
    const res = await fetch(`${getSyncServerBaseUrl()}/${topic}/json?poll=1&since=12h`, { cache: 'no-store' });
    if (res.ok) {
      const txt = await res.text();
      const lines = txt.trim().split('\n').filter(Boolean);
      let latestMsg: string | null = null;
      for (const line of lines) {
        try {
          const obj = JSON.parse(line);
          if (obj && obj.event === 'message' && obj.message) latestMsg = obj.message;
        } catch {}
      }
      if (latestMsg) {
        const decoded = decodeRankingPayload(latestMsg);
        if (decoded && Array.isArray(decoded.players) && decoded.players.length) {
          store.ui.sharedRanking = decoded;
          saveJSON('padel_shared_ranking', decoded);
          saveSharedRankingToVault(decoded);
          store.ui.playerRankingView = 'shared';
          store.ui.playerScope = 'shared';
          store.ui.route = 'players';
          appHooks.render();
          showToast(`📡 ${decoded.name || 'Ranking'} (#${decoded.id || 'RK'}) cargado`);
          return;
        }
      }
    }
  } catch {}
  showToast('No se encontró el ranking compartido o expiró');
}

export async function shareRankingText(overrideCtx: RankingContext | null = null): Promise<void> {
  const ctx = overrideCtx || getCurrentRankingContext();
  const rankingTitle = ctx.title || store.prefs.rankingName || 'Mi Ranking';
  const rankingId = ctx.id || store.prefs.rankingId || 'RK-OFFICIAL';
  const players = ctx.players || [];

  if (!players.length) {
    showToast('Todavía no hay jugadores registrados en este ranking');
    return;
  }

  const baseUrl = location.href.split('#')[0];
  const rkPayload = encodeRankingPayload(players, ctx);
  const fullUrl = rkPayload ? `${baseUrl}#rk=${rkPayload}` : `${baseUrl}#players`;

  publishRankingSnapshot(rankingId, rkPayload);

  let rankingUrl = fullUrl;
  try {
    rankingUrl = await shortenUrl(fullUrl);
  } catch {}

  const isEloPrimary = ctx.primaryMetric === 'elo' || isProyectoPadelComp(ctx.comp);
  const medals: Record<number, string> = { 1: '🥇 1º', 2: '🥈 2º', 3: '🥉 3º' };
  const topRows = players
    .slice(0, 10)
    .map((p) => {
      const rankLabel = (p.rank && medals[p.rank]) || `${p.rank}º`;
      const lvl = getEloLevel(p.elo);
      const winPct = pct(p.wins, p.matches);
      const trend = p.lastDelta > 0 ? ` (+${p.lastDelta})` : p.lastDelta < 0 ? ` (${p.lastDelta})` : '';
      if (isEloPrimary) {
        const gdStr = (p.gamesDiff || 0) > 0 ? `+${p.gamesDiff}` : String(p.gamesDiff || 0);
        return `${rankLabel} *${p.name}* · *${p.elo} ELO*${trend} · ${p.pts || 0} pts (${p.gamesWon || 0}G, ${gdStr}) · ${p.wins}G/${p.draws || 0}E/${p.losses || 0}P`;
      }
      return `${rankLabel} *${p.name}* · ${p.pts || 0} pts · ${p.elo} ELO${trend} · Nivel ${lvl.level} (${lvl.icon}) · ${p.wins}V/${p.matches}P (${winPct}%)`;
    })
    .join('\n');

  const moreCount = players.length > 10 ? `\n...y ${players.length - 10} más` : '';

  const text = `🎾 *RANKING OFICIAL · PÁDEL CONTROL SÉ*\n🏆 *${rankingTitle}* · ID: #${rankingId}\n📌 _${ctx.subtitle || 'Sistema Mixto: Puntos + ELO'}_\n\n📊 *Tabla de Posiciones:*\n${topRows}${moreCount}\n\n📲 Ver tabla completa interactiva y marcador:\n${rankingUrl}`;

  await shareOrCopyText({
    title: `🎾 Ranking: ${rankingTitle} (#${rankingId})`,
    text,
    copyText: text,
    toastMsg: '¡Ranking y enlace copiados al portapapeles!',
    promptMsg: 'Copiá el texto del ranking para compartir:'
  });
}

export async function exportRankingImage(overrideCtx: RankingContext | null = null): Promise<void> {
  if (document.fonts && document.fonts.ready) {
    try {
      await document.fonts.ready;
    } catch {}
  }

  const rCtx = overrideCtx || getCurrentRankingContext();
  const isShared = rCtx.scope === 'shared';
  const rankingTitle = rCtx.title || store.prefs.rankingName || 'Mi Ranking';
  const rankingId = rCtx.id || store.prefs.rankingId || 'RK-OFFICIAL';
  const players = rCtx.players || [];

  if (!players.length) {
    showToast('Todavía no hay jugadores registrados para exportar');
    return;
  }

  const topPlayers = players.slice(0, 8);
  const W = 1080;
  const H = Math.max(1200, 360 + topPlayers.length * 105);
  const canvas = document.createElement('canvas');
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const grad = ctx.createLinearGradient(0, 0, 0, H);
  grad.addColorStop(0, '#050507');
  grad.addColorStop(0.5, '#0c0c10');
  grad.addColorStop(1, '#12100a');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, W, H);

  ctx.strokeStyle = 'rgba(212, 175, 55, 0.45)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  if (ctx.roundRect) ctx.roundRect(28, 28, W - 56, H - 56, 24);
  else ctx.rect(28, 28, W - 56, H - 56);
  ctx.stroke();

  ctx.fillStyle = '#d4af37';
  ctx.font = '800 28px Inter, -apple-system, sans-serif';
  ctx.fillText('PÁDEL CONTROL SÉ  ·  RANKING OFICIAL', 64, 82);

  const imageDate =
    isShared && store.ui.sharedRanking?.timestamp ? new Date(store.ui.sharedRanking.timestamp) : new Date();
  const nowStr = imageDate.toLocaleDateString('es-AR', { day: 'numeric', month: 'long', year: 'numeric' });
  ctx.fillStyle = '#a39e93';
  ctx.font = '500 19px Inter, sans-serif';
  ctx.fillText(`${rankingTitle.toUpperCase()}  ·  ${rCtx.subtitle || ''}  ·  #${rankingId}  ·  ${nowStr}`, 64, 120);

  ctx.save();
  ctx.textAlign = 'right';
  ctx.fillStyle = '#ffe58f';
  ctx.font = '42px "Great Vibes", cursive';
  ctx.fillText('Sairaf Engel', W - 64, 96);
  ctx.restore();

  const cardY = 160;
  const cardH = H - cardY - 120;
  roundRect(ctx, 56, cardY, W - 112, cardH, 24, '#121218');

  const isEloPrimary = rCtx.primaryMetric === 'elo' || isProyectoPadelComp(rCtx.comp);
  roundRect(ctx, 56, cardY, W - 112, 58, 24, 'rgba(212, 175, 55, 0.12)');
  ctx.fillStyle = '#d4af37';
  ctx.font = '700 18px Inter, sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText('POS', 88, cardY + 36);
  ctx.fillText(rCtx.entityMode === 'pairs' ? 'PAREJA & NIVEL' : 'JUGADOR & NIVEL', 190, cardY + 36);
  ctx.textAlign = 'right';
  ctx.fillText('PARTIDOS', W - 360, cardY + 36);
  ctx.fillText(isEloPrimary ? 'PTS (G)' : 'ELO', W - 245, cardY + 36);
  ctx.fillText(isEloPrimary ? 'ELO' : 'PUNTOS', W - 92, cardY + 36);

  topPlayers.forEach((p, i) => {
    const rowY = cardY + 72 + i * 98;
    if (i % 2 === 0) {
      roundRect(ctx, 64, rowY, W - 128, 86, 14, 'rgba(255, 255, 255, 0.025)');
    }

    const rankX = 84;
    const rankY = rowY + 18;
    const rankSize = 50;
    let rankBg = 'rgba(255, 255, 255, 0.06)';
    let rankColor = '#a39e93';
    let rankTxt = `#${p.rank}`;
    if (p.rank === 1) {
      rankBg = '#d4af37';
      rankColor = '#080602';
      rankTxt = '1º';
    } else if (p.rank === 2) {
      rankBg = '#cbd5e1';
      rankColor = '#080602';
      rankTxt = '2º';
    } else if (p.rank === 3) {
      rankBg = '#d97706';
      rankColor = '#080602';
      rankTxt = '3º';
    }

    roundRect(ctx, rankX, rankY, rankSize, rankSize, 14, rankBg);
    ctx.fillStyle = rankColor;
    ctx.font = '800 24px "Barlow Condensed", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(rankTxt, rankX + rankSize / 2, rankY + 34);

    ctx.textAlign = 'left';
    ctx.fillStyle = (p.rank || 99) <= 3 ? '#ffe58f' : '#f8f6f0';
    ctx.font = '800 30px "Barlow Condensed", sans-serif';
    ctx.fillText(p.name.toUpperCase().slice(0, 26), 156, rowY + 40);

    const lvl = getEloLevel(p.elo);
    ctx.fillStyle = lvl.color;
    ctx.font = '600 18px Inter, sans-serif';
    ctx.fillText(`Nivel ${lvl.level} · ${lvl.tier}`, 156, rowY + 68);

    const winPct = pct(p.wins, p.matches);
    const gdStr = (p.gamesDiff || 0) > 0 ? `+${p.gamesDiff}` : String(p.gamesDiff || 0);
    ctx.textAlign = 'right';
    ctx.fillStyle = '#e2ded5';
    ctx.font = '700 22px "Barlow Condensed", sans-serif';
    ctx.fillText(
      isEloPrimary ? `${p.wins}G-${p.draws || 0}E-${p.losses || 0}P` : `${p.wins}V - ${p.losses ?? Math.max(0, p.matches - p.wins)}D`,
      W - 360,
      rowY + 40
    );
    ctx.fillStyle = '#a39e93';
    ctx.font = '500 16px Inter, sans-serif';
    ctx.fillText(isEloPrimary ? `${p.gamesWon || 0} GF · ${gdStr}` : `${winPct}% ef.`, W - 360, rowY + 66);

    ctx.textAlign = 'right';
    ctx.fillStyle = isEloPrimary ? '#e2ded5' : '#f5d061';
    ctx.font = '800 24px "Barlow Condensed", sans-serif';
    ctx.fillText(isEloPrimary ? `${p.pts || 0}` : String(p.elo), W - 245, rowY + 42);
    ctx.fillStyle = p.lastDelta > 0 ? '#10b981' : p.lastDelta < 0 ? '#ef4444' : '#7d7461';
    ctx.font = '600 15px Inter, sans-serif';
    ctx.fillText(p.lastDelta > 0 ? `+${p.lastDelta}` : p.lastDelta < 0 ? `${p.lastDelta}` : '—', W - 245, rowY + 66);

    const ptsW = 122;
    const ptsH = 54;
    const ptsX = W - 214;
    const ptsY = rowY + 16;
    roundRect(ctx, ptsX, ptsY, ptsW, ptsH, 12, 'rgba(212, 175, 55, 0.14)');
    ctx.strokeStyle = 'rgba(212, 175, 55, 0.45)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    if (ctx.roundRect) ctx.roundRect(ptsX, ptsY, ptsW, ptsH, 12);
    else ctx.rect(ptsX, ptsY, ptsW, ptsH);
    ctx.stroke();

    ctx.fillStyle = '#ffe58f';
    ctx.font = '900 32px "Barlow Condensed", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(isEloPrimary ? `${p.elo}` : `${p.pts || 0}`, ptsX + ptsW / 2, ptsY + 37);
  });

  drawBottomSignatureWatermark(ctx, W, H - 52);

  canvas.toBlob((blob) => {
    if (!blob) return;
    triggerBlobDownload(blob, `ranking-padel-control-se-${new Date().toISOString().slice(0, 10)}.png`);
    showToast('¡Imagen del Ranking descargada!');
  }, 'image/png');
}
