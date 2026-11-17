import { ICONS, renderSupportButton, renderSupportModal } from '../core/constants';
export { renderSupportButton, renderSupportModal };
import { esc, fmtDurationLong, fmtDateLong, getMatchCompId, getMatchKind, teamLabel } from '../core/utils';
import { computeMatch } from '../engines/matchEngine';
import { updateWakeLock } from '../services/audioVoice';
import { appHooks } from '../state/runtime';
import { calculateMatchEloPreview, getCompById, store } from '../state/store';
import type { Match } from '../types';

export function navigate(route: string, extra: Record<string, unknown> = {}): void {
  const { ui } = store;
  Object.assign(ui, extra);
  ui.route = route;
  ui.menuOpen = false;
  ui.supportModalOpen = false;
  ui.shotSheet = null;
  ui.playerCardTouchDrag = false;
  try {
    const h = String(location.hash || '');
    const isSharedHash = /^#(v|live|s|r|rk_id|c|join|comp|share|rk|ranking)=/.test(h);
    const navHash = route === 'comp-detail' && ui.compId ? '#comp=' + ui.compId : '#' + route;
    if ((route === 'player-card' || !isSharedHash) && h !== navHash) {
      history.replaceState(null, '', navHash);
    }
  } catch {}
  void updateWakeLock();
  appHooks.render();
  window.scrollTo(0, 0);
}

export function applyTheme(): void {
  document.documentElement.setAttribute('data-theme', 'dark');
}

export function renderTabbar(active: string): string {
  const isComp = active === 'competitions' || active === 'comp-detail';
  return `
  <nav class="tabbar no-print" aria-label="Navegación principal">
    <a href="#home" data-nav="home" class="${active === 'home' ? 'on' : ''}">${ICONS.home}<span>Inicio</span></a>
    <a href="#competitions" data-nav="competitions" class="${isComp ? 'on' : ''}">${ICONS.award}<span>Ligas·Torn.</span></a>
    <a href="#new" data-nav="new" class="fab" title="Nuevo partido">${ICONS.plus}</a>
    <a href="#players" data-nav="players" class="${active === 'players' ? 'on' : ''}">${ICONS.trophy}<span>Rankings</span></a>
    <a href="#history" data-nav="history" class="${active === 'history' ? 'on' : ''}">${ICONS.hist}<span>Historial</span></a>
  </nav>`;
}

export function getMatchContextBadgeHtml(m: Match | null | undefined): string {
  const kind = getMatchKind(m);
  const compId = getMatchCompId(m);
  const comp = compId ? getCompById(compId) : null;
  const stage = m?.competition?.stageLabel ? ` · ${m.competition.stageLabel}` : '';
  let badge = '';
  if (kind === 'league') {
    badge = `<span class="badge league">🏅 ${esc(comp?.name || m?.competition?.compName || 'Liga')}${esc(stage)}</span>`;
  } else if (kind === 'tournament') {
    badge = `<span class="badge tourn">🏆 ${esc(comp?.name || m?.competition?.compName || 'Torneo')}${esc(stage)}</span>`;
  } else {
    badge = `<span class="badge daily">☀️ Partido del Día</span>`;
  }
  if (m?.isWalkover) badge += `<span class="badge ab">W.O.</span>`;
  return badge;
}

export function renderMatchCard(m: Match): string {
  const st = computeMatch(m);
  const w = st.matchWinner;
  const badgeHtml =
    m.status === 'playing'
      ? `<span class="badge live">En juego</span>`
      : m.status === 'abandoned'
        ? `<span class="badge ab">Incompleto</span>`
        : m.isWalkover
          ? `<span class="badge">Sin juego</span>`
          : `<span class="badge">${esc(fmtDurationLong(m.durationMs))}</span>`;

  let eloBadge = '';
  if ((w !== null || st.isDraw) && !m.isWalkover) {
    const eloInfo = calculateMatchEloPreview(m);
    if (eloInfo) {
      const p0Delta = eloInfo.pair0.players[0]?.delta || 0;
      const p1Delta = eloInfo.pair1.players[0]?.delta || 0;
      if (st.isDraw) {
        const dMax = Math.max(Math.abs(p0Delta), Math.abs(p1Delta));
        eloBadge =
          `<span class="badge">🤝 Empate</span>` +
          (dMax > 0 ? ` <span class="badge elo" title="Ajuste ELO por empate">⚡ ELO ±${dMax}</span>` : '');
      } else {
        const winPair = w === 0 ? eloInfo.pair0 : eloInfo.pair1;
        const pts = Math.abs(winPair.players[0]?.delta || 0);
        eloBadge = `<span class="badge elo" title="Puntos ELO en juego">⚡ ELO ±${pts}</span>`;
      }
    }
  } else if (st.isDraw) {
    eloBadge = `<span class="badge">🤝 Empate</span>`;
  }

  const renderRow = (t: number) => {
    const setsHtml = st.sets
      .map((s, idx) => {
        if (s.games[0] === 0 && s.games[1] === 0 && idx > 0 && s.winner === null) return '';
        const cls = s.winner === t ? 's w' : s.winner === null && m.status === 'playing' ? 's cur' : 's';
        return `<span class="${cls}">${s.games[t]}</span>`;
      })
      .join('');
    return `
      <div class="mrow ${w === t ? 'win' : ''}">
        <span class="bar" style="--c:${esc(m.teams[t].color)}"></span>
        <span class="nm">${esc(teamLabel(m, t))}</span>
        ${w === t ? `<span class="tro">${ICONS.trophy}</span>` : ''}
        ${setsHtml}
      </div>`;
  };

  return `
  <button class="mcard" data-open-stats="${esc(m.id)}">
    <div class="mmeta">
      <span>${esc(fmtDateLong(m.createdAt))}</span>
      ${getMatchContextBadgeHtml(m)}
      ${eloBadge}
      ${badgeHtml}
    </div>
    ${renderRow(0)}
    ${renderRow(1)}
  </button>`;
}
