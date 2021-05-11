import { useCallback, useEffect, useState } from "react"

function foundFactor(num: number){
    for(var i = 2; i < num; i++){
        if(num%i===0){
            return true;
        }
    }
    return false;
}

const usePrimeNumber = () => {

    const [isPrime, setIsPrime] = useState(false) 
    const [num, setNum] = useState(0)
    
    const calPrime = useCallback(async (n: number) => {
        setNum(n)
        if(foundFactor(n) || n===0){
            setIsPrime(false)
        }else{
            setIsPrime(true)
        }
    }, [setIsPrime, setNum])

    console.log(isPrime.toString())

    return [isPrime, calPrime, num] as const
}

export default usePrimeNumber
