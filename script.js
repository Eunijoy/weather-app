const ICONS = {
  sunny: "https://openweathermap.org/img/wn/01d@2x.png",
  partly: "https://openweathermap.org/img/wn/02d@2x.png",
  cloudy: "https://openweathermap.org/img/wn/03d@2x.png",
  rain: "https://openweathermap.org/img/wn/09d@2x.png",
  storm: "https://openweathermap.org/img/wn/11d@2x.png"
};

const mockWeather = {
  madrid: {
    temp: 31,
    condition: "Sunny",
    icon: ICONS.sunny,
    realFeel: 30,
    wind: "0.2 km/h",
    rain: "0%",
    uv: 3,
    hourly: [
      { time: "6AM", temp: 25, icon: ICONS.cloudy },
      { time: "9AM", temp: 28, icon: ICONS.sunny },
      { time: "12PM", temp: 33, icon: ICONS.sunny },
      { time: "3PM", temp: 34, icon: ICONS.sunny }
    ],
    weekly: [
      { day: "Mon", temp: "36/22", icon: ICONS.sunny },
      { day: "Tue", temp: "37/21", icon: ICONS.sunny },
      { day: "Wed", temp: "37/21", icon: ICONS.sunny },
      { day: "Thu", temp: "37/21", icon: ICONS.cloudy },
      { day: "Fri", temp: "37/21", icon: ICONS.cloudy },
      { day: "Sat", temp: "37/21", icon: ICONS.rain },
      { day: "Sun", temp: "37/21", icon: ICONS.storm }
    ]
  },

  manila: {
    temp: 29,
    condition: "Cloudy",
    icon: ICONS.cloudy,
    realFeel: 33,
    wind: "3 km/h",
    rain: "40%",
    uv: 6,
    hourly: [
      { time: "6AM", temp: 26, icon: ICONS.cloudy },
      { time: "9AM", temp: 28, icon: ICONS.partly },
      { time: "12PM", temp: 30, icon: ICONS.partly },
      { time: "3PM", temp: 31, icon: ICONS.rain }
    ],
    weekly: [
      { day: "Mon", temp: "30/25", icon: ICONS.rain },
      { day: "Tue", temp: "31/25", icon: ICONS.cloudy },
      { day: "Wed", temp: "32/26", icon: ICONS.sunny }
    ]
  }
};

function updateUI(city, data) {
  $("#city").text(city.toUpperCase());
  $("#condition").text(data.condition);
  $("#temp").text(data.temp + "°");
  $("#mainIcon").attr("src", data.icon);

  $("#realFeel").text(data.realFeel + "°");
  $("#wind").text(data.wind);
  $("#rain").text(data.rain);
  $("#uv").text(data.uv);

  $("#hours").html("");
  data.hourly.forEach(h => {
    $("#hours").append(`
      <div class="hour">
        <p>${h.time}</p>
        <img src="${h.icon}">
        <p>${h.temp}°</p>
      </div>
    `);
  });

  $("#week").html("");
  data.weekly.forEach(d => {
    $("#week").append(`
      <div class="day">
        <p>${d.day}</p>
        <img src="${d.icon}">
        <p>${d.temp}</p>
      </div>
    `);
  });
}

$("#search").on("keyup", function(e) {
  if (e.key === "Enter") {
    const city = $(this).val().toLowerCase();
    if (mockWeather[city]) {
      updateUI(city, mockWeather[city]);
    } else {
      alert("City not found (mock data only)");
    }
  }
});

updateUI("madrid", mockWeather.madrid);
