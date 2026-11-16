import { canonicalPairKey, clone, formatPairLabel, getMatchCompId } from '../core/utils';
import type { BracketTeamObj, Competition, Fixture, Match, Participant, StandingRow } from '../types';
import { computeScopeStandings, getCompetitionScoringConfigPure, isProyectoPadelComp } from './eloEngine';
import { computeMatch } from './matchEngine';

export function newCompId(prefix = 'cmp'): string {
  return `${prefix}_` + Math.random().toString(36).slice(2, 6) + Date.now().toString(36).slice(-3);
}

export function participantToTeamObj(part: Participant | null | undefined): BracketTeamObj | null {
  if (!part) return null;
  if (part.type === 'pair') {
    const p0 = (part.players?.[0] || '').trim() || 'DRIVE';
    const p1 = (part.players?.[1] || '').trim() || 'REVÉS';
    return {
      players: [p0, p1],
      color: part.color || '#d4af37',
      label: formatPairLabel(p0, p1),
      participantId: part.id
    };
  }
  return {
    players: [part.name || 'Jugador', ''],
    color: part.color || '#d4af37',
    label: part.name || 'Jugador',
    participantId: part.id
  };
}

export function generateRoundRobinFixtures(
  comp: Pick<Competition, 'participants'>,
  opts: {
    participants?: Participant[];
    phase?: string;
    group?: string | null;
    doubleRound?: boolean;
  } = {}
): Fixture[] {
  const parts = opts.participants || comp.participants || [];
  const phase = opts.phase || 'league';
  const group = opts.group || null;
  const doubleRound = !!opts.doubleRound;

  const allIndividual = parts.length >= 4 && parts.every((p) => p.type === 'player');
  const out: Fixture[] = [];

  if (allIndividual) {
    const N = parts.length;
    const courts = Math.floor(N / 4);
    const totalRounds = N === 4 ? 3 : N % 4 === 0 ? N - 1 : N;
    const playedCount = new Array<number>(N).fill(0);
    const partnered = Array.from({ length: N }, () => new Array<number>(N).fill(0));
    const faced = Array.from({ length: N }, () => new Array<number>(N).fill(0));

    for (let r = 0; r < totalRounds; r++) {
      const order = Array.from({ length: N }, (_, i) => i).sort((a, b) => {
        if (playedCount[a] !== playedCount[b]) return playedCount[a] - playedCount[b];
        return ((a + r) % N) - ((b + r) % N);
      });
      const activeIdxs = order.slice(0, courts * 4);
      const used = new Set<number>();

      for (let c = 0; c < courts; c++) {
        const avail = activeIdxs.filter((idx) => !used.has(idx));
        const quad = avail.slice(0, 4);
        quad.forEach((idx) => used.add(idx));

        const splits: Array<[[number, number], [number, number]]> = [
          [
            [quad[0], quad[1]],
            [quad[2], quad[3]]
          ],
          [
            [quad[0], quad[2]],
            [quad[1], quad[3]]
          ],
          [
            [quad[0], quad[3]],
            [quad[1], quad[2]]
          ]
        ];
        let bestSplit = splits[0];
        let bestScore = Infinity;
        splits.forEach((sp) => {
          const [tA, tB] = sp;
          const pPen = (partnered[tA[0]][tA[1]] + partnered[tB[0]][tB[1]]) * 100;
          const fPen =
            faced[tA[0]][tB[0]] + faced[tA[0]][tB[1]] + faced[tA[1]][tB[0]] + faced[tA[1]][tB[1]];
          const sc = pPen + fPen;
          if (sc < bestScore) {
            bestScore = sc;
            bestSplit = sp;
          }
        });

        const [tA, tB] = bestSplit;
        partnered[tA[0]][tA[1]]++;
        partnered[tA[1]][tA[0]]++;
        partnered[tB[0]][tB[1]]++;
        partnered[tB[1]][tB[0]]++;
        tA.forEach((i) =>
          tB.forEach((j) => {
            faced[i][j]++;
            faced[j][i]++;
          })
        );
        quad.forEach((i) => {
          playedCount[i]++;
        });

        const pA0 = parts[tA[0]];
        const pA1 = parts[tA[1]];
        const pB0 = parts[tB[0]];
        const pB1 = parts[tB[1]];
        out.push({
          id: newCompId('fx'),
          phase,
          roundIdx: r,
          roundLabel: group ? `Grupo ${group} · Fecha ${r + 1}` : `Fecha ${r + 1}`,
          slotIdx: c,
          group,
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
        });
      }
    }
    return out;
  }

  if (parts.length < 2) return out;
  const list: Array<Participant | null> = [...parts];
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
          out.push({
            id: newCompId('fx'),
            phase,
            roundIdx: rIdx,
            roundLabel: group ? `Grupo ${group} · Fecha ${rIdx + 1}` : `Fecha ${rIdx + 1}`,
            slotIdx: slot++,
            group,
            team0: participantToTeamObj(first),
            team1: participantToTeamObj(second),
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

export function generateGroupsFixtures(comp: Pick<Competition, 'participants'>, numGroups = 2): Fixture[] {
  const parts = comp.participants || [];
  if (parts.length < 4) return [];
  const gCount = Math.max(2, Math.min(4, Number(numGroups) || 2));
  const letters = ['A', 'B', 'C', 'D'].slice(0, gCount);

  parts.forEach((p, idx) => {
    if (!p.group || !letters.includes(p.group)) {
      p.group = letters[idx % gCount];
    }
  });

  const fixtures: Fixture[] = [];
  letters.forEach((g) => {
    const gParts = parts.filter((p) => p.group === g);
    if (gParts.length >= 2) {
      fixtures.push(...generateRoundRobinFixtures(comp, { participants: gParts, phase: 'group', group: g }));
    }
  });
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
  comp: Pick<Competition, 'participants'>,
  teamsOverride: BracketTeamObj[] | null = null
): Fixture[] {
  const teams = (teamsOverride || (comp.participants || []).map(participantToTeamObj)).filter(
    (t): t is BracketTeamObj => Boolean(t)
  );
  if (teams.length < 2) return [];

  let size = 2;
  while (size < teams.length && size < 32) size *= 2;
  const order = buildBracketSeedOrder(size);

  const fixtures: Fixture[] = [];
  const roundsFixtures: Fixture[][] = [];

  const r0Count = size / 2;
  const r0Label = getBracketRoundLabel(r0Count);
  const r0: Fixture[] = [];
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
  const adv = Math.max(1, Number(comp.advancePerGroup) || 2);
  const byGroup = letters.map((g) => {
    const rows = getGroupStandingsForCompPure(comp, g, historyList);
    return rows.slice(0, adv).map((r): BracketTeamObj => {
      const part = (comp.participants || []).find((p) => {
        if (p.type === 'pair') return canonicalPairKey(p.players?.[0], p.players?.[1]) === r.key;
        return (p.name || '').trim().toUpperCase() === r.key;
      });
      return part
        ? participantToTeamObj(part)!
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
  const playoffFixtures = generatePlayoffBracket(comp, seeded);
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
