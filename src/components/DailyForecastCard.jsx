import { useEffect, useRef, useState } from "react";
import "./DailyForecastCard.css";

export default function DailyForecastCard({ dailyData, loading }) {
  const [showNoData, setShowNoData] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    setShowNoData(false);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (dailyData && dailyData.length > 0) {
      return;
    }

    timeoutRef.current = setTimeout(() => {
      setShowNoData(true);
    }, 3000);

    return () => clearTimeout(timeoutRef.current);
  }, [dailyData]);


 const renderHeader = () => (
    <div className="daily-forecast-header">
      <h2 className="daily-title">Next 5 days</h2>
    </div>
  );
   const renderContent = () => {
    if (loading) {
      return <p className="loading-text">Loading forecast for the next days...</p>;
    }

    if (showNoData) {
      return <p>No data available for the next days.</p>;
    }

  

   return (
      <div className="daily-cards-wrapper">
        {dailyData.map((item) => {
          const date = new Date(item.dt * 1000);
          const dayName = date.toLocaleDateString(undefined, { weekday: "short", month: "short", day: "numeric" });
          const description = item.weather[0].description;
          const icon = item.weather[0].icon;
          const minTemp = Math.round(item.main.temp_min);
          const maxTemp = Math.round(item.main.temp_max);

          return (
            <div key={item.dt} className="daily-forecast-card">
              <img
                loading="lazy"
                src={`https://openweathermap.org/img/wn/${icon}.png`}
                alt={description}
                className="daily-icon"
              />
              <div className="day-description">
                <p className="day">{dayName}</p>
                <p className="description">{description}</p>
              </div>
              <div className="temps">
                <p>{minTemp}°</p>
                <p>{maxTemp}°</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <section className="daily-forecast-container">
      {renderHeader()}
      {renderContent()}
    </section>
  );
}