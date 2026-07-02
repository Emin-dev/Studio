// Renders the Studio catalog straight from products.js. No dependencies,
// no build step — matches every other product in this catalog.

import { PRODUCTS } from './products.js';

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

function renderCatalog() {
    const catalog = document.getElementById('catalog');
    const emptyState = document.getElementById('empty-state');
    const template = document.getElementById('product-card-template');

    if (PRODUCTS.length === 0) {
        emptyState.hidden = false;
        return;
    }

    PRODUCTS.forEach((product) => {
        const card = template.content.cloneNode(true);
        const link = card.querySelector('.product-card');
        link.href = product.liveUrl || product.url;

        card.querySelector('.product-emoji').textContent = product.emoji || '📦';
        card.querySelector('.product-name').textContent = product.name;
        card.querySelector('.product-category').textContent = product.category;
        card.querySelector('.product-pitch').textContent = product.pitch;
        card.querySelector('.product-price').textContent =
            `${MONETIZATION_LABELS[product.monetization] || product.monetization} · ${product.price || ''}`;
        card.querySelector('.product-status').textContent =
            STATUS_LABELS[product.status] || product.status;

        catalog.appendChild(card);
    });
}

renderCatalog();
