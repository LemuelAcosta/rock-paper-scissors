let computerChoice;
let myChoice;

let scoreComputer = 0;
let myScore = 0;

console.log(`Rock, paper and Scissors.. \n`
    + `this game wil be played against the computer \n`
    + `Compute your strats`
)

function getComputerChoice() {
    let random = Math.floor(Math.random() * 3) +1
    let Choice = random

    switch(random)
    {
        case 1:
            Choice = "Paper"
            break;
        case 2:
            Choice = "Rock"
            break;
        case 3:
            Choice = "Scissor"
            break;
    }
    return Choice;
}

function getUserChoice() {
    let Choice
    choice = prompt("Choose your arm!!")

    return choice;
}


computerChoice = getComputerChoice()
myChoice = getUserChoice()

console.log(computerChoice)
console.log(myChoice)
