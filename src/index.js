import { createBoard } from "./domStuff";
import { startGame } from "./game";
import "./style.css";

const player = document.getElementById('player-board');
const enemy = document.getElementById('enemy-board');
let playerBoard = createBoard(player, false);
let enemyBoard = createBoard(enemy, true);

let game = startGame();


export { game, playerBoard, enemyBoard }


//add settings module
//add messages module
//add drag and drope for placement ships
//add computer smart play
//add two player mode