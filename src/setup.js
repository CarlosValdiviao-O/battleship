import { createBoard } from "./domStuff";
import { addChildElement } from "./functions";

const container = document.getElementById('setup');

function runSetup () {
    const left = addChildElement(container, 'div', '.left');
    const board = addChildElement(left, 'div', '#placement-board');
    let placementBoard = createBoard(board, false);

    const right = addChildElement(container, 'div', '.right');
    for (let i = 5; i > 1; i--) {
        let div = addChildElement(right, 'div', '.ship-container');
        let p = addChildElement(div, 'p', 'ships-remaining');
        p.textContent = 6 - i;
        let ship = addChildElement(div, 'div', '.ship');
        for (let j = 0; j < i; j++) {
            let cell = addChildElement(ship, 'div', '.cell');
        }

    }

}

export { runSetup }

