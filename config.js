/*
  Appel OpenWeatherMap :
  - async/await : attend la réponse réseau sans figer la page
  - URL avec encodeURIComponent (ville safe dans l'URL) et units=metric (°C)
  - throw si l'API répond en erreur → attrapé dans script.js
*/
async function getWeather(city) {
  const API_KEY = '7746429099541daa8645d62487584156';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&lang=fr&units=metric&appid=${API_KEY}`;

  const response = await fetch(url);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Erreur API');
  }
  return data;
}
