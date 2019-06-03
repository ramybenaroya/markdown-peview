import React from 'react';
import Editor from './Editor';
import Preview from './Preview';
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
			<Preview id="preview" value={'<h1>Yo</h1>'} />
		</div>
	</div>
);

App.propTypes = {};

export default App;
