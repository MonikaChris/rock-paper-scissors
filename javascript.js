let playerScore = 0;
let compScore = 0;

//Event listeners
const buttons = document.querySelectorAll('.button');
buttons.forEach(button => button.addEventListener('click', playRound));

//Run Game in response to user input
function playRound(e) {
  const playerSelection = e.srcElement.alt;
  const compSelection = get_compSelection();
  displaySelections(playerSelection, compSelection);
  const winner = getWinner(playerSelection, compSelection);
  updateTally(winner);
}

//Computer selects Rock, Paper, or Scissors
function get_compSelection() {
  const moves = ['Rock', 'Paper', 'Scissors'];
  const index = Math.floor(Math.random() * moves.length);
  return moves[index];
}

function displaySelections(playerSelection, compSelection) {
  const player = document.querySelector('#player-selection');
  const comp = document.querySelector('#comp-selection');

  player.textContent = `You chose ${playerSelection}.`;
  comp.textContent = `The computer chose ${compSelection}.`;
}

function getWinner(playerSelection, compSelection) {
  const displayBox = document.querySelector('#display-winner');

  if (playerSelection === compSelection) {
    displayBox.textContent = "It's a tie!";
    return "Tie";
  } else if (
    (playerSelection === 'Rock' && compSelection === 'Scissors') ||
    (playerSelection === 'Paper' && compSelection === 'Rock') ||
    (playerSelection === 'Scissors' && compSelection === 'Paper')
  ) {
    displayBox.textContent = `${playerSelection} beats ${compSelection}. You win!`;
    return "Player";
  } else {
    displayBox.textContent = `${compSelection} beats ${playerSelection}. You lose :(`;
    return "Computer";
  }

}

function updateTally(winner) {
  
  if (winner === "Player") {
    playerScore++;
    const playerDisplay = document.querySelector("#player-score");
    playerDisplay.textContent = `Player Score: ${playerScore}`;
  }

  else if (winner === "Computer") {
    compScore++;
    const compDisplay = document.querySelector("#comp-score");
    compDisplay.textContent = `Computer Score: ${compScore}`;
  }

  else return;
}
