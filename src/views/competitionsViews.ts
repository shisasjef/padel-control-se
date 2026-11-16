import { getSavedCardForPlayerName } from '../cards/playerCardStudio';
import { COLORS, ICONS, renderSignatureFooter } from '../core/constants';
import { esc, fgFor, formatPairLabel, pct } from '../core/utils';
import {
  assignPlayerRanks,
  CALIBRATION_MATCHES_THRESHOLD,
  computeScopeStandings,
  getCompSubtitle,
  getEloLevel,
  isProyectoPadelComp,
  sortStandingsRows
} from '../engines/eloEngine';
import {
  getCompCourtsCount,
  getSocialCycleRoundCount,
  isCompFinished,
  isSocialDrawComp,
  MAX_COMP_COURTS,
  MIN_COMP_COURTS,
  participantToTeamObj
} from '../engines/fixtureEngine';
import { computeMatch } from '../engines/matchEngine';
import {
  buildQuickScoreState,
  ensureCompSyncCode,
  getCompQuickPlayerPool,
  getCompShareUrl,
  getGroupStandingsForComp
} from '../services/competitionSync';
import { getEffectiveSortKey } from '../services/liveBroadcast';
import {
  getCompById,
  getCompetitionMatches,
  getCompetitionScoringConfig,
  getCompScoringSummaryLabel,
  getKnownPlayerNames,
  store
} from '../state/store';
import type { Competition, CompFormState, Fixture, QuickScoreState, RankingContext, StandingRow } from '../types';
import { renderMatchCard, renderTabbar } from './sharedUi';

export function formatFixtureScoreSummary(fx: Fixture | null | undefined): { s0: string; s1: string } {
  const { activeMatch, historyList } = store;
  if (!fx) return { s0: '', s1: '' };
  if (fx.isBye) return { s0: fx.team0 ? 'BYE' : '', s1: fx.team1 ? 'BYE' : '' };
  const m = fx.matchId
    ? activeMatch && activeMatch.id === fx.matchId
      ? activeMatch
      : historyList.find((x) => x.id === fx.matchId)
    : null;
  if (!m) return { s0: '', s1: '' };
  if (m.isWalkover) {
    return {
      s0: fx.winnerSide === 0 ? 'G (W.O.)' : 'W.O.',
      s1: fx.winnerSide === 1 ? 'G (W.O.)' : 'W.O.'
    };
  }
  const st = computeMatch(m);
  const played = st.sets.filter((s, idx) => idx === 0 || s.winner !== null || s.games[0] > 0 || s.games[1] > 0);
  return {
    s0: played.map((s) => s.games[0]).join(' '),
    s1: played.map((s) => s.games[1]).join(' ')
  };
}

export function renderSortBarHtml(sortKey: string, isEloPrimary = false): string {
  const btns: Array<[string, string]> = isEloPrimary
    ? [
        ['elo', '⭐ ELO'],
        ['pts', '🏅 Puntos (G)'],
        ['wins', '🏆 Victorias'],
        ['matches', '🎾 Partidos']
      ]
    : [
        ['pts', '🏅 Puntos'],
        ['elo', '⭐ ELO'],
        ['wins', '🏆 Victorias'],
        ['matches', '🎾 Partidos']
      ];
  return `
    <div class="seg" style="margin-bottom:14px">
      ${btns.map(([k, lbl]) => `<button class="${sortKey === k ? 'on' : ''}" data-set-psort="${k}">${lbl}</button>`).join('')}
    </div>`;
}

export function renderStandingsSectionHtml(
  players: StandingRow[],
  rCtx: Partial<RankingContext> | null,
  opts: { tableTitle?: string; emptyText?: string; qualCount?: number; compactOnly?: boolean } = {}
): string {
  if (!players || !players.length) {
    return `<div class="empty">${ICONS.trophy}<br>${esc(opts.emptyText || 'Todavía no hay jugadores o partidos en este ranking.')}</div>`;
  }
  const qualCount = Number(opts.qualCount) || 0;
  const entityLabel = rCtx?.entityMode === 'pairs' ? 'Pareja' : 'Jugador';
  const isEloPrimary = rCtx?.primaryMetric === 'elo' || isProyectoPadelComp(rCtx?.comp);
  const scoringBadge = rCtx?.scoring ? getCompScoringSummaryLabel(rCtx.comp, rCtx.scoring, false) : '';

  const tableHtml = `
  <div class="card" style="padding:12px 14px;margin-bottom:14px">
    <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:8px;flex-wrap:wrap">
      <h3 style="margin:0;font-size:15px">${esc(opts.tableTitle || (isEloPrimary ? 'Tabla Oficial · ELO Principal' : 'Tabla de Posiciones (Puntos + ELO)'))}</h3>
      ${scoringBadge ? `<small class="muted">${esc(scoringBadge)}</small>` : ''}
    </div>
    <div class="tbl-wrap">
      <table class="stand-tbl">
        <thead>
          ${
            isEloPrimary
              ? `
          <tr>
            <th>Pos</th>
            <th>${entityLabel}</th>
            <th title="Partidos jugados">PJ</th>
            <th title="Ganados">G</th>
            <th title="Empates">E</th>
            <th title="Perdidos">P</th>
            <th title="Games ganados">GF</th>
            <th title="Diferencia de games">DJ</th>
            <th title="Puntos secundarios (Games + Bonus)">PTS</th>
            <th title="Rating ELO Principal">ELO</th>
          </tr>`
              : `
          <tr>
            <th>Pos</th>
            <th>${entityLabel}</th>
            <th title="Partidos jugados">PJ</th>
            <th title="Partidos ganados">PG</th>
            <th title="Partidos perdidos">PP</th>
            <th title="Diferencia de sets">DS</th>
            <th title="Diferencia de juegos">DJ</th>
            <th title="Rating ELO exclusivo de este ranking">ELO</th>
            <th title="Puntos acumulados">PTS</th>
          </tr>`
          }
        </thead>
        <tbody>
          ${players
            .map((p, idx) => {
              const medal = p.rank === 1 ? '🥇' : p.rank === 2 ? '🥈' : p.rank === 3 ? '🥉' : `#${p.rank}`;
              const lvl = getEloLevel(p.elo);
              const sd = (p.setsDiff || 0) > 0 ? `+${p.setsDiff}` : String(p.setsDiff || 0);
              const gd = (p.gamesDiff || 0) > 0 ? `+${p.gamesDiff}` : String(p.gamesDiff || 0);
              const qualCls = qualCount > 0 && idx < qualCount ? 'qual' : '';
              const deltaMini = p.lastDelta
                ? `<small style="font-size:11px;font-family:var(--font);font-weight:700;margin-left:3px;color:${p.lastDelta > 0 ? '#10b981' : '#ef4444'}">${p.lastDelta > 0 ? '+' : ''}${p.lastDelta}</small>`
                : '';
              return `
            <tr class="${qualCls}">
              <td><b>${medal}</b></td>
              <td>
                <div style="display:flex;align-items:center;gap:7px">
                  <span style="width:8px;height:8px;border-radius:50%;background:${esc(p.color || '#d4af37')};flex:none"></span>
                  <span style="font-weight:700;color:var(--tx)">${esc(p.name)}</span>
                  <span style="font-size:11px;color:${lvl.color};font-weight:700">${lvl.icon}${lvl.level}</span>
                </div>
              </td>
              ${
                isEloPrimary
                  ? `
              <td>${p.matches}</td>
              <td>${p.wins}</td>
              <td>${p.draws || 0}</td>
              <td>${p.losses ?? Math.max(0, p.matches - p.wins - (p.draws || 0))}</td>
              <td>${p.gamesWon || 0}</td>
              <td>${gd}</td>
              <td><b>${p.pts ?? 0}</b></td>
              <td class="pts-cell">${p.elo}${deltaMini}</td>`
                  : `
              <td>${p.matches}</td>
              <td>${p.wins}</td>
              <td>${p.losses ?? Math.max(0, p.matches - p.wins)}</td>
              <td>${sd}</td>
              <td>${gd}</td>
              <td><b>${p.elo}</b></td>
              <td class="pts-cell">${p.pts ?? 0}</td>`
              }
            </tr>`;
            })
            .join('')}
        </tbody>
      </table>
    </div>
  </div>`;

  if (opts.compactOnly) return tableHtml;

  const cardsHtml = players
    .map((p) => {
      const winPct = pct(p.wins, p.matches);
      const initials =
        (p.name || 'JG')
          .split(/\s+/)
          .filter(Boolean)
          .map((x) => x[0])
          .join('')
          .slice(0, 2)
          .toUpperCase() || 'JG';
      const lvl = getEloLevel(p.elo);
      const isCalib = (p.finishedMatches || 0) < CALIBRATION_MATCHES_THRESHOLD;
      const rankBadge =
        p.rank === 1
          ? `<div class="rank-pos rank-gold" title="1º del Ranking">🥇 1º</div>`
          : p.rank === 2
            ? `<div class="rank-pos rank-silver" title="2º del Ranking">🥈 2º</div>`
            : p.rank === 3
              ? `<div class="rank-pos rank-bronze" title="3º del Ranking">🥉 3º</div>`
              : `<div class="rank-pos" title="${p.rank}º del Ranking">#${p.rank}</div>`;

      const trendHtml =
        p.lastDelta > 0
          ? `<div class="elo-trend up">▲ +${p.lastDelta} ELO</div>`
          : p.lastDelta < 0
            ? `<div class="elo-trend down">▼ ${p.lastDelta} ELO</div>`
            : `<div class="elo-trend neu">Sin cambios</div>`;

      const shotBadges: string[] = [];
      if (!isEloPrimary && p.shots) {
        if (p.shots.smash) shotBadges.push(`💥 ${p.shots.smash} Smash`);
        if (p.shots.volea) shotBadges.push(`🎾 ${p.shots.volea} Volea`);
        if (p.shots.bandeja) shotBadges.push(`🌀 ${p.shots.bandeja} Bandeja`);
        if (p.shots.bajada) shotBadges.push(`⚡ ${p.shots.bajada} Bajada`);
        if (p.shots.dejada) shotBadges.push(`🎯 ${p.shots.dejada} Dejada`);
        if (p.shots.passing) shotBadges.push(`🏹 ${p.shots.passing} Passing`);
      }

      const sdStr = (p.setsDiff || 0) >= 0 ? `+${p.setsDiff || 0}` : `${p.setsDiff}`;
      const gdStr = (p.gamesDiff || 0) >= 0 ? `+${p.gamesDiff || 0}` : `${p.gamesDiff}`;

      return `
    <div class="pcard">
      ${rankBadge}
      <div class="avatar" style="--c:${esc(p.color || '#d4af37')};--f:${fgFor(p.color || '#d4af37')}">${esc(initials)}</div>
      <div class="info">
        <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">
          <b>${esc(p.name)}</b>
          <span class="tier-pill" style="--tcol:${lvl.color}">${lvl.icon} Nivel ${lvl.level} · ${lvl.tier}</span>
          ${
            isCalib
              ? `<span class="calib-pill calib" title="Factor K=50 para calibración rápida">Calib. (${p.finishedMatches || 0}/10)</span>`
              : `<span class="calib-pill fixed" title="Factor K=32 consolidado">K=32</span>`
          }
        </div>
        ${
          isEloPrimary
            ? `<small>${p.matches} PJ · ${p.wins}G ${p.draws || 0}E ${p.losses ?? 0}P (${winPct}%) · ${p.gamesWon || 0} GF / ${p.gamesLost || 0} GC (Dif ${gdStr})</small>`
            : `<small>${p.matches} PJ · ${p.wins} PG / ${p.losses ?? Math.max(0, p.matches - p.wins)} PP (${winPct}%) · Sets ${sdStr} · Juegos ${gdStr}</small>`
        }
        <div class="pstats">
          ${
            isEloPrimary
              ? `
            <span>Pts (Games+Bonus): <b>${p.pts ?? 0} pts</b></span>
            <span>Games ganados: <b>${p.gamesWon || 0}</b></span>
            <span>Dif. games: <b>${gdStr}</b></span>
          `
              : `
            <span>Winners: <b>${p.winners || 0}</b></span>
            <span>ENF: <b>${p.ue || 0}</b></span>
            <span>1º Saque: <b>${pct(p.firstServeIn || 0, p.srvPtsTotal || 0)}%</b></span>
            <span>Gan. saque: <b>${pct(p.srvPtsWon || 0, p.srvPtsTotal || 0)}%</b></span>
          `
          }
        </div>
        ${
          shotBadges.length
            ? `
        <div style="display:flex;gap:4px;flex-wrap:wrap;margin-top:6px">
          ${shotBadges.map((b) => `<span class="tag-s" style="font-size:10px">${esc(b)}</span>`).join('')}
        </div>`
            : ''
        }
        <div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:7px">
          ${
            rCtx?.entityMode === 'pairs'
              ? p.name
                  .split(/\s*[·\/]\s*/)
                  .filter(Boolean)
                  .slice(0, 2)
                  .map((nm, pIdx) => {
                    const saved = getSavedCardForPlayerName(nm);
                    const shortNm = nm.split(/\s+/)[0] || nm;
                    return `<button class="pc-mini-btn" data-open-player-card="${esc(nm)}" data-pc-default-pos="${pIdx === 0 ? 'Drive' : 'Revés'}" title="Tarjeta de ${esc(nm)}">${ICONS.idCard} ${saved ? 'Editar' : 'Tarjeta'} ${esc(shortNm)}</button>`;
                  })
                  .join('')
              : `<button class="pc-mini-btn" data-open-player-card="${esc(p.name)}" title="Generar tarjeta personalizable de ${esc(p.name)}">${ICONS.idCard} ${getSavedCardForPlayerName(p.name) ? 'Ver / Editar Tarjeta' : 'Crear Tarjeta'}</button>`
          }
        </div>
      </div>
      <div class="pcard-pts-box">
        ${
          isEloPrimary
            ? `
          <span class="pcard-pts-main" style="font-size:32px">${p.elo}</span>
          <small>ELO</small>
          ${trendHtml}
          <div class="pcard-elo-sub" title="Puntaje secundario por games + bonus">🏅 ${p.pts ?? 0} pts · ${p.gamesWon || 0}G</div>
        `
            : `
          <span class="pcard-pts-main">${p.pts ?? 0}</span>
          <small>PUNTOS</small>
          <div class="pcard-elo-sub">⚡ ${p.elo} ELO</div>
          ${trendHtml}
        `
        }
      </div>
    </div>`;
    })
    .join('');

  return tableHtml + cardsHtml;
}

function renderTeamLabelWithNumHtml(team: { players?: string[]; label?: string; teamNum?: number | null } | null | undefined): string {
  if (!team) return '';
  const nameTxt = esc(team.label || formatPairLabel(team.players?.[0], team.players?.[1]));
  return team.teamNum ? `<span class="fx-team-num">#${team.teamNum}</span>${nameTxt}` : nameTxt;
}

export function getCompFormatLabel(comp: Competition | null | undefined): string {
  if (!comp) return '';
  if (comp.format === 'proyecto_padel') return '⚡ PRO PÁDEL';
  if (comp.format === 'league_rr') return 'Todos contra Todos';
  if (comp.format === 'league_rr2') return 'Ida y Vuelta';
  if (comp.format === 'knockout') return 'Eliminación Directa';
  if (comp.format === 'groups_playoff') return 'Grupos + Playoffs';
  return comp.kind === 'tournament' ? 'Libre / Americano' : 'Liga Libre';
}

export function renderCompetitions(): string {
  const { ui, competitionsList } = store;
  const f = ui.compFilter || 'all';
  const leagues = competitionsList.filter((c) => c.kind === 'league');
  const tourns = competitionsList.filter((c) => c.kind === 'tournament');
  const shown = f === 'league' ? leagues : f === 'tournament' ? tourns : competitionsList;

  return `
  <div class="page">
    <div class="page-h">
      <h1>Ligas y Torneos</h1>
      <div class="page-h-acts">
        <button class="btn sm" data-act="open-join-comp" title="Unirse con código o link">📲 Unirse</button>
        <button class="btn primary sm" data-act="new-comp" data-kind="league">${ICONS.plus} Liga</button>
        <button class="btn primary sm" data-act="new-comp" data-kind="tournament">${ICONS.plus} Torneo</button>
        <button class="icon-btn" data-nav="settings" title="Ajustes">${ICONS.gear}</button>
      </div>
    </div>
    <p class="muted" style="text-align:center;margin-bottom:14px">Cada Liga y Torneo mantiene su propia tabla de posiciones, ELO independiente, fixture, llaves eliminatorias y sincronización por QR.</p>

    <div class="seg" style="margin-bottom:14px">
      <button class="${f === 'all' ? 'on' : ''}" data-set-cfilter="all">Todas (${competitionsList.length})</button>
      <button class="${f === 'league' ? 'on' : ''}" data-set-cfilter="league">🏅 Ligas (${leagues.length})</button>
      <button class="${f === 'tournament' ? 'on' : ''}" data-set-cfilter="tournament">🏆 Torneos (${tourns.length})</button>
    </div>

    ${
      shown.length
        ? shown
            .map((c) => {
              const sc = getCompetitionScoringConfig(c);
              const isPP = isProyectoPadelComp(c);
              const finished = isCompFinished(c);
              const courts = getCompCourtsCount(c);
              const matches = getCompetitionMatches(c, true);
              const finCount = matches.filter((m) => m.status === 'finished').length;
              const pendingFx = (c.fixtures || []).filter((fx) => !fx.isBye && fx.team0 && fx.team1 && fx.winnerSide === null).length;
              const entityMode = c.rankingMode === 'individual' ? 'individual' : 'pairs';
              const rows = sortStandingsRows(
                computeScopeStandings(getCompetitionMatches(c, false), {
                  ...sc,
                  entityMode,
                  seedParticipants: c.participants || []
                }),
                isPP ? 'elo' : 'pts',
                { tiebreakMode: isPP ? 'games' : 'sets' }
              );
              const leader = rows[0];
              const finalFx = (c.fixtures || []).find(
                (fx) => fx.phase === 'playoff' && fx.roundLabel === 'Final' && fx.winnerSide !== null
              );
              const champTeam = finalFx ? (finalFx.winnerSide === 0 ? finalFx.team0 : finalFx.team1) : null;

              return `
      <div class="comp-card">
        <div class="comp-card-top">
          <div style="min-width:0;flex:1">
            <div class="comp-pills" style="margin-bottom:6px">
              <span class="badge ${isPP ? 'pp' : c.kind === 'league' ? 'league' : 'tourn'}">${isPP ? '⚡ PRO PÁDEL' : c.kind === 'league' ? '🏅 Liga' : '🏆 Torneo'}</span>
              ${!isPP ? `<span class="badge">${esc(getCompFormatLabel(c))}</span>` : `<span class="badge">👤 Individual · ELO Principal</span>`}
              <span class="badge court">🏟️ ${courts} ${courts === 1 ? 'cancha' : 'canchas'}</span>
              ${finished ? `<span class="badge done">🏁 Finalizado</span>` : ''}
              <span class="badge">${esc(getCompScoringSummaryLabel(c, sc, true))}</span>
              ${c.syncCode ? `<span class="badge sync">📡 Sala #${esc(c.syncCode)}</span>` : ''}
            </div>
            <div class="comp-card-title">${esc(c.name)}</div>
          </div>
          <div style="display:flex;gap:4px">
            <button class="icon-btn" data-open-comp-sync="${esc(c.id)}" title="${c.syncCode ? `QR y Sala Sync #${esc(c.syncCode)}` : 'Conectar dispositivos (QR)'}">${ICONS.qr}</button>
            <button class="icon-btn" data-edit-comp="${esc(c.id)}" title="Editar configuración">${ICONS.edit}</button>
          </div>
        </div>

        <div style="font-size:12.5px;color:var(--tx2)">
          ${(c.participants || []).length} inscriptos · ${finCount} partidos jugados${pendingFx && !finished ? ` · ${pendingFx} cruces pendientes` : ''}
        </div>

        ${
          champTeam
            ? `<div class="comp-leader">🏆 Campeón: <b>${esc(champTeam.label || formatPairLabel(champTeam.players?.[0], champTeam.players?.[1]))}</b></div>`
            : leader && leader.matches > 0
              ? isPP
                ? `<div class="comp-leader">${finished ? '🏆 Ganador Final' : '🥇 Líder ELO'}: <b>${esc(leader.name)}</b> · ${leader.elo} ELO (${leader.pts} pts · ${leader.gamesWon || 0}G)</div>`
                : `<div class="comp-leader">${finished ? '🏆 Campeón' : '🥇 Líder'}: <b>${esc(leader.name)}</b> · ${leader.pts} pts · ${leader.elo} ELO (${leader.wins}V)</div>`
              : ''
        }

        <div class="btn-row" style="margin-top:2px">
          <button class="btn primary sm" data-open-comp="${esc(c.id)}">${isPP ? 'Gestionar / Sorteo' : 'Gestionar'}</button>
          <button class="btn sm" data-open-comp-rank="${esc(c.id)}">${ICONS.trophy} Ver Ranking</button>
          ${
            !finished
              ? isPP
                ? `<button class="btn sm" data-act="open-comp-quick-score" data-comp="${esc(c.id)}">${ICONS.check} Cargar Resultado</button>`
                : `<button class="btn sm" data-play-in-comp="${esc(c.id)}">${ICONS.play} Jugar aquí</button>`
              : ''
          }
        </div>
      </div>`;
            })
            .join('')
        : `
      <div class="empty">
        ${ICONS.award}<br>
        Todavía no creaste ${f === 'league' ? 'ninguna Liga' : f === 'tournament' ? 'ningún Torneo' : 'Ligas ni Torneos'}.<br><br>
        <div class="btn-row" style="justify-content:center">
          <button class="btn primary" data-act="new-comp" data-kind="league">${ICONS.plus} Crear Liga</button>
          <button class="btn primary" data-act="new-comp" data-kind="tournament">${ICONS.plus} Crear Torneo</button>
          <button class="btn" data-act="open-join-comp">📲 Unirse con Código</button>
        </div>
      </div>
    `
    }
    ${renderSignatureFooter()}
  </div>
  ${renderTabbar('competitions')}`;
}

export function renderBracketHtml(comp: Competition): string {
  const playoffs = (comp.fixtures || []).filter((f) => f.phase === 'playoff');
  if (!playoffs.length) return '';
  const finished = isCompFinished(comp);

  const roundsMap = new Map<number, Fixture[]>();
  playoffs.forEach((fx) => {
    if (!roundsMap.has(fx.roundIdx)) roundsMap.set(fx.roundIdx, []);
    roundsMap.get(fx.roundIdx)!.push(fx);
  });
  const roundKeys = Array.from(roundsMap.keys()).sort((a, b) => a - b);
  const lastRound = roundsMap.get(roundKeys[roundKeys.length - 1]) || [];
  const finalFx = lastRound[0];
  const champTeam =
    finalFx && finalFx.winnerSide !== null && finalFx.winnerSide !== undefined
      ? finalFx.winnerSide === 0
        ? finalFx.team0
        : finalFx.team1
      : null;

  const champBanner = champTeam
    ? `
    <div class="champ-banner">
      <small>🏆 CAMPEONES DE ${esc(comp.name)}</small>
      <b>${esc(champTeam.label || formatPairLabel(champTeam.players?.[0], champTeam.players?.[1]))}</b>
    </div>`
    : '';

  const renderSlotTeam = (fx: Fixture, side: 0 | 1) => {
    const team = side === 0 ? fx.team0 : fx.team1;
    const isWin = fx.winnerSide === side;
    if (!team) {
      return `<div class="b-team tbd"><span class="bar"></span><span class="nm">${fx.isBye ? 'BYE (Libre)' : 'Por definir'}</span></div>`;
    }
    const scores = formatFixtureScoreSummary(fx);
    const sc = side === 0 ? scores.s0 : scores.s1;
    return `
      <div class="b-team ${isWin ? 'win' : ''}">
        <span class="bar" style="--c:${esc(team.color || '#d4af37')}"></span>
        <span class="nm">${renderTeamLabelWithNumHtml(team)}</span>
        ${sc ? `<span class="sc">${esc(sc)}</span>` : ''}
      </div>`;
  };

  return `
  ${champBanner}
  <div class="bracket-wrap">
    <div class="bracket-cols">
      ${roundKeys
        .map((rk) => {
          const list = (roundsMap.get(rk) || []).slice().sort((a, b) => a.slotIdx - b.slotIdx);
          const rTitle = list[0]?.roundLabel || `Ronda ${rk + 1}`;
          return `
        <div class="bracket-round">
          <div class="bracket-round-title">${esc(rTitle)}</div>
          <div class="bracket-matches">
            ${list
              .map((fx) => {
                const playable = !finished && !fx.isBye && fx.team0 && fx.team1 && fx.winnerSide === null;
                return `
              <div class="bracket-match ${fx.winnerSide !== null ? 'done' : ''}">
                ${fx.court && !fx.isBye ? `<div class="b-court-hdr">🏟️ Cancha ${fx.court}</div>` : ''}
                ${renderSlotTeam(fx, 0)}
                ${renderSlotTeam(fx, 1)}
                <div class="b-actions">
                  ${
                    playable
                      ? `
                    <button class="btn primary sm" data-play-fixture="${esc(comp.id)}:${esc(fx.id)}">${ICONS.play} Jugar</button>
                    <button class="btn sm" data-quick-score="${esc(comp.id)}:${esc(fx.id)}">${ICONS.check} Resultado</button>
                  `
                      : fx.matchId
                        ? `
                    <button class="btn sm" data-open-stats="${esc(fx.matchId)}">${ICONS.chart} Ver partido</button>
                  `
                        : ''
                  }
                </div>
              </div>`;
              })
              .join('')}
          </div>
        </div>`;
        })
        .join('')}
    </div>
  </div>`;
}

export function renderFixtureListHtml(comp: Competition, fixturesList: Fixture[], title: string): string {
  if (!fixturesList.length) return '';
  const { activeMatch } = store;
  const finished = isCompFinished(comp);
  const isPP = isProyectoPadelComp(comp);
  const groups = new Map<string, Fixture[]>();
  fixturesList.forEach((fx) => {
    const key = fx.roundLabel || 'Cruces';
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key)!.push(fx);
  });

  let html = `<div class="sec-t">${esc(title)}</div>`;
  groups.forEach((rawItems, label) => {
    const items = rawItems.slice().sort((a, b) => (a.court ?? a.slotIdx) - (b.court ?? b.slotIdx));
    const restingNames = Array.from(new Set(items.flatMap((x) => x.resting || []).filter(Boolean)));
    html += `<div class="fx-round-hdr"><span>${esc(label)}</span><small class="muted">${items.filter((x) => x.winnerSide !== null).length}/${items.length}</small></div>`;
    if (restingNames.length) {
      html += `<div class="fx-rest-row"><span>💤 Descansan:</span> ${restingNames.map((nm) => `<span class="fx-rest-chip">${esc(nm)}</span>`).join('')}</div>`;
    }
    html += items
      .map((fx) => {
        const sc = formatFixtureScoreSummary(fx);
        const isLiveFx = fx.matchId && activeMatch && activeMatch.id === fx.matchId && activeMatch.status === 'playing';
        const playable = !finished && !fx.isBye && fx.team0 && fx.team1 && fx.winnerSide === null;
        return `
      <div class="fx-card">
        <div class="fx-teams">
          ${fx.court && !fx.isBye ? `<div style="margin-bottom:2px"><span class="fx-court-pill">🏟️ Cancha ${fx.court}</span></div>` : ''}
          <div class="fx-team-row ${fx.winnerSide === 0 ? 'win' : ''}">
            <span class="dot" style="--c:${esc(fx.team0?.color || '#d4af37')}"></span>
            <span>${fx.team0 ? renderTeamLabelWithNumHtml(fx.team0) : fx.isBye ? 'BYE' : 'Por definir'}</span>
            ${sc.s0 ? `<span class="fx-sc">${esc(sc.s0)}</span>` : ''}
          </div>
          <div class="fx-team-row ${fx.winnerSide === 1 ? 'win' : ''}">
            <span class="dot" style="--c:${esc(fx.team1?.color || '#2f8cff')}"></span>
            <span>${fx.team1 ? renderTeamLabelWithNumHtml(fx.team1) : fx.isBye ? 'BYE' : 'Por definir'}</span>
            ${sc.s1 ? `<span class="fx-sc">${esc(sc.s1)}</span>` : ''}
          </div>
        </div>
        <div style="display:flex;gap:6px;align-items:center;flex-wrap:wrap">
          ${isLiveFx ? `<span class="badge live">En juego</span>` : ''}
          ${
            playable
              ? isPP
                ? `<button class="btn primary sm" data-quick-score="${esc(comp.id)}:${esc(fx.id)}">${ICONS.check} Resultado</button>
                   <button class="btn sm" data-play-fixture="${esc(comp.id)}:${esc(fx.id)}">${ICONS.play} Jugar</button>`
                : `<button class="btn primary sm" data-play-fixture="${esc(comp.id)}:${esc(fx.id)}">${ICONS.play} Jugar</button>
                   <button class="btn sm" data-quick-score="${esc(comp.id)}:${esc(fx.id)}">${ICONS.check} Resultado</button>`
              : ''
          }
          ${fx.matchId ? `<button class="btn sm" data-open-stats="${esc(fx.matchId)}">${ICONS.chart} Detalles</button>` : ''}
          ${!finished && !fx.matchId && !fx.isBye ? `<button class="icon-btn" data-del-fixture="${esc(comp.id)}:${esc(fx.id)}" title="Quitar cruce" style="width:34px;height:34px">${ICONS.trash}</button>` : ''}
        </div>
      </div>`;
      })
      .join('');
  });
  return html;
}

function renderCourtsSelectOptionsHtml(selectedCourts: number): string {
  const options: string[] = [];
  for (let n = MIN_COMP_COURTS; n <= MAX_COMP_COURTS; n++) {
    options.push(`<option value="${n}" ${selectedCourts === n ? 'selected' : ''}>${n} ${n === 1 ? 'cancha' : 'canchas'}</option>`);
  }
  return options.join('');
}

function renderFixturesPanelHtml(comp: Competition): string {
  const fixtures = comp.fixtures || [];
  const playoffFx = fixtures.filter((f) => f.phase === 'playoff');
  const nonPlayoffFx = fixtures.filter((f) => f.phase !== 'playoff');
  const parts = comp.participants || [];
  const finished = isCompFinished(comp);
  const courts = getCompCourtsCount(comp);
  const isSocial = isSocialDrawComp(comp);
  const nextRoundNum = fixtures.reduce((mx, f) => Math.max(mx, f.roundIdx), -1) + 2;

  let controlsCardHtml = '';
  if (finished) {
    controlsCardHtml = `
      <div class="card" style="margin-bottom:14px">
        <div style="display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap">
          <div>
            <h3 style="margin-bottom:4px">🏁 El torneo terminó</h3>
            <small class="muted">Los sorteos están cerrados y no se generan más encuentros.</small>
          </div>
          <button class="btn sm" data-act="reopen-comp" data-comp="${esc(comp.id)}">🔓 Reabrir Torneo</button>
        </div>
      </div>`;
  } else if (isSocial) {
    const activePlayers = parts.filter((p) => p.type === 'player' && !p.paused && (p.name || '').trim());
    const needPlayers = activePlayers.length < 4;
    const courtsUsed = Math.min(courts, Math.floor(activePlayers.length / 4));
    const restingCount = Math.max(0, activePlayers.length - courtsUsed * 4);
    const cycleRounds = getSocialCycleRoundCount(activePlayers.length, courts);

    controlsCardHtml = `
      <div class="card" style="margin-bottom:14px">
        <div class="draw-hdr-row">
          <h3>🎲 Sorteo Social · Parejas y Canchas</h3>
          <label class="draw-courts-ctl">
            <span>Canchas:</span>
            <select class="inp" data-set-comp-courts="${esc(comp.id)}">${renderCourtsSelectOptionsHtml(courts)}</select>
          </label>
        </div>
        <div class="draw-summary-bar">
          ${
            needPlayers
              ? `Agregá al menos <b>4 jugadores activos</b> en «Inscriptos» para empezar a sortear parejas.`
              : `<b>${activePlayers.length}</b> jugadores activos · <b>${courtsUsed}</b> ${courtsUsed === 1 ? 'cancha en uso' : 'canchas en uso'} → <b>${courtsUsed}</b> ${courtsUsed === 1 ? 'partido' : 'partidos'} por ronda${restingCount ? ` (<b>${restingCount}</b> descansan por rotación)` : ' (juegan todos)'}.`
          }
        </div>
        <div class="btn-row">
          <button class="btn primary sm" data-act="gen-social-round" data-comp="${esc(comp.id)}" ${needPlayers ? 'disabled' : ''}>🎲 Sortear Ronda ${nextRoundNum}</button>
          <button class="btn sm" data-act="gen-social-cycle" data-comp="${esc(comp.id)}" ${needPlayers ? 'disabled' : ''}>📅 Sortear Ciclo (${cycleRounds || 0} rondas)</button>
          <button class="btn sm" data-act="open-add-fixture" data-comp="${esc(comp.id)}">${ICONS.plus} Partido manual</button>
          <button class="btn sm" data-act="open-comp-quick-score" data-comp="${esc(comp.id)}">${ICONS.check} Cargar Resultado</button>
          <button class="btn finish-btn sm" data-act="finish-comp" data-comp="${esc(comp.id)}">🏁 El torneo terminó</button>
        </div>
      </div>`;
  } else {
    const activePairs = parts.filter((p) => !p.paused);
    const needParts = activePairs.length < 2;
    const isOpenPairs = comp.format === 'open';
    const formatTitle =
      comp.format === 'knockout'
        ? '🎲 Sorteo de Llaves Eliminatorias'
        : comp.format === 'groups_playoff'
          ? '🎲 Sorteo de Grupos y Playoffs'
          : isOpenPairs
            ? '🎲 Sorteo de Fechas · Parejas Fijas'
            : '🎲 Sorteo de Fixture (Todos contra Todos)';

    controlsCardHtml = `
      <div class="card" style="margin-bottom:14px">
        <div class="draw-hdr-row">
          <h3>${formatTitle}</h3>
          <label class="draw-courts-ctl">
            <span>Canchas:</span>
            <select class="inp" data-set-comp-courts="${esc(comp.id)}">${renderCourtsSelectOptionsHtml(courts)}</select>
          </label>
        </div>
        <div class="draw-summary-bar">
          ${
            needParts
              ? `Agregá al menos <b>2 parejas</b> en «Inscriptos» para sortear encuentros.`
              : `<b>${activePairs.length}</b> ${comp.rankingMode === 'individual' ? 'jugadores' : 'parejas'} (#1 a #${activePairs.length}) · <b>${courts}</b> ${courts === 1 ? 'cancha disponible' : 'canchas disponibles'}.`
          }
        </div>
        <div class="btn-row">
          ${
            comp.format === 'league_rr' || comp.format === 'league_rr2'
              ? `<button class="btn primary sm" data-act="gen-rr" data-comp="${esc(comp.id)}" ${needParts ? 'disabled' : ''}>🎲 ${fixtures.length ? 'Re-sortear Fixture' : 'Sortear Fixture al Azar'}</button>`
              : ''
          }
          ${
            comp.format === 'knockout'
              ? `<button class="btn primary sm" data-act="gen-bracket" data-comp="${esc(comp.id)}" ${needParts ? 'disabled' : ''}>🎲 ${playoffFx.length ? 'Re-sortear Llaves' : 'Sortear Llaves al Azar'}</button>`
              : ''
          }
          ${
            comp.format === 'groups_playoff'
              ? `
            <button class="btn primary sm" data-act="gen-groups" data-comp="${esc(comp.id)}" ${activePairs.length < 4 ? 'disabled' : ''}>🎲 1. Sortear Grupos y Fechas</button>
            <button class="btn sm" data-act="advance-playoffs" data-comp="${esc(comp.id)}" ${activePairs.length < 4 ? 'disabled' : ''}>${ICONS.trophy} 2. Clasificar a Llaves</button>
          `
              : ''
          }
          ${
            isOpenPairs
              ? `
            <button class="btn primary sm" data-act="gen-pairs-round" data-comp="${esc(comp.id)}" ${needParts ? 'disabled' : ''}>🎲 Sortear Fecha ${nextRoundNum}</button>
            <button class="btn sm" data-act="gen-rr" data-comp="${esc(comp.id)}" ${needParts ? 'disabled' : ''}>📅 Sortear Todos contra Todos</button>
          `
              : ''
          }
          <button class="btn sm" data-act="open-add-fixture" data-comp="${esc(comp.id)}">${ICONS.plus} Partido manual</button>
          <button class="btn sm" data-act="open-comp-quick-score" data-comp="${esc(comp.id)}">${ICONS.check} Cargar Resultado</button>
          <button class="btn finish-btn sm" data-act="finish-comp" data-comp="${esc(comp.id)}">🏁 El torneo terminó</button>
        </div>
      </div>`;
  }

  return `
    ${controlsCardHtml}
    ${playoffFx.length ? `<div class="sec-t">Cuadro Eliminatorio (Playoffs)</div>${renderBracketHtml(comp)}` : ''}
    ${renderFixtureListHtml(comp, nonPlayoffFx, comp.format === 'groups_playoff' ? 'Fase de Grupos' : isSocial ? 'Rondas Sorteadas' : 'Fixture / Fechas')}
    ${
      !fixtures.length
        ? `<div class="empty">${ICONS.calendar}<br>${
            finished
              ? 'Este torneo terminó sin cruces sorteados.'
              : isSocial
                ? 'Todavía no sorteaste ninguna ronda.<br>Cargá los jugadores en «Inscriptos» y tocá «Sortear Ronda 1» arriba.'
                : 'Todavía no hay cruces sorteados.<br>Tocá el botón de sorteo automático arriba o agregá un partido manual.'
          }</div>`
        : ''
    }
  `;
}

export function renderCompDetail(): string {
  const { ui, competitionsList, prefs } = store;
  const comp = getCompById(ui.compId) || competitionsList[0];
  if (!comp) {
    return `
    <div class="page">
      <div class="empty">${ICONS.award}<br>Competencia no encontrada.<br><br><button class="btn" data-nav="competitions">Volver a Ligas y Torneos</button></div>
    </div>${renderTabbar('competitions')}`;
  }
  ui.compId = comp.id;
  const isPP = isProyectoPadelComp(comp);
  const finished = isCompFinished(comp);
  const courts = getCompCourtsCount(comp);
  const isSocial = isSocialDrawComp(comp);
  const fixtures = comp.fixtures || [];
  const tab = ui.compTab || 'standings';
  const sc = getCompetitionScoringConfig(comp);
  const parts = comp.participants || [];
  const matches = getCompetitionMatches(comp, true);

  const entityMode = comp.rankingMode === 'both' ? ui.playerEntityMode || 'pairs' : comp.rankingMode || 'pairs';
  const sortKey = getEffectiveSortKey(comp, comp.id);
  const sortOpts = { tiebreakMode: isPP ? 'games' : 'sets' };
  const rawStandings = computeScopeStandings(getCompetitionMatches(comp, false), {
    ...sc,
    entityMode,
    seedParticipants: parts
  });
  const players = assignPlayerRanks(sortStandingsRows(rawStandings, sortKey, sortOpts), sortKey, sortOpts);
  const rCtx: RankingContext = {
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

  const nextRoundNum = fixtures.reduce((mx, f) => Math.max(mx, f.roundIdx), -1) + 2;
  const activePlayerCount = parts.filter((p) => p.type === 'player' && !p.paused).length;
  const leader = players[0];

  let bodyHtml = '';

  if (tab === 'standings') {
    const letters = Array.from(new Set(parts.map((p) => p.group).filter((g): g is string => Boolean(g)))).sort();
    const groupsHtml =
      comp.format === 'groups_playoff' && letters.length
        ? letters
            .map((g) => {
              const gRows = assignPlayerRanks(getGroupStandingsForComp(comp, g), 'pts');
              return renderStandingsSectionHtml(gRows, rCtx, {
                tableTitle: `Grupo ${g} (Clasifican top ${comp.advancePerGroup || 2})`,
                qualCount: Number(comp.advancePerGroup) || 2,
                compactOnly: true
              });
            })
            .join('')
        : '';

    bodyHtml = `
      ${
        comp.rankingMode === 'both'
          ? `
        <div class="seg" style="margin-bottom:12px">
          <button class="${entityMode === 'pairs' ? 'on' : ''}" data-set-pentity="pairs">👥 Por Parejas</button>
          <button class="${entityMode === 'individual' ? 'on' : ''}" data-set-pentity="individual">👤 Individual</button>
        </div>
      `
          : ''
      }
      ${renderSortBarHtml(sortKey, isPP)}
      ${groupsHtml}
      ${renderStandingsSectionHtml(players, rCtx, {
        tableTitle: isPP
          ? 'Tabla PRO PÁDEL · ELO Principal'
          : comp.format === 'groups_playoff'
            ? 'Ranking General + ELO del Torneo'
            : 'Tabla de Posiciones + ELO',
        emptyText: isPP
          ? 'Agregá jugadores en «Inscriptos», sorteá una ronda o tocá «Cargar Resultado Final».'
          : 'Inscribí participantes o jugá un partido en esta competencia para ver la tabla.'
      })}
      ${
        players.length
          ? `
        <div class="btn-row" style="margin-top:12px">
          <button class="btn primary big" data-act="share-comp-rank">${ICONS.share} Compartir Ranking</button>
          <button class="btn big" data-act="export-comp-rank">${ICONS.img} Descargar Imagen HD</button>
        </div>`
          : ''
      }
    `;
  } else if (tab === 'fixtures') {
    bodyHtml = renderFixturesPanelHtml(comp);
  } else if (tab === 'matches') {
    bodyHtml = `
      ${
        !finished
          ? `
        <div class="btn-row" style="margin-bottom:14px">
          ${
            isPP
              ? `<button class="btn primary" data-act="open-comp-quick-score" data-comp="${esc(comp.id)}">${ICONS.check} Cargar Resultado Final</button>`
              : `<button class="btn primary" data-play-in-comp="${esc(comp.id)}">${ICONS.play} Jugar en vivo</button>
                 <button class="btn" data-act="open-comp-quick-score" data-comp="${esc(comp.id)}">${ICONS.check} Cargar Sets / Games</button>`
          }
        </div>
      `
          : ''
      }
      ${matches.length ? matches.map(renderMatchCard).join('') : `<div class="empty">${ICONS.ball}<br>Aún no se registraron partidos en este torneo.</div>`}
    `;
  } else if (tab === 'participants') {
    const isIndOnly = comp.rankingMode === 'individual';
    const gLetters = ['A', 'B', 'C', 'D'].slice(0, Math.max(2, Number(comp.numGroups) || 2));
    const known = getKnownPlayerNames();
    const datalist = `<datalist id="known-players">${known.map((n) => `<option value="${esc(n)}">`).join('')}</datalist>`;

    bodyHtml = `
      ${datalist}
      ${
        finished
          ? `
        <div class="card" style="margin-bottom:14px">
          <div style="display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap">
            <div>
              <h3 style="margin-bottom:4px">🏁 Lista de inscriptos cerrada</h3>
              <small class="muted">El torneo finalizó. Reabrilo si necesitás modificar jugadores o parejas.</small>
            </div>
            <button class="btn sm" data-act="reopen-comp" data-comp="${esc(comp.id)}">🔓 Reabrir Torneo</button>
          </div>
        </div>
      `
          : `
        <div class="card">
          <h3>Inscribir ${isIndOnly ? 'Jugador' : 'Pareja / Jugador'}</h3>
          ${
            isIndOnly
              ? `
            <div class="row wrap">
              <div class="field" style="flex:1 1 200px">
                <label>Nombre del Jugador</label>
                <input class="inp" id="part-ind-name" list="known-players" data-enter-add-part="${esc(comp.id)}" placeholder="Ej: Matías (Enter agrega)">
              </div>
              ${
                comp.format === 'groups_playoff'
                  ? `
                <div class="field" style="flex:0 0 110px">
                  <label>Grupo</label>
                  <select class="inp" id="part-group">
                    <option value="">Auto</option>
                    ${gLetters.map((g) => `<option value="${g}">Grupo ${g}</option>`).join('')}
                  </select>
                </div>`
                  : ''
              }
            </div>
          `
              : `
            <div class="row wrap">
              <div class="field">
                <label>Drive (Derecha)</label>
                <input class="inp" id="part-p0" list="known-players" placeholder="Jugador 1">
              </div>
              <div class="field">
                <label>Revés (Izquierda)</label>
                <input class="inp" id="part-p1" list="known-players" data-enter-add-part="${esc(comp.id)}" placeholder="Jugador 2">
              </div>
              ${
                comp.format === 'groups_playoff'
                  ? `
                <div class="field" style="flex:0 0 100px">
                  <label>Grupo</label>
                  <select class="inp" id="part-group">
                    <option value="">Auto</option>
                    ${gLetters.map((g) => `<option value="${g}">Grupo ${g}</option>`).join('')}
                  </select>
                </div>`
                  : ''
              }
            </div>
          `
          }
          <div class="field" style="margin-top:8px">
            <label>Color identificatorio</label>
            <select class="inp" id="part-color">
              ${COLORS.map((c) => `<option value="${c.c}">${esc(c.n)}</option>`).join('')}
            </select>
          </div>
          <button class="btn primary block" style="margin-top:12px" data-act="add-part" data-comp="${esc(comp.id)}">${ICONS.plus} Agregar Inscripto</button>
          ${
            isIndOnly
              ? `
            <details class="batch-part-box">
              <summary>⚡ Carga rápida de varios jugadores (pegar lista)</summary>
              <div style="margin-top:8px">
                <textarea class="inp" id="part-batch-names" rows="3" placeholder="Ej: Walter, Mati, Lucía, Juan, Marcos, Noelia (separados por coma o uno por línea)"></textarea>
                <button class="btn sm block" style="margin-top:8px" data-act="add-part-batch" data-comp="${esc(comp.id)}">${ICONS.plus} Cargar Lista Completa</button>
              </div>
            </details>
          `
              : ''
          }
        </div>
      `
      }

      <div class="sec-t">Lista de Inscriptos (${parts.length})</div>
      ${
        parts.length
          ? parts
              .map((pt, idx) => {
                const label = pt.type === 'pair' ? formatPairLabel(pt.players?.[0], pt.players?.[1]) : pt.name || '';
                const subTxt =
                  pt.type === 'pair'
                    ? `Equipo #${idx + 1} · Pareja fija`
                    : `Jugador #${idx + 1}${pt.paused ? ' · En pausa (no entra al sorteo)' : ''}`;
                return `
        <div class="fx-card ${pt.paused ? 'part-paused' : ''}">
          <div style="display:flex;align-items:center;gap:10px;min-width:0;flex:1">
            <span style="width:10px;height:28px;border-radius:4px;background:${esc(pt.color || '#d4af37')};flex:none"></span>
            <div style="min-width:0">
              <b style="font-size:15px;color:var(--tx)">${idx + 1}. ${esc(label)} ${pt.paused ? `<span class="badge">Pausado</span>` : ''}</b>
              <small style="display:block;color:var(--tx2)">${subTxt}</small>
            </div>
          </div>
          <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;justify-content:flex-end">
            ${
              pt.type === 'pair'
                ? [0, 1]
                    .map((idxP) => {
                      const nm = (pt.players?.[idxP] || '').trim();
                      if (!nm) return '';
                      const shortNm = nm.split(/\s+/)[0] || nm;
                      return `<button class="pc-mini-btn" data-open-player-card="${esc(nm)}" data-pc-default-pos="${idxP === 0 ? 'Drive' : 'Revés'}" title="Crear tarjeta de ${esc(nm)}">${ICONS.idCard} ${esc(shortNm)}</button>`;
                    })
                    .join('')
                : `<button class="pc-mini-btn" data-open-player-card="${esc(pt.name || '')}" title="Crear tarjeta de ${esc(pt.name || '')}">${ICONS.idCard} Tarjeta</button>`
            }
            ${
              !finished && isSocial
                ? `<button class="btn sm" data-toggle-part-pause="${esc(comp.id)}:${esc(pt.id)}" title="${pt.paused ? 'Volver al sorteo' : 'Pausar en próximos sorteos'}">${pt.paused ? '▶ Activar' : '⏸ Pausa'}</button>`
                : ''
            }
            ${
              !finished && comp.format === 'groups_playoff'
                ? `
              <select class="inp" style="width:auto;min-height:34px;padding:4px 8px;font-size:12px" data-set-part-group="${esc(comp.id)}:${esc(pt.id)}">
                <option value="">Auto</option>
                ${gLetters.map((g) => `<option value="${g}" ${pt.group === g ? 'selected' : ''}>Grupo ${g}</option>`).join('')}
              </select>
            `
                : ''
            }
            ${!finished ? `<button class="icon-btn" data-del-part="${esc(comp.id)}:${esc(pt.id)}" title="Quitar inscripto" style="width:36px;height:36px">${ICONS.trash}</button>` : ''}
          </div>
        </div>`;
              })
              .join('')
          : `<div class="empty">${ICONS.users}<br>Todavía no hay inscriptos. Agregá parejas o jugadores arriba.</div>`
      }
    `;
  }

  return `
  <div class="page">
    <div class="page-h">
      <div class="page-h-top">
        <button class="icon-btn" data-nav="competitions" title="Volver">${ICONS.back}</button>
        <h1>${esc(comp.name)}</h1>
      </div>
      <div class="page-h-acts">
        <button class="icon-btn" data-open-comp-sync="${esc(comp.id)}" title="Sincronizar varios dispositivos (QR / Link)">${ICONS.qr}</button>
        <button class="icon-btn" data-edit-comp="${esc(comp.id)}" title="Editar">${ICONS.edit}</button>
        ${
          !finished
            ? isPP
              ? `<button class="icon-btn" data-act="open-comp-quick-score" data-comp="${esc(comp.id)}" title="Cargar resultado rápido">${ICONS.plus}</button>`
              : `<button class="icon-btn" data-play-in-comp="${esc(comp.id)}" title="Jugar partido aquí">${ICONS.play}</button>`
            : ''
        }
        <button class="icon-btn" data-del-comp="${esc(comp.id)}" title="Eliminar">${ICONS.trash}</button>
      </div>
    </div>

    <div class="comp-pills" style="justify-content:center;margin-bottom:10px">
      <span class="badge ${isPP ? 'pp' : comp.kind === 'league' ? 'league' : 'tourn'}">${isPP ? '⚡ PRO PÁDEL' : comp.kind === 'league' ? '🏅 Liga' : '🏆 Torneo'}</span>
      ${!isPP ? `<span class="badge">${esc(getCompFormatLabel(comp))}</span>` : `<span class="badge">👤 Individual · Parejas Rotativas</span>`}
      <span class="badge court">🏟️ ${courts} ${courts === 1 ? 'cancha' : 'canchas'}</span>
      ${finished ? `<span class="badge done">🏁 Finalizado</span>` : ''}
      <span class="badge">${esc(getCompScoringSummaryLabel(comp, sc, true))}</span>
      ${comp.syncCode ? `<span class="badge sync">📡 Sala #${esc(comp.syncCode)}</span>` : ''}
    </div>

    ${
      finished
        ? `
      <div class="comp-finished-banner">
        <div style="min-width:0;flex:1">
          <b>🏁 Torneo Terminado</b>
          <small>No se generan nuevos sorteos ni cruces.${leader && leader.matches > 0 ? ` Líder final: ${esc(leader.name)} (${isPP ? `${leader.elo} ELO` : `${leader.pts} pts`}).` : ''}</small>
        </div>
        <button class="btn sm" data-act="reopen-comp" data-comp="${esc(comp.id)}">🔓 Reabrir Torneo</button>
      </div>
    `
        : ''
    }

    ${
      isPP && !finished
        ? `
      <div class="pp-hero-bar">
        <div style="min-width:0;flex:1">
          <b style="font-size:14px;color:var(--acc-ink);display:block">⚡ Mesa PRO PÁDEL · ELO Principal</b>
          <small style="color:var(--tx2);font-size:12px;display:block">Cargá jugadores en Inscriptos y sorteá rondas automáticas por canchas, o cargá resultados sueltos.</small>
        </div>
        <div style="display:flex;gap:6px;flex-wrap:wrap">
          ${
            activePlayerCount >= 4
              ? `<button class="btn primary sm" data-act="gen-social-round" data-comp="${esc(comp.id)}">🎲 Sortear Ronda ${nextRoundNum}</button>`
              : `<button class="btn sm" data-set-ctab="participants">👥 Cargar Jugadores</button>`
          }
          <button class="btn sm" data-act="open-comp-quick-score" data-comp="${esc(comp.id)}">${ICONS.check} Resultado</button>
          <button class="btn finish-btn sm" data-act="finish-comp" data-comp="${esc(comp.id)}">🏁 Terminó</button>
        </div>
      </div>
    `
        : ''
    }

    ${
      comp.syncCode
        ? `
      <div class="sync-bar">
        <div style="display:flex;align-items:center;gap:8px;min-width:0;flex:1">
          <span class="sync-dot ${ui.compSyncConnected[comp.syncCode] ? 'on' : ''}"></span>
          <div style="min-width:0">
            <b style="font-size:13px;color:var(--tx);display:block">📡 Sala Multi-Dispositivo #${esc(comp.syncCode)}</b>
            <small style="color:var(--tx2);font-size:11.5px;display:block">${ui.compSyncConnected[comp.syncCode] ? 'Conectado en tiempo real · Varias canchas activas' : 'Listo para recibir resultados de otras canchas'}${ui.compLastSyncAt[comp.syncCode] ? ` · Act. ${new Date(ui.compLastSyncAt[comp.syncCode]).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}` : ''}</small>
          </div>
        </div>
        <div style="display:flex;gap:6px;flex-wrap:wrap">
          <button class="btn sm" data-open-comp-sync="${esc(comp.id)}">${ICONS.qr} QR / Enlace</button>
          <button class="btn sm" data-sync-comp="${esc(comp.syncCode)}">↻ Sincronizar</button>
        </div>
      </div>
    `
        : `
      <div class="sync-bar idle">
        <div style="min-width:0;flex:1">
          <b style="font-size:13px;color:var(--tx);display:block">🏟️ ¿Se cargan resultados desde varios celulares?</b>
          <small style="color:var(--tx2);font-size:11.5px;display:block">Generá un QR o enlace para sincronizar tabla y resultados entre dispositivos.</small>
        </div>
        <button class="btn primary sm" data-open-comp-sync="${esc(comp.id)}">${ICONS.qr} Conectar dispositivos</button>
      </div>
    `
    }

    <div class="seg" style="margin-bottom:16px">
      <button class="${tab === 'standings' ? 'on' : ''}" data-set-ctab="standings">Tabla</button>
      <button class="${tab === 'fixtures' ? 'on' : ''}" data-set-ctab="fixtures">${isSocial ? 'Sorteo / Rondas' : 'Fixture / Sorteo'}</button>
      <button class="${tab === 'matches' ? 'on' : ''}" data-set-ctab="matches">Partidos (${matches.length})</button>
      <button class="${tab === 'participants' ? 'on' : ''}" data-set-ctab="participants">Inscriptos (${parts.length})</button>
    </div>

    ${bodyHtml}
    ${renderSignatureFooter()}
  </div>
  ${renderTabbar('competitions')}`;
}

export function syncQuickScoreStateFromDom(): void {
  const qs = store.ui.quickScoreState;
  if (!qs) return;
  const rInp = document.getElementById('qs-round') as HTMLInputElement | null;
  if (rInp) qs.stageLabel = rInp.value;

  const comp = qs.compId ? getCompById(qs.compId) : null;
  if (qs.mode === 'comp-adhoc' && !qs.useManualTeams) {
    const sel0 = document.getElementById('qs-sel0') as HTMLSelectElement | null;
    const sel1 = document.getElementById('qs-sel1') as HTMLSelectElement | null;
    if (sel0 && comp) {
      qs.selPartIds[0] = sel0.value;
      const t0 = participantToTeamObj((comp.participants || []).find((p) => p.id === sel0.value));
      if (t0) qs.teams[0] = { players: t0.players, color: t0.color || '#d4af37' };
    }
    if (sel1 && comp) {
      qs.selPartIds[1] = sel1.value;
      const t1 = participantToTeamObj((comp.participants || []).find((p) => p.id === sel1.value));
      if (t1) qs.teams[1] = { players: t1.players, color: t1.color || '#2f8cff' };
    }
  } else if (qs.mode === 'comp-adhoc' && qs.useManualTeams) {
    const p00 = (document.getElementById('qs-t0p0') as HTMLInputElement | null)?.value;
    const p01 = (document.getElementById('qs-t0p1') as HTMLInputElement | null)?.value;
    const p10 = (document.getElementById('qs-t1p0') as HTMLInputElement | null)?.value;
    const p11 = (document.getElementById('qs-t1p1') as HTMLInputElement | null)?.value;
    if (p00 !== undefined || p01 !== undefined) {
      qs.teams[0].players = [p00 ?? qs.teams[0].players[0], p01 ?? qs.teams[0].players[1]];
    }
    if (p10 !== undefined || p11 !== undefined) {
      qs.teams[1].players = [p10 ?? qs.teams[1].players[0], p11 ?? qs.teams[1].players[1]];
    }
  }

  for (let i = 0; i < (qs.sets?.length || 0); i++) {
    const inp0 = document.getElementById(`qs-s${i + 1}-0`) as HTMLInputElement | null;
    const inp1 = document.getElementById(`qs-s${i + 1}-1`) as HTMLInputElement | null;
    if (inp0) qs.sets[i][0] = inp0.value === '' ? null : Math.max(0, Number(inp0.value) || 0);
    if (inp1) qs.sets[i][1] = inp1.value === '' ? null : Math.max(0, Number(inp1.value) || 0);
  }
  const woEl = document.getElementById('qs-wo') as HTMLInputElement | null;
  if (woEl) qs.wo = !!woEl.checked;
  const winEl = document.getElementById('qs-winner') as HTMLSelectElement | null;
  if (winEl) qs.winner = winEl.value || 'auto';
}

export function formatQuickScorePreview(qs: QuickScoreState | null | undefined): string {
  if (!qs) return 'Tocá los games de cada set para cargar el resultado';
  const comp = qs.compId ? getCompById(qs.compId) : null;
  const isPP = isProyectoPadelComp(comp);
  const sc = getCompetitionScoringConfig(comp);
  const n0 = formatPairLabel(qs.teams[0]?.players?.[0] || 'DRIVE 1', qs.teams[0]?.players?.[1] || 'REVÉS 1');
  const n1 = formatPairLabel(qs.teams[1]?.players?.[0] || 'DRIVE 2', qs.teams[1]?.players?.[1] || 'REVÉS 2');
  if (qs.wo) {
    if (qs.winner === '0') return `✓ Victoria por W.O. para ${n0}`;
    if (qs.winner === '1') return `✓ Victoria por W.O. para ${n1}`;
    return '⚠️ Activaste W.O.: elegí qué pareja ganó abajo';
  }
  const valid = (qs.sets || []).filter((s) => s[0] !== null && s[1] !== null);
  if (!valid.length)
    return isPP
      ? 'Tocá los games finales de cada pareja (ej. 4 y 2, o 3 y 3)'
      : 'Tocá los games de cada set (0–7) para calcular el ganador';
  const scoreTxt = valid.map((s) => `${s[0]}-${s[1]}`).join(' · ');
  let w0 = 0;
  let w1 = 0;
  let g0 = 0;
  let g1 = 0;
  valid.forEach((s) => {
    const a = Number(s[0]) || 0;
    const b = Number(s[1]) || 0;
    g0 += a;
    g1 += b;
    if (a > b) w0++;
    else if (b > a) w1++;
  });
  if (isPP) {
    const gb = sc.gameBonusPts || 0;
    if (qs.winner === '0' || (qs.winner === 'auto' && w0 > w1)) {
      return `✓ Gana ${n0} (${scoreTxt}) · +${sc.winPts + g0 * gb} pts vs +${sc.lossPts + g1 * gb} pts · + ELO`;
    }
    if (qs.winner === '1' || (qs.winner === 'auto' && w1 > w0)) {
      return `✓ Gana ${n1} (${scoreTxt}) · +${sc.winPts + g1 * gb} pts vs +${sc.lossPts + g0 * gb} pts · + ELO`;
    }
    if ((qs.winner === 'draw' || qs.winner === 'auto') && g0 === g1) {
      return `🤝 Empate ${scoreTxt} · Ambos +${(sc.drawPts ?? 2) + g0 * gb} pts (${sc.drawPts ?? 2}E + ${g0}G) · Ajuste ELO`;
    }
  }
  if (qs.winner === '0') return `✓ Gana ${n0} (${scoreTxt})`;
  if (qs.winner === '1') return `✓ Gana ${n1} (${scoreTxt})`;
  if (qs.winner === 'draw' && g0 === g1) return `🤝 Empate (${scoreTxt})`;
  if (w0 > w1) return `✓ Gana ${n0} (${w0}-${w1} sets · ${scoreTxt})`;
  if (w1 > w0) return `✓ Gana ${n1} (${w1}-${w0} sets · ${scoreTxt})`;
  return `Empate ${w0}-${w1} en sets (${scoreTxt}) — Agregá otro set o elegí ganador`;
}

export function updateQuickScorePreviewDom(): void {
  const qs = store.ui.quickScoreState;
  if (!qs) return;
  syncQuickScoreStateFromDom();
  const prevEl = document.getElementById('qs-preview');
  if (prevEl) prevEl.textContent = formatQuickScorePreview(qs);
}

export function renderCompetitionModals(): string {
  const { ui, prefs } = store;
  if (!ui.compModal) return '';

  if (ui.compModal === 'daily-pts') {
    return `
    <div class="scrim" data-close-comp-modal="1">
      <div class="sheet" style="max-width:460px">
        <h2>☀️ Puntos — Partido del Día</h2>
        <p class="muted" style="margin-bottom:12px">Cada partido del día otorga puntos de tabla + ELO exclusivo (separado de Ligas y Torneos).</p>
        <div class="row wrap">
          <div class="field">
            <label>Puntos por Victoria</label>
            <input type="number" class="inp" id="dp-win" min="0" max="100" value="${Number(prefs.dailyWinPts ?? 3)}">
          </div>
          <div class="field">
            <label>Puntos por Derrota</label>
            <input type="number" class="inp" id="dp-loss" min="0" max="100" value="${Number(prefs.dailyLossPts ?? 1)}">
          </div>
        </div>
        <div class="btn-row" style="margin-top:16px">
          <button class="btn primary block" data-act="save-daily-pts">Guardar</button>
          <button class="btn block" data-close-comp-modal="1">Cancelar</button>
        </div>
      </div>
    </div>`;
  }

  if (ui.compModal === 'create' || ui.compModal === 'edit') {
    const f: Partial<CompFormState> = ui.compFormState || {};
    const isTourn = f.kind === 'tournament';
    const isPP = isTourn && f.format === 'proyecto_padel';
    const formats: Array<[string, string]> = isTourn
      ? [
          ['proyecto_padel', '⚡ PRO PÁDEL'],
          ['knockout', 'Eliminación Directa'],
          ['groups_playoff', 'Grupos + Playoffs'],
          ['open', 'Libre / Americano']
        ]
      : [
          ['league_rr', 'Todos contra Todos'],
          ['league_rr2', 'Ida y Vuelta'],
          ['open', 'Liga Libre']
        ];
    const dr = f.defaultRules || {};

    return `
    <div class="scrim" data-close-comp-modal="1">
      <div class="sheet" style="max-width:560px">
        <div class="sheet-hdr">
          <h2>${ui.compModal === 'edit' ? 'Editar' : 'Crear'} ${isTourn ? 'Torneo' : 'Liga'}</h2>
          <button type="button" class="icon-btn" data-close-comp-modal="1" title="Cerrar" style="width:36px;height:36px;border-radius:12px;font-size:15px;font-weight:700">✕</button>
        </div>

        <div class="field" style="margin-bottom:10px">
          <label>Tipo</label>
          <div class="pills">
            <button type="button" class="pill ${!isTourn ? 'on' : ''}" data-cf-kind="league">🏅 Liga</button>
            <button type="button" class="pill ${isTourn ? 'on' : ''}" data-cf-kind="tournament">🏆 Torneo</button>
          </div>
        </div>

        <div class="field" style="margin-bottom:10px">
          <label>Nombre</label>
          <input class="inp" id="cf-name" value="${esc(f.name || '')}" placeholder="${isPP ? 'Ej: Torneo PRO PÁDEL #1' : isTourn ? 'Ej: Copa Nocturna / Open SÉ' : 'Ej: Liga del Jueves / Apertura'}">
        </div>

        <div class="field" style="margin-bottom:10px">
          <label>Formato</label>
          <div class="pills">
            ${formats.map(([k, lbl]) => `<button type="button" class="pill ${f.format === k ? 'on' : ''}" data-cf-fmt="${k}">${lbl}</button>`).join('')}
          </div>
        </div>

        ${
          isPP
            ? `
          <div style="padding:10px 12px;border-radius:12px;background:rgba(212,175,55,0.10);border:1px solid rgba(212,175,55,0.32);margin-bottom:10px;font-size:12.5px;color:var(--tx2);line-height:1.4">
            <b style="color:var(--gold2);display:block;margin-bottom:2px">⚡ Modo PRO PÁDEL · ELO Principal</b>
            Carga directa de resultados finales (ej. <i>Lucía-Juan vs Marcos-Noelia 4-2</i> o empate <i>3-3</i>), sin fiscalización ni marcador punto a punto. Contabiliza ranking <b>Individual por ELO</b> y puntaje secundario por <b>Games + Bonus</b>.
          </div>
        `
            : ''
        }

        ${
          f.format === 'groups_playoff'
            ? `
          <div class="row wrap" style="margin-bottom:10px">
            <div class="field">
              <label>Cantidad de grupos</label>
              <select class="inp" id="cf-ngroups">
                ${[2, 3, 4].map((n) => `<option value="${n}" ${(Number(f.numGroups) || 2) === n ? 'selected' : ''}>${n} grupos</option>`).join('')}
              </select>
            </div>
            <div class="field">
              <label>Clasifican por grupo</label>
              <select class="inp" id="cf-adv">
                ${[1, 2, 3, 4].map((n) => `<option value="${n}" ${(Number(f.advancePerGroup) || 2) === n ? 'selected' : ''}>Top ${n}</option>`).join('')}
              </select>
            </div>
          </div>`
            : ''
        }

        <div class="field" style="margin-bottom:10px">
          <label>Cantidad de canchas disponibles (1 a 10)</label>
          <select class="inp" id="cf-courts">
            ${renderCourtsSelectOptionsHtml(Number(f.courtsCount) || 4)}
          </select>
        </div>

        ${
          !isPP
            ? `
          <div class="field" style="margin-bottom:10px">
            <label>Ranking por</label>
            <div class="pills">
              <button type="button" class="pill ${f.rankingMode === 'pairs' ? 'on' : ''}" data-cf-rmode="pairs">👥 Parejas Fijas</button>
              <button type="button" class="pill ${f.rankingMode === 'individual' ? 'on' : ''}" data-cf-rmode="individual">👤 Individual</button>
              <button type="button" class="pill ${f.rankingMode === 'both' ? 'on' : ''}" data-cf-rmode="both">🔀 Ambos</button>
            </div>
          </div>
        `
            : ''
        }

        <div class="row pts-grid" style="margin-bottom:10px">
          <div class="field">
            <label>Pts Victoria</label>
            <input type="number" class="inp" id="cf-wpts" min="0" max="50" value="${Number(f.winPts ?? 3)}">
          </div>
          ${
            isPP
              ? `
            <div class="field">
              <label>Pts Empate</label>
              <input type="number" class="inp" id="cf-dpts" min="0" max="50" value="${Number(f.drawPts ?? 2)}">
            </div>
          `
              : ''
          }
          <div class="field">
            <label>Pts Derrota</label>
            <input type="number" class="inp" id="cf-lpts" min="0" max="50" value="${Number(f.lossPts ?? 1)}">
          </div>
          ${
            isPP
              ? `
            <div class="field">
              <label>Pts / Game</label>
              <input type="number" class="inp" id="cf-gpts" min="0" max="20" value="${Number(f.gameBonusPts ?? 1)}">
            </div>
          `
              : `
            <div class="field">
              <label>Bonus / Set</label>
              <input type="number" class="inp" id="cf-spts" min="0" max="10" value="${Number(f.setBonusPts ?? 0)}">
            </div>
          `
          }
        </div>

        ${
          !isPP
            ? `
          <div class="row wrap" style="margin-bottom:14px">
            <div class="field">
              <label>Sets por defecto</label>
              <select class="inp" id="cf-sets">
                <option value="1" ${(Number(dr.totalSets) || 3) === 1 ? 'selected' : ''}>1 Set único</option>
                <option value="3" ${(Number(dr.totalSets) || 3) === 3 ? 'selected' : ''}>Al mejor de 3 sets</option>
              </select>
            </div>
            <div class="field">
              <label>En el 40-40</label>
              <select class="inp" id="cf-deuce">
                <option value="golden" ${(dr.deuceRule || 'golden') === 'golden' ? 'selected' : ''}>Punto de Oro</option>
                <option value="adv" ${dr.deuceRule === 'adv' ? 'selected' : ''}>Ventajas</option>
                <option value="star" ${dr.deuceRule === 'star' ? 'selected' : ''}>Star Point (FIP)</option>
              </select>
            </div>
          </div>
        `
            : ''
        }

        <div class="btn-row" style="margin-top:12px">
          <button class="btn primary block" data-act="save-comp-modal">${ui.compModal === 'edit' ? 'Guardar Cambios' : isPP ? 'Crear Torneo' : 'Crear y Gestionar'}</button>
          <button class="btn block" data-close-comp-modal="1">Cancelar</button>
        </div>
      </div>
    </div>`;
  }

  if (ui.compModal === 'quick-score' && (ui.quickScoreState || ui.quickScoreFixtureId)) {
    if (!ui.quickScoreState && ui.quickScoreFixtureId) {
      ui.quickScoreState = buildQuickScoreState({ mode: 'fixture', fixtureKey: ui.quickScoreFixtureId });
    }
    const qs = ui.quickScoreState!;
    const comp = qs.compId ? getCompById(qs.compId) : null;
    const isPP = isProyectoPadelComp(comp);
    const pairParts = comp ? (comp.participants || []).filter((pt) => pt.type === 'pair') : [];
    const compPool = comp ? getCompQuickPlayerPool(comp) : [];
    const compPlayerSuggestions = comp ? Array.from(new Set([...compPool, ...getKnownPlayerNames()])) : getKnownPlayerNames();
    const n0 = formatPairLabel(qs.teams[0]?.players?.[0] || 'DRIVE 1', qs.teams[0]?.players?.[1] || 'REVÉS 1');
    const n1 = formatPairLabel(qs.teams[1]?.players?.[0] || 'DRIVE 2', qs.teams[1]?.players?.[1] || 'REVÉS 2');
    const titleSuffix =
      qs.mode === 'fixture' ? ` (${esc(qs.stageLabel || 'Cruce')})` : comp ? ` · ${esc(comp.name)}` : ' · Partido del Día';
    const showQuickTen = (sIdx: number) => sIdx >= 2;
    const assignedKeys = new Set(
      [qs.teams[0]?.players?.[0], qs.teams[0]?.players?.[1], qs.teams[1]?.players?.[0], qs.teams[1]?.players?.[1]]
        .map((x) => String(x || '').trim().toUpperCase())
        .filter(Boolean)
    );
    const slotCls = (idx: number) => `inp qs-slot-inp ${qs.activeSlot === idx ? 'active-slot' : ''}`;

    return `
    <div class="scrim" data-close-comp-modal="1">
      <div class="sheet" style="max-width:520px">
        ${qs.mode === 'comp-adhoc' ? `<datalist id="qs-known-players">${compPlayerSuggestions.map((nm) => `<option value="${esc(nm)}">`).join('')}</datalist>` : ''}
        <div class="sheet-hdr">
          <h2 style="font-size:21px">⚡ Cargar Resultado${titleSuffix}</h2>
          <button class="icon-btn" data-close-comp-modal="1" title="Cerrar" style="width:36px;height:36px;border-radius:12px;font-size:15px;font-weight:700">✕</button>
        </div>

        ${
          qs.mode === 'comp-adhoc'
            ? `
          <div class="field" style="margin-bottom:10px">
            <label>${isPP ? 'Turno / Ronda (opcional)' : 'Etapa / Ronda (opcional)'}</label>
            <input class="inp" id="qs-round" value="${esc(qs.stageLabel || '')}" placeholder="${isPP ? 'Ej: Turno 1 / Cancha 2 (opcional)' : 'Ej: Fecha 2 / Grupo A / Libre'}">
          </div>
          ${
            pairParts.length >= 2 && !qs.useManualTeams
              ? `
            <div class="row wrap" style="margin-bottom:8px">
              <div class="field">
                <label>Pareja 1</label>
                <select class="inp" id="qs-sel0">
                  ${pairParts.map((pt) => `<option value="${esc(pt.id)}" ${qs.selPartIds?.[0] === pt.id ? 'selected' : ''}>${esc(formatPairLabel(pt.players?.[0], pt.players?.[1]))}</option>`).join('')}
                </select>
              </div>
              <div class="field">
                <label>Pareja 2</label>
                <select class="inp" id="qs-sel1">
                  ${pairParts.map((pt) => `<option value="${esc(pt.id)}" ${qs.selPartIds?.[1] === pt.id ? 'selected' : ''}>${esc(formatPairLabel(pt.players?.[0], pt.players?.[1]))}</option>`).join('')}
                </select>
              </div>
            </div>
            <div style="margin-bottom:12px">
              <button type="button" class="pill sm" data-act="qs-toggle-manual-teams">✏️ Escribir nombres / Armar parejas libres</button>
            </div>
          `
              : `
            <div class="row wrap" style="margin-bottom:8px">
              <div class="field"><label>Pareja 1 · Jugador 1</label><input class="${slotCls(0)}" id="qs-t0p0" data-qs-slot="0" list="qs-known-players" value="${esc(qs.teams[0].players[0] || '')}" placeholder="Ej: Lucía"></div>
              <div class="field"><label>Pareja 1 · Jugador 2</label><input class="${slotCls(1)}" id="qs-t0p1" data-qs-slot="1" list="qs-known-players" value="${esc(qs.teams[0].players[1] || '')}" placeholder="Ej: Juan"></div>
            </div>
            <div class="row wrap" style="margin-bottom:8px">
              <div class="field"><label>Pareja 2 · Jugador 1</label><input class="${slotCls(2)}" id="qs-t1p0" data-qs-slot="2" list="qs-known-players" value="${esc(qs.teams[1].players[0] || '')}" placeholder="Ej: Marcos"></div>
              <div class="field"><label>Pareja 2 · Jugador 2</label><input class="${slotCls(3)}" id="qs-t1p1" data-qs-slot="3" list="qs-known-players" value="${esc(qs.teams[1].players[1] || '')}" placeholder="Ej: Noelia"></div>
            </div>
            ${
              compPool.length
                ? `
              <div style="margin-bottom:10px">
                <div style="display:flex;align-items:center;justify-content:space-between;gap:6px;margin-bottom:5px">
                  <small class="muted" style="font-size:11px">Tocá jugadores para llenar rápido (casilla ${(qs.activeSlot || 0) + 1}/4):</small>
                  <button type="button" class="pill sm" data-act="qs-clear-players" style="min-height:24px;padding:2px 8px;font-size:11px">Limpiar nombres</button>
                </div>
                <div class="qs-player-chips">
                  ${compPool.map((nm) => `<button type="button" class="qs-p-chip ${assignedKeys.has(nm.toUpperCase()) ? 'used' : ''}" data-qs-pick-player="${esc(nm)}">+ ${esc(nm)}</button>`).join('')}
                </div>
              </div>
            `
                : `
              <div style="display:flex;justify-content:flex-end;margin-bottom:8px">
                <button type="button" class="pill sm" data-act="qs-clear-players" style="min-height:24px;padding:2px 8px;font-size:11px">Limpiar nombres</button>
              </div>
            `
            }
            ${pairParts.length >= 2 ? `<div style="margin-bottom:12px"><button type="button" class="pill sm" data-act="qs-toggle-manual-teams">👥 Elegir parejas inscriptas</button></div>` : ''}
          `
          }
        `
            : `
          <p class="muted" style="margin-bottom:12px"><b>${esc(n0)}</b> vs <b>${esc(n1)}</b> · Tocá los games de cada set sin anotar punto por punto.</p>
        `
        }

        ${qs.sets
          .map((sVals, sIdx) => {
            const gChoices = showQuickTen(sIdx) ? [0, 1, 2, 3, 4, 5, 6, 7, 10] : [0, 1, 2, 3, 4, 5, 6, 7];
            const isStbHint = sIdx === 2 && qs.hasSuperTbFinal;
            return `
          <div class="qs-set-card">
            <div class="qs-set-hdr">
              <b>${isPP ? 'Marcador Final (Games)' : `Set ${sIdx + 1}${isStbHint ? ' / Súper TB' : sIdx >= 2 ? ' (Opcional)' : ''}`}</b>
              <button type="button" class="pill sm" data-qs-clear-set="${sIdx}" style="min-height:26px;padding:2px 8px;font-size:11px">Limpiar</button>
            </div>
            ${[0, 1]
              .map((side) => {
                const tCol = qs.teams[side]?.color || (side === 0 ? '#d4af37' : '#2f8cff');
                const tName = side === 0 ? n0 : n1;
                const val = sVals[side];
                const strVal = val === null || val === undefined ? '' : String(val);
                return `
              <div class="qs-team-row">
                <div class="qs-team-top">
                  <span class="qs-team-lbl" style="--c:${esc(tCol)}"><span class="dot"></span>${esc(tName)}</span>
                  <input type="number" class="inp qs-num" id="qs-s${sIdx + 1}-${side}" min="0" max="30" value="${esc(strVal)}" placeholder="–">
                </div>
                <div class="qs-pills" data-qs-row="${sIdx}:${side}">
                  ${gChoices.map((g) => `<button type="button" class="qs-g-pill ${val === g ? 'on' : ''}" style="--c:${esc(tCol)};--f:${fgFor(tCol)}" data-qs-pick="${sIdx}:${side}:${g}">${g}</button>`).join('')}
                </div>
              </div>`;
              })
              .join('')}
          </div>`;
          })
          .join('')}

        ${
          !isPP && qs.sets.length < 5
            ? `
          <button type="button" class="btn sm block" data-act="qs-add-set" style="margin-bottom:8px">
            ${ICONS.plus} Agregar Set ${qs.sets.length + 1}${qs.sets.length === 2 ? ' / Súper TB' : ''}
          </button>`
            : ''
        }

        <div class="qs-preview" id="qs-preview">${esc(formatQuickScorePreview(qs))}</div>

        ${
          !isPP
            ? `
          <div class="tog" style="border:none;padding:4px 0">
            <div><b>Victoria por Walkover (W.O.)</b><small>Otorga puntos de tabla y avanza sin alterar ELO</small></div>
            <label class="sw"><input type="checkbox" id="qs-wo" ${qs.wo ? 'checked' : ''}><span></span></label>
          </div>
        `
            : ''
        }

        <div class="field" style="margin:8px 0 14px">
          <label>${isPP ? 'Definición del resultado (auto detecta empate)' : 'Ganador (si empatan sets o en W.O.)'}</label>
          <select class="inp" id="qs-winner">
            <option value="auto" ${qs.winner === 'auto' ? 'selected' : ''}>${isPP ? 'Automático por marcador (o Empate)' : 'Automático por sets'}</option>
            <option value="0" ${qs.winner === '0' ? 'selected' : ''}>Gana ${esc(n0)}</option>
            <option value="1" ${qs.winner === '1' ? 'selected' : ''}>Gana ${esc(n1)}</option>
            ${isPP ? `<option value="draw" ${qs.winner === 'draw' ? 'selected' : ''}>🤝 Empate oficial</option>` : ''}
          </select>
        </div>

        <div class="btn-row">
          <button class="btn primary block" data-act="save-quick-score" data-target="${esc(qs.fixtureKey || ui.quickScoreFixtureId || '')}">${ICONS.check} Guardar Resultado</button>
          <button class="btn block" data-close-comp-modal="1">Cancelar</button>
        </div>
      </div>
    </div>`;
  }

  if (ui.compModal === 'add-fixture') {
    const comp = getCompById(ui.compId);
    if (!comp) return '';
    const pairParts = (comp.participants || []).filter((p) => p.type === 'pair');
    const maxCourts = Math.max(MAX_COMP_COURTS, getCompCourtsCount(comp));
    return `
    <div class="scrim" data-close-comp-modal="1">
      <div class="sheet" style="max-width:500px">
        <h2>Agregar Cruce Manual</h2>
        <div class="row wrap" style="margin-bottom:10px">
          <div class="field" style="flex:1 1 180px">
            <label>Etapa / Fecha</label>
            <input class="inp" id="af-round" value="Fecha 1" placeholder="Ej: Fecha 1 / Semifinal">
          </div>
          <div class="field" style="flex:0 0 140px">
            <label>Cancha</label>
            <select class="inp" id="af-court">
              <option value="">Sin asignar</option>
              ${Array.from({ length: maxCourts }, (_, i) => `<option value="${i + 1}">Cancha ${i + 1}</option>`).join('')}
            </select>
          </div>
        </div>
        ${
          pairParts.length >= 2
            ? `
          <div class="field" style="margin-bottom:10px">
            <label>Pareja 1 (inscripta)</label>
            <select class="inp" id="af-sel0">
              ${pairParts.map((pt) => `<option value="${esc(pt.id)}">${esc(formatPairLabel(pt.players?.[0], pt.players?.[1]))}</option>`).join('')}
            </select>
          </div>
          <div class="field" style="margin-bottom:14px">
            <label>Pareja 2 (inscripta)</label>
            <select class="inp" id="af-sel1">
              ${pairParts.map((pt, idx) => `<option value="${esc(pt.id)}" ${idx === 1 ? 'selected' : ''}>${esc(formatPairLabel(pt.players?.[0], pt.players?.[1]))}</option>`).join('')}
            </select>
          </div>
        `
            : `
          <div class="row wrap" style="margin-bottom:10px">
            <div class="field"><label>Pareja 1 · Drive</label><input class="inp" id="af-t0p0" placeholder="Drive 1"></div>
            <div class="field"><label>Pareja 1 · Revés</label><input class="inp" id="af-t0p1" placeholder="Revés 1"></div>
          </div>
          <div class="row wrap" style="margin-bottom:14px">
            <div class="field"><label>Pareja 2 · Drive</label><input class="inp" id="af-t1p0" placeholder="Drive 2"></div>
            <div class="field"><label>Pareja 2 · Revés</label><input class="inp" id="af-t1p1" placeholder="Revés 2"></div>
          </div>
        `
        }
        <div class="btn-row">
          <button class="btn primary block" data-act="save-manual-fixture" data-comp="${esc(comp.id)}">Agregar Cruce</button>
          <button class="btn block" data-close-comp-modal="1">Cancelar</button>
        </div>
      </div>
    </div>`;
  }

  if (ui.compModal === 'sync-qr') {
    const comp = getCompById(ui.compId);
    if (!comp) return '';
    const syncCode = ensureCompSyncCode(comp);
    const shareUrl = getCompShareUrl(comp, false);
    const kindWord = comp.kind === 'tournament' ? 'Torneo' : 'Liga';

    return `
    <div class="scrim" data-close-comp-modal="1">
      <div class="sheet" style="max-width:480px">
        <div class="sheet-hdr">
          <h2>📡 Conectar Dispositivos</h2>
          <button class="icon-btn" data-close-comp-modal="1" title="Cerrar" style="width:36px;height:36px;border-radius:12px;font-size:15px;font-weight:700">✕</button>
        </div>
        <p class="muted" style="margin-bottom:12px">Todos los celulares que escaneen este QR o abran el enlace se conectan al mismo <b>${kindWord}: ${esc(comp.name)}</b> y suman sus resultados automáticamente al finalizar cada partido.</p>

        <div style="text-align:center;margin:10px 0 14px">
          <div style="display:inline-block;padding:12px;background:#fff;border-radius:16px;border:3px solid var(--gold);box-shadow:0 8px 28px rgba(0,0,0,.45)">
            <canvas id="comp-sync-qr-canvas" width="230" height="230" style="display:block;border-radius:6px"></canvas>
          </div>
          <div style="margin-top:10px">
            <span class="muted" style="font-size:11.5px;display:block;letter-spacing:.8px;text-transform:uppercase">Código de Sala</span>
            <b style="font-family:var(--fd);font-size:28px;letter-spacing:4px;color:var(--gold)">#${esc(syncCode)}</b>
          </div>
        </div>

        <div class="field" style="margin-bottom:10px">
          <label>Enlace directo de invitación</label>
          <div style="display:flex;gap:6px">
            <input class="inp" id="sync-comp-url-inp" readonly value="${esc(shareUrl)}" style="font-size:12px">
            <button class="btn primary sm" data-copy-input="sync-comp-url-inp" style="flex:none">${ICONS.copy} Copiar</button>
          </div>
        </div>

        <div class="btn-row" style="margin-top:10px">
          <button class="btn primary block" data-act="share-comp-invite">${ICONS.share} Enviar Enlace (WhatsApp)</button>
          <button class="btn block" data-act="dl-comp-qr">${ICONS.dl} Descargar QR HD</button>
        </div>
        <div class="btn-row" style="margin-top:8px">
          <button class="btn sm block" data-act="republish-comp-sync">↻ Actualizar datos en la nube</button>
          <button class="btn sm block" data-close-comp-modal="1">Cerrar</button>
        </div>

        <div style="margin-top:14px;padding:10px 12px;border-radius:10px;background:rgba(255,255,255,.03);border:1px solid var(--line);font-size:12px;color:var(--tx2);line-height:1.45">
          <b style="color:var(--tx);display:block;margin-bottom:4px">¿Cómo se usa en varias canchas?</b>
          1. Cada árbitro o jugador escanea este QR (o entra en <i>Ligas y Torneos → Unirse</i> con el código <b>#${esc(syncCode)}</b>).<br>
          2. Cada cancha inicia su cruce o partido desde esta competencia.<br>
          3. Al terminar cada partido, los puntos, ELO, fixture y llaves se fusionan en todos los dispositivos conectados.
        </div>
      </div>
    </div>`;
  }

  if (ui.compModal === 'join-comp') {
    return `
    <div class="scrim" data-close-comp-modal="1">
      <div class="sheet" style="max-width:440px">
        <div class="sheet-hdr">
          <h2>📲 Unirse a Liga o Torneo</h2>
          <button class="icon-btn" data-close-comp-modal="1" title="Cerrar" style="width:36px;height:36px;border-radius:12px;font-size:15px;font-weight:700">✕</button>
        </div>
        <p class="muted" style="margin-bottom:14px">Ingresá el código de sala (6 letras/números) o pegá el enlace compartido por el organizador para conectarte desde este dispositivo.</p>
        <div class="field" style="margin-bottom:14px">
          <label>Código de Sala o Enlace</label>
          <input class="inp" id="join-comp-code" placeholder="Ej: 7K4M9P o pegá el link #c=...">
        </div>
        <div class="btn-row">
          <button class="btn primary block" data-act="submit-join-comp">Conectarme ahora</button>
          <button class="btn block" data-close-comp-modal="1">Cancelar</button>
        </div>
      </div>
    </div>`;
  }

  return '';
}
