import React from 'react'
import Navbar from '../components/Navbar'
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";

import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'


const createRoomModal = (createRoom, history) => {
  Swal.fire({
    title: 'Create Room',
    input: 'text',
    inputLabel: 'Room Name',
    showCancelButton: true,
    showLoaderOnConfirm: true,
    inputValidator: (value) => {
      if (!value) {
        return 'You need to write something!'
      }
    },
    allowOutsideClick: () => !Swal.isLoading()
  }).then((result) => {
    createRoom({ name: result.value, randomUsers: [], randomActive: false }, history)
  })
}

const joinRoomModal = (joinRoom, history) => {
  Swal.mixin({
    title: 'Join Room',
    input: 'text',
    confirmButtonText: 'Next &rarr;',
    showCancelButton: true,
    progressSteps: ['1', '2']
  }).queue([
    {
      text: 'Room ID'
    },
    {
      text: 'Name'
    },
  ]).then((result) => {
    if (result.value) {
      joinRoom({ room: parseInt(result.value[0]), name: result.value[1] }, history)
    }
  })
}

function Dashboard({ createRoom, joinRoom }) {
  const history = useHistory();
  return <div>
    <Navbar />
    <Container fluid className="dashboard">
      <Row>
        <Col>
          <h1>Guess-Who ?</h1>
          <h4>Create Room for  random  Winder Room</h4>
          <Row className="">
            <Col className="box-center">
              <Button variant="outline-secondary" onClick={() => createRoomModal(createRoom, history)}>Create Room</Button>
              <Button variant="outline-secondary" onClick={() => joinRoomModal(joinRoom, history)}>Join Room</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  </div>
}

export default Dashboard