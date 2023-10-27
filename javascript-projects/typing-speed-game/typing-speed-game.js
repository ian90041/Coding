//WordLIst
const words =[
  "apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew",
  "kiwi", "lemon", "mango", "orange", "papaya", "quince", "raspberry", "strawberry",
  "tangerine", "watermelon"
];

let score = 0;
let time = 60;
let timer;
let randomIndex;


// Function to display random words
function displayWord() {
  const wordDisplay = document.getElementById('word-display');
  const numWords = 20; //Number of words to display
  const randomWords = [];

  for (let i = 0; i < numWords; i++) {
    randomIndex = Math.floor(Math.random() * words.length);
    randomWords.push(`<span id="word-${i}">${words[randomIndex]}</span>`);
  }

  wordDisplay.innerHTML = randomWords.join(' ');
}

//Function to highlight the word when it's typed correctly
function highlightWord(index) {
  const wordElement = document.getElementById(`word-${index}`);
  wordElement.classList.add('highlighted');
}

displayWord();

//This listener will call a function to check the input.
const textInput = document.getElementById('text-input');

textInput.addEventListener('input', () => {
  checkInput();
  if(!timer){
    startTimer();
  }
}); //Start the timer and checkInput function once the user starts typing.

function checkInput() {
  const userInput = textInput.value;
  const userWords = userInput.split(' '); //Split user input into words
  const expectedWords = document.getElementById('word-display').textContent.split(' '); //Get the expected words

  let correctWords = 0;


  //Compare user input to the expected text.
  for (let i = 0; i < userWords.length; i++) {
    if (i < expectedWords.length && userWords[i] === expectedWords[i]) {
      correctWords++;
      highlightWord(i); //Highlight the correct word

    }
  }

  //Increase the score by the number of correct words
  score += correctWords;

  //Move to the nex word
  wordIndex += correctWords;

  const scoreDisplay = document.getElementById('score-value');
  scoreDisplay.textContent = score;

}


//Timer
function updateTimer() {
  const timeDisplay = document.getElementById('time');
  timeDisplay.textContent = time;
}

function startTimer() {
  timer = setInterval(() => {
    time--;
    if (time === 0) {
      clearInterval(timer);
      alert(`Game Over! Your WPM: ${score}`);
      playAgainButton.style.display = 'block';
    }
    updateTimer();
  }, 1000);
}

//Play Again button

const playAgainButton = document.getElementById('play-again');

playAgainButton.addEventListener('click', () => {
  //Reset state
  time = 60;
  score = 0;
  displayWord();
  updateTimer();

//Start a new game
  startTimer();
  playAgainButton.style.display = 'none';
});

//High Score
let highScore = document.getElementById('high-score-value');


