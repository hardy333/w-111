const queryString =
  "latitude=4.6097&longitude=-74.0817&current=temperature_2m,is_day,rain&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,rain&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=auto&past_days=1&forecast_days=1";
const queryStringBogota =
  "latitude=4.6097&longitude=-74.0817&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,weather_code,cloud_cover,pressure_msl,surface_pressure,wind_speed_10m,wind_direction_10m&hourly=temperature_2m,relative_humidity_2m,dew_point_2m,apparent_temperature,precipitation,rain,showers,weather_code,pressure_msl,surface_pressure,cloud_cover,visibility,wind_speed_10m,wind_speed_80m,wind_speed_120m,wind_direction_10m,wind_direction_80m,wind_direction_120m,wind_gusts_10m,temperature_80m,temperature_120m&daily=weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,daylight_duration,sunshine_duration,precipitation_sum,rain_sum,showers_sum,snowfall_sum,precipitation_hours,precipitation_probability_max,wind_speed_10m_max,wind_gusts_10m_max,wind_direction_10m_dominant";
const baseUrl = "https://api.open-meteo.com/v1/forecast";
const requestURL = baseUrl + "?" + queryStringBogota;

async function getWeather() {
  try {
    const result = await axios.get(requestURL);
    const weather = result.data;

    /////drow Chart

    const drowChart = (weatherDate) => {
      const ctx = document.getElementById("myChart");

      new Chart(ctx, {
        type: "line",
        data: {
          labels: weatherDate.daily.time,
          datasets: [
            {
              label: "Daily Max Temperature",
              data: weatherDate.daily.temperature_2m_max,
              borderWidth: 2,
            },
            {
              label: "Daily Mim Temperature",
              data: weatherDate.daily.temperature_2m_min,
              borderWidth: 2,
            },
            {
              label: "Daily Shower Sum",
              data: weatherDate.daily.showers_sum,
              borderWidth: 1,
            },
            {
              label: "Daily Wind Speed",
              data: weatherDate.daily.wind_speed_10m_max,
              borderWidth: 1,
            },
            {
              label: "Daily Shower Sum",
              data: weatherDate.daily.showers_sum,
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    };

    drowChart(weather);

    const bogotaDiv = document.createElement("div");
    bogotaDiv.classList.add("current-div");

    const timeZoneH2 = document.createElement("h2");
    timeZoneH2.textContent = weather.timezone;
    timeZoneH2.classList.add("timezone");
    bogotaDiv.appendChild(timeZoneH2);

    const timeH1 = document.createElement("h1");
    timeH1.textContent = weather.current.time;
    timeH1.classList.add("time-h1");
    bogotaDiv.appendChild(timeH1);

    // Creating a new Intl.DateTimeFormat object and formatting the current date and time
    const formattedTime = new Intl.DateTimeFormat("en-US", {
      day: "2-digit",
      month: "long",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      weekday: "long",
      timeZone: "America/Bogota", // Set the time zone to Colombian time
    }).format(new Date());

    const latitude = document.createElement("h3");
    latitude.textContent = "Latitude: " + weather.latitude;
    latitude.classList.add("laltitude-h3");
    bogotaDiv.appendChild(latitude);

    const longitude = document.createElement("h3");
    longitude.textContent = "Longitude: " + weather.longitude;
    longitude.classList.add("longitude-h3");
    bogotaDiv.appendChild(longitude);

    // Now, we're updating the time-h1 element directly here
    timeH1.innerHTML = formattedTime;

    const weatherH1 = document.createElement("h1");
    weatherH1.textContent =
      "Temperature: " +
      weather.current.temperature_2m +
      weather.hourly_units.temperature_2m;
    weatherH1.classList.add("current-temp");
    bogotaDiv.appendChild(weatherH1);

    const humidity = document.createElement("h1");
    humidity.textContent =
      "Humidity: " +
      weather.current.relative_humidity_2m +
      weather.current_units.relative_humidity_2m;
    humidity.classList.add("humidity");
    bogotaDiv.appendChild(humidity);

    return bogotaDiv;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
}

document.addEventListener("DOMContentLoaded", async function () {
  try {
    const bogotaDiv = await getWeather();

    const currentWeatherDiv = document.querySelector(".current-weather");
    if (currentWeatherDiv) {
      currentWeatherDiv.parentNode.insertBefore(
        bogotaDiv,
        currentWeatherDiv.nextSibling
      );
    } else {
      console.error("Element with class 'current-weather' not found.");
    }
  } catch (error) {
    console.error("Error:", error);
  }
});
