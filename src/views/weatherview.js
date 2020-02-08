
class WeatherDataView {
  constructor(model) {
    this.model = model;
    this.errorBox = document.querySelector('#errorBox');
    this.cityInput = document.querySelector('#cityInput');
    this.cityLabel = document.querySelector('#city');
    this.cityBtn = document.querySelector('#cityBtn');
    this.tempLabel = document.querySelector('#temp');
    this.tempBtn = document.querySelector('#tempConvert');
    this.weatherIcon = document.querySelector('#icon');
    this.overlayElem = document.querySelector('#overlay');
    this.loaderElem = document.querySelector('#loader');

    this.cityBtn.addEventListener('click', () => { this.setCity(); });
    this.tempBtn.addEventListener('click', () => { this.toggleTempFormat(); });
  }

  toggleLoad() {
    this.overlayElem.classList.toggle('hide');
    this.loaderElem.classList.toggle('hide');
  }

  getCity() { return this.cityInput.value; }

  setCity() {
    const { tempBtn, cityInput } = this;
    if (!cityInput.value) { this.renderError('City is invalid!'); return; }
    this.renderError('');// render a empty error to clear innerHTML of element
    const fahrenheit = tempBtn.classList.contains('active');
    this.model.getWeatherByCity(cityInput.value, fahrenheit);
  }

  toggleTempFormat() {
    const { tempBtn } = this;
    tempBtn.classList.toggle('active');
    const fahrenheit = tempBtn.classList.contains('active');
    this.model.getWeatherByCity(this.model.getCity(), fahrenheit);
  }

  renderError(err) {
    this.errorBox.textContent = err;
  }

  render(inFahrenheit = true) {
    const { model } = this;
    this.cityLabel.textContent = model.getCity();
    if (inFahrenheit) {
      this.tempLabel.textContent = model.getTemperature();
      this.tempBtn.textContent = 'C';
    } else {
      this.tempLabel.textContent = model.getTemperature(false);
      this.tempBtn.textContent = 'F';
    }
    this.weatherIcon.setAttribute('src', `../src/icons/${model.getIconName()}.png`);
  }
}

export default WeatherDataView;