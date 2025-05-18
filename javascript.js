//console.log("hello world again!");
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

let computerChoice = getComputerChoice();
console.log(computerChoice); //check

//prompt user: 
function getHumanChoice() {
    userChoice = prompt("Rock, paper or scissors?", "rock");
    let humanChoice = userChoice.toLowerCase();
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
    return humanChoice;
}

let humanChoice = getHumanChoice();
console.log(humanChoice); //check

let humanScore = 0;
let computerScore = 0;

//to determine the winner:
function playRound(computerChoice, humanChoice) {
    if (computerChoice === humanChoice) {
        console.log("It's a tie!");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++; 
        console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
    } else {
        computerScore++; 
        console.log(`You lose! ${computerChoice} beats ${humanChoice}...`);
    }
}
playRound(computerChoice, humanChoice);
console.log(humanScore)

//let winner = findWinner(computerChoice, humanChoice);

//console.log(winner);

/*
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
*/
