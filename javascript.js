console.log("chupala");

const options = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  let randomChoice = options[Math.floor(Math.random() * 3)];

  return `Computer's choice: ${randomChoice}`;
}

function getHumanChoice() {
  let myChoice = prompt("Rock, Paper or Scissors?").toLowerCase().trim();

  if (myChoice != "rock" || myChoice != "paper" || myChoice != "scissors") {
    do {
      myChoice = prompt("Try again! \n Rock, Paper or Scissors?")
        .toLowerCase()
        .trim();
    } while (myChoice == "rock" || myChoice == "paper" || myChoice == "scissors");
  }

  let primerMayuscula = myChoice.charAt(0).toUpperCase()
  
  let restoPalabra = myChoice.slice(1)


  return `Your choice is: ${primerMayuscula+restoPalabra}`;
}

let letsPlay = () => {
  return `${getHumanChoice()} | ${getComputerChoice()}`
}

