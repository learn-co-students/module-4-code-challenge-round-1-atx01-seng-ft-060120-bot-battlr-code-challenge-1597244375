import React, { Component } from "react";

export default class Search extends Component {
    render(){
        return(
            <div className="search">
                <label htmlFor="search">Search by Name </label>
                <input type="text" id="search" onChange={this.props.searchBots}></input>
            </div>
        )
    }
}