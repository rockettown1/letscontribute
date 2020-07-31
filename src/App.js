import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card';

import Mordechai from './components/Mordechai';

import Niall from './components/Niall';

import RandomFunction from './components/Luke';

import { Gareth } from './components/Gareth';

import Picture from './components/Picture';
import Sara from './components/Sara';

import myName from './components/Adam';
import Time from './components/Time';

class App extends Component {
	state = {
		dan: 'Dan Krishnan',
		mordechai: 'Mordechai Weinstock',
		luke: 'Luke Stobbart',

		nat: 'Natalia',

		gareth: 'Gareth Scott',

		niall: 'Niall',
		nat: 'Natalia',
		sara: 'Sara',
		pic: 'https://picsum.photos/200/300',
	};

	render() {
		const { luke, sara, pic } = this.state;
		return (
			<div className="App">
				<Time />
				<Card name={this.state.dan} />
				<RandomFunction luke={luke} />

				<Card name={this.state.adam} />

				<Niall name={this.state.niall} />
				<Picture />
				<Card name={this.state.dan} />
				<Card name={this.state.nat} />
				<Sara sara={sara} pic={pic} />
				<Mordechai name={this.state.mordechai} />
			</div>
		);
	}
}

export default App;
