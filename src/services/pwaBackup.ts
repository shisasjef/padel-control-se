import {
  getPlayerCardLogos,
  getSavedPlayerCards,
  normalizeLogo2State,
  saveCardLogosToIDB,
  savePlayerCardToIDB
} from '../cards/playerCardStudio';
import { DEFAULT_SYNC_SERVER, normalizeSyncServerUrl } from '../codecs/shareCodec';
import { ICONS } from '../core/constants';
import { clone, esc } from '../core/utils';
import { appHooks, showToast } from '../state/runtime';
import {
  archiveMatchToHistory,
  DEFAULT_PRESET,
  loadJSON,
  LS_ACTIVE,
  LS_PREFS,
  LS_PRESET,
  migratePlayerDefaults,
  refreshStorageHealth,
  saveCompetitions,
  saveJSON,
  store
} from '../state/store';
import type { BackupPayloadV3, BeforeInstallPromptEvent, Competition, Match, PlayerCardLogos, SharedRanking } from '../types';

export function shouldShowBackupReminder(): boolean {
  const { historyList, competitionsList, prefs } = store;
  const totalItems = historyList.length + competitionsList.length;
  if (!totalItems) return false;
  const now = Date.now();
  if (prefs.backupPromptDismissedAt && now - prefs.backupPromptDismissedAt < 3 * 86400000) return false;
  const changes = Number(prefs.changesSinceBackup) || 0;
  if (changes >= 5) return true;
  if (prefs.lastBackupAt > 0 && changes > 0 && now - prefs.lastBackupAt > 7 * 86400000) return true;
  if (!prefs.lastBackupAt && totalItems >= 5) return true;
  return false;
}

export function renderHomeSystemBanners(): string {
  const { ui, prefs, historyList, competitionsList } = store;
  const blocks: string[] = [];
  if (ui.swUpdateReady) {
    blocks.push(`
      <div class="sys-banner">
        <div class="sys-banner-txt">
          <b>✨ Nueva versión disponible</b>
          <small>Actualizá para tener las últimas mejoras y soporte offline al día.</small>
        </div>
        <div class="sys-banner-acts">
          <button class="btn primary sm" data-act="apply-sw-update">Actualizar ahora</button>
        </div>
      </div>`);
  } else if (!ui.isOnline) {
    blocks.push(`
      <div class="sys-banner">
        <div class="sys-banner-txt">
          <b>📡 Modo Offline activo</b>
          <small>Podés arbitrar partidos, ver historial y rankings locales sin conexión.</small>
        </div>
      </div>`);
  }
  if (ui.pwaInstallPrompt && !ui.pwaInstalled) {
    blocks.push(`
      <div class="sys-banner">
        <div class="sys-banner-txt">
          <b>📲 Instalar Pádel Control SÉ</b>
          <small>Abrila directo desde tu pantalla de inicio, incluso sin internet.</small>
        </div>
        <div class="sys-banner-acts">
          <button class="btn primary sm" data-act="install-pwa">Instalar App</button>
        </div>
      </div>`);
  }
  if (shouldShowBackupReminder()) {
    const ch = Number(prefs.changesSinceBackup) || 0;
    const msg =
      ch > 0
        ? `Tenés ${ch} ${ch === 1 ? 'registro nuevo' : 'registros nuevos'} sin respaldo en archivo.`
        : `Guardá una copia de tus ${historyList.length} partidos y ${competitionsList.length} competencias.`;
    blocks.push(`
      <div class="sys-banner warn">
        <div class="sys-banner-txt">
          <b>💾 Backup JSON recomendado</b>
          <small>${esc(msg)}</small>
        </div>
        <div class="sys-banner-acts">
          <button class="btn primary sm" data-act="export-json">${ICONS.dl} Descargar JSON</button>
          <button class="btn sm" data-act="dismiss-backup-prompt">Luego</button>
        </div>
      </div>`);
  }
  return blocks.join('');
}

export function buildBackupPayload(includeCards = true): BackupPayloadV3 {
  const { historyList, competitionsList, prefs, preset, activeMatch } = store;
  const payload: BackupPayloadV3 = {
    version: 3,
    app: 'padel-control-se',
    exportedAt: Date.now(),
    matches: historyList,
    competitions: competitionsList,
    prefs: clone(prefs),
    preset: clone(preset),
    activeMatch: activeMatch ? clone(activeMatch) : null,
    rankingVault: loadJSON<Record<string, SharedRanking>>('padel_ranking_vault', {})
  };
  if (includeCards) {
    payload.playerCardLogos = clone(getPlayerCardLogos());
    payload.playerCards = clone(getSavedPlayerCards());
  }
  return payload;
}

function triggerJsonBlobDownload(blob: Blob, filename: string): void {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1500);
}

export async function exportBackupJson({ share = false }: { share?: boolean } = {}): Promise<void> {
  const { prefs, historyList, competitionsList } = store;
  const includeCards = prefs.backupIncludeCards !== false;
  const payload = buildBackupPayload(includeCards);
  const savedPlayerCards = getSavedPlayerCards();
  const jsonStr = JSON.stringify(payload, null, 2);
  const blob = new Blob([jsonStr], { type: 'application/json' });
  const filename = `padel-se-backup-${new Date().toISOString().slice(0, 10)}.json`;

  if (share && typeof navigator !== 'undefined' && navigator.share && typeof File === 'function') {
    try {
      const file = new File([blob], filename, { type: 'application/json' });
      if (!navigator.canShare || navigator.canShare({ files: [file] })) {
        await navigator.share({
          title: 'Backup Pádel Control SÉ',
          text: `Respaldo completo: ${historyList.length} partidos, ${competitionsList.length} ligas/torneos.`,
          files: [file]
        });
        prefs.lastBackupAt = Date.now();
        prefs.changesSinceBackup = 0;
        saveJSON(LS_PREFS, prefs);
        appHooks.render();
        showToast('✓ Backup JSON compartido');
        return;
      }
    } catch (err) {
      if ((err as Error)?.name === 'AbortError') return;
    }
  }

  triggerJsonBlobDownload(blob, filename);
  prefs.lastBackupAt = Date.now();
  prefs.changesSinceBackup = 0;
  saveJSON(LS_PREFS, prefs);
  appHooks.render();
  const cardNote = includeCards && savedPlayerCards.length ? `, ${savedPlayerCards.length} tarj.` : '';
  showToast(`✓ Backup JSON descargado (${historyList.length} P, ${competitionsList.length} L/T${cardNote})`);
}

export async function importBackupJsonText(rawText: string): Promise<void> {
  const { competitionsList, prefs } = store;
  try {
    const parsed = JSON.parse(rawText);
    let mCount = 0;
    let cCount = 0;
    let cardCount = 0;

    if (Array.isArray(parsed)) {
      (parsed as Match[]).forEach((m) => {
        if (m && m.id && m.teams) {
          archiveMatchToHistory(m, { skipSyncPublish: true, skipBackupCount: true });
          mCount++;
        }
      });
      showToast(`${mCount} partidos importados`);
      appHooks.render();
      return;
    }

    if (!parsed || typeof parsed !== 'object') {
      showToast('Archivo JSON inválido');
      return;
    }

    if (Array.isArray(parsed.competitions)) {
      (parsed.competitions as Competition[]).forEach((nc) => {
        if (nc && nc.id && nc.name) {
          const idx = competitionsList.findIndex((x) => x.id === nc.id);
          if (idx >= 0) competitionsList[idx] = nc;
          else competitionsList.push(nc);
          cCount++;
        }
      });
      saveCompetitions();
    }

    if (Array.isArray(parsed.matches)) {
      (parsed.matches as Match[]).forEach((m) => {
        if (m && m.id && m.teams) {
          archiveMatchToHistory(m, { skipSyncPublish: true, skipBackupCount: true });
          mCount++;
        }
      });
    }

    if (competitionsList.length) {
      competitionsList.forEach((c) => appHooks.resolveCompetitionFixtures(c));
      saveCompetitions();
    }

    if (parsed.rankingVault && typeof parsed.rankingVault === 'object') {
      const vault = loadJSON<Record<string, SharedRanking>>('padel_ranking_vault', {});
      Object.entries(parsed.rankingVault as Record<string, SharedRanking>).forEach(([rkId, rk]) => {
        if (rk && rk.id) vault[rkId] = rk;
      });
      saveJSON('padel_ranking_vault', vault);
    }

    if (parsed.prefs && typeof parsed.prefs === 'object') {
      const curSync = prefs.syncServerUrl;
      const incomingSync = parsed.prefs.syncServerUrl ? normalizeSyncServerUrl(parsed.prefs.syncServerUrl) : curSync;
      Object.assign(prefs, parsed.prefs);
      prefs.syncServerUrl = incomingSync || DEFAULT_SYNC_SERVER;
      prefs.lastBackupAt = Date.now();
      prefs.changesSinceBackup = 0;
      saveJSON(LS_PREFS, prefs);
    }

    if (parsed.preset && typeof parsed.preset === 'object' && Array.isArray(parsed.preset.teams)) {
      store.preset = Object.assign({}, DEFAULT_PRESET, parsed.preset);
      migratePlayerDefaults(store.preset.teams);
      saveJSON(LS_PRESET, store.preset);
    }

    if (!store.activeMatch && parsed.activeMatch && parsed.activeMatch.id && parsed.activeMatch.teams) {
      store.activeMatch = parsed.activeMatch as Match;
      migratePlayerDefaults(store.activeMatch.teams);
      saveJSON(LS_ACTIVE, store.activeMatch);
    }

    if (parsed.playerCardLogos && typeof parsed.playerCardLogos === 'object') {
      const merged: PlayerCardLogos = Object.assign(
        { logo1: null, logo2: null, logo2Disabled: false, subTitle: '' },
        parsed.playerCardLogos as Partial<PlayerCardLogos>
      );
      normalizeLogo2State(merged);
      const curLogos = getPlayerCardLogos();
      Object.assign(curLogos, merged);
      await saveCardLogosToIDB();
    }

    if (Array.isArray(parsed.playerCards)) {
      for (const card of parsed.playerCards) {
        if (card && card.id) {
          await savePlayerCardToIDB(card);
          cardCount++;
        }
      }
    }

    void refreshStorageHealth(false);
    appHooks.render();
    const extraCard = cardCount ? `, ${cardCount} tarjetas` : '';
    showToast(`✓ Importados: ${mCount} partidos, ${cCount} competencias${extraCard}`);
  } catch {
    showToast('Archivo JSON inválido');
  }
}

export async function triggerPwaInstall(): Promise<void> {
  const { ui } = store;
  const promptEvt = ui.pwaInstallPrompt;
  if (!promptEvt) return;
  try {
    await promptEvt.prompt();
    const choice = await promptEvt.userChoice;
    if (choice && choice.outcome === 'accepted') {
      ui.pwaInstallPrompt = null;
      ui.pwaInstalled = true;
    }
  } catch {}
  appHooks.render();
}

export function applyPendingSwUpdate(): void {
  const { ui } = store;
  const reg = ui.swRegistration;
  if (reg && reg.waiting) {
    ui._reloadingForSw = true;
    reg.waiting.postMessage({ type: 'SKIP_WAITING' });
    showToast('Actualizando a la última versión...');
  } else {
    location.reload();
  }
}

export async function registerPwaServiceWorker(): Promise<void> {
  const { ui } = store;
  if (!('serviceWorker' in navigator) || location.protocol === 'file:') {
    ui.swStatus = 'unsupported';
    return;
  }
  try {
    const reg = await navigator.serviceWorker.register('./sw.js', { scope: './' });
    ui.swRegistration = reg;
    if (reg.waiting) {
      ui.swUpdateReady = true;
    }
    if (reg.active) {
      ui.swStatus = 'active';
    }
    reg.addEventListener('updatefound', () => {
      const nw = reg.installing;
      if (!nw) return;
      nw.addEventListener('statechange', () => {
        if (nw.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            ui.swUpdateReady = true;
          } else {
            ui.swStatus = 'active';
          }
          appHooks.render();
        }
      });
    });
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      ui.swStatus = 'active';
      if (ui._reloadingForSw) {
        window.location.reload();
      }
    });
    appHooks.render();
  } catch {
    ui.swStatus = 'error';
  }
}

export function initPwaSystemListeners(): void {
  if (typeof window === 'undefined') return;
  window.addEventListener('beforeinstallprompt', (ev) => {
    ev.preventDefault();
    store.ui.pwaInstallPrompt = ev as BeforeInstallPromptEvent;
    if (store.ui.route === 'home' || store.ui.route === 'settings') appHooks.render();
  });
  window.addEventListener('appinstalled', () => {
    store.ui.pwaInstallPrompt = null;
    store.ui.pwaInstalled = true;
    showToast('✓ Pádel Control SÉ instalada');
    appHooks.render();
  });
  window.addEventListener('online', () => {
    store.ui.isOnline = true;
    if (['home', 'settings', 'competitions', 'comp-detail'].includes(store.ui.route)) appHooks.render();
  });
  window.addEventListener('offline', () => {
    store.ui.isOnline = false;
    if (['home', 'settings', 'competitions', 'comp-detail'].includes(store.ui.route)) appHooks.render();
  });
}
