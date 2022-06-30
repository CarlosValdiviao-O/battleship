import { ship } from "./ships";

test('registers hit', () => {
    let testShip = ship(3);
    expect(testShip.hit(1)).toEqual(['', 'hit', ''])
})

test('registers two hits', () => {
    let testShip = ship(4);
    testShip.hit(0);
    expect(testShip.hit(3)).toEqual(['hit', '', '', 'hit']);
})

test(`doesn't do anything if the cell has already been hit`, () => {
    let testShip = ship(2);
    testShip.hit(0);
    expect(testShip.hit(0)).toEqual(['hit', '']);
})

test('registers sunk', () => {
    let testShip = ship(3);
    testShip.hit(0);
    testShip.hit(1);
    testShip.hit(2);
    expect(testShip.isSunk()).toBe(true);
})

test('registers sunk 2', () => {
    let testShip = ship(4);
    testShip.hit(0);
    testShip.hit(2);
    expect(testShip.isSunk()).toBe(false);
})