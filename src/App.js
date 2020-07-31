import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";
import KatieCard from "./components/KatieCard"

import RandomFunction from "./components/Luke";

import Picture from "./components/Picture";


class App extends Component {
  state = {
    dan: "Dan Krishnan",
<<<<<<< HEAD
    katie: "Katie Hughes"
=======

    luke: "Luke Stobbart",

    nat: "Natalia"


>>>>>>> 0c209544ab84a6800f40b2d0ef459d35b5b8c2e8
  };

  render() {
    const { luke } = this.state
    return (
      <div className="App">

        <Card name={this.state.dan} />
<<<<<<< HEAD
        <KatieCard name={this.state.katie} />
=======
        <RandomFunction luke={luke} />

         <Picture/>
         <Card name={this.state.dan} />
         <Card name={this.state.nat} />
        
       

>>>>>>> 0c209544ab84a6800f40b2d0ef459d35b5b8c2e8
      </div>
    );
  }
}

export default App;
