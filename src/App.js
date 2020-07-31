import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";
import KatieCard from "./components/KatieCard"

class App extends Component {
  state = {
    dan: "Dan Krishnan",
    katie: "Katie Hughes"
  };

  render() {
    return (
      <div className="App">
        <Card name={this.state.dan} />
        <KatieCard name={this.state.katie} />
      </div>
    );
  }
}

export default App;
