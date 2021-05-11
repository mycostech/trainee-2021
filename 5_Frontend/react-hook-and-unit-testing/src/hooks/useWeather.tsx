import { useCallback, useState } from "react";

function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function randomWeather() {
    return Math.floor(Math.random() * 90) - 10;
}

const useWeather = () => {
    const [isLoading, setIsLoading] = useState(false)

    const [weather, setWeather] = useState(25)

    const getWeather = useCallback(async () => {
        setIsLoading(true)
        await sleep(3000)
        setWeather(randomWeather())
        setIsLoading(false)
    }, [setIsLoading, setWeather])

    return [weather, isLoading, getWeather] as const
}

export default useWeather