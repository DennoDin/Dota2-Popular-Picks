import React, { Component } from 'react';
import MainMenu from './MainMenu.jsx'
import Visual from './Visual.jsx'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedTeam: "None"
    }
  }

  changeTeam = () =>{
    //do something to change team
  }

  render() {
    return (
      <div>
        <MainMenu changeTeam={this.changeTeam} selectedTeam={this.state.selectedTeam}/>
        <Visual/>
      </div>
    );
  }
}

export default App;
