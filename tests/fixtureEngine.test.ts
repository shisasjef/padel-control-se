import { describe, expect, it } from 'vitest';
import {
  advanceGroupsToPlayoffsPure,
  clampCourtsCount,
  generateGroupsFixtures,
  generateNextPairRoundFixtures,
  generatePlayoffBracket,
  generateRoundRobinFixtures,
  generateSocialCycleFixtures,
  generateSocialRoundFixtures,
  isCompFinished,
  isSocialDrawComp,
  resolveCompetitionFixturesPure,
  resolveQuickScoreOutcome
} from '../src/engines/fixtureEngine';
import type { Competition, Match, Participant } from '../src/types';

function makeDeterministicRng(seed = 42): () => number {
  let state = seed >>> 0;
  return () => {
    state = (state * 1664525 + 1013904223) >>> 0;
    return state / 0x100000000;
  };
}

function makePairParticipants(count: number): Participant[] {
  return Array.from({ length: count }, (_, i) => ({
    id: `pair-${i + 1}`,
    type: 'pair',
    players: [`J${i + 1}A`, `J${i + 1}B`],
    color: i % 2 === 0 ? '#d4af37' : '#2f8cff'
  }));
}

function makePlayerParticipants(count: number): Participant[] {
  return Array.from({ length: count }, (_, i) => ({
    id: `pl-${i + 1}`,
    type: 'player',
    name: `Player${i + 1}`,
    color: '#d4af37'
  }));
}

function makeComp(overrides: Partial<Competition> = {}): Competition {
  return {
    id: 'comp-1',
    kind: 'tournament',
    name: 'Copa Test',
    format: 'round_robin',
    rankingMode: 'pairs',
    winPts: 3,
    drawPts: 2,
    lossPts: 1,
    setBonusPts: 0,
    gameBonusPts: 0,
    numGroups: 2,
    advancePerGroup: 2,
    participants: [],
    fixtures: [],
    ...overrides
  };
}

function makeFinishedMatch(id: string, g0: number, g1: number, compId = 'comp-1', fixtureId = ''): Match {
  const w = g0 > g1 ? 0 : g1 > g0 ? 1 : null;
  return {
    id,
    createdAt: Date.now(),
    durationMs: 1000,
    status: 'finished',
    mode: 'doubles',
    competition: { kind: 'tournament', compId, compName: 'Copa Test', fixtureId },
    teams: [
      { players: ['A1', 'A2'], color: '#d4af37' },
      { players: ['B1', 'B2'], color: '#2f8cff' }
    ],
    rules: {
      totalSets: 1,
      setsToWin: 1,
      gamesPerSet: 6,
      deuceRule: 'golden',
      tiebreakAt: 6,
      tiebreakPoints: 7,
      finalSet: 'normal',
      changeoverRule: 'odd'
    },
    firstServer: [0, 0],
    secondServerIdx: 1,
    events: [],
    manualSets: [[g0, g1, w, null]],
    manualWinner: w === null ? 'draw' : w,
    isDraw: w === null
  };
}

describe('fixtureEngine', () => {
  it('generates rotating-partner Americano schedules for 4 and 8 individual players', () => {
    const comp4 = makeComp({ format: 'americano', rankingMode: 'individual', participants: makePlayerParticipants(4) });
    const fx4 = generateRoundRobinFixtures(comp4);
    expect(fx4).toHaveLength(3);
    const partnerPairs = new Set<string>();
    fx4.forEach((f) => {
      const all = [...(f.team0?.players || []), ...(f.team1?.players || [])];
      expect(new Set(all).size).toBe(4);
      partnerPairs.add([...(f.team0?.players || [])].sort().join('+'));
      partnerPairs.add([...(f.team1?.players || [])].sort().join('+'));
    });
    expect(partnerPairs.size).toBe(6); // C(4,2) = 6 unique pairs

    const comp8 = makeComp({ format: 'americano', rankingMode: 'individual', participants: makePlayerParticipants(8) });
    const fx8 = generateRoundRobinFixtures(comp8);
    expect(fx8).toHaveLength(14); // 7 rounds * 2 courts
    for (let r = 0; r < 7; r++) {
      const roundMatches = fx8.filter((f) => f.roundIdx === r);
      expect(roundMatches).toHaveLength(2);
      const playersInRound = roundMatches.flatMap((f) => [...(f.team0?.players || []), ...(f.team1?.players || [])]);
      expect(new Set(playersInRound).size).toBe(8);
    }
  });

  it('generates pair round-robin (even single, even double, and odd with BYE omitted)', () => {
    const comp4 = makeComp({ participants: makePairParticipants(4) });
    const single4 = generateRoundRobinFixtures(comp4, { doubleRound: false });
    expect(single4).toHaveLength(6); // C(4,2)

    const double4 = generateRoundRobinFixtures(comp4, { doubleRound: true });
    expect(double4).toHaveLength(12);

    const comp3 = makeComp({ participants: makePairParticipants(3) });
    const odd3 = generateRoundRobinFixtures(comp3);
    expect(odd3).toHaveLength(3); // C(3,2)
  });

  it('splits participants into balanced groups and advances top pairs to cross-seeded playoffs', () => {
    const pairs = makePairParticipants(8);
    const comp = makeComp({
      format: 'groups_playoffs',
      numGroups: 2,
      advancePerGroup: 2,
      participants: pairs
    });
    comp.fixtures = generateGroupsFixtures(comp, 2);

    expect(comp.fixtures).toHaveLength(12); // 2 groups * C(4,2)=6
    expect(comp.fixtures.filter((f) => f.group === 'A')).toHaveLength(6);
    expect(comp.fixtures.filter((f) => f.group === 'B')).toHaveLength(6);

    // Record group results so seeds rank deterministically inside each group
    const history: Match[] = comp.fixtures.map((f, idx) => {
      const id0 = Number((f.team0?.participantId || '').replace('pair-', ''));
      const id1 = Number((f.team1?.participantId || '').replace('pair-', ''));
      const w = id0 < id1 ? 0 : 1; // Lower index pair wins
      const m = makeFinishedMatch(`m-grp-${idx}`, w === 0 ? 6 : 2, w === 1 ? 6 : 2, comp.id, f.id);
      m.teams = [
        { players: f.team0!.players, color: f.team0!.color },
        { players: f.team1!.players, color: f.team1!.color }
      ];
      f.matchId = m.id;
      f.winnerSide = w;
      return m;
    });

    const advanced = advanceGroupsToPlayoffsPure(comp, history);
    expect(advanced).toBe(true);

    const semis = comp.fixtures.filter((f) => f.phase === 'playoff' && f.roundIdx === 0);
    const finals = comp.fixtures.filter((f) => f.phase === 'playoff' && f.roundIdx === 1);
    expect(semis).toHaveLength(2);
    expect(finals).toHaveLength(1);
    expect(finals[0].source0).toEqual({ fixtureId: semis[0].id, pick: 'winner' });
    expect(finals[0].source1).toEqual({ fixtureId: semis[1].id, pick: 'winner' });
    // Group winners play other group's runners-up
    expect(semis[0].team0?.players).not.toEqual(semis[0].team1?.players);
  });

  it('builds knockout bracket with BYE auto-advance and propagates winners through source links', () => {
    const pairs = makePairParticipants(3);
    const comp = makeComp({ format: 'knockout', participants: pairs });
    comp.fixtures = generatePlayoffBracket(comp);

    expect(comp.fixtures).toHaveLength(3); // 2 R0 matches + 1 final
    const byeMatch = comp.fixtures.find((f) => f.roundIdx === 0 && f.isBye);
    const realSemi = comp.fixtures.find((f) => f.roundIdx === 0 && !f.isBye)!;
    const finalFx = comp.fixtures.find((f) => f.roundIdx === 1)!;

    expect(byeMatch).toBeDefined();
    expect(byeMatch?.winnerSide).not.toBeNull();

    // Complete the real semifinal
    const semiMatch = makeFinishedMatch('m-semi', 6, 3, comp.id, realSemi.id);
    semiMatch.teams = [
      { players: realSemi.team0!.players, color: realSemi.team0!.color },
      { players: realSemi.team1!.players, color: realSemi.team1!.color }
    ];
    realSemi.matchId = semiMatch.id;

    resolveCompetitionFixturesPure(comp, [semiMatch]);
    expect(realSemi.winnerSide).toBe(0);
    expect(finalFx.team0).toBeTruthy();
    expect(finalFx.team1).toBeTruthy();
  });

  it('validates quick-score outcomes including W.O., ties, and PRO PÁDEL draws', () => {
    const normalComp = makeComp({ format: 'round_robin' });
    const ppComp = makeComp({ format: 'proyecto_padel' });

    expect(resolveQuickScoreOutcome(normalComp, [[6, 3], [6, 4]]).ok).toBe(true);
    expect(resolveQuickScoreOutcome(normalComp, [[6, 3], [6, 4]])).toEqual({
      ok: true,
      winnerSide: 0,
      isDraw: false
    });

    // W.O. requires explicit winner
    expect(resolveQuickScoreOutcome(normalComp, [[0, 0]], undefined, true).ok).toBe(false);
    expect(resolveQuickScoreOutcome(normalComp, [[6, 0]], '1', true)).toEqual({
      ok: true,
      winnerSide: 1,
      isDraw: false
    });

    // Tied 1-1 auto-resolves as draw in PRO PÁDEL, errors without tiebreaker in normal comp
    expect(resolveQuickScoreOutcome(ppComp, [[6, 4], [4, 6]])).toEqual({
      ok: true,
      winnerSide: 'draw',
      isDraw: true
    });
    expect(resolveQuickScoreOutcome(normalComp, [[6, 4], [4, 6]]).ok).toBe(false);
    expect(resolveQuickScoreOutcome(normalComp, [[6, 4], [4, 6]], 'draw')).toEqual({
      ok: true,
      winnerSide: 'draw',
      isDraw: true
    });
  });

  it('draws social PRO PÁDEL rounds respecting 1..10 courts, fair resting rotation, paused players, and zero early partner repeats', () => {
    expect(clampCourtsCount(0)).toBe(4);
    expect(clampCourtsCount(1)).toBe(1);
    expect(clampCourtsCount(25)).toBe(10);

    const comp = makeComp({
      format: 'proyecto_padel',
      rankingMode: 'individual',
      courtsCount: 4,
      participants: makePlayerParticipants(18)
    });
    expect(isSocialDrawComp(comp)).toBe(true);
    expect(isCompFinished(comp)).toBe(false);

    const rng = makeDeterministicRng(1234);
    const playCounts: Record<string, number> = {};
    const partnerPairs = new Set<string>();

    // Over 9 rounds with 18 players and 4 courts (16 play, 2 rest per round):
    // total slots = 9 * 16 = 144 -> every player must play exactly 8 matches!
    for (let r = 0; r < 9; r++) {
      const roundFx = generateSocialRoundFixtures(comp, [], { courtsCount: 4, rng });
      expect(roundFx).toHaveLength(4);
      expect(roundFx.map((f) => f.court)).toEqual([1, 2, 3, 4]);
      expect(roundFx[0].resting).toHaveLength(2);
      expect(roundFx[0].roundIdx).toBe(r);
      expect(roundFx[0].roundLabel).toBe(`Ronda ${r + 1}`);

      const activeInRound = roundFx.flatMap((f) => [...(f.team0?.players || []), ...(f.team1?.players || [])]);
      expect(new Set(activeInRound).size).toBe(16);
      roundFx[0].resting!.forEach((restName) => {
        expect(activeInRound).not.toContain(restName);
      });

      roundFx.forEach((f) => {
        const p0 = [...(f.team0?.players || [])].sort().join('+');
        const p1 = [...(f.team1?.players || [])].sort().join('+');
        expect(partnerPairs.has(p0)).toBe(false);
        expect(partnerPairs.has(p1)).toBe(false);
        partnerPairs.add(p0);
        partnerPairs.add(p1);
      });

      activeInRound.forEach((nm) => {
        playCounts[nm] = (playCounts[nm] || 0) + 1;
      });
      comp.fixtures.push(...roundFx);
    }

    expect(Object.keys(playCounts)).toHaveLength(18);
    expect(new Set(Object.values(playCounts))).toEqual(new Set([8]));

    // Pausing a player excludes them from subsequent rounds
    comp.participants[0].paused = true;
    const afterPauseFx = generateSocialRoundFixtures(comp, [], { courtsCount: 4, rng });
    const playersAfterPause = afterPauseFx.flatMap((f) => [...(f.team0?.players || []), ...(f.team1?.players || [])]);
    expect(playersAfterPause).not.toContain('Player1');
    expect(afterPauseFx[0].resting).not.toContain('Player1');
  });

  it('generates full social cycle for 16 players on 4 courts and avoids repeats from ad-hoc matches', () => {
    const comp16 = makeComp({
      format: 'proyecto_padel',
      rankingMode: 'individual',
      courtsCount: 4,
      participants: makePlayerParticipants(16)
    });
    const cycle = generateSocialCycleFixtures(comp16, [], {
      courtsCount: 4,
      rng: makeDeterministicRng(99)
    });
    expect(cycle).toHaveLength(15 * 4); // 15 rounds * 4 courts

    // Ad-hoc match between Player1 & Player2 prevents pairing them on the first drawn round for 4 players
    const comp4 = makeComp({
      format: 'proyecto_padel',
      rankingMode: 'individual',
      courtsCount: 2,
      participants: makePlayerParticipants(4)
    });
    const adHoc = makeFinishedMatch('adhoc-1', 4, 2, comp4.id, '');
    adHoc.teams = [
      { players: ['Player1', 'Player2'], color: '#d4af37' },
      { players: ['Player3', 'Player4'], color: '#2f8cff' }
    ];
    const nextFx = generateSocialRoundFixtures(comp4, [adHoc], {
      courtsCount: 2,
      rng: makeDeterministicRng(7)
    });
    expect(nextFx).toHaveLength(1);
    expect(nextFx[0].court).toBe(1);
    const pair0 = [...(nextFx[0].team0?.players || [])].sort().join('+');
    const pair1 = [...(nextFx[0].team1?.players || [])].sort().join('+');
    expect(pair0).not.toBe('Player1+Player2');
    expect(pair1).not.toBe('Player3+Player4');
  });

  it('shuffles knockout brackets, groups, and fixed-pair rounds preserving team numbers and courts', () => {
    const pairs6 = makePairParticipants(6);
    const koComp = makeComp({ format: 'knockout', courtsCount: 3, participants: pairs6 });
    const koFx = generatePlayoffBracket(koComp, null, {
      shuffle: true,
      courtsCount: 3,
      rng: makeDeterministicRng(777)
    });
    const r0 = koFx.filter((f) => f.roundIdx === 0);
    const playableR0 = r0.filter((f) => !f.isBye);
    expect(r0).toHaveLength(4);
    expect(playableR0).toHaveLength(2);
    expect(playableR0.map((f) => f.court)).toEqual([1, 2]);
    const assignedNums = r0
      .flatMap((f) => [f.team0?.teamNum, f.team1?.teamNum])
      .filter((n): n is number => typeof n === 'number')
      .sort((a, b) => a - b);
    expect(assignedNums).toEqual([1, 2, 3, 4, 5, 6]);

    // Groups shuffle respects groupManual pins and assigns courts across groups
    const pairs8 = makePairParticipants(8);
    pairs8[0].group = 'B';
    pairs8[0].groupManual = true;
    const grpComp = makeComp({ format: 'groups_playoff', courtsCount: 4, participants: pairs8 });
    const grpFx = generateGroupsFixtures(grpComp, 2, {
      shuffle: true,
      courtsCount: 4,
      rng: makeDeterministicRng(55)
    });
    expect(pairs8[0].group).toBe('B');
    expect(pairs8.filter((p) => p.group === 'A')).toHaveLength(4);
    expect(pairs8.filter((p) => p.group === 'B')).toHaveLength(4);
    const grpR0 = grpFx.filter((f) => f.roundIdx === 0);
    expect(grpR0.map((f) => f.court)).toEqual([1, 2, 3, 4]);

    // Open pairs round-by-round respects courtsCount and rotates resting pairs fairly
    const openComp = makeComp({ format: 'open', courtsCount: 3, participants: pairs8 });
    const openR1 = generateNextPairRoundFixtures(openComp, [], {
      courtsCount: 3,
      rng: makeDeterministicRng(12)
    });
    expect(openR1).toHaveLength(3);
    expect(openR1.map((f) => f.court)).toEqual([1, 2, 3]);
    expect(openR1[0].resting).toHaveLength(2);
    openComp.fixtures.push(...openR1);
    const openR2 = generateNextPairRoundFixtures(openComp, [], {
      courtsCount: 3,
      rng: makeDeterministicRng(13)
    });
    const playedR2Names = openR2.flatMap((f) => [f.team0?.label, f.team1?.label]);
    openR1[0].resting!.forEach((restingPairLabel) => {
      expect(playedR2Names).toContain(restingPairLabel);
    });
  });
});
