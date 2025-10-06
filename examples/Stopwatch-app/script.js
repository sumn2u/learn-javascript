const display = document.getElementById("display");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");

let startTime;
let elapsedTime = 0;
let timerInterval;
let running = false;

function start() {
	if (!running) {
		startTime = Date.now() - elapsedTime;
		timerInterval = setInterval(updateTime, 10);
		running = true;
	}
}

function stop() {
	if (running) {
		clearInterval(timerInterval);
		elapsedTime = Date.now() - startTime;
		running = false;
	}
}

function reset() {
	clearInterval(timerInterval);
	elapsedTime = 0;
	display.textContent = "00:00:00";
	running = false;
}

function updateTime() {
	const currentTime = Date.now();
	const currentElapsedTime = currentTime - startTime;

	let minutes = Math.floor(currentElapsedTime / (1000 * 60));
	let seconds = Math.floor((currentElapsedTime % (1000 * 60)) / 1000);
	let milliseconds = Math.floor((currentElapsedTime % 1000) / 10);

	display.textContent = `${pad(minutes)}:${pad(seconds)}:${pad(
		milliseconds
	)}`;
}

function pad(number) {
	// Add a leading zero if the number is less than 10
	return number < 10 ? "0" + number : number;
}

startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);
