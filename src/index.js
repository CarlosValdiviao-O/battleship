import { createBoard, createAliveShips } from "./domStuff";
import { startGame } from "./game";
import "./style.css";
import { runSetup } from "./setup";
import { gameboard } from "./gameboard";
import { runHud } from "./hud";

const player = document.getElementById('player-board');
const enemy = document.getElementById('enemy-board');
let playerBoard = createBoard(player, false);
let enemyBoard = createBoard(enemy, true);
let playerShips = createAliveShips(document.getElementById('player-ships'));
let enemyShips = createAliveShips(document.getElementById('enemy-ships'));

let p1Gameboard = gameboard();
let p2Gameboard = gameboard();

runSetup();
let game = startGame();
runHud();


function setP1 (board) {
    p1Gameboard = board;
}

function setP2 (board) {
    p2Gameboard = board;
}


export { game, playerBoard, enemyBoard, setP1, setP2, p1Gameboard, p2Gameboard,
        enemyShips, playerShips }


//add coordinates and remaining ships to display
//add computer smart play
//add small delay for computer play
//add two player mode