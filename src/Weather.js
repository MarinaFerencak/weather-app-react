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
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <h1>New York</h1>
      <ul>
        <li>Wednesday 14:30</li>
        <li>Clouds</li>
      </ul>
      <div className="row mt-2">
        <div className="col">
          <img src={clouds} alt="clouds" className="weather-icon" />
          <div className="temperature-box">
            <span className="temperature">6</span>
            <span className="unit">°C</span>
          </div>
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
