import { useEffect } from "react"

interface ShowSumProps {
    calSum: any
    count: number
}
function ShowSum({ calSum, count }: ShowSumProps) {

    useEffect(() => {
        if(count > 0){
            console.log('count ', count)

            // return () => {
            //     console.log('count terminate!!!!')
            // }
        }
    }, [count])
    
    return (
        <div>
            Count is: {count}
            Cal Sum is:{calSum()}
        </div>
    )
}

export default ShowSum