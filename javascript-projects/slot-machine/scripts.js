const reels = document.querySelectorAll('.slot');
const icons = document.querySelectorAll('.icon');

const startButton = document.getElementById('startButton');
startButton.addEventListener('click', spinReels);

function spinReels() {
  let intervalId = setInterval(() => {
    for (let i = 0; i < icons.length; i++) {
      const icon = icons[i];
      const randomIndex = Math.floor(Math.random() * 7);
      icon.textContent = randomIndex + 1;
    }
  }, 1);

  setTimeout(() => {
    clearInterval(intervalId);
    for (let reel of reels) {
      reel.classList.remove('spinning');
    }
  }, 2000); // Change the delay here to adjust the spinning duration

  checkWin();
}


function checkWin() {
  
}



