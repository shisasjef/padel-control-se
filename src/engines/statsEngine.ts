import { playerLabel, teamLabel } from '../core/utils';
import type { GameRecord, Match, MatchAnalyticsResult, PlayerStatsAggregate, TeamStatsAggregate } from '../types';
import { computeMatch } from './matchEngine';

export function computeStats(m: Match, setFilter: string | number = 'all'): MatchAnalyticsResult {
  const st = computeMatch(m);
  const filterIdx = setFilter === 'all' ? null : Number(setFilter);
  const pts = st.allPoints.filter((pt) => filterIdx === null || pt.setIdx === filterIdx);
  const games: GameRecord[] = [];
  st.sets.forEach((s, sIdx) => {
    if (filterIdx === null || sIdx === filterIdx) {
      s.history.forEach((g) => games.push(g));
    }
  });

  const T: TeamStatsAggregate[] = [0, 1].map(() => ({
    ptsWon: 0,
    winners: 0,
    ue: 0,
    fe: 0,
    shots: { smash: 0, volea: 0, bandeja: 0, bajada: 0, dejada: 0, passing: 0, globo: 0, otro: 0 },
    srvPtsWon: 0,
    srvPtsTotal: 0,
    retPtsWon: 0,
    retPtsTotal: 0,
    firstServeIn: 0,
    doubleFaults: 0,
    bpWon: 0,
    bpTotal: 0,
    bpSaved: 0,
    bpFaced: 0,
    gpWon: 0,
    gpTotal: 0,
    gpSrvWon: 0,
    gpSrvTotal: 0,
    gpRetWon: 0,
    gpRetTotal: 0,
    keyWon: 0,
    keyTotal: 0,
    maxPtStreak: 0,
    gamesWon: 0,
    srvGamesWon: 0,
    srvGamesTotal: 0,
    maxGameStreak: 0
  }));

  const P: Record<string, PlayerStatsAggregate> = {};
  for (let t = 0; t < 2; t++) {
    for (let pi = 0; pi < 2; pi++) {
      P[`${t}_${pi}`] = {
        team: t,
        playerIdx: pi,
        name: playerLabel(m, t, pi),
        color: m.teams[t].color,
        winners: 0,
        ue: 0,
        fe: 0,
        shots: { smash: 0, volea: 0, bandeja: 0, bajada: 0, dejada: 0, passing: 0, globo: 0, otro: 0 },
        srvPtsTotal: 0,
        srvPtsWon: 0,
        firstServeIn: 0,
        doubleFaults: 0,
        srvGamesWon: 0,
        srvGamesTotal: 0
      };
    }
  }

  if (!pts.length && m.manualPlayerStats) {
    Object.entries(m.manualPlayerStats).forEach(([k, v]) => {
      if (P[k] && v) {
        const tm = P[k].team;
        P[k].winners = Number(v.w) || 0;
        P[k].ue = Number(v.u) || 0;
        P[k].fe = Number(v.f) || 0;
        P[k].srvPtsTotal = Number(v.st) || 0;
        P[k].srvPtsWon = Number(v.sw) || 0;
        P[k].firstServeIn = Number(v.fs) || 0;
        P[k].doubleFaults = Number(v.df) || 0;
        if (v.sh) Object.assign(P[k].shots, v.sh);
        T[tm].winners += P[k].winners;
        T[tm].ue += P[k].ue;
        T[tm].fe += P[k].fe;
        T[tm].srvPtsTotal += P[k].srvPtsTotal;
        T[tm].srvPtsWon += P[k].srvPtsWon;
        T[tm].firstServeIn += P[k].firstServeIn;
        T[tm].doubleFaults += P[k].doubleFaults;
      }
    });
  }

  const curPtStreak = [0, 0];
  const momentum = [0];
  const setBoundaries: number[] = [];
  let lastSetSeen = 0;

  pts.forEach((pt, i) => {
    if (pt.setIdx !== lastSetSeen && i > 0) {
      setBoundaries.push(i);
      lastSetSeen = pt.setIdx;
    }
    const w = pt.w;
    const l = 1 - w;
    T[w].ptsWon++;

    curPtStreak[w]++;
    curPtStreak[l] = 0;
    if (curPtStreak[w] > T[w].maxPtStreak) T[w].maxPtStreak = curPtStreak[w];

    momentum.push(momentum[momentum.length - 1] + (w === 0 ? 1 : -1));

    const stTeam = pt.srvTeam;
    const rtTeam = 1 - stTeam;
    const pKeySrv = `${stTeam}_${pt.srvPlayer}`;
    const pSrv = P[pKeySrv];

    T[stTeam].srvPtsTotal++;
    T[rtTeam].retPtsTotal++;
    if (pSrv) pSrv.srvPtsTotal++;

    if (pt.doubleFault) {
      T[stTeam].doubleFaults++;
      if (pSrv) pSrv.doubleFaults++;
    } else if (pt.firstServeIn) {
      T[stTeam].firstServeIn++;
      if (pSrv) pSrv.firstServeIn++;
    }

    if (w === stTeam) {
      T[stTeam].srvPtsWon++;
      if (pSrv) pSrv.srvPtsWon++;
    } else {
      T[rtTeam].retPtsWon++;
    }

    if (pt.shotType === 'winner') {
      const bt = pt.byPlayer ? pt.byPlayer[0] : w;
      const bp = pt.byPlayer ? pt.byPlayer[1] : 0;
      T[bt].winners++;
      const pk = `${bt}_${bp}`;
      const sub =
        pt.subType && ['smash', 'volea', 'bandeja', 'bajada', 'dejada', 'passing', 'globo'].includes(pt.subType)
          ? pt.subType
          : pt.subType === 'winner'
            ? 'otro'
            : pt.subType || 'otro';
      T[bt].shots[sub] = (T[bt].shots[sub] || 0) + 1;
      if (P[pk]) {
        P[pk].winners++;
        P[pk].shots[sub] = (P[pk].shots[sub] || 0) + 1;
      }
    } else if (pt.shotType === 'ue') {
      const bt = pt.byPlayer ? pt.byPlayer[0] : l;
      const bp = pt.byPlayer ? pt.byPlayer[1] : 0;
      T[bt].ue++;
      const pk = `${bt}_${bp}`;
      if (P[pk]) P[pk].ue++;
    } else if (pt.shotType === 'fe') {
      const bt = pt.byPlayer ? pt.byPlayer[0] : l;
      const bp = pt.byPlayer ? pt.byPlayer[1] : 0;
      T[bt].fe++;
      const pk = `${bt}_${bp}`;
      if (P[pk]) P[pk].fe++;
    } else if (pt.shotType === 'df') {
      T[stTeam].ue++;
      if (pSrv) pSrv.ue++;
    }

    if (pt.isBP) {
      T[rtTeam].bpTotal++;
      T[stTeam].bpFaced++;
      if (w === rtTeam) T[rtTeam].bpWon++;
      else T[stTeam].bpSaved++;
    }

    if (pt.isGP) {
      T[0].gpTotal++;
      T[1].gpTotal++;
      T[w].gpWon++;
      T[stTeam].gpSrvTotal++;
      T[rtTeam].gpRetTotal++;
      if (w === stTeam) T[stTeam].gpSrvWon++;
      else T[rtTeam].gpRetWon++;
    }

    if (pt.isKey) {
      T[0].keyTotal++;
      T[1].keyTotal++;
      T[w].keyWon++;
    }
  });

  const curGStreak = [0, 0];
  games.forEach((g) => {
    const gw = g.winner;
    const gl = 1 - gw;
    T[gw].gamesWon++;
    curGStreak[gw]++;
    curGStreak[gl] = 0;
    if (curGStreak[gw] > T[gw].maxGameStreak) T[gw].maxGameStreak = curGStreak[gw];

    if (!g.isTB) {
      const stTeam = g.srvTeam;
      T[stTeam].srvGamesTotal++;
      const pk = `${stTeam}_${g.srvPlayer}`;
      if (P[pk]) P[pk].srvGamesTotal++;
      if (gw === stTeam) {
        T[stTeam].srvGamesWon++;
        if (P[pk]) P[pk].srvGamesWon++;
      }
    }
  });

  const insights: string[] = [];
  const name0 = teamLabel(m, 0);
  const name1 = teamLabel(m, 1);
  const totalPts = T[0].ptsWon + T[1].ptsWon;

  if (totalPts > 0) {
    if (T[0].bpTotal + T[1].bpTotal > 0) {
      const wSide = T[1].bpWon > T[0].bpWon ? 1 : 0;
      const oSide = 1 - wSide;
      const wName = wSide === 0 ? name0 : name1;
      const oName = oSide === 0 ? name0 : name1;
      insights.push(
        `Los breaks marcaron la diferencia: ${wName} convirtió ${T[wSide].bpWon} de ${T[wSide].bpTotal}, ${oName} ${T[oSide].bpWon} de ${T[oSide].bpTotal}.`
      );
    }
    const bestSaver = T[1].bpSaved >= T[0].bpSaved ? 1 : 0;
    if (T[bestSaver].bpFaced >= 2 && T[bestSaver].bpSaved > 0) {
      insights.push(
        `${bestSaver === 0 ? name0 : name1} salvó ${T[bestSaver].bpSaved} de ${T[bestSaver].bpFaced} bolas de break.`
      );
    }
    const diff = Math.abs(T[0].ptsWon - T[1].ptsWon);
    if (diff === 0) {
      insights.push(`Máxima igualdad: empate exacto a ${T[0].ptsWon} puntos ganados por pareja.`);
    } else if (diff <= 6) {
      insights.push(`Solo ${diff} ${diff === 1 ? 'punto' : 'puntos'} de diferencia en todo el partido.`);
    } else {
      const dom = T[0].ptsWon > T[1].ptsWon ? name0 : name1;
      insights.push(`${dom} dominó el global con +${diff} puntos de ventaja (${T[0].ptsWon} a ${T[1].ptsWon}).`);
    }
    if (T[0].gpTotal > 0) {
      const gpLeader = T[1].gpWon >= T[0].gpWon ? 1 : 0;
      const lbl = m.rules.deuceRule === 'star' ? 'Star Points (tras 2 ventajas)' : 'Puntos decisivos con 40-40';
      insights.push(`${lbl}: ${gpLeader === 0 ? name0 : name1} ganó ${T[gpLeader].gpWon} de ${T[gpLeader].gpTotal}.`);
    }
    const pArr = Object.values(P);
    pArr.sort((a, b) => b.winners - a.winners);
    if (pArr[0] && pArr[0].winners > 0) {
      insights.push(`${pArr[0].name} hizo más ganadores que nadie: ${pArr[0].winners}.`);
    }
    const labels: Record<string, string> = {
      smash: 'smash / remates',
      volea: 'voleas ganadoras',
      bandeja: 'bandejas',
      bajada: 'bajadas de pared',
      dejada: 'dejadas',
      passing: 'passings',
      globo: 'globos ganadores'
    };
    pArr.forEach((pl) => {
      const best = Object.entries(pl.shots || {})
        .filter(([k, v]) => v >= 2 && k !== 'otro')
        .sort((a, b) => b[1] - a[1])[0];
      if (best) {
        insights.push(`${pl.name} se destacó en ataque con ${best[1]} ${labels[best[0]] || best[0]}.`);
      }
    });
    const strkLeader = T[1].maxPtStreak >= T[0].maxPtStreak ? 1 : 0;
    if (T[strkLeader].maxPtStreak >= 3) {
      insights.push(
        `Mejor racha del partido: ${T[strkLeader].maxPtStreak} puntos seguidos para ${strkLeader === 0 ? name0 : name1}.`
      );
    }
  }

  return { st, T, P: Object.values(P), pts, games, momentum, setBoundaries, insights, totalPts };
}
