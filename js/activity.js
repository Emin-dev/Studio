// activity.js — simple, honest, client-side "suggested for you" logic.
// No AI, no backend, no network calls: this just counts which category a
// visitor has clicked into most on THIS device (localStorage only) and
// suggests other unviewed products from that category. If there's no
// activity yet, it falls back to one product per category so a first-time
// visitor still sees a real, non-empty, non-repetitive starter set.

const STORAGE_KEY = 'studio_activity_v1';
const MAX_ACTIVITY_ENTRIES = 200;

/** Pure: count views per primaryCategory from a list of {name, category, ts} entries. */
export function countByCategory(activity) {
  const counts = {};
  for (const entry of activity) {
    if (!entry || !entry.category) continue;
    counts[entry.category] = (counts[entry.category] || 0) + 1;
  }
  return counts;
}

/** Pure: the category with the most views, or null if there's no activity. */
export function getTopCategory(activity) {
  const counts = countByCategory(activity);
  const keys = Object.keys(counts);
  if (keys.length === 0) return null;
  return keys.reduce((best, key) => (counts[key] > counts[best] ? key : best), keys[0]);
}

/**
 * Pure: build a suggestion list from `products` given `activity`.
 * - With activity: unviewed products from the most-viewed category first,
 *   then unviewed products from other categories, up to `limit`.
 * - With no activity: one product per category (a diverse starter set),
 *   up to `limit`.
 * Never suggests a product the visitor has already viewed.
 */
export function getSuggestions(products, activity, limit = 3) {
  const viewedNames = new Set(activity.map((e) => e && e.name).filter(Boolean));
  const unviewed = products.filter((p) => !viewedNames.has(p.name));
  const topCategory = getTopCategory(activity);

  if (!topCategory) {
    const seen = new Set();
    const starter = [];
    for (const p of unviewed) {
      if (seen.has(p.primaryCategory)) continue;
      seen.add(p.primaryCategory);
      starter.push(p);
      if (starter.length >= limit) break;
    }
    return starter;
  }

  const fromTop = unviewed.filter((p) => p.primaryCategory === topCategory);
  const fromRest = unviewed.filter((p) => p.primaryCategory !== topCategory);
  return [...fromTop, ...fromRest].slice(0, limit);
}

/** Reads the raw activity log from localStorage. Never throws. */
export function loadActivity() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

/** Appends a view of `product` to the activity log. Never throws. */
export function recordView(product) {
  try {
    const activity = loadActivity();
    activity.push({ name: product.name, category: product.primaryCategory, ts: Date.now() });
    const trimmed = activity.slice(-MAX_ACTIVITY_ENTRIES);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(trimmed));
  } catch {
    // localStorage unavailable (private browsing, quota, etc.) — suggestions
    // just fall back to the no-activity starter set next load. Not fatal.
  }
}
