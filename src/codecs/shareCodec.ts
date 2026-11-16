import type { Competition, Fixture, Match, SharedRanking, StandingRow } from '../types';

export const DEFAULT_SYNC_SERVER = 'https://ntfy.sh';

export const SUB_TYPES = ['winner', 'smash', 'volea', 'bandeja', 'bajada', 'dejada', 'passing', 'globo'] as const;

export function normalizeSyncServerUrl(raw: unknown): string {
  const s = String(raw || '').trim().replace(/\/+$/, '');
  if (!s) return DEFAULT_SYNC_SERVER;
  try {
    const u = new URL(s);
    if (
      u.protocol === 'https:' ||
      (u.protocol === 'http:' && (u.hostname === 'localhost' || u.hostname === '127.0.0.1'))
    ) {
      return u.origin + (u.pathname === '/' ? '' : u.pathname.replace(/\/+$/, ''));
    }
  } catch {}
  return DEFAULT_SYNC_SERVER;
}

function bytesToBase64Url(bytes: Uint8Array): string {
  let bin = '';
  for (let i = 0; i < bytes.length; i++) {
    bin += String.fromCharCode(bytes[i]);
  }
  return btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function base64UrlToBytes(b64: string): Uint8Array {
  const norm = String(b64 || '').trim().replace(/-/g, '+').replace(/_/g, '/');
  const bin = atob(norm);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) {
    bytes[i] = bin.charCodeAt(i);
  }
  return bytes;
}

export function encodeB64Utf8(obj: unknown): string {
  const json = JSON.stringify(obj);
  const bytes = new TextEncoder().encode(json);
  return bytesToBase64Url(bytes);
}

export function decodeB64Utf8<T = unknown>(b64: string): T | null {
  const norm = String(b64 || '').trim();
  if (!norm) return null;
  const bytes = base64UrlToBytes(norm);
  const json = new TextDecoder().decode(bytes);
  return JSON.parse(json) as T;
}

export function encodeMatchShare(m: Match): string {
  try {
    const TMAP_REV: Record<string, number> = { pt: 0, winner: 1, ue: 2, fe: 3, df: 4 };
    const evList = m.events || [];
    let canPack = true;
    const packedTokens: string[] = [];
    for (let i = 0; i < evList.length; i++) {
      const ev = evList[i];
      const w = ev.w === 1 ? 1 : 0;
      const tCode = TMAP_REV[ev.type || 'pt'] || 0;
      const by0 = ev.by ? Number(ev.by[0]) : -1;
      const by1 = ev.by ? Number(ev.by[1]) : -1;
      const fsBit = ev.fs === false ? 0 : 1;
      const subIdx = ev.sub ? Math.max(0, (SUB_TYPES as readonly string[]).indexOf(ev.sub)) : 0;
      if ((by0 !== -1 && (by0 < 0 || by0 > 1)) || (by1 !== -1 && (by1 < 0 || by1 > 1)) || subIdx > 8) {
        canPack = false;
        break;
      }
      packedTokens.push(`${w}${tCode}${by0 < 0 ? 9 : by0}${by1 < 0 ? 9 : by1}${fsBit}${subIdx}`);
    }
    const compact = {
      id: m.id,
      ts: Date.now(),
      c: m.createdAt,
      d: m.durationMs,
      s: m.status,
      m: m.mode,
      cp: m.competition || null,
      ms: m.manualSets || null,
      mw: m.isDraw ? 'draw' : m.manualWinner ?? null,
      drw: m.isDraw ? 1 : 0,
      wo: m.isWalkover ? 1 : 0,
      t: m.teams,
      r: m.rules,
      fs: m.firstServer,
      ss: m.secondServerIdx,
      fl: m.flipped ? 1 : 0,
      pf: m.pendingFault ? 1 : 0,
      e: canPack
        ? packedTokens.join('')
        : evList.map((ev) => {
            const subIdx = ev.sub ? (SUB_TYPES as readonly string[]).indexOf(ev.sub) : 0;
            return [
              ev.w,
              TMAP_REV[ev.type || 'pt'] || 0,
              ev.by ? ev.by[0] : -1,
              ev.by ? ev.by[1] : -1,
              ev.fs === false ? 0 : 1,
              subIdx > 0 ? subIdx : 0
            ];
          })
    };
    return encodeB64Utf8(compact);
  } catch {
    return '';
  }
}

export function decodeMatchShare(b64: string): Match | null {
  try {
    const c = decodeB64Utf8<Record<string, any>>(b64);
    if (!c) return null;
    const TMAP = ['pt', 'winner', 'ue', 'fe', 'df'];
    let rawEvs: number[][] = [];
    if (Array.isArray(c.e)) {
      rawEvs = c.e;
    } else if (typeof c.e === 'string' && c.e.length >= 6) {
      for (let i = 0; i + 6 <= c.e.length; i += 6) {
        const s = c.e;
        rawEvs.push([
          Number(s[i]),
          Number(s[i + 1]),
          s[i + 2] === '9' ? -1 : Number(s[i + 2]),
          s[i + 3] === '9' ? -1 : Number(s[i + 3]),
          Number(s[i + 4]),
          Number(s[i + 5])
        ]);
      }
    }
    return {
      id: c.id || 'shared_' + (c.c || Date.now()),
      _ts: c.ts || 0,
      createdAt: c.c || Date.now(),
      durationMs: c.d || 0,
      status: c.s || 'finished',
      mode: c.m || 'doubles',
      competition: c.cp || null,
      manualSets: c.ms || null,
      manualWinner: c.mw ?? null,
      isDraw: !!(c.drw || c.mw === 'draw'),
      isWalkover: !!c.wo,
      teams: c.t,
      rules: c.r,
      firstServer: c.fs || [0, 0],
      secondServerIdx: c.ss ?? 0,
      shotPrompt: true,
      flipped: !!c.fl,
      pendingFault: !!c.pf,
      events: rawEvs.map((a) => ({
        w: a[0],
        type: TMAP[a[1]] || 'pt',
        by: a[2] >= 0 ? [a[2], a[3]] : null,
        fs: a[4] !== 0,
        sub: a[5] && a[5] > 0 && SUB_TYPES[a[5]] ? SUB_TYPES[a[5]] : null
      })),
      redoStack: []
    };
  } catch {
    return null;
  }
}

export function shortMatchCode(id: string | null | undefined): string {
  const clean = String(id || 'default').replace(/^m_/, '').replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  return clean.slice(-6) || 'padel1';
}

export function cleanLiveTopic(id: string | null | undefined): string {
  return 'padel_se_live_' + shortMatchCode(id);
}

export function matchStateSignature(m: Match | null | undefined): string {
  if (!m) return '';
  const lastEv = m.events && m.events.length ? m.events[m.events.length - 1] : null;
  return [
    m.id,
    m.status,
    m.events ? m.events.length : 0,
    lastEv ? `${lastEv.w}:${lastEv.type}:${lastEv.fs}:${lastEv.sub || ''}:${lastEv.by ? lastEv.by.join(',') : ''}` : '',
    m.pendingFault ? 1 : 0,
    m.flipped ? 1 : 0,
    m.firstServer ? m.firstServer.join(',') : '',
    m.secondServerIdx ?? '',
    m.teams ? m.teams.map((t) => t.players.join(',') + ':' + t.color).join('|') : '',
    m.rules
      ? `${m.rules.totalSets}:${m.rules.gamesPerSet}:${m.rules.deuceRule}:${m.rules.finalSet}:${m.rules.changeoverRule}`
      : ''
  ].join('#');
}

export function cleanSyncCode(raw: unknown): string {
  return String(raw || '').toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 12);
}

export function newCompSyncCode(): string {
  const chars = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ';
  let code = '';
  for (let i = 0; i < 6; i++) code += chars.charAt(Math.floor(Math.random() * chars.length));
  return code;
}

export function compSyncTopic(syncCode: string): string {
  const clean = cleanSyncCode(syncCode).toLowerCase();
  return clean ? 'padel_se_comp_' + clean : '';
}

export function encodeSyncMessage(evt: unknown): string {
  try {
    return 'PCS1:' + encodeB64Utf8(evt);
  } catch {
    return '';
  }
}

export function decodeSyncMessage(raw: string): Record<string, any> | null {
  try {
    const s = String(raw || '').trim();
    if (!s) return null;
    if (s.startsWith('PCS1:')) return decodeB64Utf8(s.slice(5));
    if (s.startsWith('{')) return JSON.parse(s);
    return decodeB64Utf8(s);
  } catch {
    return null;
  }
}

export function buildCompactSetupData(comp: Competition, fixturesOverride: Fixture[] | null = null) {
  const fxList = fixturesOverride !== null ? fixturesOverride : comp.fixtures || [];
  return {
    v: 1,
    id: comp.id,
    sc: comp.syncCode,
    c: {
      k: comp.kind,
      n: comp.name,
      f: comp.format,
      rm: comp.rankingMode,
      w: comp.winPts,
      dp: comp.drawPts,
      l: comp.lossPts,
      sb: comp.setBonusPts,
      gb: comp.gameBonusPts,
      ng: comp.numGroups,
      ag: comp.advancePerGroup,
      ...(comp.courtsCount ? { cc: comp.courtsCount } : {}),
      ...(comp.status === 'finished' ? { st: 'finished', fa: comp.finishedAt || 0 } : {}),
      dr: comp.defaultRules
    },
    pt: comp.participants || [],
    fx: fxList.map((f) => ({
      id: f.id,
      ph: f.phase,
      ri: f.roundIdx,
      rl: f.roundLabel,
      si: f.slotIdx,
      g: f.group || null,
      ...(f.court ? { ct: f.court } : {}),
      ...(f.resting?.length ? { rp: f.resting } : {}),
      t0: f.team0 || null,
      t1: f.team1 || null,
      s0: f.source0 || null,
      s1: f.source1 || null,
      ib: f.isBye ? 1 : 0
    }))
  };
}

export function hydrateFixturesFromCompact(fxCompactList: Array<Record<string, any>>): Fixture[] {
  return (fxCompactList || []).map((f) => ({
    id: String(f.id),
    phase: f.ph || f.phase || 'league',
    roundIdx: Number(f.ri ?? f.roundIdx) || 0,
    roundLabel: f.rl || f.roundLabel || 'Cruce',
    slotIdx: Number(f.si ?? f.slotIdx) || 0,
    group: f.g ?? f.group ?? null,
    ...(f.ct !== undefined && f.ct !== null ? { court: Number(f.ct) } : f.court ? { court: Number(f.court) } : {}),
    ...(Array.isArray(f.rp) ? { resting: f.rp } : Array.isArray(f.resting) ? { resting: f.resting } : {}),
    team0: f.t0 || f.team0 || null,
    team1: f.t1 || f.team1 || null,
    source0: f.s0 || f.source0 || null,
    source1: f.s1 || f.source1 || null,
    matchId: null,
    winnerSide: f.ib ? (f.t0 ? 0 : f.t1 ? 1 : null) : null,
    isBye: !!(f.ib || f.isBye)
  }));
}

export function encodeCompSetupInline(comp: Competition): string {
  try {
    if (!comp) return '';
    const fullB64 = encodeB64Utf8(buildCompactSetupData(comp));
    if (fullB64.length <= 720) return fullB64;
    const noFxB64 = encodeB64Utf8(buildCompactSetupData(comp, []));
    return noFxB64.length <= 720 ? noFxB64 : '';
  } catch {
    return '';
  }
}

export function encodeRankingPayloadPure(
  players: StandingRow[],
  ctxMeta: { id?: string; title?: string; subtitle?: string; entityMode?: string; primaryMetric?: string } | null = null,
  fallbackMeta: { id?: string; name?: string } = {}
): string {
  try {
    const rkId = ctxMeta?.id || fallbackMeta.id || 'RK-OFFICIAL';
    const rkName = ctxMeta?.title || fallbackMeta.name || 'Mi Ranking';

    const compact = {
      v: 2,
      id: rkId,
      n: rkName,
      sub: ctxMeta?.subtitle || '',
      em: ctxMeta?.entityMode || 'individual',
      pm: ctxMeta?.primaryMetric || 'pts',
      t: Date.now(),
      p: (players || []).map((p) => [
        p.name,
        p.elo,
        p.wins,
        p.matches,
        p.lastDelta || 0,
        p.color || '#d4af37',
        p.winners || 0,
        p.ue || 0,
        p.firstServeIn || 0,
        p.srvPtsTotal || 0,
        p.srvPtsWon || 0,
        p.finishedMatches || p.matches || 0,
        p.pts || 0,
        p.losses || 0,
        p.setsDiff || 0,
        p.gamesDiff || 0,
        p.gamesWon || 0,
        p.draws || 0,
        p.gamesLost || 0
      ])
    };
    return encodeB64Utf8(compact);
  } catch {
    return '';
  }
}

export function decodeRankingPayload(b64: string): SharedRanking | null {
  try {
    const c = decodeB64Utf8<Record<string, any>>(b64);
    if (!c || !Array.isArray(c.p)) return null;
    const players: StandingRow[] = c.p.map((row: any[]) => ({
      name: String(row[0] || 'Jugador'),
      key: String(row[0] || 'Jugador').toUpperCase(),
      elo: Number(row[1]) || 1000,
      wins: Number(row[2]) || 0,
      matches: Number(row[3]) || 0,
      lastDelta: Number(row[4]) || 0,
      color: String(row[5] || '#d4af37'),
      winners: Number(row[6]) || 0,
      ue: Number(row[7]) || 0,
      fe: 0,
      shots: {},
      firstServeIn: Number(row[8]) || 0,
      srvPtsTotal: Number(row[9]) || 0,
      srvPtsWon: Number(row[10]) || 0,
      finishedMatches: Number(row[11]) || Number(row[3]) || 0,
      pts: row[12] !== undefined ? Number(row[12]) : (Number(row[2]) || 0) * 3,
      losses: row[13] !== undefined ? Number(row[13]) : Math.max(0, (Number(row[3]) || 0) - (Number(row[2]) || 0)),
      setsDiff: Number(row[14]) || 0,
      gamesDiff: Number(row[15]) || 0,
      gamesWon: Number(row[16]) || 0,
      draws: Number(row[17]) || 0,
      gamesLost: Number(row[18]) || 0,
      setsWon: 0,
      setsLost: 0,
      doubleFaults: 0
    }));
    return {
      version: c.v || 1,
      id: c.id || 'RK-EXT',
      name: c.n || 'Ranking Compartido',
      subtitle: c.sub || '',
      entityMode: c.em || 'individual',
      primaryMetric: c.pm || 'pts',
      timestamp: c.t || Date.now(),
      players
    };
  } catch {
    return null;
  }
}
