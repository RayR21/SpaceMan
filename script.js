 /*----- constants -----*/
 const words = ['javascript', 'python', 'coding', 'programming']
 const random = words[Math.floor(Math.random() * words.length)];
    const guessedLetters = [];
 let maxIncorrectGuesses = 8;
 const alphabet = document.querySelector('.alphabet-container')
 const hiddenWordElement = document.getElementById('hidden-word');

  /*----- state variables -----*/
    var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
  't', 'u', 'v', 'w', 'x', 'y', 'z'];

let correctGuesses = 0;
 


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
    console.log(maxIncorrectGuesses)
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
  
        if (hiddenWord === random) {
          messageDisplay.textContent = 'Congratulations! You guessed the word!';
          document.getElementById('guess-button').setAttribute('disabled', 'true');
         }
      } else { maxIncorrectGuesses --
          
        if (maxIncorrectGuesses == 0) {
          messageDisplay.textContent = 'Sorry, you ran out of guesses. The word was: ' + random;
          document.getElementById('guess-button').setAttribute('disabled', 'true');
        }
      }
   }
  
    letterGuessInput.value = '';
  }
