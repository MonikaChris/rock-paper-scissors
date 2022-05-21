//Get User Input


//Computer selects Rock, Paper, or Scissors
function computerPlay() {
    compRoll = roll();

    if(compRoll === 0) {
        return "Rock";
    }

    else if(compRoll === 1) {
        return "Paper";
    }

    else return "Scissors";
}

//Generate random integer from 0 to 2
function roll() {
    return Math.floor(Math.random() * 3);
}


//Compare computer vs. user rolls and announce winner


//Ask if user would like to play again