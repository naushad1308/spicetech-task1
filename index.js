const colorCode = {
    red: ['#EB1C24', '#88001A', '#FE3A60'],
    green: ['#D6FE00', '#6EFE00', '#00C438'],
    blue: ['#3FB0CC', '#3F96CC', '#3E70CB', '#1928FE', '#00A8F2']
};

const thumbnailsContainer = document.getElementById('thumbnails-container');
const featureDiv = document.getElementById('feature-div');

// Function to create color divs
function createColorDivs(colorCode) {
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

// Function to update feature div
function updateFeatureDiv(shade, index, total, color) {
    featureDiv.style.backgroundColor = shade;
    featureDiv.innerHTML = `${index} / ${total} - ${color}`;
}

// Function to display divs based on color filters
function displayDivs(filter) {
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
        featureDiv.style.backgroundColor = '';
        featureDiv.innerHTML = '';
    }
}

// Function to set up filter button event listeners
function setupFilterButtonListeners() {
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

// Initialize the application
function init() {
    createColorDivs(colorCode);
    setupFilterButtonListeners();
    displayDivs('all');
}

// Run the initialization
init();
