import './App.css';

import Dashboard from './components/Dashboard'
import UserDisplay from './components/UserDisplay'

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  // useRouteMatch,
  // useParams
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/user_display">
            <UserDisplay />
          </Route>
          <Route path="/">
            <Dashboard name="good" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

