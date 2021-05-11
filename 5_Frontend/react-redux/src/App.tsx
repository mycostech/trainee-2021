import React from 'react';
import logo from './logo.svg';
import './App.css';
import { getAllUser } from './Action/UserAction'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './Store'

function App() {
  let dispatch = useDispatch()
  let user = useSelector((state: RootState) => state.UserReducer)

  React.useEffect(() => {
    dispatch(getAllUser())
  }, [dispatch])

  React.useEffect(() => {
    console.log('user : ', user)
  }, [user])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
