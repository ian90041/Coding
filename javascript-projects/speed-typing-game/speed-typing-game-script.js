//wordLIst
const words =[
  "apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew",
  "kiwi", "lemon", "mango", "orange", "papaya", "quince", "raspberry", "strawberry",
  "tangerine", "watermelon"
];

//wordDisplay
function displayWord() {
  const wordDisplay = document.getElementById('wordDisplay');
  const randomIndex = Math.floor(Math.random() * words.length);
  const randomWord = words[randomIndex];
  wordDisplay.textContent = randomWord;
}

displayWord();

//Timer
let timer = 60;

function updateTimer() {
  const countdown = document.getElementById('timer');
  countdown.textContent = timer + ' s';

  if (timer > 0) {
    timer--;
    setTimeout(updateTimer, 1000);
  }
}

//Listen to the input event
const playerInput = document.getElementById('userInput');
playerInput.addEventListener('input', () => {
  if (timer === 60) {
    updateTimer();
  }
})

