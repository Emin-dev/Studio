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
themselves), and live.** See PROGRESS.md for the full log.

## Batch 2 (fresh research: 5 angles not covered in Batch 1 — web accessibility
auditing, browser extensions, Turkic-language tools, casual word/trivia games,
document-generation tools. Judged adversarially; 3 candidates were CUT
specifically for hiding a real backend/paid-API cost behind a "Phase 2" aside
while marketing a free static layer as the whole product — every item kept
below names its real infrastructure cost honestly instead.)

- [x] **VPAT Draft** (dev-tool / B2B service) — a guided, client-side wizard
      walking a solo SaaS founder or agency through drafting a VPAT/ACR
      against real WCAG 2.2 Level A/AA criteria (plain-English questions
      per criterion, conformance-level picker, auto-generated formatted
      document at the end). A drafting *accelerator*, not a compliance
      guarantee or legal audit. **Monetization: BUY** — $49 one-time per
      generated VPAT export. Fully static/client-side, no backend, no
      paid API.
      **SHIPPED** — https://github.com/Emin-dev/vpat-draft — the real WCAG
      2.2 dataset (all 55 Level A/AA success criteria) is the actual
      product content, not placeholders. Verified at both layers: Node
      tests cover XSS-escaping, all-55-criteria presence, and payment
      validation; a real browser pass walked the full 6-step wizard,
      entered a `<script>` payload live and confirmed it renders escaped
      in the actual iframe DOM, and ran a real sandbox payment to
      completion (watermark removed, export unlocked, zero console
      errors). Proactively applied the Quiet Tiles lesson this time —
      every `hidden`-toggled CSS class got its `[hidden]` override written
      from the start, and the fix held on first real-browser test (no
      repeat bug). Sandbox payment only.
- [x] **Contexto, amma Azərbaycanca** (game, Azerbaijani-language-first) —
      a daily semantic-guessing word game in Azerbaijani (guess the secret
      word, get told how semantically close you are). Shareable
      Wordle-style result grid. **Monetization: BUY** — free to play, one-
      time $3 "remove ads/support the game" IAP (note: NO actual ads ever
      run per RULES.md — this is purely a support-the-dev unlock, framed
      honestly as such, never gated content). Fully static: the daily word
      + precomputed similarity rankings ship as a flat JSON file, no
      backend, no per-request AI cost. Real honest risk (flag this, don't
      hide it): embedding/similarity quality for a low-resource language
      needs real validation before shipping — test the actual precomputed
      rankings make sense to a native speaker before calling this done.
      **SHIPPED** — https://github.com/Emin-dev/contexto-az — 15-word
      Season 1, hand-curated relatedness lists (150-223 entries each),
      built with AI + WebSearch cross-referencing against real Azerbaijani
      dictionaries. The flagged risk was taken seriously rather than
      hand-waved: a dedicated adversarial audit workflow (one agent per
      word, WebSearch-verified) ran AFTER the build and found + fixed 37
      concrete errors (misspellings, fabricated words, foreign-language
      words, wrong-meaning words) across ~2,800 total entries. This
      reduced the error rate but did NOT eliminate the underlying risk —
      the in-app "Necə işləyir?" panel still honestly discloses the data
      is AI-assisted/audited but not native-speaker-validated, with a
      GitHub-issues link to report bad rankings. Verified at both layers:
      106 Node test checks (all re-run independently, not just trusted
      from the building agent), plus a real interactive browser pass
      (multiple guesses across closeness bands, full sandbox checkout
      decline+success paths, archive lock/unlock, zero console errors).
      Found and fixed 2 more real bugs during verification: a
      `preview_click` tooling flakiness (worked around via `preview_eval`-
      driven real click/submit events — a tooling note, not a product
      bug) and a genuine gap in the sandbox checkout's expiry validation
      (never checked for already-expired cards). Sandbox payment only.
- [x] **Scriver-i-şkola** (game) — a premium, one-time-purchase word-
      crafting puzzle with a light roguelike deckbuilding loop, themed
      around reopening a village school (matches the Studio cozy house
      style — no combat, no violence framing). **Monetization: BUY** —
      $4.99 one-time. Client-side dictionary-based word validation,
      deterministic seeded runs, localStorage progression — no backend
      needed for v1. Honest self-rating: a modest side-bet ($0-20K), not a
      business plan — build for the craft/portfolio value.
      **SHIPPED** — https://github.com/Emin-dev/scriver-i-skola — real
      Scrabble point values, a real 49,643-word dictionary derived from
      the system dictionary, seeded deterministic runs (unit-tested).
      **Real bug found DURING interactive testing, not before:** the raw
      dictionary only had headwords — common regular plurals a player
      would reasonably expect ("warns") were rejected even though the base
      word ("warn") was valid. Fixed by safely expanding the dictionary
      with derived regular plurals (+s/+es/y-to-ies only — deliberately
      not verb tenses, which need irregular-form/consonant-doubling
      handling that can't be derived safely by blind suffix rules).
      Dictionary grew 49,643 → 75,651 words. Verified extensively in a
      real browser afterward: played 5 different real words across
      several rounds, confirmed scoring math by hand every time, confirmed
      both the pass path (upgrade screen, real deterministic choices) and
      the non-punishing fail path (run ends, best score persists), and ran
      a real sandbox payment to completion. [hidden]/display CSS lesson
      applied proactively again — held correctly throughout.
- [x] **Repetitor** (B2B service / edtech, Azerbaijani-language-first) — a
      WhatsApp-based grading assistant for Azerbaijani private tutors:
      forward a photo of homework, get a structured grade breakdown +
      parent-ready feedback message in Azerbaijani. **Monetization: RENT**
      — $12/mo per tutor for ~100 gradings, pay-as-you-go top-ups beyond.
      **HONEST SCOPE NOTE, same discipline as AçıqQapı — read before
      building:** this concept is explicitly, honestly backend-dependent
      (real WhatsApp Business Cloud API + a real OCR/vision-LLM API call
      per photo + a database for accounts/usage/billing) — do NOT fake
      this or reuse qeydiyyat's real production WhatsApp credentials. Build
      the same honest v1 shape that worked for AçıqQapı: (1) a docs/
      landing page explaining the real value prop, (2) an interactive demo
      with a clearly-labeled MOCK "forward a photo" step (a few pre-loaded
      sample homework images + pre-written mock grade breakdowns, not a
      live vision-model call), (3) the actual grading-RUBRIC/parsing logic
      that doesn't need external APIs (e.g. a structured rubric-scoring
      function given already-extracted text) — build and Node-test this
      part for real, (4) a documented server-side integration snippet
      showing how a real customer would wire WhatsApp Cloud API + a vision
      LLM into a backend they control. The honest take on this research
      batch is explicit: **pilot this with 3-5 real tutors before writing
      more production code** — the whole premise (tutors will pay $12/mo
      and trust an AI grade enough to forward it to a parent) is unverified
      guesswork, not evidenced demand.
      **SHIPPED** — https://github.com/Emin-dev/repetitor — the honest v1
      shape built exactly as specified: landing page states the unproven
      premise plainly near the top, an unmissable "NÜMUNƏ / DEMO — real
      deyil" banner over 5 pre-written sample homeworks, a real Node-tested
      rubric-scoring engine + Azerbaijani parent-feedback generator that
      the demo data is actually computed through live (not decorative), and
      a documented illustrative-only server integration snippet. No real
      WhatsApp/OCR/vision credentials anywhere. Verified independently: all
      39 Node checks re-run myself, real browser pass across multiple
      sample homeworks (each producing a distinct correct score), zero
      console errors, mobile layout confirmed non-overflowing, full sandbox
      checkout tested (decline, expired-card rejection, success). Sandbox
      payment only.
- [x] **Qonuşma** (dev-tool / creator-tool, Azerbaijani-language-first) — an
      Azerbaijani grammar and style checker (suffix agreement, register
      consistency, loanword spelling) — a real, verified gap where neither
      Grammarly nor LanguageTool support the language at all.
      **Monetization: RENT** — free basic spellcheck tier, $4/mo pro tier
      for style + register + suffix-agreement checks. **HONEST SCOPE
      NOTE:** this needs a real (if thin) backend — an LLM API call per
      check requires a server-side proxy to hide the API key and
      rate-limit (an API key can never be embedded in client-side JS, same
      principle as AçıqQapı's WhatsApp-token rule). Build the editor UI +
      the actual prompt/rubric logic (Node-testable), but the live-checking
      feature must either (a) genuinely be wired to a real backend proxy if
      one gets built, or (b) ship as a clearly-labeled DEMO with mocked
      responses plus the same documented server-side integration-snippet
      pattern as AçıqQapı/Repetitor — never silently fake a working checker.
      Real unproven risk to flag, not hide: whether a generic LLM is
      actually good enough at Azerbaijani morphology for this to work.
      **SHIPPED** — https://github.com/Emin-dev/qonusma — Tier 1 (free
      spellcheck) shipped fully real: a real 38,136-word Azerbaijani
      dictionary (derived from the open-source Hunspell dictionary at
      mozillaz/spellchecker, MPL-2.0 — independently confirmed this source
      repo exists, not just cited on faith), real agglutinative
      suffix-stripping, real Levenshtein suggestions — verified directly
      against real typo'd and correctly-inflected Azerbaijani sentences,
      zero false positives. Tier 2 (Pro) ships as an honest, unmistakably
      labeled demo (6 canned samples; pasting free text explicitly warns
      "your text was NOT analyzed" rather than faking a response — checked
      this directly, not just trusted the description). Sandbox payment
      only. **This is the last item in Batch 2 — the batch is now fully
      shipped (5/5).**

**Honest take on this batch (from the research):** weaker breakout
potential than Batch 1 — nobody scored above 55 on market evidence, and
none of these five is a real venture on its own (VPAT Draft improves on a
document that's already free elsewhere; Contexto AZ and Scriver are
self-admitted $0-20K portfolio bets; Qonuşma and Repetitor cap out at
low-five-figures niches by their own evidence). What this batch does well:
real category spread (dev-tool, two AZ-language products, two games) where
every single item names its real infrastructure cost instead of hiding it.
Build these expecting reputation/skill value, not revenue — and pilot
Repetitor with real tutors before investing further in it specifically.

---
*When Batch 2 is fully checked off: do fresh market research (RULES.md step
7), and write Batch 3 here with the same category-diversity + monetization-
model discipline.*
