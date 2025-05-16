//console.log("hello world again!");
//randomizing the computer's choice:
/*function getComputerChoice() {
    return Math.floor(Math.random()*3);

}*/
/* //this isn't a function...
let computerChoice = Math.floor(Math.random()*3);

if (computerChoice === 0){
    console.log("Rock"); 
} else if(computerChoice === 1) {
        console.log("Paper");
} else if(computerChoice === 2) {
    console.log("Scissors");
}

console.log(computerChoice); //check
*/

//used an array...
/*function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomNum = Math.floor(Math.random()*3);
    return choices[randomNum];
}

console.log(getComputerChoice());
*/

function getComputerChoice() {
    return Math.floor(Math.random()*3);
}

let computerChoice = getComputerChoice();

if (computerChoice === 0){
    console.log("rock"); 
} else if(computerChoice === 1) {
    console.log("paper");
} else if(computerChoice === 2) {
    console.log("scissors");
}

let getHumanChoice = prompt("Rock, paper or scissors?");
let humanChoice = getHumanChoice.toLowerCase();

console.log(humanChoice);



/*
function getHumanChoice() {
    return prompt("Rock, paper or scissors?");
}*/

/*
//console.log(getHumanChoice());
let humanChoice = getHumanChoice();
humanChoice.sort((a,b) => a.localeCompare(b, "en", {ignorePunctuation: true}));


let humanScore = 0;
let computerScore = 0;

//humanChoice = humanChoice.toLowerCase() === humanChoice.toLowerCase();

//console.log(getHumanChoice());

function playRound(humanChoice, computerChoice) {

}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
*/

