// Weather.js
import './App.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Anim from './weatherAnim.jsx'
const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('');
  const apiKey = 'f00c38e0279b7bc85480c3fe775d518c';

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    if (city !== '') {
      fetchWeatherData();
    }
  }, [city, apiKey]);

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <>
    <Anim/>
    <div className="weatherContent">
      
      <h2>Weather App</h2>
      <input type="text" value={city} onChange={handleChange} placeholder="Enter city name" />
      {weatherData && (
        <div>
          <h3>{weatherData.name}</h3>
          <p>Temperature: {(weatherData.main.temp - 273.15).toFixed(2)}°C</p>
          <p>Description: {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
    </>
  );
};

export default Weather;
