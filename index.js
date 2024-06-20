

const thumbnailsContainer = document.getElementById('thumbnails-container');
const featureDiv = document.getElementById('feature-div');

const colorCode = {
    red: ['#EB1C24', '#88001A', '#FE3A60'],
    green: ['#D6FE00', '#6EFE00', '#00C438'],
    blue: ['#3FB0CC', '#3F96CC', '#3E70CB', '#1928FE', '#00A8F2']
};


// Create color divs based on colorCode
for (const color in colorCode) {
    colorCode[color].forEach((shade, i, arr) => {
        const thumb = document.createElement('div');
        thumb.className = `thumbnail ${color}`;
        thumb.style.backgroundColor = shade;
        thumb.innerHTML = `${i + 1} / ${arr.length} - ${color}`
        thumb.dataset.color = color;
        thumb.addEventListener('click', () => {
            featureDiv.style.backgroundColor = shade;
            featureDiv.innerHTML = `${i + 1} / ${arr.length} - ${color}`;
        });

        thumbnailsContainer.appendChild(thumb);
    });
}

// display div based on color filters
function displayDivs(filter) {
    const allThumbnails = document.querySelectorAll('.thumbnail');
    allThumbnails.forEach(thumb => {
        thumb.style.display = (filter === 'all' || thumb.dataset.color === filter) ? 'block' : 'none';
    });

    if (filter !== 'all') {
        const firstVisible = document.querySelector(`.thumbnail.${filter}`);
        if (firstVisible) {
            featureDiv.style.backgroundColor = firstVisible.style.backgroundColor;
            featureDiv.innerHTML = ` ${filter}`;
        }
    } else {
        featureDiv.style.backgroundColor = '';
    }
}

document.querySelectorAll('.filter-button').forEach((button, i) => {
    button.addEventListener('click', (e) => {
        const color = e.target.dataset.color;
        displayDivs(color);
    });
});

document.getElementById('color-select').addEventListener('change', (e) => {
    const color = e.target.value;
    displayDivs(color);
});

// Initially display all divs
displayDivs('all');
