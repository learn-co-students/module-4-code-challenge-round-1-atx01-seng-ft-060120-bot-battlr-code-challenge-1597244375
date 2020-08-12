import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

class BotsPage extends React.Component {
  
  state = {
    bots: this.props.bots,
    army: []
  }

  enlistBot = (bot) => {
    if(!this.state.army.includes(bot)){this.setState({...this.state.army.push(bot)})}
  }

  render() {
    return (
      <div>
          <YourBotArmy army={this.state.army} enlistBot={this.enlistBot} />
        {
          <BotCollection bots={this.props.bots} enlistBot={this.enlistBot} army={this.state.army} />
        }
      </div>
    );
  }

}

export default BotsPage;
