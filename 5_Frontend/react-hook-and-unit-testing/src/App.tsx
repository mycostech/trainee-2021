import React, { useState } from 'react';
import ShowAge from './components/ShowAge';
import ShowName from './components/ShowName';

function App() {

  const [name, setName] = useState<string>('')
  const [age, setAge] = useState<number>(0)
  const [step, setStep] = useState<number>(0)

  return (
    <>

      {step === 0 &&
        <div> Name :
        <input type="text" onChange={(e) => {
            setName(e.target.value)
          }} />
        </div>}


      {step === 1 &&
        <div> Age :
      <input type="number" onChange={(e) => {
            setAge(Number(e.target.value))
          }} />
        </div>}

      {step === 2 &&
        <>
          <ShowName name={name} />
          <ShowAge age={age} />
        </>
      }

      {(step === 1 || step === 2) &&
        <button onClick={() => setStep(preStep => preStep - 1)}>
          Prev
      </button>}
      {/**
       * one line (preStep => preStep + 1)
       * (preStep => { return preStep + 1})
       * (preStep => { 
       *    // condition
       *     // condition
       *   return preStep + 1
       * }
       * )
       */}
      {(step === 0 || step === 1) &&
        <button onClick={() => setStep(preStep => preStep + 1)}>
          Next
      </button>}
    </>
  );
}

export default App