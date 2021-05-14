import React from 'react';
import './App.css';
import { getAllUser } from './Action/UserAction'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './Store'
import Form from './Form'

function App() {
  let dispatch = useDispatch()
  let user = useSelector((state: RootState) => state.UserReducer)
  // let loading = useSelector((state: RootState) => state.UserReducer.loading)

  React.useEffect(() => {
    dispatch(getAllUser())
  }, [dispatch])

  React.useEffect(() => {
    console.log('user : ', user)
  }, [user])

  //console.log('loading', loading)
  return (
    <div className="App">
      <Form/>

      <hr/>
      {
        user.userList.map(m => {
          //console.log(m)
          return (
            <>
              <p key={m.id}>
                {m.id}
                <br/>
                { m.title }
                <br/>
                {m.body}
              </p>
              <hr/>
            </>
          )
        })
      }
    </div>
  );
}

export default App;
