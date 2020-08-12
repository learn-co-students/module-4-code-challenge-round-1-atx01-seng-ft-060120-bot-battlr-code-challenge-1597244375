import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    allBots: [], 
    enlisted: []
  }

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(resp => resp.json())
    .then(json => this.setState({ allBots: json }))
  }

  enlist = (bot) => {
      this.setState({ enlisted: [...this.state.enlisted, bot] })
    }
  
  discharge = (bot) => {
      const array = this.state.enlisted
      console.log(array)
      const index = array.indexOf(bot)
      if (index > -1) {
        this.setState({ array: array.splice(index, 1) })
      }

    }

  render() {
   
    return (
      <div>
        {     
        <YourBotArmy 
        armyBots={this.state.enlisted}
        discharge={this.discharge}
        enlisted={this.state.enlisted} /> 
        }
        {
        <BotCollection 
        bots={this.state.allBots}
        enlist={this.enlist}
        enlisted={this.state.enlisted} />
        }
        
      </div>
    );
  }

}

export default BotsPage;
