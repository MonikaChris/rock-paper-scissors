//Event listeners
const buttons = document.querySelectorAll('.button');
buttons.forEach(button => button.addEventListener('click', playRound));

//Run Game in response to user input
function playRound(e) {
    let playerSelection = e.srcElement.alt;
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

    //Display user and computer selections
    let playerSelection = document.querySelector('#player-selection');
    let computerSelection = document.querySelector('#comp-selection');

    playerSelection.innerText = `You chose ${player}.`;
    computerSelection.innerText = `The computer chose ${computer}.`;
    
    //Compute and display winner
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
