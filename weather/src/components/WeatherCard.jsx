import React from "react";
export default function WeatherCard({ weather }) {
  if (!weather) return null;

  //if the weather is empty or not loaded return null
  const { main, description, icon } = weather.weather[0];
  const temp = Math.round(weather.main.temp);
  const city = weather.name;

  return (
    <div className="bg-white bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl text-center transition-all">
      <h2 className="text-2xl font-bold">{city}</h2>
      <img
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt={description}
        className="mx-auto"
      />
      <p className="text-xl">
        {main}- {description}
      </p>
      <p className="text-3xl font-semibold">{temp}`C</p>
    </div>
  );
}


