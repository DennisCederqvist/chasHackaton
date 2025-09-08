async function getWeather() {
  const city = document.getElementById('cityInput').value;
  const apiKey = "f943840c12fe2bb6e266a08f0245afcc";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=sv`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === 200) {
      const result = `
        <p><strong>${data.name}</strong></p>
        <p>Temperatur: ${data.main.temp}°C</p>
        <p>Väder: ${data.weather[0].description}</p>
      `;
      document.getElementById('weatherResult').innerHTML = result;
    } else {
      document.getElementById('weatherResult').innerText = "Stad ej hittad.";
    }
  } catch (error) {
    document.getElementById('weatherResult').innerText = "Fel vid hämtning av väderdata.";
    console.error(error);
  }
}
