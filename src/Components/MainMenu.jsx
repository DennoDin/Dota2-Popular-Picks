//contains the main menu to hold selection options
import React, { Component } from 'react';
import '../CSS/MainMenu.css'

export default class MainMenu extends Component {

  render() {
    return(
      <div>
        <h1 className="Title">Dota 2 Popular Heroes</h1>
        {this.props.selectedTeam === 'None' ? <h3>Please select a team!</h3> : <h3>Selected team is {this.props.selectedTeam}</h3>}
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