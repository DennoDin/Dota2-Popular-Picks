//contains the main menu to hold selection options
import React, { Component } from 'react';
import '../CSS/MainMenu.css'

export default class MainMenu extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <div>
        <h1 className="Title">Dota 2 Popular Heroes</h1>
        {this.props.selectedTeam === 'None' ? <text>Please select a team!</text> : <text>Selected team is {this.props.selectedTeam}</text>}
      </div>
    )
  }
}
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