import { describe, expect, it } from 'vitest';
import { createMatchFromPreset } from '../src/engines/matchEngine';
import { computeStats } from '../src/engines/statsEngine';
import type { Match, Preset } from '../src/types';

function makePreset(overrides: Partial<Preset> = {}): Preset {
  return {
    mode: 'doubles',
    matchContext: 'daily',
    compId: '',
    fixtureId: '',
    stageLabel: '',
    teams: [
      { players: ['Ale', 'Juan'], color: '#d4af37' },
      { players: ['Martín', 'Franco'], color: '#2f8cff' }
    ],
    totalSets: 3,
    setsToWin: 2,
    gamesPerSet: 2,
    deuceRule: 'golden',
    tiebreakAt: 2,
    tiebreakPoints: 7,
    finalSet: 'normal',
    changeoverRule: 'odd',
    firstServer: [0, 0],
    secondServerIdx: 1,
    shotPrompt: true,
    ...overrides
  };
}

describe('statsEngine', () => {
  it('aggregates winners, shot subtypes, UE/FE/DF, 1st serve %, BP, GP, streaks, and momentum', () => {
    const m: Match = createMatchFromPreset(makePreset());

    // Game 1 (team 0 serves): build up 0-40 (break points), then reach 40-40 (Golden Point) and team 1 breaks
    m.events.push(
      { w: 1, type: 'winner', sub: 'smash', by: [1, 0], fs: true }, // 0-15
      { w: 1, type: 'df', fs: false }, // 0-30 (DF + UE to team 0 srv)
      { w: 1, type: 'ue', by: [0, 1], fs: true }, // 0-40 (3rd BP ahead)
      { w: 0, type: 'winner', sub: 'volea', by: [0, 0], fs: true }, // 15-40 (BP #1 saved)
      { w: 0, type: 'winner', sub: 'bandeja', by: [0, 0], fs: true }, // 30-40 (BP #2 saved)
      { w: 0, type: 'fe', by: [1, 1], fs: false }, // 40-40 (GP & BP #3)
      { w: 1, type: 'winner', sub: 'passing', by: [1, 1], fs: true } // Game 1 to Team 1 (break + GP)
    );

    const res = computeStats(m, 'all');

    expect(res.totalPts).toBe(7);
    expect(res.T[0].ptsWon).toBe(3);
    expect(res.T[1].ptsWon).toBe(4);

    // Team 0 serving stats: 7 srvPts, 2 faulted (1 DF, 1 2nd serve) => 5 firstServeIn
    expect(res.T[0].srvPtsTotal).toBe(7);
    expect(res.T[0].firstServeIn).toBe(5);
    expect(res.T[0].doubleFaults).toBe(1);
    expect(res.T[0].srvPtsWon).toBe(3);
    expect(res.T[1].retPtsWon).toBe(4);

    // Shot breakdowns & UE/FE/DF
    expect(res.T[0].winners).toBe(2);
    expect(res.T[0].shots.volea).toBe(1);
    expect(res.T[0].shots.bandeja).toBe(1);
    expect(res.T[0].ue).toBe(2); // 1 UE + 1 DF
    expect(res.T[1].winners).toBe(2);
    expect(res.T[1].shots.smash).toBe(1);
    expect(res.T[1].shots.passing).toBe(1);
    expect(res.T[1].fe).toBe(1);

    // Player stats attribution
    const pAle = res.P.find((p) => p.team === 0 && p.playerIdx === 0)!;
    expect(pAle.winners).toBe(2);
    expect(pAle.doubleFaults).toBe(1);
    expect(pAle.srvGamesTotal).toBe(1);
    expect(pAle.srvGamesWon).toBe(0);

    // Break points (0-40, 15-40, 30-40, 40-40 GP = 4 BPs faced, 3 saved, 1 converted)
    expect(res.T[0].bpFaced).toBe(4);
    expect(res.T[0].bpSaved).toBe(3);
    expect(res.T[1].bpTotal).toBe(4);
    expect(res.T[1].bpWon).toBe(1);

    // Golden Point won by returners
    expect(res.T[0].gpTotal).toBe(1);
    expect(res.T[1].gpWon).toBe(1);
    expect(res.T[1].gpRetWon).toBe(1);

    // Streaks & momentum
    expect(res.T[0].maxPtStreak).toBe(3);
    expect(res.T[1].maxPtStreak).toBe(3);
    expect(res.momentum).toEqual([0, -1, -2, -3, -2, -1, 0, -1]);
    expect(res.insights.length).toBeGreaterThan(0);
  });

  it('tracks multi-set boundaries and supports per-set filtering', () => {
    const m: Match = createMatchFromPreset(makePreset({ gamesPerSet: 2, tiebreakAt: 6 }));
    // Set 0: Team 0 wins 2 games cleanly (8 points) -> 2-0 set
    for (let i = 0; i < 8; i++) m.events.push({ w: 0, type: 'winner', sub: 'smash', by: [0, 0], fs: true });
    // Set 1: Team 1 wins 2 games cleanly (8 points) -> 0-2 set
    for (let i = 0; i < 8; i++) m.events.push({ w: 1, type: 'winner', sub: 'globo', by: [1, 1], fs: true });

    const all = computeStats(m, 'all');
    expect(all.totalPts).toBe(16);
    expect(all.setBoundaries).toEqual([8]);

    const set0 = computeStats(m, 0);
    expect(set0.totalPts).toBe(8);
    expect(set0.T[0].ptsWon).toBe(8);
    expect(set0.T[1].ptsWon).toBe(0);

    const set1 = computeStats(m, '1');
    expect(set1.totalPts).toBe(8);
    expect(set1.T[0].ptsWon).toBe(0);
    expect(set1.T[1].ptsWon).toBe(8);
    expect(set1.T[1].shots.globo).toBe(8);
  });

  it('falls back to manualPlayerStats when match has manualSets and zero point events', () => {
    const m: Match = createMatchFromPreset(makePreset());
    m.manualSets = [
      [6, 3, 0, null],
      [6, 4, 0, null]
    ];
    m.manualPlayerStats = {
      '0_0': { w: 12, u: 5, f: 3, st: 20, sw: 16, fs: 15, df: 1, sh: { smash: 7, bandeja: 5 } },
      '1_1': { w: 6, u: 9, f: 4, st: 18, sw: 10, fs: 12, df: 2 }
    };

    const res = computeStats(m, 'all');
    expect(res.totalPts).toBe(0);
    expect(res.T[0].winners).toBe(12);
    expect(res.T[0].ue).toBe(5);
    expect(res.T[0].firstServeIn).toBe(15);
    expect(res.T[1].doubleFaults).toBe(2);
    const p00 = res.P.find((p) => p.team === 0 && p.playerIdx === 0)!;
    expect(p00.shots.smash).toBe(7);
  });
});
