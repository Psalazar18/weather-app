import { useEffect } from 'react';
import "./CityTabs.css"

const cities = ["Rio de Janeiro", "Beijing", "Los Angeles"];

export default function CityTabs({ selectedCity, setSelectedCity }) {
  useEffect(() => {
    if (!selectedCity) {
      setSelectedCity(cities[0]);
    }
  }, [selectedCity, setSelectedCity]);
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
