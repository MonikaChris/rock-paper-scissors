let playerPoints = 0;
let compPoints = 0;

//Event listeners
const buttons = document.querySelectorAll('.button');
buttons.forEach(button => button.addEventListener('click', playRound));

//Run Game in response to user input
function playRound(e) {
    let playerSelection = e.srcElement.alt;
    
    let winner = displayRoundWinner(playerSelection, computerSelection());
    updateTally(winner);
     
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
        return "Tie";
    }

    //Player Wins    
    else if(player === "Rock" && computer === "Scissors") {
        displayBox.innerText = "Rock beats Scissors. You win!";
        return "Player";
    }

    else if(player === "Paper" && computer === "Rock"){
        displayBox.innerText = "Paper beats Rock. You win!";
        return "Player";
    }
    

    else if(player === "Scissors" && computer === "Paper"){
        displayBox.innerText = "Scissors beat Paper. You win!";
        return "Player";
    }
    

    //Computer Wins
    else if(computer === "Rock" && player === "Scissors"){
        displayBox.innerText ="Rock beats Scissors. You lose :(";
        return "Computer";
    }

    else if(computer === "Paper" && player === "Rock"){
        displayBox.innerText = "Paper beats Rock. You lose :(";
        return "Computer"
    }

    else if(computer === "Scissors" && player === "Paper"){
        displayBox.innerText = "Scissors beat Paper. You lose :(";
        return "Computer"
    }
}

function updateTally(winner) {
    let playerScore = document.querySelector("#player-score");
    let compScore = document.querySelector("#comp-score");
    
    if(winner === "Player") {
        playerPoints++;
        playerScore.innerText = `Player Score: ${playerPoints}`;
        
    }

    else if(winner === "Computer") {
        compPoints++;
        compScore.innerText = `Computer Score: ${compPoints}`;
    }

    else return;
}
