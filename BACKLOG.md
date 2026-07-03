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
- [x] **AçıqQapı** (dev-tool / API) — hosted "verify a phone number by
      WhatsApp link tap" endpoint, packaging the OTP-by-link pattern proven
      in qeydiyyat (avoids Meta Business Verification entirely).
      **Monetization: BUY** — prepaid verification-credit packs.
      **SHIPPED** — https://github.com/Emin-dev/acikqapi — honest v1 scope
      followed exactly (docs + labeled mock simulator + real crypto token
      engine with Node-tested expiry/one-time-use + server-side integration
      snippet). No real WhatsApp credentials anywhere. Verified end-to-end
      in a real browser: generate token → simulated delivery → tap →
      status correctly shows "Verified: +994...". Sandbox payment only.
- [x] **Quiet Tiles** (game) — a calm, untimed Flow-style path-connection
      puzzle, deliberately different genre from CozyNook/CozyDeveloper.
      **Monetization: BUY** — one-time unlock for the full 70-level pack.
      **SHIPPED** — https://github.com/Emin-dev/quiet-tiles — 70 levels,
      each independently verified solvable by a real solver script.
      **Real bug found + fixed during my own browser verification** (the
      building agent could only verify by code review): both `.modal` and
      `.view` classes set an explicit `display` property, which beat the
      `hidden` attribute at equal CSS specificity — the level list and
      checkout modal were visible simultaneously on load, and switching
      views didn't hide the previous one. Fixed with explicit `[hidden]`
      overrides; re-verified a real path-drawing interaction via simulated
      pointer events (progress tracked 6/25 → 9/25 tiles correctly).
- [x] **Instant Portfolio** (creator-tool) — a short guided form generating
      a clean, accessible, mobile-first static portfolio site instantly.
      **Monetization: BUY** — one-time fee to export/download.
      **SHIPPED** — https://github.com/Emin-dev/instant-portfolio — verified
      end-to-end in a real browser: 4-step form → live preview (tested with
      a `<script>alert(1)</script>` payload in the name field — rendered as
      literal escaped text, no execution, confirming the XSS protection
      works in the actual rendered DOM, not just in the agent's Node test)
      → sandbox checkout with Luhn-validated test cards → success →
      download unlocked.
- [x] **Mood Nook** (social-adjacent) — a calm, private "one moment a day"
      mood scrapbook. No public feed, no likes, no streak-shaming.
      **Monetization: RENT** — monthly subscription for extended history.
      **SHIPPED** — https://github.com/Emin-dev/mood-nook — verified
      end-to-end in a real browser: selected a mood tag, saved a note,
      confirmed it persisted to localStorage AND rendered live in the
      "Your scrapbook" timeline with the correct copy ("Private by default.
      Stored only on this device. No feed, no likes, no streaks to break.").

**Batch 1 complete — all 5 items shipped, verified (including real
interactive browser testing beyond what the building agents could do
themselves), and live.** See PROGRESS.md for the full log. Next: fresh
market research per RULES.md step 7, then Batch 2.

---
*When Batch 1 is fully checked off: do fresh market research (RULES.md step
7), and write Batch 2 here with the same category-diversity + monetization-
model discipline.*
