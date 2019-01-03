import React, { Component } from 'react';
import MainMenu from './MainMenu.jsx'
import Visual from './Visual.jsx'

const TEAMS = {
  secret: {name: "Team Secret", id: 1838315},
  virtusPro: {name: "Virtus Pro", id: 1883502}
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedTeam: "None",
      selectedId: 1883502
    }
  }

  changeTeam = () =>{
    //do something to change team
  }

  render() {
    return (
      <div>
        <MainMenu changeTeam={this.changeTeam} teams={TEAMS} selectedTeam={this.state.selectedTeam}/>
        {this.state.selectedId !== 0 ? <Visual selectedId={this.state.selectedId}/> : console.log("no team selected")}
      </div>
    );
  }
}

export default App;


/*
current top teams to implement into choices:

Team Secret
Virtus Pro
Evil Geniuses
PSG.LGD
OG Dota2
Team Liquid
Vici Gaming
Fnatic
TNC Predator
Team Serenity
*/