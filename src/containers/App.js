import React from 'react';
import Editor from '../components/Editor';
import Preview from '../components/Preview';
import { useRootStore } from '../context/RootStore';
import { useObserver } from 'mobx-react-lite'
import './App.css';

const App = () => {
	const { uiState } = useRootStore()
	const ret = useObserver(() =>
		<div className="App">
			<div className="App-header">
				<h2>Markdown Preview</h2>
			</div>
			<div className="App-left">
				<Editor id="editor" onChange={uiState.updateMarkdown} />
			</div>
			<div className="App-right">
				<Preview id="preview" value={uiState.compiledHtml} />
			</div>
		</div>
	);
	return ret
};

App.propTypes = {};

export default App;
