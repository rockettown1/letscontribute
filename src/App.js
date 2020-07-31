
import React, { Component } from 'react';
import logo from './logo.svg';
import "./App.css";
import Card from "./components/Card";
import RandomFunction from "./components/Luke";
import Mordechai from "./components/Mordechai";
import Niall from "./components/Niall";
import Picture from "./components/Picture";
import { Gareth } from "./components/Gareth";
import Sara from "./components/Sara";
import myName from './components/Adam';
import Time from './components/Time';

class App extends Component {
  state = {
    dan: "Dan Krishnan",
    mordechai: "Mordechai Weinstock",
    classNames: {name: "red"},
    luke: "Luke Stobbart",
    nat: "Natalia",
    nat: "Natalia",
    gareth: "Gareth Scott",
    adam: 'Adam Horscraft',
    niall: "Niall",
    sara: "Sara",
    pic: "https://picsum.photos/200/300",
  }

  classNameHandler = () => {
    this.state.classNames === "red" ? this.setState({name: "green"}) : this.setState({name: "red"})
  }

  render() {
    const { luke, sara, pic } = this.state;
    return (
      <div className="App">
        <Time />
        <Card name={this.state.dan} />
        <RandomFunction luke={luke} />
        <Picture />
        <RandomFunction luke={luke} />
        
        <Card name={this.state.dan} />
        <Card name={this.state.nat} />
        <Card name={this.state.adam} />
        <Niall name={this.state.niall} />
        <Card name={this.state.dan} />
        <Card name={this.state.nat} />
        <Sara sara={sara} pic={pic} />
        <Mordechai name={this.state.mordechai} classNameHandler={this.classNameHandler} className={this.state.classNames.name}/>
        <Gareth gareth={this.state.gareth}/>
      </div>
    );
  }
}

export default App;