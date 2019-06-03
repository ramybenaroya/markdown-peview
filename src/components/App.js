import React from 'react';
import Editor from './Editor';
import './App.css';

const App = () => (
	<div className="App">
		<div className="App-header">
			<h2>Markdown Preview</h2>
		</div>
		<div className="App-left">
			<Editor id="editor" onChange={() => {}} />
		</div>
		<div className="App-right">
			<div className="box full-size">Right</div>
		</div>
	</div>
);

App.propTypes = {};

export default App;
