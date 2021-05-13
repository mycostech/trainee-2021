import React, { useState } from 'react';
import './App.css';
import useScheduleCategoryApi from './hooks/useScheduleCategoryApi';
import ScheduleCategoryList from './components/ScheduleCategoryList'
import UserList from './components/UserList';
import useUserApi from './hooks/useUserApi';
import UserForm from './components/UserForm';
import UserPick from './components/UserPick';
import PageButton from './components/PageButton';
import ScheduleList from './components/ScheduleList';
import useScheduleApi from './hooks/useScheduleApi';
import useScheduleDetailApi from './hooks/useScheduleDetailApi';
import ScheduleForm from './components/ScheduleForm';
import UserScheduleList from './components/UserScheduleList';
import UserScheduleForm from './components/UserScheduleForm';

function App() {

  const [scheduleCat, schLoading, getAllScheduleCategory] = useScheduleCategoryApi()
  const [users, user, userLoading, getAllUsers, getUser, addUser, updateUser, deleteUser] = useUserApi()
  const [schedules, schedule, scheduleLoading, getAllSchedules, getSchedule, getUserSchedule, addSchedule, addUserSchedule, updateSchedule, deleteSchedule] = useScheduleApi()
  const [scheduleDetails, scheduleDetail, getAllScheduleDetail, getScheduleDetail] = useScheduleDetailApi()
  const [userId, setUserId] = useState<number>(1001)
  const [page, setPage] = useState<string>('User')
  const [userAddSchedule,setUserAddSchedule] = useState<boolean>(false)

  return (
    <>
      <div>
          <PageButton handleClick={() => setPage('Users')} buttonText='Users'/>
          <PageButton handleClick={() => setPage('Schedules')} buttonText='Schedules'/>
          <PageButton handleClick={() => setPage('Schedule Category')} buttonText='Schedule Category'/>
          <PageButton handleClick={() => setPage('User')} buttonText='User'/>
      </div>
      {page==='Users' && 
        <>
          <UserList getAllUsers={getAllUsers} loading={userLoading} users={users} deleteUser={deleteUser} updateUser={updateUser}/>
          <button onClick={() => setUserAddSchedule(prev => !prev)}> + </button>
          {userAddSchedule && 
            <UserForm addUser={addUser}/>
          }
          
        </>
      }

      {page==='Schedules' && 
        <>
          <ScheduleList getAllSchedules={getAllSchedules} getAllScheduleDetail={getAllScheduleDetail} loading={scheduleLoading} schedules={schedules} scheduleDetail={scheduleDetails} deleteSchedule={deleteSchedule} updateFunc={updateSchedule}/>
          <button onClick={() => setUserAddSchedule(prev => !prev)}> + </button>
          {userAddSchedule && 
            <ScheduleForm addSchedule={addSchedule}/>
          }
        </>
      }

      {page==='Schedule Category' && 
        <>
          <ScheduleCategoryList getAllScheduleCategory={getAllScheduleCategory} loading={schLoading} scheduleCat={scheduleCat}/>
        </>
      }
      
      {page==='User' && 
        <>
          <div>
            <input type="text" onChange={(e) => {setUserId(Number(e.target.value))}}/>
          </div>
          <UserPick getUser={getUser} loading={userLoading} user={user} id={userId} deleteUser={deleteUser} updateUser={updateUser}/>
          <UserScheduleList getUserSchedule={getUserSchedule} getAllScheduleDetail={getAllScheduleDetail} loading={scheduleLoading} schedules={schedules} scheduleDetail={scheduleDetails} deleteSchedule={deleteSchedule} id={userId} updateFunc={updateSchedule}/>
          <button onClick={() => setUserAddSchedule(prev => !prev)}> + </button>
          {userAddSchedule && 
            <UserScheduleForm addUserSchedule={addUserSchedule} userId={userId}/>
          }
        </>
      }

      {/* <div>
        <input type="number" onChange={(e) => {setUserId(Number(e.target.value))}}/>
      </div> */}
    </>
  );
}

export default App;
