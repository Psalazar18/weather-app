const API_KEY = "9170e0e85794088df319259526c55afd";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export async function getCurrentWeather(city) {
  try {
    const response = await fetch(
      `${BASE_URL}/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`
    );
    if (!response.ok) throw new Error("Error fetching current weather");
    const data = await response.json();
    console.log("current", data)
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

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
