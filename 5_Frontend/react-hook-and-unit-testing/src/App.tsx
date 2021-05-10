import React, { useState } from 'react';

function App() {

  const [name, setstate] = useState('Yeo')
  return (
    <div>
      Mycos Hello {name}

      <input type={"text"} onChange={(e) => console.log(e.target.value)}></input>
    </div>
  );
}

export default App;
