import React from 'react';
import './App.css';
import NoteDelete from './components/NoteDelete';
import NoteList from './components/NoteList';
import NotePost from './components/NotePost';
import useNoteApi from './hooks/useNoteApi';

function App() {
  const [users, loading, getAllUser,insertUser,deleteUser] = useNoteApi()
  return (
    <div >
      <NoteList getNotes={getAllUser} notes={users} loading = {loading} />
      <NotePost insertUser= {insertUser} />
    </div>
  );
}

export default App;
