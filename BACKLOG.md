# Studio — Backlog

Organized in batches of 5, spanning categories. Check items off as they ship
(`- [x]`). When a batch is fully checked off, do fresh market research (see
RULES.md step 7) and write a new batch below it.

Batch 1 draws on the creative-synthesis research already done this session
(skill inventory from 280+ repos + 7 real 2026 market-research angles,
judged adversarially — see the `cozynook-project`/games-inventory memory
trail for the full findings). Each item below already states its
monetization model per RULES.md's hard constraint (rent/buy/sell only).

## Batch 1 (category-diverse: B2B service, dev-tool, game, creator-tool, social)

- [x] **Cohort Autopsy** (B2B service) — automated security-vulnerability
      scan across a bootcamp cohort's repos, run against the real recurring
      vuln classes found auditing the codeacademyprogramming org (leaked
      secrets, unauthenticated admin panels, self-assign-admin bugs,
      SuperAdmin backdoors). Output: one aggregated instructor report.
      **Monetization: SELL** — one-time fee per cohort report ($200-500,
      priced in AZN once real). Highest market-evidence idea from the
      research (score 52); pilot target is Emin's own bootcamp org first.
      **SHIPPED** — https://github.com/Emin-dev/cohort-autopsy — verified
      against real ground truth (4/4 known-vulnerable repos correctly
      flagged, 3/3 known-clean repos correctly clean). Sandbox payment only.
- [ ] **AçıqQapı** (dev-tool / API) — hosted "verify a phone number by
      WhatsApp link tap" endpoint, packaging the OTP-by-link pattern proven
      in qeydiyyat (avoids Meta Business Verification entirely). Other
      developers building booking/fintech-adjacent apps drop it in instead
      of SMS OTP. **Monetization: BUY** — prepaid verification-credit packs
      (e.g. 1,000 verifications for a flat price) rather than recurring
      billing, to keep the MVP's payment plumbing simple.
      **IMPORTANT SCOPE NOTE for whoever builds this next:** do NOT expose
      real WhatsApp Cloud API access tokens client-side (in browser JS) —
      that's a real security anti-pattern (anyone viewing page source could
      steal a customer's token and send messages on their account/bill).
      Do NOT reuse qeydiyyat's actual production WhatsApp credentials either
      - those are live business secrets, not something to bundle into a
      public product. Honest v1 scope: (1) a docs/landing page explaining
      the pattern, (2) an interactive UX simulator with a clearly-labeled
      MOCK WhatsApp step so a prospective customer can evaluate the flow,
      (3) the actual verification-TOKEN generation/expiry/one-time-use
      logic - build and test this part for real, it needs no external
      credentials, (4) a documented server-side integration snippet showing
      how a real customer would wire their OWN Meta app credentials into a
      backend they control. Do not ship a version that pretends real
      WhatsApp messages are being sent when they aren't - that's exactly
      the kind of shortcut RULES.md's "never skip verification" line rules
      out.
- [ ] **A premium puzzle/idle game** (game) — small, polished, genuinely fun
      standalone game (not a CozyNook variant — a different mechanic/theme
      for portfolio diversity), free to try with a soft content cap.
      **Monetization: BUY** — one-time unlock for the full game / removes
      the cap. No ads, no IAP loot-boxes — a single honest purchase.
- [ ] **Instant Portfolio** (creator-tool) — a short guided form (roles,
      projects, links, one photo) that generates a clean, accessible,
      mobile-first static portfolio site instantly, previewable free.
      Reuses Emin's demonstrated landing-page/portfolio-building pattern
      across many repos. **Monetization: BUY** — one-time fee to export/
      download the generated site (or connect a custom domain); the
      generator and preview stay free.
- [ ] **Mood Nook** (social-adjacent) — a calm, cozy, low-pressure "one
      moment a day" photo/mood scrapbook, shareable with a small circle
      (not a public feed — no likes/leaderboard/doomscroll design, matching
      the "never punish the player" ethos from CozyNook). **Monetization:
      RENT** — a small monthly subscription for extended history/storage
      and premium themes; the core daily-entry experience stays free.

---
*When Batch 1 is fully checked off: do fresh market research (RULES.md step
7), and write Batch 2 here with the same category-diversity + monetization-
model discipline.*
