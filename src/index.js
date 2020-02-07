import './css/main.css';
import WeatherDataModel from './models/weathermodel';

// Constants:
// App ID to use OpenWeather data
const APP_ID = '5c5f1a47d3dc27fe0dfca44e22ff94d2';

const weatherData = new WeatherDataModel('Bahamas,the', APP_ID);

document.querySelector('#tempConvert').addEventListener('click', (e) => {
  const element = e.target;
  element.classList.toggle('active');
  const fahrenheit = element.classList.contains('active');
  weatherData.view.render(fahrenheit);
});

document.querySelector('#cityBtn').addEventListener('click', (e) => {
  const element = e.target;
  const city = weatherData.view.getCity();
  if (!city) { weatherData.view.renderError('City is invalid!'); return; }
  const fahrenheit = element.classList.contains('active');
  weatherData.getWeatherByCity(city, APP_ID, fahrenheit);
});