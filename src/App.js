import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./Searchbox";
import { robots } from "./robots";
import './App.css';

class App extends Component {
  state = {
    robots: robots,
    searchfield: ""
  };

  onSearchChange = event => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    return (
      <div className="tc">
        <h1 className="f1">Robot Friends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
