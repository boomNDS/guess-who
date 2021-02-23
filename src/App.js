import './App.scss';

// page import
import Dashboard from './pages/Dashboard'
import UserDisplay from './pages/UserDisplay'
import RoomDisplay from './pages/RoomDisplay'
import About from './pages/About'
import Todos from './pages/Todos'

import React from "react";
import axios from 'axios';
import { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  // useRouteMatch,
  // useParams
} from "react-router-dom";

export default function App() {
  const [tasks, setTasks] = useState([])
  const [rooms, setRooms] = useState([])
  const [users, setUsers] = useState([])
  // setting when create pages
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    fetchRooms()
    fetchUsers()
    getTasks()
  }, [])
  // Fetch Data
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    return data
  }
  // Fetch Data
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()
    return data
  }
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    })
    setTasks(tasks.filter((task) => task.id !== id))
  }
  // Add Task
  const addTask = async (task) => {
    const res = await fetch(`http://localhost:5000/tasks/`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })

    const data = res.json
    setTasks([...tasks, data])
    // const id = Math.floor(Math.random() * 10000) + 1
    // const newTask = { id, ...task }
    // setTasks([...tasks, newTask])
  }

  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updTask)
    })
    const data = await res.json()
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, reminder: data.reminder } : task
    ))
  }

  // Rooms
  const fetchRooms = async () => {
    axios.get(`http://localhost:5000/rooms`)
      .then(res => {
        let data = res.data
        setRooms(data)
      })
  }
  const fetchUsers = async () => {
    axios.get(`http://localhost:5000/users`)
      .then(res => {
        let data = res.data
        setUsers(data)
      })
  }
  // const fetchRoom = async (id) => {
  //   axios.get(`http://localhost:5000/rooms/${id}`)
  //     .then(res => {
  //     })
  // }
  const createRoom = async (room, history) => {
    axios.post(`http://localhost:5000/rooms/`, room)
      .then(res => {
        const data = res.data
        setRooms([...rooms, data])
        history.push(`/room_display/${data.id}`)
      })
  }
  const joinRoom = async (user, history) => {
    axios.post(`http://localhost:5000/users/`, user)
      .then(res => {
        const data = res.data
        setUsers([...users, data])
        history.push(`/user_display/${data.id}`)
      })
  }


  return (
    <Router>
      <div className="body">
        <Switch>
          <Route path="/user_display/:id" component={() => <UserDisplay users={users} rooms={rooms} />} />
          <Route path="/room_display/:id" component={() => <RoomDisplay users={users} rooms={rooms} />} />
          <Route path="/about">
            <About />
          </Route>
          <Route path="/" exact>
            <Dashboard createRoom={createRoom} joinRoom={joinRoom} />
          </Route>
          <Route path="/todos">
            <Todos name="good" tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} onAdd={addTask} />
          </Route>
          <Router path="/" exact render={(props) => {
            <>
            </>
          }} />
        </Switch>
      </div>
    </Router>
  );
}

