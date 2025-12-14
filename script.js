const weatherIcons = {
  cloudy: `
    <svg viewBox="0 0 24 24" width="80" height="80" fill="none" stroke="#fff" stroke-width="2">
      <path d="M6 18h11a4 4 0 0 0 0-8 5 5 0 0 0-9-2"/>
    </svg>
  `,
  sunny: `
    <svg viewBox="0 0 24 24" width="80" height="80" fill="none" stroke="#FDB813" stroke-width="2">
      <circle cx="12" cy="12" r="4"/>
      <line x1="12" y1="1" x2="12" y2="4"/>
      <line x1="12" y1="20" x2="12" y2="23"/>
      <line x1="1" y1="12" x2="4" y2="12"/>
      <line x1="20" y1="12" x2="23" y2="12"/>
    </svg>
  `,
  rain: `
    <svg viewBox="0 0 24 24" width="80" height="80" fill="none" stroke="#4FC3F7" stroke-width="2">
      <path d="M6 16h11a4 4 0 0 0 0-8 5 5 0 0 0-9-2"/>
      <line x1="8" y1="19" x2="8" y2="22"/>
      <line x1="12" y1="19" x2="12" y2="22"/>
    </svg>
  `,
  storm: `
    <svg viewBox="0 0 24 24" width="80" height="80" fill="none" stroke="#FFD54F" stroke-width="2">
      <path d="M6 15h11a4 4 0 0 0 0-8 5 5 0 0 0-9-2"/>
      <polygon points="13 16 10 22 14 22"/>
    </svg>
  `,
  fog: `
    <svg viewBox="0 0 24 24" width="80" height="80" fill="none" stroke="#ccc" stroke-width="2">
      <line x1="3" y1="10" x2="21" y2="10"/>
      <line x1="3" y1="14" x2="21" y2="14"/>
    </svg>
  `
};

const weatherData = {
  toronto: {
    temp: 15,
    desc: "Partly Cloudy"
  },
  manila: {
    temp: 32,
    desc: "Sunny"
  },
  london: {
    temp: 18,
    desc: "Rainy"
  },
  tokyo: {
    temp: 22,
    desc: "Clear Night"
  }
};

const cityEl = document.getElementById("city");
const tempEl = document.getElementById("temp");
const descEl = document.getElementById("desc");
const input = document.getElementById("cityInput");

// Listen when user presses ENTER
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const cityName = input.value.toLowerCase();

    if (weatherData[cityName]) {
      cityEl.textContent = capitalize(cityName);
      tempEl.textContent = weatherData[cityName].temp;
      descEl.textContent = weatherData[cityName].desc;
    } else {
      alert("City not found (mock data only)");
    }

    input.value = "";
  }
});

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
