import { updateMessage } from "./hud"
import { player } from "./player";
import { playerBoard, enemyBoard, p1Gameboard, p2Gameboard, enemyShips, playerShips } from ".";

//checkpoint
const startGame = () => {
    let over = false;
    let p1 = player('Player 1', 'human');
    let p2 = player('Player 2', 'ai');
    let players = [p1, p2];
    let boards = [p1Gameboard, p2Gameboard];
    let currentP = 0;
    let currentB = 1;
    p1Gameboard.placeShipsRandomly();
    playerBoard.updateBoard(p1Gameboard, false, false);

    p2Gameboard.placeShipsRandomly();
    enemyBoard.updateBoard(p2Gameboard, true, false);

    function handleTurn(x, y) {
        if (over) return;
        if (players[currentP].brain == 'human') {
            let played = players[currentP].takeTurn(x, y, boards[currentB]);
            if (played) {
                updateMessage();
                enemyShips.updateShips(boards[currentB]);
                enemyBoard.updateBoard(boards[currentB], true, false);
                over = checkWinner();
                changeTurns();
                if (players[currentP].brain == 'ai') handleTurn();
            }
        }
        else {
            updateMessage();
            players[currentP].takeRandomTurn(boards[currentB]);
            playerShips.updateShips(boards[currentB]);
            playerBoard.updateBoard(boards[currentB], false, false);
            over = checkWinner();
            changeTurns();
        }
    }

    function checkWinner () {
        if (boards[currentB].areAllSunk()) {
            console.log({winner: players[currentP]});
            return true;
        } 
        else return false;
    }

    function changeTurns() {
        if (currentP == 0) {
            currentP = 1;
            currentB = 0;
        }
        else {
            currentP = 0;
            currentB = 1;
        }
    }
    
    function reStart () {
        playerBoard.updateBoard(p1Gameboard, false, false);
        enemyBoard.updateBoard(p2Gameboard, true, false);
        playerShips.updateShips(p1Gameboard);
        enemyShips.updateShips(p2Gameboard);
        boards = [p1Gameboard, p2Gameboard];
        over = false;
    }
    
    return { handleTurn, reStart }
}

export { startGame }