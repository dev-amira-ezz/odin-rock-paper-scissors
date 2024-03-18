// Array of choices
const choices = ['rock', 'paper', 'scissors'];

// Add event listeners to buttons
choices.forEach(choice => {
    document.querySelector(`#${choice}`).addEventListener('click', () => {
        playRound(choice, choices[Math.floor(Math.random() * choices.length)]);
    });
});

let playerScore = 0;
let computerScore = 0;
let numberOfRounds = 0;

// Check if the node occurs and if not, create one
const createNode = (nodeName) => {
    let node = document.querySelector(`#${nodeName}`);
    if (node === null) {
        node = document.createElement('p');
        node.setAttribute('id', `#${nodeName}`);
    }
    return node;
}

const resetResults = (results) => {
    while (results.firstChild) {
        results.removeChild(results.firstChild);
    }
}
const displayRoundResult = (result, playerSelection, computerSelection) => {

    resetResults(document.querySelector('#results'));
    const results = createNode('results');
    // A paragraph to display round result
    let roundResult = createNode('roundResult');
    if (result == 'tie') {
        roundResult.textContent = `It's a tie! You both chose ${playerSelection}.`;
    } else if (result == 'win') {
        roundResult.textContent = `You win the round! ${playerSelection} beats ${computerSelection}.`;
    } else if (result == 'lose') {
        roundResult.textContent = `You lose the round! ${computerSelection} beats ${playerSelection}.`;
    }
    results.appendChild(roundResult);

    // A paragraph to display round score
    let roundScore = createNode('roundScore');
    roundScore.textContent = `Your score is ${playerScore}/5. The computer's score is ${computerScore}/5.`;
    results.appendChild(roundScore);


    // A paragraph to display number of rounds played
    let roundCount = createNode('roundCount')
    roundCount.textContent = `You played ${numberOfRounds} of 5 rounds.`;
    results.appendChild(roundCount);
}

// Play a round
const playRound = (playerSelection, computerSelection) => {
    numberOfRounds++
    // A tie
    if (playerSelection === computerSelection) {
        displayRoundResult('tie', playerSelection, computerSelection);

    } else if ((playerSelection === 'rock' && computerSelection === 'scissors')
        || (playerSelection === 'paper' && computerSelection === 'rock')
        || (playerSelection === 'scissors' && computerSelection === 'paper')) {
        playerScore++;
        displayRoundResult('win', playerSelection, computerSelection);
        // When the player loses
    } else {
        computerScore++;
        displayRoundResult('lose', playerSelection, computerSelection);
    }
    if (playerScore >= 3 || computerScore >= 3 || numberOfRounds >= 5) {
        endGame();
    }
}

// Final game result
const endGame = () => {
    const finalScore = createNode('finalScore');
    if (playerScore > computerScore) {
        finalScore.textContent = 'Congratulations! You win the game!';
    } else if (playerScore === computerScore) {
        finalScore.textContent = `It's a draw! You both got the same score`;
    } else {
        finalScore.textContent = 'You lose the game! Better luck next time.';
    }
    results.appendChild(finalScore);
    // Reset game data
    playerScore = 0;
    computerScore = 0;
    numberOfRounds = 0;
    // Disable choice buttons
    choices.forEach(choice => {
        document.querySelector(`#${choice}`).disabled = true;
    });
}

// Start a new game
document.querySelector('#newGame').addEventListener('click', () => {
    resetResults(document.querySelector('#results'));
    choices.forEach(choice => {
        document.querySelector(`#${choice}`).disabled = false;
    });
})