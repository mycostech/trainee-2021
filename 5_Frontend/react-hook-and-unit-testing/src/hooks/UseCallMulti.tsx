import { useState } from "react"

function UseCallMuti(){

    const [ans, setAns] = useState<number>(0);
    const callMulti = (_a: number,_b: number) => {
        
        setAns(_a*_b)
    }

    return [callMulti, ans] as const
}

export default UseCallMuti