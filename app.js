const options = document.querySelectorAll('.option');
const reset = document.querySelector('#reset');
const mainContainer = document.querySelector('#main-container');
const scoreBoard = document.querySelector('#scoreBoard');
const h1 = document.querySelector('h1');

const choice = ["Rock", "Paper", "Scissors"];
let cScore = 0;
let pScore = 0;
let wScore = 0;
let lScore = 0;

let winner = (pScore, cScore) => {
  if (pScore > cScore) {
    return `Player`;
  } else if (cScore > pScore) {
    return `Computer`;
  }
}

function gameEnd() {
  for (let option of options) {
    if (!option.hasAttribute('disabled')) {
      option.setAttribute('disabled', true)
    }
  }
  const newH2 = document.createElement("h2")
  newH2.textContent = `Game Over! - ${winner(pScore, cScore)} wins ${wScore} - ${lScore}!`;
  newH2.classList.add('end');
  reset.after(newH2);
  console.log(`\nGame Over! - ${winner(pScore, cScore)} wins!\n`);
  console.log(`${wScore} - ${lScore}\n`);
}

reset.addEventListener('click', (e) => {
  if (!reset.hasAttribute('disabled')) {
    reset.setAttribute('disabled', true)
  }
  for (let option of options) {
    if (option.hasAttribute('disabled')) {
      option.removeAttribute('disabled')
    }
  }
  if (document.querySelector('.end')) {
    document.querySelector('.end').remove()
  }
  if(document.querySelector('.selection')) {
    document.querySelector('.selection').remove()
  }
  if(document.querySelector('.score')) {
    document.querySelector('.score').remove()
  }
  cScore = 0;
  pScore = 0;
  wScore = 0;
  lScore = 0;
  if (!document.querySelector('.start')) {
    alertStart()
  }
})


function getComputerChoice() {
  return choice[Math.floor(Math.random() * choice.length)];
}

function playRound(playerSelection, computerSelection) {
  if (computerSelection === "Rock" && playerSelection === "Rock") {
    console.log("You Draw! Rock does not beat Rock");
  } else if (computerSelection === "Paper" && playerSelection === "Paper") {
    console.log("You Draw! Paper does not beat Paper");
  } else if (
    computerSelection === "Scissors" &&
    playerSelection === "Scissors"
  ) {
    console.log("You Draw! Scissors does not beat Scissors");
  } else if (computerSelection === "Rock" && playerSelection === "Paper") {
    ++pScore;
    console.log("You Win! Paper beats Rock");
  } else if (computerSelection === "Rock" && playerSelection === "Scissors") {
    ++cScore;
    console.log("You Lose! Rock beats Scissors");
  } else if (computerSelection === "Paper" && playerSelection === "Rock") {
    ++cScore;
    console.log("You Lose! Paper beats Rock");
  } else if (
    computerSelection === "Paper" &&
    playerSelection === "Scissors"
  ) {
    ++pScore;
    console.log("You Win! Scissors beat Paper");
  } else if (computerSelection === "Scissors" && playerSelection === "Rock") {
    ++pScore;
    console.log("You Win! Rock beats Scissors");
  } else {
    /* if (computerSelection === 'Scissors' && playerSelection === 'Paper') */
    ++cScore;
    console.log("You Lose! Scissors beats Paper");
  }
  
  score();
  // console.log(score())
}

let playerSelection;
let computerSelection;

const clickEvent = (e) => {
  if (reset.hasAttribute('disabled')) {
    reset.removeAttribute('disabled')
  }
  if (pScore < 3 && cScore < 3) {
  if (document.querySelector('.start')) {
    document.querySelector('.start').remove()
  }
  playerSelection = e.target.textContent;
  getComputerChoice()
  computerSelection = getComputerChoice();
  displaySelection ();
  playRound(playerSelection, computerSelection);
  }
}
options.forEach((option) => {
  option.addEventListener('click', clickEvent)
});

function displaySelection() {
  console.log(`\nplayer selected: ${playerSelection}\ncomputer selected: ${computerSelection}`);
  if (document.querySelector('.selection')) {
    return document.querySelector('.selection').textContent = `Player selected: ${playerSelection} - Computer selected: ${computerSelection}`;
  } else {
  const newH4 = document.createElement("h4")
  newH4.classList.add('selection')
  newH4.textContent = `Player selected: ${playerSelection}\t-\tComputer selected: ${computerSelection}`;
  reset.after(newH4);
  // mainContainer.insertBefore(newH4, scoreBoard);
  // console.log (`${mainContainer.innerHTML}`)
  }
}

function score() {
  console.log(`The score is: Player ${pScore} - Computer ${cScore}`);
  if (document.querySelector('.score')) {
    document.querySelector('.score').remove();
  }
  const newH4 = document.createElement("h4")
  newH4.classList.add('score')
  newH4.textContent = `Player ${pScore} - Computer ${cScore}`;
  scoreBoard.appendChild(newH4);
  if (pScore === 3 || cScore === 3) {
    if (pScore > cScore) {
      wScore = pScore;
      lScore = cScore;
    } else if (cScore > pScore) {
      wScore = cScore;
      lScore = pScore;
    }
    winner();
    gameEnd();
  }
  }

function alertStart() {
  const newH2 = document.createElement("h2")
  newH2.textContent = 'Please select one to begin...';
  newH2.classList.add('start');
  reset.after(newH2);
}

window.addEventListener("DOMContentLoaded", function () {
  setTimeout(function(){
    alertStart();
  }, 300)
}
);

//console.log(playRound(playerSelection, computerSelection));
/* 
Create a blank HTML document with a script tag (Hint: it is best practice to link an external .js file).
This game is going to be played completely from the console, so don’t worry about putting anything else in there.
Your game is going to play against the computer,
so begin with a function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
We’ll use this function in the game to make the computer’s play.
Tip: use the console to make sure this is returning the expected output before moving to the next step!
Write a function that plays a single round of Rock Paper Scissors.
The function should take two parameters
- the playerSelection and computerSelection

- and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"

Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).
Important note: you want to return the results of this function call, not console.log() them.
You’re going to use what you return later on, so let’s test this function by using console.log to see the results:

function playRound(playerSelection, computerSelection) {
  // your code here!
}
 
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

Write a NEW function called game().
Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.
You have not officially learned how to “loop” over code to repeat function calls…
 if you already know about loops from somewhere else (or if you feel like doing some more learning) feel free to use them.
If not, don’t worry! Just call your playRound function 5 times in a row. Loops are covered in the next lesson.
At this point you should be using console.log() to display the results of each round and the winner at the end.
Use prompt() to get input from the user. Read the docs here if you need to.
Feel free to re-work your previous functions if you need to.
Specifically, you might want to change the return value to something more useful.
Feel free to create more “helper” functions if you think it would be useful.
*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* 
In our UI, the player should be able to play the game by clicking on buttons rather than typing their answer in a prompt.

For now, remove the logic that plays exactly five rounds.

Create three buttons, one for each selection.
Add an event listener to the buttons that call your playRound function with the correct playerSelection every time a button is clicked. (you can keep the console.logs for this step)

Add a div for displaying results and change all of your console.logs into DOM methods.

Display the running score, and announce a winner of the game once one player reaches 5 points.

You will likely have to refactor (rework/rewrite) your original code to make it work for this. That’s OK! Reworking old code is an important part of a programmer’s life.
*/