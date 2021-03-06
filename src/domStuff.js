import { addChildElement } from "./functions";
import { game } from ".";
import { placeShip, checkDrag, toggleDrag, saveVariables, solveOutOfBoundaries } from "./setup";

const createBoard = (board, enemy) => {
    let cells = [];
    let x;
    let y;
    let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    for (let i = -1; i < 10; i++) {
        let div = addChildElement(board, 'div', '.row');
        if (i > -1) cells[i] = [];
        for (let j = 0; j < 10; j++) {
            if (j == 0) {
               let letter = addChildElement(div, 'p', '.cell');
               letter.classList.add('coord');
               letter.textContent = letters[i]; 
            }  
            if (i == -1) {
               let letter = addChildElement(div, 'p', '.cell');
               letter.textContent = j + 1;
               letter.classList.add('coord');
            } 
            else {
               let cell = addChildElement(div, 'button', '.cell');
                cell.classList.add('available');
                cells[i].push(cell); 
                if (enemy) {
                    cell.addEventListener('click', () => game.handleTurn(i, j))
                }
            }
            
        }
    }

    function updateBoard (board, enemy, setup) {
        for (let i = 0; i < 10 ; i++) {
            for (let j = 0; j < 10; j++) {
                if (!setup) {
                    if (board.cells[i][j].hit == true) {
                        cells[i][j].classList.add('hit');
                        cells[i][j].textContent = 'x';
                    }
                    else {
                        cells[i][j].classList.remove('hit');
                        cells[i][j].textContent = '';
                    }
                }
                if (!enemy) {
                    (board.cells[i][j].ship > -1) ? cells[i][j].classList.add('ship'):
                        cells[i][j].classList.remove('ship');
                    (board.cells[i][j].ship == -2) ? cells[i][j].classList.add('available'):
                        cells[i][j].classList.remove('available');
                } 
                else {
                    (board.cells[i][j].ship > -1 && board.cells[i][j].hit == true) ? 
                        cells[i][j].classList.add('ship'):
                        cells[i][j].classList.remove('ship');
                }
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

    function toggleClickEvents () {
        let disabled;
        (cells[0][0].disabled == true) ? disabled = false:
            disabled = true;
        for (let i = 0; i < 10 ; i++) {
            for (let j = 0; j < 10; j++) {
                cells[i][j].disabled = disabled;
            }
        }    
    }
    
    return { updateBoard, addDropEvents, createShipDiv, toggleClickEvents }
}

const createAliveShips = (div) => {
    let ps = [];
    let ships = [];
    let lenghts = [5, 4, 3, 2];
    for (let i = 0; i < 4; i++) {
        let container = addChildElement(div, 'div', '.small');
        let p = addChildElement(container, 'p');
        p.textContent = i + 1;
        ps.push(p);
        let ship = addChildElement(container, 'div', '.ship');
        ship.classList.add('rotate');
        for (let j = 0; j < 5 - i; j++) {
            let cell = addChildElement(ship, 'div', '.cell');
        }
        ships.push(ship);
    }

    function updateShips (board) {
        ps.forEach(p => p.textContent = 0);
        ships.forEach(ship => ship.classList.add('sunk'));
        board.ships.forEach(ship => {
            if (!ship.isSunk()) {
                let index;
                for (let i = 0; i < lenghts.length; i++) {
                    if (lenghts[i] == ship.cells.length) index = i;
                }
                ps[index].textContent = +ps[index].textContent + 1;
                ships[index].classList.remove('sunk'); 
            }
        })
    }

    return { updateShips }
}

function showPassingScreen(num) {
    let player;
    (num == 0) ? player = 'One': player = 'Two';    
    let body = document.querySelector('body');
    let div = addChildElement(body, 'div', '#passing-screen');
    (num == 0) ? div.classList.add('p1'): div.classList.remove('p1')
    let h2 = addChildElement(div, 'h1');
    h2.textContent = `Player ${player}'s Turn`;
    let p = addChildElement(div, 'p');
    p.textContent = 'Click to continue';
    div.addEventListener('click', () => div.remove());
}

export { createBoard, createAliveShips, showPassingScreen }