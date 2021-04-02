"use strict";

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

//Reset the game

document.querySelector(".again").addEventListener("click", () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(".label-score").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});

// Start Game!
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  //Player Wins!

  if (guess === secretNumber) {
    document.querySelector(".message").textContent = "You Win!";
    document.querySelector("body").style.backgroundColor = "#83b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  }

  //No Number
  else if (!guess) {
    document.querySelector(".message").textContent = "No Number";
  }

  //Too Low
  else if (guess < secretNumber) {
    document.querySelector(".message").textContent = "Too Low";
    if (score > 1) {
      score--;
      document.querySelector(".label-score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Lose!";
      document.querySelector(".label-score").textContent = 0;
    }
  }

  //Too High
  else if (guess > secretNumber) {
    document.querySelector(".message").textContent = "Too High";
    if (score > 1) {
      score--;
      document.querySelector(".label-score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Lose!";
      document.querySelector(".label-score").textContent = 0;
    }
  }
});
