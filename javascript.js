//console.log("hello world again!");
//randomizing the computer's choice:

function getComputerChoice() {
    return Math.floor(Math.random()*3);
}

let computerChoice = getComputerChoice();

if (computerChoice === 0){
    computerChoice = ("rock"); 
} else if(computerChoice === 1) {
    computerChoice = ("paper");
} else if(computerChoice === 2) {
    computerChoice = ("scissors");
}

console.log(computerChoice);

let userChoice = prompt("Rock, paper or scissors?", "rock");
let humanChoice = userChoice.toLowerCase();

/*
//testing: didn't work... try again...
function getHumanChoice() {
    userChoice = prompt("Rock, paper or scissors?", "rock");
    userChoice.toLowerCase();
} 
let userChoice = getHumanChoice();
let humanChoice = userChoice.toLowerCase();
*/

while (true) {
    if (humanChoice == "rock") {
        break;
    } else if (humanChoice == "paper") {
        break;
    } else if (humanChoice == "scissors") {
        break;
    } else {
        humanChoice = prompt("Please choose rock, paper or scissors");
    }
}       
    
console.log(humanChoice);


//to determine the winner:
function findWinner(computerChoice, humanChoice) {
    if (computerChoice === humanChoice) {
        return "it's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        return "You win!";
    } else {
        return "You lose!";
    }
}

let winner = findWinner(computerChoice, humanChoice);

console.log(winner);


let humanScore = 0;
let computerScore = 0;

//loop every time winner is "you win" +1 human?

function playRound(humanChoice, computerChoice) {
    let winner = findWinner(computerChoice, humanChoice);
    return winner; 
}
/*
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
*/
