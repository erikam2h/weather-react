import React, { useState } from "react";
import axios from "axios";
import "./weather-style.css";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";

import { Rings } from "react-loader-spinner";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({});

  function handleResponse(response) {
    setWeatherData({
      temperature: Math.round(response.data.main.temp),
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      //icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      coordinates: response.data.coord,
    });
    setReady(true);
  }

  function search() {
    let apiKey = "62443ec44a5ca2da39a6b31ebb5a82c4";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function cityChange(event) {
    setCity(event.target.value);
  }

  if (ready) {
    return (
      <div className="weather container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-sm-12">
            <h1 className="heading text-center">
              Daily <b>weather</b>
            </h1>
          </div>

          <form
            className="search-form col-lg-6 col-sm-12"
            onSubmit={handleSubmit}
          >
            <div className="row">
              <div className="col-lg-6 col-sm-6 pb-3">
                <input
                  type="search"
                  placeholder="Type a city.."
                  autoFocus="on"
                  autoComplete="off"
                  onChange={cityChange}
                  className="form-control shadow-sm"
                />
              </div>
              <div className="col-lg-4 col-sm-6 pb-3">
                <input
                  type="submit"
                  value="Search"
                  className="button-submit shadow-sm w-100"
                />
              </div>
            </div>
          </form>
          <hr />
        </div>

        <WeatherInfo data={weatherData} />

        <Forecast coordinates={weatherData.coordinates} />

        <div className="col-12 link-footer mt-4">
          <hr />
          <a
            href="https://github.com/erikam2h/weather-app-shecodes"
            target="_blank"
            rel="noreferrer"
          >
            Open source code
          </a>
          <span> by Erika Mora</span>
        </div>
      </div>
    );
  } else {
    search();

    return (
      <Rings
        heigth="3000"
        width="3000"
        color="#40356f"
        ariaLabel="loading"
        className="text-center mt-5"
      />
    );
  }
}
