import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";
import Picture from "./components/Picture";

class App extends Component {
  state = {
    dan: "Dan Krishnan",
    nat: "Natalia"

  };

  render() {
    return (
      <div className="App">
         <Picture/>
         <Card name={this.state.dan} />
         <Card name={this.state.nat} />
        
       
      </div>
    );
  }
}

export default App;
