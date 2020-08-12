import React, { Component } from "react";
import BotsPage from "./containers/BotsPage";
import "./App.css";

class App extends Component {

  botsURL = 'https://bot-battler-api.herokuapp.com/api/v1/bots'

  state = {
    bots: []
  }

  getBots = () => {
    fetch(this.botsURL)
    .then(res => res.json())
    .then(bots => this.setState({bots}))
  }

  componentDidMount(){
    this.getBots()
  }

  render() {
    return (
      <div className="App">
        <BotsPage bots={this.state.bots} />
      </div>
    );
  }
}

export default App;
