
var getRandomInt = function(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

//declare global variables
//player wins 
//player losses
//letters guessed 
//number of guesses left
//
var words = ["coursework","bootcamp","javascript","cascading", "hello", "computer","icecream","pizza"];
var currentWord = words[7];

//array of letterstructs 
var current = [];

var pastGuess=[];

//function for line 27

 function letterstruct(input) {
  this.letter = input;
  this.show = false;
}


currentWord.forEach(letter => {
  current.push(new letterstruct(letter));
  console.log(current);
});

console.log(current);

// potentially write event handlers for other game options


//write an event listener which looks for the start button to be pressed 

//
//set an array of letter objects which store the letter and a boolean for show or not set the letters to current guess and all the bools to false.


//listen for key presses and update the 
document.onkeyup = function (event) {

    
}