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

let computerSelection;
let playerSelection;
let playerScore = 0;
let computerScore = 0;
let result;

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
    else {
        result = "spelling error"
    }
}

function playGame() {
    playerSelection = getPlayerSelection();
    computerSelection = getComputerSelection();
    playRound(playerSelection, computerSelection);
    if (result == "player") {
        console.log(`You Won. The score is You:${++playerScore} | Computer:${computerScore}`)
    }
    else if (result == "computer") {
        console.log(`You Lost! The Score is You:${playerScore} | Computer:${++computerScore}`)
    }
    else if (result == "tie") {
        console.log(`Tie! The score is You:${++playerScore} | You:${++computerScore}`)
    }
    else if (result == "spelling error") {
        playGame()
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

if (playerScore > computerScore) {
    alert(`You Won! Final Score: You:${playerScore} | Computer:${computerScore}`)
}
else if (playerScore < computerScore) {
    alert(`You Lost! Final Score: You:${playerScore} | Computer:${computerScore}`)
}
else {
    alert(`Tie Game! Final Score: You:${playerScore} | Computer:${computerScore}`)
}
