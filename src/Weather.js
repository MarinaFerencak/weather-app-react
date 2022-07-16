import React from "react";
import "./Weather.css";
import clouds from "./clouds.png";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>New York</h1>
      <div>Wednesday 14:30</div>
      <div>Clouds</div>
      <div className="row mt-4">
        <div className="col">
          <img src={clouds} alt="clouds" className="currentWeatherIcon" />
          6°C
        </div>
        <div className="col">
          <ul>
            <li>Precipitation: 15%</li>
            <li>Humidity: 72%</li>
            <li>Wind: 13km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
