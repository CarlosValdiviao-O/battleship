import { createBoard, showPassingScreen } from "./domStuff";
import { addChildElement } from "./functions";
import { gameboard } from "./gameboard";
import { game, setP1, setP2, pvp, changeMode } from ".";

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
let cancel;
let start;
let random;
let counter = 0;

function runSetup () {
    const left = addChildElement(container, 'div', '.left');
    board = addChildElement(left, 'div', '#placement-board');
    domBoard = createBoard(board, false);
    domBoard.addDropEvents();
    placementBoard = gameboard();
    let instructions = addChildElement(left, 'p', '#instructions');
    instructions.textContent = 'Place your ships on the board by dragging them';

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
            (domShips[0].classList.contains('rotate')) ? orientation = 'right' : orientation = 'down';
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

    random = addChildElement(buttons, 'button', '#random');
    random.textContent = 'Random';
    random.addEventListener('click', pickRandom);

    const rotate = addChildElement(buttons, 'button', '#rotate');
    rotate.textContent = 'Rotate';
    rotate.addEventListener('click', rotateShips);

    const clear = addChildElement(buttons, 'button', '#clear');
    clear.textContent = 'Clear';
    clear.addEventListener('click', clearBoard);

    start = addChildElement(buttons, 'button', '#start');
    start.textContent = 'Start';
    start.addEventListener('click', newGame);

    let mode = addChildElement(buttons, 'button', '#mode');
    mode.textContent = 'Player Vs. Ai';
    mode.addEventListener('click', () => {
        if (pvp) {
            mode.textContent = 'Player Vs. Ai';
            start.textContent = 'Start';
            start.addEventListener('click', newGame);
            start.removeEventListener('click', newPvPGame);
        }
        else {
            mode.textContent = 'Player Vs. Player';
            start.textContent = 'Set P1 Board'; 
            start.removeEventListener('click', newGame);
            start.addEventListener('click', newPvPGame);
        }
            
        changeMode();
        toggleCancel();
    })

    cancel = addChildElement(container, 'button', '.hide');
    cancel.textContent = 'x';
    cancel.id = 'cancel';
    cancel.addEventListener('click', () => container.classList.toggle('hide'));
}

function placeShip (x, y) {
    if (placementBoard.ships.length >= 10) return;
    placementBoard.placeShip(x, y, orientation, length);
    domBoard.updateBoard(placementBoard, false, true);
    if(kill){
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
    domBoard.updateBoard(placementBoard, false, true);  
    ps[index].textContent = +ps[index].textContent + 1; 
    remaining--;
    domShips[index].draggable = true; 
}

function pickRandom () {
    clearBoard();
    placementBoard.placeShipsRandomly();
    random.disabled = true;
    setTimeout(() => {
        domBoard.updateBoard(placementBoard, false, true);
        placementBoard.ships.forEach(ship => {
            domBoard.createShipDiv(ship.coordinates[0][0], ship.coordinates[0][1], ship.direction, ship.coordinates.length);
        });
        ps.forEach((p) => p.textContent = 0);
        random.disabled = false;
    }, 500);
    domShips.forEach((ship) => ship.draggable = false);
    remaining = 10;  
}

function clearBoard() {
    placementBoard = gameboard();
    let ships = Array.from(document.getElementsByClassName('moveable'));
    ships.forEach(ship => ship.remove());
    domBoard.updateBoard(placementBoard, false, true);
    for (let i = 0; i < ps.length; i ++) ps[i].textContent = 4 - i;
    domShips.forEach(ship => ship.draggable = true);
    remaining = 0;
}

function rotateShips() {
    (domShips[0].classList.contains('rotate')) ? orientation = 'down' : orientation = 'right'; 
    domShips.forEach(ship => ship.classList.toggle('rotate'));
}

function solveOutOfBoundaries () {
    if (placementBoard.ships.length < remaining) {
        remaining--;
    }
    else dragItem.remove();
}

function newGame () {
    if (placementBoard.ships.length < 10) return;
    let computer = gameboard();
    computer.placeShipsRandomly();
    setP1(placementBoard);
    setP2(computer);
    game.reStart();
    container.classList.toggle('hide');
    cancel.disabled = false;
}

function displaySetup () {
    container.classList.toggle('hide');
    clearBoard();
    cancel.classList.remove('hide');
}

function toggleCancel() {
    (cancel.disabled == true) ? cancel.disabled = false: cancel.disabled = true;
}

function newPvPGame() {
    if (placementBoard.ships.length < 10) return;
    if (counter == 0) {
        setP1(placementBoard);
        counter++;
        showPassingScreen(1);
        start.textContent = 'Start';
    }
    else {
        setP2(placementBoard);
        counter = 0;
        game.reStart();
        container.classList.toggle('hide');
        cancel.disabled = false;
        showPassingScreen(0);
        start.textContent = 'Set P1 Board';
    } 
    clearBoard();
}


export { runSetup, placeShip, checkDrag, toggleDrag, saveVariables,
         solveOutOfBoundaries, displaySetup}

