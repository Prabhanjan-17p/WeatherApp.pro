


import "./home.css";
import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import { TestPage } from "./test";
import { CityNotFound } from "./city-not-found";




export function HomePage() {

    const apikey = "91b7042399fe01d85fbcd90475f0edea";
    const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);
    const [nextWeather, setNextWeather] = useState(null);
    const [error, setError] = useState(false);
    const [date, setDate] = useState("");
    const [unit, setUnit] = useState("metric"); // metric = Celsius, imperial = Fahrenheit

    const fetchWeather = async (cityName) => {
        try {
            const response = await axios.get(`${apiurl}${cityName}&appid=${apikey}`);
            setWeather(response.data);
            console.log(response.data)
            setError(false);
        } catch (err) {
            setError(true);
            setWeather(null);
        }
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=${unit}&appid=${apikey}`
            );
            setWeather(response.data);
            console.log(response.data);
            setError(false);
        } catch {
            setError(true);
            setWeather(null);
        }
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=${apikey}`
            );
            setNextWeather(response.data)
            console.log(response.data); // full 5-day forecast data (every 3 hours)
        } catch (err) {
            console.error("Error fetching forecast:", err);
        }
    };

    const handleSearch = () => {
        if (city) fetchWeather(city);
    };

    // handle input change
    function handleInputChange(e) {
        setCity(e.target.value);
    }

    // Get current location weather
    const fetchWeatherByLocation = (lat, lon) => {
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apikey}`)
            .then((res) => {
                setWeather(res.data);
                setError(false);
            })
            .catch(() => setError(true));
    };

    useEffect(() => {
        // Current date
        const today = new Date();
        const options = { day: "numeric", month: "long", year: "numeric" };
        setDate(today.toLocaleDateString(undefined, options));

        // Geolocation
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (pos) => fetchWeatherByLocation(pos.coords.latitude, pos.coords.longitude),
                () => console.log("Location permission denied")
            );
        }
    }, []);


    const nowDay = moment().format("dddd, MMM Do");
    const nowTime = moment().format("h:mm A");
    // e.g., Wednesday, 1st Oct 2025, 6:40 PM


    return (
        <div className="container-fluid text-white home-main">
            <div className="search-bar">
                <div className="search-bar-input">
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            width: "min(90vw, 520px)",
                            padding: "4px 14px",
                            borderRadius: "10px",
                            backgroundColor: "rgba(255, 255, 255, 0.85)",
                            boxShadow: "0 8px 18px rgba(0,0,0,0.25)",
                            backdropFilter: "blur(10px)",
                            transition: "0.3s ease",
                        }}
                    >
                        <input
                            type="text"
                            placeholder="Search your city..."
                            onChange={handleInputChange}
                            style={{
                                flex: 1,
                                marginLeft: "12px",
                                border: "none",
                                outline: "none",
                                background: "transparent",
                                fontSize: "clamp(14px, 2vw, 16px)",
                                color: "#000",
                                fontFamily: "Poppins, sans-serif",
                                letterSpacing: "0.5px",
                            }}
                        />

                        <button
                            onClick={handleSearch}
                            style={{
                                border: "none",
                                background: "transparent",
                                cursor: "pointer",
                                padding: "6px 8px",
                                borderRadius: "50%",
                                transition: "0.3s",
                            }}
                            title="Search"
                        >
                            <i
                                className="bi bi-search"
                                style={{ fontSize: "20px", color: "#007bff" }}
                            ></i>
                        </button>

                        <button
                            style={{
                                border: "none",
                                background: "transparent",
                                cursor: "pointer",
                                padding: "6px 8px",
                                borderRadius: "50%",
                                transition: "0.3s",
                            }}
                            title="Use my location"
                        >
                            <i
                                className="bi bi-geo-alt-fill"
                                style={{ fontSize: "20px", color: "#dc3545" }}
                            ></i>
                        </button>
                    </div>

                </div>
                {/* <div className="search-bar-convert d-flex g-2 justify-content-around d-none d-md-flex">
                    <button className="convert-btn" onClick={() => setUnit("imperial")}>°F</button>
                    <button className="convert-btn" onClick={() => setUnit("metric")}>°C</button>
                </div> */}


            </div>
            <div className="search-bar-body">
                <div className="search-bar-body-part1">

                    <div className="city-name-date">
                        <div className="d-flex align-items-center">
                            <span
                                className="circle-white d-flex justify-content-center align-items-center me-2"
                                style={{ width: "25px", height: "25px", borderRadius: "50%", backgroundColor: "rgba(255, 255, 255, 0.1)", }}
                            >
                                <i
                                    className="bi bi-geo-alt-fill"
                                    style={{ fontSize: "15px", color: "white" }}
                                ></i>
                            </span>
                            <span>
                                {weather && (
                                    <span className="d-flex flex-column city-name-date-loc">
                                        <span>{weather.name}</span>
                                        <span className="opacity-50 city-country">{weather.sys?.country}</span>
                                    </span>
                                )}
                            </span>
                        </div>
                        <div className="d-flex flex-column">
                            <span className="now-day">{nowDay}</span>
                            <span className="opacity-50 now-time">{nowTime}</span>
                        </div>
                    </div>
                    <div className="body-sub1">
                        {weather ? (
                            <>
                                <p className="fw-bold">
                                    {Math.round(weather.main?.temp)}<span style={{ fontSize: "0.5em", verticalAlign: "super" }}>°C</span>
                                </p>
                                <div className="mob-desc-lat-lon">
                                    <p >{weather.weather[0]?.description} </p>
                                    <div className="d-flex">
                                        <p className="me-4" style={{ fontSize: "10px", opacity: "0.5" }}>Lat: {weather.coord?.lat.toFixed(2)}</p>
                                        <p style={{ fontSize: "10px", opacity: "0.5" }}>Lon: {weather.coord?.lon.toFixed(2)}</p>
                                    </div>
                                </div>
                            </>
                        ) : null}
                    </div>
                    <div className="body-sub2">
                        {weather ? (
                            <>
                                <TestPage
                                    sunrise={new Date(weather.sys?.sunrise * 1000).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                                    sunset={new Date(weather.sys?.sunset * 1000).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                                    visibility={weather?.visibility}
                                    pressure={weather.main?.pressure}
                                    feelsLike={weather.main?.feels_like}
                                    humidity={weather.main?.humidity}
                                    wind={weather.wind?.speed}
                                />
                            </>
                        ) : (
                            error ? <p><CityNotFound cityName={city} /></p> : <p></p>
                        )}
                    </div>
                </div>
                <div className="search-bar-body-part2">
                    <div className="container-fluid">
                        <div className="predict-card-head d-flex align-items-center mb-2">
                            <span
                                className="circle-white d-flex justify-content-center align-items-center me-2"
                                style={{ width: "25px", height: "25px", borderRadius: "50%", backgroundColor: "rgba(255, 255, 255, 0.37)" }}
                            >
                                <i className="bi bi-calendar-date" style={{ fontSize: "15px", color: "white" }}></i>
                            </span>
                            <h3 className="title mx-1">5 Day Forecast</h3>
                        </div>

                        <div className="predict-card-body d-flex flex-column gap-2">
                            {nextWeather?.list
                                .filter(forecast => forecast.dt_txt.includes("12:00:00"))
                                .slice(0, 5)
                                .map((forecast, index) => (
                                    <div className="predict-card-body-card d-flex align-items-center" key={index} style={{ gap: "10px" }}>

                                        <div className="div-box1">
                                            <img
                                                src={`https://openweathermap.org/img/wn/${forecast.weather[0]?.icon}@2x.png`}
                                                style={{ width: "50px", height: "50px" }}
                                                alt="weather icon"
                                            />
                                        </div>

                                        <div className="div-box2 d-flex flex-column">
                                            <span>{moment(forecast.dt_txt).format("ddd")}</span>
                                            <span className="opacity-50 predict-desc">{forecast.weather[0]?.description}</span>
                                        </div>

                                        <div className="div-box3">
                                            <i className="bi bi-droplet me-2 fs-6"></i>
                                            {forecast.pop ? `${Math.round(forecast.pop * 100)}%` : "0%"}
                                        </div>

                                        <div className="div-box4 d-flex flex-column">
                                            <span className="fw-bold">
                                                {Math.round(forecast.main?.temp)}<span style={{ fontSize: "0.5em", verticalAlign: "super" }}>°C</span>
                                            </span>
                                            <span className="opacity-50 predict-desc">
                                                {Math.round(forecast.main?.temp)}<span style={{ fontSize: "0.5em", verticalAlign: "super" }}>°C</span>
                                            </span>
                                        </div>

                                    </div>
                                ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}



//--------------------------------------------------------