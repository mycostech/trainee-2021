import React, { useState } from 'react';
import ShowAge from './components/ShowAge';
import ShowName from './components/ShowName';
import StepBtn from './components/StepBtn';
import './App.css';
import TestEffect from './components/TestEffect';
import Profile from './components/UseCallbackProblemExample/Profile';
import UseCallHeartRate from './hooks/UseCallHeartRate';
import useWeather from './hooks/UseWeather';
import UseRealTimeWeather from './hooks/UseRealTimeWeather';
import UseCallMuti from './hooks/UseCallMulti';
import usePrimeNumber from './hooks/usePrimeNumber/usePrimeNumber';

function App() {

  const [name, setName] = useState<string>('');
  const [age, setAge] = useState<number>(0);
  const [step, setStep] = useState<number>(0);


  const [maxH, setH] = UseCallHeartRate(23);

  console.log("step", step)
  
  //const [weather, loading, getWeather] = useWeather()
  //const weather = UseRealTimeWeather()

  const [a, setA] = useState<number>(0);
  const [b, setB] = useState<number>(0);
  const [callMul,ans] = UseCallMuti();
  const [num, setNum] = useState<number>(0);
  const [isPrime, CheckPrime, _num] = usePrimeNumber();


  return (

    <div>
      <input 
        type="number"
        onChange= {(e) => setNum(Number(e.target.value))}
      />
      <button onClick={() => CheckPrime(num)}>
        Check prime ({_num})
      </button>

      {isPrime === true &&
        "is Prime"
      }
    </div>


    // <div>
    //   {/* <TestEffect/> */}
    //   <Profile/>
    //   Max Heart Rate: {maxH}

    //   <input type="number"
    //   onChange={(e) => setH(Number(e.target.value))}/>
    // </div>

//     <div>
//       {loading ? <p>Loading...</p> :
//       <p>Weather: {weather}</p>
//       }
//      <button onClick={getWeather} disabled={loading}>
//       GET 
//       </button>
//     </div>

    // <div>
    // <p>Weather: {weather}</p>
    // </div>

    // <div>
    //   <label>A : </label>
    //   <input type="number"
    //     onChange={(e) => {
    //       setA(Number(e.target.value))
    //     }}
    //   />

    //   <br/>
    //   <label>B : </label>
    //   <input
    //     type="number"
    //     onChange={(e) => {
    //       setB(Number(e.target.value))
    //     }}
    //   />

    //   <button
    //     onClick={() => callMul(a,b)}
    //   >Cal</button>

    //   {ans}

    // </div>
      
  );
}

export default App;
