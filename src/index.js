import { createBoard } from "./domStuff";
import { startGame } from "./game";
import "./style.css";
import { runSetup } from "./setup";
import { gameboard } from "./gameboard";

const player = document.getElementById('player-board');
const enemy = document.getElementById('enemy-board');
let playerBoard = createBoard(player, false);
let enemyBoard = createBoard(enemy, true);

let p1Gameboard = gameboard();
let p2Gameboard = gameboard();

runSetup();
let game = startGame();


function setP1 (board) {
    p1Gameboard = board;
}

function setP2 (board) {
    p2Gameboard = board;
}


export { game, playerBoard, enemyBoard, setP1, setP2, p1Gameboard, p2Gameboard }


//add settings module
//add messages module
//add computer smart play
//add small delay for computer play
//add two player mode
//hide ship class in enemy board