import { useState } from "react"

const useCalHeartRate = (defaultAge: number) => {
    
    const [age, setAge] = useState<number>(defaultAge)
    return [220 - age, setAge] as const
}

export default useCalHeartRate