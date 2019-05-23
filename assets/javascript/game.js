
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
  { A: document.getElementById("a1") },
  { A: document.getElementById("a2") },
  { A: document.getElementById("a3") },
  { A: document.getElementById("a4") },
  { A: document.getElementById("a5") },
  { A: document.getElementById("a6") },
  { A: document.getElementById("a7") },
  { A: document.getElementById("a8") },
  { A: document.getElementById("a9") },
  { A: document.getElementById("a10") },
  { A: document.getElementById("a11") },
  { A: document.getElementById("a12") }
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
//example usage below class
class Letterstruct {
  constructor(input, elemID) {
    this.letter = input;
    this.ID = elemID;
    //variables automatically set by constructor 
    this.hidden = true;
    this.blank = "___";


  }
  //working
  render() {
    // console.log("Rendering page")
    if (this.hidden == false) {
      this.ID.textContent = this.letter;
      return;
    }
    this.ID.textContent = this.blank;
  }

  show() {
    // console.log("showing letterstruct value");
    this.hidden = false;
    this.render();
  }

  hideLetter() {
    // console.log("hding letterstruct value");
    this.hidden = true;
    this.render();
  }


}
//example ussage 
//const newLetter = new Letterstruct("h", idRange[0].A);
//newLetter.render();
//letterFromClass = newLetter.letter



//-------------------------------------------------------------------------------------------------------------------
// console.log(`stuff to talk about ${this.letter}`)
// use the key to the left of one. called backticks 

//Primary game state class contains a constructor which takes a word in string form and an array of id objects
// letterArray is a constructed array of letterstructs
// Number of letters is the total number of characters in the word
//guessesRemaining = 1.8 times the number of characters
class GameState {
  
  constructor(word, idArray) {
    console.log("GameState Constructor start ------------------------------");
    if(word.length>12){
      console.error(" too many letter in the target word");
    }
    this.letterArray = [];
    for (let i = 0; i < word.length; i++) {
      this.letterArray.push(new Letterstruct(word[i], idArray[i].A));
    }
    this.numberOfletters = word.length;
    this.guessesRemaining = Math.floor(word.length * 1.3);
    this.pastGuess = [];
    this.wins = 0;
    this.losses = 0;
    console.log("constructor finish ----------------------------------------");
  }
  //takes no inputs remakes the constructor to use a new random word without resetting wins and losses
  // newWord(){
  //   constrctor(word, idArray);

  // }

  //seems to be working
  //function which itterates through each letter and renders them based on the show state (true/false)
  renderAll() {
    this.letterArray.forEach(function (elem) {
      elem.render();
    });
  }

  //seems to be working
  //function which iterates through each letter and renders all the elements which corespond to the current guess
  renderLetter(l) {
    console.log("rendering letter " + l);
    this.letterArray.forEach(function (elem) {
      if (elem.letter == l) {
        elem.show();
      }
    });
  }

  //working
  //takes and input and checks if guess is in the pastguess array and return true if it finds nothing 
  isGuessNew(l){
    if(this.pastGuess.includes(l)){
      return false;
    }
    return true;
  }

  //broken always returns true
  //loops through each letter and if hidden is false for all letters return true; if it finds a hidden letter it returns false
  checkWinState(){
    console.log("---------------------check win state------------");
    let a = this.letterArray.length
    for(let count = 0; count < a; count++ ){
      console.log(` letter aray hidden value before ${this.letterArray[count].hidden} `);
      if(this.letterArray[count].hidden = true){
        console.log('------------check win state finished RETURN FALSE!---------');
        return false;
      }
    }
    console.log('------------check win state finished RETURN TRUE!---------');
    return true;
  }


  //user input handler takes input from keyup in string form and either changes the game state to reflect a incorrect solution or renderstheLetter
  userInput(l) {
    console.log("--------------------------------xxxxxxxxxxxxxxxx---------------xxxxxxxxxxxxxxxxx------------")
    console.log(this.guessesRemaining);
    // this.letterArray.forEach(function (elem) {
    //   console.log(` element letter is ${elem.letter}  l = ${l} `);
    //   console.log((elem.letter == l));

    // });
    for (let q = 0; q < this.letterArray.length; q++) {
      if (this.letterArray[q].letter == l) {
        console.log("correct letter guessed rendering letter......");
        this.renderLetter(l);
        return;
      }
    }
    if(this.isGuessNew(l)){
    this.guessesRemaining -= 1;
    this.pastGuess.push(l);
    console.log(`guesses remaining ${this.guessesRemaining} pastGuess ${this.pastGuess} `)
    }
    if (this.guessesRemaining == 0) {
      alert("you lost haha");
    }
    if(this.checkWinState()){
      alert('you win!')
    }
  }


  //end of class
}
''

const newGameState = new GameState("journalism", idRange);
newGameState.renderAll();
console.log("newGameState succseful");

//key event handler
document.onkeyup = function (event) {

  // Determines which key was pressed.
  let userGuess = event.key.toLowerCase();

  newGameState.userInput(userGuess);
 console.log(newGameState.checkWinState());

}


// 
// potentially write event handlers for other game options


//write an event listener which looks for the start button to be pressed 

//
//set an array of letter objects which store the letter and a boolean for show or not set the letters to current guess and all the bools to false.


//listen for key presses and update the 
// document.onkeyup = function (event) {


// }