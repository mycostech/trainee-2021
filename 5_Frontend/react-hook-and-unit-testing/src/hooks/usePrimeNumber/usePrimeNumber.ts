import { useCallback, useState } from "react";

const usePrimeNumber = () => {

  const [isPrime, setPrime] = useState<boolean>();
  const [num, setNum] = useState<number>(0);

  const calPrime = (number: number) => {
    setNum(number);

    if(number == 1 || number == 0){
      return setPrime(false);
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return setPrime(false); //not prime
      }     
    }
    return setPrime(true); //prime

  };

  return [isPrime, calPrime, num] as const;
};

export default usePrimeNumber;
