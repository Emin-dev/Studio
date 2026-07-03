// Renders the Studio catalog straight from products.js. No dependencies,
// no build step — matches every other product in this catalog.

import { PRODUCTS } from './products.js';
import { groupByCategory } from './js/categories.js';
import { loadActivity, recordView, getSuggestions } from './js/activity.js';

const STATUS_LABELS = {
    sandbox: '🧪 test mode',
    'awaiting-payment-setup': '⏳ awaiting payment setup',
    live: '✅ live'
};

const MONETIZATION_LABELS = {
    rent: 'Rent',
    buy: 'Buy',
    sell: 'Sell'
};

function buildCard(product, template) {
    const card = template.content.cloneNode(true);
    const link = card.querySelector('.product-card');
    link.href = product.liveUrl || product.url;
    link.addEventListener('click', () => recordView(product));

    card.querySelector('.product-emoji').textContent = product.emoji || '📦';
    card.querySelector('.product-name').textContent = product.name;
    card.querySelector('.product-category').textContent = product.category;
    card.querySelector('.product-pitch').textContent = product.pitch;
    card.querySelector('.product-price').textContent =
        `${MONETIZATION_LABELS[product.monetization] || product.monetization} · ${product.price || ''}`;
    card.querySelector('.product-status').textContent =
        STATUS_LABELS[product.status] || product.status;

    return card;
}

function renderSuggestions(template) {
    const section = document.getElementById('suggestions');
    const list = document.getElementById('suggestions-list');
    const activity = loadActivity();
    const suggestions = getSuggestions(PRODUCTS, activity, 3);

    if (suggestions.length === 0) {
        section.hidden = true;
        return;
    }

    section.hidden = false;
    document.getElementById('suggestions-note').textContent = activity.length
        ? 'Based on what you’ve viewed on this device — not AI, just a simple local tally.'
        : 'A few starting picks across different categories.';

    list.innerHTML = '';
    suggestions.forEach((product) => list.appendChild(buildCard(product, template)));
}

function renderFilters(groups) {
    const nav = document.getElementById('category-filters');
    nav.innerHTML = '';

    const allBtn = document.createElement('button');
    allBtn.type = 'button';
    allBtn.className = 'filter-pill is-active';
    allBtn.textContent = 'All';
    allBtn.dataset.filter = 'all';
    nav.appendChild(allBtn);

    groups.forEach(({ key, label }) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'filter-pill';
        btn.textContent = label;
        btn.dataset.filter = key;
        nav.appendChild(btn);
    });

    nav.addEventListener('click', (e) => {
        const btn = e.target.closest('.filter-pill');
        if (!btn) return;

        nav.querySelectorAll('.filter-pill').forEach((b) => b.classList.remove('is-active'));
        btn.classList.add('is-active');

        const filter = btn.dataset.filter;
        document.querySelectorAll('.category-section').forEach((sectionEl) => {
            sectionEl.hidden = filter !== 'all' && sectionEl.dataset.category !== filter;
        });
    });
}

function renderCatalog() {
    const catalog = document.getElementById('catalog');
    const emptyState = document.getElementById('empty-state');
    const template = document.getElementById('product-card-template');
    const sectionTemplate = document.getElementById('category-section-template');

    if (PRODUCTS.length === 0) {
        emptyState.hidden = false;
        document.getElementById('suggestions').hidden = true;
        return;
    }

    renderSuggestions(template);

    const groups = groupByCategory(PRODUCTS);
    renderFilters(groups);

    groups.forEach(({ key, label, products }) => {
        const section = sectionTemplate.content.cloneNode(true);
        const sectionEl = section.querySelector('.category-section');
        sectionEl.dataset.category = key;
        section.querySelector('.category-heading').textContent = label;
        const grid = section.querySelector('.category-products');
        products.forEach((product) => grid.appendChild(buildCard(product, template)));
        catalog.appendChild(section);
    });
}

renderCatalog();
