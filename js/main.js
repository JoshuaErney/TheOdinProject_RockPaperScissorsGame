// Step #1 - Your game is going to play against the computer, so begin with a function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  let num = Math.floor(Math.random() * 3);
  console.log(num);
  return choices[num].toLowerCase();
}

// Step #2 - Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"

function playRound(playerSelection, computerSelection) {
  let askUser = prompt(
    "Please choose one of the following options: Rock, Paper or Scissors"
  );
  playerSelection = askUser.toLowerCase(); // Bonus Points: Make your function’s playerSelection parameter case-insensitive.

  switch (playerSelection) {
    case "rock":
      if (computerSelection === "rock") {
        console.log("It's a tie, play again!");
        playRound(); // Bonus Points: Account for TIES by re-playing the round.
      } else if (computerSelection === "paper") {
        console.log("You lose! Paper beats Rock, try again.");
        ++computerWinCount;
      } else if (computerSelection === "scissors") {
        console.log("You win! Rock beats Scissors.");
        ++playerWinCount;
      }
      break;

    case "paper":
      if (computerSelection === "paper") {
        console.log("It's a tie, play again!");
        playRound(); // Bonus Points: Account for TIES by re-playing the round.
      } else if (computerSelection === "scissors") {
        console.log("You lose! Scissors beat Paper, try again.");
        ++computerWinCount;
      } else if (computerSelection === "rock") {
        console.log("You win! Paper beats Rock.");
        ++playerWinCount;
      }
      break;

    case "scissors":
      if (computerSelection === "scissors") {
        console.log("It's a tie, play again!");
        playRound(); // Bonus Points: Account for TIES by re-playing the round.
      } else if (computerSelection === "paper") {
        console.log("You win! Scissors beats Paper.");
        ++playerWinCount;
      } else if (computerSelection === "rock") {
        console.log("You lose! Rock beats Scissors.");
        ++computerWinCount;
      }
      break;
  }
}

// Step #3 - Write a NEW function called game(). Use the previous function inside of this one to play a best-of-five game that keeps score and reports a winner or loser at the end.
function game() {
  const playerWinCount = 0;
  const computerWinCount = 0;
  do {
    playRound();
  } while (playerWinCount <= 5 || computerWinCount <= 5);
}
