const apiKey = "4765bb4281ae01fefc22ce81e6c3cd44";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appId=${apiKey}`);
  var data = await response.json();
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
  if (data.weather[0].main === "Clouds") {
    weatherIcon.src = "cloud.gif";
  } else if (data.weather[0].main === "Clear") {
    weatherIcon.src = "clear.gif";
  } else if (data.weather[0].main === "Rain") {
    weatherIcon.src = "rain.gif";
  } else if (data.weather[0].main === "Drizzle") {
    weatherIcon.src = "drizzle.gif";
  } else if (data.weather[0].main === "Mist") {
    weatherIcon.src = "mist.gif";
  }
  document.querySelector(".weather").style.display = "block";
}
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
