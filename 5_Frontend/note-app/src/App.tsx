import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import NoteList from './components/NoteList';
import NotePost from './components/NotePost';
import useNoteApi from './hooks/useNoteApi';

function App() {
  const [users, loading, getAllUser, insertUser, deleteUser] = useNoteApi()
  return (
    <div >
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto"><NotePost insertUser={insertUser} /></Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col md="auto"><NoteList getNotes={getAllUser} notes={users} loading={loading} /></Col>
        </Row>
      </Container>

    </div>
  );
}

export default App;
