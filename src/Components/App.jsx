import React, { Component } from 'react';
import MainMenu from './MainMenu.jsx'
import Visual from './Visual.jsx'

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
