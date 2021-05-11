import { useCallback, useState } from "react"

function CheckPrime(numInput: number) {
    if (numInput <= 1)
        return false;
    for (let i = 2; i < numInput; i++)
        if (numInput % i == 0)
            return false;
    return true;
}

const usePrimeNumber = () => {
    const [isPrime, setIsPrime] = useState(false)

    const [num, setNum] = useState<number>(0)

    const calPrime = useCallback((input: number) => {
        if (CheckPrime(input) == true) {
            setNum(input)
            setIsPrime(true)
            console.log(isPrime)
        } else {
            setNum(input)
            setIsPrime(false)
            console.log(isPrime)
        }
    }, [setIsPrime, setNum])

    return [isPrime, calPrime, num] as const
}

export default usePrimeNumber
