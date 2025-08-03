const API_KEY = "9170e0e85794088df319259526c55afd";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export async function getForecast(city) {
  try {
    const response = await fetch(
      `${BASE_URL}/forecast?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`
    );
    if (!response.ok) throw new Error("Error fetching forecast");
    const data = await response.json();
    console.log("forecast", data)
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

// Extrae las próximas 5 horas del forecast
export function getHourlyForecast(forecastData) {
  if (!forecastData?.list) return [];
  return forecastData.list.slice(0, 6);
}

// Extrae los próximos 5 días 
export function getDailyForecast(forecastData) {
  if (!forecastData?.list) return [];

  const daysMap = {};
  forecastData.list.forEach((item) => {
    const [date, time] = item.dt_txt.split(" ");
    if (time === "12:00:00") {
      daysMap[date] = item;
    }
  });

  return Object.values(daysMap).slice(0, 5);
}