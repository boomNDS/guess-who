import './App.scss';

import Dashboard from './pages/Dashboard'
import UserDisplay from './pages/UserDisplay'

import React from "react";
import { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  // useRouteMatch,
  // useParams
} from "react-router-dom";

export default function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'A',
      day: 'Feb 1th at 1:30 pm',
      reminder: true
    },
    {
      id: 2,
      text: 'B',
      day: 'Feb 2th at 2:30 pm',
      reminder: false
    },
    {
      id: 3,
      text: 'C',
      day: 'Feb 3th at 3:00 pm',
      reminder: false
    }
  ])
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  const toggleReminder = (id) => {
    console.log(id)
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, reminder: !task.reminder } : task
    ))
  }


  return (
    <Router>
      <div>
        <Switch>
          <Route path="/user_display">
            <UserDisplay />
          </Route>
          <Route path="/">
            <Dashboard name="good" tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} onAdd={addTask} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

