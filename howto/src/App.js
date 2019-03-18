import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">

        <Route path ="/login" component ={""}></Route>
        <Route exact path = "/auth" component ={""} />
        
        <h1>Hi</h1>
        
      </div>
      </Router>
    );
  }
}

export default App;
