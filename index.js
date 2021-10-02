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
            //console.log('Tie, play again');
            return 'Tie, play again';
        }
        else if (playerSelection === 'rock' && computerSelection === 'scissors') {
            //console.log('You win! Rock beats Scissors');
            return 'You win! Rock beats Scissors';
        }
        else if (playerSelection === 'rock' && computerSelection === 'paper') {
            //console.log('You lose! Paper beats Rock');
            return 'You lose! Paper beats Rock';
        }
        else if (playerSelection === 'paper' && computerSelection === 'rock') {
            //console.log('You win! Paper beats Rock');
            return 'You win! Paper beats Rock';
        }
        else if (playerSelection === 'paper' && computerSelection === 'scissors') {
            //console.log('You lose! Scissors beats Paper');
            return 'You lose! Scissors beats Paper';
        }
        else if (playerSelection === 'scissors' && computerSelection == 'rock') {
            //console.log('You lose! Rock beats Scissors');
            return 'You lose! Rock beats Scissors';
        }
        else if (playerSelection === 'scissors' && computerSelection === "paper") {
            //console.log('You win! Scissors beats Paper');
            return 'You win! Scissors beats Paper';
        }
    }   
    else {
        console.log('Not a valid player selection. Selection must be rock, paper, or scissors');
    }
}
const playerSelection = 'rock';
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));