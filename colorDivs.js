import { updateFeatureDiv } from './featureDiv.js';

const thumbnailsContainer = document.getElementById('thumbnails-container');

export function createColorDivs(colorCode) {
    for (const color in colorCode) {
        colorCode[color].forEach((shade, i, arr) => {
            const thumb = document.createElement('div');
            thumb.className = `thumbnail ${color}`;
            thumb.style.backgroundColor = shade;
            thumb.innerHTML = `${i + 1} / ${arr.length} - ${color}`;
            thumb.dataset.color = color;
            thumb.addEventListener('click', () => updateFeatureDiv(shade, i + 1, arr.length, color));

            thumbnailsContainer.appendChild(thumb);
        });
    }
}
