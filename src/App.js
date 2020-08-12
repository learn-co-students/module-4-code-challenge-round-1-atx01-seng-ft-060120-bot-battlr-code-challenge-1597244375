import React, { Component } from "react";
import BotsPage from "./containers/BotsPage";
import YourBotArmy from "./containers/YourBotArmy.js";
import "./App.css";

const endpoint = "https://bot-battler-api.herokuapp.com/api/v1/bots";

class App extends Component {
  state = {
    bots: [],
    botArmy: []
  };

  componentDidMount() {
    fetch(endpoint)
      .then(res => res.json())
      .then(res => this.setState({
        bots: res
      })
      )
  };

  enlistBot = (enlistedBot) => {
    let updatedBots = this.state.bots.filter(bot => bot.id !== enlistedBot.id);

    this.setState({
      bots: updatedBots,
      botArmy: [...this.state.botArmy, enlistedBot]
    })
  }

  dischargeBot = (enlistedBot) => {
    let updatedBotArmy = this.state.botArmy.filter(bot => bot.id !== enlistedBot.id);

    this.setState({
      bots: [...this.state.bots, enlistedBot],
      botArmy: updatedBotArmy
    })
  }


  render() {
    return (
      <div className="App">
        <BotsPage bots={this.state.bots} botArmy={this.state.botArmy} enlistBot={this.enlistBot} dischargeBot={this.dischargeBot} />
      </div>
    );
  }
}

export default App;
