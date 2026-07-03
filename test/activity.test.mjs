// Real tests for the pure suggestion logic in js/activity.js (recordView/
// loadActivity touch localStorage and aren't unit-tested here — they're
// covered by the interactive browser pass instead).
import assert from 'node:assert/strict';
import { countByCategory, getTopCategory, getSuggestions } from '../js/activity.js';

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

const PRODUCTS = [
    { name: 'A', primaryCategory: 'games' },
    { name: 'B', primaryCategory: 'games' },
    { name: 'C', primaryCategory: 'dev-tools' },
    { name: 'D', primaryCategory: 'dev-tools' },
    { name: 'E', primaryCategory: 'creator-tools' },
    { name: 'F', primaryCategory: 'b2b' },
    { name: 'G', primaryCategory: 'wellness' },
];

check('countByCategory tallies views per category', () => {
    const activity = [
        { name: 'A', category: 'games' },
        { name: 'A', category: 'games' },
        { name: 'C', category: 'dev-tools' },
    ];
    assert.deepEqual(countByCategory(activity), { games: 2, 'dev-tools': 1 });
});

check('countByCategory handles empty activity', () => {
    assert.deepEqual(countByCategory([]), {});
});

check('countByCategory ignores malformed entries without crashing', () => {
    assert.deepEqual(countByCategory([null, {}, { name: 'X' }, { category: 'games' }]), { games: 1 });
});

check('getTopCategory returns the most-viewed category', () => {
    const activity = [
        { name: 'A', category: 'games' },
        { name: 'C', category: 'dev-tools' },
        { name: 'D', category: 'dev-tools' },
    ];
    assert.equal(getTopCategory(activity), 'dev-tools');
});

check('getTopCategory returns null for no activity', () => {
    assert.equal(getTopCategory([]), null);
});

check('getSuggestions falls back to one-per-category starter set with no activity', () => {
    const suggestions = getSuggestions(PRODUCTS, [], 3);
    assert.equal(suggestions.length, 3);
    const categories = suggestions.map((p) => p.primaryCategory);
    assert.equal(new Set(categories).size, categories.length, 'starter set should not repeat a category');
});

check('getSuggestions prioritizes the most-viewed category, excluding already-viewed products', () => {
    const activity = [
        { name: 'A', category: 'games' },
        { name: 'A', category: 'games' },
    ];
    const suggestions = getSuggestions(PRODUCTS, activity, 2);
    assert.equal(suggestions[0].name, 'B', 'B is the only unviewed game, should be suggested first');
    assert.ok(!suggestions.some((p) => p.name === 'A'), 'must never re-suggest an already-viewed product');
});

check('getSuggestions fills remaining slots from other categories once the top category is exhausted', () => {
    const activity = [
        { name: 'A', category: 'games' },
        { name: 'B', category: 'games' },
    ];
    const suggestions = getSuggestions(PRODUCTS, activity, 3);
    assert.ok(!suggestions.some((p) => p.primaryCategory === 'games'), 'no games left unviewed');
    assert.equal(suggestions.length, 3);
});

check('getSuggestions returns an empty array when every product has been viewed', () => {
    const activity = PRODUCTS.map((p) => ({ name: p.name, category: p.primaryCategory }));
    assert.deepEqual(getSuggestions(PRODUCTS, activity, 3), []);
});

check('getSuggestions handles an empty products list without crashing', () => {
    assert.deepEqual(getSuggestions([], [], 3), []);
});

console.log(`\n${passed} check(s) passed.`);
if (process.exitCode) {
    console.error('\nSOME CHECKS FAILED');
    process.exit(1);
} else {
    console.log('\nALL CHECKS PASSED');
}
