import { createColorDivs } from './colorDivs.js';
import { setupFilterButtonListeners } from './eventListeners.js';
import { displayDivs } from './displayDivs.js';

const colorCode = {
    red: ['#EB1C24', '#88001A', '#FE3A60'],
    green: ['#D6FE00', '#6EFE00', '#00C438'],
    blue: ['#3FB0CC', '#3F96CC', '#3E70CB', '#1928FE', '#00A8F2']
};

function init() {
    createColorDivs(colorCode);
    setupFilterButtonListeners();
    displayDivs('all');
}

init();
