import React from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

export default function Forecast(props) {
  function handleResponseF(response) {
    console.log(response.data);
  }
  console.log(props);

  let apiKey = "62443ec44a5ca2da39a6b31ebb5a82c4";
  let lon = props.coordinates.lon;
  let lat = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponseF);

  return (
    <div className="row justify-content-md-center mt-4">
      <div className="col-lg-2 col-sm-4 box-day">
        <p className="day">Monday</p>
        <p className="text-center">
          <WeatherIcon code="01d" size={45} />
        </p>
        <hr className="box-line" />
        <p className="text-center">
          <span className="forecast-min">7°C </span> |
          <span className="forecast-max"> 28°C</span>
        </p>
      </div>
    </div>
  );
}
