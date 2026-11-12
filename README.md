# 🎾 Pádel Control SÉ
### *Marcador Broadcast, Análisis Estadístico y Transmisión en Vivo · By Sairaf Engel*

[![PWA Ready](https://img.shields.io/badge/PWA-Ready-gold?style=for-the-badge&logo=pwa&logoColor=black)](https://shisasjef.github.io/padel-control-se/)
[![OBS Compatible](https://img.shields.io/badge/OBS-Overlay_Transparente-blue?style=for-the-badge&logo=obsstudio&logoColor=white)](https://shisasjef.github.io/padel-control-se/#obs)
[![FIP Regulations](https://img.shields.io/badge/FIP-Reglamento_Oficial-darkgreen?style=for-the-badge)](https://shisasjef.github.io/padel-control-se/)
[![Zero Install](https://img.shields.io/badge/Instalación-Cero_(Navegador)-black?style=for-the-badge)](https://shisasjef.github.io/padel-control-se/)

**Pádel Control SÉ** es una suite profesional e integral diseñada para jugadores, árbitros, clubes y creadores de contenido de pádel (**2 vs 2**). Funciona 100% en el navegador (móviles, tablets, PC y TV), sin descargas de tiendas ni configuraciones complejas, guardando el historial de forma privada en cada dispositivo.

🔗 **Acceso a la Aplicación:** **[https://shisasjef.github.io/padel-control-se/](https://shisasjef.github.io/padel-control-se/)**

---

## 🌟 Novedades y Características Principales

### 📺 1. Superposición Transparente para OBS Studio / vMix / Streamlabs
* **Gráfica Broadcast Profesional**: Generador de caracteres (*scorebug / chyron*) estilo **Premier Padel** y **World Padel Tour**.
* **Fondo 100% Transparente**: Al entrar con la ruta `#obs`, la interfaz elimina botones y fondos para montarse de forma limpia sobre la cámara de la pista.
* **Sincronización Dual**:
  * **Modo Remoto (Nube en Tiempo Real)**: El árbitro o jugador anota desde su celular en la pista y el OBS en la computadora de transmisión se actualiza automáticamente punto a punto vía Server-Sent Events.
  * **Modo Local (Misma PC)**: Latencia cero mediante `BroadcastChannel` para torneos donde se anota desde una pestaña en la misma máquina del streaming.
* **Selector de Posición**: Arriba Izquierda (estándar), Arriba Derecha, Abajo Izquierda, Abajo Derecha o Barra Inferior (*Chyron horizontal*).

### 🎾 2. Posiciones Tácticas y Lado de Saque Dinámico (`D` / `R`)
* **Nombres Predeterminados Tácticos**:
  * **Pareja 1**: `DRIVE 1` (derecha) y `REVÉS 1` (izquierda).
  * **Pareja 2**: `DRIVE 2` (derecha) y `REVÉS 2` (izquierda).
  *(Personalizables en cualquier momento al crear el partido o durante el juego).*
* **Indicador Reglamentario de Lado de Saque (`D` / `R`)**:
  * Cumple con la regla oficial FIP: cada juego comienza con saque desde la **Derecha** (`D`), alternando al **Revés** (`R`) tras cada punto anotado.
  * Distintivo visual en el marcador, en el overlay de transmisión y en el reloj superior.
  * Soporte completo en Tie-Break (saques en `D` y `R` con rotación estricta de jugadores).

### 🏆 3. Sistema Oficial de Ranking ELO y Nivel Playtomic (1.00 a 7.00)
* **Cálculo de Suma Cero 100% Automático y Offline**: Replay determinista sobre todos los partidos registrados en el historial, sin necesidad de conexión externa ni base de datos central.
* **Punto de Partida**: Todos los jugadores nuevos inician con **1000 puntos base** (equivalente exacto a **Nivel Playtomic 2.50**).
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
* **Visualización Completa en la App**:
  * **Pestaña «Jugadores y Ranking»**: Podio con medallas (🥇, 🥈, 🥉), puntos ELO, nivel Playtomic, badge de calibración, tendencia reciente (`▲ +XX` / `▼ -XX`), ordenamiento configurable y guía explicativa desplegable.
  * **Compartir solo el Ranking (Texto / WhatsApp e Imagen HD)**: Botones dedicados en la cabecera y pie de la tabla para compartir el ranking directamente por WhatsApp o redes, o descargar una tarjeta visual de alta resolución en PNG con el diseño Obsidian & Gold y la firma virtual.
  * **Overlay de Victoria**: Impacto ELO inmediato en pantalla al terminar el partido con aviso de bonus por diferencia de juegos.
  * **Detalles del Partido**: Desglose de puntos ganados y perdidos por cada jugador con probabilidad previa.
  * **Tarjetas del Historial**: Distintivo `⚡ ELO ±XX` en cada tarjeta de partido finalizado.

### 📱 4. Código QR Offline Embebido
* Generador de códigos QR integrado de forma local (sin dependencias externas).
* Tarjeta QR accesible desde el Inicio, Ajustes y el menú del marcador para que amigos y espectadores escaneen y abran la app al instante.

### 📡 5. Transmisión en Vivo para Espectadores
* Enlace en vivo compartible por WhatsApp: cualquier persona puede seguir el marcador, cronómetro y estadísticas en tiempo real desde cualquier lugar del mundo.

### 🎙️ 6. Control por Voz Manos Libres y Árbitro Parlante (TTS)
* **Reconocimiento continuo**: Permite registrar puntos, faltas y rotaciones sin tocar la pantalla, ideal para árbitros o jugadores desde la pista.
* **Voz de árbitro automática**: Canta el tanteador en español tras cada tanto (*"15 iguales"*, *"Segunda ventaja al saque"*, *"Punto de oro"*).

### 📊 7. Estadísticas Avanzadas y Reportes PDF / Imagen
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

* **Sin Base de Datos Externa Obligatoria**: Toda la información se guarda localmente en el dispositivo mediante `localStorage`.
* **Caché Instantáneo y Modo Offline**: Diseñado como Progressive Web App (PWA) de alto rendimiento.
* **Estética de Lujo**: Diseño Obsidian Black & Oro 24K con tipografía condensada de alta visibilidad para estadios y retransmisiones.

---

*Diseñado y desarrollado con firma virtual de **Sairaf Engel**.*
