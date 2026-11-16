(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function a(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=a(r);fetch(r.href,s)}})();const Rt=[{c:"#d4af37",f:"#080602",n:"Dorado"},{c:"#2f8cff",f:"#ffffff",n:"Azul"},{c:"#ff453a",f:"#ffffff",n:"Rojo"},{c:"#10b981",f:"#ffffff",n:"Verde"},{c:"#f59e0b",f:"#0f172a",n:"Ámbar"},{c:"#a855f7",f:"#ffffff",n:"Violeta"},{c:"#ec4899",f:"#ffffff",n:"Rosa"},{c:"#06b6d4",f:"#0f172a",n:"Cian"}],A={qr:'<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M7 17h.01M17 7h.01M7 7h.01M17 17h.01M10 10h4v4h-4z"/></svg>',home:'<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/></svg>',plus:'<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>',hist:'<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l3 2"/></svg>',users:'<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',gear:'<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9c.26.6.77 1.02 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',back:'<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>',undo:'<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 14 4 9l5-5"/><path d="M4 9h10.5a5.5 5.5 0 0 1 0 11H11"/></svg>',redo:'<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 14 5-5-5-5"/><path d="M20 9H9.5a5.5 5.5 0 0 0 0 11H13"/></svg>',swap:'<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m16 3 4 4-4 4"/><path d="M20 7H4"/><path d="m8 21-4-4 4-4"/><path d="M4 17h16"/></svg>',chart:'<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M7 16v-5"/><path d="M12 16V8"/><path d="M17 16v-3"/></svg>',vol:'<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>',mute:'<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>',mic:'<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="2" width="6" height="11" rx="3"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="22"/></svg>',tv:'<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="13" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>',dots:'<svg class="ic" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="5" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="12" cy="19" r="2"/></svg>',trophy:'<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>',share:'<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>',pdf:'<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="13" y2="17"/></svg>',img:'<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>',trash:'<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',play:'<svg class="ic" viewBox="0 0 24 24" fill="currentColor"><polygon points="6 4 20 12 6 20 6 4"/></svg>',full:'<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>',dl:'<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',up:'<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>',flag:'<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>',edit:'<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>',ball:'<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M5.6 5.6c3.5 3.5 3.5 9.3 0 12.8M18.4 5.6c-3.5 3.5-3.5 9.3 0 12.8"/></svg>',copy:'<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>',live:'<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="2"/><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"/></svg>',calendar:'<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',award:'<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>',check:'<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',idCard:'<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2.5"/><circle cx="9" cy="10" r="2.2"/><path d="M6.2 16.5c.6-1.9 2.2-2.7 2.8-2.7s2.2.8 2.8 2.7"/><path d="M14.5 9.5h4M14.5 13h4M14.5 16.5h2.5"/></svg>',camera:'<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>'},ns=`<svg class="logo-ic" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
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
</svg>`,zo='<svg class="sig-flourish" viewBox="0 0 120 18" fill="none"><path d="M2 13 C 32 3, 76 16, 118 5" stroke="url(#sig_g)" stroke-width="1.6" stroke-linecap="round"/><defs><linearGradient id="sig_g" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#d4af37" stop-opacity="0.15"/><stop offset="50%" stop-color="#ffe58f" stop-opacity="0.95"/><stop offset="100%" stop-color="#d4af37" stop-opacity="0.2"/></linearGradient></defs></svg>';function qr(){return`<div class="sig-sub"><span class="sig-name">Sairaf Engel</span>${zo}</div>`}function Ct(){return`<div class="sig-footer no-print"><span class="sig-name">Sairaf Engel</span>${zo}</div>`}function Me(e){return e&&JSON.parse(JSON.stringify(e))}function h(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]||t)}function zt(e){const t=Rt.find(a=>a.c.toLowerCase()===String(e).toLowerCase());return t?t.f:"#ffffff"}function X(e,t){var n;const a=(((n=e.teams[t])==null?void 0:n.players)||[]).filter(Boolean);return a.length?a.join(" · "):`Pareja ${t+1}`}function ae(e,t,a){var r,s,o,i;const n=(i=(o=(s=(r=e==null?void 0:e.teams)==null?void 0:r[t])==null?void 0:s.players)==null?void 0:o[a])==null?void 0:i.trim();return n||(a===0?`DRIVE ${t+1}`:`REVÉS ${t+1}`)}function Vt(e){var t;return((t=e==null?void 0:e.competition)==null?void 0:t.kind)||"daily"}function qe(e){var t;return((t=e==null?void 0:e.competition)==null?void 0:t.compId)||null}function Ba(e){const t=new Date(e||Date.now()),a=t.getFullYear(),n=String(t.getMonth()+1).padStart(2,"0"),r=String(t.getDate()).padStart(2,"0");return`${a}-${n}-${r}`}function da(e,t){const a=String(e||"").trim().toUpperCase(),n=String(t||"").trim().toUpperCase();return[a,n].sort().join(" || ")}function $e(e,t){return[String(e||"").trim(),String(t||"").trim()].filter(Boolean).join(" · ")}function zr(e,t){const a=Vt(e),n=qe(e);return n?(t||[]).filter(r=>qe(r)===n):a==="league"||a==="tournament"?(t||[]).filter(r=>Vt(r)===a&&!qe(r)):(t||[]).filter(r=>Vt(r)==="daily")}function Ut(e){const t=Math.max(0,Math.floor(e/1e3)),a=Math.floor(t/3600),n=Math.floor(t%3600/60),r=t%60;return a>0?`${a}:${String(n).padStart(2,"0")}:${String(r).padStart(2,"0")}`:`${String(n).padStart(2,"0")}:${String(r).padStart(2,"0")}`}function pn(e){const t=Math.round(e/6e4);if(t<60)return`${t} min`;const a=Math.floor(t/60),n=t%60;return`${a}h ${n}m`}function Wa(e){return new Date(e).toLocaleString("es-ES",{day:"2-digit",month:"short",hour:"2-digit",minute:"2-digit"})}function de(e,t){return t>0?Math.round(e*100/t):0}function Vr(e){return e===null||!Number.isFinite(e)||e<0?"—":e<1024*1024?Math.max(1,Math.round(e/1024))+" KB":(e/(1024*1024)).toFixed(1)+" MB"}const Qt="https://ntfy.sh",os=["winner","smash","volea","bandeja","bajada","dejada","passing","globo"];function Fa(e){const t=String(e||"").trim().replace(/\/+$/,"");if(!t)return Qt;try{const a=new URL(t);if(a.protocol==="https:"||a.protocol==="http:"&&(a.hostname==="localhost"||a.hostname==="127.0.0.1"))return a.origin+(a.pathname==="/"?"":a.pathname.replace(/\/+$/,""))}catch{}return Qt}function Ur(e){let t="";for(let a=0;a<e.length;a++)t+=String.fromCharCode(e[a]);return btoa(t).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function Hr(e){const t=String(e||"").trim().replace(/-/g,"+").replace(/_/g,"/"),a=atob(t),n=new Uint8Array(a.length);for(let r=0;r<a.length;r++)n[r]=a.charCodeAt(r);return n}function Da(e){const t=JSON.stringify(e),a=new TextEncoder().encode(t);return Ur(a)}function rs(e){const t=String(e||"").trim();if(!t)return null;const a=Hr(t),n=new TextDecoder().decode(a);return JSON.parse(n)}function Vo(e){try{const t={pt:0,winner:1,ue:2,fe:3,df:4},a=e.events||[];let n=!0;const r=[];for(let o=0;o<a.length;o++){const i=a[o],l=i.w===1?1:0,c=t[i.type||"pt"]||0,d=i.by?Number(i.by[0]):-1,g=i.by?Number(i.by[1]):-1,b=i.fs===!1?0:1,y=i.sub?Math.max(0,os.indexOf(i.sub)):0;if(d!==-1&&(d<0||d>1)||g!==-1&&(g<0||g>1)||y>8){n=!1;break}r.push(`${l}${c}${d<0?9:d}${g<0?9:g}${b}${y}`)}const s={id:e.id,ts:Date.now(),c:e.createdAt,d:e.durationMs,s:e.status,m:e.mode,cp:e.competition||null,ms:e.manualSets||null,mw:e.isDraw?"draw":e.manualWinner??null,drw:e.isDraw?1:0,wo:e.isWalkover?1:0,t:e.teams,r:e.rules,fs:e.firstServer,ss:e.secondServerIdx,fl:e.flipped?1:0,pf:e.pendingFault?1:0,e:n?r.join(""):a.map(o=>{const i=o.sub?os.indexOf(o.sub):0;return[o.w,t[o.type||"pt"]||0,o.by?o.by[0]:-1,o.by?o.by[1]:-1,o.fs===!1?0:1,i>0?i:0]})};return Da(s)}catch{return""}}function gs(e){try{const t=rs(e);if(!t)return null;const a=["pt","winner","ue","fe","df"];let n=[];if(Array.isArray(t.e))n=t.e;else if(typeof t.e=="string"&&t.e.length>=6)for(let r=0;r+6<=t.e.length;r+=6){const s=t.e;n.push([Number(s[r]),Number(s[r+1]),s[r+2]==="9"?-1:Number(s[r+2]),s[r+3]==="9"?-1:Number(s[r+3]),Number(s[r+4]),Number(s[r+5])])}return{id:t.id||"shared_"+(t.c||Date.now()),_ts:t.ts||0,createdAt:t.c||Date.now(),durationMs:t.d||0,status:t.s||"finished",mode:t.m||"doubles",competition:t.cp||null,manualSets:t.ms||null,manualWinner:t.mw??null,isDraw:!!(t.drw||t.mw==="draw"),isWalkover:!!t.wo,teams:t.t,rules:t.r,firstServer:t.fs||[0,0],secondServerIdx:t.ss??0,shotPrompt:!0,flipped:!!t.fl,pendingFault:!!t.pf,events:n.map(r=>({w:r[0],type:a[r[1]]||"pt",by:r[2]>=0?[r[2],r[3]]:null,fs:r[4]!==0,sub:r[5]&&r[5]>0&&os[r[5]]?os[r[5]]:null})),redoStack:[]}}catch{return null}}function Yt(e){return String(e||"default").replace(/^m_/,"").replace(/[^a-zA-Z0-9]/g,"").toLowerCase().slice(-6)||"padel1"}function Ga(e){return"padel_se_live_"+Yt(e)}function ja(e){if(!e)return"";const t=e.events&&e.events.length?e.events[e.events.length-1]:null;return[e.id,e.status,e.events?e.events.length:0,t?`${t.w}:${t.type}:${t.fs}:${t.sub||""}:${t.by?t.by.join(","):""}`:"",e.pendingFault?1:0,e.flipped?1:0,e.firstServer?e.firstServer.join(","):"",e.secondServerIdx??"",e.teams?e.teams.map(a=>a.players.join(",")+":"+a.color).join("|"):"",e.rules?`${e.rules.totalSets}:${e.rules.gamesPerSet}:${e.rules.deuceRule}:${e.rules.finalSet}:${e.rules.changeoverRule}`:""].join("#")}function xt(e){return String(e||"").toUpperCase().replace(/[^A-Z0-9]/g,"").slice(0,12)}function Uo(){const e="23456789ABCDEFGHJKLMNPQRSTUVWXYZ";let t="";for(let a=0;a<6;a++)t+=e.charAt(Math.floor(Math.random()*e.length));return t}function fn(e){const t=xt(e).toLowerCase();return t?"padel_se_comp_"+t:""}function Vs(e){try{return"PCS1:"+Da(e)}catch{return""}}function mn(e){try{const t=String(e||"").trim();return t?t.startsWith("PCS1:")?rs(t.slice(5)):t.startsWith("{")?JSON.parse(t):rs(t):null}catch{return null}}function Ft(e,t=null){const a=t!==null?t:e.fixtures||[];return{v:1,id:e.id,sc:e.syncCode,c:{k:e.kind,n:e.name,f:e.format,rm:e.rankingMode,w:e.winPts,dp:e.drawPts,l:e.lossPts,sb:e.setBonusPts,gb:e.gameBonusPts,ng:e.numGroups,ag:e.advancePerGroup,...e.courtsCount?{cc:e.courtsCount}:{},...e.status==="finished"?{st:"finished",fa:e.finishedAt||0}:{},dr:e.defaultRules},pt:e.participants||[],fx:a.map(n=>{var r;return{id:n.id,ph:n.phase,ri:n.roundIdx,rl:n.roundLabel,si:n.slotIdx,g:n.group||null,...n.court?{ct:n.court}:{},...(r=n.resting)!=null&&r.length?{rp:n.resting}:{},t0:n.team0||null,t1:n.team1||null,s0:n.source0||null,s1:n.source1||null,ib:n.isBye?1:0}})}}function is(e){return(e||[]).map(t=>({id:String(t.id),phase:t.ph||t.phase||"league",roundIdx:Number(t.ri??t.roundIdx)||0,roundLabel:t.rl||t.roundLabel||"Cruce",slotIdx:Number(t.si??t.slotIdx)||0,group:t.g??t.group??null,...t.ct!==void 0&&t.ct!==null?{court:Number(t.ct)}:t.court?{court:Number(t.court)}:{},...Array.isArray(t.rp)?{resting:t.rp}:Array.isArray(t.resting)?{resting:t.resting}:{},team0:t.t0||t.team0||null,team1:t.t1||t.team1||null,source0:t.s0||t.source0||null,source1:t.s1||t.source1||null,matchId:null,winnerSide:t.ib?t.t0?0:t.t1?1:null:null,isBye:!!(t.ib||t.isBye)}))}function Jr(e){try{if(!e)return"";const t=Da(Ft(e));if(t.length<=720)return t;const a=Da(Ft(e,[]));return a.length<=720?a:""}catch{return""}}function Kr(e,t=null,a={}){try{const n=(t==null?void 0:t.id)||a.id||"RK-OFFICIAL",r=(t==null?void 0:t.title)||a.name||"Mi Ranking",s={v:2,id:n,n:r,sub:(t==null?void 0:t.subtitle)||"",em:(t==null?void 0:t.entityMode)||"individual",pm:(t==null?void 0:t.primaryMetric)||"pts",t:Date.now(),p:(e||[]).map(o=>[o.name,o.elo,o.wins,o.matches,o.lastDelta||0,o.color||"#d4af37",o.winners||0,o.ue||0,o.firstServeIn||0,o.srvPtsTotal||0,o.srvPtsWon||0,o.finishedMatches||o.matches||0,o.pts||0,o.losses||0,o.setsDiff||0,o.gamesDiff||0,o.gamesWon||0,o.draws||0,o.gamesLost||0])};return Da(s)}catch{return""}}function Ho(e){try{const t=rs(e);if(!t||!Array.isArray(t.p))return null;const a=t.p.map(n=>({name:String(n[0]||"Jugador"),key:String(n[0]||"Jugador").toUpperCase(),elo:Number(n[1])||1e3,wins:Number(n[2])||0,matches:Number(n[3])||0,lastDelta:Number(n[4])||0,color:String(n[5]||"#d4af37"),winners:Number(n[6])||0,ue:Number(n[7])||0,fe:0,shots:{},firstServeIn:Number(n[8])||0,srvPtsTotal:Number(n[9])||0,srvPtsWon:Number(n[10])||0,finishedMatches:Number(n[11])||Number(n[3])||0,pts:n[12]!==void 0?Number(n[12]):(Number(n[2])||0)*3,losses:n[13]!==void 0?Number(n[13]):Math.max(0,(Number(n[3])||0)-(Number(n[2])||0)),setsDiff:Number(n[14])||0,gamesDiff:Number(n[15])||0,gamesWon:Number(n[16])||0,draws:Number(n[17])||0,gamesLost:Number(n[18])||0,setsWon:0,setsLost:0,doubleFaults:0}));return{version:t.v||1,id:t.id||"RK-EXT",name:t.n||"Ranking Compartido",subtitle:t.sub||"",entityMode:t.em||"individual",primaryMetric:t.pm||"pts",timestamp:t.t||Date.now(),players:a}}catch{return null}}function Qr(e,t=null){var d,g,b,y;const a=e.teams[0],n=e.teams[1],r=[((d=a.players[0])==null?void 0:d.trim())||"DRIVE 1",((g=a.players[1])==null?void 0:g.trim())||"REVÉS 1"],s=[((b=n.players[0])==null?void 0:b.trim())||"DRIVE 2",((y=n.players[1])==null?void 0:y.trim())||"REVÉS 2"],o=e.firstServer||[0,0],i=Math.max(1,Number(e.totalSets)||(e.setsToWin?Number(e.setsToWin)*2-1:3)),l=Math.floor(i/2)+1,c=e.matchContext||"daily";return{id:Math.random().toString(36).slice(2,5)+Date.now().toString(36).slice(-3),createdAt:Date.now(),durationMs:0,status:"playing",mode:"doubles",competition:{kind:t?t.kind:c,compId:t?t.id:null,compName:t?t.name:"",fixtureId:e.fixtureId||null,stageLabel:(e.stageLabel||"").trim()},teams:[{players:r,color:a.color||"#d4af37"},{players:s,color:n.color||"#2f8cff"}],rules:{totalSets:i,setsToWin:l,gamesPerSet:Math.max(1,Number(e.gamesPerSet)||6),deuceRule:e.deuceRule||"golden",tiebreakAt:e.tiebreakAt!==void 0?Number(e.tiebreakAt):Math.max(1,Number(e.gamesPerSet)||6),tiebreakPoints:Math.max(1,Number(e.tiebreakPoints)||7),finalSet:e.finalSet||"normal",changeoverRule:e.changeoverRule||"odd"},firstServer:[o[0]||0,o[1]||0],secondServerIdx:e.secondServerIdx??null,shotPrompt:e.shotPrompt!==void 0?!!e.shotPrompt:!0,flipped:!1,pendingFault:!1,events:[],redoStack:[]}}function Yr(e){const t=e.firstServer[0],a=e.firstServer[1]||0,n=1-a,r=1-t,s=e.secondServerIdx??0,o=1-s;return[[t,a],[r,s],[t,n],[r,o]]}function wo(e,t,a,n){const r=["0","15","30","40"];return e<3||t<3?`${r[Math.min(e,3)]}-${r[Math.min(t,3)]}`:e===t?a==="star"&&n>=3?"40-40 ★":"40-40":e>t?"AD-40":"40-AD"}function ko(e,t,a,n,r){const s=e===0?t:a,o=e===0?a:t;return o<3?!1:s<3?!0:n==="golden"?s===3&&o===3:n==="star"&&s===o&&r>=3||o>s}function xo(e,t,a,n){return e<3||t<3||e!==t?!1:a==="golden"||a==="star"&&n>=3}function Po(e,t,a,n){return a==="star"&&e>=3&&t>=3&&e===t&&n>=3}function Co(e,t,a,n,r,s,o,i){const l=e.rules,c=1-i,d=i===0?s:o,g=i===0?o:s;if(r)return d>=9&&d-g>=1;if(n){const x=l.tiebreakPoints||7;return d>=x-1&&d-g>=1}const b=a.games[i]+1,y=a.games[c],k=l.gamesPerSet||6;return!(b>=k&&b-y>=2)||d<3?!1:g<3?!0:l.deuceRule==="golden"?d===3&&g===3:l.deuceRule==="star"&&d===g&&t.deuceCount>=3?!0:d>g}function Ie(e){if(Array.isArray(e.manualSets)&&e.manualSets.length||e.manualWinner!==void 0&&e.manualWinner!==null||e.isDraw){const q=(Array.isArray(e.manualSets)?e.manualSets:[]).map(Z=>{const xe=Number(Z[0])||0,be=Number(Z[1])||0,ht=Z[2]!==void 0&&Z[2]!==null&&Z[2]!=="draw"?Number(Z[2]):xe>be?0:be>xe?1:null;return{games:[xe,be],history:[],winner:ht,tbScore:Z[3]||null,isSuperTB:!!Z[4]}}),V=[q.filter(Z=>Z.winner===0).length,q.filter(Z=>Z.winner===1).length],H=!!(e.isDraw||e.manualWinner==="draw"),ie=H?null:e.manualWinner!==void 0&&e.manualWinner!==null&&e.manualWinner!=="draw"?Number(e.manualWinner):V[0]>V[1]?0:V[1]>V[0]?1:null,ee=Math.max(0,q.length-1);return{sets:q,curSetIdx:ee,curSet:q[ee]||{games:[0,0],history:[],winner:null,tbScore:null,isSuperTB:!1},setsWon:V,matchWinner:ie,isDraw:H,p:[0,0],pointDisplay:["0","0"],srvTeam:0,srvPlayer:0,srvSide:null,srvSideLabel:"",isTB:!1,isSuperTB:!1,isGP:!1,isStar:!1,curDeuceCount:0,curAdvNumber:0,isBP:!1,sp:[!1,!1],mp:[!1,!1],curGamePoints:[],allPoints:[],totalGamesPlayed:q.reduce((Z,xe)=>Z+xe.games[0]+xe.games[1],0),lastTransition:null}}const t=e.rules,a=Yr(e);let n=0;const r=[{games:[0,0],history:[],winner:null,tbScore:null,isSuperTB:!1}];let s=0;const o=[0,0];let i=null,l=[0,0],c=0,d=[],g=0;const b=[];function y(q){if(t.finalSet!=="supertb")return!1;const V=t.totalSets||t.setsToWin*2-1;return V>1&&q===V-1&&o[0]===o[1]}function k(q){if(q.isSuperTB)return!0;const V=t.tiebreakAt;return!V||V<=0?!1:q.games[0]===V&&q.games[1]===V}function P(q,V){if(!q||V===0)return a[n%4];const H=Math.floor((V+1)/2);return a[(n+H)%4]}let x=null;for(let q=0;q<e.events.length&&i===null;q++){const V=e.events[q],H=r[s];H.isSuperTB=y(s);const ie=H.isSuperTB,ee=k(H),Z=l[0]+l[1],xe=P(ee,Z),be=xe[0],ht=xe[1];l[0]>=3&&l[1]>=3&&l[0]===l[1]&&!ee&&(l[0]===3?c=1:c++);const ea=ee?`${l[0]}-${l[1]}`:wo(l[0],l[1],t.deuceRule,c),it=!ee&&xo(l[0],l[1],t.deuceRule,c),tt=!ee&&Po(l[0],l[1],t.deuceRule,c),Ke=!ee&&ko(be,l[0],l[1],t.deuceRule,c),vt=!ee&&(Ke||l[0]>=2&&l[1]>=2),Pe=V.w,lt=[l[0],l[1]];l[Pe]++;const ta=ee?`${l[0]}-${l[1]}`:wo(l[0],l[1],t.deuceRule,c),ct={idx:q,setIdx:s,gameIdx:H.history.length,w:Pe,srvTeam:be,srvPlayer:ht,firstServeIn:V.fs!==!1,doubleFault:V.type==="df",shotType:V.type||"pt",subType:V.sub||null,byPlayer:V.by||null,scoreBefore:ea,scoreAfter:ta,pBefore:lt,isTB:ee,isSuperTB:ie,isGP:it,isStar:tt,isBP:Ke,isKey:vt};d.push(ct),b.push(ct);let Ce=null;if(ee){const Q=ie?10:t.tiebreakPoints||7;l[Pe]>=Q&&l[Pe]-l[1-Pe]>=2&&(Ce=Pe)}else(it||l[Pe]>=4&&l[Pe]-l[1-Pe]>=2)&&(Ce=Pe);if(x=null,Ce!==null){const Q=!ee&&Ce!==be;H.games[Ce]++;const te=[H.games[0],H.games[1]],se={setIdx:s,gameIdx:H.history.length,srvTeam:be,srvPlayer:ht,winner:Ce,isBreak:Q,isTB:ee,isSuperTB:ie,tbScore:ee?[l[0],l[1]]:null,gamesAfter:te,points:d};H.history.push(se),g++,n=(n+1)%4;const ye=t.gamesPerSet||6;let le=null;if(ee?(le=Ce,H.tbScore=[l[0],l[1]]):H.games[Ce]>=ye&&H.games[Ce]-H.games[1-Ce]>=2&&(le=Ce),l=[0,0],c=0,d=[],le!==null){H.winner=le,o[le]++;const re=t.changeoverRule||"odd",Qe=H.games[0]+H.games[1],Ye=re==="set"?!0:re==="odd"?Qe%2===1:!1,Nt=t.totalSets||t.setsToWin*2-1;if(o[le]>=t.setsToWin||o[0]+o[1]>=Nt)i=o[0]>=o[1]?0:1,x={type:"match",winner:i,setIdx:s};else{const yt=s;s++,r.push({games:[0,0],history:[],winner:null,tbScore:null,isSuperTB:y(s)}),x={type:"set",winner:le,setIdx:yt,changeover:Ye}}}else{const re=t.changeoverRule||"odd",Qe=H.games[0]+H.games[1],Ye=g===1&&e.secondServerIdx===null;x={type:"game",winner:Ce,wasBreak:Q,changeover:re==="odd"&&Qe%2===1,needSecondServerPrompt:Ye}}}else if(ee&&(t.changeoverRule||"odd")==="odd"){const Q=l[0]+l[1];Q>0&&Q%6===0&&(x={type:"tb_changeover",tbScore:[l[0],l[1]]})}}const S=r[s];S.isSuperTB=y(s);const m=S.isSuperTB,T=k(S),I=P(T,l[0]+l[1]),B=I[0],M=I[1];let L=c,O=0;!T&&l[0]>=3&&l[1]>=3&&(l[0]===l[1]?L=l[0]-3+1:O=Math.min(l[0],l[1])-3+1);const F=!T&&xo(l[0],l[1],t.deuceRule,L),G=!T&&Po(l[0],l[1],t.deuceRule,L),E=!T&&ko(B,l[0],l[1],t.deuceRule,L),p=Co(e,{deuceCount:L},S,T,m,l[0],l[1],0),u=Co(e,{deuceCount:L},S,T,m,l[0],l[1],1),f=p&&o[0]===t.setsToWin-1,w=u&&o[1]===t.setsToWin-1;let C=["0","0"];if(T)C=[String(l[0]),String(l[1])];else{const q=["0","15","30","40"];l[0]<3||l[1]<3?C=[q[Math.min(l[0],3)],q[Math.min(l[1],3)]]:l[0]===l[1]?C=G?["40 ★","40 ★"]:["40","40"]:l[0]>l[1]?C=["AD","40"]:C=["40","AD"]}const R=i!==null?null:(l[0]+l[1])%2===0?"D":"R";return{sets:r,curSetIdx:s,curSet:S,setsWon:o,matchWinner:i,isDraw:!1,p:l,pointDisplay:C,srvTeam:B,srvPlayer:M,srvSide:R,srvSideLabel:R==="D"?"Derecha":R==="R"?"Revés":"",isTB:T,isSuperTB:m,isGP:F,isStar:G,curDeuceCount:L,curAdvNumber:O,isBP:E,sp:[p,u],mp:[f,w],curGamePoints:d,allPoints:b,totalGamesPlayed:g,lastTransition:x}}function bs(e,t="all"){const a=Ie(e),n=t==="all"?null:Number(t),r=a.allPoints.filter(S=>n===null||S.setIdx===n),s=[];a.sets.forEach((S,m)=>{(n===null||m===n)&&S.history.forEach(T=>s.push(T))});const o=[0,1].map(()=>({ptsWon:0,winners:0,ue:0,fe:0,shots:{smash:0,volea:0,bandeja:0,bajada:0,dejada:0,passing:0,globo:0,otro:0},srvPtsWon:0,srvPtsTotal:0,retPtsWon:0,retPtsTotal:0,firstServeIn:0,doubleFaults:0,bpWon:0,bpTotal:0,bpSaved:0,bpFaced:0,gpWon:0,gpTotal:0,gpSrvWon:0,gpSrvTotal:0,gpRetWon:0,gpRetTotal:0,keyWon:0,keyTotal:0,maxPtStreak:0,gamesWon:0,srvGamesWon:0,srvGamesTotal:0,maxGameStreak:0})),i={};for(let S=0;S<2;S++)for(let m=0;m<2;m++)i[`${S}_${m}`]={team:S,playerIdx:m,name:ae(e,S,m),color:e.teams[S].color,winners:0,ue:0,fe:0,shots:{smash:0,volea:0,bandeja:0,bajada:0,dejada:0,passing:0,globo:0,otro:0},srvPtsTotal:0,srvPtsWon:0,firstServeIn:0,doubleFaults:0,srvGamesWon:0,srvGamesTotal:0};!r.length&&e.manualPlayerStats&&Object.entries(e.manualPlayerStats).forEach(([S,m])=>{if(i[S]&&m){const T=i[S].team;i[S].winners=Number(m.w)||0,i[S].ue=Number(m.u)||0,i[S].fe=Number(m.f)||0,i[S].srvPtsTotal=Number(m.st)||0,i[S].srvPtsWon=Number(m.sw)||0,i[S].firstServeIn=Number(m.fs)||0,i[S].doubleFaults=Number(m.df)||0,m.sh&&Object.assign(i[S].shots,m.sh),o[T].winners+=i[S].winners,o[T].ue+=i[S].ue,o[T].fe+=i[S].fe,o[T].srvPtsTotal+=i[S].srvPtsTotal,o[T].srvPtsWon+=i[S].srvPtsWon,o[T].firstServeIn+=i[S].firstServeIn,o[T].doubleFaults+=i[S].doubleFaults}});const l=[0,0],c=[0],d=[];let g=0;r.forEach((S,m)=>{S.setIdx!==g&&m>0&&(d.push(m),g=S.setIdx);const T=S.w,I=1-T;o[T].ptsWon++,l[T]++,l[I]=0,l[T]>o[T].maxPtStreak&&(o[T].maxPtStreak=l[T]),c.push(c[c.length-1]+(T===0?1:-1));const B=S.srvTeam,M=1-B,L=`${B}_${S.srvPlayer}`,O=i[L];if(o[B].srvPtsTotal++,o[M].retPtsTotal++,O&&O.srvPtsTotal++,S.doubleFault?(o[B].doubleFaults++,O&&O.doubleFaults++):S.firstServeIn&&(o[B].firstServeIn++,O&&O.firstServeIn++),T===B?(o[B].srvPtsWon++,O&&O.srvPtsWon++):o[M].retPtsWon++,S.shotType==="winner"){const F=S.byPlayer?S.byPlayer[0]:T,G=S.byPlayer?S.byPlayer[1]:0;o[F].winners++;const E=`${F}_${G}`,p=S.subType&&["smash","volea","bandeja","bajada","dejada","passing","globo"].includes(S.subType)?S.subType:S.subType==="winner"?"otro":S.subType||"otro";o[F].shots[p]=(o[F].shots[p]||0)+1,i[E]&&(i[E].winners++,i[E].shots[p]=(i[E].shots[p]||0)+1)}else if(S.shotType==="ue"){const F=S.byPlayer?S.byPlayer[0]:I,G=S.byPlayer?S.byPlayer[1]:0;o[F].ue++;const E=`${F}_${G}`;i[E]&&i[E].ue++}else if(S.shotType==="fe"){const F=S.byPlayer?S.byPlayer[0]:I,G=S.byPlayer?S.byPlayer[1]:0;o[F].fe++;const E=`${F}_${G}`;i[E]&&i[E].fe++}else S.shotType==="df"&&(o[B].ue++,O&&O.ue++);S.isBP&&(o[M].bpTotal++,o[B].bpFaced++,T===M?o[M].bpWon++:o[B].bpSaved++),S.isGP&&(o[0].gpTotal++,o[1].gpTotal++,o[T].gpWon++,o[B].gpSrvTotal++,o[M].gpRetTotal++,T===B?o[B].gpSrvWon++:o[M].gpRetWon++),S.isKey&&(o[0].keyTotal++,o[1].keyTotal++,o[T].keyWon++)});const b=[0,0];s.forEach(S=>{const m=S.winner,T=1-m;if(o[m].gamesWon++,b[m]++,b[T]=0,b[m]>o[m].maxGameStreak&&(o[m].maxGameStreak=b[m]),!S.isTB){const I=S.srvTeam;o[I].srvGamesTotal++;const B=`${I}_${S.srvPlayer}`;i[B]&&i[B].srvGamesTotal++,m===I&&(o[I].srvGamesWon++,i[B]&&i[B].srvGamesWon++)}});const y=[],k=X(e,0),P=X(e,1),x=o[0].ptsWon+o[1].ptsWon;if(x>0){if(o[0].bpTotal+o[1].bpTotal>0){const M=o[1].bpWon>o[0].bpWon?1:0,L=1-M,O=M===0?k:P,F=L===0?k:P;y.push(`Los breaks marcaron la diferencia: ${O} convirtió ${o[M].bpWon} de ${o[M].bpTotal}, ${F} ${o[L].bpWon} de ${o[L].bpTotal}.`)}const S=o[1].bpSaved>=o[0].bpSaved?1:0;o[S].bpFaced>=2&&o[S].bpSaved>0&&y.push(`${S===0?k:P} salvó ${o[S].bpSaved} de ${o[S].bpFaced} bolas de break.`);const m=Math.abs(o[0].ptsWon-o[1].ptsWon);if(m===0)y.push(`Máxima igualdad: empate exacto a ${o[0].ptsWon} puntos ganados por pareja.`);else if(m<=6)y.push(`Solo ${m} ${m===1?"punto":"puntos"} de diferencia en todo el partido.`);else{const M=o[0].ptsWon>o[1].ptsWon?k:P;y.push(`${M} dominó el global con +${m} puntos de ventaja (${o[0].ptsWon} a ${o[1].ptsWon}).`)}if(o[0].gpTotal>0){const M=o[1].gpWon>=o[0].gpWon?1:0,L=e.rules.deuceRule==="star"?"Star Points (tras 2 ventajas)":"Puntos decisivos con 40-40";y.push(`${L}: ${M===0?k:P} ganó ${o[M].gpWon} de ${o[M].gpTotal}.`)}const T=Object.values(i);T.sort((M,L)=>L.winners-M.winners),T[0]&&T[0].winners>0&&y.push(`${T[0].name} hizo más ganadores que nadie: ${T[0].winners}.`);const I={smash:"smash / remates",volea:"voleas ganadoras",bandeja:"bandejas",bajada:"bajadas de pared",dejada:"dejadas",passing:"passings",globo:"globos ganadores"};T.forEach(M=>{const L=Object.entries(M.shots||{}).filter(([O,F])=>F>=2&&O!=="otro").sort((O,F)=>F[1]-O[1])[0];L&&y.push(`${M.name} se destacó en ataque con ${L[1]} ${I[L[0]]||L[0]}.`)});const B=o[1].maxPtStreak>=o[0].maxPtStreak?1:0;o[B].maxPtStreak>=3&&y.push(`Mejor racha del partido: ${o[B].maxPtStreak} puntos seguidos para ${B===0?k:P}.`)}return{st:a,T:o,P:Object.values(i),pts:r,games:s,momentum:c,setBoundaries:d,insights:y,totalPts:x}}const Na=1e3,Xr=50,Zr=32,Jo=10,ei=6,ti=1.2,ai=100;function fa(e){const t=Number(e)||Na;let a=2.5+(t-Na)/200;a=Math.max(1,Math.min(7,a));const n=Number(a.toFixed(2)),r=n.toFixed(2);let s="Iniciación",o="#94a3b8",i="🌱";return a>=6?(s="Pro / Élite",o="#ef4444",i="👑"):a>=5?(s="Competición",o="#a855f7",i="🏆"):a>=4?(s="Avanzado",o="#10b981",i="💎"):a>=3?(s="Intermedio",o="#f59e0b",i="⚡"):a>=2&&(s="Intermedio Bajo",o="#38bdf8",i="🔷"),{level:r,levelNum:n,tier:s,color:o,icon:i,elo:Math.round(t)}}function Us(e,t,a="individual"){var o,i,l,c,d,g,b,y,k,P,x,S,m,T;const n=e.mode==="singles"||!((l=(i=(o=e.teams)==null?void 0:o[0])==null?void 0:i.players)!=null&&l[1])&&!((g=(d=(c=e.teams)==null?void 0:c[1])==null?void 0:d.players)!=null&&g[1]);if(a==="pairs"){const I=ae(e,t,0).trim(),B=n?"":ae(e,t,1).trim(),M=n?I:$e(I,B),L=n?I.toUpperCase():da(I,B);return[{name:M,key:L,idx:0,color:((y=(b=e.teams)==null?void 0:b[t])==null?void 0:y.color)||"#d4af37",players:n?[I]:[I,B]}]}if(n){const I=ae(e,t,0).trim();return[{name:I,key:I.toUpperCase(),idx:0,color:((P=(k=e.teams)==null?void 0:k[t])==null?void 0:P.color)||"#d4af37",players:[I]}]}const r=ae(e,t,0).trim(),s=ae(e,t,1).trim();return[{name:r,key:r.toUpperCase(),idx:0,color:((S=(x=e.teams)==null?void 0:x[t])==null?void 0:S.color)||"#d4af37",players:[r]},{name:s,key:s.toUpperCase(),idx:1,color:((T=(m=e.teams)==null?void 0:m[t])==null?void 0:T.color)||"#d4af37",players:[s]}]}function Ko(e,t,a,n,r="individual"){const s=!!t.isDraw&&t.matchWinner===null,o=t.matchWinner??0,i=Us(e,0,r),l=Us(e,1,r),c=i.map(L=>a[L.key]??Na),d=l.map(L=>a[L.key]??Na),g=c.reduce((L,O)=>L+O,0)/c.length,b=d.reduce((L,O)=>L+O,0)/d.length,y=1/(1+Math.pow(10,(b-g)/400)),k=1-y,P=t.sets.reduce((L,O)=>L+(O.games?O.games[0]:0),0),x=t.sets.reduce((L,O)=>L+(O.games?O.games[1]:0),0),S=Math.abs(P-x),m=S>=ei,T=m?ti:1,I=s?.5:o===0?1:0,B=s?.5:o===1?1:0,M=(L,O,F,G)=>L.map((E,p)=>{const u=O[p],w=(n[E.key]||0)<Jo?Xr:Zr,C=e.isWalkover?0:w*T*(F-G);let R=0;e.isWalkover||(F===1?R=Math.max(1,Math.round(C)):F===0?R=Math.min(-1,Math.round(C)):R=Math.round(C));const j=Math.max(ai,u+R);return{name:E.name,key:E.key,eloBefore:u,delta:R,eloAfter:j,k:w}});return{matchId:e.id,winner:t.matchWinner,isDraw:s,diffGames:S,isBlowout:m,multiplier:T,pair0:{avgBefore:Math.round(g),expPct:Math.round(y*100),players:M(i,c,I,y)},pair1:{avgBefore:Math.round(b),expPct:Math.round(k*100),players:M(l,d,B,k)}}}function Qo(e=[],t={}){const a=t.entityMode||"individual",n={},r={},s={},o={},i={};return(e||[]).map(c=>({m:c,st:Ie(c)})).filter(({st:c})=>c.matchWinner!==null||c.isDraw).sort((c,d)=>(c.m.createdAt||0)-(d.m.createdAt||0)||String(c.m.id).localeCompare(String(d.m.id))).forEach(({m:c,st:d})=>{const g=Ko(c,d,n,r,a);c.isWalkover||[...g.pair0.players,...g.pair1.players].forEach(b=>{n[b.key]=b.eloAfter,r[b.key]=(r[b.key]||0)+1,s[b.key]=b.delta,o[b.key]||(o[b.key]=[]),o[b.key].push({matchId:c.id,delta:b.delta,newElo:b.eloAfter,date:c.createdAt})}),i[c.id]=g}),{playerRatings:n,playerMatchCount:r,playerLastDelta:s,playerHistory:o,matchEloMap:i}}function si(e,t=null,a={}){if(!e)return null;const n=a.entityMode||"individual",r=t?null:zr(e,a.allMatches||[]),s=t||Qo(r||[],{entityMode:n});if(s.matchEloMap[e.id])return s.matchEloMap[e.id];const o=Ie(e);return Ko(e,o,s.playerRatings,s.playerMatchCount,n)}function we(e){return(e==null?void 0:e.format)==="proyecto_padel"}function gn(e,t={}){if(!e)return{winPts:Number.isFinite(Number(t.winPts))?Number(t.winPts):3,lossPts:Number.isFinite(Number(t.lossPts))?Number(t.lossPts):1,drawPts:2,setBonusPts:0,gameBonusPts:0};const a=we(e);return{winPts:Number.isFinite(Number(e.winPts))?Number(e.winPts):3,lossPts:Number.isFinite(Number(e.lossPts))?Number(e.lossPts):1,drawPts:Number.isFinite(Number(e.drawPts))?Number(e.drawPts):2,setBonusPts:Number.isFinite(Number(e.setBonusPts))?Number(e.setBonusPts):0,gameBonusPts:Number.isFinite(Number(e.gameBonusPts))?Number(e.gameBonusPts):a?1:0}}function Hs(e,t=null,a=!1,n={}){const r=t||gn(e,n);if(we(e)||(r.gameBonusPts||0)>0)return a?`+${r.winPts}V / +${r.drawPts??2}E / +${r.lossPts}D · +${r.gameBonusPts}/g`:`ELO Principal · Sec: +${r.winPts}V / +${r.drawPts??2}E / +${r.lossPts}D + ${r.gameBonusPts}/game`;const s=r.setBonusPts?` · +${r.setBonusPts}/set`:"";return a?`+${r.winPts}V / +${r.lossPts}D${s}`:`+${r.winPts}V / +${r.lossPts}D${s} + ELO`}function Ms(e,t,a,n){return{name:e,key:t,color:a||"#d4af37",elo:n.playerRatings[t]??Na,lastDelta:n.playerLastDelta[t]??0,finishedMatches:n.playerMatchCount[t]??0,pts:0,matches:0,wins:0,draws:0,losses:0,setsWon:0,setsLost:0,setsDiff:0,gamesWon:0,gamesLost:0,gamesDiff:0,winners:0,ue:0,fe:0,shots:{smash:0,volea:0,bandeja:0,bajada:0,dejada:0,passing:0,globo:0},srvPtsWon:0,srvPtsTotal:0,firstServeIn:0,doubleFaults:0}}function Xt(e,t={}){const a=t.entityMode||"individual",n=Number.isFinite(Number(t.winPts))?Number(t.winPts):3,r=Number.isFinite(Number(t.lossPts))?Number(t.lossPts):1,s=Number.isFinite(Number(t.drawPts))?Number(t.drawPts):2,o=Number.isFinite(Number(t.setBonusPts))?Number(t.setBonusPts):0,i=Number.isFinite(Number(t.gameBonusPts))?Number(t.gameBonusPts):0,l=!!t.todayOnly,c=t.todayDateKey||Ba(Date.now()),d=Array.isArray(t.seedParticipants)?t.seedParticipants:[],g=t.eloBaseMatches||e,b=Qo(g,{entityMode:a}),y=new Map;d.forEach(S=>{var m,T;if(S)if(a==="pairs"&&S.type==="pair"){const I=(((m=S.players)==null?void 0:m[0])||"").trim(),B=(((T=S.players)==null?void 0:T[1])||"").trim();if(!I&&!B)return;const M=da(I,B),L=$e(I,B);y.has(M)||y.set(M,Ms(L,M,S.color,b))}else a==="individual"&&(S.type==="pair"?S.players||[]:[S.name]).forEach(B=>{const M=String(B||"").trim();if(!M)return;const L=M.toUpperCase();y.has(L)||y.set(L,Ms(M,L,S.color,b))})});const k=l?(e||[]).filter(S=>Ba(S.createdAt)===c):e||[],P={};k.forEach(S=>{const m=bs(S,"all"),T=m.st,I=T.matchWinner,B=!!T.isDraw&&I===null,M=I!==null||B,L=b.matchEloMap[S.id],O=[0,0],F=[0,0];T.sets.forEach(G=>{G.winner===0?O[0]++:G.winner===1&&O[1]++,G.games&&(F[0]+=Number(G.games[0])||0,F[1]+=Number(G.games[1])||0)}),l&&L&&[...L.pair0.players,...L.pair1.players].forEach(G=>{P[G.key]=(P[G.key]||0)+(G.delta||0)});for(let G=0;G<2;G++){const E=1-G;Us(S,G,a).forEach(u=>{if(!u.key)return;y.has(u.key)||y.set(u.key,Ms(u.name,u.key,u.color,b));const f=y.get(u.key);if(f.matches++,M){const C=O[G]*o+F[G]*i;B?(f.draws++,f.pts+=s+C):I===G?(f.wins++,f.pts+=n+C):(f.losses++,f.pts+=r+C)}f.setsWon+=O[G],f.setsLost+=O[E],f.setsDiff=f.setsWon-f.setsLost,f.gamesWon+=F[G],f.gamesLost+=F[E],f.gamesDiff=f.gamesWon-f.gamesLost,(a==="pairs"?m.P.filter(C=>C.team===G):m.P.filter(C=>C.team===G&&C.playerIdx===u.idx)).forEach(C=>{f.winners+=C.winners,f.ue+=C.ue,f.fe+=C.fe,C.shots&&Object.entries(C.shots).forEach(([R,j])=>{f.shots[R]=(f.shots[R]||0)+j}),f.srvPtsWon+=C.srvPtsWon,f.srvPtsTotal+=C.srvPtsTotal,f.firstServeIn+=C.firstServeIn,f.doubleFaults+=C.doubleFaults})})}});const x=Array.from(y.values());return l&&x.forEach(S=>{S.lastDelta=P[S.key]??0}),x}function bn(e,t,a,n=""){const r=e.kind==="league"?"Liga":"Torneo",s=t==="pairs"?"Parejas":"Individual";return we(e)?`PRO PÁDEL${n} · ${s} · ${Hs(e,a,!1)}`:`${r}${n} · ${s} · ${Hs(e,a,!1)}`}function Ht(e,t="pts",a={}){const n=[...e||[]];return t==="pts"?a.tiebreakMode==="games"?n.sort((r,s)=>(s.pts||0)-(r.pts||0)||(s.gamesWon||0)-(r.gamesWon||0)||(s.gamesDiff||0)-(r.gamesDiff||0)||(s.elo||0)-(r.elo||0)||s.wins-r.wins):n.sort((r,s)=>(s.pts||0)-(r.pts||0)||(s.setsDiff||0)-(r.setsDiff||0)||(s.gamesDiff||0)-(r.gamesDiff||0)||s.wins-r.wins||s.elo-r.elo):t==="elo"?n.sort((r,s)=>(s.elo||0)-(r.elo||0)||(s.pts||0)-(r.pts||0)||(s.gamesWon||0)-(r.gamesWon||0)||(s.gamesDiff||0)-(r.gamesDiff||0)||s.wins-r.wins||s.matches-r.matches):t==="wins"?n.sort((r,s)=>s.wins-r.wins||(s.pts||0)-(r.pts||0)||s.elo-r.elo||s.matches-r.matches):t==="matches"&&n.sort((r,s)=>s.matches-r.matches||s.wins-r.wins||(s.pts||0)-(r.pts||0)||s.elo-r.elo),n}function ua(e,t="pts",a={}){let n=1;for(let r=0;r<e.length;r++){if(r>0){const s=e[r-1],o=e[r];let i=!1;t==="pts"?i=a.tiebreakMode==="games"?(o.pts||0)===(s.pts||0)&&(o.gamesWon||0)===(s.gamesWon||0)&&(o.gamesDiff||0)===(s.gamesDiff||0)&&o.elo===s.elo:(o.pts||0)===(s.pts||0)&&(o.setsDiff||0)===(s.setsDiff||0)&&(o.gamesDiff||0)===(s.gamesDiff||0)&&o.wins===s.wins:t==="elo"?i=o.elo===s.elo&&(o.pts||0)===(s.pts||0)&&(o.gamesWon||0)===(s.gamesWon||0)&&(o.gamesDiff||0)===(s.gamesDiff||0):t==="wins"?i=o.wins===s.wins&&o.elo===s.elo:t==="matches"&&(i=o.matches===s.matches&&o.wins===s.wins),i||n++}e[r].rank=n}return e}let Is=null;function D(e){if(typeof document>"u")return;let t=document.getElementById("live-toast");t&&t.remove(),t=document.createElement("div"),t.id="live-toast",t.className="toast",t.textContent=e,document.body.appendChild(t),Is&&clearTimeout(Is),Is=setTimeout(()=>{t&&t.parentNode&&t.remove()},2400)}const at=()=>{},U={render:at,navigate:at,updateWakeLock:at,publishLiveMatchState:at,syncCompetitionForMatch:at,publishCompMatch:at,renderHomeSystemBanners:()=>"",afterRenderQR:at,ensureCompLiveWatcherForCurrentView:at,refreshPlayerCardPreview:at,openPlayerCardFor:at,loadPlayerCardLogosAndCards:()=>({logos:{logo1:null,logo2:null,logo2Disabled:!1,subTitle:""},cards:[],setLogos:async()=>{},saveCard:async()=>!1}),pollLiveChannelOnce:async()=>{},pollCompChannelOnce:async()=>({ok:!1,changed:!1,count:0}),resolveCompetitionFixtures:at},Lt="padel_se_active_v1",Bt="padel_se_hist_v1",Se="padel_se_prefs_v1",ve="padel_se_preset_v1",hs="padel_se_comps_v1",hn="padel_se_comp_outbox_v1",Js="padel_se_dev_id_v1",Yo="padel_se_meta_ts_v1",ni="padel_se_backup_db_v1",ma="kv",vs=new Set([Lt,Bt,Se,ve,hs,hn,Js,"padel_ranking_vault","padel_shared_ranking"]);try{typeof localStorage<"u"&&["padel_sb_active_v1","padel_sb_hist_v1","padel_sb_prefs_v1","padel_sb_preset_v1","padel_sb_seeded_v1"].forEach(e=>localStorage.removeItem(e))}catch{}const Xo={theme:"dark",sound:!0,voice:!1,vibrate:!0,shotPrompt:!0,changeoverAlerts:!0,changeoverTimer:90,wakeLock:!0,rankingName:"Mi Ranking",rankingId:"",dailyWinPts:3,dailyLossPts:1,syncServerUrl:Qt,backupIncludeCards:!0,lastBackupAt:0,changesSinceBackup:0,backupPromptDismissedAt:0},vn={mode:"doubles",matchContext:"daily",compId:"",fixtureId:"",stageLabel:"",teams:[{players:["",""],color:"#d4af37"},{players:["",""],color:"#2f8cff"}],totalSets:3,setsToWin:2,gamesPerSet:6,deuceRule:"golden",tiebreakAt:6,tiebreakPoints:7,finalSet:"normal",changeoverRule:"odd",firstServer:[0,0],secondServerIdx:null,shotPrompt:!0};function bt(){var e;return Fa(typeof $<"u"?(e=$.prefs)==null?void 0:e.syncServerUrl:Qt)}let na=null;const Xa=new Map;let Es=!1;function Zo(){return typeof indexedDB>"u"?Promise.resolve(null):na||(na=new Promise(e=>{try{const t=indexedDB.open(ni,1);t.onupgradeneeded=()=>{const a=t.result;a.objectStoreNames.contains(ma)||a.createObjectStore(ma,{keyPath:"key"})},t.onsuccess=()=>e(t.result),t.onerror=()=>{na=null,e(null)}}catch{na=null,e(null)}}),na)}function oi(){Es||(Es=!0,setTimeout(async()=>{if(Es=!1,!Xa.size)return;const e=Array.from(Xa.entries());Xa.clear();const t=await Zo();if(t)try{const n=t.transaction(ma,"readwrite").objectStore(ma);for(const[r,s]of e)s===null?n.delete(r):n.put({key:r,value:s.value,ts:s.ts})}catch{}},80))}function yn(e,t,a){!vs.has(e)||typeof indexedDB>"u"||(Xa.set(e,t===void 0?null:{value:Me(t),ts:a}),oi())}function er(){try{const e=localStorage.getItem(Yo);return e?JSON.parse(e):{}}catch{return{}}}function $n(e,t){try{const a=er();t===null?delete a[e]:a[e]=t,localStorage.setItem(Yo,JSON.stringify(a))}catch{}}function rt(e,t){try{const a=localStorage.getItem(e);if(!a)return Me(t);const n=JSON.parse(a);return n==null?Me(t):t&&typeof t=="object"&&!Array.isArray(t)?Object.assign({},t,n):n}catch{return Me(t)}}function Ks(e){try{const t=localStorage.getItem(e),a=t?JSON.parse(t):[];return Array.isArray(a)?a:[]}catch{return[]}}function K(e,t){const a=Date.now();yn(e,t,a);try{localStorage.setItem(e,JSON.stringify(t)),vs.has(e)&&$n(e,a)}catch(n){console.warn("Storage error",n),typeof $<"u"&&!$.ui.lsQuotaWarned&&($.ui.lsQuotaWarned=!0,D("⚠️ Memoria rápida llena · Respaldado en base interna; descargá un Backup JSON"))}}function tr(e){yn(e,void 0,Date.now());try{localStorage.removeItem(e),vs.has(e)&&$n(e,null)}catch{}}function ar(){const e="23456789ABCDEFGHJKLMNPQRSTUVWXYZ";let t="";for(let a=0;a<4;a++)t+=e.charAt(Math.floor(Math.random()*e.length));return"RK-"+t}function ga(e){if(e){for(let t=0;t<2;t++)if(!(!e[t]||!e[t].players))for(let a=0;a<2;a++){const n=e[t].players[a];/^jugador\s*[1-4]$/i.test((n==null?void 0:n.trim())||"")&&(e[t].players[a]=a===0?`DRIVE ${t+1}`:`REVÉS ${t+1}`)}}}const Zt=rt(Se,Xo);Zt.rankingId||(Zt.rankingId=ar());Zt.rankingName||(Zt.rankingName="Mi Ranking");Zt.syncServerUrl=Fa(Zt.syncServerUrl);const pt=rt(ve,vn);pt.totalSets||(pt.totalSets=pt.setsToWin?pt.setsToWin*2-1:3);pt.setsToWin=Math.floor(pt.totalSets/2)+1;pt&&pt.teams&&ga(pt.teams);const Za=rt(Lt,null);Za&&Za.teams&&ga(Za.teams);const ri=typeof window<"u"&&(window.matchMedia&&window.matchMedia("(display-mode: standalone)").matches||!!navigator.standalone),ii={route:"home",qrModalOpen:!1,obsModalOpen:!1,obsSelectedPos:"tl",statsId:null,sharedMatch:null,sharedRanking:rt("padel_shared_ranking",null),playerRankingView:"local",playerScope:"daily",dailyTimeFilter:"all",playerEntityMode:"individual",selectedLeagueId:null,selectedTournId:null,selectedGroupFilter:"all",playerSort:"pts",playerSortScope:null,compFilter:"all",compId:null,compTab:"standings",compModal:null,compFormState:null,quickScoreFixtureId:null,quickScoreState:null,compSyncConnected:{},compLastSyncAt:{},liveId:null,liveMatch:null,liveConnected:!1,statsSetFilter:"all",histQuery:"",histFilter:"all",shotSheet:null,menuOpen:!1,editNamesOpen:!1,secondSrvPrompt:!1,changeoverOverlay:null,setSummaryOverlay:null,matchEndDismissed:!1,voiceListening:!1,playerCardReturnRoute:"home",playerCardDraft:null,playerCardDraftDirty:!1,playerCardTouchDrag:!1,playerCardAiBusy:!1,playerCardAiStatus:"",playerCardAiText:"",isOnline:typeof navigator<"u"?navigator.onLine!==!1:!0,pwaInstallPrompt:null,pwaInstalled:ri,swStatus:typeof navigator<"u"&&"serviceWorker"in navigator&&typeof location<"u"&&location.protocol!=="file:"?"registering":"unsupported",swUpdateReady:!1,swRegistration:null,storagePersisted:null,storageUsageBytes:null,storageQuotaBytes:null,lsQuotaWarned:!1},$={prefs:Zt,preset:pt,activeMatch:Za,historyList:Ks(Bt),competitionsList:Ks(hs),ui:ii};K(Se,$.prefs);function ne(){K(hs,$.competitionsList)}function sr(e=1){$.prefs.changesSinceBackup=(Number($.prefs.changesSinceBackup)||0)+e,K(Se,$.prefs)}function J(e){return e&&$.competitionsList.find(t=>t.id===e)||null}function nt(e,t=!1){if(!e)return[];const a=$.historyList.filter(n=>qe(n)===e.id);return t&&$.activeMatch&&qe($.activeMatch)===e.id&&(a.some(n=>n.id===$.activeMatch.id)||a.unshift($.activeMatch)),a}function Dt(){try{let e=localStorage.getItem(Js);return e||(e="dev_"+Math.random().toString(36).slice(2,8),localStorage.setItem(Js,e)),e}catch{return $.prefs.rankingId||"dev_local"}}function ft(e){return gn(e,{winPts:$.prefs.dailyWinPts,lossPts:$.prefs.dailyLossPts})}function Sn(e,t=null,a=!1){return Hs(e,t,a,{winPts:$.prefs.dailyWinPts,lossPts:$.prefs.dailyLossPts})}function wn(e,t=null,a={}){return si(e,t,{entityMode:a.entityMode,allMatches:$.historyList})}async function li(){const e=await Zo();if(e)try{const a=e.transaction(ma,"readonly").objectStore(ma).getAll(),n=await new Promise(l=>{a.onsuccess=()=>l(Array.isArray(a.result)?a.result:[]),a.onerror=()=>l([])}),r=new Map(n.map(l=>[l.key,l])),s=er();let o=!1;const i=(l,c)=>{var d;l===Se&&c&&typeof c=="object"?($.prefs=Object.assign({},Xo,c),$.prefs.syncServerUrl=Fa($.prefs.syncServerUrl)):l===ve&&c&&typeof c=="object"?($.preset=Object.assign({},vn,c),ga($.preset.teams)):l===Lt?($.activeMatch=c||null,(d=$.activeMatch)!=null&&d.teams&&ga($.activeMatch.teams)):l===Bt&&Array.isArray(c)?$.historyList=c:l===hs&&Array.isArray(c)?$.competitionsList=c:l==="padel_shared_ranking"&&($.ui.sharedRanking=c||null);try{localStorage.setItem(l,JSON.stringify(c)),$n(l,Date.now())}catch{}};for(const l of vs){let c=null;try{c=localStorage.getItem(l)}catch{}const d=r.get(l);if(d&&(c===null||(Number(d.ts)||0)>(Number(s[l])||0)))i(l,d.value),o=!0;else if(!d&&c!==null)try{yn(l,JSON.parse(c),Number(s[l])||Date.now())}catch{}}o&&U.render()}catch{}}async function nr(e=!1){if(!(typeof navigator>"u"||!navigator.storage))try{if(typeof navigator.storage.persisted=="function"){let t=await navigator.storage.persisted();!t&&e&&typeof navigator.storage.persist=="function"&&(t=await navigator.storage.persist()),$.ui.storagePersisted=!!t}if(typeof navigator.storage.estimate=="function"){const t=await navigator.storage.estimate();$.ui.storageUsageBytes=Number(t==null?void 0:t.usage)||0,$.ui.storageQuotaBytes=Number(t==null?void 0:t.quota)||0}$.ui.route==="settings"&&U.render()}catch{}}const ls=typeof window<"u"&&"BroadcastChannel"in window?new BroadcastChannel("padel_sb_channel"):null;ls&&(ls.onmessage=e=>{e.data&&e.data.type==="sync"&&($.activeMatch=e.data.match,($.ui.route==="display"||$.ui.route==="board"||$.ui.route==="obs"||$.ui.route==="stats"&&$.ui.statsId==="active")&&U.render())});typeof window<"u"&&window.addEventListener("storage",e=>{e.key===Lt&&($.activeMatch=rt(Lt,null),($.ui.route==="display"||$.ui.route==="board"||$.ui.route==="obs")&&U.render())});function Te(){if($.activeMatch){K(Lt,$.activeMatch);const e=$.historyList.findIndex(t=>t.id===$.activeMatch.id);e>=0&&($.historyList[e]=Me($.activeMatch),K(Bt,$.historyList),U.syncCompetitionForMatch($.activeMatch)),U.publishLiveMatchState($.activeMatch)}else tr(Lt);ls&&ls.postMessage({type:"sync",match:$.activeMatch})}function Pt(e,t={}){var s;if(!e)return;const a=$.historyList.findIndex(o=>o.id===e.id),n=a<0||((s=$.historyList[a])==null?void 0:s.status)!=="finished"&&e.status==="finished",r=Me(e);a>=0?$.historyList[a]=r:$.historyList.unshift(r),K(Bt,$.historyList),n&&!t.skipBackupCount&&e.status==="finished"&&sr(1),U.syncCompetitionForMatch(r,t)}function Oa(){const e=new Set;return $.historyList.forEach(t=>t.teams.forEach(a=>a.players.forEach(n=>{n&&n.trim()&&e.add(n.trim())}))),$.competitionsList.forEach(t=>(t.participants||[]).forEach(a=>{a.type==="pair"?(a.players||[]).forEach(n=>{n&&n.trim()&&e.add(n.trim())}):a.name&&a.name.trim()&&e.add(a.name.trim())})),Array.from(e).sort((t,a)=>t.localeCompare(a,"es"))}function Qs(e){const t=$.activeMatch;!t||t.status!=="playing"||Ie(t).matchWinner!==null||(t.shotPrompt?($.ui.shotSheet={team:e},U.render()):he(e,"pt",null))}function he(e,t="pt",a=null,n=null){const r=$.activeMatch;if(!r||Ie(r).matchWinner!==null)return;const o=!r.pendingFault;r.pendingFault=!1,r.redoStack=[],r.events.push({w:e,type:t,by:a,fs:o,sub:n||null}),$.ui.shotSheet=null;const i=Ie(r),l=i.lastTransition;if(l){if(l.type==="match")r.status="finished",$.ui.matchEndDismissed=!1,Pt(r),De("match"),et([100,60,100,60,220]);else if(l.type==="set"){De("set"),et([90,50,140]);const c=l.setIdx??0,d=i.sets[c].games;l.changeover&&(r.flipped=!r.flipped),$.prefs.changeoverAlerts&&($.ui.changeoverOverlay={title:l.changeover?`FIN DEL SET ${c+1} · CAMBIO DE LADO`:`FIN DEL SET ${c+1}`,sub:`${X(r,l.winner??0)} ganó el set ${d[0]}-${d[1]}`,secondsLeft:120})}else if(l.type==="game"){if(De("game"),et([80,50,80]),l.changeover&&(r.flipped=!r.flipped,$.prefs.changeoverAlerts)){const c=i.curSet.games;$.ui.changeoverOverlay={title:"CAMBIO DE LADO",sub:`Marcador del set: ${c[0]} - ${c[1]}`,secondsLeft:Number($.prefs.changeoverTimer)||90}}l.needSecondServerPrompt&&($.ui.secondSrvPrompt=!0)}else if(l.type==="tb_changeover"&&(De("game"),et([70,50,70]),r.flipped=!r.flipped,$.prefs.changeoverAlerts)){const c=l.tbScore||[0,0];$.ui.changeoverOverlay={title:"CAMBIO DE LADO (TIE-BREAK)",sub:`Tie-break: ${c[0]} - ${c[1]}`,secondsLeft:20}}}else De("point"),et(35);Te(),U.render(),rr(r,i),requestAnimationFrame(()=>{const c=document.querySelector(`.half[data-team="${e}"]`);c&&(c.classList.add("flash"),setTimeout(()=>c.classList.remove("flash"),550))})}function kn(){const e=$.activeMatch;if(!e||e.status!=="playing")return;const t=Ie(e);if(t.matchWinner===null)if(!e.pendingFault)e.pendingFault=!0,De("fault"),et(45),D(`2º saque · ${ae(e,t.srvTeam,t.srvPlayer)}`),Te(),U.render();else{const a=t.srvTeam,n=t.srvPlayer;e.pendingFault=!1,D(`Doble falta de ${ae(e,a,n)}`),he(1-a,"df",[a,n])}}function cs(){const e=$.activeMatch;if(!e)return;if(e.pendingFault){e.pendingFault=!1,De("undo"),Te(),U.render();return}if(!e.events.length)return;const t=e.events.pop();e.redoStack=e.redoStack||[],e.redoStack.push(t),e.status==="finished"&&(e.status="playing"),$.ui.changeoverOverlay=null,$.ui.secondSrvPrompt=!1,De("undo"),et(30),Te(),U.render()}function xn(){const e=$.activeMatch;if(!e||!e.redoStack||!e.redoStack.length)return;const t=e.redoStack.pop();e.events.push(t),Ie(e).matchWinner!==null&&(e.status="finished",Pt(e)),De("point"),Te(),U.render()}function Pn(){const e=$.activeMatch;e&&(e.flipped=!e.flipped,Te(),U.render())}function ci(){const e=$.activeMatch;if(!e)return;const t=Ie(e);e.status=t.matchWinner!==null?"finished":"abandoned",Pt(e),U.publishLiveMatchState(e,!0);const a=e.id;$.activeMatch=null,Te(),$.ui.menuOpen=!1,$.ui.statsId=a,$.ui.statsSetFilter="all",U.navigate("stats"),D("Partido guardado en el historial")}function or(){const e=$.preset,t=e.matchContext||"daily",a=(t==="league"||t==="tournament")&&e.compId?J(e.compId):null;$.activeMatch=Qr(e,a),$.preset.fixtureId="",K(ve,$.preset),Te(),$.ui.shotSheet=null,$.ui.changeoverOverlay=null,$.ui.secondSrvPrompt=!1,$.ui.matchEndDismissed=!1,U.navigate("board")}function di(){let e=Date.now();setInterval(()=>{const t=Date.now(),a=Math.min(2500,Math.max(0,t-e));e=t;const{ui:n,activeMatch:r}=$;if(r&&r.status==="playing"&&(n.route==="board"||n.route==="obs"||n.route==="display")&&!n.changeoverOverlay){r.durationMs=(r.durationMs||0)+a;const s=document.getElementById("sb-clock-val");s&&(s.textContent=Ut(r.durationMs))}else if((n.route==="live"||n.route==="obs")&&n.liveMatch&&n.liveMatch.status==="playing"){n.liveMatch.durationMs=(n.liveMatch.durationMs||0)+a;const s=document.getElementById("sb-clock-val");s&&(s.textContent=Ut(n.liveMatch.durationMs))}if(n.changeoverOverlay&&n.changeoverOverlay.secondsLeft>0){n.changeoverOverlay.secondsLeft=Math.max(0,n.changeoverOverlay.secondsLeft-1);const s=document.getElementById("co-countdown");s&&(s.textContent=`${n.changeoverOverlay.secondsLeft}s`),n.changeoverOverlay.secondsLeft===0&&(De("game"),et([120,80,120]))}},1e3)}let wt=null,_t=null,Ue=null,ds=!1,ia=!1,Jt=null,kt="",To=0,Mo="";function De(e){if($.prefs.sound)try{const t=window.AudioContext||window.webkitAudioContext;wt||(wt=new t),wt.state==="suspended"&&wt.resume();const a=wt.currentTime;({point:[[880,0,.06]],undo:[[520,0,.05],[380,.06,.07]],fault:[[320,0,.11]],game:[[660,0,.08],[880,.09,.14]],set:[[587,0,.09],[784,.1,.09],[1046,.2,.18]],match:[[523,0,.1],[659,.11,.1],[784,.22,.1],[1046,.33,.26]]}[e]||[[880,0,.06]]).forEach(([s,o,i])=>{if(!wt)return;const l=wt.createOscillator(),c=wt.createGain();l.type="triangle",l.frequency.setValueAtTime(s,a+o),c.gain.setValueAtTime(.18,a+o),c.gain.exponentialRampToValueAtTime(.001,a+o+i),l.connect(c),c.connect(wt.destination),l.start(a+o),l.stop(a+o+i+.01)})}catch{}}function et(e){if($.prefs.vibrate&&navigator.vibrate)try{navigator.vibrate(e)}catch{}}function rr(e,t){if(!(!$.prefs.voice||!("speechSynthesis"in window)))try{window.speechSynthesis.cancel();let a="";if(t.lastTransition){const n=t.lastTransition,r=X(e,n.winner??0).replace(/·/g," y ");if(n.type==="match")a=`Juego, set y partido para ${r}.`;else if(n.type==="set"){const s=t.sets[n.setIdx??0];a=`Juego y set ${r}, ${s.games[0]} a ${s.games[1]}.${n.changeover?" Cambio de lado.":""}`}else if(n.type==="game"){const s=t.curSet.games;a=`${n.wasBreak?"Break y juego":"Juego"} para ${r}. ${s[0]} a ${s[1]}.${n.changeover?" Cambio de lado.":""}`}else n.type==="tb_changeover"&&(a=`${t.p[0]} a ${t.p[1]}. Cambio de lado.`)}else if(t.isTB){const n=t.srvTeam,r=t.p[n],s=t.p[1-n];a=r===s?`${r} iguales`:`${r} a ${s}, saca ${ae(e,t.srvTeam,t.srvPlayer)}`}else{const n=t.srvTeam,r=t.pointDisplay[n],s=t.pointDisplay[1-n],o=i=>({0:"cero",15:"quince",30:"treinta",40:"cuarenta","40 ★":"cuarenta"})[i]||i;t.isStar?a="Cuarenta iguales. Star Point, punto decisivo.":t.isGP?a="Cuarenta iguales. Punto de oro.":r.startsWith("40")&&s.startsWith("40")?a=e.rules.deuceRule==="star"&&t.curDeuceCount===2?"Iguales. Segunda ventaja.":"Iguales.":r==="AD"?a=`${e.rules.deuceRule==="star"&&t.curAdvNumber===2?"Segunda ventaja":"Ventaja"} al saque, ${X(e,n).replace(/·/g," y ")}.`:s==="AD"?a=`${e.rules.deuceRule==="star"&&t.curAdvNumber===2?"Segunda ventaja":"Ventaja"} al resto, ${X(e,1-n).replace(/·/g," y ")}.`:r===s?a=`${o(r)} iguales.`:a=`${o(r)}, ${o(s)}.`,t.mp[0]||t.mp[1]?a+=" Punto de partido.":t.sp[0]||t.sp[1]?a+=" Punto de set.":t.isBP&&!t.isGP&&(a+=" Bola de break.")}if(a){ds=!0;const n=new SpeechSynthesisUtterance(a);n.lang="es-ES",n.rate=1.05;const r=()=>{setTimeout(()=>{ds=!1},280)};n.onend=r,n.onerror=r,setTimeout(r,2800),window.speechSynthesis.speak(n)}}catch{}}async function qa(){const{ui:e,activeMatch:t,prefs:a}=$,n=(e.route==="board"||e.route==="display")&&t&&t.status==="playing",r=e.route==="live"&&e.liveMatch&&e.liveMatch.status==="playing",s=a.wakeLock&&(n||r);if("wakeLock"in navigator)try{s&&!_t?(_t=await navigator.wakeLock.request("screen"),_t.addEventListener("release",()=>{_t=null})):!s&&_t&&(await _t.release(),_t=null)}catch{}}function ui(){return/Instagram|FBAN|FBAV|Line\/|MicroMessenger/i.test(navigator.userAgent||"")}function As(e){const t=It(e);if(!t)return;const a=Date.now();t===Mo&&a-To<1400||(Mo=t,To=a,Jt&&clearTimeout(Jt),kt="",mi(e))}function pi(){const e=window.SpeechRecognition||window.webkitSpeechRecognition;if(!(!e||!$.ui.voiceListening||$.ui.route!=="board"))try{Ue||(Ue=new e,Ue.lang="es-AR",Ue.continuous=!0,Ue.interimResults=!0,Ue.maxAlternatives=3,Ue.onresult=t=>{if(!$.activeMatch||$.ui.route!=="board"||ds)return;const a=t.results[t.results.length-1];if(!a)return;const n=Array.from(a).map(r=>r.transcript).join(" ").trim();n&&(a.isFinal?As(n):(kt=n,Jt&&clearTimeout(Jt),Jt=setTimeout(()=>{if(kt){const r=kt;kt="",As(r)}},700)))},Ue.onerror=t=>{const a=t&&t.error?t.error:"";(a==="not-allowed"||a==="service-not-allowed")&&(ia=!0,$.ui.voiceListening=!1,U.render(),D("Permiso de micrófono bloqueado en el navegador"))},Ue.onend=()=>{if(kt&&!ds){const t=kt;kt="",As(t)}$.ui.voiceListening&&!ia&&$.ui.route==="board"?setTimeout(()=>{if($.ui.voiceListening&&!ia&&$.ui.route==="board")try{Ue.start()}catch{}},350):(!$.ui.voiceListening||ia)&&($.ui.voiceListening=!1,U.render())});try{Ue.start()}catch{}}catch{$.ui.voiceListening=!1,U.render(),D("No se pudo iniciar el micrófono")}}function fi(){if(!(window.SpeechRecognition||window.webkitSpeechRecognition)){D("Tu navegador no soporta control por voz");return}if($.ui.voiceListening){if($.ui.voiceListening=!1,ia=!1,Jt&&clearTimeout(Jt),kt="",Ue)try{Ue.stop()}catch{}D("Control por voz desactivado"),U.render();return}ui()&&/Android/i.test(navigator.userAgent||"")&&D('Tip: tocá ••• → "Abrir en Chrome" para mejor reconocimiento de voz'),ia=!1,$.ui.voiceListening=!0,U.render(),D("🎤 Micrófono activo"),pi()}function It(e){return String(e||"").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").trim()}function Wt(e,t){const a=It(e);if(!a)return null;if(/\bdrive\s*(2|dos)\b/.test(a))return{team:1,playerIdx:0,name:ae(t,1,0)};if(/\breves\s*(2|dos)\b/.test(a))return{team:1,playerIdx:1,name:ae(t,1,1)};if(/\bdrive\s*(1|uno)?\b/.test(a))return{team:0,playerIdx:0,name:ae(t,0,0)};if(/\breves\s*(1|uno)?\b/.test(a))return{team:0,playerIdx:1,name:ae(t,0,1)};if(/\bjugador\s*(1|uno)\b/.test(a))return{team:0,playerIdx:0,name:ae(t,0,0)};if(/\bjugador\s*(2|dos)\b/.test(a))return{team:0,playerIdx:1,name:ae(t,0,1)};if(/\bjugador\s*(3|tres)\b/.test(a))return{team:1,playerIdx:0,name:ae(t,1,0)};if(/\bjugador\s*(4|cuatro)\b/.test(a))return{team:1,playerIdx:1,name:ae(t,1,1)};const n=a.split(/\s+/);for(let r=0;r<2;r++)for(let s=0;s<2;s++){const o=t.teams[r].players[s]||"",i=It(o);if(!i)continue;if(a.includes(i))return{team:r,playerIdx:s,name:ae(t,r,s)};const l=i.split(/\s+/).filter(c=>c.length>=3&&c!=="jugador");for(const c of l)if(n.includes(c)||a.includes(c))return{team:r,playerIdx:s,name:ae(t,r,s)}}for(let r=0;r<2;r++)for(let s=0;s<2;s++){const o=t.teams[r].players[s]||"",i=It(o).split(/\s+/)[0]||"";if(i.length>=4&&i!=="jugador"){const l=i.slice(0,4);if(n.some(c=>c.startsWith(l)))return{team:r,playerIdx:s,name:ae(t,r,s)}}}return null}function Rs(e,t){var i,l;const a=It(e),n=It(((i=Rt.find(c=>c.c===t.teams[0].color))==null?void 0:i.n)||"dorado"),r=It(((l=Rt.find(c=>c.c===t.teams[1].color))==null?void 0:l.n)||"azul"),s=t.teams[0].color==="#d4af37"&&(a.includes("oro")||a.includes("amarillo")),o=t.teams[1].color==="#d4af37"&&(a.includes("oro")||a.includes("amarillo"));return a.includes(n)||s||a.includes("pareja 1")||a.includes("pareja uno")||a.includes("equipo 1")||a.includes("equipo uno")||a.includes("izquierda")||a.includes("arriba")||a.includes("nosotros")?0:a.includes(r)||o||a.includes("pareja 2")||a.includes("pareja dos")||a.includes("equipo 2")||a.includes("equipo dos")||a.includes("derecha")||a.includes("abajo")||a.includes("ellos")?1:null}function Ls(e,t){const a=$.activeMatch;if(!a)return;const r=Ie(a).totalGamesPlayed%4;if(r%2===0){const s=r===0?t:1-t;a.firstServer=[e,s]}else{const s=a.firstServer?a.firstServer[1]:0;a.firstServer=[1-e,s];const o=r===1?t:1-t;a.secondServerIdx=o}$.ui.secondSrvPrompt=!1,Te(),U.render(),D(`🎤 Al saque: ${ae(a,e,t)}`)}function mi(e){const t=$.activeMatch;if(!t)return;const a=It(e);if(!a)return;const{ui:n}=$;if(a.includes("deshacer")||a.includes("atras")||a.includes("corregir")){cs(),D("🎤 Punto deshecho");return}if(a.includes("rehacer")){xn(),D("🎤 Punto rehecho");return}if((a.includes("cancelar")||a.includes("cerrar"))&&(n.shotSheet||n.menuOpen||n.changeoverOverlay)){n.shotSheet=null,n.menuOpen=!1,n.changeoverOverlay=null,U.render();return}if(n.changeoverOverlay&&(a.includes("continuar")||a.includes("reanudar")||a.includes("listo"))){n.changeoverOverlay=null,U.render();return}if(a.includes("cambio de lado")||a.includes("cambiar de lado")||a.includes("cambiar lado")||a==="lado"||a==="lados"){Pn(),D("🎤 Lados cambiados");return}const r=Ie(t);if(a.includes("doble falta")){t.pendingFault=!1,D(`🎤 Doble falta de ${ae(t,r.srvTeam,r.srvPlayer)}`),he(1-r.srvTeam,"df",[r.srvTeam,r.srvPlayer]);return}if(a.includes("falta")||a.includes("segundo saque")){kn();return}const s=/\b(saca|saque|sirve|sacador|servir)\b/.test(a);if(n.secondSrvPrompt||s){const y=Wt(a,t);if(n.secondSrvPrompt){const P=1-t.firstServer[0];if(y&&y.team===P){t.secondServerIdx=y.playerIdx,n.secondSrvPrompt=!1,Te(),U.render(),D(`🎤 Al saque: ${y.name}`);return}if(y){Ls(y.team,y.playerIdx);return}if(a.includes("uno")||a.includes("primer")){t.secondServerIdx=0,n.secondSrvPrompt=!1,Te(),U.render(),D(`🎤 Al saque: ${ae(t,P,0)}`);return}if(a.includes("dos")||a.includes("segund")){t.secondServerIdx=1,n.secondSrvPrompt=!1,Te(),U.render(),D(`🎤 Al saque: ${ae(t,P,1)}`);return}return}if(y){if((a.includes("siguiente")||a.includes("proximo")||a.includes("despues"))&&y.team===1-t.firstServer[0]&&r.totalGamesPlayed===0){t.secondServerIdx=y.playerIdx,Te(),U.render(),D(`🎤 Próximo saque (${X(t,y.team)}): ${y.name}`);return}Ls(y.team,y.playerIdx);return}const k=1-r.srvPlayer;Ls(r.srvTeam,k);return}const o=a.includes("no forzado")||a.includes("error no")||a.includes("fallo")||a.includes("afuera")||a.includes("a la red")||a.includes("en la red")||a.includes("al cristal")||a.includes("a la reja")||a.includes("error")&&!a.includes("forzado"),i=!o&&a.includes("forzado"),l=!o&&!i&&(a.includes("winner")||a.includes("ganador")||a.includes("smash")||a.includes("remate")||a.includes("por tres")||a.includes("por 3")||a.includes("por cuatro")||a.includes("por 4")||a.includes("bajada")||a.includes("volea")||a.includes("bandeja")||a.includes("vibora")||a.includes("dejada")||a.includes("chiquita")||a.includes("passing")||a.includes("globo"));function c(y){return y.includes("smash")||y.includes("remate")||y.includes("por tres")||y.includes("por 3")||y.includes("por cuatro")||y.includes("por 4")?"smash":y.includes("volea")?"volea":y.includes("bandeja")||y.includes("vibora")||y.includes("víbora")?"bandeja":y.includes("bajada")?"bajada":y.includes("dejada")||y.includes("chiquita")?"dejada":y.includes("passing")||y.includes("paralelo")?"passing":y.includes("globo")?"globo":"winner"}const d={smash:"Smash",volea:"Volea",bandeja:"Bandeja",bajada:"Bajada de pared",dejada:"Dejada",passing:"Passing",globo:"Globo",winner:"Winner"};if(o||i){const y=o?"ue":"fe",k=o?"Error no forzado":"Error forzado",P=a.match(/(?:no forzado|forzado|error|fallo|red|cristal|reja|afuera)(.*)$/),S=(P&&P[1]?Wt(P[1],t):null)||Wt(a,t);if(S){const T=1-S.team;D(`🎤 ${k} de ${S.name} → Punto ${X(t,T)}`),he(T,y,[S.team,S.playerIdx]);return}if(n.shotSheet){const T=n.shotSheet.team,I=1-T,B=a.includes("dos")||a.includes("segund")?1:0,M=ae(t,I,B);D(`🎤 ${k} de ${M}`),he(T,y,[I,B]);return}const m=Rs(a,t);if(m!==null){const T=1-m;D(`🎤 ${k} de ${X(t,m)} → Punto ${X(t,T)}`),he(T,y,[m,0]);return}D(`🎤 Decí el jugador: "${k.toLowerCase()} de [nombre]"`);return}if(l){const y=c(a),k=d[y]||"Winner",P=a.match(/(?:winner|ganador|smash|remate|volea|bandeja|vibora|bajada|dejada|chiquita|passing|globo)(.*)$/),S=(P&&P[1]?Wt(P[1],t):null)||Wt(a,t);if(S){D(`🎤 ${k} de ${S.name}`),he(S.team,"winner",[S.team,S.playerIdx],y);return}if(n.shotSheet){const T=n.shotSheet.team,I=a.includes("dos")||a.includes("segund")?1:0,B=ae(t,T,I);D(`🎤 ${k} de ${B}`),he(T,"winner",[T,I],y);return}const m=Rs(a,t);if(m!==null){D(`🎤 ${k} de ${X(t,m)}`),he(m,"winner",[m,0],y);return}}if(n.shotSheet){const y=n.shotSheet.team;if(a.includes("rapido")||a.includes("sin detalle")||a.includes("normal")){he(y,"pt",null);return}const k=Wt(a,t);if(k){if(k.team===y){const P=c(a),x=d[P]||"Winner";D(`🎤 ${x} de ${k.name}`),he(y,"winner",[y,k.playerIdx],P)}else D(`🎤 Error no forzado de ${k.name}`),he(y,"ue",[k.team,k.playerIdx]);return}}const g=Wt(a,t);if(g){D(`🎤 Punto (Winner) de ${g.name}`),he(g.team,"winner",[g.team,g.playerIdx]);return}const b=Rs(a,t);if(b!==null){D(`🎤 Punto ${X(t,b)}`),he(b,"pt",null);return}if(a.includes("uno")){he(0,"pt",null);return}if(a.includes("dos")){he(1,"pt",null);return}D(`🎤 Escuché: "${e.trim()}"`)}let Bs=null,Ca=null,Be=null,es=null,ts=!1,Cn=0,Gt=0,Ys=0,pa="",Ta=!1,Ja=!1,ir=0,us=0,Ma=0,Ia=null;function gi(){return!!(Be&&Be.readyState!==2)}function Io(e=0){us++;const t=e>0?Math.min(2e4,e*1e3):Math.min(12e3,Math.round(1400*Math.pow(1.6,us-1)));Ma=Date.now()+t,Ta=!1,Ca&&clearTimeout(Ca),Ca=setTimeout(()=>{Xs(!1)},t)}async function Xs(e=!1){var s,o;if(Ta)return Ja=!0,!1;const t=Ia||$.activeMatch;if(!t||!t.id)return!1;const a=ja(t);if(!e&&a&&a===pa)return Ja=!1,!0;const n=Vo(t);if(!n)return!1;Ta=!0,Ja=!1,Ca&&clearTimeout(Ca);const r=Ga(t.id);try{const i=await fetch(`${bt()}/${r}`,{method:"POST",body:n});if(i&&i.ok){pa=a,ir=Date.now(),us=0,Ma=0,Ta=!1;const c=Ia||$.activeMatch;return c&&(Ja||c.id===t.id&&ja(c)!==pa)&&$a(c,!1),!0}const l=Number((o=(s=i==null?void 0:i.headers)==null?void 0:s.get)==null?void 0:o.call(s,"Retry-After"))||0;return Io(l),!1}catch{return Io(0),!1}}function $a(e,t=!1,a=!1){if(!e||!e.id)return;Ia&&Ia.id!==e.id&&(pa="",us=0,Ma=0),a&&(pa=""),Ia=e;const n=ja(e);if(!a&&!t&&n&&n===pa)return;Bs&&clearTimeout(Bs);const r=Date.now();if(t&&!Ta&&(a||r>=Ma)){Xs(a);return}const s=r-ir,o=Math.max(0,Ma-r),i=Math.max(o,t?80:Math.max(260,650-s));Bs=setTimeout(()=>Xs(a),i)}function bi(){if(typeof navigator>"u"||typeof navigator.share!="function")return!1;const e=navigator.userAgentData;if(e&&typeof e.mobile=="boolean"&&!e.mobile)return!1;const t=navigator.userAgent||"";return/Windows|Win32|Win64|CrOS|X11/i.test(t)||/Linux/i.test(t)&&!/Android/i.test(t)?!1:/Android|iPhone|iPad|iPod/i.test(t)||/Macintosh/i.test(t)&&(navigator.maxTouchPoints||0)>1}async function ys(e){const{title:t,text:a,url:n,copyText:r,toastMsg:s,promptMsg:o}=e;if(bi())try{const l={title:t,text:a};return n&&(l.url=n),await navigator.share(l),!0}catch{}const i=r??(n?`${a}
${n}`:a);if(navigator.clipboard&&navigator.clipboard.writeText)try{return await navigator.clipboard.writeText(i),D(s||"Enlace copiado al portapapeles"),!0}catch{}return prompt(o||"Copiá este texto para compartir:",i),!1}async function hi(e){if(!e)return;$a(e,!0,!0);const t=Yt(e.id),n=`${location.href.split("#")[0]}#v=${t}`,r=`${X(e,0)} vs ${X(e,1)}`,s=`🎾 *Seguí mi partido en vivo:*
*${r}*
${n}`;await ys({title:`🎾 Seguí mi partido en vivo · ${r}`,text:`🎾 Seguí mi partido en vivo: ${r}`,url:n,copyText:s,toastMsg:"📡 Invitación corta EN VIVO copiada para pegar en WhatsApp",promptMsg:"Copiá este mensaje para compartir el partido en vivo:"})}function Tn(e,t=!1){const a=gs(e);if(!a||!a.teams)return;const{ui:n}=$;if(n.liveId&&a.id&&Yt(a.id)!==Yt(n.liveId))return;const r=n.liveMatch;if(r&&r.id===a.id&&(a._ts||0)>0&&(r._ts||0)>0&&(a._ts||0)<(r._ts||0))return;const s=ja(a),o=ja(r);if(r&&s===o){a.durationMs>(r.durationMs||0)&&(r.durationMs=a.durationMs),(a._ts||0)>(r._ts||0)&&(r._ts=a._ts);return}const i=r&&r.events?r.events.length:null,l=a.events?a.events.length:0,c=r?!!r.pendingFault:!1;if(n.liveMatch=a,!t&&r!==null)if(i!==null&&l>i){const d=Ie(a),g=a.events[l-1],b=d.lastTransition;b?b.type==="match"?(n.matchEndDismissed=!1,De("match"),et([100,60,100,60,220])):b.type==="set"?(De("set"),et([90,50,140])):(b.type==="game"||b.type==="tb_changeover")&&(De("game"),et([80,50,80])):(De("point"),et(35)),rr(a,d),g&&(g.w===0||g.w===1)&&requestAnimationFrame(()=>{const y=document.querySelector(`.half[data-team="${g.w}"]`);y&&(y.classList.add("flash"),setTimeout(()=>y.classList.remove("flash"),550))})}else i!==null&&l<i?De("undo"):a.pendingFault&&!c&&De("fault");(n.route==="live"||n.route==="obs"||n.route==="stats"&&n.statsId==="live")&&U.render()}async function ba(e,t=!1){if(!e||ts)return;const a=Date.now();if(!t&&a<Ys)return;ts=!0,Cn=a;const n=!t&&Gt>0?String(Math.max(0,Gt-3)):"12h";try{const r=await fetch(`${bt()}/${e}/json?poll=1&since=${encodeURIComponent(n)}`,{cache:"no-store"});if(r.status===429){Ys=Date.now()+1e4;return}if(!r.ok)return;const o=(await r.text()).trim().split(`
`).filter(Boolean);let i=null;for(const l of o)try{const c=JSON.parse(l);c&&c.time&&(Gt=Math.max(Gt,Number(c.time)||0)),c&&c.event==="message"&&c.message&&(i=c.message)}catch{}i&&Tn(i,!1)}catch{}finally{ts=!1}}function Zs(e){if(!(!e||!("EventSource"in window))){if(Be){try{Be.close()}catch{}Be=null}try{Be=new EventSource(`${bt()}/${e}/sse`),Be.onopen=()=>{$.ui.liveConnected=!0,ba(e)},Be.onmessage=t=>{try{const a=JSON.parse(t.data);a&&a.time&&(Gt=Math.max(Gt,Number(a.time)||0)),a&&(a.event==="message"||!a.event)&&a.message&&($.ui.liveConnected=!0,Tn(a.message,!1))}catch{}},Be.onerror=()=>{$.ui.liveConnected=!1}}catch{}}}function as(e){const t=String(e||"").trim();if(!t)return;const a=t.indexOf("."),n=decodeURIComponent(a>=0?t.slice(0,a):t),r=a>=0?t.slice(a+1):"",{ui:s}=$,o=s.liveId===n&&Be&&Be.readyState!==2;if(s.liveId=n,s.route!=="obs"&&(s.route="live"),r&&!s.liveMatch&&Tn(r,!0),U.render(),qa(),o)return;Mn();const i=Ga(n);ba(i,!0),Zs(i),es=setInterval(()=>{if(!$.ui.liveId||document.hidden&&$.ui.route!=="obs")return;Be&&Be.readyState===2&&Zs(i);const l=Date.now()-Cn;$.ui.liveConnected&&l<24e3||ba(i)},3500)}function Mn(){if(Be){try{Be.close()}catch{}Be=null}es&&(clearInterval(es),es=null),ts=!1,Cn=0,Gt=0,Ys=0,$.ui.liveConnected=!1}function lr(){Mn(),$.ui.liveId=null,$.ui.liveMatch=null,(location.hash.startsWith("#live=")||location.hash.startsWith("#v="))&&history.replaceState(null,"",location.pathname+location.search)}async function vi(e){const t=Yt(e),a=Ga(t);try{const n=await fetch(`${bt()}/${a}/json?poll=1&since=12h`,{cache:"no-store"});if(n.ok){const s=(await n.text()).trim().split(`
`).filter(Boolean);let o=null;for(const i of s)try{const l=JSON.parse(i);l&&l.event==="message"&&l.message&&(o=l.message)}catch{}if(o){const i=gs(o);if(i){$.ui.sharedMatch=i,$.ui.statsId="shared",$.ui.route="stats",U.render();return}}}}catch{}D("No se encontró el partido compartido o expiró")}async function yi(e){if(!e)return;$a(e,!0,!0);const t=Yt(e.id),n=`${location.href.split("#")[0]}#s=${t}`,r=`${X(e,0)} vs ${X(e,1)}`,s=`🏆 *Resultado y estadísticas del partido:*
*${r}*
${n}`;await ys({title:`🏆 Estadísticas: ${r}`,text:`🏆 Resultado y estadísticas del partido: ${r}`,url:n,copyText:s,toastMsg:"Enlace corto del partido copiado al portapapeles",promptMsg:"Copiá este enlace para compartir el partido:"})}function In(e,t){var r,s,o;const a=URL.createObjectURL(e),n=document.createElement("a");n.href=a,n.download=t,(s=(r=document.body)==null?void 0:r.appendChild)==null||s.call(r,n),n.click(),(o=n.remove)==null||o.call(n),typeof URL.revokeObjectURL=="function"&&setTimeout(()=>URL.revokeObjectURL(a),1e3)}function He(e,t,a,n,r,s,o){e.beginPath(),e.roundRect?e.roundRect(t,a,n,r,s):e.rect(t,a,n,r),e.fillStyle=o,e.fill()}function cr(e,t,a){e.save();const n="PÁDEL CONTROL SÉ  ·  BY",r="Sairaf Engel";e.font='600 18px Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';const s=e.measureText(n).width;e.font='42px "Great Vibes", cursive';const o=e.measureText(r).width,i=16,l=s+i+o,c=Math.round((t-l)/2);e.textAlign="left",e.textBaseline="middle",e.fillStyle="#a39e93",e.font='600 18px Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',e.fillText(n,c,a),e.fillStyle="#ffe58f",e.font='42px "Great Vibes", cursive',e.fillText(r,c+s+i,a-2);const d=a+22,g=e.createLinearGradient(c+20,d,c+l-20,d);g.addColorStop(0,"rgba(212, 175, 55, 0)"),g.addColorStop(.5,"rgba(212, 175, 55, 0.4)"),g.addColorStop(1,"rgba(212, 175, 55, 0)"),e.strokeStyle=g,e.lineWidth=1,e.beginPath(),e.moveTo(c+20,d),e.lineTo(c+l-20,d),e.stroke(),e.restore()}async function Eo(e){if(document.fonts&&document.fonts.ready)try{await document.fonts.ready}catch{}const t=bs(e,"all"),a=t.st,n=t.T,r=1080,s=1400,o=document.createElement("canvas");o.width=r,o.height=s;const i=o.getContext("2d");if(!i)return;const l=i.createLinearGradient(0,0,0,s);l.addColorStop(0,"#050507"),l.addColorStop(.5,"#0c0c10"),l.addColorStop(1,"#12100a"),i.fillStyle=l,i.fillRect(0,0,r,s),i.fillStyle="#d4af37",i.font="800 28px Inter, sans-serif",i.fillText("PÁDEL CONTROL SÉ · RESUMEN DEL PARTIDO",64,78),i.fillStyle="#a39e93",i.font="500 24px Inter, sans-serif",i.fillText(`${Wa(e.createdAt)} · Duración ${pn(e.durationMs)}`,64,118),i.save(),i.textAlign="right",i.fillStyle="#ffe58f",i.font='42px "Great Vibes", cursive',i.fillText("Sairaf Engel",r-64,96),i.restore(),He(i,56,152,r-112,250,28,"#121218");for(let d=0;d<2;d++){const g=225+d*105;i.fillStyle=e.teams[d].color,He(i,88,g-38,12,54,6,e.teams[d].color),i.fillStyle=a.matchWinner===d?"#ffe58f":"#e5e0d5",i.font=`${a.matchWinner===d?"800":"700"} 44px "Barlow Condensed", sans-serif`,i.fillText(X(e,d).toUpperCase(),120,g+6),a.sets.forEach((b,y)=>{if(b.games[0]===0&&b.games[1]===0&&y>0&&b.winner===null)return;const k=r-110-(a.sets.length-1-y)*86,P=b.winner===d;He(i,k-54,g-42,68,64,14,P?"#d4af37":"#1b1b24"),i.fillStyle=P?"#080602":"#a39e93",i.font='800 42px "Barlow Condensed", sans-serif',i.textAlign="center",i.fillText(String(b.games[d]),k-20,g+5),i.textAlign="left"})}const c=[["Puntos ganados",n[0].ptsWon,n[1].ptsWon,n[0].ptsWon,n[1].ptsWon],["Golpes ganadores",n[0].winners,n[1].winners,n[0].winners,n[1].winners],["Errores no forzados",n[0].ue,n[1].ue,n[0].ue,n[1].ue],["Puntos de break",`${n[0].bpWon}/${n[0].bpTotal}`,`${n[1].bpWon}/${n[1].bpTotal}`,n[0].bpWon,n[1].bpWon],["Puntos de oro / Star Point",`${n[0].gpWon}/${n[0].gpTotal}`,`${n[1].gpWon}/${n[1].gpTotal}`,n[0].gpWon,n[1].gpWon],["Puntos ganados al saque",de(n[0].srvPtsWon,n[0].srvPtsTotal)+"%",de(n[1].srvPtsWon,n[1].srvPtsTotal)+"%",de(n[0].srvPtsWon,n[0].srvPtsTotal),de(n[1].srvPtsWon,n[1].srvPtsTotal)],["Primeros saques dentro",de(n[0].firstServeIn,n[0].srvPtsTotal)+"%",de(n[1].firstServeIn,n[1].srvPtsTotal)+"%",de(n[0].firstServeIn,n[0].srvPtsTotal),de(n[1].firstServeIn,n[1].srvPtsTotal)],["Mejor racha de puntos",n[0].maxPtStreak,n[1].maxPtStreak,n[0].maxPtStreak,n[1].maxPtStreak]];He(i,56,434,r-112,820,28,"#121218"),c.forEach((d,g)=>{const b=505+g*94;i.fillStyle="#d4af37",i.font="600 22px Inter, sans-serif",i.textAlign="center",i.fillText(d[0].toUpperCase(),r/2,b-16),i.fillStyle="#f8f6f0",i.font='800 34px "Barlow Condensed", sans-serif',i.textAlign="left",i.fillText(String(d[1]),96,b+22),i.textAlign="right",i.fillText(String(d[2]),r-96,b+22);const y=210,k=r-420,P=b+8;He(i,y,P,k,14,7,"#22222c");const x=(Number(d[3])||0)+(Number(d[4])||0),S=x>0?Number(d[3])/x:.5,m=Math.round(k*S);m>0&&He(i,y,P,m,14,7,e.teams[0].color),k-m>0&&He(i,y+m,P,k-m,14,7,e.teams[1].color)}),cr(i,r,1322),o.toBlob(d=>{d&&(In(d,`padel-control-se-${new Date(e.createdAt).toISOString().slice(0,10)}.png`),D("Imagen descargada"))},"image/png")}function ps(e,t="daily"){const a=e?e.id:t;return $.ui.playerSortScope===a&&$.ui.playerSort?$.ui.playerSort:we(e)?"elo":"pts"}function $s(e=null){var P,x,S;const{ui:t,competitionsList:a,historyList:n,prefs:r}=$,s=t.playerScope||"daily";if(s==="shared"||t.playerRankingView==="shared"&&((x=(P=t.sharedRanking)==null?void 0:P.players)!=null&&x.length)){const m=t.sharedRanking,T=(m==null?void 0:m.primaryMetric)==="elo",I=e||(t.playerSortScope==="shared"?t.playerSort:T?"elo":"pts"),B=((m==null?void 0:m.players)||[]).map(L=>({...L,shots:{...L.shots||{}}})),M=ua(Ht(B,I,{tiebreakMode:T?"games":"sets"}),I,{tiebreakMode:T?"games":"sets"});return{scope:"shared",id:(m==null?void 0:m.id)||"RK-EXT",title:(m==null?void 0:m.name)||"Ranking Compartido",subtitle:(m==null?void 0:m.subtitle)||"Ranking compartido",entityMode:(m==null?void 0:m.entityMode)||"individual",primaryMetric:(m==null?void 0:m.primaryMetric)||"pts",comp:null,scoring:null,sortKey:I,players:M}}if(s==="league"||s==="tournament"){const m=a.filter(C=>C.kind===s);let T=s==="league"?t.selectedLeagueId:t.selectedTournId;(!T||!m.some(C=>C.id===T))&&(T=((S=m[0])==null?void 0:S.id)||null,s==="league"?t.selectedLeagueId=T:t.selectedTournId=T);const I=J(T);if(!I)return{scope:s,id:r.rankingId||"RK-OFFICIAL",title:s==="league"?"Ligas":"Torneos",subtitle:`Sin ${s==="league"?"ligas":"torneos"} todavía`,entityMode:"pairs",primaryMetric:"pts",comp:null,scoring:{winPts:3,lossPts:1,drawPts:2,setBonusPts:0,gameBonusPts:0},sortKey:e||"pts",players:[]};const B=we(I),M=e||ps(I,s),L={tiebreakMode:B?"games":"sets"},O=I.rankingMode==="both"?t.playerEntityMode||"pairs":I.rankingMode||"pairs",F=ft(I),G=nt(I,!1);let E=G,p=I.participants||[],u="";if(I.format==="groups_playoff"&&t.selectedGroupFilter&&t.selectedGroupFilter!=="all"){const C=t.selectedGroupFilter,R=new Set((I.fixtures||[]).filter(j=>j.phase==="group"&&j.group===C).map(j=>j.id));E=G.filter(j=>{var q;return((q=j.competition)==null?void 0:q.fixtureId)&&R.has(j.competition.fixtureId)}),p=p.filter(j=>j.group===C),u=` · Grupo ${C}`}const f=Xt(E,{...F,entityMode:O,eloBaseMatches:G,seedParticipants:p}),w=ua(Ht(f,M,L),M,L);return{scope:s,id:`${r.rankingId||"RK"}-${I.id.slice(-4).toUpperCase()}`,title:I.name,subtitle:bn(I,O,F,u),entityMode:O,primaryMetric:B?"elo":"pts",comp:I,scoring:F,sortKey:M,players:w}}const o=e||ps(null,"daily"),i=t.playerEntityMode||"individual",l=t.dailyTimeFilter==="today",c=n.filter(m=>Vt(m)==="daily"),d=ft(null),g=Xt(c,{...d,entityMode:i,todayOnly:l,todayDateKey:Ba(Date.now())}),b=ua(Ht(g,o),o),y=i==="pairs"?"Parejas":"Individual",k=l?"Hoy":"Acumulado";return{scope:"daily",id:r.rankingId||"RK-OFFICIAL",title:`${r.rankingName||"Mi Ranking"} · Partido del Día`,subtitle:`${k} · ${y} · +${d.winPts}V / +${d.lossPts}D + ELO`,entityMode:i,primaryMetric:"pts",comp:null,scoring:d,sortKey:o,players:b}}function $i(e,t=null){var l,c,d,g;const{ui:a,historyList:n,prefs:r}=$,s=a.playerScope==="shared"||a.playerRankingView==="shared"||!n.length&&!!((c=(l=a.sharedRanking)==null?void 0:l.players)!=null&&c.length),o=s&&((d=a.sharedRanking)!=null&&d.id)?a.sharedRanking.id:r.rankingId||"RK-OFFICIAL",i=s&&((g=a.sharedRanking)!=null&&g.name)?a.sharedRanking.name:r.rankingName||"Mi Ranking";return Kr(e,t,{id:o,name:i})}function dr(e){if(!(!e||!e.id))try{const t=rt("padel_ranking_vault",{});t[e.id]=e,K("padel_ranking_vault",t)}catch{}}async function Si(e){if(!e||e.length<60)return e;try{const t=new AbortController,a=setTimeout(()=>t.abort(),2400),n=await fetch(`https://is.gd/create.php?format=json&url=${encodeURIComponent(e)}`,{signal:t.signal});if(clearTimeout(a),n.ok){const r=await n.json();if(r&&r.shorturl)return r.shorturl}}catch{}try{const t=new AbortController,a=setTimeout(()=>t.abort(),2400),n=await fetch(`https://v.gd/create.php?format=json&url=${encodeURIComponent(e)}`,{signal:t.signal});if(clearTimeout(a),n.ok){const r=await n.json();if(r&&r.shorturl)return r.shorturl}}catch{}return e}function wi(e,t){if(!e||!t)return;const n="padel_se_rk_"+String(e).replace(/^rk[-_]?/i,"").replace(/[^a-zA-Z0-9]/g,"").toLowerCase();fetch(`${bt()}/${n}`,{method:"POST",body:t}).catch(()=>{})}async function ki(e){const a="padel_se_rk_"+String(e||"").replace(/^rk[-_]?/i,"").replace(/[^a-zA-Z0-9]/g,"").toLowerCase();try{const n=await fetch(`${bt()}/${a}/json?poll=1&since=12h`,{cache:"no-store"});if(n.ok){const s=(await n.text()).trim().split(`
`).filter(Boolean);let o=null;for(const i of s)try{const l=JSON.parse(i);l&&l.event==="message"&&l.message&&(o=l.message)}catch{}if(o){const i=Ho(o);if(i&&Array.isArray(i.players)&&i.players.length){$.ui.sharedRanking=i,K("padel_shared_ranking",i),dr(i),$.ui.playerRankingView="shared",$.ui.playerScope="shared",$.ui.route="players",U.render(),D(`📡 ${i.name||"Ranking"} (#${i.id||"RK"}) cargado`);return}}}}catch{}D("No se encontró el ranking compartido o expiró")}async function Ao(e=null){const t=e||$s(),a=t.title||$.prefs.rankingName||"Mi Ranking",n=t.id||$.prefs.rankingId||"RK-OFFICIAL",r=t.players||[];if(!r.length){D("Todavía no hay jugadores registrados en este ranking");return}const s=location.href.split("#")[0],o=$i(r,t),i=o?`${s}#rk=${o}`:`${s}#players`;wi(n,o);let l=i;try{l=await Si(i)}catch{}const c=t.primaryMetric==="elo"||we(t.comp),d={1:"🥇 1º",2:"🥈 2º",3:"🥉 3º"},g=r.slice(0,10).map(k=>{const P=k.rank&&d[k.rank]||`${k.rank}º`,x=fa(k.elo),S=de(k.wins,k.matches),m=k.lastDelta>0?` (+${k.lastDelta})`:k.lastDelta<0?` (${k.lastDelta})`:"";if(c){const T=(k.gamesDiff||0)>0?`+${k.gamesDiff}`:String(k.gamesDiff||0);return`${P} *${k.name}* · *${k.elo} ELO*${m} · ${k.pts||0} pts (${k.gamesWon||0}G, ${T}) · ${k.wins}G/${k.draws||0}E/${k.losses||0}P`}return`${P} *${k.name}* · ${k.pts||0} pts · ${k.elo} ELO${m} · Nivel ${x.level} (${x.icon}) · ${k.wins}V/${k.matches}P (${S}%)`}).join(`
`),b=r.length>10?`
...y ${r.length-10} más`:"",y=`🎾 *RANKING OFICIAL · PÁDEL CONTROL SÉ*
🏆 *${a}* · ID: #${n}
📌 _${t.subtitle||"Sistema Mixto: Puntos + ELO"}_

📊 *Tabla de Posiciones:*
${g}${b}

📲 Ver tabla completa interactiva y marcador:
${l}`;await ys({title:`🎾 Ranking: ${a} (#${n})`,text:y,copyText:y,toastMsg:"¡Ranking y enlace copiados al portapapeles!",promptMsg:"Copiá el texto del ranking para compartir:"})}async function Ro(e=null){var S;if(document.fonts&&document.fonts.ready)try{await document.fonts.ready}catch{}const t=e||$s(),a=t.scope==="shared",n=t.title||$.prefs.rankingName||"Mi Ranking",r=t.id||$.prefs.rankingId||"RK-OFFICIAL",s=t.players||[];if(!s.length){D("Todavía no hay jugadores registrados para exportar");return}const o=s.slice(0,8),i=1080,l=Math.max(1200,360+o.length*105),c=document.createElement("canvas");c.width=i,c.height=l;const d=c.getContext("2d");if(!d)return;const g=d.createLinearGradient(0,0,0,l);g.addColorStop(0,"#050507"),g.addColorStop(.5,"#0c0c10"),g.addColorStop(1,"#12100a"),d.fillStyle=g,d.fillRect(0,0,i,l),d.strokeStyle="rgba(212, 175, 55, 0.45)",d.lineWidth=2,d.beginPath(),d.roundRect?d.roundRect(28,28,i-56,l-56,24):d.rect(28,28,i-56,l-56),d.stroke(),d.fillStyle="#d4af37",d.font="800 28px Inter, -apple-system, sans-serif",d.fillText("PÁDEL CONTROL SÉ  ·  RANKING OFICIAL",64,82);const y=(a&&((S=$.ui.sharedRanking)!=null&&S.timestamp)?new Date($.ui.sharedRanking.timestamp):new Date).toLocaleDateString("es-AR",{day:"numeric",month:"long",year:"numeric"});d.fillStyle="#a39e93",d.font="500 19px Inter, sans-serif",d.fillText(`${n.toUpperCase()}  ·  ${t.subtitle||""}  ·  #${r}  ·  ${y}`,64,120),d.save(),d.textAlign="right",d.fillStyle="#ffe58f",d.font='42px "Great Vibes", cursive',d.fillText("Sairaf Engel",i-64,96),d.restore();const k=160,P=l-k-120;He(d,56,k,i-112,P,24,"#121218");const x=t.primaryMetric==="elo"||we(t.comp);He(d,56,k,i-112,58,24,"rgba(212, 175, 55, 0.12)"),d.fillStyle="#d4af37",d.font="700 18px Inter, sans-serif",d.textAlign="left",d.fillText("POS",88,k+36),d.fillText(t.entityMode==="pairs"?"PAREJA & NIVEL":"JUGADOR & NIVEL",190,k+36),d.textAlign="right",d.fillText("PARTIDOS",i-360,k+36),d.fillText(x?"PTS (G)":"ELO",i-245,k+36),d.fillText(x?"ELO":"PUNTOS",i-92,k+36),o.forEach((m,T)=>{const I=k+72+T*98;T%2===0&&He(d,64,I,i-128,86,14,"rgba(255, 255, 255, 0.025)");const B=84,M=I+18,L=50;let O="rgba(255, 255, 255, 0.06)",F="#a39e93",G=`#${m.rank}`;m.rank===1?(O="#d4af37",F="#080602",G="1º"):m.rank===2?(O="#cbd5e1",F="#080602",G="2º"):m.rank===3&&(O="#d97706",F="#080602",G="3º"),He(d,B,M,L,L,14,O),d.fillStyle=F,d.font='800 24px "Barlow Condensed", sans-serif',d.textAlign="center",d.fillText(G,B+L/2,M+34),d.textAlign="left",d.fillStyle=(m.rank||99)<=3?"#ffe58f":"#f8f6f0",d.font='800 30px "Barlow Condensed", sans-serif',d.fillText(m.name.toUpperCase().slice(0,26),156,I+40);const E=fa(m.elo);d.fillStyle=E.color,d.font="600 18px Inter, sans-serif",d.fillText(`Nivel ${E.level} · ${E.tier}`,156,I+68);const p=de(m.wins,m.matches),u=(m.gamesDiff||0)>0?`+${m.gamesDiff}`:String(m.gamesDiff||0);d.textAlign="right",d.fillStyle="#e2ded5",d.font='700 22px "Barlow Condensed", sans-serif',d.fillText(x?`${m.wins}G-${m.draws||0}E-${m.losses||0}P`:`${m.wins}V - ${m.losses??Math.max(0,m.matches-m.wins)}D`,i-360,I+40),d.fillStyle="#a39e93",d.font="500 16px Inter, sans-serif",d.fillText(x?`${m.gamesWon||0} GF · ${u}`:`${p}% ef.`,i-360,I+66),d.textAlign="right",d.fillStyle=x?"#e2ded5":"#f5d061",d.font='800 24px "Barlow Condensed", sans-serif',d.fillText(x?`${m.pts||0}`:String(m.elo),i-245,I+42),d.fillStyle=m.lastDelta>0?"#10b981":m.lastDelta<0?"#ef4444":"#7d7461",d.font="600 15px Inter, sans-serif",d.fillText(m.lastDelta>0?`+${m.lastDelta}`:m.lastDelta<0?`${m.lastDelta}`:"—",i-245,I+66);const f=122,w=54,C=i-214,R=I+16;He(d,C,R,f,w,12,"rgba(212, 175, 55, 0.14)"),d.strokeStyle="rgba(212, 175, 55, 0.45)",d.lineWidth=1,d.beginPath(),d.roundRect?d.roundRect(C,R,f,w,12):d.rect(C,R,f,w),d.stroke(),d.fillStyle="#ffe58f",d.font='900 32px "Barlow Condensed", sans-serif',d.textAlign="center",d.fillText(x?`${m.elo}`:`${m.pts||0}`,C+f/2,R+37)}),cr(d,i,l-52),c.toBlob(m=>{m&&(In(m,`ranking-padel-control-se-${new Date().toISOString().slice(0,10)}.png`),D("¡Imagen del Ranking descargada!"))},"image/png")}function Le(e,t={}){const{ui:a}=$;Object.assign(a,t),a.route=e,a.menuOpen=!1,a.shotSheet=null,a.playerCardTouchDrag=!1;try{const n=String(location.hash||""),r=/^#(v|live|s|r|rk_id|c|join|comp|share|rk|ranking)=/.test(n),s=e==="comp-detail"&&a.compId?"#comp="+a.compId:"#"+e;(e==="player-card"||!r)&&n!==s&&history.replaceState(null,"",s)}catch{}qa(),U.render(),window.scrollTo(0,0)}function xi(){document.documentElement.setAttribute("data-theme","dark")}function mt(e){const t=e==="competitions"||e==="comp-detail";return`
  <nav class="tabbar no-print" aria-label="Navegación principal">
    <a href="#home" data-nav="home" class="${e==="home"?"on":""}">${A.home}<span>Inicio</span></a>
    <a href="#competitions" data-nav="competitions" class="${t?"on":""}">${A.award}<span>Ligas·Torn.</span></a>
    <a href="#new" data-nav="new" class="fab" title="Nuevo partido">${A.plus}</a>
    <a href="#players" data-nav="players" class="${e==="players"?"on":""}">${A.trophy}<span>Rankings</span></a>
    <a href="#history" data-nav="history" class="${e==="history"?"on":""}">${A.hist}<span>Historial</span></a>
  </nav>`}function Ss(e){var o,i,l;const t=Vt(e),a=qe(e),n=a?J(a):null,r=(o=e==null?void 0:e.competition)!=null&&o.stageLabel?` · ${e.competition.stageLabel}`:"";let s="";return t==="league"?s=`<span class="badge league">🏅 ${h((n==null?void 0:n.name)||((i=e==null?void 0:e.competition)==null?void 0:i.compName)||"Liga")}${h(r)}</span>`:t==="tournament"?s=`<span class="badge tourn">🏆 ${h((n==null?void 0:n.name)||((l=e==null?void 0:e.competition)==null?void 0:l.compName)||"Torneo")}${h(r)}</span>`:s='<span class="badge daily">☀️ Partido del Día</span>',e!=null&&e.isWalkover&&(s+='<span class="badge ab">W.O.</span>'),s}function En(e){var o,i,l;const t=Ie(e),a=t.matchWinner,n=e.status==="playing"?'<span class="badge live">En juego</span>':e.status==="abandoned"?'<span class="badge ab">Incompleto</span>':e.isWalkover?'<span class="badge">Sin juego</span>':`<span class="badge">${h(pn(e.durationMs))}</span>`;let r="";if((a!==null||t.isDraw)&&!e.isWalkover){const c=wn(e);if(c){const d=((o=c.pair0.players[0])==null?void 0:o.delta)||0,g=((i=c.pair1.players[0])==null?void 0:i.delta)||0;if(t.isDraw){const b=Math.max(Math.abs(d),Math.abs(g));r='<span class="badge">🤝 Empate</span>'+(b>0?` <span class="badge elo" title="Ajuste ELO por empate">⚡ ELO ±${b}</span>`:"")}else{const b=a===0?c.pair0:c.pair1;r=`<span class="badge elo" title="Puntos ELO en juego">⚡ ELO ±${Math.abs(((l=b.players[0])==null?void 0:l.delta)||0)}</span>`}}}else t.isDraw&&(r='<span class="badge">🤝 Empate</span>');const s=c=>{const d=t.sets.map((g,b)=>g.games[0]===0&&g.games[1]===0&&b>0&&g.winner===null?"":`<span class="${g.winner===c?"s w":g.winner===null&&e.status==="playing"?"s cur":"s"}">${g.games[c]}</span>`).join("");return`
      <div class="mrow ${a===c?"win":""}">
        <span class="bar" style="--c:${h(e.teams[c].color)}"></span>
        <span class="nm">${h(X(e,c))}</span>
        ${a===c?`<span class="tro">${A.trophy}</span>`:""}
        ${d}
      </div>`};return`
  <button class="mcard" data-open-stats="${h(e.id)}">
    <div class="mmeta">
      <span>${h(Wa(e.createdAt))}</span>
      ${Ss(e)}
      ${r}
      ${n}
    </div>
    ${s(0)}
    ${s(1)}
  </button>`}const Kt={diamond:{id:"diamond",label:"Diamante Negro",bgTop:"#04060b",bgMid:"#0e1726",bgBot:"#030509",accent:"#38bdf8",accentBright:"#e0f2fe",accentSoft:"#bae6fd",badgeStops:["#08101f","#1e293b","#0f4c81","#7dd3fc"],courtGlow:"#0ea5e9",courtGlow2:"#6366f1",frameLight:"#ffffff",frameMid:"#94a3b8",frameDark:"#1e293b",ribbonFill:["#04070f","#111c33","#04070f"],defaultMetal:"chrome"},blue:{id:"blue",label:"Azul Premier",bgTop:"#030714",bgMid:"#091f4d",bgBot:"#020510",accent:"#2563eb",accentBright:"#38bdf8",accentSoft:"#bae6fd",badgeStops:["#08153b","#1d4ed8","#0284c7","#7dd3fc"],courtGlow:"#2563eb",courtGlow2:"#06b6d4",frameLight:"#ffffff",frameMid:"#94a3b8",frameDark:"#1e293b",ribbonFill:["#030816","#0d2659","#030816"],defaultMetal:"chrome"},purple:{id:"purple",label:"Violeta Tour",bgTop:"#060410",bgMid:"#1a0a36",bgBot:"#05040c",accent:"#a855f7",accentBright:"#e879f9",accentSoft:"#e9d5ff",badgeStops:["#2e0652","#6b21a8","#9333ea","#f0abfc"],courtGlow:"#7c3aed",courtGlow2:"#2563eb",frameLight:"#ffffff",frameMid:"#94a3b8",frameDark:"#27273a",ribbonFill:["#070512","#1d0d3d","#070512"],defaultMetal:"chrome"},gold:{id:"gold",label:"Obsidian & Oro 24K",bgTop:"#050507",bgMid:"#1c1506",bgBot:"#050507",accent:"#d4af37",accentBright:"#fde68a",accentSoft:"#fef08a",badgeStops:["#261802","#785006","#ca8a04","#fef08a"],courtGlow:"#d4af37",courtGlow2:"#f59e0b",frameLight:"#fffdf2",frameMid:"#d4af37",frameDark:"#3f2a04",ribbonFill:["#070604","#211805","#070604"],defaultMetal:"gold"},green:{id:"green",label:"Esmeralda Tour",bgTop:"#030b08",bgMid:"#062c20",bgBot:"#030907",accent:"#10b981",accentBright:"#34d399",accentSoft:"#a7f3d0",badgeStops:["#042f22","#047857","#059669","#6ee7b7"],courtGlow:"#10b981",courtGlow2:"#06b6d4",frameLight:"#ffffff",frameMid:"#94a3b8",frameDark:"#1e293b",ribbonFill:["#030c09","#073022","#030c09"],defaultMetal:"chrome"},crimson:{id:"crimson",label:"Rubí & Titanio",bgTop:"#090306",bgMid:"#2b0915",bgBot:"#070305",accent:"#ef4444",accentBright:"#fb7185",accentSoft:"#fecdd3",badgeStops:["#380612","#991b1b","#e11d48","#fda4af"],courtGlow:"#e11d48",courtGlow2:"#f97316",frameLight:"#ffffff",frameMid:"#94a3b8",frameDark:"#27272a",ribbonFill:["#0a0306","#260813","#0a0306"],defaultMetal:"chrome"}},Ea={chrome:{id:"chrome",label:"Cromo Diamante",swatch:"linear-gradient(180deg,#ffffff 0%,#e2e8f0 44%,#334155 50%,#cbd5e1 85%,#64748b 100%)",extrudeDark:"#050811",extrudeMid:"#334155",bevelTop:"#ffffff",bevelBot:"#1e293b",stops:[[0,"#ffffff"],[.24,"#f1f5f9"],[.47,"#ffffff"],[.5,"#475569"],[.56,"#94a3b8"],[.76,"#ffffff"],[.92,"#e2e8f0"],[1,"#64748b"]],edgeFaces:[["#ffffff","#cbd5e1","#94a3b8"],["#e2e8f0","#64748b","#475569"],["#94a3b8","#475569","#1e293b"],["#475569","#1e293b","#0f172a"],["#64748b","#334155","#94a3b8"],["#cbd5e1","#64748b","#334155"],["#f8fafc","#94a3b8","#64748b"],["#ffffff","#e2e8f0","#94a3b8"]]},gold:{id:"gold",label:"Oro 24K Pulido",swatch:"linear-gradient(180deg,#fffbeb 0%,#fde68a 44%,#713f12 50%,#facc15 85%,#92400e 100%)",extrudeDark:"#1c0f00",extrudeMid:"#7c4d04",bevelTop:"#fffdf5",bevelBot:"#422006",stops:[[0,"#fffdf5"],[.24,"#fef08a"],[.47,"#ffffff"],[.5,"#92400e"],[.56,"#d97706"],[.76,"#fde047"],[.92,"#fef9c3"],[1,"#b45309"]],edgeFaces:[["#fffdf2","#facc15","#b47409"],["#fef08a","#b47409","#784805"],["#ca8a04","#713f12","#422006"],["#784805","#422006","#261302"],["#a16207","#713f12","#d4af37"],["#fde68a","#a16207","#713f12"],["#fffbeb","#d4af37","#92400e"],["#ffffff","#fef08a","#ca8a04"]]},ice:{id:"ice",label:"Platino Zafiro",swatch:"linear-gradient(180deg,#ffffff 0%,#bae6fd 44%,#0c4a6e 50%,#7dd3fc 85%,#0369a1 100%)",extrudeDark:"#031124",extrudeMid:"#1e3a8a",bevelTop:"#ffffff",bevelBot:"#082f49",stops:[[0,"#ffffff"],[.24,"#e0f2fe"],[.47,"#ffffff"],[.5,"#1d4ed8"],[.56,"#38bdf8"],[.76,"#f0f9ff"],[.92,"#bae6fd"],[1,"#0284c7"]],edgeFaces:[["#ffffff","#7dd3fc","#0284c7"],["#e0f2fe","#38bdf8","#0369a1"],["#38bdf8","#1e40af","#082f49"],["#0369a1","#082f49","#031124"],["#0284c7","#1e3a8a","#7dd3fc"],["#bae6fd","#0284c7","#1e3a8a"],["#f0f9ff","#38bdf8","#0369a1"],["#ffffff","#bae6fd","#0ea5e9"]]},emerald:{id:"emerald",label:"Esmeralda Puro",swatch:"linear-gradient(180deg,#ecfdf5 0%,#6ee7b7 44%,#064e3b 50%,#10b981 85%,#047857 100%)",extrudeDark:"#011912",extrudeMid:"#065f46",bevelTop:"#ecfdf5",bevelBot:"#022c22",stops:[[0,"#ffffff"],[.22,"#a7f3d0"],[.47,"#ffffff"],[.5,"#047857"],[.56,"#10b981"],[.76,"#d1fae5"],[.92,"#6ee7b7"],[1,"#059669"]],edgeFaces:[["#ffffff","#6ee7b7","#059669"],["#d1fae5","#10b981","#047857"],["#10b981","#065f46","#022c22"],["#047857","#022c22","#011912"],["#059669","#064e3b","#34d399"],["#6ee7b7","#059669","#064e3b"],["#ecfdf5","#34d399","#047857"],["#ffffff","#a7f3d0","#10b981"]]}},Pi=["1ra","2da","3ra","4ta","5ta","6ta","7ma","8va","Libre","Suma"],Ci=["Drive","Revés","Ambos"],Ti=["Diestro","Diestra","Zurdo","Zurda"],Mi=["Víbora","Bandeja","Smash","Volea","Globo","Bajada","Dejada","Chiquita"],Et="./assets/pro-padel-logo.webp",An=new Set(["Logo PRO PÁDEL.png","./Logo PRO PÁDEL.png","logo-pro-padel.png","./logo-pro-padel.png"]),ur="padel_pc_meta_fb_v1";let Je=[],ue={logo1:null,logo2:Et,logo2Disabled:!1,subTitle:""};const Ze=new Map;let Ka=null,oa=0,xa=null,Ds=null;function ha(){return Je}function jt(){return ue}function Lo(){return++oa}function en(e){return e&&(!e.logo2Disabled&&(!e.logo2||An.has(e.logo2)||typeof e.logo2=="string"&&e.logo2.startsWith("data:image/webp;base64,UklGRiCyAABXRUJQ"))&&(e.logo2=Et),e)}function za(){return new Promise((e,t)=>{if(!window.indexedDB){t(new Error("IndexedDB not supported"));return}const a=indexedDB.open("padel_player_cards_db",1);a.onupgradeneeded=()=>{const n=a.result;n.objectStoreNames.contains("cards")||n.createObjectStore("cards",{keyPath:"id"}),n.objectStoreNames.contains("meta")||n.createObjectStore("meta",{keyPath:"key"})},a.onsuccess=()=>e(a.result),a.onerror=()=>t(a.error||new Error("IDB open failed"))})}async function Ii(){const{ui:e}=$;try{const t=await za(),a=t.transaction(["cards","meta"],"readonly"),n=a.objectStore("cards").getAll(),r=a.objectStore("meta").get("logos"),s=a.objectStore("meta").get("activeDraft");if(await new Promise(o=>{a.oncomplete=()=>o(),a.onerror=()=>o()}),Array.isArray(n.result)&&(Je=n.result.sort((o,i)=>(i.updatedAt||0)-(o.updatedAt||0))),r.result&&r.result.value&&(ue=Object.assign({logo1:null,logo2:null,logo2Disabled:!1,subTitle:""},r.result.value)),en(ue),s.result&&s.result.value&&!e.playerCardDraftDirty){const o=Object.assign(ws(),Me(s.result.value));e.playerCardDraft=o,e.route==="player-card"&&(e.playerCardAiStatus=o.cutoutPhoto?"ok":"",e.playerCardAiText=o.cutoutPhoto?"✓ Borrador y recorte restaurados":o.origPhoto?"✓ Foto del borrador restaurada":"")}t.close()}catch{try{const t=rt(ur,null);t&&(ue=Object.assign({logo1:null,logo2:null,logo2Disabled:!1,subTitle:""},t)),en(ue)}catch{}}(e.route==="player-card"||e.route==="players"||e.route==="comp-detail")&&U.render()}async function Bo(){const{ui:e}=$;if(e.playerCardDraft)try{const t=await za(),a=t.transaction(["meta"],"readwrite");a.objectStore("meta").put({key:"activeDraft",value:Me(e.playerCardDraft)}),await new Promise(n=>{a.oncomplete=()=>n(),a.onerror=()=>n()}),t.close()}catch{}}function ge(e=!1){if(xa&&clearTimeout(xa),e){xa=null,Bo();return}xa=setTimeout(()=>{xa=null,Bo()},260)}async function Rn(e){const t={id:e.id,name:e.name||"",nickname:e.nickname||"",nameKey:(e.name||"").trim().toUpperCase(),category:e.category||"6ta",age:e.age||"",position:e.position||"Drive",hand:e.hand||"Diestro",bestShot:e.bestShot||"Víbora",theme:e.theme||"diamond",metalFinish:e.metalFinish||"chrome",bgMode:e.bgMode||"ai",showAppBrand:e.showAppBrand!==!1,zoom:Number(e.zoom)||1,offsetX:Number(e.offsetX)||0,offsetY:Number(e.offsetY)||0,origPhoto:e.origPhoto||null,cutoutPhoto:e.cutoutPhoto||null,origHasAlpha:!!e.origHasAlpha,updatedAt:Date.now()},a=Je.findIndex(n=>n.id===t.id);a>=0?Je[a]=t:Je.unshift(t),Je.sort((n,r)=>(r.updatedAt||0)-(n.updatedAt||0));try{const n=await za(),r=n.transaction("cards","readwrite");return r.objectStore("cards").put(t),await new Promise((s,o)=>{r.oncomplete=()=>s(),r.onerror=()=>o(r.error)}),n.close(),!0}catch(n){return console.warn("Save card IDB error",n),!1}}async function Ei(e){Je=Je.filter(t=>t.id!==e);try{const t=await za(),a=t.transaction("cards","readwrite");a.objectStore("cards").delete(e),await new Promise(n=>{a.oncomplete=()=>n(),a.onerror=()=>n()}),t.close()}catch{}}async function va(){try{const e=await za(),t=e.transaction("meta","readwrite");t.objectStore("meta").put({key:"logos",value:ue}),await new Promise(a=>{t.oncomplete=()=>a(),t.onerror=()=>a()}),e.close()}catch{try{K(ur,{subTitle:ue.subTitle||""})}catch{}}}function ws(e={}){var i,l,c;const{ui:t}=$,a=((i=t.playerCardDraft)==null?void 0:i.theme)||"diamond",n=Kt[a]||Kt.diamond,r=((l=t.playerCardDraft)==null?void 0:l.metalFinish)||n.defaultMetal||"chrome",s=((c=t.playerCardDraft)==null?void 0:c.category)||"6ta",o=t.playerCardDraft?t.playerCardDraft.showAppBrand!==!1:!0;return{id:"pc_"+Date.now().toString(36)+"_"+Math.random().toString(36).slice(2,6),name:"",nickname:"",category:s,age:"",position:"Drive",hand:"Diestro",bestShot:"Víbora",theme:a,metalFinish:r,bgMode:"ai",showAppBrand:o,zoom:1,offsetX:0,offsetY:0,origPhoto:null,cutoutPhoto:null,origHasAlpha:!1,...e}}function pe(){const{ui:e}=$;return e.playerCardDraft||(e.playerCardDraft=ws()),e.playerCardDraft}function tn(e){const t=String(e||"").trim().toUpperCase();return t&&Je.find(a=>{var n;return(a.nameKey||((n=a.name)==null?void 0:n.trim().toUpperCase()))===t})||null}function pr(e="",t={}){const{ui:a}=$;a.playerCardReturnRoute=t.returnRoute||a.route||"home",a.playerCardTouchDrag=!1,a.playerCardDraftDirty=!0;const n=String(e||"").trim(),r=/^(DRIVE|REV[EÉ]S)\s*[12]?$/i.test(n),s=!r&&n?tn(n):null;s?(a.playerCardDraft={...Me(s)},a.playerCardAiStatus=s.cutoutPhoto?"ok":"",a.playerCardAiText=s.cutoutPhoto?"✓ Tarjeta y recorte cargados":""):(a.playerCardDraft=ws({name:r?"":n,position:t.position||"Drive"}),a.playerCardAiStatus="",a.playerCardAiText=""),ge(!0),Le("player-card")}function fr(e){if(!e)return Promise.resolve(null);const t=An.has(e)?Et:e,a=Ze.get(t);return a&&a.complete&&a.naturalWidth>0?Promise.resolve(a):new Promise(n=>{const r=new Image;r.onload=()=>{if(Ze.size>40){const s=Ze.keys().next().value;s!==void 0&&Ze.delete(s)}Ze.set(t,r),n(r)},r.onerror=()=>n(null),r.src=t})}function Ai(e){if(!e)return null;const t=An.has(e)?Et:e,a=Ze.get(t);if(a)return a.complete&&a.naturalWidth>0?a:null;const n=new Image;return n.onload=()=>{if(Ze.size>40){const r=Ze.keys().next().value;r!==void 0&&Ze.delete(r)}Ze.set(t,n),$.ui.route==="player-card"&&Ne()},n.onerror=()=>{Ze.delete(t)},Ze.set(t,n),n.src=t,null}async function Ri(e,t=1500){let a=null,n="",r=null,s=0,o=0;try{if(typeof createImageBitmap=="function")try{a=await createImageBitmap(e),r=a,s=a.width,o=a.height}catch{a=null}if(!r){n=URL.createObjectURL(e);const k=await new Promise((P,x)=>{const S=new Image;S.onload=()=>P(S),S.onerror=()=>x(new Error("No se pudo leer la imagen")),S.src=n});r=k,s=k.naturalWidth||k.width,o=k.naturalHeight||k.height}const i=Math.min(1,t/Math.max(s||1,o||1)),l=Math.max(1,Math.round((s||1)*i)),c=Math.max(1,Math.round((o||1)*i)),d=document.createElement("canvas");d.width=l,d.height=c,d.getContext("2d").drawImage(r,0,0,l,c);const y=/png|webp|svg/i.test(e.type||e.name||"")?d.toDataURL("image/png"):d.toDataURL("image/jpeg",.9);return d.width=0,d.height=0,y}finally{if(a&&typeof a.close=="function")try{a.close()}catch{}if(n)try{URL.revokeObjectURL(n)}catch{}}}async function mr(e,t=1500){const a=await Ri(e,t);return await new Promise((n,r)=>{const s=new Image;s.onload=()=>n(s),s.onerror=()=>r(new Error("No se pudo decodificar la imagen")),s.src=a})}function Li(e){try{const t=document.createElement("canvas");t.width=48,t.height=48;const a=t.getContext("2d");a.drawImage(e,0,0,48,48);const n=a.getImageData(0,0,48,48).data;for(let r=3;r<n.length;r+=4)if(n[r]<245)return!0}catch{}return!1}async function Bi(e){if(!e)return;const{ui:t}=$,a=pe();t.playerCardDraftDirty=!0,t.playerCardTouchDrag=!1,t.playerCardAiStatus="loading",t.playerCardAiText="⏳ Cargando y optimizando foto...",an();try{const n=await mr(e),s=Math.min(1,960/Math.max(n.naturalWidth||n.width,n.naturalHeight||n.height)),o=Math.max(1,Math.round((n.naturalWidth||n.width)*s)),i=Math.max(1,Math.round((n.naturalHeight||n.height)*s)),l=document.createElement("canvas");l.width=o,l.height=i,l.getContext("2d").drawImage(n,0,0,o,i);const d=Li(n);if(a.origPhoto=d?l.toDataURL("image/png"):l.toDataURL("image/jpeg",.9),l.width=0,l.height=0,a.origHasAlpha=d,a.cutoutPhoto=d?a.origPhoto:null,a.zoom=1,a.offsetX=0,a.offsetY=0,ge(!0),d){t.playerCardAiStatus="ok",t.playerCardAiText="✓ Imagen PNG sin fondo detectada",U.render();return}a.bgMode==="ai"?(U.render(),await gr(a)):(t.playerCardAiStatus="ok",t.playerCardAiText="⚡ Modo instantáneo activo",U.render())}catch(n){console.error(n),t.playerCardAiStatus="",t.playerCardAiText="",U.render(),D("No se pudo cargar esa imagen")}}async function Do(e,t){if(e)try{const a=await mr(e),r=Math.min(1,600/Math.max(a.naturalWidth||a.width,a.naturalHeight||a.height)),s=Math.max(1,Math.round((a.naturalWidth||a.width)*r)),o=Math.max(1,Math.round((a.naturalHeight||a.height)*r)),i=document.createElement("canvas");i.width=s,i.height=o,i.getContext("2d").drawImage(a,0,0,s,o);const l=i.toDataURL("image/png");t===1?ue.logo1=l:(ue.logo2=l,ue.logo2Disabled=!1),await va(),U.render(),D(`Logo ${t} guardado`)}catch{D("No se pudo cargar el logo")}}async function Di(){return Ka||(Ka=(async()=>{const t=await import("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.21/vision_bundle.mjs"),{FilesetResolver:a,ImageSegmenter:n}=t,r=await a.forVisionTasks("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.21/wasm"),s="https://storage.googleapis.com/mediapipe-models/image_segmenter/selfie_segmenter/float16/latest/selfie_segmenter.tflite";try{return await n.createFromOptions(r,{baseOptions:{modelAssetPath:s,delegate:"GPU"},runningMode:"IMAGE",outputConfidenceMasks:!0,outputCategoryMask:!1})}catch{return await n.createFromOptions(r,{baseOptions:{modelAssetPath:s,delegate:"CPU"},runningMode:"IMAGE",outputConfidenceMasks:!0,outputCategoryMask:!1})}})().catch(e=>{throw Ka=null,e})),Ka}async function gr(e){var n;const{ui:t}=$;if(!e||!e.origPhoto)return;if(e.origHasAlpha){e.cutoutPhoto=e.origPhoto,t.playerCardAiStatus="ok",t.playerCardAiText="✓ Imagen transparente lista",U.render();return}const a=++oa;t.playerCardAiBusy=!0,t.playerCardAiStatus="loading",t.playerCardAiText="✨ Recortando fondo con IA (la 1ª vez carga ~3 MB)...",an();try{const r=await Di();if(a!==oa)return;const s=await fr(e.origPhoto);if(!s||a!==oa)return;const o=s.naturalWidth||s.width,i=s.naturalHeight||s.height,l=r.segment(s),c=l.confidenceMasks||[],d=typeof r.getLabels=="function"?r.getLabels():[];let g=0;if(c.length>1){const L=d.findIndex(O=>/person|foreground|human/i.test(String(O)));g=L>=0?L:1}const b=c[g];if(!b)throw new Error("No mask returned");const y=b.width||o,k=b.height||i,P=b.getAsFloat32Array(),x=document.createElement("canvas");x.width=y,x.height=k;const S=x.getContext("2d"),m=S.createImageData(y,k),T=m.data;let I=0;for(let L=0;L<P.length;L++){const O=P[L],F=Math.max(0,Math.min(1,(O-.3)/(.7-.3))),G=Math.round(F*F*(3-2*F)*255);G>128&&I++;const E=L*4;T[E]=255,T[E+1]=255,T[E+2]=255,T[E+3]=G}S.putImageData(m,0,0);try{(n=l.close)==null||n.call(l)}catch{}if(I<P.length*.015)throw new Error("No se detectó claramente una persona en la foto");const B=document.createElement("canvas");B.width=o,B.height=i;const M=B.getContext("2d");try{M.filter="blur(1.4px)"}catch{}M.drawImage(x,0,0,o,i);try{M.filter="none"}catch{}if(M.globalCompositeOperation="source-in",M.drawImage(s,0,0,o,i),M.globalCompositeOperation="source-over",a!==oa)return;e.cutoutPhoto=B.toDataURL("image/png"),x.width=0,x.height=0,B.width=0,B.height=0,e.bgMode="ai",t.playerCardAiBusy=!1,t.playerCardAiStatus="ok",t.playerCardAiText="✓ Fondo recortado automáticamente",t.playerCardDraftDirty=!0,ge(!0),an(),Ne()}catch(r){if(a!==oa)return;console.warn("AI cutout fallback:",r),t.playerCardAiBusy=!1,e.bgMode="instant",t.playerCardAiStatus="err",t.playerCardAiText="No se pudo usar IA (sin conexión o foto compleja) · Aplicado Modo Instantáneo",t.playerCardDraftDirty=!0,ge(!0),U.render()}}function an(){const{ui:e}=$,t=document.getElementById("pc-ai-status-box");if(t){if(!e.playerCardAiText){t.style.display="none";return}t.style.display="flex",t.className="pc-ai-status "+(e.playerCardAiStatus==="ok"?"ok":e.playerCardAiStatus==="err"?"err":""),t.textContent=e.playerCardAiText}}function Aa(e,t,a,n,r,s){e.beginPath(),e.moveTo(t+s,a),e.lineTo(t+n-s,a),e.lineTo(t+n,a+s),e.lineTo(t+n,a+r-s),e.lineTo(t+n-s,a+r),e.lineTo(t+s,a+r),e.lineTo(t,a+r-s),e.lineTo(t,a+s),e.closePath()}function Ra(e,t,a,n,r,s){e.beginPath(),e.roundRect?e.roundRect(t,a,n,r,s):e.rect(t,a,n,r)}function Pa(e,t,a,n,r,s){let o=n;for(;o>r&&(e.font=s(o),!(e.measureText(t).width<=a));)o-=2;return e.font=s(o),o}function js(e,t,a,n,r){e.save(),e.translate(t,a);const s=n/120;e.scale(s,s),e.translate(-60,-60);const o=e.createLinearGradient(10,10,110,110);r.id==="purple"?(o.addColorStop(0,"#ffffff"),o.addColorStop(.35,"#e9d5ff"),o.addColorStop(.7,"#a855f7"),o.addColorStop(1,"#f5d061")):(o.addColorStop(0,"#fff6cc"),o.addColorStop(.35,"#f3d266"),o.addColorStop(.7,"#d4af37"),o.addColorStop(1,"#a87910")),Ra(e,4,4,112,112,26),e.fillStyle="#09080f",e.fill(),e.lineWidth=3,e.strokeStyle=o,e.stroke(),e.beginPath(),e.moveTo(60,14),e.lineTo(96,27),e.lineTo(96,59),e.quadraticCurveTo(96,86,60,105),e.quadraticCurveTo(24,86,24,59),e.lineTo(24,27),e.closePath(),e.fillStyle="rgba(12, 11, 20, 0.9)",e.fill(),e.lineWidth=1.6,e.strokeStyle=o,e.stroke(),e.save(),e.translate(58,57),e.rotate(-.42),e.translate(-58,-57),e.beginPath(),e.ellipse(60,46,20,24,0,0,Math.PI*2),e.fillStyle=o,e.fill(),e.beginPath(),e.ellipse(60,46,15.5,19,0,0,Math.PI*2),e.fillStyle="#09090d",e.fill(),Ra(e,56,69,8,28,3),e.fillStyle=o,e.fill(),e.fillStyle=o,[[-6,-9],[0,-10],[6,-9],[-9,-2],[-3,-2],[3,-2],[9,-2],[-8,5],[-2,5],[4,5],[10,5],[-5,11],[0,12],[5,11]].forEach(([l,c])=>{e.beginPath(),e.arc(60+l,46+c,1.7,0,Math.PI*2),e.fill()}),e.restore();const i=e.createRadialGradient(75,69,2,79,73,15);i.addColorStop(0,"#ffffff"),i.addColorStop(.5,r.accentBright),i.addColorStop(1,r.accent),e.beginPath(),e.arc(79,73,14,0,Math.PI*2),e.fillStyle=i,e.fill(),e.lineWidth=2,e.strokeStyle="#070709",e.stroke(),Ra(e,41,94,38,17,8.5),e.fillStyle="#09080c",e.fill(),e.lineWidth=1.5,e.strokeStyle=o,e.stroke(),e.fillStyle="#ffffff",e.font='italic 800 12.5px "Barlow Condensed", sans-serif',e.textAlign="center",e.textBaseline="middle",e.fillText("SÉ",60,103),e.restore()}function ji(e){if(!Ds){const t=document.createElement("canvas");t.width=16,t.height=16;const a=t.getContext("2d");a.fillStyle="#05070d",a.fillRect(0,0,16,16),a.fillStyle="#0e1422",a.fillRect(0,0,8,8),a.fillRect(8,8,8,8),a.fillStyle="rgba(255,255,255,0.065)",a.fillRect(0,0,8,3),a.fillRect(8,8,8,3),a.fillStyle="#090d16",a.fillRect(8,0,8,8),a.fillRect(0,8,8,8),a.fillStyle="rgba(255,255,255,0.03)",a.fillRect(8,4,8,2),a.fillRect(0,12,8,2),Ds=t}return e.createPattern(Ds,"repeat")}function ks(e,t){return(e?Ea[e]:void 0)||(t!=null&&t.defaultMetal?Ea[t.defaultMetal]:void 0)||Ea.chrome}function La(e,t,a,n,r="#ffffff"){e.save(),e.translate(t,a);const s=e.createRadialGradient(0,0,0,0,0,n*.9);s.addColorStop(0,"#ffffff"),s.addColorStop(.28,r+"cc"),s.addColorStop(1,"transparent"),e.fillStyle=s,e.beginPath(),e.arc(0,0,n*.9,0,Math.PI*2),e.fill(),e.fillStyle="#ffffff";const o=(i,l)=>{e.beginPath(),e.moveTo(0,-i),e.quadraticCurveTo(l*.4,-l*.4,i,0),e.quadraticCurveTo(l*.4,l*.4,0,i),e.quadraticCurveTo(-l*.4,l*.4,-i,0),e.quadraticCurveTo(-l*.4,-l*.4,0,-i),e.closePath(),e.fill()};o(n,n*.14),e.rotate(Math.PI/4),e.globalAlpha=.55,o(n*.46,n*.1),e.restore()}function Mt(e,t,a,n,r={}){const s=ks(r.metalKey,r.theme),o=r.fontSize||48,i=r.extrude??Math.max(3,Math.round(o*.08)),l=r.bevelWidth??Math.max(1.2,o*.025),c=/italic/i.test(e.font||""),d=e.measureText(t),g=d.actualBoundingBoxAscent||o*.72,b=d.actualBoundingBoxDescent||o*.08,y=e.textBaseline||"alphabetic";let k,P;if(y==="middle"?(k=n-g*.54,P=n+g*.54):y==="top"||y==="hanging"?(k=n,P=n+g):(k=n-g,P=n+Math.max(2,b)),P-k<12&&(k=n-o*.5,P=n+o*.5),e.save(),e.lineJoin="round",e.lineCap="round",i>0)for(let m=i;m>=1;m--)e.save(),m===i?(e.shadowColor="rgba(0, 0, 0, 0.90)",e.shadowBlur=Math.max(8,i*3.2),e.shadowOffsetX=i*.45,e.shadowOffsetY=i*1.1):(e.shadowColor="transparent",e.shadowBlur=0),e.fillStyle=m>i*.45?s.extrudeDark:s.extrudeMid,e.fillText(t,a+m*.46,n+m*.96),e.restore();if(r.glowColor&&(e.save(),e.shadowColor=r.glowColor,e.shadowBlur=r.glowBlur||22,e.fillStyle="rgba(255,255,255,0.01)",e.fillText(t,a,n),e.restore()),l>0){const m=e.createLinearGradient(a,k,a+(c?18:0),P);m.addColorStop(0,s.bevelTop),m.addColorStop(.5,s.extrudeMid),m.addColorStop(1,s.bevelBot),e.lineWidth=l*2,e.strokeStyle=m,e.strokeText(t,a,n)}const x=c?Math.round((P-k)*.16):0,S=e.createLinearGradient(a,k,a+x,P);s.stops.forEach(([m,T])=>S.addColorStop(m,T)),e.fillStyle=S,e.fillText(t,a,n),e.save(),e.globalAlpha=.34,e.fillStyle="#ffffff",e.fillText(t,a-.6,n-.9),e.restore(),e.restore()}function jo(e,t,a,n,r,s=20){e.beginPath(),e.moveTo(t+8,a),e.lineTo(t+n-s,a),e.lineTo(t+n,a+s),e.lineTo(t+n,a+r-8),e.quadraticCurveTo(t+n,a+r,t+n-8,a+r),e.lineTo(t+s,a+r),e.lineTo(t,a+r-s),e.lineTo(t,a+8),e.quadraticCurveTo(t,a,t+8,a),e.closePath()}function Ns(e,t,a,n,r){e.beginPath(),e.moveTo(t+26,a),e.lineTo(t+n-26,a),e.lineTo(t+n,a+26),e.lineTo(t+n-12,a+r*.72),e.lineTo(t+n*.5,a+r),e.lineTo(t+12,a+r*.74),e.lineTo(t,a+26),e.closePath()}function Ni(e,t,a,n){e.beginPath();for(let r=0;r<6;r++){const s=Math.PI/3*r-Math.PI/6,o=t+Math.cos(s)*n,i=a+Math.sin(s)*n;r===0?e.moveTo(o,i):e.lineTo(o,i)}e.closePath()}function Oi(e,t,a,n){e.save(),Ni(e,t,a,34);const r=e.createLinearGradient(t-28,a-30,t+28,a+30);r.addColorStop(0,"#162038"),r.addColorStop(.55,"#070b15"),r.addColorStop(1,"#0d1527"),e.fillStyle=r,e.fill();const s=e.createLinearGradient(t-28,a-30,t+28,a+30);s.addColorStop(0,"#ffffff"),s.addColorStop(.45,n.accentBright),s.addColorStop(1,n.accent+"66"),e.lineWidth=2.2,e.strokeStyle=s,e.stroke(),e.restore()}function _i(e,t,a,n){e.save(),e.translate(t,a),e.scale(.84,.84);const r=e.createLinearGradient(0,-24,0,24);r.addColorStop(0,"#ffffff"),r.addColorStop(.5,"#cbd5e1"),r.addColorStop(1,"#94a3b8"),e.strokeStyle=r,e.fillStyle=r,e.lineWidth=3.2,e.lineCap="round",e.lineJoin="round",Ra(e,-22,-18,44,40,7),e.stroke(),e.fillStyle=n.accentBright+"66",e.fillRect(-20,-16,40,10),e.beginPath(),e.moveTo(-22,-6),e.lineTo(22,-6),e.moveTo(-10,-25),e.lineTo(-10,-14),e.moveTo(10,-25),e.lineTo(10,-14),e.stroke(),e.fillStyle="#ffffff";for(let s=0;s<3;s++)for(let o=0;o<4;o++)e.beginPath(),e.arc(-13.5+o*9,2.5+s*7.2,2.1,0,Math.PI*2),e.fill();e.restore()}function Wi(e,t,a,n,r){e.save(),e.translate(t,a),e.scale(.84,.84);const s=-21,o=21,i=-28,l=28,c=-19,d=19,g=String(n||"").toLowerCase();(g.includes("drive")||g.includes("ambos"))&&(e.beginPath(),e.moveTo(0,c),e.lineTo(o,c),e.lineTo(l,d),e.lineTo(0,d),e.closePath(),e.fillStyle=r.accentBright+"77",e.fill()),(g.includes("rev")||g.includes("ambos"))&&(e.beginPath(),e.moveTo(s,c),e.lineTo(0,c),e.lineTo(0,d),e.lineTo(i,d),e.closePath(),e.fillStyle=r.accentBright+"77",e.fill()),e.strokeStyle="#ffffff",e.lineWidth=2.8,e.lineJoin="round",e.beginPath(),e.moveTo(s,c),e.lineTo(o,c),e.lineTo(l,d),e.lineTo(i,d),e.closePath(),e.stroke(),e.lineWidth=2.3,e.beginPath(),e.moveTo(-24.5,0),e.lineTo(24.5,0),e.moveTo(0,c),e.lineTo(0,d),e.moveTo(-22.8,-9.5),e.lineTo(22.8,-9.5),e.moveTo(-26.2,10.5),e.lineTo(26.2,10.5),e.stroke(),e.restore()}function Fi(e,t,a,n,r){e.save(),e.translate(t,a),e.scale(.84,.84),/zurd/i.test(String(n||""))||e.scale(-1,1);const o=e.createLinearGradient(0,-26,0,24);o.addColorStop(0,"#ffffff"),o.addColorStop(.55,"#cbd5e1"),o.addColorStop(1,r.accentSoft),e.fillStyle=o,e.beginPath(),e.moveTo(-14,18),e.quadraticCurveTo(-18,6,-24,-2),e.quadraticCurveTo(-27,-7,-21,-9),e.quadraticCurveTo(-17,-9,-12,0),e.lineTo(-14,-18),e.quadraticCurveTo(-14,-23,-10,-23),e.quadraticCurveTo(-6,-23,-6,-18),e.lineTo(-5,-2),e.lineTo(-4,-23),e.quadraticCurveTo(-4,-28,0,-28),e.quadraticCurveTo(4,-28,4,-23),e.lineTo(4,-3),e.lineTo(7,-21),e.quadraticCurveTo(7,-26,11,-26),e.quadraticCurveTo(15,-26,15,-20),e.lineTo(13,-1),e.lineTo(18,-14),e.quadraticCurveTo(19,-18,22,-17),e.quadraticCurveTo(25,-16,24,-11),e.lineTo(18,11),e.quadraticCurveTo(15,24,1,24),e.quadraticCurveTo(-9,24,-14,18),e.closePath(),e.fill(),e.restore()}function Gi(e,t,a,n){e.save(),e.translate(t,a),e.scale(.86,.86),e.rotate(-.62);const r=e.createLinearGradient(-15,-30,15,26);r.addColorStop(0,"#ffffff"),r.addColorStop(.5,n.accentBright),r.addColorStop(1,"#94a3b8"),e.strokeStyle=r,e.fillStyle="#ffffff",e.lineWidth=3.2,e.lineCap="round",e.lineJoin="round",e.beginPath(),e.ellipse(0,-10,15.5,19.5,0,0,Math.PI*2),e.fillStyle=n.accent+"35",e.fill(),e.stroke(),e.beginPath(),e.moveTo(-5,9),e.lineTo(-3,25),e.lineTo(3,25),e.lineTo(5,9),e.stroke(),e.fillStyle="#ffffff",[[-5,-19],[0,-20],[5,-19],[-8,-12],[-2.7,-12],[2.7,-12],[8,-12],[-7,-5],[0,-5],[7,-5],[-4,1],[4,1]].forEach(([o,i])=>{e.beginPath(),e.arc(o,i,1.9,0,Math.PI*2),e.fill()}),e.restore()}function qi(e,t,a,n,r,s){const o=ks(s,r);e.save(),e.translate(t,a),e.scale(n,n),e.save(),e.beginPath(),e.moveTo(0,-82),e.lineTo(74,-44),e.lineTo(62,54),e.lineTo(0,92),e.lineTo(-62,54),e.lineTo(-74,-44),e.closePath(),e.fillStyle="#04070f",e.shadowColor="rgba(0,0,0,0.85)",e.shadowBlur=20,e.fill();const i=e.createLinearGradient(-60,-80,60,80);i.addColorStop(0,r.accent+"58"),i.addColorStop(.5,"rgba(8, 13, 28, 0.92)"),i.addColorStop(1,r.courtGlow2+"48"),e.shadowColor=r.accent,e.shadowBlur=22,e.fillStyle=i,e.fill(),e.shadowBlur=0,e.lineWidth=2.6;const l=e.createLinearGradient(-70,-80,70,80);l.addColorStop(0,"#ffffff"),l.addColorStop(.5,r.accentBright),l.addColorStop(1,o.extrudeMid),e.strokeStyle=l,e.stroke(),e.restore(),e.save(),e.beginPath(),e.moveTo(-64,18),e.quadraticCurveTo(10,-78,72,-36),e.quadraticCurveTo(8,-56,-54,24),e.closePath(),e.fillStyle=r.accentBright+"aa",e.shadowColor=r.accentBright,e.shadowBlur=14,e.fill(),e.restore();const c=e.createLinearGradient(0,-56,20,66);o.stops.forEach(([g,b])=>c.addColorStop(g,b)),e.save(),e.fillStyle=c,e.shadowColor="rgba(0,0,0,0.85)",e.shadowBlur=14,e.shadowOffsetY=5,e.beginPath(),e.arc(-6,-34,11.5,0,Math.PI*2),e.fill(),e.beginPath(),e.moveTo(-18,-18),e.quadraticCurveTo(-34,-12,-52,4),e.quadraticCurveTo(-56,8,-48,12),e.quadraticCurveTo(-32,0,-21,-4),e.quadraticCurveTo(-24,14,-26,24),e.quadraticCurveTo(-40,42,-58,56),e.quadraticCurveTo(-63,60,-54,64),e.quadraticCurveTo(-34,52,-12,26),e.quadraticCurveTo(14,34,24,54),e.quadraticCurveTo(27,63,38,63),e.quadraticCurveTo(42,60,35,52),e.quadraticCurveTo(28,30,8,14),e.quadraticCurveTo(12,-2,16,-14),e.quadraticCurveTo(32,-26,46,-42),e.quadraticCurveTo(48,-48,41,-49),e.quadraticCurveTo(26,-35,8,-22),e.quadraticCurveTo(-4,-22,-18,-18),e.closePath(),e.fill(),e.save(),e.translate(55,-55),e.rotate(.65),e.beginPath(),e.ellipse(0,0,12.5,16.5,0,0,Math.PI*2),e.fill(),e.fillRect(-2.4,14,4.8,12),e.fillStyle="#070b15",[[-4.5,-6],[0,-7],[4.5,-6],[-5.5,0],[0,0],[5.5,0],[-3.8,6],[3.8,6]].forEach(([g,b])=>{e.beginPath(),e.arc(g,b,1.55,0,Math.PI*2),e.fill()}),e.restore(),e.beginPath(),e.arc(24,-64,5.2,0,Math.PI*2),e.fillStyle=r.accentBright,e.shadowColor=r.accentBright,e.shadowBlur=12,e.fill(),e.restore(),e.restore()}function Qa(e,t,a,n,r,s){if(!t)return;const o=t.naturalWidth||t.width,i=t.naturalHeight||t.height;if(!o||!i)return;const l=Math.min(r/o,s/i),c=o*l,d=i*l,g=a+(r-c)/2,b=n+(s-d)/2;e.save();const y=e.createRadialGradient(g+c/2,b+d/2,10,g+c/2,b+d/2,Math.max(c,d)*.68);y.addColorStop(0,"rgba(255, 255, 255, 0.14)"),y.addColorStop(1,"transparent"),e.fillStyle=y,e.fillRect(a-18,n-14,r+36,s+28),e.shadowColor="rgba(0,0,0,0.85)",e.shadowBlur=18,e.drawImage(t,g,b,c,d),e.restore()}function zi(e,t,a,n){const r=[[[24,24],[380,24],[190,280],"rgba(255,255,255,0.035)"],[[380,24],[690,24],[520,240],"rgba(255,255,255,0.018)"],[[690,24],[1056,24],[880,310],"rgba(255,255,255,0.045)"],[[24,280],[190,280],[340,560],"rgba(255,255,255,0.025)"],[[190,280],[520,240],[340,560],"rgba(0,0,0,0.18)"],[[520,240],[880,310],[640,620],"rgba(255,255,255,0.03)"],[[880,310],[1056,360],[1056,740],"rgba(0,0,0,0.22)"],[[24,580],[340,560],[210,920],"rgba(255,255,255,0.032)"],[[340,560],[640,620],[510,960],"rgba(255,255,255,0.02)"],[[640,620],[1056,740],[820,1020],"rgba(255,255,255,0.038)"],[[24,920],[510,960],[290,1140],"rgba(0,0,0,0.20)"]];e.save(),r.forEach(([o,i,l,c])=>{e.beginPath(),e.moveTo(o[0],o[1]),e.lineTo(i[0],i[1]),e.lineTo(l[0],l[1]),e.closePath(),e.fillStyle=c,e.fill(),e.lineWidth=1.2,e.strokeStyle=n.accentBright+"1c",e.stroke()}),[{x0:140,x1:420,bx0:360,bx1:680,alpha:.14},{x0:520,x1:780,bx0:200,bx1:540,alpha:.11},{x0:760,x1:990,bx0:560,bx1:940,alpha:.09}].forEach(o=>{const i=e.createLinearGradient((o.x0+o.x1)/2,40,(o.bx0+o.bx1)/2,980);i.addColorStop(0,n.accentBright+Math.round(o.alpha*255).toString(16).padStart(2,"0")),i.addColorStop(.65,n.accent+"14"),i.addColorStop(1,"transparent"),e.beginPath(),e.moveTo(o.x0,20),e.lineTo(o.x1,20),e.lineTo(o.bx1,1020),e.lineTo(o.bx0,1020),e.closePath(),e.fillStyle=i,e.fill()});for(let o=0;o<34;o++){const i=48+(o*197+43)%984,l=210+(o*151+89)%860,c=2.2+o%4*1.4;e.save(),e.translate(i,l),e.rotate(Math.PI/4),e.globalAlpha=.18+o%5*.09,e.fillStyle=o%3===0?"#ffffff":n.accentBright,e.fillRect(-c/2,-c/2,c,c),e.restore()}e.restore()}function Vi(e,t,a,n,r,s,o){const i=ks(o,s),l=n-10,c=n-10,d=t-l*2,g=a-c*2,b=r+4,y=n+6,k=n+6,P=t-y*2,x=a-k*2,S=r-3,m=[[l+b,c],[l+d-b,c],[l+d,c+b],[l+d,c+g-b],[l+d-b,c+g],[l+b,c+g],[l,c+g-b],[l,c+b]],T=[[y+S,k],[y+P-S,k],[y+P,k+S],[y+P,k+x-S],[y+P-S,k+x],[y+S,k+x],[y,k+x-S],[y,k+S]],I=i.edgeFaces||Ea.chrome.edgeFaces;e.save();for(let M=0;M<8;M++){const L=(M+1)%8,O=m[M],F=m[L],G=T[L],E=T[M];e.beginPath(),e.moveTo(O[0],O[1]),e.lineTo(F[0],F[1]),e.lineTo(G[0],G[1]),e.lineTo(E[0],E[1]),e.closePath();const p=e.createLinearGradient(O[0],O[1],G[0],G[1]),u=I[M];p.addColorStop(0,u[0]),p.addColorStop(.55,u[1]),p.addColorStop(1,u[2]),e.fillStyle=p,e.fill(),e.beginPath(),e.moveTo(O[0],O[1]),e.lineTo(E[0],E[1]),e.strokeStyle="rgba(0,0,0,0.45)",e.lineWidth=1.5,e.stroke()}Aa(e,l,c,d,g,b),e.lineWidth=2.2,e.strokeStyle="rgba(255,255,255,0.42)",e.stroke(),Aa(e,y,k,P,x,S),e.lineWidth=5,e.strokeStyle="#03050a",e.stroke(),Aa(e,y+1.5,k+1.5,P-3,x-3,S-1),e.lineWidth=2.4,e.strokeStyle=s.accentBright,e.shadowColor=s.accent,e.shadowBlur=16,e.stroke(),e.shadowBlur=0,[[(m[7][0]+m[0][0])/2,(m[7][1]+m[0][1])/2],[(m[1][0]+m[2][0])/2,(m[1][1]+m[2][1])/2],[(m[3][0]+m[4][0])/2,(m[3][1]+m[4][1])/2],[(m[5][0]+m[6][0])/2,(m[5][1]+m[6][1])/2]].forEach(([M,L])=>{e.save(),e.translate(M,L),e.rotate(Math.PI/4),e.fillStyle="#050811",e.fillRect(-7,-7,14,14),e.fillStyle=s.accentBright,e.fillRect(-4.5,-4.5,9,9),e.fillStyle="#ffffff",e.fillRect(-2,-2,4,4),e.restore()}),La(e,l+b+16,c+12,20,s.accentBright),La(e,l+d-b-10,c+g-12,18,s.accentBright),e.restore()}function br(e,t,a=null){if(!e||!t)return;const n=1080,r=1350;e.width!==n&&(e.width=n),e.height!==r&&(e.height=r);const s=e.getContext("2d");if(!s)return;const o=Kt[t.theme]||Kt.diamond,i=t.metalFinish||o.defaultMetal||"chrome",l=ks(i,o),c=ji(s),{prefs:d}=$,g=Q=>Q?a&&a.has(Q)?a.get(Q)||null:Ai(Q):null,b=t.bgMode==="ai"&&t.cutoutPhoto?t.cutoutPhoto:t.origPhoto,y=g(b),k=g(ue.logo1),P=g(ue.logo2);s.clearRect(0,0,n,r),Aa(s,8,8,n-16,r-16,52),s.fillStyle="#03050a",s.fill();const x=24,S=44;s.save(),Aa(s,x+4,x+4,n-(x+4)*2,r-(x+4)*2,S-2),s.clip();const m=s.createRadialGradient(390,520,40,540,640,920);m.addColorStop(0,o.bgMid),m.addColorStop(.55,o.bgTop),m.addColorStop(1,o.bgBot),s.fillStyle=m,s.fillRect(0,0,n,r),c&&(s.save(),s.globalAlpha=.36,s.fillStyle=c,s.fillRect(0,0,n,r),s.restore());const T=s.createRadialGradient(320,540,15,320,540,480);T.addColorStop(0,o.courtGlow+"68"),T.addColorStop(.5,o.courtGlow2+"24"),T.addColorStop(1,"transparent"),s.fillStyle=T,s.fillRect(0,0,n,r);const I=s.createRadialGradient(840,220,10,840,220,440);I.addColorStop(0,o.accentBright+"42"),I.addColorStop(1,"transparent"),s.fillStyle=I,s.fillRect(0,0,n,r);const B=s.createLinearGradient(0,810,0,r);if(B.addColorStop(0,"rgba(0,0,0,0)"),B.addColorStop(.32,o.courtGlow2+"3a"),B.addColorStop(1,o.bgBot),s.fillStyle=B,s.fillRect(0,810,n,r-810),s.save(),s.strokeStyle=o.accentBright+"34",s.lineWidth=2.6,s.beginPath(),s.moveTo(24,855),s.lineTo(n-24,855),s.moveTo(540,855),s.lineTo(540,1180),s.moveTo(180,855),s.lineTo(-40,1160),s.moveTo(900,855),s.lineTo(1120,1160),s.moveTo(24,985),s.lineTo(n-24,985),s.stroke(),s.restore(),zi(s,n,r,o),y){const Q=y.naturalWidth||y.width,te=y.naturalHeight||y.height,ye=920*(Number(t.zoom)||1)/te,le=Q*ye,re=te*ye,Qe=335+(Number(t.offsetX)||0),Ye=685+(Number(t.offsetY)||0),Nt=Qe-le/2,yt=Ye-re/2,Ha=t.bgMode==="ai"&&!!t.cutoutPhoto||t.origHasAlpha,Ot=s.createRadialGradient(Qe,Ye-60,20,Qe,Ye-40,Math.max(le,re)*.54);if(Ot.addColorStop(0,o.accentBright+"78"),Ot.addColorStop(.42,o.accent+"2a"),Ot.addColorStop(1,"transparent"),s.fillStyle=Ot,s.fillRect(24,170,740,960),Ha){const Xe=document.createElement("canvas");Xe.width=n,Xe.height=r;const Oe=Xe.getContext("2d");Oe.drawImage(y,Nt,yt,le,re);const ce=yt+re,ka=Math.max(yt,ce-86);if(ce>ka+1){Oe.globalCompositeOperation="destination-in";const aa=Oe.createLinearGradient(0,ka,0,ce);aa.addColorStop(0,"rgba(0,0,0,1)"),aa.addColorStop(1,"rgba(0,0,0,0)"),Oe.fillStyle=aa,Oe.fillRect(0,0,n,r)}s.save(),s.shadowColor="rgba(0, 0, 0, 0.85)",s.shadowBlur=34,s.drawImage(Xe,0,0),s.restore()}else{const Xe=document.createElement("canvas");Xe.width=720,Xe.height=960;const Oe=Xe.getContext("2d");Oe.drawImage(y,Nt-24,yt-180,le,re),Oe.globalCompositeOperation="destination-in";const ce=Oe.createRadialGradient(340,420,140,340,430,380);ce.addColorStop(0,"rgba(0,0,0,1)"),ce.addColorStop(.72,"rgba(0,0,0,0.92)"),ce.addColorStop(1,"rgba(0,0,0,0)"),Oe.fillStyle=ce,Oe.fillRect(0,0,720,960),s.drawImage(Xe,24,180)}}else{s.save();const Q=s.createLinearGradient(320,340,320,960);Q.addColorStop(0,o.accentBright+"28"),Q.addColorStop(.55,o.accent+"14"),Q.addColorStop(1,"transparent"),s.fillStyle=Q,s.strokeStyle=o.accentBright+"52",s.lineWidth=2.4,s.beginPath(),s.arc(322,462,86,0,Math.PI*2),s.fill(),s.stroke(),s.beginPath(),s.moveTo(156,975),s.quadraticCurveTo(176,616,322,588),s.quadraticCurveTo(468,616,488,975),s.closePath(),s.fill(),s.stroke();const te=148,se=338,ye=348,le=580,re=28;s.strokeStyle=o.accentBright+"7a",s.lineWidth=3,s.beginPath(),s.moveTo(te,se+re),s.lineTo(te,se),s.lineTo(te+re,se),s.moveTo(te+ye-re,se),s.lineTo(te+ye,se),s.lineTo(te+ye,se+re),s.moveTo(te,se+le-re),s.lineTo(te,se+le),s.lineTo(te+re,se+le),s.moveTo(te+ye-re,se+le),s.lineTo(te+ye,se+le),s.lineTo(te+ye,se+le-re),s.stroke(),Ra(s,210,742,224,54,12),s.fillStyle="rgba(4, 8, 18, 0.72)",s.fill(),s.lineWidth=1.6,s.strokeStyle=o.accentBright+"88",s.stroke(),s.textAlign="center",s.textBaseline="middle",s.font='700 22px "Chakra Petch", "Plus Jakarta Sans", sans-serif',Mt(s,"SUBÍ TU FOTO",322,769,{metalKey:i,theme:o,fontSize:22,extrude:2,bevelWidth:.9}),s.restore()}s.save(),s.beginPath(),s.moveTo(20,20),s.lineTo(1060,20),s.lineTo(1060,152),s.lineTo(20,294),s.closePath();const M=s.createLinearGradient(0,20,760,270);M.addColorStop(0,"#04060c"),M.addColorStop(.55,"#0e1324"),M.addColorStop(1,"#05070e"),s.fillStyle=M,s.fill(),s.save(),s.clip(),c&&(s.globalAlpha=.75,s.fillStyle=c,s.fillRect(0,0,n,310)),s.globalAlpha=1,s.beginPath(),s.moveTo(20,20),s.lineTo(540,20),s.lineTo(360,250),s.lineTo(20,250),s.closePath();const L=s.createLinearGradient(20,20,420,240);L.addColorStop(0,"rgba(255,255,255,0.08)"),L.addColorStop(1,"transparent"),s.fillStyle=L,s.fill(),s.restore(),s.beginPath(),s.moveTo(20,294),s.lineTo(682,202),s.strokeStyle=o.accentBright,s.lineWidth=6,s.shadowColor=o.accent,s.shadowBlur=22,s.stroke(),s.shadowBlur=0,s.beginPath(),s.moveTo(20,286),s.lineTo(678,194),s.strokeStyle="rgba(255,255,255,0.75)",s.lineWidth=1.6,s.stroke(),s.restore();const O=(ue.subTitle||"").trim()||(d.rankingName&&d.rankingName!=="Mi Ranking"?d.rankingName:"DIAMOND SERIES · PRO");k&&P?(Qa(s,k,54,42,266,168),s.save(),s.beginPath(),s.moveTo(338,72),s.lineTo(324,174),s.strokeStyle=o.accentBright+"55",s.lineWidth=2,s.stroke(),s.restore(),Qa(s,P,350,38,306,146)):k?(Qa(s,k,60,44,306,166),t.showAppBrand&&(js(s,446,110,96,o),s.save(),s.textAlign="left",s.textBaseline="alphabetic",s.font='italic 900 26px "Barlow Condensed", sans-serif',Mt(s,"PÁDEL CONTROL SÉ",504,108,{metalKey:i,theme:o,fontSize:26,extrude:3,bevelWidth:.9}),s.fillStyle=o.accentSoft,s.font='700 14px "Chakra Petch", "Plus Jakarta Sans", sans-serif',s.fillText(O.toUpperCase().slice(0,22),506,131),s.restore())):P?(js(s,124,124,128,o),s.save(),s.strokeStyle="rgba(255,255,255,0.18)",s.lineWidth=2,s.beginPath(),s.moveTo(202,178),s.lineTo(226,54),s.stroke(),s.restore(),Qa(s,P,226,36,424,156)):(js(s,142,134,150,o),s.save(),s.textAlign="left",s.textBaseline="alphabetic",s.font='italic 900 48px "Barlow Condensed", sans-serif',Mt(s,"PÁDEL CONTROL SÉ",236,122,{metalKey:i,theme:o,fontSize:48,extrude:4,bevelWidth:1.2,glowColor:o.accent+"66",glowBlur:18}),s.fillStyle=o.accentBright,s.font='700 19px "Chakra Petch", "Plus Jakarta Sans", sans-serif',s.fillText(O.toUpperCase().slice(0,26),238,156),s.restore()),s.save();const F=670,G=48,E=342,p=266;Ns(s,F,G,E,p);const u=s.createLinearGradient(F,G,F+E,G+p);o.badgeStops.forEach((Q,te)=>u.addColorStop(te/(o.badgeStops.length-1),Q)),s.shadowColor=o.accent,s.shadowBlur=38,s.fillStyle=u,s.fill(),s.save(),s.clip(),s.shadowBlur=0,c&&(s.globalAlpha=.25,s.fillStyle=c,s.fillRect(F,G,E,p)),s.globalAlpha=1,s.beginPath(),s.moveTo(F,G),s.lineTo(F+E,G),s.lineTo(F+E*.42,G+p*.56),s.lineTo(F,G+p*.34),s.closePath();const f=s.createLinearGradient(F,G,F+E,G+p*.6);f.addColorStop(0,"rgba(255,255,255,0.28)"),f.addColorStop(1,"rgba(255,255,255,0.02)"),s.fillStyle=f,s.fill(),s.beginPath(),s.moveTo(F+E*.42,G+p*.56),s.lineTo(F+E,G+26),s.lineTo(F+E,G+p),s.closePath(),s.fillStyle="rgba(0,0,0,0.22)",s.fill(),s.restore(),s.shadowBlur=0,Ns(s,F,G,E,p);const w=s.createLinearGradient(F,G,F+E,G+p);w.addColorStop(0,"#ffffff"),w.addColorStop(.48,l.stops[2][1]),w.addColorStop(.52,l.extrudeMid),w.addColorStop(1,"#ffffff"),s.lineWidth=5,s.strokeStyle=w,s.stroke(),Ns(s,F+9,G+9,E-18,p-20),s.lineWidth=1.4,s.strokeStyle="rgba(255,255,255,0.38)",s.stroke(),s.textAlign="center",s.textBaseline="middle",s.font='700 25px "Chakra Petch", "Plus Jakarta Sans", sans-serif',Mt(s,"CATEGORÍA",F+E/2,G+52,{metalKey:i,theme:o,fontSize:25,extrude:2,bevelWidth:.8}),s.strokeStyle="rgba(255,255,255,0.45)",s.lineWidth=1.8,s.beginPath(),s.moveTo(F+42,G+74),s.lineTo(F+E-42,G+74),s.stroke();const C=(t.category||"—").trim(),R=Pa(s,C,E-76,128,50,Q=>`italic 700 ${Q}px "Barlow Condensed", sans-serif`);Mt(s,C,F+E/2-4,G+160,{metalKey:i,theme:o,fontSize:R,extrude:4,bevelWidth:.85,glowColor:o.accentBright+"77",glowBlur:22}),La(s,F+E-18,G+18,28,o.accentBright),s.restore();const j=String(t.age||"").trim(),q=j?/^\d+$/.test(j)?`${j} años`:j:"—",V=(t.position||"Drive").trim(),H=(t.hand||"Diestro").trim(),ie=(t.bestShot||"Víbora").trim(),ee=[{label:"EDAD",value:q,drawIcon:(Q,te)=>_i(s,Q,te,o)},{label:"POSICIÓN",value:V,drawIcon:(Q,te)=>Wi(s,Q,te,V,o)},{label:"PERFIL",value:H,drawIcon:(Q,te)=>Fi(s,Q,te,H,o)},{label:"MEJOR GOLPE",value:ie,drawIcon:(Q,te)=>Gi(s,Q,te,o)}],Z=556,xe=474,be=128,ht=352,ea=24;ee.forEach((Q,te)=>{const se=ht+te*(be+ea);s.save(),jo(s,Z,se,xe,be,22);const ye=s.createLinearGradient(Z,se,Z+xe,se+be);ye.addColorStop(0,"rgba(7, 10, 22, 0.94)"),ye.addColorStop(.55,"rgba(13, 20, 42, 0.92)"),ye.addColorStop(1,"rgba(5, 8, 18, 0.95)"),s.shadowColor="rgba(0, 0, 0, 0.72)",s.shadowBlur=22,s.shadowOffsetY=6,s.fillStyle=ye,s.fill(),s.save(),s.clip(),s.shadowBlur=0,c&&(s.globalAlpha=.42,s.fillStyle=c,s.fillRect(Z,se,xe,be)),s.globalAlpha=1;const le=s.createRadialGradient(Z+20,se+be/2,4,Z+20,se+be/2,130);le.addColorStop(0,o.accent+"48"),le.addColorStop(1,"transparent"),s.fillStyle=le,s.fillRect(Z,se,160,be),s.fillStyle="rgba(255,255,255,0.055)",s.fillRect(Z,se,xe,be*.4),s.fillStyle=o.accentBright,s.shadowColor=o.accentBright,s.shadowBlur=12,s.fillRect(Z,se+12,6,be-28),s.restore(),s.shadowBlur=0;const re=s.createLinearGradient(Z,se,Z+xe,se+be);re.addColorStop(0,"#ffffff"),re.addColorStop(.32,l.stops[2][1]),re.addColorStop(.5,o.accentBright),re.addColorStop(.75,"#cbd5e1"),re.addColorStop(1,l.extrudeMid),s.lineWidth=2.6,s.strokeStyle=re,s.stroke(),Oi(s,Z+58,se+be/2,o),Q.drawIcon(Z+58,se+be/2),s.textAlign="left",s.textBaseline="alphabetic",s.fillStyle=o.accentSoft,s.font='700 19px "Chakra Petch", "Plus Jakarta Sans", sans-serif',s.fillText(Q.label,Z+114,se+41),s.fillStyle=o.accentBright+"66",s.fillRect(Z+114,se+48,34,2);const Qe=Pa(s,Q.value,xe-140,52,28,Ye=>`italic 700 ${Ye}px "Barlow Condensed", sans-serif`);Mt(s,Q.value,Z+114,se+104,{metalKey:i,theme:o,fontSize:Qe,extrude:2,bevelWidth:.55}),s.restore()}),s.save();const it=1106,tt=962,Ke=1286,vt=1142;s.beginPath(),s.moveTo(20,it),s.lineTo(n-20,tt),s.lineTo(n-20,vt),s.lineTo(20,Ke),s.closePath();const Pe=s.createLinearGradient(0,tt,n,Ke);Pe.addColorStop(0,o.ribbonFill[0]),Pe.addColorStop(.45,o.ribbonFill[1]),Pe.addColorStop(1,o.ribbonFill[2]),s.fillStyle=Pe,s.fill(),s.save(),s.clip(),c&&(s.globalAlpha=.65,s.fillStyle=c,s.fillRect(0,940,n,380)),s.globalAlpha=1;for(let Q=0;Q<4;Q++){const te=640+Q*28;s.beginPath(),s.moveTo(te,950),s.lineTo(te+14,950),s.lineTo(te-56,1280),s.lineTo(te-70,1280),s.closePath(),s.fillStyle=o.accentBright+"14",s.fill()}const lt=s.createLinearGradient(0,tt,0,Ke);lt.addColorStop(0,"rgba(255,255,255,0.09)"),lt.addColorStop(.48,"rgba(255,255,255,0.01)"),lt.addColorStop(.5,"rgba(0,0,0,0.35)"),lt.addColorStop(1,"transparent"),s.fillStyle=lt,s.fillRect(0,950,n,360),s.restore(),s.beginPath(),s.moveTo(20,Ke),s.lineTo(n-20,vt),s.lineTo(n-20,r-20),s.lineTo(20,r-20),s.closePath(),s.fillStyle="#04060c",s.fill(),c&&(s.save(),s.clip(),s.globalAlpha=.45,s.fillStyle=c,s.fillRect(0,1130,n,240),s.restore()),s.strokeStyle=o.accentBright,s.lineWidth=7,s.shadowColor=o.accent,s.shadowBlur=24,s.beginPath(),s.moveTo(20,it),s.lineTo(n-20,tt),s.moveTo(20,Ke),s.lineTo(n-20,vt),s.stroke(),s.shadowBlur=0,s.strokeStyle="#ffffff",s.lineWidth=2,s.beginPath(),s.moveTo(20,it),s.lineTo(n-20,tt),s.moveTo(20,Ke),s.lineTo(n-20,vt),s.stroke();const ta=Math.atan2(tt-it,n-20-20),ct=((t.name||"").trim()||"TU NOMBRE").toUpperCase(),Ce=(t.nickname||"").trim().toUpperCase();if(s.save(),s.translate(74,1188),s.rotate(ta),Ce){const Q=`« ${Ce} »`,te=Pa(s,Q,636,28,17,re=>`700 ${re}px "Chakra Petch", "Plus Jakarta Sans", sans-serif`),se=Math.min(648,Math.ceil(s.measureText(Q).width)+28),ye=Math.round(te+14);s.save(),jo(s,0,-49-ye/2,se,ye,8),s.fillStyle="rgba(4, 7, 16, 0.78)",s.fill(),s.lineWidth=1.6,s.strokeStyle=o.accentBright+"aa",s.stroke(),s.textAlign="left",s.textBaseline="middle",s.fillStyle=o.accentBright,s.shadowColor=o.accent+"88",s.shadowBlur=10,s.fillText(Q,14,-49),s.restore();const le=Pa(s,ct,668,86,38,re=>`italic 800 ${re}px "Barlow Condensed", sans-serif`);s.textAlign="left",s.textBaseline="middle",Mt(s,ct,0,22,{metalKey:i,theme:o,fontSize:le,extrude:6,bevelWidth:1.7,glowColor:o.accent+"66",glowBlur:18}),La(s,-6,22-le*.42,15,o.accentBright)}else{const Q=Pa(s,ct,668,102,42,te=>`italic 800 ${te}px "Barlow Condensed", sans-serif`);s.textAlign="left",s.textBaseline="middle",Mt(s,ct,0,0,{metalKey:i,theme:o,fontSize:Q,extrude:6,bevelWidth:1.8,glowColor:o.accent+"66",glowBlur:20}),La(s,-4,-Q*.44,17,o.accentBright)}s.restore(),qi(s,888,1094,1.3,o,i),t.showAppBrand&&(s.textAlign="left",s.textBaseline="alphabetic",s.fillStyle="rgba(226, 232, 240, 0.52)",s.font='700 15px "Chakra Petch", "Plus Jakarta Sans", sans-serif',s.fillText("PÁDEL CONTROL SÉ · DIAMOND EDITION",74,r-44)),s.restore(),s.restore(),Vi(s,n,r,x,S,o,i)}function Ne(){const e=document.getElementById("pc-preview-canvas");e&&br(e,pe())}async function Ui(){if(document.fonts&&document.fonts.ready)try{await document.fonts.ready}catch{}const e=pe(),a=[e.bgMode==="ai"&&e.cutoutPhoto?e.cutoutPhoto:e.origPhoto,ue.logo1,ue.logo2].filter(s=>!!s),n=new Map;await Promise.all(a.map(async s=>{const o=await fr(s);o&&n.set(s,o)}));const r=document.createElement("canvas");return r.width=1080,r.height=1350,br(r,e,n),new Promise(s=>{r.toBlob(o=>s(o),"image/png")})}function Hi(e){return`tarjeta-${String(e||"jugador").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")||"jugador"}-padel-se.png`}async function Ji(){const e=pe(),t=await Ui();if(!t){D("No se pudo generar la imagen");return}In(t,Hi(e.name)),D("¡Tarjeta HD descargada!")}async function Ki(){var a;const e=pe();if(!String(e.name||"").trim()){D("Ingresá el nombre del jugador antes de guardar"),(a=document.getElementById("pc-name"))==null||a.focus();return}const t=await Rn(e);U.render(),D(t?"✓ Tarjeta guardada en Mis Tarjetas":"Error al guardar en este navegador")}function Qi(){const{ui:e}=$,t=pe(),a=Oa(),n=Object.values(Kt),r=Object.values(Ea),s=Kt[t.theme]||Kt.diamond,o=t.metalFinish||s.defaultMetal||"chrome",i=e.playerCardReturnRoute&&e.playerCardReturnRoute!=="player-card"?e.playerCardReturnRoute:"home";return`
  <div class="page">
    <datalist id="pc-known-players">${a.map(l=>`<option value="${h(l)}">`).join("")}</datalist>
    <div class="page-h">
      <div class="page-h-top">
        <button class="icon-btn" data-nav="${h(i)}" title="Volver">${A.back}</button>
        <h1>Tarjeta de Jugador</h1>
        <button class="icon-btn" data-act="pc-new-blank" title="Nueva tarjeta en blanco">${A.plus}</button>
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
          <button class="btn primary big" style="width:100%" data-act="pc-download">${A.dl} Descargar Imagen HD</button>
        </div>
        <button class="btn block" data-act="pc-save">${A.check} Guardar en Mis Tarjetas (${Je.length})</button>
      </div>

      <div>
        <div class="card">
          <h3>${A.camera} Foto y Recorte</h3>
          <div class="btn-row">
            <label class="btn primary" style="cursor:pointer;flex:2 1 180px">
              ${A.up} ${t.origPhoto?"Cambiar Foto (Galería / Archivo)":"Elegir Foto (Galería / Archivos)"}
              <input type="file" id="pc-photo-inp" accept="image/jpeg,image/png,image/webp,image/heic,image/heif,image/avif,.jpg,.jpeg,.png,.webp,.heic" style="display:none">
            </label>
            ${t.origPhoto?`<button class="btn danger sm" data-act="pc-clear-photo" style="flex:0 0 auto">${A.trash} Quitar</button>`:""}
          </div>

          <div class="seg" style="margin-top:12px">
            <button class="${t.bgMode==="ai"?"on":""}" data-pc-bgmode="ai" ${e.playerCardAiBusy?"disabled":""}>✨ Recorte IA (Sin fondo)</button>
            <button class="${t.bgMode==="instant"?"on":""}" data-pc-bgmode="instant" ${e.playerCardAiBusy?"disabled":""}>⚡ Modo Instantáneo</button>
          </div>

          <div id="pc-ai-status-box" class="pc-ai-status ${e.playerCardAiStatus==="ok"?"ok":e.playerCardAiStatus==="err"?"err":""}" style="display:${e.playerCardAiText?"flex":"none"}">
            ${h(e.playerCardAiText)}
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
          <h3>${A.idCard} Datos del Jugador/a</h3>
          <div class="row wrap">
            <div class="field" style="flex:2 1 190px">
              <label for="pc-name">Nombre y Apellido</label>
              <input class="inp" id="pc-name" list="pc-known-players" value="${h(t.name||"")}" placeholder="Ej: Nestor García">
            </div>
            <div class="field" style="flex:1 1 140px">
              <label for="pc-nick">Apodo (Opcional)</label>
              <input class="inp" id="pc-nick" value="${h(t.nickname||"")}" placeholder="Ej: El Rayo">
            </div>
          </div>

          <div class="row wrap" style="margin-top:12px">
            <div class="field" style="flex:1 1 140px">
              <label for="pc-cat">Categoría</label>
              <input class="inp" id="pc-cat" value="${h(t.category||"")}" placeholder="Ej: 6ta, 4ta, Suma 10">
            </div>
            <div class="field" style="flex:0 1 130px">
              <label for="pc-age">Edad</label>
              <input class="inp" id="pc-age" inputmode="numeric" value="${h(t.age||"")}" placeholder="Ej: 52">
            </div>
          </div>
          <div class="pc-chips">
            ${Pi.map(l=>`<button class="pc-chip ${t.category===l?"on":""}" data-pc-cat="${h(l)}">${h(l)}</button>`).join("")}
          </div>

          <div class="field" style="margin-top:14px">
            <label>Posición en cancha</label>
            <div class="seg">
              ${Ci.map(l=>`<button class="${t.position===l?"on":""}" data-pc-pos="${h(l)}">${h(l)}</button>`).join("")}
            </div>
          </div>

          <div class="field" style="margin-top:14px">
            <label>Perfil (Mano hábil)</label>
            <div class="pc-chips">
              ${Ti.map(l=>`<button class="pc-chip ${t.hand===l?"on":""}" data-pc-hand="${h(l)}">${h(l)}</button>`).join("")}
            </div>
          </div>

          <div class="field" style="margin-top:14px">
            <label for="pc-shot">Mejor Golpe</label>
            <input class="inp" id="pc-shot" value="${h(t.bestShot||"")}" placeholder="Ej: Víbora, Bandeja, Smash">
            <div class="pc-chips">
              ${Mi.map(l=>`<button class="pc-chip ${t.bestShot===l?"on":""}" data-pc-shot="${h(l)}">${h(l)}</button>`).join("")}
            </div>
          </div>
        </div>

        <div class="card">
          <h3>🎨 Estilo Diamond y Logos</h3>
          <div class="field">
            <label>Tema de tarjeta</label>
            <div class="pc-themes">
              ${n.map(l=>`
                <button class="pc-theme-btn ${s.id===l.id?"on":""}" data-pc-theme="${h(l.id)}">
                  <span class="pc-theme-swatch" style="background:linear-gradient(135deg,${l.accentBright},${l.accent})"></span>
                  <span>${h(l.label)}</span>
                </button>`).join("")}
            </div>
          </div>

          <div class="field" style="margin-top:14px">
            <label>Acabado metálico 3D (Letras y Marco)</label>
            <div class="pc-themes">
              ${r.map(l=>`
                <button class="pc-theme-btn ${o===l.id?"on":""}" data-pc-metal="${h(l.id)}">
                  <span class="pc-metal-swatch" style="background:${l.swatch}"></span>
                  <span>${h(l.label)}</span>
                </button>`).join("")}
            </div>
          </div>

          <div class="pc-logos-grid" style="margin-top:14px">
            <div class="pc-logo-box">
              <small class="muted" style="font-size:11.5px;font-weight:700">Logo 1 (Izquierda)</small>
              ${ue.logo1?`<img class="pc-logo-thumb" src="${ue.logo1}" alt="Logo 1">`:'<small class="muted" style="font-size:11px">Por defecto: Logo Pádel Control SÉ</small>'}
              <div style="display:flex;gap:6px;flex-wrap:wrap;justify-content:center">
                <label class="btn sm" style="cursor:pointer">
                  ${A.up} ${ue.logo1?"Cambiar":"Subir"}
                  <input type="file" id="pc-logo1-inp" accept="image/png,image/jpeg,image/webp,image/svg+xml,.png,.jpg,.jpeg,.webp,.svg" style="display:none">
                </label>
                ${ue.logo1?`<button class="btn danger sm" data-pc-del-logo="1">${A.trash}</button>`:""}
              </div>
            </div>
            <div class="pc-logo-box">
              <small class="muted" style="font-size:11.5px;font-weight:700">Logo 2 (Centro)</small>
              ${ue.logo2?`<img class="pc-logo-thumb" src="${ue.logo2}" onerror="if(this.dataset.fb)return;this.dataset.fb='1';this.src='${Et}'" alt="Logo 2">${ue.logo2===Et?'<small class="muted" style="font-size:10.5px;color:var(--cyan2)">Predeterminado: PRO PÁDEL</small>':""}`:'<small class="muted" style="font-size:11px">Sin logo central</small>'}
              <div style="display:flex;gap:6px;flex-wrap:wrap;justify-content:center">
                <label class="btn sm" style="cursor:pointer">
                  ${A.up} ${ue.logo2?"Cambiar":"Subir"}
                  <input type="file" id="pc-logo2-inp" accept="image/png,image/jpeg,image/webp,image/svg+xml,.png,.jpg,.jpeg,.webp,.svg" style="display:none">
                </label>
                ${ue.logo2!==Et?'<button type="button" class="btn sm" data-act="pc-reset-logo2" title="Usar logo oficial PRO PÁDEL">↺ PRO PÁDEL</button>':""}
                ${ue.logo2?`<button type="button" class="btn danger sm" data-pc-del-logo="2">${A.trash}</button>`:""}
              </div>
            </div>
          </div>

          <div class="field" style="margin-top:12px">
            <label for="pc-subtitle">Texto / Club de respaldo (si quitás los logos)</label>
            <input class="inp" id="pc-subtitle" value="${h(ue.subTitle||"")}" placeholder="Ej: PRO PÁDEL · Torneo Apertura">
          </div>

          <div class="tog" style="margin-top:10px;padding:10px 0 0">
            <div><b>Mostrar sello Pádel Control SÉ</b><small>Marca sutil al pie de la tarjeta.</small></div>
            <label class="sw"><input type="checkbox" ${t.showAppBrand!==!1?"checked":""} id="pc-show-brand"><span></span></label>
          </div>
        </div>

        ${Je.length?`
        <div class="card">
          <h3>${A.idCard} Mis Tarjetas Guardadas (${Je.length})</h3>
          <div class="pc-saved-grid">
            ${Je.map(l=>{const c=(l.name||"JG").split(/\s+/).filter(Boolean).map(g=>g[0]).join("").slice(0,2).toUpperCase()||"JG",d=l.cutoutPhoto||l.origPhoto;return`
              <div class="pc-saved-card">
                <div class="pc-saved-top">
                  ${d?`<img class="pc-saved-ava" src="${d}" alt="${h(l.name)}">`:`<div class="pc-saved-ava">${h(c)}</div>`}
                  <div style="min-width:0;flex:1">
                    <b style="display:block;font-size:14px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${h(l.name||"Sin nombre")}</b>
                    <small class="muted" style="font-size:11.5px">${l.nickname?`«${h(l.nickname)}» · `:""}${h(l.category||"—")} · ${h(l.position||"")}</small>
                  </div>
                </div>
                <div style="display:flex;gap:6px">
                  <button class="btn sm" style="flex:1" data-pc-load="${h(l.id)}">Editar / Ver</button>
                  <button class="btn danger sm" data-pc-del="${h(l.id)}" title="Eliminar">${A.trash}</button>
                </div>
              </div>`}).join("")}
          </div>
        </div>`:""}
      </div>
    </div>

    ${Ct()}
  </div>
  ${mt("home")}`}const hr=1,Ln=10;function ot(e="cmp"){return`${e}_`+Math.random().toString(36).slice(2,6)+Date.now().toString(36).slice(-3)}function ze(e,t=4){const a=Math.floor(Number(e));return!Number.isFinite(a)||a<hr?t:Math.min(Ln,a)}function Ge(e,t=4){return ze(e==null?void 0:e.courtsCount,t)}function Tt(e){return(e==null?void 0:e.status)==="finished"}function vr(e){if(!e)return!1;if(e.format==="proyecto_padel")return!0;if(e.format==="open"){if(e.rankingMode==="individual")return!0;if(e.rankingMode==="both"){const t=e.participants||[],a=t.some(r=>r.type==="pair");return t.some(r=>r.type==="player")&&!a}}return!1}function Va(e,t=Math.random){const a=[...e];for(let n=a.length-1;n>0;n--){const r=Math.floor(t()*(n+1)),s=a[n];a[n]=a[r],a[r]=s}return a}function gt(e,t=null){var a,n;if(!e)return null;if(e.type==="pair"){const r=(((a=e.players)==null?void 0:a[0])||"").trim()||"DRIVE",s=(((n=e.players)==null?void 0:n[1])||"").trim()||"REVÉS";return{players:[r,s],color:e.color||"#d4af37",label:$e(r,s),participantId:e.id,...t?{teamNum:t}:{}}}return{players:[e.name||"Jugador",""],color:e.color||"#d4af37",label:e.name||"Jugador",participantId:e.id,...t?{teamNum:t}:{}}}function Yi(e){return String(e||"").trim().toUpperCase()}function Bn(e){const t=new Map;return(e||[]).forEach((a,n)=>{a!=null&&a.id&&t.set(a.id,n+1)}),t}function sn(e,t=[]){const a=(e.participants||[]).filter(P=>P.type==="player"&&!P.paused&&!!(P.name||"").trim()),n=new Map,r=P=>{const x=Yi(P);if(!x)return-1;let S=n.get(x);return S===void 0&&(S=n.size,n.set(x,S)),S};a.forEach(P=>{r(P.name)});const s=(e.fixtures||[]).filter(P=>!P.isBye&&P.team0&&P.team1);s.forEach(P=>{var x,S;(((x=P.team0)==null?void 0:x.players)||[]).forEach(r),(((S=P.team1)==null?void 0:S.players)||[]).forEach(r)});const o=new Set(s.map(P=>P.matchId).filter(P=>!!P)),i=(t||[]).filter(P=>qe(P)===e.id&&!o.has(P.id));i.forEach(P=>{(P.teams||[]).forEach(x=>(x.players||[]).forEach(r))});const l=Math.max(1,n.size),c=new Array(l).fill(0),d=new Array(l).fill(-1),g=Array.from({length:l},()=>new Array(l).fill(0)),b=Array.from({length:l},()=>new Array(l).fill(0)),y=(P,x,S)=>{const m=P.map(r).filter(I=>I>=0),T=x.map(r).filter(I=>I>=0);m.length===2&&(g[m[0]][m[1]]++,g[m[1]][m[0]]++),T.length===2&&(g[T[0]][T[1]]++,g[T[1]][T[0]]++),m.forEach(I=>{T.forEach(B=>{b[I][B]++,b[B][I]++})}),[...m,...T].forEach(I=>{c[I]++,S>d[I]&&(d[I]=S)})};let k=-1;return(e.fixtures||[]).forEach(P=>{P.roundIdx>k&&(k=P.roundIdx),!P.isBye&&P.team0&&P.team1&&y(P.team0.players||[],P.team1.players||[],P.roundIdx)}),i.forEach((P,x)=>{var S,m,T,I;y(((m=(S=P.teams)==null?void 0:S[0])==null?void 0:m.players)||[],((I=(T=P.teams)==null?void 0:T[1])==null?void 0:I.players)||[],k+1+x)}),{activePlayers:a,activeCount:a.length,playCount:c,lastRound:d,partnerCount:g,opponentCount:b,maxRoundIdx:k}}function Os(e,t,a){const[n,r,s,o]=e,i=[[[n,r],[s,o]],[[n,s],[r,o]],[[n,o],[r,s]]];let l=i[0],c=1/0;for(const[d,g]of i){const b=t[d[0]][d[1]],y=t[g[0]][g[1]],k=(b*b+y*y)*1e4,P=a[d[0]][g[0]],x=a[d[0]][g[1]],S=a[d[1]][g[0]],m=a[d[1]][g[1]],T=(P*P+x*x+S*S+m*m)*100,I=k+T;I<c&&(c=I,l=[d,g])}return{t0:l[0],t1:l[1],cost:c}}function Xi(e,t,a,n,r){const s=t<=4?48:28,o=[];for(let d=0;d<s;d++){const g=Va(e,r),b=[],y=[];let k=0;for(let P=0;P<t;P++){const x=[g[4*P],g[4*P+1],g[4*P+2],g[4*P+3]];b.push(x);const S=Os(x,a,n);y.push(S),k+=S.cost}if(o.push({quads:b,splits:y,totalCost:k}),k===0)return{splits:y,totalCost:0}}o.sort((d,g)=>d.totalCost-g.totalCost);const i=t<=1?1:Math.min(6,o.length);let l=o[0].splits,c=o[0].totalCost;if(t>1)for(let d=0;d<i;d++){const g=o[d],{quads:b,splits:y}=g;let k=g.totalCost;for(let P=0;P<6;P++){let x=!1;for(let S=0;S<t-1;S++)for(let m=S+1;m<t;m++)for(let T=0;T<4;T++)for(let I=0;I<4;I++){const B=b[S],M=b[m],L=B[T];B[T]=M[I],M[I]=L;const O=Os(B,a,n),F=Os(M,a,n),G=O.cost+F.cost-(y[S].cost+y[m].cost);G<0?(y[S]=O,y[m]=F,k+=G,x=!0):(M[I]=B[T],B[T]=L)}if(!x||k===0)break}if(k<c&&(c=k,l=y,c===0))break}return{splits:l,totalCost:c}}function Dn(e,t){const a=Math.max(0,Math.floor(e));if(a<4)return 0;const n=Math.min(ze(t,4),Math.floor(a/4));return a===4?3:a%4===0&&n*4===a?a-1:a}function yr(e,t,a,n={}){const r=n.rng||Math.random,s=n.phase||"social",o=n.group||null,i=Math.min(ze(a,4),Math.floor(e.activeCount/4));if(i<1)return{fixtures:[],cost:0};const l=e.activePlayers.map(()=>r()),c=Array.from({length:e.activeCount},(x,S)=>S).sort((x,S)=>e.playCount[x]-e.playCount[S]||e.lastRound[x]-e.lastRound[S]||l[x]-l[S]),d=c.slice(0,i*4),g=c.slice(i*4).map(x=>{var S;return(((S=e.activePlayers[x])==null?void 0:S.name)||"").trim()}).filter(Boolean),{splits:b,totalCost:y}=Xi(d,i,e.partnerCount,e.opponentCount,r),k=o?`Grupo ${o} · Ronda ${t+1}`:`Ronda ${t+1}`;return{fixtures:b.map((x,S)=>{const m=e.activePlayers[x.t0[0]],T=e.activePlayers[x.t0[1]],I=e.activePlayers[x.t1[0]],B=e.activePlayers[x.t1[1]];return e.partnerCount[x.t0[0]][x.t0[1]]++,e.partnerCount[x.t0[1]][x.t0[0]]++,e.partnerCount[x.t1[0]][x.t1[1]]++,e.partnerCount[x.t1[1]][x.t1[0]]++,x.t0.forEach(M=>{x.t1.forEach(L=>{e.opponentCount[M][L]++,e.opponentCount[L][M]++})}),[...x.t0,...x.t1].forEach(M=>{e.playCount[M]++,t>e.lastRound[M]&&(e.lastRound[M]=t)}),{id:ot("fx"),phase:s,roundIdx:t,roundLabel:k,slotIdx:S,group:o,...n.assignCourt!==!1?{court:S+1}:{},...S===0&&g.length?{resting:g}:{},team0:{players:[m.name||"Jugador",T.name||"Jugador"],color:m.color||"#d4af37",label:$e(m.name,T.name)},team1:{players:[I.name||"Jugador",B.name||"Jugador"],color:I.color||"#2f8cff",label:$e(I.name,B.name)},source0:null,source1:null,matchId:null,winnerSide:null,isBye:!1}}),cost:y}}function Zi(e,t=[],a={}){const n=sn(e,t);if(n.activeCount<4)return[];const r=a.courtsCount!==void 0?ze(a.courtsCount,4):Ge(e),s=n.maxRoundIdx+1;return yr(n,s,r,{phase:a.phase||"social",group:a.group||null,rng:a.rng,assignCourt:!0}).fixtures}function $r(e,t=[],a={}){const n=a.ignoreExistingFixtures?{...e,fixtures:[]}:e,r=sn(n,t);if(r.activeCount<4)return[];const s=a.courtsCount!==void 0?ze(a.courtsCount,4):Ge(e),o=a.roundsCount??Dn(r.activeCount,s);if(o<=0)return[];const i=r.activeCount<=12?4:2;let l=[],c=1/0;for(let d=0;d<i;d++){const g=sn(n,t),b=g.maxRoundIdx+1,y=[];let k=0;for(let P=0;P<o;P++){const x=yr(g,b+P,s,{phase:a.phase||"social",group:a.group||null,rng:a.rng,assignCourt:a.assignCourt});y.push(...x.fixtures),k+=x.cost}if(k<c&&(c=k,l=y,c===0))break}return l}function el(e,t=[],a={}){const n=a.rng||Math.random,r=Bn(e.participants),s=(e.participants||[]).filter(E=>E.type==="pair"&&!E.paused);if(s.length<2)return[];const o=a.courtsCount!==void 0?ze(a.courtsCount,4):Ge(e),i=Math.min(o,Math.floor(s.length/2));if(i<1)return[];const l=new Map;s.forEach((E,p)=>{var u,f;l.set(da((u=E.players)==null?void 0:u[0],(f=E.players)==null?void 0:f[1]),p)});const c=s.length,d=new Array(c).fill(0),g=new Array(c).fill(-1),b=Array.from({length:c},()=>new Array(c).fill(0)),y=(e.fixtures||[]).filter(E=>!E.isBye&&E.team0&&E.team1),k=new Set(y.map(E=>E.matchId).filter(E=>!!E));let P=-1;const x=(E,p,u)=>{const f=l.get(da(E[0],E[1])),w=l.get(da(p[0],p[1]));f!==void 0&&(d[f]++,u>g[f]&&(g[f]=u)),w!==void 0&&(d[w]++,u>g[w]&&(g[w]=u)),f!==void 0&&w!==void 0&&(b[f][w]++,b[w][f]++)};(e.fixtures||[]).forEach(E=>{E.roundIdx>P&&(P=E.roundIdx),!E.isBye&&E.team0&&E.team1&&x(E.team0.players||[],E.team1.players||[],E.roundIdx)}),(t||[]).filter(E=>qe(E)===e.id&&!k.has(E.id)).forEach((E,p)=>{var u,f,w,C;x(((f=(u=E.teams)==null?void 0:u[0])==null?void 0:f.players)||[],((C=(w=E.teams)==null?void 0:w[1])==null?void 0:C.players)||[],P+1+p)});const S=s.map(()=>n()),m=Array.from({length:c},(E,p)=>p).sort((E,p)=>d[E]-d[p]||g[E]-g[p]||S[E]-S[p]),T=m.slice(0,i*2),I=m.slice(i*2).map(E=>{var p,u;return $e((p=s[E].players)==null?void 0:p[0],(u=s[E].players)==null?void 0:u[1])}).filter(Boolean);let B=[...T],M=1/0;const L=i<=5?80:40,O=(E,p)=>{const u=b[E][p];return u*u*100};for(let E=0;E<L;E++){const p=Va(T,n);let u=0;for(let f=0;f<i;f++)u+=O(p[2*f],p[2*f+1]);if(i>1&&u>0)for(let f=0;f<10;f++){let w=!1;for(let C=0;C<i-1;C++)for(let R=C+1;R<i;R++)for(let j=0;j<2;j++)for(let q=0;q<2;q++){const V=2*C+j,H=2*R+q,ie=O(p[2*C],p[2*C+1])+O(p[2*R],p[2*R+1]),ee=p[V];p[V]=p[H],p[H]=ee;const Z=O(p[2*C],p[2*C+1])+O(p[2*R],p[2*R+1]);Z<ie?(u+=Z-ie,w=!0):(p[H]=p[V],p[V]=ee)}if(!w||u===0)break}if(u<M&&(M=u,B=p,M===0))break}const F=P+1,G=[];for(let E=0;E<i;E++){const p=s[B[2*E]],u=s[B[2*E+1]];G.push({id:ot("fx"),phase:"league",roundIdx:F,roundLabel:`Fecha ${F+1}`,slotIdx:E,group:null,court:E+1,...E===0&&I.length?{resting:I}:{},team0:gt(p,r.get(p.id)||null),team1:gt(u,r.get(u.id)||null),source0:null,source1:null,matchId:null,winnerSide:null,isBye:!1})}return G}function Sr(e,t={}){const a=t.participants||e.participants||[],n=t.phase||"league",r=t.group||null,s=!!t.doubleRound,o=t.rng||Math.random,i=t.courtsCount!==void 0,l=i?ze(t.courtsCount,4):0,c=a.length>=4&&a.every(m=>m.type==="player"),d=[];if(c){const m=a.filter(B=>!B.paused);if(m.length<4)return d;const T=i?l:Math.floor(m.length/4),I=Dn(m.length,T);return $r({id:e.id||"rr",participants:m,fixtures:[],courtsCount:T},t.historyMatches||[],{roundsCount:I,courtsCount:T,phase:n,group:r,rng:o,ignoreExistingFixtures:!0,assignCourt:i})}const g=t.indexedParticipants||a.map((m,T)=>({part:m,teamNum:T+1}));if(g.length<2)return d;const y=[...t.shuffle?Va(g,o):[...g]];y.length%2===1&&y.push(null);const k=y.length,P=k-1,x=[...y],S=(m,T)=>{const I=[...x];for(let B=0;B<P;B++){let M=0;for(let O=0;O<k/2;O++){const F=I[O],G=I[k-1-O];if(F&&G){const E=T?O%2===0:B%2===1&&O===0,p=E?G:F,u=E?F:G,f=B+m,w=M++;d.push({id:ot("fx"),phase:n,roundIdx:f,roundLabel:r?`Grupo ${r} · Fecha ${f+1}`:`Fecha ${f+1}`,slotIdx:w,group:r,...l>0?{court:w%l+1}:{},team0:gt(p.part,p.teamNum),team1:gt(u.part,u.teamNum),source0:null,source1:null,matchId:null,winnerSide:null,isBye:!1})}}const L=I.pop();I.splice(1,0,L)}};return S(0,!1),s&&S(P,!0),d}function tl(e,t=2,a={}){const n=e.participants||[];if(n.length<4)return[];const r=Math.max(2,Math.min(4,Number(t)||2)),s=["A","B","C","D"].slice(0,r),o=a.rng||Math.random,l=a.courtsCount!==void 0?ze(a.courtsCount,4):0;if(a.shuffle){const g={};s.forEach(k=>{g[k]=0});const b=[];n.forEach(k=>{k.groupManual&&k.group&&s.includes(k.group)?g[k.group]++:(k.groupManual=!1,b.push(k))}),Va(b,o).forEach(k=>{let P=s[0],x=1/0;s.forEach(S=>{g[S]<x&&(x=g[S],P=S)}),k.group=P,g[P]++})}else n.forEach((g,b)=>{(!g.group||!s.includes(g.group))&&(g.group=s[b%r])});const c=Bn(n),d=[];if(s.forEach(g=>{const b=n.filter(y=>y.group===g);if(b.length>=2){const y=b.map(k=>({part:k,teamNum:c.get(k.id)||0}));d.push(...Sr(e,{participants:b,indexedParticipants:y,phase:"group",group:g,shuffle:a.shuffle,rng:o}))}}),l>0){const g=new Map;d.forEach(b=>{g.has(b.roundIdx)||g.set(b.roundIdx,[]),g.get(b.roundIdx).push(b)}),g.forEach(b=>{b.forEach((y,k)=>{y.court=k%l+1})})}return d}function No(e){return e===1?"Final":e===2?"Semifinales":e===4?"Cuartos de Final":e===8?"Octavos de Final":`Ronda de ${e*2}`}function al(e){let t=[0,1],a=2;for(;a<e;)a*=2,t=t.flatMap((n,r)=>r%2===0?[n,a-1-n]:[a-1-n,n]);return t}function wr(e,t=null,a={}){const n=a.rng||Math.random,s=a.courtsCount!==void 0?ze(a.courtsCount,4):0;let o=(t||(e.participants||[]).map((x,S)=>gt(x,S+1))).filter(x=>!!x);if(o.length<2)return[];a.shuffle&&(o=Va(o,n));let i=2;for(;i<o.length&&i<32;)i*=2;const l=al(i),c=[],d=i/2,g=No(d),b=[];let y=0;for(let x=0;x<d;x++){const S=l[2*x],m=l[2*x+1],T=S<o.length?Me(o[S]):null,I=m<o.length?Me(o[m]):null,B=!!(T&&!I||!T&&I),M={id:ot("fx"),phase:"playoff",roundIdx:0,roundLabel:g,slotIdx:x,group:null,...!B&&s>0?{court:y++%s+1}:{},team0:T,team1:I,source0:null,source1:null,matchId:null,winnerSide:B?T?0:1:null,isBye:B};b.push(M),c.push(M)}let k=b,P=1;for(;k.length>1;){const x=k.length/2,S=No(x),m=[];for(let T=0;T<x;T++){const I={id:ot("fx"),phase:"playoff",roundIdx:P,roundLabel:S,slotIdx:T,group:null,...s>0?{court:T%s+1}:{},team0:null,team1:null,source0:{fixtureId:k[2*T].id,pick:"winner"},source1:{fixtureId:k[2*T+1].id,pick:"winner"},matchId:null,winnerSide:null,isBye:!1};m.push(I),c.push(I)}k=m,P++}return c}function kr(e,t,a=null){if(!e||!Array.isArray(e.fixtures))return;const n=new Map(e.fixtures.map(o=>[o.id,o])),r=o=>o?a&&a.id===o?a:t.find(i=>i.id===o)||null:null;e.fixtures.forEach(o=>{if(o.isBye){o.winnerSide=o.team0?0:o.team1?1:null;return}if(o.matchId){const i=r(o.matchId);if(!i)o.matchId=null,o.winnerSide=null;else{const l=Ie(i);o.winnerSide=l.isDraw?"draw":l.matchWinner!==null?l.matchWinner:null}}}),e.fixtures.filter(o=>o.phase==="playoff").sort((o,i)=>o.roundIdx-i.roundIdx||o.slotIdx-i.slotIdx).forEach(o=>{const i=l=>{if(!l||!l.fixtureId)return null;const c=n.get(l.fixtureId);if(!c||c.winnerSide===null||c.winnerSide===void 0)return null;const d=c.winnerSide===0?c.team0:c.team1;return d?Me(d):null};if(o.source0){const l=i(o.source0);o.matchId||(o.team0=l)}if(o.source1){const l=i(o.source1);o.matchId||(o.team1=l)}})}function xr(e,t,a){const n=gn(e),r=(a||[]).filter(d=>qe(d)===e.id),s=new Set((e.fixtures||[]).filter(d=>d.phase==="group"&&d.group===t).map(d=>d.id)),o=r.filter(d=>{var g;return((g=d.competition)==null?void 0:g.fixtureId)&&s.has(d.competition.fixtureId)}),i=(e.participants||[]).filter(d=>d.group===t),l=e.rankingMode==="individual"?"individual":"pairs",c=Xt(o,{...n,entityMode:l,eloBaseMatches:r,seedParticipants:i});return c.sort((d,g)=>g.pts-d.pts||g.setsDiff-d.setsDiff||g.gamesDiff-d.gamesDiff||g.wins-d.wins||g.elo-d.elo),c}function sl(e,t){var c,d,g,b;if(!e)return!1;const a=Array.from(new Set((e.participants||[]).map(y=>y.group).filter(y=>!!y))).sort();if(a.length<2)return!1;const n=Bn(e.participants),r=Math.max(1,Number(e.advancePerGroup)||2),s=a.map(y=>xr(e,y,t).slice(0,r).map(P=>{const x=(e.participants||[]).find(S=>{var m,T;return S.type==="pair"?da((m=S.players)==null?void 0:m[0],(T=S.players)==null?void 0:T[1])===P.key:(S.name||"").trim().toUpperCase()===P.key});return x?gt(x,n.get(x.id)||null):{players:[P.name,""],color:P.color||"#d4af37",label:P.name}})),o=[];for(let y=0;y<r;y++)if(y%2===0)for(let k=0;k<a.length;k++)(c=s[k])!=null&&c[y]&&o.push(s[k][y]);else if(a.length===2)for(let k=0;k<a.length;k++)(d=s[k])!=null&&d[y]&&o.push(s[k][y]);else if(a.length===4)for(let k=0;k<a.length;k++){const P=k^1;(g=s[P])!=null&&g[y]&&o.push(s[P][y])}else for(let k=0;k<a.length;k++){const P=(k+1)%a.length;(b=s[P])!=null&&b[y]&&o.push(s[P][y])}if(o.length<2)return!1;const i=(e.fixtures||[]).filter(y=>y.phase!=="playoff"),l=wr(e,o,{...e.courtsCount?{courtsCount:e.courtsCount}:{}});return e.fixtures=[...i,...l],kr(e,t),!0}function nl(e,t,a="auto",n=!1){if(n)return a==="0"||a==="1"?{ok:!0,winnerSide:Number(a),isDraw:!1}:{ok:!1,error:"Elegí qué pareja ganó por W.O."};if(a==="0"||a==="1")return{ok:!0,winnerSide:Number(a),isDraw:!1};let r=0,s=0,o=0,i=0;return(t||[]).forEach(l=>{const c=Number(l[0])||0,d=Number(l[1])||0;o+=c,i+=d,c>d?r++:d>c&&s++}),a==="draw"?r!==s||o!==i?{ok:!1,error:"Para guardar empate, ambos lados deben igualar el marcador"}:{ok:!0,winnerSide:"draw",isDraw:!0}:r>s?{ok:!0,winnerSide:0,isDraw:!1}:s>r?{ok:!0,winnerSide:1,isDraw:!1}:we(e)&&o===i?{ok:!0,winnerSide:"draw",isDraw:!0}:{ok:!1,error:"Empate en sets: elegí manualmente la pareja ganadora"}}/*! QRious v4.0.2 | (C) 2017 Alasdair Mercer | GPL v3 License | Based on jsqrencode | (C) 2010 tz@execpc.com */const ol=function(){function e(p,u){var f;return typeof Object.create=="function"?f=Object.create(p):(r.prototype=p,f=new r,r.prototype=null),u&&a(!0,f,u),f}function t(p,u,f,w){var C=this;return typeof p!="string"&&(w=f,f=u,u=p,p=null),typeof u!="function"&&(w=f,f=u,u=function(){return C.apply(this,arguments)}),a(!1,u,C,w),u.prototype=e(C.prototype,f),u.prototype.constructor=u,u.class_=p||C.class_,u.super_=C,u}function a(p,u,f){for(var w,C,R=0,j=(f=o.call(arguments,2)).length;R<j;R++){C=f[R];for(w in C)p&&!s.call(C,w)||(u[w]=C[w])}}function n(){}var r=function(){},s=Object.prototype.hasOwnProperty,o=Array.prototype.slice,i=t;n.class_="Nevis",n.super_=Object,n.extend=i;var l=n,c=l.extend(function(p,u,f){this.qrious=p,this.element=u,this.element.qrious=p,this.enabled=!!f},{draw:function(p){},getElement:function(){return this.enabled||(this.enabled=!0,this.render()),this.element},getModuleSize:function(p){var u=this.qrious,f=u.padding||0,w=Math.floor((u.size-2*f)/p.width);return Math.max(1,w)},getOffset:function(p){var u=this.qrious,f=u.padding;if(f!=null)return f;var w=this.getModuleSize(p),C=Math.floor((u.size-w*p.width)/2);return Math.max(0,C)},render:function(p){this.enabled&&(this.resize(),this.reset(),this.draw(p))},reset:function(){},resize:function(){}}),d=c.extend({draw:function(p){var u,f,w=this.qrious,C=this.getModuleSize(p),R=this.getOffset(p),j=this.element.getContext("2d");for(j.fillStyle=w.foreground,j.globalAlpha=w.foregroundAlpha,u=0;u<p.width;u++)for(f=0;f<p.width;f++)p.buffer[f*p.width+u]&&j.fillRect(C*u+R,C*f+R,C,C)},reset:function(){var p=this.qrious,u=this.element.getContext("2d"),f=p.size;u.lineWidth=1,u.clearRect(0,0,f,f),u.fillStyle=p.background,u.globalAlpha=p.backgroundAlpha,u.fillRect(0,0,f,f)},resize:function(){var p=this.element;p.width=p.height=this.qrious.size}}),g=l.extend(null,{BLOCK:[0,11,15,19,23,27,31,16,18,20,22,24,26,28,20,22,24,24,26,28,28,22,24,24,26,26,28,28,24,24,26,26,26,28,28,24,26,26,26,28,28]}),b=l.extend(null,{BLOCKS:[1,0,19,7,1,0,16,10,1,0,13,13,1,0,9,17,1,0,34,10,1,0,28,16,1,0,22,22,1,0,16,28,1,0,55,15,1,0,44,26,2,0,17,18,2,0,13,22,1,0,80,20,2,0,32,18,2,0,24,26,4,0,9,16,1,0,108,26,2,0,43,24,2,2,15,18,2,2,11,22,2,0,68,18,4,0,27,16,4,0,19,24,4,0,15,28,2,0,78,20,4,0,31,18,2,4,14,18,4,1,13,26,2,0,97,24,2,2,38,22,4,2,18,22,4,2,14,26,2,0,116,30,3,2,36,22,4,4,16,20,4,4,12,24,2,2,68,18,4,1,43,26,6,2,19,24,6,2,15,28,4,0,81,20,1,4,50,30,4,4,22,28,3,8,12,24,2,2,92,24,6,2,36,22,4,6,20,26,7,4,14,28,4,0,107,26,8,1,37,22,8,4,20,24,12,4,11,22,3,1,115,30,4,5,40,24,11,5,16,20,11,5,12,24,5,1,87,22,5,5,41,24,5,7,24,30,11,7,12,24,5,1,98,24,7,3,45,28,15,2,19,24,3,13,15,30,1,5,107,28,10,1,46,28,1,15,22,28,2,17,14,28,5,1,120,30,9,4,43,26,17,1,22,28,2,19,14,28,3,4,113,28,3,11,44,26,17,4,21,26,9,16,13,26,3,5,107,28,3,13,41,26,15,5,24,30,15,10,15,28,4,4,116,28,17,0,42,26,17,6,22,28,19,6,16,30,2,7,111,28,17,0,46,28,7,16,24,30,34,0,13,24,4,5,121,30,4,14,47,28,11,14,24,30,16,14,15,30,6,4,117,30,6,14,45,28,11,16,24,30,30,2,16,30,8,4,106,26,8,13,47,28,7,22,24,30,22,13,15,30,10,2,114,28,19,4,46,28,28,6,22,28,33,4,16,30,8,4,122,30,22,3,45,28,8,26,23,30,12,28,15,30,3,10,117,30,3,23,45,28,4,31,24,30,11,31,15,30,7,7,116,30,21,7,45,28,1,37,23,30,19,26,15,30,5,10,115,30,19,10,47,28,15,25,24,30,23,25,15,30,13,3,115,30,2,29,46,28,42,1,24,30,23,28,15,30,17,0,115,30,10,23,46,28,10,35,24,30,19,35,15,30,17,1,115,30,14,21,46,28,29,19,24,30,11,46,15,30,13,6,115,30,14,23,46,28,44,7,24,30,59,1,16,30,12,7,121,30,12,26,47,28,39,14,24,30,22,41,15,30,6,14,121,30,6,34,47,28,46,10,24,30,2,64,15,30,17,4,122,30,29,14,46,28,49,10,24,30,24,46,15,30,4,18,122,30,13,32,46,28,48,14,24,30,42,32,15,30,20,4,117,30,40,7,47,28,43,22,24,30,10,67,15,30,19,6,118,30,18,31,47,28,34,34,24,30,20,61,15,30],FINAL_FORMAT:[30660,29427,32170,30877,26159,25368,27713,26998,21522,20773,24188,23371,17913,16590,20375,19104,13663,12392,16177,14854,9396,8579,11994,11245,5769,5054,7399,6608,1890,597,3340,2107],LEVELS:{L:1,M:2,Q:3,H:4}}),y=l.extend(null,{EXPONENT:[1,2,4,8,16,32,64,128,29,58,116,232,205,135,19,38,76,152,45,90,180,117,234,201,143,3,6,12,24,48,96,192,157,39,78,156,37,74,148,53,106,212,181,119,238,193,159,35,70,140,5,10,20,40,80,160,93,186,105,210,185,111,222,161,95,190,97,194,153,47,94,188,101,202,137,15,30,60,120,240,253,231,211,187,107,214,177,127,254,225,223,163,91,182,113,226,217,175,67,134,17,34,68,136,13,26,52,104,208,189,103,206,129,31,62,124,248,237,199,147,59,118,236,197,151,51,102,204,133,23,46,92,184,109,218,169,79,158,33,66,132,21,42,84,168,77,154,41,82,164,85,170,73,146,57,114,228,213,183,115,230,209,191,99,198,145,63,126,252,229,215,179,123,246,241,255,227,219,171,75,150,49,98,196,149,55,110,220,165,87,174,65,130,25,50,100,200,141,7,14,28,56,112,224,221,167,83,166,81,162,89,178,121,242,249,239,195,155,43,86,172,69,138,9,18,36,72,144,61,122,244,245,247,243,251,235,203,139,11,22,44,88,176,125,250,233,207,131,27,54,108,216,173,71,142,0],LOG:[255,0,1,25,2,50,26,198,3,223,51,238,27,104,199,75,4,100,224,14,52,141,239,129,28,193,105,248,200,8,76,113,5,138,101,47,225,36,15,33,53,147,142,218,240,18,130,69,29,181,194,125,106,39,249,185,201,154,9,120,77,228,114,166,6,191,139,98,102,221,48,253,226,152,37,179,16,145,34,136,54,208,148,206,143,150,219,189,241,210,19,92,131,56,70,64,30,66,182,163,195,72,126,110,107,58,40,84,250,133,186,61,202,94,155,159,10,21,121,43,78,212,229,172,115,243,167,87,7,112,192,247,140,128,99,13,103,74,222,237,49,197,254,24,227,165,153,119,38,184,180,124,17,68,146,217,35,32,137,46,55,63,209,91,149,188,207,205,144,135,151,178,220,252,190,97,242,86,211,171,20,42,93,158,132,60,57,83,71,109,65,162,31,45,67,216,183,123,164,118,196,23,73,236,127,12,111,246,108,161,59,82,41,157,85,170,251,96,134,177,187,204,62,90,203,89,95,176,156,169,160,81,11,245,22,235,122,117,44,215,79,174,213,233,230,231,173,232,116,214,244,234,168,80,88,175]}),k=l.extend(null,{BLOCK:[3220,1468,2713,1235,3062,1890,2119,1549,2344,2936,1117,2583,1330,2470,1667,2249,2028,3780,481,4011,142,3098,831,3445,592,2517,1776,2234,1951,2827,1070,2660,1345,3177]}),P=l.extend(function(p){var u,f,w,C,R,j=p.value.length;for(this._badness=[],this._level=b.LEVELS[p.level],this._polynomial=[],this._value=p.value,this._version=0,this._stringBuffer=[];this._version<40&&(this._version++,w=4*(this._level-1)+16*(this._version-1),C=b.BLOCKS[w++],R=b.BLOCKS[w++],u=b.BLOCKS[w++],f=b.BLOCKS[w],w=u*(C+R)+R-3+(this._version<=9),!(j<=w)););this._dataBlock=u,this._eccBlock=f,this._neccBlock1=C,this._neccBlock2=R;var q=this.width=17+4*this._version;this.buffer=P._createArray(q*q),this._ecc=P._createArray(u+(u+f)*(C+R)+R),this._mask=P._createArray((q*(q+1)+1)/2),this._insertFinders(),this._insertAlignments(),this.buffer[8+q*(q-8)]=1,this._insertTimingGap(),this._reverseMask(),this._insertTimingRowAndColumn(),this._insertVersion(),this._syncMask(),this._convertBitStream(j),this._calculatePolynomial(),this._appendEccToData(),this._interleaveBlocks(),this._pack(),this._finish()},{_addAlignment:function(p,u){var f,w=this.buffer,C=this.width;for(w[p+C*u]=1,f=-2;f<2;f++)w[p+f+C*(u-2)]=1,w[p-2+C*(u+f+1)]=1,w[p+2+C*(u+f)]=1,w[p+f+1+C*(u+2)]=1;for(f=0;f<2;f++)this._setMask(p-1,u+f),this._setMask(p+1,u-f),this._setMask(p-f,u-1),this._setMask(p+f,u+1)},_appendData:function(p,u,f,w){var C,R,j,q=this._polynomial,V=this._stringBuffer;for(R=0;R<w;R++)V[f+R]=0;for(R=0;R<u;R++){if((C=y.LOG[V[p+R]^V[f]])!==255)for(j=1;j<w;j++)V[f+j-1]=V[f+j]^y.EXPONENT[P._modN(C+q[w-j])];else for(j=f;j<f+w;j++)V[j]=V[j+1];V[f+w-1]=C===255?0:y.EXPONENT[P._modN(C+q[0])]}},_appendEccToData:function(){var p,u=0,f=this._dataBlock,w=this._calculateMaxLength(),C=this._eccBlock;for(p=0;p<this._neccBlock1;p++)this._appendData(u,f,w,C),u+=f,w+=C;for(p=0;p<this._neccBlock2;p++)this._appendData(u,f+1,w,C),u+=f+1,w+=C},_applyMask:function(p){var u,f,w,C,R=this.buffer,j=this.width;switch(p){case 0:for(C=0;C<j;C++)for(w=0;w<j;w++)w+C&1||this._isMasked(w,C)||(R[w+C*j]^=1);break;case 1:for(C=0;C<j;C++)for(w=0;w<j;w++)1&C||this._isMasked(w,C)||(R[w+C*j]^=1);break;case 2:for(C=0;C<j;C++)for(u=0,w=0;w<j;w++,u++)u===3&&(u=0),u||this._isMasked(w,C)||(R[w+C*j]^=1);break;case 3:for(f=0,C=0;C<j;C++,f++)for(f===3&&(f=0),u=f,w=0;w<j;w++,u++)u===3&&(u=0),u||this._isMasked(w,C)||(R[w+C*j]^=1);break;case 4:for(C=0;C<j;C++)for(u=0,f=C>>1&1,w=0;w<j;w++,u++)u===3&&(u=0,f=!f),f||this._isMasked(w,C)||(R[w+C*j]^=1);break;case 5:for(f=0,C=0;C<j;C++,f++)for(f===3&&(f=0),u=0,w=0;w<j;w++,u++)u===3&&(u=0),(w&C&1)+!(!u|!f)||this._isMasked(w,C)||(R[w+C*j]^=1);break;case 6:for(f=0,C=0;C<j;C++,f++)for(f===3&&(f=0),u=0,w=0;w<j;w++,u++)u===3&&(u=0),(w&C&1)+(u&&u===f)&1||this._isMasked(w,C)||(R[w+C*j]^=1);break;case 7:for(f=0,C=0;C<j;C++,f++)for(f===3&&(f=0),u=0,w=0;w<j;w++,u++)u===3&&(u=0),(u&&u===f)+(w+C&1)&1||this._isMasked(w,C)||(R[w+C*j]^=1)}},_calculateMaxLength:function(){return this._dataBlock*(this._neccBlock1+this._neccBlock2)+this._neccBlock2},_calculatePolynomial:function(){var p,u,f=this._eccBlock,w=this._polynomial;for(w[0]=1,p=0;p<f;p++){for(w[p+1]=1,u=p;u>0;u--)w[u]=w[u]?w[u-1]^y.EXPONENT[P._modN(y.LOG[w[u]]+p)]:w[u-1];w[0]=y.EXPONENT[P._modN(y.LOG[w[0]]+p)]}for(p=0;p<=f;p++)w[p]=y.LOG[w[p]]},_checkBadness:function(){var p,u,f,w,C,R=0,j=this._badness,q=this.buffer,V=this.width;for(C=0;C<V-1;C++)for(w=0;w<V-1;w++)(q[w+V*C]&&q[w+1+V*C]&&q[w+V*(C+1)]&&q[w+1+V*(C+1)]||!(q[w+V*C]||q[w+1+V*C]||q[w+V*(C+1)]||q[w+1+V*(C+1)]))&&(R+=P.N2);var H=0;for(C=0;C<V;C++){for(f=0,j[0]=0,p=0,w=0;w<V;w++)p===(u=q[w+V*C])?j[f]++:j[++f]=1,H+=(p=u)?1:-1;R+=this._getBadness(f)}H<0&&(H=-H);var ie=0,ee=H;for(ee+=ee<<2,ee<<=1;ee>V*V;)ee-=V*V,ie++;for(R+=ie*P.N4,w=0;w<V;w++){for(f=0,j[0]=0,p=0,C=0;C<V;C++)p===(u=q[w+V*C])?j[f]++:j[++f]=1,p=u;R+=this._getBadness(f)}return R},_convertBitStream:function(p){var u,f,w=this._ecc,C=this._version;for(f=0;f<p;f++)w[f]=this._value.charCodeAt(f);var R=this._stringBuffer=w.slice(),j=this._calculateMaxLength();p>=j-2&&(p=j-2,C>9&&p--);var q=p;if(C>9){for(R[q+2]=0,R[q+3]=0;q--;)u=R[q],R[q+3]|=255&u<<4,R[q+2]=u>>4;R[2]|=255&p<<4,R[1]=p>>4,R[0]=64|p>>12}else{for(R[q+1]=0,R[q+2]=0;q--;)u=R[q],R[q+2]|=255&u<<4,R[q+1]=u>>4;R[1]|=255&p<<4,R[0]=64|p>>4}for(q=p+3-(C<10);q<j;)R[q++]=236,R[q++]=17},_getBadness:function(p){var u,f=0,w=this._badness;for(u=0;u<=p;u++)w[u]>=5&&(f+=P.N1+w[u]-5);for(u=3;u<p-1;u+=2)w[u-2]===w[u+2]&&w[u+2]===w[u-1]&&w[u-1]===w[u+1]&&3*w[u-1]===w[u]&&(w[u-3]===0||u+3>p||3*w[u-3]>=4*w[u]||3*w[u+3]>=4*w[u])&&(f+=P.N3);return f},_finish:function(){this._stringBuffer=this.buffer.slice();var p,u,f=0,w=3e4;for(u=0;u<8&&(this._applyMask(u),(p=this._checkBadness())<w&&(w=p,f=u),f!==7);u++)this.buffer=this._stringBuffer.slice();f!==u&&this._applyMask(f),w=b.FINAL_FORMAT[f+(this._level-1<<3)];var C=this.buffer,R=this.width;for(u=0;u<8;u++,w>>=1)1&w&&(C[R-1-u+8*R]=1,u<6?C[8+R*u]=1:C[8+R*(u+1)]=1);for(u=0;u<7;u++,w>>=1)1&w&&(C[8+R*(R-7+u)]=1,u?C[6-u+8*R]=1:C[7+8*R]=1)},_interleaveBlocks:function(){var p,u,f=this._dataBlock,w=this._ecc,C=this._eccBlock,R=0,j=this._calculateMaxLength(),q=this._neccBlock1,V=this._neccBlock2,H=this._stringBuffer;for(p=0;p<f;p++){for(u=0;u<q;u++)w[R++]=H[p+u*f];for(u=0;u<V;u++)w[R++]=H[q*f+p+u*(f+1)]}for(u=0;u<V;u++)w[R++]=H[q*f+p+u*(f+1)];for(p=0;p<C;p++)for(u=0;u<q+V;u++)w[R++]=H[j+p+u*C];this._stringBuffer=w},_insertAlignments:function(){var p,u,f,w=this._version,C=this.width;if(w>1)for(p=g.BLOCK[w],f=C-7;;){for(u=C-7;u>p-3&&(this._addAlignment(u,f),!(u<p));)u-=p;if(f<=p+9)break;f-=p,this._addAlignment(6,f),this._addAlignment(f,6)}},_insertFinders:function(){var p,u,f,w,C=this.buffer,R=this.width;for(p=0;p<3;p++){for(u=0,w=0,p===1&&(u=R-7),p===2&&(w=R-7),C[w+3+R*(u+3)]=1,f=0;f<6;f++)C[w+f+R*u]=1,C[w+R*(u+f+1)]=1,C[w+6+R*(u+f)]=1,C[w+f+1+R*(u+6)]=1;for(f=1;f<5;f++)this._setMask(w+f,u+1),this._setMask(w+1,u+f+1),this._setMask(w+5,u+f),this._setMask(w+f+1,u+5);for(f=2;f<4;f++)C[w+f+R*(u+2)]=1,C[w+2+R*(u+f+1)]=1,C[w+4+R*(u+f)]=1,C[w+f+1+R*(u+4)]=1}},_insertTimingGap:function(){var p,u,f=this.width;for(u=0;u<7;u++)this._setMask(7,u),this._setMask(f-8,u),this._setMask(7,u+f-7);for(p=0;p<8;p++)this._setMask(p,7),this._setMask(p+f-8,7),this._setMask(p,f-8)},_insertTimingRowAndColumn:function(){var p,u=this.buffer,f=this.width;for(p=0;p<f-14;p++)1&p?(this._setMask(8+p,6),this._setMask(6,8+p)):(u[8+p+6*f]=1,u[6+f*(8+p)]=1)},_insertVersion:function(){var p,u,f,w,C=this.buffer,R=this._version,j=this.width;if(R>6)for(p=k.BLOCK[R-7],u=17,f=0;f<6;f++)for(w=0;w<3;w++,u--)1&(u>11?R>>u-12:p>>u)?(C[5-f+j*(2-w+j-11)]=1,C[2-w+j-11+j*(5-f)]=1):(this._setMask(5-f,2-w+j-11),this._setMask(2-w+j-11,5-f))},_isMasked:function(p,u){var f=P._getMaskBit(p,u);return this._mask[f]===1},_pack:function(){var p,u,f,w=1,C=1,R=this.width,j=R-1,q=R-1,V=(this._dataBlock+this._eccBlock)*(this._neccBlock1+this._neccBlock2)+this._neccBlock2;for(u=0;u<V;u++)for(p=this._stringBuffer[u],f=0;f<8;f++,p<<=1){128&p&&(this.buffer[j+R*q]=1);do C?j--:(j++,w?q!==0?q--:(w=!w,(j-=2)===6&&(j--,q=9)):q!==R-1?q++:(w=!w,(j-=2)===6&&(j--,q-=8))),C=!C;while(this._isMasked(j,q))}},_reverseMask:function(){var p,u,f=this.width;for(p=0;p<9;p++)this._setMask(p,8);for(p=0;p<8;p++)this._setMask(p+f-8,8),this._setMask(8,p);for(u=0;u<7;u++)this._setMask(8,u+f-7)},_setMask:function(p,u){var f=P._getMaskBit(p,u);this._mask[f]=1},_syncMask:function(){var p,u,f=this.width;for(u=0;u<f;u++)for(p=0;p<=u;p++)this.buffer[p+f*u]&&this._setMask(p,u)}},{_createArray:function(p){var u,f=[];for(u=0;u<p;u++)f[u]=0;return f},_getMaskBit:function(p,u){var f;return p>u&&(f=p,p=u,u=f),f=u,f+=u*u,f>>=1,f+=p},_modN:function(p){for(;p>=255;)p=((p-=255)>>8)+(255&p);return p},N1:3,N2:3,N3:40,N4:10}),x=P,S=c.extend({draw:function(){this.element.src=this.qrious.toDataURL()},reset:function(){this.element.src=""},resize:function(){var p=this.element;p.width=p.height=this.qrious.size}}),m=l.extend(function(p,u,f,w){this.name=p,this.modifiable=!!u,this.defaultValue=f,this._valueTransformer=w},{transform:function(p){var u=this._valueTransformer;return typeof u=="function"?u(p,this):p}}),T=l.extend(null,{abs:function(p){return p!=null?Math.abs(p):null},hasOwn:function(p,u){return Object.prototype.hasOwnProperty.call(p,u)},noop:function(){},toUpperCase:function(p){return p!=null?p.toUpperCase():null}}),I=l.extend(function(p){this.options={},p.forEach(function(u){this.options[u.name]=u},this)},{exists:function(p){return this.options[p]!=null},get:function(p,u){return I._get(this.options[p],u)},getAll:function(p){var u,f=this.options,w={};for(u in f)T.hasOwn(f,u)&&(w[u]=I._get(f[u],p));return w},init:function(p,u,f){typeof f!="function"&&(f=T.noop);var w,C;for(w in this.options)T.hasOwn(this.options,w)&&(C=this.options[w],I._set(C,C.defaultValue,u),I._createAccessor(C,u,f));this._setAll(p,u,!0)},set:function(p,u,f){return this._set(p,u,f)},setAll:function(p,u){return this._setAll(p,u)},_set:function(p,u,f,w){var C=this.options[p];if(!C)throw new Error("Invalid option: "+p);if(!C.modifiable&&!w)throw new Error("Option cannot be modified: "+p);return I._set(C,u,f)},_setAll:function(p,u,f){if(!p)return!1;var w,C=!1;for(w in p)T.hasOwn(p,w)&&this._set(w,p[w],u,f)&&(C=!0);return C}},{_createAccessor:function(p,u,f){var w={get:function(){return I._get(p,u)}};p.modifiable&&(w.set=function(C){I._set(p,C,u)&&f(C,p)}),Object.defineProperty(u,p.name,w)},_get:function(p,u){return u["_"+p.name]},_set:function(p,u,f){var w="_"+p.name,C=f[w],R=p.transform(u??p.defaultValue);return f[w]=R,R!==C}}),B=I,M=l.extend(function(){this._services={}},{getService:function(p){var u=this._services[p];if(!u)throw new Error("Service is not being managed with name: "+p);return u},setService:function(p,u){if(this._services[p])throw new Error("Service is already managed with name: "+p);u&&(this._services[p]=u)}}),L=new B([new m("background",!0,"white"),new m("backgroundAlpha",!0,1,T.abs),new m("element"),new m("foreground",!0,"black"),new m("foregroundAlpha",!0,1,T.abs),new m("level",!0,"L",T.toUpperCase),new m("mime",!0,"image/png"),new m("padding",!0,null,T.abs),new m("size",!0,100,T.abs),new m("value",!0,"")]),O=new M,F=l.extend(function(p){L.init(p,this,this.update.bind(this));var u=L.get("element",this),f=O.getService("element"),w=u&&f.isCanvas(u)?u:f.createCanvas(),C=u&&f.isImage(u)?u:f.createImage();this._canvasRenderer=new d(this,w,!0),this._imageRenderer=new S(this,C,C===u),this.update()},{get:function(){return L.getAll(this)},set:function(p){L.setAll(p,this)&&this.update()},toDataURL:function(p){return this.canvas.toDataURL(p||this.mime)},update:function(){var p=new x({level:this.level,value:this.value});this._canvasRenderer.render(p),this._imageRenderer.render(p)}},{use:function(p){O.setService(p.getName(),p)}});Object.defineProperties(F.prototype,{canvas:{get:function(){return this._canvasRenderer.getElement()}},image:{get:function(){return this._imageRenderer.getElement()}}});var G=F,E=l.extend({getName:function(){}}).extend({createCanvas:function(){},createImage:function(){},getName:function(){return"element"},isCanvas:function(p){},isImage:function(p){}}).extend({createCanvas:function(){return document.createElement("canvas")},createImage:function(){return document.createElement("img")},isCanvas:function(p){return p instanceof HTMLCanvasElement},isImage:function(p){return p instanceof HTMLImageElement}});return G.use(new E),G},Pr=ol();function jn(e,t,a=200){if(!e||!t)return;const n=String(t);try{new Pr({element:e,value:n,size:a,level:n.length>750?"L":n.length>260?"M":"H",padding:8,background:"#ffffff",foreground:"#060609"});return}catch(r){console.warn("QR canvas error:",r)}try{const r=new Image;r.crossOrigin="anonymous",r.onload=()=>{const s=e.getContext("2d");s&&s.drawImage(r,0,0,a,a)},r.src="https://api.qrserver.com/v1/create-qr-code/?size="+a+"x"+a+"&margin=8&data="+encodeURIComponent(n)}catch{}}const Oo=new Set;let dt=null,ss=null,la="";function rl(){return la}let _o=0,_s=null,Ws=!1;const qt={},Cr={},Fs={},Wo={};function il(e,t){return xr(e,t,$.historyList)}function ll(e){const t=sl(e,$.historyList);return t&&ne(),t}function At(e){kr(e,$.historyList,$.activeMatch)}function cl(e,t={}){if(!e||!e.competition||!e.competition.compId)return;const a=J(e.competition.compId);if(a){if(e.competition.fixtureId){const n=(a.fixtures||[]).find(r=>{var s;return r.id===((s=e.competition)==null?void 0:s.fixtureId)});n&&(n.matchId=e.id)}At(a),a.syncUpdatedAt=Date.now(),ne(),!t.skipSyncPublish&&a.syncCode&&(e.status==="finished"||e.manualWinner!==void 0)&&Nn(a,e)}}function ca(e,t=null){var r,s,o,i;if(!e)return;const{preset:a}=$;a.matchContext=e.kind,a.compId=e.id;const n=e.defaultRules||{};if(n.totalSets&&(a.totalSets=n.totalSets,a.setsToWin=Math.floor(n.totalSets/2)+1),n.gamesPerSet&&(a.gamesPerSet=n.gamesPerSet),n.deuceRule&&(a.deuceRule=n.deuceRule),n.tiebreakAt!==void 0&&(a.tiebreakAt=n.tiebreakAt),n.tiebreakPoints&&(a.tiebreakPoints=n.tiebreakPoints),n.finalSet&&(a.finalSet=n.finalSet),n.changeoverRule&&(a.changeoverRule=n.changeoverRule),t){a.fixtureId=t.id;const l=t.court?` · Cancha ${t.court}`:"";a.stageLabel=t.roundLabel?`${t.roundLabel}${l}`:l.replace(/^ · /,""),t.team0&&(a.teams[0].players=[((r=t.team0.players)==null?void 0:r[0])||"DRIVE 1",((s=t.team0.players)==null?void 0:s[1])||"REVÉS 1"],t.team0.color&&(a.teams[0].color=t.team0.color)),t.team1&&(a.teams[1].players=[((o=t.team1.players)==null?void 0:o[0])||"DRIVE 2",((i=t.team1.players)==null?void 0:i[1])||"REVÉS 2"],t.team1.color&&(a.teams[1].color=t.team1.color))}else a.fixtureId=""}function dl(e,t){const a=J(e);if(!a)return;if(Tt(a)){D("El torneo está finalizado. Reabrilo para jugar nuevos cruces.");return}const n=(a.fixtures||[]).find(r=>r.id===t);if(!n||!n.team0||!n.team1){D("Este cruce todavía espera parejas definidas");return}ca(a,n),K(ve,$.preset),or()}function ul(e){if(!e)return[];const t=new Map,a=n=>{const r=String(n||"").trim();if(!r||/^(DRIVE|REV[ÉE]S)\s*\d*$/i.test(r))return;const s=r.toUpperCase();t.has(s)||t.set(s,r)};return(e.participants||[]).forEach(n=>{var r,s;n.type==="pair"?(a((r=n.players)==null?void 0:r[0]),a((s=n.players)==null?void 0:s[1])):a(n.name)}),nt(e,!1).forEach(n=>{(n.teams||[]).forEach(r=>(r.players||[]).forEach(a))}),Array.from(t.values()).sort((n,r)=>n.localeCompare(r,"es"))}function Tr(e={}){var l,c,d,g,b,y,k,P,x,S,m,T,I,B,M,L,O,F,G,E;const t=e.mode||(e.fixtureKey?"fixture":"preset");if(t==="fixture"&&e.fixtureKey){const[p,u]=String(e.fixtureKey).split(":"),f=J(p),w=((f==null?void 0:f.fixtures)||[]).find(j=>j.id===u),C=we(f),R=[{players:[((c=(l=w==null?void 0:w.team0)==null?void 0:l.players)==null?void 0:c[0])||"DRIVE 1",((g=(d=w==null?void 0:w.team0)==null?void 0:d.players)==null?void 0:g[1])||"REVÉS 1"],color:((b=w==null?void 0:w.team0)==null?void 0:b.color)||"#d4af37"},{players:[((k=(y=w==null?void 0:w.team1)==null?void 0:y.players)==null?void 0:k[0])||"DRIVE 2",((x=(P=w==null?void 0:w.team1)==null?void 0:P.players)==null?void 0:x[1])||"REVÉS 2"],color:((S=w==null?void 0:w.team1)==null?void 0:S.color)||"#2f8cff"}];return{mode:"fixture",compId:p||null,fixtureId:u||null,fixtureKey:e.fixtureKey,stageLabel:`${(w==null?void 0:w.roundLabel)||"Cruce"}${w!=null&&w.court?` · Cancha ${w.court}`:""}`,teams:R,selPartIds:["",""],useManualTeams:!1,activeSlot:0,sets:C?[[null,null]]:[[null,null],[null,null]],wo:!1,winner:"auto",hasSuperTbFinal:((m=f==null?void 0:f.defaultRules)==null?void 0:m.finalSet)==="supertb"}}if(t==="comp-adhoc"){const p=J(e.compId||$.ui.compId),u=we(p),f=p?(p.participants||[]).filter(q=>q.type==="pair"):[],w=u||f.length<2,C=f[0],R=f[1],j=!w&&C&&R?[{players:[((T=C.players)==null?void 0:T[0])||"DRIVE 1",((I=C.players)==null?void 0:I[1])||"REVÉS 1"],color:C.color||"#d4af37"},{players:[((B=R.players)==null?void 0:B[0])||"DRIVE 2",((M=R.players)==null?void 0:M[1])||"REVÉS 2"],color:R.color||"#2f8cff"}]:[{players:["",""],color:"#d4af37"},{players:["",""],color:"#2f8cff"}];return{mode:"comp-adhoc",compId:(p==null?void 0:p.id)||null,fixtureId:null,fixtureKey:"",stageLabel:"",teams:j,selPartIds:[(C==null?void 0:C.id)||"",(R==null?void 0:R.id)||""],useManualTeams:w,activeSlot:0,sets:u?[[null,null]]:[[null,null],[null,null]],wo:!1,winner:"auto",hasSuperTbFinal:((L=p==null?void 0:p.defaultRules)==null?void 0:L.finalSet)==="supertb"}}const{preset:a}=$,n=(a.matchContext==="league"||a.matchContext==="tournament")&&a.compId?J(a.compId):null,r=we(n),s=a.teams[0],o=a.teams[1],i=[{players:[((O=s.players[0])==null?void 0:O.trim())||"DRIVE 1",((F=s.players[1])==null?void 0:F.trim())||"REVÉS 1"],color:s.color||"#d4af37"},{players:[((G=o.players[0])==null?void 0:G.trim())||"DRIVE 2",((E=o.players[1])==null?void 0:E.trim())||"REVÉS 2"],color:o.color||"#2f8cff"}];return{mode:"preset",compId:(n==null?void 0:n.id)||null,fixtureId:n&&a.fixtureId?a.fixtureId:null,fixtureKey:"",stageLabel:a.stageLabel||"",teams:i,selPartIds:["",""],useManualTeams:!1,activeSlot:0,sets:r?[[null,null]]:a.totalSets===1?[[null,null]]:[[null,null],[null,null]],wo:!1,winner:"auto",hasSuperTbFinal:a.finalSet==="supertb"}}function Gs(e={}){const t=e.compId||(e.fixtureKey?String(e.fixtureKey).split(":")[0]:""),a=t?J(t):null;if(a&&Tt(a)){D("El torneo está finalizado. Reabrilo para cargar más resultados.");return}$.ui.quickScoreFixtureId=e.fixtureKey||null,$.ui.quickScoreState=Tr({mode:e.mode,fixtureKey:e.fixtureKey,compId:e.compId||void 0}),$.ui.compModal="quick-score",U.render()}function nn(e){const{preset:t}=$,a=e.comp||null,n=e.rules||(a==null?void 0:a.defaultRules)||t,r=Math.max(1,Number(n.totalSets)||3),s=!!e.isWalkover,o=!!(e.isDraw||e.winnerSide==="draw"),i=s?[]:(e.setsArr||[]).map(d=>{const g=Math.max(0,Number(d[0])||0),b=Math.max(0,Number(d[1])||0),y=g>b?0:b>g?1:null;return[g,b,y,null,0]}),l=[0,1].map(d=>{var g,b,y,k,P,x,S;return{players:[((y=(b=(g=e.teams[d])==null?void 0:g.players)==null?void 0:b[0])==null?void 0:y.trim())||`DRIVE ${d+1}`,((x=(P=(k=e.teams[d])==null?void 0:k.players)==null?void 0:P[1])==null?void 0:x.trim())||`REVÉS ${d+1}`],color:((S=e.teams[d])==null?void 0:S.color)||(d===0?"#d4af37":"#2f8cff")}}),c={id:ot("m"),createdAt:Date.now(),durationMs:0,status:"finished",mode:"doubles",competition:a?{kind:a.kind,compId:a.id,compName:a.name,fixtureId:e.fixtureId||null,stageLabel:(e.stageLabel||"").trim()}:{kind:e.kind||"daily",compId:null,compName:"",fixtureId:null,stageLabel:(e.stageLabel||"").trim()},teams:l,rules:{totalSets:r,setsToWin:Math.floor(r/2)+1,gamesPerSet:Math.max(1,Number(n.gamesPerSet)||6),deuceRule:n.deuceRule||"golden",tiebreakAt:n.tiebreakAt!==void 0?Number(n.tiebreakAt):Math.max(1,Number(n.gamesPerSet)||6),tiebreakPoints:Math.max(1,Number(n.tiebreakPoints)||7),finalSet:n.finalSet||"normal",changeoverRule:n.changeoverRule||"odd"},firstServer:[0,0],secondServerIdx:0,shotPrompt:!1,flipped:!1,pendingFault:!1,events:[],redoStack:[],manualSets:i,manualWinner:o?"draw":e.winnerSide,isDraw:o,isWalkover:s};return Pt(c),c}function pl(e,t,a,n,r=!1){const s=J(e),o=((s==null?void 0:s.fixtures)||[]).find(c=>c.id===t);if(!s||!o||!o.team0||!o.team1)return null;const i=n==="draw";return nn({comp:s,fixtureId:o.id,stageLabel:o.roundLabel||"",teams:[{players:[...o.team0.players||["DRIVE 1","REVÉS 1"]],color:o.team0.color||"#d4af37"},{players:[...o.team1.players||["DRIVE 2","REVÉS 2"]],color:o.team1.color||"#2f8cff"}],setsArr:a,winnerSide:n,isDraw:i,isWalkover:r})}function Ua(e){const t=xt(e.syncCode);if(t&&t.length>=4)return e.syncCode=t,t;const a=Uo();return e.syncCode=a,ne(),a}function _a(e,t=!0){const a=Ua(e),n=typeof location<"u"?location.href.split("#")[0]:"";if(!t)return`${n}#c=${a}`;const r=Jr(e);return r?`${n}#c=${a}.${r}`:`${n}#c=${a}`}function Mr(){return Ks(hn)}function Ir(e){K(hn,(e||[]).slice(-120))}async function Er(e,t){var a,n;if(!e||!t||typeof fetch!="function"||Date.now()<_o)return!1;try{const r=await fetch(`${bt()}/${e}`,{method:"POST",body:t});if(r.status===429){const s=Number((n=(a=r.headers)==null?void 0:a.get)==null?void 0:n.call(a,"Retry-After"))||0,o=s>0?Math.min(3e4,s*1e3):12e3;return _o=Date.now()+o,_s&&clearTimeout(_s),_s=setTimeout(()=>{xs()},o+250),!1}return!!r.ok}catch{return!1}}async function Sa(e,t){const a=fn(e);if(!a)return!1;const n=Vs(t);if(!n)return!1;const r=await Er(a,n);if(!r){const s=Mr();s.push({topic:a,body:n,ts:Date.now()}),Ir(s)}return r}async function xs(){if(Ws||typeof fetch!="function")return 0;const e=Mr();if(!e.length)return 0;Ws=!0;const t=[];let a=0;try{for(let n=0;n<e.length;n++){const r=e[n];if(await Er(r.topic,r.body))a++;else{t.push(...e.slice(n));break}}Ir(t)}finally{Ws=!1}return a}function fl(){xs();const{activeMatch:e,ui:t}=$;if(e&&e.status==="playing"&&$a(e,!0),(t.route==="live"||t.route==="obs")&&t.liveId){const a=Ga(t.liveId);gi()||Zs(a),ba(a)}}typeof window<"u"&&typeof window.addEventListener=="function"&&window.addEventListener("online",fl);function ml(e,t){const a=Vo(t);if(a&&a.length<=2950)return{t:"M",v:1,cid:e.id,sc:e.syncCode,dev:Dt(),ts:Date.now(),full:a};const n=bs(t,"all"),r=n.st,s=r.sets.filter((i,l)=>l===0||i.winner!==null||i.games[0]>0||i.games[1]>0),o={};return(n.P||[]).forEach(i=>{if(!i)return;const l=`${i.team}_${i.playerIdx}`;o[l]={w:i.winners||0,u:i.ue||0,f:i.fe||0,st:i.srvPtsTotal||0,sw:i.srvPtsWon||0,fs:i.firstServeIn||0,df:i.doubleFaults||0,sh:i.shots||{}}}),{t:"M",v:1,cid:e.id,sc:e.syncCode,dev:Dt(),ts:Date.now(),sum:{id:t.id,c:t.createdAt,d:t.durationMs||0,s:t.status||"finished",m:t.mode||"doubles",wo:t.isWalkover?1:0,cp:t.competition||null,tm:t.teams,r:t.rules,ms:s.map(i=>[i.games[0],i.games[1],i.winner,i.tbScore||null,i.isSuperTB?1:0]),mw:r.isDraw?"draw":r.matchWinner,drw:r.isDraw?1:0,ps:o}}}function gl(e,t){let a=null;if(e.full)a=gs(e.full);else if(e.sum){const n=e.sum;a={id:n.id,createdAt:n.c||Date.now(),durationMs:n.d||0,status:n.s||"finished",mode:n.m||"doubles",isWalkover:!!n.wo,manualSets:n.ms||[],manualWinner:n.mw??null,isDraw:!!(n.drw||n.mw==="draw"),manualPlayerStats:n.ps||null,competition:n.cp||null,teams:n.tm,rules:n.r,firstServer:[0,0],secondServerIdx:0,shotPrompt:!1,flipped:!1,pendingFault:!1,events:[],redoStack:[]}}return!a||!a.id||!a.teams?null:(a._syncTs=e.ts||Date.now(),t&&(a.competition={...a.competition||{},kind:t.kind,compId:t.id,compName:t.name}),a)}async function Fe(e,t=!1){if(!e||!e.syncCode)return!1;const a=e.fixtures||[],n=Dt(),r=Date.now(),s={t:"S",v:1,cid:e.id,sc:e.syncCode,dev:n,ts:r,reset:!!t,data:Ft(e,[])};let o=0;for(;o<a.length;){const c=a.slice(0,o+1),d={...s,data:Ft(e,c)};if(Vs(d).length>2850)break;o++}const i=[o>0?{...s,data:Ft(e,a.slice(0,o))}:s];for(;o<a.length;){const c=[];for(;o<a.length;){const d=Ft(e,[a[o]]).fx[0],g={t:"FXC",v:1,cid:e.id,sc:e.syncCode,dev:n,ts:r,fx:[...c,d]};if(c.length>0&&Vs(g).length>2850)break;c.push(d),o++}i.push({t:"FXC",v:1,cid:e.id,sc:e.syncCode,dev:n,ts:r,fx:c})}let l=!0;for(const c of i)await Sa(e.syncCode,c)||(l=!1);return l}function Nn(e,t){return!e||!e.syncCode||!t?Promise.resolve(!1):Sa(e.syncCode,ml(e,t))}function bl(e,t){return!e||!e.syncCode||!t?Promise.resolve(!1):Sa(e.syncCode,{t:"P",v:1,cid:e.id,sc:e.syncCode,dev:Dt(),ts:Date.now(),part:t})}function on(e,t,a,n=null){return!e||!e.syncCode||!a?Promise.resolve(!1):Sa(e.syncCode,{t:"PR",v:1,cid:e.id,sc:e.syncCode,dev:Dt(),ts:Date.now(),op:t,pid:a,group:n})}function hl(e,t){if(!e||!e.syncCode||!t)return Promise.resolve(!1);const a=Ft(e,[t]).fx[0];return Sa(e.syncCode,{t:"FA",v:1,cid:e.id,sc:e.syncCode,dev:Dt(),ts:Date.now(),fx:a})}function vl(e,t){return!e||!e.syncCode||!t?Promise.resolve(!1):Sa(e.syncCode,{t:"DM",v:1,cid:e.id,sc:e.syncCode,dev:Dt(),ts:Date.now(),mid:t})}async function rn(e){if(!e)return!1;Ua(e),await xs(),await Fe(e,!1);const t=nt(e,!1).filter(a=>a.status==="finished"||a.manualWinner!==void 0&&a.manualWinner!==null).slice(0,40);for(const a of t)await Nn(e,a);return e.syncCode&&($.ui.compLastSyncAt[e.syncCode]=Date.now()),!0}function ut(e,t){const a=xt(t);return $.competitionsList.find(n=>e&&n.id===e||a&&xt(n.syncCode)===a)||null}function Ar(e,t=0,a=!1){if(!e||!e.id||!e.c)return null;const n=e.c,r=xt(e.sc);let s=ut(e.id,r);if(!s)s={id:e.id,syncCode:r||Uo(),syncMetaTs:t||0,syncUpdatedAt:Date.now(),kind:n.k||"league",name:n.n||"Competencia Compartida",format:n.f||(n.k==="tournament"?"knockout":"league_rr"),rankingMode:n.rm||"pairs",winPts:Number.isFinite(Number(n.w))?Number(n.w):3,drawPts:Number.isFinite(Number(n.dp))?Number(n.dp):2,lossPts:Number.isFinite(Number(n.l))?Number(n.l):1,setBonusPts:Number(n.sb)||0,gameBonusPts:Number.isFinite(Number(n.gb))?Number(n.gb):n.f==="proyecto_padel"?1:0,numGroups:Number(n.ng)||2,advancePerGroup:Number(n.ag)||2,...n.cc!==void 0?{courtsCount:ze(n.cc,4)}:{},status:n.st==="finished"?"finished":"active",...n.fa?{finishedAt:Number(n.fa)}:{},defaultRules:n.dr||{},participants:Array.isArray(e.pt)?e.pt:[],fixtures:is(e.fx),createdAt:t||Date.now()},$.competitionsList.unshift(s);else{const o=s;t>=(o.syncMetaTs||0)&&(o.syncMetaTs=t,r&&(s.syncCode=r),s.kind=n.k||s.kind,s.name=n.n||s.name,s.format=n.f||s.format,s.rankingMode=n.rm||s.rankingMode,s.winPts=Number.isFinite(Number(n.w))?Number(n.w):s.winPts,Number.isFinite(Number(n.dp))&&(s.drawPts=Number(n.dp)),s.lossPts=Number.isFinite(Number(n.l))?Number(n.l):s.lossPts,s.setBonusPts=Number(n.sb)||0,Number.isFinite(Number(n.gb))&&(s.gameBonusPts=Number(n.gb)),s.numGroups=Number(n.ng)||s.numGroups,s.advancePerGroup=Number(n.ag)||s.advancePerGroup,n.cc!==void 0&&(s.courtsCount=ze(n.cc,4)),s.status=n.st==="finished"?"finished":"active",s.finishedAt=n.st==="finished"?Number(n.fa)||s.finishedAt||Date.now():null,n.dr&&(s.defaultRules=n.dr));const i=Array.isArray(e.pt)?e.pt:[];if(a)s.participants=i;else if(i.length){s.participants=s.participants||[];const c=new Map(s.participants.map(d=>[d.id,d]));i.forEach(d=>{c.has(d.id)||s.participants.push(d)})}const l=is(e.fx);if(a)s.fixtures=l,nt(s,!1).forEach(c=>{var d;if((d=c.competition)!=null&&d.fixtureId){const g=s.fixtures.find(b=>{var y;return b.id===((y=c.competition)==null?void 0:y.fixtureId)});g&&(g.matchId=c.id)}});else if(l.length){s.fixtures=s.fixtures||[];const c=new Set(s.fixtures.map(d=>d.id));l.forEach(d=>{c.has(d.id)||s.fixtures.push(d)})}s.syncUpdatedAt=Date.now()}return At(s),ne(),s}function yl(e,t){var a,n;return!e||e.status!=="finished"&&t.status==="finished"||(((a=t.events)==null?void 0:a.length)||0)>(((n=e.events)==null?void 0:n.length)||0)||t.manualWinner!==void 0&&t.manualWinner!==null&&(e.manualWinner===void 0||e.manualWinner===null)}function Rr(e,t="",a=""){if(!e||!e.t)return!1;const n=xt(e.sc||t);if(a){const o=`${n}:${a}`;if(Oo.has(o))return!1;Oo.add(o)}const r=!e.dev||e.dev!==Dt();let s=!1;if(e.t==="S"&&e.data){const o=!!ut(e.cid,n);Ar(e.data,e.ts||0,!!e.reset)&&(!o||r)&&(s=!0)}else if(e.t==="FXC"&&Array.isArray(e.fx)){const o=ut(e.cid,n);if(o){o.fixtures=o.fixtures||[];const i=new Set(o.fixtures.map(l=>l.id));is(e.fx).forEach(l=>{i.has(l.id)||(o.fixtures.push(l),s=!0)}),s&&(At(o),ne())}}else if(e.t==="M"){const o=ut(e.cid,n);if(!o)return!1;const i=gl(e,o);if(!i)return!1;const l=$.historyList.find(c=>c.id===i.id);yl(l,i)&&(Pt(i,{skipSyncPublish:!0}),o.syncUpdatedAt=Date.now(),ne(),s=!0,r&&!$.ui.compSyncSilent&&D(`📡 Resultado sumado en ${o.name}: ${X(i,0)} vs ${X(i,1)}`))}else if(e.t==="P"&&e.part){const o=ut(e.cid,n);o&&(o.participants=o.participants||[],o.participants.some(i=>i.id===e.part.id)||(o.participants.push(e.part),ne(),s=!0))}else if(e.t==="PR"&&e.pid){const o=ut(e.cid,n);if(o){if(o.participants=o.participants||[],e.op==="del"){const i=o.participants.length;o.participants=o.participants.filter(l=>l.id!==e.pid),o.participants.length!==i&&(ne(),s=!0)}else if(e.op==="grp"){const i=o.participants.find(l=>l.id===e.pid);i&&i.group!==e.group&&(i.group=e.group||null,i.groupManual=!!e.group,ne(),s=!0)}else if(e.op==="pause"){const i=o.participants.find(l=>l.id===e.pid);i&&(i.paused=e.group==="1",ne(),s=!0)}}}else if(e.t==="FA"&&e.fx){const o=ut(e.cid,n);if(o){const i=is([e.fx])[0];i&&(o.fixtures=o.fixtures||[],o.fixtures.some(l=>l.id===i.id)||(o.fixtures.push(i),ne(),s=!0))}}else if(e.t==="DM"&&e.mid){const o=ut(e.cid,n),i=$.historyList.length;$.historyList=$.historyList.filter(l=>l.id!==e.mid),$.historyList.length!==i&&(K(Bt,$.historyList),o&&(At(o),ne()),s=!0)}return n&&($.ui.compLastSyncAt[n]=Date.now()),s}async function ya(e,t=null,a=!1){var o,i;const n=xt(e),r=fn(n);if(!r||typeof fetch!="function")return{ok:!1,changed:!1,count:0};if(Fs[n])return{ok:!1,changed:!1,count:0};if(!a&&Date.now()<(Wo[n]||0))return{ok:!1,changed:!1,count:0};Fs[n]=!0,Cr[n]=Date.now(),await xs();const s=t||(qt[n]>0?String(Math.max(0,qt[n]-3)):"24h");try{const l=await fetch(`${bt()}/${r}/json?poll=1&since=${encodeURIComponent(s)}`,{cache:"no-store"});if(l.status===429){const P=Number((i=(o=l.headers)==null?void 0:o.get)==null?void 0:i.call(o,"Retry-After"))||0;return Wo[n]=Date.now()+(P>0?Math.min(3e4,P*1e3):15e3),{ok:!1,changed:!1,count:0}}if(!l.ok)return{ok:!1,changed:!1,count:0};const d=(await l.text()).trim().split(`
`).filter(Boolean),g=[];for(const P of d)try{const x=JSON.parse(P);if(x&&x.time&&(qt[n]=Math.max(qt[n]||0,Number(x.time)||0)),x&&x.event==="message"&&x.message){const S=mn(x.message);S&&g.push({evt:S,id:x.id||""})}}catch{}const b={S:0,FXC:1,P:2,PR:3,FA:4,M:5,DM:6};g.sort((P,x)=>(b[P.evt.t]??9)-(b[x.evt.t]??9)||(P.evt.ts||0)-(x.evt.ts||0));let y=!1;const k=!!$.ui.compSyncSilent;g.length>2&&($.ui.compSyncSilent=!0);try{for(const P of g)Rr(P.evt,n,P.id)&&(y=!0)}finally{$.ui.compSyncSilent=k}return $.ui.compLastSyncAt[n]=Date.now(),$.ui.compSyncConnected[n]=!0,y&&["competitions","comp-detail","players","history","home","new"].includes($.ui.route)&&U.render(),a&&D(y?"✓ Sincronizado con novedades":"✓ Todo al día"),{ok:!0,changed:y,count:g.length}}catch{return{ok:!1,changed:!1,count:0}}finally{Fs[n]=!1}}function fs(){if(dt){try{dt.close()}catch{}dt=null}ss&&(clearInterval(ss),ss=null),la=""}function On(){const{ui:e,preset:t,competitionsList:a}=$;let n=null;if(e.route==="comp-detail")n=J(e.compId);else if(e.route==="players"&&(e.playerScope==="league"||e.playerScope==="tournament")){const o=e.playerScope==="league"?e.selectedLeagueId:e.selectedTournId;n=J(o)}else e.route==="new"&&(t.matchContext==="league"||t.matchContext==="tournament")?n=J(t.compId):(e.route==="competitions"||e.route==="home")&&(n=a.find(o=>!!o.syncCode)||null);const r=xt(n==null?void 0:n.syncCode);if(!r){la&&fs();return}if(la===r&&dt)return;fs(),la=r;const s=fn(r);if(ya(r,qt[r]?null:"24h",!1),typeof EventSource<"u")try{dt=new EventSource(`${bt()}/${s}/sse`),dt.onopen=()=>{$.ui.compSyncConnected[r]=!0},dt.onmessage=o=>{try{const i=JSON.parse(o.data);if(i&&i.time&&(qt[r]=Math.max(qt[r]||0,Number(i.time)||0)),i&&(i.event==="message"||!i.event)&&i.message){$.ui.compSyncConnected[r]=!0;const l=mn(i.message);l&&Rr(l,r,i.id||"")&&["competitions","comp-detail","players","history","home","new"].includes($.ui.route)&&U.render()}}catch{}},dt.onerror=()=>{$.ui.compSyncConnected[r]=!1}}catch{}ss=setInterval(()=>{if(la!==r||document.hidden)return;if(dt&&dt.readyState===2){On();return}const o=Date.now()-(Cr[r]||0);$.ui.compSyncConnected[r]&&o<3e4||ya(r,null,!1)},9e3)}async function Lr(e){var g;let t=String(e||"").trim();const a=t.indexOf("#c=");a>=0?t=t.slice(a+3):t.startsWith("c=")?t=t.slice(2):t.startsWith("join=")&&(t=t.slice(5));const n=t.indexOf("."),r=xt(n>=0?t.slice(0,n):t),s=n>=0?t.slice(n+1):"";if(!r||r.length<4)return D("Ingresá un código de sala válido"),!1;let o=null;if(s){const b=mn(s);b&&b.id&&(o=Ar(b,0,!1))}const{ui:i}=$,l=ut(null,r);if(o||l){const b=o||l;i.compId=b.id,i.compTab="fixtures",i.compModal=null,i.route="comp-detail",U.render()}else D(`📡 Conectando a sala #${r}...`);const c=await ya(r,"all",!1),d=ut(null,r);return d?(i.compId=d.id,i.compModal=null,i.route!=="comp-detail"&&(i.compTab=(g=d.fixtures)!=null&&g.length?"fixtures":"standings",i.route="comp-detail"),U.render(),D(`✓ Conectado a ${d.name} (#${r})`),!0):(!c.ok&&!o?D("Sin conexión o sala no encontrada. Verificá el código o pedí al organizador re-publicar."):d||D(`No se encontró una Liga/Torneo activa para #${r}`),!1)}function $l(e){if(!e)return;rn(e);const t=_a(e,!1),a=e.kind==="tournament"?"Torneo":"Liga",n=e.syncCode,r=`🎾 *${a}: ${e.name}* (Pádel Control SÉ)
📡 Código de Sala: *#${n}*

📲 Abrí este enlace (o escaneá el QR) para conectarte con tu celular y sumar los resultados en vivo:
${t}`;ys({title:`🎾 Unirse a ${e.name} (#${n})`,text:r,url:t,copyText:r,toastMsg:"Enlace e invitación copiados para compartir",promptMsg:"Copiá esta invitación para WhatsApp:"})}function Sl(e){if(e)try{const t=Ua(e),a=_a(e,!0),n=document.createElement("canvas");jn(n,a,380);const r=560,s=760,o=document.createElement("canvas");o.width=r,o.height=s;const i=o.getContext("2d");if(!i)return;const l=i.createLinearGradient(0,0,0,s);l.addColorStop(0,"#161410"),l.addColorStop(.5,"#0a0a0d"),l.addColorStop(1,"#040406"),i.fillStyle=l,i.fillRect(0,0,r,s),i.strokeStyle="#d4af37",i.lineWidth=3,i.strokeRect(16,16,r-32,s-32),i.strokeStyle="rgba(212, 175, 55, 0.35)",i.lineWidth=1,i.strokeRect(22,22,r-44,s-44),i.textAlign="center",i.fillStyle="#d4af37",i.font="bold 20px Inter, sans-serif",i.fillText(e.kind==="tournament"?"🏆 TORNEO EN VIVO · PÁDEL CONTROL SÉ":"🏅 LIGA EN VIVO · PÁDEL CONTROL SÉ",r/2,68),i.fillStyle="#fff6cc",i.font='800 34px "Barlow Condensed", sans-serif',i.fillText(String(e.name||"").toUpperCase().slice(0,30),r/2,112);const c=(r-380)/2,d=140;i.fillStyle="#ffffff",He(i,c-10,d-10,400,400,18,"#ffffff"),i.drawImage(n,c,d,380,380),i.fillStyle="#34d399",i.font="bold 28px monospace",i.fillText(`CÓDIGO DE SALA: #${t}`,r/2,585),i.fillStyle="#c2b8a3",i.font='15px "Plus Jakarta Sans", sans-serif',i.fillText("Escaneá para conectarte con tu celular y sumar resultados",r/2,622),i.fillStyle="rgba(212, 175, 55, 0.12)",i.fillRect(36,646,r-72,40),i.strokeStyle="rgba(212, 175, 55, 0.45)",i.strokeRect(36,646,r-72,40),i.fillStyle="#f5d061",i.font="bold 13px monospace",i.fillText(_a(e,!1),r/2,671),i.fillStyle="#7d7461",i.font='13px "Plus Jakarta Sans", sans-serif',i.fillText("Tabla, Puntos, ELO y Cuadros sincronizados en tiempo real",r/2,718);const g=document.createElement("a");g.download=`QR-${e.kind}-${t}.png`,g.href=o.toDataURL("image/png"),g.click(),D("¡Tarjeta QR descargada!")}catch{D("Error al generar tarjeta QR")}}function wl(){const{historyList:e,competitionsList:t,prefs:a}=$,n=e.length+t.length;if(!n)return!1;const r=Date.now();if(a.backupPromptDismissedAt&&r-a.backupPromptDismissedAt<3*864e5)return!1;const s=Number(a.changesSinceBackup)||0;return s>=5||a.lastBackupAt>0&&s>0&&r-a.lastBackupAt>7*864e5||!a.lastBackupAt&&n>=5}function kl(){const{ui:e,prefs:t,historyList:a,competitionsList:n}=$,r=[];if(e.swUpdateReady?r.push(`
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
      </div>`),wl()){const s=Number(t.changesSinceBackup)||0,o=s>0?`Tenés ${s} ${s===1?"registro nuevo":"registros nuevos"} sin respaldo en archivo.`:`Guardá una copia de tus ${a.length} partidos y ${n.length} competencias.`;r.push(`
      <div class="sys-banner warn">
        <div class="sys-banner-txt">
          <b>💾 Backup JSON recomendado</b>
          <small>${h(o)}</small>
        </div>
        <div class="sys-banner-acts">
          <button class="btn primary sm" data-act="export-json">${A.dl} Descargar JSON</button>
          <button class="btn sm" data-act="dismiss-backup-prompt">Luego</button>
        </div>
      </div>`)}return r.join("")}function xl(e=!0){const{historyList:t,competitionsList:a,prefs:n,preset:r,activeMatch:s}=$,o={version:3,app:"padel-control-se",exportedAt:Date.now(),matches:t,competitions:a,prefs:Me(n),preset:Me(r),activeMatch:s?Me(s):null,rankingVault:rt("padel_ranking_vault",{})};return e&&(o.playerCardLogos=Me(jt()),o.playerCards=Me(ha())),o}function Pl(e,t){const a=URL.createObjectURL(e),n=document.createElement("a");n.href=a,n.download=t,document.body.appendChild(n),n.click(),n.remove(),setTimeout(()=>URL.revokeObjectURL(a),1500)}async function Fo({share:e=!1}={}){const{prefs:t,historyList:a,competitionsList:n}=$,r=t.backupIncludeCards!==!1,s=xl(r),o=ha(),i=JSON.stringify(s,null,2),l=new Blob([i],{type:"application/json"}),c=`padel-se-backup-${new Date().toISOString().slice(0,10)}.json`;if(e&&typeof navigator<"u"&&navigator.share&&typeof File=="function")try{const g=new File([l],c,{type:"application/json"});if(!navigator.canShare||navigator.canShare({files:[g]})){await navigator.share({title:"Backup Pádel Control SÉ",text:`Respaldo completo: ${a.length} partidos, ${n.length} ligas/torneos.`,files:[g]}),t.lastBackupAt=Date.now(),t.changesSinceBackup=0,K(Se,t),U.render(),D("✓ Backup JSON compartido");return}}catch(g){if((g==null?void 0:g.name)==="AbortError")return}Pl(l,c),t.lastBackupAt=Date.now(),t.changesSinceBackup=0,K(Se,t),U.render();const d=r&&o.length?`, ${o.length} tarj.`:"";D(`✓ Backup JSON descargado (${a.length} P, ${n.length} L/T${d})`)}async function Cl(e){const{competitionsList:t,prefs:a}=$;try{const n=JSON.parse(e);let r=0,s=0,o=0;if(Array.isArray(n)){n.forEach(l=>{l&&l.id&&l.teams&&(Pt(l,{skipSyncPublish:!0,skipBackupCount:!0}),r++)}),D(`${r} partidos importados`),U.render();return}if(!n||typeof n!="object"){D("Archivo JSON inválido");return}if(Array.isArray(n.competitions)&&(n.competitions.forEach(l=>{if(l&&l.id&&l.name){const c=t.findIndex(d=>d.id===l.id);c>=0?t[c]=l:t.push(l),s++}}),ne()),Array.isArray(n.matches)&&n.matches.forEach(l=>{l&&l.id&&l.teams&&(Pt(l,{skipSyncPublish:!0,skipBackupCount:!0}),r++)}),t.length&&(t.forEach(l=>U.resolveCompetitionFixtures(l)),ne()),n.rankingVault&&typeof n.rankingVault=="object"){const l=rt("padel_ranking_vault",{});Object.entries(n.rankingVault).forEach(([c,d])=>{d&&d.id&&(l[c]=d)}),K("padel_ranking_vault",l)}if(n.prefs&&typeof n.prefs=="object"){const l=a.syncServerUrl,c=n.prefs.syncServerUrl?Fa(n.prefs.syncServerUrl):l;Object.assign(a,n.prefs),a.syncServerUrl=c||Qt,a.lastBackupAt=Date.now(),a.changesSinceBackup=0,K(Se,a)}if(n.preset&&typeof n.preset=="object"&&Array.isArray(n.preset.teams)&&($.preset=Object.assign({},vn,n.preset),ga($.preset.teams),K(ve,$.preset)),!$.activeMatch&&n.activeMatch&&n.activeMatch.id&&n.activeMatch.teams&&($.activeMatch=n.activeMatch,ga($.activeMatch.teams),K(Lt,$.activeMatch)),n.playerCardLogos&&typeof n.playerCardLogos=="object"){const l=Object.assign({logo1:null,logo2:null,logo2Disabled:!1,subTitle:""},n.playerCardLogos);en(l);const c=jt();Object.assign(c,l),await va()}if(Array.isArray(n.playerCards))for(const l of n.playerCards)l&&l.id&&(await Rn(l),o++);nr(!1),U.render();const i=o?`, ${o} tarjetas`:"";D(`✓ Importados: ${r} partidos, ${s} competencias${i}`)}catch{D("Archivo JSON inválido")}}async function Tl(){const{ui:e}=$,t=e.pwaInstallPrompt;if(t){try{await t.prompt();const a=await t.userChoice;a&&a.outcome==="accepted"&&(e.pwaInstallPrompt=null,e.pwaInstalled=!0)}catch{}U.render()}}function Ml(){const{ui:e}=$,t=e.swRegistration;t&&t.waiting?(e._reloadingForSw=!0,t.waiting.postMessage({type:"SKIP_WAITING"}),D("Actualizando a la última versión...")):location.reload()}async function Il(){const{ui:e}=$;if(!("serviceWorker"in navigator)||location.protocol==="file:"){e.swStatus="unsupported";return}try{const t=await navigator.serviceWorker.register("./sw.js",{scope:"./"});e.swRegistration=t,t.waiting&&(e.swUpdateReady=!0),t.active&&(e.swStatus="active"),t.addEventListener("updatefound",()=>{const a=t.installing;a&&a.addEventListener("statechange",()=>{a.state==="installed"&&(navigator.serviceWorker.controller?e.swUpdateReady=!0:e.swStatus="active",U.render())})}),navigator.serviceWorker.addEventListener("controllerchange",()=>{e.swStatus="active",e._reloadingForSw&&window.location.reload()}),U.render()}catch{e.swStatus="error"}}function El(){typeof window>"u"||(window.addEventListener("beforeinstallprompt",e=>{e.preventDefault(),$.ui.pwaInstallPrompt=e,($.ui.route==="home"||$.ui.route==="settings")&&U.render()}),window.addEventListener("appinstalled",()=>{$.ui.pwaInstallPrompt=null,$.ui.pwaInstalled=!0,D("✓ Pádel Control SÉ instalada"),U.render()}),window.addEventListener("online",()=>{$.ui.isOnline=!0,["home","settings","competitions","comp-detail"].includes($.ui.route)&&U.render()}),window.addEventListener("offline",()=>{$.ui.isOnline=!1,["home","settings","competitions","comp-detail"].includes($.ui.route)&&U.render()}))}function Br(e){const{activeMatch:t,historyList:a}=$;if(!e)return{s0:"",s1:""};if(e.isBye)return{s0:e.team0?"BYE":"",s1:e.team1?"BYE":""};const n=e.matchId?t&&t.id===e.matchId?t:a.find(o=>o.id===e.matchId):null;if(!n)return{s0:"",s1:""};if(n.isWalkover)return{s0:e.winnerSide===0?"G (W.O.)":"W.O.",s1:e.winnerSide===1?"G (W.O.)":"W.O."};const s=Ie(n).sets.filter((o,i)=>i===0||o.winner!==null||o.games[0]>0||o.games[1]>0);return{s0:s.map(o=>o.games[0]).join(" "),s1:s.map(o=>o.games[1]).join(" ")}}function Dr(e,t=!1){return`
    <div class="seg" style="margin-bottom:14px">
      ${(t?[["elo","⭐ ELO"],["pts","🏅 Puntos (G)"],["wins","🏆 Victorias"],["matches","🎾 Partidos"]]:[["pts","🏅 Puntos"],["elo","⭐ ELO"],["wins","🏆 Victorias"],["matches","🎾 Partidos"]]).map(([n,r])=>`<button class="${e===n?"on":""}" data-set-psort="${n}">${r}</button>`).join("")}
    </div>`}function ln(e,t,a={}){if(!e||!e.length)return`<div class="empty">${A.trophy}<br>${h(a.emptyText||"Todavía no hay jugadores o partidos en este ranking.")}</div>`;const n=Number(a.qualCount)||0,r=(t==null?void 0:t.entityMode)==="pairs"?"Pareja":"Jugador",s=(t==null?void 0:t.primaryMetric)==="elo"||we(t==null?void 0:t.comp),o=t!=null&&t.scoring?Sn(t.comp,t.scoring,!1):"",i=`
  <div class="card" style="padding:12px 14px;margin-bottom:14px">
    <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:8px;flex-wrap:wrap">
      <h3 style="margin:0;font-size:15px">${h(a.tableTitle||(s?"Tabla Oficial · ELO Principal":"Tabla de Posiciones (Puntos + ELO)"))}</h3>
      ${o?`<small class="muted">${h(o)}</small>`:""}
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
          ${e.map((c,d)=>{const g=c.rank===1?"🥇":c.rank===2?"🥈":c.rank===3?"🥉":`#${c.rank}`,b=fa(c.elo),y=(c.setsDiff||0)>0?`+${c.setsDiff}`:String(c.setsDiff||0),k=(c.gamesDiff||0)>0?`+${c.gamesDiff}`:String(c.gamesDiff||0),P=n>0&&d<n?"qual":"",x=c.lastDelta?`<small style="font-size:11px;font-family:var(--font);font-weight:700;margin-left:3px;color:${c.lastDelta>0?"#10b981":"#ef4444"}">${c.lastDelta>0?"+":""}${c.lastDelta}</small>`:"";return`
            <tr class="${P}">
              <td><b>${g}</b></td>
              <td>
                <div style="display:flex;align-items:center;gap:7px">
                  <span style="width:8px;height:8px;border-radius:50%;background:${h(c.color||"#d4af37")};flex:none"></span>
                  <span style="font-weight:700;color:var(--tx)">${h(c.name)}</span>
                  <span style="font-size:11px;color:${b.color};font-weight:700">${b.icon}${b.level}</span>
                </div>
              </td>
              ${s?`
              <td>${c.matches}</td>
              <td>${c.wins}</td>
              <td>${c.draws||0}</td>
              <td>${c.losses??Math.max(0,c.matches-c.wins-(c.draws||0))}</td>
              <td>${c.gamesWon||0}</td>
              <td>${k}</td>
              <td><b>${c.pts??0}</b></td>
              <td class="pts-cell">${c.elo}${x}</td>`:`
              <td>${c.matches}</td>
              <td>${c.wins}</td>
              <td>${c.losses??Math.max(0,c.matches-c.wins)}</td>
              <td>${y}</td>
              <td>${k}</td>
              <td><b>${c.elo}</b></td>
              <td class="pts-cell">${c.pts??0}</td>`}
            </tr>`}).join("")}
        </tbody>
      </table>
    </div>
  </div>`;if(a.compactOnly)return i;const l=e.map(c=>{const d=de(c.wins,c.matches),g=(c.name||"JG").split(/\s+/).filter(Boolean).map(T=>T[0]).join("").slice(0,2).toUpperCase()||"JG",b=fa(c.elo),y=(c.finishedMatches||0)<Jo,k=c.rank===1?'<div class="rank-pos rank-gold" title="1º del Ranking">🥇 1º</div>':c.rank===2?'<div class="rank-pos rank-silver" title="2º del Ranking">🥈 2º</div>':c.rank===3?'<div class="rank-pos rank-bronze" title="3º del Ranking">🥉 3º</div>':`<div class="rank-pos" title="${c.rank}º del Ranking">#${c.rank}</div>`,P=c.lastDelta>0?`<div class="elo-trend up">▲ +${c.lastDelta} ELO</div>`:c.lastDelta<0?`<div class="elo-trend down">▼ ${c.lastDelta} ELO</div>`:'<div class="elo-trend neu">Sin cambios</div>',x=[];!s&&c.shots&&(c.shots.smash&&x.push(`💥 ${c.shots.smash} Smash`),c.shots.volea&&x.push(`🎾 ${c.shots.volea} Volea`),c.shots.bandeja&&x.push(`🌀 ${c.shots.bandeja} Bandeja`),c.shots.bajada&&x.push(`⚡ ${c.shots.bajada} Bajada`),c.shots.dejada&&x.push(`🎯 ${c.shots.dejada} Dejada`),c.shots.passing&&x.push(`🏹 ${c.shots.passing} Passing`));const S=(c.setsDiff||0)>=0?`+${c.setsDiff||0}`:`${c.setsDiff}`,m=(c.gamesDiff||0)>=0?`+${c.gamesDiff||0}`:`${c.gamesDiff}`;return`
    <div class="pcard">
      ${k}
      <div class="avatar" style="--c:${h(c.color||"#d4af37")};--f:${zt(c.color||"#d4af37")}">${h(g)}</div>
      <div class="info">
        <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">
          <b>${h(c.name)}</b>
          <span class="tier-pill" style="--tcol:${b.color}">${b.icon} Nivel ${b.level} · ${b.tier}</span>
          ${y?`<span class="calib-pill calib" title="Factor K=50 para calibración rápida">Calib. (${c.finishedMatches||0}/10)</span>`:'<span class="calib-pill fixed" title="Factor K=32 consolidado">K=32</span>'}
        </div>
        ${s?`<small>${c.matches} PJ · ${c.wins}G ${c.draws||0}E ${c.losses??0}P (${d}%) · ${c.gamesWon||0} GF / ${c.gamesLost||0} GC (Dif ${m})</small>`:`<small>${c.matches} PJ · ${c.wins} PG / ${c.losses??Math.max(0,c.matches-c.wins)} PP (${d}%) · Sets ${S} · Juegos ${m}</small>`}
        <div class="pstats">
          ${s?`
            <span>Pts (Games+Bonus): <b>${c.pts??0} pts</b></span>
            <span>Games ganados: <b>${c.gamesWon||0}</b></span>
            <span>Dif. games: <b>${m}</b></span>
          `:`
            <span>Winners: <b>${c.winners||0}</b></span>
            <span>ENF: <b>${c.ue||0}</b></span>
            <span>1º Saque: <b>${de(c.firstServeIn||0,c.srvPtsTotal||0)}%</b></span>
            <span>Gan. saque: <b>${de(c.srvPtsWon||0,c.srvPtsTotal||0)}%</b></span>
          `}
        </div>
        ${x.length?`
        <div style="display:flex;gap:4px;flex-wrap:wrap;margin-top:6px">
          ${x.map(T=>`<span class="tag-s" style="font-size:10px">${h(T)}</span>`).join("")}
        </div>`:""}
        <div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:7px">
          ${(t==null?void 0:t.entityMode)==="pairs"?c.name.split(/\s*[·\/]\s*/).filter(Boolean).slice(0,2).map((T,I)=>{const B=tn(T),M=T.split(/\s+/)[0]||T;return`<button class="pc-mini-btn" data-open-player-card="${h(T)}" data-pc-default-pos="${I===0?"Drive":"Revés"}" title="Tarjeta de ${h(T)}">${A.idCard} ${B?"Editar":"Tarjeta"} ${h(M)}</button>`}).join(""):`<button class="pc-mini-btn" data-open-player-card="${h(c.name)}" title="Generar tarjeta personalizable de ${h(c.name)}">${A.idCard} ${tn(c.name)?"Ver / Editar Tarjeta":"Crear Tarjeta"}</button>`}
        </div>
      </div>
      <div class="pcard-pts-box">
        ${s?`
          <span class="pcard-pts-main" style="font-size:32px">${c.elo}</span>
          <small>ELO</small>
          ${P}
          <div class="pcard-elo-sub" title="Puntaje secundario por games + bonus">🏅 ${c.pts??0} pts · ${c.gamesWon||0}G</div>
        `:`
          <span class="pcard-pts-main">${c.pts??0}</span>
          <small>PUNTOS</small>
          <div class="pcard-elo-sub">⚡ ${c.elo} ELO</div>
          ${P}
        `}
      </div>
    </div>`}).join("");return i+l}function cn(e){var a,n;if(!e)return"";const t=h(e.label||$e((a=e.players)==null?void 0:a[0],(n=e.players)==null?void 0:n[1]));return e.teamNum?`<span class="fx-team-num">#${e.teamNum}</span>${t}`:t}function jr(e){return e?e.format==="proyecto_padel"?"⚡ PRO PÁDEL":e.format==="league_rr"?"Todos contra Todos":e.format==="league_rr2"?"Ida y Vuelta":e.format==="knockout"?"Eliminación Directa":e.format==="groups_playoff"?"Grupos + Playoffs":e.kind==="tournament"?"Libre / Americano":"Liga Libre":""}function Al(){const{ui:e,competitionsList:t}=$,a=e.compFilter||"all",n=t.filter(o=>o.kind==="league"),r=t.filter(o=>o.kind==="tournament"),s=a==="league"?n:a==="tournament"?r:t;return`
  <div class="page">
    <div class="page-h">
      <h1>Ligas y Torneos</h1>
      <div class="page-h-acts">
        <button class="btn sm" data-act="open-join-comp" title="Unirse con código o link">📲 Unirse</button>
        <button class="btn primary sm" data-act="new-comp" data-kind="league">${A.plus} Liga</button>
        <button class="btn primary sm" data-act="new-comp" data-kind="tournament">${A.plus} Torneo</button>
        <button class="icon-btn" data-nav="settings" title="Ajustes">${A.gear}</button>
      </div>
    </div>
    <p class="muted" style="text-align:center;margin-bottom:14px">Cada Liga y Torneo mantiene su propia tabla de posiciones, ELO independiente, fixture, llaves eliminatorias y sincronización por QR.</p>

    <div class="seg" style="margin-bottom:14px">
      <button class="${a==="all"?"on":""}" data-set-cfilter="all">Todas (${t.length})</button>
      <button class="${a==="league"?"on":""}" data-set-cfilter="league">🏅 Ligas (${n.length})</button>
      <button class="${a==="tournament"?"on":""}" data-set-cfilter="tournament">🏆 Torneos (${r.length})</button>
    </div>

    ${s.length?s.map(o=>{var T,I;const i=ft(o),l=we(o),c=Tt(o),d=Ge(o),b=nt(o,!0).filter(B=>B.status==="finished").length,y=(o.fixtures||[]).filter(B=>!B.isBye&&B.team0&&B.team1&&B.winnerSide===null).length,k=o.rankingMode==="individual"?"individual":"pairs",x=Ht(Xt(nt(o,!1),{...i,entityMode:k,seedParticipants:o.participants||[]}),l?"elo":"pts",{tiebreakMode:l?"games":"sets"})[0],S=(o.fixtures||[]).find(B=>B.phase==="playoff"&&B.roundLabel==="Final"&&B.winnerSide!==null),m=S?S.winnerSide===0?S.team0:S.team1:null;return`
      <div class="comp-card">
        <div class="comp-card-top">
          <div style="min-width:0;flex:1">
            <div class="comp-pills" style="margin-bottom:6px">
              <span class="badge ${l?"pp":o.kind==="league"?"league":"tourn"}">${l?"⚡ PRO PÁDEL":o.kind==="league"?"🏅 Liga":"🏆 Torneo"}</span>
              ${l?'<span class="badge">👤 Individual · ELO Principal</span>':`<span class="badge">${h(jr(o))}</span>`}
              <span class="badge court">🏟️ ${d} ${d===1?"cancha":"canchas"}</span>
              ${c?'<span class="badge done">🏁 Finalizado</span>':""}
              <span class="badge">${h(Sn(o,i,!0))}</span>
              ${o.syncCode?`<span class="badge sync">📡 Sala #${h(o.syncCode)}</span>`:""}
            </div>
            <div class="comp-card-title">${h(o.name)}</div>
          </div>
          <div style="display:flex;gap:4px">
            <button class="icon-btn" data-open-comp-sync="${h(o.id)}" title="${o.syncCode?`QR y Sala Sync #${h(o.syncCode)}`:"Conectar dispositivos (QR)"}">${A.qr}</button>
            <button class="icon-btn" data-edit-comp="${h(o.id)}" title="Editar configuración">${A.edit}</button>
          </div>
        </div>

        <div style="font-size:12.5px;color:var(--tx2)">
          ${(o.participants||[]).length} inscriptos · ${b} partidos jugados${y&&!c?` · ${y} cruces pendientes`:""}
        </div>

        ${m?`<div class="comp-leader">🏆 Campeón: <b>${h(m.label||$e((T=m.players)==null?void 0:T[0],(I=m.players)==null?void 0:I[1]))}</b></div>`:x&&x.matches>0?l?`<div class="comp-leader">${c?"🏆 Ganador Final":"🥇 Líder ELO"}: <b>${h(x.name)}</b> · ${x.elo} ELO (${x.pts} pts · ${x.gamesWon||0}G)</div>`:`<div class="comp-leader">${c?"🏆 Campeón":"🥇 Líder"}: <b>${h(x.name)}</b> · ${x.pts} pts · ${x.elo} ELO (${x.wins}V)</div>`:""}

        <div class="btn-row" style="margin-top:2px">
          <button class="btn primary sm" data-open-comp="${h(o.id)}">${l?"Gestionar / Sorteo":"Gestionar"}</button>
          <button class="btn sm" data-open-comp-rank="${h(o.id)}">${A.trophy} Ver Ranking</button>
          ${c?"":l?`<button class="btn sm" data-act="open-comp-quick-score" data-comp="${h(o.id)}">${A.check} Cargar Resultado</button>`:`<button class="btn sm" data-play-in-comp="${h(o.id)}">${A.play} Jugar aquí</button>`}
        </div>
      </div>`}).join(""):`
      <div class="empty">
        ${A.award}<br>
        Todavía no creaste ${a==="league"?"ninguna Liga":a==="tournament"?"ningún Torneo":"Ligas ni Torneos"}.<br><br>
        <div class="btn-row" style="justify-content:center">
          <button class="btn primary" data-act="new-comp" data-kind="league">${A.plus} Crear Liga</button>
          <button class="btn primary" data-act="new-comp" data-kind="tournament">${A.plus} Crear Torneo</button>
          <button class="btn" data-act="open-join-comp">📲 Unirse con Código</button>
        </div>
      </div>
    `}
    ${Ct()}
  </div>
  ${mt("competitions")}`}function Rl(e){var d,g;const t=(e.fixtures||[]).filter(b=>b.phase==="playoff");if(!t.length)return"";const a=Tt(e),n=new Map;t.forEach(b=>{n.has(b.roundIdx)||n.set(b.roundIdx,[]),n.get(b.roundIdx).push(b)});const r=Array.from(n.keys()).sort((b,y)=>b-y),o=(n.get(r[r.length-1])||[])[0],i=o&&o.winnerSide!==null&&o.winnerSide!==void 0?o.winnerSide===0?o.team0:o.team1:null,l=i?`
    <div class="champ-banner">
      <small>🏆 CAMPEONES DE ${h(e.name)}</small>
      <b>${h(i.label||$e((d=i.players)==null?void 0:d[0],(g=i.players)==null?void 0:g[1]))}</b>
    </div>`:"",c=(b,y)=>{const k=y===0?b.team0:b.team1,P=b.winnerSide===y;if(!k)return`<div class="b-team tbd"><span class="bar"></span><span class="nm">${b.isBye?"BYE (Libre)":"Por definir"}</span></div>`;const x=Br(b),S=y===0?x.s0:x.s1;return`
      <div class="b-team ${P?"win":""}">
        <span class="bar" style="--c:${h(k.color||"#d4af37")}"></span>
        <span class="nm">${cn(k)}</span>
        ${S?`<span class="sc">${h(S)}</span>`:""}
      </div>`};return`
  ${l}
  <div class="bracket-wrap">
    <div class="bracket-cols">
      ${r.map(b=>{var P;const y=(n.get(b)||[]).slice().sort((x,S)=>x.slotIdx-S.slotIdx),k=((P=y[0])==null?void 0:P.roundLabel)||`Ronda ${b+1}`;return`
        <div class="bracket-round">
          <div class="bracket-round-title">${h(k)}</div>
          <div class="bracket-matches">
            ${y.map(x=>{const S=!a&&!x.isBye&&x.team0&&x.team1&&x.winnerSide===null;return`
              <div class="bracket-match ${x.winnerSide!==null?"done":""}">
                ${x.court&&!x.isBye?`<div class="b-court-hdr">🏟️ Cancha ${x.court}</div>`:""}
                ${c(x,0)}
                ${c(x,1)}
                <div class="b-actions">
                  ${S?`
                    <button class="btn primary sm" data-play-fixture="${h(e.id)}:${h(x.id)}">${A.play} Jugar</button>
                    <button class="btn sm" data-quick-score="${h(e.id)}:${h(x.id)}">${A.check} Resultado</button>
                  `:x.matchId?`
                    <button class="btn sm" data-open-stats="${h(x.matchId)}">${A.chart} Ver partido</button>
                  `:""}
                </div>
              </div>`}).join("")}
          </div>
        </div>`}).join("")}
    </div>
  </div>`}function Ll(e,t,a){if(!t.length)return"";const{activeMatch:n}=$,r=Tt(e),s=we(e),o=new Map;t.forEach(l=>{const c=l.roundLabel||"Cruces";o.has(c)||o.set(c,[]),o.get(c).push(l)});let i=`<div class="sec-t">${h(a)}</div>`;return o.forEach((l,c)=>{const d=l.slice().sort((b,y)=>(b.court??b.slotIdx)-(y.court??y.slotIdx)),g=Array.from(new Set(d.flatMap(b=>b.resting||[]).filter(Boolean)));i+=`<div class="fx-round-hdr"><span>${h(c)}</span><small class="muted">${d.filter(b=>b.winnerSide!==null).length}/${d.length}</small></div>`,g.length&&(i+=`<div class="fx-rest-row"><span>💤 Descansan:</span> ${g.map(b=>`<span class="fx-rest-chip">${h(b)}</span>`).join("")}</div>`),i+=d.map(b=>{var x,S;const y=Br(b),k=b.matchId&&n&&n.id===b.matchId&&n.status==="playing",P=!r&&!b.isBye&&b.team0&&b.team1&&b.winnerSide===null;return`
      <div class="fx-card">
        <div class="fx-teams">
          ${b.court&&!b.isBye?`<div style="margin-bottom:2px"><span class="fx-court-pill">🏟️ Cancha ${b.court}</span></div>`:""}
          <div class="fx-team-row ${b.winnerSide===0?"win":""}">
            <span class="dot" style="--c:${h(((x=b.team0)==null?void 0:x.color)||"#d4af37")}"></span>
            <span>${b.team0?cn(b.team0):b.isBye?"BYE":"Por definir"}</span>
            ${y.s0?`<span class="fx-sc">${h(y.s0)}</span>`:""}
          </div>
          <div class="fx-team-row ${b.winnerSide===1?"win":""}">
            <span class="dot" style="--c:${h(((S=b.team1)==null?void 0:S.color)||"#2f8cff")}"></span>
            <span>${b.team1?cn(b.team1):b.isBye?"BYE":"Por definir"}</span>
            ${y.s1?`<span class="fx-sc">${h(y.s1)}</span>`:""}
          </div>
        </div>
        <div style="display:flex;gap:6px;align-items:center;flex-wrap:wrap">
          ${k?'<span class="badge live">En juego</span>':""}
          ${P?s?`<button class="btn primary sm" data-quick-score="${h(e.id)}:${h(b.id)}">${A.check} Resultado</button>
                   <button class="btn sm" data-play-fixture="${h(e.id)}:${h(b.id)}">${A.play} Jugar</button>`:`<button class="btn primary sm" data-play-fixture="${h(e.id)}:${h(b.id)}">${A.play} Jugar</button>
                   <button class="btn sm" data-quick-score="${h(e.id)}:${h(b.id)}">${A.check} Resultado</button>`:""}
          ${b.matchId?`<button class="btn sm" data-open-stats="${h(b.matchId)}">${A.chart} Detalles</button>`:""}
          ${!r&&!b.matchId&&!b.isBye?`<button class="icon-btn" data-del-fixture="${h(e.id)}:${h(b.id)}" title="Quitar cruce" style="width:34px;height:34px">${A.trash}</button>`:""}
        </div>
      </div>`}).join("")}),i}function dn(e){const t=[];for(let a=hr;a<=Ln;a++)t.push(`<option value="${a}" ${e===a?"selected":""}>${a} ${a===1?"cancha":"canchas"}</option>`);return t.join("")}function Bl(e){const t=e.fixtures||[],a=t.filter(d=>d.phase==="playoff"),n=t.filter(d=>d.phase!=="playoff"),r=e.participants||[],s=Tt(e),o=Ge(e),i=vr(e),l=t.reduce((d,g)=>Math.max(d,g.roundIdx),-1)+2;let c="";if(s)c=`
      <div class="card" style="margin-bottom:14px">
        <div style="display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap">
          <div>
            <h3 style="margin-bottom:4px">🏁 El torneo terminó</h3>
            <small class="muted">Los sorteos están cerrados y no se generan más encuentros.</small>
          </div>
          <button class="btn sm" data-act="reopen-comp" data-comp="${h(e.id)}">🔓 Reabrir Torneo</button>
        </div>
      </div>`;else if(i){const d=r.filter(P=>P.type==="player"&&!P.paused&&(P.name||"").trim()),g=d.length<4,b=Math.min(o,Math.floor(d.length/4)),y=Math.max(0,d.length-b*4),k=Dn(d.length,o);c=`
      <div class="card" style="margin-bottom:14px">
        <div class="draw-hdr-row">
          <h3>🎲 Sorteo Social · Parejas y Canchas</h3>
          <label class="draw-courts-ctl">
            <span>Canchas:</span>
            <select class="inp" data-set-comp-courts="${h(e.id)}">${dn(o)}</select>
          </label>
        </div>
        <div class="draw-summary-bar">
          ${g?"Agregá al menos <b>4 jugadores activos</b> en «Inscriptos» para empezar a sortear parejas.":`<b>${d.length}</b> jugadores activos · <b>${b}</b> ${b===1?"cancha en uso":"canchas en uso"} → <b>${b}</b> ${b===1?"partido":"partidos"} por ronda${y?` (<b>${y}</b> descansan por rotación)`:" (juegan todos)"}.`}
        </div>
        <div class="btn-row">
          <button class="btn primary sm" data-act="gen-social-round" data-comp="${h(e.id)}" ${g?"disabled":""}>🎲 Sortear Ronda ${l}</button>
          <button class="btn sm" data-act="gen-social-cycle" data-comp="${h(e.id)}" ${g?"disabled":""}>📅 Sortear Ciclo (${k||0} rondas)</button>
          <button class="btn sm" data-act="open-add-fixture" data-comp="${h(e.id)}">${A.plus} Partido manual</button>
          <button class="btn sm" data-act="open-comp-quick-score" data-comp="${h(e.id)}">${A.check} Cargar Resultado</button>
          <button class="btn finish-btn sm" data-act="finish-comp" data-comp="${h(e.id)}">🏁 El torneo terminó</button>
        </div>
      </div>`}else{const d=r.filter(k=>!k.paused),g=d.length<2,b=e.format==="open";c=`
      <div class="card" style="margin-bottom:14px">
        <div class="draw-hdr-row">
          <h3>${e.format==="knockout"?"🎲 Sorteo de Llaves Eliminatorias":e.format==="groups_playoff"?"🎲 Sorteo de Grupos y Playoffs":b?"🎲 Sorteo de Fechas · Parejas Fijas":"🎲 Sorteo de Fixture (Todos contra Todos)"}</h3>
          <label class="draw-courts-ctl">
            <span>Canchas:</span>
            <select class="inp" data-set-comp-courts="${h(e.id)}">${dn(o)}</select>
          </label>
        </div>
        <div class="draw-summary-bar">
          ${g?"Agregá al menos <b>2 parejas</b> en «Inscriptos» para sortear encuentros.":`<b>${d.length}</b> ${e.rankingMode==="individual"?"jugadores":"parejas"} (#1 a #${d.length}) · <b>${o}</b> ${o===1?"cancha disponible":"canchas disponibles"}.`}
        </div>
        <div class="btn-row">
          ${e.format==="league_rr"||e.format==="league_rr2"?`<button class="btn primary sm" data-act="gen-rr" data-comp="${h(e.id)}" ${g?"disabled":""}>🎲 ${t.length?"Re-sortear Fixture":"Sortear Fixture al Azar"}</button>`:""}
          ${e.format==="knockout"?`<button class="btn primary sm" data-act="gen-bracket" data-comp="${h(e.id)}" ${g?"disabled":""}>🎲 ${a.length?"Re-sortear Llaves":"Sortear Llaves al Azar"}</button>`:""}
          ${e.format==="groups_playoff"?`
            <button class="btn primary sm" data-act="gen-groups" data-comp="${h(e.id)}" ${d.length<4?"disabled":""}>🎲 1. Sortear Grupos y Fechas</button>
            <button class="btn sm" data-act="advance-playoffs" data-comp="${h(e.id)}" ${d.length<4?"disabled":""}>${A.trophy} 2. Clasificar a Llaves</button>
          `:""}
          ${b?`
            <button class="btn primary sm" data-act="gen-pairs-round" data-comp="${h(e.id)}" ${g?"disabled":""}>🎲 Sortear Fecha ${l}</button>
            <button class="btn sm" data-act="gen-rr" data-comp="${h(e.id)}" ${g?"disabled":""}>📅 Sortear Todos contra Todos</button>
          `:""}
          <button class="btn sm" data-act="open-add-fixture" data-comp="${h(e.id)}">${A.plus} Partido manual</button>
          <button class="btn sm" data-act="open-comp-quick-score" data-comp="${h(e.id)}">${A.check} Cargar Resultado</button>
          <button class="btn finish-btn sm" data-act="finish-comp" data-comp="${h(e.id)}">🏁 El torneo terminó</button>
        </div>
      </div>`}return`
    ${c}
    ${a.length?`<div class="sec-t">Cuadro Eliminatorio (Playoffs)</div>${Rl(e)}`:""}
    ${Ll(e,n,e.format==="groups_playoff"?"Fase de Grupos":i?"Rondas Sorteadas":"Fixture / Fechas")}
    ${t.length?"":`<div class="empty">${A.calendar}<br>${s?"Este torneo terminó sin cruces sorteados.":i?"Todavía no sorteaste ninguna ronda.<br>Cargá los jugadores en «Inscriptos» y tocá «Sortear Ronda 1» arriba.":"Todavía no hay cruces sorteados.<br>Tocá el botón de sorteo automático arriba o agregá un partido manual."}</div>`}
  `}function Dl(){const{ui:e,competitionsList:t,prefs:a}=$,n=J(e.compId)||t[0];if(!n)return`
    <div class="page">
      <div class="empty">${A.award}<br>Competencia no encontrada.<br><br><button class="btn" data-nav="competitions">Volver a Ligas y Torneos</button></div>
    </div>${mt("competitions")}`;e.compId=n.id;const r=we(n),s=Tt(n),o=Ge(n),i=vr(n),l=n.fixtures||[],c=e.compTab||"standings",d=ft(n),g=n.participants||[],b=nt(n,!0),y=n.rankingMode==="both"?e.playerEntityMode||"pairs":n.rankingMode||"pairs",k=ps(n,n.id),P={tiebreakMode:r?"games":"sets"},x=Xt(nt(n,!1),{...d,entityMode:y,seedParticipants:g}),S=ua(Ht(x,k,P),k,P),m={scope:n.kind,id:`${a.rankingId||"RK"}-${n.id.slice(-4).toUpperCase()}`,title:n.name,subtitle:bn(n,y,d),entityMode:y,primaryMetric:r?"elo":"pts",comp:n,scoring:d},T=l.reduce((L,O)=>Math.max(L,O.roundIdx),-1)+2,I=g.filter(L=>L.type==="player"&&!L.paused).length,B=S[0];let M="";if(c==="standings"){const L=Array.from(new Set(g.map(F=>F.group).filter(F=>!!F))).sort(),O=n.format==="groups_playoff"&&L.length?L.map(F=>{const G=ua(il(n,F),"pts");return ln(G,m,{tableTitle:`Grupo ${F} (Clasifican top ${n.advancePerGroup||2})`,qualCount:Number(n.advancePerGroup)||2,compactOnly:!0})}).join(""):"";M=`
      ${n.rankingMode==="both"?`
        <div class="seg" style="margin-bottom:12px">
          <button class="${y==="pairs"?"on":""}" data-set-pentity="pairs">👥 Por Parejas</button>
          <button class="${y==="individual"?"on":""}" data-set-pentity="individual">👤 Individual</button>
        </div>
      `:""}
      ${Dr(k,r)}
      ${O}
      ${ln(S,m,{tableTitle:r?"Tabla PRO PÁDEL · ELO Principal":n.format==="groups_playoff"?"Ranking General + ELO del Torneo":"Tabla de Posiciones + ELO",emptyText:r?"Agregá jugadores en «Inscriptos», sorteá una ronda o tocá «Cargar Resultado Final».":"Inscribí participantes o jugá un partido en esta competencia para ver la tabla."})}
      ${S.length?`
        <div class="btn-row" style="margin-top:12px">
          <button class="btn primary big" data-act="share-comp-rank">${A.share} Compartir Ranking</button>
          <button class="btn big" data-act="export-comp-rank">${A.img} Descargar Imagen HD</button>
        </div>`:""}
    `}else if(c==="fixtures")M=Bl(n);else if(c==="matches")M=`
      ${s?"":`
        <div class="btn-row" style="margin-bottom:14px">
          ${r?`<button class="btn primary" data-act="open-comp-quick-score" data-comp="${h(n.id)}">${A.check} Cargar Resultado Final</button>`:`<button class="btn primary" data-play-in-comp="${h(n.id)}">${A.play} Jugar en vivo</button>
                 <button class="btn" data-act="open-comp-quick-score" data-comp="${h(n.id)}">${A.check} Cargar Sets / Games</button>`}
        </div>
      `}
      ${b.length?b.map(En).join(""):`<div class="empty">${A.ball}<br>Aún no se registraron partidos en este torneo.</div>`}
    `;else if(c==="participants"){const L=n.rankingMode==="individual",O=["A","B","C","D"].slice(0,Math.max(2,Number(n.numGroups)||2));M=`
      ${`<datalist id="known-players">${Oa().map(E=>`<option value="${h(E)}">`).join("")}</datalist>`}
      ${s?`
        <div class="card" style="margin-bottom:14px">
          <div style="display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap">
            <div>
              <h3 style="margin-bottom:4px">🏁 Lista de inscriptos cerrada</h3>
              <small class="muted">El torneo finalizó. Reabrilo si necesitás modificar jugadores o parejas.</small>
            </div>
            <button class="btn sm" data-act="reopen-comp" data-comp="${h(n.id)}">🔓 Reabrir Torneo</button>
          </div>
        </div>
      `:`
        <div class="card">
          <h3>Inscribir ${L?"Jugador":"Pareja / Jugador"}</h3>
          ${L?`
            <div class="row wrap">
              <div class="field" style="flex:1 1 200px">
                <label>Nombre del Jugador</label>
                <input class="inp" id="part-ind-name" list="known-players" data-enter-add-part="${h(n.id)}" placeholder="Ej: Matías (Enter agrega)">
              </div>
              ${n.format==="groups_playoff"?`
                <div class="field" style="flex:0 0 110px">
                  <label>Grupo</label>
                  <select class="inp" id="part-group">
                    <option value="">Auto</option>
                    ${O.map(E=>`<option value="${E}">Grupo ${E}</option>`).join("")}
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
                <input class="inp" id="part-p1" list="known-players" data-enter-add-part="${h(n.id)}" placeholder="Jugador 2">
              </div>
              ${n.format==="groups_playoff"?`
                <div class="field" style="flex:0 0 100px">
                  <label>Grupo</label>
                  <select class="inp" id="part-group">
                    <option value="">Auto</option>
                    ${O.map(E=>`<option value="${E}">Grupo ${E}</option>`).join("")}
                  </select>
                </div>`:""}
            </div>
          `}
          <div class="field" style="margin-top:8px">
            <label>Color identificatorio</label>
            <select class="inp" id="part-color">
              ${Rt.map(E=>`<option value="${E.c}">${h(E.n)}</option>`).join("")}
            </select>
          </div>
          <button class="btn primary block" style="margin-top:12px" data-act="add-part" data-comp="${h(n.id)}">${A.plus} Agregar Inscripto</button>
          ${L?`
            <details class="batch-part-box">
              <summary>⚡ Carga rápida de varios jugadores (pegar lista)</summary>
              <div style="margin-top:8px">
                <textarea class="inp" id="part-batch-names" rows="3" placeholder="Ej: Walter, Mati, Lucía, Juan, Marcos, Noelia (separados por coma o uno por línea)"></textarea>
                <button class="btn sm block" style="margin-top:8px" data-act="add-part-batch" data-comp="${h(n.id)}">${A.plus} Cargar Lista Completa</button>
              </div>
            </details>
          `:""}
        </div>
      `}

      <div class="sec-t">Lista de Inscriptos (${g.length})</div>
      ${g.length?g.map((E,p)=>{var w,C;const u=E.type==="pair"?$e((w=E.players)==null?void 0:w[0],(C=E.players)==null?void 0:C[1]):E.name||"",f=E.type==="pair"?`Equipo #${p+1} · Pareja fija`:`Jugador #${p+1}${E.paused?" · En pausa (no entra al sorteo)":""}`;return`
        <div class="fx-card ${E.paused?"part-paused":""}">
          <div style="display:flex;align-items:center;gap:10px;min-width:0;flex:1">
            <span style="width:10px;height:28px;border-radius:4px;background:${h(E.color||"#d4af37")};flex:none"></span>
            <div style="min-width:0">
              <b style="font-size:15px;color:var(--tx)">${p+1}. ${h(u)} ${E.paused?'<span class="badge">Pausado</span>':""}</b>
              <small style="display:block;color:var(--tx2)">${f}</small>
            </div>
          </div>
          <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;justify-content:flex-end">
            ${E.type==="pair"?[0,1].map(R=>{var V;const j=(((V=E.players)==null?void 0:V[R])||"").trim();if(!j)return"";const q=j.split(/\s+/)[0]||j;return`<button class="pc-mini-btn" data-open-player-card="${h(j)}" data-pc-default-pos="${R===0?"Drive":"Revés"}" title="Crear tarjeta de ${h(j)}">${A.idCard} ${h(q)}</button>`}).join(""):`<button class="pc-mini-btn" data-open-player-card="${h(E.name||"")}" title="Crear tarjeta de ${h(E.name||"")}">${A.idCard} Tarjeta</button>`}
            ${!s&&i?`<button class="btn sm" data-toggle-part-pause="${h(n.id)}:${h(E.id)}" title="${E.paused?"Volver al sorteo":"Pausar en próximos sorteos"}">${E.paused?"▶ Activar":"⏸ Pausa"}</button>`:""}
            ${!s&&n.format==="groups_playoff"?`
              <select class="inp" style="width:auto;min-height:34px;padding:4px 8px;font-size:12px" data-set-part-group="${h(n.id)}:${h(E.id)}">
                <option value="">Auto</option>
                ${O.map(R=>`<option value="${R}" ${E.group===R?"selected":""}>Grupo ${R}</option>`).join("")}
              </select>
            `:""}
            ${s?"":`<button class="icon-btn" data-del-part="${h(n.id)}:${h(E.id)}" title="Quitar inscripto" style="width:36px;height:36px">${A.trash}</button>`}
          </div>
        </div>`}).join(""):`<div class="empty">${A.users}<br>Todavía no hay inscriptos. Agregá parejas o jugadores arriba.</div>`}
    `}return`
  <div class="page">
    <div class="page-h">
      <div class="page-h-top">
        <button class="icon-btn" data-nav="competitions" title="Volver">${A.back}</button>
        <h1>${h(n.name)}</h1>
      </div>
      <div class="page-h-acts">
        <button class="icon-btn" data-open-comp-sync="${h(n.id)}" title="Sincronizar varios dispositivos (QR / Link)">${A.qr}</button>
        <button class="icon-btn" data-edit-comp="${h(n.id)}" title="Editar">${A.edit}</button>
        ${s?"":r?`<button class="icon-btn" data-act="open-comp-quick-score" data-comp="${h(n.id)}" title="Cargar resultado rápido">${A.plus}</button>`:`<button class="icon-btn" data-play-in-comp="${h(n.id)}" title="Jugar partido aquí">${A.play}</button>`}
        <button class="icon-btn" data-del-comp="${h(n.id)}" title="Eliminar">${A.trash}</button>
      </div>
    </div>

    <div class="comp-pills" style="justify-content:center;margin-bottom:10px">
      <span class="badge ${r?"pp":n.kind==="league"?"league":"tourn"}">${r?"⚡ PRO PÁDEL":n.kind==="league"?"🏅 Liga":"🏆 Torneo"}</span>
      ${r?'<span class="badge">👤 Individual · Parejas Rotativas</span>':`<span class="badge">${h(jr(n))}</span>`}
      <span class="badge court">🏟️ ${o} ${o===1?"cancha":"canchas"}</span>
      ${s?'<span class="badge done">🏁 Finalizado</span>':""}
      <span class="badge">${h(Sn(n,d,!0))}</span>
      ${n.syncCode?`<span class="badge sync">📡 Sala #${h(n.syncCode)}</span>`:""}
    </div>

    ${s?`
      <div class="comp-finished-banner">
        <div style="min-width:0;flex:1">
          <b>🏁 Torneo Terminado</b>
          <small>No se generan nuevos sorteos ni cruces.${B&&B.matches>0?` Líder final: ${h(B.name)} (${r?`${B.elo} ELO`:`${B.pts} pts`}).`:""}</small>
        </div>
        <button class="btn sm" data-act="reopen-comp" data-comp="${h(n.id)}">🔓 Reabrir Torneo</button>
      </div>
    `:""}

    ${r&&!s?`
      <div class="pp-hero-bar">
        <div style="min-width:0;flex:1">
          <b style="font-size:14px;color:var(--acc-ink);display:block">⚡ Mesa PRO PÁDEL · ELO Principal</b>
          <small style="color:var(--tx2);font-size:12px;display:block">Cargá jugadores en Inscriptos y sorteá rondas automáticas por canchas, o cargá resultados sueltos.</small>
        </div>
        <div style="display:flex;gap:6px;flex-wrap:wrap">
          ${I>=4?`<button class="btn primary sm" data-act="gen-social-round" data-comp="${h(n.id)}">🎲 Sortear Ronda ${T}</button>`:'<button class="btn sm" data-set-ctab="participants">👥 Cargar Jugadores</button>'}
          <button class="btn sm" data-act="open-comp-quick-score" data-comp="${h(n.id)}">${A.check} Resultado</button>
          <button class="btn finish-btn sm" data-act="finish-comp" data-comp="${h(n.id)}">🏁 Terminó</button>
        </div>
      </div>
    `:""}

    ${n.syncCode?`
      <div class="sync-bar">
        <div style="display:flex;align-items:center;gap:8px;min-width:0;flex:1">
          <span class="sync-dot ${e.compSyncConnected[n.syncCode]?"on":""}"></span>
          <div style="min-width:0">
            <b style="font-size:13px;color:var(--tx);display:block">📡 Sala Multi-Dispositivo #${h(n.syncCode)}</b>
            <small style="color:var(--tx2);font-size:11.5px;display:block">${e.compSyncConnected[n.syncCode]?"Conectado en tiempo real · Varias canchas activas":"Listo para recibir resultados de otras canchas"}${e.compLastSyncAt[n.syncCode]?` · Act. ${new Date(e.compLastSyncAt[n.syncCode]).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}`:""}</small>
          </div>
        </div>
        <div style="display:flex;gap:6px;flex-wrap:wrap">
          <button class="btn sm" data-open-comp-sync="${h(n.id)}">${A.qr} QR / Enlace</button>
          <button class="btn sm" data-sync-comp="${h(n.syncCode)}">↻ Sincronizar</button>
        </div>
      </div>
    `:`
      <div class="sync-bar idle">
        <div style="min-width:0;flex:1">
          <b style="font-size:13px;color:var(--tx);display:block">🏟️ ¿Se cargan resultados desde varios celulares?</b>
          <small style="color:var(--tx2);font-size:11.5px;display:block">Generá un QR o enlace para sincronizar tabla y resultados entre dispositivos.</small>
        </div>
        <button class="btn primary sm" data-open-comp-sync="${h(n.id)}">${A.qr} Conectar dispositivos</button>
      </div>
    `}

    <div class="seg" style="margin-bottom:16px">
      <button class="${c==="standings"?"on":""}" data-set-ctab="standings">Tabla</button>
      <button class="${c==="fixtures"?"on":""}" data-set-ctab="fixtures">${i?"Sorteo / Rondas":"Fixture / Sorteo"}</button>
      <button class="${c==="matches"?"on":""}" data-set-ctab="matches">Partidos (${b.length})</button>
      <button class="${c==="participants"?"on":""}" data-set-ctab="participants">Inscriptos (${g.length})</button>
    </div>

    ${M}
    ${Ct()}
  </div>
  ${mt("competitions")}`}function ra(){var s,o,i,l,c;const e=$.ui.quickScoreState;if(!e)return;const t=document.getElementById("qs-round");t&&(e.stageLabel=t.value);const a=e.compId?J(e.compId):null;if(e.mode==="comp-adhoc"&&!e.useManualTeams){const d=document.getElementById("qs-sel0"),g=document.getElementById("qs-sel1");if(d&&a){e.selPartIds[0]=d.value;const b=gt((a.participants||[]).find(y=>y.id===d.value));b&&(e.teams[0]={players:b.players,color:b.color||"#d4af37"})}if(g&&a){e.selPartIds[1]=g.value;const b=gt((a.participants||[]).find(y=>y.id===g.value));b&&(e.teams[1]={players:b.players,color:b.color||"#2f8cff"})}}else if(e.mode==="comp-adhoc"&&e.useManualTeams){const d=(s=document.getElementById("qs-t0p0"))==null?void 0:s.value,g=(o=document.getElementById("qs-t0p1"))==null?void 0:o.value,b=(i=document.getElementById("qs-t1p0"))==null?void 0:i.value,y=(l=document.getElementById("qs-t1p1"))==null?void 0:l.value;(d!==void 0||g!==void 0)&&(e.teams[0].players=[d??e.teams[0].players[0],g??e.teams[0].players[1]]),(b!==void 0||y!==void 0)&&(e.teams[1].players=[b??e.teams[1].players[0],y??e.teams[1].players[1]])}for(let d=0;d<(((c=e.sets)==null?void 0:c.length)||0);d++){const g=document.getElementById(`qs-s${d+1}-0`),b=document.getElementById(`qs-s${d+1}-1`);g&&(e.sets[d][0]=g.value===""?null:Math.max(0,Number(g.value)||0)),b&&(e.sets[d][1]=b.value===""?null:Math.max(0,Number(b.value)||0))}const n=document.getElementById("qs-wo");n&&(e.wo=!!n.checked);const r=document.getElementById("qs-winner");r&&(e.winner=r.value||"auto")}function Nr(e){var b,y,k,P,x,S,m,T;if(!e)return"Tocá los games de cada set para cargar el resultado";const t=e.compId?J(e.compId):null,a=we(t),n=ft(t),r=$e(((y=(b=e.teams[0])==null?void 0:b.players)==null?void 0:y[0])||"DRIVE 1",((P=(k=e.teams[0])==null?void 0:k.players)==null?void 0:P[1])||"REVÉS 1"),s=$e(((S=(x=e.teams[1])==null?void 0:x.players)==null?void 0:S[0])||"DRIVE 2",((T=(m=e.teams[1])==null?void 0:m.players)==null?void 0:T[1])||"REVÉS 2");if(e.wo)return e.winner==="0"?`✓ Victoria por W.O. para ${r}`:e.winner==="1"?`✓ Victoria por W.O. para ${s}`:"⚠️ Activaste W.O.: elegí qué pareja ganó abajo";const o=(e.sets||[]).filter(I=>I[0]!==null&&I[1]!==null);if(!o.length)return a?"Tocá los games finales de cada pareja (ej. 4 y 2, o 3 y 3)":"Tocá los games de cada set (0–7) para calcular el ganador";const i=o.map(I=>`${I[0]}-${I[1]}`).join(" · ");let l=0,c=0,d=0,g=0;if(o.forEach(I=>{const B=Number(I[0])||0,M=Number(I[1])||0;d+=B,g+=M,B>M?l++:M>B&&c++}),a){const I=n.gameBonusPts||0;if(e.winner==="0"||e.winner==="auto"&&l>c)return`✓ Gana ${r} (${i}) · +${n.winPts+d*I} pts vs +${n.lossPts+g*I} pts · + ELO`;if(e.winner==="1"||e.winner==="auto"&&c>l)return`✓ Gana ${s} (${i}) · +${n.winPts+g*I} pts vs +${n.lossPts+d*I} pts · + ELO`;if((e.winner==="draw"||e.winner==="auto")&&d===g)return`🤝 Empate ${i} · Ambos +${(n.drawPts??2)+d*I} pts (${n.drawPts??2}E + ${d}G) · Ajuste ELO`}return e.winner==="0"?`✓ Gana ${r} (${i})`:e.winner==="1"?`✓ Gana ${s} (${i})`:e.winner==="draw"&&d===g?`🤝 Empate (${i})`:l>c?`✓ Gana ${r} (${l}-${c} sets · ${i})`:c>l?`✓ Gana ${s} (${c}-${l} sets · ${i})`:`Empate ${l}-${c} en sets (${i}) — Agregá otro set o elegí ganador`}function ms(){const e=$.ui.quickScoreState;if(!e)return;ra();const t=document.getElementById("qs-preview");t&&(t.textContent=Nr(e))}function jl(){var a,n,r,s,o,i,l,c,d,g,b,y,k,P,x,S;const{ui:e,prefs:t}=$;if(!e.compModal)return"";if(e.compModal==="daily-pts")return`
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
    </div>`;if(e.compModal==="create"||e.compModal==="edit"){const m=e.compFormState||{},T=m.kind==="tournament",I=T&&m.format==="proyecto_padel",B=T?[["proyecto_padel","⚡ PRO PÁDEL"],["knockout","Eliminación Directa"],["groups_playoff","Grupos + Playoffs"],["open","Libre / Americano"]]:[["league_rr","Todos contra Todos"],["league_rr2","Ida y Vuelta"],["open","Liga Libre"]],M=m.defaultRules||{};return`
    <div class="scrim" data-close-comp-modal="1">
      <div class="sheet" style="max-width:560px">
        <div class="sheet-hdr">
          <h2>${e.compModal==="edit"?"Editar":"Crear"} ${T?"Torneo":"Liga"}</h2>
          <button type="button" class="icon-btn" data-close-comp-modal="1" title="Cerrar" style="width:36px;height:36px;border-radius:12px;font-size:15px;font-weight:700">✕</button>
        </div>

        <div class="field" style="margin-bottom:10px">
          <label>Tipo</label>
          <div class="pills">
            <button type="button" class="pill ${T?"":"on"}" data-cf-kind="league">🏅 Liga</button>
            <button type="button" class="pill ${T?"on":""}" data-cf-kind="tournament">🏆 Torneo</button>
          </div>
        </div>

        <div class="field" style="margin-bottom:10px">
          <label>Nombre</label>
          <input class="inp" id="cf-name" value="${h(m.name||"")}" placeholder="${I?"Ej: Torneo PRO PÁDEL #1":T?"Ej: Copa Nocturna / Open SÉ":"Ej: Liga del Jueves / Apertura"}">
        </div>

        <div class="field" style="margin-bottom:10px">
          <label>Formato</label>
          <div class="pills">
            ${B.map(([L,O])=>`<button type="button" class="pill ${m.format===L?"on":""}" data-cf-fmt="${L}">${O}</button>`).join("")}
          </div>
        </div>

        ${I?`
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
                ${[2,3,4].map(L=>`<option value="${L}" ${(Number(m.numGroups)||2)===L?"selected":""}>${L} grupos</option>`).join("")}
              </select>
            </div>
            <div class="field">
              <label>Clasifican por grupo</label>
              <select class="inp" id="cf-adv">
                ${[1,2,3,4].map(L=>`<option value="${L}" ${(Number(m.advancePerGroup)||2)===L?"selected":""}>Top ${L}</option>`).join("")}
              </select>
            </div>
          </div>`:""}

        <div class="field" style="margin-bottom:10px">
          <label>Cantidad de canchas disponibles (1 a 10)</label>
          <select class="inp" id="cf-courts">
            ${dn(Number(m.courtsCount)||4)}
          </select>
        </div>

        ${I?"":`
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
          ${I?`
            <div class="field">
              <label>Pts Empate</label>
              <input type="number" class="inp" id="cf-dpts" min="0" max="50" value="${Number(m.drawPts??2)}">
            </div>
          `:""}
          <div class="field">
            <label>Pts Derrota</label>
            <input type="number" class="inp" id="cf-lpts" min="0" max="50" value="${Number(m.lossPts??1)}">
          </div>
          ${I?`
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

        ${I?"":`
          <div class="row wrap" style="margin-bottom:14px">
            <div class="field">
              <label>Sets por defecto</label>
              <select class="inp" id="cf-sets">
                <option value="1" ${(Number(M.totalSets)||3)===1?"selected":""}>1 Set único</option>
                <option value="3" ${(Number(M.totalSets)||3)===3?"selected":""}>Al mejor de 3 sets</option>
              </select>
            </div>
            <div class="field">
              <label>En el 40-40</label>
              <select class="inp" id="cf-deuce">
                <option value="golden" ${(M.deuceRule||"golden")==="golden"?"selected":""}>Punto de Oro</option>
                <option value="adv" ${M.deuceRule==="adv"?"selected":""}>Ventajas</option>
                <option value="star" ${M.deuceRule==="star"?"selected":""}>Star Point (FIP)</option>
              </select>
            </div>
          </div>
        `}

        <div class="btn-row" style="margin-top:12px">
          <button class="btn primary block" data-act="save-comp-modal">${e.compModal==="edit"?"Guardar Cambios":I?"Crear Torneo":"Crear y Gestionar"}</button>
          <button class="btn block" data-close-comp-modal="1">Cancelar</button>
        </div>
      </div>
    </div>`}if(e.compModal==="quick-score"&&(e.quickScoreState||e.quickScoreFixtureId)){!e.quickScoreState&&e.quickScoreFixtureId&&(e.quickScoreState=Tr({mode:"fixture",fixtureKey:e.quickScoreFixtureId}));const m=e.quickScoreState,T=m.compId?J(m.compId):null,I=we(T),B=T?(T.participants||[]).filter(f=>f.type==="pair"):[],M=T?ul(T):[],L=T?Array.from(new Set([...M,...Oa()])):Oa(),O=$e(((n=(a=m.teams[0])==null?void 0:a.players)==null?void 0:n[0])||"DRIVE 1",((s=(r=m.teams[0])==null?void 0:r.players)==null?void 0:s[1])||"REVÉS 1"),F=$e(((i=(o=m.teams[1])==null?void 0:o.players)==null?void 0:i[0])||"DRIVE 2",((c=(l=m.teams[1])==null?void 0:l.players)==null?void 0:c[1])||"REVÉS 2"),G=m.mode==="fixture"?` (${h(m.stageLabel||"Cruce")})`:T?` · ${h(T.name)}`:" · Partido del Día",E=f=>f>=2,p=new Set([(g=(d=m.teams[0])==null?void 0:d.players)==null?void 0:g[0],(y=(b=m.teams[0])==null?void 0:b.players)==null?void 0:y[1],(P=(k=m.teams[1])==null?void 0:k.players)==null?void 0:P[0],(S=(x=m.teams[1])==null?void 0:x.players)==null?void 0:S[1]].map(f=>String(f||"").trim().toUpperCase()).filter(Boolean)),u=f=>`inp qs-slot-inp ${m.activeSlot===f?"active-slot":""}`;return`
    <div class="scrim" data-close-comp-modal="1">
      <div class="sheet" style="max-width:520px">
        ${m.mode==="comp-adhoc"?`<datalist id="qs-known-players">${L.map(f=>`<option value="${h(f)}">`).join("")}</datalist>`:""}
        <div class="sheet-hdr">
          <h2 style="font-size:21px">⚡ Cargar Resultado${G}</h2>
          <button class="icon-btn" data-close-comp-modal="1" title="Cerrar" style="width:36px;height:36px;border-radius:12px;font-size:15px;font-weight:700">✕</button>
        </div>

        ${m.mode==="comp-adhoc"?`
          <div class="field" style="margin-bottom:10px">
            <label>${I?"Turno / Ronda (opcional)":"Etapa / Ronda (opcional)"}</label>
            <input class="inp" id="qs-round" value="${h(m.stageLabel||"")}" placeholder="${I?"Ej: Turno 1 / Cancha 2 (opcional)":"Ej: Fecha 2 / Grupo A / Libre"}">
          </div>
          ${B.length>=2&&!m.useManualTeams?`
            <div class="row wrap" style="margin-bottom:8px">
              <div class="field">
                <label>Pareja 1</label>
                <select class="inp" id="qs-sel0">
                  ${B.map(f=>{var w,C,R;return`<option value="${h(f.id)}" ${((w=m.selPartIds)==null?void 0:w[0])===f.id?"selected":""}>${h($e((C=f.players)==null?void 0:C[0],(R=f.players)==null?void 0:R[1]))}</option>`}).join("")}
                </select>
              </div>
              <div class="field">
                <label>Pareja 2</label>
                <select class="inp" id="qs-sel1">
                  ${B.map(f=>{var w,C,R;return`<option value="${h(f.id)}" ${((w=m.selPartIds)==null?void 0:w[1])===f.id?"selected":""}>${h($e((C=f.players)==null?void 0:C[0],(R=f.players)==null?void 0:R[1]))}</option>`}).join("")}
                </select>
              </div>
            </div>
            <div style="margin-bottom:12px">
              <button type="button" class="pill sm" data-act="qs-toggle-manual-teams">✏️ Escribir nombres / Armar parejas libres</button>
            </div>
          `:`
            <div class="row wrap" style="margin-bottom:8px">
              <div class="field"><label>Pareja 1 · Jugador 1</label><input class="${u(0)}" id="qs-t0p0" data-qs-slot="0" list="qs-known-players" value="${h(m.teams[0].players[0]||"")}" placeholder="Ej: Lucía"></div>
              <div class="field"><label>Pareja 1 · Jugador 2</label><input class="${u(1)}" id="qs-t0p1" data-qs-slot="1" list="qs-known-players" value="${h(m.teams[0].players[1]||"")}" placeholder="Ej: Juan"></div>
            </div>
            <div class="row wrap" style="margin-bottom:8px">
              <div class="field"><label>Pareja 2 · Jugador 1</label><input class="${u(2)}" id="qs-t1p0" data-qs-slot="2" list="qs-known-players" value="${h(m.teams[1].players[0]||"")}" placeholder="Ej: Marcos"></div>
              <div class="field"><label>Pareja 2 · Jugador 2</label><input class="${u(3)}" id="qs-t1p1" data-qs-slot="3" list="qs-known-players" value="${h(m.teams[1].players[1]||"")}" placeholder="Ej: Noelia"></div>
            </div>
            ${M.length?`
              <div style="margin-bottom:10px">
                <div style="display:flex;align-items:center;justify-content:space-between;gap:6px;margin-bottom:5px">
                  <small class="muted" style="font-size:11px">Tocá jugadores para llenar rápido (casilla ${(m.activeSlot||0)+1}/4):</small>
                  <button type="button" class="pill sm" data-act="qs-clear-players" style="min-height:24px;padding:2px 8px;font-size:11px">Limpiar nombres</button>
                </div>
                <div class="qs-player-chips">
                  ${M.map(f=>`<button type="button" class="qs-p-chip ${p.has(f.toUpperCase())?"used":""}" data-qs-pick-player="${h(f)}">+ ${h(f)}</button>`).join("")}
                </div>
              </div>
            `:`
              <div style="display:flex;justify-content:flex-end;margin-bottom:8px">
                <button type="button" class="pill sm" data-act="qs-clear-players" style="min-height:24px;padding:2px 8px;font-size:11px">Limpiar nombres</button>
              </div>
            `}
            ${B.length>=2?'<div style="margin-bottom:12px"><button type="button" class="pill sm" data-act="qs-toggle-manual-teams">👥 Elegir parejas inscriptas</button></div>':""}
          `}
        `:`
          <p class="muted" style="margin-bottom:12px"><b>${h(O)}</b> vs <b>${h(F)}</b> · Tocá los games de cada set sin anotar punto por punto.</p>
        `}

        ${m.sets.map((f,w)=>{const C=E(w)?[0,1,2,3,4,5,6,7,10]:[0,1,2,3,4,5,6,7],R=w===2&&m.hasSuperTbFinal;return`
          <div class="qs-set-card">
            <div class="qs-set-hdr">
              <b>${I?"Marcador Final (Games)":`Set ${w+1}${R?" / Súper TB":w>=2?" (Opcional)":""}`}</b>
              <button type="button" class="pill sm" data-qs-clear-set="${w}" style="min-height:26px;padding:2px 8px;font-size:11px">Limpiar</button>
            </div>
            ${[0,1].map(j=>{var ee;const q=((ee=m.teams[j])==null?void 0:ee.color)||(j===0?"#d4af37":"#2f8cff"),V=j===0?O:F,H=f[j],ie=H==null?"":String(H);return`
              <div class="qs-team-row">
                <div class="qs-team-top">
                  <span class="qs-team-lbl" style="--c:${h(q)}"><span class="dot"></span>${h(V)}</span>
                  <input type="number" class="inp qs-num" id="qs-s${w+1}-${j}" min="0" max="30" value="${h(ie)}" placeholder="–">
                </div>
                <div class="qs-pills" data-qs-row="${w}:${j}">
                  ${C.map(Z=>`<button type="button" class="qs-g-pill ${H===Z?"on":""}" style="--c:${h(q)};--f:${zt(q)}" data-qs-pick="${w}:${j}:${Z}">${Z}</button>`).join("")}
                </div>
              </div>`}).join("")}
          </div>`}).join("")}

        ${!I&&m.sets.length<5?`
          <button type="button" class="btn sm block" data-act="qs-add-set" style="margin-bottom:8px">
            ${A.plus} Agregar Set ${m.sets.length+1}${m.sets.length===2?" / Súper TB":""}
          </button>`:""}

        <div class="qs-preview" id="qs-preview">${h(Nr(m))}</div>

        ${I?"":`
          <div class="tog" style="border:none;padding:4px 0">
            <div><b>Victoria por Walkover (W.O.)</b><small>Otorga puntos de tabla y avanza sin alterar ELO</small></div>
            <label class="sw"><input type="checkbox" id="qs-wo" ${m.wo?"checked":""}><span></span></label>
          </div>
        `}

        <div class="field" style="margin:8px 0 14px">
          <label>${I?"Definición del resultado (auto detecta empate)":"Ganador (si empatan sets o en W.O.)"}</label>
          <select class="inp" id="qs-winner">
            <option value="auto" ${m.winner==="auto"?"selected":""}>${I?"Automático por marcador (o Empate)":"Automático por sets"}</option>
            <option value="0" ${m.winner==="0"?"selected":""}>Gana ${h(O)}</option>
            <option value="1" ${m.winner==="1"?"selected":""}>Gana ${h(F)}</option>
            ${I?`<option value="draw" ${m.winner==="draw"?"selected":""}>🤝 Empate oficial</option>`:""}
          </select>
        </div>

        <div class="btn-row">
          <button class="btn primary block" data-act="save-quick-score" data-target="${h(m.fixtureKey||e.quickScoreFixtureId||"")}">${A.check} Guardar Resultado</button>
          <button class="btn block" data-close-comp-modal="1">Cancelar</button>
        </div>
      </div>
    </div>`}if(e.compModal==="add-fixture"){const m=J(e.compId);if(!m)return"";const T=(m.participants||[]).filter(B=>B.type==="pair"),I=Math.max(Ln,Ge(m));return`
    <div class="scrim" data-close-comp-modal="1">
      <div class="sheet" style="max-width:500px">
        <h2>Agregar Cruce Manual</h2>
        <div class="row wrap" style="margin-bottom:10px">
          <div class="field" style="flex:1 1 180px">
            <label>Etapa / Fecha</label>
            <input class="inp" id="af-round" value="Fecha 1" placeholder="Ej: Fecha 1 / Semifinal">
          </div>
          <div class="field" style="flex:0 0 140px">
            <label>Cancha</label>
            <select class="inp" id="af-court">
              <option value="">Sin asignar</option>
              ${Array.from({length:I},(B,M)=>`<option value="${M+1}">Cancha ${M+1}</option>`).join("")}
            </select>
          </div>
        </div>
        ${T.length>=2?`
          <div class="field" style="margin-bottom:10px">
            <label>Pareja 1 (inscripta)</label>
            <select class="inp" id="af-sel0">
              ${T.map(B=>{var M,L;return`<option value="${h(B.id)}">${h($e((M=B.players)==null?void 0:M[0],(L=B.players)==null?void 0:L[1]))}</option>`}).join("")}
            </select>
          </div>
          <div class="field" style="margin-bottom:14px">
            <label>Pareja 2 (inscripta)</label>
            <select class="inp" id="af-sel1">
              ${T.map((B,M)=>{var L,O;return`<option value="${h(B.id)}" ${M===1?"selected":""}>${h($e((L=B.players)==null?void 0:L[0],(O=B.players)==null?void 0:O[1]))}</option>`}).join("")}
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
          <button class="btn primary block" data-act="save-manual-fixture" data-comp="${h(m.id)}">Agregar Cruce</button>
          <button class="btn block" data-close-comp-modal="1">Cancelar</button>
        </div>
      </div>
    </div>`}if(e.compModal==="sync-qr"){const m=J(e.compId);if(!m)return"";const T=Ua(m),I=_a(m,!1);return`
    <div class="scrim" data-close-comp-modal="1">
      <div class="sheet" style="max-width:480px">
        <div class="sheet-hdr">
          <h2>📡 Conectar Dispositivos</h2>
          <button class="icon-btn" data-close-comp-modal="1" title="Cerrar" style="width:36px;height:36px;border-radius:12px;font-size:15px;font-weight:700">✕</button>
        </div>
        <p class="muted" style="margin-bottom:12px">Todos los celulares que escaneen este QR o abran el enlace se conectan al mismo <b>${m.kind==="tournament"?"Torneo":"Liga"}: ${h(m.name)}</b> y suman sus resultados automáticamente al finalizar cada partido.</p>

        <div style="text-align:center;margin:10px 0 14px">
          <div style="display:inline-block;padding:12px;background:#fff;border-radius:16px;border:3px solid var(--gold);box-shadow:0 8px 28px rgba(0,0,0,.45)">
            <canvas id="comp-sync-qr-canvas" width="230" height="230" style="display:block;border-radius:6px"></canvas>
          </div>
          <div style="margin-top:10px">
            <span class="muted" style="font-size:11.5px;display:block;letter-spacing:.8px;text-transform:uppercase">Código de Sala</span>
            <b style="font-family:var(--fd);font-size:28px;letter-spacing:4px;color:var(--gold)">#${h(T)}</b>
          </div>
        </div>

        <div class="field" style="margin-bottom:10px">
          <label>Enlace directo de invitación</label>
          <div style="display:flex;gap:6px">
            <input class="inp" id="sync-comp-url-inp" readonly value="${h(I)}" style="font-size:12px">
            <button class="btn primary sm" data-copy-input="sync-comp-url-inp" style="flex:none">${A.copy} Copiar</button>
          </div>
        </div>

        <div class="btn-row" style="margin-top:10px">
          <button class="btn primary block" data-act="share-comp-invite">${A.share} Enviar Enlace (WhatsApp)</button>
          <button class="btn block" data-act="dl-comp-qr">${A.dl} Descargar QR HD</button>
        </div>
        <div class="btn-row" style="margin-top:8px">
          <button class="btn sm block" data-act="republish-comp-sync">↻ Actualizar datos en la nube</button>
          <button class="btn sm block" data-close-comp-modal="1">Cerrar</button>
        </div>

        <div style="margin-top:14px;padding:10px 12px;border-radius:10px;background:rgba(255,255,255,.03);border:1px solid var(--line);font-size:12px;color:var(--tx2);line-height:1.45">
          <b style="color:var(--tx);display:block;margin-bottom:4px">¿Cómo se usa en varias canchas?</b>
          1. Cada árbitro o jugador escanea este QR (o entra en <i>Ligas y Torneos → Unirse</i> con el código <b>#${h(T)}</b>).<br>
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
    </div>`:""}function Nl(){const{ui:e,historyList:t}=$,a=(e.histQuery||"").toLowerCase().trim(),n=e.histFilter||"all",r=t.filter(s=>{var d,g;const o=Vt(s);if(n!=="all"&&o!==n)return!1;if(!a)return!0;const i=s.teams.flatMap(b=>b.players).join(" ").toLowerCase(),l=qe(s),c=(((d=s.competition)==null?void 0:d.compName)||(l?(g=J(l))==null?void 0:g.name:"")||"").toLowerCase();return i.includes(a)||c.includes(a)||Wa(s.createdAt).toLowerCase().includes(a)});return`
  <div class="page">
    <div class="page-h">
      <h1>Historial (${t.length})</h1>
      <div class="page-h-acts">
        <button class="btn sm" data-act="export-json" title="Descargar copia de seguridad completa en JSON">${A.dl} Backup JSON</button>
        <label class="btn sm" style="cursor:pointer" title="Importar partidos desde archivo JSON">
          ${A.up} Importar
          <input type="file" accept=".json,application/json" style="display:none" id="imp-json-file">
        </label>
        <button class="icon-btn" data-nav="settings" title="Ajustes">${A.gear}</button>
      </div>
    </div>

    <div class="seg" style="margin-bottom:12px">
      <button class="${n==="all"?"on":""}" data-set-hfilter="all">Todos</button>
      <button class="${n==="daily"?"on":""}" data-set-hfilter="daily">☀️ Día</button>
      <button class="${n==="league"?"on":""}" data-set-hfilter="league">🏅 Ligas</button>
      <button class="${n==="tournament"?"on":""}" data-set-hfilter="tournament">🏆 Torneos</button>
    </div>

    <div class="field">
      <input class="inp" placeholder="Buscar por jugador, fecha o torneo..." value="${h(e.histQuery)}" id="hist-search-inp">
    </div>

    ${r.length?r.map(En).join(""):`<div class="empty">${A.hist}<br>No se encontraron partidos.</div>`}
    ${Ct()}
  </div>
  ${mt("history")}`}function Ol(){var b;const{ui:e,historyList:t,competitionsList:a,prefs:n}=$,r=rt("padel_ranking_vault",{}),s=Object.values(r),o=!!(e.sharedRanking&&Array.isArray(e.sharedRanking.players)&&e.sharedRanking.players.length>0);!t.length&&!a.length&&o&&e.playerRankingView==="shared"&&(e.playerScope="shared");const i=$s(),l=i.scope,c=i.sortKey||"pts",d=i.players||[];let g="";if(l==="daily"){const y=e.dailyTimeFilter||"all",k=e.playerEntityMode||"individual",P=Number(n.dailyWinPts??3),x=Number(n.dailyLossPts??1);g=`
      <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;background:linear-gradient(135deg,rgba(212,175,55,0.08) 0%,rgba(16,16,22,0.92) 80%);border:1px solid rgba(212,175,55,0.25);border-radius:12px;padding:8px 14px;margin-bottom:12px;flex-wrap:wrap">
        <div style="display:flex;align-items:center;gap:8px;min-width:0;overflow:hidden">
          <span style="font-size:16px">☀️</span>
          <div style="min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">
            <span style="font-size:13px;font-weight:700;color:var(--tx)">${h(n.rankingName||"Mi Ranking")} · Partido del Día</span>
            <span style="font-family:monospace;font-size:11px;color:var(--gold);margin-left:6px;background:rgba(212,175,55,0.12);padding:2px 6px;border-radius:6px;font-weight:700">#${h(n.rankingId)}</span>
          </div>
        </div>
        <div style="display:flex;gap:6px">
          <button class="btn sm" data-act="open-daily-pts" style="padding:4px 9px;font-size:11.5px;height:auto">+${P}V / +${x}D</button>
          <button class="btn sm" data-act="prompt-ranking-name" style="padding:4px 9px;font-size:11.5px;height:auto">✏️ Renombrar</button>
        </div>
      </div>

      <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:12px">
        <div class="seg" style="flex:1 1 180px">
          <button class="${y==="all"?"on":""}" data-set-daily-time="all">📅 Acumulado</button>
          <button class="${y==="today"?"on":""}" data-set-daily-time="today">☀️ Hoy</button>
        </div>
        <div class="seg" style="flex:1 1 180px">
          <button class="${k==="individual"?"on":""}" data-set-pentity="individual">👤 Individual</button>
          <button class="${k==="pairs"?"on":""}" data-set-pentity="pairs">👥 Por Parejas</button>
        </div>
      </div>`}else if(l==="league"||l==="tournament"){const y=a.filter(k=>k.kind===l);if(!y.length)g=`
      <div class="card" style="text-align:center;margin-bottom:14px">
        <p class="muted" style="margin-bottom:10px">Todavía no creaste ${l==="league"?"ninguna Liga":"ningún Torneo"}.</p>
        <button class="btn primary sm" data-act="new-comp" data-kind="${l}">${A.plus} Crear ${l==="league"?"Liga":"Torneo"}</button>
      </div>`;else{const k=i.comp,P=k?Array.from(new Set((k.participants||[]).map(S=>S.group).filter(Boolean))).sort():[],x=i.entityMode||"pairs";g=`
      <div class="card" style="margin-bottom:12px;padding:12px 14px">
        <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
          <select class="inp" style="flex:1 1 190px;min-height:38px" data-act="sel-rank-comp">
            ${y.map(S=>`<option value="${h(S.id)}" ${S.id===(k==null?void 0:k.id)?"selected":""}>${h(S.name)}</option>`).join("")}
          </select>
          ${k?`<button class="btn sm" data-open-comp="${h(k.id)}">Gestionar</button>`:""}
          <button class="btn sm" data-act="new-comp" data-kind="${l}">${A.plus}</button>
        </div>
        ${(k==null?void 0:k.rankingMode)==="both"?`
          <div class="seg" style="margin-top:10px">
            <button class="${x==="pairs"?"on":""}" data-set-pentity="pairs">👥 Por Parejas</button>
            <button class="${x==="individual"?"on":""}" data-set-pentity="individual">👤 Individual</button>
          </div>`:""}
        ${(k==null?void 0:k.format)==="groups_playoff"&&P.length?`
          <div class="pills" style="margin-top:10px">
            <button class="pill ${(e.selectedGroupFilter||"all")==="all"?"on":""}" data-set-gfilter="all">Todos</button>
            ${P.map(S=>`<button class="pill ${e.selectedGroupFilter===S?"on":""}" data-set-gfilter="${h(S)}">Grupo ${h(S)}</button>`).join("")}
          </div>`:""}
      </div>`}}else if(l==="shared"){const y=(b=e.sharedRanking)!=null&&b.timestamp?` · ${new Date(e.sharedRanking.timestamp).toLocaleDateString("es-AR",{day:"numeric",month:"short"})}`:"";g=`
    ${s.length>1?`
      <div class="seg" style="margin-bottom:12px;overflow-x:auto;white-space:nowrap">
        ${s.map(k=>{var P;return`
          <button class="${((P=e.sharedRanking)==null?void 0:P.id)===k.id?"on":""}" data-select-ranking="${h(k.id)}">📡 ${h(k.name||"Compartido")} (#${h(k.id)})</button>
        `}).join("")}
      </div>`:""}
    ${o&&e.sharedRanking?`
      <div class="card" style="margin-bottom:14px;background:linear-gradient(135deg,rgba(212,175,55,0.14) 0%,rgba(16,16,22,0.96) 60%);border:1px solid rgba(212,175,55,0.38);padding:12px 16px;display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap">
        <div style="display:flex;align-items:center;gap:10px">
          <span style="font-size:24px">📡</span>
          <div>
            <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">
              <b style="font-size:14px;color:var(--acc-ink)">${h(e.sharedRanking.name||"Ranking Compartido")}</b>
              <span style="font-family:monospace;font-size:11.5px;color:var(--gold);background:rgba(212,175,55,0.15);padding:1px 6px;border-radius:6px;font-weight:700">#${h(e.sharedRanking.id||"RK-EXT")}</span>
            </div>
            <small style="color:var(--tx2);font-size:12px">${h(e.sharedRanking.subtitle||`${d.length} participantes`)}${y}</small>
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
        <button class="btn primary sm" data-act="share-ranking" title="Compartir Ranking por WhatsApp o enlace">${A.share} Compartir</button>
        <button class="btn sm" data-act="export-ranking-img" title="Descargar imagen oficial del Ranking">${A.img} Imagen</button>
        <button class="icon-btn" data-nav="settings" title="Ajustes">${A.gear}</button>
      </div>
    </div>
    <p class="muted" style="text-align:center;margin-bottom:12px">Rankings separados por competencia: Partido del Día (acumulado u hoy), Ligas y Torneos.</p>

    <div class="seg" style="margin-bottom:12px">
      <button class="${l==="daily"?"on":""}" data-set-pscope="daily">☀️ Partido del Día</button>
      <button class="${l==="league"?"on":""}" data-set-pscope="league">🏅 Ligas</button>
      <button class="${l==="tournament"?"on":""}" data-set-pscope="tournament">🏆 Torneos</button>
      ${o||s.length>0?`<button class="${l==="shared"?"on":""}" data-set-pscope="shared">📡 Guardados</button>`:""}
    </div>

    ${g}

    ${Dr(c,i.primaryMetric==="elo"||we(i.comp))}

    ${ln(d,i,{tableTitle:i.title||"Tabla de Posiciones",emptyText:l==="daily"?e.dailyTimeFilter==="today"?"Todavía no hay Partidos del Día registrados hoy.":"Todavía no hay Partidos del Día guardados.":"Sin partidos ni inscriptos cargados en esta competencia."})}

    ${d.length?`
    <div class="btn-row" style="margin-top:14px;margin-bottom:14px">
      <button class="btn primary big" data-act="share-ranking">${A.share} Compartir Ranking</button>
      <button class="btn big" data-act="export-ranking-img">${A.img} Descargar Imagen en HD</button>
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

    ${Ct()}
  </div>
  ${mt("players")}`}function _l(){const{prefs:e,ui:t,historyList:a,competitionsList:n}=$,r=ha();return`
  <div class="page">
    <div class="page-h">
      <div class="page-h-top">
        <button class="icon-btn" data-nav="home" title="Inicio">${A.back}</button>
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
          <input class="inp" id="cfg-ranking-name" value="${h(e.rankingName||"")}" placeholder="Ej: Ranking de Fabián, Torneo Central..." style="flex:1">
          <button class="btn sm primary" data-act="save-ranking-name">Guardar</button>
        </div>
        <small class="muted" style="margin-top:4px;display:block">Aparece en los mensajes de WhatsApp, enlaces interactivos y tarjetas descargadas.</small>
      </div>

      <div style="display:flex;align-items:center;justify-content:space-between;margin-top:14px;background:rgba(255,255,255,0.035);padding:10px 14px;border-radius:12px;border:1px solid var(--line);flex-wrap:wrap;gap:8px">
        <div>
          <b style="font-size:12px;color:var(--tx2);display:block">ID ÚNICO DE TU CUENTA</b>
          <span style="font-family:monospace;font-size:16px;color:var(--gold);font-weight:800;letter-spacing:1px">#${h(e.rankingId)}</span>
        </div>
        <div style="display:flex;gap:6px">
          <button class="btn sm" data-act="copy-ranking-id" title="Copiar ID">${A.share} Copiar ID</button>
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
          <b>${t.storagePersisted===!0?"🛡️ Protegida":"ℹ️ Estándar"}${t.storageUsageBytes!==null?" · "+Vr(t.storageUsageBytes):""}</b>
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
            <input class="inp" id="cfg-sync-server" value="${h(bt())}" placeholder="https://ntfy.sh" style="flex:1;min-width:190px">
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
      <p class="muted" style="margin-bottom:10px;font-size:12px">Último backup: <b>${e.lastBackupAt?h(Wa(e.lastBackupAt)):"Todavía no exportado"}</b>${(e.changesSinceBackup||0)>0?` · ${e.changesSinceBackup} cambios recientes sin exportar`:""}</p>
      <label class="chk-inline">
        <input type="checkbox" ${e.backupIncludeCards!==!1?"checked":""} data-pref-bool="backupIncludeCards">
        <span>Incluir Tarjetas de Jugador HD y logos en el Backup JSON</span>
      </label>
      <div class="btn-row" style="margin-bottom:10px">
        <button class="btn primary sm" data-act="export-json">${A.dl} Descargar Backup JSON</button>
        <button class="btn sm" data-act="share-json">${A.share} Compartir JSON</button>
        <label class="btn sm" style="cursor:pointer">
          ${A.up} Importar JSON
          <input type="file" accept=".json,application/json" style="display:none" id="imp-json-file">
        </label>
      </div>
      <div class="btn-row">
        <button class="btn danger sm" data-act="clear-all-data">${A.trash} Borrar historial</button>
        <button class="btn danger sm" data-act="clear-all-comps">${A.trash} Borrar Ligas y Torneos</button>
      </div>
    </div>
    ${Ct()}
  </div>
  ${mt("settings")}`}function wa(){return typeof location<"u"?location.href.split("#")[0]:""}function qs(e,t=200){e&&jn(e,wa(),t)}function Or(){const{ui:e}=$,t=document.getElementById("qr-home-canvas");t&&qs(t,180);const a=document.getElementById("app-qr-modal-canvas");a&&qs(a,220);const n=document.getElementById("qr-settings-canvas");n&&qs(n,190);const r=document.getElementById("comp-sync-qr-canvas");if(r){const s=J(e.compId);s&&jn(r,_a(s,!0),230)}e.route==="player-card"&&Ne()}function Wl(){const e=wa();navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(e).then(()=>{D("Enlace copiado al portapapeles")}).catch(()=>{prompt("Copia este enlace de la app:",e)}):prompt("Copia este enlace de la app:",e)}function Fl(){const t=`🎾 *Pádel Control SÉ · By Sairaf Engel*
Marcador con estadísticas avanzadas, locución por voz y seguimiento en vivo punto a punto.

📲 Abrí la app acá:
`+wa();window.open("https://api.whatsapp.com/send?text="+encodeURIComponent(t),"_blank")}function Gl(){try{const e=wa(),t=document.createElement("canvas");new Pr({element:t,value:e,size:380,level:"H",padding:14,background:"#ffffff",foreground:"#060609"});const a=560,n=740,r=document.createElement("canvas");r.width=a,r.height=n;const s=r.getContext("2d");if(!s)return;const o=s.createLinearGradient(0,0,0,n);o.addColorStop(0,"#161410"),o.addColorStop(.5,"#0a0a0d"),o.addColorStop(1,"#040406"),s.fillStyle=o,s.fillRect(0,0,a,n),s.strokeStyle="#d4af37",s.lineWidth=3,s.strokeRect(16,16,a-32,n-32),s.strokeStyle="rgba(212, 175, 55, 0.35)",s.lineWidth=1,s.strokeRect(22,22,a-44,n-44),s.fillStyle="#f5d061",s.font='bold italic 32px "Barlow Condensed", sans-serif',s.textAlign="center",s.fillText("PÁDEL CONTROL SÉ",a/2,75),s.fillStyle="#d4af37",s.font='italic 20px "Great Vibes", cursive, sans-serif',s.fillText("By Sairaf Engel",a/2,108);const i=(a-380)/2,l=135;s.fillStyle="#ffffff",s.roundRect?(s.beginPath(),s.roundRect(i-10,l-10,400,400,18),s.fill()):s.fillRect(i-10,l-10,400,400),s.drawImage(t,i,l,380,380),s.fillStyle="#c2b8a3",s.font='15px "Plus Jakarta Sans", sans-serif',s.fillText("Apuntá con la cámara de tu celular para abrir la app",a/2,580),s.fillStyle="rgba(212, 175, 55, 0.12)",s.fillRect(36,608,a-72,42),s.strokeStyle="rgba(212, 175, 55, 0.45)",s.lineWidth=1,s.strokeRect(36,608,a-72,42),s.fillStyle="#f5d061",s.font='bold 14px "Plus Jakarta Sans", monospace',s.fillText(e,a/2,634),s.fillStyle="#7d7461",s.font='12.5px "Plus Jakarta Sans", sans-serif',s.fillText("Marcador Profesional · Estadísticas · Voz · Transmisión en Vivo",a/2,692);const c=document.createElement("a");c.download="QR-Padel-Control-SE.png",c.href=r.toDataURL("image/png"),c.click(),D("¡Imagen del QR descargada!")}catch(e){console.error("Error downloading QR card:",e),D("Error al descargar imagen")}}function ql(){const e=wa();return`
  <div class="scrim" data-close-qr="1" style="z-index:125">
    <div class="sheet" style="max-width:460px;text-align:center">
      <div class="sheet-hdr">
        <h2 style="font-size:21px;white-space:nowrap">Código QR de la App</h2>
        <button class="icon-btn" data-act="close-qr-modal" style="width:36px;height:36px;border-radius:12px" title="Cerrar">✕</button>
      </div>

      <div style="background:linear-gradient(135deg,rgba(212,175,55,0.12) 0%,rgba(16,16,22,0.95) 55%,rgba(245,208,97,0.06) 100%);border:1px solid rgba(212,175,55,0.35);border-radius:24px;padding:20px 16px;box-shadow:0 18px 45px rgba(0,0,0,0.85)">
        <div style="display:flex;align-items:center;justify-content:center;gap:12px;margin-bottom:14px">
          ${ns.replace('class="logo-ic"','class="logo-ic" style="width:48px;height:48px"')}
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
          ${h(e)}
        </div>

        <div class="btn-row" style="gap:8px">
          <button class="btn primary block" data-act="share-app-wa">${A.share} Compartir por WhatsApp</button>
          <button class="btn block" data-act="copy-app-link">${A.share} Copiar Enlace</button>
          <button class="btn block" data-act="dl-app-qr">${A.dl} Descargar Tarjeta QR (Imagen)</button>
        </div>
      </div>

      <div style="margin-top:14px">
        <button class="btn sm" data-act="close-qr-modal" style="width:100%">Cerrar</button>
      </div>
    </div>
  </div>`}function zl(){const{activeMatch:e,historyList:t,competitionsList:a}=$;let n="";if(e&&e.status==="playing"){const d=Ie(e);n=`
    <div class="card live-card">
      <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;flex-wrap:wrap;margin-bottom:4px">
        <div class="live-dot" style="margin:0">PARTIDO EN CURSO · ${h(Ut(e.durationMs))}</div>
        ${Ss(e)}
      </div>
      ${[0,1].map(g=>`
        <div class="mrow">
          <span class="bar" style="--c:${h(e.teams[g].color)}"></span>
          <span class="nm">${h(X(e,g))}</span>
          ${d.sets.map(b=>`<span class="s ${b.winner===g?"w":b.winner===null?"cur":""}">${b.games[g]}</span>`).join("")}
          <span class="s cur" style="width:42px">${h(d.pointDisplay[g])}</span>
        </div>`).join("")}
      <div class="btn-row" style="margin-top:12px">
        <button class="btn primary" data-act="resume-match">${A.play} Continuar marcador</button>
        <button class="btn" data-act="share-live">${A.live} Compartir en vivo</button>
        <button class="btn" data-open-stats="active">${A.chart} Estadísticas</button>
      </div>
    </div>`}const r=t.filter(d=>Vt(d)==="daily"),s=Ba(Date.now()),o=r.filter(d=>Ba(d.createdAt)===s).length,i=a.slice(0,3),l=i.length?`
    <div class="sec-t" style="display:flex;align-items:center;justify-content:space-between">
      <span>Ligas y Torneos (${a.length})</span>
      <button class="btn sm" data-nav="competitions">Ver todo</button>
    </div>
    ${i.map(d=>{const g=ft(d),b=we(d),y=Xt(nt(d),{...g,entityMode:d.rankingMode==="individual"?"individual":"pairs",seedParticipants:d.participants||[]}),P=Ht(y,b?"elo":"pts",{tiebreakMode:b?"games":"sets"})[0],x=nt(d).filter(S=>S.status==="finished").length;return`
      <button class="comp-card" style="width:100%;text-align:left" data-open-comp="${h(d.id)}">
        <div class="comp-card-top">
          <div>
            <div class="comp-pills" style="margin-bottom:6px">
              <span class="badge ${b?"pp":d.kind==="league"?"league":"tourn"}">${b?"⚡ PRO PÁDEL":d.kind==="league"?"🏅 Liga":"🏆 Torneo"}</span>
              <span class="badge">${(d.participants||[]).length} inscriptos · ${x} PJ</span>
            </div>
            <div class="comp-card-title">${h(d.name)}</div>
          </div>
        </div>
        ${P&&P.matches>0?b?`<div class="comp-leader">🥇 Líder ELO: <b>${h(P.name)}</b> · ${P.elo} ELO (${P.pts} pts · ${P.gamesWon||0}G)</div>`:`<div class="comp-leader">🥇 Líder: <b>${h(P.name)}</b> · ${P.pts} pts · ${P.elo} ELO</div>`:'<div class="comp-leader">Tocá para cargar resultados o ver tabla</div>'}
      </button>`}).join("")}`:"",c=t.slice(0,4);return`
  <div class="page">
    <div class="hero">
      ${ns}
      <div style="flex:1;min-width:0;display:flex;flex-direction:column;align-items:center;text-align:center">
        <h1>Pádel Control SÉ</h1>
        ${qr()}
      </div>
      <div style="display:flex;gap:8px;flex:none">
        <button class="icon-btn" data-nav="settings" title="Ajustes">${A.gear}</button>
        <button class="icon-btn" data-act="open-qr-modal" title="Compartir App / Código QR">${A.qr}</button>
      </div>
    </div>

    ${U.renderHomeSystemBanners()}

    <div class="card" style="margin-top:-6px;margin-bottom:20px;background:linear-gradient(135deg, rgba(212,175,55,0.18) 0%, rgba(16,16,22,0.96) 60%, rgba(245,208,97,0.08) 100%);border:1px solid rgba(212,175,55,0.38);text-align:center">
      <h3 style="justify-content:center;margin-bottom:12px;font-size:15px;letter-spacing:1.4px">${A.qr} Código QR para Compartir la App</h3>
      <div style="display:flex;flex-direction:column;align-items:center;gap:12px">
        <div style="background:#ffffff;padding:12px;border-radius:18px;box-shadow:0 12px 30px rgba(0,0,0,0.65), 0 0 22px rgba(212,175,55,0.25);display:inline-block">
          <canvas id="qr-home-canvas" style="display:block;width:180px;height:180px;border-radius:8px"></canvas>
        </div>
        <div style="max-width:380px">
          <b style="font-size:15px;color:var(--tx);display:block">Escaneá con la cámara de tu celular</b>
          <small style="color:var(--tx2);font-size:12.5px;display:block;margin-top:3px;line-height:1.4">Cualquier persona puede apuntar a este código con la cámara de su celular para abrir o guardar la app gratis y al instante.</small>
          <div style="margin:8px 0 10px;background:rgba(255,255,255,0.04);border:1px solid var(--line);border-radius:10px;padding:6px 10px;font-family:monospace;font-size:11.5px;color:var(--acc-ink);word-break:break-all">
            ${h(wa())}
          </div>
        </div>
        <div class="btn-row" style="width:100%;max-width:440px">
          <button class="btn primary" data-act="share-app-wa" style="flex:1 1 130px">${A.share} WhatsApp</button>
          <button class="btn" data-act="copy-app-link" style="flex:1 1 130px">${A.share} Copiar Enlace</button>
          <button class="btn" data-act="dl-app-qr" style="flex:1 1 130px">${A.dl} Descargar QR</button>
        </div>
      </div>
    </div>

    ${n}

    <div class="home-actions-grid">
      <button class="btn primary big" data-nav="new">${A.plus} Nuevo Partido</button>
      <button class="btn big" data-nav="competitions">${A.award} Ligas y Torneos</button>
    </div>
    <button class="btn block daily-rk-btn" data-act="open-daily-ranking">
      <span class="daily-rk-meta">
        <span class="daily-rk-title">☀️ Ranking Partido del Día</span>
        <span class="daily-rk-sub">${o} hoy · ${r.length} total</span>
      </span>
      <span class="daily-rk-cta">Ver tabla →</span>
    </button>
    <button class="home-card-cta" data-open-player-card="">
      <div class="home-card-cta-ico">${A.idCard}</div>
      <div class="home-card-cta-meta">
        <span class="home-card-cta-title">Crear Tarjeta de Jugador</span>
        <span class="home-card-cta-sub">Subí tu foto, categoría, posición y mejor golpe · Generala y compartila en HD</span>
      </div>
      <span class="home-card-cta-go">Crear →</span>
    </button>

    ${l}

    <div class="sec-t">Partidos recientes</div>
    ${c.length?c.map(En).join(""):`<div class="empty">${A.ball}<br>Todavía no hay partidos guardados.<br>Iniciá un partido nuevo para registrar cada punto.</div>`}
    ${t.length>4?`<button class="btn block" data-nav="history">Ver todo el historial (${t.length})</button>`:""}

    <div class="sec-t">Experiencia Pádel Control SÉ</div>
    <div class="feat">
      <div>${A.live}<b>Transmisión de Cancha En Vivo</b><p>Compartí un link al empezar el partido para que tus amigos sigan cada punto y estadística en tiempo real desde cualquier lugar.</p></div>
      <div>${A.chart}<b>Análisis y PDF Profesional</b><p>Puntos de oro, Star Point FIP, breaks, bajo presión, tabla por jugador, evolución y punto a punto imprimible.</p></div>
      <div>${A.vol}<b>Voz de árbitro y manos libres</b><p>Cantado automático del marcador en español y control por micrófono o pulsador Bluetooth.</p></div>
      <div>${A.share}<b>Compartir link o imagen</b><p>Generá una tarjeta resumen Black & Gold lista para redes o compartí el partido completo por enlace.</p></div>
    </div>

    ${Ct()}
  </div>
  ${mt("home")}`}function Vl(){var T,I,B;const{preset:e,prefs:t,competitionsList:a}=$,n=e,r=n.matchContext||"daily";if(r==="league"||r==="tournament"){const M=a.filter(L=>L.kind===r);(!n.compId||!M.some(L=>L.id===n.compId))&&(n.compId=((T=M[0])==null?void 0:T.id)||"",n.fixtureId="")}else n.compId="",n.fixtureId="";const s=Math.max(1,Number(n.totalSets)||(n.setsToWin?n.setsToWin*2-1:3)),o=Math.max(1,Number(n.gamesPerSet)||6),i=Math.max(1,Number(n.tiebreakPoints)||7),l=n.tiebreakAt!==0,d=`<datalist id="known-players">${Oa().map(M=>`<option value="${h(M)}">`).join("")}</datalist>`,g=[];for(let M=0;M<2;M++)for(let L=0;L<2;L++){const O=n.teams[M].players[L]||(L===0?`DRIVE ${M+1}`:`REVÉS ${M+1}`),F=n.firstServer[0]===M&&n.firstServer[1]===L,G=n.teams[M].color;g.push(`
        <button type="button" class="chip ${F?"on":""}" style="--c:${h(G)};--f:${zt(G)}" data-set-srv="${M},${L}">
          <span class="dot"></span>${h(O)}
        </button>`)}const b=r==="league"||r==="tournament"?a.filter(M=>M.kind===r):[],y=b.find(M=>M.id===n.compId)||null,k=(y==null?void 0:y.status)==="finished",P=y&&!k?(y.fixtures||[]).filter(M=>!M.isBye&&M.team0&&M.team1&&!M.matchId&&(M.winnerSide===null||M.winnerSide===void 0)):[],x=y&&n.fixtureId?(y.fixtures||[]).find(M=>M.id===n.fixtureId):null,S=((y==null?void 0:y.participants)||[]).filter(M=>M.type==="pair");let m="";if(r==="daily"){const M=Number(t.dailyWinPts??3),L=Number(t.dailyLossPts??1);m=`
      <div style="margin-top:12px;padding:10px 12px;border-radius:12px;background:rgba(245,158,11,0.08);border:1px solid rgba(245,158,11,0.28);display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap">
        <div style="font-size:12.5px;color:var(--tx2)">
          <b style="color:#fbbf24">☀️ Ranking Partido del Día</b> · Suma <b style="color:var(--tx)">+${M} pts victoria / +${L} pts derrota</b> y actualiza el ELO exclusivo del día (separado de Ligas y Torneos).
        </div>
        <button type="button" class="btn sm" data-act="open-daily-pts">${A.edit} Puntos</button>
      </div>`}else m=`
      <div style="margin-top:12px">
        ${b.length?`
          <div class="row wrap" style="align-items:flex-end">
            <div class="field" style="flex:1 1 210px">
              <label>Seleccionar ${r==="league"?"Liga":"Torneo"}</label>
              <select class="inp" data-act="sel-comp-for-new">
                ${b.map(M=>`<option value="${h(M.id)}" ${M.id===(y==null?void 0:y.id)?"selected":""}>${h(M.name)}</option>`).join("")}
              </select>
            </div>
            <button type="button" class="btn sm" data-act="new-comp" data-kind="${r}" style="margin-bottom:2px">${A.plus} Nueva</button>
            ${y?`<button type="button" class="btn sm" data-open-comp="${h(y.id)}" style="margin-bottom:2px">Ver Tabla</button>`:""}
          </div>
          ${y?`
            <div class="field" style="margin-top:10px">
              <label>Etapa / Fecha (opcional)</label>
              <input class="inp" data-preset-txt="stageLabel" value="${h(n.stageLabel||"")}" placeholder="${r==="league"?"Ej: Fecha 3":"Ej: Cuartos de Final"}">
            </div>
            ${x?`
              <div style="margin-top:10px;padding:9px 12px;border-radius:12px;background:rgba(16,185,129,0.12);border:1px solid rgba(16,185,129,0.35);display:flex;align-items:center;justify-content:space-between;gap:8px;flex-wrap:wrap">
                <span style="font-size:12.5px;color:#34d399;font-weight:700">✓ Vinculado a cruce: ${h(x.roundLabel)} (${h((I=x.team0)==null?void 0:I.label)} vs ${h((B=x.team1)==null?void 0:B.label)})</span>
                <button type="button" class="btn sm" data-act="clear-picked-fixture">Desvincular</button>
              </div>
            `:P.length?`
              <div style="margin-top:10px">
                <label style="font-size:11.5px;font-weight:700;color:var(--tx2);text-transform:uppercase;display:block;margin-bottom:6px">Cargar cruce pendiente (${P.length})</label>
                <div style="display:flex;gap:6px;flex-wrap:wrap;max-height:120px;overflow-y:auto">
                  ${P.slice(0,8).map(M=>{var L,O;return`
                    <button type="button" class="pill" data-pick-fixture="${h(y.id)}:${h(M.id)}">
                      ${h(M.roundLabel)}${M.court?` · C${M.court}`:""}: ${h(((L=M.team0)==null?void 0:L.label)||"")} vs ${h(((O=M.team1)==null?void 0:O.label)||"")}
                    </button>
                  `}).join("")}
                </div>
              </div>
            `:""}
            ${S.length?`
              <div class="row wrap" style="margin-top:10px">
                <div class="field">
                  <label>Cargar pareja inscripta → Pareja 1</label>
                  <select class="inp" data-fill-pair-team="0">
                    <option value="">-- Elegir pareja --</option>
                    ${S.map(M=>{var L,O;return`<option value="${h(y.id)}:${h(M.id)}">${h($e((L=M.players)==null?void 0:L[0],(O=M.players)==null?void 0:O[1]))}</option>`}).join("")}
                  </select>
                </div>
                <div class="field">
                  <label>Cargar pareja inscripta → Pareja 2</label>
                  <select class="inp" data-fill-pair-team="1">
                    <option value="">-- Elegir pareja --</option>
                    ${S.map(M=>{var L,O;return`<option value="${h(y.id)}:${h(M.id)}">${h($e((L=M.players)==null?void 0:L[0],(O=M.players)==null?void 0:O[1]))}</option>`}).join("")}
                  </select>
                </div>
              </div>
            `:""}
          `:""}
        `:`
          <div style="padding:12px;border-radius:12px;background:rgba(255,255,255,0.03);border:1px dashed var(--line);display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap">
            <span style="font-size:13px;color:var(--tx2)">Todavía no tenés ${r==="league"?"ninguna Liga creada":"ningún Torneo creado"}.</span>
            <button type="button" class="btn primary sm" data-act="new-comp" data-kind="${r}">${A.plus} Crear ${r==="league"?"Liga":"Torneo"}</button>
          </div>
        `}
      </div>`;return`
  <div class="page">
    ${d}
    <div class="page-h">
      <div class="page-h-top">
        <button class="icon-btn" data-nav="home" title="Volver">${A.back}</button>
        <h1>Nuevo Partido</h1>
      </div>
      <div class="page-h-acts">
        <button class="btn sm" data-act="swap-preset-teams" title="Intercambiar parejas">${A.swap} Invertir Parejas</button>
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
      ${m}
    </div>

    ${[0,1].map(M=>`
    <div class="card team-card" style="--c:${h(n.teams[M].color)}">
      <h3>Pareja ${M+1}</h3>
      <div class="row wrap">
        <div class="field">
          <label>Drive ${M+1} (Derecha)</label>
          <input class="inp" list="known-players" value="${h(n.teams[M].players[0]||"")}" placeholder="DRIVE ${M+1}" data-pname="${M},0">
        </div>
        <div class="field">
          <label>Revés ${M+1} (Izquierda)</label>
          <input class="inp" list="known-players" value="${h(n.teams[M].players[1]||"")}" placeholder="REVÉS ${M+1}" data-pname="${M},1">
        </div>
      </div>
      <div class="field">
        <label>Color de camiseta / lado</label>
        <div class="colors">
          ${Rt.map(L=>`<button type="button" style="--c:${L.c}" class="${n.teams[M].color===L.c?"on":""}" data-tcolor="${M},${L.c}" title="${L.n}"></button>`).join("")}
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
        <div class="chips" id="srv-chips-box">${g.join("")}</div>
      </div>
      <div class="tog">
        <div>
          <b>Estadísticas avanzadas por golpe</b>
          <small>Pregunta Winner, Error no forzado o Error forzado por jugador al anotar.</small>
        </div>
        <label class="sw"><input type="checkbox" ${n.shotPrompt?"checked":""} data-preset-bool="shotPrompt"><span></span></label>
      </div>
    </div>

    <button class="btn primary big block" data-act="start-match">${A.play} Empezar Partido (punto a punto)</button>
    <button class="btn big block" style="margin-top:10px" data-act="open-preset-quick-score">${A.check} Ya terminó · Cargar Sets y Games</button>
    ${Ct()}
  </div>
  ${mt("new")}`}function Ul(){const e=(typeof location<"u"&&location.hash||"").slice(1),t=e.indexOf("?"),a=e.indexOf("&"),n=t>=0?e.slice(t+1):a>=0?e.slice(a+1):"",s=new URLSearchParams(n).get("pos")||"";return["tl","tr","bl","br","bar"].includes(s)?s:"tl"}function _r(){const{ui:e,activeMatch:t}=$,n=(e.route==="live"||!!e.liveId)&&e.liveMatch?e.liveMatch:t||e.liveMatch,r=Ul();if(!n)return`
    <div class="obs-overlay obs-pos-${r}">
      <div class="obs-scorebug obs-waiting">
        <div class="obs-waiting-logo">${ns}</div>
        <div class="obs-waiting-info">
          <div class="obs-waiting-title">PÁDEL CONTROL SÉ</div>
          <div class="obs-waiting-sub">ESPERANDO INICIO DEL PARTIDO...</div>
        </div>
      </div>
    </div>`;const s=Ie(n),o=s.sets.filter((d,g)=>!(g===s.curSetIdx&&s.matchWinner===null||d.games[0]===0&&d.games[1]===0&&d.winner===null)),i=d=>{const g=n.teams[d].color,b=s.matchWinner===null&&s.srvTeam===d,y=o.map(m=>{const T=m.winner===d,I=m.tbScore?`<sup>${m.tbScore[d]}</sup>`:"";return`<div class="obs-set-box ${T?"won":""}">${m.games[d]}${I}</div>`}).join(""),k=s.matchWinner!==null?s.matchWinner===d?"🏆":"—":h(s.pointDisplay[d]),P=s.pointDisplay[d]==="ADV"||s.pointDisplay[d]==="GP"||s.isGP||s.isStar,x=s.srvSide||"D",S=[0,1].map(m=>{const T=h(ae(n,d,m));return b&&s.srvPlayer===m?`<span class="obs-p srv">${T} <span class="obs-ball" title="Al saque">🎾</span><span class="obs-srv-side srv-${x.toLowerCase()}" title="Saque desde la ${x==="D"?"Derecha":"Revés"}">${x}</span></span>`:`<span class="obs-p">${T}</span>`}).join(' <span style="opacity:0.4;margin:0 2px">·</span> ');return`
    <div class="obs-team-row ${b?"serving":""}">
      <div class="obs-team-bar" style="--tc:${h(g)}"></div>
      <div class="obs-team-names">
        ${S}
        ${b&&n.pendingFault?'<span class="obs-fault">2º</span>':""}
      </div>
      <div class="obs-sets-wrap">${y}</div>
      <div class="obs-games-box">${s.curSet.games[d]}</div>
      <div class="obs-pts-box ${s.matchWinner!==null?"dim":P?"gold":""}">${k}</div>
    </div>`};let l="";if(s.matchWinner!==null)l=`<div class="obs-ticker obs-ticker-gold">🏆 PARTIDO FINALIZADO · GANADORES: ${h(X(n,s.matchWinner))}</div>`;else if(s.isStar)l='<div class="obs-ticker obs-ticker-gold">★ STAR POINT (PUNTO DECISIVO)</div>';else if(s.isGP)l='<div class="obs-ticker obs-ticker-gold">★ PUNTO DE ORO</div>';else if(s.mp[0]||s.mp[1]){const d=s.mp[0]?0:1;l=`<div class="obs-ticker obs-ticker-hot">MATCH POINT · ${h(X(n,d))}</div>`}else if(s.sp[0]||s.sp[1]){const d=s.sp[0]?0:1;l=`<div class="obs-ticker obs-ticker-hot">SET POINT · ${h(X(n,d))}</div>`}else if(s.isBP){const d=1-s.srvTeam;l=`<div class="obs-ticker obs-ticker-warn">BOLA DE BREAK · ${h(X(n,d))}</div>`}else s.isSuperTB?l='<div class="obs-ticker">SÚPER TIE-BREAK A 10</div>':s.isTB&&(l='<div class="obs-ticker">TIE-BREAK A 7</div>');const c=s.matchWinner!==null?"FINALIZADO":s.isSuperTB?"SÚPER TB":s.isTB?"TIE-BREAK":`SET ${s.curSetIdx+1}`;return`
  <div class="obs-overlay obs-pos-${r}">
    <div class="obs-scorebug">
      <div class="obs-header">
        <div class="obs-brand">${ns} <span>PÁDEL CONTROL SÉ</span></div>
        <div class="obs-status-pill">${c}</div>
        <div class="obs-clock">
          <span class="obs-clock-dot"></span>
          <span id="sb-clock-val">${h(Ut(n.durationMs))}</span>
        </div>
      </div>
      ${i(0)}
      ${i(1)}
      ${l}
    </div>
  </div>`}function Hl(e="tl"){const{activeMatch:t,ui:a}=$,n=typeof location<"u"?location.href.split("#")[0]:"",r=e!=="tl"?`&pos=${e}`:"",s=`${n}#obs${r}`,o=t||a.liveMatch;let i="";o&&($a(o,!0,!0),i=Yt(o.id));const l=i?`${n}#obs&v=${i}${r}`:`${n}#obs${r}`;return{localUrl:s,remoteUrl:l,remoteCode:i}}function Jl(){const{ui:e}=$,t=e.obsSelectedPos||"tl",{localUrl:a,remoteUrl:n}=Hl(t);return`
  <div class="scrim" data-close-obs-modal="1" style="z-index:126">
    <div class="sheet" style="max-width:560px">
      <div class="sheet-hdr">
        <div style="width:36px;height:36px;border-radius:12px;background:linear-gradient(135deg,#ffe58f,#d4af37);color:#080600;display:grid;place-items:center;flex:none;box-shadow:0 6px 16px rgba(212,175,55,.45)">
          ${A.tv}
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
          ${_r()}
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
          <input class="inp" readonly value="${h(n)}" id="obs-remote-url-inp" style="font-family:monospace;font-size:11.5px;height:38px">
          <button class="btn primary sm" data-copy-input="obs-remote-url-inp" style="flex:none">${A.copy} Copiar</button>
        </div>
      </div>

      <div class="opt-sec">2. Enlace Local (Misma PC)</div>
      <div style="background:rgba(255,255,255,0.03);border:1px solid var(--line);border-radius:12px;padding:10px 12px;margin-bottom:14px">
        <div style="font-size:12px;color:var(--tx2);margin-bottom:6px">Sincronización instantánea de latencia cero si anotás en Chrome en la misma PC donde tenés el OBS:</div>
        <div style="display:flex;gap:8px;align-items:center">
          <input class="inp" readonly value="${h(a)}" id="obs-local-url-inp" style="font-family:monospace;font-size:11.5px;height:38px">
          <button class="btn sm" data-copy-input="obs-local-url-inp" style="flex:none">${A.copy} Copiar</button>
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
        <a href="${h(n)}" target="_blank" class="btn" style="text-decoration:none">${A.full} Abrir overlay en pestaña</a>
        <button class="btn primary" data-act="close-obs-modal">Listo</button>
      </div>
    </div>
  </div>`}function Kl(e,t){var r,s;const{ui:a}=$;let n="";if(a.shotSheet){const o=a.shotSheet.team,i=1-o,l=e.teams[o].color,c=e.teams[i].color,d=[[0,ae(e,o,0)],[1,ae(e,o,1)]],g=[[0,ae(e,i,0)],[1,ae(e,i,1)]];n+=`
    <div class="scrim" data-close-sheet="1">
      <div class="sheet">
        <h2>Punto para ${h(X(e,o))}</h2>
        <p class="muted">Seleccioná cómo terminó el punto (o tocá Punto rápido)</p>

        <div class="opt-sec">Golpe ganador (Winner) de ${h(X(e,o))}</div>
        <div class="opt-grid">
          ${d.map(([b,y],k)=>`
            <button class="opt" style="--c:${h(l)}" data-shot="winner,${o},${b},winner">
              <span class="k">${k+1}</span>
              ${h(y)}
              <small>Winner general</small>
            </button>`).join("")}
        </div>

        <div style="display:flex;gap:8px;flex-wrap:wrap;margin:8px 0 14px">
          ${d.map(([b,y])=>`
            <div style="flex:1;min-width:140px;background:rgba(212,175,55,0.06);border:1px solid rgba(212,175,55,0.22);border-radius:12px;padding:8px 10px">
              <div style="font-size:11px;font-weight:700;color:var(--gold);margin-bottom:6px">GOLPE DE ${h(y).toUpperCase()}:</div>
              <div style="display:flex;gap:5px;flex-wrap:wrap">
                <button type="button" class="pill sm" data-shot="winner,${o},${b},smash">💥 Smash</button>
                <button type="button" class="pill sm" data-shot="winner,${o},${b},volea">🎾 Volea</button>
                <button type="button" class="pill sm" data-shot="winner,${o},${b},bandeja">🌀 Bandeja</button>
                <button type="button" class="pill sm" data-shot="winner,${o},${b},bajada">⚡ Bajada</button>
                <button type="button" class="pill sm" data-shot="winner,${o},${b},dejada">🎯 Dejada</button>
              </div>
            </div>`).join("")}
        </div>

        <div class="opt-sec">Error no forzado de ${h(X(e,i))}</div>
        <div class="opt-grid">
          ${g.map(([b,y],k)=>`
            <button class="opt" style="--c:${h(c)}" data-shot="ue,${i},${b}">
              <span class="k">${k+3}</span>
              ${h(y)}
              <small>Error no forzado</small>
            </button>`).join("")}
        </div>

        <div class="opt-sec">Error forzado de ${h(X(e,i))}</div>
        <div class="opt-grid">
          ${g.map(([b,y],k)=>`
            <button class="opt" style="--c:${h(c)}" data-shot="fe,${i},${b}">
              <span class="k">${k+5}</span>
              ${h(y)}
              <small>Error forzado</small>
            </button>`).join("")}
        </div>

        ${t.srvTeam===i?`
        <button class="opt wide" style="--c:#f59e0b" data-shot="df,${i},${t.srvPlayer}">
          <span class="k">F</span>
          Doble falta de ${h(ae(e,i,t.srvPlayer))}
        </button>`:""}

        <div class="btn-row">
          <button class="btn primary" data-shot="pt,${o},-1"><span class="k">Espacio</span>Punto rápido (sin detalle)</button>
          <button class="btn" data-close-sheet="1"><span class="k">Esc</span>Cancelar</button>
        </div>
      </div>
    </div>`}if(a.secondSrvPrompt){const o=1-e.firstServer[0],i=e.teams[o].color;n+=`
    <div class="scrim">
      <div class="sheet">
        <h2>¿Quién saca en ${h(X(e,o))}?</h2>
        <p class="muted">Elegí el orden de saque de la pareja para el resto del set.</p>
        <div class="opt-grid" style="margin-top:14px">
          ${[0,1].map(l=>`
            <button class="opt" style="--c:${h(i)}" data-pick-2ndsrv="${l}">
              ${h(ae(e,o,l))}
              <small>Saca ahora</small>
            </button>`).join("")}
        </div>
      </div>
    </div>`}if(a.changeoverOverlay){const o=a.changeoverOverlay;n+=`
    <div class="overlay">
      <div class="big-ic">${A.swap}</div>
      <h2>${h(o.title)}</h2>
      <p>${h(o.sub)}</p>
      <div class="count" id="co-countdown">${o.secondsLeft}s</div>
      <div class="btn-row">
        <button class="btn primary big" data-act="dismiss-co">Continuar partido</button>
      </div>
    </div>`}if(t.matchWinner!==null&&!a.matchEndDismissed){const o=t.matchWinner,i=qe(e),l=i?J(i):null,c=ft(l),d=t.sets.reduce((x,S)=>(S.winner===0?x[0]++:S.winner===1&&x[1]++,x),[0,0]),g=c.winPts+(c.setBonusPts?d[o]*c.setBonusPts:0),b=c.lossPts+(c.setBonusPts?d[1-o]*c.setBonusPts:0),y=l?`${l.kind==="league"?"🏅 Liga":"🏆 Torneo"}: ${l.name}`:"☀️ Partido del Día",k=wn(e);let P="";if(k){const x=o===0?k.pair0:k.pair1,S=o===0?k.pair1:k.pair0,m=Math.abs(((r=x.players[0])==null?void 0:r.delta)||0),T=Math.abs(((s=S.players[0])==null?void 0:s.delta)||0);P=`
      <div class="ov-elo-box">
        <div class="ov-elo-title">⚡ RANKING ACTUALIZADO · ${h(y.toUpperCase())}</div>
        <div class="ov-elo-pairs">
          <div class="ov-elo-card win">
            <span class="ov-elo-tag">GANADORES</span>
            <b>${h(X(e,o))}</b>
            <div class="ov-elo-delta">+${g} pts tabla · ▲ +${m} ELO</div>
            ${k.isBlowout?"<small>💥 Bonus ELO x1.2 (+6 juegos)</small>":"<small>Tabla y ELO actualizados</small>"}
          </div>
          <div class="ov-elo-card lose">
            <span class="ov-elo-tag">SUBCAMPEONES</span>
            <b>${h(X(e,1-o))}</b>
            <div class="ov-elo-delta">+${b} pts tabla · ▼ -${T} ELO</div>
            <small>Ranking por separado</small>
          </div>
        </div>
      </div>`}n+=`
    <div class="overlay">
      <div class="big-ic">${A.trophy}</div>
      <p>¡PARTIDO FINALIZADO!</p>
      <div style="margin-bottom:8px">${Ss(e)}</div>
      <h2>${h(X(e,o))}</h2>
      <div class="ov-score">
        ${[0,1].map(x=>`
          <div class="mrow">
            <span class="bar" style="--c:${h(e.teams[x].color)}"></span>
            <span class="nm">${h(X(e,x))}</span>
            ${t.sets.map(S=>`<span class="s ${S.winner===x?"w":""}">${S.games[x]}</span>`).join("")}
          </div>`).join("")}
      </div>
      ${P}
      <div class="btn-row">
        <button class="btn primary big" data-open-stats="${h(e.id)}">${A.chart} Ver Análisis y PDF</button>
        <button class="btn big" data-act="share-img-active">${A.img} Imagen resumen</button>
      </div>
      <div class="btn-row">
        ${l?`<button class="btn" data-open-comp="${h(l.id)}">${A.award} Ver ${l.kind==="league"?"Liga":"Torneo"}</button>`:`<button class="btn" data-act="open-daily-ranking">${A.trophy} Ranking del Día</button>`}
        <button class="btn" data-act="undo-from-end">${A.undo} Corregir último punto</button>
        <button class="btn" data-nav="new">${A.plus} Nuevo partido</button>
      </div>
    </div>`}return a.menuOpen&&(n+=`
    <div class="scrim" data-close-menu="1">
      <div class="sheet">
        <h2>Opciones del marcador</h2>
        <div class="menu-list">
          <button data-act="open-qr-modal">${A.qr}<div><b>Compartir App (Código QR)</b><small>Mostrá el código para que otra persona escanee y abra la app en su teléfono</small></div></button>
          <button data-act="share-live">${A.live}<div><b>Compartir partido EN VIVO (Link)</b><small>Enviá un enlace por WhatsApp para que sigan el marcador en tiempo real desde cualquier lugar</small></div></button>
          <button data-act="toggle-shot-prompt">${A.edit}<div><b>${e.shotPrompt?"Desactivar":"Activar"} pregunta de golpe</b><small>${e.shotPrompt?"Actualmente pregunta Winner / Error al anotar":"Actualmente anota punto directo con un toque"}</small></div></button>
          <button data-act="open-obs-modal">${A.tv}<div><b>Superposición para OBS (Overlay)</b><small>Marcador broadcast transparente para streamings en vivo (YouTube, Twitch, OBS)</small></div></button>
          <button data-act="open-tv">${A.tv}<div><b>Abrir Modo TV / Espectador</b><small>Segunda ventana sincronizada en vivo para proyector o monitor</small></div></button>
          <button data-act="fullscreen">${A.full}<div><b>Pantalla completa</b><small>Ocultar barras del navegador</small></div></button>
          <button data-act="rotate-server">${A.ball}<div><b>Cambiar sacador actual</b><small>Alternar quién saca si hubo un ajuste manual</small></div></button>
          <button data-act="open-edit-names">${A.edit}<div><b>Editar nombres y colores</b><small>Modificar jugadores sin perder el marcador</small></div></button>
          <button data-open-stats="active">${A.chart}<div><b>Ver estadísticas hasta ahora</b><small>Análisis completo en tiempo real</small></div></button>
          <button class="danger" data-act="finish-early">${A.flag}<div><b>Terminar y guardar partido</b><small>Cerrar partido actual y archivar en el historial</small></div></button>
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
            <div class="field"><label style="font-size:11px;color:var(--tx2);display:block;margin-bottom:3px">Drive (Derecha)</label><input class="inp" id="ed-p-${o}-0" placeholder="DRIVE ${o+1}" value="${h(e.teams[o].players[0]||"")}"></div>
            <div class="field"><label style="font-size:11px;color:var(--tx2);display:block;margin-bottom:3px">Revés (Izquierda)</label><input class="inp" id="ed-p-${o}-1" placeholder="REVÉS ${o+1}" value="${h(e.teams[o].players[1]||"")}"></div>
          </div>
          <div class="colors" style="margin:6px 0 10px">
            ${Rt.map(i=>`<button type="button" style="--c:${i.c}" class="${e.teams[o].color===i.c?"on":""}" data-edit-tcolor="${o},${i.c}" title="${i.n}"></button>`).join("")}
          </div>`).join("")}
        <div class="btn-row">
          <button class="btn primary" data-act="save-edit-names">Guardar</button>
          <button class="btn" data-close-edit="1">Cancelar</button>
        </div>
      </div>
    </div>`),n}function zs(e=!1){const{ui:t,activeMatch:a,prefs:n}=$,r=t.route==="live",s=r?t.liveMatch:a;if(!s)return r?`
      <div class="page">
        <div class="empty">
          ${A.live}<br>
          <b>Conectando con la cancha en vivo...</b><br>
          <span class="muted">Esperando señal en tiempo real del partido.</span><br><br>
          <button class="btn" data-act="exit-live">Salir al inicio</button>
        </div>
      </div>`:'<div class="page"><div class="empty">No hay ningún partido activo.<br><br><button class="btn primary" data-nav="new">Crear Partido</button></div></div>';const o=Ie(s),i=s.flipped?[1,0]:[0,1],l=d=>{const g=s.teams[d].color,b=zt(g),y=[];for(let x=0;x<2;x++){const S=o.matchWinner===null&&o.srvTeam===d&&o.srvPlayer===x;y.push(`
        <div class="pn ${S?"srv":""}">
          <span class="ball"></span>
          <span class="nm">${h(ae(s,d,x))}</span>
          ${S&&o.srvSide?`<span class="srv-side-badge srv-side-${o.srvSide.toLowerCase()}" title="Saque desde la ${o.srvSide==="D"?"Derecha":"Revés"}">${o.srvSide}</span>`:""}
          ${S&&s.pendingFault?'<em class="fault">2º SAQUE</em>':""}
        </div>`)}const k=o.sets.map((x,S)=>{if(S===o.curSetIdx&&o.matchWinner===null||x.games[0]===0&&x.games[1]===0&&x.winner===null)return"";const m=x.winner===d,T=x.tbScore?`<sup>${x.tbScore[d]}</sup>`:"";return`<span class="${m?"won":""}">${x.games[d]}${T}</span>`}).join(""),P=o.matchWinner!==null?o.matchWinner===d?A.trophy:"—":h(o.pointDisplay[d]);return`
    <div class="half" data-team="${d}" ${e?'data-ro="1"':'tabindex="0" role="button"'} style="--tc:${h(g)};--tf:${b}">
      <div class="players">${y.join("")}</div>
      <div class="h-sets">${k}</div>
      <div class="h-games">
        <small>${o.isSuperTB?"SÚPER TB":"JUEGOS"}</small>
        <b>${o.curSet.games[d]}</b>
      </div>
      <div class="h-pts">${P}</div>
    </div>`},c=[];if(o.matchWinner!==null)c.push('<span class="tag gold">FINALIZADO</span>');else{c.push(`<span class="tag">${o.isSuperTB?"SÚPER TIE-BREAK":o.isTB?"TIE-BREAK":`SET ${o.curSetIdx+1}`}</span>`),o.isStar?c.push('<span class="tag gold">★ STAR POINT (PUNTO DECISIVO)</span>'):o.isGP?c.push('<span class="tag gold">PUNTO DE ORO</span>'):s.rules.deuceRule==="star"&&!o.isTB&&o.p[0]>=3&&o.p[1]>=3&&(o.p[0]!==o.p[1]?c.push(`<span class="tag">${o.curAdvNumber}ª VENTAJA (DE 2)</span>`):o.curDeuceCount===2?c.push('<span class="tag">IGUALES (QUEDA 1 VENTAJA ANTES DEL ★ STAR POINT)</span>'):o.curDeuceCount===1&&c.push('<span class="tag">IGUALES (HASTA 2 VENTAJAS)</span>'));for(let d=0;d<2;d++)o.mp[d]?c.push(`<span class="tag hot" style="--c:${h(s.teams[d].color)};--f:${zt(s.teams[d].color)}">MATCH POINT · ${h(X(s,d))}</span>`):o.sp[d]&&c.push(`<span class="tag hot" style="--c:${h(s.teams[d].color)};--f:${zt(s.teams[d].color)}">SET POINT · ${h(X(s,d))}</span>`);if(o.isBP&&!o.isGP){const d=1-o.srvTeam;c.push(`<span class="tag warn">BOLA DE BREAK · ${h(X(s,d))}</span>`)}t.voiceListening&&c.push('<span class="tag mic">● MIC ACTIVO</span>'),c.length===1&&!e&&c.push('<span class="tag dim">Tocá el lado ganador del punto</span>')}return`
  <div class="board ${e?"display":""}">
    <header class="sb-top">
      ${r?`
        <button class="icon-btn" data-act="exit-live" title="Salir de la transmisión">${A.back}</button>
        <div class="sb-clock">
          <span id="sb-clock-val">${h(Ut(s.durationMs))}</span>
          <small><b class="red">● EN VIVO</b> · ${o.matchWinner!==null?"FINALIZADO":`SET ${o.curSetIdx+1} · SACA ${h(ae(s,o.srvTeam,o.srvPlayer))} (${o.srvSide==="D"?"DERECHA":"REVÉS"})`}</small>
        </div>
        <button class="icon-btn ${n.voice?"on":""}" data-act="toggle-voice-tts" title="Activar voz de árbitro en vivo">${n.voice?A.vol:A.mute}</button>
        <button class="icon-btn" data-open-stats="live" title="Estadísticas en tiempo real">${A.chart}</button>
        <button class="icon-btn" data-act="fullscreen" title="Pantalla completa">${A.full}</button>
      `:e?`
        <button class="icon-btn" data-nav="board" title="Salir de modo TV">${A.back}</button>
        <div class="sb-clock">
          <span id="sb-clock-val">${h(Ut(s.durationMs))}</span>
          <small><b class="red">● EN VIVO</b> · ${h(X(s,0))} vs ${h(X(s,1))}</small>
        </div>
        <button class="icon-btn" data-act="fullscreen" title="Pantalla completa">${A.full}</button>
      `:`
        <button class="icon-btn" data-nav="home" title="Inicio">${A.back}</button>
        <button class="icon-btn" data-act="share-live" title="Compartir partido en vivo por link">${A.live}</button>
        <div class="sb-clock" data-act="toggle-pause" style="cursor:pointer" title="Tocar para pausar/reanudar reloj">
          <span id="sb-clock-val">${h(Ut(s.durationMs))}</span>
          <small>${s.status==="paused"?'<b class="red">PAUSADO</b>':`SET ${o.curSetIdx+1} · SACA ${h(ae(s,o.srvTeam,o.srvPlayer))} (${o.srvSide==="D"?"DERECHA":"REVÉS"})`}</small>
        </div>
        <button class="icon-btn ${n.voice?"on":""}" data-act="toggle-voice-tts" title="Voz de árbitro">${n.voice?A.vol:A.mute}</button>
        <button class="icon-btn ${t.voiceListening?"on":""}" data-act="toggle-voice-rec" title="Control por voz manos libres">${A.mic}</button>
        <button class="icon-btn" data-act="open-menu" title="Opciones">${A.dots}</button>
      `}
    </header>

    <main class="court">
      ${l(i[0])}
      <div class="mid">${c.join("")}</div>
      ${l(i[1])}
    </main>

    ${e?"":`
    <footer class="sb-foot">
      <button data-act="undo" ${!s.events.length&&!s.pendingFault?"disabled":""} title="Deshacer (Z / Backspace)">${A.undo}<span class="lbl">Deshacer</span></button>
      <button data-act="redo" ${!s.redoStack||!s.redoStack.length?"disabled":""} title="Rehacer (Y)">${A.redo}<span class="lbl">Rehacer</span></button>
      <button class="fault-btn ${s.pendingFault?"on":""}" data-act="fault" ${o.matchWinner!==null?"disabled":""} title="Falta de saque / Doble falta (F)">
        ${s.pendingFault?"DOBLE FALTA":"FALTA SAQUE"}
      </button>
      <button data-act="flip" title="Cambiar lados de cancha (S)">${A.swap}<span class="lbl">Lados</span></button>
      <button data-open-stats="active" title="Ver estadísticas en vivo">${A.chart}<span class="lbl">Stats</span></button>
    </footer>`}

    ${e?r&&o.matchWinner!==null&&!t.matchEndDismissed?`
    <div class="overlay">
      <div class="big-ic">${A.trophy}</div>
      <p>¡PARTIDO FINALIZADO EN VIVO!</p>
      <h2>${h(X(s,o.matchWinner))}</h2>
      <div class="ov-score">
        ${[0,1].map(d=>`
          <div class="mrow">
            <span class="bar" style="--c:${h(s.teams[d].color)}"></span>
            <span class="nm">${h(X(s,d))}</span>
            ${o.sets.map(g=>`<span class="s ${g.winner===d?"w":""}">${g.games[d]}</span>`).join("")}
          </div>`).join("")}
      </div>
      <div class="btn-row">
        <button class="btn primary big" data-open-stats="live">${A.chart} Ver Estadísticas del Partido</button>
        <button class="btn big" data-act="save-live">Guardar en mi historial</button>
      </div>
    </div>`:"":Kl(s,o)}
  </div>`}function un(){const{ui:e,activeMatch:t,historyList:a}=$;if(e.statsId==="live"&&e.liveMatch)return e.liveMatch;if(e.statsId==="shared"&&e.sharedMatch)return e.sharedMatch;if(e.statsId==="active"&&t)return t;const n=a.find(r=>r.id===e.statsId);return n||(t&&t.id===e.statsId?t:e.liveMatch&&e.liveMatch.id===e.statsId?e.liveMatch:a[0]||t||e.liveMatch||null)}function me(e,t,a,n,r,s,o){const i=Number(n)||0,l=Number(r)||0,c=i+l,d=c>0?Math.round(i*100/c):i===l&&i>0?50:0,g=c>0?100-d:0;return`
  <div class="cmp">
    <div class="cmp-l">${h(e)}</div>
    <div class="cmp-r">
      <b>${h(t)}</b>
      <div class="cbar">
        ${c>0?`
          <i style="width:${d}%;background:${h(s)}"></i>
          <i style="width:${g}%;background:${h(o)}"></i>
        `:'<i style="width:100%;background:transparent"></i>'}
      </div>
      <b>${h(a)}</b>
    </div>
  </div>`}function Ql(e,t,a,n){if(!e||e.length<2)return'<div class="muted" style="padding:18px 0;text-align:center">Se mostrará el gráfico cuando haya puntos jugados.</div>';const r=e.length-1,s=720,o=180,i=12,l=18,c=s-i*2,d=o-l*2,g=Math.max(4,...e.map(T=>Math.abs(T))),b=l+d/2,y=T=>i+(r>0?T/r*c:0),k=T=>b-T/g*(d/2);let P="";e.forEach((T,I)=>{const B=y(I).toFixed(1),M=k(T).toFixed(1);P+=I===0?`M${B},${M}`:` L${B},${M}`});const x=`${P} L${y(r).toFixed(1)},${b.toFixed(1)} L${y(0).toFixed(1)},${b.toFixed(1)} Z`,S="mom_"+Math.random().toString(36).slice(2,7),m=t.map(T=>{const I=y(T).toFixed(1);return`<line x1="${I}" y1="${l}" x2="${I}" y2="${o-l}" stroke="currentColor" stroke-opacity=".22" stroke-dasharray="4 4"/>`}).join("");return`
  <svg class="mom" viewBox="0 0 ${s} ${o}" preserveAspectRatio="none">
    <defs>
      <clipPath id="${S}_top"><rect x="0" y="0" width="${s}" height="${b}"/></clipPath>
      <clipPath id="${S}_bot"><rect x="0" y="${b}" width="${s}" height="${o-b}"/></clipPath>
      <linearGradient id="${S}_g0" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="${h(a)}" stop-opacity=".55"/>
        <stop offset="100%" stop-color="${h(a)}" stop-opacity=".04"/>
      </linearGradient>
      <linearGradient id="${S}_g1" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="${h(n)}" stop-opacity=".04"/>
        <stop offset="100%" stop-color="${h(n)}" stop-opacity=".55"/>
      </linearGradient>
    </defs>
    <line x1="${i}" y1="${l}" x2="${s-i}" y2="${l}" stroke="currentColor" stroke-opacity=".08"/>
    <line x1="${i}" y1="${b}" x2="${s-i}" y2="${b}" stroke="currentColor" stroke-opacity=".35" stroke-dasharray="3 3"/>
    <line x1="${i}" y1="${o-l}" x2="${s-i}" y2="${o-l}" stroke="currentColor" stroke-opacity=".08"/>
    ${m}
    <path d="${x}" fill="url(#${S}_g0)" clip-path="url(#${S}_top)"/>
    <path d="${x}" fill="url(#${S}_g1)" clip-path="url(#${S}_bot)"/>
    <path d="${P}" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round"/>
  </svg>`}function Yl(){const{ui:e,activeMatch:t}=$,a=un();if(!a)return'<div class="page"><div class="empty">Partido no encontrado.<br><br><button class="btn" data-nav="home">Volver</button></div></div>';const n=e.statsSetFilter||"all",r=bs(a,n),s=r.st,o=r.T,i=a.teams[0].color,l=a.teams[1].color,c=e.statsId==="live"&&e.liveMatch,d=t&&t.id===a.id&&t.status==="playing"||c&&a.status==="playing",g=c?"live":t&&t.id===a.id&&t.status==="playing"?"board":"history",b=a.rules.deuceRule==="star",y=b?"Star Points ganados":"Puntos de oro ganados",k=b?"Star Points ganados al saque":"Puntos de oro ganados al saque",P=b?"Star Points ganados al resto":"Puntos de oro ganados al resto",x=qe(a),S=x?J(x):null,m=ft(S),T=S?`${S.kind==="league"?"Liga":"Torneo"}: ${S.name}`:"Partido del Día",I=a.isWalkover?null:wn(a);let B="";if(I&&(s.matchWinner!==null||s.isDraw)){const E=I.pair0,p=I.pair1,u=s.sets.reduce((H,ie)=>(ie.winner===0?H[0]++:ie.winner===1&&H[1]++,H),[0,0]),f=s.sets.reduce((H,ie)=>{var ee,Z;return[H[0]+(((ee=ie.games)==null?void 0:ee[0])||0),H[1]+(((Z=ie.games)==null?void 0:Z[1])||0)]},[0,0]),w=m.gameBonusPts||0,C=m.setBonusPts||0,R=s.isDraw?m.drawPts??2:s.matchWinner===0?m.winPts:m.lossPts,j=s.isDraw?m.drawPts??2:s.matchWinner===1?m.winPts:m.lossPts,q=R+u[0]*C+f[0]*w,V=j+u[1]*C+f[1]*w;B=`
    <div class="sec-t">Ranking · ${h(T)}</div>
    <div class="card elo-match-card">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;flex-wrap:wrap;gap:8px">
        <div style="display:flex;align-items:center;gap:8px">
          ${A.trophy}
          <h3 style="margin:0">${s.isDraw?`Empate (+${q} / +${V} pts) & ELO`:`Puntos (+${q} / +${V}) & ELO`} (${h(T)})</h3>
        </div>
        ${I.isBlowout?'<span class="tag-gold" style="font-size:11px;padding:3px 8px;border-radius:6px;background:rgba(212,175,55,0.15);color:var(--gold);border:1px solid rgba(212,175,55,0.35);font-weight:700">💥 Bonus x1.2 (+6 juegos de ventaja)</span>':""}
      </div>

      <div class="elo-teams-grid">
        <div class="elo-team-col ${s.matchWinner===0?"winner-col":""}">
          <div class="elo-team-hdr">
            <span class="bar" style="--c:${h(a.teams[0].color)}"></span>
            <b>${h(X(a,0))}</b>
            ${s.matchWinner===0?'<span class="tro">🏆</span>':""}
          </div>
          <div class="elo-team-meta">
            <span>Promedio previo: <b>${E.avgBefore} pts</b></span>
            <span>Probabilidad esperada: <b>${E.expPct}%</b></span>
          </div>
          <div class="elo-players-list">
            ${E.players.map(H=>{const ie=fa(H.eloAfter),ee=H.delta>=0?"+":"";return`
              <div class="elo-player-row">
                <span class="p-name">${h(H.name)}</span>
                <span class="p-delta ${H.delta>=0?"up":"down"}">${ee}${H.delta} pts</span>
                <span class="p-after"><b>${H.eloAfter} pts</b> (${ie.icon} ${ie.level})</span>
              </div>`}).join("")}
          </div>
        </div>

        <div class="elo-team-col ${s.matchWinner===1?"winner-col":""}">
          <div class="elo-team-hdr">
            <span class="bar" style="--c:${h(a.teams[1].color)}"></span>
            <b>${h(X(a,1))}</b>
            ${s.matchWinner===1?'<span class="tro">🏆</span>':""}
          </div>
          <div class="elo-team-meta">
            <span>Promedio previo: <b>${p.avgBefore} pts</b></span>
            <span>Probabilidad esperada: <b>${p.expPct}%</b></span>
          </div>
          <div class="elo-players-list">
            ${p.players.map(H=>{const ie=fa(H.eloAfter),ee=H.delta>=0?"+":"";return`
              <div class="elo-player-row">
                <span class="p-name">${h(H.name)}</span>
                <span class="p-delta ${H.delta>=0?"up":"down"}">${ee}${H.delta} pts</span>
                <span class="p-after"><b>${H.eloAfter} pts</b> (${ie.icon} ${ie.level})</span>
              </div>`}).join("")}
          </div>
        </div>
      </div>
    </div>`}const M=s.sets.filter((E,p)=>E.games[0]>0||E.games[1]>0||p===0),L=M.map((E,p)=>{const u=E.history.map(f=>{const w=a.teams[f.winner].color,C=zt(w),R=f.isTB?"gch tb":f.isBreak?"gch b":"gch",j=f.isTB?"TB":f.isBreak?"B":"";return`<span class="${R}" style="--c:${h(w)};--f:${C}" title="Set ${p+1} · ${f.gamesAfter[0]}-${f.gamesAfter[1]} (saca ${h(ae(a,f.srvTeam,f.srvPlayer))})">${j}</span>`}).join("");return`
      <div class="evo-row">
        <span class="lb">SET ${p+1} · ${E.games[0]}-${E.games[1]}</span>
        <div class="evo-chips">${u}</div>
      </div>`}).join(""),O=M.map((E,p)=>{if(n!=="all"&&Number(n)!==p)return"";const u=E.history.map(f=>{const w=f.points.map(C=>{const R=a.teams[C.w].color;return`<span class="${C.isGP?"gp":""}" style="--c:${h(R)}">${h(C.scoreBefore)}</span>`}).join("");return`
        <div class="pbp-game">
          <div class="pbp-h">
            <b>SET ${p+1} · ${f.gamesAfter[0]}-${f.gamesAfter[1]}</b>
            <small>saca ${h(ae(a,f.srvTeam,f.srvPlayer))}</small>
          </div>
          <div class="pseq">${w}</div>
          <div>${f.isBreak?'<span class="brk-badge">BREAK</span>':f.isTB?'<span class="brk-badge">TB</span>':""}</div>
        </div>`}).join("");return`
      <details class="pbp" open>
        <summary>SET ${p+1} (${E.games[0]}-${E.games[1]}) · ${E.history.length} juegos</summary>
        ${u||'<div class="muted" style="padding:8px 0">Sin juegos terminados en este set.</div>'}
      </details>`}).join(""),F={smash:"💥",volea:"🎾",bandeja:"🌀",bajada:"⚡",dejada:"🎯",passing:"🏹",globo:"🎈",otro:"✨"},G={smash:"Smash",volea:"Volea",bandeja:"Bandeja",bajada:"Bajada",dejada:"Dejada",passing:"Passing",globo:"Globo",otro:"Directo"};return`
  <div class="page stats">
    <div class="print-only print-title">DETALLES DEL PARTIDO · PÁDEL CONTROL SÉ · BY SAIRAF ENGEL</div>

    <div class="page-h no-print">
      <div class="page-h-top">
        <button class="icon-btn" data-nav="${g}" title="Volver">${A.back}</button>
        <h1>Detalles del Partido</h1>
      </div>
      <div class="page-h-acts">
        ${d?`<button class="btn primary sm" data-nav="${c?"live":"board"}">${A.play} Volver</button>`:""}
        ${S&&!c?`<button class="btn sm" data-open-comp="${h(S.id)}">${A.award} Ver ${S.kind==="league"?"Liga":"Torneo"}</button>`:""}
        ${!c&&d?`<button class="icon-btn" data-act="share-live" title="Compartir en vivo">${A.live}</button>`:""}
        <button class="icon-btn" data-act="print-pdf" title="Imprimir / Guardar PDF">${A.pdf}</button>
        <button class="icon-btn" data-act="export-png" title="Descargar imagen">${A.img}</button>
        <button class="icon-btn" data-act="share-link" title="Compartir enlace">${A.share}</button>
      </div>
    </div>

    <div class="card st-head">
      ${[0,1].map(E=>`
        <div class="tr ${s.matchWinner===E?"win":""}">
          <span class="bar" style="--c:${h(a.teams[E].color)}"></span>
          <span class="nm">${h(X(a,E))}</span>
          ${s.matchWinner===E?`<span class="tro">${A.trophy}</span>`:""}
          <div class="sboxes">
            ${M.map(p=>{const u=p.winner===E?"sbox w":p.winner===null&&d?"sbox cur":"sbox",f=p.tbScore?`<sup>${p.tbScore[E]}</sup>`:"";return`<span class="${u}">${p.games[E]}${f}</span>`}).join("")}
          </div>
        </div>`).join("")}
      <div class="meta">
        ${Ss(a)}
        ${s.isDraw?'<span class="badge">🤝 EMPATE</span>':""}
        <span>·</span>
        <span>${h(Wa(a.createdAt))}</span>
        <span>·</span>
        <span>Duración ${h(pn(a.durationMs))}</span>
        <span>·</span>
        <span>Regla 40-40: ${a.rules.deuceRule==="golden"?"Punto de Oro":a.rules.deuceRule==="star"?"★ Star Point (FIP)":"Ventaja clásica"}</span>
      </div>
    </div>

    ${M.length>1?`
    <div class="seg no-print">
      <button class="${n==="all"?"on":""}" data-st-filter="all">Partido completo</button>
      ${M.map((E,p)=>`<button class="${String(n)===String(p)?"on":""}" data-st-filter="${p}">Set ${p+1} (${E.games[0]}-${E.games[1]})</button>`).join("")}
    </div>`:""}

    ${B}

    <div class="sec-t">Resumen</div>
    <div class="card">
      <h3>Análisis del partido</h3>
      ${r.insights.length?`
        <ul class="analysis">
          ${r.insights.map(E=>`<li>${h(E)}</li>`).join("")}
        </ul>
      `:'<p class="muted">Anotá puntos en el partido para generar el análisis automático.</p>'}
    </div>

    <div class="grid2">
      <div class="card">
        <h3>Parejas <span class="tag-s">${r.totalPts} PUNTOS</span></h3>
        ${me("Puntos ganados",o[0].ptsWon,o[1].ptsWon,o[0].ptsWon,o[1].ptsWon,i,l)}
        ${me("Golpes ganadores",o[0].winners,o[1].winners,o[0].winners,o[1].winners,i,l)}
        ${me("Errores no forzados",o[0].ue,o[1].ue,o[0].ue,o[1].ue,i,l)}
        ${me("Puntos ganados al saque",de(o[0].srvPtsWon,o[0].srvPtsTotal)+"%",de(o[1].srvPtsWon,o[1].srvPtsTotal)+"%",de(o[0].srvPtsWon,o[0].srvPtsTotal),de(o[1].srvPtsWon,o[1].srvPtsTotal),i,l)}
      </div>

      <div class="card">
        <h3>Momentos</h3>
        ${me("Puntos de break ganados",`${o[0].bpWon}/${o[0].bpTotal}`,`${o[1].bpWon}/${o[1].bpTotal}`,o[0].bpWon,o[1].bpWon,i,l)}
        ${me(y,`${o[0].gpWon}/${o[0].gpTotal}`,`${o[1].gpWon}/${o[1].gpTotal}`,o[0].gpWon,o[1].gpWon,i,l)}
        ${me("Puntos seguidos (máximo)",o[0].maxPtStreak,o[1].maxPtStreak,o[0].maxPtStreak,o[1].maxPtStreak,i,l)}
        ${me("Juegos ganados",o[0].gamesWon,o[1].gamesWon,o[0].gamesWon,o[1].gamesWon,i,l)}
        ${me("Primeros saques dentro",de(o[0].firstServeIn,o[0].srvPtsTotal)+"%",de(o[1].firstServeIn,o[1].srvPtsTotal)+"%",de(o[0].firstServeIn,o[0].srvPtsTotal),de(o[1].firstServeIn,o[1].srvPtsTotal),i,l)}
        ${me("Dobles faltas",o[0].doubleFaults,o[1].doubleFaults,o[0].doubleFaults,o[1].doubleFaults,i,l)}
      </div>
    </div>

    <div class="grid2">
      <div class="card">
        <h3>Saque y resto</h3>
        ${me("Puntos ganados al resto",de(o[0].retPtsWon,o[0].retPtsTotal)+"%",de(o[1].retPtsWon,o[1].retPtsTotal)+"%",de(o[0].retPtsWon,o[0].retPtsTotal),de(o[1].retPtsWon,o[1].retPtsTotal),i,l)}
        ${me("Juegos de saque ganados",`${o[0].srvGamesWon}/${o[0].srvGamesTotal}`,`${o[1].srvGamesWon}/${o[1].srvGamesTotal}`,o[0].srvGamesWon,o[1].srvGamesWon,i,l)}
        ${me("Bolas de break salvadas",`${o[0].bpSaved}/${o[0].bpFaced}`,`${o[1].bpSaved}/${o[1].bpFaced}`,o[0].bpSaved,o[1].bpSaved,i,l)}
      </div>

      <div class="card">
        <h3>Bajo presión</h3>
        ${me("Puntos clave ganados",`${o[0].keyWon}/${o[0].keyTotal}`,`${o[1].keyWon}/${o[1].keyTotal}`,o[0].keyWon,o[1].keyWon,i,l)}
        ${me(k,`${o[0].gpSrvWon}/${o[0].gpSrvTotal}`,`${o[1].gpSrvWon}/${o[1].gpSrvTotal}`,o[0].gpSrvWon,o[1].gpSrvWon,i,l)}
        ${me(P,`${o[0].gpRetWon}/${o[0].gpRetTotal}`,`${o[1].gpRetWon}/${o[1].gpRetTotal}`,o[0].gpRetWon,o[1].gpRetWon,i,l)}
        ${me("Juegos seguidos (máximo)",o[0].maxGameStreak,o[1].maxGameStreak,o[0].maxGameStreak,o[1].maxGameStreak,i,l)}
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
            ${r.P.map(E=>`
              <tr>
                <td style="--c:${h(E.color)}">${h(E.name)}</td>
                <td>${E.winners}</td>
                <td>${E.ue}</td>
                <td>${E.fe}</td>
                <td>${de(E.firstServeIn,E.srvPtsTotal)}%</td>
                <td>${de(E.srvPtsWon,E.srvPtsTotal)}%</td>
                <td>${E.srvGamesWon}/${E.srvGamesTotal}</td>
                <td>${E.doubleFaults}</td>
              </tr>`).join("")}
          </tbody>
        </table>
      </div>
    </div>

    <div class="sec-t">Desglose de Golpes Ganadores (Winners)</div>
    <div class="card">
      <h3>Tipos de Golpe por Pareja</h3>
      ${me("💥 Smash / Remate",o[0].shots.smash,o[1].shots.smash,o[0].shots.smash,o[1].shots.smash,i,l)}
      ${me("🎾 Volea ganadora",o[0].shots.volea,o[1].shots.volea,o[0].shots.volea,o[1].shots.volea,i,l)}
      ${me("🌀 Bandeja / Víbora",o[0].shots.bandeja,o[1].shots.bandeja,o[0].shots.bandeja,o[1].shots.bandeja,i,l)}
      ${me("⚡ Bajada de pared",o[0].shots.bajada,o[1].shots.bajada,o[0].shots.bajada,o[1].shots.bajada,i,l)}
      ${me("🎯 Dejada / Chiquita",o[0].shots.dejada,o[1].shots.dejada,o[0].shots.dejada,o[1].shots.dejada,i,l)}
      ${me("🏹 Passing shot",o[0].shots.passing,o[1].shots.passing,o[0].shots.passing,o[1].shots.passing,i,l)}
      ${o[0].shots.globo>0||o[1].shots.globo>0?me("🎈 Globo ganador",o[0].shots.globo,o[1].shots.globo,o[0].shots.globo,o[1].shots.globo,i,l):""}
      ${o[0].shots.otro>0||o[1].shots.otro>0?me("Otros winners directos",o[0].shots.otro,o[1].shots.otro,o[0].shots.otro,o[1].shots.otro,i,l):""}

      <div style="margin-top:14px;border-top:1px solid var(--line);padding-top:12px">
        <div style="font-size:12px;font-weight:800;letter-spacing:1px;text-transform:uppercase;color:var(--tx2);margin-bottom:8px">Winners registrados por Jugador</div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:8px">
          ${r.P.map(E=>{const p=Object.entries(E.shots||{}).filter(([,u])=>u>0).map(([u,f])=>{const w=F[u]||"",C=G[u]||u;return`<span class="tag-s" style="margin:2px;display:inline-flex;align-items:center;gap:3px;font-size:11px">${w} ${f} ${C}</span>`});return`
              <div style="background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.06);border-left:3px solid ${h(E.color)};border-radius:8px;padding:8px 10px">
                <div style="font-weight:700;font-size:13px;color:var(--text);margin-bottom:4px">${h(E.name)} <span style="font-weight:400;color:var(--muted);font-size:12px">(${E.winners} winners)</span></div>
                <div style="display:flex;flex-wrap:wrap">${p.length?p.join(""):'<span class="muted" style="font-size:11px">Sin detalle de golpe</span>'}</div>
              </div>`}).join("")}
        </div>
      </div>
    </div>

    <div class="sec-t">Evolución</div>
    <div class="card">
      ${L}
      <div class="mom-leg" style="margin-top:14px">
        <span style="color:${h(i)}"><i style="--c:${h(i)}"></i>${h(X(a,0))}</span>
        <span style="color:${h(l)}"><i style="--c:${h(l)}"></i>${h(X(a,1))}</span>
      </div>
      ${Ql(r.momentum,r.setBoundaries,i,l)}
      <p class="note">La línea sube cuando ${h(X(a,0))} ganan un punto y baja cuando lo ganan ${h(X(a,1))}. B = break.</p>
    </div>

    <div class="sec-t">Punto a Punto</div>
    <div class="card">
      ${O}
    </div>

    <div class="btn-row no-print" style="margin-top:18px">
      <button class="btn primary" data-act="print-pdf">${A.pdf} Exportar PDF / Imprimir</button>
      <button class="btn" data-act="export-png">${A.img} Descargar Imagen</button>
      <button class="btn" data-act="share-link">${A.share} Compartir Enlace</button>
      ${e.statsId==="shared"?'<button class="btn primary" data-act="save-shared">Guardar en mi historial</button>':""}
      ${c?'<button class="btn primary" data-act="save-live">Guardar en mi historial</button>':""}
      ${!d&&e.statsId!=="shared"&&!c?`<button class="btn danger" data-del-match="${h(a.id)}">${A.trash} Eliminar partido</button>`:""}
    </div>
    ${Ct()}
  </div>
  ${mt("history")}`}function Ae(e){return e?Tt(e)?(D("El torneo está finalizado. Reabrilo para hacer cambios."),!1):!0:!1}function Wr(e){var s,o,i,l,c,d;if(!Ae(e))return;const t=((s=document.getElementById("part-color"))==null?void 0:s.value)||"#d4af37",a=((o=document.getElementById("part-group"))==null?void 0:o.value)||null;let n=null,r="part-p0";if(e.rankingMode==="individual"){r="part-ind-name";const g=(i=document.getElementById("part-ind-name"))==null?void 0:i.value.trim();if(!g){D("Ingresá el nombre del jugador");return}if(e.participants=e.participants||[],e.participants.some(b=>b.type==="player"&&(b.name||"").trim().toUpperCase()===g.toUpperCase())){D("Ese jugador ya está inscripto");return}n={id:ot("pt"),type:"player",name:g,color:t,group:a,...a?{groupManual:!0}:{}},e.participants.push(n)}else{const g=(l=document.getElementById("part-p0"))==null?void 0:l.value.trim(),b=(c=document.getElementById("part-p1"))==null?void 0:c.value.trim();if(!g&&!b){D("Ingresá al menos un jugador de la pareja");return}e.participants=e.participants||[],n={id:ot("pt"),type:"pair",players:[g||"DRIVE",b||"REVÉS"],color:t,group:a,...a?{groupManual:!0}:{}},e.participants.push(n)}ne(),e.syncCode&&n&&bl(e,n),N(),D("Inscripto agregado"),(d=document.getElementById(r))==null||d.focus()}function Xl(e){var s;if(!Ae(e))return;const a=(((s=document.getElementById("part-batch-names"))==null?void 0:s.value)||"").split(/[\r\n,;]+/).map(o=>o.trim()).filter(Boolean);if(!a.length){D("Pegá o escribí al menos un nombre");return}e.participants=e.participants||[];const n=new Set(e.participants.filter(o=>o.type==="player").map(o=>(o.name||"").trim().toUpperCase()).filter(Boolean));let r=0;if(a.forEach(o=>{var c;const i=o.toUpperCase();if(n.has(i))return;n.add(i);const l=((c=Rt[(e.participants.length+r)%Rt.length])==null?void 0:c.c)||"#d4af37";e.participants.push({id:ot("pt"),type:"player",name:o,color:l,group:null}),r++}),!r){D("Todos esos jugadores ya estaban inscriptos");return}ne(),e.syncCode&&Fe(e,!0),N(),D(`${r} ${r===1?"jugador agregado":"jugadores agregados"}`)}function Ya(){const e=$.ui.compFormState;if(!e)return;const t=document.getElementById("cf-name");t&&(e.name=t.value);const a=document.getElementById("cf-wpts");a&&(e.winPts=Math.max(0,Number(a.value)||0));const n=document.getElementById("cf-dpts");n&&(e.drawPts=Math.max(0,Number(n.value)||0));const r=document.getElementById("cf-lpts");r&&(e.lossPts=Math.max(0,Number(r.value)||0));const s=document.getElementById("cf-spts");s&&(e.setBonusPts=Math.max(0,Number(s.value)||0));const o=document.getElementById("cf-gpts");o&&(e.gameBonusPts=Math.max(0,Number(o.value)||0));const i=document.getElementById("cf-ngroups");i&&(e.numGroups=Math.max(2,Math.min(4,Number(i.value)||2)));const l=document.getElementById("cf-adv");l&&(e.advancePerGroup=Math.max(1,Math.min(4,Number(l.value)||2)));const c=document.getElementById("cf-courts");c&&(e.courtsCount=ze(c.value,4));const d=document.getElementById("cf-sets"),g=document.getElementById("cf-deuce");(d||g)&&(e.defaultRules=e.defaultRules||{},d&&(e.defaultRules.totalSets=Number(d.value)||3),g&&(e.defaultRules.deuceRule=g.value||"golden"))}function Go(e,t){const{ui:a,preset:n}=$;if(e==="edit"&&t&&typeof t=="object"){const s=t,o=ft(s);a.compFormState={id:s.id,kind:s.kind||"league",name:s.name||"",format:s.format||(s.kind==="tournament"?"knockout":"league_rr"),rankingMode:s.rankingMode||"pairs",winPts:o.winPts,drawPts:o.drawPts,lossPts:o.lossPts,setBonusPts:o.setBonusPts,gameBonusPts:o.gameBonusPts,numGroups:Number(s.numGroups)||2,advancePerGroup:Number(s.advancePerGroup)||2,courtsCount:Ge(s,4),defaultRules:Me(s.defaultRules||{totalSets:3,gamesPerSet:6,deuceRule:"golden",tiebreakAt:6,tiebreakPoints:7,finalSet:"normal",changeoverRule:"odd"})},a.compModal="edit";return}const r=t==="tournament"?"tournament":"league";a.compFormState={id:null,kind:r,name:"",format:r==="tournament"?"knockout":"league_rr",rankingMode:"pairs",winPts:3,drawPts:2,lossPts:1,setBonusPts:0,gameBonusPts:0,numGroups:2,advancePerGroup:2,courtsCount:4,defaultRules:{totalSets:n.totalSets||3,gamesPerSet:n.gamesPerSet||6,deuceRule:n.deuceRule||"golden",tiebreakAt:n.tiebreakAt??6,tiebreakPoints:n.tiebreakPoints||7,finalSet:n.finalSet||"normal",changeoverRule:n.changeoverRule||"odd"}},a.compModal="create"}function qo(e){if(!e)return $s();const{ui:t,prefs:a}=$,n=ft(e),r=we(e),s=e.rankingMode==="both"?t.playerEntityMode||"pairs":e.rankingMode||"pairs",o=ps(e,e.id),i={tiebreakMode:r?"games":"sets"},l=Xt(nt(e,!1),{...n,entityMode:s,seedParticipants:e.participants||[]}),c=ua(Ht(l,o,i),o,i);return{scope:e.kind,id:`${a.rankingId||"RK"}-${e.id.slice(-4).toUpperCase()}`,title:e.name,subtitle:bn(e,s,n),entityMode:s,primaryMetric:r?"elo":"pts",comp:e,scoring:n,sortKey:o,players:c}}function N(){const{ui:e}=$;xi();const t=document.getElementById("app");if(!t)return;e.route==="obs"?(document.documentElement.classList.add("obs-mode"),document.body.classList.add("obs-mode")):(document.documentElement.classList.remove("obs-mode"),document.body.classList.remove("obs-mode"));let a="";switch(e.route){case"new":a=Vl();break;case"board":a=zs(!1);break;case"display":a=zs(!0);break;case"obs":a=_r();break;case"live":a=zs(!0);break;case"stats":a=Yl();break;case"history":a=Nl();break;case"players":a=Ol();break;case"competitions":a=Al();break;case"comp-detail":a=Dl();break;case"player-card":a=Qi();break;case"settings":a=_l();break;default:a=zl();break}e.qrModalOpen&&(a+=ql()),e.obsModalOpen&&(a+=Jl()),e.compModal&&(a+=jl()),t.innerHTML=a,Or(),On()}U.render=N;U.navigate=Le;U.updateWakeLock=qa;U.publishLiveMatchState=$a;U.syncCompetitionForMatch=cl;U.publishCompMatch=Nn;U.renderHomeSystemBanners=kl;U.afterRenderQR=Or;U.ensureCompLiveWatcherForCurrentView=On;U.refreshPlayerCardPreview=Ne;U.openPlayerCardFor=pr;U.loadPlayerCardLogosAndCards=()=>({logos:jt(),cards:ha(),setLogos:async e=>{const t=jt();Object.assign(t,e),await va()},saveCard:Rn});U.pollLiveChannelOnce=ba;U.pollCompChannelOnce=ya;U.resolveCompetitionFixtures=At;document.addEventListener("click",e=>{var ka,aa,_n,Wn,Fn,Gn,qn,zn,Vn,Un,Hn,Jn,Kn,Qn,Yn,Xn,Zn,eo,to,ao,so,no,oo,ro,io,lo,co,uo,po,fo,mo,go,bo,ho,vo,yo,$o,So;const t=e.target;if(!t)return;const{ui:a,preset:n,prefs:r}=$,s=t.closest("[data-nav]");if(s){e.preventDefault(),Le(s.getAttribute("data-nav")||"home");return}const o=t.closest("[data-open-stats]");if(o){e.preventDefault(),a.statsId=o.getAttribute("data-open-stats"),a.statsSetFilter="all",a.matchEndDismissed=!0,Le("stats");return}const i=t.closest("[data-open-player-card]");if(i){e.preventDefault();const _=i.getAttribute("data-open-player-card")||"",v=i.getAttribute("data-pc-default-pos")||void 0;pr(_,{position:v});return}const l=t.closest("[data-pc-bgmode]");if(l){const _=l.getAttribute("data-pc-bgmode")||"ai",v=pe();v.bgMode=_,a.playerCardDraftDirty=!0,ge(),_==="ai"&&v.origPhoto&&!v.cutoutPhoto&&!v.origHasAlpha?(N(),gr(v)):(a.playerCardAiStatus=v.origPhoto?"ok":"",a.playerCardAiText=v.origPhoto?_==="ai"?"✓ Fondo recortado automáticamente":"⚡ Modo instantáneo activo":"",N());return}const c=t.closest("[data-pc-cat]");if(c){pe().category=c.getAttribute("data-pc-cat")||"",a.playerCardDraftDirty=!0,ge(),N();return}const d=t.closest("[data-pc-pos]");if(d){pe().position=d.getAttribute("data-pc-pos")||"Drive",a.playerCardDraftDirty=!0,ge(),N();return}const g=t.closest("[data-pc-hand]");if(g){pe().hand=g.getAttribute("data-pc-hand")||"Diestro",a.playerCardDraftDirty=!0,ge(),N();return}const b=t.closest("[data-pc-shot]");if(b){pe().bestShot=b.getAttribute("data-pc-shot")||"",a.playerCardDraftDirty=!0,ge(),N();return}const y=t.closest("[data-pc-theme]");if(y){const _=pe(),v=y.getAttribute("data-pc-theme")||"diamond";if(_.theme=v,!_.metalCustom){const W={gold:"gold"};_.metalFinish=W[v]||"chrome"}a.playerCardDraftDirty=!0,ge(),N();return}const k=t.closest("[data-pc-metal]");if(k){const _=pe();_.metalFinish=k.getAttribute("data-pc-metal")||"chrome",_.metalCustom=!0,a.playerCardDraftDirty=!0,ge(),N();return}const P=t.closest("[data-pc-del-logo]");if(P){const _=P.getAttribute("data-pc-del-logo"),v=jt();_==="1"?v.logo1=null:(v.logo2=null,v.logo2Disabled=!0),va(),N(),D(`Logo ${_} quitado`);return}const x=t.closest("[data-pc-load]");if(x){const _=x.getAttribute("data-pc-load"),v=ha().find(W=>W.id===_);v&&(a.playerCardDraft={...Me(v)},a.playerCardDraftDirty=!0,a.playerCardTouchDrag=!1,a.playerCardAiStatus=v.cutoutPhoto?"ok":"",a.playerCardAiText=v.cutoutPhoto?"✓ Tarjeta cargada":"",ge(!0),N(),window.scrollTo({top:0,behavior:"smooth"}));return}const S=t.closest("[data-pc-del]");if(S){const _=S.getAttribute("data-pc-del")||"",v=ha().find(W=>W.id===_);v&&confirm(`¿Eliminar la tarjeta guardada de "${v.name||"Jugador"}"?`)&&Ei(_).then(()=>{N(),D("Tarjeta eliminada")});return}const m=t.closest("[data-open-comp]");if(m){e.preventDefault();const _=m.getAttribute("data-open-comp");J(_)&&(a.compId=_,a.compTab="standings",a.matchEndDismissed=!0,Le("comp-detail"));return}const T=t.closest("[data-open-comp-rank]");if(T){e.preventDefault();const _=T.getAttribute("data-open-comp-rank"),v=J(_);v&&(a.playerScope=v.kind,a.playerRankingView="local",v.kind==="league"?a.selectedLeagueId=v.id:a.selectedTournId=v.id,a.selectedGroupFilter="all",Le("players"));return}const I=t.closest("[data-play-in-comp]");if(I){e.preventDefault();const _=J(I.getAttribute("data-play-in-comp"));if(_){if(!Ae(_))return;ca(_,null),K(ve,n),Le("new")}return}const B=t.closest("[data-edit-comp]");if(B){e.preventDefault();const _=J(B.getAttribute("data-edit-comp"));_&&(Go("edit",_),N());return}const M=t.closest("[data-del-comp]");if(M){const _=M.getAttribute("data-del-comp"),v=J(_);v&&confirm(`¿Eliminar "${v.name}" y sus cruces? (Los partidos jugados quedarán en el historial)`)&&($.competitionsList=$.competitionsList.filter(W=>W.id!==_),ne(),n.compId===_&&(n.compId="",n.fixtureId="",K(ve,n)),a.compId=((ka=$.competitionsList[0])==null?void 0:ka.id)||null,Le("competitions"),D("Competencia eliminada"));return}const L=t.closest("[data-match-ctx]");if(L){const _=L.getAttribute("data-match-ctx")||"daily";if(n.matchContext=_,n.fixtureId="",_==="league"||_==="tournament"){const v=$.competitionsList.find(W=>W.kind===_);v?ca(v,null):n.compId=""}else n.compId="",n.stageLabel="";K(ve,n),N();return}const O=t.closest("[data-pick-fixture]");if(O){const[_,v]=(O.getAttribute("data-pick-fixture")||"").split(":"),W=J(_),z=((W==null?void 0:W.fixtures)||[]).find(Y=>Y.id===v);W&&z&&(ca(W,z),K(ve,n),N(),D(`Cruce cargado: ${z.roundLabel}`));return}const F=t.closest("[data-play-fixture]");if(F){const[_,v]=(F.getAttribute("data-play-fixture")||"").split(":");dl(_,v);return}const G=t.closest("[data-quick-score]");if(G){Gs({mode:"fixture",fixtureKey:G.getAttribute("data-quick-score")||void 0});return}const E=t.closest("[data-qs-slot]");if(E&&a.quickScoreState){const _=Number(E.getAttribute("data-qs-slot"))||0;a.quickScoreState.activeSlot=_,document.querySelectorAll(".qs-slot-inp").forEach(v=>{v.classList.toggle("active-slot",Number(v.getAttribute("data-qs-slot"))===_)})}const p=t.closest("[data-qs-pick-player]");if(p&&a.quickScoreState){ra();const _=a.quickScoreState,v=p.getAttribute("data-qs-pick-player")||"",W=Math.max(0,Math.min(3,Number(_.activeSlot)||0));_.teams[Math.floor(W/2)].players[W%2]=v;const z=[_.teams[0].players[0],_.teams[0].players[1],_.teams[1].players[0],_.teams[1].players[1]];let Y=(W+1)%4;for(let oe=1;oe<=4;oe++){const ke=(W+oe)%4;if(!String(z[ke]||"").trim()){Y=ke;break}}_.activeSlot=Y,N();return}const u=t.closest("[data-qs-pick]");if(u){const[_,v,W]=(u.getAttribute("data-qs-pick")||"").split(":"),z=Number(_),Y=Number(v),oe=Number(W),ke=document.getElementById(`qs-s${z+1}-${Y}`);ke&&(ke.value=String(oe)),(_n=(aa=a.quickScoreState)==null?void 0:aa.sets)!=null&&_n[z]&&(a.quickScoreState.sets[z][Y]=oe);const _e=u.closest(".qs-pills");_e&&_e.querySelectorAll&&_e.querySelectorAll(".qs-g-pill").forEach(Re=>{Re.classList.toggle("on",Re===u)}),ms();return}const f=t.closest("[data-qs-clear-set]");if(f){const _=Number(f.getAttribute("data-qs-clear-set")),v=document.getElementById(`qs-s${_+1}-0`),W=document.getElementById(`qs-s${_+1}-1`);v&&(v.value=""),W&&(W.value=""),(Fn=(Wn=a.quickScoreState)==null?void 0:Wn.sets)!=null&&Fn[_]&&(a.quickScoreState.sets[_]=[null,null]);const z=f.closest(".qs-set-card");z&&z.querySelectorAll&&z.querySelectorAll(".qs-g-pill.on").forEach(Y=>Y.classList.remove("on")),ms();return}const w=t.closest("[data-open-comp-sync]");if(w){e.preventDefault();const _=w.getAttribute("data-open-comp-sync"),v=J(_);v&&(Ua(v),a.compId=v.id,a.compModal="sync-qr",rn(v),N());return}const C=t.closest("[data-sync-comp]");if(C){e.preventDefault();const _=C.getAttribute("data-sync-comp")||"";ya(_,"24h",!0);return}const R=t.closest("[data-del-fixture]");if(R){const[_,v]=(R.getAttribute("data-del-fixture")||"").split(":"),W=J(_);Ae(W)&&(W.fixtures=(W.fixtures||[]).filter(z=>z.id!==v),ne(),W.syncCode&&Fe(W,!0),N(),D("Cruce eliminado"));return}const j=t.closest("[data-del-part]");if(j){const[_,v]=(j.getAttribute("data-del-part")||"").split(":"),W=J(_);Ae(W)&&(W.participants=(W.participants||[]).filter(z=>z.id!==v),ne(),W.syncCode&&on(W,"del",v),N(),D("Inscripto eliminado"));return}const q=t.closest("[data-toggle-part-pause]");if(q){const[_,v]=(q.getAttribute("data-toggle-part-pause")||"").split(":"),W=J(_),z=((W==null?void 0:W.participants)||[]).find(Y=>Y.id===v);Ae(W)&&z&&(z.paused=!z.paused,ne(),W.syncCode&&on(W,"pause",v,z.paused?"1":"0"),N(),D(z.paused?`${z.name||"Jugador"} en pausa`:`${z.name||"Jugador"} activado`));return}const V=t.closest("[data-close-comp-modal]");if(V&&(V.tagName==="BUTTON"||!t.closest(".sheet"))){a.compModal=null,a.quickScoreState=null,a.quickScoreFixtureId=null,N();return}const H=t.closest("[data-cf-kind]");if(H&&a.compFormState){Ya();const _=H.getAttribute("data-cf-kind")||"league";a.compFormState.kind=_,a.compFormState.format=_==="tournament"?"knockout":"league_rr",N();return}const ie=t.closest("[data-cf-fmt]");if(ie&&a.compFormState){Ya();const _=ie.getAttribute("data-cf-fmt")||"league_rr";a.compFormState.format=_,_==="proyecto_padel"&&(a.compFormState.kind="tournament",a.compFormState.rankingMode="individual",a.compFormState.winPts=3,a.compFormState.drawPts=2,a.compFormState.lossPts=1,a.compFormState.setBonusPts=0,a.compFormState.gameBonusPts=1,a.compFormState.defaultRules={...a.compFormState.defaultRules||{},totalSets:1,deuceRule:"golden"}),N();return}const ee=t.closest("[data-cf-rmode]");if(ee&&a.compFormState){Ya(),a.compFormState.rankingMode=ee.getAttribute("data-cf-rmode")||"pairs",N();return}const Z=t.closest("[data-set-cfilter]");if(Z){a.compFilter=Z.getAttribute("data-set-cfilter")||"all",N();return}const xe=t.closest("[data-set-ctab]");if(xe){a.compTab=xe.getAttribute("data-set-ctab")||"standings",N();return}const be=t.closest("[data-set-hfilter]");if(be){a.histFilter=be.getAttribute("data-set-hfilter")||"all",N();return}const ht=t.closest("[data-set-pscope]");if(ht){a.playerScope=ht.getAttribute("data-set-pscope")||"daily",a.playerRankingView=a.playerScope==="shared"?"shared":"local",a.selectedGroupFilter="all",N();return}const ea=t.closest("[data-set-daily-time]");if(ea){a.dailyTimeFilter=ea.getAttribute("data-set-daily-time")||"all",N();return}const it=t.closest("[data-set-pentity]");if(it){a.playerEntityMode=it.getAttribute("data-set-pentity")||"individual",N();return}const tt=t.closest("[data-set-gfilter]");if(tt){a.selectedGroupFilter=tt.getAttribute("data-set-gfilter")||"all",N();return}const Ke=t.closest("[data-st-filter]");if(Ke){a.statsSetFilter=Ke.getAttribute("data-st-filter")||"all",N();return}const vt=t.closest("[data-set-psort]");if(vt){a.playerSort=vt.getAttribute("data-set-psort")||"pts",a.route==="comp-detail"?a.playerSortScope=a.compId||"comp":a.playerScope==="league"?a.playerSortScope=a.selectedLeagueId||"league":a.playerScope==="tournament"?a.playerSortScope=a.selectedTournId||"tournament":a.playerSortScope=a.playerScope||"daily",N();return}const Pe=t.closest("[data-set-prview]");if(Pe){a.playerRankingView=Pe.getAttribute("data-set-prview")||"local",a.playerScope=a.playerRankingView==="shared"?"shared":"daily",N();return}const lt=t.closest("[data-select-ranking]");if(lt){const _=lt.getAttribute("data-select-ranking")||"",v=rt("padel_ranking_vault",{});v[_]&&(a.sharedRanking=v[_],K("padel_shared_ranking",v[_]),a.playerRankingView="shared",a.playerScope="shared",N());return}const ta=t.closest("[data-step]");if(ta){const[_,v]=(ta.getAttribute("data-step")||"").split(":"),W=Number(v)||0;if(_==="totalSets"){const z=Math.max(1,Number(n.totalSets)||(n.setsToWin?n.setsToWin*2-1:3)),Y=Math.max(1,Math.min(15,z+W));n.totalSets=Y,n.setsToWin=Math.floor(Y/2)+1}else if(_==="gamesPerSet"){const z=Math.max(1,Number(n.gamesPerSet)||6),Y=Math.max(1,Math.min(21,z+W));n.gamesPerSet=Y,n.tiebreakAt>0&&(n.tiebreakAt=Y)}else if(_==="tiebreakPoints"){const z=Math.max(1,Number(n.tiebreakPoints)||7),Y=Math.max(1,Math.min(30,z+W));n.tiebreakPoints=Y,n.tiebreakAt===0&&(n.tiebreakAt=n.gamesPerSet||6)}K(ve,n),N();return}const ct=t.closest("[data-preset]");if(ct){const[_,v]=(ct.getAttribute("data-preset")||"").split(":");if(_==="setsToWin")n.setsToWin=Number(v),n.totalSets=n.setsToWin*2-1;else if(_==="gamesPerSet")n.gamesPerSet=Number(v),n.tiebreakAt>0&&(n.tiebreakAt=Number(v));else if(_==="deuceRule")n.deuceRule=v;else if(_==="tb"){const W=Number(v);W===0?n.tiebreakAt=0:(n.tiebreakAt=n.gamesPerSet||6,n.tiebreakPoints=W)}else _==="finalSet"?n.finalSet=v:_==="changeoverRule"&&(n.changeoverRule=v);K(ve,n),N();return}const Ce=t.closest("[data-tcolor]");if(Ce){const[_,v]=(Ce.getAttribute("data-tcolor")||"").split(",");n.teams[Number(_)].color=v,K(ve,n),N();return}const Q=t.closest("[data-set-srv]");if(Q){const[_,v]=(Q.getAttribute("data-set-srv")||"").split(",").map(Number);n.firstServer=[_,v],K(ve,n),N();return}const te=t.closest(".half[data-team]");if(te&&!te.hasAttribute("data-ro")){const _=Number(te.getAttribute("data-team"));Qs(_);return}const se=t.closest("[data-shot]");if(se&&a.shotSheet){const[_,v,W,z]=(se.getAttribute("data-shot")||"").split(","),Y=a.shotSheet.team,oe=Number(W)>=0?[Number(v),Number(W)]:null;he(Y,_,oe,z||null);return}const ye=t.closest("[data-pick-2ndsrv]");if(ye&&$.activeMatch){$.activeMatch.secondServerIdx=Number(ye.getAttribute("data-pick-2ndsrv")),a.secondSrvPrompt=!1,Te(),N();return}const le=t.closest("[data-edit-tcolor]");if(le&&$.activeMatch){const[_,v]=(le.getAttribute("data-edit-tcolor")||"").split(",");for(let W=0;W<2;W++){const z=(Gn=document.getElementById(`ed-p-${W}-0`))==null?void 0:Gn.value.trim(),Y=(qn=document.getElementById(`ed-p-${W}-1`))==null?void 0:qn.value.trim();z&&($.activeMatch.teams[W].players[0]=z),Y&&($.activeMatch.teams[W].players[1]=Y)}$.activeMatch.teams[Number(_)].color=v,Te(),N();return}const re=t.closest("[data-close-obs-modal]");if(re&&(re.tagName==="BUTTON"||!t.closest(".sheet"))){a.obsModalOpen=!1,N();return}const Qe=t.closest("[data-set-obs-pos]");if(Qe){a.obsSelectedPos=Qe.getAttribute("data-set-obs-pos")||"tl",N();return}const Ye=t.closest("[data-copy-input]");if(Ye){const _=Ye.getAttribute("data-copy-input")||"",v=document.getElementById(_);if(v){(zn=v.select)==null||zn.call(v);const W=v.value;if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(W).then(()=>{D("Enlace copiado al portapapeles")}).catch(()=>{try{document.execCommand("copy"),D("Enlace copiado")}catch{}});else try{document.execCommand("copy"),D("Enlace copiado")}catch{}}return}const Nt=t.closest("[data-close-qr]");if(Nt&&(Nt.tagName==="BUTTON"||!t.closest(".sheet"))){a.qrModalOpen=!1,N();return}const yt=t.closest("[data-close-sheet]");if(yt&&(yt.tagName==="BUTTON"||!t.closest(".sheet"))){a.shotSheet=null,N();return}const Ha=t.closest("[data-close-menu]");if(Ha&&(Ha.tagName==="BUTTON"||!t.closest(".sheet"))){a.menuOpen=!1,N();return}const Ot=t.closest("[data-close-edit]");if(Ot&&(Ot.tagName==="BUTTON"||!t.closest(".sheet"))){a.editNamesOpen=!1,N();return}const Xe=t.closest("[data-pref]");if(Xe){const[_,v]=(Xe.getAttribute("data-pref")||"").split(":");r[_]=v,K(Se,r),N();return}const Oe=t.closest("[data-del-match]");if(Oe){const _=Oe.getAttribute("data-del-match")||"";if(confirm("¿Eliminar este partido del historial?")){const v=$.historyList.find(z=>z.id===_);$.historyList=$.historyList.filter(z=>z.id!==_),K(Bt,$.historyList);let W=!1;$.competitionsList.forEach(z=>{const Y=(z.fixtures||[]).some(oe=>oe.matchId===_);Y&&(At(z),W=!0),z.syncCode&&(Y||v&&qe(v)===z.id)&&vl(z,_)}),W&&ne(),Le("history"),D("Partido eliminado")}return}const ce=t.closest("[data-act]");if(ce)switch(ce.getAttribute("data-act")){case"start-match":or();break;case"resume-match":Le("board");break;case"swap-preset-teams":n.teams.reverse(),n.firstServer[0]=1-n.firstServer[0],K(ve,n),N();break;case"undo":cs();break;case"undo-from-end":a.matchEndDismissed=!1,cs();break;case"redo":xn();break;case"fault":kn();break;case"flip":Pn();break;case"toggle-shot-prompt":$.activeMatch&&($.activeMatch.shotPrompt=!$.activeMatch.shotPrompt,Te(),D($.activeMatch.shotPrompt?"Detalle de golpe activado":"Anotación rápida activada"),N());break;case"toggle-pause":$.activeMatch&&($.activeMatch.status=$.activeMatch.status==="paused"?"playing":"paused",Te(),N());break;case"toggle-voice-tts":r.voice=!r.voice,K(Se,r),D(r.voice?"Voz de árbitro activada":"Voz de árbitro silenciada"),N();break;case"toggle-voice-rec":fi();break;case"open-menu":a.menuOpen=!0,N();break;case"dismiss-co":a.changeoverOverlay=null,N();break;case"open-qr-modal":a.menuOpen=!1,a.qrModalOpen=!0,N();break;case"close-qr-modal":a.qrModalOpen=!1,N();break;case"share-app-wa":Fl();break;case"copy-app-link":Wl();break;case"dl-app-qr":Gl();break;case"share-live":$.activeMatch&&hi($.activeMatch);break;case"open-obs-modal":a.menuOpen=!1,a.obsModalOpen=!0,N();break;case"open-tv":a.menuOpen=!1,Le("display");break;case"fullscreen":document.fullscreenElement?(Hn=document.exitFullscreen)==null||Hn.call(document).catch(()=>{}):(Un=(Vn=document.documentElement).requestFullscreen)==null||Un.call(Vn).catch(()=>{});break;case"share-link":{const v=un();v&&yi(v);break}case"share-img-active":$.activeMatch&&Eo($.activeMatch);break;case"exit-live":lr(),Le("home");break;case"save-live":a.liveMatch&&(Pt(a.liveMatch),D("Partido guardado en tu historial"));break;case"rotate-server":if($.activeMatch){const v=[[0,0],[1,0],[0,1],[1,1]],W=v.findIndex(oe=>oe[0]===$.activeMatch.firstServer[0]&&oe[1]===$.activeMatch.firstServer[1]),z=v[(W+1)%4];$.activeMatch.firstServer=[z[0],z[1]],$.activeMatch.secondServerIdx!==null&&($.activeMatch.secondServerIdx=1-$.activeMatch.secondServerIdx),Te(),a.menuOpen=!1;const Y=Ie($.activeMatch);D(`Saca ahora: ${ae($.activeMatch,Y.srvTeam,Y.srvPlayer)}`),N()}break;case"open-edit-names":a.menuOpen=!1,a.editNamesOpen=!0,N();break;case"save-edit-names":if($.activeMatch){for(let v=0;v<2;v++){const W=(Jn=document.getElementById(`ed-p-${v}-0`))==null?void 0:Jn.value.trim(),z=(Kn=document.getElementById(`ed-p-${v}-1`))==null?void 0:Kn.value.trim();$.activeMatch.teams[v].players[0]=W||(v===0?"DRIVE 1":"DRIVE 2"),$.activeMatch.teams[v].players[1]=z||(v===0?"REVÉS 1":"REVÉS 2")}a.editNamesOpen=!1,Te(),N()}break;case"finish-early":ci();break;case"print-pdf":window.print();break;case"export-png":{const v=un();v&&Eo(v);break}case"share-ranking":Ao();break;case"export-ranking-img":Ro();break;case"save-ranking-name":{const v=document.getElementById("cfg-ranking-name");r.rankingName=(v==null?void 0:v.value.trim())||"Mi Ranking",K(Se,r),D("Nombre de ranking guardado"),N();break}case"prompt-ranking-name":{const v=prompt("Nombre de tu Cuenta / Ranking / Club:",r.rankingName||"Mi Ranking");v!==null&&(r.rankingName=v.trim()||"Mi Ranking",K(Se,r),D("Nombre de ranking actualizado"),N());break}case"copy-ranking-id":{const v=`#${r.rankingId}`;navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(v).then(()=>D(`ID copiado: ${v}`)).catch(()=>prompt("Copiá tu ID de cuenta:",v)):prompt("Copiá tu ID de cuenta:",v);break}case"regen-ranking-id":confirm("¿Generar un nuevo ID único de cuenta? Los enlaces ya compartidos mantendrán el anterior.")&&(r.rankingId=ar(),K(Se,r),N(),D(`Nuevo ID generado: #${r.rankingId}`));break;case"clear-shared-ranking":a.sharedRanking=null,tr("padel_shared_ranking"),a.playerRankingView="local",a.playerScope==="shared"&&(a.playerScope="daily"),N(),D("Ranking compartido cerrado");break;case"open-daily-ranking":a.playerScope="daily",a.playerRankingView="local",Le("players");break;case"open-daily-pts":a.compModal="daily-pts",N();break;case"save-daily-pts":{const v=document.getElementById("dp-win"),W=document.getElementById("dp-loss");r.dailyWinPts=Math.max(0,Number(v==null?void 0:v.value)||0),r.dailyLossPts=Math.max(0,Number(W==null?void 0:W.value)||0),K(Se,r),a.compModal=null,N(),D("Puntaje del Día guardado");break}case"save-daily-pts-inline":{const v=document.getElementById("cfg-daily-win"),W=document.getElementById("cfg-daily-loss");r.dailyWinPts=Math.max(0,Number(v==null?void 0:v.value)||0),r.dailyLossPts=Math.max(0,Number(W==null?void 0:W.value)||0),K(Se,r),N(),D("Puntaje de Partido del Día actualizado");break}case"new-comp":Go("create",ce.getAttribute("data-kind")||"league"),N();break;case"save-comp-modal":{Ya();const v=a.compFormState;if(!v||!String(v.name||"").trim()){D("Ingresá un nombre para la competencia");return}const W=Date.now(),z=v.format==="proyecto_padel",Y=z?1:Number((Qn=v.defaultRules)==null?void 0:Qn.totalSets)||3,oe={...v.defaultRules||{},totalSets:Y,setsToWin:Math.floor(Y/2)+1,...z?{deuceRule:"golden"}:{}},ke=z?"individual":v.rankingMode,_e=Number(v.winPts)||0,Re=Number.isFinite(Number(v.drawPts))?Number(v.drawPts):2,je=Number(v.lossPts)||0,Ee=z?0:Number(v.setBonusPts)||0,We=z?Number.isFinite(Number(v.gameBonusPts))?Number(v.gameBonusPts):1:Number(v.gameBonusPts)||0,$t=ze(v.courtsCount,4);if(a.compModal==="edit"&&v.id){const fe=J(v.id);fe&&(fe.kind=v.kind,fe.name=v.name.trim(),fe.format=v.format,fe.rankingMode=ke,fe.winPts=_e,fe.drawPts=Re,fe.lossPts=je,fe.setBonusPts=Ee,fe.gameBonusPts=We,fe.numGroups=Number(v.numGroups)||2,fe.advancePerGroup=Number(v.advancePerGroup)||2,fe.courtsCount=$t,fe.defaultRules=oe,ne(),fe.syncCode&&Fe(fe,!1),a.compModal=null,N(),D("Competencia actualizada"))}else{const fe={id:ot(v.kind==="tournament"?"trn":"lig"),kind:v.kind,name:v.name.trim(),format:v.format,rankingMode:ke,winPts:_e,drawPts:Re,lossPts:je,setBonusPts:Ee,gameBonusPts:We,numGroups:Number(v.numGroups)||2,advancePerGroup:Number(v.advancePerGroup)||2,courtsCount:$t,status:"active",defaultRules:oe,participants:[],fixtures:[],createdAt:W};$.competitionsList.unshift(fe),ne(),sr(1),a.compModal=null,a.route==="new"?(ca(fe,null),K(ve,n),N()):(a.compId=fe.id,a.compTab="participants",Le("comp-detail")),D(`${fe.kind==="league"?"Liga":"Torneo"} creado`)}break}case"clear-picked-fixture":n.fixtureId="",K(ve,n),N();break;case"add-part":{const v=J(ce.getAttribute("data-comp"));v&&Wr(v);break}case"add-part-batch":{const v=J(ce.getAttribute("data-comp"));v&&Xl(v);break}case"gen-rr":{const v=J(ce.getAttribute("data-comp"));if(!Ae(v)||(v.fixtures||[]).some(W=>W.matchId)&&!confirm("Ya hay partidos jugados en el fixture. ¿Re-sortear todos los cruces?"))break;v.fixtures=Sr(v,{doubleRound:v.format==="league_rr2",shuffle:!0,courtsCount:Ge(v,4),historyMatches:$.historyList}),ne(),v.syncCode&&Fe(v,!0),N(),D(`${v.fixtures.length} cruces sorteados`);break}case"gen-groups":{const v=J(ce.getAttribute("data-comp"));if(!Ae(v)||(v.fixtures||[]).some(z=>z.matchId)&&!confirm("Ya hay partidos jugados en grupos. ¿Re-sortear grupos y fixture?"))break;const W=tl(v,v.numGroups||2,{shuffle:!0,courtsCount:Ge(v,4)});v.fixtures=W,ne(),v.syncCode&&Fe(v,!0),N(),D(`${W.length} partidos de grupos sorteados`);break}case"gen-bracket":{const v=J(ce.getAttribute("data-comp"));if(!Ae(v)||(v.fixtures||[]).some(W=>W.matchId)&&!confirm("Ya hay partidos jugados en el cuadro. ¿Re-sortear las llaves?"))break;v.fixtures=wr(v,null,{shuffle:!0,courtsCount:Ge(v,4)}),At(v),ne(),v.syncCode&&Fe(v,!0),N(),D("Llaves eliminatorias sorteadas");break}case"advance-playoffs":{const v=J(ce.getAttribute("data-comp"));if(!Ae(v)||(v.fixtures||[]).some(z=>z.phase==="playoff"&&z.matchId)&&!confirm("Ya hay cruces jugados en Playoffs. ¿Regenerar llaves eliminatorias?"))break;ll(v)?(v.syncCode&&Fe(v,!0),N(),D("Llaves eliminatorias creadas según la tabla")):D("Necesitás al menos 2 grupos con participantes para armar playoffs");break}case"gen-social-round":{const v=J(ce.getAttribute("data-comp"));if(!Ae(v))break;const W=Ge(v,4),z=Zi(v,$.historyList,{courtsCount:W});if(!z.length){D("Necesitás al menos 4 jugadores activos en Inscriptos");break}v.fixtures=[...v.fixtures||[],...z],a.compTab="fixtures",ne(),v.syncCode&&Fe(v,!0),N(),D(`Ronda ${z[0].roundIdx+1} sorteada (${z.length} ${z.length===1?"cancha":"canchas"})`);break}case"gen-social-cycle":{const v=J(ce.getAttribute("data-comp"));if(!Ae(v)||(v.fixtures||[]).some(oe=>oe.matchId)&&!confirm("Ya hay partidos jugados en este torneo. ¿Re-sortear el ciclo completo de rondas?")||(v.fixtures||[]).length&&!(v.fixtures||[]).some(oe=>oe.matchId)&&!confirm("¿Reemplazar las rondas actuales por un ciclo completo nuevo?"))break;const W=Ge(v,4),z=$r(v,$.historyList,{courtsCount:W,ignoreExistingFixtures:!0});if(!z.length){D("Necesitás al menos 4 jugadores activos en Inscriptos");break}v.fixtures=z,a.compTab="fixtures",ne(),v.syncCode&&Fe(v,!0),N();const Y=new Set(z.map(oe=>oe.roundIdx)).size;D(`Ciclo sorteado: ${Y} rondas (${z.length} partidos)`);break}case"gen-pairs-round":{const v=J(ce.getAttribute("data-comp"));if(!Ae(v))break;const W=Ge(v,4),z=el(v,$.historyList,{courtsCount:W});if(!z.length){D("Necesitás al menos 2 parejas activas en Inscriptos");break}v.fixtures=[...v.fixtures||[],...z],a.compTab="fixtures",ne(),v.syncCode&&Fe(v,!0),N(),D(`Fecha ${z[0].roundIdx+1} sorteada (${z.length} ${z.length===1?"cancha":"canchas"})`);break}case"finish-comp":{const v=J(ce.getAttribute("data-comp"));if(!v||Tt(v))break;const W=(v.fixtures||[]).filter(Y=>!Y.isBye&&Y.team0&&Y.team1&&(Y.winnerSide===null||Y.winnerSide===void 0)).length,z=W>0?`Todavía hay ${W} cruce(s) sin resultado. ¿Marcar "${v.name}" como terminado igual? No se generarán nuevos encuentros.`:`¿Marcar "${v.name}" como terminado? Se cerrarán los sorteos y dejarán de generarse encuentros.`;if(!confirm(z))break;v.status="finished",v.finishedAt=Date.now(),ne(),v.syncCode&&Fe(v,!1),N(),D(`🏁 ${v.name} terminado`);break}case"reopen-comp":{const v=J(ce.getAttribute("data-comp"));if(!v)break;v.status="active",v.finishedAt=null,ne(),v.syncCode&&Fe(v,!1),N(),D(`🔓 ${v.name} reabierto`);break}case"open-add-fixture":{const v=ce.getAttribute("data-comp")||a.compId,W=J(v);if(W&&!Ae(W))break;a.compId=v,a.compModal="add-fixture",N();break}case"save-manual-fixture":{const v=J(ce.getAttribute("data-comp"));if(!Ae(v))break;const W=((Yn=document.getElementById("af-round"))==null?void 0:Yn.value.trim())||"Cruce",z=Number((Xn=document.getElementById("af-court"))==null?void 0:Xn.value),Y=Number.isFinite(z)&&z>=1?z:null;let oe=null,ke=null;const _e=document.getElementById("af-sel0"),Re=document.getElementById("af-sel1");if(_e&&Re){if(_e.value===Re.value){D("Elegí dos parejas distintas");break}const je=(v.participants||[]).findIndex(We=>We.id===_e.value),Ee=(v.participants||[]).findIndex(We=>We.id===Re.value);oe=gt(je>=0?v.participants[je]:null,je>=0?je+1:null),ke=gt(Ee>=0?v.participants[Ee]:null,Ee>=0?Ee+1:null)}else{const je=((Zn=document.getElementById("af-t0p0"))==null?void 0:Zn.value.trim())||"DRIVE 1",Ee=((eo=document.getElementById("af-t0p1"))==null?void 0:eo.value.trim())||"REVÉS 1",We=((to=document.getElementById("af-t1p0"))==null?void 0:to.value.trim())||"DRIVE 2",$t=((ao=document.getElementById("af-t1p1"))==null?void 0:ao.value.trim())||"REVÉS 2";oe={players:[je,Ee],color:"#d4af37",label:$e(je,Ee)},ke={players:[We,$t],color:"#2f8cff",label:$e(We,$t)}}if(oe&&ke){v.fixtures=v.fixtures||[];const je={id:ot("fx"),phase:"manual",roundIdx:v.fixtures.length,roundLabel:W,slotIdx:v.fixtures.length,group:null,...Y?{court:Y}:{},team0:oe,team1:ke,source0:null,source1:null,matchId:null,winnerSide:null,isBye:!1};v.fixtures.push(je),ne(),v.syncCode&&hl(v,je),a.compModal=null,N(),D("Cruce agregado")}break}case"open-preset-quick-score":Gs({mode:"preset"});break;case"open-comp-quick-score":Gs({mode:"comp-adhoc",compId:ce.getAttribute("data-comp")||a.compId});break;case"qs-add-set":a.quickScoreState&&a.quickScoreState.sets.length<5&&(ra(),a.quickScoreState.sets.push([null,null]),N());break;case"qs-toggle-manual-teams":a.quickScoreState&&a.quickScoreState.mode==="comp-adhoc"&&(ra(),a.quickScoreState.useManualTeams=!a.quickScoreState.useManualTeams,N());break;case"qs-clear-players":a.quickScoreState&&(ra(),a.quickScoreState.teams[0].players=["",""],a.quickScoreState.teams[1].players=["",""],a.quickScoreState.activeSlot=0,N());break;case"save-quick-score":{ra();const v=a.quickScoreState,W=ce.getAttribute("data-target")||(v==null?void 0:v.fixtureKey)||a.quickScoreFixtureId,[z,Y]=String(W||"").split(":"),oe=(v==null?void 0:v.mode)||(z&&Y?"fixture":"preset"),ke=oe==="fixture"?J(z):oe==="comp-adhoc"?J((v==null?void 0:v.compId)||z):(n.matchContext==="league"||n.matchContext==="tournament")&&n.compId?J(n.compId):null,_e=we(ke),Re=!_e&&!!((so=document.getElementById("qs-wo"))!=null&&so.checked),je=((no=document.getElementById("qs-winner"))==null?void 0:no.value)||"auto";if(_e&&oe==="comp-adhoc"){const Ve=[(io=(ro=(oo=v==null?void 0:v.teams)==null?void 0:oo[0])==null?void 0:ro.players)==null?void 0:io[0],(uo=(co=(lo=v==null?void 0:v.teams)==null?void 0:lo[0])==null?void 0:co.players)==null?void 0:uo[1],(mo=(fo=(po=v==null?void 0:v.teams)==null?void 0:po[1])==null?void 0:fo.players)==null?void 0:mo[0],(ho=(bo=(go=v==null?void 0:v.teams)==null?void 0:go[1])==null?void 0:bo.players)==null?void 0:ho[1]].map(St=>String(St||"").trim());if(Ve.some(St=>!St)){D("Ingresá o tocá los 4 nombres de los jugadores");break}if(new Set(Ve.map(St=>St.toUpperCase())).size<4){D("Cada uno de los 4 jugadores debe ser distinto");break}}const Ee=[];if(!Re){for(let Ve=1;Ve<=5;Ve++){const St=document.getElementById(`qs-s${Ve}-0`),Ps=document.getElementById(`qs-s${Ve}-1`),Cs=St==null?void 0:St.value,Ts=Ps==null?void 0:Ps.value;Cs!==""&&Cs!==void 0&&Ts!==""&&Ts!==void 0&&Ee.push([Math.max(0,Number(Cs)||0),Math.max(0,Number(Ts)||0)])}if(!Ee.length){D(_e?"Ingresá los games finales de ambas parejas":"Seleccioná al menos el resultado de un set o activá W.O.");break}}const We=nl(ke,Ee,je,Re);if(!We.ok){D(We.error);break}const $t=We.winnerSide,fe=!!We.isDraw;let sa=null;if(oe==="fixture"&&z&&Y)sa=pl(z,Y,Ee,$t,Re);else if(oe==="comp-adhoc"&&ke&&v){if(!v.useManualTeams&&((vo=v.selPartIds)!=null&&vo[0])&&((yo=v.selPartIds)==null?void 0:yo[0])===(($o=v.selPartIds)==null?void 0:$o[1])){D("Elegí dos parejas distintas");break}sa=nn({comp:ke,stageLabel:v.stageLabel||"",teams:v.teams,setsArr:Ee,winnerSide:$t,isDraw:fe,isWalkover:Re})}else{const Ve=n.matchContext||"daily";sa=nn({kind:Ve,comp:ke,fixtureId:ke&&n.fixtureId?n.fixtureId:"",stageLabel:(v==null?void 0:v.stageLabel)||n.stageLabel||"",teams:(v==null?void 0:v.teams)||n.teams,rules:n,setsArr:Ee,winnerSide:$t,isDraw:fe,isWalkover:Re}),n.fixtureId="",K(ve,n)}if(a.compModal=null,a.quickScoreState=null,a.quickScoreFixtureId=null,oe==="preset"&&sa){const Ve=qe(sa);Ve&&J(Ve)?(a.compId=Ve,a.compTab="standings",Le("comp-detail")):(a.statsId=sa.id,Le("stats"))}else N();D(Re?"W.O. registrado":fe?"🤝 Empate guardado y ELO actualizado":"✓ Resultado guardado");break}case"share-comp-rank":{const v=J(a.compId);v&&Ao(qo(v));break}case"export-comp-rank":{const v=J(a.compId);v&&Ro(qo(v));break}case"open-join-comp":a.compModal="join-comp",N();break;case"submit-join-comp":{const v=((So=document.getElementById("join-comp-code"))==null?void 0:So.value)||"";Lr(v);break}case"share-comp-invite":{const v=J(a.compId);v&&$l(v);break}case"dl-comp-qr":{const v=J(a.compId);v&&Sl(v);break}case"republish-comp-sync":{const v=J(a.compId);v&&rn(v).then(W=>{D(W?"✓ Datos publicados en la nube":"Guardado en cola: se enviará al reconectar"),N()});break}case"save-shared":a.sharedMatch&&(Pt(a.sharedMatch),a.statsId=a.sharedMatch.id,D("Partido guardado en tu historial"),N());break;case"export-json":Fo({share:!1});break;case"share-json":Fo({share:!0});break;case"dismiss-backup-prompt":r.backupPromptDismissedAt=Date.now(),K(Se,r),N();break;case"install-pwa":Tl();break;case"apply-sw-update":Ml();break;case"save-sync-server":{const v=document.getElementById("cfg-sync-server"),W=String((v==null?void 0:v.value)||"").trim(),z=Fa(W);if(W&&z===Qt&&!/^https:\/\/ntfy\.sh\/?$/i.test(W)){D("Ingresá una URL válida con https:// (o http://localhost)");return}if(r.syncServerUrl=z,K(Se,r),fs(),a.liveId){const Y=a.liveId;Mn(),as(Y)}N(),D(`Servidor de sincronización: ${z}`);break}case"reset-sync-server":r.syncServerUrl=Qt,K(Se,r),fs(),N(),D("Servidor restablecido a https://ntfy.sh");break;case"clear-all-data":confirm("¿Seguro que querés borrar todos los partidos del historial?")&&($.historyList=[],K(Bt,$.historyList),$.competitionsList.forEach(v=>At(v)),ne(),D("Historial vaciado"),N());break;case"clear-all-comps":confirm("¿Seguro que querés borrar todas las Ligas y Torneos? (Los partidos del historial se conservarán)")&&($.competitionsList=[],ne(),n.compId="",n.fixtureId="",K(ve,n),a.compId=null,D("Ligas y Torneos eliminados"),N());break;case"pc-download":Ji();break;case"pc-save":Ki();break;case"pc-new-blank":Lo(),a.playerCardAiBusy=!1,a.playerCardDraft=ws(),a.playerCardDraftDirty=!0,a.playerCardTouchDrag=!1,a.playerCardAiStatus="",a.playerCardAiText="",ge(!0),N();break;case"pc-clear-photo":{Lo(),a.playerCardAiBusy=!1;const v=pe();v.origPhoto=null,v.cutoutPhoto=null,v.origHasAlpha=!1,v.zoom=1,v.offsetX=0,v.offsetY=0,a.playerCardDraftDirty=!0,a.playerCardTouchDrag=!1,a.playerCardAiStatus="",a.playerCardAiText="",ge(!0),N();break}case"pc-reset-frame":{const v=pe();v.zoom=1,v.offsetX=0,v.offsetY=0,a.playerCardDraftDirty=!0,ge(!0),N();break}case"pc-toggle-touch-drag":a.playerCardTouchDrag=!a.playerCardTouchDrag,N();break;case"pc-reset-logo2":{const v=jt();v.logo2=Et,v.logo2Disabled=!1,va(),N(),D("Logo oficial PRO PÁDEL restaurado");break}}});document.addEventListener("input",e=>{const t=e.target;if(!t)return;const{ui:a,preset:n,prefs:r}=$;if(t.id==="pc-name"){pe().name=t.value,a.playerCardDraftDirty=!0,ge(),Ne();return}if(t.id==="pc-nick"){pe().nickname=t.value,a.playerCardDraftDirty=!0,ge(),Ne();return}if(t.id==="pc-cat"){pe().category=t.value,a.playerCardDraftDirty=!0,ge(),Ne();return}if(t.id==="pc-age"){pe().age=t.value,a.playerCardDraftDirty=!0,ge(),Ne();return}if(t.id==="pc-shot"){pe().bestShot=t.value,a.playerCardDraftDirty=!0,ge(),Ne();return}if(t.id==="pc-subtitle"){jt().subTitle=t.value,Ne();return}if(t.id==="pc-zoom"){const s=Number(t.value)||1;pe().zoom=s;const o=document.getElementById("pc-zoom-val");o&&(o.textContent=Math.round(s*100)+"%"),a.playerCardDraftDirty=!0,ge(),Ne();return}if(t.id==="pc-offx"){const s=Number(t.value)||0;pe().offsetX=s;const o=document.getElementById("pc-offx-val");o&&(o.textContent=String(Math.round(s))),a.playerCardDraftDirty=!0,ge(),Ne();return}if(t.id==="pc-offy"){const s=Number(t.value)||0;pe().offsetY=s;const o=document.getElementById("pc-offy-val");o&&(o.textContent=String(Math.round(s))),a.playerCardDraftDirty=!0,ge(),Ne();return}if(t.hasAttribute("data-pname")){const[s,o]=(t.getAttribute("data-pname")||"").split(",").map(Number);n.teams[s].players[o]=t.value,K(ve,n);const i=document.getElementById("srv-chips-box");i&&i.querySelectorAll("[data-set-srv]").forEach(c=>{const[d,g]=(c.getAttribute("data-set-srv")||"").split(",").map(Number),b=n.teams[d].players[g]||(g===0?`DRIVE ${d+1}`:`REVÉS ${d+1}`);c.innerHTML=`<span class="dot"></span>${h(b)}`});return}if(t.hasAttribute("data-preset-txt")){const s=t.getAttribute("data-preset-txt");s&&(n[s]=t.value,K(ve,n));return}if(t.id==="cfg-ranking-name"){r.rankingName=t.value,K(Se,r);return}if(t.id==="hist-search-inp"){const s=t.selectionStart??t.value.length;a.histQuery=t.value,N();const o=document.getElementById("hist-search-inp");o&&(o.focus(),o.setSelectionRange(s,s));return}if(t.id&&t.id.startsWith("qs-")&&a.quickScoreState){const s=t.id.match(/^qs-s(\d+)-([01])$/);if(s){const o=Number(s[1])-1,i=Number(s[2]),l=t.value===""?null:Math.max(0,Number(t.value)||0),c=document.querySelector(`[data-qs-row="${o}:${i}"]`);c&&c.querySelectorAll&&c.querySelectorAll(".qs-g-pill").forEach(d=>{d.classList.toggle("on",l!==null&&Number(d.textContent)===l)})}ms()}});document.addEventListener("change",e=>{var s,o;const t=e.target;if(!t)return;const{ui:a,preset:n,prefs:r}=$;if(t.id==="pc-photo-inp"&&t instanceof HTMLInputElement&&t.files&&t.files[0]){Bi(t.files[0]),t.value="";return}if(t.id==="pc-logo1-inp"&&t instanceof HTMLInputElement&&t.files&&t.files[0]){Do(t.files[0],1),t.value="";return}if(t.id==="pc-logo2-inp"&&t instanceof HTMLInputElement&&t.files&&t.files[0]){Do(t.files[0],2),t.value="";return}if(t.id==="pc-subtitle"){jt().subTitle=t.value,va();return}if(t.id==="pc-show-brand"&&t instanceof HTMLInputElement){pe().showAppBrand=t.checked,a.playerCardDraftDirty=!0,ge(),Ne();return}if(t.hasAttribute("data-preset-bool")&&t instanceof HTMLInputElement){const i=t.getAttribute("data-preset-bool");i&&(n[i]=t.checked,K(ve,n));return}if(t.hasAttribute("data-pref-bool")&&t instanceof HTMLInputElement){const i=t.getAttribute("data-pref-bool");i&&(r[i]=t.checked,K(Se,r),qa(),i==="backupIncludeCards"&&N());return}if(t.getAttribute("data-act")==="sel-comp-for-new"){const i=J(t.value);i&&(ca(i,null),K(ve,n),N());return}if(t.hasAttribute("data-fill-pair-team")&&t.value){const i=Number(t.getAttribute("data-fill-pair-team")),[l,c]=t.value.split(":"),d=J(l),g=((d==null?void 0:d.participants)||[]).find(b=>b.id===c);g&&g.type==="pair"&&(n.teams[i].players=[((s=g.players)==null?void 0:s[0])||`DRIVE ${i+1}`,((o=g.players)==null?void 0:o[1])||`REVÉS ${i+1}`],g.color&&(n.teams[i].color=g.color),K(ve,n),N(),D(`Pareja ${i+1} cargada`));return}if(t.getAttribute("data-act")==="sel-rank-comp"){const i=J(t.value);i&&(i.kind==="league"?a.selectedLeagueId=i.id:a.selectedTournId=i.id,a.selectedGroupFilter="all",N());return}if(t.hasAttribute("data-set-comp-courts")){const i=t.getAttribute("data-set-comp-courts"),l=J(i);Ae(l)&&(l.courtsCount=ze(t.value,4),ne(),l.syncCode&&Fe(l,!1),N(),D(`Canchas actualizadas: ${l.courtsCount}`));return}if(t.hasAttribute("data-set-part-group")){const[i,l]=(t.getAttribute("data-set-part-group")||"").split(":"),c=J(i),d=((c==null?void 0:c.participants)||[]).find(g=>g.id===l);Ae(c)&&d&&(d.group=t.value||null,d.groupManual=!!t.value,ne(),c.syncCode&&on(c,"grp",l,d.group),N());return}if(t.id&&t.id.startsWith("qs-")&&a.quickScoreState){ms();return}if(t.id==="imp-json-file"&&t instanceof HTMLInputElement&&t.files&&t.files[0]){const i=t.files[0];t.value="";const l=new FileReader;l.onload=()=>{typeof l.result=="string"&&Cl(l.result)},l.readAsText(i)}});document.addEventListener("keydown",e=>{const t=e.target;if(e.key==="Enter"&&t instanceof HTMLInputElement&&t.hasAttribute("data-enter-add-part")){e.preventDefault();const s=J(t.getAttribute("data-enter-add-part"));s&&Wr(s);return}if(t&&["INPUT","TEXTAREA","SELECT"].includes(t.tagName))return;const{ui:a,activeMatch:n,prefs:r}=$;if(a.shotSheet&&n){const s=a.shotSheet.team,o=1-s;if(e.key==="Escape"){a.shotSheet=null,N();return}if(e.key===" "||e.key==="Enter"){e.preventDefault(),he(s,"pt",null);return}if(e.key==="1"){he(s,"winner",[s,0]);return}if(e.key==="2"){he(s,"winner",[s,1]);return}if(e.key==="3"){he(s,"ue",[o,0]);return}if(e.key==="4"){he(s,"ue",[o,1]);return}if(e.key==="5"){he(s,"fe",[o,0]);return}if(e.key==="6"){he(s,"fe",[o,1]);return}return}if(a.changeoverOverlay&&(e.key===" "||e.key==="Enter"||e.key==="Escape")){e.preventDefault(),a.changeoverOverlay=null,N();return}if(a.route==="board"&&n){const s=e.key.toLowerCase();s==="1"||s==="a"||e.key==="ArrowLeft"||e.key==="ArrowUp"||e.key==="PageUp"?(e.preventDefault(),Qs(0)):s==="2"||s==="l"||e.key==="ArrowRight"||e.key==="ArrowDown"||e.key==="PageDown"?(e.preventDefault(),Qs(1)):s==="f"?(e.preventDefault(),kn()):s==="z"||e.key==="Backspace"?(e.preventDefault(),cs()):s==="y"?(e.preventDefault(),xn()):s==="s"?(e.preventDefault(),Pn()):s==="v"&&(e.preventDefault(),r.voice=!r.voice,K(Se,r),D(r.voice?"Voz activada":"Voz desactivada"),N())}});function Fr(){const{ui:e}=$,t=location.hash.slice(1);if(t==="obs"||t.startsWith("obs?")||t.startsWith("obs&")||t.startsWith("obs=")){let a="";if(t.startsWith("obs="))a=t.slice(4);else{const n=t.indexOf("?"),r=t.indexOf("&"),s=n>=0?t.slice(n+1):r>=0?t.slice(r+1):"",o=new URLSearchParams(s);a=o.get("v")||o.get("live")||o.get("code")||""}e.route="obs",a?as(a):N();return}if(t.startsWith("v=")){as(t.slice(2));return}if(t.startsWith("live=")){as(t.slice(5));return}if(t.startsWith("s=")){vi(t.slice(2));return}if(t.startsWith("r=")||t.startsWith("rk_id=")){const a=t.startsWith("r=")?t.slice(2):t.slice(6);ki(a);return}if(t.startsWith("c=")||t.startsWith("join=")){Lr(t);return}if(t.startsWith("comp=")){const a=t.slice(5);if(J(a)){e.compId=a,e.route="comp-detail",N();return}}if(t.startsWith("share=")){const a=gs(t.slice(6));if(a){e.sharedMatch=a,e.statsId="shared",e.route="stats",N();return}}if(t.startsWith("rk=")||t.startsWith("ranking=")){const a=t.startsWith("rk=")?t.slice(3):t.slice(8),n=Ho(a);if(n&&Array.isArray(n.players)&&n.players.length){e.sharedRanking=n,K("padel_shared_ranking",n),dr(n),e.playerRankingView="shared",e.playerScope="shared",e.route="players",N(),D(`📡 ${n.name||"Ranking"} (#${n.id||"RK"}) cargado`);return}}if(t==="display"){e.route="display",N();return}if(t==="cards"||t==="tarjetas"||t==="player-card"){e.route="player-card",N();return}["home","new","board","stats","history","players","competitions","comp-detail","player-card","settings"].includes(t)&&((t==="home"||t==="new")&&lr(),e.route=t,N())}window.addEventListener("hashchange",Fr);let st=null;document.addEventListener("pointerdown",e=>{var r,s;const t=e.target,a=(r=t==null?void 0:t.closest)==null?void 0:r.call(t,"#pc-preview-canvas");if(!a||e.pointerType!=="mouse"&&!$.ui.playerCardTouchDrag)return;const n=pe();if(n.origPhoto){st={pointerId:e.pointerId,startX:e.clientX,startY:e.clientY,origX:Number(n.offsetX)||0,origY:Number(n.offsetY)||0,rectW:a.getBoundingClientRect().width||360},a.classList.add("dragging");try{(s=a.setPointerCapture)==null||s.call(a,e.pointerId)}catch{}}});document.addEventListener("pointermove",e=>{if(!st||e.pointerId!==st.pointerId)return;const t=pe(),a=1080/st.rectW,n=Math.max(-350,Math.min(350,Math.round(st.origX+(e.clientX-st.startX)*a))),r=Math.max(-350,Math.min(350,Math.round(st.origY+(e.clientY-st.startY)*a)));t.offsetX=n,t.offsetY=r;const s=document.getElementById("pc-offx"),o=document.getElementById("pc-offy"),i=document.getElementById("pc-offx-val"),l=document.getElementById("pc-offy-val");s&&(s.value=String(n)),o&&(o.value=String(r)),i&&(i.textContent=String(n)),l&&(l.textContent=String(r)),Ne()});function Gr(e){if(!st||e&&e.pointerId!==void 0&&e.pointerId!==st.pointerId)return;const t=document.getElementById("pc-preview-canvas");t&&t.classList.remove("dragging"),st=null,$.ui.playerCardDraftDirty=!0,ge()}document.addEventListener("pointerup",Gr);document.addEventListener("pointercancel",Gr);document.addEventListener("visibilitychange",()=>{if(document.visibilityState==="visible"&&qa(),document.hidden)return;const e=rl();e&&ya(e,null,!1),($.ui.route==="live"||$.ui.route==="obs")&&$.ui.liveId&&ba(Ga($.ui.liveId))});El();di();Fr();N();Ii();li();nr(!0);Il();
