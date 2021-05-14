import { useState, useEffect, useRef } from "react";
function randomWeather() {
    return Math.floor(Math.random() * 90) - 10;
}
const useRealTimeWeather = () => {
    const [weather, setWeather] = useState<number>(25)
    const loopRef = useRef<any>(null)
    
    useEffect(() => {
        const getWeather = () => {
            setWeather(randomWeather())
        }
        loopRef.current = setInterval(getWeather, 1500)
        return () => {
            if (loopRef && loopRef.current)
                clearInterval(loopRef.current)
        }
    }, [])
    return weather
}
export default useRealTimeWeather;