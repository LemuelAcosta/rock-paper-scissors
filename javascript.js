let computerChoice;
let myChoice;

console.log(`Rock, paper and Scissors.. \n`
    + `this game wil be played against the computer \n`
    + `Compute your strats`
)

function getComputerChoice() {
    let random = Math.floor(Math.random() * 3) +1
    computerChoice = random

    switch(random)
    {
        case 1:
            computerChoice = "Paper"
            break;
        case 2:
            computerChoice = "Rock"
            break;
        case 3:
            computerChoice = "Scissor"
            break;
    }
    return computerChoice;
}

function getUserChoice() {
    
}


console.log(getComputerChoice())
