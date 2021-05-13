import React, { useState } from 'react';
import './App.scss';

import { 
  Route,
  Link, 
  Switch
} from "react-router-dom";


import { getEventList } from '../../Action/EventAction'

import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../Reducer'
import AddEventForm from '../AddEventForm/AddEventForm';
import EventList from '../EventList/EventList';
import EventDetail from '../EventDetail/EventDetail';
import EditEventForm from '../EditEventForm/EditEventForm';


function App() {

  React.useEffect(() => {

    return(
      console.log('terminate')
    )

  },[])


  return (
    <div className="App"> 

      <div className="header-container">
        <h1>My diary App</h1>
          <nav>
            <ul>
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
            </ul>
          </nav>
      </div>

      <Switch>
        {/* <Route path="/">
          <EventList/>
        </Route> */}
        <Route path="/events">
          <EventList/>
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
