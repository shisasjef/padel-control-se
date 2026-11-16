import { COLORS } from './constants';
import type { Match } from '../types';

export function clone<T>(o: T): T {
  return o ? JSON.parse(JSON.stringify(o)) : o;
}

export function esc(s: unknown): string {
  return String(s ?? '').replace(/[&<>"']/g, (c) => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c] || c
  ));
}

export function fgFor(hex: string): string {
  const f = COLORS.find((x) => x.c.toLowerCase() === String(hex).toLowerCase());
  return f ? f.f : '#ffffff';
}

export function teamLabel(m: Match, t: number): string {
  const p = (m.teams[t]?.players || []).filter(Boolean);
  return p.length ? p.join(' · ') : `Pareja ${t + 1}`;
}

export function playerLabel(m: Match | null | undefined, t: number, p: number): string {
  const custom = m?.teams?.[t]?.players?.[p]?.trim();
  if (custom) return custom;
  return p === 0 ? `DRIVE ${t + 1}` : `REVÉS ${t + 1}`;
}

export function getMatchKind(m: Match | null | undefined): string {
  return m?.competition?.kind || 'daily';
}

export function getMatchCompId(m: Match | null | undefined): string | null {
  return m?.competition?.compId || null;
}

export function getDateKey(ts: number): string {
  const d = new Date(ts || Date.now());
  const y = d.getFullYear();
  const mo = String(d.getMonth() + 1).padStart(2, '0');
  const da = String(d.getDate()).padStart(2, '0');
  return `${y}-${mo}-${da}`;
}

export function canonicalPairKey(p0: string | undefined, p1: string | undefined): string {
  const a = String(p0 || '').trim().toUpperCase();
  const b = String(p1 || '').trim().toUpperCase();
  return [a, b].sort().join(' || ');
}

export function formatPairLabel(p0: string | undefined, p1: string | undefined): string {
  return [String(p0 || '').trim(), String(p1 || '').trim()].filter(Boolean).join(' · ');
}

export function getMatchScopeMatches(m: Match, list: Match[]): Match[] {
  const kind = getMatchKind(m);
  const compId = getMatchCompId(m);
  if (compId) {
    return (list || []).filter((x) => getMatchCompId(x) === compId);
  }
  if (kind === 'league' || kind === 'tournament') {
    return (list || []).filter((x) => getMatchKind(x) === kind && !getMatchCompId(x));
  }
  return (list || []).filter((x) => getMatchKind(x) === 'daily');
}

export function fmtClock(ms: number): string {
  const sec = Math.max(0, Math.floor(ms / 1000));
  const h = Math.floor(sec / 3600);
  const m = Math.floor((sec % 3600) / 60);
  const s = sec % 60;
  return h > 0
    ? `${h}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
    : `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

export function fmtDurationLong(ms: number): string {
  const min = Math.round(ms / 60000);
  if (min < 60) return `${min} min`;
  const h = Math.floor(min / 60);
  const m = min % 60;
  return `${h}h ${m}m`;
}

export function fmtDateLong(ts: number): string {
  return new Date(ts).toLocaleString('es-ES', {
    day: '2-digit',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit'
  });
}

export function pct(a: number, b: number): number {
  return b > 0 ? Math.round((a * 100) / b) : 0;
}

export function formatBytesCompact(bytes: number | null): string {
  if (bytes === null || !Number.isFinite(bytes) || bytes < 0) return '—';
  if (bytes < 1024 * 1024) return Math.max(1, Math.round(bytes / 1024)) + ' KB';
  return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
}
