let pixelNum = 16;

let container = document.querySelector('#container');

function canvasInteraction () {
 
    let canvas = document.createElement('div');
    canvas.classList.add('canvas');
    canvas.style.width = `${container.offsetWidth - 20}px`;
    canvas.style.height = `${container.offsetWidth - 20}px`;
    container.appendChild(canvas);

    let pixelDim = canvas.offsetWidth / pixelNum;

    for (let i = 1; i <= pixelNum ** 2; i++) {
        let pixel = document.createElement('div');
        pixel.style.width = `${pixelDim}px`;
        pixel.style.height = `${pixelDim}px`;
        pixel.classList.add('pixel');
        canvas.appendChild(pixel);
        pixel.addEventListener('mouseover', () => pixel.style.backgroundColor = 'black');
    }

    

}

canvasInteraction();
