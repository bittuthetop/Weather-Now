import { useState } from "react";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

 
  const getWeatherCondition = (code) => {
    const weatherCodes = {
      0: "Clear sky",
      1: "Mainly clear",
      2: "Partly cloudy",
      3: "Overcast",
      45: "Fog",
      48: "Depositing rime fog",
      51: "Light drizzle",
      53: "Moderate drizzle",
      55: "Dense drizzle",
      56: "Light freezing drizzle",
      57: "Dense freezing drizzle",
      61: "Slight rain",
      63: "Moderate rain",
      65: "Heavy rain",
      66: "Light freezing rain",
      67: "Heavy freezing rain",
      71: "Slight snow fall",
      73: "Moderate snow fall",
      75: "Heavy snow fall",
      77: "Snow grains",
      80: "Slight rain showers",
      81: "Moderate rain showers",
      82: "Violent rain showers",
      85: "Slight snow showers",
      86: "Heavy snow showers",
      95: "Thunderstorm",
      96: "Thunderstorm with slight hail",
      99: "Thunderstorm with heavy hail"
    };
    return weatherCodes[code] || "Unknown";
  };

  const fetchWeather = async () => {
    if (!city) return;
    setLoading(true);
    setError("");
    setWeather(null);

    try {
      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}`
      );
      const geoData = await geoRes.json();

      if (!geoData.results || geoData.results.length === 0) {
        setError("City not found!");
        setLoading(false);
        return;
      }

      const { latitude, longitude, name, country } = geoData.results[0];

   
      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=relativehumidity_2m,apparent_temperature&daily=precipitation_probability_max&timezone=auto`
      );
      const weatherData = await weatherRes.json();

      setWeather({
        city: name,
        country,
        temp: weatherData.current_weather.temperature,
        wind: weatherData.current_weather.windspeed,
        code: weatherData.current_weather.weathercode,
        condition: getWeatherCondition(weatherData.current_weather.weathercode),
        humidity: weatherData.hourly.relativehumidity_2m[0],
        feelsLike: weatherData.hourly.apparent_temperature[0],
        precipitation: weatherData.daily.precipitation_probability_max[0],
        
        airQuality: "Satisfactory"
      });
    } catch (err) {
      setError("Failed to fetch weather data. Please try again.");
    }
    setLoading(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      fetchWeather();
    }
  };

  return (
    <div className="app-container">
      <div className="weather-card">
        <h1 className="app-title">Weather Now</h1>
        <p className="app-subtitle">Check current weather conditions for any city</p>

        <div className="input-section">
          <div className="checkbox-label">
            <div className="custom-checkbox">
              <div className="check-dot"></div>
            </div>
            <span>Enter city name</span>
          </div>
          <input
            type="text"
            placeholder="e.g., London, Tokyo, New York"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyPress={handleKeyPress}
            className="city-input"
          />
        </div>

        <button
          onClick={fetchWeather}
          disabled={loading}
          className="search-btn"
        >
          {loading ? "Searching..." : "Search"}
        </button>

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        {weather && (
          <div className="weather-display">
            <h2 className="weather-location">
              {weather.city}, {weather.country}
            </h2>
            
            <div className="weather-main">
              <div className="weather-icon">🌤️</div>
              <div className="weather-temp">{weather.temp}°C</div>
            </div>

            <div className="weather-condition">
              {weather.condition}
            </div>
            
            <div className="weather-details-grid">
              <div className="weather-detail-item">
                <div className="detail-label">Feels like</div>
                <div className="detail-value">{weather.feelsLike}°C</div>
              </div>
              
              <div className="weather-detail-item">
                <div className="detail-label">Precipitation</div>
                <div className="detail-value">{weather.precipitation}%</div>
              </div>
              
              <div className="weather-detail-item">
                <div className="detail-label">Humidity</div>
                <div className="detail-value">{weather.humidity}%</div>
              </div>
              
              <div className="weather-detail-item">
                <div className="detail-label">Wind</div>
                <div className="detail-value">{weather.wind} km/h</div>
              </div>
              
              <div className="weather-detail-item full-width">
                <div className="detail-label">Air Quality</div>
                <div className="detail-value">{weather.airQuality}</div>
              </div>
            </div>
          </div>
        )}

        <div className="footer-text">
          <p>Enter a city name to check current weather conditions</p>
        </div>
      </div>
    </div>
  );
}

export default App;