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
        console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
        content.textContent = `You win! ${humanChoice} beats ${computerChoice}!`;
        humanScore();
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}...`);
        content.textContent = `You lose! ${computerChoice} beats ${humanChoice}...`;
        computerScore();
    }
}

// Score keeping:
let humanPoint = 1;
let computerPoint = 1;

function humanScore() {
    let score = humanPoint++;
    console.log(`User score is ${score}`);
    scoreDisplay.textContent = `User score: ${score}`;
    winCount(score);
}

function computerScore() {
    let score = computerPoint++;
    console.log(`Computer score is ${score}`);
    compDisplay.textContent = `Computer score: ${score}`;
    loseCount(score);
}

// first player to reach 5 points wins:

    const container = document.querySelector("#container");

    const content = document.createElement("h2");
    const scoreDisplay = document.createElement("h3");
    const compDisplay = document.createElement("h3");
    content.classList.add("h2");
    scoreDisplay.classList.add("score");
    compDisplay.classList.add("score");
    container.appendChild(content);
    container.appendChild(scoreDisplay);
    container.appendChild(compDisplay);

function winCount(score) {
    if (score === 5) {
        console.log("You won the series! You scored 5 points before the computer!");
        content.setAttribute("style", "color: magenta;");
        content.textContent = "You won the series! You scored 5 points before the computer!";
    } 
}

function loseCount(score) {
    if (score === 5) {
        console.log("Oops! You lost! Computer scored 5 points before you!");
        content.style.color = "red";
        content.textContent = "Oops! You lost! Computer scored 5 points before you!";
    }
}
