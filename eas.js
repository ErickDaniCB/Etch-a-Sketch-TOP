
// Function that fill the canvas with the given amount (16 by now) of square divs 
function fillCanvas(number) {

    for (let j = 1; j <= number; j++) {
        
        for (let i = 1; i <= number; i++) {
            
            let div = document.createElement('div');
            div.classList.add('dot');
            
            const canvas = document.getElementById('canvas');
            canvas.appendChild(div);
        }
    }
}

fillCanvas(16);