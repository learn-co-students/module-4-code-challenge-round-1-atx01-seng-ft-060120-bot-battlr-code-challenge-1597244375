import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
	//your code here


	render() {
		return (
			<div className="ui four column grid">
				<div className="row">
					{console.log(this.props)}
					{this.props.bots.map(bot => {
						return <BotCard bot={bot} key={bot.id} enlistBot={this.props.enlistBot} dischargeBot={this.props.dischargeBot} />
					})}
				</div>
			</div>
		);
	}

};

export default BotCollection;
