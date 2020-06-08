/**
  Game Function: Rules of the game.
  - player must guess a number between a min and a max.
  - Player gets a certain a mount of guesses.
  - Notify the player of the guesses remaining.
  - Notify the player of the correct answer if losses.
  - Let the player choose to play a gain.
 */

 // Game values.

 let min = 1, 
     max = 10,
     // Random number between max and min;
    winningNum = Math.floor((Math.random() * max) + min); 
    console.log(winningNum);
     guessesLeft = 3;

// UI Elements.
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessInput = document.querySelector('#guess-input'),
      guessBtn = document.querySelector('#guess-btn'),
      message = document.querySelector('.message');

minNum.innerHTML = min;
maxNum.innerHTML = max;
game.addEventListener('mousedown',function(e){
  if(e.target.className === 'play-again'){
    window.location.reload();
  }
})

guessBtn.addEventListener('click',runGame);
function runGame(e){
 let userGuess = parseInt(guessInput.value);
 if(isNaN(userGuess) || userGuess < min || userGuess > max){
    setMessage(`Please enter a number between ${min} and ${max}.`,'red')
 }
 if(userGuess === winningNum){
   // Disable the input field
   guessInput.disabled = true;
   // set the border box to green.
   guessInput.style.borderColor = 'green';
   setMessage(`${userGuess} is Correct!, You won`,'green');

   guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';
 }
 else{
   // Wrong answer. 
   guessesLeft -= 1;
   if(guessesLeft === 0){
    guessInput.disabled = true;
    guessInput.style.borderColor = 'red';
    setMessage(`Game Over, you lost. The correct answer was ${winningNum}. Do you want to play again?`,'red')
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';
   }else{
     guessInput.value = '';
    setMessage(`${userGuess} is not Correct! ${guessesLeft} guesses left. Try again.`,'red');
   }
 }



  e.preventDefault();
}

let setMessage = (msg,color)=>{
  message.style.color = color;
  message.innerHTML = msg;
}

// Listen for guess button to be clicked.