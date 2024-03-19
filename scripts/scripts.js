import {Helpers} from './helpers.js';
// Array of choices
const choices = ['rock', 'paper', 'scissors'];

// Add event listeners to buttons
choices.forEach(choice => {
    document.querySelector(`#${choice}`).addEventListener('click', () => {
        playRound(choice, choices[Helpers.random(choices.length)]);
    });
});

let playerScore = 0;
let computerScore = 0;
let numberOfRounds = 0;

const displayRoundResult = (result, playerSelection, computerSelection) => {
    const results = document.querySelector('#results');
    Helpers.clearNode(results);
    Helpers.createNode('scoreTitle', 'h2', 'Score', results);

    // A paragraph to display round result
    let content = '';
    if (result == 'tie') {
        content = `It's a tie! 
                   You both chose ${playerSelection}.`;
    } else if (result == 'win') {
        content = `You win the round! 
                   ${playerSelection} beats ${computerSelection}.`;
    } else if (result == 'lose') {
        content = `You lose the round! 
                   ${computerSelection} beats ${playerSelection}.`;
    }
    Helpers.createNode('roundResult', 'p', content, results);

    // A paragraph to display round score
    Helpers.createNode('roundScore'
        , 'p'
        , `Your score is ${playerScore}/5. 
           The computer's score is ${computerScore}/5.`
        , results);

    // A paragraph to display number of rounds played
    Helpers.createNode('roundCount'
        , 'p'
        , `You played ${numberOfRounds} of 5 rounds.`
        , results)
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
    let content = '';

    if (playerScore > computerScore) {
        content = 'Congratulations! You win the game!';
    } else if (playerScore === computerScore) {
        content = `It's a draw! You both got the same score`;
    } else {
        content = 'You lose the game! Better luck next time.';
    }
    let finalScore = Helpers.createNode('finalScore', 'p', content, results);
    finalScore.style.color = 'red';
    finalScore.style.fontSize = '28px';
    // Disable choice buttons
    choices.forEach(choice => {
        document.querySelector(`#${choice}`).disabled = true;
    });
    document.querySelector('#select').textContent = '';
}

// Start a new game
document.querySelector('#newGame').addEventListener('click', () => {
    // Reset game data
    playerScore = 0;
    computerScore = 0;
    numberOfRounds = 0;
    Helpers.clearNode(document.querySelector('#results'));
    choices.forEach(choice => {
        document.querySelector(`#${choice}`).disabled = false;
    });
    document.querySelector('#select').textContent =
        'Please choose one of the three options';
})