# 🎾 Pádel Control SÉ
### *Broadcast Scoreboard, Match Analytics, Leagues & Tournaments and Live Streaming · By Sairaf Engel*

🌐 **Language / Idioma:** [Versión en Español (README.md)](./README.md) · **English**

[![PWA Ready](https://img.shields.io/badge/PWA-Ready-gold?style=for-the-badge&logo=pwa&logoColor=black)](https://shisasjef.github.io/padel-control-se/)
[![OBS Compatible](https://img.shields.io/badge/OBS-Transparent_Overlay-blue?style=for-the-badge&logo=obsstudio&logoColor=white)](https://shisasjef.github.io/padel-control-se/#obs)
[![FIP Regulations](https://img.shields.io/badge/FIP-Official_Rules-darkgreen?style=for-the-badge)](https://shisasjef.github.io/padel-control-se/)
[![Multi-Device Sync](https://img.shields.io/badge/Sync-QR_%26_Multi--Court-gold?style=for-the-badge)](https://shisasjef.github.io/padel-control-se/)
[![Zero Install](https://img.shields.io/badge/Zero_Install-Browser_App-black?style=for-the-badge)](https://shisasjef.github.io/padel-control-se/)

**Pádel Control SÉ** is a comprehensive, pro-grade browser suite designed for padel (**2 vs 2**) players, umpires, club organizers, and live streamers. It runs 100% in the browser across phones, tablets, PCs, and TVs with zero app-store downloads, storing match history privately on each device while offering QR-based multi-court sync whenever you run leagues or tournaments.

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
  * Every League or Tournament maintains its own standings table, customizable scoring (**Win Pts**, **Loss Pts**, and **Set Won Bonus**), default match rules, and **isolated ELO** so results never leak across competitions.
  * Selectable ranking mode per competition: **Fixed Pairs**, **Individual**, or **Both**.
  * **League Formats**: *Round Robin* (auto-generated matchdays), *Double Round Robin* (home & away), or *Open League*.
  * **Tournament Formats**: *Single Elimination Bracket* (with automatic BYEs and round progression), *Groups + Playoffs* (group draw, configurable qualifiers per group, and automatic seeding into knockout brackets), and *Open / Americano* (rotating partners when set to individual mode).
  * **Fixtures, Quick Sets & Games Entry & Walkovers (W.O.)**: Built for events **without court umpires**: from **New Match** (`Ya terminó · Cargar Sets y Games`), any scheduled **Fixture** (`Resultado`), or directly inside a League/Tournament (**Cargar Resultado / Cargar Sets / Games**), pick the pairs or players and tap the game counts per set with **quick tactile pills (`0–7` plus `10` for Super Tie-Breaks, up to 5 sets)** — no point-by-point tracking required. Also supports **Walkover (W.O.)** wins that award table points and advance bracket slots without affecting ELO.

---

### 🔗 2. QR & Link Multi-Device Sync (Multi-Court Support)
Built for tournaments and leagues running **multiple matches simultaneously**, allowing every court or umpire phone to submit results into the same event without overwriting other courts:

* **QR Room & Invite Link**:
  * From any League or Tournament, tap **Connect Devices (`Conectar dispositivos`)** or the **QR** button to generate a 6-character **Room Code** (e.g., `#D7U8HZ`), scannable **QR code**, copyable invite link, WhatsApp share text, and downloadable **HD QR card**.
* **Instant Multi-Phone Join**:
  * Scan the QR code, open the invite link (`#c=...`), or open **Leagues & Tournaments → Join (`📲 Unirse`)** and enter the room code.
  * Embeds competition metadata and participants right inside the QR URL for instant offline bootstrapping, then pulls full fixtures/brackets as soon as the phone goes online.
* **Concurrent Merging Without Clobbering**:
  * Each court publishes atomic match/fixture events over **Server-Sent Events (`ntfy.sh`) + automatic polling**, deterministically recomputing standings, ELO ratings, and knockout bracket progression across all connected phones.
  * **Offline Outbox Queue**: If a court loses internet connectivity when a match finishes, the result queues locally in `localStorage` and flushes automatically as soon as the device reconnects.

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
* **Dual Scoring Per Scope**: Each scope (*Match of the Day*, every *League*, and every *Tournament*) tracks both configurable **table points** and its own **isolated ELO ladder**.
* **Deterministic Zero-Sum Replay**: Chronologically replays valid finished matches (excluding W.O.) so all synced devices converge on identical numbers.
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

### 📱 6. Built-In Offline QR Generator
* Bundled client-side QR rendering (`QRious`) requiring no external image APIs for core usage.
* Accessible from Home, Settings, and every synced League or Tournament room.

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

## 🔒 Privacy & Performance

* **No Mandatory Backend**: Everything is stored locally on your device via `localStorage`, with JSON backup export/import.
* **On-Demand Lightweight Sync**: Public `ntfy.sh` channels are only contacted when you actively enable Live Match Broadcast, Remote OBS Overlay, or a Multi-Device League/Tournament Room.
* **Single-File Architecture**: Fast load time, offline-ready PWA design, and Obsidian Black & 24K Gold styling built for readability under stadium lights.

---

*Designed and built by **Sairaf Engel**.*
