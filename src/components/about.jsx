import React from "react";
import "./about.css";

export function AboutPage() {
 return (
    <div className="about-container container-fluid">
      <div className="about-card mx-auto p-4">
        <h2 className="about-title text-center mb-4">About Weather App</h2>
        <p className="about-text">
          The Weather App is a clean and simple single-page application that lets
          you check the current weather for any city in the world.
        </p>

        <h3 className="about-subtitle mt-4">Core Features</h3>
        <ul className="about-list">
          <li>Search for any city and get real-time weather updates.</li>
          <li>View temperature, humidity, and weather condition (like Clouds, Rain, Sun).</li>
          <li>Loading indicator while fetching weather data.</li>
          <li>Error handling if the city is not found or data cannot be retrieved.</li>
          <li>Responsive design for desktop, tablet, and mobile devices.</li>
        </ul>

        <h3 className="about-subtitle mt-4">Bonus Features</h3>
        <ul className="about-list">
          <li>Save the last searched city in localStorage.</li>
          <li>Display a 5-day forecast for the searched city.</li>
          <li>Clean UI with Bootstrap and icons for a modern look.</li>
        </ul>

        <p className="about-footer mt-4">
          This app is built with React, Bootstrap, and free weather APIs. It
          demonstrates clean component structure, effective state management, and
          responsive design principles.
        </p>
      </div>
    </div>
  );
}
