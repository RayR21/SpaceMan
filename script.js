 /*----- constants -----*/
 const words = ['javascript', 'python', 'coding', 'programming']
 const random = words[Math.floor(Math.random() * words.length)];
    const guessedLetters = [];
 const maxIncorrectGuesses = 8;
 const alphabet = document.querySelector('.alphabet-container')
 const hiddenWordElement = document.getElementById('hidden-word');

  /*----- state variables -----*/
    var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
  't', 'u', 'v', 'w', 'x', 'y', 'z'];

let correctGuesses = 0;
 
let incorrectGuesses = 0;

let hiddenWord = '_'.repeat(random.length);
hiddenWordElement.textContent = hiddenWord;



  /*----- cached elements  -----*/
const wordDisplay = document.getElementById('word-display');
const messageDisplay = document.getElementById('message-display');
letters.forEach(letter => {
    const key = document.createElement('button')
    key.innerText = letter

    alphabet.appendChild(key)})
    

  /*----- event listeners -----*/
  document.getElementById('guess-button').addEventListener('click', makeGuess) ;

  /*----- functions -----*/
  function makeGuess() {
    const letterGuessInput = document.getElementById('letter-guess');
    const guessedLetter = letterGuessInput.value.trim().toLowerCase();
  
    if (/^[a-z]$/.test(guessedLetter) && !guessedLetters.includes(guessedLetter)) {
      guessedLetters.push(guessedLetter);
  
      if (random.includes(guessedLetter)) {
        let newHiddenWord = '';
        for (let i = 0; i < random.length; i++) {
          if (random[i] === guessedLetter) {
            newHiddenWord += guessedLetter;
          } else {
            newHiddenWord += hiddenWord[i];
          }
        }
        hiddenWord = newHiddenWord;
        hiddenWordElement.textContent = hiddenWord;
  
        if (!hiddenWord.includes('_')) {
          messageDisplay.textContent = 'Congratulations! You\'ve guessed the word!';
        }
      } else {
        // Display the hangman part for an incorrect guess
        showHangmanPart(incorrectGuesses);
  
        incorrectGuesses++;
        if (incorrectGuesses >= maxIncorrectGuesses) {
          messageDisplay.textContent = 'Sorry, you\'ve run out of guesses. The word was: ' + random;
          document.getElementById('guess-button').setAttribute('disabled', 'true');
        }
      }
    } else {
      messageDisplay.textContent = 'Please enter a valid single letter.';
    }
  
    letterGuessInput.value = '';
  }
  
  function showHangmanPart(partNumber) {
    const hangmanParts = document.querySelectorAll('.hangman > div');
    hangmanParts[partNumber].classList.remove('hidden');
  }




  
   












//generate a word at random and store it in a variable

//display the length of the word to the user

//correct_guesses is less than the length of the word

//prompt the user to guess a letter

// if the guess is correct increment correct_guesses by 1

// if the guess is incorrect increment incorrect_guesses by 1 

// and draw the next part of the spaceman

//if the incorrect_guesses is greater than 8, tell the user 

// they lost and exit the program

//if correct_guesses is equal to the length of the word, tell the user they won
