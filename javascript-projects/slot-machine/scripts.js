const reels = document.querySelectorAll('.slot');
const icons = document.querySelectorAll('.icon');

const moneyElement = document.getElementById('money');
let money = 100;


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
    checkWin();
  }, 2000); // Change the delay here to adjust the spinning duration
 
}

function checkWin() {
  const iconValue1 = document.getElementById('icon1').textContent;
  const iconValue2 = document.getElementById('icon2').textContent;
  const iconValue3 = document.getElementById('icon3').textContent;

  let threeMatching = iconValue1 === iconValue2 && iconValue2 === iconValue3;
  let twoMatching = (iconValue1 === iconValue2 && iconValue2 !== iconValue3) || 
  (iconValue1 !== iconValue2 && iconValue2 === iconValue3 || 
  iconValue1 === iconValue3 && iconValue1 !== iconValue2) && !threeMatching;

  if (threeMatching) {
    money += 100; //Three matching icons
  } else if (twoMatching) {
    money += 10; //Two matching icons
  } else {
    money -= 10; //No matching icons
  }
  moneyElement.textContent = `${money}`;
}