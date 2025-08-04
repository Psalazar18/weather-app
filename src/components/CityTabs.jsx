import { useEffect } from 'react';
import "./CityTabs.css"

const cities = ["Rio de Janeiro", "Beijing", "Los Ángeles"];

export default function CityTabs({ selectedCity, setSelectedCity, setSearchMessage  }) {
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
          onClick={() => {
            setSelectedCity(city);
            setSearchMessage("")
          }}
          className={selectedCity === city ? "tab active" : "tab"}
          aria-pressed={selectedCity === city}
        >
          {city.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
