import React from "react";
import ArmyBotCard from "../components/ArmyBotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.props.botArmy.map(bot => <ArmyBotCard bot={bot} key={Math.random()} removeBotFromArmy={this.props.removeBotFromArmy}/>)}
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
