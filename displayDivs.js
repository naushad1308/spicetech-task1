import { updateFeatureDiv } from './featureDiv.js';

export function displayDivs(filter) {
    const allThumbnails = document.querySelectorAll('.thumbnail');
    allThumbnails.forEach(thumb => {
        thumb.style.display = (filter === 'all' || thumb.dataset.color === filter) ? 'block' : 'none';
    });

    if (filter !== 'all') {
        const firstVisible = document.querySelector(`.thumbnail.${filter}`);
        if (firstVisible) {
            updateFeatureDiv(firstVisible.style.backgroundColor, 1, 1, filter);
        }
    } else {
        const featureDiv = document.getElementById('feature-div');
        featureDiv.style.backgroundColor = '';
        featureDiv.innerHTML = '';
    }
}
