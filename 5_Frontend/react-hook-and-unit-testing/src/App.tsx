import React, { useState } from 'react';
import ShowAge from './components/ShowAge';
import ShowName from './components/ShowName';
import StepButton from './components/StepButton';
import './app.css'
import TestEffect from './components/TestEffect';
import Profile from './components/UseCallbackProblemExample/Profile';
import useCalHeartRate from './hooks/useCalHeartRate';
import useWeather from './hooks/useWeather';
import useRealTimeWeather from './hooks/useRealTimeWeather';
import useCalMuti from './hooks/useCalMuti/useCalMulti';
import usePrimeNumber from './hooks/usePrimeNumber/usePrimeNumber';

function App() {

  const [name, setName] = useState<string>('')
  const [age, setAge] = useState<number>(0)
  const [step, setStep] = useState<number>(0)

  const [maxHeartRate, setHeartRate] = useCalHeartRate(30)

  const [weather, loading, getWeather] = useWeather()

  const realTimeWeather = useRealTimeWeather()

  //const calMulti = useCalMulti()
  //calMulti(5,5)


  const [isPrime, calPrime, num] = usePrimeNumber()

  return (
    <div>
      <input type="number" onChange={ e => calPrime(Number(e.target.value))} />
      {isPrime ? <p>{num} is prime</p>
        :
        <p>{num} is not prime</p>
      }
    </div>
    // <div>
    //   <div>
    //     <p>
    //       realTimeWeather: {realTimeWeather}
    //     </p>
    //   </div>

    //   <div>
    //     {loading ? <p>Loading...</p>
    //       :
    //       <p>Weather: {weather}</p>
    //     }
    //     <button onClick={getWeather} disabled={loading}>
    //       GET
    //     </button>
    //   </div>


    //   My Max Heart Rate : {maxHeartRate}
    //   <input type="number" onChange={e => setHeartRate(Number(e.target.value))} />
    //   <Profile />
    // </div>
    // <div>
    //   <TestEffect />

    //   {step === 0 &&
    //     <div> Name :
    //     <input type="text" value={name} onChange={(e) => {
    //         setName(e.target.value)
    //       }} />
    //     </div>}


    //   {step === 1 &&
    //     <div> Age :
    //   <input type="number" value={age} onChange={(e) => {
    //         setAge(Number(e.target.value))
    //       }} />
    //     </div>}

    //   {step === 2 &&
    //     <>
    //       <ShowName name={name} />
    //       <ShowAge age={age} />
    //     </>}

    //   {(step === 1 || step === 2) &&
    //     <StepButton
    //       handleClick={() => setStep(preStep => preStep - 1)}
    //       buttonText={'Prew'}
    //     />
    //   }
    //   {/**
    //    * one line (preStep => preStep + 1)
    //    * (preStep => { return preStep + 1})
    //    * (preStep => { 
    //    *    // condition
    //    *     // condition
    //    *   return preStep + 1
    //    * }
    //    * )
    //    */}
    //   {(step === 0 || step === 1) &&
    //     <StepButton
    //       handleClick={() => setStep(preStep => preStep + 1)}
    //       buttonText={'Next'}
    //       cssclass={'btn-right'}
    //     />}
    // </div>
  );
}

export default App

