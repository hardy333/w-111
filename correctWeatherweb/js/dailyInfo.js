async function getdailyInfo(weatherDes) {
  // const result = await fetch(requestURL);
  // const weatherDes = await result.json();

  console.log(weatherDes);

  const dayCode = weatherDes.current.weather_code;
  const tempDay = weatherDes.current.temperature_2m;
  const windDay = weatherDes.current.wind_direction_10m;
  const rainDay = weatherDes.current.rain;
  const cloudDay = weatherDes.current.cloud_cover;
  const humidity = weatherDes.current.relative_humidity_2m;
  const dayTime = weatherDes.current.time;

  const dayMotherContainer = document.querySelector(".day-box");

  const weatherDay = document.createElement("div");
  weatherDay.classList.add("day-icon-div");
  weatherDay.textContent = `${dayCode}`;

  // Function to update weather icon and description based on condition code
  function updateWeather(conditionCode) {
    const weatherData = weatherIconsData[conditionCode];

    // Assuming you have an element to display the weather icon and description
    const weatherIcon = document.createElement("img");
    weatherIcon.src = weatherData.day.image;
    weatherIcon.alt = weatherData.day.description;

    // Clear previous weather content before appending new one
    const weatherContainer = document.getElementById("weatherContainer");
    weatherContainer.innerHTML = "";

    // Appending the weather icon to the container element
    weatherContainer.appendChild(weatherIcon);
  }

  // Example of changing conditionCode dynamically
  const newConditionCode = dayCode;
  updateWeather(newConditionCode);

  const currentTemp = document.createElement("p");
  currentTemp.classList.add("current-temp-p");
  currentTemp.textContent = `Temperature: ${tempDay} °C`;

  const currentWind = document.createElement("p");
  currentWind.classList.add("current-wind");
  currentWind.textContent = `Wind speed: ${windDay}km/h`;

  const currentRain = document.createElement("p");
  currentRain.classList.add("current-rain");
  currentRain.textContent = `Rain sum: ${rainDay}mm`;

  const currentCloud = document.createElement("p");
  currentCloud.classList.add("current-cloud");
  currentCloud.textContent = `Cloud cower: ${cloudDay}%`;

  const currentHumidity = document.createElement("p");
  currentHumidity.classList.add("humidity");
  currentHumidity.textContent = `Humidity: ${humidity}%`;

  const currentTime = document.createElement("p");
  currentTime.classList.add("current-time-p");
  currentTime.textContent = `${dayTime} pm`;

  const currentWeatherDiv = document.createElement("div");
  currentWeatherDiv.classList.add("current-weather-div");

  //   currentWeatherDiv.appendChild(weatherDay);
  currentWeatherDiv.appendChild(currentTemp);
  currentWeatherDiv.appendChild(currentRain);
  currentWeatherDiv.appendChild(currentWind);
  currentWeatherDiv.appendChild(currentCloud);
  currentWeatherDiv.appendChild(currentHumidity);
  currentWeatherDiv.appendChild(currentTime);

  dayMotherContainer.appendChild(currentWeatherDiv); // Append to the provided dayContainer
}
