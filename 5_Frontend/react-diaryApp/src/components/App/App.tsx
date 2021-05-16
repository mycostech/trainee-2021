import React, { useState } from 'react';
import './App.scss';

import { 
  Route,
  Link, 
  Switch,
  useHistory
} from "react-router-dom";


import AddEventForm from '../AddEventForm/AddEventForm';
import EventList from '../EventList/EventList';
import EventDetail from '../EventDetail/EventDetail';
import EditEventForm from '../EditEventForm/EditEventForm';
import Login from '../Login/Login';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../Reducer';
import { logout } from '../../Action/UserAction';
import MyProfile from '../MyProfile/MyProfile';
import Register from '../Register/Register';


function App() {

  const dispatch = useDispatch()
  const history = useHistory()
  const auth = useSelector((state: RootState) => state.AuthReducer)
  const user = useSelector((state: RootState) => state.UserReducer)

  const onLogout = () => {
    console.log("log out btn !!")
    dispatch(logout())
  }

  React.useEffect(() => {

    console.log("auth login ==> ",auth.logingIn)

    // if(!auth.logingIn && !user.success){
    //   history.push('/')
    // }

    return(
      console.log('terminate')
    )

  },[])


  return (
    <div className="App"> 

      <div className="header-container">

        <div className="profileImage-container">
          <MyProfile/>
        </div>

        <h1>My diary App</h1>
          <nav>
            <ul>
              {!auth.logingIn && !user.getsuccess ?
                <>
                  <li>
                    <Link to="/login">
                      <a>Login</a>
                    </Link>
                  </li>
                  <li>
                    <Link to="/register">
                      <a>Register</a>
                    </Link>
                  </li>
                </>
                :
                <>
                  <li>
                    <Link to="/events">
                      <a>My Events</a>
                    </Link>
                  </li>
                  <li>
                    <Link to="/addEvent">
                      <a>New Event</a>
                    </Link>
                  </li>
                  <li>
                    <button onClick={onLogout}>Logout</button>
                  </li>
                </>
              }
              
            </ul>
          </nav>
      </div>

      <Switch>
        <Route path="/register">
          <Register/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/events">
          {auth.logingIn &&
            <EventList/>
          }
        </Route>

        <Route path="/addEvent">
          <AddEventForm/>
        </Route>

        <Route path="/detail/:eventId">
          <EventDetail/>
        </Route>

        <Route path="/edit/:eventId">
          <EditEventForm/>
        </Route> 

      </Switch>
          
      
    </div>
  );
}

export default App;
