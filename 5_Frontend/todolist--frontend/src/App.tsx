import React from 'react';
import './App.css';
import UserForm from './components/TodoPost';
import UserList from './components/TodoList'
import useUserApi from './hooks/useTodoApi';
import useTodoApi from './hooks/useTodoApi';

function App() {
  const [users, loading, getAllUser, insertUser] = useTodoApi()

  return (
    <div className="App">
      <UserForm insertUser={insertUser} />
      <UserList getTodo={getAllUser}
      loading={loading} todo={users} />
    </div>
  );
}

export default App;

  

