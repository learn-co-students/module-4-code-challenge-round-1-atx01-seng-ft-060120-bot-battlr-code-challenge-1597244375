import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from './YourBotArmy'
import Search from './Search'

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    allBots: [], 
    enlisted: [],
    input: '',
    // empty: true,
    // display: false
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

    input = event => {
      this.setState({ input: event.target.value })
    }

    // triggerToggle = () => {
    //   this.setState({
    //     empty: false,
    //     display: true
    //   })
    // }

  render() {
    const botSearch = this.state.allBots.filter(bots => 
      bots.name.includes(this.state.input))
    return (
      <div>
        {<YourBotArmy 
        armyBots={this.state.enlisted}
        discharge={this.discharge}
        enlisted={this.state.enlisted} />}
        {<Search input={this.input} />}
        {<BotCollection 
        bots={botSearch}
        enlist={this.enlist}
        enlisted={this.state.enlisted}
        // empty={this.state.empty}
        // display={this.state.display}
        // toggle={this.triggerToggle} 
        />}
        
      </div>
    );
  }

}

export default BotsPage;
