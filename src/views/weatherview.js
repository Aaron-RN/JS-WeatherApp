
class WeatherDataView {
  constructor(model) {
    this.model = model;
    this.errorBox = document.querySelector('#errorBox');
    this.cityInput = document.querySelector('#cityInput');
    this.cityLabel = document.querySelector('#city');
    this.tempLabel = document.querySelector('#temp');
    this.tempBtn = document.querySelector('#tempConvert');
    this.weatherIcon = document.querySelector('#icon');
    this.overlayElem = document.querySelector('#overlay');
    this.loaderElem = document.querySelector('#loader');
  }

  toggleLoad() {
    this.overlayElem.classList.toggle('hide');
    this.loaderElem.classList.toggle('hide');
  }
  
  getCity(){ return this.cityInput.value; }

  renderError(err){
    this.errorBox.innerHTML = err;
  }
  render(inFahrenheit = true) {
    const model = this.model;
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