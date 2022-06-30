import { gameboard } from "./gameboard";
import { ship } from './ships';

describe('Gameboard tests', () => {

    let testGameboard = gameboard();
    let arr = [];
    for (let i = 0 ; i < 10 ; i++){
        arr[i] = [];
        for (let j = 0 ; j < 10 ; j++){
            arr[i][j] = {hit: false, ship: ''};;
        }
    }
   
    test('doesnt place ship due invalid coordinates', () => {
        testGameboard.placeShip(8, 0, 'right', 3);
        expect(testGameboard.cells).toEqual(arr);
    })

    test('places ship and updates board', () => {
        testGameboard.placeShip(0, 0, 'right', 3);
        arr[0][0].ship = 0;
        arr[1][0].ship = 1;
        arr[2][0].ship = 2;
        arr[3][0].ship = -1;
        
        arr[0][1].ship = -1;
        arr[1][1].ship = -1;
        arr[2][1].ship = -1;
        arr[3][1].ship = -1;
        expect(testGameboard.cells).toEqual(arr);
    })

    test('doesnt place ship next to another', () => {
        testGameboard.placeShip(0, 1, 'right', 2);
        testGameboard.placeShip(3, 1, 'down', 5);
        expect(testGameboard.cells).toEqual(arr);
    })

    test('doesnt place ship on top of eachoter', () => {
        testGameboard.placeShip(2, 0, 'right', 3);
        expect(testGameboard.cells).toEqual(arr);
    })

    test('places second ship', () => {
        testGameboard.placeShip(4, 1, 'down', 2);
    
        arr[4][0].ship = -1;
        arr[4][1].ship = 0;
        arr[4][2].ship = 1;
        arr[4][3].ship = -1;
    
        arr[3][0].ship = -1;
        arr[3][1].ship = -1;
        arr[3][2].ship = -1;
        arr[3][3].ship = -1;
    
        arr[5][0].ship = -1;
        arr[5][1].ship = -1;
        arr[5][2].ship = -1;
        arr[5][3].ship = -1;
        expect(testGameboard.cells).toEqual(arr);
    })

    test('receives attack', () => {
        testGameboard.receiveAttack(0, 0);
        arr[0][0].hit = true;
        expect(testGameboard.ships[0].cells).toEqual(['hit', '', '']);
        expect(testGameboard.cells).toEqual(arr);
    })

    test('receives second attack', () => {
        testGameboard.receiveAttack(2, 0);
        arr[2][0].hit = true;
        expect(testGameboard.ships[0].cells).toEqual(['hit', '', 'hit']);
        expect(testGameboard.cells).toEqual(arr);
    })

    test('registers miss hit', () => {
        testGameboard.receiveAttack(9, 9);
        arr[9][9].hit = true;
        expect(testGameboard.cells).toEqual(arr);
    })

    test('receives hit on different ship', () => {
        testGameboard.receiveAttack(4, 2);
        arr[4][2].hit = true;
        expect(testGameboard.ships[0].cells).toEqual(['hit', '', 'hit']);
        expect(testGameboard.ships[1].cells).toEqual(['', 'hit']);
    })

    test('registers all borders as hit when ship is sunk', () => {
        testGameboard.receiveAttack(4, 1);
        arr[4][1].hit = true;

        arr[4][0].hit = true;
        arr[4][3].hit = true;

        arr[3][0].hit = true;
        arr[3][1].hit = true;
        arr[3][2].hit = true;
        arr[3][3].hit = true;

        arr[5][0].hit = true;
        arr[5][1].hit = true;
        arr[5][2].hit = true;
        arr[5][3].hit = true;

        expect(testGameboard.cells).toEqual(arr);
        expect(testGameboard.ships[1].cells).toEqual(['hit', 'hit']);
    })

    test('returns false when there are ships remaining', () => {
        testGameboard.receiveAttack(5, 2);
        testGameboard.receiveAttack(3, 8);
        arr[5][2].hit = true;
        arr[3][8].hit = true;
        expect(testGameboard.areAllSunk()).toBe(false);
    })

    test('returns true when all ships are sunk', () => {
        testGameboard.receiveAttack(1, 0);
        arr[1][0].hit = true;

        arr[3][0].hit = true;

        arr[0][1].hit = true;
        arr[1][1].hit = true;
        arr[2][1].hit = true;
        arr[3][1].hit = true;

        expect(testGameboard.cells).toEqual(arr);
        expect(testGameboard.ships[0].cells).toEqual(['hit', 'hit', 'hit']);
        expect(testGameboard.areAllSunk()).toBe(true);
    })

})

