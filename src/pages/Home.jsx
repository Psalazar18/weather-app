import { useEffect, useState, useCallback  } from "react";
import { getForecast, getHourlyForecast } from "../services/weatherApi";
import HourlyForecastCard from "../components/HourlyForecastCard"
import "./Home.css"

function Home({ selectedCity }) {
    //const [forecastData, setForecastData] = useState(null);
    const [hourlyData, setHourlyData] = useState([]);
    const [loading, setLoading] = useState(false);

   const fetchHourly = useCallback(async () => {
    setLoading(true);
    const data = await getForecast(selectedCity);
    if (data) {
      const hourly = getHourlyForecast(data);
      setHourlyData(hourly);
    }
    setLoading(false);
  }, [selectedCity]);

    useEffect(() => {
        if (selectedCity) {
            fetchHourly();
        }

    }, [selectedCity, fetchHourly]);

    return (
        <main className="home-container">
            <HourlyForecastCard
                hourlyData={hourlyData}
                onRefresh={fetchHourly}
                loading={loading}
            />
        </main>
    )
}

export default Home;
