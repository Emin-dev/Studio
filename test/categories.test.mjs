import assert from 'node:assert/strict';
import { CATEGORIES, categoryLabel, groupByCategory } from '../js/categories.js';
import { PRODUCTS } from '../products.js';

let passed = 0;
function check(name, fn) {
    try {
        fn();
        passed++;
        console.log(`PASS: ${name}`);
    } catch (err) {
        console.error(`FAIL: ${name}`);
        console.error(err);
        process.exitCode = 1;
    }
}

check('every shipped product has a primaryCategory that is one of the fixed CATEGORIES', () => {
    const validKeys = new Set(CATEGORIES.map((c) => c.key));
    for (const p of PRODUCTS) {
        assert.ok(validKeys.has(p.primaryCategory), `${p.name} has an unrecognized primaryCategory "${p.primaryCategory}"`);
    }
});

check('categoryLabel returns the human label for a known key', () => {
    assert.equal(categoryLabel('games'), 'Games');
});

check('categoryLabel falls back to the raw key for an unknown category', () => {
    assert.equal(categoryLabel('mystery'), 'mystery');
});

check('groupByCategory preserves CATEGORIES order and groups all products with none dropped', () => {
    const groups = groupByCategory(PRODUCTS);
    const totalGrouped = groups.reduce((sum, g) => sum + g.products.length, 0);
    assert.equal(totalGrouped, PRODUCTS.length, 'every product must appear in exactly one group');

    const orderedKeys = CATEGORIES.map((c) => c.key).filter((key) => groups.some((g) => g.key === key));
    assert.deepEqual(groups.map((g) => g.key), orderedKeys);
});

check('groupByCategory omits categories with zero products', () => {
    const groups = groupByCategory([{ name: 'X', primaryCategory: 'games' }]);
    assert.equal(groups.length, 1);
    assert.equal(groups[0].key, 'games');
});

check('groupByCategory handles an empty product list', () => {
    assert.deepEqual(groupByCategory([]), []);
});

console.log(`\n${passed} check(s) passed.`);
if (process.exitCode) {
    console.error('\nSOME CHECKS FAILED');
    process.exit(1);
} else {
    console.log('\nALL CHECKS PASSED');
}
