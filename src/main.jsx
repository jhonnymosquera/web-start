import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';
import ContextProvider from './Context';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ContextProvider>
			<HashRouter>
				<App />
			</HashRouter>
		</ContextProvider>
	</React.StrictMode>
);
