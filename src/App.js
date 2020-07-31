import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";

class App extends Component {
  state = {
    dan: "Dan Krishnan",
  };

  render() {
    return (
      <div className="App">
        <Card name={this.state.dan} />
      </div>
    );
  }
}

export default App;
