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

/*
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
*/

/*check
let humanChoice = getHumanChoice();
console.log(humanChoice); //check
*/

/*
//Play 5 rounds:
function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    //looping for 5 rounds:
    for (let i = 1; i < 6; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        //to determine the winner:
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
    //Score tracking:
    if (humanScore > computerScore) {
        console.log("You won the series!");
    } else if (computerScore > humanScore) {
        console.log("You lost the game!");
    } else {
        console.log("It's a tie game!")
    }
}

playGame();
*/
/*
function getHumanChoice() {
    // const rock = document.querySelector("#rock");
    // const paper = document.querySelector("#paper");
    // const scissors = document.querySelector("#scissors");
    
    const buttons = document.querySelectorAll("button");
    
    let humanChoice = "string";
    
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            //console.log(button.id);
            return humanChoice = button.id;
        });
    });

    return buttons;

    // if(humanChoice === "rock") {
        
    // }

    // if(rock.onclick) {
    //     humanChoice = "rock";
    // } else if (paper.onclick) {
    //     humanChoice = "paper";
    // } else if(scissors.onclick) {
    //     humanChoice = "scissors";
    // }
    // return humanChoice;

    // rock.addEventListener("click", () => {
    //     console.log("rock");
    //     return humanChoice = "rock";
    // });
    // paper.addEventListener("click", () => {
    //     console.log("paper");
    //     return humanChoice = "paper";
    // });
    // scissors.addEventListener("click", () => {
    //     console.log("scissors");
    //     return humanChoice = "scissors";
    // });
}*/

// const buttons = document.querySelectorAll("button");

// buttons.forEach((button) => {
//     button.addEventListener("click", () => {
//         getHumanChoice(button.id.toString())})
//     });

// function getHumanChoice(userChoice) {
//     if(userChoice === "rock"){
//         console.log("rock");
//     } else if(userChoice === "paper") {
//         return "paper";
//     } else if(userChoice === "scissors") {
//         return "scissors";
//     }
// }

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

// function getHumanChoice(userChoice) {
//     return userChoice;
// }

// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    if (computerChoice === humanChoice) {
        console.log(`It's a tie! You both chose ${humanChoice}!`);
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        //humanScore++; 
        console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
    } else {
        //computerScore++; 
        console.log(`You lose! ${computerChoice} beats ${humanChoice}...`);
    }
}

// playRound (computerSelection, humanSelection);
//console.log(`Round ${i}: User Score: ${humanScore} || Computer Score: ${computerScore}`);
    
