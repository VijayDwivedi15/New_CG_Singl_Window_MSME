import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  useLocation,
} from 'react-router-dom';

import { NavBar } from './component/navBar';

import userRegistration from './component/userRegistration';
import Registers from '../src/component/Registers';



function App() {
  return (
    <div>
      <Router>
        <Switch>

          <NavBar>
            <Route
              exact path="/"
              component={userRegistration}

            />

            <Route path="/allregister" component={Registers} />

          </NavBar>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
