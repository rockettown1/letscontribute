import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";
import RandomFunction from "./components/Luke";

class App extends Component {
  state = {
    dan: "Dan Krishnan",
    luke: "Luke Stobbart"
  };

  render() {
    const { luke } = this.state
    return (
      <div className="App">
        <Card name={this.state.dan} />
        <RandomFunction luke={luke} />
      </div>
    );
  }
}

export default App;
