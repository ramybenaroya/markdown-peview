import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import { RootContext } from './context/RootStore';
import stores from './stores';

ReactDOM.render(
	<RootContext.Provider value={stores}>
		<App />
	</RootContext.Provider>,
	document.getElementById('root')
);
