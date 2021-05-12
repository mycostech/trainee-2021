import React from 'react';
import './App.scss';

import { getAllUser } from '../../Action/UserAction'
import { getEventList } from '../../Action/EventAction'

import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../Store'


function App() {

  let dispatch = useDispatch()
  let user = useSelector((state: RootState) => state.UserReducer)
  let event = useSelector((state: RootState) => state.EventReducer)

  React.useEffect(() => {
    dispatch(getAllUser())
  }, [dispatch])

  React.useEffect(() => {
    dispatch(getEventList('e961b9f4-9292-438e-b902-d7cfacd852cc'))
  },[dispatch])


  return (
    <div className="App">

      <div className="header-container">
        <h1>
          My diary App
        </h1>
        <nav>
          <ul>
            <li>Home</li>
            <li>Add Event</li>
          </ul>
        </nav>
      </div>

      <div className="event-container">
        {
          event.eventList.map(e => {

            return(
              <>
                <div>
                  <div>date time: {e.dateTime}</div>
                  <div>event name: {e.eventName}</div>
                  <div>memo: {e.memo}</div>
                  <hr></hr>
                </div>
              </>
            )
          })
        }
      </div>

      
    </div>
  );
}

export default App;
