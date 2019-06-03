import React from 'react';
import Editor from '../components/Editor';
import Preview from '../components/Preview';
import { useRootStore } from '../context/RootStore';
import { Observer } from 'mobx-react-lite';
import './App.css';

const App = () => {
	console.log('<App/> Render')
	const { uiState } = useRootStore();
	return (
		<div className="App">
			<div className="App-header">
				<h2>Markdown Preview</h2>
			</div>
			<div className="App-left">
				<Observer>{() => <Editor id="editor" onChange={uiState.updateMarkdown} />}</Observer>
			</div>
			<div className="App-right">
				<Observer>{() => <Preview id="preview" value={uiState.compiledHtml} />}</Observer>
			</div>
		</div>
	);
};

App.propTypes = {};

export default App;
