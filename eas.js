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
let gridBtnTgl = document.querySelector('#gridBtn').value;
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
    if(gridBtnTgl == "ON"){
        const pixelsNode = document.querySelectorAll('.pixel');
        pixelsNode.forEach(item => item.classList.add('border'));
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
    pixelsNode.forEach(item => item.style.backgroundColor = 'White');
}

// Toggle grid Button
const GRID_LABEL = document.querySelector('#gridLabel');
GRID_LABEL.textContent = `${gridBtnTgl}`;

function toggleGrid () {
    const pixelsNode = document.querySelectorAll('.pixel');
    if(gridBtnTgl == "ON"){
        pixelsNode.forEach(item => item.classList.remove('border'));
        gridBtnTgl = "OFF";
        GRID_LABEL.textContent = `${gridBtnTgl}`;
    } 
    else if(gridBtnTgl == "OFF"){
        pixelsNode.forEach(item => item.classList.add('border'));
        gridBtnTgl = "ON";
        GRID_LABEL.textContent = `${gridBtnTgl}`;
    }
}
// Toggle rainbow button
let rbwBtnTgl = document.querySelector('#rainbow').value;
const RAINBOW_LABEL = document.querySelector('#rainbowLabel');
RAINBOW_LABEL.textContent = `${rbwBtnTgl}`;

function colorRandom () {
    let rdmColor = Math.floor(Math.random()*16777215).toString(16);
    color = "#" + rdmColor;
}

function toggleRbw () {
    const PIXELS_NODE = document.querySelectorAll('.pixel');
    colorRandom();
    if (rbwBtnTgl == "OFF") {
        rbwBtnTgl = "ON";
        PIXELS_NODE.forEach(item => {
            item.addEventListener('mouseover', colorRandom);
        });    
    } else {
        rbwBtnTgl = "OFF";
        PIXELS_NODE.forEach(item => {
            item.removeEventListener('mouseover', colorRandom);
        });
        color = document.querySelector('#color').value;
    }  
    RAINBOW_LABEL.textContent = `${rbwBtnTgl}`;
}