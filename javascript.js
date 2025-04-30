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

function getValueOfChoice(choiceToInt) {

    console.log(choiceToInt)
    switch (choiceToInt.toLowerCase())
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

function playRound(computerChoice, myChoice) {
    //Here goes the battle...
    //Getting the value of my choice to start the logic
    let computerValue = getValueOfChoice(computerChoice)
    let myValue = getValueOfChoice(myChoice)
    console.log("Computer: " + computerValue)
    console.log("Me: " + myValue)

    /*
    logic goes: Rock, paper and scissor is 1, 2, 3
    if computer and me are equal (1=1, 2=2, 3=3) then no one won
    if one of the choices is greater by one then greater won
    and if one of the choices is greater by two then the lowest won
    */

    if (computerValue == myValue) {
        console.log("Try again, no one got the prize")
    }
    else if (getGreater(computerValue, myValue) == 1) {
        console.log("Computer has won")
    }
    else {
        console.log("You have won")
    }
}

function getGreater(a, b) {
    if (a > b) {
        return a - b;
    }else {
        return 0;
    }
}


computerChoice = getComputerChoice()
myChoice = getUserChoice()

playRound(computerChoice, myChoice)
