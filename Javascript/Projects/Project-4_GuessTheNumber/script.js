
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}

//-------------------------------------------my version 1-------------------------------------------------------------

/* let randomNumber = parseInt(Math.random() * 100 + 1);

const userInput = document.querySelector('#guessField');
const submit = document.querySelector('#subt');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let startGame = true;

if (startGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    if (isNaN(guess)) {
      lowOrHi.innerHTML = `please enter valid number`;
    } else if (guess < 0) {
      lowOrHi.innerHTML = 'please enter num more than 0';
    } else if (guess > 100) {
      lowOrHi.innerHTML = 'please enter num less than 100';
    } else {
      prevGuess.push(guess);
      userInput.value = '';
      guessSlot.innerHTML += `${guess}, `;
      numGuess++;
      remaining.innerHTML = `${11 - numGuess} `;

      if (guess === randomNumber) {
        displayMessage('you guessed it right');
      } else if (guess < randomNumber) {
        displayMessage('number is TOO small');
      } else if (guess > randomNumber) {
        displayMessage('number is TOO big');
      }
      if (numGuess > 10) {
        displayMessage(`Game Over, Random number is ${randomNumber}`);
        userInput.value = '';
        userInput.setAttribute('disabled', '');
        guessSlot.innerHTML = '';
        remaining.innerHTML = '10';
        p.classList.add('button');
        p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
        startOver.appendChild(p);
        startGame = false;
        newGame();
      }
    }
  });
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    startGame = true;
  });
}


-------------------------------------my version 2--perfectOne---------------------------------------------------------

let randomNumber = parseInt(Math.random() * 100 + 1);

const userInput = document.querySelector('#guessField')
const submit = document.querySelector('#subt')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

let p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let startGame = true

if(startGame){
  submit.addEventListener('click',function(e){
    e.preventDefault(0);
    const guess = (parseInt(userInput.value));
    if(isNaN(guess)){
      lowOrHi.innerHTML = 'please enter a valid number'
    }else if (guess > 100){
      userInput.value = ''
      lowOrHi.innerHTML = 'please enter a number less than 100'
    }else if( guess < 1){
      userInput.value = ''
      lowOrHi.innerHTML = 'please enter a number more than 0'
    }else{
      prevGuess.push(guess)
      userInput.value = ''
      guessSlot.innerHTML += `${guess}, `
      numGuess++
      remaining.innerHTML = `${11 - numGuess}`

      if(guess === randomNumber){
        lowOrHi.innerHTML = 'wow, you guessed it right'
        userInput.setAttribute('disabled', '');
        p.classList.add('button');
        p.innerHTML = '<h2 id="newGame">Start New Game</h2>';
        startOver.appendChild(p);
        startGame = false;
        newGame();
      }else if (guess >randomNumber){
        lowOrHi.innerHTML = 'number is TOO Big'
      }else if(guess < randomNumber){
        lowOrHi.innerHTML = 'number is TOO Small'
      }

      if(numGuess > 10){
        lowOrHi.innerHTML = `Game Over, Random number is ${randomNumber}`
        userInput.setAttribute('disabled','')
        guessSlot.innerHTML = ''
        remaining.innerHTML = '10'
        p.classList.add('button')
        p.innerHTML = '<h2 id ="newGame">Start New Game</h2>'
        startOver.appendChild(p);
        startGame = false
        newGame();
      }
    }
  })
}
function newGame(){
  const newgame = document.querySelector('#newGame')
      newgame.addEventListener('click',function(e){
        e.preventDefault();
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess} `;
        lowOrHi.innerHTML = ''
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        startGame = true

      })
}
 */