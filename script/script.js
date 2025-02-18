function playGame(choice) {
  const computerChoice = getComputerChoice();
  if (choice ===  computerChoice) {
    displayTie();
  }
  
  else if (
    (choice === "rock" && computerChoice === "scissors") ||
    (choice === "paper" && computerChoice === "rock") ||
    (choice === "scissors" && computerChoice === "paper")
  ) {
    displayVictory();
  }
  
  else {
    displayDefeat();
  }
}

function getComputerChoice() {
  const randomInt = getRandomInt();
  
  if (randomInt === 0) {
    return "rock";
  }
  
  else if (randomInt === 1) {
    return "paper";
  }
  
  else {
    return "scissors";
  }
}

function getRandomInt() {
  // Will return a value between 0 and 2
  return Math.floor(Math.random() * 3);
}

function displayTie() {
  
}

function displayVictory() {
  
}

function displayDefeat() {
  
}
