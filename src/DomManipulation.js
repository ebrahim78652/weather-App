import { fetchWeather } from "./logic.js";

let currentTempMode = "C";

function searchIconListener() {
  const icon = document.querySelector(".search_icon");

  icon.addEventListener("click", () => {
    console.log("Search icon clicked");
    fetchCountry();
  });
}

function inputListener() {
  const input = document.querySelector("input");
  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      console.log("enter pressed!");
      fetchCountry();
    }
  });
}

function fetchCountry() {
  const input = document.querySelector("input");
  const placeName = input.value;
  fetchWeather(placeName);
}

function temperatureModeListener() {
  const button = document.querySelector(".button");

  button.addEventListener("click", () => {
    if (currentTempMode === "C") {
      currentTempMode = "F";
      console.log(currentTempMode);
      switchTemp("F");
    } else {
      currentTempMode = "C";
      console.log(currentTempMode);
      switchTemp("C");
    }
  });
}

function switchTemp(FOrC) {
  const alltempSign = document.querySelectorAll(".tempSign");
  alltempSign.forEach((element) => {
    element.innerHTML = `&deg;${FOrC}`;
  });

  const alltemp = document.querySelectorAll(".temp");

  if (FOrC == "F") {
    alltemp.forEach((element) => {
      element.innerHTML =
        Math.round(((+element.innerHTML * 9) / 5 + 32) * 10) / 10;
    });
  }
  if (FOrC == "C") {
    alltemp.forEach((element) => {
      element.innerHTML =
        Math.round((+element.innerHTML - 32) * (5 / 9) * 10) / 10;
    });
  }
}

export function setUpListeners() {
  console.log("setUpListeners called!");
  searchIconListener();
  inputListener();
  temperatureModeListener();
  // default hardcoded country in the beginning
  fetchWeather("Berlin");
}

export function updateWeather(response) {
  console.log(response);
  const tempDiv = document.querySelector(".temp");
  const locationDiv = document.querySelector(".location");
  const feelsLikeDiv = document.querySelector(".fl");
  const maxDiv = document.querySelector(".max");
  const minDiv = document.querySelector(".min");
  const humidityDiv = document.querySelector(".humid");
  const icon = document.querySelector(".weatherIcon");

  tempDiv.textContent = response.main.temp;
  locationDiv.textContent = response.name;
  feelsLikeDiv.textContent = `${response.main.feels_like}`;
  maxDiv.textContent = `${response.main.temp_max}`;
  minDiv.textContent = `${response.main.temp_min}`;
  humidityDiv.textContent = `Humidity: ${response.main.humidity}`;
  icon.src = `http://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`;
}
