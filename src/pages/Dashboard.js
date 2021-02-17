import React from 'react'
import { Container, } from 'react-bootstrap'
import Header from '../components/Header'
import Button from '../components/Button'
import Tasks from '../components/Tasks'


function Dashboard({ tasks }) {
  const onClick = (e) => {
    console.log(e)
  }
  return <Container className="dashboard">
    <Header title="Task Tracker"></Header>
    <Button color="green" text="add" onClick={onClick}></Button>
    <Tasks tasks={tasks}></Tasks>
  </Container >
}

export default Dashboard