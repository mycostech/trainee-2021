import { useCallback, useRef, useState } from "react"
import { convertCompilerOptionsFromJson } from "typescript"
import ShowScore from "./ShowScore"



function Profile () {

    const [score, setScore] = useState<number>(0)
    const [name, setName] = useState<string>('')

    // const divRef = useRef(null)
    const testRef = useRef(null)

    const calScore = useCallback(() => {
        return score * 5
    }, [score])

    // console.log("divRef: ", divRef)

    return (
        <>
        <div>
            <input type="text" value={name}
                onChange={(e) => setName(e.target.value)}
            />
        </div>
        <div>
            <input type="number" value={score} onChange={(e) => setScore(e.target.value as any)} />
        </div>
        <div>
            Name: {name}
        </div>
        <ShowScore score={calScore} />
        </>
    )
}

export default Profile