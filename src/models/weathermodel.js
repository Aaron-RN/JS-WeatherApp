import WeatherDataView from '../views/weatherview';

const APP_ID = '5c5f1a47d3dc27fe0dfca44e22ff94d2';

class WeatherDataModel {
  constructor(city) {
    this.appID = APP_ID;
    this.view = new WeatherDataView(this);
    this.getWeatherByCity(city);
  }

  getWeatherByCity(city = this.view.cityInput, fahrenheit = true) {
    this.view.toggleLoad();
    const jsonString = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.appID}`;
    fetch(jsonString, { mode: 'cors' })
      .then((response) => {
        if (!response.ok) {
          this.view.toggleLoad();
          throw new Error("Couldn't find city");
        }
        return response.json();
      })
      .then((data) => {
        this.mCity = data.name;
        this.mCondition = data.weather[0].id;
        this.mIconName = this.updateWeatherIcon();
        this.mTemperature = data.main.temp;
        this.view.toggleLoad();
        this.view.render(fahrenheit);
      })
      .catch((error) => {
        this.view.renderError(error);
      });
  }

  updateWeatherIcon(condition = this.mCondition) {
    if (condition >= 0 && condition < 300) {
      return 'tstorm1';
    } if (condition >= 300 && condition < 500) {
      return 'light_rain';
    } if (condition >= 500 && condition < 600) {
      return 'shower3';
    } if (condition >= 600 && condition <= 700) {
      return 'snow4';
    } if (condition >= 701 && condition <= 771) {
      return 'fog';
    } if (condition >= 772 && condition < 800) {
      return 'tstorm3';
    } if (condition === 800) {
      return 'sunny';
    } if (condition >= 801 && condition <= 804) {
      return 'cloudy2';
    } if (condition >= 900 && condition <= 902) {
      return 'tstorm3';
    } if (condition === 903) {
      return 'snow5';
    } if (condition === 904) {
      return 'sunny';
    } if (condition >= 905 && condition <= 1000) {
      return 'tstorm3';
    }

    return 'dunno';
  }

  getTemperature(inFahrenheit = true) {
    const celcius = Math.round(parseFloat(this.mTemperature) - 273.15);
    const fahrenheit = Math.round(((parseFloat(this.mTemperature) - 273.15) * 1.8) + 32);
    if (inFahrenheit === true) { return `${fahrenheit}° F`; }
    return `${celcius}° C`;
  }

  getCity() {
    return this.mCity;
  }

  getIconName() {
    return this.mIconName;
  }
}

export default WeatherDataModel;