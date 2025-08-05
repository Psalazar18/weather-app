import { useEffect, useState } from "react";
import { getForecast, getHourlyForecast, getDailyForecast } from "../services/weatherApi";
import HourlyForecastCard from "../components/HourlyForecastCard"
import DailyForecastCard from "../components/DailyForecastCard";
import "./Home.css"

function Home({ selectedCity, setLastUpdated }) {
    const [hourlyData, setHourlyData] = useState([]);
    const [dailyData, setDailyData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [refreshTrigger, setRefreshTrigger] = useState(0);

    useEffect(() => {
        if (!selectedCity) return;

        async function fetchData() {
            try {
                setLoading(true);

                const data = await getForecast(selectedCity);
                if (data) {
                    setHourlyData(getHourlyForecast(data));
                    setDailyData(getDailyForecast(data));
                    setLastUpdated(new Date());
                } else {
                    setHourlyData([]);
                    setDailyData([]);
                }
            } catch (error) {
                console.error("Error fetching weather data:", error);
                setHourlyData([]);
                setDailyData([]);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [selectedCity, refreshTrigger, setLastUpdated]);

    function handleRefresh() {
        setRefreshTrigger((prev) => prev + 1);
    }


    return (
        <main className="home-container">
            <HourlyForecastCard
                hourlyData={hourlyData}
                onRefresh={handleRefresh}
                loading={loading}
            />
            <DailyForecastCard
                dailyData={dailyData}
                onRefresh={handleRefresh}
                loading={loading}
            />
        </main>
    )
}

export default Home;
