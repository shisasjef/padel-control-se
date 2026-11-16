import { getSavedPlayerCards } from '../cards/playerCardStudio';
import { ICONS, renderSignatureFooter } from '../core/constants';
import { esc, fmtDateLong, formatBytesCompact, getMatchCompId, getMatchKind } from '../core/utils';
import { isProyectoPadelComp } from '../engines/eloEngine';
import { getCurrentRankingContext } from '../services/liveBroadcast';
import { getCompById, getSyncServerBaseUrl, loadJSON, store } from '../state/store';
import type { SharedRanking } from '../types';
import { renderSortBarHtml, renderStandingsSectionHtml } from './competitionsViews';
import { renderMatchCard, renderTabbar } from './sharedUi';

export function renderHistory(): string {
  const { ui, historyList } = store;
  const q = (ui.histQuery || '').toLowerCase().trim();
  const hf = ui.histFilter || 'all';
  const list = historyList.filter((m) => {
    const mk = getMatchKind(m);
    if (hf !== 'all' && mk !== hf) return false;
    if (!q) return true;
    const names = m.teams.flatMap((t) => t.players).join(' ').toLowerCase();
    const compId = getMatchCompId(m);
    const compTitle = (m.competition?.compName || (compId ? getCompById(compId)?.name : '') || '').toLowerCase();
    return names.includes(q) || compTitle.includes(q) || fmtDateLong(m.createdAt).toLowerCase().includes(q);
  });

  return `
  <div class="page">
    <div class="page-h">
      <h1>Historial (${historyList.length})</h1>
      <div class="page-h-acts">
        <button class="btn sm" data-act="export-json" title="Descargar copia de seguridad completa en JSON">${ICONS.dl} Backup JSON</button>
        <label class="btn sm" style="cursor:pointer" title="Importar partidos desde archivo JSON">
          ${ICONS.up} Importar
          <input type="file" accept=".json,application/json" style="display:none" id="imp-json-file">
        </label>
        <button class="icon-btn" data-nav="settings" title="Ajustes">${ICONS.gear}</button>
      </div>
    </div>

    <div class="seg" style="margin-bottom:12px">
      <button class="${hf === 'all' ? 'on' : ''}" data-set-hfilter="all">Todos</button>
      <button class="${hf === 'daily' ? 'on' : ''}" data-set-hfilter="daily">☀️ Día</button>
      <button class="${hf === 'league' ? 'on' : ''}" data-set-hfilter="league">🏅 Ligas</button>
      <button class="${hf === 'tournament' ? 'on' : ''}" data-set-hfilter="tournament">🏆 Torneos</button>
    </div>

    <div class="field">
      <input class="inp" placeholder="Buscar por jugador, fecha o torneo..." value="${esc(ui.histQuery)}" id="hist-search-inp">
    </div>

    ${
      list.length
        ? list.map(renderMatchCard).join('')
        : `<div class="empty">${ICONS.hist}<br>No se encontraron partidos.</div>`
    }
    ${renderSignatureFooter()}
  </div>
  ${renderTabbar('history')}`;
}

export function renderPlayers(): string {
  const { ui, historyList, competitionsList, prefs } = store;
  const vault = loadJSON<Record<string, SharedRanking>>('padel_ranking_vault', {});
  const sharedList = Object.values(vault);
  const hasShared = !!(ui.sharedRanking && Array.isArray(ui.sharedRanking.players) && ui.sharedRanking.players.length > 0);
  if (!historyList.length && !competitionsList.length && hasShared && ui.playerRankingView === 'shared') {
    ui.playerScope = 'shared';
  }

  const rCtx = getCurrentRankingContext();
  const scope = rCtx.scope;
  const currentSort = rCtx.sortKey || 'pts';
  const players = rCtx.players || [];

  let scopeSubHtml = '';
  if (scope === 'daily') {
    const tf = ui.dailyTimeFilter || 'all';
    const em = ui.playerEntityMode || 'individual';
    const winP = Number(prefs.dailyWinPts ?? 3);
    const lossP = Number(prefs.dailyLossPts ?? 1);
    scopeSubHtml = `
      <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;background:linear-gradient(135deg,rgba(212,175,55,0.08) 0%,rgba(16,16,22,0.92) 80%);border:1px solid rgba(212,175,55,0.25);border-radius:12px;padding:8px 14px;margin-bottom:12px;flex-wrap:wrap">
        <div style="display:flex;align-items:center;gap:8px;min-width:0;overflow:hidden">
          <span style="font-size:16px">☀️</span>
          <div style="min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">
            <span style="font-size:13px;font-weight:700;color:var(--tx)">${esc(prefs.rankingName || 'Mi Ranking')} · Partido del Día</span>
            <span style="font-family:monospace;font-size:11px;color:var(--gold);margin-left:6px;background:rgba(212,175,55,0.12);padding:2px 6px;border-radius:6px;font-weight:700">#${esc(prefs.rankingId)}</span>
          </div>
        </div>
        <div style="display:flex;gap:6px">
          <button class="btn sm" data-act="open-daily-pts" style="padding:4px 9px;font-size:11.5px;height:auto">+${winP}V / +${lossP}D</button>
          <button class="btn sm" data-act="prompt-ranking-name" style="padding:4px 9px;font-size:11.5px;height:auto">✏️ Renombrar</button>
        </div>
      </div>

      <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:12px">
        <div class="seg" style="flex:1 1 180px">
          <button class="${tf === 'all' ? 'on' : ''}" data-set-daily-time="all">📅 Acumulado</button>
          <button class="${tf === 'today' ? 'on' : ''}" data-set-daily-time="today">☀️ Hoy</button>
        </div>
        <div class="seg" style="flex:1 1 180px">
          <button class="${em === 'individual' ? 'on' : ''}" data-set-pentity="individual">👤 Individual</button>
          <button class="${em === 'pairs' ? 'on' : ''}" data-set-pentity="pairs">👥 Por Parejas</button>
        </div>
      </div>`;
  } else if (scope === 'league' || scope === 'tournament') {
    const compsOfKind = competitionsList.filter((c) => c.kind === scope);
    if (!compsOfKind.length) {
      scopeSubHtml = `
      <div class="card" style="text-align:center;margin-bottom:14px">
        <p class="muted" style="margin-bottom:10px">Todavía no creaste ${scope === 'league' ? 'ninguna Liga' : 'ningún Torneo'}.</p>
        <button class="btn primary sm" data-act="new-comp" data-kind="${scope}">${ICONS.plus} Crear ${scope === 'league' ? 'Liga' : 'Torneo'}</button>
      </div>`;
    } else {
      const selComp = rCtx.comp;
      const gLetters = selComp ? Array.from(new Set((selComp.participants || []).map((p) => p.group).filter(Boolean))).sort() : [];
      const em = rCtx.entityMode || 'pairs';
      scopeSubHtml = `
      <div class="card" style="margin-bottom:12px;padding:12px 14px">
        <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
          <select class="inp" style="flex:1 1 190px;min-height:38px" data-act="sel-rank-comp">
            ${compsOfKind.map((c) => `<option value="${esc(c.id)}" ${c.id === selComp?.id ? 'selected' : ''}>${esc(c.name)}</option>`).join('')}
          </select>
          ${selComp ? `<button class="btn sm" data-open-comp="${esc(selComp.id)}">Gestionar</button>` : ''}
          <button class="btn sm" data-act="new-comp" data-kind="${scope}">${ICONS.plus}</button>
        </div>
        ${
          selComp?.rankingMode === 'both'
            ? `
          <div class="seg" style="margin-top:10px">
            <button class="${em === 'pairs' ? 'on' : ''}" data-set-pentity="pairs">👥 Por Parejas</button>
            <button class="${em === 'individual' ? 'on' : ''}" data-set-pentity="individual">👤 Individual</button>
          </div>`
            : ''
        }
        ${
          selComp?.format === 'groups_playoff' && gLetters.length
            ? `
          <div class="pills" style="margin-top:10px">
            <button class="pill ${(ui.selectedGroupFilter || 'all') === 'all' ? 'on' : ''}" data-set-gfilter="all">Todos</button>
            ${gLetters.map((g) => `<button class="pill ${ui.selectedGroupFilter === g ? 'on' : ''}" data-set-gfilter="${esc(g)}">Grupo ${esc(g)}</button>`).join('')}
          </div>`
            : ''
        }
      </div>`;
    }
  } else if (scope === 'shared') {
    const dateStr = ui.sharedRanking?.timestamp
      ? ` · ${new Date(ui.sharedRanking.timestamp).toLocaleDateString('es-AR', { day: 'numeric', month: 'short' })}`
      : '';
    scopeSubHtml = `
    ${
      sharedList.length > 1
        ? `
      <div class="seg" style="margin-bottom:12px;overflow-x:auto;white-space:nowrap">
        ${sharedList
          .map(
            (sr) => `
          <button class="${ui.sharedRanking?.id === sr.id ? 'on' : ''}" data-select-ranking="${esc(sr.id)}">📡 ${esc(sr.name || 'Compartido')} (#${esc(sr.id)})</button>
        `
          )
          .join('')}
      </div>`
        : ''
    }
    ${
      hasShared && ui.sharedRanking
        ? `
      <div class="card" style="margin-bottom:14px;background:linear-gradient(135deg,rgba(212,175,55,0.14) 0%,rgba(16,16,22,0.96) 60%);border:1px solid rgba(212,175,55,0.38);padding:12px 16px;display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap">
        <div style="display:flex;align-items:center;gap:10px">
          <span style="font-size:24px">📡</span>
          <div>
            <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">
              <b style="font-size:14px;color:var(--acc-ink)">${esc(ui.sharedRanking.name || 'Ranking Compartido')}</b>
              <span style="font-family:monospace;font-size:11.5px;color:var(--gold);background:rgba(212,175,55,0.15);padding:1px 6px;border-radius:6px;font-weight:700">#${esc(ui.sharedRanking.id || 'RK-EXT')}</span>
            </div>
            <small style="color:var(--tx2);font-size:12px">${esc(ui.sharedRanking.subtitle || `${players.length} participantes`)}${dateStr}</small>
          </div>
        </div>
        <div style="display:flex;align-items:center;gap:6px">
          <button class="btn sm" data-set-pscope="daily">Ver mi ranking</button>
          <button class="btn sm" data-act="clear-shared-ranking" title="Cerrar ranking compartido">✕</button>
        </div>
      </div>`
        : ''
    }`;
  }

  return `
  <div class="page">
    <div class="page-h">
      <h1>Rankings</h1>
      <div class="page-h-acts">
        <button class="btn primary sm" data-act="share-ranking" title="Compartir Ranking por WhatsApp o enlace">${ICONS.share} Compartir</button>
        <button class="btn sm" data-act="export-ranking-img" title="Descargar imagen oficial del Ranking">${ICONS.img} Imagen</button>
        <button class="icon-btn" data-nav="settings" title="Ajustes">${ICONS.gear}</button>
      </div>
    </div>
    <p class="muted" style="text-align:center;margin-bottom:12px">Rankings separados por competencia: Partido del Día (acumulado u hoy), Ligas y Torneos.</p>

    <div class="seg" style="margin-bottom:12px">
      <button class="${scope === 'daily' ? 'on' : ''}" data-set-pscope="daily">☀️ Partido del Día</button>
      <button class="${scope === 'league' ? 'on' : ''}" data-set-pscope="league">🏅 Ligas</button>
      <button class="${scope === 'tournament' ? 'on' : ''}" data-set-pscope="tournament">🏆 Torneos</button>
      ${hasShared || sharedList.length > 0 ? `<button class="${scope === 'shared' ? 'on' : ''}" data-set-pscope="shared">📡 Guardados</button>` : ''}
    </div>

    ${scopeSubHtml}

    ${renderSortBarHtml(currentSort, rCtx.primaryMetric === 'elo' || isProyectoPadelComp(rCtx.comp))}

    ${renderStandingsSectionHtml(players, rCtx, {
      tableTitle: rCtx.title || 'Tabla de Posiciones',
      emptyText:
        scope === 'daily'
          ? ui.dailyTimeFilter === 'today'
            ? 'Todavía no hay Partidos del Día registrados hoy.'
            : 'Todavía no hay Partidos del Día guardados.'
          : 'Sin partidos ni inscriptos cargados en esta competencia.'
    })}

    ${
      players.length
        ? `
    <div class="btn-row" style="margin-top:14px;margin-bottom:14px">
      <button class="btn primary big" data-act="share-ranking">${ICONS.share} Compartir Ranking</button>
      <button class="btn big" data-act="export-ranking-img">${ICONS.img} Descargar Imagen en HD</button>
    </div>`
        : ''
    }

    <details class="elo-guide-card">
      <summary>
        <span>ℹ️ ¿Cómo funciona el Sistema Mixto (Puntos + ELO Aparte)?</span>
        <span style="font-size:12px;opacity:0.8">Tocar para ver</span>
      </summary>
      <div class="elo-guide-content">
        <div class="guide-item">
          <b>🔀 Rankings 100% Independientes</b>
          <p>Los Partidos del Día, cada Liga y cada Torneo suman puntos y calculan su propio ELO únicamente con los partidos jugados dentro de ese ranking.</p>
        </div>
        <div class="guide-item">
          <b>🏅 Puntos de Tabla configurables</b>
          <p>Por defecto cada victoria suma +3 pts y cada derrota +1 pt (editable para el Día o individualmente por Liga/Torneo, con bonus opcional por set).</p>
        </div>
        <div class="guide-item">
          <b>🎯 Base 1000 ELO & Factor K dinámico</b>
          <p>Inician en 1000 pts (Nivel Playtomic 2.50). K=50 los primeros 10 partidos y K=32 luego, con bonus x1.2 por +6 juegos de diferencia.</p>
        </div>
        <div class="guide-item">
          <b>🏅 Escala Playtomic (1.00 a 7.00)</b>
          <p>Iniciación (1.00-1.99) · Intermedio (2.00-3.99) · Avanzado (4.00-4.99) · Competición (5.00-5.99) · Pro / Élite (6.00-7.00).</p>
        </div>
      </div>
    </details>

    ${renderSignatureFooter()}
  </div>
  ${renderTabbar('players')}`;
}

export function renderSettings(): string {
  const { prefs, ui, historyList, competitionsList } = store;
  const savedPlayerCards = getSavedPlayerCards();

  return `
  <div class="page">
    <div class="page-h">
      <div class="page-h-top">
        <button class="icon-btn" data-nav="home" title="Inicio">${ICONS.back}</button>
        <h1>Ajustes y Controles</h1>
      </div>
    </div>

    <div class="card" style="background:linear-gradient(135deg, rgba(212,175,55,0.12) 0%, var(--card) 60%);border:1px solid rgba(212,175,55,0.35)">
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px">
        <div style="width:40px;height:40px;border-radius:12px;background:linear-gradient(135deg,#ffe58f,#d4af37);color:#080600;display:grid;place-items:center;flex:none;font-size:20px;box-shadow:0 6px 16px -4px rgba(212,175,55,.5)">
          🏷️
        </div>
        <div>
          <h3 style="margin:0;font-size:16px">Cuenta y Ranking Oficial</h3>
          <small style="color:var(--tx2)">Identifica la autoría de tu ranking al compartirlo</small>
        </div>
      </div>

      <div class="field">
        <label>Nombre de tu Cuenta / Ranking / Club</label>
        <div style="display:flex;gap:8px">
          <input class="inp" id="cfg-ranking-name" value="${esc(prefs.rankingName || '')}" placeholder="Ej: Ranking de Fabián, Torneo Central..." style="flex:1">
          <button class="btn sm primary" data-act="save-ranking-name">Guardar</button>
        </div>
        <small class="muted" style="margin-top:4px;display:block">Aparece en los mensajes de WhatsApp, enlaces interactivos y tarjetas descargadas.</small>
      </div>

      <div style="display:flex;align-items:center;justify-content:space-between;margin-top:14px;background:rgba(255,255,255,0.035);padding:10px 14px;border-radius:12px;border:1px solid var(--line);flex-wrap:wrap;gap:8px">
        <div>
          <b style="font-size:12px;color:var(--tx2);display:block">ID ÚNICO DE TU CUENTA</b>
          <span style="font-family:monospace;font-size:16px;color:var(--gold);font-weight:800;letter-spacing:1px">#${esc(prefs.rankingId)}</span>
        </div>
        <div style="display:flex;gap:6px">
          <button class="btn sm" data-act="copy-ranking-id" title="Copiar ID">${ICONS.share} Copiar ID</button>
          <button class="btn sm" data-act="regen-ranking-id" title="Generar nuevo código ID">↻ Regenerar</button>
        </div>
      </div>
    </div>

    <div class="card">
      <h3>☀️ Puntos — Partido del Día</h3>
      <p class="muted" style="margin-bottom:12px">Puntaje que suma el ranking de Partido del Día (cada Liga y Torneo tiene su propia configuración).</p>
      <div class="row wrap">
        <div class="field">
          <label>Puntos por Victoria</label>
          <input type="number" class="inp" id="cfg-daily-win" min="0" max="100" value="${Number(prefs.dailyWinPts ?? 3)}">
        </div>
        <div class="field">
          <label>Puntos por Derrota</label>
          <input type="number" class="inp" id="cfg-daily-loss" min="0" max="100" value="${Number(prefs.dailyLossPts ?? 1)}">
        </div>
      </div>
      <div class="btn-row" style="margin-top:12px">
        <button class="btn primary sm" data-act="save-daily-pts-inline">Guardar Puntaje del Día</button>
      </div>
    </div>

    <div class="card">
      <h3>Sonido, Voz y Avisos</h3>
      <div class="tog">
        <div><b>Efectos de sonido</b><small>Tonos al anotar punto, juego, falta o set.</small></div>
        <label class="sw"><input type="checkbox" ${prefs.sound ? 'checked' : ''} data-pref-bool="sound"><span></span></label>
      </div>
      <div class="tog">
        <div><b>Voz de árbitro (Cantado de puntos)</b><small>Anuncia el marcador en español tras cada punto ("15 iguales", "Punto de oro").</small></div>
        <label class="sw"><input type="checkbox" ${prefs.voice ? 'checked' : ''} data-pref-bool="voice"><span></span></label>
      </div>
      <div class="tog">
        <div><b>Vibración háptica (Móvil)</b><small>Respuesta táctil al tocar el tablero.</small></div>
        <label class="sw"><input type="checkbox" ${prefs.vibrate ? 'checked' : ''} data-pref-bool="vibrate"><span></span></label>
      </div>
      <div class="tog">
        <div><b>Aviso y cronómetro de cambio de lado</b><small>Muestra alerta con cuenta regresiva según la regla de cambio de lado elegida en el partido.</small></div>
        <label class="sw"><input type="checkbox" ${prefs.changeoverAlerts ? 'checked' : ''} data-pref-bool="changeoverAlerts"><span></span></label>
      </div>
      <div class="tog">
        <div><b>Mantener pantalla encendida</b><small>Evita que el celular o tablet se bloquee durante el partido.</small></div>
        <label class="sw"><input type="checkbox" ${prefs.wakeLock ? 'checked' : ''} data-pref-bool="wakeLock"><span></span></label>
      </div>
    </div>

    <div class="card">
      <h3>Comandos de Voz por Micrófono (Manos Libres)</h3>
      <table class="keys">
        <tr><td><span class="kbd">"Winner [Jugador]"</span> / <span class="kbd">"[Jugador]"</span></td><td>Punto y Winner para ese jugador</td></tr>
        <tr><td><span class="kbd">"Error no forzado [Jugador]"</span> / <span class="kbd">"No forzado [Jugador]"</span></td><td>Suma ENF a ese jugador y punto a la pareja rival</td></tr>
        <tr><td><span class="kbd">"Error forzado [Jugador]"</span> / <span class="kbd">"Forzado [Jugador]"</span></td><td>Suma EF a ese jugador y punto a la pareja rival</td></tr>
        <tr><td><span class="kbd">"Saca [Jugador]"</span> / <span class="kbd">"Al saque [Jugador]"</span></td><td>Asigna quién está al saque sin sumar punto</td></tr>
        <tr><td><span class="kbd">"Falta"</span> / <span class="kbd">"Doble falta"</span></td><td>Marca 2º saque o doble falta del sacador actual</td></tr>
        <tr><td><span class="kbd">"Dorado"</span> / <span class="kbd">"Azul"</span> / <span class="kbd">"Rojo"</span> / <span class="kbd">"Pareja 1/2"</span></td><td>Punto rápido para esa pareja (sin jugador)</td></tr>
        <tr><td><span class="kbd">"Deshacer"</span> / <span class="kbd">"Rehacer"</span> / <span class="kbd">"Cambio de lado"</span></td><td>Control del tablero por voz</td></tr>
      </table>
    </div>

    <div class="card">
      <h3>Atajos de Teclado y Control Bluetooth (PC / TV)</h3>
      <table class="keys">
        <tr><td><span class="kbd">1</span> / <span class="kbd">A</span> / <span class="kbd">←</span> / <span class="kbd">↑</span></td><td>Punto para Pareja 1</td></tr>
        <tr><td><span class="kbd">2</span> / <span class="kbd">L</span> / <span class="kbd">→</span> / <span class="kbd">↓</span></td><td>Punto para Pareja 2</td></tr>
        <tr><td><span class="kbd">F</span></td><td>Falta de saque / Doble falta</td></tr>
        <tr><td><span class="kbd">Z</span> / <span class="kbd">Backspace</span></td><td>Deshacer último punto</td></tr>
        <tr><td><span class="kbd">Y</span></td><td>Rehacer punto</td></tr>
        <tr><td><span class="kbd">S</span></td><td>Cambiar de lado en el marcador</td></tr>
        <tr><td><span class="kbd">V</span></td><td>Activar/desactivar voz de árbitro</td></tr>
      </table>
    </div>

    <div class="card">
      <h3>📲 App Offline (PWA) y Sincronización</h3>
      <div class="sys-status-grid">
        <div class="sys-stat-pill">
          <span>Conexión</span>
          <b>${ui.isOnline ? '🟢 En línea' : '🟡 Offline'}</b>
        </div>
        <div class="sys-stat-pill">
          <span>Caché Offline</span>
          <b>${ui.swStatus === 'active' ? '✅ Lista offline' : ui.swStatus === 'unsupported' ? '⚠️ Requiere HTTPS' : '⏳ Preparando'}</b>
        </div>
        <div class="sys-stat-pill">
          <span>Persistencia</span>
          <b>${ui.storagePersisted === true ? '🛡️ Protegida' : 'ℹ️ Estándar'}${ui.storageUsageBytes !== null ? ' · ' + formatBytesCompact(ui.storageUsageBytes) : ''}</b>
        </div>
        <div class="sys-stat-pill">
          <span>Registros</span>
          <b>${historyList.length} P · ${competitionsList.length} L/T · ${savedPlayerCards.length} Tarj.</b>
        </div>
      </div>
      <div class="btn-row" style="margin-bottom:10px">
        ${ui.swUpdateReady ? `<button class="btn primary sm" data-act="apply-sw-update">✨ Actualizar versión</button>` : ''}
        ${ui.pwaInstallPrompt && !ui.pwaInstalled ? `<button class="btn primary sm" data-act="install-pwa">📲 Instalar App</button>` : ''}
      </div>
      ${
        !ui.pwaInstalled && /iphone|ipad|ipod/i.test(navigator.userAgent || '')
          ? `<p class="muted" style="margin-bottom:10px">En iPhone o iPad: tocá <b>Compartir ➔ Agregar a inicio</b> para usarla instalada y 100% offline.</p>`
          : ''
      }
      <details style="margin-top:6px">
        <summary style="cursor:pointer;font-size:12.5px;color:var(--tx2);font-weight:700">⚙️ Servidor Relay de Sincronización (avanzado)</summary>
        <div class="field" style="margin-top:10px">
          <label>URL base del servidor ntfy (por defecto https://ntfy.sh)</label>
          <div style="display:flex;gap:8px;flex-wrap:wrap">
            <input class="inp" id="cfg-sync-server" value="${esc(getSyncServerBaseUrl())}" placeholder="https://ntfy.sh" style="flex:1;min-width:190px">
            <button class="btn sm primary" data-act="save-sync-server">Guardar</button>
            <button class="btn sm" data-act="reset-sync-server">Restablecer</button>
          </div>
          <small class="muted">Podés usar tu propia instancia de ntfy para evitar límites de IP públicos en torneos grandes.</small>
        </div>
      </details>
    </div>

    <div class="card">
      <h3>Datos y Copias de Seguridad (JSON)</h3>
      <p class="muted" style="margin-bottom:6px">Respaldo completo v3: historial de partidos, Ligas y Torneos, preferencias, rankings guardados${prefs.backupIncludeCards !== false ? ' y Tarjetas HD' : ''}.</p>
      <p class="muted" style="margin-bottom:10px;font-size:12px">Último backup: <b>${prefs.lastBackupAt ? esc(fmtDateLong(prefs.lastBackupAt)) : 'Todavía no exportado'}</b>${(prefs.changesSinceBackup || 0) > 0 ? ` · ${prefs.changesSinceBackup} cambios recientes sin exportar` : ''}</p>
      <label class="chk-inline">
        <input type="checkbox" ${prefs.backupIncludeCards !== false ? 'checked' : ''} data-pref-bool="backupIncludeCards">
        <span>Incluir Tarjetas de Jugador HD y logos en el Backup JSON</span>
      </label>
      <div class="btn-row" style="margin-bottom:10px">
        <button class="btn primary sm" data-act="export-json">${ICONS.dl} Descargar Backup JSON</button>
        <button class="btn sm" data-act="share-json">${ICONS.share} Compartir JSON</button>
        <label class="btn sm" style="cursor:pointer">
          ${ICONS.up} Importar JSON
          <input type="file" accept=".json,application/json" style="display:none" id="imp-json-file">
        </label>
      </div>
      <div class="btn-row">
        <button class="btn danger sm" data-act="clear-all-data">${ICONS.trash} Borrar historial</button>
        <button class="btn danger sm" data-act="clear-all-comps">${ICONS.trash} Borrar Ligas y Torneos</button>
      </div>
    </div>
    ${renderSignatureFooter()}
  </div>
  ${renderTabbar('settings')}`;
}
