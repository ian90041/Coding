/*
Algorithm
When we click a button:
1. Computer randomly selects a move
2. Compare the moves to get the result
3. Update a score
4. Display the result and score on the webpage
*/

//JSON file is converted into JS again
const score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

function playGame(playerMove) {

  //1. Computer randomly selects a move
  let computerMove = pickComputerMove();
  let result = '';

  //2. Compare the moves to get the result
  if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie.';
    } else if (computerMove === 'paper') {
      result = 'You lose!';
    } else {
      result = 'You win!';
    }
  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'You win!';
    } else if (computerMove === 'paper') {
      result = 'Tie.';
    } else {
      result = 'You lose!';
    }
  } else {
    if (computerMove === 'rock') {
      result = 'You lose!';
    } else if (computerMove === 'paper') {
      result = 'You win!';
    } else {
      result = 'Tie.';
    }
  }

//3. Update a score
  if (result === 'You win!') {
    score.wins ++;
  }else if (result === 'You lose!') {
    score.losses ++;
  }else if (result === 'Tie.') {
    score.ties ++;
  }
//Updated scores are saved into a JSON file.
  localStorage.setItem('score', JSON.stringify(score));

/*
  alert(`${result} You ${playerMove} ${computerMove} Computer 
Wins: ${score.wins} | Losses: ${score.losses} | Ties: ${score.ties}`)
*/

  document.querySelector('.js-result')
    .innerHTML = result;

  document.querySelector('.js-moves')
    .innerHTML = `You
    <img class="play-button-icon" src="https://supersimple.dev/projects/rock-paper-scissors/images/${playerMove}-emoji.png">
    <img class="play-button-icon" src="https://supersimple.dev/projects/rock-paper-scissors/images/${computerMove}-emoji.png">
     Computer`;

     document.querySelector('.js-score')
     .innerHTML = `Wins: ${score.wins} | Losses: ${score.losses} | Ties: ${score.ties}`;
}

//1. Computer randomly selects a move
function pickComputerMove() {
  const randomNumber = Math.random();

  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  } else {
    computerMove = 'scissors';
  }

  return computerMove;
}

function updateScoreElement() {

}

function resetScore() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem('score');

  document.querySelector('.js-score')
     .innerHTML = `Wins: ${score.wins} | Losses: ${score.losses} | Ties: ${score.ties}`;
}