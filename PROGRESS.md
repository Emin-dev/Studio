# Studio — Progress Log

One entry per loop iteration. Newest first. Tracks real status honestly —
see the ledger at the bottom for shipped/monetization-ready/live counts
(never a fabricated revenue number).

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

- **Products shipped:** 5 (Cohort Autopsy, AçıqQapı, Quiet Tiles, Instant Portfolio, Mood Nook) — Batch 1 complete
- **Monetization-ready (sandbox/test mode wired):** 5
- **Awaiting real payment setup (needs the user):** 5
- **Live, real revenue:** $0 / 0 AZN — 0 / 10,000 AZN monthly target

---

## 2026-07-03 — Studio hub created

Set up the hub repo, RULES.md (hard no-ads / rent-buy-sell constraint +
the financial stop-and-ask boundary), and BACKLOG.md (Batch 1: 5
category-diverse products drawing on the creative-synthesis research already
done this session). Building Batch 1 now.
