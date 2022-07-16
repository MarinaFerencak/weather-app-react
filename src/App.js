import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <Weather />
      <footer>
        This project was coded by Marina Ferenčak and it's{" "}
        <a
          href="https://github.com/MarinaFerencak/weather-app-react"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on GitHub
        </a>
      </footer>
    </div>
  );
}
