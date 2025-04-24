import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  return (
    <>
      <Navbar bg="primary" variant="dark" className="mb-4">
        <Container>
          <Navbar.Brand>To Do List</Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        <TaskForm />
        <TaskList />
      </Container>
    </>
  );
}

export default App;
