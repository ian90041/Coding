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