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

  addBotToArmy = (bot) => {
    const army = [...this.state.army];
    army.push(bot);
    this.setState({ army });
  };

  // handleClick = (id) => {
  //   const army = [...this.state.army];
  //   army.filter((bot) => bot.id !== id);
  //   this.setState({ army });
  // };

  render() {
    return (
      <div>
        <YourBotArmy handleClick={this.handleClick} army={this.state.army} />;
        <BotCollection
          addBotToArmy={this.addBotToArmy}
          bots={this.state.bots}
        />
      </div>
    );
  }
}

export default BotsPage;
