const cityInput = document.getElementById('city-input');
const searchBtn = document.getElementById('search-btn');
const weatherResult = document.getElementById('weather-result');
const errorMessage = document.getElementById('error-message');

/* Construit le HTML à partir du JSON API, puis bascule hidden pour afficher le bloc */
function showWeather(data) {
  weatherResult.innerHTML = `
    <h2>${data.name}</h2>
    <p class="temp">${Math.round(data.main.temp)} °C</p>
    <p class="desc">${data.weather[0].description}</p>
  `;
  weatherResult.classList.remove('hidden');
  errorMessage.classList.add('hidden');
}

/*
  Au clic : ville → getWeather (config.js) → affichage.
  try/catch : une erreur API affiche #error-message et masque le résultat.
*/
searchBtn.addEventListener('click', async () => {
  const city = cityInput.value.trim();

  if (!city) {
    return;
  }

  try {
    const data = await getWeather(city);
    showWeather(data);
  } catch (err) {
    console.error(err);
    errorMessage.textContent = err.message || 'Impossible de récupérer la météo.';
    errorMessage.classList.remove('hidden');
    weatherResult.classList.add('hidden');
  }
});
