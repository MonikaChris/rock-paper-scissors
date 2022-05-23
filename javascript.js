//Check if playing
let playing = true;

//Run Game
while(playing === true) {
    declareWinner(playerSelection(), computerSelection());
    playing = playAgain();
}

function playerSelection() {
    let input = prompt("Rock, Paper, or Scissors?");

    while(input !== "ROCK" || input !== "PAPER" || input !== "SCISSORS") {
        if (input === null || input == undefined) {
            input = prompt("Please enter Rock, Paper, or Scissors.");
        }

        else {
            input = input.toUpperCase();
        
            if(input === "ROCK" || input === "R") {
                return "Rock";
            }

            else if(input === "PAPER" || input === "P") {
                return "Paper";
            }

            else if(input === "SCISSORS" || input === "S") {
                return "Scissors";
            }

            else {
                input = prompt("Please enter Rock, Paper, or Scissors.");
            }
        }
    }
}


//Computer selects Rock, Paper, or Scissors
function computerSelection() {
    compRoll = randomRoll();

    if(compRoll === 0) {
        return "Rock";
    }

    else if(compRoll === 1) {
        return "Paper";
    }

    else return "Scissors";
}

//Generate random integer from 0 to 2
function randomRoll() {
    return Math.floor(Math.random() * 3);
}


//Compare computer vs. user rolls and announce winner
function declareWinner(playerRoll, computerRoll) {
    
    //Tie Condition
    if(playerRoll === computerRoll) {
        window.alert("It's a tie!");
    }

    //Player Wins    
    else if(playerRoll === "Rock" && computerRoll === "Scissors") {
        window.alert("Rock beats Scissors. You win!");
    }

    else if(playerRoll === "Paper" && computerRoll === "Rock"){
        window.alert("Paper beats Rock. You win!");
    }

    else if(playerRoll === "Scissors" && computerRoll === "Paper"){
        window.alert("Scissors beat Paper. You win!");
    }

    //Computer Wins
    else if(computerRoll === "Rock" && playerRoll === "Scissors"){
        window.alert("Rock beats Scissors. You lose :(");
    }

    else if(computerRoll === "Paper" && playerRoll === "Rock"){
        window.alert("Paper beats Rock. You lose :(");
    }

    else if(computerRoll === "Scissors" && playerRoll === "Paper"){
        window.alert("Scissors beat Paper. You lose :(");
    }
    
}

//Ask if user would like to play again
function playAgain() {
    let choice = prompt("Do you want to play again?");
    choice = choice.toUpperCase();

    if(choice !== "YES" || choice !== "Y") {
        playing = false;
    }
}