let humanScore = 0;
let computerScore = 0;
let result = document.getElementById("result");
let r = "rock";
let p = "paper";
let s = "scissors";
const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");
const btnHolder = document.querySelector("#buttons");
const scoreHolder = document.querySelector("#score");

btnHolder.addEventListener("click", (event) => {
    // store player's choice based on button pressed:
    let target = event.target;
    let playerChoice;

    switch(target.id) {
        case 'rock':
            playerChoice = r;
            break;
        case 'paper':
            playerChoice = p;
            break;
        case 'scissors':
            playerChoice = s;
            break;
    }

    // play a round:
    playRound(playerChoice, getComputerChoice());
});

function getComputerChoice() {
    let n = Math.floor(Math.random() * 3); // randomly returns one of 3 values: 0, 1, or 2
    let computerHand;
    if (n === 0) { 
        computerHand = r;
    } else if (n === 1) {
        computerHand = p;
    } else {
        computerHand = s;
    }
    return computerHand;
}

function playRound(humanChoice,computerChoice) {
let h = humanChoice;
let c = computerChoice;
let resultText = " ";
//check winner, print who won
if (h === c) {
    resultText = "It's a tie!";} 
else if (h === r) {
    if (c === p) {
        resultText = "You lose! Paper beats rock."
        computerScore += 1;
    } else {
        resultText = "You win! Rock beats scissors."
        humanScore += 1;
    }}
else if (h === p) {
        if (c === r) {
            resultText = "You won! Paper beats rock."
            humanScore += 1;
        } else { 
            resultText = "You lose! Scissors beats paper."
            computerScore += 1;
        }
    }
else {
    if (c === r) {
        resultText = "You lose! Rock beats scissors."
        computerScore += 1;
    } else {
        resultText = "You win! Scissors beats paper."
        humanScore += 1;
    }
} 

// Display results:
result.textContent = resultText;
scoreHolder.textContent = "Human score:" + humanScore + ". Computer score: " + computerScore + ".";

if (humanScore === 5 || computerScore === 5) {
    endGame();
}
}


// When someone gets 5 points:
function endGame() {

    let resetButton = document.createElement("button");
    resetButton.textContent = "Play Again?";
    resetButton.style.display = "block";

    let winner = humanScore > computerScore ? 
    result.textContent = "You won the game! Congratulations." : 
    result.textContent = "You lost... =(";

        //add reset button:
        scoreHolder.appendChild(resetButton);


    resetButton.addEventListener("click", () => {
    // wipe scores:
    scoreHolder.textContent = "";
    result.textContent = "";
    humanScore = 0;
    computerScore = 0;
    document.removeChild(resetButton);  
    });

}