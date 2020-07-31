import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";
import Mordechai from "./components/Mordechai";

class App extends Component {
  state = {
    dan: "Dan Krishnan",
    mordechai: "Mordechai Weinstock"
  };

  render() {
    return (
      <div className="App">
        <Card name={this.state.dan} />
        <Mordechai name={this.state.mordechai} />
      </div>
    );
  }
}

export default App;
