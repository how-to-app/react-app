import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import HowToList from "./components/HowToList";
import Register from "./components/Register";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="nav-bar">
            <Link to="/home">Home</Link>
            <Link to="/logged-in">Log In</Link>
            <Link to="/register"> Register </Link>
          </div>

          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <PrivateRoute exact path="/logged-in" component={HowToList} />
        </div>
      </Router>
    );
  }
}

export default App;
