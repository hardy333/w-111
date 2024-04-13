const weatherIconsData = {
  0: {
    day: {
      description: "Sunny",
      image:
        "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/clear-day.svg",
    },
    night: {
      description: "Clear",
      image:
        "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/clear-night.svg",
    },
  },
  1: {
    day: {
      description: "Mainly Sunny",
      image:
        "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/clear-day.svg",
    },
    night: {
      description: "Mainly Clear",
      image:
        "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/clear-night.svg",
    },
  },
  2: {
    day: {
      description: "Partly Cloudy",
      image:
        "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/partly-cloudy-day.svg",
    },
    night: {
      description: "Partly Cloudy",
      image:
        "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/partly-cloudy-night.svg",
    },
  },
  3: {
    day: {
      description: "Cloudy",
      image: "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/cloudy.svg",
    },
    night: {
      description: "Cloudy",
      image:
        "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/partly-cloudy-night.svg",
    },
  },
  45: {
    day: {
      description: "Foggy",
      image:
        "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/overcast-day-fog.svg",
    },
    night: {
      description: "Foggy",
      image:
        "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/overcast-night-fog.svg",
    },
  },

  48: {
    day: {
      description: "Rime Fog",
      image:
        "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/overcast-day-fog.svg",
    },
    night: {
      description: "Rime Fog",
      image:
        "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/overcast-night-fog.svg",
    },
  },
  51: {
    day: {
      description: "Light Drizzle",
      image:
        "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/partly-cloudy-day-drizzle.svg",
    },
    night: {
      description: "Light Drizzle",
      image:
        "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/partly-cloudy-night-drizzle.svg",
    },
  },
  53: {
    day: {
      description: "Drizzle",
      image:
        "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/overcast-day-drizzle.svg",
    },
    night: {
      description: "Drizzle",
      image:
        "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/overcast-night-drizzle.svg",
    },
  },
  55: {
    day: {
      description: "Heavy Drizzle",
      image:
        "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/extreme-day-drizzle.svg",
    },
    night: {
      description: "Heavy Drizzle",
      image:
        "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/extreme-drizzle.svg",
    },
  },
  56: {
    day: {
      description: "Light Freezing Drizzle",
      image:
        "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/extreme-day-drizzle.svg",
    },
    night: {
      description: "Light Freezing Drizzle",
      image:
        "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/extreme-drizzle.svg",
    },
  },
  //needs to find
  57: {
    day: {
      description: "Freezing Drizzle",
      image: "./drizzle.jpg",
    },
    night: {
      description: "Freezing Drizzle",
      image: "./nightdrizzle.jpg",
    },
  },
  61: {
    day: {
      description: "Light Rain",
      image: "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/drizzle.svg",
    },
    night: {
      description: "Light Rain",
      image:
        "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/partly-cloudy-night-drizzle.svg",
    },
  },
  63: {
    day: {
      description: "Rain",
      image: "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/rain.svg",
    },
    night: {
      description: "Rain",
      image:
        "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/partly-cloudy-night-rain.svg",
    },
  },
  65: {
    day: {
      description: "Heavy Rain",
      image:
        "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/extreme-day-rain.svg",
    },
    night: {
      description: "Heavy Rain",
      image:
        "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/extreme-night-rain.svg",
    },
  },
  66: {
    day: {
      description: "Light Freezing Rain",
      image:
        "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/overcast-day-sleet.svg",
    },
    night: {
      description: "Light Freezing Rain",
      image:
        "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/overcast-night-sleet.svg",
    },
  },
  67: {
    day: {
      description: "Freezing Rain",
      image:
        "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/overcast-day-sleet.svg",
    },
    night: {
      description: "Freezing Rain",
      image:
        "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/overcast-night-sleet.svg",
    },
  },
  71: {
    day: {
      description: "Light Snow",
      image:
        "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/partly-cloudy-day-snow.svg",
    },
    night: {
      description: "Light Snow",
      image:
        "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/partly-cloudy-night-snow.svg",
    },
  },
  73: {
    day: {
      description: "Snow",
      image: "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/snow.svg",
    },
    night: {
      description: "Snow",
      image: "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/snow.svg",
    },
  },
  75: {
    day: {
      description: "Heavy Snow",
      image:
        "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/extreme-day-snow.svg",
    },
    night: {
      description: "Heavy Snow",
      image:
        "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/extreme-night-snow.svg",
    },
  },
  77: {
    day: {
      description: "Snow Grains",
      image:
        "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/overcast-day-snow.svg",
    },
    night: {
      description: "Snow Grains",
      image:
        "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/overcast-night-snow.svg",
    },
  },
  80: {
    day: {
      description: "Light Showers",
      image:
        "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/overcast-day-rain.svg",
    },
    night: {
      description: "Light Showers",
      image:
        "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/overcast-night-rain.svg",
    },
  },
  81: {
    day: {
      description: "Showers",
      image:
        "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/overcast-day-rain.svg",
    },
    night: {
      description: "Showers",
      image:
        "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/overcast-night-rain.svg",
    },
  },
  82: {
    day: {
      description: "Heavy Showers",
      image:
        "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/extreme-rain.svg",
    },
    night: {
      description: "Heavy Showers",
      image:
        "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/extreme-rain.svg",
    },
  },
  85: {
    day: {
      description: "Light Snow Showers",
      image: "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/snow.svg",
    },
    night: {
      description: "Light Snow Showers",
      image: "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/snow.svg",
    },
  },
  86: {
    day: {
      description: "Snow Showers",
      image: "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/snow.svg",
    },
    night: {
      description: "Snow Showers",
      image: "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/snow.svg",
    },
  },
  95: {
    day: {
      description: "Thunderstorm",
      image:
        "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/thunderstorms-day.svg",
    },
    night: {
      description: "Thunderstorm",
      image:
        "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/thunderstorms-night.svg",
    },
  },
  96: {
    day: {
      description: "Light Thunderstorms With Hail",
      image:
        "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/thunderstorms-day-overcast-rain.svg",
    },
    night: {
      description: "Light Thunderstorms With Hail",
      image:
        "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/thunderstorms-night-overcast-rain.svg",
    },
  },
  99: {
    day: {
      description: "Thunderstorm With Hail",
      image:
        "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/thunderstorms-day-extreme-rain.svg",
    },
    night: {
      description: "Thunderstorm With Hail",
      image:
        "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/thunderstorms-night-extreme-rain.svg",
    },
  },
};

//slider

// $('.current-weather-icon').slick({
//     dots: true,
//     infinite: false,
//     speed: 300,
//     slidesToShow: 4,
//     slidesToScroll: 4,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           infinite: true,
//           dots: true
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
//       // You can unslick at a given breakpoint now by adding:
//       // settings: "unslick"
//       // instead of a settings object
//     ]
//   });
