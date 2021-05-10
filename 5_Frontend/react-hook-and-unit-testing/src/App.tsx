import React, {useState} from 'react';

function App() {
  const [name, setname] = useState('Palm');
  
  return (
    <div>
      {name}
      <input type="text" onChange={e => console.log(e.target.value)}/>
    </div>
  );
}

export default App;


