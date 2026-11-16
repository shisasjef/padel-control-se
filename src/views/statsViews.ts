import { ICONS, renderSignatureFooter } from '../core/constants';
import { esc, fgFor, fmtDateLong, fmtDurationLong, getMatchCompId, pct, playerLabel, teamLabel } from '../core/utils';
import { getEloLevel } from '../engines/eloEngine';
import { computeStats } from '../engines/statsEngine';
import {
  calculateMatchEloPreview,
  getCompById,
  getCompetitionScoringConfig,
  store
} from '../state/store';
import type { Match } from '../types';
import { getMatchContextBadgeHtml, renderTabbar } from './sharedUi';

export function getStatsTargetMatch(): Match | null {
  const { ui, activeMatch, historyList } = store;
  if (ui.statsId === 'live' && ui.liveMatch) return ui.liveMatch;
  if (ui.statsId === 'shared' && ui.sharedMatch) return ui.sharedMatch;
  if (ui.statsId === 'active' && activeMatch) return activeMatch;
  const found = historyList.find((x) => x.id === ui.statsId);
  if (found) return found;
  if (activeMatch && activeMatch.id === ui.statsId) return activeMatch;
  if (ui.liveMatch && ui.liveMatch.id === ui.statsId) return ui.liveMatch;
  return historyList[0] || activeMatch || ui.liveMatch || null;
}

function renderComparisonBar(
  label: string,
  val0: string | number,
  val1: string | number,
  num0: number,
  num1: number,
  c0: string,
  c1: string
): string {
  const n0 = Number(num0) || 0;
  const n1 = Number(num1) || 0;
  const sum = n0 + n1;
  const p0 = sum > 0 ? Math.round((n0 * 100) / sum) : n0 === n1 && n0 > 0 ? 50 : 0;
  const p1 = sum > 0 ? 100 - p0 : 0;
  return `
  <div class="cmp">
    <div class="cmp-l">${esc(label)}</div>
    <div class="cmp-r">
      <b>${esc(val0)}</b>
      <div class="cbar">
        ${
          sum > 0
            ? `
          <i style="width:${p0}%;background:${esc(c0)}"></i>
          <i style="width:${p1}%;background:${esc(c1)}"></i>
        `
            : `<i style="width:100%;background:transparent"></i>`
        }
      </div>
      <b>${esc(val1)}</b>
    </div>
  </div>`;
}

function renderMomentumSVG(momentum: number[], setBoundaries: number[], c0: string, c1: string): string {
  if (!momentum || momentum.length < 2) {
    return `<div class="muted" style="padding:18px 0;text-align:center">Se mostrará el gráfico cuando haya puntos jugados.</div>`;
  }
  const N = momentum.length - 1;
  const W = 720;
  const H = 180;
  const padX = 12;
  const padY = 18;
  const plotW = W - padX * 2;
  const plotH = H - padY * 2;
  const maxAbs = Math.max(4, ...momentum.map((v) => Math.abs(v)));
  const zeroY = padY + plotH / 2;

  const xAt = (i: number) => padX + (N > 0 ? (i / N) * plotW : 0);
  const yAt = (v: number) => zeroY - (v / maxAbs) * (plotH / 2);

  let dLine = '';
  momentum.forEach((v, i) => {
    const x = xAt(i).toFixed(1);
    const y = yAt(v).toFixed(1);
    dLine += i === 0 ? `M${x},${y}` : ` L${x},${y}`;
  });
  const dArea = `${dLine} L${xAt(N).toFixed(1)},${zeroY.toFixed(1)} L${xAt(0).toFixed(1)},${zeroY.toFixed(1)} Z`;

  const uid = 'mom_' + Math.random().toString(36).slice(2, 7);
  const boundsSvg = setBoundaries
    .map((bIdx) => {
      const bx = xAt(bIdx).toFixed(1);
      return `<line x1="${bx}" y1="${padY}" x2="${bx}" y2="${H - padY}" stroke="currentColor" stroke-opacity=".22" stroke-dasharray="4 4"/>`;
    })
    .join('');

  return `
  <svg class="mom" viewBox="0 0 ${W} ${H}" preserveAspectRatio="none">
    <defs>
      <clipPath id="${uid}_top"><rect x="0" y="0" width="${W}" height="${zeroY}"/></clipPath>
      <clipPath id="${uid}_bot"><rect x="0" y="${zeroY}" width="${W}" height="${H - zeroY}"/></clipPath>
      <linearGradient id="${uid}_g0" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="${esc(c0)}" stop-opacity=".55"/>
        <stop offset="100%" stop-color="${esc(c0)}" stop-opacity=".04"/>
      </linearGradient>
      <linearGradient id="${uid}_g1" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="${esc(c1)}" stop-opacity=".04"/>
        <stop offset="100%" stop-color="${esc(c1)}" stop-opacity=".55"/>
      </linearGradient>
    </defs>
    <line x1="${padX}" y1="${padY}" x2="${W - padX}" y2="${padY}" stroke="currentColor" stroke-opacity=".08"/>
    <line x1="${padX}" y1="${zeroY}" x2="${W - padX}" y2="${zeroY}" stroke="currentColor" stroke-opacity=".35" stroke-dasharray="3 3"/>
    <line x1="${padX}" y1="${H - padY}" x2="${W - padX}" y2="${H - padY}" stroke="currentColor" stroke-opacity=".08"/>
    ${boundsSvg}
    <path d="${dArea}" fill="url(#${uid}_g0)" clip-path="url(#${uid}_top)"/>
    <path d="${dArea}" fill="url(#${uid}_g1)" clip-path="url(#${uid}_bot)"/>
    <path d="${dLine}" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round"/>
  </svg>`;
}

export function renderStats(): string {
  const { ui, activeMatch } = store;
  const m = getStatsTargetMatch();
  if (!m) {
    return `<div class="page"><div class="empty">Partido no encontrado.<br><br><button class="btn" data-nav="home">Volver</button></div></div>`;
  }
  const f = ui.statsSetFilter || 'all';
  const S = computeStats(m, f);
  const st = S.st;
  const T = S.T;
  const c0 = m.teams[0].color;
  const c1 = m.teams[1].color;
  const isRemoteLiveStats = ui.statsId === 'live' && ui.liveMatch;
  const isLive =
    (activeMatch && activeMatch.id === m.id && activeMatch.status === 'playing') ||
    (isRemoteLiveStats && m.status === 'playing');
  const backRoute = isRemoteLiveStats
    ? 'live'
    : activeMatch && activeMatch.id === m.id && activeMatch.status === 'playing'
      ? 'board'
      : 'history';
  const isStarRule = m.rules.deuceRule === 'star';
  const gpLabel = isStarRule ? 'Star Points ganados' : 'Puntos de oro ganados';
  const gpSrvLabel = isStarRule ? 'Star Points ganados al saque' : 'Puntos de oro ganados al saque';
  const gpRetLabel = isStarRule ? 'Star Points ganados al resto' : 'Puntos de oro ganados al resto';

  const stCompId = getMatchCompId(m);
  const stComp = stCompId ? getCompById(stCompId) : null;
  const stScoring = getCompetitionScoringConfig(stComp);
  const stScopeName = stComp ? `${stComp.kind === 'league' ? 'Liga' : 'Torneo'}: ${stComp.name}` : 'Partido del Día';
  const eloInfo = m.isWalkover ? null : calculateMatchEloPreview(m);
  let eloCardHtml = '';
  if (eloInfo && (st.matchWinner !== null || st.isDraw)) {
    const p0 = eloInfo.pair0;
    const p1 = eloInfo.pair1;
    const swArr = st.sets.reduce(
      (acc, s) => {
        if (s.winner === 0) acc[0]++;
        else if (s.winner === 1) acc[1]++;
        return acc;
      },
      [0, 0]
    );
    const gmArr = st.sets.reduce((acc, s) => [acc[0] + (s.games?.[0] || 0), acc[1] + (s.games?.[1] || 0)], [0, 0]);
    const gb = stScoring.gameBonusPts || 0;
    const sb = stScoring.setBonusPts || 0;
    const base0 = st.isDraw ? stScoring.drawPts ?? 2 : st.matchWinner === 0 ? stScoring.winPts : stScoring.lossPts;
    const base1 = st.isDraw ? stScoring.drawPts ?? 2 : st.matchWinner === 1 ? stScoring.winPts : stScoring.lossPts;
    const t0Pts = base0 + swArr[0] * sb + gmArr[0] * gb;
    const t1Pts = base1 + swArr[1] * sb + gmArr[1] * gb;
    eloCardHtml = `
    <div class="sec-t">Ranking · ${esc(stScopeName)}</div>
    <div class="card elo-match-card">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;flex-wrap:wrap;gap:8px">
        <div style="display:flex;align-items:center;gap:8px">
          ${ICONS.trophy}
          <h3 style="margin:0">${st.isDraw ? `Empate (+${t0Pts} / +${t1Pts} pts) & ELO` : `Puntos (+${t0Pts} / +${t1Pts}) & ELO`} (${esc(stScopeName)})</h3>
        </div>
        ${eloInfo.isBlowout ? `<span class="tag-gold" style="font-size:11px;padding:3px 8px;border-radius:6px;background:rgba(212,175,55,0.15);color:var(--gold);border:1px solid rgba(212,175,55,0.35);font-weight:700">💥 Bonus x1.2 (+6 juegos de ventaja)</span>` : ''}
      </div>

      <div class="elo-teams-grid">
        <div class="elo-team-col ${st.matchWinner === 0 ? 'winner-col' : ''}">
          <div class="elo-team-hdr">
            <span class="bar" style="--c:${esc(m.teams[0].color)}"></span>
            <b>${esc(teamLabel(m, 0))}</b>
            ${st.matchWinner === 0 ? '<span class="tro">🏆</span>' : ''}
          </div>
          <div class="elo-team-meta">
            <span>Promedio previo: <b>${p0.avgBefore} pts</b></span>
            <span>Probabilidad esperada: <b>${p0.expPct}%</b></span>
          </div>
          <div class="elo-players-list">
            ${p0.players
              .map((pl) => {
                const lvl = getEloLevel(pl.eloAfter);
                const sign = pl.delta >= 0 ? '+' : '';
                return `
              <div class="elo-player-row">
                <span class="p-name">${esc(pl.name)}</span>
                <span class="p-delta ${pl.delta >= 0 ? 'up' : 'down'}">${sign}${pl.delta} pts</span>
                <span class="p-after"><b>${pl.eloAfter} pts</b> (${lvl.icon} ${lvl.level})</span>
              </div>`;
              })
              .join('')}
          </div>
        </div>

        <div class="elo-team-col ${st.matchWinner === 1 ? 'winner-col' : ''}">
          <div class="elo-team-hdr">
            <span class="bar" style="--c:${esc(m.teams[1].color)}"></span>
            <b>${esc(teamLabel(m, 1))}</b>
            ${st.matchWinner === 1 ? '<span class="tro">🏆</span>' : ''}
          </div>
          <div class="elo-team-meta">
            <span>Promedio previo: <b>${p1.avgBefore} pts</b></span>
            <span>Probabilidad esperada: <b>${p1.expPct}%</b></span>
          </div>
          <div class="elo-players-list">
            ${p1.players
              .map((pl) => {
                const lvl = getEloLevel(pl.eloAfter);
                const sign = pl.delta >= 0 ? '+' : '';
                return `
              <div class="elo-player-row">
                <span class="p-name">${esc(pl.name)}</span>
                <span class="p-delta ${pl.delta >= 0 ? 'up' : 'down'}">${sign}${pl.delta} pts</span>
                <span class="p-after"><b>${pl.eloAfter} pts</b> (${lvl.icon} ${lvl.level})</span>
              </div>`;
              })
              .join('')}
          </div>
        </div>
      </div>
    </div>`;
  }

  const playedSets = st.sets.filter((s, idx) => s.games[0] > 0 || s.games[1] > 0 || idx === 0);

  const evoHtml = playedSets
    .map((s, sIdx) => {
      const chips = s.history
        .map((g) => {
          const col = m.teams[g.winner].color;
          const fg = fgFor(col);
          const cls = g.isTB ? 'gch tb' : g.isBreak ? 'gch b' : 'gch';
          const txt = g.isTB ? 'TB' : g.isBreak ? 'B' : '';
          return `<span class="${cls}" style="--c:${esc(col)};--f:${fg}" title="Set ${sIdx + 1} · ${g.gamesAfter[0]}-${g.gamesAfter[1]} (saca ${esc(playerLabel(m, g.srvTeam, g.srvPlayer))})">${txt}</span>`;
        })
        .join('');
      return `
      <div class="evo-row">
        <span class="lb">SET ${sIdx + 1} · ${s.games[0]}-${s.games[1]}</span>
        <div class="evo-chips">${chips}</div>
      </div>`;
    })
    .join('');

  const pbpHtml = playedSets
    .map((s, sIdx) => {
      if (f !== 'all' && Number(f) !== sIdx) return '';
      const gamesRows = s.history
        .map((g) => {
          const seq = g.points
            .map((pt) => {
              const wCol = m.teams[pt.w].color;
              return `<span class="${pt.isGP ? 'gp' : ''}" style="--c:${esc(wCol)}">${esc(pt.scoreBefore)}</span>`;
            })
            .join('');
          return `
        <div class="pbp-game">
          <div class="pbp-h">
            <b>SET ${sIdx + 1} · ${g.gamesAfter[0]}-${g.gamesAfter[1]}</b>
            <small>saca ${esc(playerLabel(m, g.srvTeam, g.srvPlayer))}</small>
          </div>
          <div class="pseq">${seq}</div>
          <div>${g.isBreak ? `<span class="brk-badge">BREAK</span>` : g.isTB ? `<span class="brk-badge">TB</span>` : ''}</div>
        </div>`;
        })
        .join('');
      return `
      <details class="pbp" open>
        <summary>SET ${sIdx + 1} (${s.games[0]}-${s.games[1]}) · ${s.history.length} juegos</summary>
        ${gamesRows || `<div class="muted" style="padding:8px 0">Sin juegos terminados en este set.</div>`}
      </details>`;
    })
    .join('');

  const shotIcons: Record<string, string> = {
    smash: '💥',
    volea: '🎾',
    bandeja: '🌀',
    bajada: '⚡',
    dejada: '🎯',
    passing: '🏹',
    globo: '🎈',
    otro: '✨'
  };
  const shotNames: Record<string, string> = {
    smash: 'Smash',
    volea: 'Volea',
    bandeja: 'Bandeja',
    bajada: 'Bajada',
    dejada: 'Dejada',
    passing: 'Passing',
    globo: 'Globo',
    otro: 'Directo'
  };

  return `
  <div class="page stats">
    <div class="print-only print-title">DETALLES DEL PARTIDO · PÁDEL CONTROL SÉ · BY SAIRAF ENGEL</div>

    <div class="page-h no-print">
      <div class="page-h-top">
        <button class="icon-btn" data-nav="${backRoute}" title="Volver">${ICONS.back}</button>
        <h1>Detalles del Partido</h1>
      </div>
      <div class="page-h-acts">
        ${isLive ? `<button class="btn primary sm" data-nav="${isRemoteLiveStats ? 'live' : 'board'}">${ICONS.play} Volver</button>` : ''}
        ${stComp && !isRemoteLiveStats ? `<button class="btn sm" data-open-comp="${esc(stComp.id)}">${ICONS.award} Ver ${stComp.kind === 'league' ? 'Liga' : 'Torneo'}</button>` : ''}
        ${!isRemoteLiveStats && isLive ? `<button class="icon-btn" data-act="share-live" title="Compartir en vivo">${ICONS.live}</button>` : ''}
        <button class="icon-btn" data-act="print-pdf" title="Imprimir / Guardar PDF">${ICONS.pdf}</button>
        <button class="icon-btn" data-act="export-png" title="Descargar imagen">${ICONS.img}</button>
        <button class="icon-btn" data-act="share-link" title="Compartir enlace">${ICONS.share}</button>
      </div>
    </div>

    <div class="card st-head">
      ${[0, 1]
        .map(
          (t) => `
        <div class="tr ${st.matchWinner === t ? 'win' : ''}">
          <span class="bar" style="--c:${esc(m.teams[t].color)}"></span>
          <span class="nm">${esc(teamLabel(m, t))}</span>
          ${st.matchWinner === t ? `<span class="tro">${ICONS.trophy}</span>` : ''}
          <div class="sboxes">
            ${playedSets
              .map((s) => {
                const cls = s.winner === t ? 'sbox w' : s.winner === null && isLive ? 'sbox cur' : 'sbox';
                const sup = s.tbScore ? `<sup>${s.tbScore[t]}</sup>` : '';
                return `<span class="${cls}">${s.games[t]}${sup}</span>`;
              })
              .join('')}
          </div>
        </div>`
        )
        .join('')}
      <div class="meta">
        ${getMatchContextBadgeHtml(m)}
        ${st.isDraw ? `<span class="badge">🤝 EMPATE</span>` : ''}
        <span>·</span>
        <span>${esc(fmtDateLong(m.createdAt))}</span>
        <span>·</span>
        <span>Duración ${esc(fmtDurationLong(m.durationMs))}</span>
        <span>·</span>
        <span>Regla 40-40: ${m.rules.deuceRule === 'golden' ? 'Punto de Oro' : m.rules.deuceRule === 'star' ? '★ Star Point (FIP)' : 'Ventaja clásica'}</span>
      </div>
    </div>

    ${
      playedSets.length > 1
        ? `
    <div class="seg no-print">
      <button class="${f === 'all' ? 'on' : ''}" data-st-filter="all">Partido completo</button>
      ${playedSets.map((s, idx) => `<button class="${String(f) === String(idx) ? 'on' : ''}" data-st-filter="${idx}">Set ${idx + 1} (${s.games[0]}-${s.games[1]})</button>`).join('')}
    </div>`
        : ''
    }

    ${eloCardHtml}

    <div class="sec-t">Resumen</div>
    <div class="card">
      <h3>Análisis del partido</h3>
      ${
        S.insights.length
          ? `
        <ul class="analysis">
          ${S.insights.map((line) => `<li>${esc(line)}</li>`).join('')}
        </ul>
      `
          : `<p class="muted">Anotá puntos en el partido para generar el análisis automático.</p>`
      }
    </div>

    <div class="grid2">
      <div class="card">
        <h3>Parejas <span class="tag-s">${S.totalPts} PUNTOS</span></h3>
        ${renderComparisonBar('Puntos ganados', T[0].ptsWon, T[1].ptsWon, T[0].ptsWon, T[1].ptsWon, c0, c1)}
        ${renderComparisonBar('Golpes ganadores', T[0].winners, T[1].winners, T[0].winners, T[1].winners, c0, c1)}
        ${renderComparisonBar('Errores no forzados', T[0].ue, T[1].ue, T[0].ue, T[1].ue, c0, c1)}
        ${renderComparisonBar('Puntos ganados al saque', pct(T[0].srvPtsWon, T[0].srvPtsTotal) + '%', pct(T[1].srvPtsWon, T[1].srvPtsTotal) + '%', pct(T[0].srvPtsWon, T[0].srvPtsTotal), pct(T[1].srvPtsWon, T[1].srvPtsTotal), c0, c1)}
      </div>

      <div class="card">
        <h3>Momentos</h3>
        ${renderComparisonBar('Puntos de break ganados', `${T[0].bpWon}/${T[0].bpTotal}`, `${T[1].bpWon}/${T[1].bpTotal}`, T[0].bpWon, T[1].bpWon, c0, c1)}
        ${renderComparisonBar(gpLabel, `${T[0].gpWon}/${T[0].gpTotal}`, `${T[1].gpWon}/${T[1].gpTotal}`, T[0].gpWon, T[1].gpWon, c0, c1)}
        ${renderComparisonBar('Puntos seguidos (máximo)', T[0].maxPtStreak, T[1].maxPtStreak, T[0].maxPtStreak, T[1].maxPtStreak, c0, c1)}
        ${renderComparisonBar('Juegos ganados', T[0].gamesWon, T[1].gamesWon, T[0].gamesWon, T[1].gamesWon, c0, c1)}
        ${renderComparisonBar('Primeros saques dentro', pct(T[0].firstServeIn, T[0].srvPtsTotal) + '%', pct(T[1].firstServeIn, T[1].srvPtsTotal) + '%', pct(T[0].firstServeIn, T[0].srvPtsTotal), pct(T[1].firstServeIn, T[1].srvPtsTotal), c0, c1)}
        ${renderComparisonBar('Dobles faltas', T[0].doubleFaults, T[1].doubleFaults, T[0].doubleFaults, T[1].doubleFaults, c0, c1)}
      </div>
    </div>

    <div class="grid2">
      <div class="card">
        <h3>Saque y resto</h3>
        ${renderComparisonBar('Puntos ganados al resto', pct(T[0].retPtsWon, T[0].retPtsTotal) + '%', pct(T[1].retPtsWon, T[1].retPtsTotal) + '%', pct(T[0].retPtsWon, T[0].retPtsTotal), pct(T[1].retPtsWon, T[1].retPtsTotal), c0, c1)}
        ${renderComparisonBar('Juegos de saque ganados', `${T[0].srvGamesWon}/${T[0].srvGamesTotal}`, `${T[1].srvGamesWon}/${T[1].srvGamesTotal}`, T[0].srvGamesWon, T[1].srvGamesWon, c0, c1)}
        ${renderComparisonBar('Bolas de break salvadas', `${T[0].bpSaved}/${T[0].bpFaced}`, `${T[1].bpSaved}/${T[1].bpFaced}`, T[0].bpSaved, T[1].bpSaved, c0, c1)}
      </div>

      <div class="card">
        <h3>Bajo presión</h3>
        ${renderComparisonBar('Puntos clave ganados', `${T[0].keyWon}/${T[0].keyTotal}`, `${T[1].keyWon}/${T[1].keyTotal}`, T[0].keyWon, T[1].keyWon, c0, c1)}
        ${renderComparisonBar(gpSrvLabel, `${T[0].gpSrvWon}/${T[0].gpSrvTotal}`, `${T[1].gpSrvWon}/${T[1].gpSrvTotal}`, T[0].gpSrvWon, T[1].gpSrvWon, c0, c1)}
        ${renderComparisonBar(gpRetLabel, `${T[0].gpRetWon}/${T[0].gpRetTotal}`, `${T[1].gpRetWon}/${T[1].gpRetTotal}`, T[0].gpRetWon, T[1].gpRetWon, c0, c1)}
        ${renderComparisonBar('Juegos seguidos (máximo)', T[0].maxGameStreak, T[1].maxGameStreak, T[0].maxGameStreak, T[1].maxGameStreak, c0, c1)}
      </div>
    </div>
    <p class="note">Puntos clave: bolas de break y puntos desde el 30-30.</p>

    <div class="sec-t">Jugadores</div>
    <div class="card">
      <div class="tbl-wrap">
        <table class="pt">
          <thead>
            <tr>
              <th></th>
              <th>Golpes<br>ganadores</th>
              <th>Errores no<br>forzados</th>
              <th>Errores<br>forzados</th>
              <th>Primeros<br>saques<br>dentro</th>
              <th>Puntos<br>ganados al<br>saque</th>
              <th>Juegos de<br>saque<br>ganados</th>
              <th>Dobles<br>faltas</th>
            </tr>
          </thead>
          <tbody>
            ${S.P.map(
              (pl) => `
              <tr>
                <td style="--c:${esc(pl.color)}">${esc(pl.name)}</td>
                <td>${pl.winners}</td>
                <td>${pl.ue}</td>
                <td>${pl.fe}</td>
                <td>${pct(pl.firstServeIn, pl.srvPtsTotal)}%</td>
                <td>${pct(pl.srvPtsWon, pl.srvPtsTotal)}%</td>
                <td>${pl.srvGamesWon}/${pl.srvGamesTotal}</td>
                <td>${pl.doubleFaults}</td>
              </tr>`
            ).join('')}
          </tbody>
        </table>
      </div>
    </div>

    <div class="sec-t">Desglose de Golpes Ganadores (Winners)</div>
    <div class="card">
      <h3>Tipos de Golpe por Pareja</h3>
      ${renderComparisonBar('💥 Smash / Remate', T[0].shots.smash, T[1].shots.smash, T[0].shots.smash, T[1].shots.smash, c0, c1)}
      ${renderComparisonBar('🎾 Volea ganadora', T[0].shots.volea, T[1].shots.volea, T[0].shots.volea, T[1].shots.volea, c0, c1)}
      ${renderComparisonBar('🌀 Bandeja / Víbora', T[0].shots.bandeja, T[1].shots.bandeja, T[0].shots.bandeja, T[1].shots.bandeja, c0, c1)}
      ${renderComparisonBar('⚡ Bajada de pared', T[0].shots.bajada, T[1].shots.bajada, T[0].shots.bajada, T[1].shots.bajada, c0, c1)}
      ${renderComparisonBar('🎯 Dejada / Chiquita', T[0].shots.dejada, T[1].shots.dejada, T[0].shots.dejada, T[1].shots.dejada, c0, c1)}
      ${renderComparisonBar('🏹 Passing shot', T[0].shots.passing, T[1].shots.passing, T[0].shots.passing, T[1].shots.passing, c0, c1)}
      ${T[0].shots.globo > 0 || T[1].shots.globo > 0 ? renderComparisonBar('🎈 Globo ganador', T[0].shots.globo, T[1].shots.globo, T[0].shots.globo, T[1].shots.globo, c0, c1) : ''}
      ${T[0].shots.otro > 0 || T[1].shots.otro > 0 ? renderComparisonBar('Otros winners directos', T[0].shots.otro, T[1].shots.otro, T[0].shots.otro, T[1].shots.otro, c0, c1) : ''}

      <div style="margin-top:14px;border-top:1px solid var(--line);padding-top:12px">
        <div style="font-size:12px;font-weight:800;letter-spacing:1px;text-transform:uppercase;color:var(--tx2);margin-bottom:8px">Winners registrados por Jugador</div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:8px">
          ${S.P.map((pl) => {
            const shotList = Object.entries(pl.shots || {})
              .filter(([, v]) => v > 0)
              .map(([k, v]) => {
                const icon = shotIcons[k] || '';
                const name = shotNames[k] || k;
                return `<span class="tag-s" style="margin:2px;display:inline-flex;align-items:center;gap:3px;font-size:11px">${icon} ${v} ${name}</span>`;
              });
            return `
              <div style="background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.06);border-left:3px solid ${esc(pl.color)};border-radius:8px;padding:8px 10px">
                <div style="font-weight:700;font-size:13px;color:var(--text);margin-bottom:4px">${esc(pl.name)} <span style="font-weight:400;color:var(--muted);font-size:12px">(${pl.winners} winners)</span></div>
                <div style="display:flex;flex-wrap:wrap">${shotList.length ? shotList.join('') : '<span class="muted" style="font-size:11px">Sin detalle de golpe</span>'}</div>
              </div>`;
          }).join('')}
        </div>
      </div>
    </div>

    <div class="sec-t">Evolución</div>
    <div class="card">
      ${evoHtml}
      <div class="mom-leg" style="margin-top:14px">
        <span style="color:${esc(c0)}"><i style="--c:${esc(c0)}"></i>${esc(teamLabel(m, 0))}</span>
        <span style="color:${esc(c1)}"><i style="--c:${esc(c1)}"></i>${esc(teamLabel(m, 1))}</span>
      </div>
      ${renderMomentumSVG(S.momentum, S.setBoundaries, c0, c1)}
      <p class="note">La línea sube cuando ${esc(teamLabel(m, 0))} ganan un punto y baja cuando lo ganan ${esc(teamLabel(m, 1))}. B = break.</p>
    </div>

    <div class="sec-t">Punto a Punto</div>
    <div class="card">
      ${pbpHtml}
    </div>

    <div class="btn-row no-print" style="margin-top:18px">
      <button class="btn primary" data-act="print-pdf">${ICONS.pdf} Exportar PDF / Imprimir</button>
      <button class="btn" data-act="export-png">${ICONS.img} Descargar Imagen</button>
      <button class="btn" data-act="share-link">${ICONS.share} Compartir Enlace</button>
      ${ui.statsId === 'shared' ? `<button class="btn primary" data-act="save-shared">Guardar en mi historial</button>` : ''}
      ${isRemoteLiveStats ? `<button class="btn primary" data-act="save-live">Guardar en mi historial</button>` : ''}
      ${!isLive && ui.statsId !== 'shared' && !isRemoteLiveStats ? `<button class="btn danger" data-del-match="${esc(m.id)}">${ICONS.trash} Eliminar partido</button>` : ''}
    </div>
    ${renderSignatureFooter()}
  </div>
  ${renderTabbar('history')}`;
}
