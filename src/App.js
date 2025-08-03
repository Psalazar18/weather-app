import { useState } from "react";
import Header from "./components/Header";
import CityTabs from "./components/CityTabs";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import "./App.css"

function App() {
  const [selectedCity, setSelectedCity] = useState("");
  const [lastUpdated, setLastUpdated] = useState(null);


  return (
    <div className="app-container">
      <Header />
      <CityTabs selectedCity={selectedCity} setSelectedCity={setSelectedCity} />

      <div className="app-content">
        <Home selectedCity={selectedCity} setLastUpdated={setLastUpdated} />
      </div>

      <Footer lastUpdated={lastUpdated} />
    </div>
  );
}

export default App;

