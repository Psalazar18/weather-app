import React, { useState } from "react";
import Header from "./components/Header";
import CityTabs from "./components/CityTabs";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import "./App.css"

function App() {
  const [selectedCity, setSelectedCity] = useState("");

  return (
    <div className="app-container">
      <Header></Header>
      <CityTabs selectedCity={selectedCity} setSelectedCity={setSelectedCity} />
      <Home selectedCity={selectedCity} />
      <Footer></Footer>
    </div>
  );
}

export default App;

