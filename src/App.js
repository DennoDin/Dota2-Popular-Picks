import React, { Component } from 'react';
import './App.css';
import MainMenu from './MainMenu'
import Visual from './Visual'

class App extends Component {
  render() {
    return (
      <div>
        <MainMenu/>
        <Visual/>
      </div>
    );
  }
}

export default App;
