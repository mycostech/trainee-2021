import React from 'react';
import './App.css';
import UserForm from './components/UserForm';

import UserList from './components/UserList'
import useUserApi from './hooks/useUserApi';

function App() {
  const [users, loading, getAllUser, insertUser] = useUserApi()

  return (
    <div className="App">
      <UserForm insertUser={insertUser} />
      <UserList getUsers={getAllUser}
      loading={loading} users={users} />
    </div>
  );
}

export default App;
