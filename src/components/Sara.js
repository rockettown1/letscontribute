import React from 'react';

export default function Sara({ sara, pic }) {
	return (
		<div>
			<h3 style={{ color: 'lightblue' }}>Hi! I am {sara}</h3>
			<img src={pic} alt="pic" />
		</div>
	);
}
