import { addChildElement } from "./functions";
import { game } from ".";
import { placeShip, checkDrag, toggleDrag, saveVariables, solveOutOfBoundaries } from "./setup";

const createBoard = (board, enemy) => {
    let cells = [];
    let x;
    let y;
    for (let i = 0; i < 10; i++) {
        let div = addChildElement(board, 'div', '.row');
        cells[i] = [];
        for (let j = 0; j < 10; j++) {
            let cell = addChildElement(div, 'button', '.cell');
            cell.classList.add('available');
            cells[i].push(cell);
            if (enemy) {
                cell.addEventListener('click', () => game.handleTurn(i, j))
            }
        }
    }

    function updateHits (board) {
        for (let i = 0; i < 10 ; i++) {
            for (let j = 0; j < 10; j++) {
                if (board.cells[i][j].hit == true) {
                    cells[i][j].classList.add('hit');
                    cells[i][j].textContent = 'x';
                }
                else {
                    cells[i][j].classList.remove('hit');
                    cells[i][j].textContent = '';
                }
            }
        }      
    }

    function updateShips (board) {
        for (let i = 0; i < 10 ; i++) {
            for (let j = 0; j < 10; j++) {
                if (board.cells[i][j].ship > -1) cells[i][j].classList.add('ship');
                else  cells[i][j].classList.remove('ship');
                if (board.cells[i][j].ship == -2) cells[i][j].classList.add('available');
                else  cells[i][j].classList.remove('available');
            }
        }
    }

    function addDropEvents () {
        for (let i = 0; i < 10 ; i++) {
            for (let j = 0; j < 10; j++) {
               cells[i][j].addEventListener('dragenter', dragEnter)
               cells[i][j].addEventListener('dragover', dragOver);
               cells[i][j].addEventListener('dragleave', dragLeave);
               cells[i][j].addEventListener('drop', () => drop(cells[i][j], i, j));
            }
        } 
    }

    function dragEnter(e) {
        e.preventDefault();
        e.target.classList.add('drag-over');
    }
    
    function dragOver(e) {
        e.preventDefault();
        e.target.classList.add('drag-over');
    }
    
    function dragLeave(e) {
        e.target.classList.remove('drag-over');
    }
    
    function drop(cell, i, j) {
        cell.classList.remove('drag-over');
        if (!checkDrag()) return;
        x = i;
        y = j;
        placeShip(x, y);
    }

    function createShipDiv (i, j, orientation, length) {
        console.log(1);
        let ship = addChildElement(cells[i][j], 'div', '.ship');
        ship.draggable = true;
        ship.classList.add('moveable');
        ship.addEventListener('dragstart', toggleDrag);
        ship.addEventListener('dragstart', () => {
            setTimeout(() => {
                ship.classList.add('hide');
            }, 0);
        })
        ship.addEventListener('dragstart', () => saveVariables(5 - length, length, ship, i, j))
        ship.addEventListener('dragend', toggleDrag);
        ship.addEventListener('dragend', solveOutOfBoundaries);
        for (let c = 0; c < length; c++) {
            let cell = addChildElement(ship, 'div', '.cell');
        }
        if (orientation == 'right') ship.classList.add('rotate');
    }
    
    return { updateHits, updateShips, addDropEvents, createShipDiv }
}

export { createBoard }