let humanScore = 0;
let computerScore = 0;
let mikeRoarkScore = 0;
const eve6 = document.querySelector('.quote');

function getComputerChoice(){
    let rng = Math.random();
    if (rng <= .33333333){
        return "rock";
    } else if (rng >= .334 && rng <= .666){
        return "paper";
    } else if (rng >= .667){
        return "scissors";
    }   
};

function getHumanChoice() {
    let choice;

    while (choice !== "rock" && choice !== "paper" && choice !== "scissors" && choice !== "lava") {
        choice = prompt("Please choose rock, paper, or scissors").toLowerCase();
        if (choice === "cds") {
            if (eve6) {
                const visibility = eve6.getAttribute('data-visible');
                if (visibility === "false") {
                    eve6.setAttribute("data-visible", "true");
                }
                alert("Nice try, Max");
            }
        }
        if (choice !== "rock" && choice !== "paper" && choice !== "scissors" && choice !== "lava" && choice !== "cds") {
            alert("Invalid choice. Please try again.");
        }
    }

    return choice;
}

function playRound(humanChoice, computerChoice) {
    const computerSelection = getComputerChoice();
    const humanSelection = getHumanChoice();
    console.log("The computer chose: " + computerSelection);
    console.log("You chose: " + humanSelection);
    if (computerSelection === "rock" && humanSelection === "paper"){
        humanScore++;
        return("You win, paper beats rock!");
    } else if (computerSelection === "rock" && humanSelection === "scissors"){
        computerScore++;
        return("You lose, rock beats scissors!");  
    } else if (computerSelection === "rock" && humanSelection === "rock"){
        return("It's a draw!");
    } else if (computerSelection === "paper" && humanSelection === "scissors"){
        humanScore++;
        return("You win, scissors beats paper!");
    } else if (computerSelection === "scissors" && humanSelection === "rock"){
        humanScore++;
        return("You win, rock beats scissors!");
    } else if (computerSelection === "paper" && humanSelection === "rock"){
        computerScore++;
        return("You lose, paper beats rock!"); 
    } else if (computerSelection === "scissors" && humanSelection === "paper") {
        computerScore++;
        return("You lose, scissors beats paper!"); 
    } else if (computerSelection === "paper" && humanSelection === "paper"){
        return("It's a draw!")
    } else if (computerSelection === "scissors" && humanSelection === "scissors"){
        return("It's a draw!")
    }
  };

  function playGame() {
    for (let round = 1; round <= 5; round++) {
        console.log(`Round ${round}:`);
        console.log(playRound());
        console.log(`Human Score: ${humanScore}`);
        console.log(`Computer Score: ${computerScore}`);

        if (humanScore === 3) {
            return "You win the game!";
        } else if (computerScore === 3) {
            return "You lose the game!";
        }
    }

    if (humanScore > computerScore) {
        return "You win the game!";
    } else if (computerScore > humanScore) {
        return "You lose the game!";
    } else {
        return "The game is a draw!";
    }
}

console.log(playGame());