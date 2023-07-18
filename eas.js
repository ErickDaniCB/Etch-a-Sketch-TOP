// Container
let container = document.querySelector('#container');
let canvas = document.createElement('div');
canvas.classList.add('canvas');
canvas.style.width = `${container.offsetWidth - 20}px`;
canvas.style.height = `${container.offsetWidth - 20}px`;

// Canvas
let pixelNum = 16;
fillCanvas(pixelNum);

function fillCanvas(fill){
    
    container.appendChild(canvas);
    let pixelDim = canvas.offsetWidth / fill;
    for (let i = 1; i <= fill ** 2; i++) {
        let pixel = document.createElement('div');
        pixel.style.width = `${pixelDim}px`;
        pixel.style.height = `${pixelDim}px`;
        pixel.classList.add('pixel');
        canvas.appendChild(pixel);
        pixel.addEventListener('mouseover', () => pixel.classList.add('colored'));
    }
}

function emptyCanvas() {
    while (canvas.firstChild) {
       canvas.removeChild(canvas.firstChild) 
    }
}

// Canvas density slider selector
function changePix (value) {
    pixelNum = value;
    emptyCanvas();
    fillCanvas(value);
}

// Clear All Button
let clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', cleaner);

function cleaner () {
    let pixelsNode = document.querySelectorAll('.pixel');
    pixelsNode.forEach((item) => item.classList.remove('colored'))
}
