import React from "react";
import AppRouter from './routes/AppRouter';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import "./styles/App.scss";
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';

export const store = configureStore();

const jsx = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);

function App() {
	return (
		<>
			{jsx}
		</>
	)
}

export default App;