import { displayDivs } from './displayDivs.js';

export function setupFilterButtonListeners() {
    document.querySelectorAll('.filter-button').forEach(button => {
        button.addEventListener('click', (e) => {
            const color = e.target.dataset.color;
            displayDivs(color);
        });
    });

    document.getElementById('color-select').addEventListener('change', (e) => {
        const color = e.target.value;
        displayDivs(color);
    });
}
