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

let humanScore = 0;
let computerScore = 0;



/*
//humanChoice = humanChoice.toLowerCase() === humanChoice.toLowerCase();

//console.log(getHumanChoice());

function playRound(humanChoice, computerChoice) {

}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
*/

