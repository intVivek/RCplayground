import './App.css';
import React from 'react';
import Playground from './Pages/Playground';

import { Provider } from "react-redux";
import store from "./Store";

function App() {

	return (
		<Provider store={store}>
			<Playground />
		</Provider>
	);
}

export default App;