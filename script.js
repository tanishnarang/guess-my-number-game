"use strict";

let randomNumber = Math.floor(Math.random() * 20) + 1;
// console.log(randomNumber);
let scoring = 20;
let highvalue = 0;
document.querySelector(".check").addEventListener("click", function () {
  const guessedNumber = Number(document.querySelector(".guess").value);
  // console.log(guessedNumber);

  // when there is no input
  if (!guessedNumber) {
    document.querySelector(".message").textContent = "please enter a number.";
  }

  // when user is correct
  else if (guessedNumber === randomNumber) {
    document.querySelector(".message").textContent = "correct number!";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = guessedNumber;
    if (scoring > highvalue) {
      highvalue = scoring;
      document.querySelector(".highscore").textContent = highvalue;
    }
  }

  // when user is wrong.
  else {
    // when user is too high.
    if (guessedNumber > randomNumber) {
      document.querySelector(".message").textContent = " GO low!";
    }

    // when user is too low.
    else {
      document.querySelector(".message").textContent = " GO high!";
    }
    scoring--;
    document.querySelector(".score").textContent = scoring;
    if (scoring === 0) {
      document.querySelector(".message").textContent = "you lost the game!";
      document.querySelector("body").style.backgroundColor = "red";
      document.querySelector(".start-over").textContent =
        "press Start Over! to restart!";

      document.querySelector(".check").disabled = true;
    }
  }
});
document.querySelector(".again").addEventListener("click", function () {
  randomNumber = Math.floor(Math.random() * 20) + 1;
  // console.log(randomNumber);
  scoring = 20;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = "20";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector(".number").style.width = "15rem";
});
