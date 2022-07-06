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

function updateMessage () {
    (message.classList.contains('p1')) ? message.textContent =  `Player Two's Turn`:
        message.textContent = `Player One's Turn`;
    message.classList.toggle('p1');
}

export { runHud, updateMessage }