const city = document.querySelector(".city-name-input");
const temp = document.querySelector(".temperature");
const feels_like = document.querySelector(".feels-like");
const humidity = document.querySelector(".humidity");
const windspeed = document.querySelector(".windspeed");
const btn = document.querySelector(".srch-btn");
const cityOp = document.querySelector(".city-name-output");

const apiKey = "6244ab888f079565d5ce1deabddc3f77";
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
			throw Error("Error occured.Could not find the city ");
		}
		res = await res.json();
		console.log(res);
		//wind speed , feels like, temp,humidity
		const { feels_like, temp, humidity } = res.main;
		const { speed } = res.wind;
		const name = res.name;
		assignWeatherDetails(speed, temp, humidity, feels_like, name);
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

function assignWeatherDetails(s, t, h, fl, n) {
	windspeed.innerHTML = s;
	temp.innerHTML = t + "<sup>o</sup>C";
	humidity.innerHTML = h;
	feels_like.innerHTML = fl + "<sup>o</sup>C";
	cityOp.innerHTML = n;
	city.value = "";
}

window.addEventListener("load", () => {
	getWeatherInfo("kurnool");
});
