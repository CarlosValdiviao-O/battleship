import { createBoard } from "./domStuff";
import { addChildElement } from "./functions";
import { gameboard } from "./gameboard";
import { ship } from "./ships";

const container = document.getElementById('setup');
let board;
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
let domShips = [];

function runSetup () {
    const left = addChildElement(container, 'div', '.left');
    board = addChildElement(left, 'div', '#placement-board');
    domBoard = createBoard(board, false);
    domBoard.addDropEvents();
    placementBoard = gameboard();

    const right = addChildElement(container, 'div', '.right');
    const ships = addChildElement(right, 'div', '#drag-ships');

    for (let i = 5; i > 1; i--) {
        let div = addChildElement(ships, 'div', '.ship-container');
        let p = addChildElement(div, 'p', '.ships-remaining');
        p.textContent = 6 - i;
        p.draggable = false;
        ps.push(p);
        let ship = addChildElement(div, 'div', '.ship');
        domShips.push(ship);
        ship.draggable = true;
        ship.addEventListener('dragstart', () => {
            index = 5 - i;
            length = i;
            dragItem = ship;
            if (+p.textContent > 0) drag = true;
            kill = false;
        });
        ship.addEventListener('dragend', () => drag = false);
        for (let j = 0; j < i; j++) {
            let cell = addChildElement(ship, 'div', '.cell');
        }
    }

    const buttons = addChildElement(right, 'div', '#setting-buttons');

    const random = addChildElement(buttons, 'button');
    random.textContent = 'Random';
    random.addEventListener('click', pickRandom);

    const rotate = addChildElement(buttons, 'button');
    rotate.textContent = 'Rotate';
    rotate.addEventListener('click', rotateShips);
}

function placeShip (x, y) {
    if (placementBoard.ships.length >= 10) return;
    placementBoard.placeShip(x, y, orientation, length);
    domBoard.updateShips(placementBoard);
    if(kill){
        //if (placementBoard.ships.length > remaining) {
        //    domBoard.createShipDiv(x, y, orientation, length);   
        //    remaining++;    
        //    ps[index].textContent = +ps[index].textContent - 1;
        //} 
        dragItem.remove();
    }

    if (placementBoard.ships.length > remaining) {
        remaining++;
        ps[index].textContent = +ps[index].textContent - 1;
        domBoard.createShipDiv(x, y, orientation, length);
    }
    
    +ps[index].textContent == 0 ?
        domShips[index].draggable = false:
        domShips[index].draggable = true;

    kill = false;
    
}

function checkDrag () {
    return drag;
}

function toggleDrag () {
    drag == true ? drag = false: drag = true;
}

function saveVariables(ind, len, dra, x, y) {
    index = ind;
    length = len;
    kill = true;
    dragItem = dra;
    orientation = placementBoard.getShipOrientation(x, y);
    placementBoard.killShip(x, y);
    domBoard.updateShips(placementBoard);  
    ps[index].textContent = +ps[index].textContent + 1; 
    remaining--;
    domShips[index].draggable = true; 
}

function pickRandom () {
    placementBoard = gameboard();
    placementBoard.placeShipsRandomly();
    let ships = Array.from(document.getElementsByClassName('moveable'));
    ships.forEach(ship => ship.remove());
    domBoard.updateShips(placementBoard);
    ps.forEach((p) => p.textContent = 0);
    domShips.forEach((ship) => ship.draggable = false);
    remaining = 10;
    placementBoard.ships.forEach(ship => {
        domBoard.createShipDiv(ship.coordinates[0][0], ship.coordinates[0][1], ship.direction, ship.coordinates.length);
    })
}

function rotateShips() {
    //fix this by looking if domShips are up
    (orientation == 'down') ? orientation = 'right': orientation = 'down';
    domShips.forEach(ship => ship.classList.toggle('rotate'));
}

function solveOutOfBoundaries () {
    if (placementBoard.ships.length < remaining) remaining--;
}

export { runSetup, placeShip, checkDrag, toggleDrag, saveVariables, solveOutOfBoundaries }

