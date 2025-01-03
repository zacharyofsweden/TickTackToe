
function createGameBoard() {
    const gameBoardSquares = [0, 0, 0, 0, 0, 0, 0, 0, 0,]
    return {gameBoardSquares};
}


function createPlayer(name, letter) {

    const displayName = () => name;
    const displayLetter = () => letter;


    const pickASquare = (test) => {
       
        if (test <= 9 && test >= 1) {
           console.log("You picked withing the range")
        }
    }

    return {displayName, displayLetter, pickASquare}
}

const player = createPlayer("Zachary", "Z")



player.pickASquare(9)

