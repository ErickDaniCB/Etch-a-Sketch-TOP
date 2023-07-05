const canvas = document.getElementById('canvas');
const clear = document.getElementById('clear');

// Function that fill the canvas with the given amount (only 16 by now) of square divs.
function fillCanvas(number) {

    
    for (let j = 1; j <= number; j++) {
        
        for (let i = 1; i <= number; i++) {

            let div = document.createElement('div');
            div.classList.add('dot');
            canvas.appendChild(div);
            div.addEventListener('mouseover', () => div.classList.add('colored') );
        }
    }
}

fillCanvas(16);

let colored = document.querySelectorAll('.colored');
function clearAll() {
    colored.classList.remove('colored');
}
clear.addEventListener('click', clearAll);