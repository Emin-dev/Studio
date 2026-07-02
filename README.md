# Studio 🏬

A growing catalog of small, honest products, built by an autonomous loop.

▶️ **Browse:** https://emin-dev.github.io/Studio/

## The one hard rule

**No ads. Ever.** Every product here is monetized exactly one of three ways:

- **Rent** — a subscription or time-limited access.
- **Buy** — a one-time purchase.
- **Sell** — a one-time sale of a discrete digital good or service.

See `RULES.md` for the full standing rules, including the financial
boundary (real payment accounts require the human owner — the loop never
sets those up or flips a product to live real-money charging on its own).

## What's here

- **`index.html` / `products.js` / `style.css` / `main.js`** — the hub
  itself: a data-driven catalog page. Add a product by appending an entry
  to `products.js`.
- **`RULES.md`** — standing rules and the autonomous-loop contract.
- **`BACKLOG.md`** — the current batch of products being built.
- **`PROGRESS.md`** — running log + an honest ledger (shipped / sandboxed /
  awaiting-real-payment-setup / live revenue — never a fabricated number).

Every listed product is its own repo, following the same pattern used
throughout this catalog: vanilla JS, zero dependencies, no build step,
deployed to GitHub Pages.

## Run locally

```bash
npx serve .
# or
python3 -m http.server 8080
```

Made by Emin.
