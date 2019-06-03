import React from 'react';
import './App.css';

const App = () => (
	<div className="App">
		<div className="App-header">
			<h2>Markdown Preview</h2>
		</div>
		<div className="App-left">
			<div className="box full-size">
				Left
			</div>
		</div>
		<div className="App-right">
			<div className="box full-size">
				Right
			</div>
		</div>
	</div>
);

App.propTypes = {};

export default App;
