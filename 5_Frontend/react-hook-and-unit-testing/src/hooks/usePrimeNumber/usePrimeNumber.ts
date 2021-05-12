import { useCallback, useState } from "react"

const usePrimeNumber = () => {

    const [num, setNum] = useState<number>(0);
    const [isPrime, setPrime] = useState<boolean>(false);

    const CheckPrime = (num: number) => {
        setNum(num)
        let c = 0
        for(let i=0; i <= num; i++){
            if(num % i === 0){
                c++;
            }
        }

        if(c === 2){
            setPrime(true);
        }
        else{
            setPrime(false)
        }
    }

    return [isPrime, CheckPrime , num] as const
}

export default usePrimeNumber
