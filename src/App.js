import React, { useState } from "react";
import CityTabs from "./components/CityTabs";
import Home from "./pages/Home";

function App() {
  const [selectedCity, setSelectedCity] = useState("Los Angeles");

  return (
    <div className="App">
      <header className="header">Simple Weather</header>
      <CityTabs selectedCity={selectedCity} setSelectedCity={setSelectedCity} />
      <Home />
    </div>
  );
}

export default App;

