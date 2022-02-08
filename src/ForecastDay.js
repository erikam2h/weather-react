import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  function day() {
    let date = new Date(props.dataForecast.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <p className="day">{day()}</p>
      <p className="text-center">
        <WeatherIcon code={props.dataForecast.weather[0].icon} size={45} />
      </p>
      <p className="text-center">
        <span className="forecast-max">
          {Math.round(props.dataForecast.temp.max)}°{" "}
        </span>
        <span className="forecast-min">
          {" "}
          {Math.round(props.dataForecast.temp.min)}°
        </span>
      </p>
    </div>
  );
}
