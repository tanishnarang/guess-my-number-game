'use strict';
const randomNumber = Math.floor(Math.random() * 3) + 1;
console.log(randomNumber);
let scoring = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guessedNumber = Number(document.querySelector('.guess').value);
  console.log(guessedNumber);

  if (!guessedNumber) {
    document.querySelector('.message').textContent = 'enter a number';
  } else if (guessedNumber === randomNumber) {
    document.querySelector('.message').textContent = 'correct number found!';
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').textContent = guessedNumber;
  } else {
    if (guessedNumber > randomNumber) {
      document.querySelector('.message').textContent = ' GO low!';
    } else {
      document.querySelector('.message').textContent = ' GO high!';
    }
    scoring = document.querySelector('.score').textContent--;
  }
});
document.querySelector('.again').addEventListener('click');
