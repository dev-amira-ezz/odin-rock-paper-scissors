// An array of choices
const getChoices = () => ['rock', 'paper', 'scissors'];

// A generator of a random number < max
const random = (max) => Math.floor(Math.random() * max);

// Generate a random computer choice
const getComputerChoice = () => {
    const choices = getChoices();
    return choices[random(choices.length)];
}

// A prompt to get user entry
const getEntry = () => prompt(
    `Please enter your choice: 'rock', 'paper' or 'scissors'`
);

// Get player choice
const getPlayerChoice = () => {
    const entry = getEntry();
    // In case of a player hits cancel
    return entry === null
        ? (console.log('Game aborted by user!'), null)
        // In case the player enters something other than game choices
        : !getChoices().includes(entry.toLowerCase())
            // Call this function again to get a correct player choice
            ? getPlayerChoice()
            // Returns user's entry in lower case in case of correct choice
            : entry.toLowerCase();
}

// play a round of the game
const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === null) {
        return;
    }
    // If it's not a tie, play a round of the game
    else if (playerSelection !== computerSelection) {
        return getWinner(playerSelection, computerSelection);
    } else {
        console.log(`It's a tie! You both chose ${playerSelection}`);
        // Call this function again until the tie breaks
        return playRound(getPlayerChoice(), getComputerChoice());
    }
}

// win conditions to check in the if statement of getWinner function
const winConditions = (playerSelection, computerSelection) => (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
)

// A round of the game
const getWinner = (playerSelection, computerSelection) => {
    if (winConditions(playerSelection, computerSelection)) {
        // Handle winning
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        return 1;
    } else {
        // Handle losing
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        return 0;
    }
}

// Play a game of five rounds
const playGame = (playerSelection, computerSelection) => {
    let numberOfRounds = 0;
    let score = 0;
    for (let i = 0; i < 5; i++) {
        // Check returned value from playRound function
        if (playerSelection === null) {
            return;
        }
        const result = playRound(playerSelection, computerSelection);
        if (result == 1) {
            score++;
            console.log(`Your score is ${score}`);
        } else {
            console.log(`Your score is ${score}`)
        }
        numberOfRounds++;
        console.log(`Number of rounds played = ${numberOfRounds}`);
        // Reset player and computer choices
        playerSelection = getPlayerChoice();
        computerSelection = getComputerChoice();
    }
    console.log(`Game over! Your total score is ${score}/5`);
    if (score >=3) {
        console.log('You won the game');
    } else {
        console.log('You lost the game!');
    }
}
// Call the playGame function
playGame(getPlayerChoice(), getComputerChoice());