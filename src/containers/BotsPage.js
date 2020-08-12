import React from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import BotSpecs from "../components/BotSpecs";
import Search from "../components/Search";

const API = "https://bot-battler-api.herokuapp.com/api/v1/bots"

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    bots: [],
    currentBots: [],
    botArmy: [],
    collectionVisible: true,
    specBot: {}
  }

  componentDidMount() {
    fetch(API)
    .then(res => res.json())
    .then(bots => this.setState({
      bots,
      currentBots: bots
    }))
  }

  addBotToArmy = (id) => {
    const bot = this.state.bots.find(b => b.id === id)
    if (!this.state.botArmy.includes(bot)) {
      this.setState({
        botArmy: [...this.state.botArmy, bot],
        collectionVisible: true
      })
    }
  }

  removeBotFromArmy = (id) => {
    const bot = this.state.bots.find(b => b.id === id)
    const filteredArmy = this.state.botArmy.filter(b => b.id !== bot.id)
    if (this.state.botArmy.includes(bot)) {
      this.setState({
        botArmy: filteredArmy
      })
    }
  }

  addBotToSpec = (id) => {
    const bot = this.state.bots.find(b => b.id === id)
    this.setState({
      collectionVisible: false,
      specBot: bot
    })
  }

  goBackButton = () => {
    this.setState({
      collectionVisible: true,
      specBot: {}
    })
  }

  searchBots = (e) => {
    if (e.target.value !== "") {
      this.setState({
        currentBots: this.state.bots.filter( bot => bot.name.toLowerCase().includes(e.target.value))
      })
    } else {
      this.setState({
        currentBots: this.state.bots
      })
    }
  }

  render() {
    return (
      <div>
        <YourBotArmy botArmy={this.state.botArmy} removeBotFromArmy={this.removeBotFromArmy}/>
        <Search searchBots={this.searchBots}/>
        {this.state.collectionVisible ? <BotCollection bots={this.state.currentBots} addBotToSpec={this.addBotToSpec}/> : <BotSpecs bot={this.state.specBot} goBackButton={this.goBackButton} addBotToArmy={this.addBotToArmy}/> }
      </div>
    );
  }

}

export default BotsPage;
