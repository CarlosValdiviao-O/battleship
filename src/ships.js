const ship = (length) => {

    let cells = [];
    let sunk = false;

    for (let i = 0 ; i < length ; i++) {
        cells[i] = '';
    }

    function hit (num) {
        cells[num] = 'hit';
        return cells;
    }

    function isSunk () {
        for (let i = 0 ; i < length ; i++) {
            if (cells[i] === '') {
                return sunk;
            }
        }
        sunk = true;
        return sunk;
    }

    return { hit, isSunk, cells }
}

export { ship }