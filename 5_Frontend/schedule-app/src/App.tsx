import React, { useState } from 'react';
import './App.css';
import useScheduleCategoryApi from './hooks/useScheduleCategoryApi';
import ScheduleCategoryList from './components/ScheduleCategoryList'
import UserList from './components/UserList';
import useUserApi from './hooks/useUserApi';
import UserForm from './components/UserForm';
import UserPick from './components/UserPick';
import Button from './components/Buttons/PageButton';
import ScheduleList from './components/ScheduleList';
import useScheduleApi from './hooks/useScheduleApi';
import useScheduleDetailApi from './hooks/useScheduleDetailApi';
import ScheduleForm from './components/ScheduleForm';
import UserScheduleList from './components/UserScheduleList';
import UserScheduleForm from './components/UserScheduleForm';
import LoginForm from './components/LoginForm';

function App() {

  const [scheduleCat, schLoading, getAllScheduleCategory] = useScheduleCategoryApi()
  const [users, user, userLoading, getAllUsers, getUser, addUser, updateUser, deleteUser] = useUserApi()
  const [schedules, schedule, scheduleLoading, getAllSchedules, getSchedule, getUserSchedule, addSchedule, addUserSchedule, updateSchedule, deleteSchedule] = useScheduleApi()
  const [scheduleDetails, scheduleDetail, getAllScheduleDetail, getScheduleDetail] = useScheduleDetailApi()
  const [userId, setUserId] = useState<number>(0)
  const [page, setPage] = useState<string>()
  const [add,setAdd] = useState<boolean>(false)
  const [addSch,setAddSch] = useState<boolean>(false)
  const [stay,setStay] = useState<boolean>(false)
  const [login,setLogin] = useState<string>('Login')
  const [overall,setOverall] = useState<boolean>(false)
  const [schCat,setSchCat] = useState<boolean>(false)

  return (
    <>
      <div>
          {/* <Button handleClick={() => setPage('Users')} buttonText='Users'/>
          <Button handleClick={() => setPage('Schedules')} buttonText='Schedules'/>
          <Button handleClick={() => setPage('Schedule Category')} buttonText='Schedule Category'/>
          <Button handleClick={() => setPage('User')} buttonText='User'/> */}
        
        {!stay &&
            <>
              <LoginForm setStay={setStay} setId={setUserId} setLogin={setLogin} getAllUsers={getAllUsers} users={users}/>
              <Button handleClick={() => setAdd(prev => !prev)} buttonText='Add New User'/>
              {add && 
                <UserForm addUser={addUser}/>
              }
              <br />
              <br />
              <Button handleClick={() => setOverall(prev => !prev)} buttonText='Overall' cssClass='btn-left'/>  
              <br />
              {overall &&
                <>
                  <UserList getAllUsers={getAllUsers} loading={userLoading} users={users} user={user} deleteUser={deleteUser} updateUser={updateUser}/>
                  <ScheduleList getAllSchedules={getAllSchedules} getAllScheduleDetail={getAllScheduleDetail} loading={scheduleLoading} schedules={schedules} scheduleDetail={scheduleDetails} schedule={schedule} deleteSchedule={deleteSchedule} updateFunc={updateSchedule} user={user} users={users}/>
                  <Button handleClick={() => setAddSch(prev => !prev)} buttonText='Add New Schedule'/>
                  {addSch && 
                    <ScheduleForm addSchedule={addSchedule}/>
                  }
                </>
              }
            </>
        }
        {stay &&
          <>
            <Button handleClick={() => {setStay(false); setLogin('Login'); alert('Logout Completed');}} buttonText={login} cssClass='btn-right'/>
            <UserPick getUser={getUser} loading={userLoading} user={user} id={userId} deleteUser={deleteUser} updateUser={updateUser}/>
            <UserScheduleList getUserSchedule={getUserSchedule} getAllScheduleDetail={getAllScheduleDetail} loading={scheduleLoading} schedules={schedules} scheduleDetails={scheduleDetails} schedule={schedule} deleteSchedule={deleteSchedule} id={userId} updateFunc={updateSchedule} addUserSchedule={addUserSchedule} user={user}/>
            {/* <Button handleClick={() => setAdd(prev => !prev)} buttonText='+'/>
            {add && 
              <UserScheduleForm addUserSchedule={addUserSchedule} userId={userId}/>
            } */}
          </>  
        }
        <br />
        <br />
        <Button handleClick={() => setSchCat(prev => !prev)} buttonText='Schedule Category' cssClass='btn-left'/> 
        <br />
        {schCat && 
          <ScheduleCategoryList getAllScheduleCategory={getAllScheduleCategory} loading={schLoading} scheduleCat={scheduleCat}/>
        }
        
      </div>
      <br />
      {/* {page==='Users' && 
        <>
          <UserList getAllUsers={getAllUsers} loading={userLoading} users={users} deleteUser={deleteUser} updateUser={updateUser}/>
          <Button handleClick={() => setUserAddSchedule(prev => !prev)} buttonText='+'/>
          {userAddSchedule && 
            <UserForm addUser={addUser}/>
          }
          
        </>
      }

      {page==='Schedules' && 
        <>
          <ScheduleList getAllSchedules={getAllSchedules} getAllScheduleDetail={getAllScheduleDetail} loading={scheduleLoading} schedules={schedules} scheduleDetail={scheduleDetails} deleteSchedule={deleteSchedule} updateFunc={updateSchedule}/>
          <Button handleClick={() => setUserAddSchedule(prev => !prev)} buttonText='+'/>
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
          <Button handleClick={() => setUserAddSchedule(prev => !prev)} buttonText='+'/>
          {userAddSchedule && 
            <UserScheduleForm addUserSchedule={addUserSchedule} userId={userId}/>
          }
        </>
      } */}


    </>
  );
}

export default App;
