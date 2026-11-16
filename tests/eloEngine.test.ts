import { describe, expect, it } from 'vitest';
import {
  BASE_ELO,
  CALIBRATION_MATCHES_THRESHOLD,
  assignPlayerRanks,
  calculateMatchEloPreviewPure,
  computeEloRatings,
  computeScopeStandings,
  getEloLevel,
  sortStandingsRows
} from '../src/engines/eloEngine';
import type { Match, ManualSetEntry, Participant } from '../src/types';

function makeManualMatch(
  id: string,
  p0: [string, string],
  p1: [string, string],
  sets: ManualSetEntry[],
  opts: Partial<Match> = {}
): Match {
  return {
    id,
    createdAt: opts.createdAt ?? Date.now(),
    durationMs: 3600000,
    status: 'finished',
    mode: 'doubles',
    competition: opts.competition ?? { kind: 'daily', compId: null, compName: '' },
    teams: [
      { players: [...p0], color: '#d4af37' },
      { players: [...p1], color: '#2f8cff' }
    ],
    rules: {
      totalSets: 3,
      setsToWin: 2,
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
    manualSets: sets,
    ...opts
  };
}

describe('eloEngine', () => {
  it('maps ELO ratings to bounded Playtomic levels (1.00 - 7.00)', () => {
    expect(getEloLevel(BASE_ELO).level).toBe('2.50');
    expect(getEloLevel(1200).level).toBe('3.50');
    expect(getEloLevel(100).level).toBe('1.00');
    expect(getEloLevel(3000).level).toBe('7.00');
  });

  it('computes calibration ELO deltas symmetrically and applies 1.2x blowout bonus for >= 6 game diff', () => {
    // Tight match: 6-4, 6-4 (diff = 4 < 6) => K=50, E=0.5 => delta = +25 / -25
    const closeMatch = makeManualMatch(
      'm-close',
      ['Ana', 'Bea'],
      ['Caro', 'Dani'],
      [
        [6, 4, 0, null],
        [6, 4, 0, null]
      ],
      { createdAt: 1000 }
    );
    const closeRes = computeEloRatings([closeMatch]);
    expect(closeRes.playerRatings['ANA']).toBe(1025);
    expect(closeRes.playerRatings['CARO']).toBe(975);
    expect(closeRes.matchEloMap['m-close'].isBlowout).toBe(false);

    // Blowout match: 6-0, 6-0 (diff = 12 >= 6) => K=50 * 0.5 * 1.2 = +30 / -30
    const blowoutMatch = makeManualMatch(
      'm-blow',
      ['Ana', 'Bea'],
      ['Caro', 'Dani'],
      [
        [6, 0, 0, null],
        [6, 0, 0, null]
      ],
      { createdAt: 1000 }
    );
    const blowRes = computeEloRatings([blowoutMatch]);
    expect(blowRes.playerRatings['ANA']).toBe(1030);
    expect(blowRes.playerRatings['CARO']).toBe(970);
    expect(blowRes.matchEloMap['m-blow'].isBlowout).toBe(true);
    expect(blowRes.matchEloMap['m-blow'].multiplier).toBe(1.2);
  });

  it('switches from K=50 calibration to K=32 after CALIBRATION_MATCHES_THRESHOLD finished matches', () => {
    const history: Match[] = [];
    // Alternate winners so ELO stays near 1000 for first 10 matches
    for (let i = 0; i < CALIBRATION_MATCHES_THRESHOLD; i++) {
      const winner = i % 2;
      history.push(
        makeManualMatch(
          `m-${i}`,
          ['A1', 'A2'],
          ['B1', 'B2'],
          winner === 0
            ? [
                [6, 4, 0, null],
                [6, 4, 0, null]
              ]
            : [
                [4, 6, 1, null],
                [4, 6, 1, null]
              ],
          { createdAt: (i + 1) * 1000 }
        )
      );
    }

    const prev10 = computeEloRatings(history);
    expect(prev10.playerMatchCount['A1']).toBe(10);

    const eleventh = makeManualMatch(
      'm-11',
      ['A1', 'A2'],
      ['B1', 'B2'],
      [
        [6, 4, 0, null],
        [6, 4, 0, null]
      ],
      { createdAt: 999999 }
    );
    const step = calculateMatchEloPreviewPure(eleventh, prev10);
    expect(step?.pair0.players[0].k).toBe(32);
    expect(step?.pair0.players[0].delta).toBeLessThan(25);
  });

  it('treats draws with S=0.5 and excludes walkovers from ELO changes', () => {
    const mSetup = makeManualMatch(
      'm-setup',
      ['Fav1', 'Fav2'],
      ['Und1', 'Und2'],
      [
        [6, 2, 0, null],
        [6, 2, 0, null]
      ],
      { createdAt: 1000 }
    );
    const mDraw = makeManualMatch(
      'm-draw',
      ['Fav1', 'Fav2'],
      ['Und1', 'Und2'],
      [
        [6, 4, 0, null],
        [4, 6, 1, null]
      ],
      { createdAt: 2000, isDraw: true, manualWinner: 'draw' }
    );
    const mWo = makeManualMatch(
      'm-wo',
      ['Fav1', 'Fav2'],
      ['Und1', 'Und2'],
      [[6, 0, 0, null]],
      { createdAt: 3000, isWalkover: true, manualWinner: 0 }
    );

    const resBeforeWo = computeEloRatings([mSetup, mDraw]);
    const favBefore = resBeforeWo.playerRatings['FAV1'];
    const undBefore = resBeforeWo.playerRatings['UND1'];
    // Underdog drawing against stronger favorite gains ELO
    expect(resBeforeWo.matchEloMap['m-draw'].pair1.players[0].delta).toBeGreaterThan(0);
    expect(resBeforeWo.matchEloMap['m-draw'].pair0.players[0].delta).toBeLessThan(0);

    const resAfterWo = computeEloRatings([mSetup, mDraw, mWo]);
    expect(resAfterWo.playerRatings['FAV1']).toBe(favBefore);
    expect(resAfterWo.playerRatings['UND1']).toBe(undBefore);
    expect(resAfterWo.matchEloMap['m-wo'].pair0.players[0].delta).toBe(0);
  });

  it('computes competition standings with bonus points, draws, seeded participants, sorting, and ranks', () => {
    const seeds: Participant[] = [
      { id: 'p1', type: 'player', name: 'Leo' },
      { id: 'p2', type: 'player', name: 'Mati' },
      { id: 'p3', type: 'player', name: 'Nico' },
      { id: 'p4', type: 'player', name: 'Santi' },
      { id: 'p5', type: 'player', name: 'ZeroMatch' }
    ];

    const m1 = makeManualMatch(
      'c1',
      ['Leo', 'Mati'],
      ['Nico', 'Santi'],
      [
        [6, 4, 0, null],
        [6, 3, 0, null]
      ],
      { createdAt: 1000 }
    );
    const m2 = makeManualMatch(
      'c2',
      ['Leo', 'Nico'],
      ['Mati', 'Santi'],
      [
        [6, 4, 0, null],
        [3, 6, 1, null]
      ],
      { createdAt: 2000, isDraw: true, manualWinner: 'draw' }
    );

    const rows = computeScopeStandings([m1, m2], {
      entityMode: 'individual',
      winPts: 3,
      drawPts: 2,
      lossPts: 1,
      gameBonusPts: 1,
      seedParticipants: seeds
    });

    const leo = rows.find((r) => r.key === 'LEO')!;
    const mati = rows.find((r) => r.key === 'MATI')!;
    const zero = rows.find((r) => r.key === 'ZEROMATCH')!;

    // Leo: 1W (3+12=15) + 1D (2+9=11) = 26 pts, gamesWon = 21
    expect(leo.wins).toBe(1);
    expect(leo.draws).toBe(1);
    expect(leo.losses).toBe(0);
    expect(leo.gamesWon).toBe(21);
    expect(leo.pts).toBe(26);

    // Mati: 1W (3+12=15) + 1D (2+10=12) = 27 pts, gamesWon = 22
    expect(mati.pts).toBe(27);
    expect(zero.matches).toBe(0);
    expect(zero.elo).toBe(BASE_ELO);

    const sortedPts = assignPlayerRanks(sortStandingsRows(rows, 'pts', { tiebreakMode: 'games' }), 'pts', {
      tiebreakMode: 'games'
    });
    expect(sortedPts[0].key).toBe('MATI');
    expect(sortedPts[0].rank).toBe(1);
    expect(sortedPts[1].key).toBe('LEO');
    expect(sortedPts[1].rank).toBe(2);
    expect(sortedPts[sortedPts.length - 1].key).toBe('ZEROMATCH');

    // Exact tie receives equal rank
    const tied = assignPlayerRanks(
      sortStandingsRows(
        [
          { ...zero, key: 'X1', name: 'X1', pts: 10, setsDiff: 1, gamesDiff: 2, wins: 2, elo: 1000 },
          { ...zero, key: 'X2', name: 'X2', pts: 10, setsDiff: 1, gamesDiff: 2, wins: 2, elo: 1000 },
          { ...zero, key: 'X3', name: 'X3', pts: 6, setsDiff: 0, gamesDiff: 0, wins: 1, elo: 980 }
        ],
        'pts'
      ),
      'pts'
    );
    expect(tied.map((r) => r.rank)).toEqual([1, 1, 2]);
  });
});
