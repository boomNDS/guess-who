import React from 'react'
import Navbar from '../components/Navbar'
import { Container, Row, Col, Button } from 'react-bootstrap';
import Swal from 'sweetalert2/dist/sweetalert2.js'

import 'sweetalert2/src/sweetalert2.scss'

const ipAPI = '//api.ipify.org?format=json'

const createRoom = () => {
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
    console.log(result.value)
  })
}

const joinRoom = () => {
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
      const answers = JSON.stringify(result.value)
      Swal.fire({
        title: 'All done!',
        html: `
          Your answers:
          <pre><code>${answers}</code></pre>
        `,
        confirmButtonText: 'Lovely!'
      })
    }
  })
}

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
              <Button variant="outline-secondary" onClick={createRoom}>Create Room</Button>
              <Button variant="outline-secondary" onClick={joinRoom}>Join Room</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  </div>
}

export default Dashboard