function computerPlay() {
    //generate random number between 0 - 2
    let randomNumber = Math.floor(Math.random() * 3);

    switch (randomNumber) {
        case 0: return 'Rock';
            break;
        case 1: return 'Paper';
            break;
        case 2: return 'Scissors';
            break;

        default: return 'No selection made.';
    }
}

//play a round of rock, paper, scissors
function playRound(playerSelection, computerSelection) {
    var playerSelect = playerSelection.toLowerCase();
    var computerSelect = computerSelection.toLowerCase();
    console.log(`You chose ${playerSelect}`);
    console.log(`Computer chose ${computerSelect}`);
    if (playerSelect == computerSelect) {
        return "It's a TIE!";
    } else if (playerSelect == 'rock' && computerSelect == 'paper') {
        return "You Lose! Paper beats Rock";
    } else if (playerSelect == 'rock' && computerSelect == 'scissors') {
        return "You Win! Rock beats Scissors";
    } else if (playerSelect == 'paper' && computerSelect == 'rock') {
        return "You Win! Paper beats Rock";
    } else if (playerSelect == 'paper' && computerSelect == 'scissors') {
        return "You Lose! Scissors beats Paper";
    } else if (playerSelect == 'scissors' && computerSelect == 'rock') {
        return "You Lose! Rock beats Scissors";
    } else if (playerSelect == 'scissors' && computerSelect == 'paper') {
        return "You Win! Scissors beats Paper";
    } else {
        console.log("Something went wrong. Please choose between rock, paper or scissors.");
    }
}

//play a 5 rounds of rock, paper, scissors 
function game() {
    for (let i = 0; i < 5; i++) {
        const computerSelection = computerPlay();
        let playerSelection = prompt("Rock, Paper or Scissors?");

        if (playerSelection.toLowerCase() == "rock" || playerSelection.toLowerCase() == "paper" || playerSelection.toLowerCase() == "scissors") {
            console.log(playRound(playerSelection, computerSelection));
        }
        else {
            console.log("Please choose between rock, paper or scissors");
            playerSelection = prompt("Please choose between Rock, Paper or Scissors?")
            console.log(playRound(playerSelection, computerSelection));
        }
    }
}

// game();

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(computerPlay());
console.log(playRound(playerSelection, computerSelection));