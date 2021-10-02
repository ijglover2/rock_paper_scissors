function capitalize (input) {
    let res = input.charAt(0).toUpperCase() + input.slice(1);
    console.log(res);
    return res;
  }

function computerPlay() {
    let moves = ['rock', 'paper', 'scissors']
    return moves[getRandomInt(3)];
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function playRound (playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === 'rock'|| playerSelection === 'paper' || playerSelection === 'scissors') {
        if (playerSelection === computerSelection) {
            console.log('Tie, play again');
            return 2;
        }
        else if (playerSelection === 'rock' && computerSelection === 'scissors') {
            console.log('You win! Rock beats Scissors');
            return 1;
        }
        else if (playerSelection === 'rock' && computerSelection === 'paper') {
            console.log('You lose! Paper beats Rock');
            return 0;
        }
        else if (playerSelection === 'paper' && computerSelection === 'rock') {
            console.log('You win! Paper beats Rock');
            return 1;
        }
        else if (playerSelection === 'paper' && computerSelection === 'scissors') {
            console.log('You lose! Scissors beats Paper');
            return 0;
        }
        else if (playerSelection === 'scissors' && computerSelection == 'rock') {
            console.log('You lose! Rock beats Scissors');
            return 0;
        }
        else if (playerSelection === 'scissors' && computerSelection === "paper") {
            console.log('You win! Scissors beats Paper');
            return 1;
        }
    }   
    else {
        console.log('Not a valid player selection. Selection must be rock, paper, or scissors');
        return -1;
    }
}

function game() {
    let playerscore = 0;
    let computerscore = 0;
    let i = 0;
    let rounds = 5;
    while (i < rounds) {
        let play = prompt("Enter your play (rock, paper, scissors)");
        let result = playRound(play, computerPlay());
        if (result == 1) {
            playerscore++;
        }
        else if (result == 0) {
            computerscore++;
        }
        else {
            rounds++;
        }
        i++;
    }
    if (playerscore > computerscore) {
        console.log("You win!");
    }
    else {
        console.log("You lose");
    }
     console.log('final score\nyou: '+playerscore+'\ncomputer: '+computerscore);
}
//const playerSelection = 'rock';
//const computerSelection = computerPlay();
//console.log(playRound(playerSelection, computerSelection));
game();