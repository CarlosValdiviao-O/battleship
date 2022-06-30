import { player } from "./player";
import { gameboard } from "./gameboard"

describe('Player test', () => {
    let testGameboard = gameboard();
    let arr = [];
    for (let i = 0 ; i < 10 ; i++){
        arr[i] = [];
        for (let j = 0 ; j < 10 ; j++){
            arr[i][j] = {hit: false, ship: ''};;
        }
    }
    let testPlayer = player('carlos', 'human');

    test('returns true on valid hit', () => {
        arr[0][0].hit = true;
        expect(testPlayer.takeTurn(0, 0, testGameboard)).toBe(true);
        expect(testGameboard.cells).toEqual(arr);
    })

    test('returns false on already hit', () => {
        expect(testPlayer.takeTurn(0, 0, testGameboard)).toBe(false);
    })

    test('makes random hit', () => {
        testPlayer.takeRandomTurn(testGameboard);
        expect(testGameboard.cells).not.toEqual(arr);
    })
})