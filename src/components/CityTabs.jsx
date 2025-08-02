const cities = ["Rio de Janeiro", "Beijing", "Los Angeles"];

export default function CityTabs({ selectedCity, setSelectedCity }) {
  return (
    <div className="tabs">
      {cities.map((city) => (
        <button
          key={city}
          onClick={() => setSelectedCity(city)}
          className={selectedCity === city ? "tab active" : "tab"}
        >
          {city.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
