import { updateWeather } from "./DomManipulation.js";

export async function fetchWeather(placeName) {
  console.log(placeName);

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${placeName}&units=metric&APPID=bf58202ced5040b0e1656fdce3488d4c&mode=metric`,
      { mode: "cors" }
    );

    const responseConverted = await response.json();

    updateWeather(responseConverted);
  } catch (err) {
    console.log(err);
  }
}
