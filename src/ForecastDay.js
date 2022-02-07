import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="col-lg-2 col-sm-4 box-day">
      <p className="day">{day()}</p>
      <p className="text-center">
        <WeatherIcon code={props.dataForecast.weather[0].icon} size={45} />
      </p>
      <hr className="box-line" />
      <p className="text-center">
        <span className="forecast-max">
          {" "}
          {Math.round(props.dataForecast.temp.max)} °C{" "}
        </span>{" "}
        |
        <span className="forecast-min">
          {" "}
          {Math.round(props.dataForecast.temp.min)} °C{" "}
        </span>
      </p>
    </div>
  );
}
