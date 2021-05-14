import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TransactionList from './component/TransactionList';
import UserList from './component/UserList';


function App() {

  return (
    <>
    <div className="App">
    {/* <h2>Users</h2>
    <UserList/> */}

    <h2>My Transaction</h2>
    <TransactionList/>
    </div>
    </>
  );
}

export default App;
