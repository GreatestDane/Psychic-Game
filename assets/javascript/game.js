// Create an array with every letter of the alphabet for random selection //

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
 
// Create variables for the score, amount of guesses, and letters guessed //

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var lettersGuessed = [];
var gameOver = false;

// create variables for the span elements //

var spanWins = document.getElementById("wins");
var spanLosses = document.getElementById("losses");
var spanGuessesLeft = document.getElementById("guesses-left");
var spanGuessesSoFar = document.getElementById("guesses-sofar");

// Create the function for the key press event //

document.onkeyup = function(event) {
    var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
    var userGuess = event.key;
    lettersGuessed.push(userGuess);
    
    
}


