const featureDiv = document.getElementById('feature-div');

export function updateFeatureDiv(shade, index, total, color) {
    featureDiv.style.backgroundColor = shade;
    featureDiv.innerHTML = `${index} / ${total} - ${color}`;
}
