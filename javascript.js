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

function playRound(computerChoice, myChoice) {
    //Here goes the battle...
    //Getting the value of my choice to start the logic
    let computerValue = getValueOfChoice(computerChoice)
    let myValue = getValueOfChoice(myChoice)

}

function getValueOfChoice(choiceToInt) {
    //herre i get the value of the choice i make
    choiceToInt = String(choiceToInt.toLoweCase())

    switch (choiceToInt)
    {
        case "rock":
            return 1
            break;
        case "paper":
            return 2
            break;
        default:
            return 3;
    }    
}


computerChoice = getComputerChoice()
myChoice = getUserChoice()

console.log(computerChoice)
console.log(myChoice)
