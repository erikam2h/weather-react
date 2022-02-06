import React from "react";
import FormatDate from "./FormatDate";

export default function WeatherInfo(props) {
  return (
    <div className="row justify-content-md-center mb-5">
      <div className="col-lg-3 col-sm-12">
        <h3 className="city-name">{props.data.city}</h3>

        <FormatDate date={props.data.date} />

        <ul className="humidity-wind ">
          <li>Precipitation: 15%</li>
          <li>Humidity: {props.data.humidity}%</li>
          <li>Wind: {props.data.wind} km/h</li>
        </ul>
      </div>
      <div className="col-lg-2 col-sm-6">
        <div className="weather-lg text-center">
          {props.data.temperature}
          <span className="grados-link">°C</span>
        </div>
      </div>
      <div className="col-lg-2 col-sm-6 mt-4">
        <img
          src={props.data.icon}
          alt={props.data.description}
          className="float-left"
        />
        <p className="description text-capitalize text-center">
          {props.data.description}
        </p>
      </div>
    </div>
  );
}
