import React from 'react';

export default function Time() {
	let now = new Date();
	var hour = now.getHours();
	let min = now.getMinutes();
	let sec = now.getSeconds();
	return (
		<div>
			<h1
				style={{
					height: 50,
					width: '100%',
					backgroundColor: 'grey',
					color: '#fff',
					border: 'none',
					borderBottom: '3px solid black',
				}}
			>
				Time:{hour}: {min}: {sec}
				{hour > 12 ? ' pm' : ' am'}
			</h1>
		</div>
	);
}
