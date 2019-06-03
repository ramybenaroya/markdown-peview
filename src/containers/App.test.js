import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { RootContext } from '../context/RootStore';
import stores from '../stores';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(
		<RootContext.Provider value={stores}>
			<App />
		</RootContext.Provider>,
		div
	);
});
