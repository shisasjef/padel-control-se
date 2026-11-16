import { canonicalPairKey, formatPairLabel, getDateKey, getMatchScopeMatches, playerLabel } from '../core/utils';
import type {
  Competition,
  CompetitionScoringConfig,
  ComputedMatchState,
  EloHistoryItem,
  EloLevelInfo,
  EloPlayerStepResult,
  EloRatingsResult,
  Match,
  MatchEloStep,
  Participant,
  StandingRow
} from '../types';
import { computeMatch } from './matchEngine';
import { computeStats } from './statsEngine';

export const BASE_ELO = 1000;
export const K_CALIBRATION = 50;
export const K_STANDARD = 32;
export const CALIBRATION_MATCHES_THRESHOLD = 10;
export const BLOWOUT_GAME_DIFF = 6;
export const BLOWOUT_MULTIPLIER = 1.2;
export const MIN_ELO = 100;

export function getEloLevel(elo: number): EloLevelInfo {
  const num = Number(elo) || BASE_ELO;
  let lvl = 2.5 + (num - BASE_ELO) / 200;
  lvl = Math.max(1.0, Math.min(7.0, lvl));
  const levelNum = Number(lvl.toFixed(2));
  const levelStr = levelNum.toFixed(2);

  let tier = 'Iniciación';
  let color = '#94a3b8';
  let icon = '🌱';

  if (lvl >= 6.0) {
    tier = 'Pro / Élite';
    color = '#ef4444';
    icon = '👑';
  } else if (lvl >= 5.0) {
    tier = 'Competición';
    color = '#a855f7';
    icon = '🏆';
  } else if (lvl >= 4.0) {
    tier = 'Avanzado';
    color = '#10b981';
    icon = '💎';
  } else if (lvl >= 3.0) {
    tier = 'Intermedio';
    color = '#f59e0b';
    icon = '⚡';
  } else if (lvl >= 2.0) {
    tier = 'Intermedio Bajo';
    color = '#38bdf8';
    icon = '🔷';
  }

  return { level: levelStr, levelNum, tier, color, icon, elo: Math.round(num) };
}

export interface MatchEntityInfo {
  name: string;
  key: string;
  idx: number;
  color: string;
  players: string[];
}

export function getMatchEntities(m: Match, t: number, entityMode = 'individual'): MatchEntityInfo[] {
  const isSingles = m.mode === 'singles' || (!m.teams?.[0]?.players?.[1] && !m.teams?.[1]?.players?.[1]);
  if (entityMode === 'pairs') {
    const p0 = playerLabel(m, t, 0).trim();
    const p1 = isSingles ? '' : playerLabel(m, t, 1).trim();
    const name = isSingles ? p0 : formatPairLabel(p0, p1);
    const key = isSingles ? p0.toUpperCase() : canonicalPairKey(p0, p1);
    return [{ name, key, idx: 0, color: m.teams?.[t]?.color || '#d4af37', players: isSingles ? [p0] : [p0, p1] }];
  }
  if (isSingles) {
    const nm = playerLabel(m, t, 0).trim();
    return [{ name: nm, key: nm.toUpperCase(), idx: 0, color: m.teams?.[t]?.color || '#d4af37', players: [nm] }];
  }
  const p0 = playerLabel(m, t, 0).trim();
  const p1 = playerLabel(m, t, 1).trim();
  return [
    { name: p0, key: p0.toUpperCase(), idx: 0, color: m.teams?.[t]?.color || '#d4af37', players: [p0] },
    { name: p1, key: p1.toUpperCase(), idx: 1, color: m.teams?.[t]?.color || '#d4af37', players: [p1] }
  ];
}

export function computeSingleMatchEloStep(
  m: Match,
  st: ComputedMatchState,
  ratingsMap: Record<string, number>,
  countMap: Record<string, number>,
  entityMode = 'individual'
): MatchEloStep {
  const isDraw = !!st.isDraw && st.matchWinner === null;
  const w = st.matchWinner ?? 0;
  const pair0 = getMatchEntities(m, 0, entityMode);
  const pair1 = getMatchEntities(m, 1, entityMode);

  const r0List = pair0.map((p) => ratingsMap[p.key] ?? BASE_ELO);
  const r1List = pair1.map((p) => ratingsMap[p.key] ?? BASE_ELO);

  const R0 = r0List.reduce((a, b) => a + b, 0) / r0List.length;
  const R1 = r1List.reduce((a, b) => a + b, 0) / r1List.length;

  const exp0 = 1 / (1 + Math.pow(10, (R1 - R0) / 400));
  const exp1 = 1 - exp0;

  const g0 = st.sets.reduce((sum, s) => sum + (s.games ? s.games[0] : 0), 0);
  const g1 = st.sets.reduce((sum, s) => sum + (s.games ? s.games[1] : 0), 0);
  const diffGames = Math.abs(g0 - g1);
  const isBlowout = diffGames >= BLOWOUT_GAME_DIFF;
  const M = isBlowout ? BLOWOUT_MULTIPLIER : 1.0;

  const S0 = isDraw ? 0.5 : w === 0 ? 1 : 0;
  const S1 = isDraw ? 0.5 : w === 1 ? 1 : 0;

  const evalSide = (
    pair: MatchEntityInfo[],
    rList: number[],
    score: number,
    exp: number
  ): EloPlayerStepResult[] =>
    pair.map((p, i) => {
      const eloBefore = rList[i];
      const matchCount = countMap[p.key] || 0;
      const k = matchCount < CALIBRATION_MATCHES_THRESHOLD ? K_CALIBRATION : K_STANDARD;
      const rawDelta = m.isWalkover ? 0 : k * M * (score - exp);
      let delta = 0;
      if (!m.isWalkover) {
        if (score === 1) delta = Math.max(1, Math.round(rawDelta));
        else if (score === 0) delta = Math.min(-1, Math.round(rawDelta));
        else delta = Math.round(rawDelta);
      }
      const eloAfter = Math.max(MIN_ELO, eloBefore + delta);
      return { name: p.name, key: p.key, eloBefore, delta, eloAfter, k };
    });

  return {
    matchId: m.id,
    winner: st.matchWinner,
    isDraw,
    diffGames,
    isBlowout,
    multiplier: M,
    pair0: { avgBefore: Math.round(R0), expPct: Math.round(exp0 * 100), players: evalSide(pair0, r0List, S0, exp0) },
    pair1: { avgBefore: Math.round(R1), expPct: Math.round(exp1 * 100), players: evalSide(pair1, r1List, S1, exp1) }
  };
}

export function computeEloRatings(
  matchesList: Match[] = [],
  opts: { entityMode?: string } = {}
): EloRatingsResult {
  const entityMode = opts.entityMode || 'individual';
  const playerRatings: Record<string, number> = {};
  const playerMatchCount: Record<string, number> = {};
  const playerLastDelta: Record<string, number> = {};
  const playerHistory: Record<string, EloHistoryItem[]> = {};
  const matchEloMap: Record<string, MatchEloStep> = {};

  const finished = (matchesList || [])
    .map((m) => ({ m, st: computeMatch(m) }))
    .filter(({ st }) => st.matchWinner !== null || st.isDraw)
    .sort((a, b) => (a.m.createdAt || 0) - (b.m.createdAt || 0) || String(a.m.id).localeCompare(String(b.m.id)));

  finished.forEach(({ m, st }) => {
    const step = computeSingleMatchEloStep(m, st, playerRatings, playerMatchCount, entityMode);
    if (!m.isWalkover) {
      [...step.pair0.players, ...step.pair1.players].forEach((res) => {
        playerRatings[res.key] = res.eloAfter;
        playerMatchCount[res.key] = (playerMatchCount[res.key] || 0) + 1;
        playerLastDelta[res.key] = res.delta;
        if (!playerHistory[res.key]) playerHistory[res.key] = [];
        playerHistory[res.key].push({
          matchId: m.id,
          delta: res.delta,
          newElo: res.eloAfter,
          date: m.createdAt
        });
      });
    }
    matchEloMap[m.id] = step;
  });

  return { playerRatings, playerMatchCount, playerLastDelta, playerHistory, matchEloMap };
}

export function calculateMatchEloPreviewPure(
  m: Match | null | undefined,
  eloState: EloRatingsResult | null = null,
  opts: { entityMode?: string; allMatches?: Match[] } = {}
): MatchEloStep | null {
  if (!m) return null;
  const entityMode = opts.entityMode || 'individual';
  const scopeMatches = eloState ? null : getMatchScopeMatches(m, opts.allMatches || []);
  const state = eloState || computeEloRatings(scopeMatches || [], { entityMode });
  if (state.matchEloMap[m.id]) return state.matchEloMap[m.id];

  const st = computeMatch(m);
  return computeSingleMatchEloStep(m, st, state.playerRatings, state.playerMatchCount, entityMode);
}

export function isProyectoPadelComp(comp: Competition | null | undefined): boolean {
  return comp?.format === 'proyecto_padel';
}

export function getCompetitionScoringConfigPure(
  comp: Competition | null | undefined,
  dailyDefaults: { winPts?: number; lossPts?: number } = {}
): CompetitionScoringConfig {
  if (!comp) {
    return {
      winPts: Number.isFinite(Number(dailyDefaults.winPts)) ? Number(dailyDefaults.winPts) : 3,
      lossPts: Number.isFinite(Number(dailyDefaults.lossPts)) ? Number(dailyDefaults.lossPts) : 1,
      drawPts: 2,
      setBonusPts: 0,
      gameBonusPts: 0
    };
  }
  const isPP = isProyectoPadelComp(comp);
  return {
    winPts: Number.isFinite(Number(comp.winPts)) ? Number(comp.winPts) : 3,
    lossPts: Number.isFinite(Number(comp.lossPts)) ? Number(comp.lossPts) : 1,
    drawPts: Number.isFinite(Number(comp.drawPts)) ? Number(comp.drawPts) : 2,
    setBonusPts: Number.isFinite(Number(comp.setBonusPts)) ? Number(comp.setBonusPts) : 0,
    gameBonusPts: Number.isFinite(Number(comp.gameBonusPts)) ? Number(comp.gameBonusPts) : isPP ? 1 : 0
  };
}

export function getCompScoringSummaryLabelPure(
  comp: Competition | null | undefined,
  sc: CompetitionScoringConfig | null = null,
  compact = false,
  dailyDefaults: { winPts?: number; lossPts?: number } = {}
): string {
  const cfg = sc || getCompetitionScoringConfigPure(comp, dailyDefaults);
  if (isProyectoPadelComp(comp) || (cfg.gameBonusPts || 0) > 0) {
    return compact
      ? `+${cfg.winPts}V / +${cfg.drawPts ?? 2}E / +${cfg.lossPts}D · +${cfg.gameBonusPts}/g`
      : `ELO Principal · Sec: +${cfg.winPts}V / +${cfg.drawPts ?? 2}E / +${cfg.lossPts}D + ${cfg.gameBonusPts}/game`;
  }
  const sbTxt = cfg.setBonusPts ? ` · +${cfg.setBonusPts}/set` : '';
  return compact ? `+${cfg.winPts}V / +${cfg.lossPts}D${sbTxt}` : `+${cfg.winPts}V / +${cfg.lossPts}D${sbTxt} + ELO`;
}

export function createEmptyStandingRec(
  name: string,
  key: string,
  color: string | undefined,
  eloState: EloRatingsResult
): StandingRow {
  return {
    name,
    key,
    color: color || '#d4af37',
    elo: eloState.playerRatings[key] ?? BASE_ELO,
    lastDelta: eloState.playerLastDelta[key] ?? 0,
    finishedMatches: eloState.playerMatchCount[key] ?? 0,
    pts: 0,
    matches: 0,
    wins: 0,
    draws: 0,
    losses: 0,
    setsWon: 0,
    setsLost: 0,
    setsDiff: 0,
    gamesWon: 0,
    gamesLost: 0,
    gamesDiff: 0,
    winners: 0,
    ue: 0,
    fe: 0,
    shots: { smash: 0, volea: 0, bandeja: 0, bajada: 0, dejada: 0, passing: 0, globo: 0 },
    srvPtsWon: 0,
    srvPtsTotal: 0,
    firstServeIn: 0,
    doubleFaults: 0
  };
}

export interface ScopeStandingsConfig {
  entityMode?: string;
  winPts?: number;
  lossPts?: number;
  drawPts?: number;
  setBonusPts?: number;
  gameBonusPts?: number;
  todayOnly?: boolean;
  todayDateKey?: string;
  seedParticipants?: Participant[];
  eloBaseMatches?: Match[];
}

export function computeScopeStandings(matchesList: Match[], config: ScopeStandingsConfig = {}): StandingRow[] {
  const entityMode = config.entityMode || 'individual';
  const winPts = Number.isFinite(Number(config.winPts)) ? Number(config.winPts) : 3;
  const lossPts = Number.isFinite(Number(config.lossPts)) ? Number(config.lossPts) : 1;
  const drawPts = Number.isFinite(Number(config.drawPts)) ? Number(config.drawPts) : 2;
  const setBonusPts = Number.isFinite(Number(config.setBonusPts)) ? Number(config.setBonusPts) : 0;
  const gameBonusPts = Number.isFinite(Number(config.gameBonusPts)) ? Number(config.gameBonusPts) : 0;
  const todayOnly = !!config.todayOnly;
  const todayKey = config.todayDateKey || getDateKey(Date.now());
  const seedParticipants = Array.isArray(config.seedParticipants) ? config.seedParticipants : [];

  const eloMatches = config.eloBaseMatches || matchesList;
  const eloState = computeEloRatings(eloMatches, { entityMode });
  const map = new Map<string, StandingRow>();

  seedParticipants.forEach((part) => {
    if (!part) return;
    if (entityMode === 'pairs' && part.type === 'pair') {
      const p0 = (part.players?.[0] || '').trim();
      const p1 = (part.players?.[1] || '').trim();
      if (!p0 && !p1) return;
      const key = canonicalPairKey(p0, p1);
      const name = formatPairLabel(p0, p1);
      if (!map.has(key)) map.set(key, createEmptyStandingRec(name, key, part.color, eloState));
    } else if (entityMode === 'individual') {
      const names = part.type === 'pair' ? part.players || [] : [part.name];
      names.forEach((nmRaw) => {
        const nm = String(nmRaw || '').trim();
        if (!nm) return;
        const key = nm.toUpperCase();
        if (!map.has(key)) map.set(key, createEmptyStandingRec(nm, key, part.color, eloState));
      });
    }
  });

  const targetMatches = todayOnly
    ? (matchesList || []).filter((m) => getDateKey(m.createdAt) === todayKey)
    : matchesList || [];

  const periodDeltaMap: Record<string, number> = {};

  targetMatches.forEach((m) => {
    const S = computeStats(m, 'all');
    const st = S.st;
    const w = st.matchWinner;
    const isDraw = !!st.isDraw && w === null;
    const isFinished = w !== null || isDraw;
    const matchElo = eloState.matchEloMap[m.id];

    const setsByTeam = [0, 0];
    const gamesByTeam = [0, 0];
    st.sets.forEach((s) => {
      if (s.winner === 0) setsByTeam[0]++;
      else if (s.winner === 1) setsByTeam[1]++;
      if (s.games) {
        gamesByTeam[0] += Number(s.games[0]) || 0;
        gamesByTeam[1] += Number(s.games[1]) || 0;
      }
    });

    if (todayOnly && matchElo) {
      [...matchElo.pair0.players, ...matchElo.pair1.players].forEach((r) => {
        periodDeltaMap[r.key] = (periodDeltaMap[r.key] || 0) + (r.delta || 0);
      });
    }

    for (let t = 0; t < 2; t++) {
      const opp = 1 - t;
      const entities = getMatchEntities(m, t, entityMode);
      entities.forEach((ent) => {
        if (!ent.key) return;
        if (!map.has(ent.key)) {
          map.set(ent.key, createEmptyStandingRec(ent.name, ent.key, ent.color, eloState));
        }
        const rec = map.get(ent.key)!;
        rec.matches++;
        if (isFinished) {
          const bonusPts = setsByTeam[t] * setBonusPts + gamesByTeam[t] * gameBonusPts;
          if (isDraw) {
            rec.draws++;
            rec.pts += drawPts + bonusPts;
          } else if (w === t) {
            rec.wins++;
            rec.pts += winPts + bonusPts;
          } else {
            rec.losses++;
            rec.pts += lossPts + bonusPts;
          }
        }
        rec.setsWon += setsByTeam[t];
        rec.setsLost += setsByTeam[opp];
        rec.setsDiff = rec.setsWon - rec.setsLost;
        rec.gamesWon += gamesByTeam[t];
        rec.gamesLost += gamesByTeam[opp];
        rec.gamesDiff = rec.gamesWon - rec.gamesLost;

        const matchingSP =
          entityMode === 'pairs'
            ? S.P.filter((sp) => sp.team === t)
            : S.P.filter((sp) => sp.team === t && sp.playerIdx === ent.idx);
        matchingSP.forEach((sp) => {
          rec.winners += sp.winners;
          rec.ue += sp.ue;
          rec.fe += sp.fe;
          if (sp.shots) {
            Object.entries(sp.shots).forEach(([k, v]) => {
              rec.shots[k] = (rec.shots[k] || 0) + v;
            });
          }
          rec.srvPtsWon += sp.srvPtsWon;
          rec.srvPtsTotal += sp.srvPtsTotal;
          rec.firstServeIn += sp.firstServeIn;
          rec.doubleFaults += sp.doubleFaults;
        });
      });
    }
  });

  const rows = Array.from(map.values());
  if (todayOnly) {
    rows.forEach((r) => {
      r.lastDelta = periodDeltaMap[r.key] ?? 0;
    });
  }
  return rows;
}

export function getCompSubtitle(
  comp: Competition,
  entityMode: string,
  scoring: CompetitionScoringConfig,
  groupSub = ''
): string {
  const kindWord = comp.kind === 'league' ? 'Liga' : 'Torneo';
  const modeWord = entityMode === 'pairs' ? 'Parejas' : 'Individual';
  if (isProyectoPadelComp(comp)) {
    return `PRO PÁDEL${groupSub} · ${modeWord} · ${getCompScoringSummaryLabelPure(comp, scoring, false)}`;
  }
  return `${kindWord}${groupSub} · ${modeWord} · ${getCompScoringSummaryLabelPure(comp, scoring, false)}`;
}

export function sortStandingsRows(
  rows: StandingRow[],
  sortKey = 'pts',
  opts: { tiebreakMode?: string } = {}
): StandingRow[] {
  const list = [...(rows || [])];
  if (sortKey === 'pts') {
    if (opts.tiebreakMode === 'games') {
      list.sort(
        (a, b) =>
          (b.pts || 0) - (a.pts || 0) ||
          (b.gamesWon || 0) - (a.gamesWon || 0) ||
          (b.gamesDiff || 0) - (a.gamesDiff || 0) ||
          (b.elo || 0) - (a.elo || 0) ||
          b.wins - a.wins
      );
    } else {
      list.sort(
        (a, b) =>
          (b.pts || 0) - (a.pts || 0) ||
          (b.setsDiff || 0) - (a.setsDiff || 0) ||
          (b.gamesDiff || 0) - (a.gamesDiff || 0) ||
          b.wins - a.wins ||
          b.elo - a.elo
      );
    }
  } else if (sortKey === 'elo') {
    list.sort(
      (a, b) =>
        (b.elo || 0) - (a.elo || 0) ||
        (b.pts || 0) - (a.pts || 0) ||
        (b.gamesWon || 0) - (a.gamesWon || 0) ||
        (b.gamesDiff || 0) - (a.gamesDiff || 0) ||
        b.wins - a.wins ||
        b.matches - a.matches
    );
  } else if (sortKey === 'wins') {
    list.sort((a, b) => b.wins - a.wins || (b.pts || 0) - (a.pts || 0) || b.elo - a.elo || b.matches - a.matches);
  } else if (sortKey === 'matches') {
    list.sort((a, b) => b.matches - a.matches || b.wins - a.wins || (b.pts || 0) - (a.pts || 0) || b.elo - a.elo);
  }
  return list;
}

export function assignPlayerRanks(
  players: StandingRow[],
  sortKey = 'pts',
  opts: { tiebreakMode?: string } = {}
): StandingRow[] {
  let currentRank = 1;
  for (let i = 0; i < players.length; i++) {
    if (i > 0) {
      const prev = players[i - 1];
      const curr = players[i];
      let isSame = false;
      if (sortKey === 'pts') {
        isSame =
          opts.tiebreakMode === 'games'
            ? (curr.pts || 0) === (prev.pts || 0) &&
              (curr.gamesWon || 0) === (prev.gamesWon || 0) &&
              (curr.gamesDiff || 0) === (prev.gamesDiff || 0) &&
              curr.elo === prev.elo
            : (curr.pts || 0) === (prev.pts || 0) &&
              (curr.setsDiff || 0) === (prev.setsDiff || 0) &&
              (curr.gamesDiff || 0) === (prev.gamesDiff || 0) &&
              curr.wins === prev.wins;
      } else if (sortKey === 'elo') {
        isSame =
          curr.elo === prev.elo &&
          (curr.pts || 0) === (prev.pts || 0) &&
          (curr.gamesWon || 0) === (prev.gamesWon || 0) &&
          (curr.gamesDiff || 0) === (prev.gamesDiff || 0);
      } else if (sortKey === 'wins') {
        isSame = curr.wins === prev.wins && curr.elo === prev.elo;
      } else if (sortKey === 'matches') {
        isSame = curr.matches === prev.matches && curr.wins === prev.wins;
      }
      if (!isSame) {
        currentRank++;
      }
    }
    players[i].rank = currentRank;
  }
  return players;
}
