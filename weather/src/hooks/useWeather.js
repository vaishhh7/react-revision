import {useState, useEffect} from "react"
export default function useWeather() {
    const [weather, setWeather] = useState(null) // initally weather is empty
    const [loading, setLoading] = useState(true)  // loading if true means we are loading rn else we arent loading
    useEffect(() => {

        navigator.geolocation.getCurrentPosition(async (pos) => { // basically we are getting  the logitude and lat of my current location

            const { latitude, longitude } = pos.coords // from pos.coords extract the lat and long
            const res = await fetch(

                // fetch calls the weather api with my location that i got from above and await makes js wait until data comes back
                `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=YOUR_API_KEY&units=metric`
                //units =metric makes temp into celcius

            )
            const data = await res.json()  // the response res is now being made in js object
            setWeather(data) // now data is basically res as a js object and now setweather will put data and re rendering occurs

            setLoading(false) // cus we just got the data and have fetched it 
        })
    },[]) // this means useEffect only runs once when the componet loads
    return {weather, loading }
}

// this hook gets my current lcation fetches weather for it and gvies me the data and the loadin state