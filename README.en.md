# 🎾 Pádel Control SÉ
### *Broadcast Scoreboard, HD Player Cards, Match Analytics, Leagues & Tournaments and Live Streaming · By Sairaf Engel*

🌐 **Language / Idioma:** [Versión en Español (README.md)](./README.md) · **English**

[![PWA Offline](https://img.shields.io/badge/PWA-Full_Offline-gold?style=for-the-badge&logo=pwa&logoColor=black)](https://shisasjef.github.io/padel-control-se/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](./tsconfig.json)
[![Vitest](https://img.shields.io/badge/Vitest-29_Tests-6E9F18?style=for-the-badge&logo=vitest&logoColor=white)](./tests)
[![Player Cards HD](https://img.shields.io/badge/Player_Cards_HD-Diamond_Edition-8b5cf6?style=for-the-badge)](https://shisasjef.github.io/padel-control-se/#player-card)
[![OBS Compatible](https://img.shields.io/badge/OBS-Transparent_Overlay-blue?style=for-the-badge&logo=obsstudio&logoColor=white)](https://shisasjef.github.io/padel-control-se/#obs)
[![FIP Regulations](https://img.shields.io/badge/FIP-Official_Rules-darkgreen?style=for-the-badge)](https://shisasjef.github.io/padel-control-se/)
[![Multi-Device Sync](https://img.shields.io/badge/Sync-QR_%26_Multi--Court-gold?style=for-the-badge)](https://shisasjef.github.io/padel-control-se/)

**Pádel Control SÉ** is a comprehensive, pro-grade browser suite designed for padel (**2 vs 2**) players, umpires, club organizers, and live streamers. It works as an installable **full-offline PWA** across phones, tablets, PCs, and TVs with zero app-store downloads or mandatory servers: local data is safeguarded via `localStorage` + automatic **IndexedDB** mirroring + **Backup JSON v3** export/import, with optional QR-based multi-court sync whenever you run leagues or tournaments.

🔗 **Live Web App:** **[https://shisasjef.github.io/padel-control-se/](https://shisasjef.github.io/padel-control-se/)**

---

## 🌟 What's New & Core Features

### 🏟️ 1. Match of the Day, Leagues & Tournaments (Isolated Rankings)
Pick the match mode before starting any match so every ranking, points table, and ELO rating stays completely separate:

* **☀️ Match of the Day (`Partido del Día`)**:
  * Dedicated ranking for casual daily sessions without mixing stats into Leagues or Tournaments.
  * Configurable table points (`+3` Win / `+1` Loss by default) alongside an isolated daily ELO rating.
  * Instant filters in the **Ranking** tab: **Today (`Hoy`)** vs **All-Time (`Acumulado`)**, in either **Individual** or **Pairs (`Por Parejas`)** view.
* **🏅 Leagues & 🏆 Tournaments**:
  * Every League or Tournament maintains its own standings table, customizable scoring (**Win Pts**, **Draw Pts** in PRO PÁDEL, **Loss Pts**, and **Set or Game Won Bonus**), default match rules, and **isolated ELO** so results never leak across competitions.
  * Selectable ranking mode per competition: **Fixed Pairs**, **Individual**, or **Both**.
  * **League Formats**: *Round Robin* (auto-generated matchdays), *Double Round Robin* (home & away), or *Open League*.
  * **Tournament Formats**:
    * **⚡ PRO PÁDEL**: Specialized time-block desk format (no live umpire tracking or rigid bracket) built for direct final-score entry (e.g. `Lucía-Juan vs Marcos-Noelia 4-2` or a `3-3` draw) with free partner rotation and an **Individual ELO-first ranking** (+ secondary **Games + Bonus** scoring: `+3` Win / `+2` Draw / `+1` Loss + `+1` per game won, tiebreak order `Pts → Games Won → Games Diff → ELO`).
    * *Single Elimination Bracket* (with automatic BYEs and round progression), *Groups + Playoffs* (group draw, configurable qualifiers per group, and automatic seeding into knockout brackets), and *Open / Americano* (rotating partners when set to individual mode).
  * **Fixtures, Quick Sets & Games Entry & Walkovers (W.O.)**: Built for events **without court umpires**: from **New Match** (`Ya terminó · Cargar Sets y Games`), any scheduled **Fixture** (`Resultado`), or directly inside a League/Tournament (**Cargar Resultado Final / Sets / Games**), pick or quick-tap player chips and select game counts with **tactile pills (`0–7` plus `10` for Super Tie-Breaks)** — no point-by-point tracking required. Supports **official draws (`3-3`, `2-2`) with ELO adjustment ($S=0.5$)** in PRO PÁDEL and **Walkover (W.O.)** wins elsewhere without affecting ELO.

---

### 🔗 2. QR & Link Multi-Device Sync (Multi-Court Support + Custom Relay)
Built for tournaments and leagues running **multiple matches simultaneously**, allowing every court or umpire phone to submit results into the same event without overwriting other courts:

* **QR Room & Invite Link**:
  * From any League or Tournament, tap **Connect Devices (`Conectar dispositivos`)** or the **QR** button to generate a 6-character **Room Code** (e.g., `#D7U8HZ`), scannable **QR code**, copyable invite link, WhatsApp share text, and downloadable **HD QR card**.
* **Instant Multi-Phone Join**:
  * Scan the QR code, open the invite link (`#c=...`), or open **Leagues & Tournaments → Join (`📲 Unirse`)** and enter the room code.
  * Embeds competition metadata and participants right inside the QR URL for instant offline bootstrapping, then pulls full fixtures/brackets as soon as the phone goes online.
* **Optimized Concurrent Merging (`ntfy.sh` or Self-Hosted Relay)**:
  * Each court publishes atomic match/fixture events over **Server-Sent Events + incremental polling** (`?poll=1&since=...`), avoiding custom CORS headers (no extra `OPTIONS` preflight requests) and handling **`HTTP 429` / `Retry-After`** with exponential backoff, while deterministically recomputing standings, ELO ratings, and knockout brackets across all connected phones.
  * **Configurable Sync Relay URL**: Under **Settings (`Ajustes`) → Sync Relay Server**, replace `https://ntfy.sh` with your own `ntfy` instance for large tournaments.
  * **Offline Outbox Queue**: If a court loses internet connectivity when a match finishes, the result queues locally and flushes automatically as soon as the device reconnects.

---

### 📺 3. Transparent Broadcast Overlay for OBS Studio / vMix / Streamlabs
* **Pro Broadcast Graphics**: TV-style scorebug / chyron inspired by **Premier Padel** and **World Padel Tour**.
* **100% Transparent Background**: Opening `#obs` strips app chrome and backgrounds so it layers cleanly over your court camera feed.
* **Dual Sync Modes**:
  * **Remote Mode (Cloud Real-Time)**: Umpire or player scores from courtside on a phone while OBS updates live point-by-point via Server-Sent Events.
  * **Local Mode (Same PC)**: Zero-latency `BroadcastChannel` sync when scoring from a browser tab on the same streaming computer.
* **Screen Placement Selector**: Top-Left (standard), Top-Right, Bottom-Left, Bottom-Right, or Bottom Bar (*horizontal chyron*).

---

### 🎾 4. Tactical Positions & Official Dynamic Serve Side (`D` / `R`)
* **Tactical Default Labels**:
  * **Pair 1**: `DRIVE 1` (right/deuce) and `REVÉS 1` (left/ad).
  * **Pair 2**: `DRIVE 2` (right/deuce) and `REVÉS 2` (left/ad).
  *(Editable when creating a match, managing competition entries, or mid-match).*
* **Official FIP Serve-Side Indicator (`D` / `R`)**:
  * Follows FIP rules: every game starts serving from the right/deuce box (`D`) and alternates to the left/ad box (`R`) after each point, including full Tie-Break rotation tracking.

---

### 🏆 5. Combined Table Points + Zero-Sum ELO & Playtomic Level (1.00 to 7.00)
* **Dual Scoring Per Scope**: Each scope (*Match of the Day*, every *League*, and every *Tournament*) tracks both configurable **table points** and its own **isolated ELO ladder** (in *Torneo PRO PÁDEL*, ELO is promoted as the primary display metric and default sort).
* **Deterministic Zero-Sum Replay**: Chronologically replays valid finished matches (excluding W.O., and including official draws with $S = 0.5$) so all synced devices converge on identical numbers.
* **Starting Rating**: Players and pairs begin at **1000 ELO** (mapped to **Playtomic Level 2.50**).
* **Pair Average Formula**: Computes team average rating ($R_{\text{pair}} = \frac{R(p_1) + R(p_2)}{2}$) to derive expected win probability:
  $$E_A = \frac{1}{1 + 10^{(R_B - R_A) / 400}}$$
* **Dynamic K-Factor**:
  * **$K = 50$** during calibration ($< 10$ matches played) for fast skill convergence.
  * **$K = 32$** for established players ($\ge 10$ matches).
* **Game-Difference Bonus ($1.2\times$)**: Matches decided by a 6+ game margin (e.g., `6-1 / 6-1`) apply a **1.2×** ELO transfer multiplier.
* **Playtomic Level Scale (1.00 – 7.00)**:
  $$\text{Level} = 2.50 + \frac{\text{ELO} - 1000}{200} \quad (\text{clamped between } 1.00 \text{ and } 7.00)$$
  * **1.00 – 1.99**: *Beginner* (🌱)
  * **2.00 – 2.99**: *Low Intermediate* (🔷)
  * **3.00 – 3.99**: *Intermediate* (⚡)
  * **4.00 – 4.99**: *Advanced* (💎)
  * **5.00 – 5.99**: *Competition* (🏆)
  * **6.00 – 7.00**: *Pro / Elite* (👑)
* **Sharing, Vault & Exports**:
  * Unique **Account / Ranking ID (`#RK-XXXX`)** and customizable Club/Organizer name.
  * Short shareable ranking links (`#r=...`), multi-ranking local vault, **1080px HD PNG Ranking Card**, and instant ELO delta badges (`⚡ ELO ±XX`) across victory overlays, stats, and match history.

---

### 📱 6. Full Offline PWA & Built-In QR Generator
* **Installable & 100% Offline**: Complete [manifest.webmanifest](./manifest.webmanifest), PNG icon suite (`192×192`, `512×512`, `maskable`, and `apple-touch-icon`), and Service Worker ([sw.js](./sw.js)) precaching the full app shell (`index.html`, JS/CSS bundles, and WebP logo) so matches and rankings work offline even after closing the browser.
* **System Status & Home Banners**: Shows connection status (`Online` / `Offline Mode Active`), offline cache readiness, persistent storage health/usage, one-tap **`Install App`** button, and SW update prompts.
* **Bundled Client-Side QR (`QRious`)**: Generates QR codes completely offline from Home, Settings, and every synced League or Tournament room.

---

### 📡 7. Live Spectator Broadcast
* Share a live link via WhatsApp so spectators anywhere can follow the live score, clock, and point breakdown in real time.

---

### 🎙️ 8. Hands-Free Voice Control & Spoken Referee (TTS)
* **Continuous Voice Recognition**: Log winners, errors, serve faults, and server switches hands-free from the court.
* **Automatic Referee Audio**: Calls out the score aloud after each point in Spanish.

---

### 📊 9. Advanced Match Analytics & PDF / Image Reports
* Shot breakdown tracking: **Smash**, **Volley (`Volea`)**, **Bandeja**, **Bajada**, **Drop Shot (`Dejada`)**, **Passing**, **Unforced Errors (`ENF`)**, and **Forced Errors (`EF`)**.
* Clutch metrics: Golden Points, Star Points, break points converted/saved, and 1st serve effectiveness.
* Momentum timeline chart and printable **PDF** point-by-point match report.

---

### 🪪 10. HD Player Card Studio (*Diamond Edition*)
Built-in trading-card studio generating **`1080×1350` px** HD PNG player cards:

* **Quick Entry Points**: Featured **🪪 Crear Tarjeta de Jugador** CTA on **Home** (`#player-card`), plus per-player shortcuts right from **Rankings** and League/Tournament **Registrations (`Inscriptos`)** with name and court position prefilled.
* **AI Background Removal & Instant Mode**:
  * Loads photos cleanly from **Gallery / Files** using low-memory scaled decoding (with automatic transparent PNG detection).
  * **✨ AI Cutout (`Recorte IA`)**: Runs client-side person segmentation via **MediaPipe SelfieSegmenter** with seamless fallback to **⚡ Instant Mode** for complex shots or offline environments.
  * **Zoom**, **X / Y Position** sliders, **Center Photo**, direct mouse drag on desktop, and an explicit mobile **`✥ Mover foto en tarjeta`** toggle so vertical page scrolling (`touch-action: pan-y`) never gets hijacked on phones.
* **Diamond Edition Styling & Custom Logos**:
  * **6 visual themes** and **4 3D metallic finishes** (Chrome Diamond, 24K Gold, Sapphire Platinum, and Pure Emerald), featuring carbon-weave backdrops, faceted diamond bezels, category shield, and armored stat plates (**Name**, **Optional Nickname**, **Category**, **Age**, **Position**: *Drive / Revés / Ambos*, **Hand**: *Diestro / Zurdo*, and **Best Shot**: *Víbora, Bandeja, Smash, Volea, Globo, Bajada, Dejada, Chiquita*, or custom).
  * **2 Header Logo Slots**: Defaults to the **Pádel Control SÉ** emblem + centered official **PRO PÁDEL** logo (served as an optimized static binary `./assets/pro-padel-logo.webp` precached offline by the Service Worker), with options to upload custom club/sponsor logos, restore **PRO PÁDEL**, remove either logo, or customize fallback footer text.
* **Direct HD Download & Draft Persistence**:
  * Exports directly via **`Descargar Imagen HD`** (`1080×1350` PNG), avoiding desktop OS share-sheet popups on PC.
  * Saves cards to **My Cards (`Mis Tarjetas`)**, custom logos, and active editing drafts (including photo/cutout) in **IndexedDB** alongside `#player-card` URL hash state so mobile tab reloads return straight to your card.

---

## 🎥 Quick OBS Studio Setup

1. Inside an active match, open the options menu (**`...`**) and choose **Superposición para OBS (Overlay)**.
2. Pick your preferred screen position and click **Copy (`Copiar`)** on the **Remote Link** (or **Local Link**).
3. In **OBS Studio**:
   * In the **Sources** panel, click **`+`** ➔ **Browser**.
   * Paste the copied URL.
   * Set Width: **`1920`** and Height: **`1080`** (or match your canvas resolution).
4. Done! The scoreboard updates automatically live over your stream camera.

---

## 🎤 Voice Commands (Hands-Free)

*(Voice recognition grammar is currently tuned for Spanish voice commands inside the app)*:

| Action | Voice Examples |
| :--- | :--- |
| **Player Winner** | `"Drive 1"` · `"Winner Drive 1"` · `"Revés 2"` · `"Smash [Name]"` · `"Bandeja [Name]"` · `"Volea [Name]"` |
| **Unforced Error (opponent point)** | `"Error no forzado Revés 1"` · `"No forzado Drive 2"` · `"A la red [Name]"` · `"Al cristal [Name]"` · `"Afuera [Name]"` |
| **Forced Error (opponent point)** | `"Error forzado Drive 1"` · `"Forzado Revés 2"` |
| **Quick Pair / Color Point** | `"Dorado"` · `"Azul"` · `"Rojo"` · `"Verde"` · `"Pareja 1"` · `"Pareja 2"` |
| **Set Server (without scoring)** | `"Saca Drive 1"` · `"Al saque Revés 2"` · `"Siguiente al saque"` · `"Cambiar sacador"` |
| **Serve Faults** | `"Falta"` / `"Segundo saque"` · `"Doble falta"` |
| **Board Controls** | `"Deshacer"` / `"Corregir"` · `"Rehacer"` · `"Cambio de lado"` |

---

## ⌨️ Keyboard & Bluetooth Clicker Shortcuts

Works with wireless keyboards and Bluetooth clickers directly from the court:

| Key | Action |
| :---: | :--- |
| `1` / `A` / `←` / `↑` | Point for **Pair 1** |
| `2` / `L` / `→` / `↓` | Point for **Pair 2** |
| `F` | Serve fault / Double fault |
| `Z` / `Backspace` | Undo last point |
| `Y` | Redo point |
| `S` | Flip court sides on screen |
| `V` | Toggle spoken referee voice |

---

## ⚙️ Supported Match Rules

* **Sets**: Configurable from `1` to `15` sets (single set, best of 3, etc.).
* **Games per Set**: Configurable from `1` to `21` games.
* **40-40 (Deuce) Resolution**:
  * **Golden Point (`Punto de Oro`)**: Decides the game in a single point.
  * **★ Star Point (FIP Rules)**: Up to 2 consecutive advantages; the 3rd deuce plays a deciding Star Point.
  * **Classic Advantage (`Ventajas`)**: Standard 2-point lead required.
* **Tie-Break**: Configurable to 7 or 10 points, or win-by-2 continuous play, plus optional **Super Tie-Break** in the deciding set.
* **Changeovers**: Odd games, end of set, or off, with configurable changeover timer (90s / 120s).

---

## 💾 Backups, Privacy & Performance

* **Dual Local Persistence (`localStorage` + IndexedDB)**: Matches, competitions, preferences, and presets persist in `localStorage` and automatically mirror into **IndexedDB** (`padel_se_backup_db_v1`), alongside `navigator.storage.persist()` requests and dedicated IndexedDB storage for HD player cards, drafts, and logos.
* **1-Click Backup JSON v3**: Export a complete JSON snapshot via **History (`Historial`) → `Backup JSON`** or **Settings (`Ajustes`) → `Descargar Backup JSON` / `Compartir JSON`** (with a toggle to include/exclude HD player cards), restore cleanly across devices, and get non-intrusive Home reminders when `>= 5` unsaved changes accumulate.
* **On-Demand Lightweight Sync & AI**: Public `ntfy.sh` (or your custom relay configured in Settings) is only contacted when actively using Live Match Broadcast, Remote OBS Overlay, or Multi-Device Rooms; the **MediaPipe SelfieSegmenter** WASM module loads only when running AI background removal.
* **Desktop-Safe Link Sharing**: On desktop PCs, link-sharing buttons across Rankings, Competitions, Live Match, and Stats copy invitations directly to the clipboard instead of invoking OS share overlays.
* **Obsidian & Gold Visual Identity**: Styled in Obsidian Black & 24K Gold for high contrast courtside and on broadcasts.

---

## 🛠️ Architecture, Development & Tests (TypeScript + Vite + Vitest)

The codebase is modularized in **strict TypeScript** under `src/` and builds with **Vite** directly to the repository root (`index.html`, `assets/`, `sw.js`) so static hosting on **GitHub Pages** works seamlessly (with `.nojekyll`):

```text
src/
├── index.html                   # Vite HTML entry
├── main.ts                      # App bootstrap, routing & DOM event delegation
├── types.ts                     # Shared TypeScript interfaces
├── sw.template.js               # Service Worker template (builds root ./sw.js with asset hashes)
├── styles/main.css              # Extracted application stylesheet
├── public/assets/pro-padel-logo.webp
├── core/                        # constants.ts, utils.ts
├── engines/                     # Pure testable engines: matchEngine, statsEngine, eloEngine, fixtureEngine
├── codecs/shareCodec.ts         # Share URL codecs, PCS1: sync envelopes, v2 rankings & relay validation
├── state/                       # store.ts (localStorage + IDB mirror) & runtime.ts
├── services/                    # pwaBackup, matchActions, audioVoice, liveBroadcast, competitionSync
├── cards/playerCardStudio.ts    # HD Player Card Studio (1080×1350 Canvas + MediaPipe)
├── views/                       # Screen view renderers
└── vendor/qrious.ts             # Typed offline QR code generator
tests/                           # Vitest suites (matchEngine, eloEngine, fixtureEngine, statsEngine, shareCodec)
```

### Local commands

```bash
npm install          # Install dev dependencies (Vite, TypeScript, Vitest)
npm run dev          # Start dev server with PWA/Service Worker support
npm run typecheck    # Run strict TypeScript check (tsc --noEmit)
npm test             # Run all 29 unit tests across 5 Vitest suites
npm run build        # Build production assets into root (index.html, assets/*, sw.js) for GitHub Pages
```

> **GitHub Pages deployment note:** Run `npm run build` before `git push` so root `index.html`, `assets/`, and `sw.js` reflect your latest source edits. *(On Windows PowerShell with restricted `.ps1` execution policies, invoke `npm.cmd` / `npx.cmd`).*

---

*Designed and built by **Sairaf Engel**.*
