import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";
import Niall from "./components/Niall";

import RandomFunction from "./components/Luke";

import Picture from "./components/Picture";


class App extends Component {
  state = {
    dan: "Dan Krishnan",
    niall: "Niall Rogers",

    luke: "Luke Stobbart",

    nat: "Natalia"


  };

  render() {
    const { luke } = this.state
    return (
      <div className="App">

        <Card name={this.state.dan} />
        <Niall name={this.state.niall} />
        <RandomFunction luke={luke} />

        <Picture />
        <Card name={this.state.dan} />
        <Card name={this.state.nat} />



      </div>
    );
  }
}

export default App;
