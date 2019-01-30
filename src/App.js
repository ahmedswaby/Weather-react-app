import React from 'react';
import './App.css';
import Title from './components/title'
import Form from './components/form'
import Weather from './components/weather'

const API_KEY = "022636f4b24509d6308f4228afab5b88";

class App extends React.Component {
  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    desc: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&APPID=${API_KEY}`);
    const data = await api_call.json(); 
    if (city && country) {
      this.setState({
        temp : data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        desc : data.weather[0].description,
        error: ""
      })
    } else {
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        desc: undefined,
        error: <p>Please enter a right city and country</p> 
      })
    }
  }
  render() {
    return (
      <div className="App">
      <section className="title">
        <div className="container">
        <div className="row no-gutters">
          <div className="col-lg-5 col-6">
          <div className="first text-center">
          <Title />
          </div>
          </div>
          <div className="col-lg-7 col-6">
            <div className="weather-form text-center">
            <Form getWeather={this.getWeather}/>
            <Weather 
              temp={this.state.temp}
              city={this.state.city}
              country={this.state.country}
              humidity={this.state.humidity}
              desc={this.state.desc}
              error={this.state.error}
            />
            </div>
          </div>
        </div>
        </div>
      </section>
        
        
      </div>
    );
  }
}

export default App;
