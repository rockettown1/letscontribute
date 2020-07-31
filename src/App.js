import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";
import KatieCard from "./components/KatieCard"
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card';


import RandomFunction from './components/Luke';

import Mordechai from "./components/Mordechai";

import Niall from "./components/Niall";

import RandomFunction from "./components/Luke";

import Picture from "./components/Picture";

import Sara from './components/Sara';

class App extends Component {

	state = {
		dan: 'Dan Krishnan',
    mordechai: "Mordechai Weinstock",
		luke: 'Luke Stobbart',
    katie: "Katie Hughes",
		nat: 'Natalia',
		sara: 'Sara',
		pic: 'https://picsum.photos/200/300',
	};

	render() {
		const { luke, sara, pic } = this.state;
		return (
			<div className="App">
				<Card name={this.state.dan} />
				<RandomFunction luke={luke} />
				<Picture />
				<Card name={this.state.dan} />
				<Card name={this.state.nat} />
				<Sara sara={sara} pic={pic} />
      <Mordechai name={this.state.mordechai} />
      <KatieCard name={this.state.katie} />
			</div>
		);
  }

}

export default App;
