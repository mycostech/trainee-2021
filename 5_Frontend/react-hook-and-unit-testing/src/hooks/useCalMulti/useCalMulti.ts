import { useState } from "react"

const useCalMulti = () => {
    const [ans, setAns] = useState<number>(0)

    const calMulti = (a: number, b: number) => {
        console.log("a * b: ", a * b)
        return setAns(a*b)
    }


    return [calMulti, ans] as const
}

export default useCalMulti;