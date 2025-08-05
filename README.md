# Weather App

A simple React application that provides weather forecasts (hourly and daily) for selected cities. The app uses the OpenWeather API for forecast data and includes features like city search, tabs for quick city selection, and a clean responsive UI.

---

## Features

- **City Selection:** Choose from preset tabs or search any city from a large dataset.
- **Hourly Forecast:** Displays the weather for the next 6 hours.
- **Daily Forecast:** Shows the weather for the next 5 days.
- **Loading States:** UI indicates when data is being fetched.
- **Last Updated:** Shows the last time the forecast was refreshed.
- **Responsive Design:** Optimized for desktop and mobile devices.
- **Error Handling:** Alerts users when a searched city is not found.
- **Icon Lazy Loading:** Weather icons are fetched dynamically improving performance.


---

## Technologies Used

- React (Functional Components & Hooks)
- Fetch API for HTTP requests
- OpenWeather API for weather data
- Local JSON city dataset for city search
- CSS Flexbox for layout and styling

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Psalazar18/weather-app.git
   cd weather-app

2. Install dependencies: 

   ```bash
    npm install

3. Start the development server: 

   ```bash
    npm start

## Usage

- Select a city from the tabs or click the search icon to type and search for any city.
- The hourly and daily forecasts update automatically when a city is selected.
- Use the refresh button on the hourly forecast to manually reload data.
- The last update timestamp is shown in the footer.

## Project Structure
- **/src/components** — Reusable components like Header, CityTabs, CitySearch, HourlyForecastCard, DailyForecastCard, Footer.

- **/src/pages** — Pages like Home that orchestrate the forecast display.

- **/src/services** — API calls and data extraction helpers.

- **/src/data** — Static data such as the JSON file for cities.

- **/src/App.jsx** — Main app component coordinating layout and state.

## Notes
- The app normalizes city names to handle accented characters and improve search accuracy.
- The city search uses a local JSON dataset that was converted from a .csv file.
- The weather data fetch is done once per city change and includes loading states and error handling.


