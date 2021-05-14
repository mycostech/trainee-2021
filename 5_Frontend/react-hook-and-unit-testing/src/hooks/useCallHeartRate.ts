//Custom Hook

import { useState } from "react"

const useCallHeartRate = (defaultAge: number) => {

    const [age, setAge] = useState<number>(defaultAge)

    return [220 - age, setAge] as const //as const เพื่อให้ ts type แยกกัน
}

export default useCallHeartRate