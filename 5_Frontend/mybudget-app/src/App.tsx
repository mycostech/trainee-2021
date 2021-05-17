import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import TransactionList from "./component/TransactionList";
import { Route, Switch } from "react-router";



function App() {
  return (
    <>
      <div className="App">

        {/* <h2>Users</h2>
    <UserList/> */}

        <br />
        <h1>* My Budget *</h1>
        <TransactionList />


      </div>
    </>
  );
}

export default App;
