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