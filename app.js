//declare variable

let min = 1;
let max = 10;
let btn = document.querySelector(".guess-btn");
let btnPlay = document.querySelector(".replay");
let guess = document.querySelector(".guess-input");
let msg = document.querySelector(".resultMsg");

let minNum = document.querySelector(".min-num");
let maxNum = document.querySelector(".max-num");
let winningNumber = generateRandomNum(min, max);
let gameLife = 3;

minNum.textContent = min;
maxNum.textContent = max;

btn.addEventListener("click", playGame);

console.log(winningNumber);
function playGame() {
  console.log(winningNumber);
  let newGuess = parseInt(guess.value);
  console.log(newGuess);
  if (isNaN(newGuess) || newGuess < min || newGuess > max) {
    message(`Enter a  valid guess to play game`, "red");

    /*setTimeout(function () {
      msg.style.display = "none";
    }, 2000);*/
  } else {
    console.log("check result");
    guessCase();
  }
}

function generateRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function message(message, color) {
  msg.textContent = message;
  msg.style.color = color;
}

function guessCase() {
  let newGuess = parseInt(guess.value);
  //win game
  if (newGuess === winningNumber) {
    message(`yay!you won`, "green");
    btnPlay.classList.remove("d-none");
  }

  //lose game
  else if (newGuess != winningNumber) {
    gameLife--;
    console.log(gameLife);
    message(`Wrong!try again. LIFELINE - ${gameLife}`, "red");

    if (gameLife === 0) {
      message(`you lose..Game over`, "red");
      btnPlay.classList.remove("d-none");
    }
  }
}

btnPlay.addEventListener("click", playee);

/*function winningNumber() {
  winningNumbers = Math.floor(Math.random() * 10 + 1);
}
*/
function playee() {
  window.location.reload();
}
