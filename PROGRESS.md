# Studio — Progress Log

One entry per loop iteration. Newest first. Tracks real status honestly —
see the ledger at the bottom for shipped/monetization-ready/live counts
(never a fabricated revenue number).

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

- **Products shipped:** 1 (Cohort Autopsy)
- **Monetization-ready (sandbox/test mode wired):** 1
- **Awaiting real payment setup (needs the user):** 1
- **Live, real revenue:** $0 / 0 AZN — 0 / 10,000 AZN monthly target

---

## 2026-07-03 — Studio hub created

Set up the hub repo, RULES.md (hard no-ads / rent-buy-sell constraint +
the financial stop-and-ask boundary), and BACKLOG.md (Batch 1: 5
category-diverse products drawing on the creative-synthesis research already
done this session). Building Batch 1 now.
