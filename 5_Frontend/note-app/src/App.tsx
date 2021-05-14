import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import NoteList from './components/NoteList';
import NotePost from './components/NotePost';
import useNoteApi from './hooks/useNoteApi';

function App() {
  const [users, loading, getAllUser, insertUser, ,] = useNoteApi()
  return (

    <div >
      <Container >
        <br />
        <NotePost insertUser={insertUser} />
        <NoteList getNotes={getAllUser} notes={users} loading={loading} />
      </Container>
    </div>
  );
}

export default App;
