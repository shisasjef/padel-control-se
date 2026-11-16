import type {
  Competition,
  ComputedMatchState,
  GameRecord,
  Match,
  MatchTransition,
  PointRecord,
  Preset,
  SetRecord
} from '../types';

export function createMatchFromPreset(p: Preset, comp: Competition | null = null): Match {
  const t0 = p.teams[0];
  const t1 = p.teams[1];
  const players0 = [t0.players[0]?.trim() || 'DRIVE 1', t0.players[1]?.trim() || 'REVÉS 1'];
  const players1 = [t1.players[0]?.trim() || 'DRIVE 2', t1.players[1]?.trim() || 'REVÉS 2'];
  const fs = p.firstServer || [0, 0];
  const totalSets = Math.max(1, Number(p.totalSets) || (p.setsToWin ? Number(p.setsToWin) * 2 - 1 : 3));
  const setsToWin = Math.floor(totalSets / 2) + 1;
  const kind = p.matchContext || 'daily';

  return {
    id: Math.random().toString(36).slice(2, 5) + Date.now().toString(36).slice(-3),
    createdAt: Date.now(),
    durationMs: 0,
    status: 'playing',
    mode: 'doubles',
    competition: {
      kind: comp ? comp.kind : kind,
      compId: comp ? comp.id : null,
      compName: comp ? comp.name : '',
      fixtureId: p.fixtureId || null,
      stageLabel: (p.stageLabel || '').trim()
    },
    teams: [
      { players: players0, color: t0.color || '#d4af37' },
      { players: players1, color: t1.color || '#2f8cff' }
    ],
    rules: {
      totalSets,
      setsToWin,
      gamesPerSet: Math.max(1, Number(p.gamesPerSet) || 6),
      deuceRule: p.deuceRule || 'golden',
      tiebreakAt: p.tiebreakAt !== undefined ? Number(p.tiebreakAt) : Math.max(1, Number(p.gamesPerSet) || 6),
      tiebreakPoints: Math.max(1, Number(p.tiebreakPoints) || 7),
      finalSet: p.finalSet || 'normal',
      changeoverRule: p.changeoverRule || 'odd'
    },
    firstServer: [fs[0] || 0, fs[1] || 0],
    secondServerIdx: p.secondServerIdx ?? null,
    shotPrompt: p.shotPrompt !== undefined ? !!p.shotPrompt : true,
    flipped: false,
    pendingFault: false,
    events: [],
    redoStack: []
  };
}

export function getServerRotation(m: Match): Array<[number, number]> {
  const tA = m.firstServer[0];
  const pA1 = m.firstServer[1] || 0;
  const pA2 = 1 - pA1;
  const tB = 1 - tA;
  const pB1 = m.secondServerIdx ?? 0;
  const pB2 = 1 - pB1;
  return [
    [tA, pA1],
    [tB, pB1],
    [tA, pA2],
    [tB, pB2]
  ];
}

export function regularPointCall(p0: number, p1: number, deuceRule: string, deuceCount: number): string {
  const MAP = ['0', '15', '30', '40'];
  if (p0 < 3 || p1 < 3) return `${MAP[Math.min(p0, 3)]}-${MAP[Math.min(p1, 3)]}`;
  if (p0 === p1) return deuceRule === 'star' && deuceCount >= 3 ? '40-40 ★' : '40-40';
  return p0 > p1 ? 'AD-40' : '40-AD';
}

export function isBreakPointSituation(
  srvTeam: number,
  p0: number,
  p1: number,
  deuceRule: string,
  deuceCount: number
): boolean {
  const sp = srvTeam === 0 ? p0 : p1;
  const rp = srvTeam === 0 ? p1 : p0;
  if (rp < 3) return false;
  if (sp < 3) return true;
  if (deuceRule === 'golden') return sp === 3 && rp === 3;
  if (deuceRule === 'star') return (sp === rp && deuceCount >= 3) || rp > sp;
  return rp > sp;
}

export function isGoldenPointSituation(
  p0: number,
  p1: number,
  deuceRule: string,
  deuceCount: number
): boolean {
  if (p0 < 3 || p1 < 3 || p0 !== p1) return false;
  if (deuceRule === 'golden') return true;
  if (deuceRule === 'star' && deuceCount >= 3) return true;
  return false;
}

export function isStarPointSituation(
  p0: number,
  p1: number,
  deuceRule: string,
  deuceCount: number
): boolean {
  return deuceRule === 'star' && p0 >= 3 && p1 >= 3 && p0 === p1 && deuceCount >= 3;
}

export function isSetPointFor(
  m: Match,
  st: { deuceCount: number },
  curSet: SetRecord,
  isTB: boolean,
  isSuperTB: boolean,
  p0: number,
  p1: number,
  team: number
): boolean {
  const R = m.rules;
  const opp = 1 - team;
  const tp = team === 0 ? p0 : p1;
  const op = team === 0 ? p1 : p0;
  if (isSuperTB) {
    return tp >= 9 && tp - op >= 1;
  }
  if (isTB) {
    const target = R.tiebreakPoints || 7;
    return tp >= target - 1 && tp - op >= 1;
  }
  const gT = curSet.games[team] + 1;
  const gO = curSet.games[opp];
  const gps = R.gamesPerSet || 6;
  const winsSetIfGame = gT >= gps && gT - gO >= 2;
  if (!winsSetIfGame) return false;
  if (tp < 3) return false;
  if (op < 3) return true;
  if (R.deuceRule === 'golden') return tp === 3 && op === 3;
  if (R.deuceRule === 'star' && tp === op && st.deuceCount >= 3) return true;
  return tp > op;
}

export function computeMatch(m: Match): ComputedMatchState {
  if (
    (Array.isArray(m.manualSets) && m.manualSets.length) ||
    (m.manualWinner !== undefined && m.manualWinner !== null) ||
    m.isDraw
  ) {
    const sets: SetRecord[] = (Array.isArray(m.manualSets) ? m.manualSets : []).map((s) => {
      const g0 = Number(s[0]) || 0;
      const g1 = Number(s[1]) || 0;
      const w =
        s[2] !== undefined && s[2] !== null && s[2] !== 'draw'
          ? Number(s[2])
          : g0 > g1
            ? 0
            : g1 > g0
              ? 1
              : null;
      return { games: [g0, g1], history: [], winner: w, tbScore: s[3] || null, isSuperTB: !!s[4] };
    });
    const setsWon = [sets.filter((s) => s.winner === 0).length, sets.filter((s) => s.winner === 1).length];
    const explicitDraw = !!(m.isDraw || m.manualWinner === 'draw');
    const mw = explicitDraw
      ? null
      : m.manualWinner !== undefined && m.manualWinner !== null && m.manualWinner !== 'draw'
        ? Number(m.manualWinner)
        : setsWon[0] > setsWon[1]
          ? 0
          : setsWon[1] > setsWon[0]
            ? 1
            : null;
    const lastIdx = Math.max(0, sets.length - 1);
    return {
      sets,
      curSetIdx: lastIdx,
      curSet: sets[lastIdx] || { games: [0, 0], history: [], winner: null, tbScore: null, isSuperTB: false },
      setsWon,
      matchWinner: mw,
      isDraw: explicitDraw,
      p: [0, 0],
      pointDisplay: ['0', '0'],
      srvTeam: 0,
      srvPlayer: 0,
      srvSide: null,
      srvSideLabel: '',
      isTB: false,
      isSuperTB: false,
      isGP: false,
      isStar: false,
      curDeuceCount: 0,
      curAdvNumber: 0,
      isBP: false,
      sp: [false, false],
      mp: [false, false],
      curGamePoints: [],
      allPoints: [],
      totalGamesPlayed: sets.reduce((sum, s) => sum + s.games[0] + s.games[1], 0),
      lastTransition: null
    };
  }

  const R = m.rules;
  const rot = getServerRotation(m);
  let rotIdx = 0;

  const sets: SetRecord[] = [{ games: [0, 0], history: [], winner: null, tbScore: null, isSuperTB: false }];
  let curSetIdx = 0;
  const setsWon = [0, 0];
  let matchWinner: number | null = null;

  let p = [0, 0];
  let deuceCount = 0;
  let curGamePoints: PointRecord[] = [];
  let totalGamesPlayed = 0;
  const allPoints: PointRecord[] = [];

  function checkIsSuperTB(sIdx: number): boolean {
    if (R.finalSet !== 'supertb') return false;
    const maxSets = R.totalSets || R.setsToWin * 2 - 1;
    return maxSets > 1 && sIdx === maxSets - 1 && setsWon[0] === setsWon[1];
  }

  function checkIsTB(s: SetRecord): boolean {
    if (s.isSuperTB) return true;
    const tbAt = R.tiebreakAt;
    if (!tbAt || tbAt <= 0) return false;
    return s.games[0] === tbAt && s.games[1] === tbAt;
  }

  function getCurServer(isTB: boolean, tbPtsPlayed: number): [number, number] {
    if (!isTB) return rot[rotIdx % 4];
    if (tbPtsPlayed === 0) return rot[rotIdx % 4];
    const k = Math.floor((tbPtsPlayed + 1) / 2);
    return rot[(rotIdx + k) % 4];
  }

  let lastTransition: MatchTransition | null = null;

  for (let idx = 0; idx < m.events.length; idx++) {
    if (matchWinner !== null) break;
    const ev = m.events[idx];
    const curSet = sets[curSetIdx];
    curSet.isSuperTB = checkIsSuperTB(curSetIdx);
    const isSuperTB = curSet.isSuperTB;
    const isTB = checkIsTB(curSet);
    const tbPtsPlayed = p[0] + p[1];
    const srv = getCurServer(isTB, tbPtsPlayed);
    const srvTeam = srv[0];
    const srvPlayer = srv[1];

    if (p[0] >= 3 && p[1] >= 3 && p[0] === p[1] && !isTB) {
      if (p[0] === 3) deuceCount = 1;
      else deuceCount++;
    }

    const scoreBefore = isTB ? `${p[0]}-${p[1]}` : regularPointCall(p[0], p[1], R.deuceRule, deuceCount);
    const isGP = !isTB && isGoldenPointSituation(p[0], p[1], R.deuceRule, deuceCount);
    const isStar = !isTB && isStarPointSituation(p[0], p[1], R.deuceRule, deuceCount);
    const isBP = !isTB && isBreakPointSituation(srvTeam, p[0], p[1], R.deuceRule, deuceCount);
    const isKey = !isTB && (isBP || (p[0] >= 2 && p[1] >= 2));

    const w = ev.w;
    const pBefore = [p[0], p[1]];
    p[w]++;

    const scoreAfter = isTB ? `${p[0]}-${p[1]}` : regularPointCall(p[0], p[1], R.deuceRule, deuceCount);

    const ptRecord: PointRecord = {
      idx,
      setIdx: curSetIdx,
      gameIdx: curSet.history.length,
      w,
      srvTeam,
      srvPlayer,
      firstServeIn: ev.fs !== false,
      doubleFault: ev.type === 'df',
      shotType: ev.type || 'pt',
      subType: ev.sub || null,
      byPlayer: ev.by || null,
      scoreBefore,
      scoreAfter,
      pBefore,
      isTB,
      isSuperTB,
      isGP,
      isStar,
      isBP,
      isKey
    };

    curGamePoints.push(ptRecord);
    allPoints.push(ptRecord);

    let gameWinner: number | null = null;
    if (isTB) {
      const target = isSuperTB ? 10 : R.tiebreakPoints || 7;
      if (p[w] >= target && p[w] - p[1 - w] >= 2) gameWinner = w;
    } else {
      if (isGP) {
        gameWinner = w;
      } else if (p[w] >= 4 && p[w] - p[1 - w] >= 2) {
        gameWinner = w;
      }
    }

    lastTransition = null;
    if (gameWinner !== null) {
      const wasBreak = !isTB && gameWinner !== srvTeam;
      curSet.games[gameWinner]++;
      const gAfter = [curSet.games[0], curSet.games[1]];
      const gameObj: GameRecord = {
        setIdx: curSetIdx,
        gameIdx: curSet.history.length,
        srvTeam,
        srvPlayer,
        winner: gameWinner,
        isBreak: wasBreak,
        isTB,
        isSuperTB,
        tbScore: isTB ? [p[0], p[1]] : null,
        gamesAfter: gAfter,
        points: curGamePoints
      };
      curSet.history.push(gameObj);
      totalGamesPlayed++;

      rotIdx = (rotIdx + 1) % 4;

      const gps = R.gamesPerSet || 6;
      let setWinner: number | null = null;
      if (isTB) {
        setWinner = gameWinner;
        curSet.tbScore = [p[0], p[1]];
      } else if (curSet.games[gameWinner] >= gps && curSet.games[gameWinner] - curSet.games[1 - gameWinner] >= 2) {
        setWinner = gameWinner;
      }

      p = [0, 0];
      deuceCount = 0;
      curGamePoints = [];

      if (setWinner !== null) {
        curSet.winner = setWinner;
        setsWon[setWinner]++;
        const coRule = R.changeoverRule || 'odd';
        const sumSetG = curSet.games[0] + curSet.games[1];
        const setCo = coRule === 'set' ? true : coRule === 'odd' ? sumSetG % 2 === 1 : false;
        const maxSets = R.totalSets || R.setsToWin * 2 - 1;
        if (setsWon[setWinner] >= R.setsToWin || setsWon[0] + setsWon[1] >= maxSets) {
          matchWinner = setsWon[0] >= setsWon[1] ? 0 : 1;
          lastTransition = { type: 'match', winner: matchWinner, setIdx: curSetIdx };
        } else {
          const finishedSetIdx = curSetIdx;
          curSetIdx++;
          sets.push({ games: [0, 0], history: [], winner: null, tbScore: null, isSuperTB: checkIsSuperTB(curSetIdx) });
          lastTransition = { type: 'set', winner: setWinner, setIdx: finishedSetIdx, changeover: setCo };
        }
      } else {
        const coRule = R.changeoverRule || 'odd';
        const sumG = curSet.games[0] + curSet.games[1];
        const needPrompt2nd = totalGamesPlayed === 1 && m.secondServerIdx === null;
        lastTransition = {
          type: 'game',
          winner: gameWinner,
          wasBreak,
          changeover: coRule === 'odd' && sumG % 2 === 1,
          needSecondServerPrompt: needPrompt2nd
        };
      }
    } else if (isTB && (R.changeoverRule || 'odd') === 'odd') {
      const sumTB = p[0] + p[1];
      if (sumTB > 0 && sumTB % 6 === 0) {
        lastTransition = { type: 'tb_changeover', tbScore: [p[0], p[1]] };
      }
    }
  }

  const curSet = sets[curSetIdx];
  curSet.isSuperTB = checkIsSuperTB(curSetIdx);
  const isSuperTB = curSet.isSuperTB;
  const isTB = checkIsTB(curSet);
  const srv = getCurServer(isTB, p[0] + p[1]);
  const srvTeam = srv[0];
  const srvPlayer = srv[1];

  let curDeuceCount = deuceCount;
  let curAdvNumber = 0;
  if (!isTB && p[0] >= 3 && p[1] >= 3) {
    if (p[0] === p[1]) {
      curDeuceCount = p[0] - 3 + 1;
    } else {
      curAdvNumber = Math.min(p[0], p[1]) - 3 + 1;
    }
  }

  const isGP = !isTB && isGoldenPointSituation(p[0], p[1], R.deuceRule, curDeuceCount);
  const isStar = !isTB && isStarPointSituation(p[0], p[1], R.deuceRule, curDeuceCount);
  const isBP = !isTB && isBreakPointSituation(srvTeam, p[0], p[1], R.deuceRule, curDeuceCount);
  const sp0 = isSetPointFor(m, { deuceCount: curDeuceCount }, curSet, isTB, isSuperTB, p[0], p[1], 0);
  const sp1 = isSetPointFor(m, { deuceCount: curDeuceCount }, curSet, isTB, isSuperTB, p[0], p[1], 1);
  const mp0 = sp0 && setsWon[0] === R.setsToWin - 1;
  const mp1 = sp1 && setsWon[1] === R.setsToWin - 1;

  let pointDisplay = ['0', '0'];
  if (isTB) {
    pointDisplay = [String(p[0]), String(p[1])];
  } else {
    const MAP = ['0', '15', '30', '40'];
    if (p[0] < 3 || p[1] < 3) {
      pointDisplay = [MAP[Math.min(p[0], 3)], MAP[Math.min(p[1], 3)]];
    } else if (p[0] === p[1]) {
      pointDisplay = isStar ? ['40 ★', '40 ★'] : ['40', '40'];
    } else if (p[0] > p[1]) {
      pointDisplay = ['AD', '40'];
    } else {
      pointDisplay = ['40', 'AD'];
    }
  }

  const srvSide: 'D' | 'R' | null = matchWinner !== null ? null : (p[0] + p[1]) % 2 === 0 ? 'D' : 'R';
  const srvSideLabel = srvSide === 'D' ? 'Derecha' : srvSide === 'R' ? 'Revés' : '';

  return {
    sets,
    curSetIdx,
    curSet,
    setsWon,
    matchWinner,
    isDraw: false,
    p,
    pointDisplay,
    srvTeam,
    srvPlayer,
    srvSide,
    srvSideLabel,
    isTB,
    isSuperTB,
    isGP,
    isStar,
    curDeuceCount,
    curAdvNumber,
    isBP,
    sp: [sp0, sp1],
    mp: [mp0, mp1],
    curGamePoints,
    allPoints,
    totalGamesPlayed,
    lastTransition
  };
}
