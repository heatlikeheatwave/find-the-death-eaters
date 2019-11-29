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
        key: '$2a$10$Pf/P4Ty2dYB3PONill9gB.L5b1xXzIfkvH5oREH8ideQ6Hcm4/VNi',
        deathEater: true
      }
    }).then(response => {
      this.setState({
        allZards: response.data
      });
    })
  }
  // get user selection of which group of wizards they want to investigate
  // filter characters for just those in the selected wizard group (aka cauldron)
  // filter cauldron to find death eaters
  // show names of death eaters on the page

  getCauldron = (e, targetCauldron) => { 
    e.preventDefault();

    this.setState({
      userSelection: targetCauldron
    })
  }
  
  render() {
  
    return (
      <div className="App">
        <header>
          <h1>Find and Destroy the Death Eaters</h1>
        </header>
        <SearchZard choiceOfCauldron={this.getCauldron}/>
      </div>
    );
  }
}

export default App;
