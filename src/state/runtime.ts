import type { Match } from '../types';

let toastTimer: ReturnType<typeof setTimeout> | null = null;

export function showToast(msg: string): void {
  if (typeof document === 'undefined') return;
  let el = document.getElementById('live-toast');
  if (el) el.remove();
  el = document.createElement('div');
  el.id = 'live-toast';
  el.className = 'toast';
  el.textContent = msg;
  document.body.appendChild(el);
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    if (el && el.parentNode) el.remove();
  }, 2400);
}

export interface AppHooks {
  render: () => void;
  navigate: (route: string, extra?: Record<string, unknown>) => void;
  updateWakeLock: () => Promise<void> | void;
  publishLiveMatchState: (m: Match, immediate?: boolean, force?: boolean) => void;
  syncCompetitionForMatch: (m: Match, opts?: { skipSyncPublish?: boolean }) => void;
  publishCompMatch: (comp: any, m: Match) => void;
  renderHomeSystemBanners: () => string;
  afterRenderQR: () => void;
  ensureCompLiveWatcherForCurrentView: () => void;
  refreshPlayerCardPreview: () => void;
  openPlayerCardFor: (playerName?: string, opts?: Record<string, unknown>) => void;
  loadPlayerCardLogosAndCards: () => {
    logos: any;
    cards: any[];
    setLogos: (logos: any) => Promise<void>;
    saveCard: (card: any) => Promise<boolean>;
  };
  pollLiveChannelOnce: (topic: string, forceFull?: boolean) => Promise<void>;
  pollCompChannelOnce: (syncCode: string, since?: string | null, showFeedback?: boolean) => Promise<any>;
  resolveCompetitionFixtures: (comp: any) => void;
}

const noop = () => {};

export const appHooks: AppHooks = {
  render: noop,
  navigate: noop,
  updateWakeLock: noop,
  publishLiveMatchState: noop,
  syncCompetitionForMatch: noop,
  publishCompMatch: noop,
  renderHomeSystemBanners: () => '',
  afterRenderQR: noop,
  ensureCompLiveWatcherForCurrentView: noop,
  refreshPlayerCardPreview: noop,
  openPlayerCardFor: noop,
  loadPlayerCardLogosAndCards: () => ({
    logos: { logo1: null, logo2: null, logo2Disabled: false, subTitle: '' },
    cards: [],
    setLogos: async () => {},
    saveCard: async () => false
  }),
  pollLiveChannelOnce: async () => {},
  pollCompChannelOnce: async () => ({ ok: false, changed: false, count: 0 }),
  resolveCompetitionFixtures: noop
};
