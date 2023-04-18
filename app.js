let cScore = 0;
let pScore = 0;

function game () {
  
  const choice = ['Rock', 'Paper', 'Scissors'];

  function getComputerChoice() {
    const chosen = choice[Math.floor(Math.random() * choice.length)];
    return chosen;
  }

  function getPlayerChoice() {
    const plChoice = prompt('Choose one of Rock, Paper, Scissors?')
    const captChoice = plChoice[0].toUpperCase() + plChoice.slice(1).toLowerCase();
    if (captChoice === choice[0] || captChoice === choice[1] || captChoice === choice[2]) {
      return captChoice;
    }
    return getPlayerChoice();
  }

  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();

  console.log(`Player chose ${playerSelection}`)
  console.log(`Computer chose ${computerSelection}`)

  function playRound(playerSelection, computerSelection) {
    if (computerSelection === 'Rock' && playerSelection === 'Rock') {
      console.log("You Draw! Rock does not beat Rock")
    } else if (computerSelection === 'Paper' && playerSelection === 'Paper') {
      console.log("You Draw! Paper does not beat Paper")
    } else if (computerSelection === 'Scissors' && playerSelection === 'Scissors') {
      console.log("You Draw! Scissors does not beat Scissors")
    } else if (computerSelection === 'Rock' && playerSelection === 'Paper') {
      ++pScore;
      console.log("You Win! Paper beats Rock")
    } else if (computerSelection === 'Rock' && playerSelection === 'Scissors') {
      ++cScore;
      console.log("You Lose! Rock beats Scissors")
    } else if (computerSelection === 'Paper' && playerSelection === 'Rock') {
      ++cScore;
      console.log("You Lose! Paper beats Rock")
    } else if (computerSelection === 'Paper' && playerSelection === 'Scissors') {
      ++pScore;
      console.log("You Win! Scissors beat Paper")
    } else if (computerSelection === 'Scissors' && playerSelection === 'Rock') {
      ++pScore;
      console.log("You Win! Rock beats Scissors")
    } else /* if (computerSelection === 'Scissors' && playerSelection === 'Paper') */ {
      ++cScore;
      console.log("You Lose! Scissors beats Paper")
    }
  }

  console.log(`before playRound: ${pScore} and ${cScore}`)

  playRound(playerSelection, computerSelection);

  let score = `The score is: Player ${pScore} - Computer ${cScore}`;
  console.log(score);
}


