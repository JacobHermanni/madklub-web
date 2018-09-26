import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { secretprint, initsecret } from './printsecret';



class App extends Component {
  render() {

    return (
      <div className="App">
        {initsecret(secretprint)}
        {console.log("env")}
        {console.log(process.env.NODE_ENV)}
        {console.log("process.env", process.env)}
        {console.log("process.env.REACT_APP_KEY", process.env.REACT_APP_KEY)}
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Tos get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <span>current env: {process.env.NODE_ENV}</span>
        <span>key: {process.env.REACT_APP_KEY}</span>
        <button onClick={() => secretprint()}>print secret</button>
      </div>
    );
  }
}

export default App;
