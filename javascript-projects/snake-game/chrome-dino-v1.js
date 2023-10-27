const dino = document.getElementById("dino");
let isJumping = false;
let gameContainer = document.getElementById("game-container");
let score = 0;

document.addEventListener("keydown", jump);

function jump(event) {
    if (event.keyCode === 32 && !isJumping) { // Spacebar
        isJumping = true;
        let position = 0;
        const jumpInterval = setInterval(() => {
            if (position >= 100) {
                clearInterval(jumpInterval);
                const fallInterval = setInterval(() => {
                    if (position <= 0) {
                        clearInterval(fallInterval);
                        isJumping = false;
                    } else {
                        position -= 5;
                        dino.style.bottom = position + "px";
                    }
                }, 20);
            } else {
                position += 5;
                dino.style.bottom = position + "px";
            }
        }, 20);
    }
}

function createObstacle() {
    const obstacle = document.createElement("div");
    obstacle.classList.add("obstacle");
    gameContainer.appendChild(obstacle);
    let leftPosition = 800;
    obstacle.style.left = leftPosition + "px";

    const moveInterval = setInterval(() => {
        if (leftPosition < -20) {
            obstacle.remove();
            clearInterval(moveInterval);
        } else {
            leftPosition -= 5;
            obstacle.style.left = leftPosition + "px";

            if (leftPosition > 0 && leftPosition < 50 && dino.style.bottom === "0px") {
                clearInterval(moveInterval);
                alert("Game over! Score: " + score);
                obstacle.remove();
            }
        }
    }, 20);
    score++;
}

function randomInterval(min, max) {
    return Math.random() * (max - min) + min;
}

function generateObstacles() {
    createObstacle();
    setTimeout(generateObstacles, randomInterval(1000, 3000)); // Adjust the intervals as needed
}

generateObstacles();
