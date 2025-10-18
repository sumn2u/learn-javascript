const buttons = Array.from(document.querySelectorAll(".color-button"));
const startBtn = document.getElementById("start-btn");
const message = document.getElementById("message");

let sequence = [];
let playerSequence = [];
let level = 0;
let acceptingInput = false;

// Flash a button visually
function flashButton(button) {
  return new Promise((resolve) => {
    button.classList.add("active");
    setTimeout(() => {
      button.classList.remove("active");
      setTimeout(resolve, 200);
    }, 500);
  });
}

// Start next round: add new button and flash only it
async function nextRound() {
  acceptingInput = false;
  const newButton = buttons[Math.floor(Math.random() * buttons.length)];
  sequence.push(newButton);
  await flashButton(newButton); // flash only the new button
  playerSequence = []; // reset player input for new round
  acceptingInput = true;
  message.textContent = `Level ${level}: Repeat the sequence`;
}

// Check player input
function checkPlayerInput() {
  const currentIndex = playerSequence.length - 1;
  if (playerSequence[currentIndex] !== sequence[currentIndex]) {
    message.textContent = `Game Over! You reached level ${level}`;
    startBtn.disabled = false;
    sequence = [];
    playerSequence = [];
    level = 0;
    acceptingInput = false;
    return false;
  }

  if (playerSequence.length === sequence.length) {
    level++;
    message.textContent = `Level ${level} completed!`;
    setTimeout(nextRound, 800); // small delay before next round
  }
  return true;
}

// Button click handler
buttons.forEach((btn) => {
  btn.addEventListener("click", async () => {
    if (!acceptingInput) return;
    playerSequence.push(btn);
    await flashButton(btn);
    checkPlayerInput();
  });
});

// Start button
startBtn.addEventListener("click", () => {
  level = 1;
  message.textContent = `Level ${level}: Repeat the sequence`;
  sequence = [];
  playerSequence = [];
  nextRound();
  startBtn.disabled = true;
});
