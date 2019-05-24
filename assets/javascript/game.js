// utility methods prewritten or coppied from stack overflow
let getRandomInt = function (max) {
  return Math.floor(Math.random() * Math.floor(max));
}
//hex encoder
String.prototype.hexEncode = function () {
  var hex, i;

  var result = "";
  for (i = 0; i < this.length; i++) {
    hex = this.charCodeAt(i).toString(16);
    result += ("000" + hex).slice(-4);
  }

  return result
}
//back too string
String.prototype.hexDecode = function () {
  var j;
  var hexes = this.match(/.{1,4}/g) || [];
  var back = "";
  for (j = 0; j < hexes.length; j++) {
    back += String.fromCharCode(parseInt(hexes[j], 16));
  }

  return back;
}


//declare global variables
//player wins 
//player losses
//letters guessed 
//number of guesses left
//
const gameWords = ["coursework", "bootcamp", "journalism", "jquery", "this", "attack", "bottle",
  "camera", "dollar", "code", "development", "google", "expert", "javascript", "cascading",
  "hello", "computer", "icecream", "recursion", "objectifying", "tranquillize", "equalization",
  "hyperbolized", "pizza","extravaganza","bar","bot", "phylum","iff","lux","crocodile","shark",
  "sloth","noob","oxygen", "hydrogen","xenon", "cryptography","tax","onyx", "coaxial","matrix"];
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
    if (this.hidden == false) {
      this.ID.textContent = this.letter;
      return;
    }
    this.ID.textContent = this.blank;
  }

  show() {
    this.hidden = false;
    this.render();
  }

  // hideLetter() {
  //   this.hidden = true;
  //   this.render();
  // }


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
    if (word.length > 12) {
      console.error(" too many letter in the target word");
    }
    this.idList = idArray;
    this.letterArray = [];
    for (let i = 0; i < word.length; i++) {
      this.letterArray.push(new Letterstruct(word[i], idArray[i].A));
    }
    this.cutinput = false;
    this.numberOfletters = word.length;
    this.guessesRemaining = Math.floor(word.length * 1.3);
    this.pastGuess = [];
    this.wins = 0;
    this.losses = 0;
    this.correctGuesses = 0;
    this.$idWins = $('#wins');
    this.$idLosses = $('#losses');
    this.$idGuessesRemaining = $('#guessesremaining');
    this.$idPastGuesses = $('#pguesses');
    console.log("constructor finish ----------------------------------------");
  }
  //takes no inputs remakes the constructor to use a new random word without resetting wins and losses
  // newWord(){
  //   constrctor(word, idArray);

  // }
  renderhideAll() {
    this.idList.forEach(function (obj) {
      obj.A.textContent = "";
    });
  }

  renderGameData() {
    this.$idWins.text(this.wins);
    this.$idLosses.text(this.losses);
    this.$idGuessesRemaining.text(this.guessesRemaining);
    this.$idPastGuesses.text(this.pastGuess);
  }
  //seems to be working
  //function which itterates through each letter and renders them based on the show state (true/false)
  renderAll() {
    this.letterArray.forEach(function (elem) {
      elem.render();
    });
    this.renderGameData();
  }

  //seems to be working
  //function which iterates through each letter and renders all the elements which corespond to the current guess
  renderLetter(l) {
    this.letterArray.forEach(function (elem) {
      if (elem.letter == l) {
        elem.show();
      }
    });
  }

  //working
  //takes and input and checks if guess is in the pastguess array and return true if it finds nothing 
  isGuessNew(l) {
    if (this.pastGuess.includes(l)) {
      return false;
    }
    return true;
  }

  printAllLetterArray() {
    console.log("--------printing letter arrays --------------------------")
    this.letterArray.forEach(peram => {
      console.log("-------------------")
      console.log(peram.letter)
      console.log(peram.hidden)
      console.log(peram.ID)
    });
    console.log("--------Finished printing letter arrays --------------------------")
  }



  //broken always returns true
  //loops through each letter and if hidden is false for all letters return true; if it finds a hidden letter it returns false
  checkWinState() {
    // this.printAllLetterArray();
    let a = this.letterArray.length;//-1
    for (let count = 0; count < a; count++) {
      if (this.letterArray[count].hidden == true) {
        return false;
      }
    }
    this.wins++;
    this.cutinput = true;
    alert("you win!")
    return true;
  }
  checkWinState2() {

  }


  //user input handler takes input from keyup in string form and either changes the game state to reflect a incorrect solution or renderstheLetter
  userInput(l) {
    if (this.cutinput == false) {
      for (let q = 0; q < this.letterArray.length; q++) {
        if (this.letterArray[q].letter == l) {
          this.renderLetter(l);
          this.correctGuesses++;
          this.checkWinState();
          return;
        }
      }

      if (this.isGuessNew(l)) {
        this.guessesRemaining -= 1;
        this.pastGuess.push(l);
      }
      if (this.guessesRemaining == 0) {
        this.losses++;
        this.cutinput = true;
        alert("you lost haha");
      }
      this.checkWinState();
      this.renderGameData();
    }
  }
  startGame(wordInput) {
    this.letterArray = [];
    this.renderhideAll();
    for (let i = 0; i < wordInput.length; i++) {
      this.letterArray.push(new Letterstruct(wordInput[i], this.idList[i].A));
    }
    this.numberOfletters = wordInput.length;
    this.guessesRemaining = Math.floor(wordInput.length * 1.3);
    this.pastGuess = [];
    this.cutinput = false;
    this.renderAll();
  }


  //end of class
}
''



// wait for document to be ready before starting and making the game objects
$(document).ready(function () {


  const newGameState = new GameState("javascript", idRange);
  newGameState.renderAll();

  console.log("GameState started succsefully");

  //key event handler ------------------------------------------------------------------------------
  document.onkeyup = function (event) {

    // Determines which key was pressed. 
    let userGuess = event.key.toLowerCase();

    newGameState.userInput(userGuess);


  }
  //Key event handler Finished ---------------------------------------------------------------------

  //click event handlers 

  $(".start-button").on("click", function () {
    let newWord = gameWords[getRandomInt(gameWords.length)];
    let hexWord = newWord.hexEncode()

    console.log(`todays secret hash is [ ${hexWord}  ] New Game state started ----`)
    newGameState.startGame(newWord);

  });

}

  // 
  // potentially write event handlers for other game options


  //write an event listener which looks for the start button to be pressed 

  //
  //set an array of letter objects which store the letter and a boolean for show or not set the letters to current guess and all the bools to false.


  //listen for key presses and update the 
  // document.onkeyup = function (event) {

)
