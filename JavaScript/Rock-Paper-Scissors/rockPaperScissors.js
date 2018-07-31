// Description
console.log(`--------------------------
This is a Rock, Paper or Scissors Game
Here, you have four options:
- Scissors;
- Paper;
- Rock;
- Bomb.
--------------------------
`)
// Choose one of these options!
A = 'scissors';
// Now, compile this program.

/* Don't chance anything below this line
---------------------------------- */

// Function to see if the user input is correct
const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if(userInput === 'rock' || userInput === 'scissors' || userInput === 'paper' || userInput === 'bomb'){
    return userInput;
  }else{
    return "Typing wrong";
  }
};

// Function to get a computer choice randomly
const getComputerChoice = () =>{
  x = Math.floor(Math.random()*2.5);
  switch(x){
    case 0:
      return 'rock';
      break;
    case 1:
      return 'scissors';
      break;
    case 2:
      return 'paper';
      break;
  }
}

// Function to determine the winner
const determineWinner = (userChoice, computerChoice) => {
  if(userChoice === computerChoice){
    return 'The game is a tie';
  } else if(userChoice === 'rock'){
    //
    switch(computerChoice){
      case 'paper':
      	return 'You lost';
      case 'scissors':
      	return 'You won';
    }
    //
  } else if(userChoice === 'scissors'){
    //
    switch(computerChoice){
      case 'paper':
        return 'You won';
      case 'rock':
        return 'You lost';
    }
    //
  } else if (userChoice === 'bomb'){
    return 'You won and you killed everyone, inclusive yourself.'
  } else{
    //
    switch(computerChoice){
      case 'rock':
        return 'You won';
      case 'scissors':
        return 'You lost';
    //
    }
  }
};

// Function to print the result on the console
const playGame = () => {
    let userChoice = getUserChoice(A);
    let computerChoice = getComputerChoice();
    console.log(`You threw: ${userChoice}`);
    console.log(`The computer threw: ${computerChoice}`);
    console.log(determineWinner(userChoice, computerChoice));
};

playGame();
  