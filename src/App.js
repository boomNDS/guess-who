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
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/user_display">
            <UserDisplay />
          </Route>
          <Route path="/">
            <Dashboard name="good" tasks={tasks} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

