import { useEffect } from "react"

interface IShowSumProps{
    calSum: any,
    count: number
}

function ShowSum({ calSum, count }: IShowSumProps){


    useEffect(() => {
        if(count > 0){
            console.log('effect Ja')
        }
    }, [count])
    
    return (
        <div>
            Cal Sum is:  {calSum()}
            count: {count}
        </div>
    )
}

export default ShowSum