import { gameboard } from "./gameboard";
import { player } from "./player";
import { playerBoard, enemyBoard } from ".";

const startGame = () => {
    let over = false;
    let p1 = player('carlos', 'human');
    let p2 = player('bot', 'ai');
    let p1Gameboard = gameboard();
    let p2Gameboard = gameboard();
    let players = [p1, p2];
    let boards = [p1Gameboard, p2Gameboard];
    let currentP = 0;
    let currentB = 1;
    p1Gameboard.placeShipsRandomly();
    playerBoard.updateShips(p1Gameboard);

    p2Gameboard.placeShipsRandomly();
    enemyBoard.updateShips(p2Gameboard);

    let button = document.getElementById('button');
    button.addEventListener('click', handleTurn);  

    function handleTurn(x, y) {
        if (over) return;
        if (players[currentP].brain == 'human') {
            let played = players[currentP].takeTurn(x, y, boards[currentB]);
            if (played) {
                enemyBoard.updateHits(boards[currentB]);
                over = checkWinner();
                changeTurns();
                if (players[currentP].brain == 'ai') handleTurn();
            }
        }
        else {
            players[currentP].takeRandomTurn(boards[currentB]);
            playerBoard.updateHits(boards[currentB]);
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
    
    return { handleTurn }
}

export { startGame }