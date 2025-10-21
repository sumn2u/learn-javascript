const holes = document.querySelectorAll(".hole");
const scoreDisplay = document.getElementById("score");
const timeLeftDisplay = document.getElementById("time-left");
const difficultySelect = document.getElementById("difficulty");
const startBtn = document.getElementById("start-btn");

let score = 0;
let gameActive = false;
let moleTimer; // controls despawn/next-spawn timing
let endTimer; // controls game end
let tickTimer; // countdown display timer
let currentMole = null;

const LEVELS = {
  beginner: {
    moleVisibleMs: 3000,
    respawnDelayMs: 1200,
    totalTimeSec: 30,
    animationSec: 1.8,
  },
  easy: {
    moleVisibleMs: 2200,
    respawnDelayMs: 900,
    totalTimeSec: 30,
    animationSec: 1.3,
  },
  medium: {
    moleVisibleMs: 1500,
    respawnDelayMs: 500,
    totalTimeSec: 30,
    animationSec: 1.0,
  },
  hard: {
    moleVisibleMs: 1000,
    respawnDelayMs: 300,
    totalTimeSec: 30,
    animationSec: 0.7,
  },
};

// Spawn a mole in a random hole
function showMole() {
  if (!gameActive) return;

  // Cleanup any existing mole
  if (currentMole && currentMole.isConnected) {
    currentMole.remove();
  }

  const randomIndex = Math.floor(Math.random() * holes.length);
  const hole = holes[randomIndex];

  const mole = document.createElement("div");
  mole.classList.add("mole");
  hole.appendChild(mole);
  currentMole = mole;

  // Tune the animation speed to the selected difficulty
  const { moleVisibleMs, respawnDelayMs, animationSec } = LEVELS[difficultySelect.value] || LEVELS.easy;
  mole.style.animationDuration = `${animationSec}s`;

  // Despawn after a short time and spawn the next one with a brief delay
  clearTimeout(moleTimer);
  moleTimer = setTimeout(() => {
    if (mole.isConnected) mole.remove();
    if (gameActive) {
      setTimeout(() => showMole(), respawnDelayMs);
    }
  }, moleVisibleMs);
}

// Handle hits (click or touch/pointer)
holes.forEach((hole) => {
  // Use pointerdown for better responsiveness across mouse/touch
  hole.addEventListener("pointerdown", (e) => {
    const target = e.target;
    if (target && target.classList && target.classList.contains("mole")) {
      // Register hit
      score++;
      scoreDisplay.textContent = score;

      // Remove current mole and spawn the next immediately
      clearTimeout(moleTimer);
      target.remove();
      if (gameActive) {
        const { respawnDelayMs } = LEVELS[difficultySelect.value] || LEVELS.easy;
        // Add a smooth delay after whack before next mole
        setTimeout(() => showMole(), respawnDelayMs);
      }
    }
  });
});

// Start game logic
startBtn.addEventListener("click", () => {
  if (gameActive) return;

  // Reset state
  score = 0;
  scoreDisplay.textContent = score;
  gameActive = true;
  startBtn.textContent = "Playing...";
  const { totalTimeSec } = LEVELS[difficultySelect.value] || LEVELS.easy;
  timeLeftDisplay.textContent = totalTimeSec;

  // Kick off the loop
  showMole();

  // Stop after 30 seconds
  clearTimeout(endTimer);
  clearInterval(tickTimer);

  const start = Date.now();
  const totalMs = totalTimeSec * 1000;

  // Countdown display (per second)
  tickTimer = setInterval(() => {
    const elapsed = Date.now() - start;
    const remaining = Math.max(0, Math.ceil((totalMs - elapsed) / 1000));
    timeLeftDisplay.textContent = remaining;
  }, 200);

  endTimer = setTimeout(() => {
    gameActive = false;
    clearTimeout(moleTimer);
    clearInterval(tickTimer);
    timeLeftDisplay.textContent = 0;
    if (currentMole && currentMole.isConnected) currentMole.remove();
    startBtn.textContent = "Start Game";
    alert(`⏱️ Time's up! Your score: ${score}`);
  }, totalMs);
});
