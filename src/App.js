import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";

import RandomFunction from "./components/Luke";

import Picture from "./components/Picture";

import myName from './components/Adam';


class App extends Component {
  state = {
    dan: "Dan Krishnan",

    luke: "Luke Stobbart",

    nat: "Natalia"

    adam: 'Adam Horscraft'


  };

  render() {
    const { luke } = this.state
    return (
      <div className="App">

        <Card name={this.state.dan} />
        <RandomFunction luke={luke} />

        <Picture />
        <Card name={this.state.dan} />
        <Card name={this.state.nat} />
        <Card name={this.state.adam} />



      </div>
    );
  }
}

export default App;
