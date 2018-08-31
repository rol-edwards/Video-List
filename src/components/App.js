import React from 'react';
import ReactDOM from 'react-dom';
import Player from '../containers/Player'
import List from '../containers/List'
import Add from '../containers/Add'

const App = () => (
	<div>
		<h1>Video List</h1>
		<Player />
		<List />
		<Add />
	</div>
)

export default App