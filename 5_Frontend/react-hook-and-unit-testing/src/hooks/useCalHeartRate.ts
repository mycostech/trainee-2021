import { useState } from "react"

const useCalHeartRate = (defauleAge: number) => {

    const [age, setAge] = useState<number>(defauleAge)

    return [220 - age, setAge] as const

}

export default useCalHeartRate