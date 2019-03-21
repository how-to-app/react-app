import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import HowToList from "./components/HowToList";
import Register from "./components/Register";
import EditForm from './components/EditForm';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="nav-bar">
            <Link to="/home">Home</Link>
            <Link to="/howtolist">Log In</Link>
            <Link to="/register"> Register </Link>
            <Link to='/howtos'> How Tos</Link>
            <Link to= '/test'>Test </Link>

          </div>

          <Route path = "/test" component ={HowToList} />

          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <PrivateRoute exact path="/howtolist" component={HowToList} />
          <PrivateRoute exact path="/edit" component={EditForm} />
        </div>
      </Router>
    );
  }
}

export default App;
