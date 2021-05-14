import React from 'react';

import UserList from './components/UserList'
import TranList from './components/TranList'
import useUserApi from './hooks/useUserApi';
import useTranApi from './hooks/useTranApi';
import TranDeForm from './components/TranDeForm';

function App() {
  const [users, getAllUser] = useUserApi()
  const [trans, transDe, getAllTrans, insertTranDe] = useTranApi()

  return (
    <div className="App">
      {/* <UserList getUsers={getAllUser} users={users} /> */}
      <TranList getTrans={getAllTrans} trans={trans} />

      <hr/>

      <TranDeList 
      <TranDeForm insertTranDe={insertTranDe}/>
    </div>
    
  );
}

export default App;
