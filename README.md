# 🎾 Pádel Control SÉ
*By Sairaf Engel*

**Pádel Control SÉ** es una aplicación web progresiva (PC, móvil y TV) de marcador en vivo y análisis estadístico avanzado para partidos de pádel **2 vs 2**. Funciona 100% en el navegador sin necesidad de instalar nada y guarda el historial de forma independiente en cada dispositivo.

🔗 **Abrir aplicación:** **[https://shisasjef.github.io/padel-control-se/](https://shisasjef.github.io/padel-control-se/)**

---

## ✨ Características Principales

- **Reglamento Oficial y Personalizable (2 vs 2)**:
  - Selector libre (`−` / `+`) de **Número de sets** (`1` a `15`) y **Número de juegos por set** (`1` a `21`).
  - **Tres sistemas en el 40-40 (Deuce)**:
    - **Punto de Oro**: un único punto decisivo en el `40-40`.
    - **★ Star Point (FIP / Premier Padel)**: se juegan hasta 2 ventajas consecutivas; si se vuelve a empatar por tercera vez (`40-40 ★`), se define con un punto de oro definitivo.
    - **Ventajas clásicas**: diferencia de 2 puntos sin límite.
  - **Tie-Break configurable**: selector libre (`−` / `+`) de cantidad de puntos objetivo (`7`, `10`, etc.) o opción sin Tie-Break, además de **Súper Tie-Break** en el set decisivo.
  - **Cambio de lado automático adaptable**: *Juegos impares*, *Al terminar el set* o *Sin cambio*.
- **Control por Voz Manos Libres y Voz de Árbitro**:
  - Anuncio automático por voz del marcador en español tras cada punto (*"15 iguales"*, *"Segunda ventaja al saque"*, *"Star Point, punto decisivo"*).
  - Reconocimiento por micrófono para sumar puntos, winners, errores forzados/no forzados y faltas de saque sin tocar la pantalla.
- **Estadísticas Avanzadas por Pareja y por Jugador**:
  - Golpes ganadores (*Winners*), Errores no forzados (*ENF*), Errores forzados (*EF*), efectividad de 1º saque, puntos ganados al saque/resto, bolas de break convertidas/salvadas, puntos clave bajo presión y gráfico de evolución punto a punto.
- **Modo TV / Espectador y Exportación**:
  - Sincronización en tiempo real en segunda ventana para monitor o proyector.
  - Exportación de informe completo en **PDF**, tarjeta resumen en **imagen PNG** y enlace para compartir el partido.

---

## 🎤 Comandos de Voz (Manos Libres)

Activando el ícono del micrófono (`🎤`) durante el partido podés controlar el tablero hablando:

| Acción | Qué decir |
| :--- | :--- |
| **Winner de un jugador** | `"[Nombre]"` · `"Winner [Nombre]"` · `"Smash [Nombre]"` · `"Bandeja [Nombre]"` · `"Víbora [Nombre]"` · `"Volea [Nombre]"` · `"Por tres [Nombre]"` |
| **Error No Forzado (suma al rival)** | `"Error no forzado [Nombre]"` · `"No forzado [Nombre]"` · `"Error [Nombre]"` · `"A la red [Nombre]"` · `"Al cristal [Nombre]"` · `"Afuera [Nombre]"` |
| **Error Forzado (suma al rival)** | `"Error forzado [Nombre]"` · `"Forzado [Nombre]"` |
| **Punto rápido por pareja / color** | `"Dorado"` · `"Azul"` · `"Rojo"` · `"Verde"` · `"Pareja 1"` · `"Pareja 2"` |
| **Asignar quién saca (sin sumar punto)** | `"Saca [Nombre]"` · `"Al saque [Nombre]"` · `"Siguiente al saque [Nombre]"` · `"Cambiar sacador"` |
| **Faltas de saque** | `"Falta"` / `"Segundo saque"` · `"Doble falta"` |
| **Control del tablero** | `"Deshacer"` / `"Corregir"` · `"Rehacer"` · `"Cambio de lado"` · `"Continuar"` |

---

## ⌨️ Atajos de Teclado y Pulsador Bluetooth (PC / TV)

- `1` / `A` / `←` / `↑` : Punto para **Pareja 1**
- `2` / `L` / `→` / `↓` : Punto para **Pareja 2**
- `F` : Falta de saque / Doble falta
- `Z` / `Backspace` : Deshacer último punto
- `Y` : Rehacer punto
- `S` : Cambiar de lado en cancha
- `V` : Activar / silenciar voz de árbitro

---

*Diseñado y desarrollado por **Sairaf Engel**.*
````
