const player = (name, brain) => {
    let hit = false;
    let secondHit = false;
    let i = 0;
    let direction;
    let tries = [];
    let tries2 = [];
    let foundShip = [];
    function takeTurn(x, y, gameboard) {
        return gameboard.receiveAttack(x, y);
    }

    function takeComputerTurn(gameboard) {
        if (hit) {
            trySmartPlay(gameboard);
        } 
        else {
            let x = Math.floor(Math.random()*10);
            let y = Math.floor(Math.random()*10);
            let validHit = gameboard.receiveAttack(x, y);
            while(validHit == false) {
                x = Math.floor(Math.random()*10);
                y = Math.floor(Math.random()*10);
                validHit = gameboard.receiveAttack(x, y);
            } 
            if (gameboard.cells[x][y].ship > -1) {
                hit = true;
                foundShip.push([x, y]);
            } 
        }
    }

    function trySmartPlay(gameboard) {
        if (!secondHit) {
            if (checkValidAuxCoord (foundShip[0][0] + 1, foundShip[0][1])) tries.push([foundShip[0][0] + 1, foundShip[0][1]]);
            if (checkValidAuxCoord (foundShip[0][0] - 1, foundShip[0][1])) tries.push([foundShip[0][0] - 1, foundShip[0][1]]);
            if (checkValidAuxCoord (foundShip[0][0], foundShip[0][1] + 1)) tries.push([foundShip[0][0], foundShip[0][1] + 1]);
            if (checkValidAuxCoord (foundShip[0][0], foundShip[0][1] - 1)) tries.push([foundShip[0][0], foundShip[0][1] - 1]);
            let validHit = gameboard.receiveAttack(tries[i][0], tries[i][1]);
            i++;
            while(validHit == false) {
                validHit = gameboard.receiveAttack(tries[i][0], tries[i][1]);
            i++;   
            }
            if (gameboard.cells[tries[i - 1][0]][tries[i - 1][1]].ship > -1) {
                secondHit = true;
                if (foundShip[0][0] == tries[i - 1][0]) {
                    direction = 'right';
                }
                else {
                    direction = 'down';
                }
                foundShip.push([tries[i - 1][0], tries[i - 1][1]]);
                i = 0;
            }
        }

        else {
            if (direction == 'right') {
                foundShip.forEach(coords => {
                    if (checkValidAuxCoord(coords[0], coords[1] + 1)) tries2.push([coords[0], coords[1] + 1]);
                    if (checkValidAuxCoord(coords[0], coords[1] - 1)) tries2.push([coords[0], coords[1] - 1]);
                })
            } 
            else {
                foundShip.forEach(coords => {
                    if (checkValidAuxCoord(coords[0] + 1, coords[1])) tries2.push([coords[0] + 1, coords[1]]);
                    if (checkValidAuxCoord(coords[0] - 1, coords[1])) tries2.push([coords[0] - 1, coords[1]]);
                })           
            }            
            let validHit = gameboard.receiveAttack(tries2[i][0], tries2[i][1]);
            i++;
            while(validHit == false) {
                validHit = gameboard.receiveAttack(tries2[i][0], tries2[i][1]);
                i++; 
            }
            if (gameboard.cells[tries2[i - 1][0]][tries2[i - 1][1]].ship > -1) {
                foundShip.push([tries2[i - 1][0], tries2[i - 1][1]]);
            }
        }
        
        if (gameboard.shipIsSunk(foundShip[0][0], foundShip[0][1])) {
            clearVariables();
        }
    }

    function checkValidAuxCoord (x, y) {
        if (x > 9 || x < 0 || y > 9 || y < 0) return false;
        else return true;    
    }

    function clearVariables() {
        hit = false;
        secondHit = false;
        tries = [];
        tries2 = [];
        i = 0;
        foundShip = [];
    }

    return { takeTurn, name, brain, takeComputerTurn, clearVariables }
}

export { player }