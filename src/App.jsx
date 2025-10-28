// import { useState } from "react";

// function App() {
//   const [city, setCity] = useState("");
//   const [weather, setWeather] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const fetchWeather = async () => {
//     if (!city) return;
//     setLoading(true);
//     setError("");
//     setWeather(null);

//     try {
      
//       const geoRes = await fetch(
//         `https://geocoding-api.open-meteo.com/v1/search?name=${city}`
//       );
//       const geoData = await geoRes.json();

//       if (!geoData.results || geoData.results.length === 0) {
//         setError("City not found!");
//         setLoading(false);
//         return;
//       }

//       const { latitude, longitude, name, country } = geoData.results[0];

    
//       const weatherRes = await fetch(
//         `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
//       );
//       const weatherData = await weatherRes.json();

//       setWeather({
//         city: name,
//         country,
//         temp: weatherData.current_weather.temperature,
//         wind: weatherData.current_weather.windspeed,
//         code: weatherData.current_weather.weathercode,
//       });
//     } catch (err) {
//       setError("Something went wrong. Please try again.");
//     }
//     setLoading(false);
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-500 to-blue-700 text-white p-4">
//       <h1 className="text-3xl font-bold mb-6">🌦️ Weather Now</h1>

//       <div className="flex gap-2 mb-6">
//         <input
//           type="text"
//           placeholder="Enter city name..."
//           value={city}
//           onChange={(e) => setCity(e.target.value)}
//           className="px-4 py-2 rounded-lg text-black w-60"
//         />
//         <button
//           onClick={fetchWeather}
//           className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-4 py-2 rounded-lg"
//         >
//           Search
//         </button>
//       </div>

//       {loading && <p className="text-lg">Loading...</p>}
//       {error && <p className="text-red-300">{error}</p>}

//       {weather && (
//         <div className="bg-white/20 p-6 rounded-lg text-center shadow-lg w-72">
//           <h2 className="text-2xl font-semibold">
//             {weather.city}, {weather.country}
//           </h2>
//           <p className="text-lg mt-2">🌡️ {weather.temp}°C</p>
//           <p className="text-lg mt-1">💨 Wind: {weather.wind} km/h</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;


// import { useState } from "react";

// function App() {
//   const [city, setCity] = useState("");
//   const [weather, setWeather] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const fetchWeather = async () => {
//     if (!city) return;
//     setLoading(true);
//     setError("");
//     setWeather(null);

//     try {
//       // Step 1: Get latitude & longitude using geocoding API
//       const geoRes = await fetch(
//         `https://geocoding-api.open-meteo.com/v1/search?name=${city}`
//       );
//       const geoData = await geoRes.json();

//       if (!geoData.results || geoData.results.length === 0) {
//         setError("City not found!");
//         setLoading(false);
//         return;
//       }

//       const { latitude, longitude, name, country } = geoData.results[0];

//       // Step 2: Fetch weather data using Open-Meteo API
//       const weatherRes = await fetch(
//         `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
//       );
//       const weatherData = await weatherRes.json();

//       setWeather({
//         city: name,
//         country,
//         temp: weatherData.current_weather.temperature,
//         wind: weatherData.current_weather.windspeed,
//         code: weatherData.current_weather.weathercode,
//       });
//     } catch (err) {
//       setError("Failed to fetch weather data. Please try again.");
//     }
//     setLoading(false);
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === "Enter") {
//       fetchWeather();
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-cyan-500 to-blue-600 text-white p-6">
//       <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20 w-full max-w-md">
//         <h1 className="text-3xl font-bold text-center mb-2">Weather Now</h1>
//         <p className="text-center text-blue-100 mb-6">Check current weather conditions for any city</p>

//         <div className="flex flex-col gap-4 mb-6">
//           <div className="flex items-center gap-3 bg-white/20 rounded-xl p-3">
//             <div className="w-5 h-5 rounded-full border-2 border-white flex items-center justify-center">
//               <div className="w-2 h-2 bg-white rounded-full"></div>
//             </div>
//             <input
//               type="text"
//               placeholder="Enter city name (e.g., London, Tokyo, New York)"
//               value={city}
//               onChange={(e) => setCity(e.target.value)}
//               onKeyPress={handleKeyPress}
//               className="bg-transparent border-none outline-none placeholder-blue-200 text-white flex-1"
//             />
//           </div>
          
//           <button
//             onClick={fetchWeather}
//             disabled={loading}
//             className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-70"
//           >
//             <span>🔍</span>
//             <span>{loading ? "Searching..." : "Search"}</span>
//           </button>
//         </div>

//         {loading && (
//           <div className="text-center py-4">
//             <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
//             <p className="mt-2 text-blue-100">Loading weather data...</p>
//           </div>
//         )}

//         {error && (
//           <div className="bg-red-400/20 border border-red-300/30 rounded-xl p-4 text-center">
//             <p className="text-red-100">{error}</p>
//           </div>
//         )}

//         {weather && (
//           <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/30">
//             <h2 className="text-2xl font-bold text-center mb-2">
//               {weather.city}, {weather.country}
//             </h2>
            
//             <div className="flex items-center justify-center my-4">
//               <div className="text-5xl">🌤️</div>
//               <div className="text-4xl font-light ml-4">{weather.temp}°C</div>
//             </div>
            
//             <div className="grid grid-cols-2 gap-4 mt-4">
//               <div className="bg-white/10 rounded-lg p-3 text-center">
//                 <div className="text-lg">💨</div>
//                 <div className="text-sm mt-1">Wind Speed</div>
//                 <div className="font-semibold">{weather.wind} km/h</div>
//               </div>
//               <div className="bg-white/10 rounded-lg p-3 text-center">
//                 <div className="text-lg">🌡️</div>
//                 <div className="text-sm mt-1">Temperature</div>
//                 <div className="font-semibold">{weather.temp}°C</div>
//               </div>
//             </div>
//           </div>
//         )}

//         <div className="mt-6 text-center">
//           <div className="text-blue-200 text-sm">
//             Enter a city name to check current weather conditions
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;



// import { useState } from "react";

// function App() {
//   const [city, setCity] = useState("");
//   const [weather, setWeather] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const fetchWeather = async () => {
//     if (!city) return;
//     setLoading(true);
//     setError("");
//     setWeather(null);

//     try {
//       const geoRes = await fetch(
//         `https://geocoding-api.open-meteo.com/v1/search?name=${city}`
//       );
//       const geoData = await geoRes.json();

//       if (!geoData.results || geoData.results.length === 0) {
//         setError("City not found!");
//         setLoading(false);
//         return;
//       }

//       const { latitude, longitude, name, country } = geoData.results[0];

//       const weatherRes = await fetch(
//         `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
//       );
//       const weatherData = await weatherRes.json();

//       setWeather({
//         city: name,
//         country,
//         temp: weatherData.current_weather.temperature,
//         wind: weatherData.current_weather.windspeed,
//         code: weatherData.current_weather.weathercode,
//       });
//     } catch (err) {
//       setError("Failed to fetch weather data. Please try again.");
//     }
//     setLoading(false);
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === "Enter") {
//       fetchWeather();
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-400 to-blue-600 text-white p-6">
//       {/* Main Card */}
//       <div className="bg-white rounded-2xl p-8 shadow-xl w-full max-w-md">
        
//         {/* Header */}
//         <h1 className="text-3xl font-bold text-gray-800 text-center mb-3">
//           Weather Now
//         </h1>
//         <p className="text-gray-600 text-center mb-8">
//           Check current weather conditions for any city
//         </p>

//         {/* Input Section */}
//         <div className="mb-6">
//           <div className="flex items-center gap-3 mb-2">
//             <div className="w-5 h-5 rounded border-2 border-gray-400 flex items-center justify-center">
//               <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
//             </div>
//             <span className="text-gray-700">Enter city name</span>
//           </div>
//           <input
//             type="text"
//             placeholder="e.g., London, Tokyo, New York"
//             value={city}
//             onChange={(e) => setCity(e.target.value)}
//             onKeyPress={handleKeyPress}
//             className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//           />
//         </div>

//         {/* Search Button */}
//         <button
//           onClick={fetchWeather}
//           disabled={loading}
//           className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 disabled:opacity-50 mb-6"
//         >
//           {loading ? "Searching..." : "Search"}
//         </button>

//         {/* Error Message */}
//         {error && (
//           <div className="bg-red-100 border border-red-300 text-red-700 px-4 py-3 rounded-lg mb-6 text-center">
//             {error}
//           </div>
//         )}

//         {/* Weather Display */}
//         {weather && (
//           <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-6">
//             <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
//               {weather.city}, {weather.country}
//             </h2>
            
//             <div className="flex justify-center items-center gap-6">
//               <div className="text-4xl">🌤️</div>
//               <div className="text-3xl font-light text-gray-700">
//                 {weather.temp}°C
//               </div>
//             </div>
            
//             <div className="flex justify-center gap-8 mt-4">
//               <div className="text-center">
//                 <div className="text-gray-600 text-sm">Wind</div>
//                 <div className="font-semibold text-gray-800">{weather.wind} km/h</div>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Footer Text */}
//         <div className="text-center">
//           <p className="text-gray-500 text-sm">
//             Enter a city name to check current weather conditions
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;


// import { useState } from "react";
// import "./App.css";

// function App() {
//   const [city, setCity] = useState("");
//   const [weather, setWeather] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const fetchWeather = async () => {
//     if (!city) return;
//     setLoading(true);
//     setError("");
//     setWeather(null);

//     try {
//       const geoRes = await fetch(
//         `https://geocoding-api.open-meteo.com/v1/search?name=${city}`
//       );
//       const geoData = await geoRes.json();

//       if (!geoData.results || geoData.results.length === 0) {
//         setError("City not found!");
//         setLoading(false);
//         return;
//       }

//       const { latitude, longitude, name, country } = geoData.results[0];

//       const weatherRes = await fetch(
//         `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
//       );
//       const weatherData = await weatherRes.json();

//       setWeather({
//         city: name,
//         country,
//         temp: weatherData.current_weather.temperature,
//         wind: weatherData.current_weather.windspeed,
//         code: weatherData.current_weather.weathercode,
//       });
//     } catch (err) {
//       setError("Failed to fetch weather data. Please try again.");
//     }
//     setLoading(false);
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === "Enter") {
//       fetchWeather();
//     }
//   };

//   return (
//     <div className="app-container">
//       <div className="weather-card">
//         <h1 className="app-title">Weather Now</h1>
//         <p className="app-subtitle">Check current weather conditions for any city</p>

//         <div className="input-section">
//           <div className="checkbox-label">
//             <div className="custom-checkbox">
//               <div className="check-dot"></div>
//             </div>
//             <span>Enter city name</span>
//           </div>
//           <input
//             type="text"
//             placeholder="e.g., London, Tokyo, New York"
//             value={city}
//             onChange={(e) => setCity(e.target.value)}
//             onKeyPress={handleKeyPress}
//             className="city-input"
//           />
//         </div>

//         <button
//           onClick={fetchWeather}
//           disabled={loading}
//           className="search-btn"
//         >
//           {loading ? "Searching..." : "Search"}
//         </button>

//         {error && (
//           <div className="error-message">
//             {error}
//           </div>
//         )}

//         {weather && (
//           <div className="weather-display">
//             <h2 className="weather-location">
//               {weather.city}, {weather.country}
//             </h2>
            
//             <div className="weather-main">
//               <div className="weather-icon">🌤️</div>
//               <div className="weather-temp">{weather.temp}°C</div>
//             </div>
            
//             <div className="weather-details">
//               <div className="weather-info">
//                 <div className="info-label">Wind</div>
//                 <div className="info-value">{weather.wind} km/h</div>
//               </div>
//             </div>
//           </div>
//         )}

//         <div className="footer-text">
//           <p>Enter a city name to check current weather conditions</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;




import { useState } from "react";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Function to get weather condition from weather code
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

      // Updated API call to get more weather parameters
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
        // Mock air quality since Open-Meteo doesn't provide it
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