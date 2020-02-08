
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
    const tempElem = this.tempBtn;
    const city = this.getCity();
    if (!city) { this.renderError('City is invalid!'); return; }
    this.renderError('');// render a empty error to clear innerHTML of element
    const fahrenheit = tempElem.classList.contains('active');
    this.model.getWeatherByCity(city, fahrenheit);
  }

  toggleTempFormat() {
    const tempElem = this.tempBtn;
    tempElem.classList.toggle('active');
    const fahrenheit = tempElem.classList.contains('active');
    this.render(fahrenheit);
  }

  renderError(err) {
    this.errorBox.innerHTML = err;
  }

  render(inFahrenheit = true) {
    const { model } = this;
    this.cityLabel.innerHTML = model.getCity();
    if (inFahrenheit) {
      this.tempLabel.innerHTML = model.getTemperature();
      this.tempBtn.innerHTML = 'C';
    } else {
      this.tempLabel.innerHTML = model.getTemperature(false);
      this.tempBtn.innerHTML = 'F';
    }
    this.weatherIcon.setAttribute('src', `../src/icons/${model.getIconName()}.png`);
  }
}

export default WeatherDataView;