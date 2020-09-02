let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
// generates target number and return
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
}

// compares guesses and returns winner
const compareGuesses = (userGuess,computerGuess,targetNumber) => {
  if (getAbsoluteDistance(userGuess,targetNumber) < getAbsoluteDistance(computerGuess,targetNumber) ) {
    return true;
  }
  else {
    return false;
  }
}

// updates score depending on winner
const updateScore = winner => {
  if (winner === 'human') {
    humanScore++;
  }
  else {
      computerScore++;
  }
}

// updates round on round advance
const advanceRound = () => {
  let currentRoundNumber = 0;
  currentRoundNumber++;
}

// finds the distance from target number to human guess and target number to computer guess
const getAbsoluteDistance = (number1,number2) => {
  return Math.abs(number1 - number2);
}

// checks if user guess is between 0 and 9
const alert = (userGuess) => {
  if (userGuess < 0 || userGuess > 9) {
      console.log("User guess must be within 0 and 9.");  
}
}

alert();


