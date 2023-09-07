function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
        return "rock"
    }
    else if (computerChoice === 1) {
        return "paper"
    }
    else {
        return "scissors"
    }
}

function getPlayerSelection() {
    return prompt("Make your choice! Rock, Paper, Scissors?").toLowerCase()
}

const computerSelection = getComputerChoice()
const playerSelection = getPlayerSelection()

/* This is a function to return the resutl of the game.
If player chose rock and computer chose scissors return "You Won! Rock beats Scissors"
if player chose scissors and computer chose rock return "You lost Rock beats scissors"
if player chose rock and computer chose paper return "You lost! Paper beats Rock"
IF player chose paper and computer chose rock return "You Won! Paper beats Rock"
if player chose paper and computer chose scissors return "You lost! Scissors beat paper"
if player chose scissors and computer chose paper return "You won! Scissors beat paper"
Otherwise return "It's a tie! Rocking janai!"
add an error option to check for errors
*/
function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You Won! Rock beats Scissors"
    }
    else if (playerSelection == "rock" && computerSelection == "paper") {
        return "You lost! Paper beats Rock"
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "You lost! Scissors beats Paper"
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        return "You won! Paper beats Rock"
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "You won! Scissors beats Paper"
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "You lost! Rock beats Scissors"
    }
    else if (playerSelection == computerSelection) {
        return "It's a tie! rocking janai!"
    }
    else {
        return "Spelling Error!"
    }
}