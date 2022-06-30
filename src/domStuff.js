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
                    //console.log(cells[i][j]);
                    cells[i][j].textContent = 'x';
                }
            }
        }      
    }
    
    return { updateHits }
}

export { createBoard }