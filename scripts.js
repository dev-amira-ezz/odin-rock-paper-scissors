// Array of choices
const choices = ['rock', 'paper', 'scissors'];

// Add event listeners to buttons
choices.forEach(choice => {
    document.querySelector(`#${choice}`).addEventListener('click', () => {
        playRound(choice, choices[Math.floor(Math.random() * choices.length)]);
    });
})

let playerScore = 0;
let computerScore = 0;
let numberOfRounds = 0;

const displayRoundResult = (result, playerSelection, computerSelection) => {
    const results = document.querySelector('#results');

    // A paragraph to display round result
    let roundResult = document.querySelector('#roundResult');
    if (roundResult === null) {
        roundResult = document.createElement('p');
        roundResult.setAttribute('id', 'roundResult');
    }

    if (result == 'tie') {
        roundResult.textContent = `It's a tie! You both chose ${playerSelection}.`;
    } else if (result == 'win') {
        roundResult.textContent = `You win the round! ${playerSelection} beats ${computerSelection}.`;
    } else if (result == 'lose') {
        roundResult.textContent = `You lose the round! ${computerSelection} beats ${playerSelection}.`;
    }
    results.appendChild(roundResult);

    // A paragraph to display round score
    let roundScore = document.querySelector('#roundScore');
    if (roundScore === null) {
        roundScore = document.createElement('p');
        roundScore.setAttribute('id', 'roundScore');
    }
    roundScore.textContent = `Your score is ${playerScore}/5. The computer's score is ${computerScore}/5.`;
    results.appendChild(roundScore);


    // A paragraph to display number of rounds played
    let roundCount = document.querySelector('#roundCount');
    if (roundCount === null) {
        roundCount = document.createElement('p');
        roundCount.setAttribute('id', 'roundCount');
    }

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

}