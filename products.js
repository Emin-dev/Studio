// Studio catalog — one entry per shipped product. Append here; the hub
// renders straight from this list. See RULES.md for the monetization
// constraint (rent | buy | sell — never ads) and BACKLOG.md for what's next.

export const PRODUCTS = [
  {
    name: 'Cohort Autopsy',
    pitch: 'Scans a whole bootcamp cohort\'s repos for real beginner security mistakes — leaked secrets, unauthenticated admin panels, hardcoded backdoors — into one instructor report.',
    category: 'B2B service',
    emoji: '🔍',
    url: 'https://github.com/Emin-dev/cohort-autopsy',
    liveUrl: 'https://emin-dev.github.io/cohort-autopsy/',
    monetization: 'sell',
    price: '$200 / cohort report',
    status: 'sandbox'
  },
  {
    name: 'AçıqQapı',
    pitch: 'The WhatsApp-link phone verification pattern — no SMS OTP, no Meta Business Verification — packaged as docs, an honest demo, and a real crypto-based token engine.',
    category: 'developer-tool',
    emoji: '🚪',
    url: 'https://github.com/Emin-dev/acikqapi',
    liveUrl: 'https://emin-dev.github.io/acikqapi/',
    monetization: 'buy',
    price: '$19 / $49 / $179 (300 / 1,000 / 5,000 verification credits)',
    status: 'sandbox'
  },
  {
    name: 'Quiet Tiles',
    pitch: 'A calm, untimed Flow-style path-connection puzzle — 70 hand-verified levels, no timers, no fail state, no ads.',
    category: 'puzzle game',
    emoji: '🧩',
    url: 'https://github.com/Emin-dev/quiet-tiles',
    liveUrl: 'https://emin-dev.github.io/quiet-tiles/',
    monetization: 'buy',
    price: '$2.99 one-time (full 70-level pack)',
    status: 'sandbox'
  },
  {
    name: 'Instant Portfolio',
    pitch: 'Answer a short guided form and get a clean, modern, mobile-first portfolio site instantly — preview free, pay once to export.',
    category: 'creator-tool',
    emoji: '🗂️',
    url: 'https://github.com/Emin-dev/instant-portfolio',
    liveUrl: 'https://emin-dev.github.io/instant-portfolio/',
    monetization: 'buy',
    price: '$12 one-time (standalone HTML export)',
    status: 'sandbox'
  },
  {
    name: 'Mood Nook',
    pitch: 'A calm, private "one moment a day" mood scrapbook — no likes, no streaks, no feed, just a short note you keep for yourself.',
    category: 'social-adjacent',
    emoji: '🌿',
    url: 'https://github.com/Emin-dev/mood-nook',
    liveUrl: 'https://emin-dev.github.io/mood-nook/',
    monetization: 'rent',
    price: '$2.99/month (Nook+ — unlimited history + premium themes)',
    status: 'sandbox'
  },
  {
    name: 'VPAT Draft',
    pitch: 'A guided wizard for drafting a VPAT/ACR against all 55 real WCAG 2.2 Level A/AA criteria — plain-English explanations, free preview, pay once to export.',
    category: 'dev-tool / B2B service',
    emoji: '📋',
    url: 'https://github.com/Emin-dev/vpat-draft',
    liveUrl: 'https://emin-dev.github.io/vpat-draft/',
    monetization: 'buy',
    price: '$49 one-time (clean, exportable report)',
    status: 'sandbox'
  },
  {
    name: 'Scriver-i-şkola',
    pitch: 'A word-crafting puzzle with a light roguelike deckbuilding loop — reopen a village school one real word at a time. Untimed, no fail-state.',
    category: 'game',
    emoji: '📖',
    url: 'https://github.com/Emin-dev/scriver-i-skola',
    liveUrl: 'https://emin-dev.github.io/scriver-i-skola/',
    monetization: 'buy',
    price: '$4.99 one-time (full 5-room run)',
    status: 'sandbox'
  },
];
