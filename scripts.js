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

// Handle tie
const tie = (playerSelection, computerSelection) => {
    // If it's not a tie, play a round of the game
    if (playerSelection !== computerSelection) {
        return playRound(playerSelection, computerSelection);
    } else {
        console.log(`It's a tie! You both chose ${playerSelection}`);
        // Call this function again until the tie breaks
        return tie(getPlayerChoice(), getComputerChoice());
    }
}

// win conditions to check in the if statement
const winConditions = (playerSelection, computerSelection) => (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
)

// A round of the game
const playRound = (playerSelection, computerSelection) => {
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
// Call the tie function, to check if it's a tie before playing the round
console.log(tie(getPlayerChoice(), getComputerChoice()));