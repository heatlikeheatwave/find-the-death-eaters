import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import SearchZard from './SearchZard';

class App extends Component {
  constructor() {
    super();
    this.state = {
      allZards: [],
      deathEaters: [],
      userSelection: ''
    }
  }

  componentDidMount() {
    axios({
      method: 'get',
      url: 'https://www.potterapi.com/v1/characters',
      params: {
        key: '$2a$10$Pf/P4Ty2dYB3PONill9gB.L5b1xXzIfkvH5oREH8ideQ6Hcm4/VNi'
      }
    }).then(response => {
      this.setState({
        allZards: response.data
      });
    })
  }

  // filter characters for just those in the selected wizard group (aka cauldron)
  // filter cauldron to find death eaters
  // show names of death eaters on the page
  
  // get user selection of which group of wizards they want to investigate
  getCauldron = (e, targetCauldron) => { 
    e.preventDefault();

    this.setState({
      userSelection: targetCauldron
    })

    this.getShitHeads(targetCauldron);
  }

  getShitHeads = targetCauldron => {
    const zardsCopy = [...this.state.allZards];

    const shitheads = zardsCopy.filter(zard => zard[targetCauldron]).filter(targetZauldronZards => targetZauldronZards.deathEater);

    this.setState({
      deathEaters: shitheads
    });
  }
  
  render() {
    const individualDeathEater = this.state.deathEaters.map((deathEater, index) => {

      return (
        <h3 key={index}>{deathEater.name}</h3>
      )
    });

    return (
      <div className="App">
        <header>
          <h1>Find and Destroy the Death Eaters</h1>
        </header>
        <SearchZard choiceOfCauldron={this.getCauldron}/>
        <ul>
          {individualDeathEater}
        </ul>
      </div>
    );
  }
}

export default App;
