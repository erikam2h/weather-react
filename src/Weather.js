import React from "react";
//import axios from "axios";
import "./weather-style.css";
import Forecast from "./Forecast";

export default function Weather() {
  let weatherData = {
    city: "Berlin",
    temperature: 19,
    date: "Tuesday 10:00",
    description: "Cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
    humidity: 80,
    wind: 10,
  };

  return (
    <div className="weather">
      <div className="container-fluid m-0 p-5">
        <div className="container w-70">
          <div className="row justify-content-md-center">
            <div className="col-lg-4 col-sm-12">
              <h1 className="heading">
                Daily <b>weather</b>
              </h1>
            </div>

            <form className="search-form col-lg-7 col-sm-12" id="search-form">
              <div className="row">
                <div className="col-lg-4 col-sm-12">
                  <input
                    type="search"
                    placeholder="Type a city.."
                    autofocus="on"
                    autocomplete="off"
                    id="city-input"
                    className="form-control shadow-sm"
                  />
                </div>
                <div className="col-lg-3 col-sm-6">
                  <input
                    type="submit"
                    value="Search"
                    class="button-submit shadow-sm w-100"
                  />
                </div>

                <div className="col-lg-4 col-sm-6">
                  <button className="button-current w-100" id="myCity">
                    My city
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="row justify-content-md-center mt-3 mb-5">
            <div className="col-lg-4 col-sm-12">
              <h3 className="city-name">{weatherData.city}</h3>
              <p className="date">Last updated: {weatherData.date}</p>
              <div className="humidity-wind">
                Humidity: {weatherData.humidity}% - Wind: {weatherData.wind}
                km/h
              </div>
            </div>

            <div className="col-lg-7 col-sm-12">
              <div className="row">
                <div className="col-6">
                  <img
                    src={weatherData.imgUrl}
                    alt={weatherData.description}
                    className="float-left"
                  />
                  <p className="humidity-wind type" id="weather-type"></p>
                </div>
                <div className="col-6">
                  <div className="weather-lg">
                    {weatherData.temperature}
                    <span className="grados-link">°C</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Forecast />

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
      </div>
    </div>
  );
}
