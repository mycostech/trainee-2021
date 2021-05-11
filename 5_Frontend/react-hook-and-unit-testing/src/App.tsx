import React, { useState } from 'react';
import ShowAge from './components/ShowAge';
import ShowName from './components/ShowName';
import StepButton from './components/StepButton';
import './app.css';
import TestEffect from './components/TestEffect'; 
import Profile from './components/UseCallbackProblemExample/Profile';
import useCalHeartRate from './hooks/useCalHeartRate';
import useWeather from './hooks/useWeather';
import useRealTimeWeather from './hooks/useRealTimeWeather';
import useCalMulti from './hooks/useCalMulti/useCalMulti';
import usePrimeNumber from './hooks/usePrimeNumber/usePrimeNumber';
import ShowPrime from './components/UseCallbackProblemExample/ShowPrime';

function App() {

  // const [name, setName] = useState<string>('')
  // const [age, setAge] = useState<number>(0)
  // const [step, setStep] = useState<number>(0)
  // const [maxHeartRate, setHeartRate] = useCalHeartRate(30)
  // const [weather, loading, getWeather] = useWeather()
  // const realTimeWeather = useRealTimeWeather()
  // const calMul = useCalMulti()
  // calMul(5,5)
  const [isPrime, calPrime, num] = usePrimeNumber()
  return (
    <div>
      <input type="number" onChange={(e) => calPrime(Number(e.target.value))} />
      {isPrime === true && 
        <ShowPrime num = {num}/>
      }
      {isPrime === false && 
        <ShowPrime num = {num} not = "not "/>
      }
      {/* <div>
        <p>realTimeWeather: {realTimeWeather}</p>
      </div> */}
      {/* {loading ? <p>Loading...</p> :
          <p>Weather: {weather}</p>
        }
        <button onClick={getWeather} disabled={loading}>
          GET
        </button> */}
      {/* <TestEffect /> */}
      {/* My Max Heart Rate: {maxHeartRate}
      <input type="number"
        onChange = {(e) => 
          setHeartRate(Number(e.target.value))
        }
      /> */}
      {/* <Profile/> */}
    </div>
    // <div style={{
    //   width: 400,
    //   height: 300,
    //   backgroundColor: 'white'
    // }}>

    //   {step === 0 && 
    //     <>
    //     <input type="text" value={name} onChange={(e) => {
    //       setName(e.target.value)
    //     }} />
    //     </>
    //   }

    //   {step === 1 && 
    //     <>
    //       <input type="number" value={age} onChange={(e) => {
    //         setAge(Number(e.target.value))
    //       }} />
    //     </>
    //   }

    //   {step === 2 &&
    //     <>
    //       <ShowName childName={name} />
    //       <ShowAge age={age} />
    //     </>
    //   }
    //   <br />
    //   {step > 0 &&
    //       <StepButton 
    //         handleClick={() => setStep(preStep => preStep - 1)}
    //         buttonText={'Prev'}
    //       />      
    //   }
    //   {step < 2 &&
    //       <StepButton 
    //         handleClick={() => setStep(preStep => preStep + 1)}
    //         buttonText={'Next'}
    //         cssClass={'btn-right'}
    //       />      
    //   }

    // </div>
  );
}

export default App