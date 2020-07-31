
import React, { Component } from 'react';
import logo from './logo.svg';
import "./App.css";
import Card from "./components/Card";
import KatieCard from "./components/KatieCard"
import './App.css';
import Mordechai from "./components/Mordechai";
import Niall from "./components/Niall";
import { Gareth } from "./components/Gareth"
import { PictureTwo } from "./components/Picture2"
import Sara from "./components/Sara";
import myName from './components/Adam';
import Time from './components/Time';

class App extends Component {
  state = {
    dan: "Dan Krishnan",
    mordechai: "Mordechai Weinstock",
    luke: "Luke Stobbart",
    nat: "Natalia",
    gareth: "Gareth Scott",
    adam: 'Adam Horscraft',
    niall: "Niall",
    sara: "Sara",
    pic: "https://picsum.photos/200/300",
    katie: "Katie"
  };

	render() {
		const { luke, sara, pic } = this.state;
		return (
			<div className="App">
        <Time />
        <Card name={this.state.dan} />
        <Picture />
        <RandomFunction luke={luke} />
        
        <Card name={this.state.nat} />
        <Card name={this.state.adam} />
        <PictureTwo />
        <Niall name={this.state.niall} />

        <Sara sara={sara} pic={pic} />
        <Mordechai name={this.state.mordechai} />
        <KatieCard name={this.state.katie} />
        <Card name={this.state.adam} />
        <Gareth gareth={this.state.gareth} />
			</div>
		);
  }
}

export default App;
