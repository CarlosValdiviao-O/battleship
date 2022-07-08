import { addChildElement } from "./functions";
import { displaySetup } from "./setup"

let container = document.getElementById('hud');

let message;

function runHud() {
    message = addChildElement(container, 'p');
    message.textContent = `Player One's Turn`;
    message.classList.add('p1');
    let restart = addChildElement(container, 'button');
    restart.textContent = 'New Game';
    restart.addEventListener('click', displaySetup)
}

function updateMessage (num) {
    if (num == 1) {
        message.textContent =  `Player Two's Turn`;
        message.classList.remove('p1');
    }
    else {
        message.textContent = `Player One's Turn`;
        message.classList.add('p1');
    }       
}

function displayWinner (num) {
    if (num == 1) {
        message.textContent =  `Player Two has Won the Match!`;
        message.classList.remove('p1');
    }
    else {
        message.textContent = `Player One has Won the Match!`;
        message.classList.add('p1');
    } 
}

export { runHud, updateMessage, displayWinner }