import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import _ from "lodash"
window._ = _

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          React app
        </header>
      </div>
    );
  }
}

export default App;
