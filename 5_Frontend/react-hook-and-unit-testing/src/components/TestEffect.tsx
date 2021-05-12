import { useEffect, useState } from "react";
import ShowSum from "./ShowSum";

function TestEffect(){

    const [count, setCount] = useState<number>(0);
    const [showname, setShowname] = useState<boolean>(false);
    

    // useEffect(() => {
    //     if(count > 0){
    //         console.log('effect Ja')
    //     }
    // }, [count])

    useEffect(() => {
        console.log('cal only first time !')
        
        return () => {
            console.log("destroy")
        }
    },[])


    const callSum = () => {
        return count * 5
    }

    return(

        <div>
            <button onClick={() => setCount(c => c+1)}>+</button>
            {count}
            <button onClick={() => setCount(c => c-1)}>-</button>

            <button onClick={() => setShowname(() => !showname)}>Toggle</button>
            {showname === true &&
                "Show name"
            }

            <ShowSum calSum={callSum} count={count}/>
        </div>
    )
}

export default TestEffect

