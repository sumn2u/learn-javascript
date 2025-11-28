const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");
const toggleBtn = document.getElementById("formatToggle");

let use24HourFormat = false;

const pad = (value) => String(value).padStart(2, "0");

const updateControls = () => {
	toggleBtn.textContent = use24HourFormat ? "Switch to AM-PM format" : "Switch to 24-hour format";
	toggleBtn.setAttribute("aria-pressed", String(use24HourFormat));
};

const renderClock = () => {
	const now = new Date();
	const hours24 = now.getHours();
	const minutes = pad(now.getMinutes());
	const seconds = pad(now.getSeconds());

	let displayHours = hours24;
	let ampm = hours24 >= 12 ? "PM" : "AM";

	if (!use24HourFormat) {
		displayHours = hours24 % 12 || 12;
	} else {
		ampm = "24H";
	}

	hoursEl.textContent = pad(displayHours);
	minutesEl.textContent = minutes;
	secondsEl.textContent = seconds;
	ampmEl.textContent = ampm;
};

toggleBtn.addEventListener("click", () => {
	use24HourFormat = !use24HourFormat;
	updateControls();
	renderClock();
});

updateControls();
renderClock();
setInterval(renderClock, 1000);
