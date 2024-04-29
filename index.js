const API_KEY = "eceb9c42377c31fa65f1537e49132a8b";
const API_URL =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search  input");
const searchBtn = document.querySelector(".search  button");
const weatherIcon = document.querySelector(".weather-image");

async function checkWeather(city) {
  const response = await fetch(API_URL + city + `&appid=${API_KEY}`);

  if (response.status === 404) {
    document.querySelector(".weather").style.display = "none";
    document.querySelector(".error").style.display = "block";
  } else {
    const data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + " °c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
    document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";

    const weatherCondition = data.weather[0].main;

    if (weatherCondition == "Clouds") weatherIcon.src = "images/clouds.png";
    else if (weatherCondition == "Rain") weatherIcon.src = "images/rain.png";
    else if (weatherCondition == "Snow") weatherIcon.src = "images/snow.png";
    else if (weatherCondition == "Clear") weatherIcon.src = "images/clear.png";
    else if (weatherCondition == "Drizzle")
      weatherIcon.src = "images/drizzle.png";
    else weatherIcon.src == "images/mist.png";

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  const city = searchBox.value;
  checkWeather(city);
});

// searchBtn.addEventListener("keydown", (event) => {
//   if (event.key === 'Enter') {
//     const city = searchBox.value;
//     checkWeather(city);
//   }
// });
