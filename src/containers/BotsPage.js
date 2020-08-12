import React from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

const API = "https://bot-battler-api.herokuapp.com/api/v1/bots"

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    bots: [],
    botArmy: []
  }

  componentDidMount() {
    fetch(API)
    .then(res => res.json())
    .then(bots => this.setState({
      bots
    }))
  }

  addBotToArmy = (id) => {
    const bot = this.state.bots.find(b => b.id === id)
    if (!this.state.botArmy.includes(bot)) {
      this.setState({
        botArmy: [...this.state.botArmy, bot]
      })
    }
  }

  removeBotFromArmy = (id) => {
    const bot = this.state.bots.find(b => b.id === id)
    const filteredArmy = this.state.botArmy.filter(b => b.id !== bot.id)
    if (this.state.botArmy.includes(bot)) {
      this.setState({
        botArmy: filteredArmy
      })
    }
  }

  render() {
    return (
      <div>
        <YourBotArmy botArmy={this.state.botArmy} removeBotFromArmy={this.removeBotFromArmy}/>
        <BotCollection bots={this.state.bots} addBotToArmy={this.addBotToArmy}/>
      </div>
    );
  }

}

export default BotsPage;
