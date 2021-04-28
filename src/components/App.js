import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import Navbar from './Navbar';
import Detailing from '../pages/Detailing';
import NOC from '../pages/NOC';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <NOC />
        </Route>
        <Route exact path="/detailing">
          <Detailing />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
