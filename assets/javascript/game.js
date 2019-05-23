
let getRandomInt = function (max) {
  return Math.floor(Math.random() * Math.floor(max));
}

//declare global variables
//player wins 
//player losses
//letters guessed 
//number of guesses left
//
const gameWords = ["coursework", "bootcamp", "javascript", "cascading", "hello", "computer", "icecream", "pizza"];
const idRange = [
  {A: document.getElementById("a1")},
  {A: document.getElementById("a2")},
  {A: document.getElementById("a3")},
  {A: document.getElementById("a4")},
  {A: document.getElementById("a5")},
  {A: document.getElementById("a6")},
  {A: document.getElementById("a7")},
  {A: document.getElementById("a8")},
  {A: document.getElementById("a9")},
  {A: document.getElementById("a10")},
  {A: document.getElementById("a11")},
  {A: document.getElementById("a12")}
];

console.log(idRange[1].ID);
console.log("_________________________________");

var currentWord = gameWords[7];




// //Letterstruct is a class which takes an input letter and element ID from getelementbyid() and constructs letter object with render methods
//letter
//ID
//hidden Set True by default 
//blank set to "___"
// render() renders the letter as based on the hidden state
//show() changed the hidden to false and renders() 
class Letterstruct {
  constructor(input, elemID) {
    this.letter = input;
    this.ID = elemID;
    //variables automatically set by constructor 
    this.hidden = true;
    this.blank = "___";

    
  }

  render() {
    console.log("Rendering page")
    if (this.hidden == false) {
      this.ID.textContent = this.letter;
      return;
    }

    this.ID.textContent = this.blank;
  }

  show(){
    console.log("showing letterstruct value");
    this.hidden = false;
    this.render();
  }


}

const newLetter = new Letterstruct("h", idRange[0].A);
console.log(newLetter.render());

// console.log(`stuff to talk about ${this.letter}`)
// use the key to the left of one. called backticks 

//Primary game state class contains a constructor which takes a word in string form and an array of id objects
// letterArray is a constructed array of letterstructs
// Number of letters is the total number of characters in the word
//guessesRemaining = 1.8 times the number of characters
class GameState {
  constructor(word, idArray) {
    this.letterArray = [];
    for (let i = 0; i < word.length; i++) {
      this.letterArray.push(new Letterstruct(word[i], idArray[i].A));
      // letterArray[]
    }
    this.numberOfletters = word.length;
    this.guessesRemaining = word.length*1.8;
    this.pastGuess = [];
    this.wins = 0;
    this.losses = 0;

  }

  //function which itterates through each letter and renders them based on the show state (true/false)
  renderAll() {
    this.letterArray.forEach(function (elem) {
      elem.render();
    });
  }

  //function which iterates through each letter and renders all the elements which corespond to the current guess
  renderLetter(l) {
    this.letterArray.forEach(function (elem) {
      if (elem.letter == l) {
        elem.show();
      }
    });
  }

}
''

const newGameState = new GameState("hellllagood",idRange);
console.log("newGameState succseful");

newGameState.renderLetter("l");


// 
// potentially write event handlers for other game options


//write an event listener which looks for the start button to be pressed 

//
//set an array of letter objects which store the letter and a boolean for show or not set the letters to current guess and all the bools to false.


//listen for key presses and update the 
// document.onkeyup = function (event) {


// }