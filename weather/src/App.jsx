import useWeatherAnimation from "./hooks/useWeatherAnimation"
import useWeather from "./hooks/useWeather"
export default function App(){
  const {weather, loading}= useWeather()
  const animation= useWeatherAnimation(weather)

  return(
    <div className={`min-h-screen flex flex-col items-center justify-center transition-all ${animation.bg}`}>
      {loading ? (
        <p className="text-xl font-semibold" >Weather Loading</p>

      ): (
        <>
        <WeatherCard weather={weather}/>
        <MoodSuggestion weather={weather}/>
        </>
      )}
    </div>
  )
}