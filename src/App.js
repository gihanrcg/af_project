import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LeaderBoard from "./LeaderBoard";
import SignUp from "./SignUp";

class App extends Component {
  render() {

    return (
      <div style={{display:"flex"}} >

        <SignUp />
        <LeaderBoard/>
      </div>
    );
  }
}

export default App;
