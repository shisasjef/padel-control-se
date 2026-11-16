import { canonicalPairKey, clone, formatPairLabel, getMatchCompId } from '../core/utils';
import type { BracketTeamObj, Competition, Fixture, Match, Participant, StandingRow } from '../types';
import { computeScopeStandings, getCompetitionScoringConfigPure, isProyectoPadelComp } from './eloEngine';
import { computeMatch } from './matchEngine';

export const MIN_COMP_COURTS = 1;
export const MAX_COMP_COURTS = 10;

export function newCompId(prefix = 'cmp'): string {
  return `${prefix}_` + Math.random().toString(36).slice(2, 6) + Date.now().toString(36).slice(-3);
}

export function clampCourtsCount(val: unknown, fallback = 4): number {
  const n = Math.floor(Number(val));
  if (!Number.isFinite(n) || n < MIN_COMP_COURTS) return fallback;
  return Math.min(MAX_COMP_COURTS, n);
}

export function getCompCourtsCount(
  comp: Pick<Competition, 'courtsCount'> | null | undefined,
  fallback = 4
): number {
  return clampCourtsCount(comp?.courtsCount, fallback);
}

export function isCompFinished(comp: Pick<Competition, 'status'> | null | undefined): boolean {
  return comp?.status === 'finished';
}

export function isSocialDrawComp(
  comp: Pick<Competition, 'format' | 'rankingMode' | 'participants'> | null | undefined
): boolean {
  if (!comp) return false;
  if (comp.format === 'proyecto_padel') return true;
  if (comp.format === 'open') {
    if (comp.rankingMode === 'individual') return true;
    if (comp.rankingMode === 'both') {
      const parts = comp.participants || [];
      const hasPairs = parts.some((p) => p.type === 'pair');
      const hasPlayers = parts.some((p) => p.type === 'player');
      return hasPlayers && !hasPairs;
    }
  }
  return false;
}

/** Fisher-Yates shuffle returning a new array. */
export function shuffleWithRng<T>(items: T[], rng: () => number = Math.random): T[] {
  const out = [...items];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    const tmp = out[i];
    out[i] = out[j];
    out[j] = tmp;
  }
  return out;
}

export function participantToTeamObj(
  part: Participant | null | undefined,
  teamNum: number | null = null
): BracketTeamObj | null {
  if (!part) return null;
  if (part.type === 'pair') {
    const p0 = (part.players?.[0] || '').trim() || 'DRIVE';
    const p1 = (part.players?.[1] || '').trim() || 'REVÉS';
    return {
      players: [p0, p1],
      color: part.color || '#d4af37',
      label: formatPairLabel(p0, p1),
      participantId: part.id,
      ...(teamNum ? { teamNum } : {})
    };
  }
  return {
    players: [part.name || 'Jugador', ''],
    color: part.color || '#d4af37',
    label: part.name || 'Jugador',
    participantId: part.id,
    ...(teamNum ? { teamNum } : {})
  };
}

function normPlayerKey(name: string | null | undefined): string {
  return String(name || '')
    .trim()
    .toUpperCase();
}

function buildTeamNumberMap(participants: Participant[] | undefined): Map<string, number> {
  const map = new Map<string, number>();
  (participants || []).forEach((p, idx) => {
    if (p?.id) map.set(p.id, idx + 1);
  });
  return map;
}

interface SocialStats {
  activePlayers: Participant[];
  activeCount: number;
  playCount: number[];
  lastRound: number[];
  partnerCount: number[][];
  opponentCount: number[][];
  maxRoundIdx: number;
}

function buildSocialStats(
  comp: Pick<Competition, 'id' | 'participants' | 'fixtures'>,
  historyMatches: Match[] = []
): SocialStats {
  const activePlayers = (comp.participants || []).filter(
    (p) => p.type === 'player' && !p.paused && Boolean((p.name || '').trim())
  );
  const keyToIdx = new Map<string, number>();
  const ensureIdx = (name: string | undefined | null): number => {
    const k = normPlayerKey(name);
    if (!k) return -1;
    let idx = keyToIdx.get(k);
    if (idx === undefined) {
      idx = keyToIdx.size;
      keyToIdx.set(k, idx);
    }
    return idx;
  };

  activePlayers.forEach((p) => {
    ensureIdx(p.name);
  });

  const existingFx = (comp.fixtures || []).filter((f) => !f.isBye && f.team0 && f.team1);
  existingFx.forEach((f) => {
    (f.team0?.players || []).forEach(ensureIdx);
    (f.team1?.players || []).forEach(ensureIdx);
  });

  const linkedMatchIds = new Set(existingFx.map((f) => f.matchId).filter((id): id is string => Boolean(id)));
  const compMatches = (historyMatches || []).filter(
    (m) => getMatchCompId(m) === comp.id && !linkedMatchIds.has(m.id)
  );
  compMatches.forEach((m) => {
    (m.teams || []).forEach((tm) => (tm.players || []).forEach(ensureIdx));
  });

  const totalN = Math.max(1, keyToIdx.size);
  const playCount = new Array<number>(totalN).fill(0);
  const lastRound = new Array<number>(totalN).fill(-1);
  const partnerCount = Array.from({ length: totalN }, () => new Array<number>(totalN).fill(0));
  const opponentCount = Array.from({ length: totalN }, () => new Array<number>(totalN).fill(0));

  const recordMatch = (p0: string[], p1: string[], rIdx: number) => {
    const a = p0.map(ensureIdx).filter((x) => x >= 0);
    const b = p1.map(ensureIdx).filter((x) => x >= 0);
    if (a.length === 2) {
      partnerCount[a[0]][a[1]]++;
      partnerCount[a[1]][a[0]]++;
    }
    if (b.length === 2) {
      partnerCount[b[0]][b[1]]++;
      partnerCount[b[1]][b[0]]++;
    }
    a.forEach((i) => {
      b.forEach((j) => {
        opponentCount[i][j]++;
        opponentCount[j][i]++;
      });
    });
    [...a, ...b].forEach((i) => {
      playCount[i]++;
      if (rIdx > lastRound[i]) lastRound[i] = rIdx;
    });
  };

  let maxRoundIdx = -1;
  (comp.fixtures || []).forEach((f) => {
    if (f.roundIdx > maxRoundIdx) maxRoundIdx = f.roundIdx;
    if (!f.isBye && f.team0 && f.team1) {
      recordMatch(f.team0.players || [], f.team1.players || [], f.roundIdx);
    }
  });
  compMatches.forEach((m, idx) => {
    recordMatch(m.teams?.[0]?.players || [], m.teams?.[1]?.players || [], maxRoundIdx + 1 + idx);
  });

  return {
    activePlayers,
    activeCount: activePlayers.length,
    playCount,
    lastRound,
    partnerCount,
    opponentCount,
    maxRoundIdx
  };
}

interface QuadSplitResult {
  t0: [number, number];
  t1: [number, number];
  cost: number;
}

function bestQuadSplit(
  quad: [number, number, number, number],
  partnerCount: number[][],
  opponentCount: number[][]
): QuadSplitResult {
  const [q0, q1, q2, q3] = quad;
  const candidates: Array<[[number, number], [number, number]]> = [
    [
      [q0, q1],
      [q2, q3]
    ],
    [
      [q0, q2],
      [q1, q3]
    ],
    [
      [q0, q3],
      [q1, q2]
    ]
  ];
  let best = candidates[0];
  let bestCost = Infinity;
  for (const [t0, t1] of candidates) {
    const p0 = partnerCount[t0[0]][t0[1]];
    const p1 = partnerCount[t1[0]][t1[1]];
    const pCost = (p0 * p0 + p1 * p1) * 10000;
    const o00 = opponentCount[t0[0]][t1[0]];
    const o01 = opponentCount[t0[0]][t1[1]];
    const o10 = opponentCount[t0[1]][t1[0]];
    const o11 = opponentCount[t0[1]][t1[1]];
    const oCost = (o00 * o00 + o01 * o01 + o10 * o10 + o11 * o11) * 100;
    const cost = pCost + oCost;
    if (cost < bestCost) {
      bestCost = cost;
      best = [t0, t1];
    }
  }
  return { t0: best[0], t1: best[1], cost: bestCost };
}

function solveSocialRoundMatches(
  selectedIdxs: number[],
  courtsUsed: number,
  partnerCount: number[][],
  opponentCount: number[][],
  rng: () => number
): { splits: QuadSplitResult[]; totalCost: number } {
  const restarts = courtsUsed <= 4 ? 48 : 28;
  const candidates: Array<{
    quads: Array<[number, number, number, number]>;
    splits: QuadSplitResult[];
    totalCost: number;
  }> = [];

  for (let attempt = 0; attempt < restarts; attempt++) {
    const order = shuffleWithRng(selectedIdxs, rng);
    const quads: Array<[number, number, number, number]> = [];
    const splits: QuadSplitResult[] = [];
    let totalCost = 0;

    for (let c = 0; c < courtsUsed; c++) {
      const q: [number, number, number, number] = [
        order[4 * c],
        order[4 * c + 1],
        order[4 * c + 2],
        order[4 * c + 3]
      ];
      quads.push(q);
      const res = bestQuadSplit(q, partnerCount, opponentCount);
      splits.push(res);
      totalCost += res.cost;
    }

    candidates.push({ quads, splits, totalCost });
    if (totalCost === 0) {
      return { splits, totalCost: 0 };
    }
  }

  candidates.sort((a, b) => a.totalCost - b.totalCost);
  const refineCount = courtsUsed <= 1 ? 1 : Math.min(6, candidates.length);
  let globalBest = candidates[0].splits;
  let globalBestCost = candidates[0].totalCost;

  if (courtsUsed > 1) {
    for (let idx = 0; idx < refineCount; idx++) {
      const cand = candidates[idx];
      const { quads, splits } = cand;
      let totalCost = cand.totalCost;

      for (let pass = 0; pass < 6; pass++) {
        let improved = false;
        for (let c1 = 0; c1 < courtsUsed - 1; c1++) {
          for (let c2 = c1 + 1; c2 < courtsUsed; c2++) {
            for (let i = 0; i < 4; i++) {
              for (let j = 0; j < 4; j++) {
                const q1 = quads[c1];
                const q2 = quads[c2];
                const tmp = q1[i];
                q1[i] = q2[j];
                q2[j] = tmp;

                const r1 = bestQuadSplit(q1, partnerCount, opponentCount);
                const r2 = bestQuadSplit(q2, partnerCount, opponentCount);
                const delta = r1.cost + r2.cost - (splits[c1].cost + splits[c2].cost);

                if (delta < 0) {
                  splits[c1] = r1;
                  splits[c2] = r2;
                  totalCost += delta;
                  improved = true;
                } else {
                  q2[j] = q1[i];
                  q1[i] = tmp;
                }
              }
            }
          }
        }
        if (!improved || totalCost === 0) break;
      }

      if (totalCost < globalBestCost) {
        globalBestCost = totalCost;
        globalBest = splits;
        if (globalBestCost === 0) break;
      }
    }
  }

  return { splits: globalBest, totalCost: globalBestCost };
}

export function getSocialCycleRoundCount(activePlayerCount: number, courtsCount: number): number {
  const N = Math.max(0, Math.floor(activePlayerCount));
  if (N < 4) return 0;
  const courts = Math.min(clampCourtsCount(courtsCount, 4), Math.floor(N / 4));
  if (N === 4) return 3;
  if (N % 4 === 0 && courts * 4 === N) return N - 1;
  return N;
}

function buildSocialRoundFromStats(
  stats: SocialStats,
  roundIdx: number,
  courtsCount: number,
  opts: { phase?: string; group?: string | null; rng?: () => number; assignCourt?: boolean } = {}
): { fixtures: Fixture[]; cost: number } {
  const rng = opts.rng || Math.random;
  const phase = opts.phase || 'social';
  const group = opts.group || null;
  const courtsUsed = Math.min(clampCourtsCount(courtsCount, 4), Math.floor(stats.activeCount / 4));
  if (courtsUsed < 1) return { fixtures: [], cost: 0 };

  const tieJitter = stats.activePlayers.map(() => rng());
  const sortedActive = Array.from({ length: stats.activeCount }, (_, i) => i).sort(
    (a, b) =>
      stats.playCount[a] - stats.playCount[b] ||
      stats.lastRound[a] - stats.lastRound[b] ||
      tieJitter[a] - tieJitter[b]
  );

  const selectedIdxs = sortedActive.slice(0, courtsUsed * 4);
  const restingNames = sortedActive
    .slice(courtsUsed * 4)
    .map((i) => (stats.activePlayers[i]?.name || '').trim())
    .filter(Boolean);

  const { splits, totalCost } = solveSocialRoundMatches(
    selectedIdxs,
    courtsUsed,
    stats.partnerCount,
    stats.opponentCount,
    rng
  );

  const roundLabel = group ? `Grupo ${group} · Ronda ${roundIdx + 1}` : `Ronda ${roundIdx + 1}`;
  const fixtures: Fixture[] = splits.map((sp, c) => {
    const pA0 = stats.activePlayers[sp.t0[0]];
    const pA1 = stats.activePlayers[sp.t0[1]];
    const pB0 = stats.activePlayers[sp.t1[0]];
    const pB1 = stats.activePlayers[sp.t1[1]];

    stats.partnerCount[sp.t0[0]][sp.t0[1]]++;
    stats.partnerCount[sp.t0[1]][sp.t0[0]]++;
    stats.partnerCount[sp.t1[0]][sp.t1[1]]++;
    stats.partnerCount[sp.t1[1]][sp.t1[0]]++;
    sp.t0.forEach((i) => {
      sp.t1.forEach((j) => {
        stats.opponentCount[i][j]++;
        stats.opponentCount[j][i]++;
      });
    });
    [...sp.t0, ...sp.t1].forEach((i) => {
      stats.playCount[i]++;
      if (roundIdx > stats.lastRound[i]) stats.lastRound[i] = roundIdx;
    });

    return {
      id: newCompId('fx'),
      phase,
      roundIdx,
      roundLabel,
      slotIdx: c,
      group,
      ...(opts.assignCourt !== false ? { court: c + 1 } : {}),
      ...(c === 0 && restingNames.length ? { resting: restingNames } : {}),
      team0: {
        players: [pA0.name || 'Jugador', pA1.name || 'Jugador'],
        color: pA0.color || '#d4af37',
        label: formatPairLabel(pA0.name, pA1.name)
      },
      team1: {
        players: [pB0.name || 'Jugador', pB1.name || 'Jugador'],
        color: pB0.color || '#2f8cff',
        label: formatPairLabel(pB0.name, pB1.name)
      },
      source0: null,
      source1: null,
      matchId: null,
      winnerSide: null,
      isBye: false
    };
  });

  return { fixtures, cost: totalCost };
}

/**
 * Generates 1 new social round (rotating partners & fair resting) based on prior fixtures and matches.
 */
export function generateSocialRoundFixtures(
  comp: Pick<Competition, 'id' | 'participants' | 'fixtures' | 'courtsCount'>,
  historyMatches: Match[] = [],
  opts: { courtsCount?: number; phase?: string; group?: string | null; rng?: () => number } = {}
): Fixture[] {
  const stats = buildSocialStats(comp, historyMatches);
  if (stats.activeCount < 4) return [];
  const courts = opts.courtsCount !== undefined ? clampCourtsCount(opts.courtsCount, 4) : getCompCourtsCount(comp);
  const nextRoundIdx = stats.maxRoundIdx + 1;
  return buildSocialRoundFromStats(stats, nextRoundIdx, courts, {
    phase: opts.phase || 'social',
    group: opts.group || null,
    rng: opts.rng,
    assignCourt: true
  }).fixtures;
}

/**
 * Generates a full or multi-round social rotation cycle, picking the lowest-repeat schedule over multiple restarts.
 */
export function generateSocialCycleFixtures(
  comp: Pick<Competition, 'id' | 'participants' | 'fixtures' | 'courtsCount'>,
  historyMatches: Match[] = [],
  opts: {
    roundsCount?: number;
    courtsCount?: number;
    phase?: string;
    group?: string | null;
    rng?: () => number;
    ignoreExistingFixtures?: boolean;
    assignCourt?: boolean;
  } = {}
): Fixture[] {
  const baseComp = opts.ignoreExistingFixtures ? { ...comp, fixtures: [] } : comp;
  const probe = buildSocialStats(baseComp, historyMatches);
  if (probe.activeCount < 4) return [];

  const courts = opts.courtsCount !== undefined ? clampCourtsCount(opts.courtsCount, 4) : getCompCourtsCount(comp);
  const totalRounds = opts.roundsCount ?? getSocialCycleRoundCount(probe.activeCount, courts);
  if (totalRounds <= 0) return [];

  const cycleAttempts = probe.activeCount <= 12 ? 4 : 2;
  let bestFixtures: Fixture[] = [];
  let bestCost = Infinity;

  for (let att = 0; att < cycleAttempts; att++) {
    const stats = buildSocialStats(baseComp, historyMatches);
    const startRoundIdx = stats.maxRoundIdx + 1;
    const out: Fixture[] = [];
    let totalCost = 0;

    for (let r = 0; r < totalRounds; r++) {
      const res = buildSocialRoundFromStats(stats, startRoundIdx + r, courts, {
        phase: opts.phase || 'social',
        group: opts.group || null,
        rng: opts.rng,
        assignCourt: opts.assignCourt
      });
      out.push(...res.fixtures);
      totalCost += res.cost;
    }

    if (totalCost < bestCost) {
      bestCost = totalCost;
      bestFixtures = out;
      if (bestCost === 0) break;
    }
  }

  return bestFixtures;
}

/**
 * Generates 1 new random round for fixed pairs (used in open/Americano-pairs mode), avoiding repeat opponents.
 */
export function generateNextPairRoundFixtures(
  comp: Pick<Competition, 'id' | 'participants' | 'fixtures' | 'courtsCount'>,
  historyMatches: Match[] = [],
  opts: { courtsCount?: number; rng?: () => number } = {}
): Fixture[] {
  const rng = opts.rng || Math.random;
  const teamNumMap = buildTeamNumberMap(comp.participants);
  const activePairs = (comp.participants || []).filter((p) => p.type === 'pair' && !p.paused);
  if (activePairs.length < 2) return [];

  const courts = opts.courtsCount !== undefined ? clampCourtsCount(opts.courtsCount, 4) : getCompCourtsCount(comp);
  const matchesThisRound = Math.min(courts, Math.floor(activePairs.length / 2));
  if (matchesThisRound < 1) return [];

  const keyToIdx = new Map<string, number>();
  activePairs.forEach((p, i) => {
    keyToIdx.set(canonicalPairKey(p.players?.[0], p.players?.[1]), i);
  });

  const P = activePairs.length;
  const playCount = new Array<number>(P).fill(0);
  const lastRound = new Array<number>(P).fill(-1);
  const faced = Array.from({ length: P }, () => new Array<number>(P).fill(0));

  const existingFx = (comp.fixtures || []).filter((f) => !f.isBye && f.team0 && f.team1);
  const linkedMatchIds = new Set(existingFx.map((f) => f.matchId).filter((id): id is string => Boolean(id)));
  let maxRoundIdx = -1;

  const recordPairMatch = (t0Players: string[], t1Players: string[], rIdx: number) => {
    const i0 = keyToIdx.get(canonicalPairKey(t0Players[0], t0Players[1]));
    const i1 = keyToIdx.get(canonicalPairKey(t1Players[0], t1Players[1]));
    if (i0 !== undefined) {
      playCount[i0]++;
      if (rIdx > lastRound[i0]) lastRound[i0] = rIdx;
    }
    if (i1 !== undefined) {
      playCount[i1]++;
      if (rIdx > lastRound[i1]) lastRound[i1] = rIdx;
    }
    if (i0 !== undefined && i1 !== undefined) {
      faced[i0][i1]++;
      faced[i1][i0]++;
    }
  };

  (comp.fixtures || []).forEach((f) => {
    if (f.roundIdx > maxRoundIdx) maxRoundIdx = f.roundIdx;
    if (!f.isBye && f.team0 && f.team1) {
      recordPairMatch(f.team0.players || [], f.team1.players || [], f.roundIdx);
    }
  });
  (historyMatches || [])
    .filter((m) => getMatchCompId(m) === comp.id && !linkedMatchIds.has(m.id))
    .forEach((m, idx) => {
      recordPairMatch(m.teams?.[0]?.players || [], m.teams?.[1]?.players || [], maxRoundIdx + 1 + idx);
    });

  const tieJitter = activePairs.map(() => rng());
  const sorted = Array.from({ length: P }, (_, i) => i).sort(
    (a, b) => playCount[a] - playCount[b] || lastRound[a] - lastRound[b] || tieJitter[a] - tieJitter[b]
  );

  const selected = sorted.slice(0, matchesThisRound * 2);
  const resting = sorted
    .slice(matchesThisRound * 2)
    .map((i) => formatPairLabel(activePairs[i].players?.[0], activePairs[i].players?.[1]))
    .filter(Boolean);

  let bestOrder = [...selected];
  let bestCost = Infinity;
  const restarts = matchesThisRound <= 5 ? 80 : 40;

  const pairCost = (a: number, b: number) => {
    const f = faced[a][b];
    return f * f * 100;
  };

  for (let att = 0; att < restarts; att++) {
    const ord = shuffleWithRng(selected, rng);
    let cost = 0;
    for (let m = 0; m < matchesThisRound; m++) {
      cost += pairCost(ord[2 * m], ord[2 * m + 1]);
    }
    if (matchesThisRound > 1 && cost > 0) {
      for (let pass = 0; pass < 10; pass++) {
        let improved = false;
        for (let m1 = 0; m1 < matchesThisRound - 1; m1++) {
          for (let m2 = m1 + 1; m2 < matchesThisRound; m2++) {
            for (let s1 = 0; s1 < 2; s1++) {
              for (let s2 = 0; s2 < 2; s2++) {
                const i1 = 2 * m1 + s1;
                const i2 = 2 * m2 + s2;
                const before = pairCost(ord[2 * m1], ord[2 * m1 + 1]) + pairCost(ord[2 * m2], ord[2 * m2 + 1]);
                const tmp = ord[i1];
                ord[i1] = ord[i2];
                ord[i2] = tmp;
                const after = pairCost(ord[2 * m1], ord[2 * m1 + 1]) + pairCost(ord[2 * m2], ord[2 * m2 + 1]);
                if (after < before) {
                  cost += after - before;
                  improved = true;
                } else {
                  ord[i2] = ord[i1];
                  ord[i1] = tmp;
                }
              }
            }
          }
        }
        if (!improved || cost === 0) break;
      }
    }
    if (cost < bestCost) {
      bestCost = cost;
      bestOrder = ord;
      if (bestCost === 0) break;
    }
  }

  const nextRoundIdx = maxRoundIdx + 1;
  const fixtures: Fixture[] = [];
  for (let m = 0; m < matchesThisRound; m++) {
    const p0 = activePairs[bestOrder[2 * m]];
    const p1 = activePairs[bestOrder[2 * m + 1]];
    fixtures.push({
      id: newCompId('fx'),
      phase: 'league',
      roundIdx: nextRoundIdx,
      roundLabel: `Fecha ${nextRoundIdx + 1}`,
      slotIdx: m,
      group: null,
      court: m + 1,
      ...(m === 0 && resting.length ? { resting } : {}),
      team0: participantToTeamObj(p0, teamNumMap.get(p0.id) || null),
      team1: participantToTeamObj(p1, teamNumMap.get(p1.id) || null),
      source0: null,
      source1: null,
      matchId: null,
      winnerSide: null,
      isBye: false
    });
  }
  return fixtures;
}

export function generateRoundRobinFixtures(
  comp: Pick<Competition, 'participants'> & Partial<Pick<Competition, 'id' | 'courtsCount'>>,
  opts: {
    participants?: Participant[];
    indexedParticipants?: Array<{ part: Participant; teamNum: number }>;
    phase?: string;
    group?: string | null;
    doubleRound?: boolean;
    shuffle?: boolean;
    courtsCount?: number;
    rng?: () => number;
    historyMatches?: Match[];
  } = {}
): Fixture[] {
  const parts = opts.participants || comp.participants || [];
  const phase = opts.phase || 'league';
  const group = opts.group || null;
  const doubleRound = !!opts.doubleRound;
  const rng = opts.rng || Math.random;
  const hasExplicitCourts = opts.courtsCount !== undefined;
  const courtsCount = hasExplicitCourts ? clampCourtsCount(opts.courtsCount, 4) : 0;

  const allIndividual = parts.length >= 4 && parts.every((p) => p.type === 'player');
  const out: Fixture[] = [];

  if (allIndividual) {
    const activeParts = parts.filter((p) => !p.paused);
    if (activeParts.length < 4) return out;
    const effectiveCourts = hasExplicitCourts ? courtsCount : Math.floor(activeParts.length / 4);
    const rounds = getSocialCycleRoundCount(activeParts.length, effectiveCourts);
    return generateSocialCycleFixtures(
      {
        id: comp.id || 'rr',
        participants: activeParts,
        fixtures: [],
        courtsCount: effectiveCourts
      },
      opts.historyMatches || [],
      {
        roundsCount: rounds,
        courtsCount: effectiveCourts,
        phase,
        group,
        rng,
        ignoreExistingFixtures: true,
        assignCourt: hasExplicitCourts
      }
    );
  }

  const baseEntries: Array<{ part: Participant; teamNum: number }> =
    opts.indexedParticipants ||
    parts.map((part, idx) => ({
      part,
      teamNum: idx + 1
    }));

  if (baseEntries.length < 2) return out;
  const workingEntries = opts.shuffle ? shuffleWithRng(baseEntries, rng) : [...baseEntries];
  const list: Array<{ part: Participant; teamNum: number } | null> = [...workingEntries];
  if (list.length % 2 === 1) list.push(null);
  const n = list.length;
  const rounds = n - 1;
  const arr = [...list];

  const makePass = (roundOffset: number, swapSides: boolean) => {
    const rotArr = [...arr];
    for (let r = 0; r < rounds; r++) {
      let slot = 0;
      for (let i = 0; i < n / 2; i++) {
        const a = rotArr[i];
        const b = rotArr[n - 1 - i];
        if (a && b) {
          const flip = swapSides ? i % 2 === 0 : r % 2 === 1 && i === 0;
          const first = flip ? b : a;
          const second = flip ? a : b;
          const rIdx = r + roundOffset;
          const curSlot = slot++;
          out.push({
            id: newCompId('fx'),
            phase,
            roundIdx: rIdx,
            roundLabel: group ? `Grupo ${group} · Fecha ${rIdx + 1}` : `Fecha ${rIdx + 1}`,
            slotIdx: curSlot,
            group,
            ...(courtsCount > 0 ? { court: (curSlot % courtsCount) + 1 } : {}),
            team0: participantToTeamObj(first.part, first.teamNum),
            team1: participantToTeamObj(second.part, second.teamNum),
            source0: null,
            source1: null,
            matchId: null,
            winnerSide: null,
            isBye: false
          });
        }
      }
      const last = rotArr.pop()!;
      rotArr.splice(1, 0, last);
    }
  };

  makePass(0, false);
  if (doubleRound) makePass(rounds, true);
  return out;
}

export function generateGroupsFixtures(
  comp: Pick<Competition, 'participants'> & Partial<Pick<Competition, 'courtsCount'>>,
  numGroups = 2,
  opts: { shuffle?: boolean; courtsCount?: number; rng?: () => number } = {}
): Fixture[] {
  const parts = comp.participants || [];
  if (parts.length < 4) return [];
  const gCount = Math.max(2, Math.min(4, Number(numGroups) || 2));
  const letters = ['A', 'B', 'C', 'D'].slice(0, gCount);
  const rng = opts.rng || Math.random;
  const hasExplicitCourts = opts.courtsCount !== undefined;
  const courtsCount = hasExplicitCourts ? clampCourtsCount(opts.courtsCount, 4) : 0;

  if (opts.shuffle) {
    const counts: Record<string, number> = {};
    letters.forEach((l) => {
      counts[l] = 0;
    });
    const unpinned: Participant[] = [];
    parts.forEach((p) => {
      if (p.groupManual && p.group && letters.includes(p.group)) {
        counts[p.group]++;
      } else {
        p.groupManual = false;
        unpinned.push(p);
      }
    });
    const shuffledUnpinned = shuffleWithRng(unpinned, rng);
    shuffledUnpinned.forEach((p) => {
      let bestLetter = letters[0];
      let minCount = Infinity;
      letters.forEach((l) => {
        if (counts[l] < minCount) {
          minCount = counts[l];
          bestLetter = l;
        }
      });
      p.group = bestLetter;
      counts[bestLetter]++;
    });
  } else {
    parts.forEach((p, idx) => {
      if (!p.group || !letters.includes(p.group)) {
        p.group = letters[idx % gCount];
      }
    });
  }

  const teamNumMap = buildTeamNumberMap(parts);
  const fixtures: Fixture[] = [];
  letters.forEach((g) => {
    const gParts = parts.filter((p) => p.group === g);
    if (gParts.length >= 2) {
      const indexed = gParts.map((part) => ({ part, teamNum: teamNumMap.get(part.id) || 0 }));
      fixtures.push(
        ...generateRoundRobinFixtures(comp, {
          participants: gParts,
          indexedParticipants: indexed,
          phase: 'group',
          group: g,
          shuffle: opts.shuffle,
          rng
        })
      );
    }
  });

  if (courtsCount > 0) {
    const byRound = new Map<number, Fixture[]>();
    fixtures.forEach((fx) => {
      if (!byRound.has(fx.roundIdx)) byRound.set(fx.roundIdx, []);
      byRound.get(fx.roundIdx)!.push(fx);
    });
    byRound.forEach((roundList) => {
      roundList.forEach((fx, idx) => {
        fx.court = (idx % courtsCount) + 1;
      });
    });
  }

  return fixtures;
}

export function getBracketRoundLabel(matchCount: number): string {
  if (matchCount === 1) return 'Final';
  if (matchCount === 2) return 'Semifinales';
  if (matchCount === 4) return 'Cuartos de Final';
  if (matchCount === 8) return 'Octavos de Final';
  return `Ronda de ${matchCount * 2}`;
}

export function buildBracketSeedOrder(size: number): number[] {
  let order = [0, 1];
  let curSize = 2;
  while (curSize < size) {
    curSize *= 2;
    order = order.flatMap((x, idx) => (idx % 2 === 0 ? [x, curSize - 1 - x] : [curSize - 1 - x, x]));
  }
  return order;
}

export function generatePlayoffBracket(
  comp: Pick<Competition, 'participants'> & Partial<Pick<Competition, 'courtsCount'>>,
  teamsOverride: BracketTeamObj[] | null = null,
  opts: { shuffle?: boolean; courtsCount?: number; rng?: () => number } = {}
): Fixture[] {
  const rng = opts.rng || Math.random;
  const hasExplicitCourts = opts.courtsCount !== undefined;
  const courtsCount = hasExplicitCourts ? clampCourtsCount(opts.courtsCount, 4) : 0;

  let teams = (
    teamsOverride ||
    (comp.participants || []).map((p, idx) => participantToTeamObj(p, idx + 1))
  ).filter((t): t is BracketTeamObj => Boolean(t));
  if (teams.length < 2) return [];

  if (opts.shuffle) {
    teams = shuffleWithRng(teams, rng);
  }

  let size = 2;
  while (size < teams.length && size < 32) size *= 2;
  const order = buildBracketSeedOrder(size);

  const fixtures: Fixture[] = [];
  const roundsFixtures: Fixture[][] = [];

  const r0Count = size / 2;
  const r0Label = getBracketRoundLabel(r0Count);
  const r0: Fixture[] = [];
  let r0CourtIdx = 0;
  for (let i = 0; i < r0Count; i++) {
    const sA = order[2 * i];
    const sB = order[2 * i + 1];
    const t0 = sA < teams.length ? clone(teams[sA]) : null;
    const t1 = sB < teams.length ? clone(teams[sB]) : null;
    const isBye = !!((t0 && !t1) || (!t0 && t1));
    const fx: Fixture = {
      id: newCompId('fx'),
      phase: 'playoff',
      roundIdx: 0,
      roundLabel: r0Label,
      slotIdx: i,
      group: null,
      ...(!isBye && courtsCount > 0 ? { court: (r0CourtIdx++ % courtsCount) + 1 } : {}),
      team0: t0,
      team1: t1,
      source0: null,
      source1: null,
      matchId: null,
      winnerSide: isBye ? (t0 ? 0 : 1) : null,
      isBye
    };
    r0.push(fx);
    fixtures.push(fx);
  }
  roundsFixtures.push(r0);

  let prevRound = r0;
  let rIdx = 1;
  while (prevRound.length > 1) {
    const count = prevRound.length / 2;
    const label = getBracketRoundLabel(count);
    const curRound: Fixture[] = [];
    for (let i = 0; i < count; i++) {
      const fx: Fixture = {
        id: newCompId('fx'),
        phase: 'playoff',
        roundIdx: rIdx,
        roundLabel: label,
        slotIdx: i,
        group: null,
        ...(courtsCount > 0 ? { court: (i % courtsCount) + 1 } : {}),
        team0: null,
        team1: null,
        source0: { fixtureId: prevRound[2 * i].id, pick: 'winner' },
        source1: { fixtureId: prevRound[2 * i + 1].id, pick: 'winner' },
        matchId: null,
        winnerSide: null,
        isBye: false
      };
      curRound.push(fx);
      fixtures.push(fx);
    }
    roundsFixtures.push(curRound);
    prevRound = curRound;
    rIdx++;
  }

  return fixtures;
}

export function resolveCompetitionFixturesPure(
  comp: Competition,
  historyList: Match[],
  activeMatch: Match | null = null
): void {
  if (!comp || !Array.isArray(comp.fixtures)) return;
  const byId = new Map(comp.fixtures.map((f) => [f.id, f]));

  const findMatchById = (mid: string | null): Match | null => {
    if (!mid) return null;
    if (activeMatch && activeMatch.id === mid) return activeMatch;
    return historyList.find((m) => m.id === mid) || null;
  };

  comp.fixtures.forEach((fx) => {
    if (fx.isBye) {
      fx.winnerSide = fx.team0 ? 0 : fx.team1 ? 1 : null;
      return;
    }
    if (fx.matchId) {
      const m = findMatchById(fx.matchId);
      if (!m) {
        fx.matchId = null;
        fx.winnerSide = null;
      } else {
        const st = computeMatch(m);
        fx.winnerSide = st.isDraw ? 'draw' : st.matchWinner !== null ? st.matchWinner : null;
      }
    }
  });

  const playoffs = comp.fixtures
    .filter((f) => f.phase === 'playoff')
    .sort((a, b) => a.roundIdx - b.roundIdx || a.slotIdx - b.slotIdx);

  playoffs.forEach((fx) => {
    const resolveSource = (src: { fixtureId: string; pick: string } | null): BracketTeamObj | null => {
      if (!src || !src.fixtureId) return null;
      const srcFx = byId.get(src.fixtureId);
      if (!srcFx || srcFx.winnerSide === null || srcFx.winnerSide === undefined) return null;
      const winTeam = srcFx.winnerSide === 0 ? srcFx.team0 : srcFx.team1;
      return winTeam ? clone(winTeam) : null;
    };

    if (fx.source0) {
      const nextT0 = resolveSource(fx.source0);
      if (!fx.matchId) fx.team0 = nextT0;
    }
    if (fx.source1) {
      const nextT1 = resolveSource(fx.source1);
      if (!fx.matchId) fx.team1 = nextT1;
    }
  });
}

export function getGroupStandingsForCompPure(
  comp: Competition,
  groupLetter: string,
  historyList: Match[]
): StandingRow[] {
  const scoring = getCompetitionScoringConfigPure(comp);
  const allMatches = (historyList || []).filter((m) => getMatchCompId(m) === comp.id);
  const groupFixtureIds = new Set(
    (comp.fixtures || []).filter((f) => f.phase === 'group' && f.group === groupLetter).map((f) => f.id)
  );
  const groupMatches = allMatches.filter(
    (m) => m.competition?.fixtureId && groupFixtureIds.has(m.competition.fixtureId)
  );
  const gParts = (comp.participants || []).filter((p) => p.group === groupLetter);
  const entityMode = comp.rankingMode === 'individual' ? 'individual' : 'pairs';
  const rows = computeScopeStandings(groupMatches, {
    ...scoring,
    entityMode,
    eloBaseMatches: allMatches,
    seedParticipants: gParts
  });
  rows.sort(
    (a, b) =>
      b.pts - a.pts || b.setsDiff - a.setsDiff || b.gamesDiff - a.gamesDiff || b.wins - a.wins || b.elo - a.elo
  );
  return rows;
}

export function advanceGroupsToPlayoffsPure(comp: Competition, historyList: Match[]): boolean {
  if (!comp) return false;
  const letters = Array.from(
    new Set((comp.participants || []).map((p) => p.group).filter((g): g is string => Boolean(g)))
  ).sort();
  if (letters.length < 2) return false;
  const teamNumMap = buildTeamNumberMap(comp.participants);
  const adv = Math.max(1, Number(comp.advancePerGroup) || 2);
  const byGroup = letters.map((g) => {
    const rows = getGroupStandingsForCompPure(comp, g, historyList);
    return rows.slice(0, adv).map((r): BracketTeamObj => {
      const part = (comp.participants || []).find((p) => {
        if (p.type === 'pair') return canonicalPairKey(p.players?.[0], p.players?.[1]) === r.key;
        return (p.name || '').trim().toUpperCase() === r.key;
      });
      return part
        ? participantToTeamObj(part, teamNumMap.get(part.id) || null)!
        : { players: [r.name, ''], color: r.color || '#d4af37', label: r.name };
    });
  });

  const seeded: BracketTeamObj[] = [];
  for (let pos = 0; pos < adv; pos++) {
    if (pos % 2 === 0) {
      for (let gIdx = 0; gIdx < letters.length; gIdx++) {
        if (byGroup[gIdx]?.[pos]) seeded.push(byGroup[gIdx][pos]);
      }
    } else if (letters.length === 2) {
      for (let gIdx = 0; gIdx < letters.length; gIdx++) {
        if (byGroup[gIdx]?.[pos]) seeded.push(byGroup[gIdx][pos]);
      }
    } else if (letters.length === 4) {
      for (let gIdx = 0; gIdx < letters.length; gIdx++) {
        const oppG = gIdx ^ 1;
        if (byGroup[oppG]?.[pos]) seeded.push(byGroup[oppG][pos]);
      }
    } else {
      for (let gIdx = 0; gIdx < letters.length; gIdx++) {
        const shiftG = (gIdx + 1) % letters.length;
        if (byGroup[shiftG]?.[pos]) seeded.push(byGroup[shiftG][pos]);
      }
    }
  }

  if (seeded.length < 2) return false;
  const groupFixtures = (comp.fixtures || []).filter((f) => f.phase !== 'playoff');
  const playoffFixtures = generatePlayoffBracket(comp, seeded, {
    ...(comp.courtsCount ? { courtsCount: comp.courtsCount } : {})
  });
  comp.fixtures = [...groupFixtures, ...playoffFixtures];
  resolveCompetitionFixturesPure(comp, historyList);
  return true;
}

export function resolveQuickScoreOutcome(
  comp: Competition | null | undefined,
  setsArr: Array<Array<number | null>>,
  winSel = 'auto',
  isWo = false
): { ok: true; winnerSide: number | 'draw'; isDraw: boolean } | { ok: false; error: string } {
  if (isWo) {
    if (winSel === '0' || winSel === '1') return { ok: true, winnerSide: Number(winSel), isDraw: false };
    return { ok: false, error: 'Elegí qué pareja ganó por W.O.' };
  }
  if (winSel === '0' || winSel === '1') {
    return { ok: true, winnerSide: Number(winSel), isDraw: false };
  }
  let w0 = 0;
  let w1 = 0;
  let g0 = 0;
  let g1 = 0;
  (setsArr || []).forEach((s) => {
    const a = Number(s[0]) || 0;
    const b = Number(s[1]) || 0;
    g0 += a;
    g1 += b;
    if (a > b) w0++;
    else if (b > a) w1++;
  });
  if (winSel === 'draw') {
    if (w0 !== w1 || g0 !== g1) return { ok: false, error: 'Para guardar empate, ambos lados deben igualar el marcador' };
    return { ok: true, winnerSide: 'draw', isDraw: true };
  }
  if (w0 > w1) return { ok: true, winnerSide: 0, isDraw: false };
  if (w1 > w0) return { ok: true, winnerSide: 1, isDraw: false };
  if (isProyectoPadelComp(comp) && g0 === g1) {
    return { ok: true, winnerSide: 'draw', isDraw: true };
  }
  return { ok: false, error: 'Empate en sets: elegí manualmente la pareja ganadora' };
}
