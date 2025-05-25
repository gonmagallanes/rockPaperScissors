// ~~~~~~~~~~~~~~~~~~~~~~~~~ THIS WAS MY FIRST TRY (WITHOUT A WINNER OR A LOSER) ~~~~~~~~~~~~~~~~~~~~~~~~~

const options = ["rock", "paper", "scissors"];

// function getComputerChoice() {
//   let randomChoice = options[Math.floor(Math.random() * 3)];

//   return `Computer's choice: ${randomChoice}`;
// }

// function getHumanChoice() {
//   let myChoice = prompt("Rock, Paper or Scissors?").toLowerCase().trim();

//   let firstChar = myChoice.charAt(0).toUpperCase();

//   let restOfTheWord = myChoice.slice(1);

//   return `Your choice is: ${firstChar + restOfTheWord}`;
// }

// let letsPlay = () => {
//   return `${getHumanChoice()} | ${getComputerChoice()}`;
// };

// ~~~~~~~~~~~~~~~~~~~~~~~~~ THIS FUNCTION GIVES YOU A CHOICE AND A WINNER ~~~~~~~~~~~~~~~~~~~~~~~~~

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    let newRandomChoice = options[Math.floor(Math.random() * 3)];
    let newMyChoice = prompt("Rock, Paper, or Scissors?").toLowerCase();

    if (newRandomChoice == newMyChoice) {
      console.log("~~ Tie ~~");
    } else if (newMyChoice == "rock" && newRandomChoice == "paper") {
      console.log("~~ You lose ~~");
      computerScore++;
    } else if (newMyChoice == "rock" && newRandomChoice == "scissors") {
      console.log("~~ You win ~~");
      humanScore++;
    } else if (newMyChoice == "paper" && newRandomChoice == "rock") {
      console.log("~~ You win ~~");
      humanScore++;
    } else if (newMyChoice == "paper" && newRandomChoice == "scissors") {
      console.log("~~ You lose ~~");
      computerScore++;
    } else if (newMyChoice == "scissors" && newRandomChoice == "paper") {
      console.log("~~ You win ~~");
      humanScore++;
    } else if (newMyChoice == "scissors" && newRandomChoice == "rock") {
      console.log("~~ You lose ~~");
      computerScore++;
    }

    let newFirstChar = newMyChoice.charAt(0).toUpperCase();
    let newRestOfIt = newMyChoice.slice(1);

    let newFirstCharRandom = newRandomChoice.charAt(0).toUpperCase();
    let newRestOfItRandom = newRandomChoice.slice(1);

    console.log(
      `Your choice: ${newFirstChar + newRestOfIt} ~~ Computer's choice: ${
        newFirstCharRandom + newRestOfItRandom
      }. And the score is: ${humanScore} - ${computerScore}`
    );
  }
}
