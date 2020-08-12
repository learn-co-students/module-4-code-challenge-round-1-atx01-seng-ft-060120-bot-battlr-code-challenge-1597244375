import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          {this.props.bots.map((bot) => (
            <BotCard
              addBotToArmy={this.props.addBotToArmy}
              bot={bot}
              key={bot.id}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default BotCollection;
