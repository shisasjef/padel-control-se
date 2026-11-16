import { describe, expect, it } from 'vitest';
import {
  DEFAULT_SYNC_SERVER,
  buildCompactSetupData,
  decodeMatchShare,
  decodeRankingPayload,
  decodeSyncMessage,
  encodeCompSetupInline,
  encodeMatchShare,
  encodeRankingPayloadPure,
  encodeSyncMessage,
  hydrateFixturesFromCompact,
  normalizeSyncServerUrl
} from '../src/codecs/shareCodec';
import { createMatchFromPreset } from '../src/engines/matchEngine';
import type { Competition, Match, Preset, RankingContext, StandingRow } from '../src/types';

function makeSampleMatch(): Match {
  const preset: Preset = {
    mode: 'doubles',
    matchContext: 'tournament',
    compId: 'comp-9',
    fixtureId: 'fx-2',
    stageLabel: 'Semifinal',
    teams: [
      { players: ['Ale Galán', 'Fede Chingotto'], color: '#d4af37' },
      { players: ['Arturo Coello', 'Agustín Tapia'], color: '#2f8cff' }
    ],
    totalSets: 3,
    setsToWin: 2,
    gamesPerSet: 6,
    deuceRule: 'star',
    tiebreakAt: 6,
    tiebreakPoints: 7,
    finalSet: 'supertb',
    changeoverRule: 'odd',
    firstServer: [0, 1],
    secondServerIdx: 0,
    shotPrompt: true
  };
  const m = createMatchFromPreset(preset, {
    id: 'comp-9',
    kind: 'tournament',
    name: 'Master Finals',
    format: 'knockout',
    rankingMode: 'pairs',
    winPts: 3,
    lossPts: 1,
    participants: [],
    fixtures: []
  });
  m.events.push(
    { w: 0, type: 'winner', sub: 'smash', by: [0, 0], fs: true },
    { w: 1, type: 'ue', by: [0, 1], fs: false },
    { w: 0, type: 'df', fs: false },
    { w: 1, type: 'winner', sub: 'bandeja', by: [1, 1], fs: true }
  );
  return m;
}

describe('shareCodec', () => {
  it('validates and normalizes sync server URLs', () => {
    expect(normalizeSyncServerUrl('https://ntfy.sh/')).toBe('https://ntfy.sh');
    expect(normalizeSyncServerUrl('https://relay.example.com///')).toBe('https://relay.example.com');
    expect(normalizeSyncServerUrl('http://localhost:8080/')).toBe('http://localhost:8080');
    expect(normalizeSyncServerUrl('http://127.0.0.1:9000/')).toBe('http://127.0.0.1:9000');
    expect(normalizeSyncServerUrl('http://insecure.example.com')).toBe(DEFAULT_SYNC_SERVER);
    expect(normalizeSyncServerUrl('javascript:alert(1)')).toBe(DEFAULT_SYNC_SERVER);
    expect(normalizeSyncServerUrl('')).toBe(DEFAULT_SYNC_SERVER);
  });

  it('roundtrips live/point-by-point match share payload including UTF-8 names and rules', () => {
    const m = makeSampleMatch();
    const encoded = encodeMatchShare(m);
    expect(encoded.length).toBeGreaterThan(20);

    const decoded = decodeMatchShare(encoded);
    expect(decoded).not.toBeNull();
    expect(decoded?.teams[0].players).toEqual(['Ale Galán', 'Fede Chingotto']);
    expect(decoded?.teams[1].players).toEqual(['Arturo Coello', 'Agustín Tapia']);
    expect(decoded?.rules.deuceRule).toBe('star');
    expect(decoded?.rules.finalSet).toBe('supertb');
    expect(decoded?.competition?.compName).toBe('Master Finals');
    expect(decoded?.competition?.stageLabel).toBe('Semifinal');
    expect(decoded?.events).toHaveLength(4);
    expect(decoded?.events[0]).toMatchObject({ w: 0, type: 'winner', sub: 'smash', fs: true });
    expect(decoded?.events[2]).toMatchObject({ w: 0, type: 'df', fs: false });
  });

  it('roundtrips manual score, draw, and walkover flags and handles corrupt shares gracefully', () => {
    const m = makeSampleMatch();
    m.events = [];
    m.manualSets = [
      [6, 4, 0, null],
      [3, 6, 1, null]
    ];
    m.isDraw = true;
    m.manualWinner = 'draw';
    m.isWalkover = true;
    m.status = 'finished';

    const decoded = decodeMatchShare(encodeMatchShare(m));
    expect(decoded?.manualSets).toEqual([
      [6, 4, 0, null],
      [3, 6, 1, null]
    ]);
    expect(decoded?.isDraw).toBe(true);
    expect(decoded?.manualWinner).toBe('draw');
    expect(decoded?.isWalkover).toBe(true);

    expect(decodeMatchShare('!!!not-valid-base64!!!')).toBeNull();
  });

  it('roundtrips PCS1 sync envelopes and rejects non-matching messages', () => {
    const payload = { t: 'full', compId: 'c1', ts: 123456, state: { ok: true, count: 4 } };
    const encoded = encodeSyncMessage(payload);
    expect(encoded.startsWith('PCS1:')).toBe(true);
    expect(decodeSyncMessage(encoded)).toEqual(payload);
    expect(decodeSyncMessage('plain text notification')).toBeNull();
    expect(decodeSyncMessage('PCS1:@@@broken')).toBeNull();
  });

  it('builds compact setup payloads, hydrates fixtures, and enforces inline setup char budget', () => {
    const comp: Competition = {
      id: 'comp-2',
      kind: 'league',
      name: 'Liga Nocturna',
      format: 'round_robin',
      rankingMode: 'pairs',
      winPts: 3,
      drawPts: 2,
      lossPts: 1,
      setBonusPts: 0,
      gameBonusPts: 1,
      participants: [
        { id: 'p1', type: 'pair', players: ['Ana', 'Sol'], color: '#d4af37' },
        { id: 'p2', type: 'pair', players: ['Mia', 'Luz'], color: '#2f8cff' }
      ],
      fixtures: [
        {
          id: 'fx-1',
          phase: 'group',
          roundIdx: 0,
          roundLabel: 'Fecha 1',
          slotIdx: 0,
          group: 'A',
          team0: { players: ['Ana', 'Sol'], color: '#d4af37', participantId: 'p1' },
          team1: { players: ['Mia', 'Luz'], color: '#2f8cff', participantId: 'p2' },
          source0: null,
          source1: null,
          matchId: null,
          winnerSide: 0,
          isBye: false
        }
      ],
      defaultRules: { totalSets: 3, gamesPerSet: 6, deuceRule: 'golden' }
    };

    const compact = buildCompactSetupData(comp);
    expect(compact.fx).toHaveLength(1);
    const hydrated = hydrateFixturesFromCompact(compact.fx);
    expect(hydrated[0].team0?.players).toEqual(['Ana', 'Sol']);
    expect(hydrated[0].winnerSide).toBeNull();

    // BYE fixtures hydrate with automatic winnerSide
    const byeComp = buildCompactSetupData({
      ...comp,
      fixtures: [
        {
          ...comp.fixtures[0],
          id: 'fx-bye',
          team1: null,
          isBye: true
        }
      ]
    });
    expect(hydrateFixturesFromCompact(byeComp.fx)[0].winnerSide).toBe(0);

    const inline = encodeCompSetupInline(comp);
    expect(inline.length).toBeGreaterThan(0);
    expect(inline.length).toBeLessThanOrEqual(720);
  });

  it('encodes and decodes ranking payloads version 2 preserving full standings metrics', () => {
    const rows: StandingRow[] = [
      {
        name: 'Camila',
        key: 'CAMILA',
        color: '#d4af37',
        elo: 1142,
        lastDelta: 18,
        finishedMatches: 6,
        pts: 19,
        matches: 6,
        wins: 5,
        draws: 1,
        losses: 0,
        setsWon: 11,
        setsLost: 2,
        setsDiff: 9,
        gamesWon: 68,
        gamesLost: 31,
        gamesDiff: 37,
        winners: 42,
        ue: 15,
        fe: 7,
        shots: { smash: 14, bandeja: 10 },
        srvPtsWon: 55,
        srvPtsTotal: 75,
        firstServeIn: 60,
        doubleFaults: 2
      }
    ];
    const ctx: RankingContext = {
      scope: 'daily',
      id: 'rank-1',
      title: 'Ranking Club Pro',
      subtitle: 'Individual · +3V / +1D + ELO',
      entityMode: 'individual',
      primaryMetric: 'pts',
      comp: null,
      scoring: null,
      sortKey: 'pts',
      players: rows
    };

    const encoded = encodeRankingPayloadPure(rows, ctx);
    const decoded = decodeRankingPayload(encoded);
    expect(decoded).not.toBeNull();
    expect(decoded?.version).toBe(2);
    expect(decoded?.name).toBe('Ranking Club Pro');
    expect(decoded?.players[0]).toMatchObject({
      name: 'Camila',
      elo: 1142,
      pts: 19,
      wins: 5,
      draws: 1,
      gamesWon: 68,
      gamesDiff: 37,
      winners: 42
    });
  });

  it('preserves courtsCount, finished status, fixture court, resting players, and team numbers in compact sync setup', () => {
    const comp: Competition = {
      id: 'comp-pp',
      kind: 'tournament',
      name: 'PRO PÁDEL Noche',
      format: 'proyecto_padel',
      rankingMode: 'individual',
      winPts: 3,
      drawPts: 2,
      lossPts: 1,
      gameBonusPts: 1,
      courtsCount: 4,
      status: 'finished',
      finishedAt: 1700000000000,
      participants: [{ id: 'p1', type: 'player', name: 'Walter', color: '#d4af37' }],
      fixtures: [
        {
          id: 'fx-c1',
          phase: 'social',
          roundIdx: 0,
          roundLabel: 'Ronda 1',
          slotIdx: 0,
          group: null,
          court: 2,
          resting: ['Sofía', 'Lucas'],
          team0: { players: ['Walter', 'Mati'], color: '#d4af37', teamNum: 1 },
          team1: { players: ['Juan', 'Pedro'], color: '#2f8cff', teamNum: 7 },
          source0: null,
          source1: null,
          matchId: null,
          winnerSide: null,
          isBye: false
        }
      ]
    };

    const compact = buildCompactSetupData(comp);
    expect(compact.c.cc).toBe(4);
    expect(compact.c.st).toBe('finished');
    expect(compact.c.fa).toBe(1700000000000);
    expect(compact.fx[0].ct).toBe(2);
    expect(compact.fx[0].rp).toEqual(['Sofía', 'Lucas']);

    const hydrated = hydrateFixturesFromCompact(compact.fx);
    expect(hydrated[0].court).toBe(2);
    expect(hydrated[0].resting).toEqual(['Sofía', 'Lucas']);
    expect(hydrated[0].team0?.teamNum).toBe(1);
    expect(hydrated[0].team1?.teamNum).toBe(7);
  });
});
