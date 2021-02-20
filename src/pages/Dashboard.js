import React from 'react'
import Navbar from '../components/Navbar'
import { Container, Row, Col, Button } from 'react-bootstrap';




function Dashboard() {
  return <div>
    <Navbar />
    <Container fluid className="dashboard">
      <Row>
        <Col>
          <h1>Guess-Who ?</h1>
          <h4>Create Room for  random  Winder Room</h4>
          <Row className="">
            <Col className="box-center">
              <Button variant="outline-secondary">Create Room</Button>
              <Button variant="outline-secondary">Join Room</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  </div>
}

export default Dashboard