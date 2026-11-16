import {
  buildCompactSetupData,
  cleanLiveTopic,
  cleanSyncCode,
  compSyncTopic,
  decodeMatchShare,
  decodeSyncMessage,
  encodeCompSetupInline,
  encodeMatchShare,
  encodeSyncMessage,
  hydrateFixturesFromCompact,
  newCompSyncCode
} from '../codecs/shareCodec';
import { clone, formatPairLabel, teamLabel } from '../core/utils';
import { isProyectoPadelComp } from '../engines/eloEngine';
import {
  advanceGroupsToPlayoffsPure,
  clampCourtsCount,
  getGroupStandingsForCompPure,
  isCompFinished,
  newCompId,
  resolveCompetitionFixturesPure
} from '../engines/fixtureEngine';
import { computeStats } from '../engines/statsEngine';
import { appHooks, showToast } from '../state/runtime';
import {
  archiveMatchToHistory,
  getCompById,
  getCompetitionMatches,
  getDeviceClientId,
  getSyncServerBaseUrl,
  loadArr,
  LS_COMP_OUTBOX,
  LS_HIST,
  LS_PRESET,
  saveCompetitions,
  saveJSON,
  store
} from '../state/store';
import type {
  Competition,
  Fixture,
  ManualPlayerStatEntry,
  ManualSetEntry,
  Match,
  MatchRules,
  MatchTeam,
  Participant,
  QuickScoreState,
  StandingRow
} from '../types';
import { renderQRToCanvas } from '../vendor/qrious';
import {
  hasOpenLiveEventSource,
  openLiveEventSource,
  pollLiveChannelOnce,
  publishLiveMatchState,
  roundRect,
  shareOrCopyText
} from './liveBroadcast';
import { startNewMatch } from './matchActions';

interface CompSyncOutboxItem {
  topic: string;
  body: string;
  ts: number;
}

const compSeenMsgKeys = new Set<string>();
let compSyncEvtSource: EventSource | null = null;
let compSyncPollTimer: ReturnType<typeof setInterval> | null = null;
let compSyncWatchCode = '';

export function getCompSyncWatchCode(): string {
  return compSyncWatchCode;
}
let compPostBackoffUntil = 0;
let compPostRetryTimer: ReturnType<typeof setTimeout> | null = null;
let flushOutboxInFlight = false;

const compLastMsgTime: Record<string, number> = {};
const compLastPollAt: Record<string, number> = {};
const compPollBusy: Record<string, boolean> = {};
const compPollBackoffUntil: Record<string, number> = {};

// ==================== STATEFUL COMPETITION HELPERS ====================

export function getGroupStandingsForComp(comp: Competition, groupLetter: string): StandingRow[] {
  return getGroupStandingsForCompPure(comp, groupLetter, store.historyList);
}

export function advanceGroupsToPlayoffs(comp: Competition): boolean {
  const ok = advanceGroupsToPlayoffsPure(comp, store.historyList);
  if (ok) saveCompetitions();
  return ok;
}

export function resolveCompetitionFixtures(comp: Competition): void {
  resolveCompetitionFixturesPure(comp, store.historyList, store.activeMatch);
}

export function syncCompetitionForMatch(
  m: Match | null | undefined,
  opts: { skipSyncPublish?: boolean } = {}
): void {
  if (!m || !m.competition || !m.competition.compId) return;
  const comp = getCompById(m.competition.compId);
  if (!comp) return;
  if (m.competition.fixtureId) {
    const fx = (comp.fixtures || []).find((f) => f.id === m.competition?.fixtureId);
    if (fx) {
      fx.matchId = m.id;
    }
  }
  resolveCompetitionFixtures(comp);
  comp.syncUpdatedAt = Date.now();
  saveCompetitions();
  if (!opts.skipSyncPublish && comp.syncCode && (m.status === 'finished' || m.manualWinner !== undefined)) {
    void publishCompMatch(comp, m);
  }
}

export function fillPresetFromComp(comp: Competition, fx: Fixture | null = null): void {
  if (!comp) return;
  const { preset } = store;
  preset.matchContext = comp.kind;
  preset.compId = comp.id;
  const dr = comp.defaultRules || {};
  if (dr.totalSets) {
    preset.totalSets = dr.totalSets;
    preset.setsToWin = Math.floor(dr.totalSets / 2) + 1;
  }
  if (dr.gamesPerSet) preset.gamesPerSet = dr.gamesPerSet;
  if (dr.deuceRule) preset.deuceRule = dr.deuceRule;
  if (dr.tiebreakAt !== undefined) preset.tiebreakAt = dr.tiebreakAt;
  if (dr.tiebreakPoints) preset.tiebreakPoints = dr.tiebreakPoints;
  if (dr.finalSet) preset.finalSet = dr.finalSet;
  if (dr.changeoverRule) preset.changeoverRule = dr.changeoverRule;

  if (fx) {
    preset.fixtureId = fx.id;
    const courtTxt = fx.court ? ` · Cancha ${fx.court}` : '';
    preset.stageLabel = fx.roundLabel ? `${fx.roundLabel}${courtTxt}` : courtTxt.replace(/^ · /, '');
    if (fx.team0) {
      preset.teams[0].players = [fx.team0.players?.[0] || 'DRIVE 1', fx.team0.players?.[1] || 'REVÉS 1'];
      if (fx.team0.color) preset.teams[0].color = fx.team0.color;
    }
    if (fx.team1) {
      preset.teams[1].players = [fx.team1.players?.[0] || 'DRIVE 2', fx.team1.players?.[1] || 'REVÉS 2'];
      if (fx.team1.color) preset.teams[1].color = fx.team1.color;
    }
  } else {
    preset.fixtureId = '';
  }
}

export function startFixtureMatch(compId: string, fxId: string): void {
  const comp = getCompById(compId);
  if (!comp) return;
  if (isCompFinished(comp)) {
    showToast('El torneo está finalizado. Reabrilo para jugar nuevos cruces.');
    return;
  }
  const fx = (comp.fixtures || []).find((f) => f.id === fxId);
  if (!fx || !fx.team0 || !fx.team1) {
    showToast('Este cruce todavía espera parejas definidas');
    return;
  }
  fillPresetFromComp(comp, fx);
  saveJSON(LS_PRESET, store.preset);
  startNewMatch();
}

export function getCompQuickPlayerPool(comp: Competition | null | undefined): string[] {
  if (!comp) return [];
  const seen = new Map<string, string>();
  const add = (nm: string | undefined | null) => {
    const clean = String(nm || '').trim();
    if (!clean || /^(DRIVE|REV[ÉE]S)\s*\d*$/i.test(clean)) return;
    const k = clean.toUpperCase();
    if (!seen.has(k)) seen.set(k, clean);
  };
  (comp.participants || []).forEach((pt) => {
    if (pt.type === 'pair') {
      add(pt.players?.[0]);
      add(pt.players?.[1]);
    } else {
      add(pt.name);
    }
  });
  getCompetitionMatches(comp, false).forEach((m) => {
    (m.teams || []).forEach((tm) => (tm.players || []).forEach(add));
  });
  return Array.from(seen.values()).sort((a, b) => a.localeCompare(b, 'es'));
}

export function buildQuickScoreState(opts: {
  mode?: string;
  fixtureKey?: string;
  compId?: string;
} = {}): QuickScoreState {
  const mode = opts.mode || (opts.fixtureKey ? 'fixture' : 'preset');
  if (mode === 'fixture' && opts.fixtureKey) {
    const [cid, fxid] = String(opts.fixtureKey).split(':');
    const comp = getCompById(cid);
    const fx = (comp?.fixtures || []).find((f) => f.id === fxid);
    const isPP = isProyectoPadelComp(comp);
    const teams: MatchTeam[] = [
      {
        players: [fx?.team0?.players?.[0] || 'DRIVE 1', fx?.team0?.players?.[1] || 'REVÉS 1'],
        color: fx?.team0?.color || '#d4af37'
      },
      {
        players: [fx?.team1?.players?.[0] || 'DRIVE 2', fx?.team1?.players?.[1] || 'REVÉS 2'],
        color: fx?.team1?.color || '#2f8cff'
      }
    ];
    return {
      mode: 'fixture',
      compId: cid || null,
      fixtureId: fxid || null,
      fixtureKey: opts.fixtureKey,
      stageLabel: `${fx?.roundLabel || 'Cruce'}${fx?.court ? ` · Cancha ${fx.court}` : ''}`,
      teams,
      selPartIds: ['', ''],
      useManualTeams: false,
      activeSlot: 0,
      sets: isPP ? [[null, null]] : [[null, null], [null, null]],
      wo: false,
      winner: 'auto',
      hasSuperTbFinal: comp?.defaultRules?.finalSet === 'supertb'
    };
  }

  if (mode === 'comp-adhoc') {
    const comp = getCompById(opts.compId || store.ui.compId);
    const isPP = isProyectoPadelComp(comp);
    const pairParts = comp ? (comp.participants || []).filter((p) => p.type === 'pair') : [];
    const useManual = isPP || pairParts.length < 2;
    const p0 = pairParts[0];
    const p1 = pairParts[1];
    const teams: MatchTeam[] =
      !useManual && p0 && p1
        ? [
            { players: [p0.players?.[0] || 'DRIVE 1', p0.players?.[1] || 'REVÉS 1'], color: p0.color || '#d4af37' },
            { players: [p1.players?.[0] || 'DRIVE 2', p1.players?.[1] || 'REVÉS 2'], color: p1.color || '#2f8cff' }
          ]
        : [
            { players: ['', ''], color: '#d4af37' },
            { players: ['', ''], color: '#2f8cff' }
          ];
    return {
      mode: 'comp-adhoc',
      compId: comp?.id || null,
      fixtureId: null,
      fixtureKey: '',
      stageLabel: '',
      teams,
      selPartIds: [p0?.id || '', p1?.id || ''],
      useManualTeams: useManual,
      activeSlot: 0,
      sets: isPP ? [[null, null]] : [[null, null], [null, null]],
      wo: false,
      winner: 'auto',
      hasSuperTbFinal: comp?.defaultRules?.finalSet === 'supertb'
    };
  }

  const { preset } = store;
  const comp =
    (preset.matchContext === 'league' || preset.matchContext === 'tournament') && preset.compId
      ? getCompById(preset.compId)
      : null;
  const isPP = isProyectoPadelComp(comp);
  const t0 = preset.teams[0];
  const t1 = preset.teams[1];
  const teams: MatchTeam[] = [
    { players: [t0.players[0]?.trim() || 'DRIVE 1', t0.players[1]?.trim() || 'REVÉS 1'], color: t0.color || '#d4af37' },
    { players: [t1.players[0]?.trim() || 'DRIVE 2', t1.players[1]?.trim() || 'REVÉS 2'], color: t1.color || '#2f8cff' }
  ];
  return {
    mode: 'preset',
    compId: comp?.id || null,
    fixtureId: comp && preset.fixtureId ? preset.fixtureId : null,
    fixtureKey: '',
    stageLabel: preset.stageLabel || '',
    teams,
    selPartIds: ['', ''],
    useManualTeams: false,
    activeSlot: 0,
    sets: isPP ? [[null, null]] : preset.totalSets === 1 ? [[null, null]] : [[null, null], [null, null]],
    wo: false,
    winner: 'auto',
    hasSuperTbFinal: preset.finalSet === 'supertb'
  };
}

export function openQuickScoreModal(opts: {
  mode?: string;
  fixtureKey?: string;
  compId?: string | null;
} = {}): void {
  const targetCid = opts.compId || (opts.fixtureKey ? String(opts.fixtureKey).split(':')[0] : '');
  const targetComp = targetCid ? getCompById(targetCid) : null;
  if (targetComp && isCompFinished(targetComp)) {
    showToast('El torneo está finalizado. Reabrilo para cargar más resultados.');
    return;
  }
  store.ui.quickScoreFixtureId = opts.fixtureKey || null;
  store.ui.quickScoreState = buildQuickScoreState({
    mode: opts.mode,
    fixtureKey: opts.fixtureKey,
    compId: opts.compId || undefined
  });
  store.ui.compModal = 'quick-score';
  appHooks.render();
}

export function submitQuickMatchResult(opts: {
  comp?: Competition | null;
  kind?: string;
  fixtureId?: string | null;
  stageLabel?: string;
  teams: MatchTeam[];
  rules?: Partial<MatchRules>;
  setsArr: Array<[number, number]>;
  winnerSide: number | 'draw';
  isDraw?: boolean;
  isWalkover?: boolean;
}): Match {
  const { preset } = store;
  const comp = opts.comp || null;
  const dr = opts.rules || comp?.defaultRules || preset;
  const totalSets = Math.max(1, Number(dr.totalSets) || 3);
  const isWo = !!opts.isWalkover;
  const isDraw = !!(opts.isDraw || opts.winnerSide === 'draw');

  const manualSets: ManualSetEntry[] = isWo
    ? []
    : (opts.setsArr || []).map((s) => {
        const g0 = Math.max(0, Number(s[0]) || 0);
        const g1 = Math.max(0, Number(s[1]) || 0);
        const sw: number | null = g0 > g1 ? 0 : g1 > g0 ? 1 : null;
        return [g0, g1, sw, null, 0];
      });

  const teams: MatchTeam[] = [0, 1].map((side) => ({
    players: [
      opts.teams[side]?.players?.[0]?.trim() || `DRIVE ${side + 1}`,
      opts.teams[side]?.players?.[1]?.trim() || `REVÉS ${side + 1}`
    ],
    color: opts.teams[side]?.color || (side === 0 ? '#d4af37' : '#2f8cff')
  }));

  const m: Match = {
    id: newCompId('m'),
    createdAt: Date.now(),
    durationMs: 0,
    status: 'finished',
    mode: 'doubles',
    competition: comp
      ? {
          kind: comp.kind,
          compId: comp.id,
          compName: comp.name,
          fixtureId: opts.fixtureId || null,
          stageLabel: (opts.stageLabel || '').trim()
        }
      : {
          kind: opts.kind || 'daily',
          compId: null,
          compName: '',
          fixtureId: null,
          stageLabel: (opts.stageLabel || '').trim()
        },
    teams,
    rules: {
      totalSets,
      setsToWin: Math.floor(totalSets / 2) + 1,
      gamesPerSet: Math.max(1, Number(dr.gamesPerSet) || 6),
      deuceRule: dr.deuceRule || 'golden',
      tiebreakAt: dr.tiebreakAt !== undefined ? Number(dr.tiebreakAt) : Math.max(1, Number(dr.gamesPerSet) || 6),
      tiebreakPoints: Math.max(1, Number(dr.tiebreakPoints) || 7),
      finalSet: dr.finalSet || 'normal',
      changeoverRule: dr.changeoverRule || 'odd'
    },
    firstServer: [0, 0],
    secondServerIdx: 0,
    shotPrompt: false,
    flipped: false,
    pendingFault: false,
    events: [],
    redoStack: [],
    manualSets,
    manualWinner: isDraw ? 'draw' : opts.winnerSide,
    isDraw,
    isWalkover: isWo
  };

  archiveMatchToHistory(m);
  return m;
}

export function submitQuickFixtureResult(
  compId: string,
  fxId: string,
  setsArr: Array<[number, number]>,
  winnerSide: number | 'draw',
  isWo = false
): Match | null {
  const comp = getCompById(compId);
  const fx = (comp?.fixtures || []).find((f) => f.id === fxId);
  if (!comp || !fx || !fx.team0 || !fx.team1) return null;

  const isDraw = winnerSide === 'draw';
  const m = submitQuickMatchResult({
    comp,
    fixtureId: fx.id,
    stageLabel: fx.roundLabel || '',
    teams: [
      { players: [...(fx.team0.players || ['DRIVE 1', 'REVÉS 1'])], color: fx.team0.color || '#d4af37' },
      { players: [...(fx.team1.players || ['DRIVE 2', 'REVÉS 2'])], color: fx.team1.color || '#2f8cff' }
    ],
    setsArr,
    winnerSide,
    isDraw,
    isWalkover: isWo
  });
  return m;
}

// ==================== MULTI-DEVICE COMPETITION SYNC ====================

export function ensureCompSyncCode(comp: Competition): string {
  const clean = cleanSyncCode(comp.syncCode);
  if (clean && clean.length >= 4) {
    comp.syncCode = clean;
    return clean;
  }
  const next = newCompSyncCode();
  comp.syncCode = next;
  saveCompetitions();
  return next;
}

export function getCompShareUrl(comp: Competition, includeInline = true): string {
  const sc = ensureCompSyncCode(comp);
  const baseUrl = typeof location !== 'undefined' ? location.href.split('#')[0] : '';
  if (!includeInline) return `${baseUrl}#c=${sc}`;
  const inline = encodeCompSetupInline(comp);
  return inline ? `${baseUrl}#c=${sc}.${inline}` : `${baseUrl}#c=${sc}`;
}

export function loadCompSyncOutbox(): CompSyncOutboxItem[] {
  return loadArr<CompSyncOutboxItem>(LS_COMP_OUTBOX);
}

export function saveCompSyncOutbox(list: CompSyncOutboxItem[]): void {
  saveJSON(LS_COMP_OUTBOX, (list || []).slice(-120));
}

export async function postToCompTopic(topic: string, body: string): Promise<boolean> {
  if (!topic || !body || typeof fetch !== 'function') return false;
  if (Date.now() < compPostBackoffUntil) return false;
  try {
    // Simple CORS POST without custom headers avoids doubling requests with OPTIONS preflights
    const res = await fetch(`${getSyncServerBaseUrl()}/${topic}`, {
      method: 'POST',
      body
    });
    if (res.status === 429) {
      const retryHdr = Number(res.headers?.get?.('Retry-After')) || 0;
      const waitMs = retryHdr > 0 ? Math.min(30000, retryHdr * 1000) : 12000;
      compPostBackoffUntil = Date.now() + waitMs;
      if (compPostRetryTimer) clearTimeout(compPostRetryTimer);
      compPostRetryTimer = setTimeout(() => {
        void flushCompSyncOutbox();
      }, waitMs + 250);
      return false;
    }
    return !!res.ok;
  } catch {
    return false;
  }
}

export async function enqueueAndPublishCompEvent(syncCode: string, evt: unknown): Promise<boolean> {
  const topic = compSyncTopic(syncCode);
  if (!topic) return false;
  const body = encodeSyncMessage(evt);
  if (!body) return false;

  const ok = await postToCompTopic(topic, body);
  if (!ok) {
    const box = loadCompSyncOutbox();
    box.push({ topic, body, ts: Date.now() });
    saveCompSyncOutbox(box);
  }
  return ok;
}

export async function flushCompSyncOutbox(): Promise<number> {
  if (flushOutboxInFlight || typeof fetch !== 'function') return 0;
  const box = loadCompSyncOutbox();
  if (!box.length) return 0;
  flushOutboxInFlight = true;
  const remaining: CompSyncOutboxItem[] = [];
  let sentCount = 0;
  try {
    for (let i = 0; i < box.length; i++) {
      const item = box[i];
      const ok = await postToCompTopic(item.topic, item.body);
      if (ok) sentCount++;
      else {
        remaining.push(...box.slice(i));
        break;
      }
    }
    saveCompSyncOutbox(remaining);
  } finally {
    flushOutboxInFlight = false;
  }
  return sentCount;
}

export function handleCompSyncOnline(): void {
  void flushCompSyncOutbox();
  const { activeMatch, ui } = store;
  if (activeMatch && activeMatch.status === 'playing') publishLiveMatchState(activeMatch, true);
  if ((ui.route === 'live' || ui.route === 'obs') && ui.liveId) {
    const tpc = cleanLiveTopic(ui.liveId);
    if (!hasOpenLiveEventSource()) openLiveEventSource(tpc);
    void pollLiveChannelOnce(tpc);
  }
}

if (typeof window !== 'undefined' && typeof window.addEventListener === 'function') {
  window.addEventListener('online', handleCompSyncOnline);
}

export function encodeCompSyncMatch(comp: Competition, m: Match): Record<string, unknown> {
  const fullB64 = encodeMatchShare(m);
  if (fullB64 && fullB64.length <= 2950) {
    return { t: 'M', v: 1, cid: comp.id, sc: comp.syncCode, dev: getDeviceClientId(), ts: Date.now(), full: fullB64 };
  }
  const S = computeStats(m, 'all');
  const st = S.st;
  const played = st.sets.filter((s, idx) => idx === 0 || s.winner !== null || s.games[0] > 0 || s.games[1] > 0);
  const pStats: Record<string, ManualPlayerStatEntry> = {};
  (S.P || []).forEach((v) => {
    if (!v) return;
    const pk = `${v.team}_${v.playerIdx}`;
    pStats[pk] = {
      w: v.winners || 0,
      u: v.ue || 0,
      f: v.fe || 0,
      st: v.srvPtsTotal || 0,
      sw: v.srvPtsWon || 0,
      fs: v.firstServeIn || 0,
      df: v.doubleFaults || 0,
      sh: v.shots || {}
    };
  });
  return {
    t: 'M',
    v: 1,
    cid: comp.id,
    sc: comp.syncCode,
    dev: getDeviceClientId(),
    ts: Date.now(),
    sum: {
      id: m.id,
      c: m.createdAt,
      d: m.durationMs || 0,
      s: m.status || 'finished',
      m: m.mode || 'doubles',
      wo: m.isWalkover ? 1 : 0,
      cp: m.competition || null,
      tm: m.teams,
      r: m.rules,
      ms: played.map((s) => [s.games[0], s.games[1], s.winner, s.tbScore || null, s.isSuperTB ? 1 : 0]),
      mw: st.isDraw ? 'draw' : st.matchWinner,
      drw: st.isDraw ? 1 : 0,
      ps: pStats
    }
  };
}

export function decodeCompSyncMatch(evt: Record<string, any>, comp: Competition | null): Match | null {
  let m: Match | null = null;
  if (evt.full) {
    m = decodeMatchShare(evt.full);
  } else if (evt.sum) {
    const x = evt.sum;
    m = {
      id: x.id,
      createdAt: x.c || Date.now(),
      durationMs: x.d || 0,
      status: x.s || 'finished',
      mode: x.m || 'doubles',
      isWalkover: !!x.wo,
      manualSets: x.ms || [],
      manualWinner: x.mw ?? null,
      isDraw: !!(x.drw || x.mw === 'draw'),
      manualPlayerStats: x.ps || null,
      competition: x.cp || null,
      teams: x.tm,
      rules: x.r,
      firstServer: [0, 0],
      secondServerIdx: 0,
      shotPrompt: false,
      flipped: false,
      pendingFault: false,
      events: [],
      redoStack: []
    };
  }
  if (!m || !m.id || !m.teams) return null;
  m._syncTs = evt.ts || Date.now();
  if (comp) {
    m.competition = {
      ...(m.competition || {}),
      kind: comp.kind,
      compId: comp.id,
      compName: comp.name
    };
  }
  return m;
}

export async function publishCompSetup(comp: Competition, forceReset = false): Promise<boolean> {
  if (!comp || !comp.syncCode) return false;
  const allFx = comp.fixtures || [];
  const devId = getDeviceClientId();
  const nowTs = Date.now();
  const baseEvt = {
    t: 'S',
    v: 1,
    cid: comp.id,
    sc: comp.syncCode,
    dev: devId,
    ts: nowTs,
    reset: !!forceReset,
    data: buildCompactSetupData(comp, [])
  };
  let idx = 0;
  while (idx < allFx.length) {
    const candidateFx = allFx.slice(0, idx + 1);
    const candidateEvt = { ...baseEvt, data: buildCompactSetupData(comp, candidateFx) };
    if (encodeSyncMessage(candidateEvt).length > 2850) break;
    idx++;
  }
  const evts: Array<Record<string, unknown>> = [
    idx > 0 ? { ...baseEvt, data: buildCompactSetupData(comp, allFx.slice(0, idx)) } : baseEvt
  ];
  while (idx < allFx.length) {
    const chunkFx: Array<Record<string, unknown>> = [];
    while (idx < allFx.length) {
      const nextCompact = buildCompactSetupData(comp, [allFx[idx]]).fx[0];
      const testEvt = {
        t: 'FXC',
        v: 1,
        cid: comp.id,
        sc: comp.syncCode,
        dev: devId,
        ts: nowTs,
        fx: [...chunkFx, nextCompact]
      };
      if (chunkFx.length > 0 && encodeSyncMessage(testEvt).length > 2850) break;
      chunkFx.push(nextCompact);
      idx++;
    }
    evts.push({
      t: 'FXC',
      v: 1,
      cid: comp.id,
      sc: comp.syncCode,
      dev: devId,
      ts: nowTs,
      fx: chunkFx
    });
  }
  let allOk = true;
  for (const evt of evts) {
    const ok = await enqueueAndPublishCompEvent(comp.syncCode, evt);
    if (!ok) allOk = false;
  }
  return allOk;
}

export function publishCompMatch(comp: Competition, m: Match): Promise<boolean> {
  if (!comp || !comp.syncCode || !m) return Promise.resolve(false);
  return enqueueAndPublishCompEvent(comp.syncCode, encodeCompSyncMatch(comp, m));
}

export function publishCompParticipant(comp: Competition, part: Participant): Promise<boolean> {
  if (!comp || !comp.syncCode || !part) return Promise.resolve(false);
  return enqueueAndPublishCompEvent(comp.syncCode, {
    t: 'P',
    v: 1,
    cid: comp.id,
    sc: comp.syncCode,
    dev: getDeviceClientId(),
    ts: Date.now(),
    part
  });
}

export function publishCompParticipantChange(
  comp: Competition,
  op: string,
  pid: string,
  group: string | null = null
): Promise<boolean> {
  if (!comp || !comp.syncCode || !pid) return Promise.resolve(false);
  return enqueueAndPublishCompEvent(comp.syncCode, {
    t: 'PR',
    v: 1,
    cid: comp.id,
    sc: comp.syncCode,
    dev: getDeviceClientId(),
    ts: Date.now(),
    op,
    pid,
    group
  });
}

export function publishCompFixtureAdd(comp: Competition, fx: Fixture): Promise<boolean> {
  if (!comp || !comp.syncCode || !fx) return Promise.resolve(false);
  const fxCompact = buildCompactSetupData(comp, [fx]).fx[0];
  return enqueueAndPublishCompEvent(comp.syncCode, {
    t: 'FA',
    v: 1,
    cid: comp.id,
    sc: comp.syncCode,
    dev: getDeviceClientId(),
    ts: Date.now(),
    fx: fxCompact
  });
}

export function publishCompDeleteMatch(comp: Competition, mid: string): Promise<boolean> {
  if (!comp || !comp.syncCode || !mid) return Promise.resolve(false);
  return enqueueAndPublishCompEvent(comp.syncCode, {
    t: 'DM',
    v: 1,
    cid: comp.id,
    sc: comp.syncCode,
    dev: getDeviceClientId(),
    ts: Date.now(),
    mid
  });
}

export async function publishCompFullSync(comp: Competition): Promise<boolean> {
  if (!comp) return false;
  ensureCompSyncCode(comp);
  await flushCompSyncOutbox();
  await publishCompSetup(comp, false);
  const matches = getCompetitionMatches(comp, false)
    .filter((m) => m.status === 'finished' || (m.manualWinner !== undefined && m.manualWinner !== null))
    .slice(0, 40);
  for (const m of matches) {
    await publishCompMatch(comp, m);
  }
  if (comp.syncCode) store.ui.compLastSyncAt[comp.syncCode] = Date.now();
  return true;
}

export function findCompForSyncEvent(cid: string | null | undefined, syncCode: string | null | undefined): Competition | null {
  const sc = cleanSyncCode(syncCode);
  return store.competitionsList.find((c) => (cid && c.id === cid) || (sc && cleanSyncCode(c.syncCode) === sc)) || null;
}

export function upsertCompFromSetupData(
  setupData: Record<string, any> | null | undefined,
  ts = 0,
  forceReset = false
): Competition | null {
  if (!setupData || !setupData.id || !setupData.c) return null;
  const meta = setupData.c;
  const sc = cleanSyncCode(setupData.sc);
  let comp = findCompForSyncEvent(setupData.id, sc);

  if (!comp) {
    comp = {
      id: setupData.id,
      syncCode: sc || newCompSyncCode(),
      syncMetaTs: ts || 0,
      syncUpdatedAt: Date.now(),
      kind: meta.k || 'league',
      name: meta.n || 'Competencia Compartida',
      format: meta.f || (meta.k === 'tournament' ? 'knockout' : 'league_rr'),
      rankingMode: meta.rm || 'pairs',
      winPts: Number.isFinite(Number(meta.w)) ? Number(meta.w) : 3,
      drawPts: Number.isFinite(Number(meta.dp)) ? Number(meta.dp) : 2,
      lossPts: Number.isFinite(Number(meta.l)) ? Number(meta.l) : 1,
      setBonusPts: Number(meta.sb) || 0,
      gameBonusPts: Number.isFinite(Number(meta.gb)) ? Number(meta.gb) : meta.f === 'proyecto_padel' ? 1 : 0,
      numGroups: Number(meta.ng) || 2,
      advancePerGroup: Number(meta.ag) || 2,
      ...(meta.cc !== undefined ? { courtsCount: clampCourtsCount(meta.cc, 4) } : {}),
      status: meta.st === 'finished' ? 'finished' : 'active',
      ...(meta.fa ? { finishedAt: Number(meta.fa) } : {}),
      defaultRules: meta.dr || {},
      participants: Array.isArray(setupData.pt) ? setupData.pt : [],
      fixtures: hydrateFixturesFromCompact(setupData.fx),
      createdAt: ts || Date.now()
    } as Competition & { syncMetaTs?: number };
    store.competitionsList.unshift(comp);
  } else {
    const extComp = comp as Competition & { syncMetaTs?: number };
    if (ts >= (extComp.syncMetaTs || 0)) {
      extComp.syncMetaTs = ts;
      if (sc) comp.syncCode = sc;
      comp.kind = meta.k || comp.kind;
      comp.name = meta.n || comp.name;
      comp.format = meta.f || comp.format;
      comp.rankingMode = meta.rm || comp.rankingMode;
      comp.winPts = Number.isFinite(Number(meta.w)) ? Number(meta.w) : comp.winPts;
      if (Number.isFinite(Number(meta.dp))) comp.drawPts = Number(meta.dp);
      comp.lossPts = Number.isFinite(Number(meta.l)) ? Number(meta.l) : comp.lossPts;
      comp.setBonusPts = Number(meta.sb) || 0;
      if (Number.isFinite(Number(meta.gb))) comp.gameBonusPts = Number(meta.gb);
      comp.numGroups = Number(meta.ng) || comp.numGroups;
      comp.advancePerGroup = Number(meta.ag) || comp.advancePerGroup;
      if (meta.cc !== undefined) comp.courtsCount = clampCourtsCount(meta.cc, 4);
      comp.status = meta.st === 'finished' ? 'finished' : 'active';
      comp.finishedAt = meta.st === 'finished' ? Number(meta.fa) || comp.finishedAt || Date.now() : null;
      if (meta.dr) comp.defaultRules = meta.dr;
    }

    const inParts: Participant[] = Array.isArray(setupData.pt) ? setupData.pt : [];
    if (forceReset) {
      comp.participants = inParts;
    } else if (inParts.length) {
      comp.participants = comp.participants || [];
      const curMap = new Map(comp.participants.map((p) => [p.id, p]));
      inParts.forEach((np) => {
        if (!curMap.has(np.id)) comp!.participants.push(np);
      });
    }

    const inFx = hydrateFixturesFromCompact(setupData.fx);
    if (forceReset) {
      comp.fixtures = inFx;
      getCompetitionMatches(comp, false).forEach((m) => {
        if (m.competition?.fixtureId) {
          const hit = comp!.fixtures.find((f) => f.id === m.competition?.fixtureId);
          if (hit) hit.matchId = m.id;
        }
      });
    } else if (inFx.length) {
      comp.fixtures = comp.fixtures || [];
      const curFxIds = new Set(comp.fixtures.map((f) => f.id));
      inFx.forEach((nf) => {
        if (!curFxIds.has(nf.id)) comp!.fixtures.push(nf);
      });
    }
    comp.syncUpdatedAt = Date.now();
  }

  resolveCompetitionFixtures(comp);
  saveCompetitions();
  return comp;
}

function shouldAcceptIncomingMatch(existing: Match | undefined, incoming: Match): boolean {
  if (!existing) return true;
  if (existing.status !== 'finished' && incoming.status === 'finished') return true;
  if ((incoming.events?.length || 0) > (existing.events?.length || 0)) return true;
  if (
    incoming.manualWinner !== undefined &&
    incoming.manualWinner !== null &&
    (existing.manualWinner === undefined || existing.manualWinner === null)
  ) {
    return true;
  }
  return false;
}

export function applyIncomingCompEvent(evt: Record<string, any> | null, sourceSyncCode = '', msgId = ''): boolean {
  if (!evt || !evt.t) return false;
  const sc = cleanSyncCode(evt.sc || sourceSyncCode);
  if (msgId) {
    const key = `${sc}:${msgId}`;
    if (compSeenMsgKeys.has(key)) return false;
    compSeenMsgKeys.add(key);
  }

  const isForeign = !evt.dev || evt.dev !== getDeviceClientId();
  let changed = false;

  if (evt.t === 'S' && evt.data) {
    const hadBefore = !!findCompForSyncEvent(evt.cid, sc);
    const comp = upsertCompFromSetupData(evt.data, evt.ts || 0, !!evt.reset);
    if (comp && (!hadBefore || isForeign)) changed = true;
  } else if (evt.t === 'FXC' && Array.isArray(evt.fx)) {
    const comp = findCompForSyncEvent(evt.cid, sc);
    if (comp) {
      comp.fixtures = comp.fixtures || [];
      const existingIds = new Set(comp.fixtures.map((f) => f.id));
      hydrateFixturesFromCompact(evt.fx).forEach((nf) => {
        if (!existingIds.has(nf.id)) {
          comp.fixtures.push(nf);
          changed = true;
        }
      });
      if (changed) {
        resolveCompetitionFixtures(comp);
        saveCompetitions();
      }
    }
  } else if (evt.t === 'M') {
    const comp = findCompForSyncEvent(evt.cid, sc);
    if (!comp) return false;
    const m = decodeCompSyncMatch(evt, comp);
    if (!m) return false;
    const existing = store.historyList.find((x) => x.id === m.id);
    if (shouldAcceptIncomingMatch(existing, m)) {
      archiveMatchToHistory(m, { skipSyncPublish: true });
      comp.syncUpdatedAt = Date.now();
      saveCompetitions();
      changed = true;
      if (isForeign && !store.ui.compSyncSilent) {
        showToast(`📡 Resultado sumado en ${comp.name}: ${teamLabel(m, 0)} vs ${teamLabel(m, 1)}`);
      }
    }
  } else if (evt.t === 'P' && evt.part) {
    const comp = findCompForSyncEvent(evt.cid, sc);
    if (comp) {
      comp.participants = comp.participants || [];
      if (!comp.participants.some((p) => p.id === evt.part.id)) {
        comp.participants.push(evt.part);
        saveCompetitions();
        changed = true;
      }
    }
  } else if (evt.t === 'PR' && evt.pid) {
    const comp = findCompForSyncEvent(evt.cid, sc);
    if (comp) {
      comp.participants = comp.participants || [];
      if (evt.op === 'del') {
        const before = comp.participants.length;
        comp.participants = comp.participants.filter((p) => p.id !== evt.pid);
        if (comp.participants.length !== before) {
          saveCompetitions();
          changed = true;
        }
      } else if (evt.op === 'grp') {
        const pt = comp.participants.find((p) => p.id === evt.pid);
        if (pt && pt.group !== evt.group) {
          pt.group = evt.group || null;
          pt.groupManual = !!evt.group;
          saveCompetitions();
          changed = true;
        }
      } else if (evt.op === 'pause') {
        const pt = comp.participants.find((p) => p.id === evt.pid);
        if (pt) {
          pt.paused = evt.group === '1';
          saveCompetitions();
          changed = true;
        }
      }
    }
  } else if (evt.t === 'FA' && evt.fx) {
    const comp = findCompForSyncEvent(evt.cid, sc);
    if (comp) {
      const fx = hydrateFixturesFromCompact([evt.fx])[0];
      if (fx) {
        comp.fixtures = comp.fixtures || [];
        if (!comp.fixtures.some((f) => f.id === fx.id)) {
          comp.fixtures.push(fx);
          saveCompetitions();
          changed = true;
        }
      }
    }
  } else if (evt.t === 'DM' && evt.mid) {
    const comp = findCompForSyncEvent(evt.cid, sc);
    const beforeLen = store.historyList.length;
    store.historyList = store.historyList.filter((x) => x.id !== evt.mid);
    if (store.historyList.length !== beforeLen) {
      saveJSON(LS_HIST, store.historyList);
      if (comp) {
        resolveCompetitionFixtures(comp);
        saveCompetitions();
      }
      changed = true;
    }
  }

  if (sc) store.ui.compLastSyncAt[sc] = Date.now();
  return changed;
}

export async function pollCompChannelOnce(
  syncCode: string,
  since: string | null = null,
  showFeedback = false
): Promise<{ ok: boolean; changed: boolean; count: number }> {
  const sc = cleanSyncCode(syncCode);
  const topic = compSyncTopic(sc);
  if (!topic || typeof fetch !== 'function') return { ok: false, changed: false, count: 0 };
  if (compPollBusy[sc]) return { ok: false, changed: false, count: 0 };
  if (!showFeedback && Date.now() < (compPollBackoffUntil[sc] || 0)) {
    return { ok: false, changed: false, count: 0 };
  }

  compPollBusy[sc] = true;
  compLastPollAt[sc] = Date.now();
  await flushCompSyncOutbox();

  const sinceParam = since || (compLastMsgTime[sc] > 0 ? String(Math.max(0, compLastMsgTime[sc] - 3)) : '24h');

  try {
    const res = await fetch(`${getSyncServerBaseUrl()}/${topic}/json?poll=1&since=${encodeURIComponent(sinceParam)}`, {
      cache: 'no-store'
    });
    if (res.status === 429) {
      const retryHdr = Number(res.headers?.get?.('Retry-After')) || 0;
      compPollBackoffUntil[sc] = Date.now() + (retryHdr > 0 ? Math.min(30000, retryHdr * 1000) : 15000);
      return { ok: false, changed: false, count: 0 };
    }
    if (!res.ok) return { ok: false, changed: false, count: 0 };
    const txt = await res.text();
    const lines = txt.trim().split('\n').filter(Boolean);
    const decodedEvts: Array<{ evt: Record<string, any>; id: string }> = [];
    for (const line of lines) {
      try {
        const obj = JSON.parse(line);
        if (obj && obj.time) compLastMsgTime[sc] = Math.max(compLastMsgTime[sc] || 0, Number(obj.time) || 0);
        if (obj && obj.event === 'message' && obj.message) {
          const evt = decodeSyncMessage(obj.message);
          if (evt) decodedEvts.push({ evt, id: obj.id || '' });
        }
      } catch {}
    }

    const orderRank: Record<string, number> = { S: 0, FXC: 1, P: 2, PR: 3, FA: 4, M: 5, DM: 6 };
    decodedEvts.sort(
      (a, b) => (orderRank[a.evt.t] ?? 9) - (orderRank[b.evt.t] ?? 9) || (a.evt.ts || 0) - (b.evt.ts || 0)
    );

    let anyChanged = false;
    const prevSilent = !!store.ui.compSyncSilent;
    if (decodedEvts.length > 2) store.ui.compSyncSilent = true;
    try {
      for (const item of decodedEvts) {
        if (applyIncomingCompEvent(item.evt, sc, item.id)) anyChanged = true;
      }
    } finally {
      store.ui.compSyncSilent = prevSilent;
    }

    store.ui.compLastSyncAt[sc] = Date.now();
    store.ui.compSyncConnected[sc] = true;

    if (anyChanged && ['competitions', 'comp-detail', 'players', 'history', 'home', 'new'].includes(store.ui.route)) {
      appHooks.render();
    }
    if (showFeedback) {
      showToast(anyChanged ? '✓ Sincronizado con novedades' : '✓ Todo al día');
    }
    return { ok: true, changed: anyChanged, count: decodedEvts.length };
  } catch {
    return { ok: false, changed: false, count: 0 };
  } finally {
    compPollBusy[sc] = false;
  }
}

export function stopCompLiveWatcher(): void {
  if (compSyncEvtSource) {
    try {
      compSyncEvtSource.close();
    } catch {}
    compSyncEvtSource = null;
  }
  if (compSyncPollTimer) {
    clearInterval(compSyncPollTimer);
    compSyncPollTimer = null;
  }
  compSyncWatchCode = '';
}

export function ensureCompLiveWatcherForCurrentView(): void {
  const { ui, preset, competitionsList } = store;
  let targetComp: Competition | null = null;
  if (ui.route === 'comp-detail') {
    targetComp = getCompById(ui.compId);
  } else if (ui.route === 'players' && (ui.playerScope === 'league' || ui.playerScope === 'tournament')) {
    const cid = ui.playerScope === 'league' ? ui.selectedLeagueId : ui.selectedTournId;
    targetComp = getCompById(cid);
  } else if (ui.route === 'new' && (preset.matchContext === 'league' || preset.matchContext === 'tournament')) {
    targetComp = getCompById(preset.compId);
  } else if (ui.route === 'competitions' || ui.route === 'home') {
    targetComp = competitionsList.find((c) => !!c.syncCode) || null;
  }

  const nextCode = cleanSyncCode(targetComp?.syncCode);
  if (!nextCode) {
    if (compSyncWatchCode) stopCompLiveWatcher();
    return;
  }
  if (compSyncWatchCode === nextCode && compSyncEvtSource) return;

  stopCompLiveWatcher();
  compSyncWatchCode = nextCode;
  const topic = compSyncTopic(nextCode);
  void pollCompChannelOnce(nextCode, compLastMsgTime[nextCode] ? null : '24h', false);

  if (typeof EventSource !== 'undefined') {
    try {
      compSyncEvtSource = new EventSource(`${getSyncServerBaseUrl()}/${topic}/sse`);
      compSyncEvtSource.onopen = () => {
        store.ui.compSyncConnected[nextCode] = true;
      };
      compSyncEvtSource.onmessage = (ev) => {
        try {
          const data = JSON.parse(ev.data);
          if (data && data.time) compLastMsgTime[nextCode] = Math.max(compLastMsgTime[nextCode] || 0, Number(data.time) || 0);
          if (data && (data.event === 'message' || !data.event) && data.message) {
            store.ui.compSyncConnected[nextCode] = true;
            const parsed = decodeSyncMessage(data.message);
            if (parsed && applyIncomingCompEvent(parsed, nextCode, data.id || '')) {
              if (['competitions', 'comp-detail', 'players', 'history', 'home', 'new'].includes(store.ui.route)) {
                appHooks.render();
              }
            }
          }
        } catch {}
      };
      compSyncEvtSource.onerror = () => {
        store.ui.compSyncConnected[nextCode] = false;
      };
    } catch {}
  }

  compSyncPollTimer = setInterval(() => {
    if (compSyncWatchCode !== nextCode || document.hidden) return;
    if (compSyncEvtSource && compSyncEvtSource.readyState === 2) {
      ensureCompLiveWatcherForCurrentView();
      return;
    }
    const elapsed = Date.now() - (compLastPollAt[nextCode] || 0);
    if (store.ui.compSyncConnected[nextCode] && elapsed < 30000) return;
    void pollCompChannelOnce(nextCode, null, false);
  }, 9000);
}

export async function joinSyncedCompetition(rawInput: string): Promise<boolean> {
  let clean = String(rawInput || '').trim();
  const hashIdx = clean.indexOf('#c=');
  if (hashIdx >= 0) clean = clean.slice(hashIdx + 3);
  else if (clean.startsWith('c=')) clean = clean.slice(2);
  else if (clean.startsWith('join=')) clean = clean.slice(5);

  const dotIdx = clean.indexOf('.');
  const code = cleanSyncCode(dotIdx >= 0 ? clean.slice(0, dotIdx) : clean);
  const inlineSnap = dotIdx >= 0 ? clean.slice(dotIdx + 1) : '';
  if (!code || code.length < 4) {
    showToast('Ingresá un código de sala válido');
    return false;
  }

  let bootstrapped: Competition | null = null;
  if (inlineSnap) {
    const inlineObj = decodeSyncMessage(inlineSnap);
    if (inlineObj && inlineObj.id) {
      bootstrapped = upsertCompFromSetupData(inlineObj, 0, false);
    }
  }

  const { ui } = store;
  const existingBefore = findCompForSyncEvent(null, code);
  if (bootstrapped || existingBefore) {
    const c = bootstrapped || existingBefore!;
    ui.compId = c.id;
    ui.compTab = 'fixtures';
    ui.compModal = null;
    ui.route = 'comp-detail';
    appHooks.render();
  } else {
    showToast(`📡 Conectando a sala #${code}...`);
  }

  const res = await pollCompChannelOnce(code, 'all', false);
  const resolvedComp = findCompForSyncEvent(null, code);
  if (resolvedComp) {
    ui.compId = resolvedComp.id;
    ui.compModal = null;
    if (ui.route !== 'comp-detail') {
      ui.compTab = resolvedComp.fixtures?.length ? 'fixtures' : 'standings';
      ui.route = 'comp-detail';
    }
    appHooks.render();
    showToast(`✓ Conectado a ${resolvedComp.name} (#${code})`);
    return true;
  }

  if (!res.ok && !bootstrapped) {
    showToast('Sin conexión o sala no encontrada. Verificá el código o pedí al organizador re-publicar.');
  } else if (!resolvedComp) {
    showToast(`No se encontró una Liga/Torneo activa para #${code}`);
  }
  return false;
}

export function shareCompInvite(comp: Competition | null | undefined): void {
  if (!comp) return;
  void publishCompFullSync(comp);
  const url = getCompShareUrl(comp, false);
  const kindWord = comp.kind === 'tournament' ? 'Torneo' : 'Liga';
  const sc = comp.syncCode;
  const text = `🎾 *${kindWord}: ${comp.name}* (Pádel Control SÉ)\n📡 Código de Sala: *#${sc}*\n\n📲 Abrí este enlace (o escaneá el QR) para conectarte con tu celular y sumar los resultados en vivo:\n${url}`;
  void shareOrCopyText({
    title: `🎾 Unirse a ${comp.name} (#${sc})`,
    text,
    url,
    copyText: text,
    toastMsg: 'Enlace e invitación copiados para compartir',
    promptMsg: 'Copiá esta invitación para WhatsApp:'
  });
}

export function downloadCompSyncQR(comp: Competition | null | undefined): void {
  if (!comp) return;
  try {
    const sc = ensureCompSyncCode(comp);
    const url = getCompShareUrl(comp, true);
    const qrCanvas = document.createElement('canvas');
    renderQRToCanvas(qrCanvas, url, 380);

    const W = 560;
    const H = 760;
    const card = document.createElement('canvas');
    card.width = W;
    card.height = H;
    const ctx = card.getContext('2d');
    if (!ctx) return;

    const bgGrad = ctx.createLinearGradient(0, 0, 0, H);
    bgGrad.addColorStop(0, '#161410');
    bgGrad.addColorStop(0.5, '#0a0a0d');
    bgGrad.addColorStop(1, '#040406');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, W, H);

    ctx.strokeStyle = '#d4af37';
    ctx.lineWidth = 3;
    ctx.strokeRect(16, 16, W - 32, H - 32);
    ctx.strokeStyle = 'rgba(212, 175, 55, 0.35)';
    ctx.lineWidth = 1;
    ctx.strokeRect(22, 22, W - 44, H - 44);

    ctx.textAlign = 'center';
    ctx.fillStyle = '#d4af37';
    ctx.font = 'bold 20px Inter, sans-serif';
    ctx.fillText(
      comp.kind === 'tournament' ? '🏆 TORNEO EN VIVO · PÁDEL CONTROL SÉ' : '🏅 LIGA EN VIVO · PÁDEL CONTROL SÉ',
      W / 2,
      68
    );

    ctx.fillStyle = '#fff6cc';
    ctx.font = '800 34px "Barlow Condensed", sans-serif';
    ctx.fillText(String(comp.name || '').toUpperCase().slice(0, 30), W / 2, 112);

    const qrX = (W - 380) / 2;
    const qrY = 140;
    ctx.fillStyle = '#ffffff';
    roundRect(ctx, qrX - 10, qrY - 10, 400, 400, 18, '#ffffff');
    ctx.drawImage(qrCanvas, qrX, qrY, 380, 380);

    ctx.fillStyle = '#34d399';
    ctx.font = 'bold 28px monospace';
    ctx.fillText(`CÓDIGO DE SALA: #${sc}`, W / 2, 585);

    ctx.fillStyle = '#c2b8a3';
    ctx.font = '15px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('Escaneá para conectarte con tu celular y sumar resultados', W / 2, 622);

    ctx.fillStyle = 'rgba(212, 175, 55, 0.12)';
    ctx.fillRect(36, 646, W - 72, 40);
    ctx.strokeStyle = 'rgba(212, 175, 55, 0.45)';
    ctx.strokeRect(36, 646, W - 72, 40);
    ctx.fillStyle = '#f5d061';
    ctx.font = 'bold 13px monospace';
    ctx.fillText(getCompShareUrl(comp, false), W / 2, 671);

    ctx.fillStyle = '#7d7461';
    ctx.font = '13px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('Tabla, Puntos, ELO y Cuadros sincronizados en tiempo real', W / 2, 718);

    const link = document.createElement('a');
    link.download = `QR-${comp.kind}-${sc}.png`;
    link.href = card.toDataURL('image/png');
    link.click();
    showToast('¡Tarjeta QR descargada!');
  } catch {
    showToast('Error al generar tarjeta QR');
  }
}
