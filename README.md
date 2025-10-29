# 🌤️ Weather Now

**Weather Now** is a simple and modern weather web app built using **React + Vite**.  
It allows users to check real-time weather information for any city around the world.  
The app uses the **Open-Meteo API**, which requires no authentication or API key.

---

## 🚀 Features

- 🌍 Search weather by city name  
- 🌡️ Displays current temperature, humidity, and wind speed  
- ☁️ Shows weather condition (e.g., clear sky, rain, snow)  
- 💧 Displays precipitation probability and “feels like” temperature  
- 🧭 Auto-fetches latitude and longitude using Open-Meteo’s Geocoding API  
- ⚡ Real-time weather updates without page reload  
- 🖥️ Fully responsive and modern UI

---

## 🛠️ Tech Stack

- **Frontend:** React (Vite)
- **Styling:** CSS
- **APIs Used:**
  - [Open-Meteo Geocoding API](https://open-meteo.com/en/docs/geocoding-api)
  - [Open-Meteo Weather API](https://open-meteo.com/en/docs)

---

## ⚙️ Installation and Setup

Follow these steps to run the project locally 👇

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/weather-now.git

2. **Navigate to the project folder**
   ```bash
   cd weather-now
3. **Install dependencies**
   ```bash
   npm install
4. **Start the development server**
   ```bash
   npm run dev

## 💡 How It Works

1. **User enters a city name** in the input box.  
2. The app **fetches latitude and longitude** using the **Open-Meteo Geocoding API**.  
3. Then it **fetches the current weather details** — temperature, humidity, wind speed, precipitation, etc.  
4. The app **displays the results dynamically** without reloading the page.





## 📸 UI Preview

![Home Page](./public/home.png)
![Result Page](./public/result.png)

## 🌐 Live Demo

🔗 **Live Project:** [https://yv32td-5173.csb.app/](https://yv32td-5173.csb.app/)








