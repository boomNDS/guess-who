import React from 'react'
import { Container, } from 'react-bootstrap'
import { useState } from 'react'

import Header from '../components/Header'
import Button from '../components/Button'
import Tasks from '../components/Tasks'
import AddTask from '../components/AddTask'


function Dashboard({ tasks, onDelete, onToggle, onAdd }) {
  const [showAddTask, setShowAddTask] = useState(false)
  return <Container className="dashboard">
    <Header title="Task Tracker" ></Header>
    {showAddTask && <AddTask onAdd={onAdd}></AddTask>}
    <Button color={showAddTask ? 'red' : 'green'} text="add" onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}></Button>
    {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={onDelete} onToggle={onToggle} ></Tasks>) : ('No Task To Show')}
  </Container >
}

export default Dashboard