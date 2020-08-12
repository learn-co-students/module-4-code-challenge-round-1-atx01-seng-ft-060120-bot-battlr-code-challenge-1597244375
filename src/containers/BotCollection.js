import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here 

  renderBots = () => {
	return this.props.bots.map((bot) => (
		<BotCard 
		bot={bot} 
		key={bot.id} 
		enlist={this.props.enlist}
		enlisted={this.props.enlisted}
		// empty={this.props.empty}
        // display={this.props.display}
		// toggle={this.props.toggle} 
		/>
	))
  }

  render(){
	 
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
			  {this.renderBots()}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
