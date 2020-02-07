import WeatherDataView from '../views/weatherview';

class WeatherDataModel {
  constructor(city, appID) {
    this.view = new WeatherDataView(this);
    this.getWeatherByCity(city, appID);
  }

  getWeatherByCity(city = this.view.cityInput, appID, fahrenheit = true) {
    this.view.toggleLoad();
    const jsonString = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appID}`;
    fetch(jsonString, { mode: 'cors' }).then((e) => {
      const jsonData = e.json();
      jsonData.then(data => {
        if (data.cod === '400') { return; }
        this.mCity = data.name;
        console.log(this.mCity);
        this.mCondition = data.weather[0].id;
        this.mIconName = this.updateWeatherIcon();
        this.mTemperature = data.main.temp;
        this.view.toggleLoad();
        this.view.render(fahrenheit);
      }).catch(() => {
        this.view.renderError("Can't find city...");
      });
    })
      .catch(() => {
        //        console.log(e);
        //        console.log('Fetch failed');

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