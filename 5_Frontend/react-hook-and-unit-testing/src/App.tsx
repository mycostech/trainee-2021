import React, { useState } from "react";
import ShowName from "./components/ShowName";
import ShowAge from "./components/ShowAge";
import "./App.css";
import StepButton from "./components/StepButton";
import TestEffect from "./components/TestEffect";
import useCallHeartRate from "./hooks/useCallHeartRate";
import Profile from "./components/UseCallbackProblemExample/Profile";
import useWeather from "./hooks/useWeather";
import useRealTimeWeather from "./hooks/useRealTimeWeather";
import useCalMulti from "./hooks/useCalMulti/useCalMulti";
import usePrimeNumber from "./hooks/usePrimeNumber/usePrimeNumber";

function App() {
  const [name, setName] = useState<string>("");
  //console.log("name: ", name)
  const [age, setAge] = useState<number>(0);
  const [step, setStep] = useState<number>(0);

  const [maxHeartRate, setHeartRate] = useCallHeartRate(30);

  const [weather, loading, getWeather] = useWeather();

  const realTimeWeather = useRealTimeWeather();

  //const calMulti = useCalMulti()
  //calMulti(5,5)

  const [a, setA] = useState<number>(0);
  const [b, setB] = useState<number>(0);
  const [calMulti, ans] = useCalMulti();

  const [number, setNumber] = useState<number>(0);
  const [isPrime, calPrime, num] = usePrimeNumber();

  return (
    <>
      <div>
        {/*CALMULTIPLY*/}
        <div>
          <div>
            <input
              type="number"
              placeholder="A"
              onChange={(e) => {
                setA(Number(e.target.value));
              }}
            />
          </div>

          <div>
            <input
              type="number"
              placeholder="B"
              onChange={(e) => {
                setB(Number(e.target.value));
              }}
            />
          </div>

          <button onClick={() => calMulti(a, b)}>CAL NOW</button>

          <br />
          {ans}
          <hr/>
        </div>
        {/*CALMULTIPLY*/}


        {/*CHECK PRIME*/}
        <div>
          <div>
          <br />
            <input
              type="number"
              placeholder="P"
              onChange={(e) => {
                setNumber(Number(e.target.value));
              }}
            />
          </div>

          <button onClick={() => calPrime(number)}>isPrime ?</button>
          <br />

          {isPrime === true ? <p>{num} IS PRIME</p> : <p>NOT PRIME</p>}
          <hr/>
        </div>
        {/*CHECK PRIME*/}


        {/*REALTIME WEATHER*/}
        <div>
          <p>realTimeWeather: {realTimeWeather}</p>
          <hr/>
        </div>
        {/*REALTIME WEATHER*/}
        {/*WEATHER*/}
        <div>
          {loading ? <p>Loading...</p> : <p>Weather: {weather}</p>}{" "}
          <button onClick={getWeather} disabled={loading}>
            GET
          </button>
        </div>
        <hr/>
        {/*WEATHER*/}
        {/*HEART RATE*/}
        <br />
        My Max Heart Rate: {maxHeartRate}
        <input
          type="number"
          onChange={(e) => setHeartRate(Number(e.target.value))}
        />
        <hr/>
        {/*HEART RATE*/}


        {/*PROFILE*/}
        <br />
        <Profile />
        <hr/>
        {/*PROFILE*/}
        {/*TEST EFFECT*/}
        <TestEffect />
        <hr/>
        {/*TEST EFFECT*/}
      </div>

      {/*SET STATE BUTTON*/}
      <br />
      <div>Mycos</div>

      {step === 0 && (
        <div>
          <p>NAME</p>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => {
              //console.log("value: ", e.target.value)
              setName(e.target.value);
            }}
          />
        </div>
      )}

      {step === 1 && (
        <div>
          <p>AGE</p>
          <input
            type="number"
            placeholder="Age"
            value={age}
            onChange={(e) => {
              //setAge(์Number(e.target.value))
              let a = Number(e.target.value);
              setAge(a);
            }}
          />
        </div>
      )}

      {step === 2 && (
        <>
          <ShowName childName={name} />
          <ShowAge age={age} />
        </>
      )}

      {/** การเขียน
       * one line (preStep => preStep + 1) หรือ
       * (preStep => { return preStep + 1})
       *
       * (preStep => { //หลายบรรทัดต้องเขียนแบบนี้เท่านั้น
       * // condition
       * // condition
       * return preStep + 1
       * }
       * )
       */}

      {step === 0 ? (
        //<button onClick={() => setStep((preStep) => preStep + 1)}>Next</button>
        <StepButton
          handleClick={() => setStep((preStep) => preStep + 1)}
          buttonText={"Next"}
        />
      ) : step > 0 && step < 2 ? (
        <>
          {/* <button onClick={() => setStep((preStep) => preStep - 1)}>
            Prev
          </button> */}
          <StepButton
            handleClick={() => setStep((preStep) => preStep - 1)}
            buttonText={"Prev"}
          />
          {/* <button className="btn-right" onClick={() => setStep((preStep) => preStep + 1)}>
            Next
          </button> */}
          <StepButton
            handleClick={() => setStep((preStep) => preStep + 1)}
            buttonText={"Next"}
          />
        </>
      ) : (
        step === 2 && (
          // <button onClick={() => setStep((preStep) => preStep - 1)}>
          //   Prev
          // </button>
          <StepButton
            handleClick={() => setStep((preStep) => preStep - 1)}
            buttonText={"Prev"}
          />
        )
      )}
      <hr/>
      {/*SET STATE BUTTON*/}
    </>
  );
}

export default App;
