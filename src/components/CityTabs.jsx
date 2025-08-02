import { useEffect } from 'react';
import { getCurrentWeather } from '../services/weatherApi';
import { getForecast } from '../services/weatherApi';
import "./CityTabs.css"


const cities = ["Rio de Janeiro", "Beijing", "Los Angeles"];

export default function CityTabs({ selectedCity, setSelectedCity }) {
    useEffect(() => {
      getCurrentWeather("Beijing");
      getForecast("Beijing")
    }, []);
  return (
    <div className="tabs">
      {cities.map((city) => (
        <button
          key={city}
          onClick={() => setSelectedCity(city)}
          className={selectedCity === city ? "tab active" : "tab"}
          aria-pressed={selectedCity === city}
        >
          {city.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
