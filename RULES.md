# Studio — Standing Rules

This is the hub for an autonomous build loop that ships many small products
(apps, games, portfolio tools, dev-tools, B2B services) continuously, each
its own GitHub repo, each linked from this hub's index. Read this file first,
every session, before building anything.

## The hard constraint (non-negotiable, no exceptions)

**No ads. Ever. Not in any product, not on this hub, not as a "just to cover
costs" fallback.** Every product's monetization must be one of exactly three
models:

- **RENT** — a subscription or time-limited access (e.g. $X/month for
  continued use, extra storage, ongoing service).
- **BUY** — a one-time purchase (e.g. pay once to unlock the full
  game/export/report/API credits).
- **SELL** — a one-time sale of a discrete digital good or service (e.g. a
  per-cohort security report, a generated portfolio site, a licensed asset).

If a product idea's only realistic monetization is advertising, cut it or
redesign it — do not ship it with ads as a stopgap.

## The financial boundary (stop and ask)

I will build every product up to and including the payment UI (pricing page,
"Buy"/"Subscribe" button, checkout flow wired to test/sandbox mode). I will
**not**, on my own:
- Create a real Stripe/Gumroad/LemonSqueezy/payment-provider account (needs
  the user's bank details, business registration, tax ID — I don't have
  these and shouldn't act like I could).
- Flip any product from sandbox/test mode to live real-money charging.
- Set prices that commit to a real contract with a real customer.
- Sign any terms of service or business agreement.

When a product is ready to go live financially, I mark it clearly in
`PROGRESS.md` under "Awaiting real payment setup" and move on to the next
thing — I do not block the whole loop waiting for that human step.

## Honest framing of the goal

The user's target is 10,000 AZN/month in real revenue. **Writing more code
does not create that by itself** — it requires real customers choosing to
pay, which requires distribution, marketing, and someone actually wanting
the thing enough to hand over money. I cannot fabricate that by shipping
faster. What I *can* do:
- Prioritize ideas with the strongest real market evidence (see each batch's
  research notes) over pure novelty.
- Ship enough distinct, genuinely testable products that real signal has a
  chance to emerge (which ones get used, which get ignored).
- Wire real payment mechanisms so that when something does land, converting
  interest into revenue is a one-step flip, not a rebuild.
- Track this honestly in `PROGRESS.md` — shipped count, monetization-ready
  count, and (once the user sets up real payment accounts) actual revenue —
  never a fabricated number.

## Cadence (honest version of "nonstop, every hour, 5 at a time")

Every product shipped must be **real and verified** — booted in preview,
checked for console errors, core interactions actually tested — before it's
linked from the hub. I will not sacrifice working software to hit a fixed
quota. In practice: aim to work through as much of the current batch as can
be genuinely verified in one loop iteration; if that's 5, ship 5; if
verifying properly only allows for fewer in the time available, ship fewer
rather than ship broken ones. Never skip verification to hit a number.

## Product structure

Every product is its **own repo** (`Emin-dev/<name>`), following the same
proven pattern as CozyDeveloper/CozyNook where it fits: vanilla JS ES
modules, zero dependencies, no build step, PWA where it makes sense
(manifest + service worker + icons), deployed to GitHub Pages. Not every
product needs to be a game — portfolio tools, dev-tools/APIs, and B2B
services should use whatever's genuinely the right shape (a static tool, a
small hosted API, a downloadable generator — matched to what the idea
actually needs).

Every product gets:
- A row in this hub's `index.html` (name, one-line pitch, category, link,
  monetization model, status).
- A `README.md` in its own repo explaining what it is and how it's monetized.

## Accessibility & quality bar (carried over from CozyDeveloper/CozyNook)

Every product should still meet a baseline: mobile-first, no dark patterns
(this now also explicitly includes ad-based monetization — see above), clean
dependency-free code where the product type allows it, and no punishing UX
(no fake scarcity, no guilt-based re-engagement, no manipulative
notifications) even in service of monetization.

## Diversity requirement

Batches in `BACKLOG.md` should span categories — games, portfolio/creator
tools, social-adjacent apps, dev-tools/APIs, B2B services — not repeated
variations on one theme. When a batch empties, do fresh market research
(same rigor as the research that seeded the first batches — real search,
real sources, skeptical about hype) before writing the next batch.

## The loop contract

1. Take the next unbuilt item(s) from the current batch in `BACKLOG.md`.
2. Build it as its own repo, following the Product structure above.
3. Verify it for real (preview, console errors, core interactions) before
   calling it done.
4. Deploy (push to `main` → GitHub Pages, same as every other project this
   session).
5. Add its row to this hub's `index.html`, commit + push the hub too.
6. Log the iteration in `PROGRESS.md` (what shipped, monetization model,
   status — sandboxed / awaiting real payment setup / anything learned).
7. When the current batch is fully built: do fresh market research, write
   a new diverse batch of 5 into `BACKLOG.md`, and continue.
8. **Stop and ask** before: setting up any real payment/business account,
   flipping anything to live real-money charging, renaming/deleting a
   shipped product, or anything else hard to reverse. Otherwise — keep
   going without asking, that's the point of the loop.
