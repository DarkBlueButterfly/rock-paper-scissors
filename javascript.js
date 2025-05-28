//randomizing the computer's choice:
function getComputerChoice() {
    result = Math.floor(Math.random()*3);
    if (result === 0){
        return ("rock"); 
    } else if(result === 1) {
        return ("paper");
    } else if(result === 2) {
        return ("scissors");
    }
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", () => {
    playRound("rock");
});

paper.addEventListener("click", () => {
    playRound("paper");
});

scissors.addEventListener("click", () => {
    playRound("scissors");
});

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    const container = document.querySelector("#container");

    const content = document.createElement("div");
    content.classList.add("content");
    container.appendChild(content);

    if (computerChoice === humanChoice) {
        console.log(`It's a tie! You both chose ${humanChoice}!`);
        content.textContent = `It's a tie! You both chose ${humanChoice}!`;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        //humanScore++; 
        humanScore();
        console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
        content.textContent = `You win! ${humanChoice} beats ${computerChoice}!`;
    } else {
        //computerScore++; 
        computerScore();
        console.log(`You lose! ${computerChoice} beats ${humanChoice}...`);
        content.textContent = `You lose! ${computerChoice} beats ${humanChoice}...`;
    }
}



//console.log(`Round ${i}: User Score: ${humanScore} || Computer Score: ${computerScore}`);

// Score keeping:
let humanPoint = 1;
let computerPoint = 1;

function humanScore() {
    // let humanPoint = 0;
    let score = humanPoint++;
    console.log(`User score is ${score}`);
}

function computerScore() {
    let score = computerPoint++;
    console.log(`Computer score is ${score}`);
}

// first player to reach 5 points wins:
function winCount(humanScore, computerScore) {
    // let humanScore = 0;
    // let computerScore = 0;


    // if (humanScore > computerScore) {
    //     console.log("You won the series!");
    // } else if (computerScore > humanScore) {
    //     console.log("You lost the game!");
    // } else {
    //     console.log("It's a tie game!")
    // }
}