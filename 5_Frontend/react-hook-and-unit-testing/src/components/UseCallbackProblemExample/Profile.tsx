import { useCallback, useState } from "react"
import ShowScore from "./ShowScore"



function Profile () {

    const [score, setScore] = useState<number>(0)
    const [name, setName] = useState<string>('')

    const calScore = useCallback(() => {
        return score * 5
    }, [score])

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