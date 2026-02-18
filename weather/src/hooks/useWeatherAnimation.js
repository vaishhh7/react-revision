import {useMemo} from "react"
// use memo remembers a reacr value unital something it depends on changes
// helps in avoiding recomputing same things unnecesarily

export default function useWeatherAnimation(weather){ 
    // this is a custom hook that takes weather as a param
    return useMemo(()=>{
        // this return use memo only runs when the [weather ] changes
        if(!weather) return {
            bg: 'bg-gray-200', effect:'none'
            // if weather is empty or not loaded return defaukt background and no effect
        }
        const main= weather.weather[0].main.toLowerCase()

        switch(main){
            case 'rain': return {bg: 'bg-gradient-to-b from-blue-400 to-gray-700', effect:'rain'}
            case 'clouds': return {bg:'bg-gray-400', effect:'clouds'}
            case 'clear': return {bg: 'bg-gradient-to-b from-yellow-200 to-orange-400', effect: 'sun' }
            default : return {bg: 'bg-gray-200', effect:'none'}
        }
    },[weather])

}
// this hook chooses backgriund and animations effect based on the current weather and only updates when weather dasta is changing


/*
{
  "weather": [
    { "id": 500, "main": "Rain", "description": "light rain" }
  ],
  "main": {
    "temp": 22.5
  },
  "name": "London"
}


so weather.weather[0]= { "id": 500, "main": "Rain", "description": "light rain" }
weather.weather[0].main= Rain
*/

