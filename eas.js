// Container
const container = document.querySelector('#container');
const canvas = document.createElement('div');
canvas.classList.add('canvas');
canvas.style.width = `${container.offsetWidth - 20}px`;
canvas.style.height = `${container.offsetWidth - 20}px`;

//Canvas default color
let color = document.querySelector('#color').value;

//Canvas color changer
function changeColor(newColor){
    color = newColor;
}

// Canvas filling
let pixelNum = 16;
fillCanvas(pixelNum);

function fillCanvas(fill){
    
    container.appendChild(canvas);
    let pixelDim = canvas.offsetWidth / fill;
    for (let i = 1; i <= fill ** 2; i++) {
        const pixel = document.createElement('div');
        pixel.style.width = `${pixelDim}px`;
        pixel.style.height = `${pixelDim}px`;
        pixel.classList.add('pixel');
        canvas.appendChild(pixel);
        pixel.addEventListener('mouseover', () => pixel.style.backgroundColor = `${color}`);
    }
}

function emptyCanvas() {
    while (canvas.firstChild) {
       canvas.removeChild(canvas.firstChild) 
    }
}

// Canvas density slider selector/label
const sliderLabel = document.querySelector('#sliderLabel');
sliderLabel.textContent = '16x16';

function changePix (value) {
    pixelNum = value;
    emptyCanvas();
    fillCanvas(value);
    sliderLabel.textContent = `${value}x${value}`;
}

// Restart Button
const restartButton = document.querySelector('#restart');
restartButton.addEventListener('click', restart);

function restart () {
    const pixelsNode = document.querySelectorAll('.pixel');
    pixelsNode.forEach((item) => item.style.backgroundColor = 'White');
}

// Toggle rainbow button
const rainbowToggle = document.querySelector('#rainbow');
rainbowToggle.addEventListener('click', rainbow);
function rainbow(){

}