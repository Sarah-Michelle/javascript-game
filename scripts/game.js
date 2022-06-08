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

    //display the chosen values of each user
    console.log(`You chose ${playerSelect}`);
    console.log(`Computer chose ${computerSelect}`);

    //return true if user wins/ties with computer and false if user loses
    if (playerSelect == computerSelect) {
        console.log("It's a TIE!");
        return true;
    } else if (playerSelect == 'rock' && computerSelect == 'paper') {
        console.log("You Lose! Paper beats Rock");
        return false;
    } else if (playerSelect == 'rock' && computerSelect == 'scissors') {
        console.log("You Win! Rock beats Scissors");
        return true;
    } else if (playerSelect == 'paper' && computerSelect == 'rock') {
        console.log("You Win! Paper beats Rock");
        return true;
    } else if (playerSelect == 'paper' && computerSelect == 'scissors') {
        console.log("You Lose! Scissors beats Paper");
        return false;
    } else if (playerSelect == 'scissors' && computerSelect == 'rock') {
        console.log("You Lose! Rock beats Scissors");
        return false;
    } else if (playerSelect == 'scissors' && computerSelect == 'paper') {
        console.log("You Win! Scissors beats Paper");
        return true;
    } else {
        console.log("Something went wrong. Please choose between rock, paper or scissors.");
    }  
}

//play 5 rounds of rock, paper, scissors 
function game() {
    let userPoints = 0;
    for (let i = 0; i < 5; i++) {
        const computerSelection = computerPlay();
        let playerSelection = prompt("Rock, Paper or Scissors?");

        //Alert user to only choose between rock, paper and scissors
        if(playerSelection.toLowerCase() != 'rock' && playerSelection.toLowerCase() != "paper" && playerSelection.toLowerCase() != "scissors"){
            alert('Unknown value. Please choose between rock, paper or scissors.');
            //allow user to choose a correct value
            playerSelection = prompt("Choose between rock, paper or scissors?");
        }
        
        //add point to user's score when they win a round
        if(playRound(playerSelection, computerSelection)){
            userPoints++;
            console.log(`Score: ${userPoints} / 5`);
        }
        else{
            console.log(`Score: ${userPoints} / 5`);
        }
    }
}

// const playerSelection = "rock";
// const computerSelection = computerPlay();
// console.log(computerPlay());
// console.log(playRound(playerSelection, computerSelection));
// game();