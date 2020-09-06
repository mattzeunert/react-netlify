import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    if (window["location"].href.includes("/about")){
      return <div className="App" style={{ paddingTop: 100 }}>
        About my app
      </div>
    }
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
