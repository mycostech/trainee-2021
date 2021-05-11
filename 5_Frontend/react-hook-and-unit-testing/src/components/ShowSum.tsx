import { useEffect } from "react"

interface ShowSumProps {
    calSum: any
    count: number
}
function ShowSum({ calSum, count }: ShowSumProps) {

    useEffect(() => {
        if (count > 0)
            console.log('effect effect effect', count)
    }, [count])

    return (
        <div>
            Count ids : {count}
            Cal Sum is :  {calSum()}
        </div>
    )
}

export default ShowSum