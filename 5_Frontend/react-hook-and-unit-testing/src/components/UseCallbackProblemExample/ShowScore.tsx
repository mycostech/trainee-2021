import { useEffect } from "react"

interface ShowScoreProps {
    score: any
}
function ShowScore({
    score,
}: ShowScoreProps) {

    
    useEffect(() => {
        console.log("score score: ", score())
    }, [score])

    return (
        <div>
            Score is: {score()}
        </div>
    )
}
export default ShowScore