// URL of the API
const RANDOM_QUOTE_API_URL = 'https://api.quotable.io/random';
// Display the quote in an HTML element with id "quoteDisplay"
const quoteDisplayElement = document.getElementById('quoteDisplay');

// Function to fetch and display a random quote
function displayRandomQuote() {
  fetch(RANDOM_QUOTE_API_URL)
    .then(response => response.json()) // Parse the JSON response
    .then(data => {
      // Access the data and display it in your HTML or do something with it
      const quoteContent = data.content;
      const author = data.author;


      quoteDisplayElement.innerText = `${quoteContent} - ${author}`;
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}

// Call the function to display a random quote
displayRandomQuote();

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
const userInput = document.getElementById('userInput');
userInput.addEventListener('input', () => {
  if (timer === 60) {
    updateTimer();
  }
  checkInput();
  highlightWord(); //Update the highlighting when the user types
})

//Compare the userinput to thd quoteDisplay


function checkInput () {
  const quoteContent = document.getElementById('quoteDisplay').textContent;

  const quoteWords = quoteContent.split(' ');
  const userWords = userInput.value.split(' ');
  let score = 0;
  
  //Compare the words
  for (let i = 0; i < userWords.length; i++) {
    if (i < quoteWords.length && userWords[i] === quoteWords[i])
    score++;
  }

  console.log(score);
}

//Make the input word disappear when user press 'Space'
function eraseWord() {
  userInput.addEventListener('keydown', (event) => {
    if (event.key === ' ' || event.code === 'Space') {
      userInput.value = '';
      event.preventDefault();
    }
  })
}

eraseWord();

//Highlight the word which player is typing
quoteWords = [];

