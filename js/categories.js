// categories.js — the fixed set of primaryCategory buckets used to group
// and filter the hub's catalog. Kept as a small ordered list (not derived
// from products.js) so section order on the page is stable and intentional.

export const CATEGORIES = [
  { key: 'games', label: 'Games' },
  { key: 'dev-tools', label: 'Dev Tools' },
  { key: 'creator-tools', label: 'Creator Tools' },
  { key: 'b2b', label: 'B2B Services' },
  { key: 'wellness', label: 'Wellness & Social' },
];

export function categoryLabel(key) {
  const found = CATEGORIES.find((c) => c.key === key);
  return found ? found.label : key;
}

/**
 * Groups products by primaryCategory, preserving CATEGORIES order and each
 * category's internal product order. Categories with zero products are
 * omitted. Returns an array of { key, label, products }.
 */
export function groupByCategory(products) {
  return CATEGORIES
    .map(({ key, label }) => ({
      key,
      label,
      products: products.filter((p) => p.primaryCategory === key),
    }))
    .filter((group) => group.products.length > 0);
}
