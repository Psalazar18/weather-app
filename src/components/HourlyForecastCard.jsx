import { useRef, useEffect, useState } from "react";
import "./HourlyForecastCard.css";

export default function HourlyForecast({ hourlyData, onRefresh, loading }) {
  const [showNoData, setShowNoData] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    setShowNoData(false);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (hourlyData && hourlyData.length > 0) {
      setShowNoData(false);
      return;
    }

    timeoutRef.current = setTimeout(() => {
      setShowNoData(true);
    }, 3000);

    return () => clearTimeout(timeoutRef.current);
  }, [hourlyData]);

  const renderHeader = () => (
    <div className="hourly-forecast-header">
      <h2 className="hourly-title">Next hours</h2>
      <button
        className="refresh-button"
        onClick={onRefresh}
        aria-label="Actualizar pronóstico por hora"
      >
        🔄
      </button>
    </div>
  );

  const renderContent = () => {
    if (loading) {
      return <p className="loading-text">Loading forecast for the next hours...</p>;
    }

    if (showNoData) {
      return <p>No data available for the next hours.</p>;
    }

    return (
      <div className="hourly-cards-wrapper">
        {hourlyData.map((item) => {
          const time = new Date(item.dt * 1000).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          });
          const temp = Math.round(item.main.temp);
          const humidity = item.main.humidity;
          const icon = item.weather[0].icon;
          const description = item.weather[0].description;

          return (
            <div key={item.dt} className="hourly-forecast-card">
              <p className="temp">{temp}°C</p>
              <p className="humidity">{humidity}%</p>
              <img
                loading="lazy"
                src={`https://openweathermap.org/img/wn/${icon}.png`}
                alt={description}
                className="hourly-icon"
              />
              <p className="hour">{time}</p>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <section className="hourly-forecast-container">
      {renderHeader()}
      {renderContent()}
    </section>
  );
}

