import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Layout/Navbar';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import Home from './components/Pages/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Notfound from './components/Pages/Notfound';
import AddUser from './components/Users/AddUser';
import EditUser from './components/Users/EditUser';
import User from './components/Users/User';

const App = () => {
  return (

    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route exact path="/about"><About /></Route>
        <Route exact path="/contact"><Contact /></Route>
        <Route exact path="/users/add"><AddUser /></Route>
        <Route exact path="/users/edit/:id"><EditUser /></Route>
        <Route exact path="/users/:id"><User /></Route>
        <Route exact path="*"><Notfound /></Route>
      </Switch>
    </Router>

  );
};

export default App;