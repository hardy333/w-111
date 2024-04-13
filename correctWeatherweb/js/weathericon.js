function getweatherTitleIcon(weatherData, dayContainer, i) {
  const weatherCode = weatherData.daily.weather_code[i]; // Assuming you're using the first weather code

  // Weather icon for day
  const firstIconWeatherDay = document.createElement("img");
  firstIconWeatherDay.src = weatherIconsData[weatherCode].day.image;
  firstIconWeatherDay.alt = "daily-icon";

  // Weather icon for night
  const firstIconWeatherNight = document.createElement("img");
  firstIconWeatherNight.src = weatherIconsData[weatherCode].night.image;
  firstIconWeatherNight.alt = "nightly-icon";

  // Paragraph for night description
  const firstIconWeatherNightDesc = document.createElement("p");
  firstIconWeatherNightDesc.textContent =
    weatherIconsData[weatherCode].night.description;

  // Create parent div for weather icons and descriptions
  const weatherIconDiv = document.createElement("div");
  weatherIconDiv.classList.add("day-icon-div");

  // Append day and night weather elements to the weather icon div
  weatherIconDiv.appendChild(firstIconWeatherDay);
  weatherIconDiv.appendChild(firstIconWeatherNight);
  weatherIconDiv.appendChild(firstIconWeatherNightDesc);

  // dayContainer.append(weatherIconDiv);

  const mainCont = document.querySelector(".current-weather-icon");
  mainCont.append(weatherIconDiv);
}
// getdailyInfo();
