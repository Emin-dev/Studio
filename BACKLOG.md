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

## Batch 3 (fresh research: 6 new angles — client-side privacy utilities,
Azerbaijani freelancer/finance tools, dev utility tools, an unexplored
indie game genre, creator-content tools, Azerbaijani civic/local
calculators. Judged adversarially: 18 candidates researched with real
WebSearch-cited evidence, then each independently judged for market-
evidence strength, hidden-backend-cost risk, and monetization fit. This
round was notably harsher than Batch 1/2 — 0 clean "build" verdicts, only
3 "build_with_changes", 15 "cut". All 3 Azerbaijani-freelancer-finance
candidates and all 3 civic-calculator candidates were cut — either weak
repeat-purchase logic (an invoice generator has no reason to bring anyone
back once their details are filled in once) or no rent/buy/sell hook at
all (a unit converter is a one-and-done free utility, correctly flagged
"ads_only_reject" and rejected outright rather than forced into a
monetization model that doesn't fit). Two "cut" game candidates
(Idle/Incremental Empire Builder, and — with a specific fix applied below
— the Rule-Bending Word-Block Puzzle) and one "cut" dev-tool
(Color-palette/design-token generator) are included below anyway, but only
where the judges' own stated objection has a concrete, honest fix applied,
not just accepted as-is — see each item's REFRAME note.)

- [x] **Postguard** (dev-tool / privacy-utility) — a "before you post this
      photo" privacy kit: strips EXIF/GPS/author metadata from images and
      PDFs, plus a simple in-browser tool to draw redaction boxes over
      faces/license-plates/addresses before sharing a photo. Both features
      are genuinely, provably 100% client-side (confirmed by every real
      competitor's own "no upload, all local" marketing) — no backend, no
      per-request cost. **Monetization: BUY** — free single-file scrub,
      $3.99 one-time to unlock batch/folder processing and combined
      image+PDF passes in one flow. **HONEST TAKE (from the research):**
      market evidence scored low (3/10) — this category is already served
      by well-reviewed FREE tools (Scrambled Exif: 54k+ downloads, 4.04/5;
      Chrome's Metadata Remover: 4.6/5) and every paid comp found was a
      tiny $2.99-$4.99 IAP with no evidence of real volume. Build this
      expecting reputation/portfolio value, not revenue — its one real
      differentiator is bundling metadata-scrub + redact-blur in a single
      flow, which none of the researched free competitors do together.
      **SHIPPED** — https://github.com/Emin-dev/postguard — real binary
      JPEG/EXIF parsing+stripping and PDF /Info+XMP parsing+stripping,
      real destructive canvas redaction. Independently verified past what
      the building agent reported: constructed a fresh synthetic JPEG
      myself, ran it through the live UI, and re-parsed the actual
      downloaded bytes to confirm EXIF was genuinely gone (not just a
      success message); confirmed redacted pixels are destructively
      altered in the real downloaded PNG, not a removable overlay;
      confirmed via full-source grep that no fetch/XHR exists anywhere.
      29/29 Node checks independently re-run. Sandbox payment only.
- [x] **Foresight** (game) — a small-grid (5x5-8x8), fully deterministic
      turn-based tactics game in the vein of Into the Breach: every enemy
      telegraphs its exact next move, so every loss is a solvable planning
      failure, not bad luck. A handful of unit types, a short campaign of
      bite-sized missions (not a huge scope — keep this closer to Quiet
      Tiles' size than a full commercial campaign), permadeath-lite runs,
      all mission/unit/AI data as plain JS objects evaluated per turn.
      **Monetization: BUY** — free first act/one squad, one-time unlock
      for the full mission set + extra squads. Entirely static: deterministic
      AI needs no server to prevent cheating, mission data ships embedded,
      progress in localStorage. **HONEST TAKE:** evidence score was low
      (2/10) — the cited evidence (Into the Breach's $14.99 price point,
      94% positive reviews) is 100% about a critically-acclaimed studio
      with press relationships and Steam's discovery algorithm; none of it
      transfers to an unbranded clone with no storefront, which the
      research explicitly named a "reference-class fallacy." Build this as
      a craft/genre-diversity bet (this catalog has zero grid-tactics
      games so far), not a revenue plan.
      **SHIPPED** — https://github.com/Emin-dev/foresight — real 6x6
      grid-tactics engine (board/units/enemies/turn orchestration are all
      pure functions, zero DOM dependency), 15 missions across 3 islands
      (Reedshore free, Stonemarch + Windkeep paid), 3 player unit types
      (Bulwark blocker, Ram pusher, Striker ranged) and 3 enemy types
      (Crawler, Brute, Spitter — the Spitter was redesigned mid-build to
      respect line-of-sight so a Bulwark can genuinely intercept its shot,
      fixing a real mission-balance bug). Every mission was confirmed
      winnable ahead of shipping by scripted search against the real
      engine (exhaustive for most, 200k-trial randomized search for the
      rest), which caught and fixed two real design bugs: reedshore-1's
      original striker spawn was literally unwinnable, and
      stonemarch-4's only blocker died with no time for backup. Verified
      independently past what the building agent reported: played a live
      mission through the real UI and watched the enemy's telegraphed
      move/attack tiles resolve to the exact outcome shown (not just
      trusted the tests) — highlighted-tile telegraph rendering matched
      exactly, won reedshore-1 via the same scripted sequence the test
      suite uses, then lost it deliberately and confirmed retry-immediately
      preserved the earlier win's saved progress (non-punishing permadeath-
      lite, as designed). Sandbox checkout: declined 4000000000000002, then
      unlocked with a valid Luhn-passing card, confirmed the island lock
      badges disappeared and progression gating switched from
      purchase-gated to mission-sequence-gated exactly as coded. 63/63 Node
      checks independently re-run fresh (board 17, enemies 10, units 18,
      run 7 — including the two full scripted mission playthroughs — and
      checkout 11). Zero console errors and zero failed network requests
      throughout. Sandbox payment only, as with every other product in this
      catalog.
- [x] **Ruleshift** (game) — a Baba-Is-You-style rule-manipulation puzzle:
      push word-blocks around a grid to rewrite the rules of the level
      itself. Rule-parser is pure JS grid/string logic, levels ship as
      embedded JSON, progress/undo in localStorage. **Monetization: BUY**
      — one-time unlock for the full pack. **REFRAME APPLIED (per the
      research's own stated fix, not shipped as originally pitched):** the
      original pitch specified an ambitious 100-150 hand-designed level
      campaign, which the judge flagged as underpricing the real labor/
      quality-bar cost of hand-crafting that much rule-puzzle content
      blind, with no signal the specific rule-set will land with the
      genre's demanding audience. Ship a much smaller pack instead — 20-30
      levels, modest price ($2.99-3.99, matching Quiet Tiles) — and treat
      it explicitly as a genre-craft experiment, not a committed large
      campaign. **HONEST TAKE:** evidence score 3/10; the static/zero-
      backend architecture is genuinely sound (confirmed: payment can ride
      entirely on a third-party checkout link revealing an unlock code,
      no accounts needed), the real risk is puzzle-design quality, not
      infrastructure or monetization shape.
      **SHIPPED** — https://github.com/Emin-dev/ruleshift — a genuine
      rule-parser (`js/rules.js`) that scans the grid every move for
      aligned `NOUN IS PROPERTY` triples in both directions and returns
      the live active-rule set, driving both gameplay and the amber
      tile-glow highlight from the same parsed state (verified against
      the actual grid, not trusted cosmetically). Real push resolution
      (`js/push.js`) with a genre-accurate STOP/PUSH/overlap model: a
      first pass wired every object as always-draggable, which caused a
      real bug caught during interactive testing (pushing into a WIN tile
      shoved it away instead of letting the player reach it) — fixed by
      making only PUSH-ruled objects (and word-tiles) chain-push, with
      everything else simply overlapped, which is what lets a player walk
      onto a WIN or SINK tile as intended. 24 hand-designed levels
      (free tier: 1-9), every one independently re-verified solvable by a
      from-scratch brute-force BFS solver (`scripts/verify-levels.mjs`,
      re-run cold from the raw level data) — this caught two genuinely
      unwinnable levels (a "swap which noun IS PLAYER" puzzle with no
      initial controllable entity at all) before shipping, both redesigned
      and re-verified. 59/59 Node checks across grid/rules/push/win/
      checkout independently re-run. Interactive verification played
      through multiple levels live: confirmed the STOP rule breaking
      mid-level removes the tile glow and unblocks the path in the exact
      move the solver predicted, confirmed overlap-not-push behavior on a
      plain ROCK object, tested undo/redo, and ran the sandbox checkout's
      decline/expired-card/success paths, all matching Foresight's
      established pattern. Zero console errors throughout. Sandbox
      payment only.
- [x] **Captionist** (creator-tool) — animated, styled burned-in captions
      for short-form video (word-by-word highlight, custom fonts/colors),
      the single most-evidenced concept in this round's research: a direct
      competitor (Submagic) went from $0 to $1M ARR in 3 months (2023) and
      $8M ARR by 2025, fully bootstrapped. **HONEST SCOPE NOTE — read
      before building, same discipline as AçıqQapı/Repetitor/Qonuşma:** the
      part people actually pay for — turning raw video AUDIO into
      timestamped text — genuinely needs a real speech-to-text API call
      (AssemblyAI/Deepgram/Whisper, real per-minute cost) and cannot be
      faked client-side. Split honestly: **Tier 1 (real, free)** — user
      provides already-timed captions (paste an .srt/.vtt file, or type
      lines with timestamps manually) and gets a REAL, fully-functional
      animated caption renderer (word-by-word highlight timing, font/color
      styling, canvas-based preview + exportable overlay) — genuinely
      useful on its own for anyone who already has a transcript (many
      creators do, from their editing software). **Tier 2 (DEMO only)** —
      "auto-generate captions straight from my video's audio" is NOT
      buildable here; ship it as a clearly-labeled sample (a few pre-
      transcribed demo videos showing the full pipeline's output) plus a
      documented, illustrative-only server integration snippet showing how
      a real customer would wire a real ASR API into this repo's real
      renderer. **Monetization: BUY** — free basic styling, one-time
      unlock for premium animated styles + watermark-free export (matches
      what's actually real and buildable, not the subscription model the
      market comps use, since we don't have the recurring ASR cost that
      justifies a subscription). **HONEST TAKE:** despite the highest
      evidence score in this round (6/10), the research is explicit that
      Submagic's actual moat was 2023-era distribution timing (a 10,000+
      TikTok-affiliate referral engine), not the now-commoditized caption
      tech itself — over a dozen funded competitors (CapCut, VEED, Kapwing,
      Descript, ZapCap...) now do this. Build the real Tier 1 for its own
      genuine utility value; do not expect to replicate Submagic's growth.
      **SHIPPED** — https://github.com/Emin-dev/captionist — Tier 1
      (real): .srt/.vtt parsing, length-weighted per-word timing, a real
      canvas renderer verified via both pixel-hash sampling across 10
      timeline points (10 distinct hashes — proves genuine per-frame
      animation) and direct calls to `getFrameState()` confirming the
      exact correct word is active at each millisecond-precision
      timestamp queried. Tier 2 (demo): 3 sample transcripts run through
      the same real renderer, gated behind an unmistakable "SAMPLE — AUDIO
      WAS NOT ANALYZED" banner. 57/57 Node checks independently re-run.
      Sandbox payment only.
- [x] **Palette Forge** (dev-tool) — takes a base color or reference image
      and generates real, algorithmic color palettes (complementary/
      analogous/triadic/tetradic via real color-theory math, WCAG
      contrast-checked) and exports them as CSS custom properties,
      Tailwind config, or Style Dictionary JSON. **REFRAME APPLIED:** the
      original pitch's monetizable hook (unlimited saved palettes, private
      profiles, cloud history) needs accounts + a database — exactly the
      "Phase 2 hides a paid server" pattern this catalog has cut before.
      Ship the radically narrower version the research itself named as the
      only honest path: **NO accounts, NO cloud save, NO saved-palette
      history** — purely static, one-shot generation and export.
      **Monetization: BUY** — free single-format copy (CSS vars only),
      one-time ~$6-9 unlock for the full multi-format export bundle
      (Tailwind config + Style Dictionary JSON + more palette harmonies).
      **HONEST TAKE:** the research explicitly called this "better used as
      a filler item than a flagship" given how saturated and well-served
      this category already is by excellent free tools (Coolors, Adobe
      Color) — build it expecting minimal revenue, purely for the
      dev-tool/creator-tool category slot and because it's genuinely
      zero-backend and quick to build well.
      **SHIPPED** — https://github.com/Emin-dev/palette-forge — real HSL
      color-wheel math for all 5 harmonies (complementary 180°, analogous
      ±30°, triadic 120°/240°, tetradic 90°/180°/270°, monochromatic
      lightness ramp), the real WCAG 2.x relative-luminance formula (not
      approximated), and real canvas-based dominant-color extraction using
      saturation-weighted HSL-bucket voting. 70/70 Node checks across 6
      test files. **Two real bugs found during this build, both fixed
      before shipping, not just noted:** (1) the image-extraction
      vibrancy-weighting formula initially let a large low-saturation gray
      region numerically outvote a smaller, genuinely vibrant color
      cluster — fixed by squaring the saturation term so achromatic pixels
      are penalized hard, re-verified with synthetic pixel-array tests;
      (2) a real interactive-testing-only bug (the building-and-verifying
      pass was done by the same session here, so this was caught before
      ship rather than after): the export-format unlock tabs tracked a
      `data-locked` attribute but never actually removed the hardcoded lock
      icon `<span>` on purchase, so Tailwind/Style Dictionary tabs stayed
      visually locked forever even after a successful sandbox payment —
      fixed by making `updateExportTabsLockState()` add/remove the lock
      span to match real unlock state, then re-verified end-to-end (fresh
      reload → locked tabs open buy modal → expired-card correctly
      rejected → decline test card correctly declines → valid card
      unlocks → lock icons genuinely disappear). Independently
      cross-checked the WCAG math by hand outside the app (black/white
      exactly 21:1; `#767676` on white ~4.54:1; a from-scratch
      hand-computed luminance calc for `#0000EE` matched the app's live
      output to 9 decimal places) and independently re-derived a real
      synthetic PNG (orange #ff8c00) to confirm the real canvas-extraction
      code path recovers the exact encoded color, not a mock. Zero console
      errors, zero non-local network requests (confirmed via the network
      panel — every request was either a same-origin static file or a
      local `data:`/`blob:` URL). Mobile viewport screenshot confirmed
      clean layout. Sandbox payment only. **This is the last item in Batch
      3 — the batch is now fully shipped (5/5).**

**Honest take on this batch overall:** the weakest evidence base of any
batch so far — 15 of 18 researched candidates were recommended for
outright cut, and every item kept above required an explicit reframe away
from its original pitch to stay honestly zero-backend or to fix a weak
monetization story. Two real category gaps this round: no defensible
B2B-service candidate and no defensible social-adjacent candidate survived
adversarial judging (the closest B2B-shaped candidates — API mocking
client, bulk social-media data-deletion tool — were cut specifically for
needing a live backend + auth + billing from day one, which is a different,
higher-commitment business than anything else in this catalog, not a
"Phase 2" trim). Rather than force a weak pick into those slots just to
hit a round number, Batch 3 leans dev-tool/game/creator-tool this round;
Batch 4's research should specifically target sourcing real evidence for a
B2B-service or social-adjacent concept. All five items above are honestly
low-expectation (evidence scores 2-6 out of 10) — build these for
craft/portfolio/category-diversity value, exactly as Batch 2 was, not as
a revenue bet.

---

## Batch 4 (IN PROGRESS, partial — see honest note below)

A third dedicated research round (5 angles, all specifically targeting
B2B-service or social-adjacent concepts: freelancer/agency tools,
content-ops tools, low-pressure social, niche-community coordination,
vertical B2B) produced 14 candidates, adversarially judged. This round was
the harshest yet: 12 of 14 recommended outright cut, and the 2
"build_with_changes" survivors both needed real reframing to avoid the
same "Phase 2 hides a paid server" trap this catalog has cut for three
rounds running. One survived reframing as a genuinely static, honestly-
buildable item:

- [ ] **Quote Kit** (b2b, single-vertical pricing calculator) — an
      embeddable, single-vertical (e.g. web design or video production)
      pricing calculator: a few questions in, an instant estimate range
      out, plus a branded one-page proposal PDF generated entirely
      client-side. **Monetization: BUY** — sold as a one-time code
      deliverable/template kit to freelancers/agencies (not a hosted
      rented service), matching the honest reframe below.
      **REFRAME APPLIED:** the original pitch proposed "rent" (recurring
      SaaS), but a purely static embed has no natural enforcement
      mechanism for recurring billing — nothing stops a customer from
      embedding the JS once and self-hosting it forever, which would have
      quietly required a license-check backend to make "rent" real (a
      smaller version of the same backend-creeps-in trap). Reframed to a
      one-time-purchase template/kit sale instead, which needs zero
      backend and fits honestly.
      **HONEST TAKE:** evidence score 3/10 — the closest thing to
      confirming demand is a single vendor-blog conversion-rate claim (not
      independently verifiable) and a list of funded horizontal
      calculator-builder competitors (uCalc, Calconic, ConvertCalculator,
      involve.me, and others) who already serve this need at the
      horizontal layer, several with working free tiers — which cuts
      against a new entrant more than for one. Build this as a genre/
      category-diversity bet with low revenue expectations, not on the
      strength of the cited evidence.

**Honest note on this batch's incompleteness:** three consecutive research
rounds (Batch 2, Batch 3, and this one) have now specifically tried and
failed to surface a strong B2B-service or social-adjacent candidate that
doesn't require a live backend+auth+billing from day one with evidence
strong enough to justify it. The one candidate with genuinely the
strongest evidence this round (a testimonial/social-proof collector,
evidence score 6/10, real named companies with disclosed revenue) was cut
anyway because its own honest infra assessment required a database, video
object storage, and multi-tenant auth from day one — not a hidden "Phase
2," but stated up front — which is exactly the pattern this catalog
exists to avoid. Rather than keep forcing weak B2B/social picks to fill a
round number, **Batch 4 stays intentionally partial (1 item) for now**;
the remaining 4 slots should draw from categories with a better track
record in this catalog (games, dev-tools, creator-tools) via a fresh
research pass, or Batch 4 can be filled out incrementally as strong ideas
surface, rather than on a fixed schedule. This is also a real signal worth
naming plainly: the zero/thin-backend, no-account, static-first
constraint that keeps every other Studio product honest may be
structurally at odds with what makes B2B SaaS and social products
valuable in the first place — the studio-platform AI-generator initiative
(a separate, explicitly backend-having project) may end up being the
better outlet for B2B/social ambition than trying to force it into this
catalog's static-only mold.

---
*When Batch 4 needs more items: do fresh market research (RULES.md step
7) for games/dev-tools/creator-tools, or revisit B2B/social if a genuinely
new angle emerges — don't force another weak pick just to hit 5.*
