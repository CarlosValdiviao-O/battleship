import { createBoard, createAliveShips } from "./domStuff";
import { startGame } from "./game";
import "./style.css";
import { runSetup } from "./setup";
import { gameboard } from "./gameboard";
import { runHud } from "./hud";
import { player } from "./player";

const player1 = document.getElementById('player-board');
const enemy = document.getElementById('enemy-board');
let playerBoard = createBoard(player1, false);
let enemyBoard = createBoard(enemy, true);
let playerShips = createAliveShips(document.getElementById('player-ships'));
let enemyShips = createAliveShips(document.getElementById('enemy-ships'));

let p1Gameboard = gameboard();
let p2Gameboard = gameboard();

let p1 = player('Player 1', 'human');
let p2 = player('Player 2', 'ai');
let pvp = false;

runSetup();
let game = startGame();
runHud();


function setP1 (board) {
    p1Gameboard = board;
}

function setP2 (board) {
    p2Gameboard = board;
}

function changeMode () {
    if (pvp) {
        pvp = false;
        p2 = player('Player 2', 'ai');  
    }  
    else {
        pvp = true;
        p2 = player('Player 2', 'human'); 
    }
}


export { game, playerBoard, enemyBoard, setP1, setP2, p1Gameboard, p2Gameboard,
        enemyShips, playerShips, p1, p2, pvp, changeMode }


//add computer smart play
//add small delay for computer play
//setup for second player