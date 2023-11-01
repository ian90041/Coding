// URL of the API
const RANDOM_QUOTE_API_URL = 'https://api.quotable.io/random';

// Function to fetch and display a random quote
function displayRandomQuote() {
  fetch(RANDOM_QUOTE_API_URL)
    .then(response => response.json()) // Parse the JSON response
    .then(data => {
      // Access the data and display it in your HTML or do something with it
      const quoteContent = data.content;
      const author = data.author;

      // Example: Display the quote in an HTML element with id "quoteDisplay"
      const quoteDisplayElement = document.getElementById('quoteDisplay');
      quoteDisplayElement.textContent = `"${quoteContent}" - ${author}`;
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
const playerInput = document.getElementById('userInput');
playerInput.addEventListener('input', () => {
  if (timer === 60) {
    updateTimer();
  }
})

