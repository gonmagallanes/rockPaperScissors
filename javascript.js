// ~~~~~~~~~~~~~~~~~~~~~~~~~ THIS FUNCTION GIVES YOU A CHOICE AND A WINNER ~~~~~~~~~~~~~~~~~~~~~~~~~

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

function rockChoice() {
  const options = ["rock", "paper", "scissors"];

  let choice = "rock";

  let randomChoice = options[Math.floor(Math.random() * 3)];

  if (choice === randomChoice) {
    const texto = document.querySelector("#body");
    texto.textContent = `Your choice: rock, Computer's choice: ${randomChoice}  || IT'S A TIE`;
    document.body.appendChild(texto);
    texto.setAttribute(
      "style",
      "display: flex; justify-content: center; font-size: 2rem; color: gray"
    );
    console.log(randomChoice);
  } else if (randomChoice === "paper") {
    const texto = document.querySelector("#body");
    texto.textContent = `Your choice: rock, Computer's choice: ${randomChoice}  || YOU LOSE`;
    texto.setAttribute(
      "style",
      "display: flex; justify-content: center; font-size: 2rem; color: red"
    );
    document.body.appendChild(texto);
  } else if (randomChoice === "scissors") {
    const texto = document.querySelector("#body");
    texto.textContent = `Your choice: rock, Computer's choice: ${randomChoice}  || YOU WIN`;
    texto.setAttribute(
      "style",
      "display: flex; justify-content: center; font-size: 2rem; color: green"
    );
    document.body.appendChild(texto);
  }
}
function paperChoice() {
  const options = ["rock", "paper", "scissors"];

  let choice = "paper";

  let randomChoice = options[Math.floor(Math.random() * 3)];

  if (choice === randomChoice) {
    const texto = document.querySelector("#body");
    texto.textContent = `Your choice: paper, Computer's choice: ${randomChoice}  || IT'S A TIE`;
    texto.setAttribute(
      "style",
      "display: flex; justify-content: center; font-size: 2rem; color: gray"
    );
    document.body.appendChild(texto);
    console.log(randomChoice);
  } else if (randomChoice === "scissors") {
    const texto = document.querySelector("#body");
    texto.textContent = `Your choice: paper, Computer's choice: ${randomChoice}  || YOU LOSE`;
    texto.setAttribute(
      "style",
      "display: flex; justify-content: center; font-size: 2rem; color: red"
    );
    document.body.appendChild(texto);
  } else if (randomChoice === "rock") {
    const texto = document.querySelector("#body");
    texto.textContent = `Your choice: paper, Computer's choice: ${randomChoice}  || YOU WIN`;
    texto.setAttribute(
      "style",
      "display: flex; justify-content: center; font-size: 2rem; color: green"
    );
    document.body.appendChild(texto);
  }
}

function scissorsChoice() {
  const options = ["rock", "paper", "scissors"];

  let choice = "scissors";

  let randomChoice = options[Math.floor(Math.random() * 3)];

  if (choice === randomChoice) {
    const texto = document.querySelector("#body");
    texto.textContent = `Your choice: scissors, Computer's choice: ${randomChoice}  || IT'S A TIE`;
    texto.setAttribute(
      "style",
      "display: flex; justify-content: center; font-size: 2rem; color: gray"
    );
    document.body.appendChild(texto);
    console.log(randomChoice);
  } else if (randomChoice === "paper") {
    const texto = document.querySelector("#body");
    texto.textContent = `Your choice: scissors, Computer's choice: ${randomChoice}  || YOU WIN`;
    texto.setAttribute(
      "style",
      "display: flex; justify-content: center; font-size: 2rem; color: green"
    );
    document.body.appendChild(texto);
  } else if (randomChoice === "rock") {
    const texto = document.querySelector("#body");
    texto.textContent = `Your choice: scissors, Computer's choice: ${randomChoice}  || YOU LOSE`;
    texto.setAttribute(
      "style",
      "display: flex; justify-content: center; font-size: 2rem; color: red"
    );
    document.body.appendChild(texto);
  }
}

// function playGame() {
//   let humanScore = 0;
//   let computerScore = 0;

// for (let i = 0; i < 5; i++) {
//   let newRandomChoice = options[Math.floor(Math.random() * 3)];
//   let newMyChoice = myCho
//   if (newRandomChoice == newMyChoice) {
//     console.log("~~ Tie ~~");
//   } else if (newMyChoice == "rock" && newRandomChoice == "paper") {
//     console.log("~~ You lose ~~");
//     computerScore++;
//   } else if (newMyChoice == "rock" && newRandomChoice == "scissors") {
//     console.log("~~ You win ~~");
//     humanScore++;
//   } else if (newMyChoice == "paper" && newRandomChoice == "rock") {
//     console.log("~~ You win ~~");
//     humanScore++;
//   } else if (newMyChoice == "paper" && newRandomChoice == "scissors") {
//     console.log("~~ You lose ~~");
//     computerScore++;
//   } else if (newMyChoice == "scissors" && newRandomChoice == "paper") {
//     console.log("~~ You win ~~");
//     humanScore++;
//   } else if (newMyChoice == "scissors" && newRandomChoice == "rock") {
//     console.log("~~ You lose ~~");
//     computerScore++;

//   let newFirstChar = newMyChoice.charAt(0).toUpperCase();
//   let newRestOfIt = newMyChoice.slice
//   let newFirstCharRandom = newRandomChoice.charAt(0).toUpperCase();
//   let newRestOfItRandom = newRandomChoice.slice
//   console.log(
//     `Your choice: ${newFirstChar + newRestOfIt} ~~ Computer's choice: ${
//       newFirstCharRandom + newRestOfItRandom
//     }. And the score is: ${humanScore} - ${computerScore}`
//   );
// }
// }
