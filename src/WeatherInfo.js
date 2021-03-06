import React from "react";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";
import WeatherUnits from "./WeatherUnits";

export default function WeatherInfo(props) {
  return (
    <div className="row justify-content-md-center">
      <div className="col-lg-3 col-sm-12">
        <h3 className="city-name">{props.data.city}</h3>

        <FormatDate date={props.data.date} />
        <ul className="humidity-wind">
          <li>Precipitation: 15%</li>
          <li>Humidity: {props.data.humidity}%</li>
          <li>Wind: {props.data.wind} km/h</li>
        </ul>
      </div>
      <div className="col-lg-4 col-sm-12">
        <div className="row">
          <div className="col-lg-4 col-sm-6 mt-4">
            <p className="text-center">
              <WeatherIcon code={props.data.icon} size={70} />
            </p>
          </div>
          <div className="col-lg-8 col-sm-6">
            <WeatherUnits celsius={props.data.temperature} />
          </div>
          <hr />
          <p className="description text-capitalize text-center">
            {props.data.description}
          </p>
        </div>
      </div>
    </div>
  );
}
