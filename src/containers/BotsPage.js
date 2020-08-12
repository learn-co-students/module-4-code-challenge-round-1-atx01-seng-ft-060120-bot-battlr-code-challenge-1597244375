import React from "react";
import BotCollection from "./BotCollection.js";
import YourBotArmy from "./YourBotArmy.js";

class BotsPage extends React.Component {
  //start here with your code for step one

  render() {
    return (
      <div>
        {/* put your components here */}
        {console.log(this.props)}
        <YourBotArmy botArmy={this.props.botArmy} />
        <BotCollection bots={this.props.bots} enlisted={false} enlistBot={this.props.enlistBot} dischargeBot={this.props.dischargeBot} />
      </div>
    );
  }

}

export default BotsPage;
