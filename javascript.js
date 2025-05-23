console.log("chupala");

const options = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  let randomChoice = options[Math.floor(Math.random() * 3)];

  return `Computer's choice: ${randomChoice}`;
}

function getHumanChoice() {
  let election = prompt("Rock, Paper or Scissors?").toLowerCase().trim();

//   if (election != "rock") 
//     {
//     do {
//       election = prompt("Try again! \n Rock, Paper or Scissors?")
//         .toLowerCase()
//         .trim();
//     } while (election == "rock");
//   }

  return `Your choice is: ${election}`;
}

function letsPlay() {
  getHumanChoice();
  getComputerChoice();

  return `${getHumanChoice()} | ${getComputerChoice()}`;
}

function score() {}
