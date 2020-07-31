import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";
import Niall from "./components/Niall";

class App extends Component {
  state = {
    dan: "Dan Krishnan",
    niall: "Niall Rogers"
  };

  render() {
    return (
      <div className="App">
        <Card name={this.state.dan} />
        <Niall name={this.state.niall} />
      </div>
    );
  }
}

export default App;
