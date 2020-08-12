import React from "react";
import BotCollection from "../containers/BotCollection";
import YourBotArmy from "../containers/YourBotArmy";

class BotsPage extends React.Component {
  // states should go here ---
  state = {
    bots: [],
    army: [],
  };

  componentDidMount() {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
      .then((res) => res.json())
      .then((bots) => this.setState({ bots }));
  }

  addBotToArmy = (id) => {
    const copyBots = [...this.state.bots];
    copyBots.map((bot) => {
      if (bot.id === id) {
        const army = [...this.state.army];
        army.push(bot);
        this.setState({ army });
      }
    });
    const bots = copyBots.filter((bot) => bot.id !== id);
    this.setState({ bots });
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <YourBotArmy army={this.state.army} />;
          <BotCollection
            addBotToArmy={this.addBotToArmy}
            bots={this.state.bots}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default BotsPage;
