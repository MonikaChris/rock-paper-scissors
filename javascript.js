//Event listeners
const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', playRound));

//Run Game in response to user input
function playRound() {
    let playerSelection = this.textContent;
    displayRoundWinner(playerSelection, computerSelection());   
}

//Computer selects Rock, Paper, or Scissors
function computerSelection() {
    let compRoll = randomRoll();

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

function displayRoundWinner(player, computer) {

    let displayBox = document.querySelector('#display-winner');

    //Tie Condition
    if(player === computer) {
        displayBox.innerText = "It's a tie!";
    }

    //Player Wins    
    else if(player === "Rock" && computer === "Scissors") {
        displayBox.innerText = "Rock beats Scissors. You win!";
    }

    else if(player === "Paper" && computer === "Rock"){
        displayBox.innerText = "Paper beats Rock. You win!";
    }

    else if(player === "Scissors" && computer === "Paper"){
        displayBox.innerText = "Scissors beat Paper. You win!";
    }

    //Computer Wins
    else if(computer === "Rock" && player === "Scissors"){
        displayBox.innerText ="Rock beats Scissors. You lose :(";
    }

    else if(computer === "Paper" && player === "Rock"){
        displayBox.innerText = "Paper beats Rock. You lose :(";
    }

    else if(computer === "Scissors" && player === "Paper"){
        displayBox.innerText = "Scissors beat Paper. You lose :(";
    }
    
}

//Ask if user would like to play again
function playAgain() {
    let playing = true;
    let choice = prompt("Do you want to play again?");
    
    choice = choice.toUpperCase();
    
    //Quit if user enters anything besides Yes or Y
    if(choice !== "YES" && choice !== "Y") {
        playing = false;
    }
    
    return playing;
}