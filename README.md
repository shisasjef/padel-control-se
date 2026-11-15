# 🎾 Pádel Control SÉ
### *Marcador Broadcast, Análisis Estadístico, Gestión de Ligas/Torneos y Transmisión en Vivo · By Sairaf Engel*

🌐 **Idioma / Language:** **Español** · [English Version (README.en.md)](./README.en.md)

[![PWA Ready](https://img.shields.io/badge/PWA-Ready-gold?style=for-the-badge&logo=pwa&logoColor=black)](https://shisasjef.github.io/padel-control-se/)
[![OBS Compatible](https://img.shields.io/badge/OBS-Overlay_Transparente-blue?style=for-the-badge&logo=obsstudio&logoColor=white)](https://shisasjef.github.io/padel-control-se/#obs)
[![FIP Regulations](https://img.shields.io/badge/FIP-Reglamento_Oficial-darkgreen?style=for-the-badge)](https://shisasjef.github.io/padel-control-se/)
[![Multi-Device Sync](https://img.shields.io/badge/Sync-QR_%26_Multi--Cancha-gold?style=for-the-badge)](https://shisasjef.github.io/padel-control-se/)
[![Zero Install](https://img.shields.io/badge/Instalación-Cero_(Navegador)-black?style=for-the-badge)](https://shisasjef.github.io/padel-control-se/)

**Pádel Control SÉ** es una suite profesional e integral diseñada para jugadores, árbitros, organizadores, clubes y creadores de contenido de pádel (**2 vs 2**). Funciona 100% en el navegador (móviles, tablets, PC y TV), sin descargas de tiendas ni configuraciones complejas, guardando el historial de forma privada en cada dispositivo y ofreciendo sincronización multi-cancha por QR cuando administrás ligas o torneos.

🔗 **Acceso a la Aplicación:** **[https://shisasjef.github.io/padel-control-se/](https://shisasjef.github.io/padel-control-se/)**

---

## 🌟 Novedades y Características Principales

### 🏟️ 1. Partido del Día, Ligas y Torneos (Rankings 100% Separados)
Elegí el contexto antes de iniciar cualquier partido para mantener cada ranking, tabla de puntos y ELO completamente aislado:

* **☀️ Partido del Día**:
  * Ranking exclusivo para partidos casuales o jornadas abiertas, sin mezclarse con Ligas ni Torneos.
  * Puntos configurables por defecto (`+3` Victoria / `+1` Derrota), con ELO independiente.
  * Filtros instantáneos en la pestaña **Ranking**: **☀️ Hoy** (solo partidos del día) vs **📅 Acumulado**, en vista **👤 Individual** o **👥 Por Parejas**.
* **🏅 Ligas y 🏆 Torneos Independientes**:
  * Cada Liga o Torneo tiene su propia tabla de posiciones, puntaje personalizado (**Pts Victoria**, **Pts Empate** en Proyecto Pádel, **Pts Derrota** y **Bonus por Set o Game ganado**) y su propio **ELO aislado** (los partidos de una liga o torneo no alteran el ranking del día ni el de otras competencias).
  * Modo de ranking seleccionable por competencia: **Parejas Fijas**, **Individual** o **Ambos**.
  * **Formatos de Liga**: *Todos contra Todos* (fixture por fechas), *Ida y Vuelta* o *Liga Libre*.
  * **Formatos de Torneo**:
    * **⚡ Proyecto Pádel**: Formato especial por bloques/tiempo (sin fiscalización en pista ni fixture rígido) pensado para carga directa de resultados finales (ej. `Lucía-Juan vs Marcos-Noelia 4-2` o empate `3-3`) con rotación libre de parejas y ranking **Individual con ELO como métrica principal** (+ puntaje secundario por **Games + Bonus**: `+3` Victoria / `+2` Empate / `+1` Derrota + `+1` por game ganado, desempate `Pts → Games a favor → Dif. Games → ELO`).
    * *Eliminación Directa* (llaves con BYEs automáticos), *Grupos + Playoffs* (sorteo por grupos, clasificación configurable y generación de cuadro eliminatorio desde las tablas) y *Libre / Americano* (rotación automática de compañeros cuando el modo es individual).
  * **Fixture, Carga Directa por Sets/Games y W.O.**: Ideal para torneos o jornadas **sin fiscalizadores**: desde **Nuevo Partido** (`Ya terminó · Cargar Sets y Games`), desde un cruce del **Fixture** (`Resultado`) o desde **Cargar Resultado Final / Sets / Games** dentro de una Liga o Torneo, podés elegir o tocar chips de jugadores y seleccionar directamente los games con **botones táctiles (`0–7` y `10` para Súper TB)** sin anotar punto por punto. Incluye **empates oficiales (`3-3`, `2-2`) con ajuste ELO ($S=0.5$)** en Proyecto Pádel y **Victoria por Walkover (W.O.)** en el resto de formatos.

---

### 🔗 2. Sincronización Multi-Dispositivo por QR y Enlace (Multi-Cancha)
Ideal para torneos o ligas donde se juegan **varios partidos en paralelo** y cada cancha necesita cargar sus resultados al finalizar:

* **Sala por Código QR y Enlace**:
  * Desde cualquier Liga o Torneo tocá **Conectar dispositivos** (o el ícono QR) para generar un **Código de Sala** de 6 caracteres (ej. `#D7U8HZ`), su **QR escaneable**, enlace directo, invitación lista para WhatsApp y descarga de placa **QR HD**.
* **Conexión en Segundos desde Cualquier Celular**:
  * Escaneá el QR, abrí el link compartido o entrá a **Ligas y Torneos → `📲 Unirse`** e ingresá el código de sala.
  * Incluye precarga instantánea en el QR para bootstrap offline (nombre, reglas e inscriptos al momento) y sincronización completa del fixture al estar en línea.
* **Fusión Concurrente sin Sobrescribirse**:
  * Cada dispositivo publica resultados atómicos por partido/cruce mediante **Server-Sent Events (`ntfy.sh`) + polling automático**, calculando posiciones y ELO de forma determinista y avanzando llaves en todos los celulares conectados en tiempo real.
  * **Cola Offline Automática**: Si una cancha pierde conexión al cerrar un partido, el resultado se guarda localmente en cola y se publica automáticamente en cuanto vuelve internet.

---

### 📺 3. Superposición Transparente para OBS Studio / vMix / Streamlabs
* **Gráfica Broadcast Profesional**: Generador de caracteres (*scorebug / chyron*) estilo **Premier Padel** y **World Padel Tour**.
* **Fondo 100% Transparente**: Al entrar con la ruta `#obs`, la interfaz elimina botones y fondos para montarse de forma limpia sobre la cámara de la pista.
* **Sincronización Dual**:
  * **Modo Remoto (Nube en Tiempo Real)**: El árbitro o jugador anota desde su celular en la pista y el OBS en la computadora de transmisión se actualiza automáticamente punto a punto vía Server-Sent Events.
  * **Modo Local (Misma PC)**: Latencia cero mediante `BroadcastChannel` para torneos donde se anota desde una pestaña en la misma máquina del streaming.
* **Selector de Posición**: Arriba Izquierda (estándar), Arriba Derecha, Abajo Izquierda, Abajo Derecha o Barra Inferior (*Chyron horizontal*).

---

### 🎾 4. Posiciones Tácticas y Lado de Saque Dinámico (`D` / `R`)
* **Nombres Predeterminados Tácticos**:
  * **Pareja 1**: `DRIVE 1` (derecha) y `REVÉS 1` (izquierda).
  * **Pareja 2**: `DRIVE 2` (derecha) y `REVÉS 2` (izquierda).
  *(Personalizables en cualquier momento al crear el partido, desde inscriptos o durante el juego).*
* **Indicador Reglamentario de Lado de Saque (`D` / `R`)**:
  * Cumple con la regla oficial FIP: cada juego comienza con saque desde la **Derecha** (`D`), alternando al **Revés** (`R`) tras cada punto anotado.
  * Distintivo visual en el marcador, en el overlay de transmisión y en el reloj superior.
  * Soporte completo en Tie-Break (saques en `D` y `R` con rotación estricta de jugadores).

---

### 🏆 5. Sistema de Ranking Combinado: Puntos de Tabla + ELO y Nivel Playtomic (1.00 a 7.00)
* **Sistema Mixto (Tabla + ELO Aislado)**: Cada ámbito (*Partido del Día*, cada *Liga* y cada *Torneo*) calcula tanto los **puntos de tabla** por victoria/empate/derrota/bonus como un **ELO independiente** sobre los partidos de esa competencia (en *Torneo Proyecto Pádel*, el ELO pasa al frente como métrica y orden principal).
* **Cálculo ELO de Suma Cero Determinista**: Replay ordenado cronológicamente sobre los partidos válidos (excluyendo W.O. e incluyendo empates oficiales con $S = 0.5$), produciendo resultados idénticos entre dispositivos sincronizados.
* **Punto de Partida**: Todos los jugadores o parejas inician con **1000 puntos base** (equivalente exacto a **Nivel Playtomic 2.50**).
* **Promedio de la Pareja**: Antes de cada partido se calcula el promedio ELO de cada pareja ($R_{\text{pareja}} = \frac{R(p_1) + R(p_2)}{2}$) para determinar la probabilidad matemática esperada de victoria:
  $$E_A = \frac{1}{1 + 10^{(R_B - R_A) / 400}}$$
* **Factor K Dinámico (Calibración Rápida)**:
  * **$K = 50$** para jugadores en etapa de calibración ($< 10$ partidos jugados), permitiendo que alcancen rápidamente su nivel real.
  * **$K = 32$** para jugadores consolidados ($\ge 10$ partidos).
* **Bonus por Diferencia de Juegos ($1.2\times$)**: Si la diferencia de juegos al término del partido es de 6 o más juegos (por ejemplo, `6-1 / 6-1`), se aplica un bonus multiplicador de **x1.2** a los puntos transferidos.
* **Escala de Niveles Playtomic (1.00 a 7.00)**:
  $$\text{Nivel} = 2.50 + \frac{\text{ELO} - 1000}{200} \quad (\text{acotado entre } 1.00 \text{ y } 7.00)$$
  * **1.00 - 1.99**: *Iniciación* (🌱)
  * **2.00 - 2.99**: *Intermedio Bajo* (🔷)
  * **3.00 - 3.99**: *Intermedio* (⚡)
  * **4.00 - 4.99**: *Avanzado* (💎)
  * **5.00 - 5.99**: *Competición* (🏆)
  * **6.00 - 7.00**: *Pro / Élite* (👑)
* **Compartir y Visualización Completa**:
  * **ID de Cuenta y Ranking (`#RK-XXXX`)**: Cada instalación cuenta con un ID único y nombre personalizable de cuenta/club.
  * **Compartir Ranking con Enlace Corto**: Generación automática de enlace corto (`#r=...`) con instantánea completa y sincronización para abrir en cualquier celular o PC.
  * **Bóveda Multi-Ranking**: Alterná entre tus rankings locales y rankings compartidos de otros clubes u organizadores.
  * **Tarjeta HD en Imagen (1080px)** y **Overlay de Victoria**: Impacto en puntos de tabla y delta ELO (`⚡ ELO ±XX`) visible al instante en historial, estadísticas y pantalla final.

---

### 📱 6. Código QR Offline Embebido
* Generador de códigos QR integrado localmente (`QRious`, sin dependencias externas de red para generar el gráfico).
* Disponible para compartir la aplicación desde el Inicio y Ajustes, y para generar QR de salas multi-dispositivo en Ligas y Torneos.

---

### 📡 7. Transmisión en Vivo para Espectadores
* Enlace en vivo compartible por WhatsApp para seguir marcador, reloj y estadísticas en tiempo real desde cualquier lugar.

---

### 🎙️ 8. Control por Voz Manos Libres y Árbitro Parlante (TTS)
* **Reconocimiento continuo**: Registrá puntos, faltas y rotaciones sin tocar la pantalla desde la pista.
* **Voz de árbitro automática**: Canta el tanteador en español tras cada tanto (*"15 iguales"*, *"Segunda ventaja al saque"*, *"Punto de oro"*).

---

### 📊 9. Estadísticas Avanzadas y Reportes PDF / Imagen
* Registro por golpe: **Smash**, **Volea**, **Bandeja**, **Bajada**, **Dejada**, **Passing**, Errores No Forzados (**ENF**) y Errores Forzados (**EF**).
* Rendimiento bajo presión: Puntos de Oro, Star Points, bolas de break convertidas/salvadas y efectividad de 1º saque.
* Gráfico de evolución de dominio y reporte imprimible en **PDF** con desglose punto a punto.

---

## 🎥 Configuración Rápida en OBS Studio

1. En tu partido activo dentro de la app, tocá el menú de opciones (**`...`**) y seleccioná **Superposición para OBS (Overlay)**.
2. Elegí la posición en pantalla deseada y hacé clic en **Copiar** sobre el **Enlace Remoto** (o Local).
3. En **OBS Studio**:
   * En el panel **Fuentes (Sources)**, hacé clic en **`+`** ➔ **Navegador (Browser)**.
   * Pegá la URL copiada.
   * Configurá Ancho: **`1920`** y Alto: **`1080`** (o la resolución de tu video).
4. ¡Listo! El marcador se actualiza de forma automática en vivo sobre la cámara del partido.

---

## 🎤 Comandos de Voz (Manos Libres)

Al activar el micrófono (`🎤`) en la barra del marcador, podés controlar todo el partido con comandos naturales:

| Acción | Ejemplos de voz |
| :--- | :--- |
| **Winner de un jugador** | `"Drive 1"` · `"Winner Drive 1"` · `"Revés 2"` · `"Smash [Nombre]"` · `"Bandeja [Nombre]"` · `"Volea [Nombre]"` |
| **Error No Forzado (punto al rival)** | `"Error no forzado Revés 1"` · `"No forzado Drive 2"` · `"A la red [Nombre]"` · `"Al cristal [Nombre]"` · `"Afuera [Nombre]"` |
| **Error Forzado (punto al rival)** | `"Error forzado Drive 1"` · `"Forzado Revés 2"` |
| **Punto rápido por pareja / color** | `"Dorado"` · `"Azul"` · `"Rojo"` · `"Verde"` · `"Pareja 1"` · `"Pareja 2"` |
| **Asignar sacador (sin sumar punto)** | `"Saca Drive 1"` · `"Al saque Revés 2"` · `"Siguiente al saque"` · `"Cambiar sacador"` |
| **Faltas de saque** | `"Falta"` / `"Segundo saque"` · `"Doble falta"` |
| **Control del tablero** | `"Deshacer"` / `"Corregir"` · `"Rehacer"` · `"Cambio de lado"` |

---

## ⌨️ Atajos de Teclado y Control Bluetooth

Compatible con teclados inalámbricos y pulsadores Bluetooth para usar desde la pista:

| Tecla | Acción |
| :---: | :--- |
| `1` / `A` / `←` / `↑` | Punto para **Pareja 1** |
| `2` / `L` / `→` / `↓` | Punto para **Pareja 2** |
| `F` | Falta de saque / Doble falta |
| `Z` / `Backspace` | Deshacer último punto |
| `Y` | Rehacer punto |
| `S` | Invertir lados de cancha en pantalla |
| `V` | Activar / silenciar voz del árbitro |

---

## ⚙️ Reglas de Juego Soportadas

* **Sets**: Selector libre de `1` a `15` sets (a set único, al mejor de 3, etc.).
* **Juegos por Set**: Configurable de `1` a `21` juegos.
* **Resolución del 40-40**:
  * **Punto de Oro**: Define el juego en un único punto.
  * **★ Star Point (Reglamento FIP)**: Hasta 2 ventajas sucesivas; al tercer iguales se juega un Star Point definitivo.
  * **Ventajas Clásicas**: Diferencia obligatoria de 2 puntos sin límite.
* **Tie-Break**: Configurable a 7 o 10 puntos, o juego continuo con diferencia de 2. Opción de **Súper Tie-Break** en el set final.
* **Cambio de lado**: Cada juegos impares, al final del set o sin cambio. Con cronómetro de descanso configurable (90s / 120s).

---

## 🔒 Privacidad y Rendimiento

* **Sin Base de Datos Externa Obligatoria**: Toda la información se guarda localmente en cada dispositivo mediante `localStorage`, con exportación/importación JSON de respaldo.
* **Sincronización Ligera Bajo Demanda**: La nube efímera (`ntfy.sh`) solo se utiliza cuando activás la transmisión en vivo, el overlay remoto de OBS o una sala multi-dispositivo de Liga/Torneo.
* **Caché Instantáneo y Modo Offline**: Aplicación web de archivo único de alto rendimiento lista para usar en navegadores móviles y escritorio.
* **Estética Obsidian & Gold**: Diseño Obsidian Black & Oro 24K con tipografía condensada de alta visibilidad para pistas y retransmisiones.

---

*Diseñado y desarrollado con firma virtual de **Sairaf Engel**.*
