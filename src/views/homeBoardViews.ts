import { refreshPlayerCardPreview } from '../cards/playerCardStudio';
import { COLORS, ICONS, LOGO_SVG, renderSignatureBadge, renderSignatureFooter, SUPPORT_INFO } from '../core/constants';
import {
  esc,
  fgFor,
  fmtClock,
  formatPairLabel,
  getDateKey,
  getMatchCompId,
  getMatchKind,
  playerLabel,
  teamLabel
} from '../core/utils';
import { isProyectoPadelComp, sortStandingsRows, computeScopeStandings } from '../engines/eloEngine';
import { computeMatch } from '../engines/matchEngine';
import { getCompShareUrl } from '../services/competitionSync';
import { publishLiveMatchState } from '../services/liveBroadcast';
import { shortMatchCode } from '../codecs/shareCodec';
import { appHooks, showToast } from '../state/runtime';
import {
  getCompById,
  getCompetitionMatches,
  getCompetitionScoringConfig,
  getKnownPlayerNames,
  calculateMatchEloPreview,
  store
} from '../state/store';
import type { ComputedMatchState, Match } from '../types';
import { QRious, renderQRToCanvas } from '../vendor/qrious';
import { getMatchContextBadgeHtml, renderMatchCard, renderSupportButton, renderTabbar } from './sharedUi';

export function getAppShareUrl(): string {
  return typeof location !== 'undefined' ? location.href.split('#')[0] : '';
}

export function drawAppQR(canvas: HTMLCanvasElement | null, size = 200): void {
  if (!canvas) return;
  renderQRToCanvas(canvas, getAppShareUrl(), size);
}

export function afterRenderQR(): void {
  const { ui } = store;
  const homeCanvas = document.getElementById('qr-home-canvas') as HTMLCanvasElement | null;
  if (homeCanvas) drawAppQR(homeCanvas, 180);
  const modalCanvas = document.getElementById('app-qr-modal-canvas') as HTMLCanvasElement | null;
  if (modalCanvas) drawAppQR(modalCanvas, 220);
  const settingsCanvas = document.getElementById('qr-settings-canvas') as HTMLCanvasElement | null;
  if (settingsCanvas) drawAppQR(settingsCanvas, 190);
  const compSyncCanvas = document.getElementById('comp-sync-qr-canvas') as HTMLCanvasElement | null;
  if (compSyncCanvas) {
    const comp = getCompById(ui.compId);
    if (comp) renderQRToCanvas(compSyncCanvas, getCompShareUrl(comp, true), 230);
  }
  if (ui.route === 'player-card') {
    refreshPlayerCardPreview();
  }
}

export function copyAppUrl(): void {
  const url = getAppShareUrl();
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard
      .writeText(url)
      .then(() => {
        showToast('Enlace copiado al portapapeles');
      })
      .catch(() => {
        prompt('Copia este enlace de la app:', url);
      });
  } else {
    prompt('Copia este enlace de la app:', url);
  }
}

export function shareAppViaWhatsApp(): void {
  const url = getAppShareUrl();
  const text =
    '🎾 *Pádel Control SÉ · By Sairaf Engel*\nMarcador con estadísticas avanzadas, locución por voz y seguimiento en vivo punto a punto.\n\n📲 Abrí la app acá:\n' +
    url;
  window.open('https://api.whatsapp.com/send?text=' + encodeURIComponent(text), '_blank');
}

export function downloadAppQR(): void {
  try {
    const url = getAppShareUrl();
    const qrCanvas = document.createElement('canvas');
    new QRious({
      element: qrCanvas,
      value: url,
      size: 380,
      level: 'H',
      padding: 14,
      background: '#ffffff',
      foreground: '#060609'
    });

    const W = 560;
    const H = 740;
    const card = document.createElement('canvas');
    card.width = W;
    card.height = H;
    const ctx = card.getContext('2d');
    if (!ctx) return;

    const bgGrad = ctx.createLinearGradient(0, 0, 0, H);
    bgGrad.addColorStop(0, '#161410');
    bgGrad.addColorStop(0.5, '#0a0a0d');
    bgGrad.addColorStop(1, '#040406');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, W, H);

    ctx.strokeStyle = '#d4af37';
    ctx.lineWidth = 3;
    ctx.strokeRect(16, 16, W - 32, H - 32);

    ctx.strokeStyle = 'rgba(212, 175, 55, 0.35)';
    ctx.lineWidth = 1;
    ctx.strokeRect(22, 22, W - 44, H - 44);

    ctx.fillStyle = '#f5d061';
    ctx.font = 'bold italic 32px "Barlow Condensed", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('PÁDEL CONTROL SÉ', W / 2, 75);

    ctx.fillStyle = '#d4af37';
    ctx.font = 'italic 20px "Great Vibes", cursive, sans-serif';
    ctx.fillText('By Sairaf Engel', W / 2, 108);

    const qrX = (W - 380) / 2;
    const qrY = 135;
    ctx.fillStyle = '#ffffff';
    if (ctx.roundRect) {
      ctx.beginPath();
      ctx.roundRect(qrX - 10, qrY - 10, 400, 400, 18);
      ctx.fill();
    } else {
      ctx.fillRect(qrX - 10, qrY - 10, 400, 400);
    }

    ctx.drawImage(qrCanvas, qrX, qrY, 380, 380);

    ctx.fillStyle = '#c2b8a3';
    ctx.font = '15px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('Apuntá con la cámara de tu celular para abrir la app', W / 2, 580);

    ctx.fillStyle = 'rgba(212, 175, 55, 0.12)';
    ctx.fillRect(36, 608, W - 72, 42);
    ctx.strokeStyle = 'rgba(212, 175, 55, 0.45)';
    ctx.lineWidth = 1;
    ctx.strokeRect(36, 608, W - 72, 42);

    ctx.fillStyle = '#f5d061';
    ctx.font = 'bold 14px "Plus Jakarta Sans", monospace';
    ctx.fillText(url, W / 2, 634);

    ctx.fillStyle = '#7d7461';
    ctx.font = '12.5px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('Marcador Profesional · Estadísticas · Voz · Transmisión en Vivo', W / 2, 692);

    const link = document.createElement('a');
    link.download = 'QR-Padel-Control-SE.png';
    link.href = card.toDataURL('image/png');
    link.click();
    showToast('¡Imagen del QR descargada!');
  } catch (err) {
    console.error('Error downloading QR card:', err);
    showToast('Error al descargar imagen');
  }
}

export function renderQRModal(): string {
  const url = getAppShareUrl();
  return `
  <div class="scrim" data-close-qr="1" style="z-index:125">
    <div class="sheet" style="max-width:460px;text-align:center">
      <div class="sheet-hdr">
        <h2 style="font-size:21px;white-space:nowrap">Código QR de la App</h2>
        <button class="icon-btn" data-act="close-qr-modal" style="width:36px;height:36px;border-radius:12px" title="Cerrar">✕</button>
      </div>

      <div style="background:linear-gradient(135deg,rgba(212,175,55,0.12) 0%,rgba(16,16,22,0.95) 55%,rgba(245,208,97,0.06) 100%);border:1px solid rgba(212,175,55,0.35);border-radius:24px;padding:20px 16px;box-shadow:0 18px 45px rgba(0,0,0,0.85)">
        <div style="display:flex;align-items:center;justify-content:center;gap:12px;margin-bottom:14px">
          ${LOGO_SVG.replace('class="logo-ic"', 'class="logo-ic" style="width:48px;height:48px"')}
          <div style="text-align:center">
            <div style="font-family:var(--cond);font-size:22px;font-weight:800;font-style:normal;text-transform:uppercase;line-height:1.15;color:var(--tx);margin-bottom:3px">Pádel Control SÉ</div>
            <div style="font-family:var(--sig);font-size:19px;color:#f5d572;line-height:1.2">By Sairaf Engel</div>
          </div>
        </div>

        <div style="display:inline-block;padding:12px;background:#ffffff;border-radius:18px;box-shadow:0 12px 35px rgba(0,0,0,0.7),0 0 25px rgba(212,175,55,0.28)">
          <canvas id="app-qr-modal-canvas" style="display:block;width:220px;height:220px;border-radius:8px"></canvas>
        </div>

        <p style="font-size:13px;color:var(--tx2);margin:14px 0 8px;line-height:1.4">
          Apuntá con la cámara de cualquier teléfono para abrir la app al instante.
        </p>

        <div style="background:rgba(255,255,255,0.04);border:1px solid var(--line);border-radius:10px;padding:6px 10px;font-family:monospace;font-size:11.5px;color:var(--acc-ink);word-break:break-all;margin-bottom:14px">
          ${esc(url)}
        </div>

        <div class="btn-row" style="gap:8px">
          <button class="btn primary block" data-act="share-app-wa">${ICONS.share} Compartir por WhatsApp</button>
          <button class="btn block" data-act="copy-app-link">${ICONS.share} Copiar Enlace</button>
          <button class="btn block" data-act="dl-app-qr">${ICONS.dl} Descargar Tarjeta QR (Imagen)</button>
        </div>
      </div>

      <div style="margin-top:14px">
        <button class="btn sm" data-act="close-qr-modal" style="width:100%">Cerrar</button>
      </div>
    </div>
  </div>`;
}

export function renderHome(): string {
  const { activeMatch, historyList, competitionsList } = store;
  let liveHtml = '';
  if (activeMatch && activeMatch.status === 'playing') {
    const st = computeMatch(activeMatch);
    liveHtml = `
    <div class="card live-card">
      <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;flex-wrap:wrap;margin-bottom:4px">
        <div class="live-dot" style="margin:0">PARTIDO EN CURSO · ${esc(fmtClock(activeMatch.durationMs))}</div>
        ${getMatchContextBadgeHtml(activeMatch)}
      </div>
      ${[0, 1]
        .map(
          (t) => `
        <div class="mrow">
          <span class="bar" style="--c:${esc(activeMatch.teams[t].color)}"></span>
          <span class="nm">${esc(teamLabel(activeMatch, t))}</span>
          ${st.sets.map((s) => `<span class="s ${s.winner === t ? 'w' : s.winner === null ? 'cur' : ''}">${s.games[t]}</span>`).join('')}
          <span class="s cur" style="width:42px">${esc(st.pointDisplay[t])}</span>
        </div>`
        )
        .join('')}
      <div class="btn-row" style="margin-top:12px">
        <button class="btn primary" data-act="resume-match">${ICONS.play} Continuar marcador</button>
        <button class="btn" data-act="share-live">${ICONS.live} Compartir en vivo</button>
        <button class="btn" data-open-stats="active">${ICONS.chart} Estadísticas</button>
      </div>
    </div>`;
  }

  const dailyMatches = historyList.filter((m) => getMatchKind(m) === 'daily');
  const todayKey = getDateKey(Date.now());
  const todayCount = dailyMatches.filter((m) => getDateKey(m.createdAt) === todayKey).length;
  const activeComps = competitionsList.slice(0, 3);

  const compStripHtml = activeComps.length
    ? `
    <div class="sec-t" style="display:flex;align-items:center;justify-content:space-between">
      <span>Ligas y Torneos (${competitionsList.length})</span>
      <button class="btn sm" data-nav="competitions">Ver todo</button>
    </div>
    ${activeComps
      .map((c) => {
        const sc = getCompetitionScoringConfig(c);
        const isPP = isProyectoPadelComp(c);
        const leaderRows = computeScopeStandings(getCompetitionMatches(c), {
          ...sc,
          entityMode: c.rankingMode === 'individual' ? 'individual' : 'pairs',
          seedParticipants: c.participants || []
        });
        const sorted = sortStandingsRows(leaderRows, isPP ? 'elo' : 'pts', { tiebreakMode: isPP ? 'games' : 'sets' });
        const leader = sorted[0];
        const matchesCount = getCompetitionMatches(c).filter((m) => m.status === 'finished').length;
        return `
      <button class="comp-card" style="width:100%;text-align:left" data-open-comp="${esc(c.id)}">
        <div class="comp-card-top">
          <div>
            <div class="comp-pills" style="margin-bottom:6px">
              <span class="badge ${isPP ? 'pp' : c.kind === 'league' ? 'league' : 'tourn'}">${isPP ? '⚡ PRO PÁDEL' : c.kind === 'league' ? '🏅 Liga' : '🏆 Torneo'}</span>
              <span class="badge">${(c.participants || []).length} inscriptos · ${matchesCount} PJ</span>
            </div>
            <div class="comp-card-title">${esc(c.name)}</div>
          </div>
        </div>
        ${
          leader && leader.matches > 0
            ? isPP
              ? `<div class="comp-leader">🥇 Líder ELO: <b>${esc(leader.name)}</b> · ${leader.elo} ELO (${leader.pts} pts · ${leader.gamesWon || 0}G)</div>`
              : `<div class="comp-leader">🥇 Líder: <b>${esc(leader.name)}</b> · ${leader.pts} pts · ${leader.elo} ELO</div>`
            : `<div class="comp-leader">Tocá para cargar resultados o ver tabla</div>`
        }
      </button>`;
      })
      .join('')}`
    : '';

  const recent = historyList.slice(0, 4);
  return `
  <div class="page">
    <div class="hero">
      ${LOGO_SVG}
      <div style="flex:1;min-width:0;display:flex;flex-direction:column;align-items:center;text-align:center">
        <h1>Pádel Control SÉ</h1>
        ${renderSignatureBadge()}
      </div>
      <div style="display:flex;gap:8px;flex:none">
        <button class="icon-btn" data-nav="settings" title="Ajustes">${ICONS.gear}</button>
        <button class="icon-btn" data-act="open-qr-modal" title="Compartir App / Código QR">${ICONS.qr}</button>
      </div>
    </div>

    <button type="button" class="support-top-strip no-print" data-act="open-support-modal">
      <span class="support-top-strip-ico">${ICONS.heart}</span>
      <span class="support-top-strip-txt">${esc(SUPPORT_INFO.message)}</span>
      <span class="support-top-strip-cta">Alias / CVU →</span>
    </button>

    ${appHooks.renderHomeSystemBanners()}

    <div class="card" style="margin-bottom:20px;background:linear-gradient(135deg, rgba(212,175,55,0.18) 0%, rgba(16,16,22,0.96) 60%, rgba(245,208,97,0.08) 100%);border:1px solid rgba(212,175,55,0.38);text-align:center">
      <h3 style="justify-content:center;margin-bottom:12px;font-size:15px;letter-spacing:1.4px">${ICONS.qr} Código QR para Compartir la App</h3>
      <div style="display:flex;flex-direction:column;align-items:center;gap:12px">
        <div style="background:#ffffff;padding:12px;border-radius:18px;box-shadow:0 12px 30px rgba(0,0,0,0.65), 0 0 22px rgba(212,175,55,0.25);display:inline-block">
          <canvas id="qr-home-canvas" style="display:block;width:180px;height:180px;border-radius:8px"></canvas>
        </div>
        <div style="max-width:380px">
          <b style="font-size:15px;color:var(--tx);display:block">Escaneá con la cámara de tu celular</b>
          <small style="color:var(--tx2);font-size:12.5px;display:block;margin-top:3px;line-height:1.4">Cualquier persona puede apuntar a este código con la cámara de su celular para abrir o guardar la app gratis y al instante.</small>
          <div style="margin:8px 0 10px;background:rgba(255,255,255,0.04);border:1px solid var(--line);border-radius:10px;padding:6px 10px;font-family:monospace;font-size:11.5px;color:var(--acc-ink);word-break:break-all">
            ${esc(getAppShareUrl())}
          </div>
        </div>
        <div class="btn-row" style="width:100%;max-width:440px">
          <button class="btn primary" data-act="share-app-wa" style="flex:1 1 130px">${ICONS.share} WhatsApp</button>
          <button class="btn" data-act="copy-app-link" style="flex:1 1 130px">${ICONS.share} Copiar Enlace</button>
          <button class="btn" data-act="dl-app-qr" style="flex:1 1 130px">${ICONS.dl} Descargar QR</button>
        </div>
      </div>
    </div>

    ${liveHtml}

    <div class="home-actions-grid">
      <button class="btn primary big" data-nav="new">${ICONS.plus} Nuevo Partido</button>
      <button class="btn big" data-nav="competitions">${ICONS.award} Ligas y Torneos</button>
    </div>
    <button class="btn block daily-rk-btn" data-act="open-daily-ranking">
      <span class="daily-rk-meta">
        <span class="daily-rk-title">☀️ Ranking Partido del Día</span>
        <span class="daily-rk-sub">${todayCount} hoy · ${dailyMatches.length} total</span>
      </span>
      <span class="daily-rk-cta">Ver tabla →</span>
    </button>
    <button class="home-card-cta" data-open-player-card="">
      <div class="home-card-cta-ico">${ICONS.idCard}</div>
      <div class="home-card-cta-meta">
        <span class="home-card-cta-title">Crear Tarjeta de Jugador</span>
        <span class="home-card-cta-sub">Subí tu foto, categoría, posición y mejor golpe · Generala y compartila en HD</span>
      </div>
      <span class="home-card-cta-go">Crear →</span>
    </button>

    ${compStripHtml}

    <div class="sec-t">Partidos recientes</div>
    ${recent.length ? recent.map(renderMatchCard).join('') : `<div class="empty">${ICONS.ball}<br>Todavía no hay partidos guardados.<br>Iniciá un partido nuevo para registrar cada punto.</div>`}
    ${historyList.length > 4 ? `<button class="btn block" data-nav="history">Ver todo el historial (${historyList.length})</button>` : ''}

    <div class="sec-t">Experiencia Pádel Control SÉ</div>
    <div class="feat">
      <div>${ICONS.live}<b>Transmisión de Cancha En Vivo</b><p>Compartí un link al empezar el partido para que tus amigos sigan cada punto y estadística en tiempo real desde cualquier lugar.</p></div>
      <div>${ICONS.chart}<b>Análisis y PDF Profesional</b><p>Puntos de oro, Star Point FIP, breaks, bajo presión, tabla por jugador, evolución y punto a punto imprimible.</p></div>
      <div>${ICONS.vol}<b>Voz de árbitro y manos libres</b><p>Cantado automático del marcador en español y control por micrófono o pulsador Bluetooth.</p></div>
      <div>${ICONS.share}<b>Compartir link o imagen</b><p>Generá una tarjeta resumen Black & Gold lista para redes o compartí el partido completo por enlace.</p></div>
    </div>

    ${renderSignatureFooter()}
  </div>
  ${renderTabbar('home')}`;
}

export function renderNewMatch(): string {
  const { preset, prefs, competitionsList } = store;
  const p = preset;
  const ctx = p.matchContext || 'daily';
  if (ctx === 'league' || ctx === 'tournament') {
    const matchingComps = competitionsList.filter((c) => c.kind === ctx);
    if (!p.compId || !matchingComps.some((c) => c.id === p.compId)) {
      p.compId = matchingComps[0]?.id || '';
      p.fixtureId = '';
    }
  } else {
    p.compId = '';
    p.fixtureId = '';
  }

  const totalSets = Math.max(1, Number(p.totalSets) || (p.setsToWin ? p.setsToWin * 2 - 1 : 3));
  const gps = Math.max(1, Number(p.gamesPerSet) || 6);
  const tbPts = Math.max(1, Number(p.tiebreakPoints) || 7);
  const hasTB = p.tiebreakAt !== 0;
  const known = getKnownPlayerNames();
  const datalist = `<datalist id="known-players">${known.map((n) => `<option value="${esc(n)}">`).join('')}</datalist>`;

  const srvChips: string[] = [];
  for (let t = 0; t < 2; t++) {
    for (let pi = 0; pi < 2; pi++) {
      const name = p.teams[t].players[pi] || (pi === 0 ? `DRIVE ${t + 1}` : `REVÉS ${t + 1}`);
      const isOn = p.firstServer[0] === t && p.firstServer[1] === pi;
      const col = p.teams[t].color;
      srvChips.push(`
        <button type="button" class="chip ${isOn ? 'on' : ''}" style="--c:${esc(col)};--f:${fgFor(col)}" data-set-srv="${t},${pi}">
          <span class="dot"></span>${esc(name)}
        </button>`);
    }
  }

  const compsOfKind = ctx === 'league' || ctx === 'tournament' ? competitionsList.filter((c) => c.kind === ctx) : [];
  const selComp = compsOfKind.find((c) => c.id === p.compId) || null;
  const selCompFinished = selComp?.status === 'finished';
  const pendingFixtures =
    selComp && !selCompFinished
      ? (selComp.fixtures || []).filter(
          (f) => !f.isBye && f.team0 && f.team1 && !f.matchId && (f.winnerSide === null || f.winnerSide === undefined)
        )
      : [];
  const activePickedFx = selComp && p.fixtureId ? (selComp.fixtures || []).find((f) => f.id === p.fixtureId) : null;
  const partPairs = (selComp?.participants || []).filter((pt) => pt.type === 'pair');

  let contextDetailHtml = '';
  if (ctx === 'daily') {
    const winP = Number(prefs.dailyWinPts ?? 3);
    const lossP = Number(prefs.dailyLossPts ?? 1);
    contextDetailHtml = `
      <div style="margin-top:12px;padding:10px 12px;border-radius:12px;background:rgba(245,158,11,0.08);border:1px solid rgba(245,158,11,0.28);display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap">
        <div style="font-size:12.5px;color:var(--tx2)">
          <b style="color:#fbbf24">☀️ Ranking Partido del Día</b> · Suma <b style="color:var(--tx)">+${winP} pts victoria / +${lossP} pts derrota</b> y actualiza el ELO exclusivo del día (separado de Ligas y Torneos).
        </div>
        <button type="button" class="btn sm" data-act="open-daily-pts">${ICONS.edit} Puntos</button>
      </div>`;
  } else {
    contextDetailHtml = `
      <div style="margin-top:12px">
        ${
          compsOfKind.length
            ? `
          <div class="row wrap" style="align-items:flex-end">
            <div class="field" style="flex:1 1 210px">
              <label>Seleccionar ${ctx === 'league' ? 'Liga' : 'Torneo'}</label>
              <select class="inp" data-act="sel-comp-for-new">
                ${compsOfKind.map((c) => `<option value="${esc(c.id)}" ${c.id === selComp?.id ? 'selected' : ''}>${esc(c.name)}</option>`).join('')}
              </select>
            </div>
            <button type="button" class="btn sm" data-act="new-comp" data-kind="${ctx}" style="margin-bottom:2px">${ICONS.plus} Nueva</button>
            ${selComp ? `<button type="button" class="btn sm" data-open-comp="${esc(selComp.id)}" style="margin-bottom:2px">Ver Tabla</button>` : ''}
          </div>
          ${
            selComp
              ? `
            <div class="field" style="margin-top:10px">
              <label>Etapa / Fecha (opcional)</label>
              <input class="inp" data-preset-txt="stageLabel" value="${esc(p.stageLabel || '')}" placeholder="${ctx === 'league' ? 'Ej: Fecha 3' : 'Ej: Cuartos de Final'}">
            </div>
            ${
              activePickedFx
                ? `
              <div style="margin-top:10px;padding:9px 12px;border-radius:12px;background:rgba(16,185,129,0.12);border:1px solid rgba(16,185,129,0.35);display:flex;align-items:center;justify-content:space-between;gap:8px;flex-wrap:wrap">
                <span style="font-size:12.5px;color:#34d399;font-weight:700">✓ Vinculado a cruce: ${esc(activePickedFx.roundLabel)} (${esc(activePickedFx.team0?.label)} vs ${esc(activePickedFx.team1?.label)})</span>
                <button type="button" class="btn sm" data-act="clear-picked-fixture">Desvincular</button>
              </div>
            `
                : pendingFixtures.length
                  ? `
              <div style="margin-top:10px">
                <label style="font-size:11.5px;font-weight:700;color:var(--tx2);text-transform:uppercase;display:block;margin-bottom:6px">Cargar cruce pendiente (${pendingFixtures.length})</label>
                <div style="display:flex;gap:6px;flex-wrap:wrap;max-height:120px;overflow-y:auto">
                  ${pendingFixtures
                    .slice(0, 8)
                    .map(
                      (fx) => `
                    <button type="button" class="pill" data-pick-fixture="${esc(selComp.id)}:${esc(fx.id)}">
                      ${esc(fx.roundLabel)}${fx.court ? ` · C${fx.court}` : ''}: ${esc(fx.team0?.label || '')} vs ${esc(fx.team1?.label || '')}
                    </button>
                  `
                    )
                    .join('')}
                </div>
              </div>
            `
                  : ''
            }
            ${
              partPairs.length
                ? `
              <div class="row wrap" style="margin-top:10px">
                <div class="field">
                  <label>Cargar pareja inscripta → Pareja 1</label>
                  <select class="inp" data-fill-pair-team="0">
                    <option value="">-- Elegir pareja --</option>
                    ${partPairs.map((pt) => `<option value="${esc(selComp.id)}:${esc(pt.id)}">${esc(formatPairLabel(pt.players?.[0], pt.players?.[1]))}</option>`).join('')}
                  </select>
                </div>
                <div class="field">
                  <label>Cargar pareja inscripta → Pareja 2</label>
                  <select class="inp" data-fill-pair-team="1">
                    <option value="">-- Elegir pareja --</option>
                    ${partPairs.map((pt) => `<option value="${esc(selComp.id)}:${esc(pt.id)}">${esc(formatPairLabel(pt.players?.[0], pt.players?.[1]))}</option>`).join('')}
                  </select>
                </div>
              </div>
            `
                : ''
            }
          `
              : ''
          }
        `
            : `
          <div style="padding:12px;border-radius:12px;background:rgba(255,255,255,0.03);border:1px dashed var(--line);display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap">
            <span style="font-size:13px;color:var(--tx2)">Todavía no tenés ${ctx === 'league' ? 'ninguna Liga creada' : 'ningún Torneo creado'}.</span>
            <button type="button" class="btn primary sm" data-act="new-comp" data-kind="${ctx}">${ICONS.plus} Crear ${ctx === 'league' ? 'Liga' : 'Torneo'}</button>
          </div>
        `
        }
      </div>`;
  }

  return `
  <div class="page">
    ${datalist}
    <div class="page-h">
      <div class="page-h-top">
        <button class="icon-btn" data-nav="home" title="Volver">${ICONS.back}</button>
        <h1>Nuevo Partido</h1>
      </div>
      <div class="page-h-acts">
        <button class="btn sm" data-act="swap-preset-teams" title="Intercambiar parejas">${ICONS.swap} Invertir Parejas</button>
        ${renderSupportButton()}
      </div>
    </div>

    <div class="sec-t">Tipo de partido y ranking</div>
    <div class="card">
      <div class="ctx-grid">
        <button type="button" class="ctx-opt ${ctx === 'daily' ? 'on' : ''}" data-match-ctx="daily">
          <b>☀️ Partido del Día</b>
          <small>Ranking propio diario y acumulado + ELO aparte</small>
        </button>
        <button type="button" class="ctx-opt ${ctx === 'league' ? 'on' : ''}" data-match-ctx="league">
          <b>🏅 Liga</b>
          <small>Fecha y tabla de posiciones independiente</small>
        </button>
        <button type="button" class="ctx-opt ${ctx === 'tournament' ? 'on' : ''}" data-match-ctx="tournament">
          <b>🏆 Torneo</b>
          <small>Cruces, grupos o cuadro eliminatorio</small>
        </button>
      </div>
      ${contextDetailHtml}
    </div>

    ${[0, 1]
      .map(
        (t) => `
    <div class="card team-card" style="--c:${esc(p.teams[t].color)}">
      <h3>Pareja ${t + 1}</h3>
      <div class="row wrap">
        <div class="field">
          <label>Drive ${t + 1} (Derecha)</label>
          <input class="inp" list="known-players" value="${esc(p.teams[t].players[0] || '')}" placeholder="DRIVE ${t + 1}" data-pname="${t},0">
        </div>
        <div class="field">
          <label>Revés ${t + 1} (Izquierda)</label>
          <input class="inp" list="known-players" value="${esc(p.teams[t].players[1] || '')}" placeholder="REVÉS ${t + 1}" data-pname="${t},1">
        </div>
      </div>
      <div class="field">
        <label>Color de camiseta / lado</label>
        <div class="colors">
          ${COLORS.map((c) => `<button type="button" style="--c:${c.c}" class="${p.teams[t].color === c.c ? 'on' : ''}" data-tcolor="${t},${c.c}" title="${c.n}"></button>`).join('')}
        </div>
      </div>
    </div>`
      )
      .join('')}

    <div class="sec-t">Reglas del partido</div>
    <div class="card">
      <div class="rule-row">
        <div class="r-info">
          <b>Número de sets</b>
          <small>${totalSets === 1 ? 'Partido a 1 set único' : `Al mejor de ${totalSets} sets (gana con ${Math.floor(totalSets / 2) + 1})`}</small>
        </div>
        <div class="stepper">
          <button type="button" class="step-btn" data-step="totalSets:-1" ${totalSets <= 1 ? 'disabled' : ''} aria-label="Menos sets">−</button>
          <span class="step-val">${totalSets}</span>
          <button type="button" class="step-btn" data-step="totalSets:1" ${totalSets >= 15 ? 'disabled' : ''} aria-label="Más sets">+</button>
        </div>
      </div>

      <div class="rule-row">
        <div class="r-info">
          <b>Número de juegos</b>
          <small>Juegos necesarios para ganar cada set</small>
        </div>
        <div class="stepper">
          <button type="button" class="step-btn" data-step="gamesPerSet:-1" ${gps <= 1 ? 'disabled' : ''} aria-label="Menos juegos">−</button>
          <span class="step-val">${gps}</span>
          <button type="button" class="step-btn" data-step="gamesPerSet:1" ${gps >= 21 ? 'disabled' : ''} aria-label="Más juegos">+</button>
        </div>
      </div>

      <div class="rule-block">
        <div class="rb-head">
          <b>En el 40-40</b>
          <small>${
            p.deuceRule === 'golden'
              ? 'Un único punto decide el juego'
              : p.deuceRule === 'star'
                ? 'Hasta 2 ventajas; en el 3º iguales se juega un Star Point definitivo (FIP)'
                : 'Sin límite de ventajas hasta ganar por diferencia de 2 puntos'
          }</small>
        </div>
        <div class="pills">
          <button type="button" class="pill ${p.deuceRule === 'adv' ? 'on' : ''}" data-preset="deuceRule:adv">Ventajas</button>
          <button type="button" class="pill ${p.deuceRule === 'golden' ? 'on' : ''}" data-preset="deuceRule:golden">Punto de oro</button>
          <button type="button" class="pill ${p.deuceRule === 'star' ? 'on' : ''}" data-preset="deuceRule:star">Star point</button>
        </div>
      </div>

      <div class="rule-row">
        <div class="r-info">
          <b>Tie-break</b>
          <small>${hasTB ? `En el ${gps}-${gps}, a ${tbPts} puntos` : 'Sin tie-break (diferencia de 2 juegos)'}</small>
        </div>
        ${
          hasTB
            ? `
        <div class="stepper">
          <button type="button" class="step-btn" data-step="tiebreakPoints:-1" ${tbPts <= 1 ? 'disabled' : ''} aria-label="Menos puntos de tie-break">−</button>
          <span class="step-val">${tbPts}</span>
          <button type="button" class="step-btn" data-step="tiebreakPoints:1" ${tbPts >= 30 ? 'disabled' : ''} aria-label="Más puntos de tie-break">+</button>
        </div>`
            : ''
        }
      </div>
      <div class="rule-block" style="padding-top:0">
        <div class="pills">
          <button type="button" class="pill ${hasTB ? 'on' : ''}" data-preset="tb:${tbPts}">Con Tie-break (${tbPts} ptos)</button>
          <button type="button" class="pill ${!hasTB ? 'on' : ''}" data-preset="tb:0">Sin Tie-break</button>
        </div>
      </div>

      ${
        totalSets > 1
          ? `
      <div class="rule-block">
        <div class="rb-head">
          <b>Set decisivo (${totalSets}º set)</b>
          <small>${p.finalSet === 'supertb' ? 'Súper Tie-Break a 10 puntos en caso de empate a sets' : 'Se juega como un set normal'}</small>
        </div>
        <div class="pills">
          <button type="button" class="pill ${p.finalSet === 'normal' ? 'on' : ''}" data-preset="finalSet:normal">Set normal</button>
          <button type="button" class="pill ${p.finalSet === 'supertb' ? 'on' : ''}" data-preset="finalSet:supertb">Súper TB (10)</button>
        </div>
      </div>`
          : ''
      }

      <div class="rule-block">
        <div class="rb-head">
          <b>Cambio de lado automático</b>
          <small>${
            p.changeoverRule === 'set'
              ? 'No se cambia de lado durante el set, solo al finalizar cada set'
              : p.changeoverRule === 'none'
                ? 'No se cambia de lado automáticamente'
                : 'Cambio de lado en juegos impares (1, 3, 5...) y cada 6 tantos de Tie-Break'
          }</small>
        </div>
        <div class="pills">
          <button type="button" class="pill ${(p.changeoverRule || 'odd') === 'odd' ? 'on' : ''}" data-preset="changeoverRule:odd">Juegos impares</button>
          <button type="button" class="pill ${p.changeoverRule === 'set' ? 'on' : ''}" data-preset="changeoverRule:set">Al terminar el set</button>
          <button type="button" class="pill ${p.changeoverRule === 'none' ? 'on' : ''}" data-preset="changeoverRule:none">Sin cambio</button>
        </div>
      </div>
    </div>

    <div class="sec-t">Durante el partido</div>
    <div class="card">
      <div class="field">
        <label>¿Quién empieza sacando?</label>
        <div class="chips" id="srv-chips-box">${srvChips.join('')}</div>
      </div>
      <div class="tog">
        <div>
          <b>Estadísticas avanzadas por golpe</b>
          <small>Pregunta Winner, Error no forzado o Error forzado por jugador al anotar.</small>
        </div>
        <label class="sw"><input type="checkbox" ${p.shotPrompt ? 'checked' : ''} data-preset-bool="shotPrompt"><span></span></label>
      </div>
    </div>

    <button class="btn primary big block" data-act="start-match">${ICONS.play} Empezar Partido (punto a punto)</button>
    <button class="btn big block" style="margin-top:10px" data-act="open-preset-quick-score">${ICONS.check} Ya terminó · Cargar Sets y Games</button>
    ${renderSignatureFooter()}
  </div>
  ${renderTabbar('new')}`;
}

export function getOBSPosition(): string {
  const h = (typeof location !== 'undefined' ? location.hash || '' : '').slice(1);
  const qIdx = h.indexOf('?');
  const ampIdx = h.indexOf('&');
  const paramStr = qIdx >= 0 ? h.slice(qIdx + 1) : ampIdx >= 0 ? h.slice(ampIdx + 1) : '';
  const sp = new URLSearchParams(paramStr);
  const p = sp.get('pos') || '';
  if (['tl', 'tr', 'bl', 'br', 'bar'].includes(p)) return p;
  return 'tl';
}

export function renderOBSOverlay(): string {
  const { ui, activeMatch } = store;
  const isRemoteLive = ui.route === 'live' || !!ui.liveId;
  const m = isRemoteLive && ui.liveMatch ? ui.liveMatch : activeMatch || ui.liveMatch;
  const pos = getOBSPosition();

  if (!m) {
    return `
    <div class="obs-overlay obs-pos-${pos}">
      <div class="obs-scorebug obs-waiting">
        <div class="obs-waiting-logo">${LOGO_SVG}</div>
        <div class="obs-waiting-info">
          <div class="obs-waiting-title">PÁDEL CONTROL SÉ</div>
          <div class="obs-waiting-sub">ESPERANDO INICIO DEL PARTIDO...</div>
        </div>
      </div>
    </div>`;
  }

  const st = computeMatch(m);
  const pastSets = st.sets.filter((s, idx) => {
    if (idx === st.curSetIdx && st.matchWinner === null) return false;
    if (s.games[0] === 0 && s.games[1] === 0 && s.winner === null) return false;
    return true;
  });

  const renderTeamRow = (t: number) => {
    const col = m.teams[t].color;
    const isSrv = st.matchWinner === null && st.srvTeam === t;
    const setsHtml = pastSets
      .map((s) => {
        const won = s.winner === t;
        const tb = s.tbScore ? `<sup>${s.tbScore[t]}</sup>` : '';
        return `<div class="obs-set-box ${won ? 'won' : ''}">${s.games[t]}${tb}</div>`;
      })
      .join('');

    const ptVal = st.matchWinner !== null ? (st.matchWinner === t ? '🏆' : '—') : esc(st.pointDisplay[t]);
    const isGoldPt = st.pointDisplay[t] === 'ADV' || st.pointDisplay[t] === 'GP' || st.isGP || st.isStar;
    const srvSide = st.srvSide || 'D';

    const playersLine = [0, 1]
      .map((pi) => {
        const nm = esc(playerLabel(m, t, pi));
        const pIsSrv = isSrv && st.srvPlayer === pi;
        if (pIsSrv) {
          return `<span class="obs-p srv">${nm} <span class="obs-ball" title="Al saque">🎾</span><span class="obs-srv-side srv-${srvSide.toLowerCase()}" title="Saque desde la ${srvSide === 'D' ? 'Derecha' : 'Revés'}">${srvSide}</span></span>`;
        }
        return `<span class="obs-p">${nm}</span>`;
      })
      .join(' <span style="opacity:0.4;margin:0 2px">·</span> ');

    return `
    <div class="obs-team-row ${isSrv ? 'serving' : ''}">
      <div class="obs-team-bar" style="--tc:${esc(col)}"></div>
      <div class="obs-team-names">
        ${playersLine}
        ${isSrv && m.pendingFault ? `<span class="obs-fault">2º</span>` : ''}
      </div>
      <div class="obs-sets-wrap">${setsHtml}</div>
      <div class="obs-games-box">${st.curSet.games[t]}</div>
      <div class="obs-pts-box ${st.matchWinner !== null ? 'dim' : isGoldPt ? 'gold' : ''}">${ptVal}</div>
    </div>`;
  };

  let tickerHtml = '';
  if (st.matchWinner !== null) {
    tickerHtml = `<div class="obs-ticker obs-ticker-gold">🏆 PARTIDO FINALIZADO · GANADORES: ${esc(teamLabel(m, st.matchWinner))}</div>`;
  } else if (st.isStar) {
    tickerHtml = `<div class="obs-ticker obs-ticker-gold">★ STAR POINT (PUNTO DECISIVO)</div>`;
  } else if (st.isGP) {
    tickerHtml = `<div class="obs-ticker obs-ticker-gold">★ PUNTO DE ORO</div>`;
  } else if (st.mp[0] || st.mp[1]) {
    const winTeam = st.mp[0] ? 0 : 1;
    tickerHtml = `<div class="obs-ticker obs-ticker-hot">MATCH POINT · ${esc(teamLabel(m, winTeam))}</div>`;
  } else if (st.sp[0] || st.sp[1]) {
    const winTeam = st.sp[0] ? 0 : 1;
    tickerHtml = `<div class="obs-ticker obs-ticker-hot">SET POINT · ${esc(teamLabel(m, winTeam))}</div>`;
  } else if (st.isBP) {
    const rcv = 1 - st.srvTeam;
    tickerHtml = `<div class="obs-ticker obs-ticker-warn">BOLA DE BREAK · ${esc(teamLabel(m, rcv))}</div>`;
  } else if (st.isSuperTB) {
    tickerHtml = `<div class="obs-ticker">SÚPER TIE-BREAK A 10</div>`;
  } else if (st.isTB) {
    tickerHtml = `<div class="obs-ticker">TIE-BREAK A 7</div>`;
  }

  const setLabel =
    st.matchWinner !== null ? 'FINALIZADO' : st.isSuperTB ? 'SÚPER TB' : st.isTB ? 'TIE-BREAK' : `SET ${st.curSetIdx + 1}`;

  return `
  <div class="obs-overlay obs-pos-${pos}">
    <div class="obs-scorebug">
      <div class="obs-header">
        <div class="obs-brand">${LOGO_SVG} <span>PÁDEL CONTROL SÉ</span></div>
        <div class="obs-status-pill">${setLabel}</div>
        <div class="obs-clock">
          <span class="obs-clock-dot"></span>
          <span id="sb-clock-val">${esc(fmtClock(m.durationMs))}</span>
        </div>
      </div>
      ${renderTeamRow(0)}
      ${renderTeamRow(1)}
      ${tickerHtml}
    </div>
  </div>`;
}

function getOBSUrls(pos = 'tl') {
  const { activeMatch, ui } = store;
  const baseUrl = typeof location !== 'undefined' ? location.href.split('#')[0] : '';
  const posParam = pos !== 'tl' ? `&pos=${pos}` : '';
  const localUrl = `${baseUrl}#obs${posParam}`;

  const m = activeMatch || ui.liveMatch;
  let remoteCode = '';
  if (m) {
    publishLiveMatchState(m, true, true);
    remoteCode = shortMatchCode(m.id);
  }
  const remoteUrl = remoteCode ? `${baseUrl}#obs&v=${remoteCode}${posParam}` : `${baseUrl}#obs${posParam}`;
  return { localUrl, remoteUrl, remoteCode };
}

export function renderOBSModal(): string {
  const { ui } = store;
  const pos = ui.obsSelectedPos || 'tl';
  const { localUrl, remoteUrl } = getOBSUrls(pos);

  return `
  <div class="scrim" data-close-obs-modal="1" style="z-index:126">
    <div class="sheet" style="max-width:560px">
      <div class="sheet-hdr">
        <div style="width:36px;height:36px;border-radius:12px;background:linear-gradient(135deg,#ffe58f,#d4af37);color:#080600;display:grid;place-items:center;flex:none;box-shadow:0 6px 16px rgba(212,175,55,.45)">
          ${ICONS.tv}
        </div>
        <div>
          <h2 style="margin:0;font-size:20px;text-align:center">Superposición OBS / vMix</h2>
          <small style="color:var(--tx2);display:block;text-align:center">Marcador broadcast transparente para streamings en vivo</small>
        </div>
        <button class="icon-btn" data-act="close-obs-modal" style="width:36px;height:36px;border-radius:12px" title="Cerrar">✕</button>
      </div>

      <div style="background:rgba(0,0,0,0.55);border:1px dashed rgba(212,175,55,0.4);border-radius:16px;padding:12px;margin:10px 0 14px;position:relative;overflow:hidden">
        <div style="font-size:10.5px;font-weight:800;color:var(--gold);letter-spacing:1px;text-transform:uppercase;margin-bottom:8px;display:flex;align-items:center;gap:6px">
          <span>Vista Previa del Marcador</span>
          <span style="margin-left:auto;font-size:10px;color:var(--tx3);font-weight:600">Fondo 100% transparente en OBS</span>
        </div>
        <div style="overflow-x:auto;padding-bottom:2px">
          ${renderOBSOverlay()}
        </div>
      </div>

      <div class="opt-sec" style="margin-top:4px">Posición en Pantalla (Streaming)</div>
      <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:12px">
        <button class="pill ${pos === 'tl' ? 'active' : ''}" data-set-obs-pos="tl">Arriba Izquierda</button>
        <button class="pill ${pos === 'tr' ? 'active' : ''}" data-set-obs-pos="tr">Arriba Derecha</button>
        <button class="pill ${pos === 'bl' ? 'active' : ''}" data-set-obs-pos="bl">Abajo Izquierda</button>
        <button class="pill ${pos === 'br' ? 'active' : ''}" data-set-obs-pos="br">Abajo Derecha</button>
        <button class="pill ${pos === 'bar' ? 'active' : ''}" data-set-obs-pos="bar">Barra Inferior (Chyron)</button>
      </div>

      <div class="opt-sec">1. Enlace Remoto (Celular en Cancha ➔ OBS en PC) <span class="tag gold" style="font-size:9.5px;margin-left:4px">Recomendado</span></div>
      <div style="background:rgba(255,255,255,0.03);border:1px solid var(--line);border-radius:12px;padding:10px 12px;margin-bottom:12px">
        <div style="font-size:12px;color:var(--tx2);margin-bottom:6px">Anotás los puntos con el celular en la pista y OBS en la PC se actualiza solo en tiempo real vía nube:</div>
        <div style="display:flex;gap:8px;align-items:center">
          <input class="inp" readonly value="${esc(remoteUrl)}" id="obs-remote-url-inp" style="font-family:monospace;font-size:11.5px;height:38px">
          <button class="btn primary sm" data-copy-input="obs-remote-url-inp" style="flex:none">${ICONS.copy} Copiar</button>
        </div>
      </div>

      <div class="opt-sec">2. Enlace Local (Misma PC)</div>
      <div style="background:rgba(255,255,255,0.03);border:1px solid var(--line);border-radius:12px;padding:10px 12px;margin-bottom:14px">
        <div style="font-size:12px;color:var(--tx2);margin-bottom:6px">Sincronización instantánea de latencia cero si anotás en Chrome en la misma PC donde tenés el OBS:</div>
        <div style="display:flex;gap:8px;align-items:center">
          <input class="inp" readonly value="${esc(localUrl)}" id="obs-local-url-inp" style="font-family:monospace;font-size:11.5px;height:38px">
          <button class="btn sm" data-copy-input="obs-local-url-inp" style="flex:none">${ICONS.copy} Copiar</button>
        </div>
      </div>

      <div class="card" style="padding:10px 12px;background:rgba(212,175,55,0.05);border-color:rgba(212,175,55,0.22);margin-bottom:14px">
        <b style="font-size:12px;color:var(--gold);display:block;margin-bottom:4px">Cómo configurarlo en OBS Studio / vMix:</b>
        <ol style="margin:0;padding-left:18px;font-size:11.5px;color:var(--tx2);line-height:1.45">
          <li>En OBS, en el panel <b>Fuentes (Sources)</b>, hacé clic en <b>+</b> y elegí <b>Navegador (Browser)</b>.</li>
          <li>Pegá el enlace copiado en el campo <b>URL</b>.</li>
          <li>Poné Ancho: <b>1920</b> y Alto: <b>1080</b> (o la resolución de tu video).</li>
          <li>¡Listo! El fondo es 100% transparente y se actualizará automáticamente a cada punto.</li>
        </ol>
      </div>

      <div class="btn-row">
        <a href="${esc(remoteUrl)}" target="_blank" class="btn" style="text-decoration:none">${ICONS.full} Abrir overlay en pestaña</a>
        <button class="btn primary" data-act="close-obs-modal">Listo</button>
      </div>
    </div>
  </div>`;
}

export function renderBoardOverlays(m: Match, st: ComputedMatchState): string {
  const { ui } = store;
  let html = '';

  if (ui.shotSheet) {
    const w = ui.shotSheet.team;
    const l = 1 - w;
    const wCol = m.teams[w].color;
    const lCol = m.teams[l].color;
    const wPlayers: Array<[number, string]> = [
      [0, playerLabel(m, w, 0)],
      [1, playerLabel(m, w, 1)]
    ];
    const lPlayers: Array<[number, string]> = [
      [0, playerLabel(m, l, 0)],
      [1, playerLabel(m, l, 1)]
    ];

    html += `
    <div class="scrim" data-close-sheet="1">
      <div class="sheet">
        <h2>Punto para ${esc(teamLabel(m, w))}</h2>
        <p class="muted">Seleccioná cómo terminó el punto (o tocá Punto rápido)</p>

        <div class="opt-sec">Golpe ganador (Winner) de ${esc(teamLabel(m, w))}</div>
        <div class="opt-grid">
          ${wPlayers
            .map(
              ([pi, nm], i) => `
            <button class="opt" style="--c:${esc(wCol)}" data-shot="winner,${w},${pi},winner">
              <span class="k">${i + 1}</span>
              ${esc(nm)}
              <small>Winner general</small>
            </button>`
            )
            .join('')}
        </div>

        <div style="display:flex;gap:8px;flex-wrap:wrap;margin:8px 0 14px">
          ${wPlayers
            .map(
              ([pi, nm]) => `
            <div style="flex:1;min-width:140px;background:rgba(212,175,55,0.06);border:1px solid rgba(212,175,55,0.22);border-radius:12px;padding:8px 10px">
              <div style="font-size:11px;font-weight:700;color:var(--gold);margin-bottom:6px">GOLPE DE ${esc(nm).toUpperCase()}:</div>
              <div style="display:flex;gap:5px;flex-wrap:wrap">
                <button type="button" class="pill sm" data-shot="winner,${w},${pi},smash">💥 Smash</button>
                <button type="button" class="pill sm" data-shot="winner,${w},${pi},volea">🎾 Volea</button>
                <button type="button" class="pill sm" data-shot="winner,${w},${pi},bandeja">🌀 Bandeja</button>
                <button type="button" class="pill sm" data-shot="winner,${w},${pi},bajada">⚡ Bajada</button>
                <button type="button" class="pill sm" data-shot="winner,${w},${pi},dejada">🎯 Dejada</button>
              </div>
            </div>`
            )
            .join('')}
        </div>

        <div class="opt-sec">Error no forzado de ${esc(teamLabel(m, l))}</div>
        <div class="opt-grid">
          ${lPlayers
            .map(
              ([pi, nm], i) => `
            <button class="opt" style="--c:${esc(lCol)}" data-shot="ue,${l},${pi}">
              <span class="k">${i + 3}</span>
              ${esc(nm)}
              <small>Error no forzado</small>
            </button>`
            )
            .join('')}
        </div>

        <div class="opt-sec">Error forzado de ${esc(teamLabel(m, l))}</div>
        <div class="opt-grid">
          ${lPlayers
            .map(
              ([pi, nm], i) => `
            <button class="opt" style="--c:${esc(lCol)}" data-shot="fe,${l},${pi}">
              <span class="k">${i + 5}</span>
              ${esc(nm)}
              <small>Error forzado</small>
            </button>`
            )
            .join('')}
        </div>

        ${
          st.srvTeam === l
            ? `
        <button class="opt wide" style="--c:#f59e0b" data-shot="df,${l},${st.srvPlayer}">
          <span class="k">F</span>
          Doble falta de ${esc(playerLabel(m, l, st.srvPlayer))}
        </button>`
            : ''
        }

        <div class="btn-row">
          <button class="btn primary" data-shot="pt,${w},-1"><span class="k">Espacio</span>Punto rápido (sin detalle)</button>
          <button class="btn" data-close-sheet="1"><span class="k">Esc</span>Cancelar</button>
        </div>
      </div>
    </div>`;
  }

  if (ui.secondSrvPrompt) {
    const tB = 1 - m.firstServer[0];
    const col = m.teams[tB].color;
    html += `
    <div class="scrim">
      <div class="sheet">
        <h2>¿Quién saca en ${esc(teamLabel(m, tB))}?</h2>
        <p class="muted">Elegí el orden de saque de la pareja para el resto del set.</p>
        <div class="opt-grid" style="margin-top:14px">
          ${[0, 1]
            .map(
              (pi) => `
            <button class="opt" style="--c:${esc(col)}" data-pick-2ndsrv="${pi}">
              ${esc(playerLabel(m, tB, pi))}
              <small>Saca ahora</small>
            </button>`
            )
            .join('')}
        </div>
      </div>
    </div>`;
  }

  if (ui.changeoverOverlay) {
    const co = ui.changeoverOverlay;
    html += `
    <div class="overlay">
      <div class="big-ic">${ICONS.swap}</div>
      <h2>${esc(co.title)}</h2>
      <p>${esc(co.sub)}</p>
      <div class="count" id="co-countdown">${co.secondsLeft}s</div>
      <div class="btn-row">
        <button class="btn primary big" data-act="dismiss-co">Continuar partido</button>
      </div>
    </div>`;
  }

  if (st.matchWinner !== null && !ui.matchEndDismissed) {
    const w = st.matchWinner;
    const mCompId = getMatchCompId(m);
    const mComp = mCompId ? getCompById(mCompId) : null;
    const scoring = getCompetitionScoringConfig(mComp);
    const setsWonArr = st.sets.reduce(
      (acc, s) => {
        if (s.winner === 0) acc[0]++;
        else if (s.winner === 1) acc[1]++;
        return acc;
      },
      [0, 0]
    );
    const winTablePts = scoring.winPts + (scoring.setBonusPts ? setsWonArr[w] * scoring.setBonusPts : 0);
    const lossTablePts = scoring.lossPts + (scoring.setBonusPts ? setsWonArr[1 - w] * scoring.setBonusPts : 0);
    const scopeLabel = mComp ? `${mComp.kind === 'league' ? '🏅 Liga' : '🏆 Torneo'}: ${mComp.name}` : '☀️ Partido del Día';
    const eloPreview = calculateMatchEloPreview(m);
    let eloBanner = '';
    if (eloPreview) {
      const winPair = w === 0 ? eloPreview.pair0 : eloPreview.pair1;
      const losePair = w === 0 ? eloPreview.pair1 : eloPreview.pair0;
      const winPts = Math.abs(winPair.players[0]?.delta || 0);
      const losePts = Math.abs(losePair.players[0]?.delta || 0);
      eloBanner = `
      <div class="ov-elo-box">
        <div class="ov-elo-title">⚡ RANKING ACTUALIZADO · ${esc(scopeLabel.toUpperCase())}</div>
        <div class="ov-elo-pairs">
          <div class="ov-elo-card win">
            <span class="ov-elo-tag">GANADORES</span>
            <b>${esc(teamLabel(m, w))}</b>
            <div class="ov-elo-delta">+${winTablePts} pts tabla · ▲ +${winPts} ELO</div>
            ${eloPreview.isBlowout ? '<small>💥 Bonus ELO x1.2 (+6 juegos)</small>' : '<small>Tabla y ELO actualizados</small>'}
          </div>
          <div class="ov-elo-card lose">
            <span class="ov-elo-tag">SUBCAMPEONES</span>
            <b>${esc(teamLabel(m, 1 - w))}</b>
            <div class="ov-elo-delta">+${lossTablePts} pts tabla · ▼ -${losePts} ELO</div>
            <small>Ranking por separado</small>
          </div>
        </div>
      </div>`;
    }
    html += `
    <div class="overlay">
      <div class="big-ic">${ICONS.trophy}</div>
      <p>¡PARTIDO FINALIZADO!</p>
      <div style="margin-bottom:8px">${getMatchContextBadgeHtml(m)}</div>
      <h2>${esc(teamLabel(m, w))}</h2>
      <div class="ov-score">
        ${[0, 1]
          .map(
            (t) => `
          <div class="mrow">
            <span class="bar" style="--c:${esc(m.teams[t].color)}"></span>
            <span class="nm">${esc(teamLabel(m, t))}</span>
            ${st.sets.map((s) => `<span class="s ${s.winner === t ? 'w' : ''}">${s.games[t]}</span>`).join('')}
          </div>`
          )
          .join('')}
      </div>
      ${eloBanner}
      <div class="btn-row">
        <button class="btn primary big" data-open-stats="${esc(m.id)}">${ICONS.chart} Ver Análisis y PDF</button>
        <button class="btn big" data-act="share-img-active">${ICONS.img} Imagen resumen</button>
      </div>
      <div class="btn-row">
        ${mComp ? `<button class="btn" data-open-comp="${esc(mComp.id)}">${ICONS.award} Ver ${mComp.kind === 'league' ? 'Liga' : 'Torneo'}</button>` : `<button class="btn" data-act="open-daily-ranking">${ICONS.trophy} Ranking del Día</button>`}
        <button class="btn" data-act="undo-from-end">${ICONS.undo} Corregir último punto</button>
        <button class="btn" data-nav="new">${ICONS.plus} Nuevo partido</button>
      </div>
    </div>`;
  }

  if (ui.menuOpen) {
    html += `
    <div class="scrim" data-close-menu="1">
      <div class="sheet">
        <h2>Opciones del marcador</h2>
        <div class="menu-list">
          <button data-act="open-qr-modal">${ICONS.qr}<div><b>Compartir App (Código QR)</b><small>Mostrá el código para que otra persona escanee y abra la app en su teléfono</small></div></button>
          <button data-act="open-support-modal">${ICONS.heart}<div><b>Colaborar con el desarrollo</b><small>Alias: ${esc(SUPPORT_INFO.alias)} · CVU disponible para copiar</small></div></button>
          <button data-act="share-live">${ICONS.live}<div><b>Compartir partido EN VIVO (Link)</b><small>Enviá un enlace por WhatsApp para que sigan el marcador en tiempo real desde cualquier lugar</small></div></button>
          <button data-act="toggle-shot-prompt">${ICONS.edit}<div><b>${m.shotPrompt ? 'Desactivar' : 'Activar'} pregunta de golpe</b><small>${m.shotPrompt ? 'Actualmente pregunta Winner / Error al anotar' : 'Actualmente anota punto directo con un toque'}</small></div></button>
          <button data-act="open-obs-modal">${ICONS.tv}<div><b>Superposición para OBS (Overlay)</b><small>Marcador broadcast transparente para streamings en vivo (YouTube, Twitch, OBS)</small></div></button>
          <button data-act="open-tv">${ICONS.tv}<div><b>Abrir Modo TV / Espectador</b><small>Segunda ventana sincronizada en vivo para proyector o monitor</small></div></button>
          <button data-act="fullscreen">${ICONS.full}<div><b>Pantalla completa</b><small>Ocultar barras del navegador</small></div></button>
          <button data-act="rotate-server">${ICONS.ball}<div><b>Cambiar sacador actual</b><small>Alternar quién saca si hubo un ajuste manual</small></div></button>
          <button data-act="open-edit-names">${ICONS.edit}<div><b>Editar nombres y colores</b><small>Modificar jugadores sin perder el marcador</small></div></button>
          <button data-open-stats="active">${ICONS.chart}<div><b>Ver estadísticas hasta ahora</b><small>Análisis completo en tiempo real</small></div></button>
          <button class="danger" data-act="finish-early">${ICONS.flag}<div><b>Terminar y guardar partido</b><small>Cerrar partido actual y archivar en el historial</small></div></button>
        </div>
        <div class="btn-row">
          <button class="btn block" data-close-menu="1">Cerrar</button>
        </div>
      </div>
    </div>`;
  }

  if (ui.editNamesOpen) {
    html += `
    <div class="scrim" data-close-edit="1">
      <div class="sheet">
        <h2>Editar Jugadores y Colores</h2>
        ${[0, 1]
          .map(
            (t) => `
          <div class="opt-sec">Pareja ${t + 1}</div>
          <div class="row wrap">
            <div class="field"><label style="font-size:11px;color:var(--tx2);display:block;margin-bottom:3px">Drive (Derecha)</label><input class="inp" id="ed-p-${t}-0" placeholder="DRIVE ${t + 1}" value="${esc(m.teams[t].players[0] || '')}"></div>
            <div class="field"><label style="font-size:11px;color:var(--tx2);display:block;margin-bottom:3px">Revés (Izquierda)</label><input class="inp" id="ed-p-${t}-1" placeholder="REVÉS ${t + 1}" value="${esc(m.teams[t].players[1] || '')}"></div>
          </div>
          <div class="colors" style="margin:6px 0 10px">
            ${COLORS.map((c) => `<button type="button" style="--c:${c.c}" class="${m.teams[t].color === c.c ? 'on' : ''}" data-edit-tcolor="${t},${c.c}" title="${c.n}"></button>`).join('')}
          </div>`
          )
          .join('')}
        <div class="btn-row">
          <button class="btn primary" data-act="save-edit-names">Guardar</button>
          <button class="btn" data-close-edit="1">Cancelar</button>
        </div>
      </div>
    </div>`;
  }

  return html;
}

export function renderBoard(isDisplayOnly = false): string {
  const { ui, activeMatch, prefs } = store;
  const isRemoteLive = ui.route === 'live';
  const m = isRemoteLive ? ui.liveMatch : activeMatch;

  if (!m) {
    if (isRemoteLive) {
      return `
      <div class="page">
        <div class="empty">
          ${ICONS.live}<br>
          <b>Conectando con la cancha en vivo...</b><br>
          <span class="muted">Esperando señal en tiempo real del partido.</span><br><br>
          <div class="btn-row" style="justify-content:center">
            <button class="btn" data-act="exit-live">Salir al inicio</button>
            ${renderSupportButton()}
          </div>
        </div>
        ${renderSignatureFooter()}
      </div>`;
    }
    return `
    <div class="page">
      <div class="empty">
        No hay ningún partido activo.<br><br>
        <div class="btn-row" style="justify-content:center">
          <button class="btn primary" data-nav="new">Crear Partido</button>
          ${renderSupportButton()}
        </div>
      </div>
      ${renderSignatureFooter()}
    </div>
    ${renderTabbar('home')}`;
  }
  const st = computeMatch(m);
  const order = m.flipped ? [1, 0] : [0, 1];

  const renderHalf = (t: number) => {
    const col = m.teams[t].color;
    const fg = fgFor(col);
    const playersHtml: string[] = [];
    for (let pi = 0; pi < 2; pi++) {
      const isSrv = st.matchWinner === null && st.srvTeam === t && st.srvPlayer === pi;
      playersHtml.push(`
        <div class="pn ${isSrv ? 'srv' : ''}">
          <span class="ball"></span>
          <span class="nm">${esc(playerLabel(m, t, pi))}</span>
          ${isSrv && st.srvSide ? `<span class="srv-side-badge srv-side-${st.srvSide.toLowerCase()}" title="Saque desde la ${st.srvSide === 'D' ? 'Derecha' : 'Revés'}">${st.srvSide}</span>` : ''}
          ${isSrv && m.pendingFault ? `<em class="fault">2º SAQUE</em>` : ''}
        </div>`);
    }

    const setsHtml = st.sets
      .map((s, idx) => {
        if (idx === st.curSetIdx && st.matchWinner === null) return '';
        if (s.games[0] === 0 && s.games[1] === 0 && s.winner === null) return '';
        const won = s.winner === t;
        const tbSup = s.tbScore ? `<sup>${s.tbScore[t]}</sup>` : '';
        return `<span class="${won ? 'won' : ''}">${s.games[t]}${tbSup}</span>`;
      })
      .join('');

    const ptVal = st.matchWinner !== null ? (st.matchWinner === t ? ICONS.trophy : '—') : esc(st.pointDisplay[t]);

    return `
    <div class="half" data-team="${t}" ${isDisplayOnly ? 'data-ro="1"' : 'tabindex="0" role="button"'} style="--tc:${esc(col)};--tf:${fg}">
      <div class="players">${playersHtml.join('')}</div>
      <div class="h-sets">${setsHtml}</div>
      <div class="h-games">
        <small>${st.isSuperTB ? 'SÚPER TB' : 'JUEGOS'}</small>
        <b>${st.curSet.games[t]}</b>
      </div>
      <div class="h-pts">${ptVal}</div>
    </div>`;
  };

  const tags: string[] = [];
  if (st.matchWinner !== null) {
    tags.push(`<span class="tag gold">FINALIZADO</span>`);
  } else {
    tags.push(`<span class="tag">${st.isSuperTB ? 'SÚPER TIE-BREAK' : st.isTB ? 'TIE-BREAK' : `SET ${st.curSetIdx + 1}`}</span>`);
    if (st.isStar) {
      tags.push(`<span class="tag gold">★ STAR POINT (PUNTO DECISIVO)</span>`);
    } else if (st.isGP) {
      tags.push(`<span class="tag gold">PUNTO DE ORO</span>`);
    } else if (m.rules.deuceRule === 'star' && !st.isTB && st.p[0] >= 3 && st.p[1] >= 3) {
      if (st.p[0] !== st.p[1]) {
        tags.push(`<span class="tag">${st.curAdvNumber}ª VENTAJA (DE 2)</span>`);
      } else if (st.curDeuceCount === 2) {
        tags.push(`<span class="tag">IGUALES (QUEDA 1 VENTAJA ANTES DEL ★ STAR POINT)</span>`);
      } else if (st.curDeuceCount === 1) {
        tags.push(`<span class="tag">IGUALES (HASTA 2 VENTAJAS)</span>`);
      }
    }
    for (let t = 0; t < 2; t++) {
      if (st.mp[t]) tags.push(`<span class="tag hot" style="--c:${esc(m.teams[t].color)};--f:${fgFor(m.teams[t].color)}">MATCH POINT · ${esc(teamLabel(m, t))}</span>`);
      else if (st.sp[t]) tags.push(`<span class="tag hot" style="--c:${esc(m.teams[t].color)};--f:${fgFor(m.teams[t].color)}">SET POINT · ${esc(teamLabel(m, t))}</span>`);
    }
    if (st.isBP && !st.isGP) {
      const rcv = 1 - st.srvTeam;
      tags.push(`<span class="tag warn">BOLA DE BREAK · ${esc(teamLabel(m, rcv))}</span>`);
    }
    if (ui.voiceListening) {
      tags.push(`<span class="tag mic">● MIC ACTIVO</span>`);
    }
    if (tags.length === 1 && !isDisplayOnly) {
      tags.push(`<span class="tag dim">Tocá el lado ganador del punto</span>`);
    }
  }

  return `
  <div class="board ${isDisplayOnly ? 'display' : ''}">
    <header class="sb-top">
      ${
        isRemoteLive
          ? `
        <button class="icon-btn" data-act="exit-live" title="Salir de la transmisión">${ICONS.back}</button>
        <div class="sb-clock">
          <span id="sb-clock-val">${esc(fmtClock(m.durationMs))}</span>
          <small><b class="red">● EN VIVO</b> · ${st.matchWinner !== null ? 'FINALIZADO' : `SET ${st.curSetIdx + 1} · SACA ${esc(playerLabel(m, st.srvTeam, st.srvPlayer))} (${st.srvSide === 'D' ? 'DERECHA' : 'REVÉS'})`}</small>
        </div>
        <button class="icon-btn ${prefs.voice ? 'on' : ''}" data-act="toggle-voice-tts" title="Activar voz de árbitro en vivo">${prefs.voice ? ICONS.vol : ICONS.mute}</button>
        <button class="icon-btn" data-open-stats="live" title="Estadísticas en tiempo real">${ICONS.chart}</button>
        <button class="icon-btn" data-act="open-support-modal" title="Colaborar con el desarrollo">${ICONS.heart}</button>
        <button class="icon-btn" data-act="fullscreen" title="Pantalla completa">${ICONS.full}</button>
      `
          : isDisplayOnly
            ? `
        <button class="icon-btn" data-nav="board" title="Salir de modo TV">${ICONS.back}</button>
        <div class="sb-clock">
          <span id="sb-clock-val">${esc(fmtClock(m.durationMs))}</span>
          <small><b class="red">● EN VIVO</b> · ${esc(teamLabel(m, 0))} vs ${esc(teamLabel(m, 1))}</small>
        </div>
        <button class="icon-btn" data-act="fullscreen" title="Pantalla completa">${ICONS.full}</button>
      `
            : `
        <button class="icon-btn" data-nav="home" title="Inicio">${ICONS.back}</button>
        <button class="icon-btn" data-act="share-live" title="Compartir partido en vivo por link">${ICONS.live}</button>
        <div class="sb-clock" data-act="toggle-pause" style="cursor:pointer" title="Tocar para pausar/reanudar reloj">
          <span id="sb-clock-val">${esc(fmtClock(m.durationMs))}</span>
          <small>${m.status === 'paused' ? '<b class="red">PAUSADO</b>' : `SET ${st.curSetIdx + 1} · SACA ${esc(playerLabel(m, st.srvTeam, st.srvPlayer))} (${st.srvSide === 'D' ? 'DERECHA' : 'REVÉS'})`}</small>
        </div>
        <button class="icon-btn ${prefs.voice ? 'on' : ''}" data-act="toggle-voice-tts" title="Voz de árbitro">${prefs.voice ? ICONS.vol : ICONS.mute}</button>
        <button class="icon-btn ${ui.voiceListening ? 'on' : ''}" data-act="toggle-voice-rec" title="Control por voz manos libres">${ICONS.mic}</button>
        <button class="icon-btn" data-act="open-menu" title="Opciones">${ICONS.dots}</button>
      `
      }
    </header>

    <main class="court">
      ${renderHalf(order[0])}
      <div class="mid">${tags.join('')}</div>
      ${renderHalf(order[1])}
    </main>

    ${
      isDisplayOnly
        ? ''
        : `
    <footer class="sb-foot">
      <button data-act="undo" ${!m.events.length && !m.pendingFault ? 'disabled' : ''} title="Deshacer (Z / Backspace)">${ICONS.undo}<span class="lbl">Deshacer</span></button>
      <button data-act="redo" ${!m.redoStack || !m.redoStack.length ? 'disabled' : ''} title="Rehacer (Y)">${ICONS.redo}<span class="lbl">Rehacer</span></button>
      <button class="fault-btn ${m.pendingFault ? 'on' : ''}" data-act="fault" ${st.matchWinner !== null ? 'disabled' : ''} title="Falta de saque / Doble falta (F)">
        ${m.pendingFault ? 'DOBLE FALTA' : 'FALTA SAQUE'}
      </button>
      <button data-act="flip" title="Cambiar lados de cancha (S)">${ICONS.swap}<span class="lbl">Lados</span></button>
      <button data-open-stats="active" title="Ver estadísticas en vivo">${ICONS.chart}<span class="lbl">Stats</span></button>
    </footer>`
    }

    ${
      !isDisplayOnly
        ? renderBoardOverlays(m, st)
        : isRemoteLive && st.matchWinner !== null && !ui.matchEndDismissed
          ? `
    <div class="overlay">
      <div class="big-ic">${ICONS.trophy}</div>
      <p>¡PARTIDO FINALIZADO EN VIVO!</p>
      <h2>${esc(teamLabel(m, st.matchWinner))}</h2>
      <div class="ov-score">
        ${[0, 1]
          .map(
            (t) => `
          <div class="mrow">
            <span class="bar" style="--c:${esc(m.teams[t].color)}"></span>
            <span class="nm">${esc(teamLabel(m, t))}</span>
            ${st.sets.map((s) => `<span class="s ${s.winner === t ? 'w' : ''}">${s.games[t]}</span>`).join('')}
          </div>`
          )
          .join('')}
      </div>
      <div class="btn-row">
        <button class="btn primary big" data-open-stats="live">${ICONS.chart} Ver Estadísticas del Partido</button>
        <button class="btn big" data-act="save-live">Guardar en mi historial</button>
      </div>
    </div>`
          : ''
    }
  </div>`;
}
