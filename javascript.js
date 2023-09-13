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
}

function playGame() {
    //playerSelection = getPlayerSelection();
    computerSelection = getComputerSelection();
    const text = document.querySelector('.text');
    playRound(playerSelection, computerSelection);
    if(playerScore >= 4) {
        text.textContent = "You won! Game Over."
    } else if (computerScore >= 4) {
        text.textContent = "You lost! Game Over."
    } else if (result == "player") {
        text.textContent = `You won! The score is You:${++playerScore} | Computer:${computerScore}`;
    }
    else if (result == "computer") {
        text.textContent = `You Lost! The Score is You:${playerScore} | Computer:${++computerScore}`;
    }
    else if (result == "tie") {
        text.textContent = `Tie! The score is You:${++playerScore} | Computer:${++computerScore}`;
    }
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
        playerSelection = e.target.id;
        playGame();
    });
});