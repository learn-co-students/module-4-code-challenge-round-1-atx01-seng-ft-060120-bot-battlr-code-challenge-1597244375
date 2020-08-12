import React, { Component } from "react";

export default class FilterOptions extends Component {
    render(){
        return(
            <div className="search">
                <label htmlFor="search">Search by Name </label>
                <input type="text" id="search" onChange={this.props.searchBots}></input>
                <br></br>

                {/* In retrospect, I wish I had made this a dropdown instead of buttons to keep the code dry */}
                
                <label htmlFor="filter">Order by </label>
                <button id="filter" onClick={this.props.sortHealth}>Health</button>
                <button onClick={this.props.sortDamage}>Damage</button>
                <button onClick={this.props.sortArmor}>Armor</button>
            </div>
        )
    }
}