import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const TaskForm = () => {
  return (
    <Form className="task-form mb-4">
      <Row>
        <Col md={6} className="mb-3">
          <Form.Control type="text" placeholder="Nueva tarea..." />
        </Col>
        <Col md={3} className="mb-3">
          <Form.Control type="date" />
        </Col>
        <Col md={3} className="mb-3">
          <Button variant="success" className="w-100">Agregar</Button>
        </Col>
      </Row>
    </Form>
  );
};

export default TaskForm;
