import { ICONS, renderSignatureFooter } from '../core/constants';
import { clone, esc } from '../core/utils';
import { triggerBlobDownload } from '../services/liveBroadcast';
import { appHooks, showToast } from '../state/runtime';
import { getKnownPlayerNames, loadJSON, saveJSON, store } from '../state/store';
import type { PlayerCardDraft, PlayerCardLogos } from '../types';
import { navigate, renderTabbar } from '../views/sharedUi';

export interface PlayerCardTheme {
  id: string;
  label: string;
  bgTop: string;
  bgMid: string;
  bgBot: string;
  accent: string;
  accentBright: string;
  accentSoft: string;
  badgeStops: string[];
  courtGlow: string;
  courtGlow2: string;
  frameLight: string;
  frameMid: string;
  frameDark: string;
  ribbonFill: string[];
  defaultMetal: string;
}

export interface PlayerCardMetal {
  id: string;
  label: string;
  swatch: string;
  extrudeDark: string;
  extrudeMid: string;
  bevelTop: string;
  bevelBot: string;
  stops: Array<[number, string]>;
  edgeFaces: Array<[string, string, string]>;
}

export const PLAYER_CARD_THEMES: Record<string, PlayerCardTheme> = {
  diamond: {
    id: 'diamond',
    label: 'Diamante Negro',
    bgTop: '#04060b',
    bgMid: '#0e1726',
    bgBot: '#030509',
    accent: '#38bdf8',
    accentBright: '#e0f2fe',
    accentSoft: '#bae6fd',
    badgeStops: ['#08101f', '#1e293b', '#0f4c81', '#7dd3fc'],
    courtGlow: '#0ea5e9',
    courtGlow2: '#6366f1',
    frameLight: '#ffffff',
    frameMid: '#94a3b8',
    frameDark: '#1e293b',
    ribbonFill: ['#04070f', '#111c33', '#04070f'],
    defaultMetal: 'chrome'
  },
  blue: {
    id: 'blue',
    label: 'Azul Premier',
    bgTop: '#030714',
    bgMid: '#091f4d',
    bgBot: '#020510',
    accent: '#2563eb',
    accentBright: '#38bdf8',
    accentSoft: '#bae6fd',
    badgeStops: ['#08153b', '#1d4ed8', '#0284c7', '#7dd3fc'],
    courtGlow: '#2563eb',
    courtGlow2: '#06b6d4',
    frameLight: '#ffffff',
    frameMid: '#94a3b8',
    frameDark: '#1e293b',
    ribbonFill: ['#030816', '#0d2659', '#030816'],
    defaultMetal: 'chrome'
  },
  purple: {
    id: 'purple',
    label: 'Violeta Tour',
    bgTop: '#060410',
    bgMid: '#1a0a36',
    bgBot: '#05040c',
    accent: '#a855f7',
    accentBright: '#e879f9',
    accentSoft: '#e9d5ff',
    badgeStops: ['#2e0652', '#6b21a8', '#9333ea', '#f0abfc'],
    courtGlow: '#7c3aed',
    courtGlow2: '#2563eb',
    frameLight: '#ffffff',
    frameMid: '#94a3b8',
    frameDark: '#27273a',
    ribbonFill: ['#070512', '#1d0d3d', '#070512'],
    defaultMetal: 'chrome'
  },
  gold: {
    id: 'gold',
    label: 'Obsidian & Oro 24K',
    bgTop: '#050507',
    bgMid: '#1c1506',
    bgBot: '#050507',
    accent: '#d4af37',
    accentBright: '#fde68a',
    accentSoft: '#fef08a',
    badgeStops: ['#261802', '#785006', '#ca8a04', '#fef08a'],
    courtGlow: '#d4af37',
    courtGlow2: '#f59e0b',
    frameLight: '#fffdf2',
    frameMid: '#d4af37',
    frameDark: '#3f2a04',
    ribbonFill: ['#070604', '#211805', '#070604'],
    defaultMetal: 'gold'
  },
  green: {
    id: 'green',
    label: 'Esmeralda Tour',
    bgTop: '#030b08',
    bgMid: '#062c20',
    bgBot: '#030907',
    accent: '#10b981',
    accentBright: '#34d399',
    accentSoft: '#a7f3d0',
    badgeStops: ['#042f22', '#047857', '#059669', '#6ee7b7'],
    courtGlow: '#10b981',
    courtGlow2: '#06b6d4',
    frameLight: '#ffffff',
    frameMid: '#94a3b8',
    frameDark: '#1e293b',
    ribbonFill: ['#030c09', '#073022', '#030c09'],
    defaultMetal: 'chrome'
  },
  crimson: {
    id: 'crimson',
    label: 'Rubí & Titanio',
    bgTop: '#090306',
    bgMid: '#2b0915',
    bgBot: '#070305',
    accent: '#ef4444',
    accentBright: '#fb7185',
    accentSoft: '#fecdd3',
    badgeStops: ['#380612', '#991b1b', '#e11d48', '#fda4af'],
    courtGlow: '#e11d48',
    courtGlow2: '#f97316',
    frameLight: '#ffffff',
    frameMid: '#94a3b8',
    frameDark: '#27272a',
    ribbonFill: ['#0a0306', '#260813', '#0a0306'],
    defaultMetal: 'chrome'
  }
};

export const PLAYER_CARD_METALS: Record<string, PlayerCardMetal> = {
  chrome: {
    id: 'chrome',
    label: 'Cromo Diamante',
    swatch: 'linear-gradient(180deg,#ffffff 0%,#e2e8f0 44%,#334155 50%,#cbd5e1 85%,#64748b 100%)',
    extrudeDark: '#050811',
    extrudeMid: '#334155',
    bevelTop: '#ffffff',
    bevelBot: '#1e293b',
    stops: [
      [0.0, '#ffffff'],
      [0.24, '#f1f5f9'],
      [0.47, '#ffffff'],
      [0.5, '#475569'],
      [0.56, '#94a3b8'],
      [0.76, '#ffffff'],
      [0.92, '#e2e8f0'],
      [1.0, '#64748b']
    ],
    edgeFaces: [
      ['#ffffff', '#cbd5e1', '#94a3b8'],
      ['#e2e8f0', '#64748b', '#475569'],
      ['#94a3b8', '#475569', '#1e293b'],
      ['#475569', '#1e293b', '#0f172a'],
      ['#64748b', '#334155', '#94a3b8'],
      ['#cbd5e1', '#64748b', '#334155'],
      ['#f8fafc', '#94a3b8', '#64748b'],
      ['#ffffff', '#e2e8f0', '#94a3b8']
    ]
  },
  gold: {
    id: 'gold',
    label: 'Oro 24K Pulido',
    swatch: 'linear-gradient(180deg,#fffbeb 0%,#fde68a 44%,#713f12 50%,#facc15 85%,#92400e 100%)',
    extrudeDark: '#1c0f00',
    extrudeMid: '#7c4d04',
    bevelTop: '#fffdf5',
    bevelBot: '#422006',
    stops: [
      [0.0, '#fffdf5'],
      [0.24, '#fef08a'],
      [0.47, '#ffffff'],
      [0.5, '#92400e'],
      [0.56, '#d97706'],
      [0.76, '#fde047'],
      [0.92, '#fef9c3'],
      [1.0, '#b45309']
    ],
    edgeFaces: [
      ['#fffdf2', '#facc15', '#b47409'],
      ['#fef08a', '#b47409', '#784805'],
      ['#ca8a04', '#713f12', '#422006'],
      ['#784805', '#422006', '#261302'],
      ['#a16207', '#713f12', '#d4af37'],
      ['#fde68a', '#a16207', '#713f12'],
      ['#fffbeb', '#d4af37', '#92400e'],
      ['#ffffff', '#fef08a', '#ca8a04']
    ]
  },
  ice: {
    id: 'ice',
    label: 'Platino Zafiro',
    swatch: 'linear-gradient(180deg,#ffffff 0%,#bae6fd 44%,#0c4a6e 50%,#7dd3fc 85%,#0369a1 100%)',
    extrudeDark: '#031124',
    extrudeMid: '#1e3a8a',
    bevelTop: '#ffffff',
    bevelBot: '#082f49',
    stops: [
      [0.0, '#ffffff'],
      [0.24, '#e0f2fe'],
      [0.47, '#ffffff'],
      [0.5, '#1d4ed8'],
      [0.56, '#38bdf8'],
      [0.76, '#f0f9ff'],
      [0.92, '#bae6fd'],
      [1.0, '#0284c7']
    ],
    edgeFaces: [
      ['#ffffff', '#7dd3fc', '#0284c7'],
      ['#e0f2fe', '#38bdf8', '#0369a1'],
      ['#38bdf8', '#1e40af', '#082f49'],
      ['#0369a1', '#082f49', '#031124'],
      ['#0284c7', '#1e3a8a', '#7dd3fc'],
      ['#bae6fd', '#0284c7', '#1e3a8a'],
      ['#f0f9ff', '#38bdf8', '#0369a1'],
      ['#ffffff', '#bae6fd', '#0ea5e9']
    ]
  },
  emerald: {
    id: 'emerald',
    label: 'Esmeralda Puro',
    swatch: 'linear-gradient(180deg,#ecfdf5 0%,#6ee7b7 44%,#064e3b 50%,#10b981 85%,#047857 100%)',
    extrudeDark: '#011912',
    extrudeMid: '#065f46',
    bevelTop: '#ecfdf5',
    bevelBot: '#022c22',
    stops: [
      [0.0, '#ffffff'],
      [0.22, '#a7f3d0'],
      [0.47, '#ffffff'],
      [0.5, '#047857'],
      [0.56, '#10b981'],
      [0.76, '#d1fae5'],
      [0.92, '#6ee7b7'],
      [1.0, '#059669']
    ],
    edgeFaces: [
      ['#ffffff', '#6ee7b7', '#059669'],
      ['#d1fae5', '#10b981', '#047857'],
      ['#10b981', '#065f46', '#022c22'],
      ['#047857', '#022c22', '#011912'],
      ['#059669', '#064e3b', '#34d399'],
      ['#6ee7b7', '#059669', '#064e3b'],
      ['#ecfdf5', '#34d399', '#047857'],
      ['#ffffff', '#a7f3d0', '#10b981']
    ]
  }
};

export const PLAYER_CARD_CATEGORIES = ['1ra', '2da', '3ra', '4ta', '5ta', '6ta', '7ma', '8va', 'Libre', 'Suma'];
export const PLAYER_CARD_POSITIONS = ['Drive', 'Revés', 'Ambos'];
export const PLAYER_CARD_HANDS = ['Diestro', 'Diestra', 'Zurdo', 'Zurda'];
export const PLAYER_CARD_SHOTS = ['Víbora', 'Bandeja', 'Smash', 'Volea', 'Globo', 'Bajada', 'Dejada', 'Chiquita'];

export const DEFAULT_CENTER_LOGO_URL = './assets/pro-padel-logo.webp';
const DEFAULT_CENTER_LOGO_LEGACY_REFS = new Set([
  'Logo PRO PÁDEL.png',
  './Logo PRO PÁDEL.png',
  'logo-pro-padel.png',
  './logo-pro-padel.png'
]);
const PC_LS_META_FALLBACK = 'padel_pc_meta_fb_v1';

let savedPlayerCards: PlayerCardDraft[] = [];
let playerCardLogos: PlayerCardLogos = {
  logo1: null,
  logo2: DEFAULT_CENTER_LOGO_URL,
  logo2Disabled: false,
  subTitle: ''
};
const pcImgCache = new Map<string, HTMLImageElement>();
let pcSegmenterPromise: Promise<any> | null = null;
let pcAiRequestToken = 0;
let pcDraftSaveTimer: ReturnType<typeof setTimeout> | null = null;
let pcCarbonCanvasCache: HTMLCanvasElement | null = null;

export function getSavedPlayerCards(): PlayerCardDraft[] {
  return savedPlayerCards;
}

export function setSavedPlayerCards(cards: PlayerCardDraft[]): void {
  savedPlayerCards = Array.isArray(cards) ? cards : [];
}

export function getPlayerCardLogos(): PlayerCardLogos {
  return playerCardLogos;
}

export function setPlayerCardLogos(next: PlayerCardLogos): void {
  playerCardLogos = next;
  normalizeLogo2State(playerCardLogos);
}

export function bumpPcAiRequestToken(): number {
  return ++pcAiRequestToken;
}

export function normalizeLogo2State(obj: PlayerCardLogos | null | undefined): PlayerCardLogos | null | undefined {
  if (!obj) return obj;
  if (
    !obj.logo2Disabled &&
    (!obj.logo2 ||
      DEFAULT_CENTER_LOGO_LEGACY_REFS.has(obj.logo2) ||
      (typeof obj.logo2 === 'string' && obj.logo2.startsWith('data:image/webp;base64,UklGRiCyAABXRUJQ')))
  ) {
    obj.logo2 = DEFAULT_CENTER_LOGO_URL;
  }
  return obj;
}

export function openPlayerCardDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (!window.indexedDB) {
      reject(new Error('IndexedDB not supported'));
      return;
    }
    const req = indexedDB.open('padel_player_cards_db', 1);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains('cards')) {
        db.createObjectStore('cards', { keyPath: 'id' });
      }
      if (!db.objectStoreNames.contains('meta')) {
        db.createObjectStore('meta', { keyPath: 'key' });
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error || new Error('IDB open failed'));
  });
}

export async function loadPlayerCardDataFromIDB(): Promise<void> {
  const { ui } = store;
  try {
    const db = await openPlayerCardDB();
    const tx = db.transaction(['cards', 'meta'], 'readonly');
    const cardsReq = tx.objectStore('cards').getAll();
    const logosReq = tx.objectStore('meta').get('logos');
    const draftReq = tx.objectStore('meta').get('activeDraft');
    await new Promise<void>((res) => {
      tx.oncomplete = () => res();
      tx.onerror = () => res();
    });
    if (Array.isArray(cardsReq.result)) {
      savedPlayerCards = (cardsReq.result as PlayerCardDraft[]).sort((a, b) => (b.updatedAt || 0) - (a.updatedAt || 0));
    }
    if (logosReq.result && logosReq.result.value) {
      playerCardLogos = Object.assign({ logo1: null, logo2: null, logo2Disabled: false, subTitle: '' }, logosReq.result.value);
    }
    normalizeLogo2State(playerCardLogos);
    if (draftReq.result && draftReq.result.value && !ui.playerCardDraftDirty) {
      const restoredDraft = Object.assign(createDefaultPlayerCardDraft(), clone(draftReq.result.value));
      ui.playerCardDraft = restoredDraft;
      if (ui.route === 'player-card') {
        ui.playerCardAiStatus = restoredDraft.cutoutPhoto ? 'ok' : '';
        ui.playerCardAiText = restoredDraft.cutoutPhoto
          ? '✓ Borrador y recorte restaurados'
          : restoredDraft.origPhoto
            ? '✓ Foto del borrador restaurada'
            : '';
      }
    }
    db.close();
  } catch {
    try {
      const fb = loadJSON<Partial<PlayerCardLogos> | null>(PC_LS_META_FALLBACK, null);
      if (fb) playerCardLogos = Object.assign({ logo1: null, logo2: null, logo2Disabled: false, subTitle: '' }, fb);
      normalizeLogo2State(playerCardLogos);
    } catch {}
  }
  if (ui.route === 'player-card' || ui.route === 'players' || ui.route === 'comp-detail') {
    appHooks.render();
  }
}

async function saveActiveDraftToIDBNow(): Promise<void> {
  const { ui } = store;
  if (!ui.playerCardDraft) return;
  try {
    const db = await openPlayerCardDB();
    const tx = db.transaction(['meta'], 'readwrite');
    tx.objectStore('meta').put({ key: 'activeDraft', value: clone(ui.playerCardDraft) });
    await new Promise<void>((res) => {
      tx.oncomplete = () => res();
      tx.onerror = () => res();
    });
    db.close();
  } catch {}
}

export function scheduleSaveActiveDraftToIDB(immediate = false): void {
  if (pcDraftSaveTimer) clearTimeout(pcDraftSaveTimer);
  if (immediate) {
    pcDraftSaveTimer = null;
    void saveActiveDraftToIDBNow();
    return;
  }
  pcDraftSaveTimer = setTimeout(() => {
    pcDraftSaveTimer = null;
    void saveActiveDraftToIDBNow();
  }, 260);
}

export async function savePlayerCardToIDB(cardObj: PlayerCardDraft): Promise<boolean> {
  const clean: PlayerCardDraft = {
    id: cardObj.id,
    name: cardObj.name || '',
    nickname: cardObj.nickname || '',
    nameKey: (cardObj.name || '').trim().toUpperCase(),
    category: cardObj.category || '6ta',
    age: cardObj.age || '',
    position: cardObj.position || 'Drive',
    hand: cardObj.hand || 'Diestro',
    bestShot: cardObj.bestShot || 'Víbora',
    theme: cardObj.theme || 'diamond',
    metalFinish: cardObj.metalFinish || 'chrome',
    bgMode: cardObj.bgMode || 'ai',
    showAppBrand: cardObj.showAppBrand !== false,
    zoom: Number(cardObj.zoom) || 1,
    offsetX: Number(cardObj.offsetX) || 0,
    offsetY: Number(cardObj.offsetY) || 0,
    origPhoto: cardObj.origPhoto || null,
    cutoutPhoto: cardObj.cutoutPhoto || null,
    origHasAlpha: !!cardObj.origHasAlpha,
    updatedAt: Date.now()
  };
  const idx = savedPlayerCards.findIndex((c) => c.id === clean.id);
  if (idx >= 0) savedPlayerCards[idx] = clean;
  else savedPlayerCards.unshift(clean);
  savedPlayerCards.sort((a, b) => (b.updatedAt || 0) - (a.updatedAt || 0));

  try {
    const db = await openPlayerCardDB();
    const tx = db.transaction('cards', 'readwrite');
    tx.objectStore('cards').put(clean);
    await new Promise<void>((res, rej) => {
      tx.oncomplete = () => res();
      tx.onerror = () => rej(tx.error);
    });
    db.close();
    return true;
  } catch (e) {
    console.warn('Save card IDB error', e);
    return false;
  }
}

export async function deletePlayerCardFromIDB(cardId: string): Promise<void> {
  savedPlayerCards = savedPlayerCards.filter((c) => c.id !== cardId);
  try {
    const db = await openPlayerCardDB();
    const tx = db.transaction('cards', 'readwrite');
    tx.objectStore('cards').delete(cardId);
    await new Promise<void>((res) => {
      tx.oncomplete = () => res();
      tx.onerror = () => res();
    });
    db.close();
  } catch {}
}

export async function saveCardLogosToIDB(): Promise<void> {
  try {
    const db = await openPlayerCardDB();
    const tx = db.transaction('meta', 'readwrite');
    tx.objectStore('meta').put({ key: 'logos', value: playerCardLogos });
    await new Promise<void>((res) => {
      tx.oncomplete = () => res();
      tx.onerror = () => res();
    });
    db.close();
  } catch {
    try {
      saveJSON(PC_LS_META_FALLBACK, { subTitle: playerCardLogos.subTitle || '' });
    } catch {}
  }
}

export function createDefaultPlayerCardDraft(overrides: Partial<PlayerCardDraft> = {}): PlayerCardDraft {
  const { ui } = store;
  const prevTheme = ui.playerCardDraft?.theme || 'diamond';
  const thObj = PLAYER_CARD_THEMES[prevTheme] || PLAYER_CARD_THEMES.diamond;
  const prevMetal = ui.playerCardDraft?.metalFinish || thObj.defaultMetal || 'chrome';
  const prevCat = ui.playerCardDraft?.category || '6ta';
  const prevBrand = ui.playerCardDraft ? ui.playerCardDraft.showAppBrand !== false : true;
  return {
    id: 'pc_' + Date.now().toString(36) + '_' + Math.random().toString(36).slice(2, 6),
    name: '',
    nickname: '',
    category: prevCat,
    age: '',
    position: 'Drive',
    hand: 'Diestro',
    bestShot: 'Víbora',
    theme: prevTheme,
    metalFinish: prevMetal,
    bgMode: 'ai',
    showAppBrand: prevBrand,
    zoom: 1,
    offsetX: 0,
    offsetY: 0,
    origPhoto: null,
    cutoutPhoto: null,
    origHasAlpha: false,
    ...overrides
  };
}

export function getActivePlayerCardDraft(): PlayerCardDraft {
  const { ui } = store;
  if (!ui.playerCardDraft) {
    ui.playerCardDraft = createDefaultPlayerCardDraft();
  }
  return ui.playerCardDraft;
}

export function getSavedCardForPlayerName(name: string): PlayerCardDraft | null {
  const key = String(name || '').trim().toUpperCase();
  if (!key) return null;
  return savedPlayerCards.find((c) => (c.nameKey || c.name?.trim().toUpperCase()) === key) || null;
}

export function openPlayerCardFor(playerName = '', opts: { returnRoute?: string; position?: string } = {}): void {
  const { ui } = store;
  ui.playerCardReturnRoute = opts.returnRoute || ui.route || 'home';
  ui.playerCardTouchDrag = false;
  ui.playerCardDraftDirty = true;
  const cleanName = String(playerName || '').trim();
  const isPlaceholder = /^(DRIVE|REV[EÉ]S)\s*[12]?$/i.test(cleanName);
  const existing = !isPlaceholder && cleanName ? getSavedCardForPlayerName(cleanName) : null;

  if (existing) {
    ui.playerCardDraft = { ...clone(existing) };
    ui.playerCardAiStatus = existing.cutoutPhoto ? 'ok' : '';
    ui.playerCardAiText = existing.cutoutPhoto ? '✓ Tarjeta y recorte cargados' : '';
  } else {
    ui.playerCardDraft = createDefaultPlayerCardDraft({
      name: isPlaceholder ? '' : cleanName,
      position: opts.position || 'Drive'
    });
    ui.playerCardAiStatus = '';
    ui.playerCardAiText = '';
  }
  scheduleSaveActiveDraftToIDB(true);
  navigate('player-card');
}

function loadCachedCardImage(src: string | null | undefined): Promise<HTMLImageElement | null> {
  if (!src) return Promise.resolve(null);
  const effectiveSrc = DEFAULT_CENTER_LOGO_LEGACY_REFS.has(src) ? DEFAULT_CENTER_LOGO_URL : src;
  const hit = pcImgCache.get(effectiveSrc);
  if (hit && hit.complete && hit.naturalWidth > 0) return Promise.resolve(hit);
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      if (pcImgCache.size > 40) {
        const firstKey = pcImgCache.keys().next().value;
        if (firstKey !== undefined) pcImgCache.delete(firstKey);
      }
      pcImgCache.set(effectiveSrc, img);
      resolve(img);
    };
    img.onerror = () => resolve(null);
    img.src = effectiveSrc;
  });
}

function getSyncCachedCardImage(src: string | null | undefined): HTMLImageElement | null {
  if (!src) return null;
  const effectiveSrc = DEFAULT_CENTER_LOGO_LEGACY_REFS.has(src) ? DEFAULT_CENTER_LOGO_URL : src;
  const hit = pcImgCache.get(effectiveSrc);
  if (hit) return hit.complete && hit.naturalWidth > 0 ? hit : null;
  const img = new Image();
  img.onload = () => {
    if (pcImgCache.size > 40) {
      const firstKey = pcImgCache.keys().next().value;
      if (firstKey !== undefined) pcImgCache.delete(firstKey);
    }
    pcImgCache.set(effectiveSrc, img);
    if (store.ui.route === 'player-card') refreshPlayerCardPreview();
  };
  img.onerror = () => {
    pcImgCache.delete(effectiveSrc);
  };
  pcImgCache.set(effectiveSrc, img);
  img.src = effectiveSrc;
  return null;
}

async function readFileScaledToDataUrl(file: File, maxDim = 1500): Promise<string> {
  let bmp: ImageBitmap | null = null;
  let objUrl = '';
  let srcEl: CanvasImageSource | null = null;
  let w = 0;
  let h = 0;
  try {
    if (typeof createImageBitmap === 'function') {
      try {
        bmp = await createImageBitmap(file);
        srcEl = bmp;
        w = bmp.width;
        h = bmp.height;
      } catch {
        bmp = null;
      }
    }
    if (!srcEl) {
      objUrl = URL.createObjectURL(file);
      const img = await new Promise<HTMLImageElement>((resolve, reject) => {
        const el = new Image();
        el.onload = () => resolve(el);
        el.onerror = () => reject(new Error('No se pudo leer la imagen'));
        el.src = objUrl;
      });
      srcEl = img;
      w = img.naturalWidth || img.width;
      h = img.naturalHeight || img.height;
    }
    const scale = Math.min(1, maxDim / Math.max(w || 1, h || 1));
    const tw = Math.max(1, Math.round((w || 1) * scale));
    const th = Math.max(1, Math.round((h || 1) * scale));
    const tmpCanvas = document.createElement('canvas');
    tmpCanvas.width = tw;
    tmpCanvas.height = th;
    const tctx = tmpCanvas.getContext('2d')!;
    tctx.drawImage(srcEl, 0, 0, tw, th);
    const usePng = /png|webp|svg/i.test(file.type || file.name || '');
    const outUrl = usePng ? tmpCanvas.toDataURL('image/png') : tmpCanvas.toDataURL('image/jpeg', 0.9);
    tmpCanvas.width = 0;
    tmpCanvas.height = 0;
    return outUrl;
  } finally {
    if (bmp && typeof bmp.close === 'function') {
      try {
        bmp.close();
      } catch {}
    }
    if (objUrl) {
      try {
        URL.revokeObjectURL(objUrl);
      } catch {}
    }
  }
}

async function readFileAsImage(file: File, maxDim = 1500): Promise<HTMLImageElement> {
  const dataUrl = await readFileScaledToDataUrl(file, maxDim);
  return await new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error('No se pudo decodificar la imagen'));
    img.src = dataUrl;
  });
}

function detectImageAlpha(img: HTMLImageElement): boolean {
  try {
    const c = document.createElement('canvas');
    c.width = 48;
    c.height = 48;
    const ctx = c.getContext('2d')!;
    ctx.drawImage(img, 0, 0, 48, 48);
    const data = ctx.getImageData(0, 0, 48, 48).data;
    for (let i = 3; i < data.length; i += 4) {
      if (data[i] < 245) return true;
    }
  } catch {}
  return false;
}

export async function processUploadedPlayerPhoto(file: File | undefined): Promise<void> {
  if (!file) return;
  const { ui } = store;
  const draft = getActivePlayerCardDraft();
  ui.playerCardDraftDirty = true;
  ui.playerCardTouchDrag = false;
  ui.playerCardAiStatus = 'loading';
  ui.playerCardAiText = '⏳ Cargando y optimizando foto...';
  updatePcAiStatusDom();
  try {
    const img = await readFileAsImage(file);
    const maxDim = 960;
    const scale = Math.min(1, maxDim / Math.max(img.naturalWidth || img.width, img.naturalHeight || img.height));
    const w = Math.max(1, Math.round((img.naturalWidth || img.width) * scale));
    const h = Math.max(1, Math.round((img.naturalHeight || img.height) * scale));
    const c = document.createElement('canvas');
    c.width = w;
    c.height = h;
    const ctx = c.getContext('2d')!;
    ctx.drawImage(img, 0, 0, w, h);

    const hasAlpha = detectImageAlpha(img);
    draft.origPhoto = hasAlpha ? c.toDataURL('image/png') : c.toDataURL('image/jpeg', 0.9);
    c.width = 0;
    c.height = 0;
    draft.origHasAlpha = hasAlpha;
    draft.cutoutPhoto = hasAlpha ? draft.origPhoto : null;
    draft.zoom = 1;
    draft.offsetX = 0;
    draft.offsetY = 0;
    scheduleSaveActiveDraftToIDB(true);

    if (hasAlpha) {
      ui.playerCardAiStatus = 'ok';
      ui.playerCardAiText = '✓ Imagen PNG sin fondo detectada';
      appHooks.render();
      return;
    }

    if (draft.bgMode === 'ai') {
      appHooks.render();
      await runPlayerPhotoAiCutout(draft);
    } else {
      ui.playerCardAiStatus = 'ok';
      ui.playerCardAiText = '⚡ Modo instantáneo activo';
      appHooks.render();
    }
  } catch (err) {
    console.error(err);
    ui.playerCardAiStatus = '';
    ui.playerCardAiText = '';
    appHooks.render();
    showToast('No se pudo cargar esa imagen');
  }
}

export async function processUploadedLogo(file: File | undefined, slot: 1 | 2): Promise<void> {
  if (!file) return;
  try {
    const img = await readFileAsImage(file);
    const maxDim = 600;
    const scale = Math.min(1, maxDim / Math.max(img.naturalWidth || img.width, img.naturalHeight || img.height));
    const w = Math.max(1, Math.round((img.naturalWidth || img.width) * scale));
    const h = Math.max(1, Math.round((img.naturalHeight || img.height) * scale));
    const c = document.createElement('canvas');
    c.width = w;
    c.height = h;
    c.getContext('2d')!.drawImage(img, 0, 0, w, h);
    const dataUrl = c.toDataURL('image/png');
    if (slot === 1) playerCardLogos.logo1 = dataUrl;
    else {
      playerCardLogos.logo2 = dataUrl;
      playerCardLogos.logo2Disabled = false;
    }
    await saveCardLogosToIDB();
    appHooks.render();
    showToast(`Logo ${slot} guardado`);
  } catch {
    showToast('No se pudo cargar el logo');
  }
}

async function loadPlayerAiSegmenter(): Promise<any> {
  if (!pcSegmenterPromise) {
    pcSegmenterPromise = (async () => {
      const visionUrl = 'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.21/vision_bundle.mjs';
      const mod = await import(/* @vite-ignore */ visionUrl);
      const { FilesetResolver, ImageSegmenter } = mod;
      const vision = await FilesetResolver.forVisionTasks(
        'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.21/wasm'
      );
      const modelAssetPath =
        'https://storage.googleapis.com/mediapipe-models/image_segmenter/selfie_segmenter/float16/latest/selfie_segmenter.tflite';
      try {
        return await ImageSegmenter.createFromOptions(vision, {
          baseOptions: { modelAssetPath, delegate: 'GPU' },
          runningMode: 'IMAGE',
          outputConfidenceMasks: true,
          outputCategoryMask: false
        });
      } catch {
        return await ImageSegmenter.createFromOptions(vision, {
          baseOptions: { modelAssetPath, delegate: 'CPU' },
          runningMode: 'IMAGE',
          outputConfidenceMasks: true,
          outputCategoryMask: false
        });
      }
    })().catch((err) => {
      pcSegmenterPromise = null;
      throw err;
    });
  }
  return pcSegmenterPromise;
}

export async function runPlayerPhotoAiCutout(draft: PlayerCardDraft): Promise<void> {
  const { ui } = store;
  if (!draft || !draft.origPhoto) return;
  if (draft.origHasAlpha) {
    draft.cutoutPhoto = draft.origPhoto;
    ui.playerCardAiStatus = 'ok';
    ui.playerCardAiText = '✓ Imagen transparente lista';
    appHooks.render();
    return;
  }

  const token = ++pcAiRequestToken;
  ui.playerCardAiBusy = true;
  ui.playerCardAiStatus = 'loading';
  ui.playerCardAiText = '✨ Recortando fondo con IA (la 1ª vez carga ~3 MB)...';
  updatePcAiStatusDom();

  try {
    const segmenter = await loadPlayerAiSegmenter();
    if (token !== pcAiRequestToken) return;

    const srcImg = await loadCachedCardImage(draft.origPhoto);
    if (!srcImg || token !== pcAiRequestToken) return;

    const w = srcImg.naturalWidth || srcImg.width;
    const h = srcImg.naturalHeight || srcImg.height;
    const result = segmenter.segment(srcImg);
    const masks = result.confidenceMasks || [];
    const labels: string[] = typeof segmenter.getLabels === 'function' ? segmenter.getLabels() : [];

    let personMaskIdx = 0;
    if (masks.length > 1) {
      const found = labels.findIndex((l) => /person|foreground|human/i.test(String(l)));
      personMaskIdx = found >= 0 ? found : 1;
    }

    const maskObj = masks[personMaskIdx];
    if (!maskObj) throw new Error('No mask returned');

    const mw: number = maskObj.width || w;
    const mh: number = maskObj.height || h;
    const conf: Float32Array = maskObj.getAsFloat32Array();

    const maskCanvas = document.createElement('canvas');
    maskCanvas.width = mw;
    maskCanvas.height = mh;
    const mCtx = maskCanvas.getContext('2d')!;
    const imgData = mCtx.createImageData(mw, mh);
    const d = imgData.data;

    let personPixels = 0;
    for (let i = 0; i < conf.length; i++) {
      const c = conf[i];
      const t = Math.max(0, Math.min(1, (c - 0.3) / (0.7 - 0.3)));
      const alpha = Math.round(t * t * (3 - 2 * t) * 255);
      if (alpha > 128) personPixels++;
      const p = i * 4;
      d[p] = 255;
      d[p + 1] = 255;
      d[p + 2] = 255;
      d[p + 3] = alpha;
    }
    mCtx.putImageData(imgData, 0, 0);

    try {
      result.close?.();
    } catch {}

    if (personPixels < conf.length * 0.015) {
      throw new Error('No se detectó claramente una persona en la foto');
    }

    const outCanvas = document.createElement('canvas');
    outCanvas.width = w;
    outCanvas.height = h;
    const oCtx = outCanvas.getContext('2d')!;
    try {
      oCtx.filter = 'blur(1.4px)';
    } catch {}
    oCtx.drawImage(maskCanvas, 0, 0, w, h);
    try {
      oCtx.filter = 'none';
    } catch {}
    oCtx.globalCompositeOperation = 'source-in';
    oCtx.drawImage(srcImg, 0, 0, w, h);
    oCtx.globalCompositeOperation = 'source-over';

    if (token !== pcAiRequestToken) return;
    draft.cutoutPhoto = outCanvas.toDataURL('image/png');
    maskCanvas.width = 0;
    maskCanvas.height = 0;
    outCanvas.width = 0;
    outCanvas.height = 0;
    draft.bgMode = 'ai';
    ui.playerCardAiBusy = false;
    ui.playerCardAiStatus = 'ok';
    ui.playerCardAiText = '✓ Fondo recortado automáticamente';
    ui.playerCardDraftDirty = true;
    scheduleSaveActiveDraftToIDB(true);
    updatePcAiStatusDom();
    refreshPlayerCardPreview();
  } catch (err) {
    if (token !== pcAiRequestToken) return;
    console.warn('AI cutout fallback:', err);
    ui.playerCardAiBusy = false;
    draft.bgMode = 'instant';
    ui.playerCardAiStatus = 'err';
    ui.playerCardAiText = 'No se pudo usar IA (sin conexión o foto compleja) · Aplicado Modo Instantáneo';
    ui.playerCardDraftDirty = true;
    scheduleSaveActiveDraftToIDB(true);
    appHooks.render();
  }
}

export function updatePcAiStatusDom(): void {
  const { ui } = store;
  const el = document.getElementById('pc-ai-status-box');
  if (!el) return;
  if (!ui.playerCardAiText) {
    el.style.display = 'none';
    return;
  }
  el.style.display = 'flex';
  el.className = 'pc-ai-status ' + (ui.playerCardAiStatus === 'ok' ? 'ok' : ui.playerCardAiStatus === 'err' ? 'err' : '');
  el.textContent = ui.playerCardAiText;
}

function traceChamferedRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, cut: number): void {
  ctx.beginPath();
  ctx.moveTo(x + cut, y);
  ctx.lineTo(x + w - cut, y);
  ctx.lineTo(x + w, y + cut);
  ctx.lineTo(x + w, y + h - cut);
  ctx.lineTo(x + w - cut, y + h);
  ctx.lineTo(x + cut, y + h);
  ctx.lineTo(x, y + h - cut);
  ctx.lineTo(x, y + cut);
  ctx.closePath();
}

function drawRoundedPath(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number): void {
  ctx.beginPath();
  if (ctx.roundRect) ctx.roundRect(x, y, w, h, r);
  else ctx.rect(x, y, w, h);
}

function fitCanvasFontSize(
  ctx: CanvasRenderingContext2D,
  text: string,
  maxW: number,
  startSize: number,
  minSize: number,
  fontFmt: (size: number) => string
): number {
  let size = startSize;
  while (size > minSize) {
    ctx.font = fontFmt(size);
    if (ctx.measureText(text).width <= maxW) break;
    size -= 2;
  }
  ctx.font = fontFmt(size);
  return size;
}

function drawPadelControlEmblemCanvas(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  size: number,
  theme: PlayerCardTheme
): void {
  ctx.save();
  ctx.translate(cx, cy);
  const s = size / 120;
  ctx.scale(s, s);
  ctx.translate(-60, -60);

  const gGold = ctx.createLinearGradient(10, 10, 110, 110);
  if (theme.id === 'purple') {
    gGold.addColorStop(0, '#ffffff');
    gGold.addColorStop(0.35, '#e9d5ff');
    gGold.addColorStop(0.7, '#a855f7');
    gGold.addColorStop(1, '#f5d061');
  } else {
    gGold.addColorStop(0, '#fff6cc');
    gGold.addColorStop(0.35, '#f3d266');
    gGold.addColorStop(0.7, '#d4af37');
    gGold.addColorStop(1, '#a87910');
  }

  drawRoundedPath(ctx, 4, 4, 112, 112, 26);
  ctx.fillStyle = '#09080f';
  ctx.fill();
  ctx.lineWidth = 3;
  ctx.strokeStyle = gGold;
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(60, 14);
  ctx.lineTo(96, 27);
  ctx.lineTo(96, 59);
  ctx.quadraticCurveTo(96, 86, 60, 105);
  ctx.quadraticCurveTo(24, 86, 24, 59);
  ctx.lineTo(24, 27);
  ctx.closePath();
  ctx.fillStyle = 'rgba(12, 11, 20, 0.9)';
  ctx.fill();
  ctx.lineWidth = 1.6;
  ctx.strokeStyle = gGold;
  ctx.stroke();

  ctx.save();
  ctx.translate(58, 57);
  ctx.rotate(-0.42);
  ctx.translate(-58, -57);
  ctx.beginPath();
  ctx.ellipse(60, 46, 20, 24, 0, 0, Math.PI * 2);
  ctx.fillStyle = gGold;
  ctx.fill();
  ctx.beginPath();
  ctx.ellipse(60, 46, 15.5, 19, 0, 0, Math.PI * 2);
  ctx.fillStyle = '#09090d';
  ctx.fill();
  drawRoundedPath(ctx, 56, 69, 8, 28, 3);
  ctx.fillStyle = gGold;
  ctx.fill();
  ctx.fillStyle = gGold;
  [
    [-6, -9],
    [0, -10],
    [6, -9],
    [-9, -2],
    [-3, -2],
    [3, -2],
    [9, -2],
    [-8, 5],
    [-2, 5],
    [4, 5],
    [10, 5],
    [-5, 11],
    [0, 12],
    [5, 11]
  ].forEach(([hx, hy]) => {
    ctx.beginPath();
    ctx.arc(60 + hx, 46 + hy, 1.7, 0, Math.PI * 2);
    ctx.fill();
  });
  ctx.restore();

  const ballG = ctx.createRadialGradient(75, 69, 2, 79, 73, 15);
  ballG.addColorStop(0, '#ffffff');
  ballG.addColorStop(0.5, theme.accentBright);
  ballG.addColorStop(1, theme.accent);
  ctx.beginPath();
  ctx.arc(79, 73, 14, 0, Math.PI * 2);
  ctx.fillStyle = ballG;
  ctx.fill();
  ctx.lineWidth = 2;
  ctx.strokeStyle = '#070709';
  ctx.stroke();

  drawRoundedPath(ctx, 41, 94, 38, 17, 8.5);
  ctx.fillStyle = '#09080c';
  ctx.fill();
  ctx.lineWidth = 1.5;
  ctx.strokeStyle = gGold;
  ctx.stroke();
  ctx.fillStyle = '#ffffff';
  ctx.font = 'italic 800 12.5px "Barlow Condensed", sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('SÉ', 60, 103);

  ctx.restore();
}

function getCarbonPattern(ctx: CanvasRenderingContext2D): CanvasPattern | null {
  if (!pcCarbonCanvasCache) {
    const c = document.createElement('canvas');
    c.width = 16;
    c.height = 16;
    const x = c.getContext('2d')!;
    x.fillStyle = '#05070d';
    x.fillRect(0, 0, 16, 16);
    x.fillStyle = '#0e1422';
    x.fillRect(0, 0, 8, 8);
    x.fillRect(8, 8, 8, 8);
    x.fillStyle = 'rgba(255,255,255,0.065)';
    x.fillRect(0, 0, 8, 3);
    x.fillRect(8, 8, 8, 3);
    x.fillStyle = '#090d16';
    x.fillRect(8, 0, 8, 8);
    x.fillRect(0, 8, 8, 8);
    x.fillStyle = 'rgba(255,255,255,0.03)';
    x.fillRect(8, 4, 8, 2);
    x.fillRect(0, 12, 8, 2);
    pcCarbonCanvasCache = c;
  }
  return ctx.createPattern(pcCarbonCanvasCache, 'repeat');
}

function getMetalPalette(metalKey: string | undefined, theme: PlayerCardTheme | undefined): PlayerCardMetal {
  return (
    (metalKey ? PLAYER_CARD_METALS[metalKey] : undefined) ||
    (theme?.defaultMetal ? PLAYER_CARD_METALS[theme.defaultMetal] : undefined) ||
    PLAYER_CARD_METALS.chrome
  );
}

function drawDiamondGlint(ctx: CanvasRenderingContext2D, cx: number, cy: number, size: number, tint = '#ffffff'): void {
  ctx.save();
  ctx.translate(cx, cy);
  const glow = ctx.createRadialGradient(0, 0, 0, 0, 0, size * 0.9);
  glow.addColorStop(0, '#ffffff');
  glow.addColorStop(0.28, tint + 'cc');
  glow.addColorStop(1, 'transparent');
  ctx.fillStyle = glow;
  ctx.beginPath();
  ctx.arc(0, 0, size * 0.9, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#ffffff';
  const drawRays = (len: number, thick: number) => {
    ctx.beginPath();
    ctx.moveTo(0, -len);
    ctx.quadraticCurveTo(thick * 0.4, -thick * 0.4, len, 0);
    ctx.quadraticCurveTo(thick * 0.4, thick * 0.4, 0, len);
    ctx.quadraticCurveTo(-thick * 0.4, thick * 0.4, -len, 0);
    ctx.quadraticCurveTo(-thick * 0.4, -thick * 0.4, 0, -len);
    ctx.closePath();
    ctx.fill();
  };
  drawRays(size, size * 0.14);
  ctx.rotate(Math.PI / 4);
  ctx.globalAlpha = 0.55;
  drawRays(size * 0.46, size * 0.1);
  ctx.restore();
}

function drawMetallicText(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  opts: {
    metalKey?: string;
    theme?: PlayerCardTheme;
    fontSize?: number;
    extrude?: number;
    bevelWidth?: number;
    glowColor?: string;
    glowBlur?: number;
  } = {}
): void {
  const metal = getMetalPalette(opts.metalKey, opts.theme);
  const fontSize = opts.fontSize || 48;
  const extrude = opts.extrude ?? Math.max(3, Math.round(fontSize * 0.08));
  const bevelWidth = opts.bevelWidth ?? Math.max(1.2, fontSize * 0.025);
  const isItalic = /italic/i.test(ctx.font || '');

  const m = ctx.measureText(text);
  const asc = m.actualBoundingBoxAscent || fontSize * 0.72;
  const desc = m.actualBoundingBoxDescent || fontSize * 0.08;
  const tb = ctx.textBaseline || 'alphabetic';
  let yTop: number;
  let yBot: number;
  if (tb === 'middle') {
    yTop = y - asc * 0.54;
    yBot = y + asc * 0.54;
  } else if (tb === 'top' || tb === 'hanging') {
    yTop = y;
    yBot = y + asc;
  } else {
    yTop = y - asc;
    yBot = y + Math.max(2, desc);
  }
  if (yBot - yTop < 12) {
    yTop = y - fontSize * 0.5;
    yBot = y + fontSize * 0.5;
  }

  ctx.save();
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';

  if (extrude > 0) {
    for (let s = extrude; s >= 1; s--) {
      ctx.save();
      if (s === extrude) {
        ctx.shadowColor = 'rgba(0, 0, 0, 0.90)';
        ctx.shadowBlur = Math.max(8, extrude * 3.2);
        ctx.shadowOffsetX = extrude * 0.45;
        ctx.shadowOffsetY = extrude * 1.1;
      } else {
        ctx.shadowColor = 'transparent';
        ctx.shadowBlur = 0;
      }
      ctx.fillStyle = s > extrude * 0.45 ? metal.extrudeDark : metal.extrudeMid;
      ctx.fillText(text, x + s * 0.46, y + s * 0.96);
      ctx.restore();
    }
  }

  if (opts.glowColor) {
    ctx.save();
    ctx.shadowColor = opts.glowColor;
    ctx.shadowBlur = opts.glowBlur || 22;
    ctx.fillStyle = 'rgba(255,255,255,0.01)';
    ctx.fillText(text, x, y);
    ctx.restore();
  }

  if (bevelWidth > 0) {
    const bGrad = ctx.createLinearGradient(x, yTop, x + (isItalic ? 18 : 0), yBot);
    bGrad.addColorStop(0, metal.bevelTop);
    bGrad.addColorStop(0.5, metal.extrudeMid);
    bGrad.addColorStop(1, metal.bevelBot);
    ctx.lineWidth = bevelWidth * 2;
    ctx.strokeStyle = bGrad;
    ctx.strokeText(text, x, y);
  }

  const xShift = isItalic ? Math.round((yBot - yTop) * 0.16) : 0;
  const fGrad = ctx.createLinearGradient(x, yTop, x + xShift, yBot);
  metal.stops.forEach(([pos, col]) => fGrad.addColorStop(pos, col));
  ctx.fillStyle = fGrad;
  ctx.fillText(text, x, y);

  ctx.save();
  ctx.globalAlpha = 0.34;
  ctx.fillStyle = '#ffffff';
  ctx.fillText(text, x - 0.6, y - 0.9);
  ctx.restore();

  ctx.restore();
}

function traceArmorPlatePath(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, cut = 20): void {
  const r = 8;
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - cut, y);
  ctx.lineTo(x + w, y + cut);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + cut, y + h);
  ctx.lineTo(x, y + h - cut);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

function traceDiamondShieldPath(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number): void {
  ctx.beginPath();
  ctx.moveTo(x + 26, y);
  ctx.lineTo(x + w - 26, y);
  ctx.lineTo(x + w, y + 26);
  ctx.lineTo(x + w - 12, y + h * 0.72);
  ctx.lineTo(x + w * 0.5, y + h);
  ctx.lineTo(x + 12, y + h * 0.74);
  ctx.lineTo(x, y + 26);
  ctx.closePath();
}

function traceHexagonPath(ctx: CanvasRenderingContext2D, cx: number, cy: number, rad: number): void {
  ctx.beginPath();
  for (let i = 0; i < 6; i++) {
    const a = (Math.PI / 3) * i - Math.PI / 6;
    const px = cx + Math.cos(a) * rad;
    const py = cy + Math.sin(a) * rad;
    if (i === 0) ctx.moveTo(px, py);
    else ctx.lineTo(px, py);
  }
  ctx.closePath();
}

function drawIconMedallion(ctx: CanvasRenderingContext2D, cx: number, cy: number, theme: PlayerCardTheme): void {
  ctx.save();
  traceHexagonPath(ctx, cx, cy, 34);
  const bg = ctx.createLinearGradient(cx - 28, cy - 30, cx + 28, cy + 30);
  bg.addColorStop(0, '#162038');
  bg.addColorStop(0.55, '#070b15');
  bg.addColorStop(1, '#0d1527');
  ctx.fillStyle = bg;
  ctx.fill();

  const brd = ctx.createLinearGradient(cx - 28, cy - 30, cx + 28, cy + 30);
  brd.addColorStop(0, '#ffffff');
  brd.addColorStop(0.45, theme.accentBright);
  brd.addColorStop(1, theme.accent + '66');
  ctx.lineWidth = 2.2;
  ctx.strokeStyle = brd;
  ctx.stroke();
  ctx.restore();
}

function drawCardIconCalendar(ctx: CanvasRenderingContext2D, cx: number, cy: number, theme: PlayerCardTheme): void {
  ctx.save();
  ctx.translate(cx, cy);
  ctx.scale(0.84, 0.84);
  const met = ctx.createLinearGradient(0, -24, 0, 24);
  met.addColorStop(0, '#ffffff');
  met.addColorStop(0.5, '#cbd5e1');
  met.addColorStop(1, '#94a3b8');
  ctx.strokeStyle = met;
  ctx.fillStyle = met;
  ctx.lineWidth = 3.2;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  drawRoundedPath(ctx, -22, -18, 44, 40, 7);
  ctx.stroke();

  ctx.fillStyle = theme.accentBright + '66';
  ctx.fillRect(-20, -16, 40, 10);

  ctx.beginPath();
  ctx.moveTo(-22, -6);
  ctx.lineTo(22, -6);
  ctx.moveTo(-10, -25);
  ctx.lineTo(-10, -14);
  ctx.moveTo(10, -25);
  ctx.lineTo(10, -14);
  ctx.stroke();

  ctx.fillStyle = '#ffffff';
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 4; c++) {
      ctx.beginPath();
      ctx.arc(-13.5 + c * 9, 2.5 + r * 7.2, 2.1, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  ctx.restore();
}

function drawCardIconPadelCourt(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  pos: string,
  theme: PlayerCardTheme
): void {
  ctx.save();
  ctx.translate(cx, cy);
  ctx.scale(0.84, 0.84);
  const tlx = -21;
  const trx = 21;
  const blx = -28;
  const brx = 28;
  const ty = -19;
  const by = 19;
  const p = String(pos || '').toLowerCase();
  if (p.includes('drive') || p.includes('ambos')) {
    ctx.beginPath();
    ctx.moveTo(0, ty);
    ctx.lineTo(trx, ty);
    ctx.lineTo(brx, by);
    ctx.lineTo(0, by);
    ctx.closePath();
    ctx.fillStyle = theme.accentBright + '77';
    ctx.fill();
  }
  if (p.includes('rev') || p.includes('ambos')) {
    ctx.beginPath();
    ctx.moveTo(tlx, ty);
    ctx.lineTo(0, ty);
    ctx.lineTo(0, by);
    ctx.lineTo(blx, by);
    ctx.closePath();
    ctx.fillStyle = theme.accentBright + '77';
    ctx.fill();
  }

  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth = 2.8;
  ctx.lineJoin = 'round';
  ctx.beginPath();
  ctx.moveTo(tlx, ty);
  ctx.lineTo(trx, ty);
  ctx.lineTo(brx, by);
  ctx.lineTo(blx, by);
  ctx.closePath();
  ctx.stroke();

  ctx.lineWidth = 2.3;
  ctx.beginPath();
  ctx.moveTo(-24.5, 0);
  ctx.lineTo(24.5, 0);
  ctx.moveTo(0, ty);
  ctx.lineTo(0, by);
  ctx.moveTo(-22.8, -9.5);
  ctx.lineTo(22.8, -9.5);
  ctx.moveTo(-26.2, 10.5);
  ctx.lineTo(26.2, 10.5);
  ctx.stroke();
  ctx.restore();
}

function drawCardIconHand(ctx: CanvasRenderingContext2D, cx: number, cy: number, hand: string, theme: PlayerCardTheme): void {
  ctx.save();
  ctx.translate(cx, cy);
  ctx.scale(0.84, 0.84);
  const isLeft = /zurd/i.test(String(hand || ''));
  if (!isLeft) ctx.scale(-1, 1);
  const met = ctx.createLinearGradient(0, -26, 0, 24);
  met.addColorStop(0, '#ffffff');
  met.addColorStop(0.55, '#cbd5e1');
  met.addColorStop(1, theme.accentSoft);
  ctx.fillStyle = met;
  ctx.beginPath();
  ctx.moveTo(-14, 18);
  ctx.quadraticCurveTo(-18, 6, -24, -2);
  ctx.quadraticCurveTo(-27, -7, -21, -9);
  ctx.quadraticCurveTo(-17, -9, -12, 0);
  ctx.lineTo(-14, -18);
  ctx.quadraticCurveTo(-14, -23, -10, -23);
  ctx.quadraticCurveTo(-6, -23, -6, -18);
  ctx.lineTo(-5, -2);
  ctx.lineTo(-4, -23);
  ctx.quadraticCurveTo(-4, -28, 0, -28);
  ctx.quadraticCurveTo(4, -28, 4, -23);
  ctx.lineTo(4, -3);
  ctx.lineTo(7, -21);
  ctx.quadraticCurveTo(7, -26, 11, -26);
  ctx.quadraticCurveTo(15, -26, 15, -20);
  ctx.lineTo(13, -1);
  ctx.lineTo(18, -14);
  ctx.quadraticCurveTo(19, -18, 22, -17);
  ctx.quadraticCurveTo(25, -16, 24, -11);
  ctx.lineTo(18, 11);
  ctx.quadraticCurveTo(15, 24, 1, 24);
  ctx.quadraticCurveTo(-9, 24, -14, 18);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

function drawCardIconRacket(ctx: CanvasRenderingContext2D, cx: number, cy: number, theme: PlayerCardTheme): void {
  ctx.save();
  ctx.translate(cx, cy);
  ctx.scale(0.86, 0.86);
  ctx.rotate(-0.62);
  const met = ctx.createLinearGradient(-15, -30, 15, 26);
  met.addColorStop(0, '#ffffff');
  met.addColorStop(0.5, theme.accentBright);
  met.addColorStop(1, '#94a3b8');
  ctx.strokeStyle = met;
  ctx.fillStyle = '#ffffff';
  ctx.lineWidth = 3.2;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.beginPath();
  ctx.ellipse(0, -10, 15.5, 19.5, 0, 0, Math.PI * 2);
  ctx.fillStyle = theme.accent + '35';
  ctx.fill();
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(-5, 9);
  ctx.lineTo(-3, 25);
  ctx.lineTo(3, 25);
  ctx.lineTo(5, 9);
  ctx.stroke();
  ctx.fillStyle = '#ffffff';
  const holes = [
    [-5, -19],
    [0, -20],
    [5, -19],
    [-8, -12],
    [-2.7, -12],
    [2.7, -12],
    [8, -12],
    [-7, -5],
    [0, -5],
    [7, -5],
    [-4, 1],
    [4, 1]
  ];
  holes.forEach(([hx, hy]) => {
    ctx.beginPath();
    ctx.arc(hx, hy, 1.9, 0, Math.PI * 2);
    ctx.fill();
  });
  ctx.restore();
}

function drawProPadelEmblem(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  scale: number,
  theme: PlayerCardTheme,
  metalKey: string
): void {
  const metal = getMetalPalette(metalKey, theme);
  ctx.save();
  ctx.translate(cx, cy);
  ctx.scale(scale, scale);

  ctx.save();
  ctx.beginPath();
  ctx.moveTo(0, -82);
  ctx.lineTo(74, -44);
  ctx.lineTo(62, 54);
  ctx.lineTo(0, 92);
  ctx.lineTo(-62, 54);
  ctx.lineTo(-74, -44);
  ctx.closePath();
  ctx.fillStyle = '#04070f';
  ctx.shadowColor = 'rgba(0,0,0,0.85)';
  ctx.shadowBlur = 20;
  ctx.fill();

  const cGrad = ctx.createLinearGradient(-60, -80, 60, 80);
  cGrad.addColorStop(0, theme.accent + '58');
  cGrad.addColorStop(0.5, 'rgba(8, 13, 28, 0.92)');
  cGrad.addColorStop(1, theme.courtGlow2 + '48');
  ctx.shadowColor = theme.accent;
  ctx.shadowBlur = 22;
  ctx.fillStyle = cGrad;
  ctx.fill();

  ctx.shadowBlur = 0;
  ctx.lineWidth = 2.6;
  const fRim = ctx.createLinearGradient(-70, -80, 70, 80);
  fRim.addColorStop(0, '#ffffff');
  fRim.addColorStop(0.5, theme.accentBright);
  fRim.addColorStop(1, metal.extrudeMid);
  ctx.strokeStyle = fRim;
  ctx.stroke();
  ctx.restore();

  ctx.save();
  ctx.beginPath();
  ctx.moveTo(-64, 18);
  ctx.quadraticCurveTo(10, -78, 72, -36);
  ctx.quadraticCurveTo(8, -56, -54, 24);
  ctx.closePath();
  ctx.fillStyle = theme.accentBright + 'aa';
  ctx.shadowColor = theme.accentBright;
  ctx.shadowBlur = 14;
  ctx.fill();
  ctx.restore();

  const sGrad = ctx.createLinearGradient(0, -56, 20, 66);
  metal.stops.forEach(([pos, col]) => sGrad.addColorStop(pos, col));

  ctx.save();
  ctx.fillStyle = sGrad;
  ctx.shadowColor = 'rgba(0,0,0,0.85)';
  ctx.shadowBlur = 14;
  ctx.shadowOffsetY = 5;

  ctx.beginPath();
  ctx.arc(-6, -34, 11.5, 0, Math.PI * 2);
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(-18, -18);
  ctx.quadraticCurveTo(-34, -12, -52, 4);
  ctx.quadraticCurveTo(-56, 8, -48, 12);
  ctx.quadraticCurveTo(-32, 0, -21, -4);
  ctx.quadraticCurveTo(-24, 14, -26, 24);
  ctx.quadraticCurveTo(-40, 42, -58, 56);
  ctx.quadraticCurveTo(-63, 60, -54, 64);
  ctx.quadraticCurveTo(-34, 52, -12, 26);
  ctx.quadraticCurveTo(14, 34, 24, 54);
  ctx.quadraticCurveTo(27, 63, 38, 63);
  ctx.quadraticCurveTo(42, 60, 35, 52);
  ctx.quadraticCurveTo(28, 30, 8, 14);
  ctx.quadraticCurveTo(12, -2, 16, -14);
  ctx.quadraticCurveTo(32, -26, 46, -42);
  ctx.quadraticCurveTo(48, -48, 41, -49);
  ctx.quadraticCurveTo(26, -35, 8, -22);
  ctx.quadraticCurveTo(-4, -22, -18, -18);
  ctx.closePath();
  ctx.fill();

  ctx.save();
  ctx.translate(55, -55);
  ctx.rotate(0.65);
  ctx.beginPath();
  ctx.ellipse(0, 0, 12.5, 16.5, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillRect(-2.4, 14, 4.8, 12);
  ctx.fillStyle = '#070b15';
  const rHoles = [
    [-4.5, -6],
    [0, -7],
    [4.5, -6],
    [-5.5, 0],
    [0, 0],
    [5.5, 0],
    [-3.8, 6],
    [3.8, 6]
  ];
  rHoles.forEach(([hx, hy]) => {
    ctx.beginPath();
    ctx.arc(hx, hy, 1.55, 0, Math.PI * 2);
    ctx.fill();
  });
  ctx.restore();

  ctx.beginPath();
  ctx.arc(24, -64, 5.2, 0, Math.PI * 2);
  ctx.fillStyle = theme.accentBright;
  ctx.shadowColor = theme.accentBright;
  ctx.shadowBlur = 12;
  ctx.fill();

  ctx.restore();
  ctx.restore();
}

function drawLogoFit(
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  boxX: number,
  boxY: number,
  boxW: number,
  boxH: number
): void {
  if (!img) return;
  const iw = img.naturalWidth || img.width;
  const ih = img.naturalHeight || img.height;
  if (!iw || !ih) return;
  const scale = Math.min(boxW / iw, boxH / ih);
  const dw = iw * scale;
  const dh = ih * scale;
  const dx = boxX + (boxW - dw) / 2;
  const dy = boxY + (boxH - dh) / 2;
  ctx.save();
  const halo = ctx.createRadialGradient(dx + dw / 2, dy + dh / 2, 10, dx + dw / 2, dy + dh / 2, Math.max(dw, dh) * 0.68);
  halo.addColorStop(0, 'rgba(255, 255, 255, 0.14)');
  halo.addColorStop(1, 'transparent');
  ctx.fillStyle = halo;
  ctx.fillRect(boxX - 18, boxY - 14, boxW + 36, boxH + 28);

  ctx.shadowColor = 'rgba(0,0,0,0.85)';
  ctx.shadowBlur = 18;
  ctx.drawImage(img, dx, dy, dw, dh);
  ctx.restore();
}

function drawFacetedDiamondBackdrop(ctx: CanvasRenderingContext2D, _W: number, _H: number, theme: PlayerCardTheme): void {
  const facets: Array<[[number, number], [number, number], [number, number], string]> = [
    [[24, 24], [380, 24], [190, 280], 'rgba(255,255,255,0.035)'],
    [[380, 24], [690, 24], [520, 240], 'rgba(255,255,255,0.018)'],
    [[690, 24], [1056, 24], [880, 310], 'rgba(255,255,255,0.045)'],
    [[24, 280], [190, 280], [340, 560], 'rgba(255,255,255,0.025)'],
    [[190, 280], [520, 240], [340, 560], 'rgba(0,0,0,0.18)'],
    [[520, 240], [880, 310], [640, 620], 'rgba(255,255,255,0.03)'],
    [[880, 310], [1056, 360], [1056, 740], 'rgba(0,0,0,0.22)'],
    [[24, 580], [340, 560], [210, 920], 'rgba(255,255,255,0.032)'],
    [[340, 560], [640, 620], [510, 960], 'rgba(255,255,255,0.02)'],
    [[640, 620], [1056, 740], [820, 1020], 'rgba(255,255,255,0.038)'],
    [[24, 920], [510, 960], [290, 1140], 'rgba(0,0,0,0.20)']
  ];
  ctx.save();
  facets.forEach(([p1, p2, p3, fill]) => {
    ctx.beginPath();
    ctx.moveTo(p1[0], p1[1]);
    ctx.lineTo(p2[0], p2[1]);
    ctx.lineTo(p3[0], p3[1]);
    ctx.closePath();
    ctx.fillStyle = fill;
    ctx.fill();
    ctx.lineWidth = 1.2;
    ctx.strokeStyle = theme.accentBright + '1c';
    ctx.stroke();
  });

  const beams = [
    { x0: 140, x1: 420, bx0: 360, bx1: 680, alpha: 0.14 },
    { x0: 520, x1: 780, bx0: 200, bx1: 540, alpha: 0.11 },
    { x0: 760, x1: 990, bx0: 560, bx1: 940, alpha: 0.09 }
  ];
  beams.forEach((b) => {
    const bg = ctx.createLinearGradient((b.x0 + b.x1) / 2, 40, (b.bx0 + b.bx1) / 2, 980);
    bg.addColorStop(0, theme.accentBright + Math.round(b.alpha * 255).toString(16).padStart(2, '0'));
    bg.addColorStop(0.65, theme.accent + '14');
    bg.addColorStop(1, 'transparent');
    ctx.beginPath();
    ctx.moveTo(b.x0, 20);
    ctx.lineTo(b.x1, 20);
    ctx.lineTo(b.bx1, 1020);
    ctx.lineTo(b.bx0, 1020);
    ctx.closePath();
    ctx.fillStyle = bg;
    ctx.fill();
  });

  for (let i = 0; i < 34; i++) {
    const px = 48 + ((i * 197 + 43) % 984);
    const py = 210 + ((i * 151 + 89) % 860);
    const sz = 2.2 + (i % 4) * 1.4;
    ctx.save();
    ctx.translate(px, py);
    ctx.rotate(Math.PI / 4);
    ctx.globalAlpha = 0.18 + (i % 5) * 0.09;
    ctx.fillStyle = i % 3 === 0 ? '#ffffff' : theme.accentBright;
    ctx.fillRect(-sz / 2, -sz / 2, sz, sz);
    ctx.restore();
  }
  ctx.restore();
}

function drawMachinedDiamondFrame(
  ctx: CanvasRenderingContext2D,
  W: number,
  H: number,
  framePad: number,
  innerCut: number,
  theme: PlayerCardTheme,
  metalKey: string
): void {
  const metal = getMetalPalette(metalKey, theme);
  const ox = framePad - 10;
  const oy = framePad - 10;
  const ow = W - ox * 2;
  const oh = H - oy * 2;
  const oCut = innerCut + 4;
  const ix = framePad + 6;
  const iy = framePad + 6;
  const iw = W - ix * 2;
  const ih = H - iy * 2;
  const iCut = innerCut - 3;

  const outerPts = [
    [ox + oCut, oy],
    [ox + ow - oCut, oy],
    [ox + ow, oy + oCut],
    [ox + ow, oy + oh - oCut],
    [ox + ow - oCut, oy + oh],
    [ox + oCut, oy + oh],
    [ox, oy + oh - oCut],
    [ox, oy + oCut]
  ];
  const innerPts = [
    [ix + iCut, iy],
    [ix + iw - iCut, iy],
    [ix + iw, iy + iCut],
    [ix + iw, iy + ih - iCut],
    [ix + iw - iCut, iy + ih],
    [ix + iCut, iy + ih],
    [ix, iy + ih - iCut],
    [ix, iy + iCut]
  ];

  const paletteFaces = metal.edgeFaces || PLAYER_CARD_METALS.chrome.edgeFaces;

  ctx.save();
  for (let i = 0; i < 8; i++) {
    const n = (i + 1) % 8;
    const p1 = outerPts[i];
    const p2 = outerPts[n];
    const p3 = innerPts[n];
    const p4 = innerPts[i];
    ctx.beginPath();
    ctx.moveTo(p1[0], p1[1]);
    ctx.lineTo(p2[0], p2[1]);
    ctx.lineTo(p3[0], p3[1]);
    ctx.lineTo(p4[0], p4[1]);
    ctx.closePath();

    const g = ctx.createLinearGradient(p1[0], p1[1], p3[0], p3[1]);
    const stops = paletteFaces[i];
    g.addColorStop(0, stops[0]);
    g.addColorStop(0.55, stops[1]);
    g.addColorStop(1, stops[2]);
    ctx.fillStyle = g;
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(p1[0], p1[1]);
    ctx.lineTo(p4[0], p4[1]);
    ctx.strokeStyle = 'rgba(0,0,0,0.45)';
    ctx.lineWidth = 1.5;
    ctx.stroke();
  }

  traceChamferedRect(ctx, ox, oy, ow, oh, oCut);
  ctx.lineWidth = 2.2;
  ctx.strokeStyle = 'rgba(255,255,255,0.42)';
  ctx.stroke();

  traceChamferedRect(ctx, ix, iy, iw, ih, iCut);
  ctx.lineWidth = 5;
  ctx.strokeStyle = '#03050a';
  ctx.stroke();

  traceChamferedRect(ctx, ix + 1.5, iy + 1.5, iw - 3, ih - 3, iCut - 1);
  ctx.lineWidth = 2.4;
  ctx.strokeStyle = theme.accentBright;
  ctx.shadowColor = theme.accent;
  ctx.shadowBlur = 16;
  ctx.stroke();
  ctx.shadowBlur = 0;

  const corners = [
    [(outerPts[7][0] + outerPts[0][0]) / 2, (outerPts[7][1] + outerPts[0][1]) / 2],
    [(outerPts[1][0] + outerPts[2][0]) / 2, (outerPts[1][1] + outerPts[2][1]) / 2],
    [(outerPts[3][0] + outerPts[4][0]) / 2, (outerPts[3][1] + outerPts[4][1]) / 2],
    [(outerPts[5][0] + outerPts[6][0]) / 2, (outerPts[5][1] + outerPts[6][1]) / 2]
  ];
  corners.forEach(([cx, cy]) => {
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(Math.PI / 4);
    ctx.fillStyle = '#050811';
    ctx.fillRect(-7, -7, 14, 14);
    ctx.fillStyle = theme.accentBright;
    ctx.fillRect(-4.5, -4.5, 9, 9);
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(-2, -2, 4, 4);
    ctx.restore();
  });

  drawDiamondGlint(ctx, ox + oCut + 16, oy + 12, 20, theme.accentBright);
  drawDiamondGlint(ctx, ox + ow - oCut - 10, oy + oh - 12, 18, theme.accentBright);

  ctx.restore();
}

export function drawPlayerCardCanvas(
  canvas: HTMLCanvasElement,
  draft: PlayerCardDraft,
  preloadedImgs: Map<string, HTMLImageElement> | null = null
): void {
  if (!canvas || !draft) return;
  const W = 1080;
  const H = 1350;
  if (canvas.width !== W) canvas.width = W;
  if (canvas.height !== H) canvas.height = H;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const theme = PLAYER_CARD_THEMES[draft.theme] || PLAYER_CARD_THEMES.diamond;
  const metalKey = draft.metalFinish || theme.defaultMetal || 'chrome';
  const metal = getMetalPalette(metalKey, theme);
  const carbonPat = getCarbonPattern(ctx);
  const { prefs } = store;

  const getImg = (src: string | null | undefined) => {
    if (!src) return null;
    if (preloadedImgs && preloadedImgs.has(src)) return preloadedImgs.get(src) || null;
    return getSyncCachedCardImage(src);
  };

  const photoSrc = draft.bgMode === 'ai' && draft.cutoutPhoto ? draft.cutoutPhoto : draft.origPhoto;
  const photoImg = getImg(photoSrc);
  const logo1Img = getImg(playerCardLogos.logo1);
  const logo2Img = getImg(playerCardLogos.logo2);

  ctx.clearRect(0, 0, W, H);

  traceChamferedRect(ctx, 8, 8, W - 16, H - 16, 52);
  ctx.fillStyle = '#03050a';
  ctx.fill();

  const framePad = 24;
  const innerCut = 44;
  ctx.save();
  traceChamferedRect(ctx, framePad + 4, framePad + 4, W - (framePad + 4) * 2, H - (framePad + 4) * 2, innerCut - 2);
  ctx.clip();

  const bgG = ctx.createRadialGradient(390, 520, 40, 540, 640, 920);
  bgG.addColorStop(0, theme.bgMid);
  bgG.addColorStop(0.55, theme.bgTop);
  bgG.addColorStop(1, theme.bgBot);
  ctx.fillStyle = bgG;
  ctx.fillRect(0, 0, W, H);

  if (carbonPat) {
    ctx.save();
    ctx.globalAlpha = 0.36;
    ctx.fillStyle = carbonPat;
    ctx.fillRect(0, 0, W, H);
    ctx.restore();
  }

  const bloom1 = ctx.createRadialGradient(320, 540, 15, 320, 540, 480);
  bloom1.addColorStop(0, theme.courtGlow + '68');
  bloom1.addColorStop(0.5, theme.courtGlow2 + '24');
  bloom1.addColorStop(1, 'transparent');
  ctx.fillStyle = bloom1;
  ctx.fillRect(0, 0, W, H);

  const bloom2 = ctx.createRadialGradient(840, 220, 10, 840, 220, 440);
  bloom2.addColorStop(0, theme.accentBright + '42');
  bloom2.addColorStop(1, 'transparent');
  ctx.fillStyle = bloom2;
  ctx.fillRect(0, 0, W, H);

  const floorG = ctx.createLinearGradient(0, 810, 0, H);
  floorG.addColorStop(0, 'rgba(0,0,0,0)');
  floorG.addColorStop(0.32, theme.courtGlow2 + '3a');
  floorG.addColorStop(1, theme.bgBot);
  ctx.fillStyle = floorG;
  ctx.fillRect(0, 810, W, H - 810);

  ctx.save();
  ctx.strokeStyle = theme.accentBright + '34';
  ctx.lineWidth = 2.6;
  ctx.beginPath();
  ctx.moveTo(24, 855);
  ctx.lineTo(W - 24, 855);
  ctx.moveTo(540, 855);
  ctx.lineTo(540, 1180);
  ctx.moveTo(180, 855);
  ctx.lineTo(-40, 1160);
  ctx.moveTo(900, 855);
  ctx.lineTo(1120, 1160);
  ctx.moveTo(24, 985);
  ctx.lineTo(W - 24, 985);
  ctx.stroke();
  ctx.restore();

  drawFacetedDiamondBackdrop(ctx, W, H, theme);

  if (photoImg) {
    const iw = photoImg.naturalWidth || photoImg.width;
    const ih = photoImg.naturalHeight || photoImg.height;
    const targetH = 920 * (Number(draft.zoom) || 1);
    const baseScale = targetH / ih;
    const dw = iw * baseScale;
    const dh = ih * baseScale;
    const cx = 335 + (Number(draft.offsetX) || 0);
    const cy = 685 + (Number(draft.offsetY) || 0);
    const dx = cx - dw / 2;
    const dy = cy - dh / 2;

    const isCutout = (draft.bgMode === 'ai' && !!draft.cutoutPhoto) || draft.origHasAlpha;

    const halo = ctx.createRadialGradient(cx, cy - 60, 20, cx, cy - 40, Math.max(dw, dh) * 0.54);
    halo.addColorStop(0, theme.accentBright + '78');
    halo.addColorStop(0.42, theme.accent + '2a');
    halo.addColorStop(1, 'transparent');
    ctx.fillStyle = halo;
    ctx.fillRect(24, 170, 740, 960);

    if (isCutout) {
      const pCanvas = document.createElement('canvas');
      pCanvas.width = W;
      pCanvas.height = H;
      const pCtx = pCanvas.getContext('2d')!;
      pCtx.drawImage(photoImg, dx, dy, dw, dh);
      const bottomEdge = dy + dh;
      const fadeStart = Math.max(dy, bottomEdge - 86);
      if (bottomEdge > fadeStart + 1) {
        pCtx.globalCompositeOperation = 'destination-in';
        const bMask = pCtx.createLinearGradient(0, fadeStart, 0, bottomEdge);
        bMask.addColorStop(0, 'rgba(0,0,0,1)');
        bMask.addColorStop(1, 'rgba(0,0,0,0)');
        pCtx.fillStyle = bMask;
        pCtx.fillRect(0, 0, W, H);
      }

      ctx.save();
      ctx.shadowColor = 'rgba(0, 0, 0, 0.85)';
      ctx.shadowBlur = 34;
      ctx.drawImage(pCanvas, 0, 0);
      ctx.restore();
    } else {
      const pCanvas = document.createElement('canvas');
      pCanvas.width = 720;
      pCanvas.height = 960;
      const pCtx = pCanvas.getContext('2d')!;
      pCtx.drawImage(photoImg, dx - 24, dy - 180, dw, dh);
      pCtx.globalCompositeOperation = 'destination-in';
      const vMask = pCtx.createRadialGradient(340, 420, 140, 340, 430, 380);
      vMask.addColorStop(0, 'rgba(0,0,0,1)');
      vMask.addColorStop(0.72, 'rgba(0,0,0,0.92)');
      vMask.addColorStop(1, 'rgba(0,0,0,0)');
      pCtx.fillStyle = vMask;
      pCtx.fillRect(0, 0, 720, 960);
      ctx.drawImage(pCanvas, 24, 180);
    }
  } else {
    ctx.save();
    const holoG = ctx.createLinearGradient(320, 340, 320, 960);
    holoG.addColorStop(0, theme.accentBright + '28');
    holoG.addColorStop(0.55, theme.accent + '14');
    holoG.addColorStop(1, 'transparent');
    ctx.fillStyle = holoG;
    ctx.strokeStyle = theme.accentBright + '52';
    ctx.lineWidth = 2.4;

    ctx.beginPath();
    ctx.arc(322, 462, 86, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(156, 975);
    ctx.quadraticCurveTo(176, 616, 322, 588);
    ctx.quadraticCurveTo(468, 616, 488, 975);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    const bx = 148;
    const by = 338;
    const bw = 348;
    const bh = 580;
    const bLen = 28;
    ctx.strokeStyle = theme.accentBright + '7a';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(bx, by + bLen);
    ctx.lineTo(bx, by);
    ctx.lineTo(bx + bLen, by);
    ctx.moveTo(bx + bw - bLen, by);
    ctx.lineTo(bx + bw, by);
    ctx.lineTo(bx + bw, by + bLen);
    ctx.moveTo(bx, by + bh - bLen);
    ctx.lineTo(bx, by + bh);
    ctx.lineTo(bx + bLen, by + bh);
    ctx.moveTo(bx + bw - bLen, by + bh);
    ctx.lineTo(bx + bw, by + bh);
    ctx.lineTo(bx + bw, by + bh - bLen);
    ctx.stroke();

    drawRoundedPath(ctx, 210, 742, 224, 54, 12);
    ctx.fillStyle = 'rgba(4, 8, 18, 0.72)';
    ctx.fill();
    ctx.lineWidth = 1.6;
    ctx.strokeStyle = theme.accentBright + '88';
    ctx.stroke();

    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = '700 22px "Chakra Petch", "Plus Jakarta Sans", sans-serif';
    drawMetallicText(ctx, 'SUBÍ TU FOTO', 322, 769, { metalKey, theme, fontSize: 22, extrude: 2, bevelWidth: 0.9 });
    ctx.restore();
  }

  ctx.save();
  ctx.beginPath();
  ctx.moveTo(20, 20);
  ctx.lineTo(1060, 20);
  ctx.lineTo(1060, 152);
  ctx.lineTo(20, 294);
  ctx.closePath();

  const hdrG = ctx.createLinearGradient(0, 20, 760, 270);
  hdrG.addColorStop(0, '#04060c');
  hdrG.addColorStop(0.55, '#0e1324');
  hdrG.addColorStop(1, '#05070e');
  ctx.fillStyle = hdrG;
  ctx.fill();

  ctx.save();
  ctx.clip();
  if (carbonPat) {
    ctx.globalAlpha = 0.75;
    ctx.fillStyle = carbonPat;
    ctx.fillRect(0, 0, W, 310);
  }
  ctx.globalAlpha = 1;
  ctx.beginPath();
  ctx.moveTo(20, 20);
  ctx.lineTo(540, 20);
  ctx.lineTo(360, 250);
  ctx.lineTo(20, 250);
  ctx.closePath();
  const sheen = ctx.createLinearGradient(20, 20, 420, 240);
  sheen.addColorStop(0, 'rgba(255,255,255,0.08)');
  sheen.addColorStop(1, 'transparent');
  ctx.fillStyle = sheen;
  ctx.fill();
  ctx.restore();

  ctx.beginPath();
  ctx.moveTo(20, 294);
  ctx.lineTo(682, 202);
  ctx.strokeStyle = theme.accentBright;
  ctx.lineWidth = 6;
  ctx.shadowColor = theme.accent;
  ctx.shadowBlur = 22;
  ctx.stroke();

  ctx.shadowBlur = 0;
  ctx.beginPath();
  ctx.moveTo(20, 286);
  ctx.lineTo(678, 194);
  ctx.strokeStyle = 'rgba(255,255,255,0.75)';
  ctx.lineWidth = 1.6;
  ctx.stroke();
  ctx.restore();

  const subTxt =
    (playerCardLogos.subTitle || '').trim() ||
    (prefs.rankingName && prefs.rankingName !== 'Mi Ranking' ? prefs.rankingName : 'DIAMOND SERIES · PRO');

  if (logo1Img && logo2Img) {
    drawLogoFit(ctx, logo1Img, 54, 42, 266, 168);
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(338, 72);
    ctx.lineTo(324, 174);
    ctx.strokeStyle = theme.accentBright + '55';
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.restore();
    drawLogoFit(ctx, logo2Img, 350, 38, 306, 146);
  } else if (logo1Img) {
    drawLogoFit(ctx, logo1Img, 60, 44, 306, 166);
    if (draft.showAppBrand) {
      drawPadelControlEmblemCanvas(ctx, 446, 110, 96, theme);
      ctx.save();
      ctx.textAlign = 'left';
      ctx.textBaseline = 'alphabetic';
      ctx.font = 'italic 900 26px "Barlow Condensed", sans-serif';
      drawMetallicText(ctx, 'PÁDEL CONTROL SÉ', 504, 108, {
        metalKey,
        theme,
        fontSize: 26,
        extrude: 3,
        bevelWidth: 0.9
      });
      ctx.fillStyle = theme.accentSoft;
      ctx.font = '700 14px "Chakra Petch", "Plus Jakarta Sans", sans-serif';
      ctx.fillText(subTxt.toUpperCase().slice(0, 22), 506, 131);
      ctx.restore();
    }
  } else if (logo2Img) {
    drawPadelControlEmblemCanvas(ctx, 124, 124, 128, theme);
    ctx.save();
    ctx.strokeStyle = 'rgba(255,255,255,0.18)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(202, 178);
    ctx.lineTo(226, 54);
    ctx.stroke();
    ctx.restore();
    drawLogoFit(ctx, logo2Img, 226, 36, 424, 156);
  } else {
    drawPadelControlEmblemCanvas(ctx, 142, 134, 150, theme);
    ctx.save();
    ctx.textAlign = 'left';
    ctx.textBaseline = 'alphabetic';
    ctx.font = 'italic 900 48px "Barlow Condensed", sans-serif';
    drawMetallicText(ctx, 'PÁDEL CONTROL SÉ', 236, 122, {
      metalKey,
      theme,
      fontSize: 48,
      extrude: 4,
      bevelWidth: 1.2,
      glowColor: theme.accent + '66',
      glowBlur: 18
    });
    ctx.fillStyle = theme.accentBright;
    ctx.font = '700 19px "Chakra Petch", "Plus Jakarta Sans", sans-serif';
    ctx.fillText(subTxt.toUpperCase().slice(0, 26), 238, 156);
    ctx.restore();
  }

  ctx.save();
  const catX = 670;
  const catY = 48;
  const catW = 342;
  const catH = 266;
  traceDiamondShieldPath(ctx, catX, catY, catW, catH);

  const catG = ctx.createLinearGradient(catX, catY, catX + catW, catY + catH);
  theme.badgeStops.forEach((col, idx) => catG.addColorStop(idx / (theme.badgeStops.length - 1), col));
  ctx.shadowColor = theme.accent;
  ctx.shadowBlur = 38;
  ctx.fillStyle = catG;
  ctx.fill();

  ctx.save();
  ctx.clip();
  ctx.shadowBlur = 0;
  if (carbonPat) {
    ctx.globalAlpha = 0.25;
    ctx.fillStyle = carbonPat;
    ctx.fillRect(catX, catY, catW, catH);
  }
  ctx.globalAlpha = 1;
  ctx.beginPath();
  ctx.moveTo(catX, catY);
  ctx.lineTo(catX + catW, catY);
  ctx.lineTo(catX + catW * 0.42, catY + catH * 0.56);
  ctx.lineTo(catX, catY + catH * 0.34);
  ctx.closePath();
  const shGloss = ctx.createLinearGradient(catX, catY, catX + catW, catY + catH * 0.6);
  shGloss.addColorStop(0, 'rgba(255,255,255,0.28)');
  shGloss.addColorStop(1, 'rgba(255,255,255,0.02)');
  ctx.fillStyle = shGloss;
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(catX + catW * 0.42, catY + catH * 0.56);
  ctx.lineTo(catX + catW, catY + 26);
  ctx.lineTo(catX + catW, catY + catH);
  ctx.closePath();
  ctx.fillStyle = 'rgba(0,0,0,0.22)';
  ctx.fill();
  ctx.restore();

  ctx.shadowBlur = 0;
  traceDiamondShieldPath(ctx, catX, catY, catW, catH);
  const shieldRim = ctx.createLinearGradient(catX, catY, catX + catW, catY + catH);
  shieldRim.addColorStop(0, '#ffffff');
  shieldRim.addColorStop(0.48, metal.stops[2][1]);
  shieldRim.addColorStop(0.52, metal.extrudeMid);
  shieldRim.addColorStop(1, '#ffffff');
  ctx.lineWidth = 5;
  ctx.strokeStyle = shieldRim;
  ctx.stroke();

  traceDiamondShieldPath(ctx, catX + 9, catY + 9, catW - 18, catH - 20);
  ctx.lineWidth = 1.4;
  ctx.strokeStyle = 'rgba(255,255,255,0.38)';
  ctx.stroke();

  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.font = '700 25px "Chakra Petch", "Plus Jakarta Sans", sans-serif';
  drawMetallicText(ctx, 'CATEGORÍA', catX + catW / 2, catY + 52, {
    metalKey,
    theme,
    fontSize: 25,
    extrude: 2,
    bevelWidth: 0.8
  });

  ctx.strokeStyle = 'rgba(255,255,255,0.45)';
  ctx.lineWidth = 1.8;
  ctx.beginPath();
  ctx.moveTo(catX + 42, catY + 74);
  ctx.lineTo(catX + catW - 42, catY + 74);
  ctx.stroke();

  const catVal = (draft.category || '—').trim();
  const catFontSz = fitCanvasFontSize(
    ctx,
    catVal,
    catW - 76,
    128,
    50,
    (sz) => `italic 700 ${sz}px "Barlow Condensed", sans-serif`
  );
  drawMetallicText(ctx, catVal, catX + catW / 2 - 4, catY + 160, {
    metalKey,
    theme,
    fontSize: catFontSz,
    extrude: 4,
    bevelWidth: 0.85,
    glowColor: theme.accentBright + '77',
    glowBlur: 22
  });
  drawDiamondGlint(ctx, catX + catW - 18, catY + 18, 28, theme.accentBright);
  ctx.restore();

  const ageRaw = String(draft.age || '').trim();
  const ageVal = !ageRaw ? '—' : /^\d+$/.test(ageRaw) ? `${ageRaw} años` : ageRaw;
  const posVal = (draft.position || 'Drive').trim();
  const handVal = (draft.hand || 'Diestro').trim();
  const shotVal = (draft.bestShot || 'Víbora').trim();

  const pills = [
    { label: 'EDAD', value: ageVal, drawIcon: (x: number, y: number) => drawCardIconCalendar(ctx, x, y, theme) },
    { label: 'POSICIÓN', value: posVal, drawIcon: (x: number, y: number) => drawCardIconPadelCourt(ctx, x, y, posVal, theme) },
    { label: 'PERFIL', value: handVal, drawIcon: (x: number, y: number) => drawCardIconHand(ctx, x, y, handVal, theme) },
    { label: 'MEJOR GOLPE', value: shotVal, drawIcon: (x: number, y: number) => drawCardIconRacket(ctx, x, y, theme) }
  ];

  const pillX = 556;
  const pillW = 474;
  const pillH = 128;
  const pillStartY = 352;
  const pillGap = 24;

  pills.forEach((pill, i) => {
    const py = pillStartY + i * (pillH + pillGap);
    ctx.save();
    traceArmorPlatePath(ctx, pillX, py, pillW, pillH, 22);

    const pBg = ctx.createLinearGradient(pillX, py, pillX + pillW, py + pillH);
    pBg.addColorStop(0, 'rgba(7, 10, 22, 0.94)');
    pBg.addColorStop(0.55, 'rgba(13, 20, 42, 0.92)');
    pBg.addColorStop(1, 'rgba(5, 8, 18, 0.95)');
    ctx.shadowColor = 'rgba(0, 0, 0, 0.72)';
    ctx.shadowBlur = 22;
    ctx.shadowOffsetY = 6;
    ctx.fillStyle = pBg;
    ctx.fill();

    ctx.save();
    ctx.clip();
    ctx.shadowBlur = 0;
    if (carbonPat) {
      ctx.globalAlpha = 0.42;
      ctx.fillStyle = carbonPat;
      ctx.fillRect(pillX, py, pillW, pillH);
    }
    ctx.globalAlpha = 1;
    const leftGlow = ctx.createRadialGradient(pillX + 20, py + pillH / 2, 4, pillX + 20, py + pillH / 2, 130);
    leftGlow.addColorStop(0, theme.accent + '48');
    leftGlow.addColorStop(1, 'transparent');
    ctx.fillStyle = leftGlow;
    ctx.fillRect(pillX, py, 160, pillH);

    ctx.fillStyle = 'rgba(255,255,255,0.055)';
    ctx.fillRect(pillX, py, pillW, pillH * 0.4);

    ctx.fillStyle = theme.accentBright;
    ctx.shadowColor = theme.accentBright;
    ctx.shadowBlur = 12;
    ctx.fillRect(pillX, py + 12, 6, pillH - 28);
    ctx.restore();

    ctx.shadowBlur = 0;
    const pBorder = ctx.createLinearGradient(pillX, py, pillX + pillW, py + pillH);
    pBorder.addColorStop(0, '#ffffff');
    pBorder.addColorStop(0.32, metal.stops[2][1]);
    pBorder.addColorStop(0.5, theme.accentBright);
    pBorder.addColorStop(0.75, '#cbd5e1');
    pBorder.addColorStop(1, metal.extrudeMid);
    ctx.lineWidth = 2.6;
    ctx.strokeStyle = pBorder;
    ctx.stroke();

    drawIconMedallion(ctx, pillX + 58, py + pillH / 2, theme);
    pill.drawIcon(pillX + 58, py + pillH / 2);

    ctx.textAlign = 'left';
    ctx.textBaseline = 'alphabetic';
    ctx.fillStyle = theme.accentSoft;
    ctx.font = '700 19px "Chakra Petch", "Plus Jakarta Sans", sans-serif';
    ctx.fillText(pill.label, pillX + 114, py + 41);

    ctx.fillStyle = theme.accentBright + '66';
    ctx.fillRect(pillX + 114, py + 48, 34, 2);

    const valSz = fitCanvasFontSize(
      ctx,
      pill.value,
      pillW - 140,
      52,
      28,
      (sz) => `italic 700 ${sz}px "Barlow Condensed", sans-serif`
    );
    drawMetallicText(ctx, pill.value, pillX + 114, py + 104, {
      metalKey,
      theme,
      fontSize: valSz,
      extrude: 2,
      bevelWidth: 0.55
    });

    ctx.restore();
  });

  ctx.save();
  const rTopL = 1106;
  const rTopR = 962;
  const rBotL = 1286;
  const rBotR = 1142;

  ctx.beginPath();
  ctx.moveTo(20, rTopL);
  ctx.lineTo(W - 20, rTopR);
  ctx.lineTo(W - 20, rBotR);
  ctx.lineTo(20, rBotL);
  ctx.closePath();

  const ribG = ctx.createLinearGradient(0, rTopR, W, rBotL);
  ribG.addColorStop(0, theme.ribbonFill[0]);
  ribG.addColorStop(0.45, theme.ribbonFill[1]);
  ribG.addColorStop(1, theme.ribbonFill[2]);
  ctx.fillStyle = ribG;
  ctx.fill();

  ctx.save();
  ctx.clip();
  if (carbonPat) {
    ctx.globalAlpha = 0.65;
    ctx.fillStyle = carbonPat;
    ctx.fillRect(0, 940, W, 380);
  }
  ctx.globalAlpha = 1;
  for (let k = 0; k < 4; k++) {
    const sx = 640 + k * 28;
    ctx.beginPath();
    ctx.moveTo(sx, 950);
    ctx.lineTo(sx + 14, 950);
    ctx.lineTo(sx - 56, 1280);
    ctx.lineTo(sx - 70, 1280);
    ctx.closePath();
    ctx.fillStyle = theme.accentBright + '14';
    ctx.fill();
  }
  const rSheen = ctx.createLinearGradient(0, rTopR, 0, rBotL);
  rSheen.addColorStop(0, 'rgba(255,255,255,0.09)');
  rSheen.addColorStop(0.48, 'rgba(255,255,255,0.01)');
  rSheen.addColorStop(0.5, 'rgba(0,0,0,0.35)');
  rSheen.addColorStop(1, 'transparent');
  ctx.fillStyle = rSheen;
  ctx.fillRect(0, 950, W, 360);
  ctx.restore();

  ctx.beginPath();
  ctx.moveTo(20, rBotL);
  ctx.lineTo(W - 20, rBotR);
  ctx.lineTo(W - 20, H - 20);
  ctx.lineTo(20, H - 20);
  ctx.closePath();
  ctx.fillStyle = '#04060c';
  ctx.fill();
  if (carbonPat) {
    ctx.save();
    ctx.clip();
    ctx.globalAlpha = 0.45;
    ctx.fillStyle = carbonPat;
    ctx.fillRect(0, 1130, W, 240);
    ctx.restore();
  }

  ctx.strokeStyle = theme.accentBright;
  ctx.lineWidth = 7;
  ctx.shadowColor = theme.accent;
  ctx.shadowBlur = 24;
  ctx.beginPath();
  ctx.moveTo(20, rTopL);
  ctx.lineTo(W - 20, rTopR);
  ctx.moveTo(20, rBotL);
  ctx.lineTo(W - 20, rBotR);
  ctx.stroke();

  ctx.shadowBlur = 0;
  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(20, rTopL);
  ctx.lineTo(W - 20, rTopR);
  ctx.moveTo(20, rBotL);
  ctx.lineTo(W - 20, rBotR);
  ctx.stroke();

  const angle = Math.atan2(rTopR - rTopL, W - 20 - 20);
  const nameTxt = ((draft.name || '').trim() || 'TU NOMBRE').toUpperCase();
  const nickTxt = (draft.nickname || '').trim().toUpperCase();
  ctx.save();
  ctx.translate(74, 1188);
  ctx.rotate(angle);
  if (nickTxt) {
    const nickBadgeTxt = `« ${nickTxt} »`;
    const nickSz = fitCanvasFontSize(
      ctx,
      nickBadgeTxt,
      636,
      28,
      17,
      (sz) => `700 ${sz}px "Chakra Petch", "Plus Jakarta Sans", sans-serif`
    );
    const nickW = Math.min(648, Math.ceil(ctx.measureText(nickBadgeTxt).width) + 28);
    const nickH = Math.round(nickSz + 14);
    ctx.save();
    traceArmorPlatePath(ctx, 0, -49 - nickH / 2, nickW, nickH, 8);
    ctx.fillStyle = 'rgba(4, 7, 16, 0.78)';
    ctx.fill();
    ctx.lineWidth = 1.6;
    ctx.strokeStyle = theme.accentBright + 'aa';
    ctx.stroke();
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = theme.accentBright;
    ctx.shadowColor = theme.accent + '88';
    ctx.shadowBlur = 10;
    ctx.fillText(nickBadgeTxt, 14, -49);
    ctx.restore();

    const nameSz = fitCanvasFontSize(
      ctx,
      nameTxt,
      668,
      86,
      38,
      (sz) => `italic 800 ${sz}px "Barlow Condensed", sans-serif`
    );
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    drawMetallicText(ctx, nameTxt, 0, 22, {
      metalKey,
      theme,
      fontSize: nameSz,
      extrude: 6,
      bevelWidth: 1.7,
      glowColor: theme.accent + '66',
      glowBlur: 18
    });
    drawDiamondGlint(ctx, -6, 22 - nameSz * 0.42, 15, theme.accentBright);
  } else {
    const nameSz = fitCanvasFontSize(
      ctx,
      nameTxt,
      668,
      102,
      42,
      (sz) => `italic 800 ${sz}px "Barlow Condensed", sans-serif`
    );
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    drawMetallicText(ctx, nameTxt, 0, 0, {
      metalKey,
      theme,
      fontSize: nameSz,
      extrude: 6,
      bevelWidth: 1.8,
      glowColor: theme.accent + '66',
      glowBlur: 20
    });
    drawDiamondGlint(ctx, -4, -nameSz * 0.44, 17, theme.accentBright);
  }
  ctx.restore();

  drawProPadelEmblem(ctx, 888, 1094, 1.3, theme, metalKey);

  if (draft.showAppBrand) {
    ctx.textAlign = 'left';
    ctx.textBaseline = 'alphabetic';
    ctx.fillStyle = 'rgba(226, 232, 240, 0.52)';
    ctx.font = '700 15px "Chakra Petch", "Plus Jakarta Sans", sans-serif';
    ctx.fillText('PÁDEL CONTROL SÉ · DIAMOND EDITION', 74, H - 44);
  }
  ctx.restore();

  ctx.restore();

  drawMachinedDiamondFrame(ctx, W, H, framePad, innerCut, theme, metalKey);
}

export function refreshPlayerCardPreview(): void {
  const canvas = document.getElementById('pc-preview-canvas') as HTMLCanvasElement | null;
  if (!canvas) return;
  drawPlayerCardCanvas(canvas, getActivePlayerCardDraft());
}

async function renderExportPlayerCardBlob(): Promise<Blob | null> {
  if (document.fonts && document.fonts.ready) {
    try {
      await document.fonts.ready;
    } catch {}
  }
  const draft = getActivePlayerCardDraft();
  const photoSrc = draft.bgMode === 'ai' && draft.cutoutPhoto ? draft.cutoutPhoto : draft.origPhoto;
  const srcs = [photoSrc, playerCardLogos.logo1, playerCardLogos.logo2].filter((s): s is string => Boolean(s));
  const loaded = new Map<string, HTMLImageElement>();
  await Promise.all(
    srcs.map(async (s) => {
      const img = await loadCachedCardImage(s);
      if (img) loaded.set(s, img);
    })
  );

  const canvas = document.createElement('canvas');
  canvas.width = 1080;
  canvas.height = 1350;
  drawPlayerCardCanvas(canvas, draft, loaded);

  return new Promise((resolve) => {
    canvas.toBlob((blob) => resolve(blob), 'image/png');
  });
}

function getPlayerCardFileSlug(name: string): string {
  const clean = String(name || 'jugador')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
  return `tarjeta-${clean || 'jugador'}-padel-se.png`;
}

export async function downloadPlayerCardImage(): Promise<void> {
  const draft = getActivePlayerCardDraft();
  const blob = await renderExportPlayerCardBlob();
  if (!blob) {
    showToast('No se pudo generar la imagen');
    return;
  }
  triggerBlobDownload(blob, getPlayerCardFileSlug(draft.name));
  showToast('¡Tarjeta HD descargada!');
}

export async function saveCurrentPlayerCard(): Promise<void> {
  const draft = getActivePlayerCardDraft();
  if (!String(draft.name || '').trim()) {
    showToast('Ingresá el nombre del jugador antes de guardar');
    document.getElementById('pc-name')?.focus();
    return;
  }
  const ok = await savePlayerCardToIDB(draft);
  appHooks.render();
  showToast(ok ? '✓ Tarjeta guardada en Mis Tarjetas' : 'Error al guardar en este navegador');
}

export function renderPlayerCardView(): string {
  const { ui } = store;
  const draft = getActivePlayerCardDraft();
  const known = getKnownPlayerNames();
  const themeList = Object.values(PLAYER_CARD_THEMES);
  const metalList = Object.values(PLAYER_CARD_METALS);
  const activeTheme = PLAYER_CARD_THEMES[draft.theme] || PLAYER_CARD_THEMES.diamond;
  const activeMetal = draft.metalFinish || activeTheme.defaultMetal || 'chrome';
  const backRoute =
    ui.playerCardReturnRoute && ui.playerCardReturnRoute !== 'player-card' ? ui.playerCardReturnRoute : 'home';

  return `
  <div class="page">
    <datalist id="pc-known-players">${known.map((n) => `<option value="${esc(n)}">`).join('')}</datalist>
    <div class="page-h">
      <div class="page-h-top">
        <button class="icon-btn" data-nav="${esc(backRoute)}" title="Volver">${ICONS.back}</button>
        <h1>Tarjeta de Jugador</h1>
        <button class="icon-btn" data-act="pc-new-blank" title="Nueva tarjeta en blanco">${ICONS.plus}</button>
      </div>
    </div>
    <p class="muted" style="text-align:center;margin-bottom:16px">Subí una foto, completá tus datos y descargá tu tarjeta HD en alta calidad.</p>

    <div class="pc-layout">
      <div class="pc-preview-col">
        <div class="pc-preview-frame ${ui.playerCardTouchDrag ? 'touch-drag' : ''}">
          <canvas id="pc-preview-canvas" class="pc-canvas ${ui.playerCardTouchDrag ? 'touch-drag' : ''}" width="1080" height="1350"></canvas>
        </div>
        ${
          draft.origPhoto
            ? `
          <div style="display:flex;align-items:center;justify-content:center;gap:8px;flex-wrap:wrap;margin-top:8px">
            <button type="button" class="pc-touch-drag-btn ${ui.playerCardTouchDrag ? 'active' : ''}" data-act="pc-toggle-touch-drag">
              ${ui.playerCardTouchDrag ? '✓ Listo (volver a deslizar página)' : '✥ Mover foto en tarjeta'}
            </button>
          </div>
          <div class="pc-drag-hint">${ui.playerCardTouchDrag ? '📌 Arrastrá sobre la tarjeta para encuadrar la foto (scroll bloqueado)' : '💡 En celular deslizás normal. Tocá "Mover foto en tarjeta" o usá los controles de abajo.'}</div>
        `
            : `<div class="pc-drag-hint" style="opacity:.75">📱 Podés deslizar la pantalla normalmente por toda la tarjeta.</div>`
        }
        <div class="btn-row">
          <button class="btn primary big" style="width:100%" data-act="pc-download">${ICONS.dl} Descargar Imagen HD</button>
        </div>
        <button class="btn block" data-act="pc-save">${ICONS.check} Guardar en Mis Tarjetas (${savedPlayerCards.length})</button>
      </div>

      <div>
        <div class="card">
          <h3>${ICONS.camera} Foto y Recorte</h3>
          <div class="btn-row">
            <label class="btn primary" style="cursor:pointer;flex:2 1 180px">
              ${ICONS.up} ${draft.origPhoto ? 'Cambiar Foto (Galería / Archivo)' : 'Elegir Foto (Galería / Archivos)'}
              <input type="file" id="pc-photo-inp" accept="image/jpeg,image/png,image/webp,image/heic,image/heif,image/avif,.jpg,.jpeg,.png,.webp,.heic" style="display:none">
            </label>
            ${draft.origPhoto ? `<button class="btn danger sm" data-act="pc-clear-photo" style="flex:0 0 auto">${ICONS.trash} Quitar</button>` : ''}
          </div>

          <div class="seg" style="margin-top:12px">
            <button class="${draft.bgMode === 'ai' ? 'on' : ''}" data-pc-bgmode="ai" ${ui.playerCardAiBusy ? 'disabled' : ''}>✨ Recorte IA (Sin fondo)</button>
            <button class="${draft.bgMode === 'instant' ? 'on' : ''}" data-pc-bgmode="instant" ${ui.playerCardAiBusy ? 'disabled' : ''}>⚡ Modo Instantáneo</button>
          </div>

          <div id="pc-ai-status-box" class="pc-ai-status ${ui.playerCardAiStatus === 'ok' ? 'ok' : ui.playerCardAiStatus === 'err' ? 'err' : ''}" style="display:${ui.playerCardAiText ? 'flex' : 'none'}">
            ${esc(ui.playerCardAiText)}
          </div>

          ${
            draft.origPhoto
              ? `
          <div class="pc-sliders">
            <div class="pc-slider-row">
              <label for="pc-zoom">Zoom</label>
              <input type="range" id="pc-zoom" min="0.55" max="2.2" step="0.02" value="${Number(draft.zoom || 1).toFixed(2)}">
              <span id="pc-zoom-val">${Math.round(Number(draft.zoom || 1) * 100)}%</span>
            </div>
            <div class="pc-slider-row">
              <label for="pc-offx">Posición X</label>
              <input type="range" id="pc-offx" min="-350" max="350" step="2" value="${Math.round(Number(draft.offsetX || 0))}">
              <span id="pc-offx-val">${Math.round(Number(draft.offsetX || 0))}</span>
            </div>
            <div class="pc-slider-row">
              <label for="pc-offy">Posición Y</label>
              <input type="range" id="pc-offy" min="-350" max="350" step="2" value="${Math.round(Number(draft.offsetY || 0))}">
              <span id="pc-offy-val">${Math.round(Number(draft.offsetY || 0))}</span>
            </div>
            <div style="display:flex;justify-content:flex-end">
              <button class="btn sm" data-act="pc-reset-frame">↺ Centrar foto</button>
            </div>
          </div>`
              : ''
          }
        </div>

        <div class="card">
          <h3>${ICONS.idCard} Datos del Jugador/a</h3>
          <div class="row wrap">
            <div class="field" style="flex:2 1 190px">
              <label for="pc-name">Nombre y Apellido</label>
              <input class="inp" id="pc-name" list="pc-known-players" value="${esc(draft.name || '')}" placeholder="Ej: Nestor García">
            </div>
            <div class="field" style="flex:1 1 140px">
              <label for="pc-nick">Apodo (Opcional)</label>
              <input class="inp" id="pc-nick" value="${esc(draft.nickname || '')}" placeholder="Ej: El Rayo">
            </div>
          </div>

          <div class="row wrap" style="margin-top:12px">
            <div class="field" style="flex:1 1 140px">
              <label for="pc-cat">Categoría</label>
              <input class="inp" id="pc-cat" value="${esc(draft.category || '')}" placeholder="Ej: 6ta, 4ta, Suma 10">
            </div>
            <div class="field" style="flex:0 1 130px">
              <label for="pc-age">Edad</label>
              <input class="inp" id="pc-age" inputmode="numeric" value="${esc(draft.age || '')}" placeholder="Ej: 52">
            </div>
          </div>
          <div class="pc-chips">
            ${PLAYER_CARD_CATEGORIES.map((c) => `<button class="pc-chip ${draft.category === c ? 'on' : ''}" data-pc-cat="${esc(c)}">${esc(c)}</button>`).join('')}
          </div>

          <div class="field" style="margin-top:14px">
            <label>Posición en cancha</label>
            <div class="seg">
              ${PLAYER_CARD_POSITIONS.map((pos) => `<button class="${draft.position === pos ? 'on' : ''}" data-pc-pos="${esc(pos)}">${esc(pos)}</button>`).join('')}
            </div>
          </div>

          <div class="field" style="margin-top:14px">
            <label>Perfil (Mano hábil)</label>
            <div class="pc-chips">
              ${PLAYER_CARD_HANDS.map((h) => `<button class="pc-chip ${draft.hand === h ? 'on' : ''}" data-pc-hand="${esc(h)}">${esc(h)}</button>`).join('')}
            </div>
          </div>

          <div class="field" style="margin-top:14px">
            <label for="pc-shot">Mejor Golpe</label>
            <input class="inp" id="pc-shot" value="${esc(draft.bestShot || '')}" placeholder="Ej: Víbora, Bandeja, Smash">
            <div class="pc-chips">
              ${PLAYER_CARD_SHOTS.map((sh) => `<button class="pc-chip ${draft.bestShot === sh ? 'on' : ''}" data-pc-shot="${esc(sh)}">${esc(sh)}</button>`).join('')}
            </div>
          </div>
        </div>

        <div class="card">
          <h3>🎨 Estilo Diamond y Logos</h3>
          <div class="field">
            <label>Tema de tarjeta</label>
            <div class="pc-themes">
              ${themeList
                .map(
                  (th) => `
                <button class="pc-theme-btn ${activeTheme.id === th.id ? 'on' : ''}" data-pc-theme="${esc(th.id)}">
                  <span class="pc-theme-swatch" style="background:linear-gradient(135deg,${th.accentBright},${th.accent})"></span>
                  <span>${esc(th.label)}</span>
                </button>`
                )
                .join('')}
            </div>
          </div>

          <div class="field" style="margin-top:14px">
            <label>Acabado metálico 3D (Letras y Marco)</label>
            <div class="pc-themes">
              ${metalList
                .map(
                  (mt) => `
                <button class="pc-theme-btn ${activeMetal === mt.id ? 'on' : ''}" data-pc-metal="${esc(mt.id)}">
                  <span class="pc-metal-swatch" style="background:${mt.swatch}"></span>
                  <span>${esc(mt.label)}</span>
                </button>`
                )
                .join('')}
            </div>
          </div>

          <div class="pc-logos-grid" style="margin-top:14px">
            <div class="pc-logo-box">
              <small class="muted" style="font-size:11.5px;font-weight:700">Logo 1 (Izquierda)</small>
              ${playerCardLogos.logo1 ? `<img class="pc-logo-thumb" src="${playerCardLogos.logo1}" alt="Logo 1">` : `<small class="muted" style="font-size:11px">Por defecto: Logo Pádel Control SÉ</small>`}
              <div style="display:flex;gap:6px;flex-wrap:wrap;justify-content:center">
                <label class="btn sm" style="cursor:pointer">
                  ${ICONS.up} ${playerCardLogos.logo1 ? 'Cambiar' : 'Subir'}
                  <input type="file" id="pc-logo1-inp" accept="image/png,image/jpeg,image/webp,image/svg+xml,.png,.jpg,.jpeg,.webp,.svg" style="display:none">
                </label>
                ${playerCardLogos.logo1 ? `<button class="btn danger sm" data-pc-del-logo="1">${ICONS.trash}</button>` : ''}
              </div>
            </div>
            <div class="pc-logo-box">
              <small class="muted" style="font-size:11.5px;font-weight:700">Logo 2 (Centro)</small>
              ${
                playerCardLogos.logo2
                  ? `<img class="pc-logo-thumb" src="${playerCardLogos.logo2}" onerror="if(this.dataset.fb)return;this.dataset.fb='1';this.src='${DEFAULT_CENTER_LOGO_URL}'" alt="Logo 2">${playerCardLogos.logo2 === DEFAULT_CENTER_LOGO_URL ? `<small class="muted" style="font-size:10.5px;color:var(--cyan2)">Predeterminado: PRO PÁDEL</small>` : ''}`
                  : `<small class="muted" style="font-size:11px">Sin logo central</small>`
              }
              <div style="display:flex;gap:6px;flex-wrap:wrap;justify-content:center">
                <label class="btn sm" style="cursor:pointer">
                  ${ICONS.up} ${playerCardLogos.logo2 ? 'Cambiar' : 'Subir'}
                  <input type="file" id="pc-logo2-inp" accept="image/png,image/jpeg,image/webp,image/svg+xml,.png,.jpg,.jpeg,.webp,.svg" style="display:none">
                </label>
                ${playerCardLogos.logo2 !== DEFAULT_CENTER_LOGO_URL ? `<button type="button" class="btn sm" data-act="pc-reset-logo2" title="Usar logo oficial PRO PÁDEL">↺ PRO PÁDEL</button>` : ''}
                ${playerCardLogos.logo2 ? `<button type="button" class="btn danger sm" data-pc-del-logo="2">${ICONS.trash}</button>` : ''}
              </div>
            </div>
          </div>

          <div class="field" style="margin-top:12px">
            <label for="pc-subtitle">Texto / Club de respaldo (si quitás los logos)</label>
            <input class="inp" id="pc-subtitle" value="${esc(playerCardLogos.subTitle || '')}" placeholder="Ej: PRO PÁDEL · Torneo Apertura">
          </div>

          <div class="tog" style="margin-top:10px;padding:10px 0 0">
            <div><b>Mostrar sello Pádel Control SÉ</b><small>Marca sutil al pie de la tarjeta.</small></div>
            <label class="sw"><input type="checkbox" ${draft.showAppBrand !== false ? 'checked' : ''} id="pc-show-brand"><span></span></label>
          </div>
        </div>

        ${
          savedPlayerCards.length
            ? `
        <div class="card">
          <h3>${ICONS.idCard} Mis Tarjetas Guardadas (${savedPlayerCards.length})</h3>
          <div class="pc-saved-grid">
            ${savedPlayerCards
              .map((sc) => {
                const ini =
                  (sc.name || 'JG')
                    .split(/\s+/)
                    .filter(Boolean)
                    .map((w) => w[0])
                    .join('')
                    .slice(0, 2)
                    .toUpperCase() || 'JG';
                const thumb = sc.cutoutPhoto || sc.origPhoto;
                return `
              <div class="pc-saved-card">
                <div class="pc-saved-top">
                  ${thumb ? `<img class="pc-saved-ava" src="${thumb}" alt="${esc(sc.name)}">` : `<div class="pc-saved-ava">${esc(ini)}</div>`}
                  <div style="min-width:0;flex:1">
                    <b style="display:block;font-size:14px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${esc(sc.name || 'Sin nombre')}</b>
                    <small class="muted" style="font-size:11.5px">${sc.nickname ? `«${esc(sc.nickname)}» · ` : ''}${esc(sc.category || '—')} · ${esc(sc.position || '')}</small>
                  </div>
                </div>
                <div style="display:flex;gap:6px">
                  <button class="btn sm" style="flex:1" data-pc-load="${esc(sc.id)}">Editar / Ver</button>
                  <button class="btn danger sm" data-pc-del="${esc(sc.id)}" title="Eliminar">${ICONS.trash}</button>
                </div>
              </div>`;
              })
              .join('')}
          </div>
        </div>`
            : ''
        }
      </div>
    </div>

    ${renderSignatureFooter()}
  </div>
  ${renderTabbar('home')}`;
}
