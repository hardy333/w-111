getWeeklyInfo();

async function getWeeklyInfo() {
  const result = await fetch(requestURL);
  const weather = await result.json();

  getdailyInfo(weather);

  console.log(weather);

  weather.daily.time.forEach((day, i) => {
    const date = weather.daily.time[i];
    const tempMax = weather.daily.temperature_2m_max[i];
    const tempMin = weather.daily.temperature_2m_min[i];
    const sunrise = weather.daily.sunrise[i];
    const sunset = weather.daily.sunset[i];
    const rainSum = weather.daily.rain_sum[i];
    const windSum = weather.daily.wind_speed_10m_max[i];

    const dayContainer = document.createElement("div");
    dayContainer.classList.add("day-container");

    if (new Date() === new Date(date)) {
    }

    getweatherTitleIcon(weather, dayContainer, i);

    // Dates column Start
    // Dates column Start
    const dateP = document.createElement("P");
    dateP.textContent = weather.current.time;
    dateP.classList.add("dateP");

    const formattedTime = new Intl.DateTimeFormat("en-US", {
      day: "2-digit",
      weekday: "short",
      month: "short",
      timeZone: "America/Bogota", // Set the time zone to Colombian time
    }).format(new Date(date));

    dateP.innerHTML = formattedTime;
    dayContainer.appendChild(dateP);
    // Dates column End
    // Dates column End

    /* Temperatures column Start */
    /* Temperatures column Start */
    /* Temperatures column Start */
    const tempIcon = document.createElement("img");
    tempIcon.src =
      "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/thermometer.svg";
    tempIcon.alt = "temp Icon";
    tempIcon.classList.add("temp-img"); // Add class to tempIcon

    const tempIconDiv = document.createElement("div");
    tempIconDiv.classList.add("div-temp-icon");

    tempIconDiv.style.width = "20px";
    tempIconDiv.style.height = "40px";

    const tempDiv = document.createElement("div");
    tempDiv.classList.add("div-for-temp");

    tempIconDiv.appendChild(tempIcon);

    const maxMinTemDiv = document.createElement("div");
    maxMinTemDiv.classList.add("max-min-temp");

    maxMinTemDiv.appendChild(tempIconDiv); // Append tempIconDiv to maxMinTemDiv

    const tempMaxP = document.createElement("p");
    tempMaxP.textContent = `${tempMax} °/`;
    tempMaxP.classList.add("tempmax");

    const tempMinP = document.createElement("p");
    tempMinP.textContent = `${tempMin} °`;
    tempMinP.classList.add("tempmin");

    maxMinTemDiv.appendChild(tempMaxP);
    maxMinTemDiv.appendChild(tempMinP);

    dayContainer.appendChild(maxMinTemDiv);
    /* Temperatures column End */

    /* Temperatures column End */
    /* Temperatures column End */

    /* Rain Column Start */
    /* Rain Column Start */

    const rainIconDiv = document.createElement("div");
    rainIconDiv.style.width = "20px";
    rainIconDiv.style.height = "20px";

    const rainIcon = document.createElement("img");
    rainIcon.src =
      "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/rain.svg";
    rainIcon.alt = "Rain Icon";

    const rainInfoP = document.createElement("p");
    rainInfoP.textContent = `${rainSum} mm`;
    rainInfoP.classList.add("rain-info");

    const rainDiv = document.createElement("div");
    rainDiv.classList.add("div-for-rain");

    rainIconDiv.appendChild(rainIcon);

    rainDiv.appendChild(rainIconDiv);
    rainDiv.appendChild(rainInfoP);

    dayContainer.appendChild(rainDiv);
    /* Rain Column End */
    /* Rain Column End */

    /* Wind Column Start */
    /* Wind Column Start */
    const windIconDiv = document.createElement("div");
    windIconDiv.style.width = "20px";
    windIconDiv.style.height = "20px";

    const windIcon = document.createElement("img");
    windIcon.src =
      "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/wind.svg";
    windIcon.alt = "Rain Icon";

    const windInfoP = document.createElement("p");
    windInfoP.textContent = `${windSum} km/h`;
    windInfoP.classList.add("wind-info");

    const windDiv = document.createElement("div");
    windDiv.classList.add("div-for-wind");

    windIconDiv.appendChild(windIcon);

    windDiv.appendChild(windIconDiv);
    windDiv.appendChild(windInfoP);

    dayContainer.appendChild(windDiv);
    /* Wind Column End */
    /* Wind Column End */

    /* Sunrise Column Start */
    /* Sunrise Column Start */
    const sunriseP = document.createElement("p");
    const arrSunrise = sunrise.split("T");
    const sunriseTime = arrSunrise[1];
    sunriseP.textContent = `${sunriseTime} am`;
    sunriseP.classList.add("sunrise");

    const sunriseDiv = document.createElement("div");
    sunriseDiv.classList.add("div-for-sunrise");

    const sunriseIconDiv = document.createElement("div");
    sunriseIconDiv.classList.add("icon-wrapper");
    sunriseIconDiv.style.width = "20px";
    sunriseIconDiv.style.height = "20px";

    const sunriseIcon = document.createElement("img");
    sunriseIcon.src =
      "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/sunrise.svg";
    sunriseIcon.alt = "Sunrise Icon";

    sunriseIconDiv.appendChild(sunriseIcon);

    sunriseDiv.appendChild(sunriseIconDiv);
    sunriseDiv.appendChild(sunriseP);

    dayContainer.appendChild(sunriseDiv);
    /* Sunrise Column End */
    /* Sunrise Column End */

    /* Sunset Column Start */
    /* Sunset Column Start */
    const sunsetP = document.createElement("p");
    const arrSunset = sunset.split("T");
    const sunsetTime = arrSunset[1];
    sunsetP.textContent = `${sunsetTime} pm`;
    sunsetP.classList.add("sunset");

    const sunsetDiv = document.createElement("div");
    sunsetDiv.classList.add("div-for-sunset");

    const sunsetIconDiv = document.createElement("div");
    sunsetIconDiv.classList.add("icon-wrapper");
    sunsetIconDiv.style.width = "20px";
    sunsetIconDiv.style.height = "20px";

    const sunsetIcon = document.createElement("img");
    sunsetIcon.src =
      "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/sunset.svg";
    sunsetIcon.alt = "Sunset Icon";

    sunsetIconDiv.appendChild(sunsetIcon);

    sunsetDiv.appendChild(sunsetIconDiv);
    sunsetDiv.appendChild(sunsetP);

    dayContainer.appendChild(sunsetDiv);
    /* Sunset Column End */
    /* Sunset Column End */

    // Append elements to the dayContainer
    document.querySelector(".main-container").appendChild(dayContainer);
  });
}

// Render Slider Items
// Render Slider Items
// Render Slider Items

function getweatherTitleIcon(weatherData, dayContainer, i) {
  const weatherCode = weatherData.daily.weather_code[i]; // Assuming you're using the first weather code

  const date = weatherData.daily.time[i];

  const formattedTime = new Intl.DateTimeFormat("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone: "America/Bogota", // Set the time zone to Colombian time
  }).format(new Date(date));

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

  const iconDateNumber = document.createElement("p");

  iconDateNumber.textContent = formattedTime;

  // Create parent div for weather icons and descriptions
  const weatherIconDiv = document.createElement("div");
  weatherIconDiv.classList.add("day-icon-div");

  // Append day and night weather elements to the weather icon div
  weatherIconDiv.appendChild(firstIconWeatherDay);
  weatherIconDiv.appendChild(firstIconWeatherNight);
  weatherIconDiv.appendChild(firstIconWeatherNightDesc);
  weatherIconDiv.appendChild(iconDateNumber);

  // dayContainer.append(weatherIconDiv);

  const mainCont = document.querySelector(".current-weather-icon");
  mainCont.append(weatherIconDiv);

  setTimeout(() => {
    $(".current-weather-icon").slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: true,
    });
  }, 0);
}
// getdailyInfo();
