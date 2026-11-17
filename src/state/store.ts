import { DEFAULT_SYNC_SERVER, normalizeSyncServerUrl } from '../codecs/shareCodec';
import { clone, getMatchCompId } from '../core/utils';
import {
  calculateMatchEloPreviewPure,
  getCompScoringSummaryLabelPure,
  getCompetitionScoringConfigPure
} from '../engines/eloEngine';
import type {
  Competition,
  CompetitionScoringConfig,
  EloRatingsResult,
  Match,
  MatchEloStep,
  MatchTeam,
  Prefs,
  Preset,
  SharedRanking,
  UiState
} from '../types';
import { appHooks, showToast } from './runtime';

export const LS_ACTIVE = 'padel_se_active_v1';
export const LS_HIST = 'padel_se_hist_v1';
export const LS_PREFS = 'padel_se_prefs_v1';
export const LS_PRESET = 'padel_se_preset_v1';
export const LS_COMPS = 'padel_se_comps_v1';
export const LS_COMP_OUTBOX = 'padel_se_comp_outbox_v1';
export const LS_DEVICE_ID = 'padel_se_dev_id_v1';
export const LS_META_TS = 'padel_se_meta_ts_v1';
export const STATE_IDB_NAME = 'padel_se_backup_db_v1';
export const STATE_IDB_STORE = 'kv';

export const MIRROR_STORAGE_KEYS = new Set([
  LS_ACTIVE,
  LS_HIST,
  LS_PREFS,
  LS_PRESET,
  LS_COMPS,
  LS_COMP_OUTBOX,
  LS_DEVICE_ID,
  'padel_ranking_vault',
  'padel_shared_ranking'
]);

try {
  if (typeof localStorage !== 'undefined') {
    ['padel_sb_active_v1', 'padel_sb_hist_v1', 'padel_sb_prefs_v1', 'padel_sb_preset_v1', 'padel_sb_seeded_v1'].forEach(
      (k) => localStorage.removeItem(k)
    );
  }
} catch {}

export const DEFAULT_PREFS: Prefs = {
  theme: 'dark',
  sound: true,
  voice: false,
  vibrate: true,
  shotPrompt: true,
  changeoverAlerts: true,
  changeoverTimer: 90,
  wakeLock: true,
  rankingName: 'Mi Ranking',
  rankingId: '',
  dailyWinPts: 3,
  dailyLossPts: 1,
  syncServerUrl: DEFAULT_SYNC_SERVER,
  backupIncludeCards: true,
  lastBackupAt: 0,
  changesSinceBackup: 0,
  backupPromptDismissedAt: 0
};

export const DEFAULT_PRESET: Preset = {
  mode: 'doubles',
  matchContext: 'daily',
  compId: '',
  fixtureId: '',
  stageLabel: '',
  teams: [
    { players: ['', ''], color: '#d4af37' },
    { players: ['', ''], color: '#2f8cff' }
  ],
  totalSets: 3,
  setsToWin: 2,
  gamesPerSet: 6,
  deuceRule: 'golden',
  tiebreakAt: 6,
  tiebreakPoints: 7,
  finalSet: 'normal',
  changeoverRule: 'odd',
  firstServer: [0, 0],
  secondServerIdx: null,
  shotPrompt: true
};

export function getSyncServerBaseUrl(): string {
  return normalizeSyncServerUrl(typeof store !== 'undefined' ? store.prefs?.syncServerUrl : DEFAULT_SYNC_SERVER);
}

let idbBackupDbPromise: Promise<IDBDatabase | null> | null = null;
const idbMirrorPending = new Map<string, { value: unknown; ts: number } | null>();
let idbMirrorFlushScheduled = false;

export function openStateBackupDB(): Promise<IDBDatabase | null> {
  if (typeof indexedDB === 'undefined') return Promise.resolve(null);
  if (idbBackupDbPromise) return idbBackupDbPromise;
  idbBackupDbPromise = new Promise((resolve) => {
    try {
      const req = indexedDB.open(STATE_IDB_NAME, 1);
      req.onupgradeneeded = () => {
        const db = req.result;
        if (!db.objectStoreNames.contains(STATE_IDB_STORE)) {
          db.createObjectStore(STATE_IDB_STORE, { keyPath: 'key' });
        }
      };
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => {
        idbBackupDbPromise = null;
        resolve(null);
      };
    } catch {
      idbBackupDbPromise = null;
      resolve(null);
    }
  });
  return idbBackupDbPromise;
}

function scheduleIDBMirrorFlush(): void {
  if (idbMirrorFlushScheduled) return;
  idbMirrorFlushScheduled = true;
  setTimeout(async () => {
    idbMirrorFlushScheduled = false;
    if (!idbMirrorPending.size) return;
    const batch = Array.from(idbMirrorPending.entries());
    idbMirrorPending.clear();
    const db = await openStateBackupDB();
    if (!db) return;
    try {
      const tx = db.transaction(STATE_IDB_STORE, 'readwrite');
      const storeKv = tx.objectStore(STATE_IDB_STORE);
      for (const [key, entry] of batch) {
        if (entry === null) storeKv.delete(key);
        else storeKv.put({ key, value: entry.value, ts: entry.ts });
      }
    } catch {}
  }, 80);
}

function queueIDBMirror(key: string, value: unknown, ts: number): void {
  if (!MIRROR_STORAGE_KEYS.has(key) || typeof indexedDB === 'undefined') return;
  idbMirrorPending.set(key, value === undefined ? null : { value: clone(value), ts });
  scheduleIDBMirrorFlush();
}

function readLsMetaTimestamps(): Record<string, number> {
  try {
    const raw = localStorage.getItem(LS_META_TS);
    return raw ? (JSON.parse(raw) as Record<string, number>) : {};
  } catch {
    return {};
  }
}

function writeLsMetaTimestamp(key: string, ts: number | null): void {
  try {
    const map = readLsMetaTimestamps();
    if (ts === null) delete map[key];
    else map[key] = ts;
    localStorage.setItem(LS_META_TS, JSON.stringify(map));
  } catch {}
}

export function loadJSON<T>(k: string, fb: T): T {
  try {
    const v = localStorage.getItem(k);
    if (!v) return clone(fb);
    const parsed = JSON.parse(v);
    if (parsed === null || parsed === undefined) return clone(fb);
    if (fb && typeof fb === 'object' && !Array.isArray(fb)) {
      return Object.assign({}, fb, parsed) as T;
    }
    return parsed as T;
  } catch {
    return clone(fb);
  }
}

export function loadArr<T>(k: string): T[] {
  try {
    const v = localStorage.getItem(k);
    const p = v ? JSON.parse(v) : [];
    return Array.isArray(p) ? (p as T[]) : [];
  } catch {
    return [];
  }
}

export function saveJSON(k: string, v: unknown): void {
  const now = Date.now();
  queueIDBMirror(k, v, now);
  try {
    localStorage.setItem(k, JSON.stringify(v));
    if (MIRROR_STORAGE_KEYS.has(k)) writeLsMetaTimestamp(k, now);
  } catch (e) {
    console.warn('Storage error', e);
    if (typeof store !== 'undefined' && !store.ui.lsQuotaWarned) {
      store.ui.lsQuotaWarned = true;
      showToast('⚠️ Memoria rápida llena · Respaldado en base interna; descargá un Backup JSON');
    }
  }
}

export function removeJSON(k: string): void {
  queueIDBMirror(k, undefined, Date.now());
  try {
    localStorage.removeItem(k);
    if (MIRROR_STORAGE_KEYS.has(k)) writeLsMetaTimestamp(k, null);
  } catch {}
}

export function generateRankingId(): string {
  const chars = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ';
  let id = '';
  for (let i = 0; i < 4; i++) id += chars.charAt(Math.floor(Math.random() * chars.length));
  return 'RK-' + id;
}

export function migratePlayerDefaults(tList: MatchTeam[] | undefined): void {
  if (!tList) return;
  for (let tm = 0; tm < 2; tm++) {
    if (!tList[tm] || !tList[tm].players) continue;
    for (let pi = 0; pi < 2; pi++) {
      const cur = tList[tm].players[pi];
      if (/^jugador\s*[1-4]$/i.test(cur?.trim() || '')) {
        tList[tm].players[pi] = pi === 0 ? `DRIVE ${tm + 1}` : `REVÉS ${tm + 1}`;
      }
    }
  }
}

const initPrefs = loadJSON<Prefs>(LS_PREFS, DEFAULT_PREFS);
if (!initPrefs.rankingId) {
  initPrefs.rankingId = generateRankingId();
}
if (!initPrefs.rankingName) {
  initPrefs.rankingName = 'Mi Ranking';
}
initPrefs.syncServerUrl = normalizeSyncServerUrl(initPrefs.syncServerUrl);

const initPreset = loadJSON<Preset>(LS_PRESET, DEFAULT_PRESET);
if (!initPreset.totalSets) {
  initPreset.totalSets = initPreset.setsToWin ? initPreset.setsToWin * 2 - 1 : 3;
}
initPreset.setsToWin = Math.floor(initPreset.totalSets / 2) + 1;
if (initPreset && initPreset.teams) migratePlayerDefaults(initPreset.teams);

const initActiveMatch = loadJSON<Match | null>(LS_ACTIVE, null);
if (initActiveMatch && initActiveMatch.teams) migratePlayerDefaults(initActiveMatch.teams);

const isStandalonePwa =
  typeof window !== 'undefined' &&
  ((window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) ||
    Boolean((navigator as Navigator & { standalone?: boolean }).standalone));

const initUi: UiState = {
  route: 'home',
  qrModalOpen: false,
  obsModalOpen: false,
  supportModalOpen: false,
  obsSelectedPos: 'tl',
  statsId: null,
  sharedMatch: null,
  sharedRanking: loadJSON<SharedRanking | null>('padel_shared_ranking', null),
  playerRankingView: 'local',
  playerScope: 'daily',
  dailyTimeFilter: 'all',
  playerEntityMode: 'individual',
  selectedLeagueId: null,
  selectedTournId: null,
  selectedGroupFilter: 'all',
  playerSort: 'pts',
  playerSortScope: null,
  compFilter: 'all',
  compId: null,
  compTab: 'standings',
  compModal: null,
  compFormState: null,
  quickScoreFixtureId: null,
  quickScoreState: null,
  compSyncConnected: {},
  compLastSyncAt: {},
  liveId: null,
  liveMatch: null,
  liveConnected: false,
  statsSetFilter: 'all',
  histQuery: '',
  histFilter: 'all',
  shotSheet: null,
  menuOpen: false,
  editNamesOpen: false,
  secondSrvPrompt: false,
  changeoverOverlay: null,
  setSummaryOverlay: null,
  matchEndDismissed: false,
  voiceListening: false,
  playerCardReturnRoute: 'home',
  playerCardDraft: null,
  playerCardDraftDirty: false,
  playerCardTouchDrag: false,
  playerCardAiBusy: false,
  playerCardAiStatus: '',
  playerCardAiText: '',
  isOnline: typeof navigator !== 'undefined' ? navigator.onLine !== false : true,
  pwaInstallPrompt: null,
  pwaInstalled: isStandalonePwa,
  swStatus:
    typeof navigator !== 'undefined' && 'serviceWorker' in navigator && typeof location !== 'undefined' && location.protocol !== 'file:'
      ? 'registering'
      : 'unsupported',
  swUpdateReady: false,
  swRegistration: null,
  storagePersisted: null,
  storageUsageBytes: null,
  storageQuotaBytes: null,
  lsQuotaWarned: false
};

export interface AppStore {
  prefs: Prefs;
  preset: Preset;
  activeMatch: Match | null;
  historyList: Match[];
  competitionsList: Competition[];
  ui: UiState;
}

export const store: AppStore = {
  prefs: initPrefs,
  preset: initPreset,
  activeMatch: initActiveMatch,
  historyList: loadArr<Match>(LS_HIST),
  competitionsList: loadArr<Competition>(LS_COMPS),
  ui: initUi
};

saveJSON(LS_PREFS, store.prefs);

export function saveCompetitions(): void {
  saveJSON(LS_COMPS, store.competitionsList);
}

export function markBackupChange(delta = 1): void {
  store.prefs.changesSinceBackup = (Number(store.prefs.changesSinceBackup) || 0) + delta;
  saveJSON(LS_PREFS, store.prefs);
}

export function getCompById(id: string | null | undefined): Competition | null {
  if (!id) return null;
  return store.competitionsList.find((c) => c.id === id) || null;
}

export function getCompetitionMatches(comp: Competition | null | undefined, includeActive = false): Match[] {
  if (!comp) return [];
  const list = store.historyList.filter((m) => getMatchCompId(m) === comp.id);
  if (includeActive && store.activeMatch && getMatchCompId(store.activeMatch) === comp.id) {
    if (!list.some((x) => x.id === store.activeMatch!.id)) list.unshift(store.activeMatch);
  }
  return list;
}

export function getDeviceClientId(): string {
  try {
    let id = localStorage.getItem(LS_DEVICE_ID);
    if (!id) {
      id = 'dev_' + Math.random().toString(36).slice(2, 8);
      localStorage.setItem(LS_DEVICE_ID, id);
    }
    return id;
  } catch {
    return store.prefs.rankingId || 'dev_local';
  }
}

export function getCompetitionScoringConfig(comp: Competition | null | undefined): CompetitionScoringConfig {
  return getCompetitionScoringConfigPure(comp, {
    winPts: store.prefs.dailyWinPts,
    lossPts: store.prefs.dailyLossPts
  });
}

export function getCompScoringSummaryLabel(
  comp: Competition | null | undefined,
  sc: CompetitionScoringConfig | null = null,
  compact = false
): string {
  return getCompScoringSummaryLabelPure(comp, sc, compact, {
    winPts: store.prefs.dailyWinPts,
    lossPts: store.prefs.dailyLossPts
  });
}

export function calculateMatchEloPreview(
  m: Match | null | undefined,
  eloState: EloRatingsResult | null = null,
  opts: { entityMode?: string } = {}
): MatchEloStep | null {
  return calculateMatchEloPreviewPure(m, eloState, {
    entityMode: opts.entityMode,
    allMatches: store.historyList
  });
}

export async function hydrateStateFromIDB(): Promise<void> {
  const db = await openStateBackupDB();
  if (!db) return;
  try {
    const tx = db.transaction(STATE_IDB_STORE, 'readonly');
    const allReq = tx.objectStore(STATE_IDB_STORE).getAll();
    const rows = await new Promise<Array<{ key: string; value: unknown; ts?: number }>>((resolve) => {
      allReq.onsuccess = () => resolve(Array.isArray(allReq.result) ? allReq.result : []);
      allReq.onerror = () => resolve([]);
    });

    const rowMap = new Map(rows.map((r) => [r.key, r]));
    const lsMeta = readLsMetaTimestamps();
    let recovered = false;

    const applyKey = (key: string, val: unknown) => {
      if (key === LS_PREFS && val && typeof val === 'object') {
        store.prefs = Object.assign({}, DEFAULT_PREFS, val as Partial<Prefs>);
        store.prefs.syncServerUrl = normalizeSyncServerUrl(store.prefs.syncServerUrl);
      } else if (key === LS_PRESET && val && typeof val === 'object') {
        store.preset = Object.assign({}, DEFAULT_PRESET, val as Partial<Preset>);
        migratePlayerDefaults(store.preset.teams);
      } else if (key === LS_ACTIVE) {
        store.activeMatch = (val as Match | null) || null;
        if (store.activeMatch?.teams) migratePlayerDefaults(store.activeMatch.teams);
      } else if (key === LS_HIST && Array.isArray(val)) {
        store.historyList = val as Match[];
      } else if (key === LS_COMPS && Array.isArray(val)) {
        store.competitionsList = val as Competition[];
      } else if (key === 'padel_shared_ranking') {
        store.ui.sharedRanking = (val as SharedRanking | null) || null;
      }
      try {
        localStorage.setItem(key, JSON.stringify(val));
        writeLsMetaTimestamp(key, Date.now());
      } catch {}
    };

    for (const key of MIRROR_STORAGE_KEYS) {
      let lsRaw: string | null = null;
      try {
        lsRaw = localStorage.getItem(key);
      } catch {}
      const idbRec = rowMap.get(key);
      if (idbRec && (lsRaw === null || (Number(idbRec.ts) || 0) > (Number(lsMeta[key]) || 0))) {
        applyKey(key, idbRec.value);
        recovered = true;
      } else if (!idbRec && lsRaw !== null) {
        try {
          queueIDBMirror(key, JSON.parse(lsRaw), Number(lsMeta[key]) || Date.now());
        } catch {}
      }
    }

    if (recovered) {
      appHooks.render();
    }
  } catch {}
}

export async function refreshStorageHealth(requestPersist = false): Promise<void> {
  if (typeof navigator === 'undefined' || !navigator.storage) return;
  try {
    if (typeof navigator.storage.persisted === 'function') {
      let persisted = await navigator.storage.persisted();
      if (!persisted && requestPersist && typeof navigator.storage.persist === 'function') {
        persisted = await navigator.storage.persist();
      }
      store.ui.storagePersisted = !!persisted;
    }
    if (typeof navigator.storage.estimate === 'function') {
      const est = await navigator.storage.estimate();
      store.ui.storageUsageBytes = Number(est?.usage) || 0;
      store.ui.storageQuotaBytes = Number(est?.quota) || 0;
    }
    if (store.ui.route === 'settings') {
      appHooks.render();
    }
  } catch {}
}

export const bc = typeof window !== 'undefined' && 'BroadcastChannel' in window ? new BroadcastChannel('padel_sb_channel') : null;
if (bc) {
  bc.onmessage = (ev) => {
    if (ev.data && ev.data.type === 'sync') {
      store.activeMatch = ev.data.match as Match | null;
      if (
        store.ui.route === 'display' ||
        store.ui.route === 'board' ||
        store.ui.route === 'obs' ||
        (store.ui.route === 'stats' && store.ui.statsId === 'active')
      ) {
        appHooks.render();
      }
    }
  };
}

if (typeof window !== 'undefined') {
  window.addEventListener('storage', (ev) => {
    if (ev.key === LS_ACTIVE) {
      store.activeMatch = loadJSON<Match | null>(LS_ACTIVE, null);
      if (store.ui.route === 'display' || store.ui.route === 'board' || store.ui.route === 'obs') {
        appHooks.render();
      }
    }
  });
}

export function persistActive(): void {
  if (store.activeMatch) {
    saveJSON(LS_ACTIVE, store.activeMatch);
    const idx = store.historyList.findIndex((x) => x.id === store.activeMatch!.id);
    if (idx >= 0) {
      store.historyList[idx] = clone(store.activeMatch);
      saveJSON(LS_HIST, store.historyList);
      appHooks.syncCompetitionForMatch(store.activeMatch);
    }
    appHooks.publishLiveMatchState(store.activeMatch);
  } else {
    removeJSON(LS_ACTIVE);
  }
  if (bc) bc.postMessage({ type: 'sync', match: store.activeMatch });
}

export function archiveMatchToHistory(
  m: Match,
  opts: { skipSyncPublish?: boolean; skipBackupCount?: boolean } = {}
): void {
  if (!m) return;
  const idx = store.historyList.findIndex((x) => x.id === m.id);
  const isNewOrJustFinished = idx < 0 || (store.historyList[idx]?.status !== 'finished' && m.status === 'finished');
  const copy = clone(m);
  if (idx >= 0) store.historyList[idx] = copy;
  else store.historyList.unshift(copy);
  saveJSON(LS_HIST, store.historyList);
  if (isNewOrJustFinished && !opts.skipBackupCount && m.status === 'finished') {
    markBackupChange(1);
  }
  appHooks.syncCompetitionForMatch(copy, opts);
}

export function getKnownPlayerNames(): string[] {
  const set = new Set<string>();
  store.historyList.forEach((m) =>
    m.teams.forEach((t) =>
      t.players.forEach((p) => {
        if (p && p.trim()) set.add(p.trim());
      })
    )
  );
  store.competitionsList.forEach((c) =>
    (c.participants || []).forEach((p) => {
      if (p.type === 'pair') {
        (p.players || []).forEach((n) => {
          if (n && n.trim()) set.add(n.trim());
        });
      } else if (p.name && p.name.trim()) {
        set.add(p.name.trim());
      }
    })
  );
  return Array.from(set).sort((a, b) => a.localeCompare(b, 'es'));
}
