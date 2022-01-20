import React from "react";

export default function Forecast() {
  return (
    <div class="row justify-content-md-center mt-4">
      <div class="col-lg-2 col-sm-4 box-day">
        <p class="day">Monday</p>
        <h2 class="weather-s">☀ 22°C</h2>
        <hr class="box-line" />
        <p class="min-max-s">7°C| 28°C</p>
      </div>

      <div class="col-lg-2 col-sm-4 box-day">
        <p class="day">Tuesday</p>
        <h2 class="weather-s">🌤 20°C</h2>
        <hr class="box-line" />
        <p class="min-max-s">7°C | 28°C</p>
      </div>

      <div class="col-lg-2 col-sm-4 box-day">
        <p class="day">Wednesday</p>
        <h2 class="weather-s">☀ 26°C</h2>
        <hr class="box-line" />
        <p class="min-max-s">7°C | 28°C</p>
      </div>

      <div class="col-lg-2 col-sm-4 box-day">
        <p class="day">Thursday</p>
        <h2 class="weather-s">🌦 19°C</h2>
        <hr class="box-line" />
        <p class="min-max-s">7°C | 22°C</p>
      </div>

      <div class="col-lg-2 col-sm-4 box-day">
        <p class="day">Friday</p>
        <h2 class="weather-s">🌧 16°C</h2>
        <hr class="box-line" />
        <p class="min-max-s">5°C | 18°C</p>
      </div>
    </div>
  );
}
