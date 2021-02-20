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

