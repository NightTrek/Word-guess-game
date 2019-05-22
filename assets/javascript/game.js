
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
const idRange = ["a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", 'a10', "a11", "a12", "a13", "a14", "a15"];
let currentWord = words[7];

//array of letterstructs 


var pastGuess = [];

//function for line 27

//  const Letterstruct = function(input, id) {
//   this.letter = input;
//   this.show = false;
//   this.ID = id;
// }

//Letterstruct is a class which takes an input letter and element ID and constructs 
class Letterstruct {
  constructor(input, elemID) {
    this.letter = input;
    this.ID = elemID;
    //variables automatically set by constructor 
    this.show = false;
    this.blank = "___";

  }

  render() {
    if (this.show) {
      document.getElementById(this.ID).innerHTML = this.letter;
    }
    document.getElementById(this.ID).innerHTML = this.blank;
  }

  show() {
    show = true;
    this.render()
  }

  get elementID() {
    return this.ID
  }


}
// console.log(`stuff to talk about ${this.letter}`)
// use the key to the left of one. called backticks 

//a class which takes a word and idRange and returns an object containing an array of letterstructs and number of letters and some rendering functions
class current {
  constructor(word, idArray) {
    this.letterArray = [];
    for (let i = 0; i < word.length; i++) {
      this.letterArray.push(new Letterstruct(word[i], idArray[i]));
    }
    this.numberOfletters = word.length;

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

const newLetter = new current()


// 
// potentially write event handlers for other game options


//write an event listener which looks for the start button to be pressed 

//
//set an array of letter objects which store the letter and a boolean for show or not set the letters to current guess and all the bools to false.


//listen for key presses and update the 
document.onkeyup = function (event) {


}