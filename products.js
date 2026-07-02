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
];
