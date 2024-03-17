// Array of choices
const choices = ['rock', 'paper', 'scissors'];

// Add event listeners to buttons
choices.forEach(choice => {
    document.querySelector(`#${choice}`).addEventListener('click', () => {
        playRound(choice, choices[Math.floor(Math.random() * choices.length)]);
    });
})

// Display round result to the user
const displayResult = (result) => {
    // Select the div that the paragraph will attach to
    const results = document.querySelector('#results');

    // If paragraph not created before, create it
    let roundResult = document.querySelector('#roundResult');
    if (roundResult === null) {
        roundResult = document.createElement('p');
        roundResult.setAttribute('id', 'roundResult');
    }

    // Add the result passed from the playRound function
    roundResult.textContent = result;

    // Append the paragraph to the results div
    results.appendChild(roundResult);
}

// Play a round
const playRound = (playerSelection, computerSelection) => {
    // if player and computer choices are different
    if (playerSelection !== computerSelection) {
        // Conditions when the player wins
        if ((playerSelection === 'rock' && computerSelection === 'scissors')
            || (playerSelection === 'paper' && computerSelection === 'rock')
            || (playerSelection === 'scissors' && computerSelection === 'paper')) {
            displayResult(`You win! ${playerSelection} beats ${computerSelection}`);
            // When the player loses
        } else {
            displayResult(`You lose! ${computerSelection} beats ${playerSelection}`);
        }
        // If it's a tie (both player and computer chose the same thing)
    } else {
        displayResult(`It's a tie! You both chose ${playerSelection}`);
    }
}

// const showFinalScore = (score) => {
//     console.log(`Game over! Your total score is ${score}/5`);
//     if (score >= 3) {
//         console.log('You won the game');
//     } else {
//         console.log('You lost the game!');
//     }
// }

// const showRoundDetails = (score, numberOfRounds) => {
//     console.log(`Your score is ${score}`);
//     console.log(`Number of rounds played = ${numberOfRounds}`);
// }

// const playGame = (playerSelection, computerSelection) => {
//     let numberOfRounds = 0;
//     let score = 0;
//     for (let i = 0; i < 5; i++) {
//         if (playerSelection === null) {
//             return;
//         }
//         // In case of the player wins the round
//         const result = playRound(playerSelection, computerSelection);
//         if (result == 1) {
//             score++;
//         }
//         numberOfRounds++;
//         showRoundDetails(score, numberOfRounds);
//         // Reset data to start new round with fresh data
//         playerSelection = getPlayerChoice();
//         computerSelection = computerChoice;
//     }
//     showFinalScore(score);
// }
// playGame(getPlayerChoice(), computerChoice);