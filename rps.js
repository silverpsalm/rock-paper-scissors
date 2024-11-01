let humanScore = 0;
let computerScore = 0;
let result = document.getElementById("result");
let r = "rock";
let p = "paper";
let s = "scissors";

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

function getHumanChoice() {
    let choice = prompt("Rock, paper, or scissors?", "Rock");
    return choice;

}

function playRound(humanChoice,computerChoice) {
// make case insensitive
let h = humanChoice.toLowerCase();
let c = computerChoice;
let resultText = " ";
//check winner, print who won
if (h === c) {
    resultText = "It's a tie!";
    console.log(resultText);
} 
else if (h === r) {
    if (c === p) {
        resultText = "You lose! Paper beats rock."
        console.log(resultText);
        computerScore += 1;
    } else {
        resultText = "You win! Rock beats scissors."
        console.log(resultText);
        humanScore += 1;
    }}
else if (h === p) {
        if (c === r) {
            resultText = "You won! Paper beats rock."
            console.log(resultText);
            humanScore += 1;
        } else { 
            resultText = "You lose! Scissors beats paper."
            console.log(resultText);
            computerScore += 1;
        }
    }
else {
    if (c === r) {
        resultText = "You lose! Rock beats scissors."
        console.log(resultText);
        computerScore += 1;
    } else {
        resultText = "You win! Scissors beats paper."
        console.log(resultText);
        humanScore += 1;
    }
} 


result.textContent = resultText;
console.log("Human score:" + humanScore + ". Computer score: " + computerScore + ".");
   // update winner's score variable 
}


// play game of 5 rounds
function playGame() {
    for (i=1;i<=5;i++) {
        playRound(getHumanChoice(), getComputerChoice());
        let roundsLeft = 5 - i;
        console.log(`${roundsLeft} rounds left!`)
    }
    (humanScore > computerScore) ? console.log("You won the game! Congrats!") : console.log("You lost. :(");
}

playGame();

