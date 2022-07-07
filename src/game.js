import { updateMessage } from "./hud"
import { playerBoard, enemyBoard, p1Gameboard, p2Gameboard, enemyShips, playerShips,
        p1, p2, pvp } from ".";
import { showPassingScreen } from "./domStuff";

const startGame = () => {
    let over = false;
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
                enemyShips.updateShips(boards[currentB]);
                enemyBoard.updateBoard(boards[currentB], true, false);
                over = checkWinner();
                
                if (pvp == true) {
                    players = [p1, p2];
                    enemyBoard.toggleClickEvents();
                    setTimeout(() => { 
                        changeTurns();
                        showPassingScreen(currentP);
                        updateMessage(currentP);
                        playerShips.updateShips(boards[currentP]);
                        playerBoard.updateBoard(boards[currentP], false, false);
                        enemyShips.updateShips(boards[currentB]);
                        enemyBoard.updateBoard(boards[currentB], true, false);
                        enemyBoard.toggleClickEvents();
                    }, 1000)
                }
                else {
                    changeTurns();
                    updateMessage(currentP);
                    handleTurn();
                } 
            }
        }
        else {
            enemyBoard.toggleClickEvents();
            setTimeout(() => {
                players[currentP].takeComputerTurn(boards[currentB]);
                playerShips.updateShips(boards[currentB]);
                playerBoard.updateBoard(boards[currentB], false, false);
                over = checkWinner();
                changeTurns();
                updateMessage(currentP);
                enemyBoard.toggleClickEvents();
            }, 1000)
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
        p2.clearVariables();
        players = [p1, p2];
        over = false;
        updateMessage(0);
    }
    
    return { handleTurn, reStart }
}

export { startGame }