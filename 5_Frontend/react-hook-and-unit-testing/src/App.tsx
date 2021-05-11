import React, { useState } from 'react';
import ShowAge from './components/ShowAge';
import ShowName from './components/ShowName';
import StepBtn from './components/StepBtn';
import './App.css';

function App() {

  const [name, setName] = useState<string>('');
  const [age, setAge] = useState<number>(0);
  const [step, setStep] = useState<number>(0);

  console.log("step", step)

  return (
    <div className="container">

      <div>
        { step === 0 &&
          <div>
            <input type="text" 
            placeholder="Name"
            value={name}
            onChange={(e) => {
              let n = e.target.value
              setName(n)
            }}/>
          </div>
        }

        { step === 1 &&
          <div>
          <input type="number" 
          placeholder="Age" 
          value={age}
          onChange={(e) => {
            let a = Number(e.target.value)
            setAge(a);   
          }}/>
          </div>
        }

        { step === 2 &&
          <div>
          <ShowName childName={name} />
          <ShowAge Age={age}/>
          </div>
        }
      </div>
      

      <div className="btn-container">
        { (step >= 1 && step <= 2) &&
          <>
            <StepBtn 
              handleClick= {()=> setStep(e=>e-1)}
              btnText="Prev"
            />
          </>
        }

        { (step === 0 || step === 1) &&
          <>
            <StepBtn
              handleClick= {() => setStep(e=>e+1)}
              btnText="Next"
              classCss="btn-right"
            />
          </>
        }
      </div> 

    </div>
  );
}

export default App;
