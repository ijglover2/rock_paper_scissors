function computerPlay() {
    let moves = ['Rock', 'Paper', 'Scissors']
    return moves[getRandomInt(3)];
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

//console.log(computerPlay());