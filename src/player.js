const player = (name, brain) => {

    function takeTurn(x, y, gameboard) {
        return gameboard.receiveAttack(x, y);
    }

    function takeRandomTurn(gameboard) {
        let x = Math.floor(Math.random()*10);
        let y = Math.floor(Math.random()*10);
        let validHit = gameboard.receiveAttack(x, y);
        while(validHit == false) {
            x = Math.floor(Math.random()*10);
            y = Math.floor(Math.random()*10);
            validHit = gameboard.receiveAttack(x, y);
        }
        
    }

    return { takeTurn, name, brain, takeRandomTurn }
}

export { player }