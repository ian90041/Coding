//WordLIst
const words =[
  "apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew",
  "kiwi", "lemon", "mango", "orange", "papaya", "quince", "raspberry", "strawberry",
  "tangerine", "watermelon"
];

let score = 0;
let time = 60;
let randomIndex;

// Function to display a new word
function displayWord() {
  const wordDisplay = document.getElementById('word-display');
  randomIndex = Math.floor(Math.random() * words.length);
  wordDisplay.textContent = words[randomIndex];
}

displayWord();

//This listener will call a function to check the input.
const textInput = document.getElementById('text-input');
let timer;

textInput.addEventListener('input', () => {
  checkInput();
  if(!timer){
    startTimer();
  }
}); //Start the timer and checkInput function once the user starts typing.

function checkInput() {
  const userInput = textInput.value;
  const expectedText = words[randomIndex];

  //Compare user input to the expected text.
  if (userInput === expectedText) {
    score++;
    
    textInput.value = ''; // Clear the input field
    displayWord(); // Display the next word
    const scoreDisplay = document.getElementById('score-value');
    scoreDisplay.textContent = score;
  }
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
    }
    updateTimer();
  }, 1000);
}

