function getComputerSelection() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
        computerChoice = "rock"
    }
    else if (computerChoice === 1) {
        computerChoice = "paper"
    }
    else {
        computerChoice = "scissors"
    }
    return computerChoice;
}

function getPlayerSelection() {
    return prompt("Make your choice! Rock, Paper, Scissors?").toLowerCase();
}

let computerSelection // = getComputerSelection();
let playerSelection // = getPlayerSelection();
let playerScore = 0;
let computerScore = 0;
let result;

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
        result = "player"
    }
    else if (playerSelection == "rock" && computerSelection == "paper") {
        result = "computer"
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        result = "computer"
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        result = "player"
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        result = "player"
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        result = "computer"
    }
    else if (playerSelection == computerSelection) {
        result = "tie"
    }
}

function playGame() {
    playerSelection = getPlayerSelection();
    computerSelection = getComputerSelection();
    //result = playRound(playerSelection, computerSelection)
    playRound(playerSelection, computerSelection);
    if (result == "player") {
        console.log(`You Won. The score is You:${++playerScore} | Computer:${computerScore}`)
    }
    else if (result == "computer") {
        console.log(`You Lost! The Score is You:${playerScore} | Computer:${++computerScore}`)
    }
    else if (result == "tie") {
        console.log(`Tie! The score is You:${playerScore} | You:${computerScore}`)
    }
    else {
        console.log("Try again!")
    }
}

function game() {
    playGame();
    playGame();
    playGame();
    playGame();
    playGame();
}

game();

/*
`You Won! Rock beats Scissors. Score is You:${++playerScore} | Computer:${computerScore}`
`You lost! Paper beats Rock. Score is You:${playerScore} | Computer:${++computerScore}`
`You won! Paper beats Rock. Score is You:${++playerScore} | Computer:${computerScore}`
`You lost! Scissors beats Paper. Score is You:${playerScore} | Computer:${++computerScore}`
`You won! Scissors beats Paper. Score is You:${++playerScore} | Computer:${computerScore}`
`You lost! Rock beats Scissors. Score is You:${playerScore} | Computer:${++computerScore}`
`It's a tie! rocking janai! Score is You:${playerScore} | Computer:${computerScore}`
*/

