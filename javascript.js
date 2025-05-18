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
