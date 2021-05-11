import { useCallback, useEffect, useState } from "react"

function foundFactor(num: number) {
    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
            return true;
        }
    }
    return false;
}

const usePrimeNumber = () => {
    const [isPrime, setIsPrime] = useState(false)
    const [num, setNum] = useState<number>(0)

    const calPrime = useCallback((input: number) => {
        if (CheckPrime(input) == true) {
            setNum(input)
            setIsPrime(true)
        } else {
            setNum(input)
            setIsPrime(false)
        }
    }, [setIsPrime, setNum])


    return [true, () => { }, 0]

}

export default usePrimeNumber
