import React, { useState } from "react";

import ForecastDay from "./ForecastDay";
import axios from "axios";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponseF(response) {
    setForecast(response.data.daily);

    setLoaded(true);
  }
  console.log(props);

  if (loaded) {
    console.log(forecast);
    return (
      <div className="row justify-content-md-center mt-4">
        <ForecastDay dataForecast={forecast[0]} />
      </div>
    );
  } else {
    let apiKey = "62443ec44a5ca2da39a6b31ebb5a82c4";
    let lon = props.coordinates.lon;
    let lat = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponseF);
    return null;
  }
}
