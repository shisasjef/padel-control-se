import { describe, expect, it } from 'vitest';
import {
  computeMatch,
  createMatchFromPreset,
  getServerRotation,
  regularPointCall
} from '../src/engines/matchEngine';
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
    gamesPerSet: 6,
    deuceRule: 'golden',
    tiebreakAt: 6,
    tiebreakPoints: 7,
    finalSet: 'normal',
    changeoverRule: 'odd',
    firstServer: [0, 0],
    secondServerIdx: 1,
    shotPrompt: false,
    ...overrides
  };
}

function makeMatch(overrides: Partial<Preset> = {}): Match {
  return createMatchFromPreset(makePreset(overrides));
}

function addPoints(m: Match, winners: number[]): void {
  for (const w of winners) {
    m.events.push({ w, type: 'pt' });
  }
}

function winGames(m: Match, team: number, count: number): void {
  for (let i = 0; i < count; i++) {
    addPoints(m, [team, team, team, team]);
  }
}

describe('matchEngine', () => {
  it('initializes match defaults and server rotation properly', () => {
    const m = makeMatch({ firstServer: [0, 1], secondServerIdx: 0 });
    expect(m.teams[0].players).toEqual(['Ale', 'Juan']);
    expect(m.rules.setsToWin).toBe(2);
    expect(getServerRotation(m)).toEqual([
      [0, 1],
      [1, 0],
      [0, 0],
      [1, 1]
    ]);
  });

  it('tracks regular point calls, serve side alternation, and game transition', () => {
    const m = makeMatch({ changeoverRule: 'odd' });

    let st = computeMatch(m);
    expect(st.pointDisplay).toEqual(['0', '0']);
    expect(st.srvTeam).toBe(0);
    expect(st.srvPlayer).toBe(0);
    expect(st.srvSide).toBe('D');

    addPoints(m, [0]);
    st = computeMatch(m);
    expect(st.pointDisplay).toEqual(['15', '0']);
    expect(st.srvSide).toBe('R');

    addPoints(m, [0, 0]);
    st = computeMatch(m);
    expect(st.pointDisplay).toEqual(['40', '0']);
    expect(st.srvSide).toBe('R');

    addPoints(m, [0]);
    st = computeMatch(m);
    expect(st.curSet.games).toEqual([1, 0]);
    expect(st.srvTeam).toBe(1);
    expect(st.srvPlayer).toBe(1);
    expect(st.lastTransition).toMatchObject({
      type: 'game',
      winner: 0,
      wasBreak: false,
      changeover: true
    });
  });

  it('resolves Golden Point at 40-40 as decisive break point and game win', () => {
    const m = makeMatch({ deuceRule: 'golden' });
    addPoints(m, [0, 0, 0, 1, 1, 1]);

    let st = computeMatch(m);
    expect(st.pointDisplay).toEqual(['40', '40']);
    expect(st.isGP).toBe(true);
    expect(st.isStar).toBe(false);
    expect(st.isBP).toBe(true);

    addPoints(m, [1]);
    st = computeMatch(m);
    expect(st.curSet.games).toEqual([0, 1]);
    expect(st.lastTransition?.wasBreak).toBe(true);
  });

  it('enforces FIP Star Point: 2 advantages allowed, 3rd deuce triggers decisive 40 ★', () => {
    const m = makeMatch({ deuceRule: 'star' });
    // Reach 40-40 (deuce #1)
    addPoints(m, [0, 0, 0, 1, 1, 1]);
    let st = computeMatch(m);
    expect(st.curDeuceCount).toBe(1);
    expect(st.isStar).toBe(false);
    expect(st.isGP).toBe(false);
    expect(st.pointDisplay).toEqual(['40', '40']);

    // Advantage #1
    addPoints(m, [0]);
    st = computeMatch(m);
    expect(st.pointDisplay).toEqual(['AD', '40']);
    expect(st.curAdvNumber).toBe(1);

    // Back to 40-40 (deuce #2)
    addPoints(m, [1]);
    st = computeMatch(m);
    expect(st.curDeuceCount).toBe(2);
    expect(st.isStar).toBe(false);

    // Advantage #2
    addPoints(m, [1]);
    st = computeMatch(m);
    expect(st.pointDisplay).toEqual(['40', 'AD']);
    expect(st.curAdvNumber).toBe(2);
    expect(st.isBP).toBe(true);

    // Back to 40-40 (deuce #3 => STAR POINT!)
    addPoints(m, [0]);
    st = computeMatch(m);
    expect(st.curDeuceCount).toBe(3);
    expect(st.isStar).toBe(true);
    expect(st.isGP).toBe(true);
    expect(st.isBP).toBe(true);
    expect(st.pointDisplay).toEqual(['40 ★', '40 ★']);
    expect(regularPointCall(5, 5, 'star', 3)).toBe('40-40 ★');

    // Receiver wins Star Point -> immediately wins game
    addPoints(m, [1]);
    st = computeMatch(m);
    expect(st.curSet.games).toEqual([0, 1]);
  });

  it('continues past 3 deuces under Classic Advantage rule until 2-point lead', () => {
    const m = makeMatch({ deuceRule: 'adv' });
    addPoints(m, [0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1]);
    let st = computeMatch(m);
    expect(st.curDeuceCount).toBe(4);
    expect(st.isGP).toBe(false);
    expect(st.isStar).toBe(false);
    expect(st.curSet.games).toEqual([0, 0]);

    addPoints(m, [0, 0]);
    st = computeMatch(m);
    expect(st.curSet.games).toEqual([1, 0]);
  });

  it('plays regular Tie-Break at 6-6 with server cadence, 6-pt changeover, and win-by-2', () => {
    const m = makeMatch({ totalSets: 3, gamesPerSet: 6, tiebreakAt: 6, tiebreakPoints: 7, changeoverRule: 'odd' });
    for (let i = 0; i < 5; i++) {
      winGames(m, 0, 1);
      winGames(m, 1, 1);
    }
    winGames(m, 0, 1);
    winGames(m, 1, 1);

    let st = computeMatch(m);
    expect(st.curSet.games).toEqual([6, 6]);
    expect(st.isTB).toBe(true);
    expect(st.srvTeam).toBe(0);
    expect(st.srvPlayer).toBe(0);

    // 1 point played -> server switches to rotation index 1 ([1, 1])
    addPoints(m, [0]);
    st = computeMatch(m);
    expect(st.srvTeam).toBe(1);
    expect(st.srvPlayer).toBe(1);

    // Points 2..6 reach 3-3 => sumTB = 6 triggers tb_changeover
    addPoints(m, [0, 0, 1, 1, 1]);
    st = computeMatch(m);
    expect(st.p).toEqual([3, 3]);
    expect(st.lastTransition).toEqual({ type: 'tb_changeover', tbScore: [3, 3] });

    // Reach 6-6, then 7-6 is still ongoing (win by 2), then 8-6 wins set
    addPoints(m, [0, 1, 0, 1, 0, 1, 0]);
    st = computeMatch(m);
    expect(st.isTB).toBe(true);
    expect(st.p).toEqual([7, 6]);
    expect(st.sp).toEqual([true, false]);

    addPoints(m, [0]);
    st = computeMatch(m);
    expect(st.sets[0].winner).toBe(0);
    expect(st.sets[0].games).toEqual([7, 6]);
    expect(st.sets[0].tbScore).toEqual([8, 6]);
    expect(st.curSetIdx).toBe(1);
  });

  it('triggers deciding Súper Tie-Break to 10 points when sets are split 1-1', () => {
    const m = makeMatch({ totalSets: 3, gamesPerSet: 6, finalSet: 'supertb' });
    winGames(m, 0, 6);
    winGames(m, 1, 6);

    let st = computeMatch(m);
    expect(st.setsWon).toEqual([1, 1]);
    expect(st.curSetIdx).toBe(2);
    expect(st.isSuperTB).toBe(true);
    expect(st.isTB).toBe(true);

    // Reach 9-8 => Set Point & Match Point for team 0
    for (let i = 0; i < 8; i++) addPoints(m, [0, 1]);
    addPoints(m, [0]);
    st = computeMatch(m);
    expect(st.p).toEqual([9, 8]);
    expect(st.sp).toEqual([true, false]);
    expect(st.mp).toEqual([true, false]);

    // 10-8 wins match
    addPoints(m, [0]);
    st = computeMatch(m);
    expect(st.matchWinner).toBe(0);
    expect(st.setsWon).toEqual([2, 1]);
    expect(st.sets[2].tbScore).toEqual([10, 8]);
    expect(st.lastTransition).toMatchObject({ type: 'match', winner: 0 });
  });

  it('honors changeoverRule options ("odd", "set", "none")', () => {
    const mOdd = makeMatch({ changeoverRule: 'odd' });
    winGames(mOdd, 0, 1);
    expect(computeMatch(mOdd).lastTransition?.changeover).toBe(true);
    winGames(mOdd, 0, 1);
    expect(computeMatch(mOdd).lastTransition?.changeover).toBe(false);

    const mSet = makeMatch({ changeoverRule: 'set' });
    winGames(mSet, 0, 1);
    expect(computeMatch(mSet).lastTransition?.changeover).toBe(false);
    winGames(mSet, 0, 5);
    expect(computeMatch(mSet).lastTransition).toMatchObject({ type: 'set', changeover: true });

    const mNone = makeMatch({ changeoverRule: 'none' });
    winGames(mNone, 0, 1);
    expect(computeMatch(mNone).lastTransition?.changeover).toBe(false);
    winGames(mNone, 0, 5);
    expect(computeMatch(mNone).lastTransition).toMatchObject({ type: 'set', changeover: false });
  });

  it('flags Set Point & Match Point accurately', () => {
    const m = makeMatch({ totalSets: 3 });
    winGames(m, 0, 6); // team 0 leads 1-0 in sets
    winGames(m, 0, 5);
    winGames(m, 1, 4);
    addPoints(m, [0, 0, 0]); // 40-0 serving for 6-4 and match

    const st = computeMatch(m);
    expect(st.sp).toEqual([true, false]);
    expect(st.mp).toEqual([true, false]);
  });

  it('handles manualSets and isDraw matches without replaying point events', () => {
    const m = makeMatch();
    m.manualSets = [
      [6, 4, 0, null],
      [4, 6, 1, null]
    ];
    m.isDraw = true;
    m.manualWinner = 'draw';
    m.status = 'finished';

    const st = computeMatch(m);
    expect(st.isDraw).toBe(true);
    expect(st.matchWinner).toBeNull();
    expect(st.setsWon).toEqual([1, 1]);
    expect(st.srvSide).toBeNull();
    expect(st.sets[0].games).toEqual([6, 4]);
    expect(st.sets[1].games).toEqual([4, 6]);
  });
});
