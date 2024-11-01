function getComputerChoice() {
    let n = Math.floor(Math.random() * 3); // randomly returns one of 3 values: 0, 1, or 2
    let computerHand;
    if (n === 0) { 
        computerHand = "Rock";
    } else if (n === 1) {
        computerHand = "Paper";
    } else {
        computerHand = "Scissors";
    }
    return computerHand;
}

console.log(getComputerChoice());