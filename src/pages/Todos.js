import React from 'react'
import { Container, } from 'react-bootstrap'
import { useState } from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Button from '../components/Button'
import Tasks from '../components/Tasks'
import AddTask from '../components/AddTask'


function Todos({ tasks, onDelete, onToggle, onAdd }) {
    const [showAddTask, setShowAddTask] = useState(false)
    return <Container className="todos">
        <Header title="Task Tracker" ></Header>
        {showAddTask && <AddTask onAdd={onAdd}></AddTask>}
        <Button color={showAddTask ? 'red' : 'green'} text="add" onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}></Button>
        {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={onDelete} onToggle={onToggle} ></Tasks>) : ('No Task To Show')}
        <Footer></Footer>
    </Container >
}

export default Todos