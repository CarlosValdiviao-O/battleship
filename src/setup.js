import { createBoard } from "./domStuff";
import { addChildElement } from "./functions";
import { gameboard } from "./gameboard";
import { ship } from "./ships";

const container = document.getElementById('setup');
let domBoard;
let placementBoard;
let index;
let length;
let orientation = 'down';
let remaining = 0;
let dragItem;
let drag = false;
let kill = false;
let ps = [];

function runSetup () {
    const left = addChildElement(container, 'div', '.left');
    const board = addChildElement(left, 'div', '#placement-board');
    domBoard = createBoard(board, false);
    domBoard.addDropEvents();
    placementBoard = gameboard();

    const right = addChildElement(container, 'div', '.right');
    for (let i = 5; i > 1; i--) {
        let div = addChildElement(right, 'div', '.ship-container');
        let p = addChildElement(div, 'p', '.ships-remaining');
        p.textContent = 6 - i;
        ps.push(p);
        let ship = addChildElement(div, 'div', '.ship');
        ship.draggable = true;
        ship.addEventListener('dragstart', () => {
            index = 5 - i;
            length = i;
            dragItem = ship;
            drag = true;
            kill = false;
        });
        ship.addEventListener('dragend', () => drag = false);
        for (let j = 0; j < i; j++) {
            let cell = addChildElement(ship, 'div', '.cell');
        }
    }
}
//checkpoint
function placeShip (x, y) {
    placementBoard.placeShip(x, y, orientation, length);
    domBoard.updateShips(placementBoard);
    if(kill){
        if (placementBoard.ships.length > remaining) {
            domBoard.createShipDiv(x, y, orientation, length);      
        } 
        else{
            ps[index].textContent = +ps[index].textContent + 1; 
            remaining--;
        } 
        dragItem.remove();
    }
    else if (+ps[index].textContent == 0){
        dragItem.draggable = false;
    }

    if (placementBoard.ships.length > remaining) {
        remaining++;
        ps[index].textContent = +ps[index].textContent - 1;
        domBoard.createShipDiv(x, y, orientation, length);
    }

    kill = false;
    
}

function checkDrag () {
    return drag;
}

function toggleDrag () {
    drag == true ? drag = false: drag = true;
}

function saveVariables(ind, len, dra, xKill, yKill) {
    index = ind;
    length = len;
    kill = true;
    dragItem = dra;
    placementBoard.killShip(xKill, yKill);
    domBoard.updateShips(placementBoard);   
}

export { runSetup, placeShip, checkDrag, toggleDrag, saveVariables }

