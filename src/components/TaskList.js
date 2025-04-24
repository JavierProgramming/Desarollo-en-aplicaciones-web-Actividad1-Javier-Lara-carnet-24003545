import React from 'react';
import { ListGroup, Button, Row, Col } from 'react-bootstrap';

const TaskList = () => {
  return (
    <ListGroup>
      <ListGroup.Item className="d-flex justify-content-between align-items-center">
        <div>
          <strong>Tarea de ejemplo</strong> <br />
          <small>Fecha límite: 2025-04-30</small>
        </div>
        <div>
          <Button variant="outline-success" size="sm" className="me-2">Completar</Button>
          <Button variant="outline-danger" size="sm">Eliminar</Button>
        </div>
      </ListGroup.Item>
    </ListGroup>
  );
};

export default TaskList;
