// A generator of a random number < max
function random(max) {
    return Math.floor(Math.random() * max);
}

// Generate a random computer choice
function getComputerChoice () {
    const CHOICES = ['rock', 'paper', 'scissors'];
    return CHOICES[random(CHOICES.length)];
}
