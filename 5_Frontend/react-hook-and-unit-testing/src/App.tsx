import React, { useState } from 'react';

function App() {
  const [name,setName] = useState('Jatupat')
  //setName('New Jatupat')
  return (
    <div>
      {name}
      <input type={"text"} onChange= {(e => console.log(e.target.value))}/>
    </div>
  );
}

export default App;
