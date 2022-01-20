import React from "react";
import axios from "axios";
import "./weather-style.css";
export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `The current weather in ${response.data.name} is ${response.data.main.temp}`
    );
  }
  let apiKey = "20b66a5f117dcc9a1ccb7403aa799b09";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <h2>
      Esto es una prueba de un <b>elemento externo...</b>
    </h2>
  );
}
