(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function a(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=a(r);fetch(r.href,s)}})();const ra=[{c:"#d4af37",f:"#080602",n:"Dorado"},{c:"#2f8cff",f:"#ffffff",n:"Azul"},{c:"#ff453a",f:"#ffffff",n:"Rojo"},{c:"#10b981",f:"#ffffff",n:"Verde"},{c:"#f59e0b",f:"#0f172a",n:"Ámbar"},{c:"#a855f7",f:"#ffffff",n:"Violeta"},{c:"#ec4899",f:"#ffffff",n:"Rosa"},{c:"#06b6d4",f:"#0f172a",n:"Cian"}],I={qr:'<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M7 17h.01M17 7h.01M7 7h.01M17 17h.01M10 10h4v4h-4z"/></svg>',home:'<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/></svg>',plus:'<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>',hist:'<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l3 2"/></svg>',users:'<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',gear:'<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9c.26.6.77 1.02 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',back:'<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>',undo:'<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 14 4 9l5-5"/><path d="M4 9h10.5a5.5 5.5 0 0 1 0 11H11"/></svg>',redo:'<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 14 5-5-5-5"/><path d="M20 9H9.5a5.5 5.5 0 0 0 0 11H13"/></svg>',swap:'<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m16 3 4 4-4 4"/><path d="M20 7H4"/><path d="m8 21-4-4 4-4"/><path d="M4 17h16"/></svg>',chart:'<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M7 16v-5"/><path d="M12 16V8"/><path d="M17 16v-3"/></svg>',vol:'<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>',mute:'<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>',mic:'<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="2" width="6" height="11" rx="3"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="22"/></svg>',tv:'<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="13" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>',dots:'<svg class="ic" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="5" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="12" cy="19" r="2"/></svg>',trophy:'<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>',share:'<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>',pdf:'<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="13" y2="17"/></svg>',img:'<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>',trash:'<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',play:'<svg class="ic" viewBox="0 0 24 24" fill="currentColor"><polygon points="6 4 20 12 6 20 6 4"/></svg>',full:'<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>',dl:'<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',up:'<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>',flag:'<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>',edit:'<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>',ball:'<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M5.6 5.6c3.5 3.5 3.5 9.3 0 12.8M18.4 5.6c-3.5 3.5-3.5 9.3 0 12.8"/></svg>',copy:'<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>',live:'<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="2"/><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"/></svg>',calendar:'<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',award:'<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>',check:'<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',idCard:'<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2.5"/><circle cx="9" cy="10" r="2.2"/><path d="M6.2 16.5c.6-1.9 2.2-2.7 2.8-2.7s2.2.8 2.8 2.7"/><path d="M14.5 9.5h4M14.5 13h4M14.5 16.5h2.5"/></svg>',camera:'<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>'},Ya=`<svg class="logo-ic" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
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
</svg>`,Bo='<svg class="sig-flourish" viewBox="0 0 120 18" fill="none"><path d="M2 13 C 32 3, 76 16, 118 5" stroke="url(#sig_g)" stroke-width="1.6" stroke-linecap="round"/><defs><linearGradient id="sig_g" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#d4af37" stop-opacity="0.15"/><stop offset="50%" stop-color="#ffe58f" stop-opacity="0.95"/><stop offset="100%" stop-color="#d4af37" stop-opacity="0.2"/></linearGradient></defs></svg>';function Ir(){return`<div class="sig-sub"><span class="sig-name">Sairaf Engel</span>${Bo}</div>`}function vt(){return`<div class="sig-footer no-print"><span class="sig-name">Sairaf Engel</span>${Bo}</div>`}function Ie(e){return e&&JSON.parse(JSON.stringify(e))}function g(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]||t)}function Ot(e){const t=ra.find(a=>a.c.toLowerCase()===String(e).toLowerCase());return t?t.f:"#ffffff"}function X(e,t){var n;const a=(((n=e.teams[t])==null?void 0:n.players)||[]).filter(Boolean);return a.length?a.join(" · "):`Pareja ${t+1}`}function ae(e,t,a){var r,s,o,i;const n=(i=(o=(s=(r=e==null?void 0:e.teams)==null?void 0:r[t])==null?void 0:s.players)==null?void 0:o[a])==null?void 0:i.trim();return n||(a===0?`DRIVE ${t+1}`:`REVÉS ${t+1}`)}function _t(e){var t;return((t=e==null?void 0:e.competition)==null?void 0:t.kind)||"daily"}function He(e){var t;return((t=e==null?void 0:e.competition)==null?void 0:t.compId)||null}function Ma(e){const t=new Date(e||Date.now()),a=t.getFullYear(),n=String(t.getMonth()+1).padStart(2,"0"),r=String(t.getDate()).padStart(2,"0");return`${a}-${n}-${r}`}function en(e,t){const a=String(e||"").trim().toUpperCase(),n=String(t||"").trim().toUpperCase();return[a,n].sort().join(" || ")}function ye(e,t){return[String(e||"").trim(),String(t||"").trim()].filter(Boolean).join(" · ")}function Er(e,t){const a=_t(e),n=He(e);return n?(t||[]).filter(r=>He(r)===n):a==="league"||a==="tournament"?(t||[]).filter(r=>_t(r)===a&&!He(r)):(t||[]).filter(r=>_t(r)==="daily")}function Wt(e){const t=Math.max(0,Math.floor(e/1e3)),a=Math.floor(t/3600),n=Math.floor(t%3600/60),r=t%60;return a>0?`${a}:${String(n).padStart(2,"0")}:${String(r).padStart(2,"0")}`:`${String(n).padStart(2,"0")}:${String(r).padStart(2,"0")}`}function tn(e){const t=Math.round(e/6e4);if(t<60)return`${t} min`;const a=Math.floor(t/60),n=t%60;return`${a}h ${n}m`}function Ba(e){return new Date(e).toLocaleString("es-ES",{day:"2-digit",month:"short",hour:"2-digit",minute:"2-digit"})}function le(e,t){return t>0?Math.round(e*100/t):0}function Ar(e){return e===null||!Number.isFinite(e)||e<0?"—":e<1024*1024?Math.max(1,Math.round(e/1024))+" KB":(e/(1024*1024)).toFixed(1)+" MB"}const Vt="https://ntfy.sh",Xa=["winner","smash","volea","bandeja","bajada","dejada","passing","globo"];function Da(e){const t=String(e||"").trim().replace(/\/+$/,"");if(!t)return Vt;try{const a=new URL(t);if(a.protocol==="https:"||a.protocol==="http:"&&(a.hostname==="localhost"||a.hostname==="127.0.0.1"))return a.origin+(a.pathname==="/"?"":a.pathname.replace(/\/+$/,""))}catch{}return Vt}function Lr(e){let t="";for(let a=0;a<e.length;a++)t+=String.fromCharCode(e[a]);return btoa(t).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function Rr(e){const t=String(e||"").trim().replace(/-/g,"+").replace(/_/g,"/"),a=atob(t),n=new Uint8Array(a.length);for(let r=0;r<a.length;r++)n[r]=a.charCodeAt(r);return n}function Ia(e){const t=JSON.stringify(e),a=new TextEncoder().encode(t);return Lr(a)}function Za(e){const t=String(e||"").trim();if(!t)return null;const a=Rr(t),n=new TextDecoder().decode(a);return JSON.parse(n)}function Do(e){try{const t={pt:0,winner:1,ue:2,fe:3,df:4},a=e.events||[];let n=!0;const r=[];for(let o=0;o<a.length;o++){const i=a[o],l=i.w===1?1:0,c=t[i.type||"pt"]||0,d=i.by?Number(i.by[0]):-1,y=i.by?Number(i.by[1]):-1,S=i.fs===!1?0:1,h=i.sub?Math.max(0,Xa.indexOf(i.sub)):0;if(d!==-1&&(d<0||d>1)||y!==-1&&(y<0||y>1)||h>8){n=!1;break}r.push(`${l}${c}${d<0?9:d}${y<0?9:y}${S}${h}`)}const s={id:e.id,ts:Date.now(),c:e.createdAt,d:e.durationMs,s:e.status,m:e.mode,cp:e.competition||null,ms:e.manualSets||null,mw:e.isDraw?"draw":e.manualWinner??null,drw:e.isDraw?1:0,wo:e.isWalkover?1:0,t:e.teams,r:e.rules,fs:e.firstServer,ss:e.secondServerIdx,fl:e.flipped?1:0,pf:e.pendingFault?1:0,e:n?r.join(""):a.map(o=>{const i=o.sub?Xa.indexOf(o.sub):0;return[o.w,t[o.type||"pt"]||0,o.by?o.by[0]:-1,o.by?o.by[1]:-1,o.fs===!1?0:1,i>0?i:0]})};return Ia(s)}catch{return""}}function ls(e){try{const t=Za(e);if(!t)return null;const a=["pt","winner","ue","fe","df"];let n=[];if(Array.isArray(t.e))n=t.e;else if(typeof t.e=="string"&&t.e.length>=6)for(let r=0;r+6<=t.e.length;r+=6){const s=t.e;n.push([Number(s[r]),Number(s[r+1]),s[r+2]==="9"?-1:Number(s[r+2]),s[r+3]==="9"?-1:Number(s[r+3]),Number(s[r+4]),Number(s[r+5])])}return{id:t.id||"shared_"+(t.c||Date.now()),_ts:t.ts||0,createdAt:t.c||Date.now(),durationMs:t.d||0,status:t.s||"finished",mode:t.m||"doubles",competition:t.cp||null,manualSets:t.ms||null,manualWinner:t.mw??null,isDraw:!!(t.drw||t.mw==="draw"),isWalkover:!!t.wo,teams:t.t,rules:t.r,firstServer:t.fs||[0,0],secondServerIdx:t.ss??0,shotPrompt:!0,flipped:!!t.fl,pendingFault:!!t.pf,events:n.map(r=>({w:r[0],type:a[r[1]]||"pt",by:r[2]>=0?[r[2],r[3]]:null,fs:r[4]!==0,sub:r[5]&&r[5]>0&&Xa[r[5]]?Xa[r[5]]:null})),redoStack:[]}}catch{return null}}function zt(e){return String(e||"default").replace(/^m_/,"").replace(/[^a-zA-Z0-9]/g,"").toLowerCase().slice(-6)||"padel1"}function ja(e){return"padel_se_live_"+zt(e)}function Ea(e){if(!e)return"";const t=e.events&&e.events.length?e.events[e.events.length-1]:null;return[e.id,e.status,e.events?e.events.length:0,t?`${t.w}:${t.type}:${t.fs}:${t.sub||""}:${t.by?t.by.join(","):""}`:"",e.pendingFault?1:0,e.flipped?1:0,e.firstServer?e.firstServer.join(","):"",e.secondServerIdx??"",e.teams?e.teams.map(a=>a.players.join(",")+":"+a.color).join("|"):"",e.rules?`${e.rules.totalSets}:${e.rules.gamesPerSet}:${e.rules.deuceRule}:${e.rules.finalSet}:${e.rules.changeoverRule}`:""].join("#")}function bt(e){return String(e||"").toUpperCase().replace(/[^A-Z0-9]/g,"").slice(0,12)}function jo(){const e="23456789ABCDEFGHJKLMNPQRSTUVWXYZ";let t="";for(let a=0;a<6;a++)t+=e.charAt(Math.floor(Math.random()*e.length));return t}function an(e){const t=bt(e).toLowerCase();return t?"padel_se_comp_"+t:""}function Os(e){try{return"PCS1:"+Ia(e)}catch{return""}}function sn(e){try{const t=String(e||"").trim();return t?t.startsWith("PCS1:")?Za(t.slice(5)):t.startsWith("{")?JSON.parse(t):Za(t):null}catch{return null}}function Dt(e,t=null){const a=t!==null?t:e.fixtures||[];return{v:1,id:e.id,sc:e.syncCode,c:{k:e.kind,n:e.name,f:e.format,rm:e.rankingMode,w:e.winPts,dp:e.drawPts,l:e.lossPts,sb:e.setBonusPts,gb:e.gameBonusPts,ng:e.numGroups,ag:e.advancePerGroup,dr:e.defaultRules},pt:e.participants||[],fx:a.map(n=>({id:n.id,ph:n.phase,ri:n.roundIdx,rl:n.roundLabel,si:n.slotIdx,g:n.group||null,t0:n.team0||null,t1:n.team1||null,s0:n.source0||null,s1:n.source1||null,ib:n.isBye?1:0}))}}function es(e){return(e||[]).map(t=>({id:String(t.id),phase:t.ph||t.phase||"league",roundIdx:Number(t.ri??t.roundIdx)||0,roundLabel:t.rl||t.roundLabel||"Cruce",slotIdx:Number(t.si??t.slotIdx)||0,group:t.g??t.group??null,team0:t.t0||t.team0||null,team1:t.t1||t.team1||null,source0:t.s0||t.source0||null,source1:t.s1||t.source1||null,matchId:null,winnerSide:t.ib?t.t0?0:t.t1?1:null:null,isBye:!!(t.ib||t.isBye)}))}function Br(e){try{if(!e)return"";const t=Ia(Dt(e));if(t.length<=720)return t;const a=Ia(Dt(e,[]));return a.length<=720?a:""}catch{return""}}function Dr(e,t=null,a={}){try{const n=(t==null?void 0:t.id)||a.id||"RK-OFFICIAL",r=(t==null?void 0:t.title)||a.name||"Mi Ranking",s={v:2,id:n,n:r,sub:(t==null?void 0:t.subtitle)||"",em:(t==null?void 0:t.entityMode)||"individual",pm:(t==null?void 0:t.primaryMetric)||"pts",t:Date.now(),p:(e||[]).map(o=>[o.name,o.elo,o.wins,o.matches,o.lastDelta||0,o.color||"#d4af37",o.winners||0,o.ue||0,o.firstServeIn||0,o.srvPtsTotal||0,o.srvPtsWon||0,o.finishedMatches||o.matches||0,o.pts||0,o.losses||0,o.setsDiff||0,o.gamesDiff||0,o.gamesWon||0,o.draws||0,o.gamesLost||0])};return Ia(s)}catch{return""}}function No(e){try{const t=Za(e);if(!t||!Array.isArray(t.p))return null;const a=t.p.map(n=>({name:String(n[0]||"Jugador"),key:String(n[0]||"Jugador").toUpperCase(),elo:Number(n[1])||1e3,wins:Number(n[2])||0,matches:Number(n[3])||0,lastDelta:Number(n[4])||0,color:String(n[5]||"#d4af37"),winners:Number(n[6])||0,ue:Number(n[7])||0,fe:0,shots:{},firstServeIn:Number(n[8])||0,srvPtsTotal:Number(n[9])||0,srvPtsWon:Number(n[10])||0,finishedMatches:Number(n[11])||Number(n[3])||0,pts:n[12]!==void 0?Number(n[12]):(Number(n[2])||0)*3,losses:n[13]!==void 0?Number(n[13]):Math.max(0,(Number(n[3])||0)-(Number(n[2])||0)),setsDiff:Number(n[14])||0,gamesDiff:Number(n[15])||0,gamesWon:Number(n[16])||0,draws:Number(n[17])||0,gamesLost:Number(n[18])||0,setsWon:0,setsLost:0,doubleFaults:0}));return{version:t.v||1,id:t.id||"RK-EXT",name:t.n||"Ranking Compartido",subtitle:t.sub||"",entityMode:t.em||"individual",primaryMetric:t.pm||"pts",timestamp:t.t||Date.now(),players:a}}catch{return null}}function jr(e,t=null){var d,y,S,h;const a=e.teams[0],n=e.teams[1],r=[((d=a.players[0])==null?void 0:d.trim())||"DRIVE 1",((y=a.players[1])==null?void 0:y.trim())||"REVÉS 1"],s=[((S=n.players[0])==null?void 0:S.trim())||"DRIVE 2",((h=n.players[1])==null?void 0:h.trim())||"REVÉS 2"],o=e.firstServer||[0,0],i=Math.max(1,Number(e.totalSets)||(e.setsToWin?Number(e.setsToWin)*2-1:3)),l=Math.floor(i/2)+1,c=e.matchContext||"daily";return{id:Math.random().toString(36).slice(2,5)+Date.now().toString(36).slice(-3),createdAt:Date.now(),durationMs:0,status:"playing",mode:"doubles",competition:{kind:t?t.kind:c,compId:t?t.id:null,compName:t?t.name:"",fixtureId:e.fixtureId||null,stageLabel:(e.stageLabel||"").trim()},teams:[{players:r,color:a.color||"#d4af37"},{players:s,color:n.color||"#2f8cff"}],rules:{totalSets:i,setsToWin:l,gamesPerSet:Math.max(1,Number(e.gamesPerSet)||6),deuceRule:e.deuceRule||"golden",tiebreakAt:e.tiebreakAt!==void 0?Number(e.tiebreakAt):Math.max(1,Number(e.gamesPerSet)||6),tiebreakPoints:Math.max(1,Number(e.tiebreakPoints)||7),finalSet:e.finalSet||"normal",changeoverRule:e.changeoverRule||"odd"},firstServer:[o[0]||0,o[1]||0],secondServerIdx:e.secondServerIdx??null,shotPrompt:e.shotPrompt!==void 0?!!e.shotPrompt:!0,flipped:!1,pendingFault:!1,events:[],redoStack:[]}}function Nr(e){const t=e.firstServer[0],a=e.firstServer[1]||0,n=1-a,r=1-t,s=e.secondServerIdx??0,o=1-s;return[[t,a],[r,s],[t,n],[r,o]]}function po(e,t,a,n){const r=["0","15","30","40"];return e<3||t<3?`${r[Math.min(e,3)]}-${r[Math.min(t,3)]}`:e===t?a==="star"&&n>=3?"40-40 ★":"40-40":e>t?"AD-40":"40-AD"}function fo(e,t,a,n,r){const s=e===0?t:a,o=e===0?a:t;return o<3?!1:s<3?!0:n==="golden"?s===3&&o===3:n==="star"&&s===o&&r>=3||o>s}function mo(e,t,a,n){return e<3||t<3||e!==t?!1:a==="golden"||a==="star"&&n>=3}function go(e,t,a,n){return a==="star"&&e>=3&&t>=3&&e===t&&n>=3}function bo(e,t,a,n,r,s,o,i){const l=e.rules,c=1-i,d=i===0?s:o,y=i===0?o:s;if(r)return d>=9&&d-y>=1;if(n){const M=l.tiebreakPoints||7;return d>=M-1&&d-y>=1}const S=a.games[i]+1,h=a.games[c],w=l.gamesPerSet||6;return!(S>=w&&S-h>=2)||d<3?!1:y<3?!0:l.deuceRule==="golden"?d===3&&y===3:l.deuceRule==="star"&&d===y&&t.deuceCount>=3?!0:d>y}function Ee(e){if(Array.isArray(e.manualSets)&&e.manualSets.length||e.manualWinner!==void 0&&e.manualWinner!==null||e.isDraw){const W=(Array.isArray(e.manualSets)?e.manualSets:[]).map(Z=>{const xe=Number(Z[0])||0,me=Number(Z[1])||0,ct=Z[2]!==void 0&&Z[2]!==null&&Z[2]!=="draw"?Number(Z[2]):xe>me?0:me>xe?1:null;return{games:[xe,me],history:[],winner:ct,tbScore:Z[3]||null,isSuperTB:!!Z[4]}}),V=[W.filter(Z=>Z.winner===0).length,W.filter(Z=>Z.winner===1).length],U=!!(e.isDraw||e.manualWinner==="draw"),re=U?null:e.manualWinner!==void 0&&e.manualWinner!==null&&e.manualWinner!=="draw"?Number(e.manualWinner):V[0]>V[1]?0:V[1]>V[0]?1:null,ee=Math.max(0,W.length-1);return{sets:W,curSetIdx:ee,curSet:W[ee]||{games:[0,0],history:[],winner:null,tbScore:null,isSuperTB:!1},setsWon:V,matchWinner:re,isDraw:U,p:[0,0],pointDisplay:["0","0"],srvTeam:0,srvPlayer:0,srvSide:null,srvSideLabel:"",isTB:!1,isSuperTB:!1,isGP:!1,isStar:!1,curDeuceCount:0,curAdvNumber:0,isBP:!1,sp:[!1,!1],mp:[!1,!1],curGamePoints:[],allPoints:[],totalGamesPlayed:W.reduce((Z,xe)=>Z+xe.games[0]+xe.games[1],0),lastTransition:null}}const t=e.rules,a=Nr(e);let n=0;const r=[{games:[0,0],history:[],winner:null,tbScore:null,isSuperTB:!1}];let s=0;const o=[0,0];let i=null,l=[0,0],c=0,d=[],y=0;const S=[];function h(W){if(t.finalSet!=="supertb")return!1;const V=t.totalSets||t.setsToWin*2-1;return V>1&&W===V-1&&o[0]===o[1]}function w(W){if(W.isSuperTB)return!0;const V=t.tiebreakAt;return!V||V<=0?!1:W.games[0]===V&&W.games[1]===V}function C(W,V){if(!W||V===0)return a[n%4];const U=Math.floor((V+1)/2);return a[(n+U)%4]}let M=null;for(let W=0;W<e.events.length&&i===null;W++){const V=e.events[W],U=r[s];U.isSuperTB=h(s);const re=U.isSuperTB,ee=w(U),Z=l[0]+l[1],xe=C(ee,Z),me=xe[0],ct=xe[1];l[0]>=3&&l[1]>=3&&l[0]===l[1]&&!ee&&(l[0]===3?c=1:c++);const Jt=ee?`${l[0]}-${l[1]}`:po(l[0],l[1],t.deuceRule,c),et=!ee&&mo(l[0],l[1],t.deuceRule,c),Je=!ee&&go(l[0],l[1],t.deuceRule,c),We=!ee&&fo(me,l[0],l[1],t.deuceRule,c),dt=!ee&&(We||l[0]>=2&&l[1]>=2),Ce=V.w,tt=[l[0],l[1]];l[Ce]++;const Kt=ee?`${l[0]}-${l[1]}`:po(l[0],l[1],t.deuceRule,c),at={idx:W,setIdx:s,gameIdx:U.history.length,w:Ce,srvTeam:me,srvPlayer:ct,firstServeIn:V.fs!==!1,doubleFault:V.type==="df",shotType:V.type||"pt",subType:V.sub||null,byPlayer:V.by||null,scoreBefore:Jt,scoreAfter:Kt,pBefore:tt,isTB:ee,isSuperTB:re,isGP:et,isStar:Je,isBP:We,isKey:dt};d.push(at),S.push(at);let Te=null;if(ee){const Q=re?10:t.tiebreakPoints||7;l[Ce]>=Q&&l[Ce]-l[1-Ce]>=2&&(Te=Ce)}else(et||l[Ce]>=4&&l[Ce]-l[1-Ce]>=2)&&(Te=Ce);if(M=null,Te!==null){const Q=!ee&&Te!==me;U.games[Te]++;const te=[U.games[0],U.games[1]],se={setIdx:s,gameIdx:U.history.length,srvTeam:me,srvPlayer:ct,winner:Te,isBreak:Q,isTB:ee,isSuperTB:re,tbScore:ee?[l[0],l[1]]:null,gamesAfter:te,points:d};U.history.push(se),y++,n=(n+1)%4;const $e=t.gamesPerSet||6;let ie=null;if(ee?(ie=Te,U.tbScore=[l[0],l[1]]):U.games[Te]>=$e&&U.games[Te]-U.games[1-Te]>=2&&(ie=Te),l=[0,0],c=0,d=[],ie!==null){U.winner=ie,o[ie]++;const ne=t.changeoverRule||"odd",Fe=U.games[0]+U.games[1],Ge=ne==="set"?!0:ne==="odd"?Fe%2===1:!1,Mt=t.totalSets||t.setsToWin*2-1;if(o[ie]>=t.setsToWin||o[0]+o[1]>=Mt)i=o[0]>=o[1]?0:1,M={type:"match",winner:i,setIdx:s};else{const ut=s;s++,r.push({games:[0,0],history:[],winner:null,tbScore:null,isSuperTB:h(s)}),M={type:"set",winner:ie,setIdx:ut,changeover:Ge}}}else{const ne=t.changeoverRule||"odd",Fe=U.games[0]+U.games[1],Ge=y===1&&e.secondServerIdx===null;M={type:"game",winner:Te,wasBreak:Q,changeover:ne==="odd"&&Fe%2===1,needSecondServerPrompt:Ge}}}else if(ee&&(t.changeoverRule||"odd")==="odd"){const Q=l[0]+l[1];Q>0&&Q%6===0&&(M={type:"tb_changeover",tbScore:[l[0],l[1]]})}}const k=r[s];k.isSuperTB=h(s);const m=k.isSuperTB,x=w(k),E=C(x,l[0]+l[1]),T=E[0],A=E[1];let R=c,q=0;!x&&l[0]>=3&&l[1]>=3&&(l[0]===l[1]?R=l[0]-3+1:q=Math.min(l[0],l[1])-3+1);const _=!x&&mo(l[0],l[1],t.deuceRule,R),F=!x&&go(l[0],l[1],t.deuceRule,R),B=!x&&fo(T,l[0],l[1],t.deuceRule,R),p=bo(e,{deuceCount:R},k,x,m,l[0],l[1],0),u=bo(e,{deuceCount:R},k,x,m,l[0],l[1],1),f=p&&o[0]===t.setsToWin-1,$=u&&o[1]===t.setsToWin-1;let P=["0","0"];if(x)P=[String(l[0]),String(l[1])];else{const W=["0","15","30","40"];l[0]<3||l[1]<3?P=[W[Math.min(l[0],3)],W[Math.min(l[1],3)]]:l[0]===l[1]?P=F?["40 ★","40 ★"]:["40","40"]:l[0]>l[1]?P=["AD","40"]:P=["40","AD"]}const L=i!==null?null:(l[0]+l[1])%2===0?"D":"R";return{sets:r,curSetIdx:s,curSet:k,setsWon:o,matchWinner:i,isDraw:!1,p:l,pointDisplay:P,srvTeam:T,srvPlayer:A,srvSide:L,srvSideLabel:L==="D"?"Derecha":L==="R"?"Revés":"",isTB:x,isSuperTB:m,isGP:_,isStar:F,curDeuceCount:R,curAdvNumber:q,isBP:B,sp:[p,u],mp:[f,$],curGamePoints:d,allPoints:S,totalGamesPlayed:y,lastTransition:M}}function cs(e,t="all"){const a=Ee(e),n=t==="all"?null:Number(t),r=a.allPoints.filter(k=>n===null||k.setIdx===n),s=[];a.sets.forEach((k,m)=>{(n===null||m===n)&&k.history.forEach(x=>s.push(x))});const o=[0,1].map(()=>({ptsWon:0,winners:0,ue:0,fe:0,shots:{smash:0,volea:0,bandeja:0,bajada:0,dejada:0,passing:0,globo:0,otro:0},srvPtsWon:0,srvPtsTotal:0,retPtsWon:0,retPtsTotal:0,firstServeIn:0,doubleFaults:0,bpWon:0,bpTotal:0,bpSaved:0,bpFaced:0,gpWon:0,gpTotal:0,gpSrvWon:0,gpSrvTotal:0,gpRetWon:0,gpRetTotal:0,keyWon:0,keyTotal:0,maxPtStreak:0,gamesWon:0,srvGamesWon:0,srvGamesTotal:0,maxGameStreak:0})),i={};for(let k=0;k<2;k++)for(let m=0;m<2;m++)i[`${k}_${m}`]={team:k,playerIdx:m,name:ae(e,k,m),color:e.teams[k].color,winners:0,ue:0,fe:0,shots:{smash:0,volea:0,bandeja:0,bajada:0,dejada:0,passing:0,globo:0,otro:0},srvPtsTotal:0,srvPtsWon:0,firstServeIn:0,doubleFaults:0,srvGamesWon:0,srvGamesTotal:0};!r.length&&e.manualPlayerStats&&Object.entries(e.manualPlayerStats).forEach(([k,m])=>{if(i[k]&&m){const x=i[k].team;i[k].winners=Number(m.w)||0,i[k].ue=Number(m.u)||0,i[k].fe=Number(m.f)||0,i[k].srvPtsTotal=Number(m.st)||0,i[k].srvPtsWon=Number(m.sw)||0,i[k].firstServeIn=Number(m.fs)||0,i[k].doubleFaults=Number(m.df)||0,m.sh&&Object.assign(i[k].shots,m.sh),o[x].winners+=i[k].winners,o[x].ue+=i[k].ue,o[x].fe+=i[k].fe,o[x].srvPtsTotal+=i[k].srvPtsTotal,o[x].srvPtsWon+=i[k].srvPtsWon,o[x].firstServeIn+=i[k].firstServeIn,o[x].doubleFaults+=i[k].doubleFaults}});const l=[0,0],c=[0],d=[];let y=0;r.forEach((k,m)=>{k.setIdx!==y&&m>0&&(d.push(m),y=k.setIdx);const x=k.w,E=1-x;o[x].ptsWon++,l[x]++,l[E]=0,l[x]>o[x].maxPtStreak&&(o[x].maxPtStreak=l[x]),c.push(c[c.length-1]+(x===0?1:-1));const T=k.srvTeam,A=1-T,R=`${T}_${k.srvPlayer}`,q=i[R];if(o[T].srvPtsTotal++,o[A].retPtsTotal++,q&&q.srvPtsTotal++,k.doubleFault?(o[T].doubleFaults++,q&&q.doubleFaults++):k.firstServeIn&&(o[T].firstServeIn++,q&&q.firstServeIn++),x===T?(o[T].srvPtsWon++,q&&q.srvPtsWon++):o[A].retPtsWon++,k.shotType==="winner"){const _=k.byPlayer?k.byPlayer[0]:x,F=k.byPlayer?k.byPlayer[1]:0;o[_].winners++;const B=`${_}_${F}`,p=k.subType&&["smash","volea","bandeja","bajada","dejada","passing","globo"].includes(k.subType)?k.subType:k.subType==="winner"?"otro":k.subType||"otro";o[_].shots[p]=(o[_].shots[p]||0)+1,i[B]&&(i[B].winners++,i[B].shots[p]=(i[B].shots[p]||0)+1)}else if(k.shotType==="ue"){const _=k.byPlayer?k.byPlayer[0]:E,F=k.byPlayer?k.byPlayer[1]:0;o[_].ue++;const B=`${_}_${F}`;i[B]&&i[B].ue++}else if(k.shotType==="fe"){const _=k.byPlayer?k.byPlayer[0]:E,F=k.byPlayer?k.byPlayer[1]:0;o[_].fe++;const B=`${_}_${F}`;i[B]&&i[B].fe++}else k.shotType==="df"&&(o[T].ue++,q&&q.ue++);k.isBP&&(o[A].bpTotal++,o[T].bpFaced++,x===A?o[A].bpWon++:o[T].bpSaved++),k.isGP&&(o[0].gpTotal++,o[1].gpTotal++,o[x].gpWon++,o[T].gpSrvTotal++,o[A].gpRetTotal++,x===T?o[T].gpSrvWon++:o[A].gpRetWon++),k.isKey&&(o[0].keyTotal++,o[1].keyTotal++,o[x].keyWon++)});const S=[0,0];s.forEach(k=>{const m=k.winner,x=1-m;if(o[m].gamesWon++,S[m]++,S[x]=0,S[m]>o[m].maxGameStreak&&(o[m].maxGameStreak=S[m]),!k.isTB){const E=k.srvTeam;o[E].srvGamesTotal++;const T=`${E}_${k.srvPlayer}`;i[T]&&i[T].srvGamesTotal++,m===E&&(o[E].srvGamesWon++,i[T]&&i[T].srvGamesWon++)}});const h=[],w=X(e,0),C=X(e,1),M=o[0].ptsWon+o[1].ptsWon;if(M>0){if(o[0].bpTotal+o[1].bpTotal>0){const A=o[1].bpWon>o[0].bpWon?1:0,R=1-A,q=A===0?w:C,_=R===0?w:C;h.push(`Los breaks marcaron la diferencia: ${q} convirtió ${o[A].bpWon} de ${o[A].bpTotal}, ${_} ${o[R].bpWon} de ${o[R].bpTotal}.`)}const k=o[1].bpSaved>=o[0].bpSaved?1:0;o[k].bpFaced>=2&&o[k].bpSaved>0&&h.push(`${k===0?w:C} salvó ${o[k].bpSaved} de ${o[k].bpFaced} bolas de break.`);const m=Math.abs(o[0].ptsWon-o[1].ptsWon);if(m===0)h.push(`Máxima igualdad: empate exacto a ${o[0].ptsWon} puntos ganados por pareja.`);else if(m<=6)h.push(`Solo ${m} ${m===1?"punto":"puntos"} de diferencia en todo el partido.`);else{const A=o[0].ptsWon>o[1].ptsWon?w:C;h.push(`${A} dominó el global con +${m} puntos de ventaja (${o[0].ptsWon} a ${o[1].ptsWon}).`)}if(o[0].gpTotal>0){const A=o[1].gpWon>=o[0].gpWon?1:0,R=e.rules.deuceRule==="star"?"Star Points (tras 2 ventajas)":"Puntos decisivos con 40-40";h.push(`${R}: ${A===0?w:C} ganó ${o[A].gpWon} de ${o[A].gpTotal}.`)}const x=Object.values(i);x.sort((A,R)=>R.winners-A.winners),x[0]&&x[0].winners>0&&h.push(`${x[0].name} hizo más ganadores que nadie: ${x[0].winners}.`);const E={smash:"smash / remates",volea:"voleas ganadoras",bandeja:"bandejas",bajada:"bajadas de pared",dejada:"dejadas",passing:"passings",globo:"globos ganadores"};x.forEach(A=>{const R=Object.entries(A.shots||{}).filter(([q,_])=>_>=2&&q!=="otro").sort((q,_)=>_[1]-q[1])[0];R&&h.push(`${A.name} se destacó en ataque con ${R[1]} ${E[R[0]]||R[0]}.`)});const T=o[1].maxPtStreak>=o[0].maxPtStreak?1:0;o[T].maxPtStreak>=3&&h.push(`Mejor racha del partido: ${o[T].maxPtStreak} puntos seguidos para ${T===0?w:C}.`)}return{st:a,T:o,P:Object.values(i),pts:r,games:s,momentum:c,setBoundaries:d,insights:h,totalPts:M}}const Aa=1e3,Or=50,_r=32,Oo=10,Wr=6,Fr=1.2,Gr=100;function ia(e){const t=Number(e)||Aa;let a=2.5+(t-Aa)/200;a=Math.max(1,Math.min(7,a));const n=Number(a.toFixed(2)),r=n.toFixed(2);let s="Iniciación",o="#94a3b8",i="🌱";return a>=6?(s="Pro / Élite",o="#ef4444",i="👑"):a>=5?(s="Competición",o="#a855f7",i="🏆"):a>=4?(s="Avanzado",o="#10b981",i="💎"):a>=3?(s="Intermedio",o="#f59e0b",i="⚡"):a>=2&&(s="Intermedio Bajo",o="#38bdf8",i="🔷"),{level:r,levelNum:n,tier:s,color:o,icon:i,elo:Math.round(t)}}function _s(e,t,a="individual"){var o,i,l,c,d,y,S,h,w,C,M,k,m,x;const n=e.mode==="singles"||!((l=(i=(o=e.teams)==null?void 0:o[0])==null?void 0:i.players)!=null&&l[1])&&!((y=(d=(c=e.teams)==null?void 0:c[1])==null?void 0:d.players)!=null&&y[1]);if(a==="pairs"){const E=ae(e,t,0).trim(),T=n?"":ae(e,t,1).trim(),A=n?E:ye(E,T),R=n?E.toUpperCase():en(E,T);return[{name:A,key:R,idx:0,color:((h=(S=e.teams)==null?void 0:S[t])==null?void 0:h.color)||"#d4af37",players:n?[E]:[E,T]}]}if(n){const E=ae(e,t,0).trim();return[{name:E,key:E.toUpperCase(),idx:0,color:((C=(w=e.teams)==null?void 0:w[t])==null?void 0:C.color)||"#d4af37",players:[E]}]}const r=ae(e,t,0).trim(),s=ae(e,t,1).trim();return[{name:r,key:r.toUpperCase(),idx:0,color:((k=(M=e.teams)==null?void 0:M[t])==null?void 0:k.color)||"#d4af37",players:[r]},{name:s,key:s.toUpperCase(),idx:1,color:((x=(m=e.teams)==null?void 0:m[t])==null?void 0:x.color)||"#d4af37",players:[s]}]}function _o(e,t,a,n,r="individual"){const s=!!t.isDraw&&t.matchWinner===null,o=t.matchWinner??0,i=_s(e,0,r),l=_s(e,1,r),c=i.map(R=>a[R.key]??Aa),d=l.map(R=>a[R.key]??Aa),y=c.reduce((R,q)=>R+q,0)/c.length,S=d.reduce((R,q)=>R+q,0)/d.length,h=1/(1+Math.pow(10,(S-y)/400)),w=1-h,C=t.sets.reduce((R,q)=>R+(q.games?q.games[0]:0),0),M=t.sets.reduce((R,q)=>R+(q.games?q.games[1]:0),0),k=Math.abs(C-M),m=k>=Wr,x=m?Fr:1,E=s?.5:o===0?1:0,T=s?.5:o===1?1:0,A=(R,q,_,F)=>R.map((B,p)=>{const u=q[p],$=(n[B.key]||0)<Oo?Or:_r,P=e.isWalkover?0:$*x*(_-F);let L=0;e.isWalkover||(_===1?L=Math.max(1,Math.round(P)):_===0?L=Math.min(-1,Math.round(P)):L=Math.round(P));const j=Math.max(Gr,u+L);return{name:B.name,key:B.key,eloBefore:u,delta:L,eloAfter:j,k:$}});return{matchId:e.id,winner:t.matchWinner,isDraw:s,diffGames:k,isBlowout:m,multiplier:x,pair0:{avgBefore:Math.round(y),expPct:Math.round(h*100),players:A(i,c,E,h)},pair1:{avgBefore:Math.round(S),expPct:Math.round(w*100),players:A(l,d,T,w)}}}function Wo(e=[],t={}){const a=t.entityMode||"individual",n={},r={},s={},o={},i={};return(e||[]).map(c=>({m:c,st:Ee(c)})).filter(({st:c})=>c.matchWinner!==null||c.isDraw).sort((c,d)=>(c.m.createdAt||0)-(d.m.createdAt||0)||String(c.m.id).localeCompare(String(d.m.id))).forEach(({m:c,st:d})=>{const y=_o(c,d,n,r,a);c.isWalkover||[...y.pair0.players,...y.pair1.players].forEach(S=>{n[S.key]=S.eloAfter,r[S.key]=(r[S.key]||0)+1,s[S.key]=S.delta,o[S.key]||(o[S.key]=[]),o[S.key].push({matchId:c.id,delta:S.delta,newElo:S.eloAfter,date:c.createdAt})}),i[c.id]=y}),{playerRatings:n,playerMatchCount:r,playerLastDelta:s,playerHistory:o,matchEloMap:i}}function qr(e,t=null,a={}){if(!e)return null;const n=a.entityMode||"individual",r=t?null:Er(e,a.allMatches||[]),s=t||Wo(r||[],{entityMode:n});if(s.matchEloMap[e.id])return s.matchEloMap[e.id];const o=Ee(e);return _o(e,o,s.playerRatings,s.playerMatchCount,n)}function Pe(e){return(e==null?void 0:e.format)==="proyecto_padel"}function nn(e,t={}){if(!e)return{winPts:Number.isFinite(Number(t.winPts))?Number(t.winPts):3,lossPts:Number.isFinite(Number(t.lossPts))?Number(t.lossPts):1,drawPts:2,setBonusPts:0,gameBonusPts:0};const a=Pe(e);return{winPts:Number.isFinite(Number(e.winPts))?Number(e.winPts):3,lossPts:Number.isFinite(Number(e.lossPts))?Number(e.lossPts):1,drawPts:Number.isFinite(Number(e.drawPts))?Number(e.drawPts):2,setBonusPts:Number.isFinite(Number(e.setBonusPts))?Number(e.setBonusPts):0,gameBonusPts:Number.isFinite(Number(e.gameBonusPts))?Number(e.gameBonusPts):a?1:0}}function Ws(e,t=null,a=!1,n={}){const r=t||nn(e,n);if(Pe(e)||(r.gameBonusPts||0)>0)return a?`+${r.winPts}V / +${r.drawPts??2}E / +${r.lossPts}D · +${r.gameBonusPts}/g`:`ELO Principal · Sec: +${r.winPts}V / +${r.drawPts??2}E / +${r.lossPts}D + ${r.gameBonusPts}/game`;const s=r.setBonusPts?` · +${r.setBonusPts}/set`:"";return a?`+${r.winPts}V / +${r.lossPts}D${s}`:`+${r.winPts}V / +${r.lossPts}D${s} + ELO`}function ks(e,t,a,n){return{name:e,key:t,color:a||"#d4af37",elo:n.playerRatings[t]??Aa,lastDelta:n.playerLastDelta[t]??0,finishedMatches:n.playerMatchCount[t]??0,pts:0,matches:0,wins:0,draws:0,losses:0,setsWon:0,setsLost:0,setsDiff:0,gamesWon:0,gamesLost:0,gamesDiff:0,winners:0,ue:0,fe:0,shots:{smash:0,volea:0,bandeja:0,bajada:0,dejada:0,passing:0,globo:0},srvPtsWon:0,srvPtsTotal:0,firstServeIn:0,doubleFaults:0}}function Ut(e,t={}){const a=t.entityMode||"individual",n=Number.isFinite(Number(t.winPts))?Number(t.winPts):3,r=Number.isFinite(Number(t.lossPts))?Number(t.lossPts):1,s=Number.isFinite(Number(t.drawPts))?Number(t.drawPts):2,o=Number.isFinite(Number(t.setBonusPts))?Number(t.setBonusPts):0,i=Number.isFinite(Number(t.gameBonusPts))?Number(t.gameBonusPts):0,l=!!t.todayOnly,c=t.todayDateKey||Ma(Date.now()),d=Array.isArray(t.seedParticipants)?t.seedParticipants:[],y=t.eloBaseMatches||e,S=Wo(y,{entityMode:a}),h=new Map;d.forEach(k=>{var m,x;if(k)if(a==="pairs"&&k.type==="pair"){const E=(((m=k.players)==null?void 0:m[0])||"").trim(),T=(((x=k.players)==null?void 0:x[1])||"").trim();if(!E&&!T)return;const A=en(E,T),R=ye(E,T);h.has(A)||h.set(A,ks(R,A,k.color,S))}else a==="individual"&&(k.type==="pair"?k.players||[]:[k.name]).forEach(T=>{const A=String(T||"").trim();if(!A)return;const R=A.toUpperCase();h.has(R)||h.set(R,ks(A,R,k.color,S))})});const w=l?(e||[]).filter(k=>Ma(k.createdAt)===c):e||[],C={};w.forEach(k=>{const m=cs(k,"all"),x=m.st,E=x.matchWinner,T=!!x.isDraw&&E===null,A=E!==null||T,R=S.matchEloMap[k.id],q=[0,0],_=[0,0];x.sets.forEach(F=>{F.winner===0?q[0]++:F.winner===1&&q[1]++,F.games&&(_[0]+=Number(F.games[0])||0,_[1]+=Number(F.games[1])||0)}),l&&R&&[...R.pair0.players,...R.pair1.players].forEach(F=>{C[F.key]=(C[F.key]||0)+(F.delta||0)});for(let F=0;F<2;F++){const B=1-F;_s(k,F,a).forEach(u=>{if(!u.key)return;h.has(u.key)||h.set(u.key,ks(u.name,u.key,u.color,S));const f=h.get(u.key);if(f.matches++,A){const P=q[F]*o+_[F]*i;T?(f.draws++,f.pts+=s+P):E===F?(f.wins++,f.pts+=n+P):(f.losses++,f.pts+=r+P)}f.setsWon+=q[F],f.setsLost+=q[B],f.setsDiff=f.setsWon-f.setsLost,f.gamesWon+=_[F],f.gamesLost+=_[B],f.gamesDiff=f.gamesWon-f.gamesLost,(a==="pairs"?m.P.filter(P=>P.team===F):m.P.filter(P=>P.team===F&&P.playerIdx===u.idx)).forEach(P=>{f.winners+=P.winners,f.ue+=P.ue,f.fe+=P.fe,P.shots&&Object.entries(P.shots).forEach(([L,j])=>{f.shots[L]=(f.shots[L]||0)+j}),f.srvPtsWon+=P.srvPtsWon,f.srvPtsTotal+=P.srvPtsTotal,f.firstServeIn+=P.firstServeIn,f.doubleFaults+=P.doubleFaults})})}});const M=Array.from(h.values());return l&&M.forEach(k=>{k.lastDelta=C[k.key]??0}),M}function on(e,t,a,n=""){const r=e.kind==="league"?"Liga":"Torneo",s=t==="pairs"?"Parejas":"Individual";return Pe(e)?`PRO PÁDEL${n} · ${s} · ${Ws(e,a,!1)}`:`${r}${n} · ${s} · ${Ws(e,a,!1)}`}function Ft(e,t="pts",a={}){const n=[...e||[]];return t==="pts"?a.tiebreakMode==="games"?n.sort((r,s)=>(s.pts||0)-(r.pts||0)||(s.gamesWon||0)-(r.gamesWon||0)||(s.gamesDiff||0)-(r.gamesDiff||0)||(s.elo||0)-(r.elo||0)||s.wins-r.wins):n.sort((r,s)=>(s.pts||0)-(r.pts||0)||(s.setsDiff||0)-(r.setsDiff||0)||(s.gamesDiff||0)-(r.gamesDiff||0)||s.wins-r.wins||s.elo-r.elo):t==="elo"?n.sort((r,s)=>(s.elo||0)-(r.elo||0)||(s.pts||0)-(r.pts||0)||(s.gamesWon||0)-(r.gamesWon||0)||(s.gamesDiff||0)-(r.gamesDiff||0)||s.wins-r.wins||s.matches-r.matches):t==="wins"?n.sort((r,s)=>s.wins-r.wins||(s.pts||0)-(r.pts||0)||s.elo-r.elo||s.matches-r.matches):t==="matches"&&n.sort((r,s)=>s.matches-r.matches||s.wins-r.wins||(s.pts||0)-(r.pts||0)||s.elo-r.elo),n}function na(e,t="pts",a={}){let n=1;for(let r=0;r<e.length;r++){if(r>0){const s=e[r-1],o=e[r];let i=!1;t==="pts"?i=a.tiebreakMode==="games"?(o.pts||0)===(s.pts||0)&&(o.gamesWon||0)===(s.gamesWon||0)&&(o.gamesDiff||0)===(s.gamesDiff||0)&&o.elo===s.elo:(o.pts||0)===(s.pts||0)&&(o.setsDiff||0)===(s.setsDiff||0)&&(o.gamesDiff||0)===(s.gamesDiff||0)&&o.wins===s.wins:t==="elo"?i=o.elo===s.elo&&(o.pts||0)===(s.pts||0)&&(o.gamesWon||0)===(s.gamesWon||0)&&(o.gamesDiff||0)===(s.gamesDiff||0):t==="wins"?i=o.wins===s.wins&&o.elo===s.elo:t==="matches"&&(i=o.matches===s.matches&&o.wins===s.wins),i||n++}e[r].rank=n}return e}let ws=null;function D(e){if(typeof document>"u")return;let t=document.getElementById("live-toast");t&&t.remove(),t=document.createElement("div"),t.id="live-toast",t.className="toast",t.textContent=e,document.body.appendChild(t),ws&&clearTimeout(ws),ws=setTimeout(()=>{t&&t.parentNode&&t.remove()},2400)}const Qe=()=>{},z={render:Qe,navigate:Qe,updateWakeLock:Qe,publishLiveMatchState:Qe,syncCompetitionForMatch:Qe,publishCompMatch:Qe,renderHomeSystemBanners:()=>"",afterRenderQR:Qe,ensureCompLiveWatcherForCurrentView:Qe,refreshPlayerCardPreview:Qe,openPlayerCardFor:Qe,loadPlayerCardLogosAndCards:()=>({logos:{logo1:null,logo2:null,logo2Disabled:!1,subTitle:""},cards:[],setLogos:async()=>{},saveCard:async()=>!1}),pollLiveChannelOnce:async()=>{},pollCompChannelOnce:async()=>({ok:!1,changed:!1,count:0}),resolveCompetitionFixtures:Qe},wt="padel_se_active_v1",Pt="padel_se_hist_v1",ke="padel_se_prefs_v1",ve="padel_se_preset_v1",ds="padel_se_comps_v1",rn="padel_se_comp_outbox_v1",Fs="padel_se_dev_id_v1",Fo="padel_se_meta_ts_v1",Vr="padel_se_backup_db_v1",la="kv",us=new Set([wt,Pt,ke,ve,ds,rn,Fs,"padel_ranking_vault","padel_shared_ranking"]);try{typeof localStorage<"u"&&["padel_sb_active_v1","padel_sb_hist_v1","padel_sb_prefs_v1","padel_sb_preset_v1","padel_sb_seeded_v1"].forEach(e=>localStorage.removeItem(e))}catch{}const Go={theme:"dark",sound:!0,voice:!1,vibrate:!0,shotPrompt:!0,changeoverAlerts:!0,changeoverTimer:90,wakeLock:!0,rankingName:"Mi Ranking",rankingId:"",dailyWinPts:3,dailyLossPts:1,syncServerUrl:Vt,backupIncludeCards:!0,lastBackupAt:0,changesSinceBackup:0,backupPromptDismissedAt:0},ln={mode:"doubles",matchContext:"daily",compId:"",fixtureId:"",stageLabel:"",teams:[{players:["",""],color:"#d4af37"},{players:["",""],color:"#2f8cff"}],totalSets:3,setsToWin:2,gamesPerSet:6,deuceRule:"golden",tiebreakAt:6,tiebreakPoints:7,finalSet:"normal",changeoverRule:"odd",firstServer:[0,0],secondServerIdx:null,shotPrompt:!0};function lt(){var e;return Da(typeof b<"u"?(e=b.prefs)==null?void 0:e.syncServerUrl:Vt)}let Xt=null;const za=new Map;let Ps=!1;function qo(){return typeof indexedDB>"u"?Promise.resolve(null):Xt||(Xt=new Promise(e=>{try{const t=indexedDB.open(Vr,1);t.onupgradeneeded=()=>{const a=t.result;a.objectStoreNames.contains(la)||a.createObjectStore(la,{keyPath:"key"})},t.onsuccess=()=>e(t.result),t.onerror=()=>{Xt=null,e(null)}}catch{Xt=null,e(null)}}),Xt)}function zr(){Ps||(Ps=!0,setTimeout(async()=>{if(Ps=!1,!za.size)return;const e=Array.from(za.entries());za.clear();const t=await qo();if(t)try{const n=t.transaction(la,"readwrite").objectStore(la);for(const[r,s]of e)s===null?n.delete(r):n.put({key:r,value:s.value,ts:s.ts})}catch{}},80))}function cn(e,t,a){!us.has(e)||typeof indexedDB>"u"||(za.set(e,t===void 0?null:{value:Ie(t),ts:a}),zr())}function Vo(){try{const e=localStorage.getItem(Fo);return e?JSON.parse(e):{}}catch{return{}}}function dn(e,t){try{const a=Vo();t===null?delete a[e]:a[e]=t,localStorage.setItem(Fo,JSON.stringify(a))}catch{}}function Ze(e,t){try{const a=localStorage.getItem(e);if(!a)return Ie(t);const n=JSON.parse(a);return n==null?Ie(t):t&&typeof t=="object"&&!Array.isArray(t)?Object.assign({},t,n):n}catch{return Ie(t)}}function Gs(e){try{const t=localStorage.getItem(e),a=t?JSON.parse(t):[];return Array.isArray(a)?a:[]}catch{return[]}}function J(e,t){const a=Date.now();cn(e,t,a);try{localStorage.setItem(e,JSON.stringify(t)),us.has(e)&&dn(e,a)}catch(n){console.warn("Storage error",n),typeof b<"u"&&!b.ui.lsQuotaWarned&&(b.ui.lsQuotaWarned=!0,D("⚠️ Memoria rápida llena · Respaldado en base interna; descargá un Backup JSON"))}}function zo(e){cn(e,void 0,Date.now());try{localStorage.removeItem(e),us.has(e)&&dn(e,null)}catch{}}function Uo(){const e="23456789ABCDEFGHJKLMNPQRSTUVWXYZ";let t="";for(let a=0;a<4;a++)t+=e.charAt(Math.floor(Math.random()*e.length));return"RK-"+t}function ca(e){if(e){for(let t=0;t<2;t++)if(!(!e[t]||!e[t].players))for(let a=0;a<2;a++){const n=e[t].players[a];/^jugador\s*[1-4]$/i.test((n==null?void 0:n.trim())||"")&&(e[t].players[a]=a===0?`DRIVE ${t+1}`:`REVÉS ${t+1}`)}}}const Ht=Ze(ke,Go);Ht.rankingId||(Ht.rankingId=Uo());Ht.rankingName||(Ht.rankingName="Mi Ranking");Ht.syncServerUrl=Da(Ht.syncServerUrl);const ot=Ze(ve,ln);ot.totalSets||(ot.totalSets=ot.setsToWin?ot.setsToWin*2-1:3);ot.setsToWin=Math.floor(ot.totalSets/2)+1;ot&&ot.teams&&ca(ot.teams);const Ua=Ze(wt,null);Ua&&Ua.teams&&ca(Ua.teams);const Ur=typeof window<"u"&&(window.matchMedia&&window.matchMedia("(display-mode: standalone)").matches||!!navigator.standalone),Hr={route:"home",qrModalOpen:!1,obsModalOpen:!1,obsSelectedPos:"tl",statsId:null,sharedMatch:null,sharedRanking:Ze("padel_shared_ranking",null),playerRankingView:"local",playerScope:"daily",dailyTimeFilter:"all",playerEntityMode:"individual",selectedLeagueId:null,selectedTournId:null,selectedGroupFilter:"all",playerSort:"pts",playerSortScope:null,compFilter:"all",compId:null,compTab:"standings",compModal:null,compFormState:null,quickScoreFixtureId:null,quickScoreState:null,compSyncConnected:{},compLastSyncAt:{},liveId:null,liveMatch:null,liveConnected:!1,statsSetFilter:"all",histQuery:"",histFilter:"all",shotSheet:null,menuOpen:!1,editNamesOpen:!1,secondSrvPrompt:!1,changeoverOverlay:null,setSummaryOverlay:null,matchEndDismissed:!1,voiceListening:!1,playerCardReturnRoute:"home",playerCardDraft:null,playerCardDraftDirty:!1,playerCardTouchDrag:!1,playerCardAiBusy:!1,playerCardAiStatus:"",playerCardAiText:"",isOnline:typeof navigator<"u"?navigator.onLine!==!1:!0,pwaInstallPrompt:null,pwaInstalled:Ur,swStatus:typeof navigator<"u"&&"serviceWorker"in navigator&&typeof location<"u"&&location.protocol!=="file:"?"registering":"unsupported",swUpdateReady:!1,swRegistration:null,storagePersisted:null,storageUsageBytes:null,storageQuotaBytes:null,lsQuotaWarned:!1},b={prefs:Ht,preset:ot,activeMatch:Ua,historyList:Gs(Pt),competitionsList:Gs(ds),ui:Hr};J(ke,b.prefs);function ce(){J(ds,b.competitionsList)}function Ho(e=1){b.prefs.changesSinceBackup=(Number(b.prefs.changesSinceBackup)||0)+e,J(ke,b.prefs)}function K(e){return e&&b.competitionsList.find(t=>t.id===e)||null}function Xe(e,t=!1){if(!e)return[];const a=b.historyList.filter(n=>He(n)===e.id);return t&&b.activeMatch&&He(b.activeMatch)===e.id&&(a.some(n=>n.id===b.activeMatch.id)||a.unshift(b.activeMatch)),a}function xt(){try{let e=localStorage.getItem(Fs);return e||(e="dev_"+Math.random().toString(36).slice(2,8),localStorage.setItem(Fs,e)),e}catch{return b.prefs.rankingId||"dev_local"}}function rt(e){return nn(e,{winPts:b.prefs.dailyWinPts,lossPts:b.prefs.dailyLossPts})}function un(e,t=null,a=!1){return Ws(e,t,a,{winPts:b.prefs.dailyWinPts,lossPts:b.prefs.dailyLossPts})}function pn(e,t=null,a={}){return qr(e,t,{entityMode:a.entityMode,allMatches:b.historyList})}async function Jr(){const e=await qo();if(e)try{const a=e.transaction(la,"readonly").objectStore(la).getAll(),n=await new Promise(l=>{a.onsuccess=()=>l(Array.isArray(a.result)?a.result:[]),a.onerror=()=>l([])}),r=new Map(n.map(l=>[l.key,l])),s=Vo();let o=!1;const i=(l,c)=>{var d;l===ke&&c&&typeof c=="object"?(b.prefs=Object.assign({},Go,c),b.prefs.syncServerUrl=Da(b.prefs.syncServerUrl)):l===ve&&c&&typeof c=="object"?(b.preset=Object.assign({},ln,c),ca(b.preset.teams)):l===wt?(b.activeMatch=c||null,(d=b.activeMatch)!=null&&d.teams&&ca(b.activeMatch.teams)):l===Pt&&Array.isArray(c)?b.historyList=c:l===ds&&Array.isArray(c)?b.competitionsList=c:l==="padel_shared_ranking"&&(b.ui.sharedRanking=c||null);try{localStorage.setItem(l,JSON.stringify(c)),dn(l,Date.now())}catch{}};for(const l of us){let c=null;try{c=localStorage.getItem(l)}catch{}const d=r.get(l);if(d&&(c===null||(Number(d.ts)||0)>(Number(s[l])||0)))i(l,d.value),o=!0;else if(!d&&c!==null)try{cn(l,JSON.parse(c),Number(s[l])||Date.now())}catch{}}o&&z.render()}catch{}}async function Jo(e=!1){if(!(typeof navigator>"u"||!navigator.storage))try{if(typeof navigator.storage.persisted=="function"){let t=await navigator.storage.persisted();!t&&e&&typeof navigator.storage.persist=="function"&&(t=await navigator.storage.persist()),b.ui.storagePersisted=!!t}if(typeof navigator.storage.estimate=="function"){const t=await navigator.storage.estimate();b.ui.storageUsageBytes=Number(t==null?void 0:t.usage)||0,b.ui.storageQuotaBytes=Number(t==null?void 0:t.quota)||0}b.ui.route==="settings"&&z.render()}catch{}}const ts=typeof window<"u"&&"BroadcastChannel"in window?new BroadcastChannel("padel_sb_channel"):null;ts&&(ts.onmessage=e=>{e.data&&e.data.type==="sync"&&(b.activeMatch=e.data.match,(b.ui.route==="display"||b.ui.route==="board"||b.ui.route==="obs"||b.ui.route==="stats"&&b.ui.statsId==="active")&&z.render())});typeof window<"u"&&window.addEventListener("storage",e=>{e.key===wt&&(b.activeMatch=Ze(wt,null),(b.ui.route==="display"||b.ui.route==="board"||b.ui.route==="obs")&&z.render())});function Me(){if(b.activeMatch){J(wt,b.activeMatch);const e=b.historyList.findIndex(t=>t.id===b.activeMatch.id);e>=0&&(b.historyList[e]=Ie(b.activeMatch),J(Pt,b.historyList),z.syncCompetitionForMatch(b.activeMatch)),z.publishLiveMatchState(b.activeMatch)}else zo(wt);ts&&ts.postMessage({type:"sync",match:b.activeMatch})}function ht(e,t={}){var s;if(!e)return;const a=b.historyList.findIndex(o=>o.id===e.id),n=a<0||((s=b.historyList[a])==null?void 0:s.status)!=="finished"&&e.status==="finished",r=Ie(e);a>=0?b.historyList[a]=r:b.historyList.unshift(r),J(Pt,b.historyList),n&&!t.skipBackupCount&&e.status==="finished"&&Ho(1),z.syncCompetitionForMatch(r,t)}function La(){const e=new Set;return b.historyList.forEach(t=>t.teams.forEach(a=>a.players.forEach(n=>{n&&n.trim()&&e.add(n.trim())}))),b.competitionsList.forEach(t=>(t.participants||[]).forEach(a=>{a.type==="pair"?(a.players||[]).forEach(n=>{n&&n.trim()&&e.add(n.trim())}):a.name&&a.name.trim()&&e.add(a.name.trim())})),Array.from(e).sort((t,a)=>t.localeCompare(a,"es"))}function qs(e){const t=b.activeMatch;!t||t.status!=="playing"||Ee(t).matchWinner!==null||(t.shotPrompt?(b.ui.shotSheet={team:e},z.render()):he(e,"pt",null))}function he(e,t="pt",a=null,n=null){const r=b.activeMatch;if(!r||Ee(r).matchWinner!==null)return;const o=!r.pendingFault;r.pendingFault=!1,r.redoStack=[],r.events.push({w:e,type:t,by:a,fs:o,sub:n||null}),b.ui.shotSheet=null;const i=Ee(r),l=i.lastTransition;if(l){if(l.type==="match")r.status="finished",b.ui.matchEndDismissed=!1,ht(r),Re("match"),Ue([100,60,100,60,220]);else if(l.type==="set"){Re("set"),Ue([90,50,140]);const c=l.setIdx??0,d=i.sets[c].games;l.changeover&&(r.flipped=!r.flipped),b.prefs.changeoverAlerts&&(b.ui.changeoverOverlay={title:l.changeover?`FIN DEL SET ${c+1} · CAMBIO DE LADO`:`FIN DEL SET ${c+1}`,sub:`${X(r,l.winner??0)} ganó el set ${d[0]}-${d[1]}`,secondsLeft:120})}else if(l.type==="game"){if(Re("game"),Ue([80,50,80]),l.changeover&&(r.flipped=!r.flipped,b.prefs.changeoverAlerts)){const c=i.curSet.games;b.ui.changeoverOverlay={title:"CAMBIO DE LADO",sub:`Marcador del set: ${c[0]} - ${c[1]}`,secondsLeft:Number(b.prefs.changeoverTimer)||90}}l.needSecondServerPrompt&&(b.ui.secondSrvPrompt=!0)}else if(l.type==="tb_changeover"&&(Re("game"),Ue([70,50,70]),r.flipped=!r.flipped,b.prefs.changeoverAlerts)){const c=l.tbScore||[0,0];b.ui.changeoverOverlay={title:"CAMBIO DE LADO (TIE-BREAK)",sub:`Tie-break: ${c[0]} - ${c[1]}`,secondsLeft:20}}}else Re("point"),Ue(35);Me(),z.render(),Qo(r,i),requestAnimationFrame(()=>{const c=document.querySelector(`.half[data-team="${e}"]`);c&&(c.classList.add("flash"),setTimeout(()=>c.classList.remove("flash"),550))})}function fn(){const e=b.activeMatch;if(!e||e.status!=="playing")return;const t=Ee(e);if(t.matchWinner===null)if(!e.pendingFault)e.pendingFault=!0,Re("fault"),Ue(45),D(`2º saque · ${ae(e,t.srvTeam,t.srvPlayer)}`),Me(),z.render();else{const a=t.srvTeam,n=t.srvPlayer;e.pendingFault=!1,D(`Doble falta de ${ae(e,a,n)}`),he(1-a,"df",[a,n])}}function as(){const e=b.activeMatch;if(!e)return;if(e.pendingFault){e.pendingFault=!1,Re("undo"),Me(),z.render();return}if(!e.events.length)return;const t=e.events.pop();e.redoStack=e.redoStack||[],e.redoStack.push(t),e.status==="finished"&&(e.status="playing"),b.ui.changeoverOverlay=null,b.ui.secondSrvPrompt=!1,Re("undo"),Ue(30),Me(),z.render()}function mn(){const e=b.activeMatch;if(!e||!e.redoStack||!e.redoStack.length)return;const t=e.redoStack.pop();e.events.push(t),Ee(e).matchWinner!==null&&(e.status="finished",ht(e)),Re("point"),Me(),z.render()}function gn(){const e=b.activeMatch;e&&(e.flipped=!e.flipped,Me(),z.render())}function Kr(){const e=b.activeMatch;if(!e)return;const t=Ee(e);e.status=t.matchWinner!==null?"finished":"abandoned",ht(e),z.publishLiveMatchState(e,!0);const a=e.id;b.activeMatch=null,Me(),b.ui.menuOpen=!1,b.ui.statsId=a,b.ui.statsSetFilter="all",z.navigate("stats"),D("Partido guardado en el historial")}function Ko(){const e=b.preset,t=e.matchContext||"daily",a=(t==="league"||t==="tournament")&&e.compId?K(e.compId):null;b.activeMatch=jr(e,a),b.preset.fixtureId="",J(ve,b.preset),Me(),b.ui.shotSheet=null,b.ui.changeoverOverlay=null,b.ui.secondSrvPrompt=!1,b.ui.matchEndDismissed=!1,z.navigate("board")}function Qr(){let e=Date.now();setInterval(()=>{const t=Date.now(),a=Math.min(2500,Math.max(0,t-e));e=t;const{ui:n,activeMatch:r}=b;if(r&&r.status==="playing"&&(n.route==="board"||n.route==="obs"||n.route==="display")&&!n.changeoverOverlay){r.durationMs=(r.durationMs||0)+a;const s=document.getElementById("sb-clock-val");s&&(s.textContent=Wt(r.durationMs))}else if((n.route==="live"||n.route==="obs")&&n.liveMatch&&n.liveMatch.status==="playing"){n.liveMatch.durationMs=(n.liveMatch.durationMs||0)+a;const s=document.getElementById("sb-clock-val");s&&(s.textContent=Wt(n.liveMatch.durationMs))}if(n.changeoverOverlay&&n.changeoverOverlay.secondsLeft>0){n.changeoverOverlay.secondsLeft=Math.max(0,n.changeoverOverlay.secondsLeft-1);const s=document.getElementById("co-countdown");s&&(s.textContent=`${n.changeoverOverlay.secondsLeft}s`),n.changeoverOverlay.secondsLeft===0&&(Re("game"),Ue([120,80,120]))}},1e3)}let ft=null,Lt=null,Ne=null,ss=!1,ta=!1,Gt=null,mt="",ho=0,vo="";function Re(e){if(b.prefs.sound)try{const t=window.AudioContext||window.webkitAudioContext;ft||(ft=new t),ft.state==="suspended"&&ft.resume();const a=ft.currentTime;({point:[[880,0,.06]],undo:[[520,0,.05],[380,.06,.07]],fault:[[320,0,.11]],game:[[660,0,.08],[880,.09,.14]],set:[[587,0,.09],[784,.1,.09],[1046,.2,.18]],match:[[523,0,.1],[659,.11,.1],[784,.22,.1],[1046,.33,.26]]}[e]||[[880,0,.06]]).forEach(([s,o,i])=>{if(!ft)return;const l=ft.createOscillator(),c=ft.createGain();l.type="triangle",l.frequency.setValueAtTime(s,a+o),c.gain.setValueAtTime(.18,a+o),c.gain.exponentialRampToValueAtTime(.001,a+o+i),l.connect(c),c.connect(ft.destination),l.start(a+o),l.stop(a+o+i+.01)})}catch{}}function Ue(e){if(b.prefs.vibrate&&navigator.vibrate)try{navigator.vibrate(e)}catch{}}function Qo(e,t){if(!(!b.prefs.voice||!("speechSynthesis"in window)))try{window.speechSynthesis.cancel();let a="";if(t.lastTransition){const n=t.lastTransition,r=X(e,n.winner??0).replace(/·/g," y ");if(n.type==="match")a=`Juego, set y partido para ${r}.`;else if(n.type==="set"){const s=t.sets[n.setIdx??0];a=`Juego y set ${r}, ${s.games[0]} a ${s.games[1]}.${n.changeover?" Cambio de lado.":""}`}else if(n.type==="game"){const s=t.curSet.games;a=`${n.wasBreak?"Break y juego":"Juego"} para ${r}. ${s[0]} a ${s[1]}.${n.changeover?" Cambio de lado.":""}`}else n.type==="tb_changeover"&&(a=`${t.p[0]} a ${t.p[1]}. Cambio de lado.`)}else if(t.isTB){const n=t.srvTeam,r=t.p[n],s=t.p[1-n];a=r===s?`${r} iguales`:`${r} a ${s}, saca ${ae(e,t.srvTeam,t.srvPlayer)}`}else{const n=t.srvTeam,r=t.pointDisplay[n],s=t.pointDisplay[1-n],o=i=>({0:"cero",15:"quince",30:"treinta",40:"cuarenta","40 ★":"cuarenta"})[i]||i;t.isStar?a="Cuarenta iguales. Star Point, punto decisivo.":t.isGP?a="Cuarenta iguales. Punto de oro.":r.startsWith("40")&&s.startsWith("40")?a=e.rules.deuceRule==="star"&&t.curDeuceCount===2?"Iguales. Segunda ventaja.":"Iguales.":r==="AD"?a=`${e.rules.deuceRule==="star"&&t.curAdvNumber===2?"Segunda ventaja":"Ventaja"} al saque, ${X(e,n).replace(/·/g," y ")}.`:s==="AD"?a=`${e.rules.deuceRule==="star"&&t.curAdvNumber===2?"Segunda ventaja":"Ventaja"} al resto, ${X(e,1-n).replace(/·/g," y ")}.`:r===s?a=`${o(r)} iguales.`:a=`${o(r)}, ${o(s)}.`,t.mp[0]||t.mp[1]?a+=" Punto de partido.":t.sp[0]||t.sp[1]?a+=" Punto de set.":t.isBP&&!t.isGP&&(a+=" Bola de break.")}if(a){ss=!0;const n=new SpeechSynthesisUtterance(a);n.lang="es-ES",n.rate=1.05;const r=()=>{setTimeout(()=>{ss=!1},280)};n.onend=r,n.onerror=r,setTimeout(r,2800),window.speechSynthesis.speak(n)}}catch{}}async function Na(){const{ui:e,activeMatch:t,prefs:a}=b,n=(e.route==="board"||e.route==="display")&&t&&t.status==="playing",r=e.route==="live"&&e.liveMatch&&e.liveMatch.status==="playing",s=a.wakeLock&&(n||r);if("wakeLock"in navigator)try{s&&!Lt?(Lt=await navigator.wakeLock.request("screen"),Lt.addEventListener("release",()=>{Lt=null})):!s&&Lt&&(await Lt.release(),Lt=null)}catch{}}function Yr(){return/Instagram|FBAN|FBAV|Line\/|MicroMessenger/i.test(navigator.userAgent||"")}function xs(e){const t=$t(e);if(!t)return;const a=Date.now();t===vo&&a-ho<1400||(vo=t,ho=a,Gt&&clearTimeout(Gt),mt="",ei(e))}function Xr(){const e=window.SpeechRecognition||window.webkitSpeechRecognition;if(!(!e||!b.ui.voiceListening||b.ui.route!=="board"))try{Ne||(Ne=new e,Ne.lang="es-AR",Ne.continuous=!0,Ne.interimResults=!0,Ne.maxAlternatives=3,Ne.onresult=t=>{if(!b.activeMatch||b.ui.route!=="board"||ss)return;const a=t.results[t.results.length-1];if(!a)return;const n=Array.from(a).map(r=>r.transcript).join(" ").trim();n&&(a.isFinal?xs(n):(mt=n,Gt&&clearTimeout(Gt),Gt=setTimeout(()=>{if(mt){const r=mt;mt="",xs(r)}},700)))},Ne.onerror=t=>{const a=t&&t.error?t.error:"";(a==="not-allowed"||a==="service-not-allowed")&&(ta=!0,b.ui.voiceListening=!1,z.render(),D("Permiso de micrófono bloqueado en el navegador"))},Ne.onend=()=>{if(mt&&!ss){const t=mt;mt="",xs(t)}b.ui.voiceListening&&!ta&&b.ui.route==="board"?setTimeout(()=>{if(b.ui.voiceListening&&!ta&&b.ui.route==="board")try{Ne.start()}catch{}},350):(!b.ui.voiceListening||ta)&&(b.ui.voiceListening=!1,z.render())});try{Ne.start()}catch{}}catch{b.ui.voiceListening=!1,z.render(),D("No se pudo iniciar el micrófono")}}function Zr(){if(!(window.SpeechRecognition||window.webkitSpeechRecognition)){D("Tu navegador no soporta control por voz");return}if(b.ui.voiceListening){if(b.ui.voiceListening=!1,ta=!1,Gt&&clearTimeout(Gt),mt="",Ne)try{Ne.stop()}catch{}D("Control por voz desactivado"),z.render();return}Yr()&&/Android/i.test(navigator.userAgent||"")&&D('Tip: tocá ••• → "Abrir en Chrome" para mejor reconocimiento de voz'),ta=!1,b.ui.voiceListening=!0,z.render(),D("🎤 Micrófono activo"),Xr()}function $t(e){return String(e||"").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").trim()}function Rt(e,t){const a=$t(e);if(!a)return null;if(/\bdrive\s*(2|dos)\b/.test(a))return{team:1,playerIdx:0,name:ae(t,1,0)};if(/\breves\s*(2|dos)\b/.test(a))return{team:1,playerIdx:1,name:ae(t,1,1)};if(/\bdrive\s*(1|uno)?\b/.test(a))return{team:0,playerIdx:0,name:ae(t,0,0)};if(/\breves\s*(1|uno)?\b/.test(a))return{team:0,playerIdx:1,name:ae(t,0,1)};if(/\bjugador\s*(1|uno)\b/.test(a))return{team:0,playerIdx:0,name:ae(t,0,0)};if(/\bjugador\s*(2|dos)\b/.test(a))return{team:0,playerIdx:1,name:ae(t,0,1)};if(/\bjugador\s*(3|tres)\b/.test(a))return{team:1,playerIdx:0,name:ae(t,1,0)};if(/\bjugador\s*(4|cuatro)\b/.test(a))return{team:1,playerIdx:1,name:ae(t,1,1)};const n=a.split(/\s+/);for(let r=0;r<2;r++)for(let s=0;s<2;s++){const o=t.teams[r].players[s]||"",i=$t(o);if(!i)continue;if(a.includes(i))return{team:r,playerIdx:s,name:ae(t,r,s)};const l=i.split(/\s+/).filter(c=>c.length>=3&&c!=="jugador");for(const c of l)if(n.includes(c)||a.includes(c))return{team:r,playerIdx:s,name:ae(t,r,s)}}for(let r=0;r<2;r++)for(let s=0;s<2;s++){const o=t.teams[r].players[s]||"",i=$t(o).split(/\s+/)[0]||"";if(i.length>=4&&i!=="jugador"){const l=i.slice(0,4);if(n.some(c=>c.startsWith(l)))return{team:r,playerIdx:s,name:ae(t,r,s)}}}return null}function Cs(e,t){var i,l;const a=$t(e),n=$t(((i=ra.find(c=>c.c===t.teams[0].color))==null?void 0:i.n)||"dorado"),r=$t(((l=ra.find(c=>c.c===t.teams[1].color))==null?void 0:l.n)||"azul"),s=t.teams[0].color==="#d4af37"&&(a.includes("oro")||a.includes("amarillo")),o=t.teams[1].color==="#d4af37"&&(a.includes("oro")||a.includes("amarillo"));return a.includes(n)||s||a.includes("pareja 1")||a.includes("pareja uno")||a.includes("equipo 1")||a.includes("equipo uno")||a.includes("izquierda")||a.includes("arriba")||a.includes("nosotros")?0:a.includes(r)||o||a.includes("pareja 2")||a.includes("pareja dos")||a.includes("equipo 2")||a.includes("equipo dos")||a.includes("derecha")||a.includes("abajo")||a.includes("ellos")?1:null}function Ts(e,t){const a=b.activeMatch;if(!a)return;const r=Ee(a).totalGamesPlayed%4;if(r%2===0){const s=r===0?t:1-t;a.firstServer=[e,s]}else{const s=a.firstServer?a.firstServer[1]:0;a.firstServer=[1-e,s];const o=r===1?t:1-t;a.secondServerIdx=o}b.ui.secondSrvPrompt=!1,Me(),z.render(),D(`🎤 Al saque: ${ae(a,e,t)}`)}function ei(e){const t=b.activeMatch;if(!t)return;const a=$t(e);if(!a)return;const{ui:n}=b;if(a.includes("deshacer")||a.includes("atras")||a.includes("corregir")){as(),D("🎤 Punto deshecho");return}if(a.includes("rehacer")){mn(),D("🎤 Punto rehecho");return}if((a.includes("cancelar")||a.includes("cerrar"))&&(n.shotSheet||n.menuOpen||n.changeoverOverlay)){n.shotSheet=null,n.menuOpen=!1,n.changeoverOverlay=null,z.render();return}if(n.changeoverOverlay&&(a.includes("continuar")||a.includes("reanudar")||a.includes("listo"))){n.changeoverOverlay=null,z.render();return}if(a.includes("cambio de lado")||a.includes("cambiar de lado")||a.includes("cambiar lado")||a==="lado"||a==="lados"){gn(),D("🎤 Lados cambiados");return}const r=Ee(t);if(a.includes("doble falta")){t.pendingFault=!1,D(`🎤 Doble falta de ${ae(t,r.srvTeam,r.srvPlayer)}`),he(1-r.srvTeam,"df",[r.srvTeam,r.srvPlayer]);return}if(a.includes("falta")||a.includes("segundo saque")){fn();return}const s=/\b(saca|saque|sirve|sacador|servir)\b/.test(a);if(n.secondSrvPrompt||s){const h=Rt(a,t);if(n.secondSrvPrompt){const C=1-t.firstServer[0];if(h&&h.team===C){t.secondServerIdx=h.playerIdx,n.secondSrvPrompt=!1,Me(),z.render(),D(`🎤 Al saque: ${h.name}`);return}if(h){Ts(h.team,h.playerIdx);return}if(a.includes("uno")||a.includes("primer")){t.secondServerIdx=0,n.secondSrvPrompt=!1,Me(),z.render(),D(`🎤 Al saque: ${ae(t,C,0)}`);return}if(a.includes("dos")||a.includes("segund")){t.secondServerIdx=1,n.secondSrvPrompt=!1,Me(),z.render(),D(`🎤 Al saque: ${ae(t,C,1)}`);return}return}if(h){if((a.includes("siguiente")||a.includes("proximo")||a.includes("despues"))&&h.team===1-t.firstServer[0]&&r.totalGamesPlayed===0){t.secondServerIdx=h.playerIdx,Me(),z.render(),D(`🎤 Próximo saque (${X(t,h.team)}): ${h.name}`);return}Ts(h.team,h.playerIdx);return}const w=1-r.srvPlayer;Ts(r.srvTeam,w);return}const o=a.includes("no forzado")||a.includes("error no")||a.includes("fallo")||a.includes("afuera")||a.includes("a la red")||a.includes("en la red")||a.includes("al cristal")||a.includes("a la reja")||a.includes("error")&&!a.includes("forzado"),i=!o&&a.includes("forzado"),l=!o&&!i&&(a.includes("winner")||a.includes("ganador")||a.includes("smash")||a.includes("remate")||a.includes("por tres")||a.includes("por 3")||a.includes("por cuatro")||a.includes("por 4")||a.includes("bajada")||a.includes("volea")||a.includes("bandeja")||a.includes("vibora")||a.includes("dejada")||a.includes("chiquita")||a.includes("passing")||a.includes("globo"));function c(h){return h.includes("smash")||h.includes("remate")||h.includes("por tres")||h.includes("por 3")||h.includes("por cuatro")||h.includes("por 4")?"smash":h.includes("volea")?"volea":h.includes("bandeja")||h.includes("vibora")||h.includes("víbora")?"bandeja":h.includes("bajada")?"bajada":h.includes("dejada")||h.includes("chiquita")?"dejada":h.includes("passing")||h.includes("paralelo")?"passing":h.includes("globo")?"globo":"winner"}const d={smash:"Smash",volea:"Volea",bandeja:"Bandeja",bajada:"Bajada de pared",dejada:"Dejada",passing:"Passing",globo:"Globo",winner:"Winner"};if(o||i){const h=o?"ue":"fe",w=o?"Error no forzado":"Error forzado",C=a.match(/(?:no forzado|forzado|error|fallo|red|cristal|reja|afuera)(.*)$/),k=(C&&C[1]?Rt(C[1],t):null)||Rt(a,t);if(k){const x=1-k.team;D(`🎤 ${w} de ${k.name} → Punto ${X(t,x)}`),he(x,h,[k.team,k.playerIdx]);return}if(n.shotSheet){const x=n.shotSheet.team,E=1-x,T=a.includes("dos")||a.includes("segund")?1:0,A=ae(t,E,T);D(`🎤 ${w} de ${A}`),he(x,h,[E,T]);return}const m=Cs(a,t);if(m!==null){const x=1-m;D(`🎤 ${w} de ${X(t,m)} → Punto ${X(t,x)}`),he(x,h,[m,0]);return}D(`🎤 Decí el jugador: "${w.toLowerCase()} de [nombre]"`);return}if(l){const h=c(a),w=d[h]||"Winner",C=a.match(/(?:winner|ganador|smash|remate|volea|bandeja|vibora|bajada|dejada|chiquita|passing|globo)(.*)$/),k=(C&&C[1]?Rt(C[1],t):null)||Rt(a,t);if(k){D(`🎤 ${w} de ${k.name}`),he(k.team,"winner",[k.team,k.playerIdx],h);return}if(n.shotSheet){const x=n.shotSheet.team,E=a.includes("dos")||a.includes("segund")?1:0,T=ae(t,x,E);D(`🎤 ${w} de ${T}`),he(x,"winner",[x,E],h);return}const m=Cs(a,t);if(m!==null){D(`🎤 ${w} de ${X(t,m)}`),he(m,"winner",[m,0],h);return}}if(n.shotSheet){const h=n.shotSheet.team;if(a.includes("rapido")||a.includes("sin detalle")||a.includes("normal")){he(h,"pt",null);return}const w=Rt(a,t);if(w){if(w.team===h){const C=c(a),M=d[C]||"Winner";D(`🎤 ${M} de ${w.name}`),he(h,"winner",[h,w.playerIdx],C)}else D(`🎤 Error no forzado de ${w.name}`),he(h,"ue",[w.team,w.playerIdx]);return}}const y=Rt(a,t);if(y){D(`🎤 Punto (Winner) de ${y.name}`),he(y.team,"winner",[y.team,y.playerIdx]);return}const S=Cs(a,t);if(S!==null){D(`🎤 Punto ${X(t,S)}`),he(S,"pt",null);return}if(a.includes("uno")){he(0,"pt",null);return}if(a.includes("dos")){he(1,"pt",null);return}D(`🎤 Escuché: "${e.trim()}"`)}let Ms=null,$a=null,Le=null,Ha=null,Ja=!1,bn=0,jt=0,Vs=0,oa="",Sa=!1,Fa=!1,Yo=0,ns=0,ka=0,wa=null;function ti(){return!!(Le&&Le.readyState!==2)}function yo(e=0){ns++;const t=e>0?Math.min(2e4,e*1e3):Math.min(12e3,Math.round(1400*Math.pow(1.6,ns-1)));ka=Date.now()+t,Sa=!1,$a&&clearTimeout($a),$a=setTimeout(()=>{zs(!1)},t)}async function zs(e=!1){var s,o;if(Sa)return Fa=!0,!1;const t=wa||b.activeMatch;if(!t||!t.id)return!1;const a=Ea(t);if(!e&&a&&a===oa)return Fa=!1,!0;const n=Do(t);if(!n)return!1;Sa=!0,Fa=!1,$a&&clearTimeout($a);const r=ja(t.id);try{const i=await fetch(`${lt()}/${r}`,{method:"POST",body:n});if(i&&i.ok){oa=a,Yo=Date.now(),ns=0,ka=0,Sa=!1;const c=wa||b.activeMatch;return c&&(Fa||c.id===t.id&&Ea(c)!==oa)&&ma(c,!1),!0}const l=Number((o=(s=i==null?void 0:i.headers)==null?void 0:s.get)==null?void 0:o.call(s,"Retry-After"))||0;return yo(l),!1}catch{return yo(0),!1}}function ma(e,t=!1,a=!1){if(!e||!e.id)return;wa&&wa.id!==e.id&&(oa="",ns=0,ka=0),a&&(oa=""),wa=e;const n=Ea(e);if(!a&&!t&&n&&n===oa)return;Ms&&clearTimeout(Ms);const r=Date.now();if(t&&!Sa&&(a||r>=ka)){zs(a);return}const s=r-Yo,o=Math.max(0,ka-r),i=Math.max(o,t?80:Math.max(260,650-s));Ms=setTimeout(()=>zs(a),i)}function ai(){if(typeof navigator>"u"||typeof navigator.share!="function")return!1;const e=navigator.userAgentData;if(e&&typeof e.mobile=="boolean"&&!e.mobile)return!1;const t=navigator.userAgent||"";return/Windows|Win32|Win64|CrOS|X11/i.test(t)||/Linux/i.test(t)&&!/Android/i.test(t)?!1:/Android|iPhone|iPad|iPod/i.test(t)||/Macintosh/i.test(t)&&(navigator.maxTouchPoints||0)>1}async function ps(e){const{title:t,text:a,url:n,copyText:r,toastMsg:s,promptMsg:o}=e;if(ai())try{const l={title:t,text:a};return n&&(l.url=n),await navigator.share(l),!0}catch{}const i=r??(n?`${a}
${n}`:a);if(navigator.clipboard&&navigator.clipboard.writeText)try{return await navigator.clipboard.writeText(i),D(s||"Enlace copiado al portapapeles"),!0}catch{}return prompt(o||"Copiá este texto para compartir:",i),!1}async function si(e){if(!e)return;ma(e,!0,!0);const t=zt(e.id),n=`${location.href.split("#")[0]}#v=${t}`,r=`${X(e,0)} vs ${X(e,1)}`,s=`🎾 *Seguí mi partido en vivo:*
*${r}*
${n}`;await ps({title:`🎾 Seguí mi partido en vivo · ${r}`,text:`🎾 Seguí mi partido en vivo: ${r}`,url:n,copyText:s,toastMsg:"📡 Invitación corta EN VIVO copiada para pegar en WhatsApp",promptMsg:"Copiá este mensaje para compartir el partido en vivo:"})}function hn(e,t=!1){const a=ls(e);if(!a||!a.teams)return;const{ui:n}=b;if(n.liveId&&a.id&&zt(a.id)!==zt(n.liveId))return;const r=n.liveMatch;if(r&&r.id===a.id&&(a._ts||0)>0&&(r._ts||0)>0&&(a._ts||0)<(r._ts||0))return;const s=Ea(a),o=Ea(r);if(r&&s===o){a.durationMs>(r.durationMs||0)&&(r.durationMs=a.durationMs),(a._ts||0)>(r._ts||0)&&(r._ts=a._ts);return}const i=r&&r.events?r.events.length:null,l=a.events?a.events.length:0,c=r?!!r.pendingFault:!1;if(n.liveMatch=a,!t&&r!==null)if(i!==null&&l>i){const d=Ee(a),y=a.events[l-1],S=d.lastTransition;S?S.type==="match"?(n.matchEndDismissed=!1,Re("match"),Ue([100,60,100,60,220])):S.type==="set"?(Re("set"),Ue([90,50,140])):(S.type==="game"||S.type==="tb_changeover")&&(Re("game"),Ue([80,50,80])):(Re("point"),Ue(35)),Qo(a,d),y&&(y.w===0||y.w===1)&&requestAnimationFrame(()=>{const h=document.querySelector(`.half[data-team="${y.w}"]`);h&&(h.classList.add("flash"),setTimeout(()=>h.classList.remove("flash"),550))})}else i!==null&&l<i?Re("undo"):a.pendingFault&&!c&&Re("fault");(n.route==="live"||n.route==="obs"||n.route==="stats"&&n.statsId==="live")&&z.render()}async function da(e,t=!1){if(!e||Ja)return;const a=Date.now();if(!t&&a<Vs)return;Ja=!0,bn=a;const n=!t&&jt>0?String(Math.max(0,jt-3)):"12h";try{const r=await fetch(`${lt()}/${e}/json?poll=1&since=${encodeURIComponent(n)}`,{cache:"no-store"});if(r.status===429){Vs=Date.now()+1e4;return}if(!r.ok)return;const o=(await r.text()).trim().split(`
`).filter(Boolean);let i=null;for(const l of o)try{const c=JSON.parse(l);c&&c.time&&(jt=Math.max(jt,Number(c.time)||0)),c&&c.event==="message"&&c.message&&(i=c.message)}catch{}i&&hn(i,!1)}catch{}finally{Ja=!1}}function Us(e){if(!(!e||!("EventSource"in window))){if(Le){try{Le.close()}catch{}Le=null}try{Le=new EventSource(`${lt()}/${e}/sse`),Le.onopen=()=>{b.ui.liveConnected=!0,da(e)},Le.onmessage=t=>{try{const a=JSON.parse(t.data);a&&a.time&&(jt=Math.max(jt,Number(a.time)||0)),a&&(a.event==="message"||!a.event)&&a.message&&(b.ui.liveConnected=!0,hn(a.message,!1))}catch{}},Le.onerror=()=>{b.ui.liveConnected=!1}}catch{}}}function Ka(e){const t=String(e||"").trim();if(!t)return;const a=t.indexOf("."),n=decodeURIComponent(a>=0?t.slice(0,a):t),r=a>=0?t.slice(a+1):"",{ui:s}=b,o=s.liveId===n&&Le&&Le.readyState!==2;if(s.liveId=n,s.route!=="obs"&&(s.route="live"),r&&!s.liveMatch&&hn(r,!0),z.render(),Na(),o)return;vn();const i=ja(n);da(i,!0),Us(i),Ha=setInterval(()=>{if(!b.ui.liveId||document.hidden&&b.ui.route!=="obs")return;Le&&Le.readyState===2&&Us(i);const l=Date.now()-bn;b.ui.liveConnected&&l<24e3||da(i)},3500)}function vn(){if(Le){try{Le.close()}catch{}Le=null}Ha&&(clearInterval(Ha),Ha=null),Ja=!1,bn=0,jt=0,Vs=0,b.ui.liveConnected=!1}function Xo(){vn(),b.ui.liveId=null,b.ui.liveMatch=null,(location.hash.startsWith("#live=")||location.hash.startsWith("#v="))&&history.replaceState(null,"",location.pathname+location.search)}async function ni(e){const t=zt(e),a=ja(t);try{const n=await fetch(`${lt()}/${a}/json?poll=1&since=12h`,{cache:"no-store"});if(n.ok){const s=(await n.text()).trim().split(`
`).filter(Boolean);let o=null;for(const i of s)try{const l=JSON.parse(i);l&&l.event==="message"&&l.message&&(o=l.message)}catch{}if(o){const i=ls(o);if(i){b.ui.sharedMatch=i,b.ui.statsId="shared",b.ui.route="stats",z.render();return}}}}catch{}D("No se encontró el partido compartido o expiró")}async function oi(e){if(!e)return;ma(e,!0,!0);const t=zt(e.id),n=`${location.href.split("#")[0]}#s=${t}`,r=`${X(e,0)} vs ${X(e,1)}`,s=`🏆 *Resultado y estadísticas del partido:*
*${r}*
${n}`;await ps({title:`🏆 Estadísticas: ${r}`,text:`🏆 Resultado y estadísticas del partido: ${r}`,url:n,copyText:s,toastMsg:"Enlace corto del partido copiado al portapapeles",promptMsg:"Copiá este enlace para compartir el partido:"})}function yn(e,t){var r,s,o;const a=URL.createObjectURL(e),n=document.createElement("a");n.href=a,n.download=t,(s=(r=document.body)==null?void 0:r.appendChild)==null||s.call(r,n),n.click(),(o=n.remove)==null||o.call(n),typeof URL.revokeObjectURL=="function"&&setTimeout(()=>URL.revokeObjectURL(a),1e3)}function Oe(e,t,a,n,r,s,o){e.beginPath(),e.roundRect?e.roundRect(t,a,n,r,s):e.rect(t,a,n,r),e.fillStyle=o,e.fill()}function Zo(e,t,a){e.save();const n="PÁDEL CONTROL SÉ  ·  BY",r="Sairaf Engel";e.font='600 18px Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';const s=e.measureText(n).width;e.font='42px "Great Vibes", cursive';const o=e.measureText(r).width,i=16,l=s+i+o,c=Math.round((t-l)/2);e.textAlign="left",e.textBaseline="middle",e.fillStyle="#a39e93",e.font='600 18px Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',e.fillText(n,c,a),e.fillStyle="#ffe58f",e.font='42px "Great Vibes", cursive',e.fillText(r,c+s+i,a-2);const d=a+22,y=e.createLinearGradient(c+20,d,c+l-20,d);y.addColorStop(0,"rgba(212, 175, 55, 0)"),y.addColorStop(.5,"rgba(212, 175, 55, 0.4)"),y.addColorStop(1,"rgba(212, 175, 55, 0)"),e.strokeStyle=y,e.lineWidth=1,e.beginPath(),e.moveTo(c+20,d),e.lineTo(c+l-20,d),e.stroke(),e.restore()}async function $o(e){if(document.fonts&&document.fonts.ready)try{await document.fonts.ready}catch{}const t=cs(e,"all"),a=t.st,n=t.T,r=1080,s=1400,o=document.createElement("canvas");o.width=r,o.height=s;const i=o.getContext("2d");if(!i)return;const l=i.createLinearGradient(0,0,0,s);l.addColorStop(0,"#050507"),l.addColorStop(.5,"#0c0c10"),l.addColorStop(1,"#12100a"),i.fillStyle=l,i.fillRect(0,0,r,s),i.fillStyle="#d4af37",i.font="800 28px Inter, sans-serif",i.fillText("PÁDEL CONTROL SÉ · RESUMEN DEL PARTIDO",64,78),i.fillStyle="#a39e93",i.font="500 24px Inter, sans-serif",i.fillText(`${Ba(e.createdAt)} · Duración ${tn(e.durationMs)}`,64,118),i.save(),i.textAlign="right",i.fillStyle="#ffe58f",i.font='42px "Great Vibes", cursive',i.fillText("Sairaf Engel",r-64,96),i.restore(),Oe(i,56,152,r-112,250,28,"#121218");for(let d=0;d<2;d++){const y=225+d*105;i.fillStyle=e.teams[d].color,Oe(i,88,y-38,12,54,6,e.teams[d].color),i.fillStyle=a.matchWinner===d?"#ffe58f":"#e5e0d5",i.font=`${a.matchWinner===d?"800":"700"} 44px "Barlow Condensed", sans-serif`,i.fillText(X(e,d).toUpperCase(),120,y+6),a.sets.forEach((S,h)=>{if(S.games[0]===0&&S.games[1]===0&&h>0&&S.winner===null)return;const w=r-110-(a.sets.length-1-h)*86,C=S.winner===d;Oe(i,w-54,y-42,68,64,14,C?"#d4af37":"#1b1b24"),i.fillStyle=C?"#080602":"#a39e93",i.font='800 42px "Barlow Condensed", sans-serif',i.textAlign="center",i.fillText(String(S.games[d]),w-20,y+5),i.textAlign="left"})}const c=[["Puntos ganados",n[0].ptsWon,n[1].ptsWon,n[0].ptsWon,n[1].ptsWon],["Golpes ganadores",n[0].winners,n[1].winners,n[0].winners,n[1].winners],["Errores no forzados",n[0].ue,n[1].ue,n[0].ue,n[1].ue],["Puntos de break",`${n[0].bpWon}/${n[0].bpTotal}`,`${n[1].bpWon}/${n[1].bpTotal}`,n[0].bpWon,n[1].bpWon],["Puntos de oro / Star Point",`${n[0].gpWon}/${n[0].gpTotal}`,`${n[1].gpWon}/${n[1].gpTotal}`,n[0].gpWon,n[1].gpWon],["Puntos ganados al saque",le(n[0].srvPtsWon,n[0].srvPtsTotal)+"%",le(n[1].srvPtsWon,n[1].srvPtsTotal)+"%",le(n[0].srvPtsWon,n[0].srvPtsTotal),le(n[1].srvPtsWon,n[1].srvPtsTotal)],["Primeros saques dentro",le(n[0].firstServeIn,n[0].srvPtsTotal)+"%",le(n[1].firstServeIn,n[1].srvPtsTotal)+"%",le(n[0].firstServeIn,n[0].srvPtsTotal),le(n[1].firstServeIn,n[1].srvPtsTotal)],["Mejor racha de puntos",n[0].maxPtStreak,n[1].maxPtStreak,n[0].maxPtStreak,n[1].maxPtStreak]];Oe(i,56,434,r-112,820,28,"#121218"),c.forEach((d,y)=>{const S=505+y*94;i.fillStyle="#d4af37",i.font="600 22px Inter, sans-serif",i.textAlign="center",i.fillText(d[0].toUpperCase(),r/2,S-16),i.fillStyle="#f8f6f0",i.font='800 34px "Barlow Condensed", sans-serif',i.textAlign="left",i.fillText(String(d[1]),96,S+22),i.textAlign="right",i.fillText(String(d[2]),r-96,S+22);const h=210,w=r-420,C=S+8;Oe(i,h,C,w,14,7,"#22222c");const M=(Number(d[3])||0)+(Number(d[4])||0),k=M>0?Number(d[3])/M:.5,m=Math.round(w*k);m>0&&Oe(i,h,C,m,14,7,e.teams[0].color),w-m>0&&Oe(i,h+m,C,w-m,14,7,e.teams[1].color)}),Zo(i,r,1322),o.toBlob(d=>{d&&(yn(d,`padel-control-se-${new Date(e.createdAt).toISOString().slice(0,10)}.png`),D("Imagen descargada"))},"image/png")}function os(e,t="daily"){const a=e?e.id:t;return b.ui.playerSortScope===a&&b.ui.playerSort?b.ui.playerSort:Pe(e)?"elo":"pts"}function fs(e=null){var C,M,k;const{ui:t,competitionsList:a,historyList:n,prefs:r}=b,s=t.playerScope||"daily";if(s==="shared"||t.playerRankingView==="shared"&&((M=(C=t.sharedRanking)==null?void 0:C.players)!=null&&M.length)){const m=t.sharedRanking,x=(m==null?void 0:m.primaryMetric)==="elo",E=e||(t.playerSortScope==="shared"?t.playerSort:x?"elo":"pts"),T=((m==null?void 0:m.players)||[]).map(R=>({...R,shots:{...R.shots||{}}})),A=na(Ft(T,E,{tiebreakMode:x?"games":"sets"}),E,{tiebreakMode:x?"games":"sets"});return{scope:"shared",id:(m==null?void 0:m.id)||"RK-EXT",title:(m==null?void 0:m.name)||"Ranking Compartido",subtitle:(m==null?void 0:m.subtitle)||"Ranking compartido",entityMode:(m==null?void 0:m.entityMode)||"individual",primaryMetric:(m==null?void 0:m.primaryMetric)||"pts",comp:null,scoring:null,sortKey:E,players:A}}if(s==="league"||s==="tournament"){const m=a.filter(P=>P.kind===s);let x=s==="league"?t.selectedLeagueId:t.selectedTournId;(!x||!m.some(P=>P.id===x))&&(x=((k=m[0])==null?void 0:k.id)||null,s==="league"?t.selectedLeagueId=x:t.selectedTournId=x);const E=K(x);if(!E)return{scope:s,id:r.rankingId||"RK-OFFICIAL",title:s==="league"?"Ligas":"Torneos",subtitle:`Sin ${s==="league"?"ligas":"torneos"} todavía`,entityMode:"pairs",primaryMetric:"pts",comp:null,scoring:{winPts:3,lossPts:1,drawPts:2,setBonusPts:0,gameBonusPts:0},sortKey:e||"pts",players:[]};const T=Pe(E),A=e||os(E,s),R={tiebreakMode:T?"games":"sets"},q=E.rankingMode==="both"?t.playerEntityMode||"pairs":E.rankingMode||"pairs",_=rt(E),F=Xe(E,!1);let B=F,p=E.participants||[],u="";if(E.format==="groups_playoff"&&t.selectedGroupFilter&&t.selectedGroupFilter!=="all"){const P=t.selectedGroupFilter,L=new Set((E.fixtures||[]).filter(j=>j.phase==="group"&&j.group===P).map(j=>j.id));B=F.filter(j=>{var W;return((W=j.competition)==null?void 0:W.fixtureId)&&L.has(j.competition.fixtureId)}),p=p.filter(j=>j.group===P),u=` · Grupo ${P}`}const f=Ut(B,{..._,entityMode:q,eloBaseMatches:F,seedParticipants:p}),$=na(Ft(f,A,R),A,R);return{scope:s,id:`${r.rankingId||"RK"}-${E.id.slice(-4).toUpperCase()}`,title:E.name,subtitle:on(E,q,_,u),entityMode:q,primaryMetric:T?"elo":"pts",comp:E,scoring:_,sortKey:A,players:$}}const o=e||os(null,"daily"),i=t.playerEntityMode||"individual",l=t.dailyTimeFilter==="today",c=n.filter(m=>_t(m)==="daily"),d=rt(null),y=Ut(c,{...d,entityMode:i,todayOnly:l,todayDateKey:Ma(Date.now())}),S=na(Ft(y,o),o),h=i==="pairs"?"Parejas":"Individual",w=l?"Hoy":"Acumulado";return{scope:"daily",id:r.rankingId||"RK-OFFICIAL",title:`${r.rankingName||"Mi Ranking"} · Partido del Día`,subtitle:`${w} · ${h} · +${d.winPts}V / +${d.lossPts}D + ELO`,entityMode:i,primaryMetric:"pts",comp:null,scoring:d,sortKey:o,players:S}}function ri(e,t=null){var l,c,d,y;const{ui:a,historyList:n,prefs:r}=b,s=a.playerScope==="shared"||a.playerRankingView==="shared"||!n.length&&!!((c=(l=a.sharedRanking)==null?void 0:l.players)!=null&&c.length),o=s&&((d=a.sharedRanking)!=null&&d.id)?a.sharedRanking.id:r.rankingId||"RK-OFFICIAL",i=s&&((y=a.sharedRanking)!=null&&y.name)?a.sharedRanking.name:r.rankingName||"Mi Ranking";return Dr(e,t,{id:o,name:i})}function er(e){if(!(!e||!e.id))try{const t=Ze("padel_ranking_vault",{});t[e.id]=e,J("padel_ranking_vault",t)}catch{}}async function ii(e){if(!e||e.length<60)return e;try{const t=new AbortController,a=setTimeout(()=>t.abort(),2400),n=await fetch(`https://is.gd/create.php?format=json&url=${encodeURIComponent(e)}`,{signal:t.signal});if(clearTimeout(a),n.ok){const r=await n.json();if(r&&r.shorturl)return r.shorturl}}catch{}try{const t=new AbortController,a=setTimeout(()=>t.abort(),2400),n=await fetch(`https://v.gd/create.php?format=json&url=${encodeURIComponent(e)}`,{signal:t.signal});if(clearTimeout(a),n.ok){const r=await n.json();if(r&&r.shorturl)return r.shorturl}}catch{}return e}function li(e,t){if(!e||!t)return;const n="padel_se_rk_"+String(e).replace(/^rk[-_]?/i,"").replace(/[^a-zA-Z0-9]/g,"").toLowerCase();fetch(`${lt()}/${n}`,{method:"POST",body:t}).catch(()=>{})}async function ci(e){const a="padel_se_rk_"+String(e||"").replace(/^rk[-_]?/i,"").replace(/[^a-zA-Z0-9]/g,"").toLowerCase();try{const n=await fetch(`${lt()}/${a}/json?poll=1&since=12h`,{cache:"no-store"});if(n.ok){const s=(await n.text()).trim().split(`
`).filter(Boolean);let o=null;for(const i of s)try{const l=JSON.parse(i);l&&l.event==="message"&&l.message&&(o=l.message)}catch{}if(o){const i=No(o);if(i&&Array.isArray(i.players)&&i.players.length){b.ui.sharedRanking=i,J("padel_shared_ranking",i),er(i),b.ui.playerRankingView="shared",b.ui.playerScope="shared",b.ui.route="players",z.render(),D(`📡 ${i.name||"Ranking"} (#${i.id||"RK"}) cargado`);return}}}}catch{}D("No se encontró el ranking compartido o expiró")}async function So(e=null){const t=e||fs(),a=t.title||b.prefs.rankingName||"Mi Ranking",n=t.id||b.prefs.rankingId||"RK-OFFICIAL",r=t.players||[];if(!r.length){D("Todavía no hay jugadores registrados en este ranking");return}const s=location.href.split("#")[0],o=ri(r,t),i=o?`${s}#rk=${o}`:`${s}#players`;li(n,o);let l=i;try{l=await ii(i)}catch{}const c=t.primaryMetric==="elo"||Pe(t.comp),d={1:"🥇 1º",2:"🥈 2º",3:"🥉 3º"},y=r.slice(0,10).map(w=>{const C=w.rank&&d[w.rank]||`${w.rank}º`,M=ia(w.elo),k=le(w.wins,w.matches),m=w.lastDelta>0?` (+${w.lastDelta})`:w.lastDelta<0?` (${w.lastDelta})`:"";if(c){const x=(w.gamesDiff||0)>0?`+${w.gamesDiff}`:String(w.gamesDiff||0);return`${C} *${w.name}* · *${w.elo} ELO*${m} · ${w.pts||0} pts (${w.gamesWon||0}G, ${x}) · ${w.wins}G/${w.draws||0}E/${w.losses||0}P`}return`${C} *${w.name}* · ${w.pts||0} pts · ${w.elo} ELO${m} · Nivel ${M.level} (${M.icon}) · ${w.wins}V/${w.matches}P (${k}%)`}).join(`
`),S=r.length>10?`
...y ${r.length-10} más`:"",h=`🎾 *RANKING OFICIAL · PÁDEL CONTROL SÉ*
🏆 *${a}* · ID: #${n}
📌 _${t.subtitle||"Sistema Mixto: Puntos + ELO"}_

📊 *Tabla de Posiciones:*
${y}${S}

📲 Ver tabla completa interactiva y marcador:
${l}`;await ps({title:`🎾 Ranking: ${a} (#${n})`,text:h,copyText:h,toastMsg:"¡Ranking y enlace copiados al portapapeles!",promptMsg:"Copiá el texto del ranking para compartir:"})}async function ko(e=null){var k;if(document.fonts&&document.fonts.ready)try{await document.fonts.ready}catch{}const t=e||fs(),a=t.scope==="shared",n=t.title||b.prefs.rankingName||"Mi Ranking",r=t.id||b.prefs.rankingId||"RK-OFFICIAL",s=t.players||[];if(!s.length){D("Todavía no hay jugadores registrados para exportar");return}const o=s.slice(0,8),i=1080,l=Math.max(1200,360+o.length*105),c=document.createElement("canvas");c.width=i,c.height=l;const d=c.getContext("2d");if(!d)return;const y=d.createLinearGradient(0,0,0,l);y.addColorStop(0,"#050507"),y.addColorStop(.5,"#0c0c10"),y.addColorStop(1,"#12100a"),d.fillStyle=y,d.fillRect(0,0,i,l),d.strokeStyle="rgba(212, 175, 55, 0.45)",d.lineWidth=2,d.beginPath(),d.roundRect?d.roundRect(28,28,i-56,l-56,24):d.rect(28,28,i-56,l-56),d.stroke(),d.fillStyle="#d4af37",d.font="800 28px Inter, -apple-system, sans-serif",d.fillText("PÁDEL CONTROL SÉ  ·  RANKING OFICIAL",64,82);const h=(a&&((k=b.ui.sharedRanking)!=null&&k.timestamp)?new Date(b.ui.sharedRanking.timestamp):new Date).toLocaleDateString("es-AR",{day:"numeric",month:"long",year:"numeric"});d.fillStyle="#a39e93",d.font="500 19px Inter, sans-serif",d.fillText(`${n.toUpperCase()}  ·  ${t.subtitle||""}  ·  #${r}  ·  ${h}`,64,120),d.save(),d.textAlign="right",d.fillStyle="#ffe58f",d.font='42px "Great Vibes", cursive',d.fillText("Sairaf Engel",i-64,96),d.restore();const w=160,C=l-w-120;Oe(d,56,w,i-112,C,24,"#121218");const M=t.primaryMetric==="elo"||Pe(t.comp);Oe(d,56,w,i-112,58,24,"rgba(212, 175, 55, 0.12)"),d.fillStyle="#d4af37",d.font="700 18px Inter, sans-serif",d.textAlign="left",d.fillText("POS",88,w+36),d.fillText(t.entityMode==="pairs"?"PAREJA & NIVEL":"JUGADOR & NIVEL",190,w+36),d.textAlign="right",d.fillText("PARTIDOS",i-360,w+36),d.fillText(M?"PTS (G)":"ELO",i-245,w+36),d.fillText(M?"ELO":"PUNTOS",i-92,w+36),o.forEach((m,x)=>{const E=w+72+x*98;x%2===0&&Oe(d,64,E,i-128,86,14,"rgba(255, 255, 255, 0.025)");const T=84,A=E+18,R=50;let q="rgba(255, 255, 255, 0.06)",_="#a39e93",F=`#${m.rank}`;m.rank===1?(q="#d4af37",_="#080602",F="1º"):m.rank===2?(q="#cbd5e1",_="#080602",F="2º"):m.rank===3&&(q="#d97706",_="#080602",F="3º"),Oe(d,T,A,R,R,14,q),d.fillStyle=_,d.font='800 24px "Barlow Condensed", sans-serif',d.textAlign="center",d.fillText(F,T+R/2,A+34),d.textAlign="left",d.fillStyle=(m.rank||99)<=3?"#ffe58f":"#f8f6f0",d.font='800 30px "Barlow Condensed", sans-serif',d.fillText(m.name.toUpperCase().slice(0,26),156,E+40);const B=ia(m.elo);d.fillStyle=B.color,d.font="600 18px Inter, sans-serif",d.fillText(`Nivel ${B.level} · ${B.tier}`,156,E+68);const p=le(m.wins,m.matches),u=(m.gamesDiff||0)>0?`+${m.gamesDiff}`:String(m.gamesDiff||0);d.textAlign="right",d.fillStyle="#e2ded5",d.font='700 22px "Barlow Condensed", sans-serif',d.fillText(M?`${m.wins}G-${m.draws||0}E-${m.losses||0}P`:`${m.wins}V - ${m.losses??Math.max(0,m.matches-m.wins)}D`,i-360,E+40),d.fillStyle="#a39e93",d.font="500 16px Inter, sans-serif",d.fillText(M?`${m.gamesWon||0} GF · ${u}`:`${p}% ef.`,i-360,E+66),d.textAlign="right",d.fillStyle=M?"#e2ded5":"#f5d061",d.font='800 24px "Barlow Condensed", sans-serif',d.fillText(M?`${m.pts||0}`:String(m.elo),i-245,E+42),d.fillStyle=m.lastDelta>0?"#10b981":m.lastDelta<0?"#ef4444":"#7d7461",d.font="600 15px Inter, sans-serif",d.fillText(m.lastDelta>0?`+${m.lastDelta}`:m.lastDelta<0?`${m.lastDelta}`:"—",i-245,E+66);const f=122,$=54,P=i-214,L=E+16;Oe(d,P,L,f,$,12,"rgba(212, 175, 55, 0.14)"),d.strokeStyle="rgba(212, 175, 55, 0.45)",d.lineWidth=1,d.beginPath(),d.roundRect?d.roundRect(P,L,f,$,12):d.rect(P,L,f,$),d.stroke(),d.fillStyle="#ffe58f",d.font='900 32px "Barlow Condensed", sans-serif',d.textAlign="center",d.fillText(M?`${m.elo}`:`${m.pts||0}`,P+f/2,L+37)}),Zo(d,i,l-52),c.toBlob(m=>{m&&(yn(m,`ranking-padel-control-se-${new Date().toISOString().slice(0,10)}.png`),D("¡Imagen del Ranking descargada!"))},"image/png")}function Ae(e,t={}){const{ui:a}=b;Object.assign(a,t),a.route=e,a.menuOpen=!1,a.shotSheet=null,a.playerCardTouchDrag=!1;try{const n=String(location.hash||""),r=/^#(v|live|s|r|rk_id|c|join|comp|share|rk|ranking)=/.test(n),s=e==="comp-detail"&&a.compId?"#comp="+a.compId:"#"+e;(e==="player-card"||!r)&&n!==s&&history.replaceState(null,"",s)}catch{}Na(),z.render(),window.scrollTo(0,0)}function di(){document.documentElement.setAttribute("data-theme","dark")}function it(e){const t=e==="competitions"||e==="comp-detail";return`
  <nav class="tabbar no-print" aria-label="Navegación principal">
    <a href="#home" data-nav="home" class="${e==="home"?"on":""}">${I.home}<span>Inicio</span></a>
    <a href="#competitions" data-nav="competitions" class="${t?"on":""}">${I.award}<span>Ligas·Torn.</span></a>
    <a href="#new" data-nav="new" class="fab" title="Nuevo partido">${I.plus}</a>
    <a href="#players" data-nav="players" class="${e==="players"?"on":""}">${I.trophy}<span>Rankings</span></a>
    <a href="#history" data-nav="history" class="${e==="history"?"on":""}">${I.hist}<span>Historial</span></a>
  </nav>`}function ms(e){var o,i,l;const t=_t(e),a=He(e),n=a?K(a):null,r=(o=e==null?void 0:e.competition)!=null&&o.stageLabel?` · ${e.competition.stageLabel}`:"";let s="";return t==="league"?s=`<span class="badge league">🏅 ${g((n==null?void 0:n.name)||((i=e==null?void 0:e.competition)==null?void 0:i.compName)||"Liga")}${g(r)}</span>`:t==="tournament"?s=`<span class="badge tourn">🏆 ${g((n==null?void 0:n.name)||((l=e==null?void 0:e.competition)==null?void 0:l.compName)||"Torneo")}${g(r)}</span>`:s='<span class="badge daily">☀️ Partido del Día</span>',e!=null&&e.isWalkover&&(s+='<span class="badge ab">W.O.</span>'),s}function $n(e){var o,i,l;const t=Ee(e),a=t.matchWinner,n=e.status==="playing"?'<span class="badge live">En juego</span>':e.status==="abandoned"?'<span class="badge ab">Incompleto</span>':e.isWalkover?'<span class="badge">Sin juego</span>':`<span class="badge">${g(tn(e.durationMs))}</span>`;let r="";if((a!==null||t.isDraw)&&!e.isWalkover){const c=pn(e);if(c){const d=((o=c.pair0.players[0])==null?void 0:o.delta)||0,y=((i=c.pair1.players[0])==null?void 0:i.delta)||0;if(t.isDraw){const S=Math.max(Math.abs(d),Math.abs(y));r='<span class="badge">🤝 Empate</span>'+(S>0?` <span class="badge elo" title="Ajuste ELO por empate">⚡ ELO ±${S}</span>`:"")}else{const S=a===0?c.pair0:c.pair1;r=`<span class="badge elo" title="Puntos ELO en juego">⚡ ELO ±${Math.abs(((l=S.players[0])==null?void 0:l.delta)||0)}</span>`}}}else t.isDraw&&(r='<span class="badge">🤝 Empate</span>');const s=c=>{const d=t.sets.map((y,S)=>y.games[0]===0&&y.games[1]===0&&S>0&&y.winner===null?"":`<span class="${y.winner===c?"s w":y.winner===null&&e.status==="playing"?"s cur":"s"}">${y.games[c]}</span>`).join("");return`
      <div class="mrow ${a===c?"win":""}">
        <span class="bar" style="--c:${g(e.teams[c].color)}"></span>
        <span class="nm">${g(X(e,c))}</span>
        ${a===c?`<span class="tro">${I.trophy}</span>`:""}
        ${d}
      </div>`};return`
  <button class="mcard" data-open-stats="${g(e.id)}">
    <div class="mmeta">
      <span>${g(Ba(e.createdAt))}</span>
      ${ms(e)}
      ${r}
      ${n}
    </div>
    ${s(0)}
    ${s(1)}
  </button>`}const qt={diamond:{id:"diamond",label:"Diamante Negro",bgTop:"#04060b",bgMid:"#0e1726",bgBot:"#030509",accent:"#38bdf8",accentBright:"#e0f2fe",accentSoft:"#bae6fd",badgeStops:["#08101f","#1e293b","#0f4c81","#7dd3fc"],courtGlow:"#0ea5e9",courtGlow2:"#6366f1",frameLight:"#ffffff",frameMid:"#94a3b8",frameDark:"#1e293b",ribbonFill:["#04070f","#111c33","#04070f"],defaultMetal:"chrome"},blue:{id:"blue",label:"Azul Premier",bgTop:"#030714",bgMid:"#091f4d",bgBot:"#020510",accent:"#2563eb",accentBright:"#38bdf8",accentSoft:"#bae6fd",badgeStops:["#08153b","#1d4ed8","#0284c7","#7dd3fc"],courtGlow:"#2563eb",courtGlow2:"#06b6d4",frameLight:"#ffffff",frameMid:"#94a3b8",frameDark:"#1e293b",ribbonFill:["#030816","#0d2659","#030816"],defaultMetal:"chrome"},purple:{id:"purple",label:"Violeta Tour",bgTop:"#060410",bgMid:"#1a0a36",bgBot:"#05040c",accent:"#a855f7",accentBright:"#e879f9",accentSoft:"#e9d5ff",badgeStops:["#2e0652","#6b21a8","#9333ea","#f0abfc"],courtGlow:"#7c3aed",courtGlow2:"#2563eb",frameLight:"#ffffff",frameMid:"#94a3b8",frameDark:"#27273a",ribbonFill:["#070512","#1d0d3d","#070512"],defaultMetal:"chrome"},gold:{id:"gold",label:"Obsidian & Oro 24K",bgTop:"#050507",bgMid:"#1c1506",bgBot:"#050507",accent:"#d4af37",accentBright:"#fde68a",accentSoft:"#fef08a",badgeStops:["#261802","#785006","#ca8a04","#fef08a"],courtGlow:"#d4af37",courtGlow2:"#f59e0b",frameLight:"#fffdf2",frameMid:"#d4af37",frameDark:"#3f2a04",ribbonFill:["#070604","#211805","#070604"],defaultMetal:"gold"},green:{id:"green",label:"Esmeralda Tour",bgTop:"#030b08",bgMid:"#062c20",bgBot:"#030907",accent:"#10b981",accentBright:"#34d399",accentSoft:"#a7f3d0",badgeStops:["#042f22","#047857","#059669","#6ee7b7"],courtGlow:"#10b981",courtGlow2:"#06b6d4",frameLight:"#ffffff",frameMid:"#94a3b8",frameDark:"#1e293b",ribbonFill:["#030c09","#073022","#030c09"],defaultMetal:"chrome"},crimson:{id:"crimson",label:"Rubí & Titanio",bgTop:"#090306",bgMid:"#2b0915",bgBot:"#070305",accent:"#ef4444",accentBright:"#fb7185",accentSoft:"#fecdd3",badgeStops:["#380612","#991b1b","#e11d48","#fda4af"],courtGlow:"#e11d48",courtGlow2:"#f97316",frameLight:"#ffffff",frameMid:"#94a3b8",frameDark:"#27272a",ribbonFill:["#0a0306","#260813","#0a0306"],defaultMetal:"chrome"}},Pa={chrome:{id:"chrome",label:"Cromo Diamante",swatch:"linear-gradient(180deg,#ffffff 0%,#e2e8f0 44%,#334155 50%,#cbd5e1 85%,#64748b 100%)",extrudeDark:"#050811",extrudeMid:"#334155",bevelTop:"#ffffff",bevelBot:"#1e293b",stops:[[0,"#ffffff"],[.24,"#f1f5f9"],[.47,"#ffffff"],[.5,"#475569"],[.56,"#94a3b8"],[.76,"#ffffff"],[.92,"#e2e8f0"],[1,"#64748b"]],edgeFaces:[["#ffffff","#cbd5e1","#94a3b8"],["#e2e8f0","#64748b","#475569"],["#94a3b8","#475569","#1e293b"],["#475569","#1e293b","#0f172a"],["#64748b","#334155","#94a3b8"],["#cbd5e1","#64748b","#334155"],["#f8fafc","#94a3b8","#64748b"],["#ffffff","#e2e8f0","#94a3b8"]]},gold:{id:"gold",label:"Oro 24K Pulido",swatch:"linear-gradient(180deg,#fffbeb 0%,#fde68a 44%,#713f12 50%,#facc15 85%,#92400e 100%)",extrudeDark:"#1c0f00",extrudeMid:"#7c4d04",bevelTop:"#fffdf5",bevelBot:"#422006",stops:[[0,"#fffdf5"],[.24,"#fef08a"],[.47,"#ffffff"],[.5,"#92400e"],[.56,"#d97706"],[.76,"#fde047"],[.92,"#fef9c3"],[1,"#b45309"]],edgeFaces:[["#fffdf2","#facc15","#b47409"],["#fef08a","#b47409","#784805"],["#ca8a04","#713f12","#422006"],["#784805","#422006","#261302"],["#a16207","#713f12","#d4af37"],["#fde68a","#a16207","#713f12"],["#fffbeb","#d4af37","#92400e"],["#ffffff","#fef08a","#ca8a04"]]},ice:{id:"ice",label:"Platino Zafiro",swatch:"linear-gradient(180deg,#ffffff 0%,#bae6fd 44%,#0c4a6e 50%,#7dd3fc 85%,#0369a1 100%)",extrudeDark:"#031124",extrudeMid:"#1e3a8a",bevelTop:"#ffffff",bevelBot:"#082f49",stops:[[0,"#ffffff"],[.24,"#e0f2fe"],[.47,"#ffffff"],[.5,"#1d4ed8"],[.56,"#38bdf8"],[.76,"#f0f9ff"],[.92,"#bae6fd"],[1,"#0284c7"]],edgeFaces:[["#ffffff","#7dd3fc","#0284c7"],["#e0f2fe","#38bdf8","#0369a1"],["#38bdf8","#1e40af","#082f49"],["#0369a1","#082f49","#031124"],["#0284c7","#1e3a8a","#7dd3fc"],["#bae6fd","#0284c7","#1e3a8a"],["#f0f9ff","#38bdf8","#0369a1"],["#ffffff","#bae6fd","#0ea5e9"]]},emerald:{id:"emerald",label:"Esmeralda Puro",swatch:"linear-gradient(180deg,#ecfdf5 0%,#6ee7b7 44%,#064e3b 50%,#10b981 85%,#047857 100%)",extrudeDark:"#011912",extrudeMid:"#065f46",bevelTop:"#ecfdf5",bevelBot:"#022c22",stops:[[0,"#ffffff"],[.22,"#a7f3d0"],[.47,"#ffffff"],[.5,"#047857"],[.56,"#10b981"],[.76,"#d1fae5"],[.92,"#6ee7b7"],[1,"#059669"]],edgeFaces:[["#ffffff","#6ee7b7","#059669"],["#d1fae5","#10b981","#047857"],["#10b981","#065f46","#022c22"],["#047857","#022c22","#011912"],["#059669","#064e3b","#34d399"],["#6ee7b7","#059669","#064e3b"],["#ecfdf5","#34d399","#047857"],["#ffffff","#a7f3d0","#10b981"]]}},ui=["1ra","2da","3ra","4ta","5ta","6ta","7ma","8va","Libre","Suma"],pi=["Drive","Revés","Ambos"],fi=["Diestro","Diestra","Zurdo","Zurda"],mi=["Víbora","Bandeja","Smash","Volea","Globo","Bajada","Dejada","Chiquita"],St="./assets/pro-padel-logo.webp",Sn=new Set(["Logo PRO PÁDEL.png","./Logo PRO PÁDEL.png","logo-pro-padel.png","./logo-pro-padel.png"]),tr="padel_pc_meta_fb_v1";let _e=[],de={logo1:null,logo2:St,logo2Disabled:!1,subTitle:""};const ze=new Map;let Ga=null,Zt=0,va=null,Is=null;function ua(){return _e}function Ct(){return de}function wo(){return++Zt}function Hs(e){return e&&(!e.logo2Disabled&&(!e.logo2||Sn.has(e.logo2)||typeof e.logo2=="string"&&e.logo2.startsWith("data:image/webp;base64,UklGRiCyAABXRUJQ"))&&(e.logo2=St),e)}function Oa(){return new Promise((e,t)=>{if(!window.indexedDB){t(new Error("IndexedDB not supported"));return}const a=indexedDB.open("padel_player_cards_db",1);a.onupgradeneeded=()=>{const n=a.result;n.objectStoreNames.contains("cards")||n.createObjectStore("cards",{keyPath:"id"}),n.objectStoreNames.contains("meta")||n.createObjectStore("meta",{keyPath:"key"})},a.onsuccess=()=>e(a.result),a.onerror=()=>t(a.error||new Error("IDB open failed"))})}async function gi(){const{ui:e}=b;try{const t=await Oa(),a=t.transaction(["cards","meta"],"readonly"),n=a.objectStore("cards").getAll(),r=a.objectStore("meta").get("logos"),s=a.objectStore("meta").get("activeDraft");if(await new Promise(o=>{a.oncomplete=()=>o(),a.onerror=()=>o()}),Array.isArray(n.result)&&(_e=n.result.sort((o,i)=>(i.updatedAt||0)-(o.updatedAt||0))),r.result&&r.result.value&&(de=Object.assign({logo1:null,logo2:null,logo2Disabled:!1,subTitle:""},r.result.value)),Hs(de),s.result&&s.result.value&&!e.playerCardDraftDirty){const o=Object.assign(gs(),Ie(s.result.value));e.playerCardDraft=o,e.route==="player-card"&&(e.playerCardAiStatus=o.cutoutPhoto?"ok":"",e.playerCardAiText=o.cutoutPhoto?"✓ Borrador y recorte restaurados":o.origPhoto?"✓ Foto del borrador restaurada":"")}t.close()}catch{try{const t=Ze(tr,null);t&&(de=Object.assign({logo1:null,logo2:null,logo2Disabled:!1,subTitle:""},t)),Hs(de)}catch{}}(e.route==="player-card"||e.route==="players"||e.route==="comp-detail")&&z.render()}async function Po(){const{ui:e}=b;if(e.playerCardDraft)try{const t=await Oa(),a=t.transaction(["meta"],"readwrite");a.objectStore("meta").put({key:"activeDraft",value:Ie(e.playerCardDraft)}),await new Promise(n=>{a.oncomplete=()=>n(),a.onerror=()=>n()}),t.close()}catch{}}function fe(e=!1){if(va&&clearTimeout(va),e){va=null,Po();return}va=setTimeout(()=>{va=null,Po()},260)}async function kn(e){const t={id:e.id,name:e.name||"",nickname:e.nickname||"",nameKey:(e.name||"").trim().toUpperCase(),category:e.category||"6ta",age:e.age||"",position:e.position||"Drive",hand:e.hand||"Diestro",bestShot:e.bestShot||"Víbora",theme:e.theme||"diamond",metalFinish:e.metalFinish||"chrome",bgMode:e.bgMode||"ai",showAppBrand:e.showAppBrand!==!1,zoom:Number(e.zoom)||1,offsetX:Number(e.offsetX)||0,offsetY:Number(e.offsetY)||0,origPhoto:e.origPhoto||null,cutoutPhoto:e.cutoutPhoto||null,origHasAlpha:!!e.origHasAlpha,updatedAt:Date.now()},a=_e.findIndex(n=>n.id===t.id);a>=0?_e[a]=t:_e.unshift(t),_e.sort((n,r)=>(r.updatedAt||0)-(n.updatedAt||0));try{const n=await Oa(),r=n.transaction("cards","readwrite");return r.objectStore("cards").put(t),await new Promise((s,o)=>{r.oncomplete=()=>s(),r.onerror=()=>o(r.error)}),n.close(),!0}catch(n){return console.warn("Save card IDB error",n),!1}}async function bi(e){_e=_e.filter(t=>t.id!==e);try{const t=await Oa(),a=t.transaction("cards","readwrite");a.objectStore("cards").delete(e),await new Promise(n=>{a.oncomplete=()=>n(),a.onerror=()=>n()}),t.close()}catch{}}async function pa(){try{const e=await Oa(),t=e.transaction("meta","readwrite");t.objectStore("meta").put({key:"logos",value:de}),await new Promise(a=>{t.oncomplete=()=>a(),t.onerror=()=>a()}),e.close()}catch{try{J(tr,{subTitle:de.subTitle||""})}catch{}}}function gs(e={}){var i,l,c;const{ui:t}=b,a=((i=t.playerCardDraft)==null?void 0:i.theme)||"diamond",n=qt[a]||qt.diamond,r=((l=t.playerCardDraft)==null?void 0:l.metalFinish)||n.defaultMetal||"chrome",s=((c=t.playerCardDraft)==null?void 0:c.category)||"6ta",o=t.playerCardDraft?t.playerCardDraft.showAppBrand!==!1:!0;return{id:"pc_"+Date.now().toString(36)+"_"+Math.random().toString(36).slice(2,6),name:"",nickname:"",category:s,age:"",position:"Drive",hand:"Diestro",bestShot:"Víbora",theme:a,metalFinish:r,bgMode:"ai",showAppBrand:o,zoom:1,offsetX:0,offsetY:0,origPhoto:null,cutoutPhoto:null,origHasAlpha:!1,...e}}function ue(){const{ui:e}=b;return e.playerCardDraft||(e.playerCardDraft=gs()),e.playerCardDraft}function Js(e){const t=String(e||"").trim().toUpperCase();return t&&_e.find(a=>{var n;return(a.nameKey||((n=a.name)==null?void 0:n.trim().toUpperCase()))===t})||null}function ar(e="",t={}){const{ui:a}=b;a.playerCardReturnRoute=t.returnRoute||a.route||"home",a.playerCardTouchDrag=!1,a.playerCardDraftDirty=!0;const n=String(e||"").trim(),r=/^(DRIVE|REV[EÉ]S)\s*[12]?$/i.test(n),s=!r&&n?Js(n):null;s?(a.playerCardDraft={...Ie(s)},a.playerCardAiStatus=s.cutoutPhoto?"ok":"",a.playerCardAiText=s.cutoutPhoto?"✓ Tarjeta y recorte cargados":""):(a.playerCardDraft=gs({name:r?"":n,position:t.position||"Drive"}),a.playerCardAiStatus="",a.playerCardAiText=""),fe(!0),Ae("player-card")}function sr(e){if(!e)return Promise.resolve(null);const t=Sn.has(e)?St:e,a=ze.get(t);return a&&a.complete&&a.naturalWidth>0?Promise.resolve(a):new Promise(n=>{const r=new Image;r.onload=()=>{if(ze.size>40){const s=ze.keys().next().value;s!==void 0&&ze.delete(s)}ze.set(t,r),n(r)},r.onerror=()=>n(null),r.src=t})}function hi(e){if(!e)return null;const t=Sn.has(e)?St:e,a=ze.get(t);if(a)return a.complete&&a.naturalWidth>0?a:null;const n=new Image;return n.onload=()=>{if(ze.size>40){const r=ze.keys().next().value;r!==void 0&&ze.delete(r)}ze.set(t,n),b.ui.route==="player-card"&&De()},n.onerror=()=>{ze.delete(t)},ze.set(t,n),n.src=t,null}async function vi(e,t=1500){let a=null,n="",r=null,s=0,o=0;try{if(typeof createImageBitmap=="function")try{a=await createImageBitmap(e),r=a,s=a.width,o=a.height}catch{a=null}if(!r){n=URL.createObjectURL(e);const w=await new Promise((C,M)=>{const k=new Image;k.onload=()=>C(k),k.onerror=()=>M(new Error("No se pudo leer la imagen")),k.src=n});r=w,s=w.naturalWidth||w.width,o=w.naturalHeight||w.height}const i=Math.min(1,t/Math.max(s||1,o||1)),l=Math.max(1,Math.round((s||1)*i)),c=Math.max(1,Math.round((o||1)*i)),d=document.createElement("canvas");d.width=l,d.height=c,d.getContext("2d").drawImage(r,0,0,l,c);const h=/png|webp|svg/i.test(e.type||e.name||"")?d.toDataURL("image/png"):d.toDataURL("image/jpeg",.9);return d.width=0,d.height=0,h}finally{if(a&&typeof a.close=="function")try{a.close()}catch{}if(n)try{URL.revokeObjectURL(n)}catch{}}}async function nr(e,t=1500){const a=await vi(e,t);return await new Promise((n,r)=>{const s=new Image;s.onload=()=>n(s),s.onerror=()=>r(new Error("No se pudo decodificar la imagen")),s.src=a})}function yi(e){try{const t=document.createElement("canvas");t.width=48,t.height=48;const a=t.getContext("2d");a.drawImage(e,0,0,48,48);const n=a.getImageData(0,0,48,48).data;for(let r=3;r<n.length;r+=4)if(n[r]<245)return!0}catch{}return!1}async function $i(e){if(!e)return;const{ui:t}=b,a=ue();t.playerCardDraftDirty=!0,t.playerCardTouchDrag=!1,t.playerCardAiStatus="loading",t.playerCardAiText="⏳ Cargando y optimizando foto...",Ks();try{const n=await nr(e),s=Math.min(1,960/Math.max(n.naturalWidth||n.width,n.naturalHeight||n.height)),o=Math.max(1,Math.round((n.naturalWidth||n.width)*s)),i=Math.max(1,Math.round((n.naturalHeight||n.height)*s)),l=document.createElement("canvas");l.width=o,l.height=i,l.getContext("2d").drawImage(n,0,0,o,i);const d=yi(n);if(a.origPhoto=d?l.toDataURL("image/png"):l.toDataURL("image/jpeg",.9),l.width=0,l.height=0,a.origHasAlpha=d,a.cutoutPhoto=d?a.origPhoto:null,a.zoom=1,a.offsetX=0,a.offsetY=0,fe(!0),d){t.playerCardAiStatus="ok",t.playerCardAiText="✓ Imagen PNG sin fondo detectada",z.render();return}a.bgMode==="ai"?(z.render(),await or(a)):(t.playerCardAiStatus="ok",t.playerCardAiText="⚡ Modo instantáneo activo",z.render())}catch(n){console.error(n),t.playerCardAiStatus="",t.playerCardAiText="",z.render(),D("No se pudo cargar esa imagen")}}async function xo(e,t){if(e)try{const a=await nr(e),r=Math.min(1,600/Math.max(a.naturalWidth||a.width,a.naturalHeight||a.height)),s=Math.max(1,Math.round((a.naturalWidth||a.width)*r)),o=Math.max(1,Math.round((a.naturalHeight||a.height)*r)),i=document.createElement("canvas");i.width=s,i.height=o,i.getContext("2d").drawImage(a,0,0,s,o);const l=i.toDataURL("image/png");t===1?de.logo1=l:(de.logo2=l,de.logo2Disabled=!1),await pa(),z.render(),D(`Logo ${t} guardado`)}catch{D("No se pudo cargar el logo")}}async function Si(){return Ga||(Ga=(async()=>{const t=await import("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.21/vision_bundle.mjs"),{FilesetResolver:a,ImageSegmenter:n}=t,r=await a.forVisionTasks("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.21/wasm"),s="https://storage.googleapis.com/mediapipe-models/image_segmenter/selfie_segmenter/float16/latest/selfie_segmenter.tflite";try{return await n.createFromOptions(r,{baseOptions:{modelAssetPath:s,delegate:"GPU"},runningMode:"IMAGE",outputConfidenceMasks:!0,outputCategoryMask:!1})}catch{return await n.createFromOptions(r,{baseOptions:{modelAssetPath:s,delegate:"CPU"},runningMode:"IMAGE",outputConfidenceMasks:!0,outputCategoryMask:!1})}})().catch(e=>{throw Ga=null,e})),Ga}async function or(e){var n;const{ui:t}=b;if(!e||!e.origPhoto)return;if(e.origHasAlpha){e.cutoutPhoto=e.origPhoto,t.playerCardAiStatus="ok",t.playerCardAiText="✓ Imagen transparente lista",z.render();return}const a=++Zt;t.playerCardAiBusy=!0,t.playerCardAiStatus="loading",t.playerCardAiText="✨ Recortando fondo con IA (la 1ª vez carga ~3 MB)...",Ks();try{const r=await Si();if(a!==Zt)return;const s=await sr(e.origPhoto);if(!s||a!==Zt)return;const o=s.naturalWidth||s.width,i=s.naturalHeight||s.height,l=r.segment(s),c=l.confidenceMasks||[],d=typeof r.getLabels=="function"?r.getLabels():[];let y=0;if(c.length>1){const R=d.findIndex(q=>/person|foreground|human/i.test(String(q)));y=R>=0?R:1}const S=c[y];if(!S)throw new Error("No mask returned");const h=S.width||o,w=S.height||i,C=S.getAsFloat32Array(),M=document.createElement("canvas");M.width=h,M.height=w;const k=M.getContext("2d"),m=k.createImageData(h,w),x=m.data;let E=0;for(let R=0;R<C.length;R++){const q=C[R],_=Math.max(0,Math.min(1,(q-.3)/(.7-.3))),F=Math.round(_*_*(3-2*_)*255);F>128&&E++;const B=R*4;x[B]=255,x[B+1]=255,x[B+2]=255,x[B+3]=F}k.putImageData(m,0,0);try{(n=l.close)==null||n.call(l)}catch{}if(E<C.length*.015)throw new Error("No se detectó claramente una persona en la foto");const T=document.createElement("canvas");T.width=o,T.height=i;const A=T.getContext("2d");try{A.filter="blur(1.4px)"}catch{}A.drawImage(M,0,0,o,i);try{A.filter="none"}catch{}if(A.globalCompositeOperation="source-in",A.drawImage(s,0,0,o,i),A.globalCompositeOperation="source-over",a!==Zt)return;e.cutoutPhoto=T.toDataURL("image/png"),M.width=0,M.height=0,T.width=0,T.height=0,e.bgMode="ai",t.playerCardAiBusy=!1,t.playerCardAiStatus="ok",t.playerCardAiText="✓ Fondo recortado automáticamente",t.playerCardDraftDirty=!0,fe(!0),Ks(),De()}catch(r){if(a!==Zt)return;console.warn("AI cutout fallback:",r),t.playerCardAiBusy=!1,e.bgMode="instant",t.playerCardAiStatus="err",t.playerCardAiText="No se pudo usar IA (sin conexión o foto compleja) · Aplicado Modo Instantáneo",t.playerCardDraftDirty=!0,fe(!0),z.render()}}function Ks(){const{ui:e}=b,t=document.getElementById("pc-ai-status-box");if(t){if(!e.playerCardAiText){t.style.display="none";return}t.style.display="flex",t.className="pc-ai-status "+(e.playerCardAiStatus==="ok"?"ok":e.playerCardAiStatus==="err"?"err":""),t.textContent=e.playerCardAiText}}function xa(e,t,a,n,r,s){e.beginPath(),e.moveTo(t+s,a),e.lineTo(t+n-s,a),e.lineTo(t+n,a+s),e.lineTo(t+n,a+r-s),e.lineTo(t+n-s,a+r),e.lineTo(t+s,a+r),e.lineTo(t,a+r-s),e.lineTo(t,a+s),e.closePath()}function Ca(e,t,a,n,r,s){e.beginPath(),e.roundRect?e.roundRect(t,a,n,r,s):e.rect(t,a,n,r)}function ya(e,t,a,n,r,s){let o=n;for(;o>r&&(e.font=s(o),!(e.measureText(t).width<=a));)o-=2;return e.font=s(o),o}function Es(e,t,a,n,r){e.save(),e.translate(t,a);const s=n/120;e.scale(s,s),e.translate(-60,-60);const o=e.createLinearGradient(10,10,110,110);r.id==="purple"?(o.addColorStop(0,"#ffffff"),o.addColorStop(.35,"#e9d5ff"),o.addColorStop(.7,"#a855f7"),o.addColorStop(1,"#f5d061")):(o.addColorStop(0,"#fff6cc"),o.addColorStop(.35,"#f3d266"),o.addColorStop(.7,"#d4af37"),o.addColorStop(1,"#a87910")),Ca(e,4,4,112,112,26),e.fillStyle="#09080f",e.fill(),e.lineWidth=3,e.strokeStyle=o,e.stroke(),e.beginPath(),e.moveTo(60,14),e.lineTo(96,27),e.lineTo(96,59),e.quadraticCurveTo(96,86,60,105),e.quadraticCurveTo(24,86,24,59),e.lineTo(24,27),e.closePath(),e.fillStyle="rgba(12, 11, 20, 0.9)",e.fill(),e.lineWidth=1.6,e.strokeStyle=o,e.stroke(),e.save(),e.translate(58,57),e.rotate(-.42),e.translate(-58,-57),e.beginPath(),e.ellipse(60,46,20,24,0,0,Math.PI*2),e.fillStyle=o,e.fill(),e.beginPath(),e.ellipse(60,46,15.5,19,0,0,Math.PI*2),e.fillStyle="#09090d",e.fill(),Ca(e,56,69,8,28,3),e.fillStyle=o,e.fill(),e.fillStyle=o,[[-6,-9],[0,-10],[6,-9],[-9,-2],[-3,-2],[3,-2],[9,-2],[-8,5],[-2,5],[4,5],[10,5],[-5,11],[0,12],[5,11]].forEach(([l,c])=>{e.beginPath(),e.arc(60+l,46+c,1.7,0,Math.PI*2),e.fill()}),e.restore();const i=e.createRadialGradient(75,69,2,79,73,15);i.addColorStop(0,"#ffffff"),i.addColorStop(.5,r.accentBright),i.addColorStop(1,r.accent),e.beginPath(),e.arc(79,73,14,0,Math.PI*2),e.fillStyle=i,e.fill(),e.lineWidth=2,e.strokeStyle="#070709",e.stroke(),Ca(e,41,94,38,17,8.5),e.fillStyle="#09080c",e.fill(),e.lineWidth=1.5,e.strokeStyle=o,e.stroke(),e.fillStyle="#ffffff",e.font='italic 800 12.5px "Barlow Condensed", sans-serif',e.textAlign="center",e.textBaseline="middle",e.fillText("SÉ",60,103),e.restore()}function ki(e){if(!Is){const t=document.createElement("canvas");t.width=16,t.height=16;const a=t.getContext("2d");a.fillStyle="#05070d",a.fillRect(0,0,16,16),a.fillStyle="#0e1422",a.fillRect(0,0,8,8),a.fillRect(8,8,8,8),a.fillStyle="rgba(255,255,255,0.065)",a.fillRect(0,0,8,3),a.fillRect(8,8,8,3),a.fillStyle="#090d16",a.fillRect(8,0,8,8),a.fillRect(0,8,8,8),a.fillStyle="rgba(255,255,255,0.03)",a.fillRect(8,4,8,2),a.fillRect(0,12,8,2),Is=t}return e.createPattern(Is,"repeat")}function bs(e,t){return(e?Pa[e]:void 0)||(t!=null&&t.defaultMetal?Pa[t.defaultMetal]:void 0)||Pa.chrome}function Ta(e,t,a,n,r="#ffffff"){e.save(),e.translate(t,a);const s=e.createRadialGradient(0,0,0,0,0,n*.9);s.addColorStop(0,"#ffffff"),s.addColorStop(.28,r+"cc"),s.addColorStop(1,"transparent"),e.fillStyle=s,e.beginPath(),e.arc(0,0,n*.9,0,Math.PI*2),e.fill(),e.fillStyle="#ffffff";const o=(i,l)=>{e.beginPath(),e.moveTo(0,-i),e.quadraticCurveTo(l*.4,-l*.4,i,0),e.quadraticCurveTo(l*.4,l*.4,0,i),e.quadraticCurveTo(-l*.4,l*.4,-i,0),e.quadraticCurveTo(-l*.4,-l*.4,0,-i),e.closePath(),e.fill()};o(n,n*.14),e.rotate(Math.PI/4),e.globalAlpha=.55,o(n*.46,n*.1),e.restore()}function yt(e,t,a,n,r={}){const s=bs(r.metalKey,r.theme),o=r.fontSize||48,i=r.extrude??Math.max(3,Math.round(o*.08)),l=r.bevelWidth??Math.max(1.2,o*.025),c=/italic/i.test(e.font||""),d=e.measureText(t),y=d.actualBoundingBoxAscent||o*.72,S=d.actualBoundingBoxDescent||o*.08,h=e.textBaseline||"alphabetic";let w,C;if(h==="middle"?(w=n-y*.54,C=n+y*.54):h==="top"||h==="hanging"?(w=n,C=n+y):(w=n-y,C=n+Math.max(2,S)),C-w<12&&(w=n-o*.5,C=n+o*.5),e.save(),e.lineJoin="round",e.lineCap="round",i>0)for(let m=i;m>=1;m--)e.save(),m===i?(e.shadowColor="rgba(0, 0, 0, 0.90)",e.shadowBlur=Math.max(8,i*3.2),e.shadowOffsetX=i*.45,e.shadowOffsetY=i*1.1):(e.shadowColor="transparent",e.shadowBlur=0),e.fillStyle=m>i*.45?s.extrudeDark:s.extrudeMid,e.fillText(t,a+m*.46,n+m*.96),e.restore();if(r.glowColor&&(e.save(),e.shadowColor=r.glowColor,e.shadowBlur=r.glowBlur||22,e.fillStyle="rgba(255,255,255,0.01)",e.fillText(t,a,n),e.restore()),l>0){const m=e.createLinearGradient(a,w,a+(c?18:0),C);m.addColorStop(0,s.bevelTop),m.addColorStop(.5,s.extrudeMid),m.addColorStop(1,s.bevelBot),e.lineWidth=l*2,e.strokeStyle=m,e.strokeText(t,a,n)}const M=c?Math.round((C-w)*.16):0,k=e.createLinearGradient(a,w,a+M,C);s.stops.forEach(([m,x])=>k.addColorStop(m,x)),e.fillStyle=k,e.fillText(t,a,n),e.save(),e.globalAlpha=.34,e.fillStyle="#ffffff",e.fillText(t,a-.6,n-.9),e.restore(),e.restore()}function Co(e,t,a,n,r,s=20){e.beginPath(),e.moveTo(t+8,a),e.lineTo(t+n-s,a),e.lineTo(t+n,a+s),e.lineTo(t+n,a+r-8),e.quadraticCurveTo(t+n,a+r,t+n-8,a+r),e.lineTo(t+s,a+r),e.lineTo(t,a+r-s),e.lineTo(t,a+8),e.quadraticCurveTo(t,a,t+8,a),e.closePath()}function As(e,t,a,n,r){e.beginPath(),e.moveTo(t+26,a),e.lineTo(t+n-26,a),e.lineTo(t+n,a+26),e.lineTo(t+n-12,a+r*.72),e.lineTo(t+n*.5,a+r),e.lineTo(t+12,a+r*.74),e.lineTo(t,a+26),e.closePath()}function wi(e,t,a,n){e.beginPath();for(let r=0;r<6;r++){const s=Math.PI/3*r-Math.PI/6,o=t+Math.cos(s)*n,i=a+Math.sin(s)*n;r===0?e.moveTo(o,i):e.lineTo(o,i)}e.closePath()}function Pi(e,t,a,n){e.save(),wi(e,t,a,34);const r=e.createLinearGradient(t-28,a-30,t+28,a+30);r.addColorStop(0,"#162038"),r.addColorStop(.55,"#070b15"),r.addColorStop(1,"#0d1527"),e.fillStyle=r,e.fill();const s=e.createLinearGradient(t-28,a-30,t+28,a+30);s.addColorStop(0,"#ffffff"),s.addColorStop(.45,n.accentBright),s.addColorStop(1,n.accent+"66"),e.lineWidth=2.2,e.strokeStyle=s,e.stroke(),e.restore()}function xi(e,t,a,n){e.save(),e.translate(t,a),e.scale(.84,.84);const r=e.createLinearGradient(0,-24,0,24);r.addColorStop(0,"#ffffff"),r.addColorStop(.5,"#cbd5e1"),r.addColorStop(1,"#94a3b8"),e.strokeStyle=r,e.fillStyle=r,e.lineWidth=3.2,e.lineCap="round",e.lineJoin="round",Ca(e,-22,-18,44,40,7),e.stroke(),e.fillStyle=n.accentBright+"66",e.fillRect(-20,-16,40,10),e.beginPath(),e.moveTo(-22,-6),e.lineTo(22,-6),e.moveTo(-10,-25),e.lineTo(-10,-14),e.moveTo(10,-25),e.lineTo(10,-14),e.stroke(),e.fillStyle="#ffffff";for(let s=0;s<3;s++)for(let o=0;o<4;o++)e.beginPath(),e.arc(-13.5+o*9,2.5+s*7.2,2.1,0,Math.PI*2),e.fill();e.restore()}function Ci(e,t,a,n,r){e.save(),e.translate(t,a),e.scale(.84,.84);const s=-21,o=21,i=-28,l=28,c=-19,d=19,y=String(n||"").toLowerCase();(y.includes("drive")||y.includes("ambos"))&&(e.beginPath(),e.moveTo(0,c),e.lineTo(o,c),e.lineTo(l,d),e.lineTo(0,d),e.closePath(),e.fillStyle=r.accentBright+"77",e.fill()),(y.includes("rev")||y.includes("ambos"))&&(e.beginPath(),e.moveTo(s,c),e.lineTo(0,c),e.lineTo(0,d),e.lineTo(i,d),e.closePath(),e.fillStyle=r.accentBright+"77",e.fill()),e.strokeStyle="#ffffff",e.lineWidth=2.8,e.lineJoin="round",e.beginPath(),e.moveTo(s,c),e.lineTo(o,c),e.lineTo(l,d),e.lineTo(i,d),e.closePath(),e.stroke(),e.lineWidth=2.3,e.beginPath(),e.moveTo(-24.5,0),e.lineTo(24.5,0),e.moveTo(0,c),e.lineTo(0,d),e.moveTo(-22.8,-9.5),e.lineTo(22.8,-9.5),e.moveTo(-26.2,10.5),e.lineTo(26.2,10.5),e.stroke(),e.restore()}function Ti(e,t,a,n,r){e.save(),e.translate(t,a),e.scale(.84,.84),/zurd/i.test(String(n||""))||e.scale(-1,1);const o=e.createLinearGradient(0,-26,0,24);o.addColorStop(0,"#ffffff"),o.addColorStop(.55,"#cbd5e1"),o.addColorStop(1,r.accentSoft),e.fillStyle=o,e.beginPath(),e.moveTo(-14,18),e.quadraticCurveTo(-18,6,-24,-2),e.quadraticCurveTo(-27,-7,-21,-9),e.quadraticCurveTo(-17,-9,-12,0),e.lineTo(-14,-18),e.quadraticCurveTo(-14,-23,-10,-23),e.quadraticCurveTo(-6,-23,-6,-18),e.lineTo(-5,-2),e.lineTo(-4,-23),e.quadraticCurveTo(-4,-28,0,-28),e.quadraticCurveTo(4,-28,4,-23),e.lineTo(4,-3),e.lineTo(7,-21),e.quadraticCurveTo(7,-26,11,-26),e.quadraticCurveTo(15,-26,15,-20),e.lineTo(13,-1),e.lineTo(18,-14),e.quadraticCurveTo(19,-18,22,-17),e.quadraticCurveTo(25,-16,24,-11),e.lineTo(18,11),e.quadraticCurveTo(15,24,1,24),e.quadraticCurveTo(-9,24,-14,18),e.closePath(),e.fill(),e.restore()}function Mi(e,t,a,n){e.save(),e.translate(t,a),e.scale(.86,.86),e.rotate(-.62);const r=e.createLinearGradient(-15,-30,15,26);r.addColorStop(0,"#ffffff"),r.addColorStop(.5,n.accentBright),r.addColorStop(1,"#94a3b8"),e.strokeStyle=r,e.fillStyle="#ffffff",e.lineWidth=3.2,e.lineCap="round",e.lineJoin="round",e.beginPath(),e.ellipse(0,-10,15.5,19.5,0,0,Math.PI*2),e.fillStyle=n.accent+"35",e.fill(),e.stroke(),e.beginPath(),e.moveTo(-5,9),e.lineTo(-3,25),e.lineTo(3,25),e.lineTo(5,9),e.stroke(),e.fillStyle="#ffffff",[[-5,-19],[0,-20],[5,-19],[-8,-12],[-2.7,-12],[2.7,-12],[8,-12],[-7,-5],[0,-5],[7,-5],[-4,1],[4,1]].forEach(([o,i])=>{e.beginPath(),e.arc(o,i,1.9,0,Math.PI*2),e.fill()}),e.restore()}function Ii(e,t,a,n,r,s){const o=bs(s,r);e.save(),e.translate(t,a),e.scale(n,n),e.save(),e.beginPath(),e.moveTo(0,-82),e.lineTo(74,-44),e.lineTo(62,54),e.lineTo(0,92),e.lineTo(-62,54),e.lineTo(-74,-44),e.closePath(),e.fillStyle="#04070f",e.shadowColor="rgba(0,0,0,0.85)",e.shadowBlur=20,e.fill();const i=e.createLinearGradient(-60,-80,60,80);i.addColorStop(0,r.accent+"58"),i.addColorStop(.5,"rgba(8, 13, 28, 0.92)"),i.addColorStop(1,r.courtGlow2+"48"),e.shadowColor=r.accent,e.shadowBlur=22,e.fillStyle=i,e.fill(),e.shadowBlur=0,e.lineWidth=2.6;const l=e.createLinearGradient(-70,-80,70,80);l.addColorStop(0,"#ffffff"),l.addColorStop(.5,r.accentBright),l.addColorStop(1,o.extrudeMid),e.strokeStyle=l,e.stroke(),e.restore(),e.save(),e.beginPath(),e.moveTo(-64,18),e.quadraticCurveTo(10,-78,72,-36),e.quadraticCurveTo(8,-56,-54,24),e.closePath(),e.fillStyle=r.accentBright+"aa",e.shadowColor=r.accentBright,e.shadowBlur=14,e.fill(),e.restore();const c=e.createLinearGradient(0,-56,20,66);o.stops.forEach(([y,S])=>c.addColorStop(y,S)),e.save(),e.fillStyle=c,e.shadowColor="rgba(0,0,0,0.85)",e.shadowBlur=14,e.shadowOffsetY=5,e.beginPath(),e.arc(-6,-34,11.5,0,Math.PI*2),e.fill(),e.beginPath(),e.moveTo(-18,-18),e.quadraticCurveTo(-34,-12,-52,4),e.quadraticCurveTo(-56,8,-48,12),e.quadraticCurveTo(-32,0,-21,-4),e.quadraticCurveTo(-24,14,-26,24),e.quadraticCurveTo(-40,42,-58,56),e.quadraticCurveTo(-63,60,-54,64),e.quadraticCurveTo(-34,52,-12,26),e.quadraticCurveTo(14,34,24,54),e.quadraticCurveTo(27,63,38,63),e.quadraticCurveTo(42,60,35,52),e.quadraticCurveTo(28,30,8,14),e.quadraticCurveTo(12,-2,16,-14),e.quadraticCurveTo(32,-26,46,-42),e.quadraticCurveTo(48,-48,41,-49),e.quadraticCurveTo(26,-35,8,-22),e.quadraticCurveTo(-4,-22,-18,-18),e.closePath(),e.fill(),e.save(),e.translate(55,-55),e.rotate(.65),e.beginPath(),e.ellipse(0,0,12.5,16.5,0,0,Math.PI*2),e.fill(),e.fillRect(-2.4,14,4.8,12),e.fillStyle="#070b15",[[-4.5,-6],[0,-7],[4.5,-6],[-5.5,0],[0,0],[5.5,0],[-3.8,6],[3.8,6]].forEach(([y,S])=>{e.beginPath(),e.arc(y,S,1.55,0,Math.PI*2),e.fill()}),e.restore(),e.beginPath(),e.arc(24,-64,5.2,0,Math.PI*2),e.fillStyle=r.accentBright,e.shadowColor=r.accentBright,e.shadowBlur=12,e.fill(),e.restore(),e.restore()}function qa(e,t,a,n,r,s){if(!t)return;const o=t.naturalWidth||t.width,i=t.naturalHeight||t.height;if(!o||!i)return;const l=Math.min(r/o,s/i),c=o*l,d=i*l,y=a+(r-c)/2,S=n+(s-d)/2;e.save();const h=e.createRadialGradient(y+c/2,S+d/2,10,y+c/2,S+d/2,Math.max(c,d)*.68);h.addColorStop(0,"rgba(255, 255, 255, 0.14)"),h.addColorStop(1,"transparent"),e.fillStyle=h,e.fillRect(a-18,n-14,r+36,s+28),e.shadowColor="rgba(0,0,0,0.85)",e.shadowBlur=18,e.drawImage(t,y,S,c,d),e.restore()}function Ei(e,t,a,n){const r=[[[24,24],[380,24],[190,280],"rgba(255,255,255,0.035)"],[[380,24],[690,24],[520,240],"rgba(255,255,255,0.018)"],[[690,24],[1056,24],[880,310],"rgba(255,255,255,0.045)"],[[24,280],[190,280],[340,560],"rgba(255,255,255,0.025)"],[[190,280],[520,240],[340,560],"rgba(0,0,0,0.18)"],[[520,240],[880,310],[640,620],"rgba(255,255,255,0.03)"],[[880,310],[1056,360],[1056,740],"rgba(0,0,0,0.22)"],[[24,580],[340,560],[210,920],"rgba(255,255,255,0.032)"],[[340,560],[640,620],[510,960],"rgba(255,255,255,0.02)"],[[640,620],[1056,740],[820,1020],"rgba(255,255,255,0.038)"],[[24,920],[510,960],[290,1140],"rgba(0,0,0,0.20)"]];e.save(),r.forEach(([o,i,l,c])=>{e.beginPath(),e.moveTo(o[0],o[1]),e.lineTo(i[0],i[1]),e.lineTo(l[0],l[1]),e.closePath(),e.fillStyle=c,e.fill(),e.lineWidth=1.2,e.strokeStyle=n.accentBright+"1c",e.stroke()}),[{x0:140,x1:420,bx0:360,bx1:680,alpha:.14},{x0:520,x1:780,bx0:200,bx1:540,alpha:.11},{x0:760,x1:990,bx0:560,bx1:940,alpha:.09}].forEach(o=>{const i=e.createLinearGradient((o.x0+o.x1)/2,40,(o.bx0+o.bx1)/2,980);i.addColorStop(0,n.accentBright+Math.round(o.alpha*255).toString(16).padStart(2,"0")),i.addColorStop(.65,n.accent+"14"),i.addColorStop(1,"transparent"),e.beginPath(),e.moveTo(o.x0,20),e.lineTo(o.x1,20),e.lineTo(o.bx1,1020),e.lineTo(o.bx0,1020),e.closePath(),e.fillStyle=i,e.fill()});for(let o=0;o<34;o++){const i=48+(o*197+43)%984,l=210+(o*151+89)%860,c=2.2+o%4*1.4;e.save(),e.translate(i,l),e.rotate(Math.PI/4),e.globalAlpha=.18+o%5*.09,e.fillStyle=o%3===0?"#ffffff":n.accentBright,e.fillRect(-c/2,-c/2,c,c),e.restore()}e.restore()}function Ai(e,t,a,n,r,s,o){const i=bs(o,s),l=n-10,c=n-10,d=t-l*2,y=a-c*2,S=r+4,h=n+6,w=n+6,C=t-h*2,M=a-w*2,k=r-3,m=[[l+S,c],[l+d-S,c],[l+d,c+S],[l+d,c+y-S],[l+d-S,c+y],[l+S,c+y],[l,c+y-S],[l,c+S]],x=[[h+k,w],[h+C-k,w],[h+C,w+k],[h+C,w+M-k],[h+C-k,w+M],[h+k,w+M],[h,w+M-k],[h,w+k]],E=i.edgeFaces||Pa.chrome.edgeFaces;e.save();for(let A=0;A<8;A++){const R=(A+1)%8,q=m[A],_=m[R],F=x[R],B=x[A];e.beginPath(),e.moveTo(q[0],q[1]),e.lineTo(_[0],_[1]),e.lineTo(F[0],F[1]),e.lineTo(B[0],B[1]),e.closePath();const p=e.createLinearGradient(q[0],q[1],F[0],F[1]),u=E[A];p.addColorStop(0,u[0]),p.addColorStop(.55,u[1]),p.addColorStop(1,u[2]),e.fillStyle=p,e.fill(),e.beginPath(),e.moveTo(q[0],q[1]),e.lineTo(B[0],B[1]),e.strokeStyle="rgba(0,0,0,0.45)",e.lineWidth=1.5,e.stroke()}xa(e,l,c,d,y,S),e.lineWidth=2.2,e.strokeStyle="rgba(255,255,255,0.42)",e.stroke(),xa(e,h,w,C,M,k),e.lineWidth=5,e.strokeStyle="#03050a",e.stroke(),xa(e,h+1.5,w+1.5,C-3,M-3,k-1),e.lineWidth=2.4,e.strokeStyle=s.accentBright,e.shadowColor=s.accent,e.shadowBlur=16,e.stroke(),e.shadowBlur=0,[[(m[7][0]+m[0][0])/2,(m[7][1]+m[0][1])/2],[(m[1][0]+m[2][0])/2,(m[1][1]+m[2][1])/2],[(m[3][0]+m[4][0])/2,(m[3][1]+m[4][1])/2],[(m[5][0]+m[6][0])/2,(m[5][1]+m[6][1])/2]].forEach(([A,R])=>{e.save(),e.translate(A,R),e.rotate(Math.PI/4),e.fillStyle="#050811",e.fillRect(-7,-7,14,14),e.fillStyle=s.accentBright,e.fillRect(-4.5,-4.5,9,9),e.fillStyle="#ffffff",e.fillRect(-2,-2,4,4),e.restore()}),Ta(e,l+S+16,c+12,20,s.accentBright),Ta(e,l+d-S-10,c+y-12,18,s.accentBright),e.restore()}function rr(e,t,a=null){if(!e||!t)return;const n=1080,r=1350;e.width!==n&&(e.width=n),e.height!==r&&(e.height=r);const s=e.getContext("2d");if(!s)return;const o=qt[t.theme]||qt.diamond,i=t.metalFinish||o.defaultMetal||"chrome",l=bs(i,o),c=ki(s),{prefs:d}=b,y=Q=>Q?a&&a.has(Q)?a.get(Q)||null:hi(Q):null,S=t.bgMode==="ai"&&t.cutoutPhoto?t.cutoutPhoto:t.origPhoto,h=y(S),w=y(de.logo1),C=y(de.logo2);s.clearRect(0,0,n,r),xa(s,8,8,n-16,r-16,52),s.fillStyle="#03050a",s.fill();const M=24,k=44;s.save(),xa(s,M+4,M+4,n-(M+4)*2,r-(M+4)*2,k-2),s.clip();const m=s.createRadialGradient(390,520,40,540,640,920);m.addColorStop(0,o.bgMid),m.addColorStop(.55,o.bgTop),m.addColorStop(1,o.bgBot),s.fillStyle=m,s.fillRect(0,0,n,r),c&&(s.save(),s.globalAlpha=.36,s.fillStyle=c,s.fillRect(0,0,n,r),s.restore());const x=s.createRadialGradient(320,540,15,320,540,480);x.addColorStop(0,o.courtGlow+"68"),x.addColorStop(.5,o.courtGlow2+"24"),x.addColorStop(1,"transparent"),s.fillStyle=x,s.fillRect(0,0,n,r);const E=s.createRadialGradient(840,220,10,840,220,440);E.addColorStop(0,o.accentBright+"42"),E.addColorStop(1,"transparent"),s.fillStyle=E,s.fillRect(0,0,n,r);const T=s.createLinearGradient(0,810,0,r);if(T.addColorStop(0,"rgba(0,0,0,0)"),T.addColorStop(.32,o.courtGlow2+"3a"),T.addColorStop(1,o.bgBot),s.fillStyle=T,s.fillRect(0,810,n,r-810),s.save(),s.strokeStyle=o.accentBright+"34",s.lineWidth=2.6,s.beginPath(),s.moveTo(24,855),s.lineTo(n-24,855),s.moveTo(540,855),s.lineTo(540,1180),s.moveTo(180,855),s.lineTo(-40,1160),s.moveTo(900,855),s.lineTo(1120,1160),s.moveTo(24,985),s.lineTo(n-24,985),s.stroke(),s.restore(),Ei(s,n,r,o),h){const Q=h.naturalWidth||h.width,te=h.naturalHeight||h.height,$e=920*(Number(t.zoom)||1)/te,ie=Q*$e,ne=te*$e,Fe=335+(Number(t.offsetX)||0),Ge=685+(Number(t.offsetY)||0),Mt=Fe-ie/2,ut=Ge-ne/2,Wa=t.bgMode==="ai"&&!!t.cutoutPhoto||t.origHasAlpha,It=s.createRadialGradient(Fe,Ge-60,20,Fe,Ge-40,Math.max(ie,ne)*.54);if(It.addColorStop(0,o.accentBright+"78"),It.addColorStop(.42,o.accent+"2a"),It.addColorStop(1,"transparent"),s.fillStyle=It,s.fillRect(24,170,740,960),Wa){const qe=document.createElement("canvas");qe.width=n,qe.height=r;const ge=qe.getContext("2d");ge.drawImage(h,Mt,ut,ie,ne);const Ke=ut+ne,ha=Math.max(ut,Ke-86);if(Ke>ha+1){ge.globalCompositeOperation="destination-in";const Qt=ge.createLinearGradient(0,ha,0,Ke);Qt.addColorStop(0,"rgba(0,0,0,1)"),Qt.addColorStop(1,"rgba(0,0,0,0)"),ge.fillStyle=Qt,ge.fillRect(0,0,n,r)}s.save(),s.shadowColor="rgba(0, 0, 0, 0.85)",s.shadowBlur=34,s.drawImage(qe,0,0),s.restore()}else{const qe=document.createElement("canvas");qe.width=720,qe.height=960;const ge=qe.getContext("2d");ge.drawImage(h,Mt-24,ut-180,ie,ne),ge.globalCompositeOperation="destination-in";const Ke=ge.createRadialGradient(340,420,140,340,430,380);Ke.addColorStop(0,"rgba(0,0,0,1)"),Ke.addColorStop(.72,"rgba(0,0,0,0.92)"),Ke.addColorStop(1,"rgba(0,0,0,0)"),ge.fillStyle=Ke,ge.fillRect(0,0,720,960),s.drawImage(qe,24,180)}}else{s.save();const Q=s.createLinearGradient(320,340,320,960);Q.addColorStop(0,o.accentBright+"28"),Q.addColorStop(.55,o.accent+"14"),Q.addColorStop(1,"transparent"),s.fillStyle=Q,s.strokeStyle=o.accentBright+"52",s.lineWidth=2.4,s.beginPath(),s.arc(322,462,86,0,Math.PI*2),s.fill(),s.stroke(),s.beginPath(),s.moveTo(156,975),s.quadraticCurveTo(176,616,322,588),s.quadraticCurveTo(468,616,488,975),s.closePath(),s.fill(),s.stroke();const te=148,se=338,$e=348,ie=580,ne=28;s.strokeStyle=o.accentBright+"7a",s.lineWidth=3,s.beginPath(),s.moveTo(te,se+ne),s.lineTo(te,se),s.lineTo(te+ne,se),s.moveTo(te+$e-ne,se),s.lineTo(te+$e,se),s.lineTo(te+$e,se+ne),s.moveTo(te,se+ie-ne),s.lineTo(te,se+ie),s.lineTo(te+ne,se+ie),s.moveTo(te+$e-ne,se+ie),s.lineTo(te+$e,se+ie),s.lineTo(te+$e,se+ie-ne),s.stroke(),Ca(s,210,742,224,54,12),s.fillStyle="rgba(4, 8, 18, 0.72)",s.fill(),s.lineWidth=1.6,s.strokeStyle=o.accentBright+"88",s.stroke(),s.textAlign="center",s.textBaseline="middle",s.font='700 22px "Chakra Petch", "Plus Jakarta Sans", sans-serif',yt(s,"SUBÍ TU FOTO",322,769,{metalKey:i,theme:o,fontSize:22,extrude:2,bevelWidth:.9}),s.restore()}s.save(),s.beginPath(),s.moveTo(20,20),s.lineTo(1060,20),s.lineTo(1060,152),s.lineTo(20,294),s.closePath();const A=s.createLinearGradient(0,20,760,270);A.addColorStop(0,"#04060c"),A.addColorStop(.55,"#0e1324"),A.addColorStop(1,"#05070e"),s.fillStyle=A,s.fill(),s.save(),s.clip(),c&&(s.globalAlpha=.75,s.fillStyle=c,s.fillRect(0,0,n,310)),s.globalAlpha=1,s.beginPath(),s.moveTo(20,20),s.lineTo(540,20),s.lineTo(360,250),s.lineTo(20,250),s.closePath();const R=s.createLinearGradient(20,20,420,240);R.addColorStop(0,"rgba(255,255,255,0.08)"),R.addColorStop(1,"transparent"),s.fillStyle=R,s.fill(),s.restore(),s.beginPath(),s.moveTo(20,294),s.lineTo(682,202),s.strokeStyle=o.accentBright,s.lineWidth=6,s.shadowColor=o.accent,s.shadowBlur=22,s.stroke(),s.shadowBlur=0,s.beginPath(),s.moveTo(20,286),s.lineTo(678,194),s.strokeStyle="rgba(255,255,255,0.75)",s.lineWidth=1.6,s.stroke(),s.restore();const q=(de.subTitle||"").trim()||(d.rankingName&&d.rankingName!=="Mi Ranking"?d.rankingName:"DIAMOND SERIES · PRO");w&&C?(qa(s,w,54,42,266,168),s.save(),s.beginPath(),s.moveTo(338,72),s.lineTo(324,174),s.strokeStyle=o.accentBright+"55",s.lineWidth=2,s.stroke(),s.restore(),qa(s,C,350,38,306,146)):w?(qa(s,w,60,44,306,166),t.showAppBrand&&(Es(s,446,110,96,o),s.save(),s.textAlign="left",s.textBaseline="alphabetic",s.font='italic 900 26px "Barlow Condensed", sans-serif',yt(s,"PÁDEL CONTROL SÉ",504,108,{metalKey:i,theme:o,fontSize:26,extrude:3,bevelWidth:.9}),s.fillStyle=o.accentSoft,s.font='700 14px "Chakra Petch", "Plus Jakarta Sans", sans-serif',s.fillText(q.toUpperCase().slice(0,22),506,131),s.restore())):C?(Es(s,124,124,128,o),s.save(),s.strokeStyle="rgba(255,255,255,0.18)",s.lineWidth=2,s.beginPath(),s.moveTo(202,178),s.lineTo(226,54),s.stroke(),s.restore(),qa(s,C,226,36,424,156)):(Es(s,142,134,150,o),s.save(),s.textAlign="left",s.textBaseline="alphabetic",s.font='italic 900 48px "Barlow Condensed", sans-serif',yt(s,"PÁDEL CONTROL SÉ",236,122,{metalKey:i,theme:o,fontSize:48,extrude:4,bevelWidth:1.2,glowColor:o.accent+"66",glowBlur:18}),s.fillStyle=o.accentBright,s.font='700 19px "Chakra Petch", "Plus Jakarta Sans", sans-serif',s.fillText(q.toUpperCase().slice(0,26),238,156),s.restore()),s.save();const _=670,F=48,B=342,p=266;As(s,_,F,B,p);const u=s.createLinearGradient(_,F,_+B,F+p);o.badgeStops.forEach((Q,te)=>u.addColorStop(te/(o.badgeStops.length-1),Q)),s.shadowColor=o.accent,s.shadowBlur=38,s.fillStyle=u,s.fill(),s.save(),s.clip(),s.shadowBlur=0,c&&(s.globalAlpha=.25,s.fillStyle=c,s.fillRect(_,F,B,p)),s.globalAlpha=1,s.beginPath(),s.moveTo(_,F),s.lineTo(_+B,F),s.lineTo(_+B*.42,F+p*.56),s.lineTo(_,F+p*.34),s.closePath();const f=s.createLinearGradient(_,F,_+B,F+p*.6);f.addColorStop(0,"rgba(255,255,255,0.28)"),f.addColorStop(1,"rgba(255,255,255,0.02)"),s.fillStyle=f,s.fill(),s.beginPath(),s.moveTo(_+B*.42,F+p*.56),s.lineTo(_+B,F+26),s.lineTo(_+B,F+p),s.closePath(),s.fillStyle="rgba(0,0,0,0.22)",s.fill(),s.restore(),s.shadowBlur=0,As(s,_,F,B,p);const $=s.createLinearGradient(_,F,_+B,F+p);$.addColorStop(0,"#ffffff"),$.addColorStop(.48,l.stops[2][1]),$.addColorStop(.52,l.extrudeMid),$.addColorStop(1,"#ffffff"),s.lineWidth=5,s.strokeStyle=$,s.stroke(),As(s,_+9,F+9,B-18,p-20),s.lineWidth=1.4,s.strokeStyle="rgba(255,255,255,0.38)",s.stroke(),s.textAlign="center",s.textBaseline="middle",s.font='700 25px "Chakra Petch", "Plus Jakarta Sans", sans-serif',yt(s,"CATEGORÍA",_+B/2,F+52,{metalKey:i,theme:o,fontSize:25,extrude:2,bevelWidth:.8}),s.strokeStyle="rgba(255,255,255,0.45)",s.lineWidth=1.8,s.beginPath(),s.moveTo(_+42,F+74),s.lineTo(_+B-42,F+74),s.stroke();const P=(t.category||"—").trim(),L=ya(s,P,B-76,128,50,Q=>`italic 700 ${Q}px "Barlow Condensed", sans-serif`);yt(s,P,_+B/2-4,F+160,{metalKey:i,theme:o,fontSize:L,extrude:4,bevelWidth:.85,glowColor:o.accentBright+"77",glowBlur:22}),Ta(s,_+B-18,F+18,28,o.accentBright),s.restore();const j=String(t.age||"").trim(),W=j?/^\d+$/.test(j)?`${j} años`:j:"—",V=(t.position||"Drive").trim(),U=(t.hand||"Diestro").trim(),re=(t.bestShot||"Víbora").trim(),ee=[{label:"EDAD",value:W,drawIcon:(Q,te)=>xi(s,Q,te,o)},{label:"POSICIÓN",value:V,drawIcon:(Q,te)=>Ci(s,Q,te,V,o)},{label:"PERFIL",value:U,drawIcon:(Q,te)=>Ti(s,Q,te,U,o)},{label:"MEJOR GOLPE",value:re,drawIcon:(Q,te)=>Mi(s,Q,te,o)}],Z=556,xe=474,me=128,ct=352,Jt=24;ee.forEach((Q,te)=>{const se=ct+te*(me+Jt);s.save(),Co(s,Z,se,xe,me,22);const $e=s.createLinearGradient(Z,se,Z+xe,se+me);$e.addColorStop(0,"rgba(7, 10, 22, 0.94)"),$e.addColorStop(.55,"rgba(13, 20, 42, 0.92)"),$e.addColorStop(1,"rgba(5, 8, 18, 0.95)"),s.shadowColor="rgba(0, 0, 0, 0.72)",s.shadowBlur=22,s.shadowOffsetY=6,s.fillStyle=$e,s.fill(),s.save(),s.clip(),s.shadowBlur=0,c&&(s.globalAlpha=.42,s.fillStyle=c,s.fillRect(Z,se,xe,me)),s.globalAlpha=1;const ie=s.createRadialGradient(Z+20,se+me/2,4,Z+20,se+me/2,130);ie.addColorStop(0,o.accent+"48"),ie.addColorStop(1,"transparent"),s.fillStyle=ie,s.fillRect(Z,se,160,me),s.fillStyle="rgba(255,255,255,0.055)",s.fillRect(Z,se,xe,me*.4),s.fillStyle=o.accentBright,s.shadowColor=o.accentBright,s.shadowBlur=12,s.fillRect(Z,se+12,6,me-28),s.restore(),s.shadowBlur=0;const ne=s.createLinearGradient(Z,se,Z+xe,se+me);ne.addColorStop(0,"#ffffff"),ne.addColorStop(.32,l.stops[2][1]),ne.addColorStop(.5,o.accentBright),ne.addColorStop(.75,"#cbd5e1"),ne.addColorStop(1,l.extrudeMid),s.lineWidth=2.6,s.strokeStyle=ne,s.stroke(),Pi(s,Z+58,se+me/2,o),Q.drawIcon(Z+58,se+me/2),s.textAlign="left",s.textBaseline="alphabetic",s.fillStyle=o.accentSoft,s.font='700 19px "Chakra Petch", "Plus Jakarta Sans", sans-serif',s.fillText(Q.label,Z+114,se+41),s.fillStyle=o.accentBright+"66",s.fillRect(Z+114,se+48,34,2);const Fe=ya(s,Q.value,xe-140,52,28,Ge=>`italic 700 ${Ge}px "Barlow Condensed", sans-serif`);yt(s,Q.value,Z+114,se+104,{metalKey:i,theme:o,fontSize:Fe,extrude:2,bevelWidth:.55}),s.restore()}),s.save();const et=1106,Je=962,We=1286,dt=1142;s.beginPath(),s.moveTo(20,et),s.lineTo(n-20,Je),s.lineTo(n-20,dt),s.lineTo(20,We),s.closePath();const Ce=s.createLinearGradient(0,Je,n,We);Ce.addColorStop(0,o.ribbonFill[0]),Ce.addColorStop(.45,o.ribbonFill[1]),Ce.addColorStop(1,o.ribbonFill[2]),s.fillStyle=Ce,s.fill(),s.save(),s.clip(),c&&(s.globalAlpha=.65,s.fillStyle=c,s.fillRect(0,940,n,380)),s.globalAlpha=1;for(let Q=0;Q<4;Q++){const te=640+Q*28;s.beginPath(),s.moveTo(te,950),s.lineTo(te+14,950),s.lineTo(te-56,1280),s.lineTo(te-70,1280),s.closePath(),s.fillStyle=o.accentBright+"14",s.fill()}const tt=s.createLinearGradient(0,Je,0,We);tt.addColorStop(0,"rgba(255,255,255,0.09)"),tt.addColorStop(.48,"rgba(255,255,255,0.01)"),tt.addColorStop(.5,"rgba(0,0,0,0.35)"),tt.addColorStop(1,"transparent"),s.fillStyle=tt,s.fillRect(0,950,n,360),s.restore(),s.beginPath(),s.moveTo(20,We),s.lineTo(n-20,dt),s.lineTo(n-20,r-20),s.lineTo(20,r-20),s.closePath(),s.fillStyle="#04060c",s.fill(),c&&(s.save(),s.clip(),s.globalAlpha=.45,s.fillStyle=c,s.fillRect(0,1130,n,240),s.restore()),s.strokeStyle=o.accentBright,s.lineWidth=7,s.shadowColor=o.accent,s.shadowBlur=24,s.beginPath(),s.moveTo(20,et),s.lineTo(n-20,Je),s.moveTo(20,We),s.lineTo(n-20,dt),s.stroke(),s.shadowBlur=0,s.strokeStyle="#ffffff",s.lineWidth=2,s.beginPath(),s.moveTo(20,et),s.lineTo(n-20,Je),s.moveTo(20,We),s.lineTo(n-20,dt),s.stroke();const Kt=Math.atan2(Je-et,n-20-20),at=((t.name||"").trim()||"TU NOMBRE").toUpperCase(),Te=(t.nickname||"").trim().toUpperCase();if(s.save(),s.translate(74,1188),s.rotate(Kt),Te){const Q=`« ${Te} »`,te=ya(s,Q,636,28,17,ne=>`700 ${ne}px "Chakra Petch", "Plus Jakarta Sans", sans-serif`),se=Math.min(648,Math.ceil(s.measureText(Q).width)+28),$e=Math.round(te+14);s.save(),Co(s,0,-49-$e/2,se,$e,8),s.fillStyle="rgba(4, 7, 16, 0.78)",s.fill(),s.lineWidth=1.6,s.strokeStyle=o.accentBright+"aa",s.stroke(),s.textAlign="left",s.textBaseline="middle",s.fillStyle=o.accentBright,s.shadowColor=o.accent+"88",s.shadowBlur=10,s.fillText(Q,14,-49),s.restore();const ie=ya(s,at,668,86,38,ne=>`italic 800 ${ne}px "Barlow Condensed", sans-serif`);s.textAlign="left",s.textBaseline="middle",yt(s,at,0,22,{metalKey:i,theme:o,fontSize:ie,extrude:6,bevelWidth:1.7,glowColor:o.accent+"66",glowBlur:18}),Ta(s,-6,22-ie*.42,15,o.accentBright)}else{const Q=ya(s,at,668,102,42,te=>`italic 800 ${te}px "Barlow Condensed", sans-serif`);s.textAlign="left",s.textBaseline="middle",yt(s,at,0,0,{metalKey:i,theme:o,fontSize:Q,extrude:6,bevelWidth:1.8,glowColor:o.accent+"66",glowBlur:20}),Ta(s,-4,-Q*.44,17,o.accentBright)}s.restore(),Ii(s,888,1094,1.3,o,i),t.showAppBrand&&(s.textAlign="left",s.textBaseline="alphabetic",s.fillStyle="rgba(226, 232, 240, 0.52)",s.font='700 15px "Chakra Petch", "Plus Jakarta Sans", sans-serif',s.fillText("PÁDEL CONTROL SÉ · DIAMOND EDITION",74,r-44)),s.restore(),s.restore(),Ai(s,n,r,M,k,o,i)}function De(){const e=document.getElementById("pc-preview-canvas");e&&rr(e,ue())}async function Li(){if(document.fonts&&document.fonts.ready)try{await document.fonts.ready}catch{}const e=ue(),a=[e.bgMode==="ai"&&e.cutoutPhoto?e.cutoutPhoto:e.origPhoto,de.logo1,de.logo2].filter(s=>!!s),n=new Map;await Promise.all(a.map(async s=>{const o=await sr(s);o&&n.set(s,o)}));const r=document.createElement("canvas");return r.width=1080,r.height=1350,rr(r,e,n),new Promise(s=>{r.toBlob(o=>s(o),"image/png")})}function Ri(e){return`tarjeta-${String(e||"jugador").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")||"jugador"}-padel-se.png`}async function Bi(){const e=ue(),t=await Li();if(!t){D("No se pudo generar la imagen");return}yn(t,Ri(e.name)),D("¡Tarjeta HD descargada!")}async function Di(){var a;const e=ue();if(!String(e.name||"").trim()){D("Ingresá el nombre del jugador antes de guardar"),(a=document.getElementById("pc-name"))==null||a.focus();return}const t=await kn(e);z.render(),D(t?"✓ Tarjeta guardada en Mis Tarjetas":"Error al guardar en este navegador")}function ji(){const{ui:e}=b,t=ue(),a=La(),n=Object.values(qt),r=Object.values(Pa),s=qt[t.theme]||qt.diamond,o=t.metalFinish||s.defaultMetal||"chrome",i=e.playerCardReturnRoute&&e.playerCardReturnRoute!=="player-card"?e.playerCardReturnRoute:"home";return`
  <div class="page">
    <datalist id="pc-known-players">${a.map(l=>`<option value="${g(l)}">`).join("")}</datalist>
    <div class="page-h">
      <div class="page-h-top">
        <button class="icon-btn" data-nav="${g(i)}" title="Volver">${I.back}</button>
        <h1>Tarjeta de Jugador</h1>
        <button class="icon-btn" data-act="pc-new-blank" title="Nueva tarjeta en blanco">${I.plus}</button>
      </div>
    </div>
    <p class="muted" style="text-align:center;margin-bottom:16px">Subí una foto, completá tus datos y descargá tu tarjeta HD en alta calidad.</p>

    <div class="pc-layout">
      <div class="pc-preview-col">
        <div class="pc-preview-frame ${e.playerCardTouchDrag?"touch-drag":""}">
          <canvas id="pc-preview-canvas" class="pc-canvas ${e.playerCardTouchDrag?"touch-drag":""}" width="1080" height="1350"></canvas>
        </div>
        ${t.origPhoto?`
          <div style="display:flex;align-items:center;justify-content:center;gap:8px;flex-wrap:wrap;margin-top:8px">
            <button type="button" class="pc-touch-drag-btn ${e.playerCardTouchDrag?"active":""}" data-act="pc-toggle-touch-drag">
              ${e.playerCardTouchDrag?"✓ Listo (volver a deslizar página)":"✥ Mover foto en tarjeta"}
            </button>
          </div>
          <div class="pc-drag-hint">${e.playerCardTouchDrag?"📌 Arrastrá sobre la tarjeta para encuadrar la foto (scroll bloqueado)":'💡 En celular deslizás normal. Tocá "Mover foto en tarjeta" o usá los controles de abajo.'}</div>
        `:'<div class="pc-drag-hint" style="opacity:.75">📱 Podés deslizar la pantalla normalmente por toda la tarjeta.</div>'}
        <div class="btn-row">
          <button class="btn primary big" style="width:100%" data-act="pc-download">${I.dl} Descargar Imagen HD</button>
        </div>
        <button class="btn block" data-act="pc-save">${I.check} Guardar en Mis Tarjetas (${_e.length})</button>
      </div>

      <div>
        <div class="card">
          <h3>${I.camera} Foto y Recorte</h3>
          <div class="btn-row">
            <label class="btn primary" style="cursor:pointer;flex:2 1 180px">
              ${I.up} ${t.origPhoto?"Cambiar Foto (Galería / Archivo)":"Elegir Foto (Galería / Archivos)"}
              <input type="file" id="pc-photo-inp" accept="image/jpeg,image/png,image/webp,image/heic,image/heif,image/avif,.jpg,.jpeg,.png,.webp,.heic" style="display:none">
            </label>
            ${t.origPhoto?`<button class="btn danger sm" data-act="pc-clear-photo" style="flex:0 0 auto">${I.trash} Quitar</button>`:""}
          </div>

          <div class="seg" style="margin-top:12px">
            <button class="${t.bgMode==="ai"?"on":""}" data-pc-bgmode="ai" ${e.playerCardAiBusy?"disabled":""}>✨ Recorte IA (Sin fondo)</button>
            <button class="${t.bgMode==="instant"?"on":""}" data-pc-bgmode="instant" ${e.playerCardAiBusy?"disabled":""}>⚡ Modo Instantáneo</button>
          </div>

          <div id="pc-ai-status-box" class="pc-ai-status ${e.playerCardAiStatus==="ok"?"ok":e.playerCardAiStatus==="err"?"err":""}" style="display:${e.playerCardAiText?"flex":"none"}">
            ${g(e.playerCardAiText)}
          </div>

          ${t.origPhoto?`
          <div class="pc-sliders">
            <div class="pc-slider-row">
              <label for="pc-zoom">Zoom</label>
              <input type="range" id="pc-zoom" min="0.55" max="2.2" step="0.02" value="${Number(t.zoom||1).toFixed(2)}">
              <span id="pc-zoom-val">${Math.round(Number(t.zoom||1)*100)}%</span>
            </div>
            <div class="pc-slider-row">
              <label for="pc-offx">Posición X</label>
              <input type="range" id="pc-offx" min="-350" max="350" step="2" value="${Math.round(Number(t.offsetX||0))}">
              <span id="pc-offx-val">${Math.round(Number(t.offsetX||0))}</span>
            </div>
            <div class="pc-slider-row">
              <label for="pc-offy">Posición Y</label>
              <input type="range" id="pc-offy" min="-350" max="350" step="2" value="${Math.round(Number(t.offsetY||0))}">
              <span id="pc-offy-val">${Math.round(Number(t.offsetY||0))}</span>
            </div>
            <div style="display:flex;justify-content:flex-end">
              <button class="btn sm" data-act="pc-reset-frame">↺ Centrar foto</button>
            </div>
          </div>`:""}
        </div>

        <div class="card">
          <h3>${I.idCard} Datos del Jugador/a</h3>
          <div class="row wrap">
            <div class="field" style="flex:2 1 190px">
              <label for="pc-name">Nombre y Apellido</label>
              <input class="inp" id="pc-name" list="pc-known-players" value="${g(t.name||"")}" placeholder="Ej: Nestor García">
            </div>
            <div class="field" style="flex:1 1 140px">
              <label for="pc-nick">Apodo (Opcional)</label>
              <input class="inp" id="pc-nick" value="${g(t.nickname||"")}" placeholder="Ej: El Rayo">
            </div>
          </div>

          <div class="row wrap" style="margin-top:12px">
            <div class="field" style="flex:1 1 140px">
              <label for="pc-cat">Categoría</label>
              <input class="inp" id="pc-cat" value="${g(t.category||"")}" placeholder="Ej: 6ta, 4ta, Suma 10">
            </div>
            <div class="field" style="flex:0 1 130px">
              <label for="pc-age">Edad</label>
              <input class="inp" id="pc-age" inputmode="numeric" value="${g(t.age||"")}" placeholder="Ej: 52">
            </div>
          </div>
          <div class="pc-chips">
            ${ui.map(l=>`<button class="pc-chip ${t.category===l?"on":""}" data-pc-cat="${g(l)}">${g(l)}</button>`).join("")}
          </div>

          <div class="field" style="margin-top:14px">
            <label>Posición en cancha</label>
            <div class="seg">
              ${pi.map(l=>`<button class="${t.position===l?"on":""}" data-pc-pos="${g(l)}">${g(l)}</button>`).join("")}
            </div>
          </div>

          <div class="field" style="margin-top:14px">
            <label>Perfil (Mano hábil)</label>
            <div class="pc-chips">
              ${fi.map(l=>`<button class="pc-chip ${t.hand===l?"on":""}" data-pc-hand="${g(l)}">${g(l)}</button>`).join("")}
            </div>
          </div>

          <div class="field" style="margin-top:14px">
            <label for="pc-shot">Mejor Golpe</label>
            <input class="inp" id="pc-shot" value="${g(t.bestShot||"")}" placeholder="Ej: Víbora, Bandeja, Smash">
            <div class="pc-chips">
              ${mi.map(l=>`<button class="pc-chip ${t.bestShot===l?"on":""}" data-pc-shot="${g(l)}">${g(l)}</button>`).join("")}
            </div>
          </div>
        </div>

        <div class="card">
          <h3>🎨 Estilo Diamond y Logos</h3>
          <div class="field">
            <label>Tema de tarjeta</label>
            <div class="pc-themes">
              ${n.map(l=>`
                <button class="pc-theme-btn ${s.id===l.id?"on":""}" data-pc-theme="${g(l.id)}">
                  <span class="pc-theme-swatch" style="background:linear-gradient(135deg,${l.accentBright},${l.accent})"></span>
                  <span>${g(l.label)}</span>
                </button>`).join("")}
            </div>
          </div>

          <div class="field" style="margin-top:14px">
            <label>Acabado metálico 3D (Letras y Marco)</label>
            <div class="pc-themes">
              ${r.map(l=>`
                <button class="pc-theme-btn ${o===l.id?"on":""}" data-pc-metal="${g(l.id)}">
                  <span class="pc-metal-swatch" style="background:${l.swatch}"></span>
                  <span>${g(l.label)}</span>
                </button>`).join("")}
            </div>
          </div>

          <div class="pc-logos-grid" style="margin-top:14px">
            <div class="pc-logo-box">
              <small class="muted" style="font-size:11.5px;font-weight:700">Logo 1 (Izquierda)</small>
              ${de.logo1?`<img class="pc-logo-thumb" src="${de.logo1}" alt="Logo 1">`:'<small class="muted" style="font-size:11px">Por defecto: Logo Pádel Control SÉ</small>'}
              <div style="display:flex;gap:6px;flex-wrap:wrap;justify-content:center">
                <label class="btn sm" style="cursor:pointer">
                  ${I.up} ${de.logo1?"Cambiar":"Subir"}
                  <input type="file" id="pc-logo1-inp" accept="image/png,image/jpeg,image/webp,image/svg+xml,.png,.jpg,.jpeg,.webp,.svg" style="display:none">
                </label>
                ${de.logo1?`<button class="btn danger sm" data-pc-del-logo="1">${I.trash}</button>`:""}
              </div>
            </div>
            <div class="pc-logo-box">
              <small class="muted" style="font-size:11.5px;font-weight:700">Logo 2 (Centro)</small>
              ${de.logo2?`<img class="pc-logo-thumb" src="${de.logo2}" onerror="if(this.dataset.fb)return;this.dataset.fb='1';this.src='${St}'" alt="Logo 2">${de.logo2===St?'<small class="muted" style="font-size:10.5px;color:var(--cyan2)">Predeterminado: PRO PÁDEL</small>':""}`:'<small class="muted" style="font-size:11px">Sin logo central</small>'}
              <div style="display:flex;gap:6px;flex-wrap:wrap;justify-content:center">
                <label class="btn sm" style="cursor:pointer">
                  ${I.up} ${de.logo2?"Cambiar":"Subir"}
                  <input type="file" id="pc-logo2-inp" accept="image/png,image/jpeg,image/webp,image/svg+xml,.png,.jpg,.jpeg,.webp,.svg" style="display:none">
                </label>
                ${de.logo2!==St?'<button type="button" class="btn sm" data-act="pc-reset-logo2" title="Usar logo oficial PRO PÁDEL">↺ PRO PÁDEL</button>':""}
                ${de.logo2?`<button type="button" class="btn danger sm" data-pc-del-logo="2">${I.trash}</button>`:""}
              </div>
            </div>
          </div>

          <div class="field" style="margin-top:12px">
            <label for="pc-subtitle">Texto / Club de respaldo (si quitás los logos)</label>
            <input class="inp" id="pc-subtitle" value="${g(de.subTitle||"")}" placeholder="Ej: PRO PÁDEL · Torneo Apertura">
          </div>

          <div class="tog" style="margin-top:10px;padding:10px 0 0">
            <div><b>Mostrar sello Pádel Control SÉ</b><small>Marca sutil al pie de la tarjeta.</small></div>
            <label class="sw"><input type="checkbox" ${t.showAppBrand!==!1?"checked":""} id="pc-show-brand"><span></span></label>
          </div>
        </div>

        ${_e.length?`
        <div class="card">
          <h3>${I.idCard} Mis Tarjetas Guardadas (${_e.length})</h3>
          <div class="pc-saved-grid">
            ${_e.map(l=>{const c=(l.name||"JG").split(/\s+/).filter(Boolean).map(y=>y[0]).join("").slice(0,2).toUpperCase()||"JG",d=l.cutoutPhoto||l.origPhoto;return`
              <div class="pc-saved-card">
                <div class="pc-saved-top">
                  ${d?`<img class="pc-saved-ava" src="${d}" alt="${g(l.name)}">`:`<div class="pc-saved-ava">${g(c)}</div>`}
                  <div style="min-width:0;flex:1">
                    <b style="display:block;font-size:14px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${g(l.name||"Sin nombre")}</b>
                    <small class="muted" style="font-size:11.5px">${l.nickname?`«${g(l.nickname)}» · `:""}${g(l.category||"—")} · ${g(l.position||"")}</small>
                  </div>
                </div>
                <div style="display:flex;gap:6px">
                  <button class="btn sm" style="flex:1" data-pc-load="${g(l.id)}">Editar / Ver</button>
                  <button class="btn danger sm" data-pc-del="${g(l.id)}" title="Eliminar">${I.trash}</button>
                </div>
              </div>`}).join("")}
          </div>
        </div>`:""}
      </div>
    </div>

    ${vt()}
  </div>
  ${it("home")}`}function gt(e="cmp"){return`${e}_`+Math.random().toString(36).slice(2,6)+Date.now().toString(36).slice(-3)}function Tt(e){var t,a;if(!e)return null;if(e.type==="pair"){const n=(((t=e.players)==null?void 0:t[0])||"").trim()||"DRIVE",r=(((a=e.players)==null?void 0:a[1])||"").trim()||"REVÉS";return{players:[n,r],color:e.color||"#d4af37",label:ye(n,r),participantId:e.id}}return{players:[e.name||"Jugador",""],color:e.color||"#d4af37",label:e.name||"Jugador",participantId:e.id}}function ir(e,t={}){const a=t.participants||e.participants||[],n=t.phase||"league",r=t.group||null,s=!!t.doubleRound,o=a.length>=4&&a.every(h=>h.type==="player"),i=[];if(o){const h=a.length,w=Math.floor(h/4),C=h===4?3:h%4===0?h-1:h,M=new Array(h).fill(0),k=Array.from({length:h},()=>new Array(h).fill(0)),m=Array.from({length:h},()=>new Array(h).fill(0));for(let x=0;x<C;x++){const T=Array.from({length:h},(R,q)=>q).sort((R,q)=>M[R]!==M[q]?M[R]-M[q]:(R+x)%h-(q+x)%h).slice(0,w*4),A=new Set;for(let R=0;R<w;R++){const _=T.filter(W=>!A.has(W)).slice(0,4);_.forEach(W=>A.add(W));const F=[[[_[0],_[1]],[_[2],_[3]]],[[_[0],_[2]],[_[1],_[3]]],[[_[0],_[3]],[_[1],_[2]]]];let B=F[0],p=1/0;F.forEach(W=>{const[V,U]=W,re=(k[V[0]][V[1]]+k[U[0]][U[1]])*100,ee=m[V[0]][U[0]]+m[V[0]][U[1]]+m[V[1]][U[0]]+m[V[1]][U[1]],Z=re+ee;Z<p&&(p=Z,B=W)});const[u,f]=B;k[u[0]][u[1]]++,k[u[1]][u[0]]++,k[f[0]][f[1]]++,k[f[1]][f[0]]++,u.forEach(W=>f.forEach(V=>{m[W][V]++,m[V][W]++})),_.forEach(W=>{M[W]++});const $=a[u[0]],P=a[u[1]],L=a[f[0]],j=a[f[1]];i.push({id:gt("fx"),phase:n,roundIdx:x,roundLabel:r?`Grupo ${r} · Fecha ${x+1}`:`Fecha ${x+1}`,slotIdx:R,group:r,team0:{players:[$.name||"Jugador",P.name||"Jugador"],color:$.color||"#d4af37",label:ye($.name,P.name)},team1:{players:[L.name||"Jugador",j.name||"Jugador"],color:L.color||"#2f8cff",label:ye(L.name,j.name)},source0:null,source1:null,matchId:null,winnerSide:null,isBye:!1})}}return i}if(a.length<2)return i;const l=[...a];l.length%2===1&&l.push(null);const c=l.length,d=c-1,y=[...l],S=(h,w)=>{const C=[...y];for(let M=0;M<d;M++){let k=0;for(let x=0;x<c/2;x++){const E=C[x],T=C[c-1-x];if(E&&T){const A=w?x%2===0:M%2===1&&x===0,R=A?T:E,q=A?E:T,_=M+h;i.push({id:gt("fx"),phase:n,roundIdx:_,roundLabel:r?`Grupo ${r} · Fecha ${_+1}`:`Fecha ${_+1}`,slotIdx:k++,group:r,team0:Tt(R),team1:Tt(q),source0:null,source1:null,matchId:null,winnerSide:null,isBye:!1})}}const m=C.pop();C.splice(1,0,m)}};return S(0,!1),s&&S(d,!0),i}function Ni(e,t=2){const a=e.participants||[];if(a.length<4)return[];const n=Math.max(2,Math.min(4,Number(t)||2)),r=["A","B","C","D"].slice(0,n);a.forEach((o,i)=>{(!o.group||!r.includes(o.group))&&(o.group=r[i%n])});const s=[];return r.forEach(o=>{const i=a.filter(l=>l.group===o);i.length>=2&&s.push(...ir(e,{participants:i,phase:"group",group:o}))}),s}function To(e){return e===1?"Final":e===2?"Semifinales":e===4?"Cuartos de Final":e===8?"Octavos de Final":`Ronda de ${e*2}`}function Oi(e){let t=[0,1],a=2;for(;a<e;)a*=2,t=t.flatMap((n,r)=>r%2===0?[n,a-1-n]:[a-1-n,n]);return t}function lr(e,t=null){const a=(t||(e.participants||[]).map(Tt)).filter(y=>!!y);if(a.length<2)return[];let n=2;for(;n<a.length&&n<32;)n*=2;const r=Oi(n),s=[],o=n/2,i=To(o),l=[];for(let y=0;y<o;y++){const S=r[2*y],h=r[2*y+1],w=S<a.length?Ie(a[S]):null,C=h<a.length?Ie(a[h]):null,M=!!(w&&!C||!w&&C),k={id:gt("fx"),phase:"playoff",roundIdx:0,roundLabel:i,slotIdx:y,group:null,team0:w,team1:C,source0:null,source1:null,matchId:null,winnerSide:M?w?0:1:null,isBye:M};l.push(k),s.push(k)}let c=l,d=1;for(;c.length>1;){const y=c.length/2,S=To(y),h=[];for(let w=0;w<y;w++){const C={id:gt("fx"),phase:"playoff",roundIdx:d,roundLabel:S,slotIdx:w,group:null,team0:null,team1:null,source0:{fixtureId:c[2*w].id,pick:"winner"},source1:{fixtureId:c[2*w+1].id,pick:"winner"},matchId:null,winnerSide:null,isBye:!1};h.push(C),s.push(C)}c=h,d++}return s}function cr(e,t,a=null){if(!e||!Array.isArray(e.fixtures))return;const n=new Map(e.fixtures.map(o=>[o.id,o])),r=o=>o?a&&a.id===o?a:t.find(i=>i.id===o)||null:null;e.fixtures.forEach(o=>{if(o.isBye){o.winnerSide=o.team0?0:o.team1?1:null;return}if(o.matchId){const i=r(o.matchId);if(!i)o.matchId=null,o.winnerSide=null;else{const l=Ee(i);o.winnerSide=l.isDraw?"draw":l.matchWinner!==null?l.matchWinner:null}}}),e.fixtures.filter(o=>o.phase==="playoff").sort((o,i)=>o.roundIdx-i.roundIdx||o.slotIdx-i.slotIdx).forEach(o=>{const i=l=>{if(!l||!l.fixtureId)return null;const c=n.get(l.fixtureId);if(!c||c.winnerSide===null||c.winnerSide===void 0)return null;const d=c.winnerSide===0?c.team0:c.team1;return d?Ie(d):null};if(o.source0){const l=i(o.source0);o.matchId||(o.team0=l)}if(o.source1){const l=i(o.source1);o.matchId||(o.team1=l)}})}function dr(e,t,a){const n=nn(e),r=(a||[]).filter(d=>He(d)===e.id),s=new Set((e.fixtures||[]).filter(d=>d.phase==="group"&&d.group===t).map(d=>d.id)),o=r.filter(d=>{var y;return((y=d.competition)==null?void 0:y.fixtureId)&&s.has(d.competition.fixtureId)}),i=(e.participants||[]).filter(d=>d.group===t),l=e.rankingMode==="individual"?"individual":"pairs",c=Ut(o,{...n,entityMode:l,eloBaseMatches:r,seedParticipants:i});return c.sort((d,y)=>y.pts-d.pts||y.setsDiff-d.setsDiff||y.gamesDiff-d.gamesDiff||y.wins-d.wins||y.elo-d.elo),c}function _i(e,t){var l,c,d,y;if(!e)return!1;const a=Array.from(new Set((e.participants||[]).map(S=>S.group).filter(S=>!!S))).sort();if(a.length<2)return!1;const n=Math.max(1,Number(e.advancePerGroup)||2),r=a.map(S=>dr(e,S,t).slice(0,n).map(w=>{const C=(e.participants||[]).find(M=>{var k,m;return M.type==="pair"?en((k=M.players)==null?void 0:k[0],(m=M.players)==null?void 0:m[1])===w.key:(M.name||"").trim().toUpperCase()===w.key});return C?Tt(C):{players:[w.name,""],color:w.color||"#d4af37",label:w.name}})),s=[];for(let S=0;S<n;S++)if(S%2===0)for(let h=0;h<a.length;h++)(l=r[h])!=null&&l[S]&&s.push(r[h][S]);else if(a.length===2)for(let h=0;h<a.length;h++)(c=r[h])!=null&&c[S]&&s.push(r[h][S]);else if(a.length===4)for(let h=0;h<a.length;h++){const w=h^1;(d=r[w])!=null&&d[S]&&s.push(r[w][S])}else for(let h=0;h<a.length;h++){const w=(h+1)%a.length;(y=r[w])!=null&&y[S]&&s.push(r[w][S])}if(s.length<2)return!1;const o=(e.fixtures||[]).filter(S=>S.phase!=="playoff"),i=lr(e,s);return e.fixtures=[...o,...i],cr(e,t),!0}function Wi(e,t,a="auto",n=!1){if(n)return a==="0"||a==="1"?{ok:!0,winnerSide:Number(a),isDraw:!1}:{ok:!1,error:"Elegí qué pareja ganó por W.O."};if(a==="0"||a==="1")return{ok:!0,winnerSide:Number(a),isDraw:!1};let r=0,s=0,o=0,i=0;return(t||[]).forEach(l=>{const c=Number(l[0])||0,d=Number(l[1])||0;o+=c,i+=d,c>d?r++:d>c&&s++}),a==="draw"?r!==s||o!==i?{ok:!1,error:"Para guardar empate, ambos lados deben igualar el marcador"}:{ok:!0,winnerSide:"draw",isDraw:!0}:r>s?{ok:!0,winnerSide:0,isDraw:!1}:s>r?{ok:!0,winnerSide:1,isDraw:!1}:Pe(e)&&o===i?{ok:!0,winnerSide:"draw",isDraw:!0}:{ok:!1,error:"Empate en sets: elegí manualmente la pareja ganadora"}}/*! QRious v4.0.2 | (C) 2017 Alasdair Mercer | GPL v3 License | Based on jsqrencode | (C) 2010 tz@execpc.com */const Fi=function(){function e(p,u){var f;return typeof Object.create=="function"?f=Object.create(p):(r.prototype=p,f=new r,r.prototype=null),u&&a(!0,f,u),f}function t(p,u,f,$){var P=this;return typeof p!="string"&&($=f,f=u,u=p,p=null),typeof u!="function"&&($=f,f=u,u=function(){return P.apply(this,arguments)}),a(!1,u,P,$),u.prototype=e(P.prototype,f),u.prototype.constructor=u,u.class_=p||P.class_,u.super_=P,u}function a(p,u,f){for(var $,P,L=0,j=(f=o.call(arguments,2)).length;L<j;L++){P=f[L];for($ in P)p&&!s.call(P,$)||(u[$]=P[$])}}function n(){}var r=function(){},s=Object.prototype.hasOwnProperty,o=Array.prototype.slice,i=t;n.class_="Nevis",n.super_=Object,n.extend=i;var l=n,c=l.extend(function(p,u,f){this.qrious=p,this.element=u,this.element.qrious=p,this.enabled=!!f},{draw:function(p){},getElement:function(){return this.enabled||(this.enabled=!0,this.render()),this.element},getModuleSize:function(p){var u=this.qrious,f=u.padding||0,$=Math.floor((u.size-2*f)/p.width);return Math.max(1,$)},getOffset:function(p){var u=this.qrious,f=u.padding;if(f!=null)return f;var $=this.getModuleSize(p),P=Math.floor((u.size-$*p.width)/2);return Math.max(0,P)},render:function(p){this.enabled&&(this.resize(),this.reset(),this.draw(p))},reset:function(){},resize:function(){}}),d=c.extend({draw:function(p){var u,f,$=this.qrious,P=this.getModuleSize(p),L=this.getOffset(p),j=this.element.getContext("2d");for(j.fillStyle=$.foreground,j.globalAlpha=$.foregroundAlpha,u=0;u<p.width;u++)for(f=0;f<p.width;f++)p.buffer[f*p.width+u]&&j.fillRect(P*u+L,P*f+L,P,P)},reset:function(){var p=this.qrious,u=this.element.getContext("2d"),f=p.size;u.lineWidth=1,u.clearRect(0,0,f,f),u.fillStyle=p.background,u.globalAlpha=p.backgroundAlpha,u.fillRect(0,0,f,f)},resize:function(){var p=this.element;p.width=p.height=this.qrious.size}}),y=l.extend(null,{BLOCK:[0,11,15,19,23,27,31,16,18,20,22,24,26,28,20,22,24,24,26,28,28,22,24,24,26,26,28,28,24,24,26,26,26,28,28,24,26,26,26,28,28]}),S=l.extend(null,{BLOCKS:[1,0,19,7,1,0,16,10,1,0,13,13,1,0,9,17,1,0,34,10,1,0,28,16,1,0,22,22,1,0,16,28,1,0,55,15,1,0,44,26,2,0,17,18,2,0,13,22,1,0,80,20,2,0,32,18,2,0,24,26,4,0,9,16,1,0,108,26,2,0,43,24,2,2,15,18,2,2,11,22,2,0,68,18,4,0,27,16,4,0,19,24,4,0,15,28,2,0,78,20,4,0,31,18,2,4,14,18,4,1,13,26,2,0,97,24,2,2,38,22,4,2,18,22,4,2,14,26,2,0,116,30,3,2,36,22,4,4,16,20,4,4,12,24,2,2,68,18,4,1,43,26,6,2,19,24,6,2,15,28,4,0,81,20,1,4,50,30,4,4,22,28,3,8,12,24,2,2,92,24,6,2,36,22,4,6,20,26,7,4,14,28,4,0,107,26,8,1,37,22,8,4,20,24,12,4,11,22,3,1,115,30,4,5,40,24,11,5,16,20,11,5,12,24,5,1,87,22,5,5,41,24,5,7,24,30,11,7,12,24,5,1,98,24,7,3,45,28,15,2,19,24,3,13,15,30,1,5,107,28,10,1,46,28,1,15,22,28,2,17,14,28,5,1,120,30,9,4,43,26,17,1,22,28,2,19,14,28,3,4,113,28,3,11,44,26,17,4,21,26,9,16,13,26,3,5,107,28,3,13,41,26,15,5,24,30,15,10,15,28,4,4,116,28,17,0,42,26,17,6,22,28,19,6,16,30,2,7,111,28,17,0,46,28,7,16,24,30,34,0,13,24,4,5,121,30,4,14,47,28,11,14,24,30,16,14,15,30,6,4,117,30,6,14,45,28,11,16,24,30,30,2,16,30,8,4,106,26,8,13,47,28,7,22,24,30,22,13,15,30,10,2,114,28,19,4,46,28,28,6,22,28,33,4,16,30,8,4,122,30,22,3,45,28,8,26,23,30,12,28,15,30,3,10,117,30,3,23,45,28,4,31,24,30,11,31,15,30,7,7,116,30,21,7,45,28,1,37,23,30,19,26,15,30,5,10,115,30,19,10,47,28,15,25,24,30,23,25,15,30,13,3,115,30,2,29,46,28,42,1,24,30,23,28,15,30,17,0,115,30,10,23,46,28,10,35,24,30,19,35,15,30,17,1,115,30,14,21,46,28,29,19,24,30,11,46,15,30,13,6,115,30,14,23,46,28,44,7,24,30,59,1,16,30,12,7,121,30,12,26,47,28,39,14,24,30,22,41,15,30,6,14,121,30,6,34,47,28,46,10,24,30,2,64,15,30,17,4,122,30,29,14,46,28,49,10,24,30,24,46,15,30,4,18,122,30,13,32,46,28,48,14,24,30,42,32,15,30,20,4,117,30,40,7,47,28,43,22,24,30,10,67,15,30,19,6,118,30,18,31,47,28,34,34,24,30,20,61,15,30],FINAL_FORMAT:[30660,29427,32170,30877,26159,25368,27713,26998,21522,20773,24188,23371,17913,16590,20375,19104,13663,12392,16177,14854,9396,8579,11994,11245,5769,5054,7399,6608,1890,597,3340,2107],LEVELS:{L:1,M:2,Q:3,H:4}}),h=l.extend(null,{EXPONENT:[1,2,4,8,16,32,64,128,29,58,116,232,205,135,19,38,76,152,45,90,180,117,234,201,143,3,6,12,24,48,96,192,157,39,78,156,37,74,148,53,106,212,181,119,238,193,159,35,70,140,5,10,20,40,80,160,93,186,105,210,185,111,222,161,95,190,97,194,153,47,94,188,101,202,137,15,30,60,120,240,253,231,211,187,107,214,177,127,254,225,223,163,91,182,113,226,217,175,67,134,17,34,68,136,13,26,52,104,208,189,103,206,129,31,62,124,248,237,199,147,59,118,236,197,151,51,102,204,133,23,46,92,184,109,218,169,79,158,33,66,132,21,42,84,168,77,154,41,82,164,85,170,73,146,57,114,228,213,183,115,230,209,191,99,198,145,63,126,252,229,215,179,123,246,241,255,227,219,171,75,150,49,98,196,149,55,110,220,165,87,174,65,130,25,50,100,200,141,7,14,28,56,112,224,221,167,83,166,81,162,89,178,121,242,249,239,195,155,43,86,172,69,138,9,18,36,72,144,61,122,244,245,247,243,251,235,203,139,11,22,44,88,176,125,250,233,207,131,27,54,108,216,173,71,142,0],LOG:[255,0,1,25,2,50,26,198,3,223,51,238,27,104,199,75,4,100,224,14,52,141,239,129,28,193,105,248,200,8,76,113,5,138,101,47,225,36,15,33,53,147,142,218,240,18,130,69,29,181,194,125,106,39,249,185,201,154,9,120,77,228,114,166,6,191,139,98,102,221,48,253,226,152,37,179,16,145,34,136,54,208,148,206,143,150,219,189,241,210,19,92,131,56,70,64,30,66,182,163,195,72,126,110,107,58,40,84,250,133,186,61,202,94,155,159,10,21,121,43,78,212,229,172,115,243,167,87,7,112,192,247,140,128,99,13,103,74,222,237,49,197,254,24,227,165,153,119,38,184,180,124,17,68,146,217,35,32,137,46,55,63,209,91,149,188,207,205,144,135,151,178,220,252,190,97,242,86,211,171,20,42,93,158,132,60,57,83,71,109,65,162,31,45,67,216,183,123,164,118,196,23,73,236,127,12,111,246,108,161,59,82,41,157,85,170,251,96,134,177,187,204,62,90,203,89,95,176,156,169,160,81,11,245,22,235,122,117,44,215,79,174,213,233,230,231,173,232,116,214,244,234,168,80,88,175]}),w=l.extend(null,{BLOCK:[3220,1468,2713,1235,3062,1890,2119,1549,2344,2936,1117,2583,1330,2470,1667,2249,2028,3780,481,4011,142,3098,831,3445,592,2517,1776,2234,1951,2827,1070,2660,1345,3177]}),C=l.extend(function(p){var u,f,$,P,L,j=p.value.length;for(this._badness=[],this._level=S.LEVELS[p.level],this._polynomial=[],this._value=p.value,this._version=0,this._stringBuffer=[];this._version<40&&(this._version++,$=4*(this._level-1)+16*(this._version-1),P=S.BLOCKS[$++],L=S.BLOCKS[$++],u=S.BLOCKS[$++],f=S.BLOCKS[$],$=u*(P+L)+L-3+(this._version<=9),!(j<=$)););this._dataBlock=u,this._eccBlock=f,this._neccBlock1=P,this._neccBlock2=L;var W=this.width=17+4*this._version;this.buffer=C._createArray(W*W),this._ecc=C._createArray(u+(u+f)*(P+L)+L),this._mask=C._createArray((W*(W+1)+1)/2),this._insertFinders(),this._insertAlignments(),this.buffer[8+W*(W-8)]=1,this._insertTimingGap(),this._reverseMask(),this._insertTimingRowAndColumn(),this._insertVersion(),this._syncMask(),this._convertBitStream(j),this._calculatePolynomial(),this._appendEccToData(),this._interleaveBlocks(),this._pack(),this._finish()},{_addAlignment:function(p,u){var f,$=this.buffer,P=this.width;for($[p+P*u]=1,f=-2;f<2;f++)$[p+f+P*(u-2)]=1,$[p-2+P*(u+f+1)]=1,$[p+2+P*(u+f)]=1,$[p+f+1+P*(u+2)]=1;for(f=0;f<2;f++)this._setMask(p-1,u+f),this._setMask(p+1,u-f),this._setMask(p-f,u-1),this._setMask(p+f,u+1)},_appendData:function(p,u,f,$){var P,L,j,W=this._polynomial,V=this._stringBuffer;for(L=0;L<$;L++)V[f+L]=0;for(L=0;L<u;L++){if((P=h.LOG[V[p+L]^V[f]])!==255)for(j=1;j<$;j++)V[f+j-1]=V[f+j]^h.EXPONENT[C._modN(P+W[$-j])];else for(j=f;j<f+$;j++)V[j]=V[j+1];V[f+$-1]=P===255?0:h.EXPONENT[C._modN(P+W[0])]}},_appendEccToData:function(){var p,u=0,f=this._dataBlock,$=this._calculateMaxLength(),P=this._eccBlock;for(p=0;p<this._neccBlock1;p++)this._appendData(u,f,$,P),u+=f,$+=P;for(p=0;p<this._neccBlock2;p++)this._appendData(u,f+1,$,P),u+=f+1,$+=P},_applyMask:function(p){var u,f,$,P,L=this.buffer,j=this.width;switch(p){case 0:for(P=0;P<j;P++)for($=0;$<j;$++)$+P&1||this._isMasked($,P)||(L[$+P*j]^=1);break;case 1:for(P=0;P<j;P++)for($=0;$<j;$++)1&P||this._isMasked($,P)||(L[$+P*j]^=1);break;case 2:for(P=0;P<j;P++)for(u=0,$=0;$<j;$++,u++)u===3&&(u=0),u||this._isMasked($,P)||(L[$+P*j]^=1);break;case 3:for(f=0,P=0;P<j;P++,f++)for(f===3&&(f=0),u=f,$=0;$<j;$++,u++)u===3&&(u=0),u||this._isMasked($,P)||(L[$+P*j]^=1);break;case 4:for(P=0;P<j;P++)for(u=0,f=P>>1&1,$=0;$<j;$++,u++)u===3&&(u=0,f=!f),f||this._isMasked($,P)||(L[$+P*j]^=1);break;case 5:for(f=0,P=0;P<j;P++,f++)for(f===3&&(f=0),u=0,$=0;$<j;$++,u++)u===3&&(u=0),($&P&1)+!(!u|!f)||this._isMasked($,P)||(L[$+P*j]^=1);break;case 6:for(f=0,P=0;P<j;P++,f++)for(f===3&&(f=0),u=0,$=0;$<j;$++,u++)u===3&&(u=0),($&P&1)+(u&&u===f)&1||this._isMasked($,P)||(L[$+P*j]^=1);break;case 7:for(f=0,P=0;P<j;P++,f++)for(f===3&&(f=0),u=0,$=0;$<j;$++,u++)u===3&&(u=0),(u&&u===f)+($+P&1)&1||this._isMasked($,P)||(L[$+P*j]^=1)}},_calculateMaxLength:function(){return this._dataBlock*(this._neccBlock1+this._neccBlock2)+this._neccBlock2},_calculatePolynomial:function(){var p,u,f=this._eccBlock,$=this._polynomial;for($[0]=1,p=0;p<f;p++){for($[p+1]=1,u=p;u>0;u--)$[u]=$[u]?$[u-1]^h.EXPONENT[C._modN(h.LOG[$[u]]+p)]:$[u-1];$[0]=h.EXPONENT[C._modN(h.LOG[$[0]]+p)]}for(p=0;p<=f;p++)$[p]=h.LOG[$[p]]},_checkBadness:function(){var p,u,f,$,P,L=0,j=this._badness,W=this.buffer,V=this.width;for(P=0;P<V-1;P++)for($=0;$<V-1;$++)(W[$+V*P]&&W[$+1+V*P]&&W[$+V*(P+1)]&&W[$+1+V*(P+1)]||!(W[$+V*P]||W[$+1+V*P]||W[$+V*(P+1)]||W[$+1+V*(P+1)]))&&(L+=C.N2);var U=0;for(P=0;P<V;P++){for(f=0,j[0]=0,p=0,$=0;$<V;$++)p===(u=W[$+V*P])?j[f]++:j[++f]=1,U+=(p=u)?1:-1;L+=this._getBadness(f)}U<0&&(U=-U);var re=0,ee=U;for(ee+=ee<<2,ee<<=1;ee>V*V;)ee-=V*V,re++;for(L+=re*C.N4,$=0;$<V;$++){for(f=0,j[0]=0,p=0,P=0;P<V;P++)p===(u=W[$+V*P])?j[f]++:j[++f]=1,p=u;L+=this._getBadness(f)}return L},_convertBitStream:function(p){var u,f,$=this._ecc,P=this._version;for(f=0;f<p;f++)$[f]=this._value.charCodeAt(f);var L=this._stringBuffer=$.slice(),j=this._calculateMaxLength();p>=j-2&&(p=j-2,P>9&&p--);var W=p;if(P>9){for(L[W+2]=0,L[W+3]=0;W--;)u=L[W],L[W+3]|=255&u<<4,L[W+2]=u>>4;L[2]|=255&p<<4,L[1]=p>>4,L[0]=64|p>>12}else{for(L[W+1]=0,L[W+2]=0;W--;)u=L[W],L[W+2]|=255&u<<4,L[W+1]=u>>4;L[1]|=255&p<<4,L[0]=64|p>>4}for(W=p+3-(P<10);W<j;)L[W++]=236,L[W++]=17},_getBadness:function(p){var u,f=0,$=this._badness;for(u=0;u<=p;u++)$[u]>=5&&(f+=C.N1+$[u]-5);for(u=3;u<p-1;u+=2)$[u-2]===$[u+2]&&$[u+2]===$[u-1]&&$[u-1]===$[u+1]&&3*$[u-1]===$[u]&&($[u-3]===0||u+3>p||3*$[u-3]>=4*$[u]||3*$[u+3]>=4*$[u])&&(f+=C.N3);return f},_finish:function(){this._stringBuffer=this.buffer.slice();var p,u,f=0,$=3e4;for(u=0;u<8&&(this._applyMask(u),(p=this._checkBadness())<$&&($=p,f=u),f!==7);u++)this.buffer=this._stringBuffer.slice();f!==u&&this._applyMask(f),$=S.FINAL_FORMAT[f+(this._level-1<<3)];var P=this.buffer,L=this.width;for(u=0;u<8;u++,$>>=1)1&$&&(P[L-1-u+8*L]=1,u<6?P[8+L*u]=1:P[8+L*(u+1)]=1);for(u=0;u<7;u++,$>>=1)1&$&&(P[8+L*(L-7+u)]=1,u?P[6-u+8*L]=1:P[7+8*L]=1)},_interleaveBlocks:function(){var p,u,f=this._dataBlock,$=this._ecc,P=this._eccBlock,L=0,j=this._calculateMaxLength(),W=this._neccBlock1,V=this._neccBlock2,U=this._stringBuffer;for(p=0;p<f;p++){for(u=0;u<W;u++)$[L++]=U[p+u*f];for(u=0;u<V;u++)$[L++]=U[W*f+p+u*(f+1)]}for(u=0;u<V;u++)$[L++]=U[W*f+p+u*(f+1)];for(p=0;p<P;p++)for(u=0;u<W+V;u++)$[L++]=U[j+p+u*P];this._stringBuffer=$},_insertAlignments:function(){var p,u,f,$=this._version,P=this.width;if($>1)for(p=y.BLOCK[$],f=P-7;;){for(u=P-7;u>p-3&&(this._addAlignment(u,f),!(u<p));)u-=p;if(f<=p+9)break;f-=p,this._addAlignment(6,f),this._addAlignment(f,6)}},_insertFinders:function(){var p,u,f,$,P=this.buffer,L=this.width;for(p=0;p<3;p++){for(u=0,$=0,p===1&&(u=L-7),p===2&&($=L-7),P[$+3+L*(u+3)]=1,f=0;f<6;f++)P[$+f+L*u]=1,P[$+L*(u+f+1)]=1,P[$+6+L*(u+f)]=1,P[$+f+1+L*(u+6)]=1;for(f=1;f<5;f++)this._setMask($+f,u+1),this._setMask($+1,u+f+1),this._setMask($+5,u+f),this._setMask($+f+1,u+5);for(f=2;f<4;f++)P[$+f+L*(u+2)]=1,P[$+2+L*(u+f+1)]=1,P[$+4+L*(u+f)]=1,P[$+f+1+L*(u+4)]=1}},_insertTimingGap:function(){var p,u,f=this.width;for(u=0;u<7;u++)this._setMask(7,u),this._setMask(f-8,u),this._setMask(7,u+f-7);for(p=0;p<8;p++)this._setMask(p,7),this._setMask(p+f-8,7),this._setMask(p,f-8)},_insertTimingRowAndColumn:function(){var p,u=this.buffer,f=this.width;for(p=0;p<f-14;p++)1&p?(this._setMask(8+p,6),this._setMask(6,8+p)):(u[8+p+6*f]=1,u[6+f*(8+p)]=1)},_insertVersion:function(){var p,u,f,$,P=this.buffer,L=this._version,j=this.width;if(L>6)for(p=w.BLOCK[L-7],u=17,f=0;f<6;f++)for($=0;$<3;$++,u--)1&(u>11?L>>u-12:p>>u)?(P[5-f+j*(2-$+j-11)]=1,P[2-$+j-11+j*(5-f)]=1):(this._setMask(5-f,2-$+j-11),this._setMask(2-$+j-11,5-f))},_isMasked:function(p,u){var f=C._getMaskBit(p,u);return this._mask[f]===1},_pack:function(){var p,u,f,$=1,P=1,L=this.width,j=L-1,W=L-1,V=(this._dataBlock+this._eccBlock)*(this._neccBlock1+this._neccBlock2)+this._neccBlock2;for(u=0;u<V;u++)for(p=this._stringBuffer[u],f=0;f<8;f++,p<<=1){128&p&&(this.buffer[j+L*W]=1);do P?j--:(j++,$?W!==0?W--:($=!$,(j-=2)===6&&(j--,W=9)):W!==L-1?W++:($=!$,(j-=2)===6&&(j--,W-=8))),P=!P;while(this._isMasked(j,W))}},_reverseMask:function(){var p,u,f=this.width;for(p=0;p<9;p++)this._setMask(p,8);for(p=0;p<8;p++)this._setMask(p+f-8,8),this._setMask(8,p);for(u=0;u<7;u++)this._setMask(8,u+f-7)},_setMask:function(p,u){var f=C._getMaskBit(p,u);this._mask[f]=1},_syncMask:function(){var p,u,f=this.width;for(u=0;u<f;u++)for(p=0;p<=u;p++)this.buffer[p+f*u]&&this._setMask(p,u)}},{_createArray:function(p){var u,f=[];for(u=0;u<p;u++)f[u]=0;return f},_getMaskBit:function(p,u){var f;return p>u&&(f=p,p=u,u=f),f=u,f+=u*u,f>>=1,f+=p},_modN:function(p){for(;p>=255;)p=((p-=255)>>8)+(255&p);return p},N1:3,N2:3,N3:40,N4:10}),M=C,k=c.extend({draw:function(){this.element.src=this.qrious.toDataURL()},reset:function(){this.element.src=""},resize:function(){var p=this.element;p.width=p.height=this.qrious.size}}),m=l.extend(function(p,u,f,$){this.name=p,this.modifiable=!!u,this.defaultValue=f,this._valueTransformer=$},{transform:function(p){var u=this._valueTransformer;return typeof u=="function"?u(p,this):p}}),x=l.extend(null,{abs:function(p){return p!=null?Math.abs(p):null},hasOwn:function(p,u){return Object.prototype.hasOwnProperty.call(p,u)},noop:function(){},toUpperCase:function(p){return p!=null?p.toUpperCase():null}}),E=l.extend(function(p){this.options={},p.forEach(function(u){this.options[u.name]=u},this)},{exists:function(p){return this.options[p]!=null},get:function(p,u){return E._get(this.options[p],u)},getAll:function(p){var u,f=this.options,$={};for(u in f)x.hasOwn(f,u)&&($[u]=E._get(f[u],p));return $},init:function(p,u,f){typeof f!="function"&&(f=x.noop);var $,P;for($ in this.options)x.hasOwn(this.options,$)&&(P=this.options[$],E._set(P,P.defaultValue,u),E._createAccessor(P,u,f));this._setAll(p,u,!0)},set:function(p,u,f){return this._set(p,u,f)},setAll:function(p,u){return this._setAll(p,u)},_set:function(p,u,f,$){var P=this.options[p];if(!P)throw new Error("Invalid option: "+p);if(!P.modifiable&&!$)throw new Error("Option cannot be modified: "+p);return E._set(P,u,f)},_setAll:function(p,u,f){if(!p)return!1;var $,P=!1;for($ in p)x.hasOwn(p,$)&&this._set($,p[$],u,f)&&(P=!0);return P}},{_createAccessor:function(p,u,f){var $={get:function(){return E._get(p,u)}};p.modifiable&&($.set=function(P){E._set(p,P,u)&&f(P,p)}),Object.defineProperty(u,p.name,$)},_get:function(p,u){return u["_"+p.name]},_set:function(p,u,f){var $="_"+p.name,P=f[$],L=p.transform(u??p.defaultValue);return f[$]=L,L!==P}}),T=E,A=l.extend(function(){this._services={}},{getService:function(p){var u=this._services[p];if(!u)throw new Error("Service is not being managed with name: "+p);return u},setService:function(p,u){if(this._services[p])throw new Error("Service is already managed with name: "+p);u&&(this._services[p]=u)}}),R=new T([new m("background",!0,"white"),new m("backgroundAlpha",!0,1,x.abs),new m("element"),new m("foreground",!0,"black"),new m("foregroundAlpha",!0,1,x.abs),new m("level",!0,"L",x.toUpperCase),new m("mime",!0,"image/png"),new m("padding",!0,null,x.abs),new m("size",!0,100,x.abs),new m("value",!0,"")]),q=new A,_=l.extend(function(p){R.init(p,this,this.update.bind(this));var u=R.get("element",this),f=q.getService("element"),$=u&&f.isCanvas(u)?u:f.createCanvas(),P=u&&f.isImage(u)?u:f.createImage();this._canvasRenderer=new d(this,$,!0),this._imageRenderer=new k(this,P,P===u),this.update()},{get:function(){return R.getAll(this)},set:function(p){R.setAll(p,this)&&this.update()},toDataURL:function(p){return this.canvas.toDataURL(p||this.mime)},update:function(){var p=new M({level:this.level,value:this.value});this._canvasRenderer.render(p),this._imageRenderer.render(p)}},{use:function(p){q.setService(p.getName(),p)}});Object.defineProperties(_.prototype,{canvas:{get:function(){return this._canvasRenderer.getElement()}},image:{get:function(){return this._imageRenderer.getElement()}}});var F=_,B=l.extend({getName:function(){}}).extend({createCanvas:function(){},createImage:function(){},getName:function(){return"element"},isCanvas:function(p){},isImage:function(p){}}).extend({createCanvas:function(){return document.createElement("canvas")},createImage:function(){return document.createElement("img")},isCanvas:function(p){return p instanceof HTMLCanvasElement},isImage:function(p){return p instanceof HTMLImageElement}});return F.use(new B),F},ur=Fi();function wn(e,t,a=200){if(!e||!t)return;const n=String(t);try{new ur({element:e,value:n,size:a,level:n.length>750?"L":n.length>260?"M":"H",padding:8,background:"#ffffff",foreground:"#060609"});return}catch(r){console.warn("QR canvas error:",r)}try{const r=new Image;r.crossOrigin="anonymous",r.onload=()=>{const s=e.getContext("2d");s&&s.drawImage(r,0,0,a,a)},r.src="https://api.qrserver.com/v1/create-qr-code/?size="+a+"x"+a+"&margin=8&data="+encodeURIComponent(n)}catch{}}const Mo=new Set;let st=null,Qa=null,aa="";function Gi(){return aa}let Io=0,Ls=null,Rs=!1;const Nt={},pr={},Bs={},Eo={};function qi(e,t){return dr(e,t,b.historyList)}function Vi(e){const t=_i(e,b.historyList);return t&&ce(),t}function kt(e){cr(e,b.historyList,b.activeMatch)}function zi(e,t={}){if(!e||!e.competition||!e.competition.compId)return;const a=K(e.competition.compId);if(a){if(e.competition.fixtureId){const n=(a.fixtures||[]).find(r=>{var s;return r.id===((s=e.competition)==null?void 0:s.fixtureId)});n&&(n.matchId=e.id)}kt(a),a.syncUpdatedAt=Date.now(),ce(),!t.skipSyncPublish&&a.syncCode&&(e.status==="finished"||e.manualWinner!==void 0)&&Pn(a,e)}}function sa(e,t=null){var r,s,o,i;if(!e)return;const{preset:a}=b;a.matchContext=e.kind,a.compId=e.id;const n=e.defaultRules||{};n.totalSets&&(a.totalSets=n.totalSets,a.setsToWin=Math.floor(n.totalSets/2)+1),n.gamesPerSet&&(a.gamesPerSet=n.gamesPerSet),n.deuceRule&&(a.deuceRule=n.deuceRule),n.tiebreakAt!==void 0&&(a.tiebreakAt=n.tiebreakAt),n.tiebreakPoints&&(a.tiebreakPoints=n.tiebreakPoints),n.finalSet&&(a.finalSet=n.finalSet),n.changeoverRule&&(a.changeoverRule=n.changeoverRule),t?(a.fixtureId=t.id,a.stageLabel=t.roundLabel||"",t.team0&&(a.teams[0].players=[((r=t.team0.players)==null?void 0:r[0])||"DRIVE 1",((s=t.team0.players)==null?void 0:s[1])||"REVÉS 1"],t.team0.color&&(a.teams[0].color=t.team0.color)),t.team1&&(a.teams[1].players=[((o=t.team1.players)==null?void 0:o[0])||"DRIVE 2",((i=t.team1.players)==null?void 0:i[1])||"REVÉS 2"],t.team1.color&&(a.teams[1].color=t.team1.color))):a.fixtureId=""}function Ui(e,t){const a=K(e),n=((a==null?void 0:a.fixtures)||[]).find(r=>r.id===t);if(!a||!n||!n.team0||!n.team1){D("Este cruce todavía espera parejas definidas");return}sa(a,n),J(ve,b.preset),Ko()}function Hi(e){if(!e)return[];const t=new Map,a=n=>{const r=String(n||"").trim();if(!r||/^(DRIVE|REV[ÉE]S)\s*\d*$/i.test(r))return;const s=r.toUpperCase();t.has(s)||t.set(s,r)};return(e.participants||[]).forEach(n=>{var r,s;n.type==="pair"?(a((r=n.players)==null?void 0:r[0]),a((s=n.players)==null?void 0:s[1])):a(n.name)}),Xe(e,!1).forEach(n=>{(n.teams||[]).forEach(r=>(r.players||[]).forEach(a))}),Array.from(t.values()).sort((n,r)=>n.localeCompare(r,"es"))}function fr(e={}){var l,c,d,y,S,h,w,C,M,k,m,x,E,T,A,R,q,_,F,B;const t=e.mode||(e.fixtureKey?"fixture":"preset");if(t==="fixture"&&e.fixtureKey){const[p,u]=String(e.fixtureKey).split(":"),f=K(p),$=((f==null?void 0:f.fixtures)||[]).find(j=>j.id===u),P=Pe(f),L=[{players:[((c=(l=$==null?void 0:$.team0)==null?void 0:l.players)==null?void 0:c[0])||"DRIVE 1",((y=(d=$==null?void 0:$.team0)==null?void 0:d.players)==null?void 0:y[1])||"REVÉS 1"],color:((S=$==null?void 0:$.team0)==null?void 0:S.color)||"#d4af37"},{players:[((w=(h=$==null?void 0:$.team1)==null?void 0:h.players)==null?void 0:w[0])||"DRIVE 2",((M=(C=$==null?void 0:$.team1)==null?void 0:C.players)==null?void 0:M[1])||"REVÉS 2"],color:((k=$==null?void 0:$.team1)==null?void 0:k.color)||"#2f8cff"}];return{mode:"fixture",compId:p||null,fixtureId:u||null,fixtureKey:e.fixtureKey,stageLabel:($==null?void 0:$.roundLabel)||"Cruce",teams:L,selPartIds:["",""],useManualTeams:!1,activeSlot:0,sets:P?[[null,null]]:[[null,null],[null,null]],wo:!1,winner:"auto",hasSuperTbFinal:((m=f==null?void 0:f.defaultRules)==null?void 0:m.finalSet)==="supertb"}}if(t==="comp-adhoc"){const p=K(e.compId||b.ui.compId),u=Pe(p),f=p?(p.participants||[]).filter(W=>W.type==="pair"):[],$=u||f.length<2,P=f[0],L=f[1],j=!$&&P&&L?[{players:[((x=P.players)==null?void 0:x[0])||"DRIVE 1",((E=P.players)==null?void 0:E[1])||"REVÉS 1"],color:P.color||"#d4af37"},{players:[((T=L.players)==null?void 0:T[0])||"DRIVE 2",((A=L.players)==null?void 0:A[1])||"REVÉS 2"],color:L.color||"#2f8cff"}]:[{players:["",""],color:"#d4af37"},{players:["",""],color:"#2f8cff"}];return{mode:"comp-adhoc",compId:(p==null?void 0:p.id)||null,fixtureId:null,fixtureKey:"",stageLabel:"",teams:j,selPartIds:[(P==null?void 0:P.id)||"",(L==null?void 0:L.id)||""],useManualTeams:$,activeSlot:0,sets:u?[[null,null]]:[[null,null],[null,null]],wo:!1,winner:"auto",hasSuperTbFinal:((R=p==null?void 0:p.defaultRules)==null?void 0:R.finalSet)==="supertb"}}const{preset:a}=b,n=(a.matchContext==="league"||a.matchContext==="tournament")&&a.compId?K(a.compId):null,r=Pe(n),s=a.teams[0],o=a.teams[1],i=[{players:[((q=s.players[0])==null?void 0:q.trim())||"DRIVE 1",((_=s.players[1])==null?void 0:_.trim())||"REVÉS 1"],color:s.color||"#d4af37"},{players:[((F=o.players[0])==null?void 0:F.trim())||"DRIVE 2",((B=o.players[1])==null?void 0:B.trim())||"REVÉS 2"],color:o.color||"#2f8cff"}];return{mode:"preset",compId:(n==null?void 0:n.id)||null,fixtureId:n&&a.fixtureId?a.fixtureId:null,fixtureKey:"",stageLabel:a.stageLabel||"",teams:i,selPartIds:["",""],useManualTeams:!1,activeSlot:0,sets:r?[[null,null]]:a.totalSets===1?[[null,null]]:[[null,null],[null,null]],wo:!1,winner:"auto",hasSuperTbFinal:a.finalSet==="supertb"}}function Ds(e={}){b.ui.quickScoreFixtureId=e.fixtureKey||null,b.ui.quickScoreState=fr({mode:e.mode,fixtureKey:e.fixtureKey,compId:e.compId||void 0}),b.ui.compModal="quick-score",z.render()}function Qs(e){const{preset:t}=b,a=e.comp||null,n=e.rules||(a==null?void 0:a.defaultRules)||t,r=Math.max(1,Number(n.totalSets)||3),s=!!e.isWalkover,o=!!(e.isDraw||e.winnerSide==="draw"),i=s?[]:(e.setsArr||[]).map(d=>{const y=Math.max(0,Number(d[0])||0),S=Math.max(0,Number(d[1])||0),h=y>S?0:S>y?1:null;return[y,S,h,null,0]}),l=[0,1].map(d=>{var y,S,h,w,C,M,k;return{players:[((h=(S=(y=e.teams[d])==null?void 0:y.players)==null?void 0:S[0])==null?void 0:h.trim())||`DRIVE ${d+1}`,((M=(C=(w=e.teams[d])==null?void 0:w.players)==null?void 0:C[1])==null?void 0:M.trim())||`REVÉS ${d+1}`],color:((k=e.teams[d])==null?void 0:k.color)||(d===0?"#d4af37":"#2f8cff")}}),c={id:gt("m"),createdAt:Date.now(),durationMs:0,status:"finished",mode:"doubles",competition:a?{kind:a.kind,compId:a.id,compName:a.name,fixtureId:e.fixtureId||null,stageLabel:(e.stageLabel||"").trim()}:{kind:e.kind||"daily",compId:null,compName:"",fixtureId:null,stageLabel:(e.stageLabel||"").trim()},teams:l,rules:{totalSets:r,setsToWin:Math.floor(r/2)+1,gamesPerSet:Math.max(1,Number(n.gamesPerSet)||6),deuceRule:n.deuceRule||"golden",tiebreakAt:n.tiebreakAt!==void 0?Number(n.tiebreakAt):Math.max(1,Number(n.gamesPerSet)||6),tiebreakPoints:Math.max(1,Number(n.tiebreakPoints)||7),finalSet:n.finalSet||"normal",changeoverRule:n.changeoverRule||"odd"},firstServer:[0,0],secondServerIdx:0,shotPrompt:!1,flipped:!1,pendingFault:!1,events:[],redoStack:[],manualSets:i,manualWinner:o?"draw":e.winnerSide,isDraw:o,isWalkover:s};return ht(c),c}function Ji(e,t,a,n,r=!1){const s=K(e),o=((s==null?void 0:s.fixtures)||[]).find(c=>c.id===t);if(!s||!o||!o.team0||!o.team1)return null;const i=n==="draw";return Qs({comp:s,fixtureId:o.id,stageLabel:o.roundLabel||"",teams:[{players:[...o.team0.players||["DRIVE 1","REVÉS 1"]],color:o.team0.color||"#d4af37"},{players:[...o.team1.players||["DRIVE 2","REVÉS 2"]],color:o.team1.color||"#2f8cff"}],setsArr:a,winnerSide:n,isDraw:i,isWalkover:r})}function _a(e){const t=bt(e.syncCode);if(t&&t.length>=4)return e.syncCode=t,t;const a=jo();return e.syncCode=a,ce(),a}function Ra(e,t=!0){const a=_a(e),n=typeof location<"u"?location.href.split("#")[0]:"";if(!t)return`${n}#c=${a}`;const r=Br(e);return r?`${n}#c=${a}.${r}`:`${n}#c=${a}`}function mr(){return Gs(rn)}function gr(e){J(rn,(e||[]).slice(-120))}async function br(e,t){var a,n;if(!e||!t||typeof fetch!="function"||Date.now()<Io)return!1;try{const r=await fetch(`${lt()}/${e}`,{method:"POST",body:t});if(r.status===429){const s=Number((n=(a=r.headers)==null?void 0:a.get)==null?void 0:n.call(a,"Retry-After"))||0,o=s>0?Math.min(3e4,s*1e3):12e3;return Io=Date.now()+o,Ls&&clearTimeout(Ls),Ls=setTimeout(()=>{hs()},o+250),!1}return!!r.ok}catch{return!1}}async function ga(e,t){const a=an(e);if(!a)return!1;const n=Os(t);if(!n)return!1;const r=await br(a,n);if(!r){const s=mr();s.push({topic:a,body:n,ts:Date.now()}),gr(s)}return r}async function hs(){if(Rs||typeof fetch!="function")return 0;const e=mr();if(!e.length)return 0;Rs=!0;const t=[];let a=0;try{for(let n=0;n<e.length;n++){const r=e[n];if(await br(r.topic,r.body))a++;else{t.push(...e.slice(n));break}}gr(t)}finally{Rs=!1}return a}function Ki(){hs();const{activeMatch:e,ui:t}=b;if(e&&e.status==="playing"&&ma(e,!0),(t.route==="live"||t.route==="obs")&&t.liveId){const a=ja(t.liveId);ti()||Us(a),da(a)}}typeof window<"u"&&typeof window.addEventListener=="function"&&window.addEventListener("online",Ki);function Qi(e,t){const a=Do(t);if(a&&a.length<=2950)return{t:"M",v:1,cid:e.id,sc:e.syncCode,dev:xt(),ts:Date.now(),full:a};const n=cs(t,"all"),r=n.st,s=r.sets.filter((i,l)=>l===0||i.winner!==null||i.games[0]>0||i.games[1]>0),o={};return(n.P||[]).forEach(i=>{if(!i)return;const l=`${i.team}_${i.playerIdx}`;o[l]={w:i.winners||0,u:i.ue||0,f:i.fe||0,st:i.srvPtsTotal||0,sw:i.srvPtsWon||0,fs:i.firstServeIn||0,df:i.doubleFaults||0,sh:i.shots||{}}}),{t:"M",v:1,cid:e.id,sc:e.syncCode,dev:xt(),ts:Date.now(),sum:{id:t.id,c:t.createdAt,d:t.durationMs||0,s:t.status||"finished",m:t.mode||"doubles",wo:t.isWalkover?1:0,cp:t.competition||null,tm:t.teams,r:t.rules,ms:s.map(i=>[i.games[0],i.games[1],i.winner,i.tbScore||null,i.isSuperTB?1:0]),mw:r.isDraw?"draw":r.matchWinner,drw:r.isDraw?1:0,ps:o}}}function Yi(e,t){let a=null;if(e.full)a=ls(e.full);else if(e.sum){const n=e.sum;a={id:n.id,createdAt:n.c||Date.now(),durationMs:n.d||0,status:n.s||"finished",mode:n.m||"doubles",isWalkover:!!n.wo,manualSets:n.ms||[],manualWinner:n.mw??null,isDraw:!!(n.drw||n.mw==="draw"),manualPlayerStats:n.ps||null,competition:n.cp||null,teams:n.tm,rules:n.r,firstServer:[0,0],secondServerIdx:0,shotPrompt:!1,flipped:!1,pendingFault:!1,events:[],redoStack:[]}}return!a||!a.id||!a.teams?null:(a._syncTs=e.ts||Date.now(),t&&(a.competition={...a.competition||{},kind:t.kind,compId:t.id,compName:t.name}),a)}async function Bt(e,t=!1){if(!e||!e.syncCode)return!1;const a=e.fixtures||[],n=xt(),r=Date.now(),s={t:"S",v:1,cid:e.id,sc:e.syncCode,dev:n,ts:r,reset:!!t,data:Dt(e,[])};let o=0;for(;o<a.length;){const c=a.slice(0,o+1),d={...s,data:Dt(e,c)};if(Os(d).length>2850)break;o++}const i=[o>0?{...s,data:Dt(e,a.slice(0,o))}:s];for(;o<a.length;){const c=[];for(;o<a.length;){const d=Dt(e,[a[o]]).fx[0],y={t:"FXC",v:1,cid:e.id,sc:e.syncCode,dev:n,ts:r,fx:[...c,d]};if(c.length>0&&Os(y).length>2850)break;c.push(d),o++}i.push({t:"FXC",v:1,cid:e.id,sc:e.syncCode,dev:n,ts:r,fx:c})}let l=!0;for(const c of i)await ga(e.syncCode,c)||(l=!1);return l}function Pn(e,t){return!e||!e.syncCode||!t?Promise.resolve(!1):ga(e.syncCode,Qi(e,t))}function Xi(e,t){return!e||!e.syncCode||!t?Promise.resolve(!1):ga(e.syncCode,{t:"P",v:1,cid:e.id,sc:e.syncCode,dev:xt(),ts:Date.now(),part:t})}function hr(e,t,a,n=null){return!e||!e.syncCode||!a?Promise.resolve(!1):ga(e.syncCode,{t:"PR",v:1,cid:e.id,sc:e.syncCode,dev:xt(),ts:Date.now(),op:t,pid:a,group:n})}function Zi(e,t){if(!e||!e.syncCode||!t)return Promise.resolve(!1);const a=Dt(e,[t]).fx[0];return ga(e.syncCode,{t:"FA",v:1,cid:e.id,sc:e.syncCode,dev:xt(),ts:Date.now(),fx:a})}function el(e,t){return!e||!e.syncCode||!t?Promise.resolve(!1):ga(e.syncCode,{t:"DM",v:1,cid:e.id,sc:e.syncCode,dev:xt(),ts:Date.now(),mid:t})}async function Ys(e){if(!e)return!1;_a(e),await hs(),await Bt(e,!1);const t=Xe(e,!1).filter(a=>a.status==="finished"||a.manualWinner!==void 0&&a.manualWinner!==null).slice(0,40);for(const a of t)await Pn(e,a);return e.syncCode&&(b.ui.compLastSyncAt[e.syncCode]=Date.now()),!0}function nt(e,t){const a=bt(t);return b.competitionsList.find(n=>e&&n.id===e||a&&bt(n.syncCode)===a)||null}function vr(e,t=0,a=!1){if(!e||!e.id||!e.c)return null;const n=e.c,r=bt(e.sc);let s=nt(e.id,r);if(!s)s={id:e.id,syncCode:r||jo(),syncMetaTs:t||0,syncUpdatedAt:Date.now(),kind:n.k||"league",name:n.n||"Competencia Compartida",format:n.f||(n.k==="tournament"?"knockout":"league_rr"),rankingMode:n.rm||"pairs",winPts:Number.isFinite(Number(n.w))?Number(n.w):3,drawPts:Number.isFinite(Number(n.dp))?Number(n.dp):2,lossPts:Number.isFinite(Number(n.l))?Number(n.l):1,setBonusPts:Number(n.sb)||0,gameBonusPts:Number.isFinite(Number(n.gb))?Number(n.gb):n.f==="proyecto_padel"?1:0,numGroups:Number(n.ng)||2,advancePerGroup:Number(n.ag)||2,defaultRules:n.dr||{},participants:Array.isArray(e.pt)?e.pt:[],fixtures:es(e.fx),createdAt:t||Date.now()},b.competitionsList.unshift(s);else{const o=s;t>=(o.syncMetaTs||0)&&(o.syncMetaTs=t,r&&(s.syncCode=r),s.kind=n.k||s.kind,s.name=n.n||s.name,s.format=n.f||s.format,s.rankingMode=n.rm||s.rankingMode,s.winPts=Number.isFinite(Number(n.w))?Number(n.w):s.winPts,Number.isFinite(Number(n.dp))&&(s.drawPts=Number(n.dp)),s.lossPts=Number.isFinite(Number(n.l))?Number(n.l):s.lossPts,s.setBonusPts=Number(n.sb)||0,Number.isFinite(Number(n.gb))&&(s.gameBonusPts=Number(n.gb)),s.numGroups=Number(n.ng)||s.numGroups,s.advancePerGroup=Number(n.ag)||s.advancePerGroup,n.dr&&(s.defaultRules=n.dr));const i=Array.isArray(e.pt)?e.pt:[];if(a)s.participants=i;else if(i.length){s.participants=s.participants||[];const c=new Map(s.participants.map(d=>[d.id,d]));i.forEach(d=>{c.has(d.id)||s.participants.push(d)})}const l=es(e.fx);if(a)s.fixtures=l,Xe(s,!1).forEach(c=>{var d;if((d=c.competition)!=null&&d.fixtureId){const y=s.fixtures.find(S=>{var h;return S.id===((h=c.competition)==null?void 0:h.fixtureId)});y&&(y.matchId=c.id)}});else if(l.length){s.fixtures=s.fixtures||[];const c=new Set(s.fixtures.map(d=>d.id));l.forEach(d=>{c.has(d.id)||s.fixtures.push(d)})}s.syncUpdatedAt=Date.now()}return kt(s),ce(),s}function tl(e,t){var a,n;return!e||e.status!=="finished"&&t.status==="finished"||(((a=t.events)==null?void 0:a.length)||0)>(((n=e.events)==null?void 0:n.length)||0)||t.manualWinner!==void 0&&t.manualWinner!==null&&(e.manualWinner===void 0||e.manualWinner===null)}function yr(e,t="",a=""){if(!e||!e.t)return!1;const n=bt(e.sc||t);if(a){const o=`${n}:${a}`;if(Mo.has(o))return!1;Mo.add(o)}const r=!e.dev||e.dev!==xt();let s=!1;if(e.t==="S"&&e.data){const o=!!nt(e.cid,n);vr(e.data,e.ts||0,!!e.reset)&&(!o||r)&&(s=!0)}else if(e.t==="FXC"&&Array.isArray(e.fx)){const o=nt(e.cid,n);if(o){o.fixtures=o.fixtures||[];const i=new Set(o.fixtures.map(l=>l.id));es(e.fx).forEach(l=>{i.has(l.id)||(o.fixtures.push(l),s=!0)}),s&&(kt(o),ce())}}else if(e.t==="M"){const o=nt(e.cid,n);if(!o)return!1;const i=Yi(e,o);if(!i)return!1;const l=b.historyList.find(c=>c.id===i.id);tl(l,i)&&(ht(i,{skipSyncPublish:!0}),o.syncUpdatedAt=Date.now(),ce(),s=!0,r&&!b.ui.compSyncSilent&&D(`📡 Resultado sumado en ${o.name}: ${X(i,0)} vs ${X(i,1)}`))}else if(e.t==="P"&&e.part){const o=nt(e.cid,n);o&&(o.participants=o.participants||[],o.participants.some(i=>i.id===e.part.id)||(o.participants.push(e.part),ce(),s=!0))}else if(e.t==="PR"&&e.pid){const o=nt(e.cid,n);if(o){if(o.participants=o.participants||[],e.op==="del"){const i=o.participants.length;o.participants=o.participants.filter(l=>l.id!==e.pid),o.participants.length!==i&&(ce(),s=!0)}else if(e.op==="grp"){const i=o.participants.find(l=>l.id===e.pid);i&&i.group!==e.group&&(i.group=e.group||null,ce(),s=!0)}}}else if(e.t==="FA"&&e.fx){const o=nt(e.cid,n);if(o){const i=es([e.fx])[0];i&&(o.fixtures=o.fixtures||[],o.fixtures.some(l=>l.id===i.id)||(o.fixtures.push(i),ce(),s=!0))}}else if(e.t==="DM"&&e.mid){const o=nt(e.cid,n),i=b.historyList.length;b.historyList=b.historyList.filter(l=>l.id!==e.mid),b.historyList.length!==i&&(J(Pt,b.historyList),o&&(kt(o),ce()),s=!0)}return n&&(b.ui.compLastSyncAt[n]=Date.now()),s}async function fa(e,t=null,a=!1){var o,i;const n=bt(e),r=an(n);if(!r||typeof fetch!="function")return{ok:!1,changed:!1,count:0};if(Bs[n])return{ok:!1,changed:!1,count:0};if(!a&&Date.now()<(Eo[n]||0))return{ok:!1,changed:!1,count:0};Bs[n]=!0,pr[n]=Date.now(),await hs();const s=t||(Nt[n]>0?String(Math.max(0,Nt[n]-3)):"24h");try{const l=await fetch(`${lt()}/${r}/json?poll=1&since=${encodeURIComponent(s)}`,{cache:"no-store"});if(l.status===429){const C=Number((i=(o=l.headers)==null?void 0:o.get)==null?void 0:i.call(o,"Retry-After"))||0;return Eo[n]=Date.now()+(C>0?Math.min(3e4,C*1e3):15e3),{ok:!1,changed:!1,count:0}}if(!l.ok)return{ok:!1,changed:!1,count:0};const d=(await l.text()).trim().split(`
`).filter(Boolean),y=[];for(const C of d)try{const M=JSON.parse(C);if(M&&M.time&&(Nt[n]=Math.max(Nt[n]||0,Number(M.time)||0)),M&&M.event==="message"&&M.message){const k=sn(M.message);k&&y.push({evt:k,id:M.id||""})}}catch{}const S={S:0,FXC:1,P:2,PR:3,FA:4,M:5,DM:6};y.sort((C,M)=>(S[C.evt.t]??9)-(S[M.evt.t]??9)||(C.evt.ts||0)-(M.evt.ts||0));let h=!1;const w=!!b.ui.compSyncSilent;y.length>2&&(b.ui.compSyncSilent=!0);try{for(const C of y)yr(C.evt,n,C.id)&&(h=!0)}finally{b.ui.compSyncSilent=w}return b.ui.compLastSyncAt[n]=Date.now(),b.ui.compSyncConnected[n]=!0,h&&["competitions","comp-detail","players","history","home","new"].includes(b.ui.route)&&z.render(),a&&D(h?"✓ Sincronizado con novedades":"✓ Todo al día"),{ok:!0,changed:h,count:y.length}}catch{return{ok:!1,changed:!1,count:0}}finally{Bs[n]=!1}}function rs(){if(st){try{st.close()}catch{}st=null}Qa&&(clearInterval(Qa),Qa=null),aa=""}function xn(){const{ui:e,preset:t,competitionsList:a}=b;let n=null;if(e.route==="comp-detail")n=K(e.compId);else if(e.route==="players"&&(e.playerScope==="league"||e.playerScope==="tournament")){const o=e.playerScope==="league"?e.selectedLeagueId:e.selectedTournId;n=K(o)}else e.route==="new"&&(t.matchContext==="league"||t.matchContext==="tournament")?n=K(t.compId):(e.route==="competitions"||e.route==="home")&&(n=a.find(o=>!!o.syncCode)||null);const r=bt(n==null?void 0:n.syncCode);if(!r){aa&&rs();return}if(aa===r&&st)return;rs(),aa=r;const s=an(r);if(fa(r,Nt[r]?null:"24h",!1),typeof EventSource<"u")try{st=new EventSource(`${lt()}/${s}/sse`),st.onopen=()=>{b.ui.compSyncConnected[r]=!0},st.onmessage=o=>{try{const i=JSON.parse(o.data);if(i&&i.time&&(Nt[r]=Math.max(Nt[r]||0,Number(i.time)||0)),i&&(i.event==="message"||!i.event)&&i.message){b.ui.compSyncConnected[r]=!0;const l=sn(i.message);l&&yr(l,r,i.id||"")&&["competitions","comp-detail","players","history","home","new"].includes(b.ui.route)&&z.render()}}catch{}},st.onerror=()=>{b.ui.compSyncConnected[r]=!1}}catch{}Qa=setInterval(()=>{if(aa!==r||document.hidden)return;if(st&&st.readyState===2){xn();return}const o=Date.now()-(pr[r]||0);b.ui.compSyncConnected[r]&&o<3e4||fa(r,null,!1)},9e3)}async function $r(e){var y;let t=String(e||"").trim();const a=t.indexOf("#c=");a>=0?t=t.slice(a+3):t.startsWith("c=")?t=t.slice(2):t.startsWith("join=")&&(t=t.slice(5));const n=t.indexOf("."),r=bt(n>=0?t.slice(0,n):t),s=n>=0?t.slice(n+1):"";if(!r||r.length<4)return D("Ingresá un código de sala válido"),!1;let o=null;if(s){const S=sn(s);S&&S.id&&(o=vr(S,0,!1))}const{ui:i}=b,l=nt(null,r);if(o||l){const S=o||l;i.compId=S.id,i.compTab="fixtures",i.compModal=null,i.route="comp-detail",z.render()}else D(`📡 Conectando a sala #${r}...`);const c=await fa(r,"all",!1),d=nt(null,r);return d?(i.compId=d.id,i.compModal=null,i.route!=="comp-detail"&&(i.compTab=(y=d.fixtures)!=null&&y.length?"fixtures":"standings",i.route="comp-detail"),z.render(),D(`✓ Conectado a ${d.name} (#${r})`),!0):(!c.ok&&!o?D("Sin conexión o sala no encontrada. Verificá el código o pedí al organizador re-publicar."):d||D(`No se encontró una Liga/Torneo activa para #${r}`),!1)}function al(e){if(!e)return;Ys(e);const t=Ra(e,!1),a=e.kind==="tournament"?"Torneo":"Liga",n=e.syncCode,r=`🎾 *${a}: ${e.name}* (Pádel Control SÉ)
📡 Código de Sala: *#${n}*

📲 Abrí este enlace (o escaneá el QR) para conectarte con tu celular y sumar los resultados en vivo:
${t}`;ps({title:`🎾 Unirse a ${e.name} (#${n})`,text:r,url:t,copyText:r,toastMsg:"Enlace e invitación copiados para compartir",promptMsg:"Copiá esta invitación para WhatsApp:"})}function sl(e){if(e)try{const t=_a(e),a=Ra(e,!0),n=document.createElement("canvas");wn(n,a,380);const r=560,s=760,o=document.createElement("canvas");o.width=r,o.height=s;const i=o.getContext("2d");if(!i)return;const l=i.createLinearGradient(0,0,0,s);l.addColorStop(0,"#161410"),l.addColorStop(.5,"#0a0a0d"),l.addColorStop(1,"#040406"),i.fillStyle=l,i.fillRect(0,0,r,s),i.strokeStyle="#d4af37",i.lineWidth=3,i.strokeRect(16,16,r-32,s-32),i.strokeStyle="rgba(212, 175, 55, 0.35)",i.lineWidth=1,i.strokeRect(22,22,r-44,s-44),i.textAlign="center",i.fillStyle="#d4af37",i.font="bold 20px Inter, sans-serif",i.fillText(e.kind==="tournament"?"🏆 TORNEO EN VIVO · PÁDEL CONTROL SÉ":"🏅 LIGA EN VIVO · PÁDEL CONTROL SÉ",r/2,68),i.fillStyle="#fff6cc",i.font='800 34px "Barlow Condensed", sans-serif',i.fillText(String(e.name||"").toUpperCase().slice(0,30),r/2,112);const c=(r-380)/2,d=140;i.fillStyle="#ffffff",Oe(i,c-10,d-10,400,400,18,"#ffffff"),i.drawImage(n,c,d,380,380),i.fillStyle="#34d399",i.font="bold 28px monospace",i.fillText(`CÓDIGO DE SALA: #${t}`,r/2,585),i.fillStyle="#c2b8a3",i.font='15px "Plus Jakarta Sans", sans-serif',i.fillText("Escaneá para conectarte con tu celular y sumar resultados",r/2,622),i.fillStyle="rgba(212, 175, 55, 0.12)",i.fillRect(36,646,r-72,40),i.strokeStyle="rgba(212, 175, 55, 0.45)",i.strokeRect(36,646,r-72,40),i.fillStyle="#f5d061",i.font="bold 13px monospace",i.fillText(Ra(e,!1),r/2,671),i.fillStyle="#7d7461",i.font='13px "Plus Jakarta Sans", sans-serif',i.fillText("Tabla, Puntos, ELO y Cuadros sincronizados en tiempo real",r/2,718);const y=document.createElement("a");y.download=`QR-${e.kind}-${t}.png`,y.href=o.toDataURL("image/png"),y.click(),D("¡Tarjeta QR descargada!")}catch{D("Error al generar tarjeta QR")}}function nl(){const{historyList:e,competitionsList:t,prefs:a}=b,n=e.length+t.length;if(!n)return!1;const r=Date.now();if(a.backupPromptDismissedAt&&r-a.backupPromptDismissedAt<3*864e5)return!1;const s=Number(a.changesSinceBackup)||0;return s>=5||a.lastBackupAt>0&&s>0&&r-a.lastBackupAt>7*864e5||!a.lastBackupAt&&n>=5}function ol(){const{ui:e,prefs:t,historyList:a,competitionsList:n}=b,r=[];if(e.swUpdateReady?r.push(`
      <div class="sys-banner">
        <div class="sys-banner-txt">
          <b>✨ Nueva versión disponible</b>
          <small>Actualizá para tener las últimas mejoras y soporte offline al día.</small>
        </div>
        <div class="sys-banner-acts">
          <button class="btn primary sm" data-act="apply-sw-update">Actualizar ahora</button>
        </div>
      </div>`):e.isOnline||r.push(`
      <div class="sys-banner">
        <div class="sys-banner-txt">
          <b>📡 Modo Offline activo</b>
          <small>Podés arbitrar partidos, ver historial y rankings locales sin conexión.</small>
        </div>
      </div>`),e.pwaInstallPrompt&&!e.pwaInstalled&&r.push(`
      <div class="sys-banner">
        <div class="sys-banner-txt">
          <b>📲 Instalar Pádel Control SÉ</b>
          <small>Abrila directo desde tu pantalla de inicio, incluso sin internet.</small>
        </div>
        <div class="sys-banner-acts">
          <button class="btn primary sm" data-act="install-pwa">Instalar App</button>
        </div>
      </div>`),nl()){const s=Number(t.changesSinceBackup)||0,o=s>0?`Tenés ${s} ${s===1?"registro nuevo":"registros nuevos"} sin respaldo en archivo.`:`Guardá una copia de tus ${a.length} partidos y ${n.length} competencias.`;r.push(`
      <div class="sys-banner warn">
        <div class="sys-banner-txt">
          <b>💾 Backup JSON recomendado</b>
          <small>${g(o)}</small>
        </div>
        <div class="sys-banner-acts">
          <button class="btn primary sm" data-act="export-json">${I.dl} Descargar JSON</button>
          <button class="btn sm" data-act="dismiss-backup-prompt">Luego</button>
        </div>
      </div>`)}return r.join("")}function rl(e=!0){const{historyList:t,competitionsList:a,prefs:n,preset:r,activeMatch:s}=b,o={version:3,app:"padel-control-se",exportedAt:Date.now(),matches:t,competitions:a,prefs:Ie(n),preset:Ie(r),activeMatch:s?Ie(s):null,rankingVault:Ze("padel_ranking_vault",{})};return e&&(o.playerCardLogos=Ie(Ct()),o.playerCards=Ie(ua())),o}function il(e,t){const a=URL.createObjectURL(e),n=document.createElement("a");n.href=a,n.download=t,document.body.appendChild(n),n.click(),n.remove(),setTimeout(()=>URL.revokeObjectURL(a),1500)}async function Ao({share:e=!1}={}){const{prefs:t,historyList:a,competitionsList:n}=b,r=t.backupIncludeCards!==!1,s=rl(r),o=ua(),i=JSON.stringify(s,null,2),l=new Blob([i],{type:"application/json"}),c=`padel-se-backup-${new Date().toISOString().slice(0,10)}.json`;if(e&&typeof navigator<"u"&&navigator.share&&typeof File=="function")try{const y=new File([l],c,{type:"application/json"});if(!navigator.canShare||navigator.canShare({files:[y]})){await navigator.share({title:"Backup Pádel Control SÉ",text:`Respaldo completo: ${a.length} partidos, ${n.length} ligas/torneos.`,files:[y]}),t.lastBackupAt=Date.now(),t.changesSinceBackup=0,J(ke,t),z.render(),D("✓ Backup JSON compartido");return}}catch(y){if((y==null?void 0:y.name)==="AbortError")return}il(l,c),t.lastBackupAt=Date.now(),t.changesSinceBackup=0,J(ke,t),z.render();const d=r&&o.length?`, ${o.length} tarj.`:"";D(`✓ Backup JSON descargado (${a.length} P, ${n.length} L/T${d})`)}async function ll(e){const{competitionsList:t,prefs:a}=b;try{const n=JSON.parse(e);let r=0,s=0,o=0;if(Array.isArray(n)){n.forEach(l=>{l&&l.id&&l.teams&&(ht(l,{skipSyncPublish:!0,skipBackupCount:!0}),r++)}),D(`${r} partidos importados`),z.render();return}if(!n||typeof n!="object"){D("Archivo JSON inválido");return}if(Array.isArray(n.competitions)&&(n.competitions.forEach(l=>{if(l&&l.id&&l.name){const c=t.findIndex(d=>d.id===l.id);c>=0?t[c]=l:t.push(l),s++}}),ce()),Array.isArray(n.matches)&&n.matches.forEach(l=>{l&&l.id&&l.teams&&(ht(l,{skipSyncPublish:!0,skipBackupCount:!0}),r++)}),t.length&&(t.forEach(l=>z.resolveCompetitionFixtures(l)),ce()),n.rankingVault&&typeof n.rankingVault=="object"){const l=Ze("padel_ranking_vault",{});Object.entries(n.rankingVault).forEach(([c,d])=>{d&&d.id&&(l[c]=d)}),J("padel_ranking_vault",l)}if(n.prefs&&typeof n.prefs=="object"){const l=a.syncServerUrl,c=n.prefs.syncServerUrl?Da(n.prefs.syncServerUrl):l;Object.assign(a,n.prefs),a.syncServerUrl=c||Vt,a.lastBackupAt=Date.now(),a.changesSinceBackup=0,J(ke,a)}if(n.preset&&typeof n.preset=="object"&&Array.isArray(n.preset.teams)&&(b.preset=Object.assign({},ln,n.preset),ca(b.preset.teams),J(ve,b.preset)),!b.activeMatch&&n.activeMatch&&n.activeMatch.id&&n.activeMatch.teams&&(b.activeMatch=n.activeMatch,ca(b.activeMatch.teams),J(wt,b.activeMatch)),n.playerCardLogos&&typeof n.playerCardLogos=="object"){const l=Object.assign({logo1:null,logo2:null,logo2Disabled:!1,subTitle:""},n.playerCardLogos);Hs(l);const c=Ct();Object.assign(c,l),await pa()}if(Array.isArray(n.playerCards))for(const l of n.playerCards)l&&l.id&&(await kn(l),o++);Jo(!1),z.render();const i=o?`, ${o} tarjetas`:"";D(`✓ Importados: ${r} partidos, ${s} competencias${i}`)}catch{D("Archivo JSON inválido")}}async function cl(){const{ui:e}=b,t=e.pwaInstallPrompt;if(t){try{await t.prompt();const a=await t.userChoice;a&&a.outcome==="accepted"&&(e.pwaInstallPrompt=null,e.pwaInstalled=!0)}catch{}z.render()}}function dl(){const{ui:e}=b,t=e.swRegistration;t&&t.waiting?(e._reloadingForSw=!0,t.waiting.postMessage({type:"SKIP_WAITING"}),D("Actualizando a la última versión...")):location.reload()}async function ul(){const{ui:e}=b;if(!("serviceWorker"in navigator)||location.protocol==="file:"){e.swStatus="unsupported";return}try{const t=await navigator.serviceWorker.register("./sw.js",{scope:"./"});e.swRegistration=t,t.waiting&&(e.swUpdateReady=!0),t.active&&(e.swStatus="active"),t.addEventListener("updatefound",()=>{const a=t.installing;a&&a.addEventListener("statechange",()=>{a.state==="installed"&&(navigator.serviceWorker.controller?e.swUpdateReady=!0:e.swStatus="active",z.render())})}),navigator.serviceWorker.addEventListener("controllerchange",()=>{e.swStatus="active",e._reloadingForSw&&window.location.reload()}),z.render()}catch{e.swStatus="error"}}function pl(){typeof window>"u"||(window.addEventListener("beforeinstallprompt",e=>{e.preventDefault(),b.ui.pwaInstallPrompt=e,(b.ui.route==="home"||b.ui.route==="settings")&&z.render()}),window.addEventListener("appinstalled",()=>{b.ui.pwaInstallPrompt=null,b.ui.pwaInstalled=!0,D("✓ Pádel Control SÉ instalada"),z.render()}),window.addEventListener("online",()=>{b.ui.isOnline=!0,["home","settings","competitions","comp-detail"].includes(b.ui.route)&&z.render()}),window.addEventListener("offline",()=>{b.ui.isOnline=!1,["home","settings","competitions","comp-detail"].includes(b.ui.route)&&z.render()}))}function Sr(e){const{activeMatch:t,historyList:a}=b;if(!e)return{s0:"",s1:""};if(e.isBye)return{s0:e.team0?"BYE":"",s1:e.team1?"BYE":""};const n=e.matchId?t&&t.id===e.matchId?t:a.find(o=>o.id===e.matchId):null;if(!n)return{s0:"",s1:""};if(n.isWalkover)return{s0:e.winnerSide===0?"G (W.O.)":"W.O.",s1:e.winnerSide===1?"G (W.O.)":"W.O."};const s=Ee(n).sets.filter((o,i)=>i===0||o.winner!==null||o.games[0]>0||o.games[1]>0);return{s0:s.map(o=>o.games[0]).join(" "),s1:s.map(o=>o.games[1]).join(" ")}}function kr(e,t=!1){return`
    <div class="seg" style="margin-bottom:14px">
      ${(t?[["elo","⭐ ELO"],["pts","🏅 Puntos (G)"],["wins","🏆 Victorias"],["matches","🎾 Partidos"]]:[["pts","🏅 Puntos"],["elo","⭐ ELO"],["wins","🏆 Victorias"],["matches","🎾 Partidos"]]).map(([n,r])=>`<button class="${e===n?"on":""}" data-set-psort="${n}">${r}</button>`).join("")}
    </div>`}function Xs(e,t,a={}){if(!e||!e.length)return`<div class="empty">${I.trophy}<br>${g(a.emptyText||"Todavía no hay jugadores o partidos en este ranking.")}</div>`;const n=Number(a.qualCount)||0,r=(t==null?void 0:t.entityMode)==="pairs"?"Pareja":"Jugador",s=(t==null?void 0:t.primaryMetric)==="elo"||Pe(t==null?void 0:t.comp),o=t!=null&&t.scoring?un(t.comp,t.scoring,!1):"",i=`
  <div class="card" style="padding:12px 14px;margin-bottom:14px">
    <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:8px;flex-wrap:wrap">
      <h3 style="margin:0;font-size:15px">${g(a.tableTitle||(s?"Tabla Oficial · ELO Principal":"Tabla de Posiciones (Puntos + ELO)"))}</h3>
      ${o?`<small class="muted">${g(o)}</small>`:""}
    </div>
    <div class="tbl-wrap">
      <table class="stand-tbl">
        <thead>
          ${s?`
          <tr>
            <th>Pos</th>
            <th>${r}</th>
            <th title="Partidos jugados">PJ</th>
            <th title="Ganados">G</th>
            <th title="Empates">E</th>
            <th title="Perdidos">P</th>
            <th title="Games ganados">GF</th>
            <th title="Diferencia de games">DJ</th>
            <th title="Puntos secundarios (Games + Bonus)">PTS</th>
            <th title="Rating ELO Principal">ELO</th>
          </tr>`:`
          <tr>
            <th>Pos</th>
            <th>${r}</th>
            <th title="Partidos jugados">PJ</th>
            <th title="Partidos ganados">PG</th>
            <th title="Partidos perdidos">PP</th>
            <th title="Diferencia de sets">DS</th>
            <th title="Diferencia de juegos">DJ</th>
            <th title="Rating ELO exclusivo de este ranking">ELO</th>
            <th title="Puntos acumulados">PTS</th>
          </tr>`}
        </thead>
        <tbody>
          ${e.map((c,d)=>{const y=c.rank===1?"🥇":c.rank===2?"🥈":c.rank===3?"🥉":`#${c.rank}`,S=ia(c.elo),h=(c.setsDiff||0)>0?`+${c.setsDiff}`:String(c.setsDiff||0),w=(c.gamesDiff||0)>0?`+${c.gamesDiff}`:String(c.gamesDiff||0),C=n>0&&d<n?"qual":"",M=c.lastDelta?`<small style="font-size:11px;font-family:var(--font);font-weight:700;margin-left:3px;color:${c.lastDelta>0?"#10b981":"#ef4444"}">${c.lastDelta>0?"+":""}${c.lastDelta}</small>`:"";return`
            <tr class="${C}">
              <td><b>${y}</b></td>
              <td>
                <div style="display:flex;align-items:center;gap:7px">
                  <span style="width:8px;height:8px;border-radius:50%;background:${g(c.color||"#d4af37")};flex:none"></span>
                  <span style="font-weight:700;color:var(--tx)">${g(c.name)}</span>
                  <span style="font-size:11px;color:${S.color};font-weight:700">${S.icon}${S.level}</span>
                </div>
              </td>
              ${s?`
              <td>${c.matches}</td>
              <td>${c.wins}</td>
              <td>${c.draws||0}</td>
              <td>${c.losses??Math.max(0,c.matches-c.wins-(c.draws||0))}</td>
              <td>${c.gamesWon||0}</td>
              <td>${w}</td>
              <td><b>${c.pts??0}</b></td>
              <td class="pts-cell">${c.elo}${M}</td>`:`
              <td>${c.matches}</td>
              <td>${c.wins}</td>
              <td>${c.losses??Math.max(0,c.matches-c.wins)}</td>
              <td>${h}</td>
              <td>${w}</td>
              <td><b>${c.elo}</b></td>
              <td class="pts-cell">${c.pts??0}</td>`}
            </tr>`}).join("")}
        </tbody>
      </table>
    </div>
  </div>`;if(a.compactOnly)return i;const l=e.map(c=>{const d=le(c.wins,c.matches),y=(c.name||"JG").split(/\s+/).filter(Boolean).map(x=>x[0]).join("").slice(0,2).toUpperCase()||"JG",S=ia(c.elo),h=(c.finishedMatches||0)<Oo,w=c.rank===1?'<div class="rank-pos rank-gold" title="1º del Ranking">🥇 1º</div>':c.rank===2?'<div class="rank-pos rank-silver" title="2º del Ranking">🥈 2º</div>':c.rank===3?'<div class="rank-pos rank-bronze" title="3º del Ranking">🥉 3º</div>':`<div class="rank-pos" title="${c.rank}º del Ranking">#${c.rank}</div>`,C=c.lastDelta>0?`<div class="elo-trend up">▲ +${c.lastDelta} ELO</div>`:c.lastDelta<0?`<div class="elo-trend down">▼ ${c.lastDelta} ELO</div>`:'<div class="elo-trend neu">Sin cambios</div>',M=[];!s&&c.shots&&(c.shots.smash&&M.push(`💥 ${c.shots.smash} Smash`),c.shots.volea&&M.push(`🎾 ${c.shots.volea} Volea`),c.shots.bandeja&&M.push(`🌀 ${c.shots.bandeja} Bandeja`),c.shots.bajada&&M.push(`⚡ ${c.shots.bajada} Bajada`),c.shots.dejada&&M.push(`🎯 ${c.shots.dejada} Dejada`),c.shots.passing&&M.push(`🏹 ${c.shots.passing} Passing`));const k=(c.setsDiff||0)>=0?`+${c.setsDiff||0}`:`${c.setsDiff}`,m=(c.gamesDiff||0)>=0?`+${c.gamesDiff||0}`:`${c.gamesDiff}`;return`
    <div class="pcard">
      ${w}
      <div class="avatar" style="--c:${g(c.color||"#d4af37")};--f:${Ot(c.color||"#d4af37")}">${g(y)}</div>
      <div class="info">
        <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">
          <b>${g(c.name)}</b>
          <span class="tier-pill" style="--tcol:${S.color}">${S.icon} Nivel ${S.level} · ${S.tier}</span>
          ${h?`<span class="calib-pill calib" title="Factor K=50 para calibración rápida">Calib. (${c.finishedMatches||0}/10)</span>`:'<span class="calib-pill fixed" title="Factor K=32 consolidado">K=32</span>'}
        </div>
        ${s?`<small>${c.matches} PJ · ${c.wins}G ${c.draws||0}E ${c.losses??0}P (${d}%) · ${c.gamesWon||0} GF / ${c.gamesLost||0} GC (Dif ${m})</small>`:`<small>${c.matches} PJ · ${c.wins} PG / ${c.losses??Math.max(0,c.matches-c.wins)} PP (${d}%) · Sets ${k} · Juegos ${m}</small>`}
        <div class="pstats">
          ${s?`
            <span>Pts (Games+Bonus): <b>${c.pts??0} pts</b></span>
            <span>Games ganados: <b>${c.gamesWon||0}</b></span>
            <span>Dif. games: <b>${m}</b></span>
          `:`
            <span>Winners: <b>${c.winners||0}</b></span>
            <span>ENF: <b>${c.ue||0}</b></span>
            <span>1º Saque: <b>${le(c.firstServeIn||0,c.srvPtsTotal||0)}%</b></span>
            <span>Gan. saque: <b>${le(c.srvPtsWon||0,c.srvPtsTotal||0)}%</b></span>
          `}
        </div>
        ${M.length?`
        <div style="display:flex;gap:4px;flex-wrap:wrap;margin-top:6px">
          ${M.map(x=>`<span class="tag-s" style="font-size:10px">${g(x)}</span>`).join("")}
        </div>`:""}
        <div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:7px">
          ${(t==null?void 0:t.entityMode)==="pairs"?c.name.split(/\s*[·\/]\s*/).filter(Boolean).slice(0,2).map((x,E)=>{const T=Js(x),A=x.split(/\s+/)[0]||x;return`<button class="pc-mini-btn" data-open-player-card="${g(x)}" data-pc-default-pos="${E===0?"Drive":"Revés"}" title="Tarjeta de ${g(x)}">${I.idCard} ${T?"Editar":"Tarjeta"} ${g(A)}</button>`}).join(""):`<button class="pc-mini-btn" data-open-player-card="${g(c.name)}" title="Generar tarjeta personalizable de ${g(c.name)}">${I.idCard} ${Js(c.name)?"Ver / Editar Tarjeta":"Crear Tarjeta"}</button>`}
        </div>
      </div>
      <div class="pcard-pts-box">
        ${s?`
          <span class="pcard-pts-main" style="font-size:32px">${c.elo}</span>
          <small>ELO</small>
          ${C}
          <div class="pcard-elo-sub" title="Puntaje secundario por games + bonus">🏅 ${c.pts??0} pts · ${c.gamesWon||0}G</div>
        `:`
          <span class="pcard-pts-main">${c.pts??0}</span>
          <small>PUNTOS</small>
          <div class="pcard-elo-sub">⚡ ${c.elo} ELO</div>
          ${C}
        `}
      </div>
    </div>`}).join("");return i+l}function wr(e){return e?e.format==="proyecto_padel"?"⚡ PRO PÁDEL":e.format==="league_rr"?"Todos contra Todos":e.format==="league_rr2"?"Ida y Vuelta":e.format==="knockout"?"Eliminación Directa":e.format==="groups_playoff"?"Grupos + Playoffs":e.kind==="tournament"?"Libre / Americano":"Liga Libre":""}function fl(){const{ui:e,competitionsList:t}=b,a=e.compFilter||"all",n=t.filter(o=>o.kind==="league"),r=t.filter(o=>o.kind==="tournament"),s=a==="league"?n:a==="tournament"?r:t;return`
  <div class="page">
    <div class="page-h">
      <h1>Ligas y Torneos</h1>
      <div class="page-h-acts">
        <button class="btn sm" data-act="open-join-comp" title="Unirse con código o link">📲 Unirse</button>
        <button class="btn primary sm" data-act="new-comp" data-kind="league">${I.plus} Liga</button>
        <button class="btn primary sm" data-act="new-comp" data-kind="tournament">${I.plus} Torneo</button>
        <button class="icon-btn" data-nav="settings" title="Ajustes">${I.gear}</button>
      </div>
    </div>
    <p class="muted" style="text-align:center;margin-bottom:14px">Cada Liga y Torneo mantiene su propia tabla de posiciones, ELO independiente, fixture, llaves eliminatorias y sincronización por QR.</p>

    <div class="seg" style="margin-bottom:14px">
      <button class="${a==="all"?"on":""}" data-set-cfilter="all">Todas (${t.length})</button>
      <button class="${a==="league"?"on":""}" data-set-cfilter="league">🏅 Ligas (${n.length})</button>
      <button class="${a==="tournament"?"on":""}" data-set-cfilter="tournament">🏆 Torneos (${r.length})</button>
    </div>

    ${s.length?s.map(o=>{var k,m;const i=rt(o),l=Pe(o),d=Xe(o,!0).filter(x=>x.status==="finished").length,y=(o.fixtures||[]).filter(x=>!x.isBye&&x.team0&&x.team1&&x.winnerSide===null).length,S=o.rankingMode==="individual"?"individual":"pairs",w=Ft(Ut(Xe(o,!1),{...i,entityMode:S,seedParticipants:o.participants||[]}),l?"elo":"pts",{tiebreakMode:l?"games":"sets"})[0],C=(o.fixtures||[]).find(x=>x.phase==="playoff"&&x.roundLabel==="Final"&&x.winnerSide!==null),M=C?C.winnerSide===0?C.team0:C.team1:null;return`
      <div class="comp-card">
        <div class="comp-card-top">
          <div style="min-width:0;flex:1">
            <div class="comp-pills" style="margin-bottom:6px">
              <span class="badge ${l?"pp":o.kind==="league"?"league":"tourn"}">${l?"⚡ PRO PÁDEL":o.kind==="league"?"🏅 Liga":"🏆 Torneo"}</span>
              ${l?'<span class="badge">👤 Individual · ELO Principal</span>':`<span class="badge">${g(wr(o))}</span>`}
              <span class="badge">${g(un(o,i,!0))}</span>
              ${o.syncCode?`<span class="badge sync">📡 Sala #${g(o.syncCode)}</span>`:""}
            </div>
            <div class="comp-card-title">${g(o.name)}</div>
          </div>
          <div style="display:flex;gap:4px">
            <button class="icon-btn" data-open-comp-sync="${g(o.id)}" title="${o.syncCode?`QR y Sala Sync #${g(o.syncCode)}`:"Conectar dispositivos (QR)"}">${I.qr}</button>
            <button class="icon-btn" data-edit-comp="${g(o.id)}" title="Editar configuración">${I.edit}</button>
          </div>
        </div>

        <div style="font-size:12.5px;color:var(--tx2)">
          ${(o.participants||[]).length} inscriptos · ${d} partidos jugados${y?` · ${y} cruces pendientes`:""}
        </div>

        ${M?`<div class="comp-leader">🏆 Campeón: <b>${g(M.label||ye((k=M.players)==null?void 0:k[0],(m=M.players)==null?void 0:m[1]))}</b></div>`:w&&w.matches>0?l?`<div class="comp-leader">🥇 Líder ELO: <b>${g(w.name)}</b> · ${w.elo} ELO (${w.pts} pts · ${w.gamesWon||0}G)</div>`:`<div class="comp-leader">🥇 Líder: <b>${g(w.name)}</b> · ${w.pts} pts · ${w.elo} ELO (${w.wins}V)</div>`:""}

        <div class="btn-row" style="margin-top:2px">
          <button class="btn primary sm" data-open-comp="${g(o.id)}">${l?"Gestionar / Cargar":"Gestionar"}</button>
          <button class="btn sm" data-open-comp-rank="${g(o.id)}">${I.trophy} Ver Ranking</button>
          ${l?`<button class="btn sm" data-act="open-comp-quick-score" data-comp="${g(o.id)}">${I.check} Cargar Resultado</button>`:`<button class="btn sm" data-play-in-comp="${g(o.id)}">${I.play} Jugar aquí</button>`}
        </div>
      </div>`}).join(""):`
      <div class="empty">
        ${I.award}<br>
        Todavía no creaste ${a==="league"?"ninguna Liga":a==="tournament"?"ningún Torneo":"Ligas ni Torneos"}.<br><br>
        <div class="btn-row" style="justify-content:center">
          <button class="btn primary" data-act="new-comp" data-kind="league">${I.plus} Crear Liga</button>
          <button class="btn primary" data-act="new-comp" data-kind="tournament">${I.plus} Crear Torneo</button>
          <button class="btn" data-act="open-join-comp">📲 Unirse con Código</button>
        </div>
      </div>
    `}
    ${vt()}
  </div>
  ${it("competitions")}`}function ml(e){var c,d;const t=(e.fixtures||[]).filter(y=>y.phase==="playoff");if(!t.length)return"";const a=new Map;t.forEach(y=>{a.has(y.roundIdx)||a.set(y.roundIdx,[]),a.get(y.roundIdx).push(y)});const n=Array.from(a.keys()).sort((y,S)=>y-S),s=(a.get(n[n.length-1])||[])[0],o=s&&s.winnerSide!==null&&s.winnerSide!==void 0?s.winnerSide===0?s.team0:s.team1:null,i=o?`
    <div class="champ-banner">
      <small>🏆 CAMPEONES DE ${g(e.name)}</small>
      <b>${g(o.label||ye((c=o.players)==null?void 0:c[0],(d=o.players)==null?void 0:d[1]))}</b>
    </div>`:"",l=(y,S)=>{var k,m;const h=S===0?y.team0:y.team1,w=y.winnerSide===S;if(!h)return`<div class="b-team tbd"><span class="bar"></span><span class="nm">${y.isBye?"BYE (Libre)":"Por definir"}</span></div>`;const C=Sr(y),M=S===0?C.s0:C.s1;return`
      <div class="b-team ${w?"win":""}">
        <span class="bar" style="--c:${g(h.color||"#d4af37")}"></span>
        <span class="nm">${g(h.label||ye((k=h.players)==null?void 0:k[0],(m=h.players)==null?void 0:m[1]))}</span>
        ${M?`<span class="sc">${g(M)}</span>`:""}
      </div>`};return`
  ${i}
  <div class="bracket-wrap">
    <div class="bracket-cols">
      ${n.map(y=>{var w;const S=(a.get(y)||[]).slice().sort((C,M)=>C.slotIdx-M.slotIdx),h=((w=S[0])==null?void 0:w.roundLabel)||`Ronda ${y+1}`;return`
        <div class="bracket-round">
          <div class="bracket-round-title">${g(h)}</div>
          <div class="bracket-matches">
            ${S.map(C=>{const M=!C.isBye&&C.team0&&C.team1&&C.winnerSide===null;return`
              <div class="bracket-match ${C.winnerSide!==null?"done":""}">
                ${l(C,0)}
                ${l(C,1)}
                <div class="b-actions">
                  ${M?`
                    <button class="btn primary sm" data-play-fixture="${g(e.id)}:${g(C.id)}">${I.play} Jugar</button>
                    <button class="btn sm" data-quick-score="${g(e.id)}:${g(C.id)}">${I.check} Resultado</button>
                  `:C.matchId?`
                    <button class="btn sm" data-open-stats="${g(C.matchId)}">${I.chart} Ver partido</button>
                  `:""}
                </div>
              </div>`}).join("")}
          </div>
        </div>`}).join("")}
    </div>
  </div>`}function gl(e,t,a){if(!t.length)return"";const{activeMatch:n}=b,r=new Map;t.forEach(o=>{const i=o.roundLabel||"Cruces";r.has(i)||r.set(i,[]),r.get(i).push(o)});let s=`<div class="sec-t">${g(a)}</div>`;return r.forEach((o,i)=>{s+=`<div class="fx-round-hdr"><span>${g(i)}</span><small class="muted">${o.filter(l=>l.winnerSide!==null).length}/${o.length}</small></div>`,s+=o.map(l=>{var S,h,w,C,M,k;const c=Sr(l),d=l.matchId&&n&&n.id===l.matchId&&n.status==="playing",y=!l.isBye&&l.team0&&l.team1&&l.winnerSide===null;return`
      <div class="fx-card">
        <div class="fx-teams">
          <div class="fx-team-row ${l.winnerSide===0?"win":""}">
            <span class="dot" style="--c:${g(((S=l.team0)==null?void 0:S.color)||"#d4af37")}"></span>
            <span>${g(l.team0?l.team0.label||ye((h=l.team0.players)==null?void 0:h[0],(w=l.team0.players)==null?void 0:w[1]):l.isBye?"BYE":"Por definir")}</span>
            ${c.s0?`<span class="fx-sc">${g(c.s0)}</span>`:""}
          </div>
          <div class="fx-team-row ${l.winnerSide===1?"win":""}">
            <span class="dot" style="--c:${g(((C=l.team1)==null?void 0:C.color)||"#2f8cff")}"></span>
            <span>${g(l.team1?l.team1.label||ye((M=l.team1.players)==null?void 0:M[0],(k=l.team1.players)==null?void 0:k[1]):l.isBye?"BYE":"Por definir")}</span>
            ${c.s1?`<span class="fx-sc">${g(c.s1)}</span>`:""}
          </div>
        </div>
        <div style="display:flex;gap:6px;align-items:center;flex-wrap:wrap">
          ${d?'<span class="badge live">En juego</span>':""}
          ${y?`<button class="btn primary sm" data-play-fixture="${g(e.id)}:${g(l.id)}">${I.play} Jugar</button>`:""}
          ${y?`<button class="btn sm" data-quick-score="${g(e.id)}:${g(l.id)}">${I.check} Resultado</button>`:""}
          ${l.matchId?`<button class="btn sm" data-open-stats="${g(l.matchId)}">${I.chart} Detalles</button>`:""}
          ${!l.matchId&&!l.isBye?`<button class="icon-btn" data-del-fixture="${g(e.id)}:${g(l.id)}" title="Quitar cruce" style="width:34px;height:34px">${I.trash}</button>`:""}
        </div>
      </div>`}).join("")}),s}function bl(){const{ui:e,competitionsList:t,prefs:a}=b,n=K(e.compId)||t[0];if(!n)return`
    <div class="page">
      <div class="empty">${I.award}<br>Competencia no encontrada.<br><br><button class="btn" data-nav="competitions">Volver a Ligas y Torneos</button></div>
    </div>${it("competitions")}`;e.compId=n.id;const r=Pe(n),s=n.fixtures||[];let o=e.compTab||"standings";r&&o==="fixtures"&&!s.length&&(o="standings");const i=rt(n),l=n.participants||[],c=Xe(n,!0),d=n.rankingMode==="both"?e.playerEntityMode||"pairs":n.rankingMode||"pairs",y=os(n,n.id),S={tiebreakMode:r?"games":"sets"},h=Ut(Xe(n,!1),{...i,entityMode:d,seedParticipants:l}),w=na(Ft(h,y,S),y,S),C={scope:n.kind,id:`${a.rankingId||"RK"}-${n.id.slice(-4).toUpperCase()}`,title:n.name,subtitle:on(n,d,i),entityMode:d,primaryMetric:r?"elo":"pts",comp:n,scoring:i};let M="";if(o==="standings"){const k=Array.from(new Set(l.map(x=>x.group).filter(x=>!!x))).sort(),m=n.format==="groups_playoff"&&k.length?k.map(x=>{const E=na(qi(n,x),"pts");return Xs(E,C,{tableTitle:`Grupo ${x} (Clasifican top ${n.advancePerGroup||2})`,qualCount:Number(n.advancePerGroup)||2,compactOnly:!0})}).join(""):"";M=`
      ${n.rankingMode==="both"?`
        <div class="seg" style="margin-bottom:12px">
          <button class="${d==="pairs"?"on":""}" data-set-pentity="pairs">👥 Por Parejas</button>
          <button class="${d==="individual"?"on":""}" data-set-pentity="individual">👤 Individual</button>
        </div>
      `:""}
      ${kr(y,r)}
      ${m}
      ${Xs(w,C,{tableTitle:r?"Tabla PRO PÁDEL · ELO Principal":n.format==="groups_playoff"?"Ranking General + ELO del Torneo":"Tabla de Posiciones + ELO",emptyText:r?"Tocá «⚡ Cargar Resultado Final» arriba para sumar el primer resultado (ej: Lucía-Juan vs Marcos-Noelia 4-2) o agregá inscriptos.":"Inscribí participantes o jugá un partido en esta competencia para ver la tabla."})}
      ${w.length?`
        <div class="btn-row" style="margin-top:12px">
          <button class="btn primary big" data-act="share-comp-rank">${I.share} Compartir Ranking</button>
          <button class="btn big" data-act="export-comp-rank">${I.img} Descargar Imagen HD</button>
        </div>`:""}
    `}else if(o==="fixtures"){const k=s.filter(E=>E.phase==="playoff"),m=s.filter(E=>E.phase!=="playoff"),x=l.length<2;M=`
      <div class="card" style="margin-bottom:14px">
        <h3>Generar y Gestionar Cruces</h3>
        <div class="btn-row">
          ${n.format==="league_rr"||n.format==="league_rr2"?`
            <button class="btn primary sm" data-act="gen-rr" data-comp="${g(n.id)}" ${x?"disabled":""}>${I.calendar} ${s.length?"Regenerar Fixture":"Generar Fixture (Fechas)"}</button>
          `:""}
          ${n.format==="knockout"?`
            <button class="btn primary sm" data-act="gen-bracket" data-comp="${g(n.id)}" ${x?"disabled":""}>${I.trophy} ${k.length?"Regenerar Cuadro":"Generar Cuadro Eliminatorio"}</button>
          `:""}
          ${n.format==="groups_playoff"?`
            <button class="btn primary sm" data-act="gen-groups" data-comp="${g(n.id)}" ${l.length<4?"disabled":""}>${I.calendar} 1. Sortear Grupos y Fechas</button>
            <button class="btn sm" data-act="advance-playoffs" data-comp="${g(n.id)}" ${l.length<4?"disabled":""}>${I.trophy} 2. Clasificar a Llaves</button>
          `:""}
          <button class="btn sm" data-act="open-add-fixture" data-comp="${g(n.id)}">${I.plus} Partido manual</button>
          <button class="btn sm" data-act="open-comp-quick-score" data-comp="${g(n.id)}">${I.check} Cargar Resultado</button>
        </div>
        ${x?'<small class="muted" style="display:block;margin-top:8px">Agregá al menos 2 participantes en la pestaña "Inscriptos" para generar cruces automáticos.</small>':""}
      </div>

      ${k.length?`<div class="sec-t">Cuadro Eliminatorio (Playoffs)</div>${ml(n)}`:""}
      ${gl(n,m,n.format==="groups_playoff"?"Fase de Grupos":"Fixture / Fechas")}
      ${s.length?"":`<div class="empty">${I.calendar}<br>Todavía no hay cruces generados.<br>Generá el fixture automático arriba o agregá un partido manual / resultado directo.</div>`}
    `}else if(o==="matches")M=`
      <div class="btn-row" style="margin-bottom:14px">
        ${r?`<button class="btn primary" data-act="open-comp-quick-score" data-comp="${g(n.id)}">${I.check} Cargar Resultado Final</button>`:`<button class="btn primary" data-play-in-comp="${g(n.id)}">${I.play} Jugar en vivo</button>
             <button class="btn" data-act="open-comp-quick-score" data-comp="${g(n.id)}">${I.check} Cargar Sets / Games</button>`}
      </div>
      ${c.length?c.map($n).join(""):`<div class="empty">${I.ball}<br>Aún no se registraron partidos en este torneo.</div>`}
    `;else if(o==="participants"){const k=n.rankingMode==="individual",m=["A","B","C","D"].slice(0,Math.max(2,Number(n.numGroups)||2));M=`
      ${`<datalist id="known-players">${La().map(T=>`<option value="${g(T)}">`).join("")}</datalist>`}
      <div class="card">
        <h3>Inscribir ${k?"Jugador":"Pareja / Jugador"}</h3>
        ${k?`
          <div class="row wrap">
            <div class="field" style="flex:1 1 200px">
              <label>Nombre del Jugador</label>
              <input class="inp" id="part-ind-name" list="known-players" placeholder="Ej: Matías">
            </div>
            ${n.format==="groups_playoff"?`
              <div class="field" style="flex:0 0 110px">
                <label>Grupo</label>
                <select class="inp" id="part-group">
                  <option value="">Auto</option>
                  ${m.map(T=>`<option value="${T}">Grupo ${T}</option>`).join("")}
                </select>
              </div>`:""}
          </div>
        `:`
          <div class="row wrap">
            <div class="field">
              <label>Drive (Derecha)</label>
              <input class="inp" id="part-p0" list="known-players" placeholder="Jugador 1">
            </div>
            <div class="field">
              <label>Revés (Izquierda)</label>
              <input class="inp" id="part-p1" list="known-players" placeholder="Jugador 2">
            </div>
            ${n.format==="groups_playoff"?`
              <div class="field" style="flex:0 0 100px">
                <label>Grupo</label>
                <select class="inp" id="part-group">
                  <option value="">Auto</option>
                  ${m.map(T=>`<option value="${T}">Grupo ${T}</option>`).join("")}
                </select>
              </div>`:""}
          </div>
        `}
        <div class="field" style="margin-top:8px">
          <label>Color identificatorio</label>
          <select class="inp" id="part-color">
            ${ra.map(T=>`<option value="${T.c}">${g(T.n)}</option>`).join("")}
          </select>
        </div>
        <button class="btn primary block" style="margin-top:12px" data-act="add-part" data-comp="${g(n.id)}">${I.plus} Agregar Inscripto</button>
      </div>

      <div class="sec-t">Lista de Inscriptos (${l.length})</div>
      ${l.length?l.map((T,A)=>{var q,_;const R=T.type==="pair"?ye((q=T.players)==null?void 0:q[0],(_=T.players)==null?void 0:_[1]):T.name||"";return`
        <div class="fx-card">
          <div style="display:flex;align-items:center;gap:10px;min-width:0;flex:1">
            <span style="width:10px;height:28px;border-radius:4px;background:${g(T.color||"#d4af37")};flex:none"></span>
            <div style="min-width:0">
              <b style="font-size:15px;color:var(--tx)">${A+1}. ${g(R)}</b>
              <small style="display:block;color:var(--tx2)">${T.type==="pair"?"Pareja fija":"Individual"}</small>
            </div>
          </div>
          <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;justify-content:flex-end">
            ${T.type==="pair"?[0,1].map(F=>{var u;const B=(((u=T.players)==null?void 0:u[F])||"").trim();if(!B)return"";const p=B.split(/\s+/)[0]||B;return`<button class="pc-mini-btn" data-open-player-card="${g(B)}" data-pc-default-pos="${F===0?"Drive":"Revés"}" title="Crear tarjeta de ${g(B)}">${I.idCard} ${g(p)}</button>`}).join(""):`<button class="pc-mini-btn" data-open-player-card="${g(T.name||"")}" title="Crear tarjeta de ${g(T.name||"")}">${I.idCard} Tarjeta</button>`}
            ${n.format==="groups_playoff"?`
              <select class="inp" style="width:auto;min-height:34px;padding:4px 8px;font-size:12px" data-set-part-group="${g(n.id)}:${g(T.id)}">
                <option value="">Sin grupo</option>
                ${m.map(F=>`<option value="${F}" ${T.group===F?"selected":""}>Grupo ${F}</option>`).join("")}
              </select>
            `:""}
            <button class="icon-btn" data-del-part="${g(n.id)}:${g(T.id)}" title="Quitar inscripto" style="width:36px;height:36px">${I.trash}</button>
          </div>
        </div>`}).join(""):`<div class="empty">${I.users}<br>Todavía no hay inscriptos. Agregá parejas o jugadores arriba.</div>`}
    `}return`
  <div class="page">
    <div class="page-h">
      <div class="page-h-top">
        <button class="icon-btn" data-nav="competitions" title="Volver">${I.back}</button>
        <h1>${g(n.name)}</h1>
      </div>
      <div class="page-h-acts">
        <button class="icon-btn" data-open-comp-sync="${g(n.id)}" title="Sincronizar varios dispositivos (QR / Link)">${I.qr}</button>
        <button class="icon-btn" data-edit-comp="${g(n.id)}" title="Editar">${I.edit}</button>
        ${r?`<button class="icon-btn" data-act="open-comp-quick-score" data-comp="${g(n.id)}" title="Cargar resultado rápido">${I.plus}</button>`:`<button class="icon-btn" data-play-in-comp="${g(n.id)}" title="Jugar partido aquí">${I.play}</button>`}
        <button class="icon-btn" data-del-comp="${g(n.id)}" title="Eliminar">${I.trash}</button>
      </div>
    </div>

    <div class="comp-pills" style="justify-content:center;margin-bottom:10px">
      <span class="badge ${r?"pp":n.kind==="league"?"league":"tourn"}">${r?"⚡ PRO PÁDEL":n.kind==="league"?"🏅 Liga":"🏆 Torneo"}</span>
      ${r?'<span class="badge">👤 Individual · Parejas Libres</span>':`<span class="badge">${g(wr(n))}</span>`}
      <span class="badge">${g(un(n,i,!0))}</span>
      ${n.syncCode?`<span class="badge sync">📡 Sala #${g(n.syncCode)}</span>`:""}
    </div>

    ${r?`
      <div class="pp-hero-bar">
        <div style="min-width:0;flex:1">
          <b style="font-size:14px;color:var(--acc-ink);display:block">⚡ Mesa de Resultados · ELO Principal</b>
          <small style="color:var(--tx2);font-size:12px;display:block">Cargá solo los marcadores finales (ej. Lucía-Juan vs Marcos-Noelia 4-2 o 3-3 empate).</small>
        </div>
        <button class="btn primary" data-act="open-comp-quick-score" data-comp="${g(n.id)}">${I.check} Cargar Resultado Final</button>
      </div>
    `:""}

    ${n.syncCode?`
      <div class="sync-bar">
        <div style="display:flex;align-items:center;gap:8px;min-width:0;flex:1">
          <span class="sync-dot ${e.compSyncConnected[n.syncCode]?"on":""}"></span>
          <div style="min-width:0">
            <b style="font-size:13px;color:var(--tx);display:block">📡 Sala Multi-Dispositivo #${g(n.syncCode)}</b>
            <small style="color:var(--tx2);font-size:11.5px;display:block">${e.compSyncConnected[n.syncCode]?"Conectado en tiempo real · Varias canchas activas":"Listo para recibir resultados de otras canchas"}${e.compLastSyncAt[n.syncCode]?` · Act. ${new Date(e.compLastSyncAt[n.syncCode]).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}`:""}</small>
          </div>
        </div>
        <div style="display:flex;gap:6px;flex-wrap:wrap">
          <button class="btn sm" data-open-comp-sync="${g(n.id)}">${I.qr} QR / Enlace</button>
          <button class="btn sm" data-sync-comp="${g(n.syncCode)}">↻ Sincronizar</button>
        </div>
      </div>
    `:`
      <div class="sync-bar idle">
        <div style="min-width:0;flex:1">
          <b style="font-size:13px;color:var(--tx);display:block">🏟️ ¿Se cargan resultados desde varios celulares?</b>
          <small style="color:var(--tx2);font-size:11.5px;display:block">Generá un QR o enlace para sincronizar tabla y resultados entre dispositivos.</small>
        </div>
        <button class="btn primary sm" data-open-comp-sync="${g(n.id)}">${I.qr} Conectar dispositivos</button>
      </div>
    `}

    <div class="seg" style="margin-bottom:16px">
      <button class="${o==="standings"?"on":""}" data-set-ctab="standings">Tabla</button>
      ${!r||s.length>0?`<button class="${o==="fixtures"?"on":""}" data-set-ctab="fixtures">Fixture</button>`:""}
      <button class="${o==="matches"?"on":""}" data-set-ctab="matches">Partidos (${c.length})</button>
      <button class="${o==="participants"?"on":""}" data-set-ctab="participants">Inscriptos (${l.length})</button>
    </div>

    ${M}
    ${vt()}
  </div>
  ${it("competitions")}`}function ea(){var s,o,i,l,c;const e=b.ui.quickScoreState;if(!e)return;const t=document.getElementById("qs-round");t&&(e.stageLabel=t.value);const a=e.compId?K(e.compId):null;if(e.mode==="comp-adhoc"&&!e.useManualTeams){const d=document.getElementById("qs-sel0"),y=document.getElementById("qs-sel1");if(d&&a){e.selPartIds[0]=d.value;const S=Tt((a.participants||[]).find(h=>h.id===d.value));S&&(e.teams[0]={players:S.players,color:S.color||"#d4af37"})}if(y&&a){e.selPartIds[1]=y.value;const S=Tt((a.participants||[]).find(h=>h.id===y.value));S&&(e.teams[1]={players:S.players,color:S.color||"#2f8cff"})}}else if(e.mode==="comp-adhoc"&&e.useManualTeams){const d=(s=document.getElementById("qs-t0p0"))==null?void 0:s.value,y=(o=document.getElementById("qs-t0p1"))==null?void 0:o.value,S=(i=document.getElementById("qs-t1p0"))==null?void 0:i.value,h=(l=document.getElementById("qs-t1p1"))==null?void 0:l.value;(d!==void 0||y!==void 0)&&(e.teams[0].players=[d??e.teams[0].players[0],y??e.teams[0].players[1]]),(S!==void 0||h!==void 0)&&(e.teams[1].players=[S??e.teams[1].players[0],h??e.teams[1].players[1]])}for(let d=0;d<(((c=e.sets)==null?void 0:c.length)||0);d++){const y=document.getElementById(`qs-s${d+1}-0`),S=document.getElementById(`qs-s${d+1}-1`);y&&(e.sets[d][0]=y.value===""?null:Math.max(0,Number(y.value)||0)),S&&(e.sets[d][1]=S.value===""?null:Math.max(0,Number(S.value)||0))}const n=document.getElementById("qs-wo");n&&(e.wo=!!n.checked);const r=document.getElementById("qs-winner");r&&(e.winner=r.value||"auto")}function Pr(e){var S,h,w,C,M,k,m,x;if(!e)return"Tocá los games de cada set para cargar el resultado";const t=e.compId?K(e.compId):null,a=Pe(t),n=rt(t),r=ye(((h=(S=e.teams[0])==null?void 0:S.players)==null?void 0:h[0])||"DRIVE 1",((C=(w=e.teams[0])==null?void 0:w.players)==null?void 0:C[1])||"REVÉS 1"),s=ye(((k=(M=e.teams[1])==null?void 0:M.players)==null?void 0:k[0])||"DRIVE 2",((x=(m=e.teams[1])==null?void 0:m.players)==null?void 0:x[1])||"REVÉS 2");if(e.wo)return e.winner==="0"?`✓ Victoria por W.O. para ${r}`:e.winner==="1"?`✓ Victoria por W.O. para ${s}`:"⚠️ Activaste W.O.: elegí qué pareja ganó abajo";const o=(e.sets||[]).filter(E=>E[0]!==null&&E[1]!==null);if(!o.length)return a?"Tocá los games finales de cada pareja (ej. 4 y 2, o 3 y 3)":"Tocá los games de cada set (0–7) para calcular el ganador";const i=o.map(E=>`${E[0]}-${E[1]}`).join(" · ");let l=0,c=0,d=0,y=0;if(o.forEach(E=>{const T=Number(E[0])||0,A=Number(E[1])||0;d+=T,y+=A,T>A?l++:A>T&&c++}),a){const E=n.gameBonusPts||0;if(e.winner==="0"||e.winner==="auto"&&l>c)return`✓ Gana ${r} (${i}) · +${n.winPts+d*E} pts vs +${n.lossPts+y*E} pts · + ELO`;if(e.winner==="1"||e.winner==="auto"&&c>l)return`✓ Gana ${s} (${i}) · +${n.winPts+y*E} pts vs +${n.lossPts+d*E} pts · + ELO`;if((e.winner==="draw"||e.winner==="auto")&&d===y)return`🤝 Empate ${i} · Ambos +${(n.drawPts??2)+d*E} pts (${n.drawPts??2}E + ${d}G) · Ajuste ELO`}return e.winner==="0"?`✓ Gana ${r} (${i})`:e.winner==="1"?`✓ Gana ${s} (${i})`:e.winner==="draw"&&d===y?`🤝 Empate (${i})`:l>c?`✓ Gana ${r} (${l}-${c} sets · ${i})`:c>l?`✓ Gana ${s} (${c}-${l} sets · ${i})`:`Empate ${l}-${c} en sets (${i}) — Agregá otro set o elegí ganador`}function is(){const e=b.ui.quickScoreState;if(!e)return;ea();const t=document.getElementById("qs-preview");t&&(t.textContent=Pr(e))}function hl(){var a,n,r,s,o,i,l,c,d,y,S,h,w,C,M,k;const{ui:e,prefs:t}=b;if(!e.compModal)return"";if(e.compModal==="daily-pts")return`
    <div class="scrim" data-close-comp-modal="1">
      <div class="sheet" style="max-width:460px">
        <h2>☀️ Puntos — Partido del Día</h2>
        <p class="muted" style="margin-bottom:12px">Cada partido del día otorga puntos de tabla + ELO exclusivo (separado de Ligas y Torneos).</p>
        <div class="row wrap">
          <div class="field">
            <label>Puntos por Victoria</label>
            <input type="number" class="inp" id="dp-win" min="0" max="100" value="${Number(t.dailyWinPts??3)}">
          </div>
          <div class="field">
            <label>Puntos por Derrota</label>
            <input type="number" class="inp" id="dp-loss" min="0" max="100" value="${Number(t.dailyLossPts??1)}">
          </div>
        </div>
        <div class="btn-row" style="margin-top:16px">
          <button class="btn primary block" data-act="save-daily-pts">Guardar</button>
          <button class="btn block" data-close-comp-modal="1">Cancelar</button>
        </div>
      </div>
    </div>`;if(e.compModal==="create"||e.compModal==="edit"){const m=e.compFormState||{},x=m.kind==="tournament",E=x&&m.format==="proyecto_padel",T=x?[["proyecto_padel","⚡ PRO PÁDEL"],["knockout","Eliminación Directa"],["groups_playoff","Grupos + Playoffs"],["open","Libre / Americano"]]:[["league_rr","Todos contra Todos"],["league_rr2","Ida y Vuelta"],["open","Liga Libre"]],A=m.defaultRules||{};return`
    <div class="scrim" data-close-comp-modal="1">
      <div class="sheet" style="max-width:560px">
        <div class="sheet-hdr">
          <h2>${e.compModal==="edit"?"Editar":"Crear"} ${x?"Torneo":"Liga"}</h2>
          <button type="button" class="icon-btn" data-close-comp-modal="1" title="Cerrar" style="width:36px;height:36px;border-radius:12px;font-size:15px;font-weight:700">✕</button>
        </div>

        <div class="field" style="margin-bottom:10px">
          <label>Tipo</label>
          <div class="pills">
            <button type="button" class="pill ${x?"":"on"}" data-cf-kind="league">🏅 Liga</button>
            <button type="button" class="pill ${x?"on":""}" data-cf-kind="tournament">🏆 Torneo</button>
          </div>
        </div>

        <div class="field" style="margin-bottom:10px">
          <label>Nombre</label>
          <input class="inp" id="cf-name" value="${g(m.name||"")}" placeholder="${E?"Ej: Torneo PRO PÁDEL #1":x?"Ej: Copa Nocturna / Open SÉ":"Ej: Liga del Jueves / Apertura"}">
        </div>

        <div class="field" style="margin-bottom:10px">
          <label>Formato</label>
          <div class="pills">
            ${T.map(([R,q])=>`<button type="button" class="pill ${m.format===R?"on":""}" data-cf-fmt="${R}">${q}</button>`).join("")}
          </div>
        </div>

        ${E?`
          <div style="padding:10px 12px;border-radius:12px;background:rgba(212,175,55,0.10);border:1px solid rgba(212,175,55,0.32);margin-bottom:10px;font-size:12.5px;color:var(--tx2);line-height:1.4">
            <b style="color:var(--gold2);display:block;margin-bottom:2px">⚡ Modo PRO PÁDEL · ELO Principal</b>
            Carga directa de resultados finales (ej. <i>Lucía-Juan vs Marcos-Noelia 4-2</i> o empate <i>3-3</i>), sin fiscalización ni marcador punto a punto. Contabiliza ranking <b>Individual por ELO</b> y puntaje secundario por <b>Games + Bonus</b>.
          </div>
        `:""}

        ${m.format==="groups_playoff"?`
          <div class="row wrap" style="margin-bottom:10px">
            <div class="field">
              <label>Cantidad de grupos</label>
              <select class="inp" id="cf-ngroups">
                ${[2,3,4].map(R=>`<option value="${R}" ${(Number(m.numGroups)||2)===R?"selected":""}>${R} grupos</option>`).join("")}
              </select>
            </div>
            <div class="field">
              <label>Clasifican por grupo</label>
              <select class="inp" id="cf-adv">
                ${[1,2,3,4].map(R=>`<option value="${R}" ${(Number(m.advancePerGroup)||2)===R?"selected":""}>Top ${R}</option>`).join("")}
              </select>
            </div>
          </div>`:""}

        ${E?"":`
          <div class="field" style="margin-bottom:10px">
            <label>Ranking por</label>
            <div class="pills">
              <button type="button" class="pill ${m.rankingMode==="pairs"?"on":""}" data-cf-rmode="pairs">👥 Parejas Fijas</button>
              <button type="button" class="pill ${m.rankingMode==="individual"?"on":""}" data-cf-rmode="individual">👤 Individual</button>
              <button type="button" class="pill ${m.rankingMode==="both"?"on":""}" data-cf-rmode="both">🔀 Ambos</button>
            </div>
          </div>
        `}

        <div class="row pts-grid" style="margin-bottom:10px">
          <div class="field">
            <label>Pts Victoria</label>
            <input type="number" class="inp" id="cf-wpts" min="0" max="50" value="${Number(m.winPts??3)}">
          </div>
          ${E?`
            <div class="field">
              <label>Pts Empate</label>
              <input type="number" class="inp" id="cf-dpts" min="0" max="50" value="${Number(m.drawPts??2)}">
            </div>
          `:""}
          <div class="field">
            <label>Pts Derrota</label>
            <input type="number" class="inp" id="cf-lpts" min="0" max="50" value="${Number(m.lossPts??1)}">
          </div>
          ${E?`
            <div class="field">
              <label>Pts / Game</label>
              <input type="number" class="inp" id="cf-gpts" min="0" max="20" value="${Number(m.gameBonusPts??1)}">
            </div>
          `:`
            <div class="field">
              <label>Bonus / Set</label>
              <input type="number" class="inp" id="cf-spts" min="0" max="10" value="${Number(m.setBonusPts??0)}">
            </div>
          `}
        </div>

        ${E?"":`
          <div class="row wrap" style="margin-bottom:14px">
            <div class="field">
              <label>Sets por defecto</label>
              <select class="inp" id="cf-sets">
                <option value="1" ${(Number(A.totalSets)||3)===1?"selected":""}>1 Set único</option>
                <option value="3" ${(Number(A.totalSets)||3)===3?"selected":""}>Al mejor de 3 sets</option>
              </select>
            </div>
            <div class="field">
              <label>En el 40-40</label>
              <select class="inp" id="cf-deuce">
                <option value="golden" ${(A.deuceRule||"golden")==="golden"?"selected":""}>Punto de Oro</option>
                <option value="adv" ${A.deuceRule==="adv"?"selected":""}>Ventajas</option>
                <option value="star" ${A.deuceRule==="star"?"selected":""}>Star Point (FIP)</option>
              </select>
            </div>
          </div>
        `}

        <div class="btn-row" style="margin-top:12px">
          <button class="btn primary block" data-act="save-comp-modal">${e.compModal==="edit"?"Guardar Cambios":E?"Crear Torneo":"Crear y Gestionar"}</button>
          <button class="btn block" data-close-comp-modal="1">Cancelar</button>
        </div>
      </div>
    </div>`}if(e.compModal==="quick-score"&&(e.quickScoreState||e.quickScoreFixtureId)){!e.quickScoreState&&e.quickScoreFixtureId&&(e.quickScoreState=fr({mode:"fixture",fixtureKey:e.quickScoreFixtureId}));const m=e.quickScoreState,x=m.compId?K(m.compId):null,E=Pe(x),T=x?(x.participants||[]).filter(f=>f.type==="pair"):[],A=x?Hi(x):[],R=x?Array.from(new Set([...A,...La()])):La(),q=ye(((n=(a=m.teams[0])==null?void 0:a.players)==null?void 0:n[0])||"DRIVE 1",((s=(r=m.teams[0])==null?void 0:r.players)==null?void 0:s[1])||"REVÉS 1"),_=ye(((i=(o=m.teams[1])==null?void 0:o.players)==null?void 0:i[0])||"DRIVE 2",((c=(l=m.teams[1])==null?void 0:l.players)==null?void 0:c[1])||"REVÉS 2"),F=m.mode==="fixture"?` (${g(m.stageLabel||"Cruce")})`:x?` · ${g(x.name)}`:" · Partido del Día",B=f=>f>=2,p=new Set([(y=(d=m.teams[0])==null?void 0:d.players)==null?void 0:y[0],(h=(S=m.teams[0])==null?void 0:S.players)==null?void 0:h[1],(C=(w=m.teams[1])==null?void 0:w.players)==null?void 0:C[0],(k=(M=m.teams[1])==null?void 0:M.players)==null?void 0:k[1]].map(f=>String(f||"").trim().toUpperCase()).filter(Boolean)),u=f=>`inp qs-slot-inp ${m.activeSlot===f?"active-slot":""}`;return`
    <div class="scrim" data-close-comp-modal="1">
      <div class="sheet" style="max-width:520px">
        ${m.mode==="comp-adhoc"?`<datalist id="qs-known-players">${R.map(f=>`<option value="${g(f)}">`).join("")}</datalist>`:""}
        <div class="sheet-hdr">
          <h2 style="font-size:21px">⚡ Cargar Resultado${F}</h2>
          <button class="icon-btn" data-close-comp-modal="1" title="Cerrar" style="width:36px;height:36px;border-radius:12px;font-size:15px;font-weight:700">✕</button>
        </div>

        ${m.mode==="comp-adhoc"?`
          <div class="field" style="margin-bottom:10px">
            <label>${E?"Turno / Ronda (opcional)":"Etapa / Ronda (opcional)"}</label>
            <input class="inp" id="qs-round" value="${g(m.stageLabel||"")}" placeholder="${E?"Ej: Turno 1 / Cancha 2 (opcional)":"Ej: Fecha 2 / Grupo A / Libre"}">
          </div>
          ${T.length>=2&&!m.useManualTeams?`
            <div class="row wrap" style="margin-bottom:8px">
              <div class="field">
                <label>Pareja 1</label>
                <select class="inp" id="qs-sel0">
                  ${T.map(f=>{var $,P,L;return`<option value="${g(f.id)}" ${(($=m.selPartIds)==null?void 0:$[0])===f.id?"selected":""}>${g(ye((P=f.players)==null?void 0:P[0],(L=f.players)==null?void 0:L[1]))}</option>`}).join("")}
                </select>
              </div>
              <div class="field">
                <label>Pareja 2</label>
                <select class="inp" id="qs-sel1">
                  ${T.map(f=>{var $,P,L;return`<option value="${g(f.id)}" ${(($=m.selPartIds)==null?void 0:$[1])===f.id?"selected":""}>${g(ye((P=f.players)==null?void 0:P[0],(L=f.players)==null?void 0:L[1]))}</option>`}).join("")}
                </select>
              </div>
            </div>
            <div style="margin-bottom:12px">
              <button type="button" class="pill sm" data-act="qs-toggle-manual-teams">✏️ Escribir nombres / Armar parejas libres</button>
            </div>
          `:`
            <div class="row wrap" style="margin-bottom:8px">
              <div class="field"><label>Pareja 1 · Jugador 1</label><input class="${u(0)}" id="qs-t0p0" data-qs-slot="0" list="qs-known-players" value="${g(m.teams[0].players[0]||"")}" placeholder="Ej: Lucía"></div>
              <div class="field"><label>Pareja 1 · Jugador 2</label><input class="${u(1)}" id="qs-t0p1" data-qs-slot="1" list="qs-known-players" value="${g(m.teams[0].players[1]||"")}" placeholder="Ej: Juan"></div>
            </div>
            <div class="row wrap" style="margin-bottom:8px">
              <div class="field"><label>Pareja 2 · Jugador 1</label><input class="${u(2)}" id="qs-t1p0" data-qs-slot="2" list="qs-known-players" value="${g(m.teams[1].players[0]||"")}" placeholder="Ej: Marcos"></div>
              <div class="field"><label>Pareja 2 · Jugador 2</label><input class="${u(3)}" id="qs-t1p1" data-qs-slot="3" list="qs-known-players" value="${g(m.teams[1].players[1]||"")}" placeholder="Ej: Noelia"></div>
            </div>
            ${A.length?`
              <div style="margin-bottom:10px">
                <div style="display:flex;align-items:center;justify-content:space-between;gap:6px;margin-bottom:5px">
                  <small class="muted" style="font-size:11px">Tocá jugadores para llenar rápido (casilla ${(m.activeSlot||0)+1}/4):</small>
                  <button type="button" class="pill sm" data-act="qs-clear-players" style="min-height:24px;padding:2px 8px;font-size:11px">Limpiar nombres</button>
                </div>
                <div class="qs-player-chips">
                  ${A.map(f=>`<button type="button" class="qs-p-chip ${p.has(f.toUpperCase())?"used":""}" data-qs-pick-player="${g(f)}">+ ${g(f)}</button>`).join("")}
                </div>
              </div>
            `:`
              <div style="display:flex;justify-content:flex-end;margin-bottom:8px">
                <button type="button" class="pill sm" data-act="qs-clear-players" style="min-height:24px;padding:2px 8px;font-size:11px">Limpiar nombres</button>
              </div>
            `}
            ${T.length>=2?'<div style="margin-bottom:12px"><button type="button" class="pill sm" data-act="qs-toggle-manual-teams">👥 Elegir parejas inscriptas</button></div>':""}
          `}
        `:`
          <p class="muted" style="margin-bottom:12px"><b>${g(q)}</b> vs <b>${g(_)}</b> · Tocá los games de cada set sin anotar punto por punto.</p>
        `}

        ${m.sets.map((f,$)=>{const P=B($)?[0,1,2,3,4,5,6,7,10]:[0,1,2,3,4,5,6,7],L=$===2&&m.hasSuperTbFinal;return`
          <div class="qs-set-card">
            <div class="qs-set-hdr">
              <b>${E?"Marcador Final (Games)":`Set ${$+1}${L?" / Súper TB":$>=2?" (Opcional)":""}`}</b>
              <button type="button" class="pill sm" data-qs-clear-set="${$}" style="min-height:26px;padding:2px 8px;font-size:11px">Limpiar</button>
            </div>
            ${[0,1].map(j=>{var ee;const W=((ee=m.teams[j])==null?void 0:ee.color)||(j===0?"#d4af37":"#2f8cff"),V=j===0?q:_,U=f[j],re=U==null?"":String(U);return`
              <div class="qs-team-row">
                <div class="qs-team-top">
                  <span class="qs-team-lbl" style="--c:${g(W)}"><span class="dot"></span>${g(V)}</span>
                  <input type="number" class="inp qs-num" id="qs-s${$+1}-${j}" min="0" max="30" value="${g(re)}" placeholder="–">
                </div>
                <div class="qs-pills" data-qs-row="${$}:${j}">
                  ${P.map(Z=>`<button type="button" class="qs-g-pill ${U===Z?"on":""}" style="--c:${g(W)};--f:${Ot(W)}" data-qs-pick="${$}:${j}:${Z}">${Z}</button>`).join("")}
                </div>
              </div>`}).join("")}
          </div>`}).join("")}

        ${!E&&m.sets.length<5?`
          <button type="button" class="btn sm block" data-act="qs-add-set" style="margin-bottom:8px">
            ${I.plus} Agregar Set ${m.sets.length+1}${m.sets.length===2?" / Súper TB":""}
          </button>`:""}

        <div class="qs-preview" id="qs-preview">${g(Pr(m))}</div>

        ${E?"":`
          <div class="tog" style="border:none;padding:4px 0">
            <div><b>Victoria por Walkover (W.O.)</b><small>Otorga puntos de tabla y avanza sin alterar ELO</small></div>
            <label class="sw"><input type="checkbox" id="qs-wo" ${m.wo?"checked":""}><span></span></label>
          </div>
        `}

        <div class="field" style="margin:8px 0 14px">
          <label>${E?"Definición del resultado (auto detecta empate)":"Ganador (si empatan sets o en W.O.)"}</label>
          <select class="inp" id="qs-winner">
            <option value="auto" ${m.winner==="auto"?"selected":""}>${E?"Automático por marcador (o Empate)":"Automático por sets"}</option>
            <option value="0" ${m.winner==="0"?"selected":""}>Gana ${g(q)}</option>
            <option value="1" ${m.winner==="1"?"selected":""}>Gana ${g(_)}</option>
            ${E?`<option value="draw" ${m.winner==="draw"?"selected":""}>🤝 Empate oficial</option>`:""}
          </select>
        </div>

        <div class="btn-row">
          <button class="btn primary block" data-act="save-quick-score" data-target="${g(m.fixtureKey||e.quickScoreFixtureId||"")}">${I.check} Guardar Resultado</button>
          <button class="btn block" data-close-comp-modal="1">Cancelar</button>
        </div>
      </div>
    </div>`}if(e.compModal==="add-fixture"){const m=K(e.compId);if(!m)return"";const x=(m.participants||[]).filter(E=>E.type==="pair");return`
    <div class="scrim" data-close-comp-modal="1">
      <div class="sheet" style="max-width:500px">
        <h2>Agregar Cruce Manual</h2>
        <div class="field" style="margin-bottom:10px">
          <label>Etapa / Fecha</label>
          <input class="inp" id="af-round" value="Fecha 1" placeholder="Ej: Fecha 1 / Semifinal">
        </div>
        ${x.length>=2?`
          <div class="field" style="margin-bottom:10px">
            <label>Pareja 1 (inscripta)</label>
            <select class="inp" id="af-sel0">
              ${x.map(E=>{var T,A;return`<option value="${g(E.id)}">${g(ye((T=E.players)==null?void 0:T[0],(A=E.players)==null?void 0:A[1]))}</option>`}).join("")}
            </select>
          </div>
          <div class="field" style="margin-bottom:14px">
            <label>Pareja 2 (inscripta)</label>
            <select class="inp" id="af-sel1">
              ${x.map((E,T)=>{var A,R;return`<option value="${g(E.id)}" ${T===1?"selected":""}>${g(ye((A=E.players)==null?void 0:A[0],(R=E.players)==null?void 0:R[1]))}</option>`}).join("")}
            </select>
          </div>
        `:`
          <div class="row wrap" style="margin-bottom:10px">
            <div class="field"><label>Pareja 1 · Drive</label><input class="inp" id="af-t0p0" placeholder="Drive 1"></div>
            <div class="field"><label>Pareja 1 · Revés</label><input class="inp" id="af-t0p1" placeholder="Revés 1"></div>
          </div>
          <div class="row wrap" style="margin-bottom:14px">
            <div class="field"><label>Pareja 2 · Drive</label><input class="inp" id="af-t1p0" placeholder="Drive 2"></div>
            <div class="field"><label>Pareja 2 · Revés</label><input class="inp" id="af-t1p1" placeholder="Revés 2"></div>
          </div>
        `}
        <div class="btn-row">
          <button class="btn primary block" data-act="save-manual-fixture" data-comp="${g(m.id)}">Agregar Cruce</button>
          <button class="btn block" data-close-comp-modal="1">Cancelar</button>
        </div>
      </div>
    </div>`}if(e.compModal==="sync-qr"){const m=K(e.compId);if(!m)return"";const x=_a(m),E=Ra(m,!1);return`
    <div class="scrim" data-close-comp-modal="1">
      <div class="sheet" style="max-width:480px">
        <div class="sheet-hdr">
          <h2>📡 Conectar Dispositivos</h2>
          <button class="icon-btn" data-close-comp-modal="1" title="Cerrar" style="width:36px;height:36px;border-radius:12px;font-size:15px;font-weight:700">✕</button>
        </div>
        <p class="muted" style="margin-bottom:12px">Todos los celulares que escaneen este QR o abran el enlace se conectan al mismo <b>${m.kind==="tournament"?"Torneo":"Liga"}: ${g(m.name)}</b> y suman sus resultados automáticamente al finalizar cada partido.</p>

        <div style="text-align:center;margin:10px 0 14px">
          <div style="display:inline-block;padding:12px;background:#fff;border-radius:16px;border:3px solid var(--gold);box-shadow:0 8px 28px rgba(0,0,0,.45)">
            <canvas id="comp-sync-qr-canvas" width="230" height="230" style="display:block;border-radius:6px"></canvas>
          </div>
          <div style="margin-top:10px">
            <span class="muted" style="font-size:11.5px;display:block;letter-spacing:.8px;text-transform:uppercase">Código de Sala</span>
            <b style="font-family:var(--fd);font-size:28px;letter-spacing:4px;color:var(--gold)">#${g(x)}</b>
          </div>
        </div>

        <div class="field" style="margin-bottom:10px">
          <label>Enlace directo de invitación</label>
          <div style="display:flex;gap:6px">
            <input class="inp" id="sync-comp-url-inp" readonly value="${g(E)}" style="font-size:12px">
            <button class="btn primary sm" data-copy-input="sync-comp-url-inp" style="flex:none">${I.copy} Copiar</button>
          </div>
        </div>

        <div class="btn-row" style="margin-top:10px">
          <button class="btn primary block" data-act="share-comp-invite">${I.share} Enviar Enlace (WhatsApp)</button>
          <button class="btn block" data-act="dl-comp-qr">${I.dl} Descargar QR HD</button>
        </div>
        <div class="btn-row" style="margin-top:8px">
          <button class="btn sm block" data-act="republish-comp-sync">↻ Actualizar datos en la nube</button>
          <button class="btn sm block" data-close-comp-modal="1">Cerrar</button>
        </div>

        <div style="margin-top:14px;padding:10px 12px;border-radius:10px;background:rgba(255,255,255,.03);border:1px solid var(--line);font-size:12px;color:var(--tx2);line-height:1.45">
          <b style="color:var(--tx);display:block;margin-bottom:4px">¿Cómo se usa en varias canchas?</b>
          1. Cada árbitro o jugador escanea este QR (o entra en <i>Ligas y Torneos → Unirse</i> con el código <b>#${g(x)}</b>).<br>
          2. Cada cancha inicia su cruce o partido desde esta competencia.<br>
          3. Al terminar cada partido, los puntos, ELO, fixture y llaves se fusionan en todos los dispositivos conectados.
        </div>
      </div>
    </div>`}return e.compModal==="join-comp"?`
    <div class="scrim" data-close-comp-modal="1">
      <div class="sheet" style="max-width:440px">
        <div class="sheet-hdr">
          <h2>📲 Unirse a Liga o Torneo</h2>
          <button class="icon-btn" data-close-comp-modal="1" title="Cerrar" style="width:36px;height:36px;border-radius:12px;font-size:15px;font-weight:700">✕</button>
        </div>
        <p class="muted" style="margin-bottom:14px">Ingresá el código de sala (6 letras/números) o pegá el enlace compartido por el organizador para conectarte desde este dispositivo.</p>
        <div class="field" style="margin-bottom:14px">
          <label>Código de Sala o Enlace</label>
          <input class="inp" id="join-comp-code" placeholder="Ej: 7K4M9P o pegá el link #c=...">
        </div>
        <div class="btn-row">
          <button class="btn primary block" data-act="submit-join-comp">Conectarme ahora</button>
          <button class="btn block" data-close-comp-modal="1">Cancelar</button>
        </div>
      </div>
    </div>`:""}function vl(){const{ui:e,historyList:t}=b,a=(e.histQuery||"").toLowerCase().trim(),n=e.histFilter||"all",r=t.filter(s=>{var d,y;const o=_t(s);if(n!=="all"&&o!==n)return!1;if(!a)return!0;const i=s.teams.flatMap(S=>S.players).join(" ").toLowerCase(),l=He(s),c=(((d=s.competition)==null?void 0:d.compName)||(l?(y=K(l))==null?void 0:y.name:"")||"").toLowerCase();return i.includes(a)||c.includes(a)||Ba(s.createdAt).toLowerCase().includes(a)});return`
  <div class="page">
    <div class="page-h">
      <h1>Historial (${t.length})</h1>
      <div class="page-h-acts">
        <button class="btn sm" data-act="export-json" title="Descargar copia de seguridad completa en JSON">${I.dl} Backup JSON</button>
        <label class="btn sm" style="cursor:pointer" title="Importar partidos desde archivo JSON">
          ${I.up} Importar
          <input type="file" accept=".json,application/json" style="display:none" id="imp-json-file">
        </label>
        <button class="icon-btn" data-nav="settings" title="Ajustes">${I.gear}</button>
      </div>
    </div>

    <div class="seg" style="margin-bottom:12px">
      <button class="${n==="all"?"on":""}" data-set-hfilter="all">Todos</button>
      <button class="${n==="daily"?"on":""}" data-set-hfilter="daily">☀️ Día</button>
      <button class="${n==="league"?"on":""}" data-set-hfilter="league">🏅 Ligas</button>
      <button class="${n==="tournament"?"on":""}" data-set-hfilter="tournament">🏆 Torneos</button>
    </div>

    <div class="field">
      <input class="inp" placeholder="Buscar por jugador, fecha o torneo..." value="${g(e.histQuery)}" id="hist-search-inp">
    </div>

    ${r.length?r.map($n).join(""):`<div class="empty">${I.hist}<br>No se encontraron partidos.</div>`}
    ${vt()}
  </div>
  ${it("history")}`}function yl(){var S;const{ui:e,historyList:t,competitionsList:a,prefs:n}=b,r=Ze("padel_ranking_vault",{}),s=Object.values(r),o=!!(e.sharedRanking&&Array.isArray(e.sharedRanking.players)&&e.sharedRanking.players.length>0);!t.length&&!a.length&&o&&e.playerRankingView==="shared"&&(e.playerScope="shared");const i=fs(),l=i.scope,c=i.sortKey||"pts",d=i.players||[];let y="";if(l==="daily"){const h=e.dailyTimeFilter||"all",w=e.playerEntityMode||"individual",C=Number(n.dailyWinPts??3),M=Number(n.dailyLossPts??1);y=`
      <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;background:linear-gradient(135deg,rgba(212,175,55,0.08) 0%,rgba(16,16,22,0.92) 80%);border:1px solid rgba(212,175,55,0.25);border-radius:12px;padding:8px 14px;margin-bottom:12px;flex-wrap:wrap">
        <div style="display:flex;align-items:center;gap:8px;min-width:0;overflow:hidden">
          <span style="font-size:16px">☀️</span>
          <div style="min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">
            <span style="font-size:13px;font-weight:700;color:var(--tx)">${g(n.rankingName||"Mi Ranking")} · Partido del Día</span>
            <span style="font-family:monospace;font-size:11px;color:var(--gold);margin-left:6px;background:rgba(212,175,55,0.12);padding:2px 6px;border-radius:6px;font-weight:700">#${g(n.rankingId)}</span>
          </div>
        </div>
        <div style="display:flex;gap:6px">
          <button class="btn sm" data-act="open-daily-pts" style="padding:4px 9px;font-size:11.5px;height:auto">+${C}V / +${M}D</button>
          <button class="btn sm" data-act="prompt-ranking-name" style="padding:4px 9px;font-size:11.5px;height:auto">✏️ Renombrar</button>
        </div>
      </div>

      <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:12px">
        <div class="seg" style="flex:1 1 180px">
          <button class="${h==="all"?"on":""}" data-set-daily-time="all">📅 Acumulado</button>
          <button class="${h==="today"?"on":""}" data-set-daily-time="today">☀️ Hoy</button>
        </div>
        <div class="seg" style="flex:1 1 180px">
          <button class="${w==="individual"?"on":""}" data-set-pentity="individual">👤 Individual</button>
          <button class="${w==="pairs"?"on":""}" data-set-pentity="pairs">👥 Por Parejas</button>
        </div>
      </div>`}else if(l==="league"||l==="tournament"){const h=a.filter(w=>w.kind===l);if(!h.length)y=`
      <div class="card" style="text-align:center;margin-bottom:14px">
        <p class="muted" style="margin-bottom:10px">Todavía no creaste ${l==="league"?"ninguna Liga":"ningún Torneo"}.</p>
        <button class="btn primary sm" data-act="new-comp" data-kind="${l}">${I.plus} Crear ${l==="league"?"Liga":"Torneo"}</button>
      </div>`;else{const w=i.comp,C=w?Array.from(new Set((w.participants||[]).map(k=>k.group).filter(Boolean))).sort():[],M=i.entityMode||"pairs";y=`
      <div class="card" style="margin-bottom:12px;padding:12px 14px">
        <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
          <select class="inp" style="flex:1 1 190px;min-height:38px" data-act="sel-rank-comp">
            ${h.map(k=>`<option value="${g(k.id)}" ${k.id===(w==null?void 0:w.id)?"selected":""}>${g(k.name)}</option>`).join("")}
          </select>
          ${w?`<button class="btn sm" data-open-comp="${g(w.id)}">Gestionar</button>`:""}
          <button class="btn sm" data-act="new-comp" data-kind="${l}">${I.plus}</button>
        </div>
        ${(w==null?void 0:w.rankingMode)==="both"?`
          <div class="seg" style="margin-top:10px">
            <button class="${M==="pairs"?"on":""}" data-set-pentity="pairs">👥 Por Parejas</button>
            <button class="${M==="individual"?"on":""}" data-set-pentity="individual">👤 Individual</button>
          </div>`:""}
        ${(w==null?void 0:w.format)==="groups_playoff"&&C.length?`
          <div class="pills" style="margin-top:10px">
            <button class="pill ${(e.selectedGroupFilter||"all")==="all"?"on":""}" data-set-gfilter="all">Todos</button>
            ${C.map(k=>`<button class="pill ${e.selectedGroupFilter===k?"on":""}" data-set-gfilter="${g(k)}">Grupo ${g(k)}</button>`).join("")}
          </div>`:""}
      </div>`}}else if(l==="shared"){const h=(S=e.sharedRanking)!=null&&S.timestamp?` · ${new Date(e.sharedRanking.timestamp).toLocaleDateString("es-AR",{day:"numeric",month:"short"})}`:"";y=`
    ${s.length>1?`
      <div class="seg" style="margin-bottom:12px;overflow-x:auto;white-space:nowrap">
        ${s.map(w=>{var C;return`
          <button class="${((C=e.sharedRanking)==null?void 0:C.id)===w.id?"on":""}" data-select-ranking="${g(w.id)}">📡 ${g(w.name||"Compartido")} (#${g(w.id)})</button>
        `}).join("")}
      </div>`:""}
    ${o&&e.sharedRanking?`
      <div class="card" style="margin-bottom:14px;background:linear-gradient(135deg,rgba(212,175,55,0.14) 0%,rgba(16,16,22,0.96) 60%);border:1px solid rgba(212,175,55,0.38);padding:12px 16px;display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap">
        <div style="display:flex;align-items:center;gap:10px">
          <span style="font-size:24px">📡</span>
          <div>
            <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">
              <b style="font-size:14px;color:var(--acc-ink)">${g(e.sharedRanking.name||"Ranking Compartido")}</b>
              <span style="font-family:monospace;font-size:11.5px;color:var(--gold);background:rgba(212,175,55,0.15);padding:1px 6px;border-radius:6px;font-weight:700">#${g(e.sharedRanking.id||"RK-EXT")}</span>
            </div>
            <small style="color:var(--tx2);font-size:12px">${g(e.sharedRanking.subtitle||`${d.length} participantes`)}${h}</small>
          </div>
        </div>
        <div style="display:flex;align-items:center;gap:6px">
          <button class="btn sm" data-set-pscope="daily">Ver mi ranking</button>
          <button class="btn sm" data-act="clear-shared-ranking" title="Cerrar ranking compartido">✕</button>
        </div>
      </div>`:""}`}return`
  <div class="page">
    <div class="page-h">
      <h1>Rankings</h1>
      <div class="page-h-acts">
        <button class="btn primary sm" data-act="share-ranking" title="Compartir Ranking por WhatsApp o enlace">${I.share} Compartir</button>
        <button class="btn sm" data-act="export-ranking-img" title="Descargar imagen oficial del Ranking">${I.img} Imagen</button>
        <button class="icon-btn" data-nav="settings" title="Ajustes">${I.gear}</button>
      </div>
    </div>
    <p class="muted" style="text-align:center;margin-bottom:12px">Rankings separados por competencia: Partido del Día (acumulado u hoy), Ligas y Torneos.</p>

    <div class="seg" style="margin-bottom:12px">
      <button class="${l==="daily"?"on":""}" data-set-pscope="daily">☀️ Partido del Día</button>
      <button class="${l==="league"?"on":""}" data-set-pscope="league">🏅 Ligas</button>
      <button class="${l==="tournament"?"on":""}" data-set-pscope="tournament">🏆 Torneos</button>
      ${o||s.length>0?`<button class="${l==="shared"?"on":""}" data-set-pscope="shared">📡 Guardados</button>`:""}
    </div>

    ${y}

    ${kr(c,i.primaryMetric==="elo"||Pe(i.comp))}

    ${Xs(d,i,{tableTitle:i.title||"Tabla de Posiciones",emptyText:l==="daily"?e.dailyTimeFilter==="today"?"Todavía no hay Partidos del Día registrados hoy.":"Todavía no hay Partidos del Día guardados.":"Sin partidos ni inscriptos cargados en esta competencia."})}

    ${d.length?`
    <div class="btn-row" style="margin-top:14px;margin-bottom:14px">
      <button class="btn primary big" data-act="share-ranking">${I.share} Compartir Ranking</button>
      <button class="btn big" data-act="export-ranking-img">${I.img} Descargar Imagen en HD</button>
    </div>`:""}

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

    ${vt()}
  </div>
  ${it("players")}`}function $l(){const{prefs:e,ui:t,historyList:a,competitionsList:n}=b,r=ua();return`
  <div class="page">
    <div class="page-h">
      <div class="page-h-top">
        <button class="icon-btn" data-nav="home" title="Inicio">${I.back}</button>
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
          <input class="inp" id="cfg-ranking-name" value="${g(e.rankingName||"")}" placeholder="Ej: Ranking de Fabián, Torneo Central..." style="flex:1">
          <button class="btn sm primary" data-act="save-ranking-name">Guardar</button>
        </div>
        <small class="muted" style="margin-top:4px;display:block">Aparece en los mensajes de WhatsApp, enlaces interactivos y tarjetas descargadas.</small>
      </div>

      <div style="display:flex;align-items:center;justify-content:space-between;margin-top:14px;background:rgba(255,255,255,0.035);padding:10px 14px;border-radius:12px;border:1px solid var(--line);flex-wrap:wrap;gap:8px">
        <div>
          <b style="font-size:12px;color:var(--tx2);display:block">ID ÚNICO DE TU CUENTA</b>
          <span style="font-family:monospace;font-size:16px;color:var(--gold);font-weight:800;letter-spacing:1px">#${g(e.rankingId)}</span>
        </div>
        <div style="display:flex;gap:6px">
          <button class="btn sm" data-act="copy-ranking-id" title="Copiar ID">${I.share} Copiar ID</button>
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
          <input type="number" class="inp" id="cfg-daily-win" min="0" max="100" value="${Number(e.dailyWinPts??3)}">
        </div>
        <div class="field">
          <label>Puntos por Derrota</label>
          <input type="number" class="inp" id="cfg-daily-loss" min="0" max="100" value="${Number(e.dailyLossPts??1)}">
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
        <label class="sw"><input type="checkbox" ${e.sound?"checked":""} data-pref-bool="sound"><span></span></label>
      </div>
      <div class="tog">
        <div><b>Voz de árbitro (Cantado de puntos)</b><small>Anuncia el marcador en español tras cada punto ("15 iguales", "Punto de oro").</small></div>
        <label class="sw"><input type="checkbox" ${e.voice?"checked":""} data-pref-bool="voice"><span></span></label>
      </div>
      <div class="tog">
        <div><b>Vibración háptica (Móvil)</b><small>Respuesta táctil al tocar el tablero.</small></div>
        <label class="sw"><input type="checkbox" ${e.vibrate?"checked":""} data-pref-bool="vibrate"><span></span></label>
      </div>
      <div class="tog">
        <div><b>Aviso y cronómetro de cambio de lado</b><small>Muestra alerta con cuenta regresiva según la regla de cambio de lado elegida en el partido.</small></div>
        <label class="sw"><input type="checkbox" ${e.changeoverAlerts?"checked":""} data-pref-bool="changeoverAlerts"><span></span></label>
      </div>
      <div class="tog">
        <div><b>Mantener pantalla encendida</b><small>Evita que el celular o tablet se bloquee durante el partido.</small></div>
        <label class="sw"><input type="checkbox" ${e.wakeLock?"checked":""} data-pref-bool="wakeLock"><span></span></label>
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
          <b>${t.isOnline?"🟢 En línea":"🟡 Offline"}</b>
        </div>
        <div class="sys-stat-pill">
          <span>Caché Offline</span>
          <b>${t.swStatus==="active"?"✅ Lista offline":t.swStatus==="unsupported"?"⚠️ Requiere HTTPS":"⏳ Preparando"}</b>
        </div>
        <div class="sys-stat-pill">
          <span>Persistencia</span>
          <b>${t.storagePersisted===!0?"🛡️ Protegida":"ℹ️ Estándar"}${t.storageUsageBytes!==null?" · "+Ar(t.storageUsageBytes):""}</b>
        </div>
        <div class="sys-stat-pill">
          <span>Registros</span>
          <b>${a.length} P · ${n.length} L/T · ${r.length} Tarj.</b>
        </div>
      </div>
      <div class="btn-row" style="margin-bottom:10px">
        ${t.swUpdateReady?'<button class="btn primary sm" data-act="apply-sw-update">✨ Actualizar versión</button>':""}
        ${t.pwaInstallPrompt&&!t.pwaInstalled?'<button class="btn primary sm" data-act="install-pwa">📲 Instalar App</button>':""}
      </div>
      ${!t.pwaInstalled&&/iphone|ipad|ipod/i.test(navigator.userAgent||"")?'<p class="muted" style="margin-bottom:10px">En iPhone o iPad: tocá <b>Compartir ➔ Agregar a inicio</b> para usarla instalada y 100% offline.</p>':""}
      <details style="margin-top:6px">
        <summary style="cursor:pointer;font-size:12.5px;color:var(--tx2);font-weight:700">⚙️ Servidor Relay de Sincronización (avanzado)</summary>
        <div class="field" style="margin-top:10px">
          <label>URL base del servidor ntfy (por defecto https://ntfy.sh)</label>
          <div style="display:flex;gap:8px;flex-wrap:wrap">
            <input class="inp" id="cfg-sync-server" value="${g(lt())}" placeholder="https://ntfy.sh" style="flex:1;min-width:190px">
            <button class="btn sm primary" data-act="save-sync-server">Guardar</button>
            <button class="btn sm" data-act="reset-sync-server">Restablecer</button>
          </div>
          <small class="muted">Podés usar tu propia instancia de ntfy para evitar límites de IP públicos en torneos grandes.</small>
        </div>
      </details>
    </div>

    <div class="card">
      <h3>Datos y Copias de Seguridad (JSON)</h3>
      <p class="muted" style="margin-bottom:6px">Respaldo completo v3: historial de partidos, Ligas y Torneos, preferencias, rankings guardados${e.backupIncludeCards!==!1?" y Tarjetas HD":""}.</p>
      <p class="muted" style="margin-bottom:10px;font-size:12px">Último backup: <b>${e.lastBackupAt?g(Ba(e.lastBackupAt)):"Todavía no exportado"}</b>${(e.changesSinceBackup||0)>0?` · ${e.changesSinceBackup} cambios recientes sin exportar`:""}</p>
      <label class="chk-inline">
        <input type="checkbox" ${e.backupIncludeCards!==!1?"checked":""} data-pref-bool="backupIncludeCards">
        <span>Incluir Tarjetas de Jugador HD y logos en el Backup JSON</span>
      </label>
      <div class="btn-row" style="margin-bottom:10px">
        <button class="btn primary sm" data-act="export-json">${I.dl} Descargar Backup JSON</button>
        <button class="btn sm" data-act="share-json">${I.share} Compartir JSON</button>
        <label class="btn sm" style="cursor:pointer">
          ${I.up} Importar JSON
          <input type="file" accept=".json,application/json" style="display:none" id="imp-json-file">
        </label>
      </div>
      <div class="btn-row">
        <button class="btn danger sm" data-act="clear-all-data">${I.trash} Borrar historial</button>
        <button class="btn danger sm" data-act="clear-all-comps">${I.trash} Borrar Ligas y Torneos</button>
      </div>
    </div>
    ${vt()}
  </div>
  ${it("settings")}`}function ba(){return typeof location<"u"?location.href.split("#")[0]:""}function js(e,t=200){e&&wn(e,ba(),t)}function xr(){const{ui:e}=b,t=document.getElementById("qr-home-canvas");t&&js(t,180);const a=document.getElementById("app-qr-modal-canvas");a&&js(a,220);const n=document.getElementById("qr-settings-canvas");n&&js(n,190);const r=document.getElementById("comp-sync-qr-canvas");if(r){const s=K(e.compId);s&&wn(r,Ra(s,!0),230)}e.route==="player-card"&&De()}function Sl(){const e=ba();navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(e).then(()=>{D("Enlace copiado al portapapeles")}).catch(()=>{prompt("Copia este enlace de la app:",e)}):prompt("Copia este enlace de la app:",e)}function kl(){const t=`🎾 *Pádel Control SÉ · By Sairaf Engel*
Marcador con estadísticas avanzadas, locución por voz y seguimiento en vivo punto a punto.

📲 Abrí la app acá:
`+ba();window.open("https://api.whatsapp.com/send?text="+encodeURIComponent(t),"_blank")}function wl(){try{const e=ba(),t=document.createElement("canvas");new ur({element:t,value:e,size:380,level:"H",padding:14,background:"#ffffff",foreground:"#060609"});const a=560,n=740,r=document.createElement("canvas");r.width=a,r.height=n;const s=r.getContext("2d");if(!s)return;const o=s.createLinearGradient(0,0,0,n);o.addColorStop(0,"#161410"),o.addColorStop(.5,"#0a0a0d"),o.addColorStop(1,"#040406"),s.fillStyle=o,s.fillRect(0,0,a,n),s.strokeStyle="#d4af37",s.lineWidth=3,s.strokeRect(16,16,a-32,n-32),s.strokeStyle="rgba(212, 175, 55, 0.35)",s.lineWidth=1,s.strokeRect(22,22,a-44,n-44),s.fillStyle="#f5d061",s.font='bold italic 32px "Barlow Condensed", sans-serif',s.textAlign="center",s.fillText("PÁDEL CONTROL SÉ",a/2,75),s.fillStyle="#d4af37",s.font='italic 20px "Great Vibes", cursive, sans-serif',s.fillText("By Sairaf Engel",a/2,108);const i=(a-380)/2,l=135;s.fillStyle="#ffffff",s.roundRect?(s.beginPath(),s.roundRect(i-10,l-10,400,400,18),s.fill()):s.fillRect(i-10,l-10,400,400),s.drawImage(t,i,l,380,380),s.fillStyle="#c2b8a3",s.font='15px "Plus Jakarta Sans", sans-serif',s.fillText("Apuntá con la cámara de tu celular para abrir la app",a/2,580),s.fillStyle="rgba(212, 175, 55, 0.12)",s.fillRect(36,608,a-72,42),s.strokeStyle="rgba(212, 175, 55, 0.45)",s.lineWidth=1,s.strokeRect(36,608,a-72,42),s.fillStyle="#f5d061",s.font='bold 14px "Plus Jakarta Sans", monospace',s.fillText(e,a/2,634),s.fillStyle="#7d7461",s.font='12.5px "Plus Jakarta Sans", sans-serif',s.fillText("Marcador Profesional · Estadísticas · Voz · Transmisión en Vivo",a/2,692);const c=document.createElement("a");c.download="QR-Padel-Control-SE.png",c.href=r.toDataURL("image/png"),c.click(),D("¡Imagen del QR descargada!")}catch(e){console.error("Error downloading QR card:",e),D("Error al descargar imagen")}}function Pl(){const e=ba();return`
  <div class="scrim" data-close-qr="1" style="z-index:125">
    <div class="sheet" style="max-width:460px;text-align:center">
      <div class="sheet-hdr">
        <h2 style="font-size:21px;white-space:nowrap">Código QR de la App</h2>
        <button class="icon-btn" data-act="close-qr-modal" style="width:36px;height:36px;border-radius:12px" title="Cerrar">✕</button>
      </div>

      <div style="background:linear-gradient(135deg,rgba(212,175,55,0.12) 0%,rgba(16,16,22,0.95) 55%,rgba(245,208,97,0.06) 100%);border:1px solid rgba(212,175,55,0.35);border-radius:24px;padding:20px 16px;box-shadow:0 18px 45px rgba(0,0,0,0.85)">
        <div style="display:flex;align-items:center;justify-content:center;gap:12px;margin-bottom:14px">
          ${Ya.replace('class="logo-ic"','class="logo-ic" style="width:48px;height:48px"')}
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
          ${g(e)}
        </div>

        <div class="btn-row" style="gap:8px">
          <button class="btn primary block" data-act="share-app-wa">${I.share} Compartir por WhatsApp</button>
          <button class="btn block" data-act="copy-app-link">${I.share} Copiar Enlace</button>
          <button class="btn block" data-act="dl-app-qr">${I.dl} Descargar Tarjeta QR (Imagen)</button>
        </div>
      </div>

      <div style="margin-top:14px">
        <button class="btn sm" data-act="close-qr-modal" style="width:100%">Cerrar</button>
      </div>
    </div>
  </div>`}function xl(){const{activeMatch:e,historyList:t,competitionsList:a}=b;let n="";if(e&&e.status==="playing"){const d=Ee(e);n=`
    <div class="card live-card">
      <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;flex-wrap:wrap;margin-bottom:4px">
        <div class="live-dot" style="margin:0">PARTIDO EN CURSO · ${g(Wt(e.durationMs))}</div>
        ${ms(e)}
      </div>
      ${[0,1].map(y=>`
        <div class="mrow">
          <span class="bar" style="--c:${g(e.teams[y].color)}"></span>
          <span class="nm">${g(X(e,y))}</span>
          ${d.sets.map(S=>`<span class="s ${S.winner===y?"w":S.winner===null?"cur":""}">${S.games[y]}</span>`).join("")}
          <span class="s cur" style="width:42px">${g(d.pointDisplay[y])}</span>
        </div>`).join("")}
      <div class="btn-row" style="margin-top:12px">
        <button class="btn primary" data-act="resume-match">${I.play} Continuar marcador</button>
        <button class="btn" data-act="share-live">${I.live} Compartir en vivo</button>
        <button class="btn" data-open-stats="active">${I.chart} Estadísticas</button>
      </div>
    </div>`}const r=t.filter(d=>_t(d)==="daily"),s=Ma(Date.now()),o=r.filter(d=>Ma(d.createdAt)===s).length,i=a.slice(0,3),l=i.length?`
    <div class="sec-t" style="display:flex;align-items:center;justify-content:space-between">
      <span>Ligas y Torneos (${a.length})</span>
      <button class="btn sm" data-nav="competitions">Ver todo</button>
    </div>
    ${i.map(d=>{const y=rt(d),S=Pe(d),h=Ut(Xe(d),{...y,entityMode:d.rankingMode==="individual"?"individual":"pairs",seedParticipants:d.participants||[]}),C=Ft(h,S?"elo":"pts",{tiebreakMode:S?"games":"sets"})[0],M=Xe(d).filter(k=>k.status==="finished").length;return`
      <button class="comp-card" style="width:100%;text-align:left" data-open-comp="${g(d.id)}">
        <div class="comp-card-top">
          <div>
            <div class="comp-pills" style="margin-bottom:6px">
              <span class="badge ${S?"pp":d.kind==="league"?"league":"tourn"}">${S?"⚡ PRO PÁDEL":d.kind==="league"?"🏅 Liga":"🏆 Torneo"}</span>
              <span class="badge">${(d.participants||[]).length} inscriptos · ${M} PJ</span>
            </div>
            <div class="comp-card-title">${g(d.name)}</div>
          </div>
        </div>
        ${C&&C.matches>0?S?`<div class="comp-leader">🥇 Líder ELO: <b>${g(C.name)}</b> · ${C.elo} ELO (${C.pts} pts · ${C.gamesWon||0}G)</div>`:`<div class="comp-leader">🥇 Líder: <b>${g(C.name)}</b> · ${C.pts} pts · ${C.elo} ELO</div>`:'<div class="comp-leader">Tocá para cargar resultados o ver tabla</div>'}
      </button>`}).join("")}`:"",c=t.slice(0,4);return`
  <div class="page">
    <div class="hero">
      ${Ya}
      <div style="flex:1;min-width:0;display:flex;flex-direction:column;align-items:center;text-align:center">
        <h1>Pádel Control SÉ</h1>
        ${Ir()}
      </div>
      <div style="display:flex;gap:8px;flex:none">
        <button class="icon-btn" data-nav="settings" title="Ajustes">${I.gear}</button>
        <button class="icon-btn" data-act="open-qr-modal" title="Compartir App / Código QR">${I.qr}</button>
      </div>
    </div>

    ${z.renderHomeSystemBanners()}

    <div class="card" style="margin-top:-6px;margin-bottom:20px;background:linear-gradient(135deg, rgba(212,175,55,0.18) 0%, rgba(16,16,22,0.96) 60%, rgba(245,208,97,0.08) 100%);border:1px solid rgba(212,175,55,0.38);text-align:center">
      <h3 style="justify-content:center;margin-bottom:12px;font-size:15px;letter-spacing:1.4px">${I.qr} Código QR para Compartir la App</h3>
      <div style="display:flex;flex-direction:column;align-items:center;gap:12px">
        <div style="background:#ffffff;padding:12px;border-radius:18px;box-shadow:0 12px 30px rgba(0,0,0,0.65), 0 0 22px rgba(212,175,55,0.25);display:inline-block">
          <canvas id="qr-home-canvas" style="display:block;width:180px;height:180px;border-radius:8px"></canvas>
        </div>
        <div style="max-width:380px">
          <b style="font-size:15px;color:var(--tx);display:block">Escaneá con la cámara de tu celular</b>
          <small style="color:var(--tx2);font-size:12.5px;display:block;margin-top:3px;line-height:1.4">Cualquier persona puede apuntar a este código con la cámara de su celular para abrir o guardar la app gratis y al instante.</small>
          <div style="margin:8px 0 10px;background:rgba(255,255,255,0.04);border:1px solid var(--line);border-radius:10px;padding:6px 10px;font-family:monospace;font-size:11.5px;color:var(--acc-ink);word-break:break-all">
            ${g(ba())}
          </div>
        </div>
        <div class="btn-row" style="width:100%;max-width:440px">
          <button class="btn primary" data-act="share-app-wa" style="flex:1 1 130px">${I.share} WhatsApp</button>
          <button class="btn" data-act="copy-app-link" style="flex:1 1 130px">${I.share} Copiar Enlace</button>
          <button class="btn" data-act="dl-app-qr" style="flex:1 1 130px">${I.dl} Descargar QR</button>
        </div>
      </div>
    </div>

    ${n}

    <div class="home-actions-grid">
      <button class="btn primary big" data-nav="new">${I.plus} Nuevo Partido</button>
      <button class="btn big" data-nav="competitions">${I.award} Ligas y Torneos</button>
    </div>
    <button class="btn block daily-rk-btn" data-act="open-daily-ranking">
      <span class="daily-rk-meta">
        <span class="daily-rk-title">☀️ Ranking Partido del Día</span>
        <span class="daily-rk-sub">${o} hoy · ${r.length} total</span>
      </span>
      <span class="daily-rk-cta">Ver tabla →</span>
    </button>
    <button class="home-card-cta" data-open-player-card="">
      <div class="home-card-cta-ico">${I.idCard}</div>
      <div class="home-card-cta-meta">
        <span class="home-card-cta-title">Crear Tarjeta de Jugador</span>
        <span class="home-card-cta-sub">Subí tu foto, categoría, posición y mejor golpe · Generala y compartila en HD</span>
      </div>
      <span class="home-card-cta-go">Crear →</span>
    </button>

    ${l}

    <div class="sec-t">Partidos recientes</div>
    ${c.length?c.map($n).join(""):`<div class="empty">${I.ball}<br>Todavía no hay partidos guardados.<br>Iniciá un partido nuevo para registrar cada punto.</div>`}
    ${t.length>4?`<button class="btn block" data-nav="history">Ver todo el historial (${t.length})</button>`:""}

    <div class="sec-t">Experiencia Pádel Control SÉ</div>
    <div class="feat">
      <div>${I.live}<b>Transmisión de Cancha En Vivo</b><p>Compartí un link al empezar el partido para que tus amigos sigan cada punto y estadística en tiempo real desde cualquier lugar.</p></div>
      <div>${I.chart}<b>Análisis y PDF Profesional</b><p>Puntos de oro, Star Point FIP, breaks, bajo presión, tabla por jugador, evolución y punto a punto imprimible.</p></div>
      <div>${I.vol}<b>Voz de árbitro y manos libres</b><p>Cantado automático del marcador en español y control por micrófono o pulsador Bluetooth.</p></div>
      <div>${I.share}<b>Compartir link o imagen</b><p>Generá una tarjeta resumen Black & Gold lista para redes o compartí el partido completo por enlace.</p></div>
    </div>

    ${vt()}
  </div>
  ${it("home")}`}function Cl(){var m,x,E;const{preset:e,prefs:t,competitionsList:a}=b,n=e,r=n.matchContext||"daily";if(r==="league"||r==="tournament"){const T=a.filter(A=>A.kind===r);(!n.compId||!T.some(A=>A.id===n.compId))&&(n.compId=((m=T[0])==null?void 0:m.id)||"",n.fixtureId="")}else n.compId="",n.fixtureId="";const s=Math.max(1,Number(n.totalSets)||(n.setsToWin?n.setsToWin*2-1:3)),o=Math.max(1,Number(n.gamesPerSet)||6),i=Math.max(1,Number(n.tiebreakPoints)||7),l=n.tiebreakAt!==0,d=`<datalist id="known-players">${La().map(T=>`<option value="${g(T)}">`).join("")}</datalist>`,y=[];for(let T=0;T<2;T++)for(let A=0;A<2;A++){const R=n.teams[T].players[A]||(A===0?`DRIVE ${T+1}`:`REVÉS ${T+1}`),q=n.firstServer[0]===T&&n.firstServer[1]===A,_=n.teams[T].color;y.push(`
        <button type="button" class="chip ${q?"on":""}" style="--c:${g(_)};--f:${Ot(_)}" data-set-srv="${T},${A}">
          <span class="dot"></span>${g(R)}
        </button>`)}const S=r==="league"||r==="tournament"?a.filter(T=>T.kind===r):[],h=S.find(T=>T.id===n.compId)||null,w=h?(h.fixtures||[]).filter(T=>!T.isBye&&T.team0&&T.team1&&!T.matchId&&(T.winnerSide===null||T.winnerSide===void 0)):[],C=h&&n.fixtureId?(h.fixtures||[]).find(T=>T.id===n.fixtureId):null,M=((h==null?void 0:h.participants)||[]).filter(T=>T.type==="pair");let k="";if(r==="daily"){const T=Number(t.dailyWinPts??3),A=Number(t.dailyLossPts??1);k=`
      <div style="margin-top:12px;padding:10px 12px;border-radius:12px;background:rgba(245,158,11,0.08);border:1px solid rgba(245,158,11,0.28);display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap">
        <div style="font-size:12.5px;color:var(--tx2)">
          <b style="color:#fbbf24">☀️ Ranking Partido del Día</b> · Suma <b style="color:var(--tx)">+${T} pts victoria / +${A} pts derrota</b> y actualiza el ELO exclusivo del día (separado de Ligas y Torneos).
        </div>
        <button type="button" class="btn sm" data-act="open-daily-pts">${I.edit} Puntos</button>
      </div>`}else k=`
      <div style="margin-top:12px">
        ${S.length?`
          <div class="row wrap" style="align-items:flex-end">
            <div class="field" style="flex:1 1 210px">
              <label>Seleccionar ${r==="league"?"Liga":"Torneo"}</label>
              <select class="inp" data-act="sel-comp-for-new">
                ${S.map(T=>`<option value="${g(T.id)}" ${T.id===(h==null?void 0:h.id)?"selected":""}>${g(T.name)}</option>`).join("")}
              </select>
            </div>
            <button type="button" class="btn sm" data-act="new-comp" data-kind="${r}" style="margin-bottom:2px">${I.plus} Nueva</button>
            ${h?`<button type="button" class="btn sm" data-open-comp="${g(h.id)}" style="margin-bottom:2px">Ver Tabla</button>`:""}
          </div>
          ${h?`
            <div class="field" style="margin-top:10px">
              <label>Etapa / Fecha (opcional)</label>
              <input class="inp" data-preset-txt="stageLabel" value="${g(n.stageLabel||"")}" placeholder="${r==="league"?"Ej: Fecha 3":"Ej: Cuartos de Final"}">
            </div>
            ${C?`
              <div style="margin-top:10px;padding:9px 12px;border-radius:12px;background:rgba(16,185,129,0.12);border:1px solid rgba(16,185,129,0.35);display:flex;align-items:center;justify-content:space-between;gap:8px;flex-wrap:wrap">
                <span style="font-size:12.5px;color:#34d399;font-weight:700">✓ Vinculado a cruce: ${g(C.roundLabel)} (${g((x=C.team0)==null?void 0:x.label)} vs ${g((E=C.team1)==null?void 0:E.label)})</span>
                <button type="button" class="btn sm" data-act="clear-picked-fixture">Desvincular</button>
              </div>
            `:w.length?`
              <div style="margin-top:10px">
                <label style="font-size:11.5px;font-weight:700;color:var(--tx2);text-transform:uppercase;display:block;margin-bottom:6px">Cargar cruce pendiente (${w.length})</label>
                <div style="display:flex;gap:6px;flex-wrap:wrap;max-height:120px;overflow-y:auto">
                  ${w.slice(0,8).map(T=>{var A,R;return`
                    <button type="button" class="pill" data-pick-fixture="${g(h.id)}:${g(T.id)}">
                      ${g(T.roundLabel)}: ${g(((A=T.team0)==null?void 0:A.label)||"")} vs ${g(((R=T.team1)==null?void 0:R.label)||"")}
                    </button>
                  `}).join("")}
                </div>
              </div>
            `:""}
            ${M.length?`
              <div class="row wrap" style="margin-top:10px">
                <div class="field">
                  <label>Cargar pareja inscripta → Pareja 1</label>
                  <select class="inp" data-fill-pair-team="0">
                    <option value="">-- Elegir pareja --</option>
                    ${M.map(T=>{var A,R;return`<option value="${g(h.id)}:${g(T.id)}">${g(ye((A=T.players)==null?void 0:A[0],(R=T.players)==null?void 0:R[1]))}</option>`}).join("")}
                  </select>
                </div>
                <div class="field">
                  <label>Cargar pareja inscripta → Pareja 2</label>
                  <select class="inp" data-fill-pair-team="1">
                    <option value="">-- Elegir pareja --</option>
                    ${M.map(T=>{var A,R;return`<option value="${g(h.id)}:${g(T.id)}">${g(ye((A=T.players)==null?void 0:A[0],(R=T.players)==null?void 0:R[1]))}</option>`}).join("")}
                  </select>
                </div>
              </div>
            `:""}
          `:""}
        `:`
          <div style="padding:12px;border-radius:12px;background:rgba(255,255,255,0.03);border:1px dashed var(--line);display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap">
            <span style="font-size:13px;color:var(--tx2)">Todavía no tenés ${r==="league"?"ninguna Liga creada":"ningún Torneo creado"}.</span>
            <button type="button" class="btn primary sm" data-act="new-comp" data-kind="${r}">${I.plus} Crear ${r==="league"?"Liga":"Torneo"}</button>
          </div>
        `}
      </div>`;return`
  <div class="page">
    ${d}
    <div class="page-h">
      <div class="page-h-top">
        <button class="icon-btn" data-nav="home" title="Volver">${I.back}</button>
        <h1>Nuevo Partido</h1>
      </div>
      <div class="page-h-acts">
        <button class="btn sm" data-act="swap-preset-teams" title="Intercambiar parejas">${I.swap} Invertir Parejas</button>
      </div>
    </div>

    <div class="sec-t">Tipo de partido y ranking</div>
    <div class="card">
      <div class="ctx-grid">
        <button type="button" class="ctx-opt ${r==="daily"?"on":""}" data-match-ctx="daily">
          <b>☀️ Partido del Día</b>
          <small>Ranking propio diario y acumulado + ELO aparte</small>
        </button>
        <button type="button" class="ctx-opt ${r==="league"?"on":""}" data-match-ctx="league">
          <b>🏅 Liga</b>
          <small>Fecha y tabla de posiciones independiente</small>
        </button>
        <button type="button" class="ctx-opt ${r==="tournament"?"on":""}" data-match-ctx="tournament">
          <b>🏆 Torneo</b>
          <small>Cruces, grupos o cuadro eliminatorio</small>
        </button>
      </div>
      ${k}
    </div>

    ${[0,1].map(T=>`
    <div class="card team-card" style="--c:${g(n.teams[T].color)}">
      <h3>Pareja ${T+1}</h3>
      <div class="row wrap">
        <div class="field">
          <label>Drive ${T+1} (Derecha)</label>
          <input class="inp" list="known-players" value="${g(n.teams[T].players[0]||"")}" placeholder="DRIVE ${T+1}" data-pname="${T},0">
        </div>
        <div class="field">
          <label>Revés ${T+1} (Izquierda)</label>
          <input class="inp" list="known-players" value="${g(n.teams[T].players[1]||"")}" placeholder="REVÉS ${T+1}" data-pname="${T},1">
        </div>
      </div>
      <div class="field">
        <label>Color de camiseta / lado</label>
        <div class="colors">
          ${ra.map(A=>`<button type="button" style="--c:${A.c}" class="${n.teams[T].color===A.c?"on":""}" data-tcolor="${T},${A.c}" title="${A.n}"></button>`).join("")}
        </div>
      </div>
    </div>`).join("")}

    <div class="sec-t">Reglas del partido</div>
    <div class="card">
      <div class="rule-row">
        <div class="r-info">
          <b>Número de sets</b>
          <small>${s===1?"Partido a 1 set único":`Al mejor de ${s} sets (gana con ${Math.floor(s/2)+1})`}</small>
        </div>
        <div class="stepper">
          <button type="button" class="step-btn" data-step="totalSets:-1" ${s<=1?"disabled":""} aria-label="Menos sets">−</button>
          <span class="step-val">${s}</span>
          <button type="button" class="step-btn" data-step="totalSets:1" ${s>=15?"disabled":""} aria-label="Más sets">+</button>
        </div>
      </div>

      <div class="rule-row">
        <div class="r-info">
          <b>Número de juegos</b>
          <small>Juegos necesarios para ganar cada set</small>
        </div>
        <div class="stepper">
          <button type="button" class="step-btn" data-step="gamesPerSet:-1" ${o<=1?"disabled":""} aria-label="Menos juegos">−</button>
          <span class="step-val">${o}</span>
          <button type="button" class="step-btn" data-step="gamesPerSet:1" ${o>=21?"disabled":""} aria-label="Más juegos">+</button>
        </div>
      </div>

      <div class="rule-block">
        <div class="rb-head">
          <b>En el 40-40</b>
          <small>${n.deuceRule==="golden"?"Un único punto decide el juego":n.deuceRule==="star"?"Hasta 2 ventajas; en el 3º iguales se juega un Star Point definitivo (FIP)":"Sin límite de ventajas hasta ganar por diferencia de 2 puntos"}</small>
        </div>
        <div class="pills">
          <button type="button" class="pill ${n.deuceRule==="adv"?"on":""}" data-preset="deuceRule:adv">Ventajas</button>
          <button type="button" class="pill ${n.deuceRule==="golden"?"on":""}" data-preset="deuceRule:golden">Punto de oro</button>
          <button type="button" class="pill ${n.deuceRule==="star"?"on":""}" data-preset="deuceRule:star">Star point</button>
        </div>
      </div>

      <div class="rule-row">
        <div class="r-info">
          <b>Tie-break</b>
          <small>${l?`En el ${o}-${o}, a ${i} puntos`:"Sin tie-break (diferencia de 2 juegos)"}</small>
        </div>
        ${l?`
        <div class="stepper">
          <button type="button" class="step-btn" data-step="tiebreakPoints:-1" ${i<=1?"disabled":""} aria-label="Menos puntos de tie-break">−</button>
          <span class="step-val">${i}</span>
          <button type="button" class="step-btn" data-step="tiebreakPoints:1" ${i>=30?"disabled":""} aria-label="Más puntos de tie-break">+</button>
        </div>`:""}
      </div>
      <div class="rule-block" style="padding-top:0">
        <div class="pills">
          <button type="button" class="pill ${l?"on":""}" data-preset="tb:${i}">Con Tie-break (${i} ptos)</button>
          <button type="button" class="pill ${l?"":"on"}" data-preset="tb:0">Sin Tie-break</button>
        </div>
      </div>

      ${s>1?`
      <div class="rule-block">
        <div class="rb-head">
          <b>Set decisivo (${s}º set)</b>
          <small>${n.finalSet==="supertb"?"Súper Tie-Break a 10 puntos en caso de empate a sets":"Se juega como un set normal"}</small>
        </div>
        <div class="pills">
          <button type="button" class="pill ${n.finalSet==="normal"?"on":""}" data-preset="finalSet:normal">Set normal</button>
          <button type="button" class="pill ${n.finalSet==="supertb"?"on":""}" data-preset="finalSet:supertb">Súper TB (10)</button>
        </div>
      </div>`:""}

      <div class="rule-block">
        <div class="rb-head">
          <b>Cambio de lado automático</b>
          <small>${n.changeoverRule==="set"?"No se cambia de lado durante el set, solo al finalizar cada set":n.changeoverRule==="none"?"No se cambia de lado automáticamente":"Cambio de lado en juegos impares (1, 3, 5...) y cada 6 tantos de Tie-Break"}</small>
        </div>
        <div class="pills">
          <button type="button" class="pill ${(n.changeoverRule||"odd")==="odd"?"on":""}" data-preset="changeoverRule:odd">Juegos impares</button>
          <button type="button" class="pill ${n.changeoverRule==="set"?"on":""}" data-preset="changeoverRule:set">Al terminar el set</button>
          <button type="button" class="pill ${n.changeoverRule==="none"?"on":""}" data-preset="changeoverRule:none">Sin cambio</button>
        </div>
      </div>
    </div>

    <div class="sec-t">Durante el partido</div>
    <div class="card">
      <div class="field">
        <label>¿Quién empieza sacando?</label>
        <div class="chips" id="srv-chips-box">${y.join("")}</div>
      </div>
      <div class="tog">
        <div>
          <b>Estadísticas avanzadas por golpe</b>
          <small>Pregunta Winner, Error no forzado o Error forzado por jugador al anotar.</small>
        </div>
        <label class="sw"><input type="checkbox" ${n.shotPrompt?"checked":""} data-preset-bool="shotPrompt"><span></span></label>
      </div>
    </div>

    <button class="btn primary big block" data-act="start-match">${I.play} Empezar Partido (punto a punto)</button>
    <button class="btn big block" style="margin-top:10px" data-act="open-preset-quick-score">${I.check} Ya terminó · Cargar Sets y Games</button>
    ${vt()}
  </div>
  ${it("new")}`}function Tl(){const e=(typeof location<"u"&&location.hash||"").slice(1),t=e.indexOf("?"),a=e.indexOf("&"),n=t>=0?e.slice(t+1):a>=0?e.slice(a+1):"",s=new URLSearchParams(n).get("pos")||"";return["tl","tr","bl","br","bar"].includes(s)?s:"tl"}function Cr(){const{ui:e,activeMatch:t}=b,n=(e.route==="live"||!!e.liveId)&&e.liveMatch?e.liveMatch:t||e.liveMatch,r=Tl();if(!n)return`
    <div class="obs-overlay obs-pos-${r}">
      <div class="obs-scorebug obs-waiting">
        <div class="obs-waiting-logo">${Ya}</div>
        <div class="obs-waiting-info">
          <div class="obs-waiting-title">PÁDEL CONTROL SÉ</div>
          <div class="obs-waiting-sub">ESPERANDO INICIO DEL PARTIDO...</div>
        </div>
      </div>
    </div>`;const s=Ee(n),o=s.sets.filter((d,y)=>!(y===s.curSetIdx&&s.matchWinner===null||d.games[0]===0&&d.games[1]===0&&d.winner===null)),i=d=>{const y=n.teams[d].color,S=s.matchWinner===null&&s.srvTeam===d,h=o.map(m=>{const x=m.winner===d,E=m.tbScore?`<sup>${m.tbScore[d]}</sup>`:"";return`<div class="obs-set-box ${x?"won":""}">${m.games[d]}${E}</div>`}).join(""),w=s.matchWinner!==null?s.matchWinner===d?"🏆":"—":g(s.pointDisplay[d]),C=s.pointDisplay[d]==="ADV"||s.pointDisplay[d]==="GP"||s.isGP||s.isStar,M=s.srvSide||"D",k=[0,1].map(m=>{const x=g(ae(n,d,m));return S&&s.srvPlayer===m?`<span class="obs-p srv">${x} <span class="obs-ball" title="Al saque">🎾</span><span class="obs-srv-side srv-${M.toLowerCase()}" title="Saque desde la ${M==="D"?"Derecha":"Revés"}">${M}</span></span>`:`<span class="obs-p">${x}</span>`}).join(' <span style="opacity:0.4;margin:0 2px">·</span> ');return`
    <div class="obs-team-row ${S?"serving":""}">
      <div class="obs-team-bar" style="--tc:${g(y)}"></div>
      <div class="obs-team-names">
        ${k}
        ${S&&n.pendingFault?'<span class="obs-fault">2º</span>':""}
      </div>
      <div class="obs-sets-wrap">${h}</div>
      <div class="obs-games-box">${s.curSet.games[d]}</div>
      <div class="obs-pts-box ${s.matchWinner!==null?"dim":C?"gold":""}">${w}</div>
    </div>`};let l="";if(s.matchWinner!==null)l=`<div class="obs-ticker obs-ticker-gold">🏆 PARTIDO FINALIZADO · GANADORES: ${g(X(n,s.matchWinner))}</div>`;else if(s.isStar)l='<div class="obs-ticker obs-ticker-gold">★ STAR POINT (PUNTO DECISIVO)</div>';else if(s.isGP)l='<div class="obs-ticker obs-ticker-gold">★ PUNTO DE ORO</div>';else if(s.mp[0]||s.mp[1]){const d=s.mp[0]?0:1;l=`<div class="obs-ticker obs-ticker-hot">MATCH POINT · ${g(X(n,d))}</div>`}else if(s.sp[0]||s.sp[1]){const d=s.sp[0]?0:1;l=`<div class="obs-ticker obs-ticker-hot">SET POINT · ${g(X(n,d))}</div>`}else if(s.isBP){const d=1-s.srvTeam;l=`<div class="obs-ticker obs-ticker-warn">BOLA DE BREAK · ${g(X(n,d))}</div>`}else s.isSuperTB?l='<div class="obs-ticker">SÚPER TIE-BREAK A 10</div>':s.isTB&&(l='<div class="obs-ticker">TIE-BREAK A 7</div>');const c=s.matchWinner!==null?"FINALIZADO":s.isSuperTB?"SÚPER TB":s.isTB?"TIE-BREAK":`SET ${s.curSetIdx+1}`;return`
  <div class="obs-overlay obs-pos-${r}">
    <div class="obs-scorebug">
      <div class="obs-header">
        <div class="obs-brand">${Ya} <span>PÁDEL CONTROL SÉ</span></div>
        <div class="obs-status-pill">${c}</div>
        <div class="obs-clock">
          <span class="obs-clock-dot"></span>
          <span id="sb-clock-val">${g(Wt(n.durationMs))}</span>
        </div>
      </div>
      ${i(0)}
      ${i(1)}
      ${l}
    </div>
  </div>`}function Ml(e="tl"){const{activeMatch:t,ui:a}=b,n=typeof location<"u"?location.href.split("#")[0]:"",r=e!=="tl"?`&pos=${e}`:"",s=`${n}#obs${r}`,o=t||a.liveMatch;let i="";o&&(ma(o,!0,!0),i=zt(o.id));const l=i?`${n}#obs&v=${i}${r}`:`${n}#obs${r}`;return{localUrl:s,remoteUrl:l,remoteCode:i}}function Il(){const{ui:e}=b,t=e.obsSelectedPos||"tl",{localUrl:a,remoteUrl:n}=Ml(t);return`
  <div class="scrim" data-close-obs-modal="1" style="z-index:126">
    <div class="sheet" style="max-width:560px">
      <div class="sheet-hdr">
        <div style="width:36px;height:36px;border-radius:12px;background:linear-gradient(135deg,#ffe58f,#d4af37);color:#080600;display:grid;place-items:center;flex:none;box-shadow:0 6px 16px rgba(212,175,55,.45)">
          ${I.tv}
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
          ${Cr()}
        </div>
      </div>

      <div class="opt-sec" style="margin-top:4px">Posición en Pantalla (Streaming)</div>
      <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:12px">
        <button class="pill ${t==="tl"?"active":""}" data-set-obs-pos="tl">Arriba Izquierda</button>
        <button class="pill ${t==="tr"?"active":""}" data-set-obs-pos="tr">Arriba Derecha</button>
        <button class="pill ${t==="bl"?"active":""}" data-set-obs-pos="bl">Abajo Izquierda</button>
        <button class="pill ${t==="br"?"active":""}" data-set-obs-pos="br">Abajo Derecha</button>
        <button class="pill ${t==="bar"?"active":""}" data-set-obs-pos="bar">Barra Inferior (Chyron)</button>
      </div>

      <div class="opt-sec">1. Enlace Remoto (Celular en Cancha ➔ OBS en PC) <span class="tag gold" style="font-size:9.5px;margin-left:4px">Recomendado</span></div>
      <div style="background:rgba(255,255,255,0.03);border:1px solid var(--line);border-radius:12px;padding:10px 12px;margin-bottom:12px">
        <div style="font-size:12px;color:var(--tx2);margin-bottom:6px">Anotás los puntos con el celular en la pista y OBS en la PC se actualiza solo en tiempo real vía nube:</div>
        <div style="display:flex;gap:8px;align-items:center">
          <input class="inp" readonly value="${g(n)}" id="obs-remote-url-inp" style="font-family:monospace;font-size:11.5px;height:38px">
          <button class="btn primary sm" data-copy-input="obs-remote-url-inp" style="flex:none">${I.copy} Copiar</button>
        </div>
      </div>

      <div class="opt-sec">2. Enlace Local (Misma PC)</div>
      <div style="background:rgba(255,255,255,0.03);border:1px solid var(--line);border-radius:12px;padding:10px 12px;margin-bottom:14px">
        <div style="font-size:12px;color:var(--tx2);margin-bottom:6px">Sincronización instantánea de latencia cero si anotás en Chrome en la misma PC donde tenés el OBS:</div>
        <div style="display:flex;gap:8px;align-items:center">
          <input class="inp" readonly value="${g(a)}" id="obs-local-url-inp" style="font-family:monospace;font-size:11.5px;height:38px">
          <button class="btn sm" data-copy-input="obs-local-url-inp" style="flex:none">${I.copy} Copiar</button>
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
        <a href="${g(n)}" target="_blank" class="btn" style="text-decoration:none">${I.full} Abrir overlay en pestaña</a>
        <button class="btn primary" data-act="close-obs-modal">Listo</button>
      </div>
    </div>
  </div>`}function El(e,t){var r,s;const{ui:a}=b;let n="";if(a.shotSheet){const o=a.shotSheet.team,i=1-o,l=e.teams[o].color,c=e.teams[i].color,d=[[0,ae(e,o,0)],[1,ae(e,o,1)]],y=[[0,ae(e,i,0)],[1,ae(e,i,1)]];n+=`
    <div class="scrim" data-close-sheet="1">
      <div class="sheet">
        <h2>Punto para ${g(X(e,o))}</h2>
        <p class="muted">Seleccioná cómo terminó el punto (o tocá Punto rápido)</p>

        <div class="opt-sec">Golpe ganador (Winner) de ${g(X(e,o))}</div>
        <div class="opt-grid">
          ${d.map(([S,h],w)=>`
            <button class="opt" style="--c:${g(l)}" data-shot="winner,${o},${S},winner">
              <span class="k">${w+1}</span>
              ${g(h)}
              <small>Winner general</small>
            </button>`).join("")}
        </div>

        <div style="display:flex;gap:8px;flex-wrap:wrap;margin:8px 0 14px">
          ${d.map(([S,h])=>`
            <div style="flex:1;min-width:140px;background:rgba(212,175,55,0.06);border:1px solid rgba(212,175,55,0.22);border-radius:12px;padding:8px 10px">
              <div style="font-size:11px;font-weight:700;color:var(--gold);margin-bottom:6px">GOLPE DE ${g(h).toUpperCase()}:</div>
              <div style="display:flex;gap:5px;flex-wrap:wrap">
                <button type="button" class="pill sm" data-shot="winner,${o},${S},smash">💥 Smash</button>
                <button type="button" class="pill sm" data-shot="winner,${o},${S},volea">🎾 Volea</button>
                <button type="button" class="pill sm" data-shot="winner,${o},${S},bandeja">🌀 Bandeja</button>
                <button type="button" class="pill sm" data-shot="winner,${o},${S},bajada">⚡ Bajada</button>
                <button type="button" class="pill sm" data-shot="winner,${o},${S},dejada">🎯 Dejada</button>
              </div>
            </div>`).join("")}
        </div>

        <div class="opt-sec">Error no forzado de ${g(X(e,i))}</div>
        <div class="opt-grid">
          ${y.map(([S,h],w)=>`
            <button class="opt" style="--c:${g(c)}" data-shot="ue,${i},${S}">
              <span class="k">${w+3}</span>
              ${g(h)}
              <small>Error no forzado</small>
            </button>`).join("")}
        </div>

        <div class="opt-sec">Error forzado de ${g(X(e,i))}</div>
        <div class="opt-grid">
          ${y.map(([S,h],w)=>`
            <button class="opt" style="--c:${g(c)}" data-shot="fe,${i},${S}">
              <span class="k">${w+5}</span>
              ${g(h)}
              <small>Error forzado</small>
            </button>`).join("")}
        </div>

        ${t.srvTeam===i?`
        <button class="opt wide" style="--c:#f59e0b" data-shot="df,${i},${t.srvPlayer}">
          <span class="k">F</span>
          Doble falta de ${g(ae(e,i,t.srvPlayer))}
        </button>`:""}

        <div class="btn-row">
          <button class="btn primary" data-shot="pt,${o},-1"><span class="k">Espacio</span>Punto rápido (sin detalle)</button>
          <button class="btn" data-close-sheet="1"><span class="k">Esc</span>Cancelar</button>
        </div>
      </div>
    </div>`}if(a.secondSrvPrompt){const o=1-e.firstServer[0],i=e.teams[o].color;n+=`
    <div class="scrim">
      <div class="sheet">
        <h2>¿Quién saca en ${g(X(e,o))}?</h2>
        <p class="muted">Elegí el orden de saque de la pareja para el resto del set.</p>
        <div class="opt-grid" style="margin-top:14px">
          ${[0,1].map(l=>`
            <button class="opt" style="--c:${g(i)}" data-pick-2ndsrv="${l}">
              ${g(ae(e,o,l))}
              <small>Saca ahora</small>
            </button>`).join("")}
        </div>
      </div>
    </div>`}if(a.changeoverOverlay){const o=a.changeoverOverlay;n+=`
    <div class="overlay">
      <div class="big-ic">${I.swap}</div>
      <h2>${g(o.title)}</h2>
      <p>${g(o.sub)}</p>
      <div class="count" id="co-countdown">${o.secondsLeft}s</div>
      <div class="btn-row">
        <button class="btn primary big" data-act="dismiss-co">Continuar partido</button>
      </div>
    </div>`}if(t.matchWinner!==null&&!a.matchEndDismissed){const o=t.matchWinner,i=He(e),l=i?K(i):null,c=rt(l),d=t.sets.reduce((M,k)=>(k.winner===0?M[0]++:k.winner===1&&M[1]++,M),[0,0]),y=c.winPts+(c.setBonusPts?d[o]*c.setBonusPts:0),S=c.lossPts+(c.setBonusPts?d[1-o]*c.setBonusPts:0),h=l?`${l.kind==="league"?"🏅 Liga":"🏆 Torneo"}: ${l.name}`:"☀️ Partido del Día",w=pn(e);let C="";if(w){const M=o===0?w.pair0:w.pair1,k=o===0?w.pair1:w.pair0,m=Math.abs(((r=M.players[0])==null?void 0:r.delta)||0),x=Math.abs(((s=k.players[0])==null?void 0:s.delta)||0);C=`
      <div class="ov-elo-box">
        <div class="ov-elo-title">⚡ RANKING ACTUALIZADO · ${g(h.toUpperCase())}</div>
        <div class="ov-elo-pairs">
          <div class="ov-elo-card win">
            <span class="ov-elo-tag">GANADORES</span>
            <b>${g(X(e,o))}</b>
            <div class="ov-elo-delta">+${y} pts tabla · ▲ +${m} ELO</div>
            ${w.isBlowout?"<small>💥 Bonus ELO x1.2 (+6 juegos)</small>":"<small>Tabla y ELO actualizados</small>"}
          </div>
          <div class="ov-elo-card lose">
            <span class="ov-elo-tag">SUBCAMPEONES</span>
            <b>${g(X(e,1-o))}</b>
            <div class="ov-elo-delta">+${S} pts tabla · ▼ -${x} ELO</div>
            <small>Ranking por separado</small>
          </div>
        </div>
      </div>`}n+=`
    <div class="overlay">
      <div class="big-ic">${I.trophy}</div>
      <p>¡PARTIDO FINALIZADO!</p>
      <div style="margin-bottom:8px">${ms(e)}</div>
      <h2>${g(X(e,o))}</h2>
      <div class="ov-score">
        ${[0,1].map(M=>`
          <div class="mrow">
            <span class="bar" style="--c:${g(e.teams[M].color)}"></span>
            <span class="nm">${g(X(e,M))}</span>
            ${t.sets.map(k=>`<span class="s ${k.winner===M?"w":""}">${k.games[M]}</span>`).join("")}
          </div>`).join("")}
      </div>
      ${C}
      <div class="btn-row">
        <button class="btn primary big" data-open-stats="${g(e.id)}">${I.chart} Ver Análisis y PDF</button>
        <button class="btn big" data-act="share-img-active">${I.img} Imagen resumen</button>
      </div>
      <div class="btn-row">
        ${l?`<button class="btn" data-open-comp="${g(l.id)}">${I.award} Ver ${l.kind==="league"?"Liga":"Torneo"}</button>`:`<button class="btn" data-act="open-daily-ranking">${I.trophy} Ranking del Día</button>`}
        <button class="btn" data-act="undo-from-end">${I.undo} Corregir último punto</button>
        <button class="btn" data-nav="new">${I.plus} Nuevo partido</button>
      </div>
    </div>`}return a.menuOpen&&(n+=`
    <div class="scrim" data-close-menu="1">
      <div class="sheet">
        <h2>Opciones del marcador</h2>
        <div class="menu-list">
          <button data-act="open-qr-modal">${I.qr}<div><b>Compartir App (Código QR)</b><small>Mostrá el código para que otra persona escanee y abra la app en su teléfono</small></div></button>
          <button data-act="share-live">${I.live}<div><b>Compartir partido EN VIVO (Link)</b><small>Enviá un enlace por WhatsApp para que sigan el marcador en tiempo real desde cualquier lugar</small></div></button>
          <button data-act="toggle-shot-prompt">${I.edit}<div><b>${e.shotPrompt?"Desactivar":"Activar"} pregunta de golpe</b><small>${e.shotPrompt?"Actualmente pregunta Winner / Error al anotar":"Actualmente anota punto directo con un toque"}</small></div></button>
          <button data-act="open-obs-modal">${I.tv}<div><b>Superposición para OBS (Overlay)</b><small>Marcador broadcast transparente para streamings en vivo (YouTube, Twitch, OBS)</small></div></button>
          <button data-act="open-tv">${I.tv}<div><b>Abrir Modo TV / Espectador</b><small>Segunda ventana sincronizada en vivo para proyector o monitor</small></div></button>
          <button data-act="fullscreen">${I.full}<div><b>Pantalla completa</b><small>Ocultar barras del navegador</small></div></button>
          <button data-act="rotate-server">${I.ball}<div><b>Cambiar sacador actual</b><small>Alternar quién saca si hubo un ajuste manual</small></div></button>
          <button data-act="open-edit-names">${I.edit}<div><b>Editar nombres y colores</b><small>Modificar jugadores sin perder el marcador</small></div></button>
          <button data-open-stats="active">${I.chart}<div><b>Ver estadísticas hasta ahora</b><small>Análisis completo en tiempo real</small></div></button>
          <button class="danger" data-act="finish-early">${I.flag}<div><b>Terminar y guardar partido</b><small>Cerrar partido actual y archivar en el historial</small></div></button>
        </div>
        <div class="btn-row">
          <button class="btn block" data-close-menu="1">Cerrar</button>
        </div>
      </div>
    </div>`),a.editNamesOpen&&(n+=`
    <div class="scrim" data-close-edit="1">
      <div class="sheet">
        <h2>Editar Jugadores y Colores</h2>
        ${[0,1].map(o=>`
          <div class="opt-sec">Pareja ${o+1}</div>
          <div class="row wrap">
            <div class="field"><label style="font-size:11px;color:var(--tx2);display:block;margin-bottom:3px">Drive (Derecha)</label><input class="inp" id="ed-p-${o}-0" placeholder="DRIVE ${o+1}" value="${g(e.teams[o].players[0]||"")}"></div>
            <div class="field"><label style="font-size:11px;color:var(--tx2);display:block;margin-bottom:3px">Revés (Izquierda)</label><input class="inp" id="ed-p-${o}-1" placeholder="REVÉS ${o+1}" value="${g(e.teams[o].players[1]||"")}"></div>
          </div>
          <div class="colors" style="margin:6px 0 10px">
            ${ra.map(i=>`<button type="button" style="--c:${i.c}" class="${e.teams[o].color===i.c?"on":""}" data-edit-tcolor="${o},${i.c}" title="${i.n}"></button>`).join("")}
          </div>`).join("")}
        <div class="btn-row">
          <button class="btn primary" data-act="save-edit-names">Guardar</button>
          <button class="btn" data-close-edit="1">Cancelar</button>
        </div>
      </div>
    </div>`),n}function Ns(e=!1){const{ui:t,activeMatch:a,prefs:n}=b,r=t.route==="live",s=r?t.liveMatch:a;if(!s)return r?`
      <div class="page">
        <div class="empty">
          ${I.live}<br>
          <b>Conectando con la cancha en vivo...</b><br>
          <span class="muted">Esperando señal en tiempo real del partido.</span><br><br>
          <button class="btn" data-act="exit-live">Salir al inicio</button>
        </div>
      </div>`:'<div class="page"><div class="empty">No hay ningún partido activo.<br><br><button class="btn primary" data-nav="new">Crear Partido</button></div></div>';const o=Ee(s),i=s.flipped?[1,0]:[0,1],l=d=>{const y=s.teams[d].color,S=Ot(y),h=[];for(let M=0;M<2;M++){const k=o.matchWinner===null&&o.srvTeam===d&&o.srvPlayer===M;h.push(`
        <div class="pn ${k?"srv":""}">
          <span class="ball"></span>
          <span class="nm">${g(ae(s,d,M))}</span>
          ${k&&o.srvSide?`<span class="srv-side-badge srv-side-${o.srvSide.toLowerCase()}" title="Saque desde la ${o.srvSide==="D"?"Derecha":"Revés"}">${o.srvSide}</span>`:""}
          ${k&&s.pendingFault?'<em class="fault">2º SAQUE</em>':""}
        </div>`)}const w=o.sets.map((M,k)=>{if(k===o.curSetIdx&&o.matchWinner===null||M.games[0]===0&&M.games[1]===0&&M.winner===null)return"";const m=M.winner===d,x=M.tbScore?`<sup>${M.tbScore[d]}</sup>`:"";return`<span class="${m?"won":""}">${M.games[d]}${x}</span>`}).join(""),C=o.matchWinner!==null?o.matchWinner===d?I.trophy:"—":g(o.pointDisplay[d]);return`
    <div class="half" data-team="${d}" ${e?'data-ro="1"':'tabindex="0" role="button"'} style="--tc:${g(y)};--tf:${S}">
      <div class="players">${h.join("")}</div>
      <div class="h-sets">${w}</div>
      <div class="h-games">
        <small>${o.isSuperTB?"SÚPER TB":"JUEGOS"}</small>
        <b>${o.curSet.games[d]}</b>
      </div>
      <div class="h-pts">${C}</div>
    </div>`},c=[];if(o.matchWinner!==null)c.push('<span class="tag gold">FINALIZADO</span>');else{c.push(`<span class="tag">${o.isSuperTB?"SÚPER TIE-BREAK":o.isTB?"TIE-BREAK":`SET ${o.curSetIdx+1}`}</span>`),o.isStar?c.push('<span class="tag gold">★ STAR POINT (PUNTO DECISIVO)</span>'):o.isGP?c.push('<span class="tag gold">PUNTO DE ORO</span>'):s.rules.deuceRule==="star"&&!o.isTB&&o.p[0]>=3&&o.p[1]>=3&&(o.p[0]!==o.p[1]?c.push(`<span class="tag">${o.curAdvNumber}ª VENTAJA (DE 2)</span>`):o.curDeuceCount===2?c.push('<span class="tag">IGUALES (QUEDA 1 VENTAJA ANTES DEL ★ STAR POINT)</span>'):o.curDeuceCount===1&&c.push('<span class="tag">IGUALES (HASTA 2 VENTAJAS)</span>'));for(let d=0;d<2;d++)o.mp[d]?c.push(`<span class="tag hot" style="--c:${g(s.teams[d].color)};--f:${Ot(s.teams[d].color)}">MATCH POINT · ${g(X(s,d))}</span>`):o.sp[d]&&c.push(`<span class="tag hot" style="--c:${g(s.teams[d].color)};--f:${Ot(s.teams[d].color)}">SET POINT · ${g(X(s,d))}</span>`);if(o.isBP&&!o.isGP){const d=1-o.srvTeam;c.push(`<span class="tag warn">BOLA DE BREAK · ${g(X(s,d))}</span>`)}t.voiceListening&&c.push('<span class="tag mic">● MIC ACTIVO</span>'),c.length===1&&!e&&c.push('<span class="tag dim">Tocá el lado ganador del punto</span>')}return`
  <div class="board ${e?"display":""}">
    <header class="sb-top">
      ${r?`
        <button class="icon-btn" data-act="exit-live" title="Salir de la transmisión">${I.back}</button>
        <div class="sb-clock">
          <span id="sb-clock-val">${g(Wt(s.durationMs))}</span>
          <small><b class="red">● EN VIVO</b> · ${o.matchWinner!==null?"FINALIZADO":`SET ${o.curSetIdx+1} · SACA ${g(ae(s,o.srvTeam,o.srvPlayer))} (${o.srvSide==="D"?"DERECHA":"REVÉS"})`}</small>
        </div>
        <button class="icon-btn ${n.voice?"on":""}" data-act="toggle-voice-tts" title="Activar voz de árbitro en vivo">${n.voice?I.vol:I.mute}</button>
        <button class="icon-btn" data-open-stats="live" title="Estadísticas en tiempo real">${I.chart}</button>
        <button class="icon-btn" data-act="fullscreen" title="Pantalla completa">${I.full}</button>
      `:e?`
        <button class="icon-btn" data-nav="board" title="Salir de modo TV">${I.back}</button>
        <div class="sb-clock">
          <span id="sb-clock-val">${g(Wt(s.durationMs))}</span>
          <small><b class="red">● EN VIVO</b> · ${g(X(s,0))} vs ${g(X(s,1))}</small>
        </div>
        <button class="icon-btn" data-act="fullscreen" title="Pantalla completa">${I.full}</button>
      `:`
        <button class="icon-btn" data-nav="home" title="Inicio">${I.back}</button>
        <button class="icon-btn" data-act="share-live" title="Compartir partido en vivo por link">${I.live}</button>
        <div class="sb-clock" data-act="toggle-pause" style="cursor:pointer" title="Tocar para pausar/reanudar reloj">
          <span id="sb-clock-val">${g(Wt(s.durationMs))}</span>
          <small>${s.status==="paused"?'<b class="red">PAUSADO</b>':`SET ${o.curSetIdx+1} · SACA ${g(ae(s,o.srvTeam,o.srvPlayer))} (${o.srvSide==="D"?"DERECHA":"REVÉS"})`}</small>
        </div>
        <button class="icon-btn ${n.voice?"on":""}" data-act="toggle-voice-tts" title="Voz de árbitro">${n.voice?I.vol:I.mute}</button>
        <button class="icon-btn ${t.voiceListening?"on":""}" data-act="toggle-voice-rec" title="Control por voz manos libres">${I.mic}</button>
        <button class="icon-btn" data-act="open-menu" title="Opciones">${I.dots}</button>
      `}
    </header>

    <main class="court">
      ${l(i[0])}
      <div class="mid">${c.join("")}</div>
      ${l(i[1])}
    </main>

    ${e?"":`
    <footer class="sb-foot">
      <button data-act="undo" ${!s.events.length&&!s.pendingFault?"disabled":""} title="Deshacer (Z / Backspace)">${I.undo}<span class="lbl">Deshacer</span></button>
      <button data-act="redo" ${!s.redoStack||!s.redoStack.length?"disabled":""} title="Rehacer (Y)">${I.redo}<span class="lbl">Rehacer</span></button>
      <button class="fault-btn ${s.pendingFault?"on":""}" data-act="fault" ${o.matchWinner!==null?"disabled":""} title="Falta de saque / Doble falta (F)">
        ${s.pendingFault?"DOBLE FALTA":"FALTA SAQUE"}
      </button>
      <button data-act="flip" title="Cambiar lados de cancha (S)">${I.swap}<span class="lbl">Lados</span></button>
      <button data-open-stats="active" title="Ver estadísticas en vivo">${I.chart}<span class="lbl">Stats</span></button>
    </footer>`}

    ${e?r&&o.matchWinner!==null&&!t.matchEndDismissed?`
    <div class="overlay">
      <div class="big-ic">${I.trophy}</div>
      <p>¡PARTIDO FINALIZADO EN VIVO!</p>
      <h2>${g(X(s,o.matchWinner))}</h2>
      <div class="ov-score">
        ${[0,1].map(d=>`
          <div class="mrow">
            <span class="bar" style="--c:${g(s.teams[d].color)}"></span>
            <span class="nm">${g(X(s,d))}</span>
            ${o.sets.map(y=>`<span class="s ${y.winner===d?"w":""}">${y.games[d]}</span>`).join("")}
          </div>`).join("")}
      </div>
      <div class="btn-row">
        <button class="btn primary big" data-open-stats="live">${I.chart} Ver Estadísticas del Partido</button>
        <button class="btn big" data-act="save-live">Guardar en mi historial</button>
      </div>
    </div>`:"":El(s,o)}
  </div>`}function Zs(){const{ui:e,activeMatch:t,historyList:a}=b;if(e.statsId==="live"&&e.liveMatch)return e.liveMatch;if(e.statsId==="shared"&&e.sharedMatch)return e.sharedMatch;if(e.statsId==="active"&&t)return t;const n=a.find(r=>r.id===e.statsId);return n||(t&&t.id===e.statsId?t:e.liveMatch&&e.liveMatch.id===e.statsId?e.liveMatch:a[0]||t||e.liveMatch||null)}function pe(e,t,a,n,r,s,o){const i=Number(n)||0,l=Number(r)||0,c=i+l,d=c>0?Math.round(i*100/c):i===l&&i>0?50:0,y=c>0?100-d:0;return`
  <div class="cmp">
    <div class="cmp-l">${g(e)}</div>
    <div class="cmp-r">
      <b>${g(t)}</b>
      <div class="cbar">
        ${c>0?`
          <i style="width:${d}%;background:${g(s)}"></i>
          <i style="width:${y}%;background:${g(o)}"></i>
        `:'<i style="width:100%;background:transparent"></i>'}
      </div>
      <b>${g(a)}</b>
    </div>
  </div>`}function Al(e,t,a,n){if(!e||e.length<2)return'<div class="muted" style="padding:18px 0;text-align:center">Se mostrará el gráfico cuando haya puntos jugados.</div>';const r=e.length-1,s=720,o=180,i=12,l=18,c=s-i*2,d=o-l*2,y=Math.max(4,...e.map(x=>Math.abs(x))),S=l+d/2,h=x=>i+(r>0?x/r*c:0),w=x=>S-x/y*(d/2);let C="";e.forEach((x,E)=>{const T=h(E).toFixed(1),A=w(x).toFixed(1);C+=E===0?`M${T},${A}`:` L${T},${A}`});const M=`${C} L${h(r).toFixed(1)},${S.toFixed(1)} L${h(0).toFixed(1)},${S.toFixed(1)} Z`,k="mom_"+Math.random().toString(36).slice(2,7),m=t.map(x=>{const E=h(x).toFixed(1);return`<line x1="${E}" y1="${l}" x2="${E}" y2="${o-l}" stroke="currentColor" stroke-opacity=".22" stroke-dasharray="4 4"/>`}).join("");return`
  <svg class="mom" viewBox="0 0 ${s} ${o}" preserveAspectRatio="none">
    <defs>
      <clipPath id="${k}_top"><rect x="0" y="0" width="${s}" height="${S}"/></clipPath>
      <clipPath id="${k}_bot"><rect x="0" y="${S}" width="${s}" height="${o-S}"/></clipPath>
      <linearGradient id="${k}_g0" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="${g(a)}" stop-opacity=".55"/>
        <stop offset="100%" stop-color="${g(a)}" stop-opacity=".04"/>
      </linearGradient>
      <linearGradient id="${k}_g1" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="${g(n)}" stop-opacity=".04"/>
        <stop offset="100%" stop-color="${g(n)}" stop-opacity=".55"/>
      </linearGradient>
    </defs>
    <line x1="${i}" y1="${l}" x2="${s-i}" y2="${l}" stroke="currentColor" stroke-opacity=".08"/>
    <line x1="${i}" y1="${S}" x2="${s-i}" y2="${S}" stroke="currentColor" stroke-opacity=".35" stroke-dasharray="3 3"/>
    <line x1="${i}" y1="${o-l}" x2="${s-i}" y2="${o-l}" stroke="currentColor" stroke-opacity=".08"/>
    ${m}
    <path d="${M}" fill="url(#${k}_g0)" clip-path="url(#${k}_top)"/>
    <path d="${M}" fill="url(#${k}_g1)" clip-path="url(#${k}_bot)"/>
    <path d="${C}" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round"/>
  </svg>`}function Ll(){const{ui:e,activeMatch:t}=b,a=Zs();if(!a)return'<div class="page"><div class="empty">Partido no encontrado.<br><br><button class="btn" data-nav="home">Volver</button></div></div>';const n=e.statsSetFilter||"all",r=cs(a,n),s=r.st,o=r.T,i=a.teams[0].color,l=a.teams[1].color,c=e.statsId==="live"&&e.liveMatch,d=t&&t.id===a.id&&t.status==="playing"||c&&a.status==="playing",y=c?"live":t&&t.id===a.id&&t.status==="playing"?"board":"history",S=a.rules.deuceRule==="star",h=S?"Star Points ganados":"Puntos de oro ganados",w=S?"Star Points ganados al saque":"Puntos de oro ganados al saque",C=S?"Star Points ganados al resto":"Puntos de oro ganados al resto",M=He(a),k=M?K(M):null,m=rt(k),x=k?`${k.kind==="league"?"Liga":"Torneo"}: ${k.name}`:"Partido del Día",E=a.isWalkover?null:pn(a);let T="";if(E&&(s.matchWinner!==null||s.isDraw)){const B=E.pair0,p=E.pair1,u=s.sets.reduce((U,re)=>(re.winner===0?U[0]++:re.winner===1&&U[1]++,U),[0,0]),f=s.sets.reduce((U,re)=>{var ee,Z;return[U[0]+(((ee=re.games)==null?void 0:ee[0])||0),U[1]+(((Z=re.games)==null?void 0:Z[1])||0)]},[0,0]),$=m.gameBonusPts||0,P=m.setBonusPts||0,L=s.isDraw?m.drawPts??2:s.matchWinner===0?m.winPts:m.lossPts,j=s.isDraw?m.drawPts??2:s.matchWinner===1?m.winPts:m.lossPts,W=L+u[0]*P+f[0]*$,V=j+u[1]*P+f[1]*$;T=`
    <div class="sec-t">Ranking · ${g(x)}</div>
    <div class="card elo-match-card">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;flex-wrap:wrap;gap:8px">
        <div style="display:flex;align-items:center;gap:8px">
          ${I.trophy}
          <h3 style="margin:0">${s.isDraw?`Empate (+${W} / +${V} pts) & ELO`:`Puntos (+${W} / +${V}) & ELO`} (${g(x)})</h3>
        </div>
        ${E.isBlowout?'<span class="tag-gold" style="font-size:11px;padding:3px 8px;border-radius:6px;background:rgba(212,175,55,0.15);color:var(--gold);border:1px solid rgba(212,175,55,0.35);font-weight:700">💥 Bonus x1.2 (+6 juegos de ventaja)</span>':""}
      </div>

      <div class="elo-teams-grid">
        <div class="elo-team-col ${s.matchWinner===0?"winner-col":""}">
          <div class="elo-team-hdr">
            <span class="bar" style="--c:${g(a.teams[0].color)}"></span>
            <b>${g(X(a,0))}</b>
            ${s.matchWinner===0?'<span class="tro">🏆</span>':""}
          </div>
          <div class="elo-team-meta">
            <span>Promedio previo: <b>${B.avgBefore} pts</b></span>
            <span>Probabilidad esperada: <b>${B.expPct}%</b></span>
          </div>
          <div class="elo-players-list">
            ${B.players.map(U=>{const re=ia(U.eloAfter),ee=U.delta>=0?"+":"";return`
              <div class="elo-player-row">
                <span class="p-name">${g(U.name)}</span>
                <span class="p-delta ${U.delta>=0?"up":"down"}">${ee}${U.delta} pts</span>
                <span class="p-after"><b>${U.eloAfter} pts</b> (${re.icon} ${re.level})</span>
              </div>`}).join("")}
          </div>
        </div>

        <div class="elo-team-col ${s.matchWinner===1?"winner-col":""}">
          <div class="elo-team-hdr">
            <span class="bar" style="--c:${g(a.teams[1].color)}"></span>
            <b>${g(X(a,1))}</b>
            ${s.matchWinner===1?'<span class="tro">🏆</span>':""}
          </div>
          <div class="elo-team-meta">
            <span>Promedio previo: <b>${p.avgBefore} pts</b></span>
            <span>Probabilidad esperada: <b>${p.expPct}%</b></span>
          </div>
          <div class="elo-players-list">
            ${p.players.map(U=>{const re=ia(U.eloAfter),ee=U.delta>=0?"+":"";return`
              <div class="elo-player-row">
                <span class="p-name">${g(U.name)}</span>
                <span class="p-delta ${U.delta>=0?"up":"down"}">${ee}${U.delta} pts</span>
                <span class="p-after"><b>${U.eloAfter} pts</b> (${re.icon} ${re.level})</span>
              </div>`}).join("")}
          </div>
        </div>
      </div>
    </div>`}const A=s.sets.filter((B,p)=>B.games[0]>0||B.games[1]>0||p===0),R=A.map((B,p)=>{const u=B.history.map(f=>{const $=a.teams[f.winner].color,P=Ot($),L=f.isTB?"gch tb":f.isBreak?"gch b":"gch",j=f.isTB?"TB":f.isBreak?"B":"";return`<span class="${L}" style="--c:${g($)};--f:${P}" title="Set ${p+1} · ${f.gamesAfter[0]}-${f.gamesAfter[1]} (saca ${g(ae(a,f.srvTeam,f.srvPlayer))})">${j}</span>`}).join("");return`
      <div class="evo-row">
        <span class="lb">SET ${p+1} · ${B.games[0]}-${B.games[1]}</span>
        <div class="evo-chips">${u}</div>
      </div>`}).join(""),q=A.map((B,p)=>{if(n!=="all"&&Number(n)!==p)return"";const u=B.history.map(f=>{const $=f.points.map(P=>{const L=a.teams[P.w].color;return`<span class="${P.isGP?"gp":""}" style="--c:${g(L)}">${g(P.scoreBefore)}</span>`}).join("");return`
        <div class="pbp-game">
          <div class="pbp-h">
            <b>SET ${p+1} · ${f.gamesAfter[0]}-${f.gamesAfter[1]}</b>
            <small>saca ${g(ae(a,f.srvTeam,f.srvPlayer))}</small>
          </div>
          <div class="pseq">${$}</div>
          <div>${f.isBreak?'<span class="brk-badge">BREAK</span>':f.isTB?'<span class="brk-badge">TB</span>':""}</div>
        </div>`}).join("");return`
      <details class="pbp" open>
        <summary>SET ${p+1} (${B.games[0]}-${B.games[1]}) · ${B.history.length} juegos</summary>
        ${u||'<div class="muted" style="padding:8px 0">Sin juegos terminados en este set.</div>'}
      </details>`}).join(""),_={smash:"💥",volea:"🎾",bandeja:"🌀",bajada:"⚡",dejada:"🎯",passing:"🏹",globo:"🎈",otro:"✨"},F={smash:"Smash",volea:"Volea",bandeja:"Bandeja",bajada:"Bajada",dejada:"Dejada",passing:"Passing",globo:"Globo",otro:"Directo"};return`
  <div class="page stats">
    <div class="print-only print-title">DETALLES DEL PARTIDO · PÁDEL CONTROL SÉ · BY SAIRAF ENGEL</div>

    <div class="page-h no-print">
      <div class="page-h-top">
        <button class="icon-btn" data-nav="${y}" title="Volver">${I.back}</button>
        <h1>Detalles del Partido</h1>
      </div>
      <div class="page-h-acts">
        ${d?`<button class="btn primary sm" data-nav="${c?"live":"board"}">${I.play} Volver</button>`:""}
        ${k&&!c?`<button class="btn sm" data-open-comp="${g(k.id)}">${I.award} Ver ${k.kind==="league"?"Liga":"Torneo"}</button>`:""}
        ${!c&&d?`<button class="icon-btn" data-act="share-live" title="Compartir en vivo">${I.live}</button>`:""}
        <button class="icon-btn" data-act="print-pdf" title="Imprimir / Guardar PDF">${I.pdf}</button>
        <button class="icon-btn" data-act="export-png" title="Descargar imagen">${I.img}</button>
        <button class="icon-btn" data-act="share-link" title="Compartir enlace">${I.share}</button>
      </div>
    </div>

    <div class="card st-head">
      ${[0,1].map(B=>`
        <div class="tr ${s.matchWinner===B?"win":""}">
          <span class="bar" style="--c:${g(a.teams[B].color)}"></span>
          <span class="nm">${g(X(a,B))}</span>
          ${s.matchWinner===B?`<span class="tro">${I.trophy}</span>`:""}
          <div class="sboxes">
            ${A.map(p=>{const u=p.winner===B?"sbox w":p.winner===null&&d?"sbox cur":"sbox",f=p.tbScore?`<sup>${p.tbScore[B]}</sup>`:"";return`<span class="${u}">${p.games[B]}${f}</span>`}).join("")}
          </div>
        </div>`).join("")}
      <div class="meta">
        ${ms(a)}
        ${s.isDraw?'<span class="badge">🤝 EMPATE</span>':""}
        <span>·</span>
        <span>${g(Ba(a.createdAt))}</span>
        <span>·</span>
        <span>Duración ${g(tn(a.durationMs))}</span>
        <span>·</span>
        <span>Regla 40-40: ${a.rules.deuceRule==="golden"?"Punto de Oro":a.rules.deuceRule==="star"?"★ Star Point (FIP)":"Ventaja clásica"}</span>
      </div>
    </div>

    ${A.length>1?`
    <div class="seg no-print">
      <button class="${n==="all"?"on":""}" data-st-filter="all">Partido completo</button>
      ${A.map((B,p)=>`<button class="${String(n)===String(p)?"on":""}" data-st-filter="${p}">Set ${p+1} (${B.games[0]}-${B.games[1]})</button>`).join("")}
    </div>`:""}

    ${T}

    <div class="sec-t">Resumen</div>
    <div class="card">
      <h3>Análisis del partido</h3>
      ${r.insights.length?`
        <ul class="analysis">
          ${r.insights.map(B=>`<li>${g(B)}</li>`).join("")}
        </ul>
      `:'<p class="muted">Anotá puntos en el partido para generar el análisis automático.</p>'}
    </div>

    <div class="grid2">
      <div class="card">
        <h3>Parejas <span class="tag-s">${r.totalPts} PUNTOS</span></h3>
        ${pe("Puntos ganados",o[0].ptsWon,o[1].ptsWon,o[0].ptsWon,o[1].ptsWon,i,l)}
        ${pe("Golpes ganadores",o[0].winners,o[1].winners,o[0].winners,o[1].winners,i,l)}
        ${pe("Errores no forzados",o[0].ue,o[1].ue,o[0].ue,o[1].ue,i,l)}
        ${pe("Puntos ganados al saque",le(o[0].srvPtsWon,o[0].srvPtsTotal)+"%",le(o[1].srvPtsWon,o[1].srvPtsTotal)+"%",le(o[0].srvPtsWon,o[0].srvPtsTotal),le(o[1].srvPtsWon,o[1].srvPtsTotal),i,l)}
      </div>

      <div class="card">
        <h3>Momentos</h3>
        ${pe("Puntos de break ganados",`${o[0].bpWon}/${o[0].bpTotal}`,`${o[1].bpWon}/${o[1].bpTotal}`,o[0].bpWon,o[1].bpWon,i,l)}
        ${pe(h,`${o[0].gpWon}/${o[0].gpTotal}`,`${o[1].gpWon}/${o[1].gpTotal}`,o[0].gpWon,o[1].gpWon,i,l)}
        ${pe("Puntos seguidos (máximo)",o[0].maxPtStreak,o[1].maxPtStreak,o[0].maxPtStreak,o[1].maxPtStreak,i,l)}
        ${pe("Juegos ganados",o[0].gamesWon,o[1].gamesWon,o[0].gamesWon,o[1].gamesWon,i,l)}
        ${pe("Primeros saques dentro",le(o[0].firstServeIn,o[0].srvPtsTotal)+"%",le(o[1].firstServeIn,o[1].srvPtsTotal)+"%",le(o[0].firstServeIn,o[0].srvPtsTotal),le(o[1].firstServeIn,o[1].srvPtsTotal),i,l)}
        ${pe("Dobles faltas",o[0].doubleFaults,o[1].doubleFaults,o[0].doubleFaults,o[1].doubleFaults,i,l)}
      </div>
    </div>

    <div class="grid2">
      <div class="card">
        <h3>Saque y resto</h3>
        ${pe("Puntos ganados al resto",le(o[0].retPtsWon,o[0].retPtsTotal)+"%",le(o[1].retPtsWon,o[1].retPtsTotal)+"%",le(o[0].retPtsWon,o[0].retPtsTotal),le(o[1].retPtsWon,o[1].retPtsTotal),i,l)}
        ${pe("Juegos de saque ganados",`${o[0].srvGamesWon}/${o[0].srvGamesTotal}`,`${o[1].srvGamesWon}/${o[1].srvGamesTotal}`,o[0].srvGamesWon,o[1].srvGamesWon,i,l)}
        ${pe("Bolas de break salvadas",`${o[0].bpSaved}/${o[0].bpFaced}`,`${o[1].bpSaved}/${o[1].bpFaced}`,o[0].bpSaved,o[1].bpSaved,i,l)}
      </div>

      <div class="card">
        <h3>Bajo presión</h3>
        ${pe("Puntos clave ganados",`${o[0].keyWon}/${o[0].keyTotal}`,`${o[1].keyWon}/${o[1].keyTotal}`,o[0].keyWon,o[1].keyWon,i,l)}
        ${pe(w,`${o[0].gpSrvWon}/${o[0].gpSrvTotal}`,`${o[1].gpSrvWon}/${o[1].gpSrvTotal}`,o[0].gpSrvWon,o[1].gpSrvWon,i,l)}
        ${pe(C,`${o[0].gpRetWon}/${o[0].gpRetTotal}`,`${o[1].gpRetWon}/${o[1].gpRetTotal}`,o[0].gpRetWon,o[1].gpRetWon,i,l)}
        ${pe("Juegos seguidos (máximo)",o[0].maxGameStreak,o[1].maxGameStreak,o[0].maxGameStreak,o[1].maxGameStreak,i,l)}
      </div>
    </div>
    <p class="note">Puntos clave: bolas de break y puntos desde el 30-30.</p>

    <div class="sec-t">Jugadores</div>
    <div class="card">
      <div class="tbl-wrap">
        <table class="pt">
          <thead>
            <tr>
              <th></th>
              <th>Golpes<br>ganadores</th>
              <th>Errores no<br>forzados</th>
              <th>Errores<br>forzados</th>
              <th>Primeros<br>saques<br>dentro</th>
              <th>Puntos<br>ganados al<br>saque</th>
              <th>Juegos de<br>saque<br>ganados</th>
              <th>Dobles<br>faltas</th>
            </tr>
          </thead>
          <tbody>
            ${r.P.map(B=>`
              <tr>
                <td style="--c:${g(B.color)}">${g(B.name)}</td>
                <td>${B.winners}</td>
                <td>${B.ue}</td>
                <td>${B.fe}</td>
                <td>${le(B.firstServeIn,B.srvPtsTotal)}%</td>
                <td>${le(B.srvPtsWon,B.srvPtsTotal)}%</td>
                <td>${B.srvGamesWon}/${B.srvGamesTotal}</td>
                <td>${B.doubleFaults}</td>
              </tr>`).join("")}
          </tbody>
        </table>
      </div>
    </div>

    <div class="sec-t">Desglose de Golpes Ganadores (Winners)</div>
    <div class="card">
      <h3>Tipos de Golpe por Pareja</h3>
      ${pe("💥 Smash / Remate",o[0].shots.smash,o[1].shots.smash,o[0].shots.smash,o[1].shots.smash,i,l)}
      ${pe("🎾 Volea ganadora",o[0].shots.volea,o[1].shots.volea,o[0].shots.volea,o[1].shots.volea,i,l)}
      ${pe("🌀 Bandeja / Víbora",o[0].shots.bandeja,o[1].shots.bandeja,o[0].shots.bandeja,o[1].shots.bandeja,i,l)}
      ${pe("⚡ Bajada de pared",o[0].shots.bajada,o[1].shots.bajada,o[0].shots.bajada,o[1].shots.bajada,i,l)}
      ${pe("🎯 Dejada / Chiquita",o[0].shots.dejada,o[1].shots.dejada,o[0].shots.dejada,o[1].shots.dejada,i,l)}
      ${pe("🏹 Passing shot",o[0].shots.passing,o[1].shots.passing,o[0].shots.passing,o[1].shots.passing,i,l)}
      ${o[0].shots.globo>0||o[1].shots.globo>0?pe("🎈 Globo ganador",o[0].shots.globo,o[1].shots.globo,o[0].shots.globo,o[1].shots.globo,i,l):""}
      ${o[0].shots.otro>0||o[1].shots.otro>0?pe("Otros winners directos",o[0].shots.otro,o[1].shots.otro,o[0].shots.otro,o[1].shots.otro,i,l):""}

      <div style="margin-top:14px;border-top:1px solid var(--line);padding-top:12px">
        <div style="font-size:12px;font-weight:800;letter-spacing:1px;text-transform:uppercase;color:var(--tx2);margin-bottom:8px">Winners registrados por Jugador</div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:8px">
          ${r.P.map(B=>{const p=Object.entries(B.shots||{}).filter(([,u])=>u>0).map(([u,f])=>{const $=_[u]||"",P=F[u]||u;return`<span class="tag-s" style="margin:2px;display:inline-flex;align-items:center;gap:3px;font-size:11px">${$} ${f} ${P}</span>`});return`
              <div style="background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.06);border-left:3px solid ${g(B.color)};border-radius:8px;padding:8px 10px">
                <div style="font-weight:700;font-size:13px;color:var(--text);margin-bottom:4px">${g(B.name)} <span style="font-weight:400;color:var(--muted);font-size:12px">(${B.winners} winners)</span></div>
                <div style="display:flex;flex-wrap:wrap">${p.length?p.join(""):'<span class="muted" style="font-size:11px">Sin detalle de golpe</span>'}</div>
              </div>`}).join("")}
        </div>
      </div>
    </div>

    <div class="sec-t">Evolución</div>
    <div class="card">
      ${R}
      <div class="mom-leg" style="margin-top:14px">
        <span style="color:${g(i)}"><i style="--c:${g(i)}"></i>${g(X(a,0))}</span>
        <span style="color:${g(l)}"><i style="--c:${g(l)}"></i>${g(X(a,1))}</span>
      </div>
      ${Al(r.momentum,r.setBoundaries,i,l)}
      <p class="note">La línea sube cuando ${g(X(a,0))} ganan un punto y baja cuando lo ganan ${g(X(a,1))}. B = break.</p>
    </div>

    <div class="sec-t">Punto a Punto</div>
    <div class="card">
      ${q}
    </div>

    <div class="btn-row no-print" style="margin-top:18px">
      <button class="btn primary" data-act="print-pdf">${I.pdf} Exportar PDF / Imprimir</button>
      <button class="btn" data-act="export-png">${I.img} Descargar Imagen</button>
      <button class="btn" data-act="share-link">${I.share} Compartir Enlace</button>
      ${e.statsId==="shared"?'<button class="btn primary" data-act="save-shared">Guardar en mi historial</button>':""}
      ${c?'<button class="btn primary" data-act="save-live">Guardar en mi historial</button>':""}
      ${!d&&e.statsId!=="shared"&&!c?`<button class="btn danger" data-del-match="${g(a.id)}">${I.trash} Eliminar partido</button>`:""}
    </div>
    ${vt()}
  </div>
  ${it("history")}`}function Va(){const e=b.ui.compFormState;if(!e)return;const t=document.getElementById("cf-name");t&&(e.name=t.value);const a=document.getElementById("cf-wpts");a&&(e.winPts=Math.max(0,Number(a.value)||0));const n=document.getElementById("cf-dpts");n&&(e.drawPts=Math.max(0,Number(n.value)||0));const r=document.getElementById("cf-lpts");r&&(e.lossPts=Math.max(0,Number(r.value)||0));const s=document.getElementById("cf-spts");s&&(e.setBonusPts=Math.max(0,Number(s.value)||0));const o=document.getElementById("cf-gpts");o&&(e.gameBonusPts=Math.max(0,Number(o.value)||0));const i=document.getElementById("cf-ngroups");i&&(e.numGroups=Math.max(2,Math.min(4,Number(i.value)||2)));const l=document.getElementById("cf-adv");l&&(e.advancePerGroup=Math.max(1,Math.min(4,Number(l.value)||2)));const c=document.getElementById("cf-sets"),d=document.getElementById("cf-deuce");(c||d)&&(e.defaultRules=e.defaultRules||{},c&&(e.defaultRules.totalSets=Number(c.value)||3),d&&(e.defaultRules.deuceRule=d.value||"golden"))}function Lo(e,t){const{ui:a,preset:n}=b;if(e==="edit"&&t&&typeof t=="object"){const s=t,o=rt(s);a.compFormState={id:s.id,kind:s.kind||"league",name:s.name||"",format:s.format||(s.kind==="tournament"?"knockout":"league_rr"),rankingMode:s.rankingMode||"pairs",winPts:o.winPts,drawPts:o.drawPts,lossPts:o.lossPts,setBonusPts:o.setBonusPts,gameBonusPts:o.gameBonusPts,numGroups:Number(s.numGroups)||2,advancePerGroup:Number(s.advancePerGroup)||2,defaultRules:Ie(s.defaultRules||{totalSets:3,gamesPerSet:6,deuceRule:"golden",tiebreakAt:6,tiebreakPoints:7,finalSet:"normal",changeoverRule:"odd"})},a.compModal="edit";return}const r=t==="tournament"?"tournament":"league";a.compFormState={id:null,kind:r,name:"",format:r==="tournament"?"knockout":"league_rr",rankingMode:"pairs",winPts:3,drawPts:2,lossPts:1,setBonusPts:0,gameBonusPts:0,numGroups:2,advancePerGroup:2,defaultRules:{totalSets:n.totalSets||3,gamesPerSet:n.gamesPerSet||6,deuceRule:n.deuceRule||"golden",tiebreakAt:n.tiebreakAt??6,tiebreakPoints:n.tiebreakPoints||7,finalSet:n.finalSet||"normal",changeoverRule:n.changeoverRule||"odd"}},a.compModal="create"}function Ro(e){if(!e)return fs();const{ui:t,prefs:a}=b,n=rt(e),r=Pe(e),s=e.rankingMode==="both"?t.playerEntityMode||"pairs":e.rankingMode||"pairs",o=os(e,e.id),i={tiebreakMode:r?"games":"sets"},l=Ut(Xe(e,!1),{...n,entityMode:s,seedParticipants:e.participants||[]}),c=na(Ft(l,o,i),o,i);return{scope:e.kind,id:`${a.rankingId||"RK"}-${e.id.slice(-4).toUpperCase()}`,title:e.name,subtitle:on(e,s,n),entityMode:s,primaryMetric:r?"elo":"pts",comp:e,scoring:n,sortKey:o,players:c}}function O(){const{ui:e}=b;di();const t=document.getElementById("app");if(!t)return;e.route==="obs"?(document.documentElement.classList.add("obs-mode"),document.body.classList.add("obs-mode")):(document.documentElement.classList.remove("obs-mode"),document.body.classList.remove("obs-mode"));let a="";switch(e.route){case"new":a=Cl();break;case"board":a=Ns(!1);break;case"display":a=Ns(!0);break;case"obs":a=Cr();break;case"live":a=Ns(!0);break;case"stats":a=Ll();break;case"history":a=vl();break;case"players":a=yl();break;case"competitions":a=fl();break;case"comp-detail":a=bl();break;case"player-card":a=ji();break;case"settings":a=$l();break;default:a=xl();break}e.qrModalOpen&&(a+=Pl()),e.obsModalOpen&&(a+=Il()),e.compModal&&(a+=hl()),t.innerHTML=a,xr(),xn()}z.render=O;z.navigate=Ae;z.updateWakeLock=Na;z.publishLiveMatchState=ma;z.syncCompetitionForMatch=zi;z.publishCompMatch=Pn;z.renderHomeSystemBanners=ol;z.afterRenderQR=xr;z.ensureCompLiveWatcherForCurrentView=xn;z.refreshPlayerCardPreview=De;z.openPlayerCardFor=ar;z.loadPlayerCardLogosAndCards=()=>({logos:Ct(),cards:ua(),setLogos:async e=>{const t=Ct();Object.assign(t,e),await pa()},saveCard:kn});z.pollLiveChannelOnce=da;z.pollCompChannelOnce=fa;z.resolveCompetitionFixtures=kt;document.addEventListener("click",e=>{var Ke,ha,Qt,Cn,Tn,Mn,In,En,An,Ln,Rn,Bn,Dn,jn,Nn,On,_n,Wn,Fn,Gn,qn,Vn,zn,Un,Hn,Jn,Kn,Qn,Yn,Xn,Zn,eo,to,ao,so,no,oo,ro,io,lo,co,uo;const t=e.target;if(!t)return;const{ui:a,preset:n,prefs:r}=b,s=t.closest("[data-nav]");if(s){e.preventDefault(),Ae(s.getAttribute("data-nav")||"home");return}const o=t.closest("[data-open-stats]");if(o){e.preventDefault(),a.statsId=o.getAttribute("data-open-stats"),a.statsSetFilter="all",a.matchEndDismissed=!0,Ae("stats");return}const i=t.closest("[data-open-player-card]");if(i){e.preventDefault();const N=i.getAttribute("data-open-player-card")||"",v=i.getAttribute("data-pc-default-pos")||void 0;ar(N,{position:v});return}const l=t.closest("[data-pc-bgmode]");if(l){const N=l.getAttribute("data-pc-bgmode")||"ai",v=ue();v.bgMode=N,a.playerCardDraftDirty=!0,fe(),N==="ai"&&v.origPhoto&&!v.cutoutPhoto&&!v.origHasAlpha?(O(),or(v)):(a.playerCardAiStatus=v.origPhoto?"ok":"",a.playerCardAiText=v.origPhoto?N==="ai"?"✓ Fondo recortado automáticamente":"⚡ Modo instantáneo activo":"",O());return}const c=t.closest("[data-pc-cat]");if(c){ue().category=c.getAttribute("data-pc-cat")||"",a.playerCardDraftDirty=!0,fe(),O();return}const d=t.closest("[data-pc-pos]");if(d){ue().position=d.getAttribute("data-pc-pos")||"Drive",a.playerCardDraftDirty=!0,fe(),O();return}const y=t.closest("[data-pc-hand]");if(y){ue().hand=y.getAttribute("data-pc-hand")||"Diestro",a.playerCardDraftDirty=!0,fe(),O();return}const S=t.closest("[data-pc-shot]");if(S){ue().bestShot=S.getAttribute("data-pc-shot")||"",a.playerCardDraftDirty=!0,fe(),O();return}const h=t.closest("[data-pc-theme]");if(h){const N=ue(),v=h.getAttribute("data-pc-theme")||"diamond";if(N.theme=v,!N.metalCustom){const G={gold:"gold"};N.metalFinish=G[v]||"chrome"}a.playerCardDraftDirty=!0,fe(),O();return}const w=t.closest("[data-pc-metal]");if(w){const N=ue();N.metalFinish=w.getAttribute("data-pc-metal")||"chrome",N.metalCustom=!0,a.playerCardDraftDirty=!0,fe(),O();return}const C=t.closest("[data-pc-del-logo]");if(C){const N=C.getAttribute("data-pc-del-logo"),v=Ct();N==="1"?v.logo1=null:(v.logo2=null,v.logo2Disabled=!0),pa(),O(),D(`Logo ${N} quitado`);return}const M=t.closest("[data-pc-load]");if(M){const N=M.getAttribute("data-pc-load"),v=ua().find(G=>G.id===N);v&&(a.playerCardDraft={...Ie(v)},a.playerCardDraftDirty=!0,a.playerCardTouchDrag=!1,a.playerCardAiStatus=v.cutoutPhoto?"ok":"",a.playerCardAiText=v.cutoutPhoto?"✓ Tarjeta cargada":"",fe(!0),O(),window.scrollTo({top:0,behavior:"smooth"}));return}const k=t.closest("[data-pc-del]");if(k){const N=k.getAttribute("data-pc-del")||"",v=ua().find(G=>G.id===N);v&&confirm(`¿Eliminar la tarjeta guardada de "${v.name||"Jugador"}"?`)&&bi(N).then(()=>{O(),D("Tarjeta eliminada")});return}const m=t.closest("[data-open-comp]");if(m){e.preventDefault();const N=m.getAttribute("data-open-comp");K(N)&&(a.compId=N,a.compTab="standings",a.matchEndDismissed=!0,Ae("comp-detail"));return}const x=t.closest("[data-open-comp-rank]");if(x){e.preventDefault();const N=x.getAttribute("data-open-comp-rank"),v=K(N);v&&(a.playerScope=v.kind,a.playerRankingView="local",v.kind==="league"?a.selectedLeagueId=v.id:a.selectedTournId=v.id,a.selectedGroupFilter="all",Ae("players"));return}const E=t.closest("[data-play-in-comp]");if(E){e.preventDefault();const N=K(E.getAttribute("data-play-in-comp"));N&&(sa(N,null),J(ve,n),Ae("new"));return}const T=t.closest("[data-edit-comp]");if(T){e.preventDefault();const N=K(T.getAttribute("data-edit-comp"));N&&(Lo("edit",N),O());return}const A=t.closest("[data-del-comp]");if(A){const N=A.getAttribute("data-del-comp"),v=K(N);v&&confirm(`¿Eliminar "${v.name}" y sus cruces? (Los partidos jugados quedarán en el historial)`)&&(b.competitionsList=b.competitionsList.filter(G=>G.id!==N),ce(),n.compId===N&&(n.compId="",n.fixtureId="",J(ve,n)),a.compId=((Ke=b.competitionsList[0])==null?void 0:Ke.id)||null,Ae("competitions"),D("Competencia eliminada"));return}const R=t.closest("[data-match-ctx]");if(R){const N=R.getAttribute("data-match-ctx")||"daily";if(n.matchContext=N,n.fixtureId="",N==="league"||N==="tournament"){const v=b.competitionsList.find(G=>G.kind===N);v?sa(v,null):n.compId=""}else n.compId="",n.stageLabel="";J(ve,n),O();return}const q=t.closest("[data-pick-fixture]");if(q){const[N,v]=(q.getAttribute("data-pick-fixture")||"").split(":"),G=K(N),H=((G==null?void 0:G.fixtures)||[]).find(Y=>Y.id===v);G&&H&&(sa(G,H),J(ve,n),O(),D(`Cruce cargado: ${H.roundLabel}`));return}const _=t.closest("[data-play-fixture]");if(_){const[N,v]=(_.getAttribute("data-play-fixture")||"").split(":");Ui(N,v);return}const F=t.closest("[data-quick-score]");if(F){Ds({mode:"fixture",fixtureKey:F.getAttribute("data-quick-score")||void 0});return}const B=t.closest("[data-qs-slot]");if(B&&a.quickScoreState){const N=Number(B.getAttribute("data-qs-slot"))||0;a.quickScoreState.activeSlot=N,document.querySelectorAll(".qs-slot-inp").forEach(v=>{v.classList.toggle("active-slot",Number(v.getAttribute("data-qs-slot"))===N)})}const p=t.closest("[data-qs-pick-player]");if(p&&a.quickScoreState){ea();const N=a.quickScoreState,v=p.getAttribute("data-qs-pick-player")||"",G=Math.max(0,Math.min(3,Number(N.activeSlot)||0));N.teams[Math.floor(G/2)].players[G%2]=v;const H=[N.teams[0].players[0],N.teams[0].players[1],N.teams[1].players[0],N.teams[1].players[1]];let Y=(G+1)%4;for(let oe=1;oe<=4;oe++){const Se=(G+oe)%4;if(!String(H[Se]||"").trim()){Y=Se;break}}N.activeSlot=Y,O();return}const u=t.closest("[data-qs-pick]");if(u){const[N,v,G]=(u.getAttribute("data-qs-pick")||"").split(":"),H=Number(N),Y=Number(v),oe=Number(G),Se=document.getElementById(`qs-s${H+1}-${Y}`);Se&&(Se.value=String(oe)),(Qt=(ha=a.quickScoreState)==null?void 0:ha.sets)!=null&&Qt[H]&&(a.quickScoreState.sets[H][Y]=oe);const we=u.closest(".qs-pills");we&&we.querySelectorAll&&we.querySelectorAll(".qs-g-pill").forEach(Be=>{Be.classList.toggle("on",Be===u)}),is();return}const f=t.closest("[data-qs-clear-set]");if(f){const N=Number(f.getAttribute("data-qs-clear-set")),v=document.getElementById(`qs-s${N+1}-0`),G=document.getElementById(`qs-s${N+1}-1`);v&&(v.value=""),G&&(G.value=""),(Tn=(Cn=a.quickScoreState)==null?void 0:Cn.sets)!=null&&Tn[N]&&(a.quickScoreState.sets[N]=[null,null]);const H=f.closest(".qs-set-card");H&&H.querySelectorAll&&H.querySelectorAll(".qs-g-pill.on").forEach(Y=>Y.classList.remove("on")),is();return}const $=t.closest("[data-open-comp-sync]");if($){e.preventDefault();const N=$.getAttribute("data-open-comp-sync"),v=K(N);v&&(_a(v),a.compId=v.id,a.compModal="sync-qr",Ys(v),O());return}const P=t.closest("[data-sync-comp]");if(P){e.preventDefault();const N=P.getAttribute("data-sync-comp")||"";fa(N,"24h",!0);return}const L=t.closest("[data-del-fixture]");if(L){const[N,v]=(L.getAttribute("data-del-fixture")||"").split(":"),G=K(N);G&&(G.fixtures=(G.fixtures||[]).filter(H=>H.id!==v),ce(),G.syncCode&&Bt(G,!0),O(),D("Cruce eliminado"));return}const j=t.closest("[data-del-part]");if(j){const[N,v]=(j.getAttribute("data-del-part")||"").split(":"),G=K(N);G&&(G.participants=(G.participants||[]).filter(H=>H.id!==v),ce(),G.syncCode&&hr(G,"del",v),O(),D("Inscripto eliminado"));return}const W=t.closest("[data-close-comp-modal]");if(W&&(W.tagName==="BUTTON"||!t.closest(".sheet"))){a.compModal=null,a.quickScoreState=null,a.quickScoreFixtureId=null,O();return}const V=t.closest("[data-cf-kind]");if(V&&a.compFormState){Va();const N=V.getAttribute("data-cf-kind")||"league";a.compFormState.kind=N,a.compFormState.format=N==="tournament"?"knockout":"league_rr",O();return}const U=t.closest("[data-cf-fmt]");if(U&&a.compFormState){Va();const N=U.getAttribute("data-cf-fmt")||"league_rr";a.compFormState.format=N,N==="proyecto_padel"&&(a.compFormState.kind="tournament",a.compFormState.rankingMode="individual",a.compFormState.winPts=3,a.compFormState.drawPts=2,a.compFormState.lossPts=1,a.compFormState.setBonusPts=0,a.compFormState.gameBonusPts=1,a.compFormState.defaultRules={...a.compFormState.defaultRules||{},totalSets:1,deuceRule:"golden"}),O();return}const re=t.closest("[data-cf-rmode]");if(re&&a.compFormState){Va(),a.compFormState.rankingMode=re.getAttribute("data-cf-rmode")||"pairs",O();return}const ee=t.closest("[data-set-cfilter]");if(ee){a.compFilter=ee.getAttribute("data-set-cfilter")||"all",O();return}const Z=t.closest("[data-set-ctab]");if(Z){a.compTab=Z.getAttribute("data-set-ctab")||"standings",O();return}const xe=t.closest("[data-set-hfilter]");if(xe){a.histFilter=xe.getAttribute("data-set-hfilter")||"all",O();return}const me=t.closest("[data-set-pscope]");if(me){a.playerScope=me.getAttribute("data-set-pscope")||"daily",a.playerRankingView=a.playerScope==="shared"?"shared":"local",a.selectedGroupFilter="all",O();return}const ct=t.closest("[data-set-daily-time]");if(ct){a.dailyTimeFilter=ct.getAttribute("data-set-daily-time")||"all",O();return}const Jt=t.closest("[data-set-pentity]");if(Jt){a.playerEntityMode=Jt.getAttribute("data-set-pentity")||"individual",O();return}const et=t.closest("[data-set-gfilter]");if(et){a.selectedGroupFilter=et.getAttribute("data-set-gfilter")||"all",O();return}const Je=t.closest("[data-st-filter]");if(Je){a.statsSetFilter=Je.getAttribute("data-st-filter")||"all",O();return}const We=t.closest("[data-set-psort]");if(We){a.playerSort=We.getAttribute("data-set-psort")||"pts",a.route==="comp-detail"?a.playerSortScope=a.compId||"comp":a.playerScope==="league"?a.playerSortScope=a.selectedLeagueId||"league":a.playerScope==="tournament"?a.playerSortScope=a.selectedTournId||"tournament":a.playerSortScope=a.playerScope||"daily",O();return}const dt=t.closest("[data-set-prview]");if(dt){a.playerRankingView=dt.getAttribute("data-set-prview")||"local",a.playerScope=a.playerRankingView==="shared"?"shared":"daily",O();return}const Ce=t.closest("[data-select-ranking]");if(Ce){const N=Ce.getAttribute("data-select-ranking")||"",v=Ze("padel_ranking_vault",{});v[N]&&(a.sharedRanking=v[N],J("padel_shared_ranking",v[N]),a.playerRankingView="shared",a.playerScope="shared",O());return}const tt=t.closest("[data-step]");if(tt){const[N,v]=(tt.getAttribute("data-step")||"").split(":"),G=Number(v)||0;if(N==="totalSets"){const H=Math.max(1,Number(n.totalSets)||(n.setsToWin?n.setsToWin*2-1:3)),Y=Math.max(1,Math.min(15,H+G));n.totalSets=Y,n.setsToWin=Math.floor(Y/2)+1}else if(N==="gamesPerSet"){const H=Math.max(1,Number(n.gamesPerSet)||6),Y=Math.max(1,Math.min(21,H+G));n.gamesPerSet=Y,n.tiebreakAt>0&&(n.tiebreakAt=Y)}else if(N==="tiebreakPoints"){const H=Math.max(1,Number(n.tiebreakPoints)||7),Y=Math.max(1,Math.min(30,H+G));n.tiebreakPoints=Y,n.tiebreakAt===0&&(n.tiebreakAt=n.gamesPerSet||6)}J(ve,n),O();return}const Kt=t.closest("[data-preset]");if(Kt){const[N,v]=(Kt.getAttribute("data-preset")||"").split(":");if(N==="setsToWin")n.setsToWin=Number(v),n.totalSets=n.setsToWin*2-1;else if(N==="gamesPerSet")n.gamesPerSet=Number(v),n.tiebreakAt>0&&(n.tiebreakAt=Number(v));else if(N==="deuceRule")n.deuceRule=v;else if(N==="tb"){const G=Number(v);G===0?n.tiebreakAt=0:(n.tiebreakAt=n.gamesPerSet||6,n.tiebreakPoints=G)}else N==="finalSet"?n.finalSet=v:N==="changeoverRule"&&(n.changeoverRule=v);J(ve,n),O();return}const at=t.closest("[data-tcolor]");if(at){const[N,v]=(at.getAttribute("data-tcolor")||"").split(",");n.teams[Number(N)].color=v,J(ve,n),O();return}const Te=t.closest("[data-set-srv]");if(Te){const[N,v]=(Te.getAttribute("data-set-srv")||"").split(",").map(Number);n.firstServer=[N,v],J(ve,n),O();return}const Q=t.closest(".half[data-team]");if(Q&&!Q.hasAttribute("data-ro")){const N=Number(Q.getAttribute("data-team"));qs(N);return}const te=t.closest("[data-shot]");if(te&&a.shotSheet){const[N,v,G,H]=(te.getAttribute("data-shot")||"").split(","),Y=a.shotSheet.team,oe=Number(G)>=0?[Number(v),Number(G)]:null;he(Y,N,oe,H||null);return}const se=t.closest("[data-pick-2ndsrv]");if(se&&b.activeMatch){b.activeMatch.secondServerIdx=Number(se.getAttribute("data-pick-2ndsrv")),a.secondSrvPrompt=!1,Me(),O();return}const $e=t.closest("[data-edit-tcolor]");if($e&&b.activeMatch){const[N,v]=($e.getAttribute("data-edit-tcolor")||"").split(",");for(let G=0;G<2;G++){const H=(Mn=document.getElementById(`ed-p-${G}-0`))==null?void 0:Mn.value.trim(),Y=(In=document.getElementById(`ed-p-${G}-1`))==null?void 0:In.value.trim();H&&(b.activeMatch.teams[G].players[0]=H),Y&&(b.activeMatch.teams[G].players[1]=Y)}b.activeMatch.teams[Number(N)].color=v,Me(),O();return}const ie=t.closest("[data-close-obs-modal]");if(ie&&(ie.tagName==="BUTTON"||!t.closest(".sheet"))){a.obsModalOpen=!1,O();return}const ne=t.closest("[data-set-obs-pos]");if(ne){a.obsSelectedPos=ne.getAttribute("data-set-obs-pos")||"tl",O();return}const Fe=t.closest("[data-copy-input]");if(Fe){const N=Fe.getAttribute("data-copy-input")||"",v=document.getElementById(N);if(v){(En=v.select)==null||En.call(v);const G=v.value;if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(G).then(()=>{D("Enlace copiado al portapapeles")}).catch(()=>{try{document.execCommand("copy"),D("Enlace copiado")}catch{}});else try{document.execCommand("copy"),D("Enlace copiado")}catch{}}return}const Ge=t.closest("[data-close-qr]");if(Ge&&(Ge.tagName==="BUTTON"||!t.closest(".sheet"))){a.qrModalOpen=!1,O();return}const Mt=t.closest("[data-close-sheet]");if(Mt&&(Mt.tagName==="BUTTON"||!t.closest(".sheet"))){a.shotSheet=null,O();return}const ut=t.closest("[data-close-menu]");if(ut&&(ut.tagName==="BUTTON"||!t.closest(".sheet"))){a.menuOpen=!1,O();return}const Wa=t.closest("[data-close-edit]");if(Wa&&(Wa.tagName==="BUTTON"||!t.closest(".sheet"))){a.editNamesOpen=!1,O();return}const It=t.closest("[data-pref]");if(It){const[N,v]=(It.getAttribute("data-pref")||"").split(":");r[N]=v,J(ke,r),O();return}const qe=t.closest("[data-del-match]");if(qe){const N=qe.getAttribute("data-del-match")||"";if(confirm("¿Eliminar este partido del historial?")){const v=b.historyList.find(H=>H.id===N);b.historyList=b.historyList.filter(H=>H.id!==N),J(Pt,b.historyList);let G=!1;b.competitionsList.forEach(H=>{const Y=(H.fixtures||[]).some(oe=>oe.matchId===N);Y&&(kt(H),G=!0),H.syncCode&&(Y||v&&He(v)===H.id)&&el(H,N)}),G&&ce(),Ae("history"),D("Partido eliminado")}return}const ge=t.closest("[data-act]");if(ge)switch(ge.getAttribute("data-act")){case"start-match":Ko();break;case"resume-match":Ae("board");break;case"swap-preset-teams":n.teams.reverse(),n.firstServer[0]=1-n.firstServer[0],J(ve,n),O();break;case"undo":as();break;case"undo-from-end":a.matchEndDismissed=!1,as();break;case"redo":mn();break;case"fault":fn();break;case"flip":gn();break;case"toggle-shot-prompt":b.activeMatch&&(b.activeMatch.shotPrompt=!b.activeMatch.shotPrompt,Me(),D(b.activeMatch.shotPrompt?"Detalle de golpe activado":"Anotación rápida activada"),O());break;case"toggle-pause":b.activeMatch&&(b.activeMatch.status=b.activeMatch.status==="paused"?"playing":"paused",Me(),O());break;case"toggle-voice-tts":r.voice=!r.voice,J(ke,r),D(r.voice?"Voz de árbitro activada":"Voz de árbitro silenciada"),O();break;case"toggle-voice-rec":Zr();break;case"open-menu":a.menuOpen=!0,O();break;case"dismiss-co":a.changeoverOverlay=null,O();break;case"open-qr-modal":a.menuOpen=!1,a.qrModalOpen=!0,O();break;case"close-qr-modal":a.qrModalOpen=!1,O();break;case"share-app-wa":kl();break;case"copy-app-link":Sl();break;case"dl-app-qr":wl();break;case"share-live":b.activeMatch&&si(b.activeMatch);break;case"open-obs-modal":a.menuOpen=!1,a.obsModalOpen=!0,O();break;case"open-tv":a.menuOpen=!1,Ae("display");break;case"fullscreen":document.fullscreenElement?(Rn=document.exitFullscreen)==null||Rn.call(document).catch(()=>{}):(Ln=(An=document.documentElement).requestFullscreen)==null||Ln.call(An).catch(()=>{});break;case"share-link":{const v=Zs();v&&oi(v);break}case"share-img-active":b.activeMatch&&$o(b.activeMatch);break;case"exit-live":Xo(),Ae("home");break;case"save-live":a.liveMatch&&(ht(a.liveMatch),D("Partido guardado en tu historial"));break;case"rotate-server":if(b.activeMatch){const v=[[0,0],[1,0],[0,1],[1,1]],G=v.findIndex(oe=>oe[0]===b.activeMatch.firstServer[0]&&oe[1]===b.activeMatch.firstServer[1]),H=v[(G+1)%4];b.activeMatch.firstServer=[H[0],H[1]],b.activeMatch.secondServerIdx!==null&&(b.activeMatch.secondServerIdx=1-b.activeMatch.secondServerIdx),Me(),a.menuOpen=!1;const Y=Ee(b.activeMatch);D(`Saca ahora: ${ae(b.activeMatch,Y.srvTeam,Y.srvPlayer)}`),O()}break;case"open-edit-names":a.menuOpen=!1,a.editNamesOpen=!0,O();break;case"save-edit-names":if(b.activeMatch){for(let v=0;v<2;v++){const G=(Bn=document.getElementById(`ed-p-${v}-0`))==null?void 0:Bn.value.trim(),H=(Dn=document.getElementById(`ed-p-${v}-1`))==null?void 0:Dn.value.trim();b.activeMatch.teams[v].players[0]=G||(v===0?"DRIVE 1":"DRIVE 2"),b.activeMatch.teams[v].players[1]=H||(v===0?"REVÉS 1":"REVÉS 2")}a.editNamesOpen=!1,Me(),O()}break;case"finish-early":Kr();break;case"print-pdf":window.print();break;case"export-png":{const v=Zs();v&&$o(v);break}case"share-ranking":So();break;case"export-ranking-img":ko();break;case"save-ranking-name":{const v=document.getElementById("cfg-ranking-name");r.rankingName=(v==null?void 0:v.value.trim())||"Mi Ranking",J(ke,r),D("Nombre de ranking guardado"),O();break}case"prompt-ranking-name":{const v=prompt("Nombre de tu Cuenta / Ranking / Club:",r.rankingName||"Mi Ranking");v!==null&&(r.rankingName=v.trim()||"Mi Ranking",J(ke,r),D("Nombre de ranking actualizado"),O());break}case"copy-ranking-id":{const v=`#${r.rankingId}`;navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(v).then(()=>D(`ID copiado: ${v}`)).catch(()=>prompt("Copiá tu ID de cuenta:",v)):prompt("Copiá tu ID de cuenta:",v);break}case"regen-ranking-id":confirm("¿Generar un nuevo ID único de cuenta? Los enlaces ya compartidos mantendrán el anterior.")&&(r.rankingId=Uo(),J(ke,r),O(),D(`Nuevo ID generado: #${r.rankingId}`));break;case"clear-shared-ranking":a.sharedRanking=null,zo("padel_shared_ranking"),a.playerRankingView="local",a.playerScope==="shared"&&(a.playerScope="daily"),O(),D("Ranking compartido cerrado");break;case"open-daily-ranking":a.playerScope="daily",a.playerRankingView="local",Ae("players");break;case"open-daily-pts":a.compModal="daily-pts",O();break;case"save-daily-pts":{const v=document.getElementById("dp-win"),G=document.getElementById("dp-loss");r.dailyWinPts=Math.max(0,Number(v==null?void 0:v.value)||0),r.dailyLossPts=Math.max(0,Number(G==null?void 0:G.value)||0),J(ke,r),a.compModal=null,O(),D("Puntaje del Día guardado");break}case"save-daily-pts-inline":{const v=document.getElementById("cfg-daily-win"),G=document.getElementById("cfg-daily-loss");r.dailyWinPts=Math.max(0,Number(v==null?void 0:v.value)||0),r.dailyLossPts=Math.max(0,Number(G==null?void 0:G.value)||0),J(ke,r),O(),D("Puntaje de Partido del Día actualizado");break}case"new-comp":Lo("create",ge.getAttribute("data-kind")||"league"),O();break;case"save-comp-modal":{Va();const v=a.compFormState;if(!v||!String(v.name||"").trim()){D("Ingresá un nombre para la competencia");return}const G=Date.now(),H=v.format==="proyecto_padel",Y=H?1:Number((jn=v.defaultRules)==null?void 0:jn.totalSets)||3,oe={...v.defaultRules||{},totalSets:Y,setsToWin:Math.floor(Y/2)+1,...H?{deuceRule:"golden"}:{}},Se=H?"individual":v.rankingMode,we=Number(v.winPts)||0,Be=Number.isFinite(Number(v.drawPts))?Number(v.drawPts):2,Et=Number(v.lossPts)||0,Ve=H?0:Number(v.setBonusPts)||0,At=H?Number.isFinite(Number(v.gameBonusPts))?Number(v.gameBonusPts):1:Number(v.gameBonusPts)||0;if(a.compModal==="edit"&&v.id){const be=K(v.id);be&&(be.kind=v.kind,be.name=v.name.trim(),be.format=v.format,be.rankingMode=Se,be.winPts=we,be.drawPts=Be,be.lossPts=Et,be.setBonusPts=Ve,be.gameBonusPts=At,be.numGroups=Number(v.numGroups)||2,be.advancePerGroup=Number(v.advancePerGroup)||2,be.defaultRules=oe,ce(),be.syncCode&&Bt(be,!1),a.compModal=null,O(),D("Competencia actualizada"))}else{const be={id:gt(v.kind==="tournament"?"trn":"lig"),kind:v.kind,name:v.name.trim(),format:v.format,rankingMode:Se,winPts:we,drawPts:Be,lossPts:Et,setBonusPts:Ve,gameBonusPts:At,numGroups:Number(v.numGroups)||2,advancePerGroup:Number(v.advancePerGroup)||2,defaultRules:oe,participants:[],fixtures:[],createdAt:G};b.competitionsList.unshift(be),ce(),Ho(1),a.compModal=null,a.route==="new"?(sa(be,null),J(ve,n),O()):(a.compId=be.id,a.compTab=H?"standings":"participants",Ae("comp-detail")),D(`${be.kind==="league"?"Liga":"Torneo"} creado`)}break}case"clear-picked-fixture":n.fixtureId="",J(ve,n),O();break;case"add-part":{const v=K(ge.getAttribute("data-comp"));if(!v)break;const G=((Nn=document.getElementById("part-color"))==null?void 0:Nn.value)||"#d4af37",H=((On=document.getElementById("part-group"))==null?void 0:On.value)||null;let Y=null;if(v.rankingMode==="individual"){const oe=(_n=document.getElementById("part-ind-name"))==null?void 0:_n.value.trim();if(!oe){D("Ingresá el nombre del jugador");break}v.participants=v.participants||[],Y={id:gt("pt"),type:"player",name:oe,color:G,group:H},v.participants.push(Y)}else{const oe=(Wn=document.getElementById("part-p0"))==null?void 0:Wn.value.trim(),Se=(Fn=document.getElementById("part-p1"))==null?void 0:Fn.value.trim();if(!oe&&!Se){D("Ingresá al menos un jugador de la pareja");break}v.participants=v.participants||[],Y={id:gt("pt"),type:"pair",players:[oe||"DRIVE",Se||"REVÉS"],color:G,group:H},v.participants.push(Y)}ce(),v.syncCode&&Y&&Xi(v,Y),O(),D("Inscripto agregado");break}case"gen-rr":{const v=K(ge.getAttribute("data-comp"));if(!v||(v.fixtures||[]).some(G=>G.matchId)&&!confirm("Ya hay partidos jugados en el fixture. ¿Regenerar todos los cruces?"))break;v.fixtures=ir(v,{doubleRound:v.format==="league_rr2"}),ce(),v.syncCode&&Bt(v,!0),O(),D(`${v.fixtures.length} cruces generados`);break}case"gen-groups":{const v=K(ge.getAttribute("data-comp"));if(!v||(v.fixtures||[]).some(H=>H.matchId)&&!confirm("Ya hay partidos jugados en grupos. ¿Re-sortear grupos y fixture?"))break;const G=Ni(v,v.numGroups||2);v.fixtures=G,ce(),v.syncCode&&Bt(v,!0),O(),D(`${G.length} partidos de grupos generados`);break}case"gen-bracket":{const v=K(ge.getAttribute("data-comp"));if(!v||(v.fixtures||[]).some(G=>G.matchId)&&!confirm("Ya hay partidos jugados en el cuadro. ¿Regenerar las llaves?"))break;v.fixtures=lr(v),kt(v),ce(),v.syncCode&&Bt(v,!0),O(),D("Cuadro eliminatorio generado");break}case"advance-playoffs":{const v=K(ge.getAttribute("data-comp"));if(!v||(v.fixtures||[]).some(H=>H.phase==="playoff"&&H.matchId)&&!confirm("Ya hay cruces jugados en Playoffs. ¿Regenerar llaves eliminatorias?"))break;Vi(v)?(v.syncCode&&Bt(v,!0),O(),D("Llaves eliminatorias creadas según la tabla")):D("Necesitás al menos 2 grupos con participantes para armar playoffs");break}case"open-add-fixture":a.compId=ge.getAttribute("data-comp")||a.compId,a.compModal="add-fixture",O();break;case"save-manual-fixture":{const v=K(ge.getAttribute("data-comp"));if(!v)break;const G=((Gn=document.getElementById("af-round"))==null?void 0:Gn.value.trim())||"Cruce";let H=null,Y=null;const oe=document.getElementById("af-sel0"),Se=document.getElementById("af-sel1");if(oe&&Se){if(oe.value===Se.value){D("Elegí dos parejas distintas");break}H=Tt((v.participants||[]).find(we=>we.id===oe.value)),Y=Tt((v.participants||[]).find(we=>we.id===Se.value))}else{const we=((qn=document.getElementById("af-t0p0"))==null?void 0:qn.value.trim())||"DRIVE 1",Be=((Vn=document.getElementById("af-t0p1"))==null?void 0:Vn.value.trim())||"REVÉS 1",Et=((zn=document.getElementById("af-t1p0"))==null?void 0:zn.value.trim())||"DRIVE 2",Ve=((Un=document.getElementById("af-t1p1"))==null?void 0:Un.value.trim())||"REVÉS 2";H={players:[we,Be],color:"#d4af37",label:ye(we,Be)},Y={players:[Et,Ve],color:"#2f8cff",label:ye(Et,Ve)}}if(H&&Y){v.fixtures=v.fixtures||[];const we={id:gt("fx"),phase:"manual",roundIdx:v.fixtures.length,roundLabel:G,slotIdx:v.fixtures.length,group:null,team0:H,team1:Y,source0:null,source1:null,matchId:null,winnerSide:null,isBye:!1};v.fixtures.push(we),ce(),v.syncCode&&Zi(v,we),a.compModal=null,O(),D("Cruce agregado")}break}case"open-preset-quick-score":Ds({mode:"preset"});break;case"open-comp-quick-score":Ds({mode:"comp-adhoc",compId:ge.getAttribute("data-comp")||a.compId});break;case"qs-add-set":a.quickScoreState&&a.quickScoreState.sets.length<5&&(ea(),a.quickScoreState.sets.push([null,null]),O());break;case"qs-toggle-manual-teams":a.quickScoreState&&a.quickScoreState.mode==="comp-adhoc"&&(ea(),a.quickScoreState.useManualTeams=!a.quickScoreState.useManualTeams,O());break;case"qs-clear-players":a.quickScoreState&&(ea(),a.quickScoreState.teams[0].players=["",""],a.quickScoreState.teams[1].players=["",""],a.quickScoreState.activeSlot=0,O());break;case"save-quick-score":{ea();const v=a.quickScoreState,G=ge.getAttribute("data-target")||(v==null?void 0:v.fixtureKey)||a.quickScoreFixtureId,[H,Y]=String(G||"").split(":"),oe=(v==null?void 0:v.mode)||(H&&Y?"fixture":"preset"),Se=oe==="fixture"?K(H):oe==="comp-adhoc"?K((v==null?void 0:v.compId)||H):(n.matchContext==="league"||n.matchContext==="tournament")&&n.compId?K(n.compId):null,we=Pe(Se),Be=!we&&!!((Hn=document.getElementById("qs-wo"))!=null&&Hn.checked),Et=((Jn=document.getElementById("qs-winner"))==null?void 0:Jn.value)||"auto";if(we&&oe==="comp-adhoc"){const je=[(Yn=(Qn=(Kn=v==null?void 0:v.teams)==null?void 0:Kn[0])==null?void 0:Qn.players)==null?void 0:Yn[0],(eo=(Zn=(Xn=v==null?void 0:v.teams)==null?void 0:Xn[0])==null?void 0:Zn.players)==null?void 0:eo[1],(so=(ao=(to=v==null?void 0:v.teams)==null?void 0:to[1])==null?void 0:ao.players)==null?void 0:so[0],(ro=(oo=(no=v==null?void 0:v.teams)==null?void 0:no[1])==null?void 0:oo.players)==null?void 0:ro[1]].map(pt=>String(pt||"").trim());if(je.some(pt=>!pt)){D("Ingresá o tocá los 4 nombres de los jugadores");break}if(new Set(je.map(pt=>pt.toUpperCase())).size<4){D("Cada uno de los 4 jugadores debe ser distinto");break}}const Ve=[];if(!Be){for(let je=1;je<=5;je++){const pt=document.getElementById(`qs-s${je}-0`),ys=document.getElementById(`qs-s${je}-1`),$s=pt==null?void 0:pt.value,Ss=ys==null?void 0:ys.value;$s!==""&&$s!==void 0&&Ss!==""&&Ss!==void 0&&Ve.push([Math.max(0,Number($s)||0),Math.max(0,Number(Ss)||0)])}if(!Ve.length){D(we?"Ingresá los games finales de ambas parejas":"Seleccioná al menos el resultado de un set o activá W.O.");break}}const At=Wi(Se,Ve,Et,Be);if(!At.ok){D(At.error);break}const be=At.winnerSide,vs=!!At.isDraw;let Yt=null;if(oe==="fixture"&&H&&Y)Yt=Ji(H,Y,Ve,be,Be);else if(oe==="comp-adhoc"&&Se&&v){if(!v.useManualTeams&&((io=v.selPartIds)!=null&&io[0])&&((lo=v.selPartIds)==null?void 0:lo[0])===((co=v.selPartIds)==null?void 0:co[1])){D("Elegí dos parejas distintas");break}Yt=Qs({comp:Se,stageLabel:v.stageLabel||"",teams:v.teams,setsArr:Ve,winnerSide:be,isDraw:vs,isWalkover:Be})}else{const je=n.matchContext||"daily";Yt=Qs({kind:je,comp:Se,fixtureId:Se&&n.fixtureId?n.fixtureId:"",stageLabel:(v==null?void 0:v.stageLabel)||n.stageLabel||"",teams:(v==null?void 0:v.teams)||n.teams,rules:n,setsArr:Ve,winnerSide:be,isDraw:vs,isWalkover:Be}),n.fixtureId="",J(ve,n)}if(a.compModal=null,a.quickScoreState=null,a.quickScoreFixtureId=null,oe==="preset"&&Yt){const je=He(Yt);je&&K(je)?(a.compId=je,a.compTab="standings",Ae("comp-detail")):(a.statsId=Yt.id,Ae("stats"))}else O();D(Be?"W.O. registrado":vs?"🤝 Empate guardado y ELO actualizado":"✓ Resultado guardado");break}case"share-comp-rank":{const v=K(a.compId);v&&So(Ro(v));break}case"export-comp-rank":{const v=K(a.compId);v&&ko(Ro(v));break}case"open-join-comp":a.compModal="join-comp",O();break;case"submit-join-comp":{const v=((uo=document.getElementById("join-comp-code"))==null?void 0:uo.value)||"";$r(v);break}case"share-comp-invite":{const v=K(a.compId);v&&al(v);break}case"dl-comp-qr":{const v=K(a.compId);v&&sl(v);break}case"republish-comp-sync":{const v=K(a.compId);v&&Ys(v).then(G=>{D(G?"✓ Datos publicados en la nube":"Guardado en cola: se enviará al reconectar"),O()});break}case"save-shared":a.sharedMatch&&(ht(a.sharedMatch),a.statsId=a.sharedMatch.id,D("Partido guardado en tu historial"),O());break;case"export-json":Ao({share:!1});break;case"share-json":Ao({share:!0});break;case"dismiss-backup-prompt":r.backupPromptDismissedAt=Date.now(),J(ke,r),O();break;case"install-pwa":cl();break;case"apply-sw-update":dl();break;case"save-sync-server":{const v=document.getElementById("cfg-sync-server"),G=String((v==null?void 0:v.value)||"").trim(),H=Da(G);if(G&&H===Vt&&!/^https:\/\/ntfy\.sh\/?$/i.test(G)){D("Ingresá una URL válida con https:// (o http://localhost)");return}if(r.syncServerUrl=H,J(ke,r),rs(),a.liveId){const Y=a.liveId;vn(),Ka(Y)}O(),D(`Servidor de sincronización: ${H}`);break}case"reset-sync-server":r.syncServerUrl=Vt,J(ke,r),rs(),O(),D("Servidor restablecido a https://ntfy.sh");break;case"clear-all-data":confirm("¿Seguro que querés borrar todos los partidos del historial?")&&(b.historyList=[],J(Pt,b.historyList),b.competitionsList.forEach(v=>kt(v)),ce(),D("Historial vaciado"),O());break;case"clear-all-comps":confirm("¿Seguro que querés borrar todas las Ligas y Torneos? (Los partidos del historial se conservarán)")&&(b.competitionsList=[],ce(),n.compId="",n.fixtureId="",J(ve,n),a.compId=null,D("Ligas y Torneos eliminados"),O());break;case"pc-download":Bi();break;case"pc-save":Di();break;case"pc-new-blank":wo(),a.playerCardAiBusy=!1,a.playerCardDraft=gs(),a.playerCardDraftDirty=!0,a.playerCardTouchDrag=!1,a.playerCardAiStatus="",a.playerCardAiText="",fe(!0),O();break;case"pc-clear-photo":{wo(),a.playerCardAiBusy=!1;const v=ue();v.origPhoto=null,v.cutoutPhoto=null,v.origHasAlpha=!1,v.zoom=1,v.offsetX=0,v.offsetY=0,a.playerCardDraftDirty=!0,a.playerCardTouchDrag=!1,a.playerCardAiStatus="",a.playerCardAiText="",fe(!0),O();break}case"pc-reset-frame":{const v=ue();v.zoom=1,v.offsetX=0,v.offsetY=0,a.playerCardDraftDirty=!0,fe(!0),O();break}case"pc-toggle-touch-drag":a.playerCardTouchDrag=!a.playerCardTouchDrag,O();break;case"pc-reset-logo2":{const v=Ct();v.logo2=St,v.logo2Disabled=!1,pa(),O(),D("Logo oficial PRO PÁDEL restaurado");break}}});document.addEventListener("input",e=>{const t=e.target;if(!t)return;const{ui:a,preset:n,prefs:r}=b;if(t.id==="pc-name"){ue().name=t.value,a.playerCardDraftDirty=!0,fe(),De();return}if(t.id==="pc-nick"){ue().nickname=t.value,a.playerCardDraftDirty=!0,fe(),De();return}if(t.id==="pc-cat"){ue().category=t.value,a.playerCardDraftDirty=!0,fe(),De();return}if(t.id==="pc-age"){ue().age=t.value,a.playerCardDraftDirty=!0,fe(),De();return}if(t.id==="pc-shot"){ue().bestShot=t.value,a.playerCardDraftDirty=!0,fe(),De();return}if(t.id==="pc-subtitle"){Ct().subTitle=t.value,De();return}if(t.id==="pc-zoom"){const s=Number(t.value)||1;ue().zoom=s;const o=document.getElementById("pc-zoom-val");o&&(o.textContent=Math.round(s*100)+"%"),a.playerCardDraftDirty=!0,fe(),De();return}if(t.id==="pc-offx"){const s=Number(t.value)||0;ue().offsetX=s;const o=document.getElementById("pc-offx-val");o&&(o.textContent=String(Math.round(s))),a.playerCardDraftDirty=!0,fe(),De();return}if(t.id==="pc-offy"){const s=Number(t.value)||0;ue().offsetY=s;const o=document.getElementById("pc-offy-val");o&&(o.textContent=String(Math.round(s))),a.playerCardDraftDirty=!0,fe(),De();return}if(t.hasAttribute("data-pname")){const[s,o]=(t.getAttribute("data-pname")||"").split(",").map(Number);n.teams[s].players[o]=t.value,J(ve,n);const i=document.getElementById("srv-chips-box");i&&i.querySelectorAll("[data-set-srv]").forEach(c=>{const[d,y]=(c.getAttribute("data-set-srv")||"").split(",").map(Number),S=n.teams[d].players[y]||(y===0?`DRIVE ${d+1}`:`REVÉS ${d+1}`);c.innerHTML=`<span class="dot"></span>${g(S)}`});return}if(t.hasAttribute("data-preset-txt")){const s=t.getAttribute("data-preset-txt");s&&(n[s]=t.value,J(ve,n));return}if(t.id==="cfg-ranking-name"){r.rankingName=t.value,J(ke,r);return}if(t.id==="hist-search-inp"){const s=t.selectionStart??t.value.length;a.histQuery=t.value,O();const o=document.getElementById("hist-search-inp");o&&(o.focus(),o.setSelectionRange(s,s));return}if(t.id&&t.id.startsWith("qs-")&&a.quickScoreState){const s=t.id.match(/^qs-s(\d+)-([01])$/);if(s){const o=Number(s[1])-1,i=Number(s[2]),l=t.value===""?null:Math.max(0,Number(t.value)||0),c=document.querySelector(`[data-qs-row="${o}:${i}"]`);c&&c.querySelectorAll&&c.querySelectorAll(".qs-g-pill").forEach(d=>{d.classList.toggle("on",l!==null&&Number(d.textContent)===l)})}is()}});document.addEventListener("change",e=>{var s,o;const t=e.target;if(!t)return;const{ui:a,preset:n,prefs:r}=b;if(t.id==="pc-photo-inp"&&t instanceof HTMLInputElement&&t.files&&t.files[0]){$i(t.files[0]),t.value="";return}if(t.id==="pc-logo1-inp"&&t instanceof HTMLInputElement&&t.files&&t.files[0]){xo(t.files[0],1),t.value="";return}if(t.id==="pc-logo2-inp"&&t instanceof HTMLInputElement&&t.files&&t.files[0]){xo(t.files[0],2),t.value="";return}if(t.id==="pc-subtitle"){Ct().subTitle=t.value,pa();return}if(t.id==="pc-show-brand"&&t instanceof HTMLInputElement){ue().showAppBrand=t.checked,a.playerCardDraftDirty=!0,fe(),De();return}if(t.hasAttribute("data-preset-bool")&&t instanceof HTMLInputElement){const i=t.getAttribute("data-preset-bool");i&&(n[i]=t.checked,J(ve,n));return}if(t.hasAttribute("data-pref-bool")&&t instanceof HTMLInputElement){const i=t.getAttribute("data-pref-bool");i&&(r[i]=t.checked,J(ke,r),Na(),i==="backupIncludeCards"&&O());return}if(t.getAttribute("data-act")==="sel-comp-for-new"){const i=K(t.value);i&&(sa(i,null),J(ve,n),O());return}if(t.hasAttribute("data-fill-pair-team")&&t.value){const i=Number(t.getAttribute("data-fill-pair-team")),[l,c]=t.value.split(":"),d=K(l),y=((d==null?void 0:d.participants)||[]).find(S=>S.id===c);y&&y.type==="pair"&&(n.teams[i].players=[((s=y.players)==null?void 0:s[0])||`DRIVE ${i+1}`,((o=y.players)==null?void 0:o[1])||`REVÉS ${i+1}`],y.color&&(n.teams[i].color=y.color),J(ve,n),O(),D(`Pareja ${i+1} cargada`));return}if(t.getAttribute("data-act")==="sel-rank-comp"){const i=K(t.value);i&&(i.kind==="league"?a.selectedLeagueId=i.id:a.selectedTournId=i.id,a.selectedGroupFilter="all",O());return}if(t.hasAttribute("data-set-part-group")){const[i,l]=(t.getAttribute("data-set-part-group")||"").split(":"),c=K(i),d=((c==null?void 0:c.participants)||[]).find(y=>y.id===l);c&&d&&(d.group=t.value||null,ce(),c.syncCode&&hr(c,"grp",l,d.group),O());return}if(t.id&&t.id.startsWith("qs-")&&a.quickScoreState){is();return}if(t.id==="imp-json-file"&&t instanceof HTMLInputElement&&t.files&&t.files[0]){const i=t.files[0];t.value="";const l=new FileReader;l.onload=()=>{typeof l.result=="string"&&ll(l.result)},l.readAsText(i)}});document.addEventListener("keydown",e=>{const t=e.target;if(t&&["INPUT","TEXTAREA","SELECT"].includes(t.tagName))return;const{ui:a,activeMatch:n,prefs:r}=b;if(a.shotSheet&&n){const s=a.shotSheet.team,o=1-s;if(e.key==="Escape"){a.shotSheet=null,O();return}if(e.key===" "||e.key==="Enter"){e.preventDefault(),he(s,"pt",null);return}if(e.key==="1"){he(s,"winner",[s,0]);return}if(e.key==="2"){he(s,"winner",[s,1]);return}if(e.key==="3"){he(s,"ue",[o,0]);return}if(e.key==="4"){he(s,"ue",[o,1]);return}if(e.key==="5"){he(s,"fe",[o,0]);return}if(e.key==="6"){he(s,"fe",[o,1]);return}return}if(a.changeoverOverlay&&(e.key===" "||e.key==="Enter"||e.key==="Escape")){e.preventDefault(),a.changeoverOverlay=null,O();return}if(a.route==="board"&&n){const s=e.key.toLowerCase();s==="1"||s==="a"||e.key==="ArrowLeft"||e.key==="ArrowUp"||e.key==="PageUp"?(e.preventDefault(),qs(0)):s==="2"||s==="l"||e.key==="ArrowRight"||e.key==="ArrowDown"||e.key==="PageDown"?(e.preventDefault(),qs(1)):s==="f"?(e.preventDefault(),fn()):s==="z"||e.key==="Backspace"?(e.preventDefault(),as()):s==="y"?(e.preventDefault(),mn()):s==="s"?(e.preventDefault(),gn()):s==="v"&&(e.preventDefault(),r.voice=!r.voice,J(ke,r),D(r.voice?"Voz activada":"Voz desactivada"),O())}});function Tr(){const{ui:e}=b,t=location.hash.slice(1);if(t==="obs"||t.startsWith("obs?")||t.startsWith("obs&")||t.startsWith("obs=")){let a="";if(t.startsWith("obs="))a=t.slice(4);else{const n=t.indexOf("?"),r=t.indexOf("&"),s=n>=0?t.slice(n+1):r>=0?t.slice(r+1):"",o=new URLSearchParams(s);a=o.get("v")||o.get("live")||o.get("code")||""}e.route="obs",a?Ka(a):O();return}if(t.startsWith("v=")){Ka(t.slice(2));return}if(t.startsWith("live=")){Ka(t.slice(5));return}if(t.startsWith("s=")){ni(t.slice(2));return}if(t.startsWith("r=")||t.startsWith("rk_id=")){const a=t.startsWith("r=")?t.slice(2):t.slice(6);ci(a);return}if(t.startsWith("c=")||t.startsWith("join=")){$r(t);return}if(t.startsWith("comp=")){const a=t.slice(5);if(K(a)){e.compId=a,e.route="comp-detail",O();return}}if(t.startsWith("share=")){const a=ls(t.slice(6));if(a){e.sharedMatch=a,e.statsId="shared",e.route="stats",O();return}}if(t.startsWith("rk=")||t.startsWith("ranking=")){const a=t.startsWith("rk=")?t.slice(3):t.slice(8),n=No(a);if(n&&Array.isArray(n.players)&&n.players.length){e.sharedRanking=n,J("padel_shared_ranking",n),er(n),e.playerRankingView="shared",e.playerScope="shared",e.route="players",O(),D(`📡 ${n.name||"Ranking"} (#${n.id||"RK"}) cargado`);return}}if(t==="display"){e.route="display",O();return}if(t==="cards"||t==="tarjetas"||t==="player-card"){e.route="player-card",O();return}["home","new","board","stats","history","players","competitions","comp-detail","player-card","settings"].includes(t)&&((t==="home"||t==="new")&&Xo(),e.route=t,O())}window.addEventListener("hashchange",Tr);let Ye=null;document.addEventListener("pointerdown",e=>{var r,s;const t=e.target,a=(r=t==null?void 0:t.closest)==null?void 0:r.call(t,"#pc-preview-canvas");if(!a||e.pointerType!=="mouse"&&!b.ui.playerCardTouchDrag)return;const n=ue();if(n.origPhoto){Ye={pointerId:e.pointerId,startX:e.clientX,startY:e.clientY,origX:Number(n.offsetX)||0,origY:Number(n.offsetY)||0,rectW:a.getBoundingClientRect().width||360},a.classList.add("dragging");try{(s=a.setPointerCapture)==null||s.call(a,e.pointerId)}catch{}}});document.addEventListener("pointermove",e=>{if(!Ye||e.pointerId!==Ye.pointerId)return;const t=ue(),a=1080/Ye.rectW,n=Math.max(-350,Math.min(350,Math.round(Ye.origX+(e.clientX-Ye.startX)*a))),r=Math.max(-350,Math.min(350,Math.round(Ye.origY+(e.clientY-Ye.startY)*a)));t.offsetX=n,t.offsetY=r;const s=document.getElementById("pc-offx"),o=document.getElementById("pc-offy"),i=document.getElementById("pc-offx-val"),l=document.getElementById("pc-offy-val");s&&(s.value=String(n)),o&&(o.value=String(r)),i&&(i.textContent=String(n)),l&&(l.textContent=String(r)),De()});function Mr(e){if(!Ye||e&&e.pointerId!==void 0&&e.pointerId!==Ye.pointerId)return;const t=document.getElementById("pc-preview-canvas");t&&t.classList.remove("dragging"),Ye=null,b.ui.playerCardDraftDirty=!0,fe()}document.addEventListener("pointerup",Mr);document.addEventListener("pointercancel",Mr);document.addEventListener("visibilitychange",()=>{if(document.visibilityState==="visible"&&Na(),document.hidden)return;const e=Gi();e&&fa(e,null,!1),(b.ui.route==="live"||b.ui.route==="obs")&&b.ui.liveId&&da(ja(b.ui.liveId))});pl();Qr();Tr();O();gi();Jr();Jo(!0);ul();
