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
/*check
let computerChoice = getComputerChoice();
console.log(computerChoice); //check
*/
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
/*check
let humanChoice = getHumanChoice();
console.log(humanChoice); //check
*/
//let humanScore = 0;
//let computerScore = 0;

//to determine the winner:
/*
function playRound(computerChoice, humanChoice) {
let humanScore = 0;
let computerScore = 0;
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
}*/

//const humanSelection = getHumanChoice();
//const computerSelection = getComputerChoice();

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 1; i < 6; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        function playRound(computerChoice, humanChoice) {
            if (computerChoice === humanChoice) {
                console.log(`It's a tie! You both chose ${humanChoice}!`);
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

        playRound (computerSelection, humanSelection);
        console.log(`Round ${i}: User Score: ${humanScore} || Computer Score: ${computerScore}`);
    }
        if (humanScore > computerScore) {
            console.log("You won the series!");
        } else if (computerScore > humanScore) {
            console.log("You lost the game!");
        } else {
            console.log("It's a tie game!")
        }
}

playGame();
//const humanSelection = getHumanChoice();
//const computerSelection = getComputerChoice();

//playRound(humanSelection, computerSelection);

//console.log(humanScore)


/*
//play 5 rounds:
function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        const result = playRound(humanSelection, computerSelection);
        
        console.log(`Round ${i + 1}: You chose ${humanSelection}, computer chose ${computerSelection}.`);

        if (result === `You win! ${humanSelection} beats ${computerSelection}!`) {
            humanScore++;
        } else if (result === `You lose! ${computerSelection} beats ${humanSelection}...`) {
            computerScore++;
        }
    }

    if (humanScore > computerScore) {
        console.log("You won the series!");
    } else if (computerScore > humanScore) {
        console.log("You lost the game!");
    } else {
        console.log("It's a tie game!")
    }
    
}*/

//playGame();
