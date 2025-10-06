const city = document.querySelector(".city-name-input");
const temp = document.querySelector(".temperature");
const feels_like = document.querySelector(".feels-like");
const humidity = document.querySelector(".humidity");
const windspeed = document.querySelector(".windspeed");
const btn = document.querySelector(".srch-btn");
const cityOp = document.querySelector(".city-name-output");

// IMPORTANT: Replace "YOUR_API_KEY" with your actual OpenWeatherMap API key.
const apiKey = "YOUR_API_KEY";
async function getWeatherInfo(city) {
	try {
		console.log(city);
		if (city.length === 0) {
			throw Error("Enter city name correctly");
		}

		let res = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
		);
		console.log(res);
		if (!res.ok) {
			if (res.status === 404) {
				throw Error("City not found");
			} else if (res.status === 401) {
				throw Error("Access denied.Check your api key ");
			}
		}
		res = await res.json();
		console.log(res);
		//wind speed , feels like, temp,humidity
		const { feels_like, temp, humidity } = res.main;
		const { speed } = res.wind;
		const name = res.name;
		const desc = res.weather[0].main;
		assignWeatherDetails(speed, temp, humidity, feels_like, name, desc);
	} catch (e) {
		document.querySelector(".city-name-input").value = "";
		console.log(e);
		alert(e.message);
	}
}

btn.addEventListener("click", () => getWeatherInfo(city.value.trim()));
city.addEventListener("keydown", (event) => {
	if (event.key === "Enter") {
		getWeatherInfo(city.value.trim());
	}
});

function assignWeatherDetails(s, t, h, fl, n, desc) {
	windspeed.innerHTML = s;
	temp.innerHTML = t + "<sup>o</sup>C" + `<p>${desc}</p>`;
	humidity.innerHTML = h;
	feels_like.innerHTML = fl + "<sup>o</sup>C";
	cityOp.innerHTML = n;
	// Use textContent to prevent XSS vulnerabilities
	windspeed.textContent = s;
	humidity.textContent = h;
	cityOp.textContent = n;

	temp.innerHTML = "";
	feels_like.innerHTML = "";

	temp.textContent = t;
	temp.insertAdjacentHTML("beforeend", "<sup>o</sup>C");
	const descPara = document.createElement("p");
	descPara.textContent = desc;
	temp.appendChild(descPara);

	feels_like.textContent = fl;
	feels_like.insertAdjacentHTML("beforeend", "<sup>o</sup>C");

	city.value = "";
}

window.addEventListener("load", () => {
	getWeatherInfo("London");
});
