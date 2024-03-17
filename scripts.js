const getChoices = () => ['rock', 'paper', 'scissors'];

const random = (max) => Math.floor(Math.random() * max);

const getComputerChoice = () => {
    const choices = getChoices();
    return choices[random(choices.length)];
}

const getEntry = () => prompt(
    `Please enter your choice: 'rock', 'paper' or 'scissors'`
);

// handle user cancellation and wrong entries
const getPlayerChoice = () => {
    const entry = getEntry();
    return entry === null
        ? (console.log('Game aborted by user!'), null)
        : !getChoices().includes(entry.toLowerCase())
            ? getPlayerChoice()
            : entry.toLowerCase();
}

// Play a round. If it's a tie, ask for another user entry
const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === null) {
        return;
    } else if (playerSelection !== computerSelection) {
        return getWinner(playerSelection, computerSelection);
    } else {
        console.log(`It's a tie! You both chose ${playerSelection}`);
        return playRound(getPlayerChoice(), getComputerChoice());
    }
}

// Conditions used by the if statement to determine the winner
const winConditions = (playerSelection, computerSelection) => (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
);

const getWinner = (playerSelection, computerSelection) => {
    if (winConditions(playerSelection, computerSelection)) {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        return 1;
    } else {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        return 0;
    }
}

// Add event listeners to buttons
document.querySelector('#rock').addEventListener('click', ()=> {
    playRound('rock', getComputerChoice());
});

document.querySelector('#paper').addEventListener('click', ()=> {
    playRound('paper', getComputerChoice());
});

document.querySelector('#scissors').addEventListener('click', ()=> {
    playRound('scissors', getComputerChoice());
});


playRound(getPlayerChoice(), getComputerChoice());

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
//         computerSelection = getComputerChoice();
//     }
//     showFinalScore(score);
// }
// playGame(getPlayerChoice(), getComputerChoice());