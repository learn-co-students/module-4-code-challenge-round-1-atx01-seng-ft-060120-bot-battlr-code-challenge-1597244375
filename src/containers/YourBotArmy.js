import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  renderBotArmy = () => {
    return this.props.armyBots.map((bot) => (
      <BotCard 
      bot={bot}
      key={bot.id}
      enlisted={this.props.enlisted}
      discharge={this.props.discharge} />
    ))
  }
  
  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.renderBotArmy()}
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
