# Studio — Progress Log

## 2026-07-03 — Batch 2, item 3: Contexto AZ shipped

**Shipped:** a daily Azerbaijani semantic word-guessing game —
https://github.com/Emin-dev/contexto-az, live at
https://emin-dev.github.io/contexto-az/. One secret word per calendar day
(deterministic, same for every player), unlimited untimed guesses, each
guess told only its closeness rank to the secret word. Season 1 ships with
15 hand-curated secret words, each with a ranked relatedness list of
150-223 entries. **Monetization: BUY** — $3 one-time "support the game"
purchase unlocking the past-days archive (today's puzzle is always free;
explicitly not framed as "remove ads" since this product has no ads).

**The honest risk flagged in BACKLOG.md for this item — embedding/
similarity quality for a low-resource language — was real, and this
iteration is mostly about how it was handled, not just that the game got
built.** There is no live ML/embedding API available in this environment,
so the relatedness lists were hand-curated with AI assistance and
WebSearch cross-referencing against real Azerbaijani sources during the
build. That alone was judged insufficient for a dataset shipping to real
users, so a **second, independent, adversarial audit pass** was run
afterward — a dedicated multi-agent workflow with one agent per secret
word, each agent using WebSearch against Azerbaijani dictionaries (Obastan
izahlı lüğət, azleks.az orthography dictionary, az.wiktionary.org,
az.wikipedia.org) to hunt for concrete errors, explicitly instructed to
flag only real, defensible problems and not debatable judgment calls.

**Result: this caught real errors that the build-time WebSearch pass had
missed.** Across the 15 word lists (~2,800 entries total), the audit found
and fixed **37 concrete problems**: misspellings against standard
Azerbaijani orthography (e.g. "sükunet" → "sükunət", "megapolis" →
"meqapolis", "vahşi pişik" → "vəhşi pişik"), fabricated/non-existent words
that don't appear in any real dictionary ("mənzil-villa", "koloğıc",
"sancaqlı", "siçanovlayan"), foreign-language words mistaken for
Azerbaijani ("hovli" is Uzbek, not Azerbaijani; "çobankopek" is Turkish),
grammatically-inflected forms used where the citation form was expected
("planktonu" → "plankton"), and a handful of real Azerbaijani words with
the wrong meaning placed too close to the top rank (e.g. "zaval" means
"calamity/disaster," not anything house-related, but was ranked 45th-
closest to "ev"/house — removed from that list; the same word "zaval"
correctly means "decline/sunset" and legitimately belongs in the "günəş"/
sun word's list, where the audit confirmed it as fine — a good example of
why fixes were scoped per-word rather than as blanket global corrections).
One word ("alma") got a broken placeholder result on the first audit
attempt (notes field just said "test"); re-ran a fresh audit for that one
word alone rather than trusting a non-answer, which found 2 more real
errors ("alma pdöresi" — not a real word, → "alma pürəsi"; "şirket" —
Turkish spelling, → "şirkət"). All fixes were applied via a script
(`scripts/apply-audit-fixes.mjs`) that verifies no duplicates or
out-of-bounds list lengths result from each edit, then all 4 Node test
files were re-run and still pass (106 checks). The in-app "Necə işləyir?"
panel and README still honestly disclose that this data is AI-assisted
and audited but **not** validated by a native Azerbaijani speaker — the
audit reduced the error rate, it did not eliminate the underlying
disclosed risk, and that caveat stays.

**Verified for real at both layers, not just trusted the building agent's
report:** all 4 Node test files independently re-run by me (106 checks,
not just read from the agent's summary). Real interactive browser pass:
played through multiple guesses across different closeness bands, solved
the daily puzzle, checked the "Necə işləyir?" honesty panel renders the
full caveat text, opened the archive/support menu (correctly locked pre-
purchase), ran a full sandbox checkout (both the decline test card and a
successful purchase, confirming the archive unlocks afterward and shows
past days without spoiling today's word), confirmed zero console errors
throughout, and specifically tested Azerbaijani-aware input normalization
(case-insensitive including "ə" characters, whitespace-trimmed). The
global `[hidden] { display: none !important; }` CSS guard (this
product's version of the Quiet Tiles lesson, applied proactively from the
start) held correctly with zero repeat bugs.

**Two real bugs found and fixed during my own verification, beyond what
the building agent reported:**
1. `preview_click`'s synthetic clicks were unreliable for this page in
   this session (reported "successfully clicked" but the button's actual
   click handler never ran, confirmed by checking `.hidden`/DOM state
   directly afterward) — worked around by driving real click/submit
   events via `preview_eval` (`element.click()` / `dispatchEvent`), which
   does exercise the real code path. **This is a tooling/environment note,
   not a product bug** — logged here so a future iteration doesn't waste
   time re-diagnosing the same preview-tool flakiness from scratch.
2. `checkout.js`'s `validateCard` never checked whether a well-formed
   card's expiry date was already in the past (every other Studio
   product's checkout does this, via a fixed reference date for the
   Workflow-script environment's sake — a constraint that only applies to
   orchestration scripts, not real shipped browser code, so this product's
   fix correctly uses a real `new Date()` instead of hardcoding a
   reference date that would silently go stale). Added the check, added a
   Node test for it, bumped `sw.js`'s `CACHE_VERSION` so real users'
   service workers actually fetch the fix instead of serving a
   permanently-stale cached copy (a real, if narrowly-scoped, instance of
   the same caching-masks-the-fix class of issue as the Quiet Tiles
   stylesheet-caching lesson, this time hitting a service worker's
   cache-first JS module instead of a `<link>` tag).

**Status:** sandbox payment mode only — awaiting the user to set up a real
payment provider. Added to the hub.

**Next:** Batch 2 items 4-5 (Repetitor, Qonuşma) — both honest-scope
builds needing a documented, not-faked backend integration point.

---


One entry per loop iteration. Newest first. Tracks real status honestly —
see the ledger at the bottom for shipped/monetization-ready/live counts
(never a fabricated revenue number).

---

## 2026-07-03 — Batch 2, item 2: Scriver-i-şkola shipped

**Shipped** — https://github.com/Emin-dev/scriver-i-skola, live at
https://emin-dev.github.io/scriver-i-skola/. A word-crafting puzzle with a
light roguelike deckbuilding loop (draw a hand of letter tiles, craft the
best real word to hit a room's score target, choose an upgrade between
rooms — add/remove a tile or gain a scoring charm). Real Scrabble letter
point values, seeded/deterministic runs (never `Math.random()` for
gameplay — a mulberry32 PRNG, unit-tested for reproducibility). Free
rooms 1-2, $4.99 one-time unlocks the full 5-room run.

**Real dictionary, not a placeholder:** generated from this machine's
system dictionary (`/usr/share/dict/words`, Webster's Second
International), filtered to 3-7 letter lowercase words — 49,643 real
words to start.

**A genuine, non-trivial bug was found DURING interactive browser
testing, not by the Node tests** (which all passed on real logic but
couldn't have caught this without playing the actual dictionary content):
the raw system dictionary only contains headwords, so common regular
plurals a player would obviously expect were missing — "warns" was
rejected as "not a real word" even though "warn" validated fine. Root
cause: Webster's Second (1934) mostly lists base forms, not every
inflection. Fix: safely expanded the dictionary by deriving regular
plurals (+s / +es for words ending s/x/z/ch/sh / y→ies for consonant+y)
from the existing real headwords — 49,643 → 75,651 words. Deliberately
did **not** attempt to generate verb tenses (-ed/-ing): irregular verbs
and consonant-doubling rules can produce genuinely wrong words if derived
blindly (e.g. "run"+"ed" would wrongly yield "runed" instead of "ran"),
so that was correctly left alone rather than risk shipping fabricated
non-words. This is exactly the kind of gap a real interactive playthrough
catches that unit tests on the *scoring/run logic* alone cannot — the
tests were testing the machinery, not the actual word-list content.

**Verified at both layers:**
- 7 Node test files (rng, deck, scoring, charms, run, save, checkout,
  dictionary) — all passing, including a dictionary content-integrity
  test that samples 5,000+ entries against the documented filter.
- A real, extensive interactive browser pass: played 5 different real
  words across multiple rounds and restarts (WORN, TICKLE, GORE, HELMS,
  SAUNA), hand-verified the scoring math matched every single time,
  confirmed the pass path (deterministic upgrade-choice screen) and the
  non-punishing fail path (run ends cleanly, best score persists across
  reloads) both work, confirmed a charm (Rare Find) correctly contributes
  zero bonus on a word with no qualifying letters (consistent, not just
  "does nothing"), and ran a real sandbox payment through to completion
  (unlocks correctly, transitions to the next screen). Zero console
  errors across the entire session.
- Proactively applied the Quiet Tiles `[hidden]`/`display` CSS lesson
  again from the start — held correctly through every view/modal
  transition tested, no repeat bug.

Deployment hit the same first-ever-deploy Pages failure pattern as VPAT
Draft; the disable+re-enable fix alone was sufficient this time (no
extra follow-up commit needed) — so that fix's reliability seems to vary,
not a fixed two-step recipe.

Added to the hub (7 products now live total).

**Next:** Batch 2 items 3-4 — Repetitor and Qonuşma, both honest-scope
"docs + mocked demo + real testable logic + documented backend
integration snippet" builds like AçıqQapı, or Contexto AZ if a
reasonable approach to its flagged embedding-quality risk is found first.

---

## 2026-07-03 — Batch 2, item 1: VPAT Draft shipped

**Fresh market research for Batch 2** (5 new angles: web accessibility
auditing, browser extensions, Turkic-language tools, casual word/trivia
games, document-generation tools — none repeating Batch 1's research)
judged 8 candidates adversarially. Honest finding, worth repeating: **3
candidates were cut specifically for hiding a real backend/paid-API cost
behind a "Phase 2" aside** while marketing a free static layer as the
whole product. The 5 kept (VPAT Draft, Contexto AZ, Scriver-i-şkola,
Repetitor, Qonuşma) each name their real infrastructure cost honestly —
two (Repetitor, Qonuşma) got the same honest-scope treatment that worked
for AçıqQapı, written into BACKLOG.md before building.

**Shipped VPAT Draft** — https://github.com/Emin-dev/vpat-draft, live at
https://emin-dev.github.io/vpat-draft/. Built this one myself directly
(not delegated) since it was a single item, not a parallel batch. A guided
wizard covering all 55 real WCAG 2.2 Level A/AA success criteria (the
actual real dataset, each with an accurate plain-English explanation —
this content IS the product, not a placeholder), producing a formatted
VPAT-style document. Free watermarked preview; $49 one-time sandboxed
export.

**Verified at both layers, proactively applying the Quiet Tiles lesson
instead of rediscovering it:**
- Node tests (report/checkout/state, all passing) cover: XSS payloads in
  product info and remarks never render unescaped; all 55 criteria appear
  in the generated report; Luhn/expiry/CVC payment validation; progress
  tracking. One real test bug (not a product bug) caught and fixed along
  the way — a regex miscounted "Not Evaluated" occurrences because the
  report's summary chips also contain that label text once, on top of the
  per-row occurrences.
- A real browser pass: walked the full 6-step wizard (product info → 4
  WCAG principle sections → preview/export), entered a
  `<script>alert(1)</script>` payload live in a remarks field and
  confirmed it renders as escaped text in the actual iframe DOM (not just
  the Node test), ran a real sandbox payment through to completion
  (watermark removed, export button updates, modal auto-closes), zero
  console errors throughout.
- Applied the Quiet Tiles CSS lesson **proactively this time**: every
  class that sets an explicit `display` (`.view`, `.step`,
  `.modal-backdrop`) got a matching `[hidden]` override written into the
  CSS from the start, with a comment explaining why. Confirmed via
  `getComputedStyle` at every step transition that it actually holds — no
  repeat of the earlier bug.

**Deployment hit the same GitHub Pages "errored"-adjacent failure as
Studio's own redeploy** (2 consecutive "Deployment failed, try again
later" failures on a brand-new repo's very first Pages build). The
documented disable+re-enable fix alone wasn't quite enough this time — it
took disable+re-enable **plus** one fresh commit-triggered rebuild
afterward to actually succeed. Noting this refinement: the fix may need a
follow-up push, not just the reset alone, especially on a repo's first-ever
deploy.

Added to the hub (6 products now live total).

**Next:** Batch 2 item 2 — Contexto, amma Azərbaycanca (needs real
validation of embedding/similarity quality for Azerbaijani before shipping,
per its own honest risk flag).

---

## 2026-07-03 — Batch 1 complete: 4 products built in parallel + verified

**Shipped all 4 remaining Batch 1 items in one workflow**, each as an
independent parallel build (separate repo, separate agent, no shared
state), then personally verified all 4 via real browser interaction —
closing a gap every building agent honestly flagged: they each avoided the
shared preview-server system (correctly, to prevent port races between
parallel builds) and so could only verify via Node unit tests + code
review, not actual click-through UI testing.

- **AçıqQapı** — https://github.com/Emin-dev/acikqapi,
  https://emin-dev.github.io/acikqapi/. Honest scope followed exactly (the
  BACKLOG.md note attached before building): docs + a clearly-labeled mock
  WhatsApp simulator + a real Web-Crypto-based verification-token engine
  (Node-tested: expiry, one-time-use, TTL boundary) + a documented
  server-side integration snippet. No real WhatsApp credentials anywhere.
  **My own browser verification:** ran the full flow live — generated a
  real 256-bit token, simulated delivery, tapped the mock "Verify" button,
  confirmed the status correctly updated to "Verified: +994501234567".

- **Quiet Tiles** — https://github.com/Emin-dev/quiet-tiles,
  https://emin-dev.github.io/quiet-tiles/. A calm Flow-style path puzzle,
  70 levels each independently confirmed solvable by a real solver script
  the building agent wrote (and had to fix a real backtracking bug in,
  caught via a hand-verified test case, before the solver could correctly
  confirm solvability).
  **Real bug I found + fixed during my own browser verification:** both
  `.modal` and `.view` CSS classes declared an explicit `display` property,
  which beats the `hidden` HTML attribute at equal specificity — so the
  level-select screen and the checkout modal were simultaneously visible on
  load, and switching between the level list and the game view didn't
  actually hide the previous screen. This is exactly the class of bug a
  Node-only verification approach cannot catch (it's a live-rendering
  interaction), which is why it slipped through the agent's own testing.
  Fixed with explicit `.modal[hidden]`/`.view[hidden]` overrides, confirmed
  fixed, then went on to draw a real path via simulated pointer events and
  confirmed progress tracking updates correctly and the path renders
  correctly on screen.

- **Instant Portfolio** — https://github.com/Emin-dev/instant-portfolio,
  https://emin-dev.github.io/instant-portfolio/. A 4-step guided form
  generating a portfolio site, live preview, sandboxed export checkout.
  **My own browser verification:** filled the actual form including a
  `<script>alert(1)</script> & "Test"` payload in the name field — the
  generated live preview rendered it as literal, escaped text (visible as
  the string itself), no script executed, no console error — real,
  browser-level confirmation the XSS protection the agent unit-tested in
  Node also holds in the actual rendered DOM. Then ran the full sandbox
  checkout with the documented Luhn-valid test card through to "You're all
  set" / download unlocked.

- **Mood Nook** — https://github.com/Emin-dev/mood-nook,
  https://emin-dev.github.io/mood-nook/. A private daily mood scrapbook,
  no feed/likes/streak-shaming.
  **My own browser verification:** selected a mood tag, typed a real note,
  saved it, confirmed it persisted correctly to localStorage AND rendered
  live in the "Your scrapbook" timeline underneath, with the exact
  no-punishment copy intact ("Private by default. Stored only on this
  device. No feed, no likes, no streaks to break.").

All 4 pushed to `main`, GitHub Pages enabled and polled to `built`, live
URLs fetched and confirmed serving the right content. Added all 4 to the
Studio hub's `products.js` and verified the hub renders all 5 cards with
correct links. All still `sandbox` — no real payment provider connected.

**Lesson for future batches:** a subagent avoiding the shared preview
system for good reasons (avoiding port races) still leaves a real
verification gap — actual rendered-DOM/interaction bugs (CSS specificity
vs. the `hidden` attribute, in this case) don't show up in Node-level
tests or code review alone. The orchestrator should do a real interactive
browser pass on every shipped product before considering a batch done, not
just trust each agent's own (honestly-caveated) verification summary.

**Next:** Batch 1 is fully shipped. Per RULES.md step 7 — do fresh, real
market research before writing Batch 2.

**Deployment note for future iterations:** the hub's own redeploy hit a
genuine GitHub Pages platform issue after this update — `gh api
repos/Emin-dev/Studio/pages` reported `"status": "errored"` (not just a
flaky workflow run; the Pages *site* itself was in a broken state), and 4
consecutive retry-via-new-commit attempts all failed with "Deployment
failed, try again later." The fix: disable and re-enable Pages entirely
(`gh api -X DELETE repos/<owner>/<repo>/pages` then re-POST the same
source config) — this resets the deployment pipeline without touching any
content, and worked immediately (status went `errored` → `building` →
`built`). If a future deploy seems stuck after 2-3 retries, check
`gh api repos/<owner>/<repo>/pages --jq .status` for `"errored"` first,
and use this reset rather than continuing to retry commits.

---

## 2026-07-03 — Batch 1, item 1: Cohort Autopsy shipped

**Shipped:** the full B2B security-scanner MVP —
https://github.com/Emin-dev/cohort-autopsy, live at
https://emin-dev.github.io/cohort-autopsy/. Scans a GitHub org/repo list for
6 real vulnerability classes (leaked Google OAuth secrets, AWS keys,
plaintext SMTP passwords, hardcoded Identity `CreateAsync` passwords,
unauthenticated admin-creation endpoints, self-assign-admin registration
bugs), prioritizing config/secret files and auth/admin controllers within
the GitHub API's unauthenticated rate-limit budget. Free preview (first 3
flagged repos) + sandboxed "buy full report" checkout.

**Verified against real ground truth, not synthetic test cases:** ran it
against the actual codeacademyprogramming repos audited earlier this
session. Result: 4/4 known-vulnerable repos correctly flagged, 3/3
known-clean coursework repos correctly showed zero false positives.

**Two real bugs found and fixed during verification:**
1. The file-fetch budget (rate-limit guard) discarded secret-bearing
   `appsettings.json` files that happened to sort past the cutoff in the
   raw tree order — the scanner silently never looked at the exact files
   it exists to check. Fixed by prioritizing config/secret files first,
   then auth/admin-related controllers, then everything else.
2. Two detection regexes were built on wrong assumptions about how the
   vulnerabilities actually appear in code — rewritten after reading the
   real flagged source: Identity's `CreateAsync(user, password)` takes the
   password as a positional argument, not a named `Password = "..."`
   property; and ASP.NET Core actions are unauthenticated by *default*
   without `[Authorize]`, so an explicit `[AllowAnonymous]` isn't the only
   shape of "unprotected admin endpoint."

**Status:** sandbox payment mode only — awaiting the user to set up a real
payment provider before this can charge real money. Added to the hub.

**Next:** Batch 1 item 2 (AçıqQapı — WhatsApp trust-layer API).

---

## Ledger (updated every iteration — real numbers only)

- **Products shipped:** 8 (Cohort Autopsy, AçıqQapı, Quiet Tiles, Instant Portfolio, Mood Nook, VPAT Draft, Scriver-i-şkola, Contexto AZ) — Batch 1 complete, Batch 2 in progress (3/5)
- **Monetization-ready (sandbox/test mode wired):** 8
- **Awaiting real payment setup (needs the user):** 8
- **Live, real revenue:** $0 / 0 AZN — 0 / 10,000 AZN monthly target

---

## 2026-07-03 — Studio hub created

Set up the hub repo, RULES.md (hard no-ads / rent-buy-sell constraint +
the financial stop-and-ask boundary), and BACKLOG.md (Batch 1: 5
category-diverse products drawing on the creative-synthesis research already
done this session). Building Batch 1 now.
