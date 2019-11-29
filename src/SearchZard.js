import React, { Component } from 'react';

//component to let user select which group of wizards to investigate. 
//  Logical flow:
//      user selects cauldron from a select dropdown
//      whatever the user clicks on, we will save that selection in state
//      on submit, we pass the user's selection up to app.js through a callback passed in through props
//      
//  we need a form
//  we need state
//  we need a function from props 
class SearchZard extends Component {
    constructor() {
        super();
        this.state = {
            userInput: ''
        }
    }

    getUserChoice = e => {
        e.preventDefault();
        
        this.setState({
            userInput: e.target.value,
        
        });
    }

    render() {
        return(
            <form >
                <select 
                    value={this.state.userInput}
                    onChange={this.getUserChoice}
                    name="whichCauldron"
                    id="whichCauldren">
                        <option value="">pick a cauldren ffs</option>
                        <option value="ministryOfMagic">Ministry of Magic</option>
                        <option value="dumbledoresArmy">Dumbledore's Army</option>
                        <option value="orderOfThePhoenix">Order of the Phoenix</option>
                </select>
                <button type="submit" onClick={ (e) => this.props.choiceOfCauldron(e, this.state.userInput)}
                >Find the garbage trash</button>
            </form>
        )
    }
}

export default SearchZard;