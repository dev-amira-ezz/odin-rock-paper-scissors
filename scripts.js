// A global array of choices
const getChoices = () => ['rock', 'paper', 'scissors'];


// A generator of a random number < max
const random = (max) => Math.floor(Math.random() * max);

// Generate a random computer choice
const getComputerChoice = () => getChoices()[random(getChoices().length)];

// A prompt to get user entry
const getEntry = () => prompt(`Please enter your choice: 'rock', 'paper' or 'scissors'`);

// Get player choice
const getPlayerChoice = () => {
    const entry = getEntry();
    return entry === null
        ? console.log('Game aborted by user!')
        : !getChoices().includes(entry.toLowerCase())
            ? getPlayerChoice()
            : entry.toLowerCase();
}

console.log(getPlayerChoice());