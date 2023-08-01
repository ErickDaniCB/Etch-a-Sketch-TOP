// Container
const CONTAINER = document.querySelector('#container');
const CANVAS = document.createElement('div');
CANVAS.classList.add('canvas');
CANVAS.style.width = `${CONTAINER.offsetWidth - 20}px`;
CANVAS.style.height = `${CONTAINER.offsetWidth - 20}px`;

//Canvas default color
let color = document.querySelector('#color').value;

//Canvas color changer
function changeColor(newColor){
    color = newColor;
}

// Canvas filling
let pixelNum = 16;
let gridBtnTgl = document.querySelector('#gridBtn').value;
let rbwBtnTgl = document.querySelector('#rainbow').value;
fillCanvas(pixelNum);

function fillCanvas(fill){
    CONTAINER.appendChild(CANVAS);
    let pixelDim = CANVAS.offsetWidth / fill;   
    for (let i = 1; i <= fill ** 2; i++) {
        const pixel = document.createElement('div');
        pixel.style.width = `${pixelDim}px`;
        pixel.style.height = `${pixelDim}px`;
        pixel.classList.add('pixel');
        CANVAS.appendChild(pixel);
        pixel.addEventListener('mouseover', () => pixel.style.backgroundColor = `${color}`);
    }
    
    const PIXELS_NODE = document.querySelectorAll('.pixel');
    if(gridBtnTgl == "ON"){
        PIXELS_NODE.forEach(item => item.classList.add('border'));
    }
    if (rbwBtnTgl == "ON") {
        PIXELS_NODE.forEach(item => {
            item.addEventListener('mouseover', colorRandom);
        });
    }
}

function emptyCanvas() {
    while (CANVAS.firstChild) {
       CANVAS.removeChild(CANVAS.firstChild) 
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
const RESTART_BUTTON = document.querySelector('#restart');
RESTART_BUTTON.addEventListener('click', restart);

function restart () {
    const PIXELS_NODE = document.querySelectorAll('.pixel');
    PIXELS_NODE.forEach(item => item.style.backgroundColor = 'White');
}

// Toggle grid Button
const GRID_LABEL = document.querySelector('#gridLabel');
GRID_LABEL.textContent = `${gridBtnTgl}`;

function toggleGrid () {
    const PIXELS_NODE = document.querySelectorAll('.pixel');
    if(gridBtnTgl == "ON"){
        PIXELS_NODE.forEach(item => item.classList.remove('border'));
        gridBtnTgl = "OFF";
        GRID_LABEL.textContent = `${gridBtnTgl}`;
    } 
    else if(gridBtnTgl == "OFF"){
        PIXELS_NODE.forEach(item => item.classList.add('border'));
        gridBtnTgl = "ON";
        GRID_LABEL.textContent = `${gridBtnTgl}`;
    }
}
// Toggle rainbow button
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