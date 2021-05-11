import { useState, useEffect, useRef } from "react";
function randomWeather() {
    return Math.floor(Math.random() * 90) - 10;
}
const useRealTimeWeather = () => {
    const [weather, setWeather] = useState<number>(25)
    const interValFnc = useRef<any>(null)
    useEffect(() => {
        const getWeather = () => {
            setWeather(randomWeather())
        }
        interValFnc.current = setInterval(getWeather, 1500)
        return () => {
            if (interValFnc && interValFnc.current)
                clearInterval(interValFnc.current)
        }
    }, [])
    return weather
}
export default useRealTimeWeather;