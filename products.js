// Studio catalog — one entry per shipped product. Append here; the hub
// renders straight from this list. See RULES.md for the monetization
// constraint (rent | buy | sell — never ads) and BACKLOG.md for what's next.

// primaryCategory buckets one of the shipped products into for hub grouping/
// filtering/suggestions — a small fixed enum, kept separate from the
// free-text `category` field (which stays as the descriptive label shown on
// each card). See js/categories.js for the label/order mapping.
export const PRODUCTS = [
  {
    name: 'Cohort Autopsy',
    pitch: 'Scans a whole bootcamp cohort\'s repos for real beginner security mistakes — leaked secrets, unauthenticated admin panels, hardcoded backdoors — into one instructor report.',
    category: 'B2B service',
    primaryCategory: 'b2b',
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
    primaryCategory: 'dev-tools',
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
    primaryCategory: 'games',
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
    primaryCategory: 'creator-tools',
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
    primaryCategory: 'wellness',
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
    primaryCategory: 'dev-tools',
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
    primaryCategory: 'games',
    emoji: '📖',
    url: 'https://github.com/Emin-dev/scriver-i-skola',
    liveUrl: 'https://emin-dev.github.io/scriver-i-skola/',
    monetization: 'buy',
    price: '$4.99 one-time (full 5-room run)',
    status: 'sandbox'
  },
  {
    name: 'Contexto AZ',
    pitch: 'A daily Azerbaijani semantic word-guessing game — one secret word, unlimited guesses, told only how close each guess is. No timer, no streaks, no fail state.',
    category: 'word game',
    primaryCategory: 'games',
    emoji: '🧠',
    url: 'https://github.com/Emin-dev/contexto-az',
    liveUrl: 'https://emin-dev.github.io/contexto-az/',
    monetization: 'buy',
    price: '$3 one-time (supports the game — unlocks the past-days archive)',
    status: 'sandbox'
  },
  {
    name: 'Repetitor',
    pitch: 'A WhatsApp-based grading concept for Azerbaijani private tutors — forward a photo of homework, get a structured score breakdown and a parent-ready feedback message. Honest concept demo — unproven premise, real rubric engine.',
    category: 'B2B service / edtech',
    primaryCategory: 'b2b',
    emoji: '📝',
    url: 'https://github.com/Emin-dev/repetitor',
    liveUrl: 'https://emin-dev.github.io/repetitor/',
    monetization: 'rent',
    price: '$12/month per tutor (~100 gradings, pay-as-you-go top-ups beyond)',
    status: 'sandbox'
  },
  {
    name: 'Qonuşma',
    pitch: 'An Azerbaijani grammar and style checker — a real, free spellchecker (neither Grammarly nor LanguageTool support the language at all) plus a demoed Pro tier for suffix agreement, register, and loanword checks.',
    category: 'dev-tool / creator-tool',
    primaryCategory: 'dev-tools',
    emoji: '✍️',
    url: 'https://github.com/Emin-dev/qonusma',
    liveUrl: 'https://emin-dev.github.io/qonusma/',
    monetization: 'rent',
    price: 'Free spellcheck tier; $4/month Pro (suffix/register/loanword checks)',
    status: 'sandbox'
  },
  {
    name: 'Captionist',
    pitch: 'Animated, styled burned-in captions for short-form video — a real word-by-word-highlighted renderer for text you already have timed (.srt/.vtt or typed), plus an honestly-demoed audio-to-caption preview.',
    category: 'creator-tool',
    primaryCategory: 'creator-tools',
    emoji: '🎬',
    url: 'https://github.com/Emin-dev/captionist',
    liveUrl: 'https://emin-dev.github.io/captionist/',
    monetization: 'buy',
    price: '$7 one-time (all style presets + watermark-free export)',
    status: 'sandbox'
  },
  {
    name: 'Postguard',
    pitch: 'Strips real EXIF/GPS metadata from photos and PDFs, plus a redaction tool to permanently black out faces or plates — both 100% local, nothing ever uploaded, in one flow.',
    category: 'privacy-utility',
    primaryCategory: 'dev-tools',
    emoji: '🕶️',
    url: 'https://github.com/Emin-dev/postguard',
    liveUrl: 'https://emin-dev.github.io/postguard/',
    monetization: 'buy',
    price: '$3.99 one-time (batch/multi-file processing)',
    status: 'sandbox'
  },
  {
    name: 'Foresight',
    pitch: 'A small, fully deterministic grid-tactics game — every enemy telegraphs its exact next move before you act, and resolution always matches exactly what was shown. Honest craft/genre-diversity bet, not a revenue plan.',
    category: 'game',
    primaryCategory: 'games',
    emoji: '🛡️',
    url: 'https://github.com/Emin-dev/foresight',
    liveUrl: 'https://emin-dev.github.io/foresight/',
    monetization: 'buy',
    price: '$4.99 one-time (Stonemarch + Windkeep — 10 more missions)',
    status: 'sandbox'
  },
  {
    name: 'Ruleshift',
    pitch: 'A Baba-Is-You-style rule-manipulation puzzle — push word-blocks into alignment to rewrite the rules of the level live, in real time. 24 hand-designed levels, each independently re-verified solvable by a brute-force solver.',
    category: 'puzzle game',
    primaryCategory: 'games',
    emoji: '🧱',
    url: 'https://github.com/Emin-dev/ruleshift',
    liveUrl: 'https://emin-dev.github.io/ruleshift/',
    monetization: 'buy',
    price: '$3.49 one-time (levels 10-24)',
    status: 'sandbox'
  },
];
