// A global array of choices
const CHOICES = ['rock', 'paper', 'scissors'];

// A generator of a random number < max
function random(max) {
    return Math.floor(Math.random() * max);
}

// Generate a random computer choice
function getComputerChoice() {
    return CHOICES[random(CHOICES.length)];
}

// Get player choice
function getPlayerChoice() {
    let entry = prompt(`Please enter your choice: 'rock', 'paper' or 'scissors'`);
    if (entry === null) {
        console.log('Game aborted by user');
        return;
    } else if (!CHOICES.includes(entry)) {
        return entry = getPlayerChoice();
    } else {
        return entry.toLowerCase();
}
}

console.log(getPlayerChoice());