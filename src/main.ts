import './styles/main.css';

import {
  bumpPcAiRequestToken,
  createDefaultPlayerCardDraft,
  DEFAULT_CENTER_LOGO_URL,
  deletePlayerCardFromIDB,
  downloadPlayerCardImage,
  getActivePlayerCardDraft,
  getPlayerCardLogos,
  getSavedPlayerCards,
  loadPlayerCardDataFromIDB,
  openPlayerCardFor,
  processUploadedLogo,
  processUploadedPlayerPhoto,
  refreshPlayerCardPreview,
  renderPlayerCardView,
  runPlayerPhotoAiCutout,
  saveCardLogosToIDB,
  saveCurrentPlayerCard,
  savePlayerCardToIDB,
  scheduleSaveActiveDraftToIDB
} from './cards/playerCardStudio';
import {
  cleanLiveTopic,
  decodeMatchShare,
  decodeRankingPayload,
  DEFAULT_SYNC_SERVER,
  normalizeSyncServerUrl
} from './codecs/shareCodec';
import { clone, esc, formatPairLabel, getMatchCompId, playerLabel } from './core/utils';
import {
  assignPlayerRanks,
  computeScopeStandings,
  getCompSubtitle,
  isProyectoPadelComp,
  sortStandingsRows
} from './engines/eloEngine';
import {
  generateGroupsFixtures,
  generatePlayoffBracket,
  generateRoundRobinFixtures,
  newCompId,
  participantToTeamObj,
  resolveQuickScoreOutcome
} from './engines/fixtureEngine';
import { computeMatch } from './engines/matchEngine';
import { toggleVoiceControl, updateWakeLock } from './services/audioVoice';
import {
  advanceGroupsToPlayoffs,
  downloadCompSyncQR,
  ensureCompLiveWatcherForCurrentView,
  ensureCompSyncCode,
  fillPresetFromComp,
  getCompSyncWatchCode,
  joinSyncedCompetition,
  openQuickScoreModal,
  pollCompChannelOnce,
  publishCompDeleteMatch,
  publishCompFixtureAdd,
  publishCompFullSync,
  publishCompMatch,
  publishCompParticipant,
  publishCompParticipantChange,
  publishCompSetup,
  resolveCompetitionFixtures,
  shareCompInvite,
  startFixtureMatch,
  stopCompLiveWatcher,
  submitQuickFixtureResult,
  submitQuickMatchResult,
  syncCompetitionForMatch
} from './services/competitionSync';
import {
  connectLiveSpectator,
  disconnectLiveSpectator,
  disconnectLiveStreamOnly,
  exportMatchSummaryImage,
  exportRankingImage,
  getCurrentRankingContext,
  getEffectiveSortKey,
  openShortSharedMatch,
  openShortSharedRanking,
  pollLiveChannelOnce,
  publishLiveMatchState,
  saveSharedRankingToVault,
  shareLiveMatchLink,
  shareMatchLink,
  shareRankingText
} from './services/liveBroadcast';
import {
  finishMatchEarly,
  flipSides,
  onTapTeam,
  recordFault,
  redoPoint,
  scorePoint,
  startMatchClockTimer,
  startNewMatch,
  undoPoint
} from './services/matchActions';
import {
  applyPendingSwUpdate,
  exportBackupJson,
  importBackupJsonText,
  initPwaSystemListeners,
  registerPwaServiceWorker,
  renderHomeSystemBanners,
  triggerPwaInstall
} from './services/pwaBackup';
import { appHooks, showToast } from './state/runtime';
import {
  archiveMatchToHistory,
  generateRankingId,
  getCompById,
  getCompetitionMatches,
  getCompetitionScoringConfig,
  hydrateStateFromIDB,
  loadJSON,
  LS_HIST,
  LS_PREFS,
  LS_PRESET,
  markBackupChange,
  persistActive,
  refreshStorageHealth,
  removeJSON,
  saveCompetitions,
  saveJSON,
  store
} from './state/store';
import type { Competition, Fixture, Match, Participant, RankingContext, SharedRanking } from './types';
import {
  renderCompDetail,
  renderCompetitionModals,
  renderCompetitions,
  syncQuickScoreStateFromDom,
  updateQuickScorePreviewDom
} from './views/competitionsViews';
import { renderHistory, renderPlayers, renderSettings } from './views/historyPlayersSettingsViews';
import {
  afterRenderQR,
  copyAppUrl,
  downloadAppQR,
  renderBoard,
  renderHome,
  renderNewMatch,
  renderOBSModal,
  renderOBSOverlay,
  renderQRModal,
  shareAppViaWhatsApp
} from './views/homeBoardViews';
import { applyTheme, navigate } from './views/sharedUi';
import { getStatsTargetMatch, renderStats } from './views/statsViews';

function syncCompFormFromDom(): void {
  const f = store.ui.compFormState;
  if (!f) return;
  const nm = document.getElementById('cf-name') as HTMLInputElement | null;
  if (nm) f.name = nm.value;
  const wp = document.getElementById('cf-wpts') as HTMLInputElement | null;
  if (wp) f.winPts = Math.max(0, Number(wp.value) || 0);
  const dp = document.getElementById('cf-dpts') as HTMLInputElement | null;
  if (dp) f.drawPts = Math.max(0, Number(dp.value) || 0);
  const lp = document.getElementById('cf-lpts') as HTMLInputElement | null;
  if (lp) f.lossPts = Math.max(0, Number(lp.value) || 0);
  const sp = document.getElementById('cf-spts') as HTMLInputElement | null;
  if (sp) f.setBonusPts = Math.max(0, Number(sp.value) || 0);
  const gp = document.getElementById('cf-gpts') as HTMLInputElement | null;
  if (gp) f.gameBonusPts = Math.max(0, Number(gp.value) || 0);
  const ng = document.getElementById('cf-ngroups') as HTMLSelectElement | null;
  if (ng) f.numGroups = Math.max(2, Math.min(4, Number(ng.value) || 2));
  const adv = document.getElementById('cf-adv') as HTMLSelectElement | null;
  if (adv) f.advancePerGroup = Math.max(1, Math.min(4, Number(adv.value) || 2));
  const sets = document.getElementById('cf-sets') as HTMLSelectElement | null;
  const deuce = document.getElementById('cf-deuce') as HTMLSelectElement | null;
  if (sets || deuce) {
    f.defaultRules = f.defaultRules || {};
    if (sets) f.defaultRules.totalSets = Number(sets.value) || 3;
    if (deuce) f.defaultRules.deuceRule = deuce.value || 'golden';
  }
}

function openCompModal(mode: 'create' | 'edit', kindOrComp: string | Competition): void {
  const { ui, preset } = store;
  if (mode === 'edit' && kindOrComp && typeof kindOrComp === 'object') {
    const c = kindOrComp;
    const sc = getCompetitionScoringConfig(c);
    ui.compFormState = {
      id: c.id,
      kind: c.kind || 'league',
      name: c.name || '',
      format: c.format || (c.kind === 'tournament' ? 'knockout' : 'league_rr'),
      rankingMode: c.rankingMode || 'pairs',
      winPts: sc.winPts,
      drawPts: sc.drawPts,
      lossPts: sc.lossPts,
      setBonusPts: sc.setBonusPts,
      gameBonusPts: sc.gameBonusPts,
      numGroups: Number(c.numGroups) || 2,
      advancePerGroup: Number(c.advancePerGroup) || 2,
      defaultRules: clone(
        c.defaultRules || {
          totalSets: 3,
          gamesPerSet: 6,
          deuceRule: 'golden',
          tiebreakAt: 6,
          tiebreakPoints: 7,
          finalSet: 'normal',
          changeoverRule: 'odd'
        }
      )
    };
    ui.compModal = 'edit';
    return;
  }
  const kind = kindOrComp === 'tournament' ? 'tournament' : 'league';
  ui.compFormState = {
    id: null,
    kind,
    name: '',
    format: kind === 'tournament' ? 'knockout' : 'league_rr',
    rankingMode: 'pairs',
    winPts: 3,
    drawPts: 2,
    lossPts: 1,
    setBonusPts: 0,
    gameBonusPts: 0,
    numGroups: 2,
    advancePerGroup: 2,
    defaultRules: {
      totalSets: preset.totalSets || 3,
      gamesPerSet: preset.gamesPerSet || 6,
      deuceRule: preset.deuceRule || 'golden',
      tiebreakAt: preset.tiebreakAt ?? 6,
      tiebreakPoints: preset.tiebreakPoints || 7,
      finalSet: preset.finalSet || 'normal',
      changeoverRule: preset.changeoverRule || 'odd'
    }
  };
  ui.compModal = 'create';
}

function buildCompRankingContext(comp: Competition | null | undefined): RankingContext {
  if (!comp) return getCurrentRankingContext();
  const { ui, prefs } = store;
  const sc = getCompetitionScoringConfig(comp);
  const isPP = isProyectoPadelComp(comp);
  const entityMode = comp.rankingMode === 'both' ? ui.playerEntityMode || 'pairs' : comp.rankingMode || 'pairs';
  const sortKey = getEffectiveSortKey(comp, comp.id);
  const sortOpts = { tiebreakMode: isPP ? 'games' : 'sets' };
  const raw = computeScopeStandings(getCompetitionMatches(comp, false), {
    ...sc,
    entityMode,
    seedParticipants: comp.participants || []
  });
  const players = assignPlayerRanks(sortStandingsRows(raw, sortKey, sortOpts), sortKey, sortOpts);
  return {
    scope: comp.kind,
    id: `${prefs.rankingId || 'RK'}-${comp.id.slice(-4).toUpperCase()}`,
    title: comp.name,
    subtitle: getCompSubtitle(comp, entityMode, sc),
    entityMode,
    primaryMetric: isPP ? 'elo' : 'pts',
    comp,
    scoring: sc,
    sortKey,
    players
  };
}

export function render(): void {
  const { ui } = store;
  applyTheme();
  const root = document.getElementById('app');
  if (!root) return;

  if (ui.route === 'obs') {
    document.documentElement.classList.add('obs-mode');
    document.body.classList.add('obs-mode');
  } else {
    document.documentElement.classList.remove('obs-mode');
    document.body.classList.remove('obs-mode');
  }

  let html = '';
  switch (ui.route) {
    case 'new':
      html = renderNewMatch();
      break;
    case 'board':
      html = renderBoard(false);
      break;
    case 'display':
      html = renderBoard(true);
      break;
    case 'obs':
      html = renderOBSOverlay();
      break;
    case 'live':
      html = renderBoard(true);
      break;
    case 'stats':
      html = renderStats();
      break;
    case 'history':
      html = renderHistory();
      break;
    case 'players':
      html = renderPlayers();
      break;
    case 'competitions':
      html = renderCompetitions();
      break;
    case 'comp-detail':
      html = renderCompDetail();
      break;
    case 'player-card':
      html = renderPlayerCardView();
      break;
    case 'settings':
      html = renderSettings();
      break;
    default:
      html = renderHome();
      break;
  }
  if (ui.qrModalOpen) {
    html += renderQRModal();
  }
  if (ui.obsModalOpen) {
    html += renderOBSModal();
  }
  if (ui.compModal) {
    html += renderCompetitionModals();
  }
  root.innerHTML = html;
  afterRenderQR();
  ensureCompLiveWatcherForCurrentView();
}

appHooks.render = render;
appHooks.navigate = navigate;
appHooks.updateWakeLock = updateWakeLock;
appHooks.publishLiveMatchState = publishLiveMatchState;
appHooks.syncCompetitionForMatch = syncCompetitionForMatch;
appHooks.publishCompMatch = publishCompMatch;
appHooks.renderHomeSystemBanners = renderHomeSystemBanners;
appHooks.afterRenderQR = afterRenderQR;
appHooks.ensureCompLiveWatcherForCurrentView = ensureCompLiveWatcherForCurrentView;
appHooks.refreshPlayerCardPreview = refreshPlayerCardPreview;
appHooks.openPlayerCardFor = openPlayerCardFor;
appHooks.loadPlayerCardLogosAndCards = () => ({
  logos: getPlayerCardLogos(),
  cards: getSavedPlayerCards(),
  setLogos: async (logos) => {
    const cur = getPlayerCardLogos();
    Object.assign(cur, logos);
    await saveCardLogosToIDB();
  },
  saveCard: savePlayerCardToIDB
});
appHooks.pollLiveChannelOnce = pollLiveChannelOnce;
appHooks.pollCompChannelOnce = pollCompChannelOnce;
appHooks.resolveCompetitionFixtures = resolveCompetitionFixtures;

// Click delegation
document.addEventListener('click', (ev) => {
  const t = ev.target as HTMLElement | null;
  if (!t) return;
  const { ui, preset, prefs } = store;

  const navEl = t.closest<HTMLElement>('[data-nav]');
  if (navEl) {
    ev.preventDefault();
    navigate(navEl.getAttribute('data-nav') || 'home');
    return;
  }

  const stEl = t.closest<HTMLElement>('[data-open-stats]');
  if (stEl) {
    ev.preventDefault();
    ui.statsId = stEl.getAttribute('data-open-stats');
    ui.statsSetFilter = 'all';
    ui.matchEndDismissed = true;
    navigate('stats');
    return;
  }

  const pcOpenEl = t.closest<HTMLElement>('[data-open-player-card]');
  if (pcOpenEl) {
    ev.preventDefault();
    const nm = pcOpenEl.getAttribute('data-open-player-card') || '';
    const defPos = pcOpenEl.getAttribute('data-pc-default-pos') || undefined;
    openPlayerCardFor(nm, { position: defPos });
    return;
  }

  const pcBgEl = t.closest<HTMLElement>('[data-pc-bgmode]');
  if (pcBgEl) {
    const mode = pcBgEl.getAttribute('data-pc-bgmode') || 'ai';
    const draft = getActivePlayerCardDraft();
    draft.bgMode = mode;
    ui.playerCardDraftDirty = true;
    scheduleSaveActiveDraftToIDB();
    if (mode === 'ai' && draft.origPhoto && !draft.cutoutPhoto && !draft.origHasAlpha) {
      render();
      void runPlayerPhotoAiCutout(draft);
    } else {
      ui.playerCardAiStatus = draft.origPhoto ? 'ok' : '';
      ui.playerCardAiText = draft.origPhoto
        ? mode === 'ai'
          ? '✓ Fondo recortado automáticamente'
          : '⚡ Modo instantáneo activo'
        : '';
      render();
    }
    return;
  }

  const pcCatEl = t.closest<HTMLElement>('[data-pc-cat]');
  if (pcCatEl) {
    getActivePlayerCardDraft().category = pcCatEl.getAttribute('data-pc-cat') || '';
    ui.playerCardDraftDirty = true;
    scheduleSaveActiveDraftToIDB();
    render();
    return;
  }

  const pcPosEl = t.closest<HTMLElement>('[data-pc-pos]');
  if (pcPosEl) {
    getActivePlayerCardDraft().position = pcPosEl.getAttribute('data-pc-pos') || 'Drive';
    ui.playerCardDraftDirty = true;
    scheduleSaveActiveDraftToIDB();
    render();
    return;
  }

  const pcHandEl = t.closest<HTMLElement>('[data-pc-hand]');
  if (pcHandEl) {
    getActivePlayerCardDraft().hand = pcHandEl.getAttribute('data-pc-hand') || 'Diestro';
    ui.playerCardDraftDirty = true;
    scheduleSaveActiveDraftToIDB();
    render();
    return;
  }

  const pcShotEl = t.closest<HTMLElement>('[data-pc-shot]');
  if (pcShotEl) {
    getActivePlayerCardDraft().bestShot = pcShotEl.getAttribute('data-pc-shot') || '';
    ui.playerCardDraftDirty = true;
    scheduleSaveActiveDraftToIDB();
    render();
    return;
  }

  const pcThemeEl = t.closest<HTMLElement>('[data-pc-theme]');
  if (pcThemeEl) {
    const d = getActivePlayerCardDraft();
    const newThemeId = pcThemeEl.getAttribute('data-pc-theme') || 'diamond';
    d.theme = newThemeId;
    if (!d.metalCustom) {
      const defaults: Record<string, string> = { gold: 'gold' };
      d.metalFinish = defaults[newThemeId] || 'chrome';
    }
    ui.playerCardDraftDirty = true;
    scheduleSaveActiveDraftToIDB();
    render();
    return;
  }

  const pcMetalEl = t.closest<HTMLElement>('[data-pc-metal]');
  if (pcMetalEl) {
    const d = getActivePlayerCardDraft();
    d.metalFinish = pcMetalEl.getAttribute('data-pc-metal') || 'chrome';
    d.metalCustom = true;
    ui.playerCardDraftDirty = true;
    scheduleSaveActiveDraftToIDB();
    render();
    return;
  }

  const pcDelLogoEl = t.closest<HTMLElement>('[data-pc-del-logo]');
  if (pcDelLogoEl) {
    const slot = pcDelLogoEl.getAttribute('data-pc-del-logo');
    const logos = getPlayerCardLogos();
    if (slot === '1') {
      logos.logo1 = null;
    } else {
      logos.logo2 = null;
      logos.logo2Disabled = true;
    }
    void saveCardLogosToIDB();
    render();
    showToast(`Logo ${slot} quitado`);
    return;
  }

  const pcLoadEl = t.closest<HTMLElement>('[data-pc-load]');
  if (pcLoadEl) {
    const id = pcLoadEl.getAttribute('data-pc-load');
    const found = getSavedPlayerCards().find((c) => c.id === id);
    if (found) {
      ui.playerCardDraft = { ...clone(found) };
      ui.playerCardDraftDirty = true;
      ui.playerCardTouchDrag = false;
      ui.playerCardAiStatus = found.cutoutPhoto ? 'ok' : '';
      ui.playerCardAiText = found.cutoutPhoto ? '✓ Tarjeta cargada' : '';
      scheduleSaveActiveDraftToIDB(true);
      render();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return;
  }

  const pcDelCardEl = t.closest<HTMLElement>('[data-pc-del]');
  if (pcDelCardEl) {
    const id = pcDelCardEl.getAttribute('data-pc-del') || '';
    const found = getSavedPlayerCards().find((c) => c.id === id);
    if (found && confirm(`¿Eliminar la tarjeta guardada de "${found.name || 'Jugador'}"?`)) {
      void deletePlayerCardFromIDB(id).then(() => {
        render();
        showToast('Tarjeta eliminada');
      });
    }
    return;
  }

  const ocEl = t.closest<HTMLElement>('[data-open-comp]');
  if (ocEl) {
    ev.preventDefault();
    const cid = ocEl.getAttribute('data-open-comp');
    if (getCompById(cid)) {
      ui.compId = cid;
      ui.compTab = 'standings';
      ui.matchEndDismissed = true;
      navigate('comp-detail');
    }
    return;
  }

  const ocrEl = t.closest<HTMLElement>('[data-open-comp-rank]');
  if (ocrEl) {
    ev.preventDefault();
    const cid = ocrEl.getAttribute('data-open-comp-rank');
    const c = getCompById(cid);
    if (c) {
      ui.playerScope = c.kind;
      ui.playerRankingView = 'local';
      if (c.kind === 'league') ui.selectedLeagueId = c.id;
      else ui.selectedTournId = c.id;
      ui.selectedGroupFilter = 'all';
      navigate('players');
    }
    return;
  }

  const picEl = t.closest<HTMLElement>('[data-play-in-comp]');
  if (picEl) {
    ev.preventDefault();
    const c = getCompById(picEl.getAttribute('data-play-in-comp'));
    if (c) {
      fillPresetFromComp(c, null);
      saveJSON(LS_PRESET, preset);
      navigate('new');
    }
    return;
  }

  const ecEl = t.closest<HTMLElement>('[data-edit-comp]');
  if (ecEl) {
    ev.preventDefault();
    const c = getCompById(ecEl.getAttribute('data-edit-comp'));
    if (c) {
      openCompModal('edit', c);
      render();
    }
    return;
  }

  const dcEl = t.closest<HTMLElement>('[data-del-comp]');
  if (dcEl) {
    const cid = dcEl.getAttribute('data-del-comp');
    const c = getCompById(cid);
    if (c && confirm(`¿Eliminar "${c.name}" y sus cruces? (Los partidos jugados quedarán en el historial)`)) {
      store.competitionsList = store.competitionsList.filter((x) => x.id !== cid);
      saveCompetitions();
      if (preset.compId === cid) {
        preset.compId = '';
        preset.fixtureId = '';
        saveJSON(LS_PRESET, preset);
      }
      ui.compId = store.competitionsList[0]?.id || null;
      navigate('competitions');
      showToast('Competencia eliminada');
    }
    return;
  }

  const mctxEl = t.closest<HTMLElement>('[data-match-ctx]');
  if (mctxEl) {
    const nextCtx = mctxEl.getAttribute('data-match-ctx') || 'daily';
    preset.matchContext = nextCtx;
    preset.fixtureId = '';
    if (nextCtx === 'league' || nextCtx === 'tournament') {
      const firstC = store.competitionsList.find((c) => c.kind === nextCtx);
      if (firstC) fillPresetFromComp(firstC, null);
      else preset.compId = '';
    } else {
      preset.compId = '';
      preset.stageLabel = '';
    }
    saveJSON(LS_PRESET, preset);
    render();
    return;
  }

  const pfxEl = t.closest<HTMLElement>('[data-pick-fixture]');
  if (pfxEl) {
    const [cid, fxid] = (pfxEl.getAttribute('data-pick-fixture') || '').split(':');
    const c = getCompById(cid);
    const fx = (c?.fixtures || []).find((f) => f.id === fxid);
    if (c && fx) {
      fillPresetFromComp(c, fx);
      saveJSON(LS_PRESET, preset);
      render();
      showToast(`Cruce cargado: ${fx.roundLabel}`);
    }
    return;
  }

  const playFxEl = t.closest<HTMLElement>('[data-play-fixture]');
  if (playFxEl) {
    const [cid, fxid] = (playFxEl.getAttribute('data-play-fixture') || '').split(':');
    startFixtureMatch(cid, fxid);
    return;
  }

  const qsFxEl = t.closest<HTMLElement>('[data-quick-score]');
  if (qsFxEl) {
    openQuickScoreModal({ mode: 'fixture', fixtureKey: qsFxEl.getAttribute('data-quick-score') || undefined });
    return;
  }

  const qsSlotEl = t.closest<HTMLElement>('[data-qs-slot]');
  if (qsSlotEl && ui.quickScoreState) {
    const slot = Number(qsSlotEl.getAttribute('data-qs-slot')) || 0;
    ui.quickScoreState.activeSlot = slot;
    document.querySelectorAll('.qs-slot-inp').forEach((el) => {
      el.classList.toggle('active-slot', Number(el.getAttribute('data-qs-slot')) === slot);
    });
  }

  const qsPickPlEl = t.closest<HTMLElement>('[data-qs-pick-player]');
  if (qsPickPlEl && ui.quickScoreState) {
    syncQuickScoreStateFromDom();
    const qs = ui.quickScoreState;
    const nm = qsPickPlEl.getAttribute('data-qs-pick-player') || '';
    const slot = Math.max(0, Math.min(3, Number(qs.activeSlot) || 0));
    qs.teams[Math.floor(slot / 2)].players[slot % 2] = nm;
    const flat = [qs.teams[0].players[0], qs.teams[0].players[1], qs.teams[1].players[0], qs.teams[1].players[1]];
    let nextSlot = (slot + 1) % 4;
    for (let k = 1; k <= 4; k++) {
      const idx = (slot + k) % 4;
      if (!String(flat[idx] || '').trim()) {
        nextSlot = idx;
        break;
      }
    }
    qs.activeSlot = nextSlot;
    render();
    return;
  }

  const qsPickEl = t.closest<HTMLElement>('[data-qs-pick]');
  if (qsPickEl) {
    const [sIdxStr, sideStr, gValStr] = (qsPickEl.getAttribute('data-qs-pick') || '').split(':');
    const sIdx = Number(sIdxStr);
    const side = Number(sideStr);
    const gVal = Number(gValStr);
    const inp = document.getElementById(`qs-s${sIdx + 1}-${side}`) as HTMLInputElement | null;
    if (inp) inp.value = String(gVal);
    if (ui.quickScoreState?.sets?.[sIdx]) {
      ui.quickScoreState.sets[sIdx][side] = gVal;
    }
    const row = qsPickEl.closest('.qs-pills');
    if (row && row.querySelectorAll) {
      row.querySelectorAll('.qs-g-pill').forEach((btn) => {
        btn.classList.toggle('on', btn === qsPickEl);
      });
    }
    updateQuickScorePreviewDom();
    return;
  }

  const qsClrEl = t.closest<HTMLElement>('[data-qs-clear-set]');
  if (qsClrEl) {
    const sIdx = Number(qsClrEl.getAttribute('data-qs-clear-set'));
    const i0 = document.getElementById(`qs-s${sIdx + 1}-0`) as HTMLInputElement | null;
    const i1 = document.getElementById(`qs-s${sIdx + 1}-1`) as HTMLInputElement | null;
    if (i0) i0.value = '';
    if (i1) i1.value = '';
    if (ui.quickScoreState?.sets?.[sIdx]) ui.quickScoreState.sets[sIdx] = [null, null];
    const card = qsClrEl.closest('.qs-set-card');
    if (card && card.querySelectorAll) {
      card.querySelectorAll('.qs-g-pill.on').forEach((btn) => btn.classList.remove('on'));
    }
    updateQuickScorePreviewDom();
    return;
  }

  const syncOpenEl = t.closest<HTMLElement>('[data-open-comp-sync]');
  if (syncOpenEl) {
    ev.preventDefault();
    const cid = syncOpenEl.getAttribute('data-open-comp-sync');
    const c = getCompById(cid);
    if (c) {
      ensureCompSyncCode(c);
      ui.compId = c.id;
      ui.compModal = 'sync-qr';
      void publishCompFullSync(c);
      render();
    }
    return;
  }

  const syncNowEl = t.closest<HTMLElement>('[data-sync-comp]');
  if (syncNowEl) {
    ev.preventDefault();
    const sc = syncNowEl.getAttribute('data-sync-comp') || '';
    void pollCompChannelOnce(sc, '24h', true);
    return;
  }

  const dFxEl = t.closest<HTMLElement>('[data-del-fixture]');
  if (dFxEl) {
    const [cid, fxid] = (dFxEl.getAttribute('data-del-fixture') || '').split(':');
    const c = getCompById(cid);
    if (c) {
      c.fixtures = (c.fixtures || []).filter((f) => f.id !== fxid);
      saveCompetitions();
      if (c.syncCode) void publishCompSetup(c, true);
      render();
      showToast('Cruce eliminado');
    }
    return;
  }

  const dPartEl = t.closest<HTMLElement>('[data-del-part]');
  if (dPartEl) {
    const [cid, ptid] = (dPartEl.getAttribute('data-del-part') || '').split(':');
    const c = getCompById(cid);
    if (c) {
      c.participants = (c.participants || []).filter((p) => p.id !== ptid);
      saveCompetitions();
      if (c.syncCode) void publishCompParticipantChange(c, 'del', ptid);
      render();
      showToast('Inscripto eliminado');
    }
    return;
  }

  const closeCompModalEl = t.closest<HTMLElement>('[data-close-comp-modal]');
  if (closeCompModalEl && (closeCompModalEl.tagName === 'BUTTON' || !t.closest('.sheet'))) {
    ui.compModal = null;
    ui.quickScoreState = null;
    ui.quickScoreFixtureId = null;
    render();
    return;
  }

  const cfKindEl = t.closest<HTMLElement>('[data-cf-kind]');
  if (cfKindEl && ui.compFormState) {
    syncCompFormFromDom();
    const nk = cfKindEl.getAttribute('data-cf-kind') || 'league';
    ui.compFormState.kind = nk;
    ui.compFormState.format = nk === 'tournament' ? 'knockout' : 'league_rr';
    render();
    return;
  }

  const cfFmtEl = t.closest<HTMLElement>('[data-cf-fmt]');
  if (cfFmtEl && ui.compFormState) {
    syncCompFormFromDom();
    const nfmt = cfFmtEl.getAttribute('data-cf-fmt') || 'league_rr';
    ui.compFormState.format = nfmt;
    if (nfmt === 'proyecto_padel') {
      ui.compFormState.kind = 'tournament';
      ui.compFormState.rankingMode = 'individual';
      ui.compFormState.winPts = 3;
      ui.compFormState.drawPts = 2;
      ui.compFormState.lossPts = 1;
      ui.compFormState.setBonusPts = 0;
      ui.compFormState.gameBonusPts = 1;
      ui.compFormState.defaultRules = {
        ...(ui.compFormState.defaultRules || {}),
        totalSets: 1,
        deuceRule: 'golden'
      };
    }
    render();
    return;
  }

  const cfRmEl = t.closest<HTMLElement>('[data-cf-rmode]');
  if (cfRmEl && ui.compFormState) {
    syncCompFormFromDom();
    ui.compFormState.rankingMode = cfRmEl.getAttribute('data-cf-rmode') || 'pairs';
    render();
    return;
  }

  const cFilterEl = t.closest<HTMLElement>('[data-set-cfilter]');
  if (cFilterEl) {
    ui.compFilter = cFilterEl.getAttribute('data-set-cfilter') || 'all';
    render();
    return;
  }

  const cTabEl = t.closest<HTMLElement>('[data-set-ctab]');
  if (cTabEl) {
    ui.compTab = cTabEl.getAttribute('data-set-ctab') || 'standings';
    render();
    return;
  }

  const hFilterEl = t.closest<HTMLElement>('[data-set-hfilter]');
  if (hFilterEl) {
    ui.histFilter = hFilterEl.getAttribute('data-set-hfilter') || 'all';
    render();
    return;
  }

  const pScopeEl = t.closest<HTMLElement>('[data-set-pscope]');
  if (pScopeEl) {
    ui.playerScope = pScopeEl.getAttribute('data-set-pscope') || 'daily';
    ui.playerRankingView = ui.playerScope === 'shared' ? 'shared' : 'local';
    ui.selectedGroupFilter = 'all';
    render();
    return;
  }

  const dTimeEl = t.closest<HTMLElement>('[data-set-daily-time]');
  if (dTimeEl) {
    ui.dailyTimeFilter = dTimeEl.getAttribute('data-set-daily-time') || 'all';
    render();
    return;
  }

  const pEntEl = t.closest<HTMLElement>('[data-set-pentity]');
  if (pEntEl) {
    ui.playerEntityMode = pEntEl.getAttribute('data-set-pentity') || 'individual';
    render();
    return;
  }

  const gFiltEl = t.closest<HTMLElement>('[data-set-gfilter]');
  if (gFiltEl) {
    ui.selectedGroupFilter = gFiltEl.getAttribute('data-set-gfilter') || 'all';
    render();
    return;
  }

  const sfEl = t.closest<HTMLElement>('[data-st-filter]');
  if (sfEl) {
    ui.statsSetFilter = sfEl.getAttribute('data-st-filter') || 'all';
    render();
    return;
  }

  const psEl = t.closest<HTMLElement>('[data-set-psort]');
  if (psEl) {
    ui.playerSort = psEl.getAttribute('data-set-psort') || 'pts';
    if (ui.route === 'comp-detail') ui.playerSortScope = ui.compId || 'comp';
    else if (ui.playerScope === 'league') ui.playerSortScope = ui.selectedLeagueId || 'league';
    else if (ui.playerScope === 'tournament') ui.playerSortScope = ui.selectedTournId || 'tournament';
    else ui.playerSortScope = ui.playerScope || 'daily';
    render();
    return;
  }

  const prvEl = t.closest<HTMLElement>('[data-set-prview]');
  if (prvEl) {
    ui.playerRankingView = prvEl.getAttribute('data-set-prview') || 'local';
    ui.playerScope = ui.playerRankingView === 'shared' ? 'shared' : 'daily';
    render();
    return;
  }

  const selRkEl = t.closest<HTMLElement>('[data-select-ranking]');
  if (selRkEl) {
    const id = selRkEl.getAttribute('data-select-ranking') || '';
    const vault = loadJSON<Record<string, SharedRanking>>('padel_ranking_vault', {});
    if (vault[id]) {
      ui.sharedRanking = vault[id];
      saveJSON('padel_shared_ranking', vault[id]);
      ui.playerRankingView = 'shared';
      ui.playerScope = 'shared';
      render();
    }
    return;
  }

  const stepEl = t.closest<HTMLElement>('[data-step]');
  if (stepEl) {
    const [k, deltaStr] = (stepEl.getAttribute('data-step') || '').split(':');
    const delta = Number(deltaStr) || 0;
    if (k === 'totalSets') {
      const cur = Math.max(1, Number(preset.totalSets) || (preset.setsToWin ? preset.setsToWin * 2 - 1 : 3));
      const next = Math.max(1, Math.min(15, cur + delta));
      preset.totalSets = next;
      preset.setsToWin = Math.floor(next / 2) + 1;
    } else if (k === 'gamesPerSet') {
      const cur = Math.max(1, Number(preset.gamesPerSet) || 6);
      const next = Math.max(1, Math.min(21, cur + delta));
      preset.gamesPerSet = next;
      if (preset.tiebreakAt > 0) preset.tiebreakAt = next;
    } else if (k === 'tiebreakPoints') {
      const cur = Math.max(1, Number(preset.tiebreakPoints) || 7);
      const next = Math.max(1, Math.min(30, cur + delta));
      preset.tiebreakPoints = next;
      if (preset.tiebreakAt === 0) preset.tiebreakAt = preset.gamesPerSet || 6;
    }
    saveJSON(LS_PRESET, preset);
    render();
    return;
  }

  const prEl = t.closest<HTMLElement>('[data-preset]');
  if (prEl) {
    const [k, v] = (prEl.getAttribute('data-preset') || '').split(':');
    if (k === 'setsToWin') {
      preset.setsToWin = Number(v);
      preset.totalSets = preset.setsToWin * 2 - 1;
    } else if (k === 'gamesPerSet') {
      preset.gamesPerSet = Number(v);
      if (preset.tiebreakAt > 0) preset.tiebreakAt = Number(v);
    } else if (k === 'deuceRule') preset.deuceRule = v;
    else if (k === 'tb') {
      const nv = Number(v);
      if (nv === 0) preset.tiebreakAt = 0;
      else {
        preset.tiebreakAt = preset.gamesPerSet || 6;
        preset.tiebreakPoints = nv;
      }
    } else if (k === 'finalSet') preset.finalSet = v;
    else if (k === 'changeoverRule') preset.changeoverRule = v;
    saveJSON(LS_PRESET, preset);
    render();
    return;
  }

  const tcEl = t.closest<HTMLElement>('[data-tcolor]');
  if (tcEl) {
    const [tm, col] = (tcEl.getAttribute('data-tcolor') || '').split(',');
    preset.teams[Number(tm)].color = col;
    saveJSON(LS_PRESET, preset);
    render();
    return;
  }

  const srvEl = t.closest<HTMLElement>('[data-set-srv]');
  if (srvEl) {
    const [tm, pi] = (srvEl.getAttribute('data-set-srv') || '').split(',').map(Number);
    preset.firstServer = [tm, pi];
    saveJSON(LS_PRESET, preset);
    render();
    return;
  }

  const halfEl = t.closest<HTMLElement>('.half[data-team]');
  if (halfEl && !halfEl.hasAttribute('data-ro')) {
    const team = Number(halfEl.getAttribute('data-team'));
    onTapTeam(team);
    return;
  }

  const shotEl = t.closest<HTMLElement>('[data-shot]');
  if (shotEl && ui.shotSheet) {
    const [sType, bTeam, bPlayer, subType] = (shotEl.getAttribute('data-shot') || '').split(',');
    const w = ui.shotSheet.team;
    const by = Number(bPlayer) >= 0 ? [Number(bTeam), Number(bPlayer)] : null;
    scorePoint(w, sType, by, subType || null);
    return;
  }

  const p2El = t.closest<HTMLElement>('[data-pick-2ndsrv]');
  if (p2El && store.activeMatch) {
    store.activeMatch.secondServerIdx = Number(p2El.getAttribute('data-pick-2ndsrv'));
    ui.secondSrvPrompt = false;
    persistActive();
    render();
    return;
  }

  const etcEl = t.closest<HTMLElement>('[data-edit-tcolor]');
  if (etcEl && store.activeMatch) {
    const [tm, col] = (etcEl.getAttribute('data-edit-tcolor') || '').split(',');
    for (let i = 0; i < 2; i++) {
      const p0 = (document.getElementById(`ed-p-${i}-0`) as HTMLInputElement | null)?.value.trim();
      const p1 = (document.getElementById(`ed-p-${i}-1`) as HTMLInputElement | null)?.value.trim();
      if (p0) store.activeMatch.teams[i].players[0] = p0;
      if (p1) store.activeMatch.teams[i].players[1] = p1;
    }
    store.activeMatch.teams[Number(tm)].color = col;
    persistActive();
    render();
    return;
  }

  const closeObsEl = t.closest<HTMLElement>('[data-close-obs-modal]');
  if (closeObsEl && (closeObsEl.tagName === 'BUTTON' || !t.closest('.sheet'))) {
    ui.obsModalOpen = false;
    render();
    return;
  }
  const posBtn = t.closest<HTMLElement>('[data-set-obs-pos]');
  if (posBtn) {
    ui.obsSelectedPos = posBtn.getAttribute('data-set-obs-pos') || 'tl';
    render();
    return;
  }
  const copyInpBtn = t.closest<HTMLElement>('[data-copy-input]');
  if (copyInpBtn) {
    const inputId = copyInpBtn.getAttribute('data-copy-input') || '';
    const inputEl = document.getElementById(inputId) as HTMLInputElement | null;
    if (inputEl) {
      inputEl.select?.();
      const val = inputEl.value;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard
          .writeText(val)
          .then(() => {
            showToast('Enlace copiado al portapapeles');
          })
          .catch(() => {
            try {
              document.execCommand('copy');
              showToast('Enlace copiado');
            } catch {}
          });
      } else {
        try {
          document.execCommand('copy');
          showToast('Enlace copiado');
        } catch {}
      }
    }
    return;
  }
  const closeQrEl = t.closest<HTMLElement>('[data-close-qr]');
  if (closeQrEl && (closeQrEl.tagName === 'BUTTON' || !t.closest('.sheet'))) {
    ui.qrModalOpen = false;
    render();
    return;
  }
  const closeSheetEl = t.closest<HTMLElement>('[data-close-sheet]');
  if (closeSheetEl && (closeSheetEl.tagName === 'BUTTON' || !t.closest('.sheet'))) {
    ui.shotSheet = null;
    render();
    return;
  }
  const closeMenuEl = t.closest<HTMLElement>('[data-close-menu]');
  if (closeMenuEl && (closeMenuEl.tagName === 'BUTTON' || !t.closest('.sheet'))) {
    ui.menuOpen = false;
    render();
    return;
  }
  const closeEditEl = t.closest<HTMLElement>('[data-close-edit]');
  if (closeEditEl && (closeEditEl.tagName === 'BUTTON' || !t.closest('.sheet'))) {
    ui.editNamesOpen = false;
    render();
    return;
  }

  const pfEl = t.closest<HTMLElement>('[data-pref]');
  if (pfEl) {
    const [k, v] = (pfEl.getAttribute('data-pref') || '').split(':');
    prefs[k] = v;
    saveJSON(LS_PREFS, prefs);
    render();
    return;
  }

  const delEl = t.closest<HTMLElement>('[data-del-match]');
  if (delEl) {
    const id = delEl.getAttribute('data-del-match') || '';
    if (confirm('¿Eliminar este partido del historial?')) {
      const victim = store.historyList.find((x) => x.id === id);
      store.historyList = store.historyList.filter((x) => x.id !== id);
      saveJSON(LS_HIST, store.historyList);
      let compsChanged = false;
      store.competitionsList.forEach((c) => {
        const hadFx = (c.fixtures || []).some((f) => f.matchId === id);
        if (hadFx) {
          resolveCompetitionFixtures(c);
          compsChanged = true;
        }
        if (c.syncCode && (hadFx || (victim && getMatchCompId(victim) === c.id))) {
          void publishCompDeleteMatch(c, id);
        }
      });
      if (compsChanged) saveCompetitions();
      navigate('history');
      showToast('Partido eliminado');
    }
    return;
  }

  const actEl = t.closest<HTMLElement>('[data-act]');
  if (actEl) {
    const act = actEl.getAttribute('data-act');
    switch (act) {
      case 'start-match':
        startNewMatch();
        break;
      case 'resume-match':
        navigate('board');
        break;
      case 'swap-preset-teams':
        preset.teams.reverse();
        preset.firstServer[0] = 1 - preset.firstServer[0];
        saveJSON(LS_PRESET, preset);
        render();
        break;
      case 'undo':
        undoPoint();
        break;
      case 'undo-from-end':
        ui.matchEndDismissed = false;
        undoPoint();
        break;
      case 'redo':
        redoPoint();
        break;
      case 'fault':
        recordFault();
        break;
      case 'flip':
        flipSides();
        break;
      case 'toggle-shot-prompt':
        if (store.activeMatch) {
          store.activeMatch.shotPrompt = !store.activeMatch.shotPrompt;
          persistActive();
          showToast(store.activeMatch.shotPrompt ? 'Detalle de golpe activado' : 'Anotación rápida activada');
          render();
        }
        break;
      case 'toggle-pause':
        if (store.activeMatch) {
          store.activeMatch.status = store.activeMatch.status === 'paused' ? 'playing' : 'paused';
          persistActive();
          render();
        }
        break;
      case 'toggle-voice-tts':
        prefs.voice = !prefs.voice;
        saveJSON(LS_PREFS, prefs);
        showToast(prefs.voice ? 'Voz de árbitro activada' : 'Voz de árbitro silenciada');
        render();
        break;
      case 'toggle-voice-rec':
        toggleVoiceControl();
        break;
      case 'open-menu':
        ui.menuOpen = true;
        render();
        break;
      case 'dismiss-co':
        ui.changeoverOverlay = null;
        render();
        break;
      case 'open-qr-modal':
        ui.menuOpen = false;
        ui.qrModalOpen = true;
        render();
        break;
      case 'close-qr-modal':
        ui.qrModalOpen = false;
        render();
        break;
      case 'share-app-wa':
        shareAppViaWhatsApp();
        break;
      case 'copy-app-link':
        copyAppUrl();
        break;
      case 'dl-app-qr':
        downloadAppQR();
        break;
      case 'share-live':
        if (store.activeMatch) void shareLiveMatchLink(store.activeMatch);
        break;
      case 'open-obs-modal':
        ui.menuOpen = false;
        ui.obsModalOpen = true;
        render();
        break;
      case 'open-tv':
        ui.menuOpen = false;
        navigate('display');
        break;
      case 'fullscreen':
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen?.().catch(() => {});
        } else {
          document.exitFullscreen?.().catch(() => {});
        }
        break;
      case 'share-link': {
        const m = getStatsTargetMatch();
        if (m) void shareMatchLink(m);
        break;
      }
      case 'share-img-active':
        if (store.activeMatch) void exportMatchSummaryImage(store.activeMatch);
        break;
      case 'exit-live':
        disconnectLiveSpectator();
        navigate('home');
        break;
      case 'save-live':
        if (ui.liveMatch) {
          archiveMatchToHistory(ui.liveMatch);
          showToast('Partido guardado en tu historial');
        }
        break;
      case 'rotate-server':
        if (store.activeMatch) {
          const rot: Array<[number, number]> = [
            [0, 0],
            [1, 0],
            [0, 1],
            [1, 1]
          ];
          const curIdx = rot.findIndex(
            (r) => r[0] === store.activeMatch!.firstServer[0] && r[1] === store.activeMatch!.firstServer[1]
          );
          const next = rot[(curIdx + 1) % 4];
          store.activeMatch.firstServer = [next[0], next[1]];
          if (store.activeMatch.secondServerIdx !== null) {
            store.activeMatch.secondServerIdx = 1 - store.activeMatch.secondServerIdx;
          }
          persistActive();
          ui.menuOpen = false;
          const stNow = computeMatch(store.activeMatch);
          showToast(`Saca ahora: ${playerLabel(store.activeMatch, stNow.srvTeam, stNow.srvPlayer)}`);
          render();
        }
        break;
      case 'open-edit-names':
        ui.menuOpen = false;
        ui.editNamesOpen = true;
        render();
        break;
      case 'save-edit-names':
        if (store.activeMatch) {
          for (let tm = 0; tm < 2; tm++) {
            const p0 = (document.getElementById(`ed-p-${tm}-0`) as HTMLInputElement | null)?.value.trim();
            const p1 = (document.getElementById(`ed-p-${tm}-1`) as HTMLInputElement | null)?.value.trim();
            store.activeMatch.teams[tm].players[0] = p0 || (tm === 0 ? 'DRIVE 1' : 'DRIVE 2');
            store.activeMatch.teams[tm].players[1] = p1 || (tm === 0 ? 'REVÉS 1' : 'REVÉS 2');
          }
          ui.editNamesOpen = false;
          persistActive();
          render();
        }
        break;
      case 'finish-early':
        finishMatchEarly();
        break;
      case 'print-pdf':
        window.print();
        break;
      case 'export-png': {
        const m = getStatsTargetMatch();
        if (m) void exportMatchSummaryImage(m);
        break;
      }
      case 'share-ranking':
        void shareRankingText();
        break;
      case 'export-ranking-img':
        void exportRankingImage();
        break;
      case 'save-ranking-name': {
        const inp = document.getElementById('cfg-ranking-name') as HTMLInputElement | null;
        prefs.rankingName = inp?.value.trim() || 'Mi Ranking';
        saveJSON(LS_PREFS, prefs);
        showToast('Nombre de ranking guardado');
        render();
        break;
      }
      case 'prompt-ranking-name': {
        const nextName = prompt('Nombre de tu Cuenta / Ranking / Club:', prefs.rankingName || 'Mi Ranking');
        if (nextName !== null) {
          prefs.rankingName = nextName.trim() || 'Mi Ranking';
          saveJSON(LS_PREFS, prefs);
          showToast('Nombre de ranking actualizado');
          render();
        }
        break;
      }
      case 'copy-ranking-id': {
        const tag = `#${prefs.rankingId}`;
        if (navigator.clipboard && navigator.clipboard.writeText) {
          void navigator.clipboard
            .writeText(tag)
            .then(() => showToast(`ID copiado: ${tag}`))
            .catch(() => prompt('Copiá tu ID de cuenta:', tag));
        } else {
          prompt('Copiá tu ID de cuenta:', tag);
        }
        break;
      }
      case 'regen-ranking-id':
        if (confirm('¿Generar un nuevo ID único de cuenta? Los enlaces ya compartidos mantendrán el anterior.')) {
          prefs.rankingId = generateRankingId();
          saveJSON(LS_PREFS, prefs);
          render();
          showToast(`Nuevo ID generado: #${prefs.rankingId}`);
        }
        break;
      case 'clear-shared-ranking':
        ui.sharedRanking = null;
        removeJSON('padel_shared_ranking');
        ui.playerRankingView = 'local';
        if (ui.playerScope === 'shared') ui.playerScope = 'daily';
        render();
        showToast('Ranking compartido cerrado');
        break;
      case 'open-daily-ranking':
        ui.playerScope = 'daily';
        ui.playerRankingView = 'local';
        navigate('players');
        break;
      case 'open-daily-pts':
        ui.compModal = 'daily-pts';
        render();
        break;
      case 'save-daily-pts': {
        const wInp = document.getElementById('dp-win') as HTMLInputElement | null;
        const lInp = document.getElementById('dp-loss') as HTMLInputElement | null;
        prefs.dailyWinPts = Math.max(0, Number(wInp?.value) || 0);
        prefs.dailyLossPts = Math.max(0, Number(lInp?.value) || 0);
        saveJSON(LS_PREFS, prefs);
        ui.compModal = null;
        render();
        showToast('Puntaje del Día guardado');
        break;
      }
      case 'save-daily-pts-inline': {
        const wInp = document.getElementById('cfg-daily-win') as HTMLInputElement | null;
        const lInp = document.getElementById('cfg-daily-loss') as HTMLInputElement | null;
        prefs.dailyWinPts = Math.max(0, Number(wInp?.value) || 0);
        prefs.dailyLossPts = Math.max(0, Number(lInp?.value) || 0);
        saveJSON(LS_PREFS, prefs);
        render();
        showToast('Puntaje de Partido del Día actualizado');
        break;
      }
      case 'new-comp':
        openCompModal('create', actEl.getAttribute('data-kind') || 'league');
        render();
        break;
      case 'save-comp-modal': {
        syncCompFormFromDom();
        const f = ui.compFormState;
        if (!f || !String(f.name || '').trim()) {
          showToast('Ingresá un nombre para la competencia');
          return;
        }
        const now = Date.now();
        const isPP = f.format === 'proyecto_padel';
        const totalSets = isPP ? 1 : Number(f.defaultRules?.totalSets) || 3;
        const cleanRules = {
          ...(f.defaultRules || {}),
          totalSets,
          setsToWin: Math.floor(totalSets / 2) + 1,
          ...(isPP ? { deuceRule: 'golden' } : {})
        };
        const rankingMode = isPP ? 'individual' : f.rankingMode;
        const winPts = Number(f.winPts) || 0;
        const drawPts = Number.isFinite(Number(f.drawPts)) ? Number(f.drawPts) : 2;
        const lossPts = Number(f.lossPts) || 0;
        const setBonusPts = isPP ? 0 : Number(f.setBonusPts) || 0;
        const gameBonusPts = isPP
          ? Number.isFinite(Number(f.gameBonusPts))
            ? Number(f.gameBonusPts)
            : 1
          : Number(f.gameBonusPts) || 0;
        if (ui.compModal === 'edit' && f.id) {
          const comp = getCompById(f.id);
          if (comp) {
            comp.kind = f.kind;
            comp.name = f.name.trim();
            comp.format = f.format;
            comp.rankingMode = rankingMode;
            comp.winPts = winPts;
            comp.drawPts = drawPts;
            comp.lossPts = lossPts;
            comp.setBonusPts = setBonusPts;
            comp.gameBonusPts = gameBonusPts;
            comp.numGroups = Number(f.numGroups) || 2;
            comp.advancePerGroup = Number(f.advancePerGroup) || 2;
            comp.defaultRules = cleanRules;
            saveCompetitions();
            if (comp.syncCode) void publishCompSetup(comp, false);
            ui.compModal = null;
            render();
            showToast('Competencia actualizada');
          }
        } else {
          const newComp: Competition = {
            id: newCompId(f.kind === 'tournament' ? 'trn' : 'lig'),
            kind: f.kind,
            name: f.name.trim(),
            format: f.format,
            rankingMode,
            winPts,
            drawPts,
            lossPts,
            setBonusPts,
            gameBonusPts,
            numGroups: Number(f.numGroups) || 2,
            advancePerGroup: Number(f.advancePerGroup) || 2,
            defaultRules: cleanRules,
            participants: [],
            fixtures: [],
            createdAt: now
          };
          store.competitionsList.unshift(newComp);
          saveCompetitions();
          markBackupChange(1);
          ui.compModal = null;
          if (ui.route === 'new') {
            fillPresetFromComp(newComp, null);
            saveJSON(LS_PRESET, preset);
            render();
          } else {
            ui.compId = newComp.id;
            ui.compTab = isPP ? 'standings' : 'participants';
            navigate('comp-detail');
          }
          showToast(`${newComp.kind === 'league' ? 'Liga' : 'Torneo'} creado`);
        }
        break;
      }
      case 'clear-picked-fixture':
        preset.fixtureId = '';
        saveJSON(LS_PRESET, preset);
        render();
        break;
      case 'add-part': {
        const comp = getCompById(actEl.getAttribute('data-comp'));
        if (!comp) break;
        const col = (document.getElementById('part-color') as HTMLSelectElement | null)?.value || '#d4af37';
        const grp = (document.getElementById('part-group') as HTMLSelectElement | null)?.value || null;
        let addedPart: Participant | null = null;
        if (comp.rankingMode === 'individual') {
          const nm = (document.getElementById('part-ind-name') as HTMLInputElement | null)?.value.trim();
          if (!nm) {
            showToast('Ingresá el nombre del jugador');
            break;
          }
          comp.participants = comp.participants || [];
          addedPart = { id: newCompId('pt'), type: 'player', name: nm, color: col, group: grp };
          comp.participants.push(addedPart);
        } else {
          const p0 = (document.getElementById('part-p0') as HTMLInputElement | null)?.value.trim();
          const p1 = (document.getElementById('part-p1') as HTMLInputElement | null)?.value.trim();
          if (!p0 && !p1) {
            showToast('Ingresá al menos un jugador de la pareja');
            break;
          }
          comp.participants = comp.participants || [];
          addedPart = {
            id: newCompId('pt'),
            type: 'pair',
            players: [p0 || 'DRIVE', p1 || 'REVÉS'],
            color: col,
            group: grp
          };
          comp.participants.push(addedPart);
        }
        saveCompetitions();
        if (comp.syncCode && addedPart) void publishCompParticipant(comp, addedPart);
        render();
        showToast('Inscripto agregado');
        break;
      }
      case 'gen-rr': {
        const comp = getCompById(actEl.getAttribute('data-comp'));
        if (!comp) break;
        if ((comp.fixtures || []).some((f) => f.matchId) && !confirm('Ya hay partidos jugados en el fixture. ¿Regenerar todos los cruces?'))
          break;
        comp.fixtures = generateRoundRobinFixtures(comp, { doubleRound: comp.format === 'league_rr2' });
        saveCompetitions();
        if (comp.syncCode) void publishCompSetup(comp, true);
        render();
        showToast(`${comp.fixtures.length} cruces generados`);
        break;
      }
      case 'gen-groups': {
        const comp = getCompById(actEl.getAttribute('data-comp'));
        if (!comp) break;
        if ((comp.fixtures || []).some((f) => f.matchId) && !confirm('Ya hay partidos jugados en grupos. ¿Re-sortear grupos y fixture?'))
          break;
        const groupFx = generateGroupsFixtures(comp, comp.numGroups || 2);
        comp.fixtures = groupFx;
        saveCompetitions();
        if (comp.syncCode) void publishCompSetup(comp, true);
        render();
        showToast(`${groupFx.length} partidos de grupos generados`);
        break;
      }
      case 'gen-bracket': {
        const comp = getCompById(actEl.getAttribute('data-comp'));
        if (!comp) break;
        if ((comp.fixtures || []).some((f) => f.matchId) && !confirm('Ya hay partidos jugados en el cuadro. ¿Regenerar las llaves?'))
          break;
        comp.fixtures = generatePlayoffBracket(comp);
        resolveCompetitionFixtures(comp);
        saveCompetitions();
        if (comp.syncCode) void publishCompSetup(comp, true);
        render();
        showToast('Cuadro eliminatorio generado');
        break;
      }
      case 'advance-playoffs': {
        const comp = getCompById(actEl.getAttribute('data-comp'));
        if (!comp) break;
        if (
          (comp.fixtures || []).some((f) => f.phase === 'playoff' && f.matchId) &&
          !confirm('Ya hay cruces jugados en Playoffs. ¿Regenerar llaves eliminatorias?')
        )
          break;
        const ok = advanceGroupsToPlayoffs(comp);
        if (ok) {
          if (comp.syncCode) void publishCompSetup(comp, true);
          render();
          showToast('Llaves eliminatorias creadas según la tabla');
        } else {
          showToast('Necesitás al menos 2 grupos con participantes para armar playoffs');
        }
        break;
      }
      case 'open-add-fixture':
        ui.compId = actEl.getAttribute('data-comp') || ui.compId;
        ui.compModal = 'add-fixture';
        render();
        break;
      case 'save-manual-fixture': {
        const comp = getCompById(actEl.getAttribute('data-comp'));
        if (!comp) break;
        const rLabel = (document.getElementById('af-round') as HTMLInputElement | null)?.value.trim() || 'Cruce';
        let team0 = null;
        let team1 = null;
        const sel0 = document.getElementById('af-sel0') as HTMLSelectElement | null;
        const sel1 = document.getElementById('af-sel1') as HTMLSelectElement | null;
        if (sel0 && sel1) {
          if (sel0.value === sel1.value) {
            showToast('Elegí dos parejas distintas');
            break;
          }
          team0 = participantToTeamObj((comp.participants || []).find((p) => p.id === sel0.value));
          team1 = participantToTeamObj((comp.participants || []).find((p) => p.id === sel1.value));
        } else {
          const p00 = (document.getElementById('af-t0p0') as HTMLInputElement | null)?.value.trim() || 'DRIVE 1';
          const p01 = (document.getElementById('af-t0p1') as HTMLInputElement | null)?.value.trim() || 'REVÉS 1';
          const p10 = (document.getElementById('af-t1p0') as HTMLInputElement | null)?.value.trim() || 'DRIVE 2';
          const p11 = (document.getElementById('af-t1p1') as HTMLInputElement | null)?.value.trim() || 'REVÉS 2';
          team0 = { players: [p00, p01], color: '#d4af37', label: formatPairLabel(p00, p01) };
          team1 = { players: [p10, p11], color: '#2f8cff', label: formatPairLabel(p10, p11) };
        }
        if (team0 && team1) {
          comp.fixtures = comp.fixtures || [];
          const newFx: Fixture = {
            id: newCompId('fx'),
            phase: 'manual',
            roundIdx: comp.fixtures.length,
            roundLabel: rLabel,
            slotIdx: comp.fixtures.length,
            group: null,
            team0,
            team1,
            source0: null,
            source1: null,
            matchId: null,
            winnerSide: null,
            isBye: false
          };
          comp.fixtures.push(newFx);
          saveCompetitions();
          if (comp.syncCode) void publishCompFixtureAdd(comp, newFx);
          ui.compModal = null;
          render();
          showToast('Cruce agregado');
        }
        break;
      }
      case 'open-preset-quick-score':
        openQuickScoreModal({ mode: 'preset' });
        break;
      case 'open-comp-quick-score':
        openQuickScoreModal({ mode: 'comp-adhoc', compId: actEl.getAttribute('data-comp') || ui.compId });
        break;
      case 'qs-add-set':
        if (ui.quickScoreState && ui.quickScoreState.sets.length < 5) {
          syncQuickScoreStateFromDom();
          ui.quickScoreState.sets.push([null, null]);
          render();
        }
        break;
      case 'qs-toggle-manual-teams':
        if (ui.quickScoreState && ui.quickScoreState.mode === 'comp-adhoc') {
          syncQuickScoreStateFromDom();
          ui.quickScoreState.useManualTeams = !ui.quickScoreState.useManualTeams;
          render();
        }
        break;
      case 'qs-clear-players':
        if (ui.quickScoreState) {
          syncQuickScoreStateFromDom();
          ui.quickScoreState.teams[0].players = ['', ''];
          ui.quickScoreState.teams[1].players = ['', ''];
          ui.quickScoreState.activeSlot = 0;
          render();
        }
        break;
      case 'save-quick-score': {
        syncQuickScoreStateFromDom();
        const qs = ui.quickScoreState;
        const target = actEl.getAttribute('data-target') || qs?.fixtureKey || ui.quickScoreFixtureId;
        const [cid, fxid] = String(target || '').split(':');
        const mode = qs?.mode || (cid && fxid ? 'fixture' : 'preset');
        const targetComp =
          mode === 'fixture'
            ? getCompById(cid)
            : mode === 'comp-adhoc'
              ? getCompById(qs?.compId || cid)
              : (preset.matchContext === 'league' || preset.matchContext === 'tournament') && preset.compId
                ? getCompById(preset.compId)
                : null;
        const isPP = isProyectoPadelComp(targetComp);
        const isWo = !isPP && !!(document.getElementById('qs-wo') as HTMLInputElement | null)?.checked;
        const winSel = (document.getElementById('qs-winner') as HTMLSelectElement | null)?.value || 'auto';

        if (isPP && mode === 'comp-adhoc') {
          const four = [
            qs?.teams?.[0]?.players?.[0],
            qs?.teams?.[0]?.players?.[1],
            qs?.teams?.[1]?.players?.[0],
            qs?.teams?.[1]?.players?.[1]
          ].map((x) => String(x || '').trim());
          if (four.some((x) => !x)) {
            showToast('Ingresá o tocá los 4 nombres de los jugadores');
            break;
          }
          if (new Set(four.map((x) => x.toUpperCase())).size < 4) {
            showToast('Cada uno de los 4 jugadores debe ser distinto');
            break;
          }
        }

        const setsArr: Array<[number, number]> = [];
        if (!isWo) {
          for (let i = 1; i <= 5; i++) {
            const el0 = document.getElementById(`qs-s${i}-0`) as HTMLInputElement | null;
            const el1 = document.getElementById(`qs-s${i}-1`) as HTMLInputElement | null;
            const v0 = el0?.value;
            const v1 = el1?.value;
            if (v0 !== '' && v0 !== undefined && v1 !== '' && v1 !== undefined) {
              setsArr.push([Math.max(0, Number(v0) || 0), Math.max(0, Number(v1) || 0)]);
            }
          }
          if (!setsArr.length) {
            showToast(
              isPP ? 'Ingresá los games finales de ambas parejas' : 'Seleccioná al menos el resultado de un set o activá W.O.'
            );
            break;
          }
        }
        const resolved = resolveQuickScoreOutcome(targetComp, setsArr, winSel, isWo);
        if (!resolved.ok) {
          showToast(resolved.error);
          break;
        }
        const winnerSide = resolved.winnerSide;
        const isDraw = !!resolved.isDraw;

        let savedMatch: Match | null = null;
        if (mode === 'fixture' && cid && fxid) {
          savedMatch = submitQuickFixtureResult(cid, fxid, setsArr, winnerSide, isWo);
        } else if (mode === 'comp-adhoc' && targetComp && qs) {
          if (!qs.useManualTeams && qs.selPartIds?.[0] && qs.selPartIds?.[0] === qs.selPartIds?.[1]) {
            showToast('Elegí dos parejas distintas');
            break;
          }
          savedMatch = submitQuickMatchResult({
            comp: targetComp,
            stageLabel: qs.stageLabel || '',
            teams: qs.teams,
            setsArr,
            winnerSide,
            isDraw,
            isWalkover: isWo
          });
        } else {
          const kind = preset.matchContext || 'daily';
          savedMatch = submitQuickMatchResult({
            kind,
            comp: targetComp,
            fixtureId: targetComp && preset.fixtureId ? preset.fixtureId : '',
            stageLabel: qs?.stageLabel || preset.stageLabel || '',
            teams: qs?.teams || preset.teams,
            rules: preset,
            setsArr,
            winnerSide,
            isDraw,
            isWalkover: isWo
          });
          preset.fixtureId = '';
          saveJSON(LS_PRESET, preset);
        }

        ui.compModal = null;
        ui.quickScoreState = null;
        ui.quickScoreFixtureId = null;
        if (mode === 'preset' && savedMatch) {
          const sCompId = getMatchCompId(savedMatch);
          if (sCompId && getCompById(sCompId)) {
            ui.compId = sCompId;
            ui.compTab = 'standings';
            navigate('comp-detail');
          } else {
            ui.statsId = savedMatch.id;
            navigate('stats');
          }
        } else {
          render();
        }
        showToast(isWo ? 'W.O. registrado' : isDraw ? '🤝 Empate guardado y ELO actualizado' : '✓ Resultado guardado');
        break;
      }
      case 'share-comp-rank': {
        const comp = getCompById(ui.compId);
        if (comp) void shareRankingText(buildCompRankingContext(comp));
        break;
      }
      case 'export-comp-rank': {
        const comp = getCompById(ui.compId);
        if (comp) void exportRankingImage(buildCompRankingContext(comp));
        break;
      }
      case 'open-join-comp':
        ui.compModal = 'join-comp';
        render();
        break;
      case 'submit-join-comp': {
        const rawVal = (document.getElementById('join-comp-code') as HTMLInputElement | null)?.value || '';
        void joinSyncedCompetition(rawVal);
        break;
      }
      case 'share-comp-invite': {
        const comp = getCompById(ui.compId);
        if (comp) shareCompInvite(comp);
        break;
      }
      case 'dl-comp-qr': {
        const comp = getCompById(ui.compId);
        if (comp) downloadCompSyncQR(comp);
        break;
      }
      case 'republish-comp-sync': {
        const comp = getCompById(ui.compId);
        if (comp) {
          void publishCompFullSync(comp).then((ok) => {
            showToast(ok ? '✓ Datos publicados en la nube' : 'Guardado en cola: se enviará al reconectar');
            render();
          });
        }
        break;
      }
      case 'save-shared':
        if (ui.sharedMatch) {
          archiveMatchToHistory(ui.sharedMatch);
          ui.statsId = ui.sharedMatch.id;
          showToast('Partido guardado en tu historial');
          render();
        }
        break;
      case 'export-json':
        void exportBackupJson({ share: false });
        break;
      case 'share-json':
        void exportBackupJson({ share: true });
        break;
      case 'dismiss-backup-prompt':
        prefs.backupPromptDismissedAt = Date.now();
        saveJSON(LS_PREFS, prefs);
        render();
        break;
      case 'install-pwa':
        void triggerPwaInstall();
        break;
      case 'apply-sw-update':
        applyPendingSwUpdate();
        break;
      case 'save-sync-server': {
        const inp = document.getElementById('cfg-sync-server') as HTMLInputElement | null;
        const raw = String(inp?.value || '').trim();
        const norm = normalizeSyncServerUrl(raw);
        if (raw && norm === DEFAULT_SYNC_SERVER && !/^https:\/\/ntfy\.sh\/?$/i.test(raw)) {
          showToast('Ingresá una URL válida con https:// (o http://localhost)');
          return;
        }
        prefs.syncServerUrl = norm;
        saveJSON(LS_PREFS, prefs);
        stopCompLiveWatcher();
        if (ui.liveId) {
          const curLive = ui.liveId;
          disconnectLiveStreamOnly();
          connectLiveSpectator(curLive);
        }
        render();
        showToast(`Servidor de sincronización: ${norm}`);
        break;
      }
      case 'reset-sync-server':
        prefs.syncServerUrl = DEFAULT_SYNC_SERVER;
        saveJSON(LS_PREFS, prefs);
        stopCompLiveWatcher();
        render();
        showToast('Servidor restablecido a https://ntfy.sh');
        break;
      case 'clear-all-data':
        if (confirm('¿Seguro que querés borrar todos los partidos del historial?')) {
          store.historyList = [];
          saveJSON(LS_HIST, store.historyList);
          store.competitionsList.forEach((c) => resolveCompetitionFixtures(c));
          saveCompetitions();
          showToast('Historial vaciado');
          render();
        }
        break;
      case 'clear-all-comps':
        if (confirm('¿Seguro que querés borrar todas las Ligas y Torneos? (Los partidos del historial se conservarán)')) {
          store.competitionsList = [];
          saveCompetitions();
          preset.compId = '';
          preset.fixtureId = '';
          saveJSON(LS_PRESET, preset);
          ui.compId = null;
          showToast('Ligas y Torneos eliminados');
          render();
        }
        break;
      case 'pc-download':
        void downloadPlayerCardImage();
        break;
      case 'pc-save':
        void saveCurrentPlayerCard();
        break;
      case 'pc-new-blank':
        bumpPcAiRequestToken();
        ui.playerCardAiBusy = false;
        ui.playerCardDraft = createDefaultPlayerCardDraft();
        ui.playerCardDraftDirty = true;
        ui.playerCardTouchDrag = false;
        ui.playerCardAiStatus = '';
        ui.playerCardAiText = '';
        scheduleSaveActiveDraftToIDB(true);
        render();
        break;
      case 'pc-clear-photo': {
        bumpPcAiRequestToken();
        ui.playerCardAiBusy = false;
        const d = getActivePlayerCardDraft();
        d.origPhoto = null;
        d.cutoutPhoto = null;
        d.origHasAlpha = false;
        d.zoom = 1;
        d.offsetX = 0;
        d.offsetY = 0;
        ui.playerCardDraftDirty = true;
        ui.playerCardTouchDrag = false;
        ui.playerCardAiStatus = '';
        ui.playerCardAiText = '';
        scheduleSaveActiveDraftToIDB(true);
        render();
        break;
      }
      case 'pc-reset-frame': {
        const d = getActivePlayerCardDraft();
        d.zoom = 1;
        d.offsetX = 0;
        d.offsetY = 0;
        ui.playerCardDraftDirty = true;
        scheduleSaveActiveDraftToIDB(true);
        render();
        break;
      }
      case 'pc-toggle-touch-drag':
        ui.playerCardTouchDrag = !ui.playerCardTouchDrag;
        render();
        break;
      case 'pc-reset-logo2': {
        const logos = getPlayerCardLogos();
        logos.logo2 = DEFAULT_CENTER_LOGO_URL;
        logos.logo2Disabled = false;
        void saveCardLogosToIDB();
        render();
        showToast('Logo oficial PRO PÁDEL restaurado');
        break;
      }
    }
  }
});

// Input listeners
document.addEventListener('input', (ev) => {
  const t = ev.target as HTMLInputElement | null;
  if (!t) return;
  const { ui, preset, prefs } = store;

  if (t.id === 'pc-name') {
    getActivePlayerCardDraft().name = t.value;
    ui.playerCardDraftDirty = true;
    scheduleSaveActiveDraftToIDB();
    refreshPlayerCardPreview();
    return;
  }
  if (t.id === 'pc-nick') {
    getActivePlayerCardDraft().nickname = t.value;
    ui.playerCardDraftDirty = true;
    scheduleSaveActiveDraftToIDB();
    refreshPlayerCardPreview();
    return;
  }
  if (t.id === 'pc-cat') {
    getActivePlayerCardDraft().category = t.value;
    ui.playerCardDraftDirty = true;
    scheduleSaveActiveDraftToIDB();
    refreshPlayerCardPreview();
    return;
  }
  if (t.id === 'pc-age') {
    getActivePlayerCardDraft().age = t.value;
    ui.playerCardDraftDirty = true;
    scheduleSaveActiveDraftToIDB();
    refreshPlayerCardPreview();
    return;
  }
  if (t.id === 'pc-shot') {
    getActivePlayerCardDraft().bestShot = t.value;
    ui.playerCardDraftDirty = true;
    scheduleSaveActiveDraftToIDB();
    refreshPlayerCardPreview();
    return;
  }
  if (t.id === 'pc-subtitle') {
    getPlayerCardLogos().subTitle = t.value;
    refreshPlayerCardPreview();
    return;
  }
  if (t.id === 'pc-zoom') {
    const v = Number(t.value) || 1;
    getActivePlayerCardDraft().zoom = v;
    const lbl = document.getElementById('pc-zoom-val');
    if (lbl) lbl.textContent = Math.round(v * 100) + '%';
    ui.playerCardDraftDirty = true;
    scheduleSaveActiveDraftToIDB();
    refreshPlayerCardPreview();
    return;
  }
  if (t.id === 'pc-offx') {
    const v = Number(t.value) || 0;
    getActivePlayerCardDraft().offsetX = v;
    const lbl = document.getElementById('pc-offx-val');
    if (lbl) lbl.textContent = String(Math.round(v));
    ui.playerCardDraftDirty = true;
    scheduleSaveActiveDraftToIDB();
    refreshPlayerCardPreview();
    return;
  }
  if (t.id === 'pc-offy') {
    const v = Number(t.value) || 0;
    getActivePlayerCardDraft().offsetY = v;
    const lbl = document.getElementById('pc-offy-val');
    if (lbl) lbl.textContent = String(Math.round(v));
    ui.playerCardDraftDirty = true;
    scheduleSaveActiveDraftToIDB();
    refreshPlayerCardPreview();
    return;
  }
  if (t.hasAttribute('data-pname')) {
    const [tm, pi] = (t.getAttribute('data-pname') || '').split(',').map(Number);
    preset.teams[tm].players[pi] = t.value;
    saveJSON(LS_PRESET, preset);
    const box = document.getElementById('srv-chips-box');
    if (box) {
      const btns = box.querySelectorAll('[data-set-srv]');
      btns.forEach((b) => {
        const [bt, bp] = (b.getAttribute('data-set-srv') || '').split(',').map(Number);
        const nm = preset.teams[bt].players[bp] || (bp === 0 ? `DRIVE ${bt + 1}` : `REVÉS ${bt + 1}`);
        b.innerHTML = `<span class="dot"></span>${esc(nm)}`;
      });
    }
    return;
  }
  if (t.hasAttribute('data-preset-txt')) {
    const k = t.getAttribute('data-preset-txt');
    if (k) {
      preset[k] = t.value;
      saveJSON(LS_PRESET, preset);
    }
    return;
  }
  if (t.id === 'cfg-ranking-name') {
    prefs.rankingName = t.value;
    saveJSON(LS_PREFS, prefs);
    return;
  }
  if (t.id === 'hist-search-inp') {
    const pos = t.selectionStart ?? t.value.length;
    ui.histQuery = t.value;
    render();
    const inp = document.getElementById('hist-search-inp') as HTMLInputElement | null;
    if (inp) {
      inp.focus();
      inp.setSelectionRange(pos, pos);
    }
    return;
  }
  if (t.id && t.id.startsWith('qs-') && ui.quickScoreState) {
    const mSet = t.id.match(/^qs-s(\d+)-([01])$/);
    if (mSet) {
      const sIdx = Number(mSet[1]) - 1;
      const side = Number(mSet[2]);
      const val = t.value === '' ? null : Math.max(0, Number(t.value) || 0);
      const row = document.querySelector(`[data-qs-row="${sIdx}:${side}"]`);
      if (row && row.querySelectorAll) {
        row.querySelectorAll('.qs-g-pill').forEach((btn) => {
          btn.classList.toggle('on', val !== null && Number(btn.textContent) === val);
        });
      }
    }
    updateQuickScorePreviewDom();
  }
});

// Change listeners
document.addEventListener('change', (ev) => {
  const t = ev.target as HTMLInputElement | HTMLSelectElement | null;
  if (!t) return;
  const { ui, preset, prefs } = store;

  if (t.id === 'pc-photo-inp' && t instanceof HTMLInputElement && t.files && t.files[0]) {
    void processUploadedPlayerPhoto(t.files[0]);
    t.value = '';
    return;
  }
  if (t.id === 'pc-logo1-inp' && t instanceof HTMLInputElement && t.files && t.files[0]) {
    void processUploadedLogo(t.files[0], 1);
    t.value = '';
    return;
  }
  if (t.id === 'pc-logo2-inp' && t instanceof HTMLInputElement && t.files && t.files[0]) {
    void processUploadedLogo(t.files[0], 2);
    t.value = '';
    return;
  }
  if (t.id === 'pc-subtitle') {
    getPlayerCardLogos().subTitle = t.value;
    void saveCardLogosToIDB();
    return;
  }
  if (t.id === 'pc-show-brand' && t instanceof HTMLInputElement) {
    getActivePlayerCardDraft().showAppBrand = t.checked;
    ui.playerCardDraftDirty = true;
    scheduleSaveActiveDraftToIDB();
    refreshPlayerCardPreview();
    return;
  }
  if (t.hasAttribute('data-preset-bool') && t instanceof HTMLInputElement) {
    const k = t.getAttribute('data-preset-bool');
    if (k) {
      preset[k] = t.checked;
      saveJSON(LS_PRESET, preset);
    }
    return;
  }
  if (t.hasAttribute('data-pref-bool') && t instanceof HTMLInputElement) {
    const k = t.getAttribute('data-pref-bool');
    if (k) {
      prefs[k] = t.checked;
      saveJSON(LS_PREFS, prefs);
      void updateWakeLock();
      if (k === 'backupIncludeCards') render();
    }
    return;
  }
  if (t.getAttribute('data-act') === 'sel-comp-for-new') {
    const c = getCompById(t.value);
    if (c) {
      fillPresetFromComp(c, null);
      saveJSON(LS_PRESET, preset);
      render();
    }
    return;
  }
  if (t.hasAttribute('data-fill-pair-team') && t.value) {
    const teamIdx = Number(t.getAttribute('data-fill-pair-team'));
    const [cid, ptid] = t.value.split(':');
    const c = getCompById(cid);
    const pt = (c?.participants || []).find((p) => p.id === ptid);
    if (pt && pt.type === 'pair') {
      preset.teams[teamIdx].players = [pt.players?.[0] || `DRIVE ${teamIdx + 1}`, pt.players?.[1] || `REVÉS ${teamIdx + 1}`];
      if (pt.color) preset.teams[teamIdx].color = pt.color;
      saveJSON(LS_PRESET, preset);
      render();
      showToast(`Pareja ${teamIdx + 1} cargada`);
    }
    return;
  }
  if (t.getAttribute('data-act') === 'sel-rank-comp') {
    const c = getCompById(t.value);
    if (c) {
      if (c.kind === 'league') ui.selectedLeagueId = c.id;
      else ui.selectedTournId = c.id;
      ui.selectedGroupFilter = 'all';
      render();
    }
    return;
  }
  if (t.hasAttribute('data-set-part-group')) {
    const [cid, ptid] = (t.getAttribute('data-set-part-group') || '').split(':');
    const c = getCompById(cid);
    const pt = (c?.participants || []).find((p) => p.id === ptid);
    if (c && pt) {
      pt.group = t.value || null;
      saveCompetitions();
      if (c.syncCode) void publishCompParticipantChange(c, 'grp', ptid, pt.group);
      render();
    }
    return;
  }
  if (t.id && t.id.startsWith('qs-') && ui.quickScoreState) {
    updateQuickScorePreviewDom();
    return;
  }
  if (t.id === 'imp-json-file' && t instanceof HTMLInputElement && t.files && t.files[0]) {
    const file = t.files[0];
    t.value = '';
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        void importBackupJsonText(reader.result);
      }
    };
    reader.readAsText(file);
  }
});

// Keyboard shortcuts (PC & Bluetooth clickers)
document.addEventListener('keydown', (ev) => {
  const target = ev.target as HTMLElement | null;
  if (target && ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName)) return;
  const { ui, activeMatch, prefs } = store;

  if (ui.shotSheet && activeMatch) {
    const w = ui.shotSheet.team;
    const l = 1 - w;
    if (ev.key === 'Escape') {
      ui.shotSheet = null;
      render();
      return;
    }
    if (ev.key === ' ' || ev.key === 'Enter') {
      ev.preventDefault();
      scorePoint(w, 'pt', null);
      return;
    }
    if (ev.key === '1') {
      scorePoint(w, 'winner', [w, 0]);
      return;
    }
    if (ev.key === '2') {
      scorePoint(w, 'winner', [w, 1]);
      return;
    }
    if (ev.key === '3') {
      scorePoint(w, 'ue', [l, 0]);
      return;
    }
    if (ev.key === '4') {
      scorePoint(w, 'ue', [l, 1]);
      return;
    }
    if (ev.key === '5') {
      scorePoint(w, 'fe', [l, 0]);
      return;
    }
    if (ev.key === '6') {
      scorePoint(w, 'fe', [l, 1]);
      return;
    }
    return;
  }

  if (ui.changeoverOverlay && (ev.key === ' ' || ev.key === 'Enter' || ev.key === 'Escape')) {
    ev.preventDefault();
    ui.changeoverOverlay = null;
    render();
    return;
  }

  if (ui.route === 'board' && activeMatch) {
    const k = ev.key.toLowerCase();
    if (k === '1' || k === 'a' || ev.key === 'ArrowLeft' || ev.key === 'ArrowUp' || ev.key === 'PageUp') {
      ev.preventDefault();
      onTapTeam(0);
    } else if (k === '2' || k === 'l' || ev.key === 'ArrowRight' || ev.key === 'ArrowDown' || ev.key === 'PageDown') {
      ev.preventDefault();
      onTapTeam(1);
    } else if (k === 'f') {
      ev.preventDefault();
      recordFault();
    } else if (k === 'z' || ev.key === 'Backspace') {
      ev.preventDefault();
      undoPoint();
    } else if (k === 'y') {
      ev.preventDefault();
      redoPoint();
    } else if (k === 's') {
      ev.preventDefault();
      flipSides();
    } else if (k === 'v') {
      ev.preventDefault();
      prefs.voice = !prefs.voice;
      saveJSON(LS_PREFS, prefs);
      showToast(prefs.voice ? 'Voz activada' : 'Voz desactivada');
      render();
    }
  }
});

// Hash routing & shared links
export function checkHashRoute(): void {
  const { ui } = store;
  const h = location.hash.slice(1);
  if (h === 'obs' || h.startsWith('obs?') || h.startsWith('obs&') || h.startsWith('obs=')) {
    let code = '';
    if (h.startsWith('obs=')) {
      code = h.slice(4);
    } else {
      const qIdx = h.indexOf('?');
      const ampIdx = h.indexOf('&');
      const paramStr = qIdx >= 0 ? h.slice(qIdx + 1) : ampIdx >= 0 ? h.slice(ampIdx + 1) : '';
      const sp = new URLSearchParams(paramStr);
      code = sp.get('v') || sp.get('live') || sp.get('code') || '';
    }
    ui.route = 'obs';
    if (code) {
      connectLiveSpectator(code);
    } else {
      render();
    }
    return;
  }

  if (h.startsWith('v=')) {
    connectLiveSpectator(h.slice(2));
    return;
  }
  if (h.startsWith('live=')) {
    connectLiveSpectator(h.slice(5));
    return;
  }
  if (h.startsWith('s=')) {
    void openShortSharedMatch(h.slice(2));
    return;
  }
  if (h.startsWith('r=') || h.startsWith('rk_id=')) {
    const code = h.startsWith('r=') ? h.slice(2) : h.slice(6);
    void openShortSharedRanking(code);
    return;
  }
  if (h.startsWith('c=') || h.startsWith('join=')) {
    void joinSyncedCompetition(h);
    return;
  }
  if (h.startsWith('comp=')) {
    const cid = h.slice(5);
    if (getCompById(cid)) {
      ui.compId = cid;
      ui.route = 'comp-detail';
      render();
      return;
    }
  }
  if (h.startsWith('share=')) {
    const m = decodeMatchShare(h.slice(6));
    if (m) {
      ui.sharedMatch = m;
      ui.statsId = 'shared';
      ui.route = 'stats';
      render();
      return;
    }
  }
  if (h.startsWith('rk=') || h.startsWith('ranking=')) {
    const raw = h.startsWith('rk=') ? h.slice(3) : h.slice(8);
    const decoded = decodeRankingPayload(raw);
    if (decoded && Array.isArray(decoded.players) && decoded.players.length) {
      ui.sharedRanking = decoded;
      saveJSON('padel_shared_ranking', decoded);
      saveSharedRankingToVault(decoded);
      ui.playerRankingView = 'shared';
      ui.playerScope = 'shared';
      ui.route = 'players';
      render();
      showToast(`📡 ${decoded.name || 'Ranking'} (#${decoded.id || 'RK'}) cargado`);
      return;
    }
  }
  if (h === 'display') {
    ui.route = 'display';
    render();
    return;
  }
  if (h === 'cards' || h === 'tarjetas' || h === 'player-card') {
    ui.route = 'player-card';
    render();
    return;
  }
  if (
    ['home', 'new', 'board', 'stats', 'history', 'players', 'competitions', 'comp-detail', 'player-card', 'settings'].includes(
      h
    )
  ) {
    if (h === 'home' || h === 'new') disconnectLiveSpectator();
    ui.route = h;
    render();
  }
}
window.addEventListener('hashchange', checkHashRoute);

// Pointer drag-to-reposition photo directly on Player Card preview canvas
interface PcDragState {
  pointerId: number;
  startX: number;
  startY: number;
  origX: number;
  origY: number;
  rectW: number;
}
let pcDragState: PcDragState | null = null;

document.addEventListener('pointerdown', (ev) => {
  const target = ev.target as HTMLElement | null;
  const canvas = target?.closest?.('#pc-preview-canvas') as HTMLCanvasElement | null;
  if (!canvas) return;
  if (ev.pointerType !== 'mouse' && !store.ui.playerCardTouchDrag) return;
  const draft = getActivePlayerCardDraft();
  if (!draft.origPhoto) return;
  pcDragState = {
    pointerId: ev.pointerId,
    startX: ev.clientX,
    startY: ev.clientY,
    origX: Number(draft.offsetX) || 0,
    origY: Number(draft.offsetY) || 0,
    rectW: canvas.getBoundingClientRect().width || 360
  };
  canvas.classList.add('dragging');
  try {
    canvas.setPointerCapture?.(ev.pointerId);
  } catch {}
});

document.addEventListener('pointermove', (ev) => {
  if (!pcDragState || ev.pointerId !== pcDragState.pointerId) return;
  const draft = getActivePlayerCardDraft();
  const scale = 1080 / pcDragState.rectW;
  const nx = Math.max(-350, Math.min(350, Math.round(pcDragState.origX + (ev.clientX - pcDragState.startX) * scale)));
  const ny = Math.max(-350, Math.min(350, Math.round(pcDragState.origY + (ev.clientY - pcDragState.startY) * scale)));
  draft.offsetX = nx;
  draft.offsetY = ny;
  const xInp = document.getElementById('pc-offx') as HTMLInputElement | null;
  const yInp = document.getElementById('pc-offy') as HTMLInputElement | null;
  const xLbl = document.getElementById('pc-offx-val');
  const yLbl = document.getElementById('pc-offy-val');
  if (xInp) xInp.value = String(nx);
  if (yInp) yInp.value = String(ny);
  if (xLbl) xLbl.textContent = String(nx);
  if (yLbl) yLbl.textContent = String(ny);
  refreshPlayerCardPreview();
});

function endPcDrag(ev?: PointerEvent): void {
  if (!pcDragState || (ev && ev.pointerId !== undefined && ev.pointerId !== pcDragState.pointerId)) return;
  const canvas = document.getElementById('pc-preview-canvas');
  if (canvas) canvas.classList.remove('dragging');
  pcDragState = null;
  store.ui.playerCardDraftDirty = true;
  scheduleSaveActiveDraftToIDB();
}
document.addEventListener('pointerup', endPcDrag);
document.addEventListener('pointercancel', endPcDrag);

document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible') {
    void updateWakeLock();
  }
  if (document.hidden) return;
  const watchCode = getCompSyncWatchCode();
  if (watchCode) void pollCompChannelOnce(watchCode, null, false);
  if ((store.ui.route === 'live' || store.ui.route === 'obs') && store.ui.liveId) {
    void pollLiveChannelOnce(cleanLiveTopic(store.ui.liveId));
  }
});

// Boot
initPwaSystemListeners();
startMatchClockTimer();
checkHashRoute();
render();
void loadPlayerCardDataFromIDB();
void hydrateStateFromIDB();
void refreshStorageHealth(true);
void registerPwaServiceWorker();
