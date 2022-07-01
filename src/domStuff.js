import { addChildElement } from "./functions";
import { game } from ".";

const createBoard = (board, enemy) => {
    let cells = [];
    for (let i = 0; i < 10; i++) {
        let div = addChildElement(board, 'div', '.row');
        cells[i] = [];
        for (let j = 0; j < 10; j++) {
            let cell = addChildElement(div, 'button', '.cell');
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
            }
        }      
    }

    function updateShips (board) {
        for (let i = 0; i < 10 ; i++) {
            for (let j = 0; j < 10; j++) {
                if (board.cells[i][j].ship > -1) {
                    cells[i][j].classList.add('ship');
                }
                else  cells[i][j].classList.remove('ship');
            }
        }
    }
    
    return { updateHits, updateShips }
}

export { createBoard }