import { useEffect, useState } from "react"
import ShowSum from "./ShowSum"


function TestEffect() {

    const [count, setCount] = useState<number>(0)
    const [showName, setShowName] = useState<boolean>(true)

    // useEffect(() => {
    //     if(count > 0){
    //         console.log('count ', count)

    //         // return () => {
    //         //     console.log('count terminate!!!!')
    //         // }
    //     }
    // }, [count])
    
    useEffect(() => {
        console.log("call only first time!!!!")

        return () => {
            console.log('terminate!!!!')
        }
    }, [])

    const calSum = () => {
        return count * 5
    }

    return (
        <div>
            
            <button onClick={
                () => setCount(count => count + 1)}
                style={{
                    marginBottom: 40
                }}
            >
                +
            </button>
            <div>
            <button onClick={
                () => setShowName(name => !name)
                }
            >
                toggle 
            </button>
            {showName && 'my name is Nook'}

            <ShowSum calSum={calSum} count={count}/>
            </div>
        </div>
    )
}

export default TestEffect