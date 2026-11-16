export const COLORS = [
  { c: '#d4af37', f: '#080602', n: 'Dorado' },
  { c: '#2f8cff', f: '#ffffff', n: 'Azul' },
  { c: '#ff453a', f: '#ffffff', n: 'Rojo' },
  { c: '#10b981', f: '#ffffff', n: 'Verde' },
  { c: '#f59e0b', f: '#0f172a', n: 'Ámbar' },
  { c: '#a855f7', f: '#ffffff', n: 'Violeta' },
  { c: '#ec4899', f: '#ffffff', n: 'Rosa' },
  { c: '#06b6d4', f: '#0f172a', n: 'Cian' }
] as const;

export const ICONS = {
  qr: '<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M7 17h.01M17 7h.01M7 7h.01M17 17h.01M10 10h4v4h-4z"/></svg>',
  home: '<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/></svg>',
  plus: '<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>',
  hist: '<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l3 2"/></svg>',
  users: '<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  gear: '<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9c.26.6.77 1.02 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
  back: '<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>',
  undo: '<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 14 4 9l5-5"/><path d="M4 9h10.5a5.5 5.5 0 0 1 0 11H11"/></svg>',
  redo: '<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 14 5-5-5-5"/><path d="M20 9H9.5a5.5 5.5 0 0 0 0 11H13"/></svg>',
  swap: '<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m16 3 4 4-4 4"/><path d="M20 7H4"/><path d="m8 21-4-4 4-4"/><path d="M4 17h16"/></svg>',
  chart: '<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M7 16v-5"/><path d="M12 16V8"/><path d="M17 16v-3"/></svg>',
  vol: '<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>',
  mute: '<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>',
  mic: '<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="2" width="6" height="11" rx="3"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="22"/></svg>',
  tv: '<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="13" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>',
  dots: '<svg class="ic" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="5" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="12" cy="19" r="2"/></svg>',
  trophy: '<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>',
  share: '<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>',
  pdf: '<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="13" y2="17"/></svg>',
  img: '<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>',
  trash: '<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',
  play: '<svg class="ic" viewBox="0 0 24 24" fill="currentColor"><polygon points="6 4 20 12 6 20 6 4"/></svg>',
  pause: '<svg class="ic" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/></svg>',
  full: '<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>',
  dl: '<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',
  up: '<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>',
  flag: '<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>',
  edit: '<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>',
  ball: '<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M5.6 5.6c3.5 3.5 3.5 9.3 0 12.8M18.4 5.6c-3.5 3.5-3.5 9.3 0 12.8"/></svg>',
  copy: '<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>',
  live: '<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="2"/><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"/></svg>',
  sun: '<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>',
  calendar: '<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
  award: '<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>',
  check: '<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
  idCard: '<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2.5"/><circle cx="9" cy="10" r="2.2"/><path d="M6.2 16.5c.6-1.9 2.2-2.7 2.8-2.7s2.2.8 2.8 2.7"/><path d="M14.5 9.5h4M14.5 13h4M14.5 16.5h2.5"/></svg>',
  camera: '<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>'
} as const;

export const LOGO_SVG = `<svg class="logo-ic" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="se_bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#19160d"/>
      <stop offset="50%" stop-color="#0a090c"/>
      <stop offset="100%" stop-color="#040406"/>
    </linearGradient>
    <linearGradient id="se_gold" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#fff6cc"/>
      <stop offset="28%" stop-color="#f3d266"/>
      <stop offset="55%" stop-color="#d4af37"/>
      <stop offset="80%" stop-color="#8f680a"/>
      <stop offset="100%" stop-color="#f7df8b"/>
    </linearGradient>
    <linearGradient id="se_gold_soft" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#ffe89e"/>
      <stop offset="100%" stop-color="#9e740f"/>
    </linearGradient>
    <radialGradient id="se_glow" cx="50%" cy="42%" r="50%">
      <stop offset="0%" stop-color="#d4af37" stop-opacity="0.32"/>
      <stop offset="100%" stop-color="#d4af37" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="se_ball" cx="35%" cy="30%" r="65%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="35%" stop-color="#fff1b8"/>
      <stop offset="75%" stop-color="#d4af37"/>
      <stop offset="100%" stop-color="#7c5806"/>
    </radialGradient>
  </defs>

  <rect x="2" y="2" width="116" height="116" rx="28" fill="url(#se_bg)" stroke="url(#se_gold)" stroke-width="2.5"/>
  <rect x="7" y="7" width="106" height="106" rx="23" fill="none" stroke="url(#se_gold)" stroke-opacity="0.28" stroke-width="1"/>
  <circle cx="60" cy="54" r="46" fill="url(#se_glow)"/>

  <path d="M60 13 L97 26 V59 C97 83 80 99 60 107 C40 99 23 83 23 59 V26 Z" fill="#08080b" fill-opacity="0.85" stroke="url(#se_gold)" stroke-width="1.6" stroke-opacity="0.65"/>
  <path d="M60 17 L93 29 V58 C93 79 78 94 60 102 C42 94 27 79 27 58 V29 Z" fill="none" stroke="url(#se_gold)" stroke-width="0.7" stroke-opacity="0.3" stroke-dasharray="2 2"/>

  <polygon points="60,18 62.2,22.6 67.2,23.2 63.5,26.6 64.5,31.5 60,29 55.5,31.5 56.5,26.6 52.8,23.2 57.8,22.6" fill="url(#se_gold)"/>

  <g transform="rotate(26 60 58)" opacity="0.48">
    <path d="M60 22 C76 22 84 35 81 53 C79 65 71 72 65 78 L63.5 97 C63.5 99 62 100 60 100 C58 100 56.5 99 56.5 97 L55 78 C49 72 41 65 39 53 C36 35 44 22 60 22 Z" fill="none" stroke="url(#se_gold)" stroke-width="2.2"/>
    <ellipse cx="60" cy="48" rx="16" ry="19.5" fill="#0c0b0e" stroke="url(#se_gold)" stroke-width="1.4"/>
  </g>

  <g transform="rotate(-24 58 57)">
    <path d="M60 20 C77 20 86 33 83 52 C81 64 72 72 65.5 78 L64 98 C64 100.5 62.2 102 60 102 C57.8 102 56 100.5 56 98 L54.5 78 C48 72 39 64 37 52 C34 33 43 20 60 20 Z" fill="url(#se_gold)" stroke="#050507" stroke-width="1.2"/>
    <path d="M60 24.5 C73.5 24.5 80.5 35 78 50.5 C76.2 60.5 68.5 66.8 60 67.5 C51.5 66.8 43.8 60.5 42 50.5 C39.5 35 46.5 24.5 60 24.5 Z" fill="#09090d" stroke="url(#se_gold_soft)" stroke-width="1"/>
    <polygon points="55,69.5 60,76.5 65,69.5" fill="#09090d"/>
    <rect x="56" y="79" width="8" height="19" rx="2.5" fill="#141210" stroke="url(#se_gold)" stroke-width="0.9"/>
    <line x1="56.5" y1="84" x2="63.5" y2="82.5" stroke="url(#se_gold)" stroke-width="1"/>
    <line x1="56.5" y1="89" x2="63.5" y2="87.5" stroke="url(#se_gold)" stroke-width="1"/>
    <line x1="56.5" y1="94" x2="63.5" y2="92.5" stroke="url(#se_gold)" stroke-width="1"/>
    <g fill="url(#se_gold)">
      <circle cx="53" cy="35.5" r="1.9"/><circle cx="60" cy="34.5" r="1.9"/><circle cx="67" cy="35.5" r="1.9"/>
      <circle cx="49.5" cy="42.5" r="2"/><circle cx="56.5" cy="42.5" r="2"/><circle cx="63.5" cy="42.5" r="2"/><circle cx="70.5" cy="42.5" r="2"/>
      <circle cx="50.5" cy="50" r="2"/><circle cx="57" cy="50" r="2"/><circle cx="63" cy="50" r="2"/><circle cx="69.5" cy="50" r="2"/>
      <circle cx="54" cy="57" r="1.8"/><circle cx="60" cy="57.5" r="1.8"/><circle cx="66" cy="57" r="1.8"/>
    </g>
  </g>

  <path d="M26 74 C38 92, 68 96, 86 76" fill="none" stroke="url(#se_gold)" stroke-width="2.2" stroke-linecap="round" opacity="0.85"/>

  <g transform="translate(79, 73)">
    <circle cx="0" cy="0" r="14.5" fill="url(#se_ball)" stroke="#070709" stroke-width="1.8"/>
    <path d="M-9.5 -8.5 C-2 -2, -2 6, -8.5 10.5" fill="none" stroke="#181305" stroke-width="1.8" stroke-linecap="round" opacity="0.75"/>
    <path d="M9.5 -8.5 C2 -2, 2 6, 8.5 10.5" fill="none" stroke="#181305" stroke-width="1.8" stroke-linecap="round" opacity="0.75"/>
    <circle cx="-4.5" cy="-5" r="2.2" fill="#ffffff" opacity="0.7"/>
  </g>

  <rect x="42" y="95" width="36" height="16" rx="8" fill="#090806" stroke="url(#se_gold)" stroke-width="1.4"/>
  <text x="60" y="106.5" text-anchor="middle" font-family="'Barlow Condensed', sans-serif" font-weight="800" font-style="italic" font-size="12.5" letter-spacing="1" fill="url(#se_gold)">SÉ</text>
</svg>`;

export const SIGNATURE_PEN_SVG = `<svg class="sig-flourish" viewBox="0 0 120 18" fill="none"><path d="M2 13 C 32 3, 76 16, 118 5" stroke="url(#sig_g)" stroke-width="1.6" stroke-linecap="round"/><defs><linearGradient id="sig_g" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#d4af37" stop-opacity="0.15"/><stop offset="50%" stop-color="#ffe58f" stop-opacity="0.95"/><stop offset="100%" stop-color="#d4af37" stop-opacity="0.2"/></linearGradient></defs></svg>`;

export function renderSignatureBadge(): string {
  return `<div class="sig-sub"><span class="sig-name">Sairaf Engel</span>${SIGNATURE_PEN_SVG}</div>`;
}

export function renderSignatureFooter(): string {
  return `<div class="sig-footer no-print"><span class="sig-name">Sairaf Engel</span>${SIGNATURE_PEN_SVG}</div>`;
}
