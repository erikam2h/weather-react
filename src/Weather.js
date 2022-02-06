import React, { useState } from "react";
import axios from "axios";
import "./weather-style.css";
import FormatDate from "./FormatDate";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      temperature: Math.round(response.data.main.temp),
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
    });
    setReady(true);
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

          <form className="search-form col-lg-6 col-sm-12" id="search-form">
            <div className="row">
              <div className="col-lg-6 col-sm-6 pb-3">
                <input
                  type="search"
                  placeholder="Type a city.."
                  autoFocus="on"
                  autoComplete="off"
                  id="city-input"
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

        <div className="row justify-content-md-center mb-5">
          <div className="col-lg-3 col-sm-12">
            <h3 className="city-name">{weatherData.city}</h3>

            <FormatDate date={weatherData.date} />

            <ul className="humidity-wind ">
              <li>Precipitation: 15%</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} km/h</li>
            </ul>
          </div>
          <div className="col-lg-2 col-sm-6">
            <div className="weather-lg text-center">
              {weatherData.temperature}
              <span className="grados-link">°C</span>
            </div>
          </div>
          <div className="col-lg-2 col-sm-6 mt-4">
            <img
              src={weatherData.icon}
              alt={weatherData.description}
              className="float-left"
            />
            <p className="description text-capitalize text-center">
              {weatherData.description}
            </p>
          </div>
        </div>
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
    let apiKey = "62443ec44a5ca2da39a6b31ebb5a82c4";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "The app is loading test...";
  }
}
