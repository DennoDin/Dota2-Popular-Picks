//Will contain the code to run D3 visualization
import React, { Component } from 'react';
import {withFauxDOM} from 'react-faux-dom'
import {runD3} from '../D3Script';

export class Visual extends Component {

  async componentDidMount(){
    const faux = this.props.connectFauxDOM('div', 'chart');
    await runD3(faux, this.props.selectedId);
    this.props.animateFauxDOM(800);
  }

  render() {
    return(
      <div className='renderedD3'>
        {this.props.chart}
      </div>
    )
  }
}

export default withFauxDOM(Visual);