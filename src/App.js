import React, {useState} from "react";
import AppRouter from './routes/AppRouter';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import "./styles/App.scss";
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';
import {startSetExpenses} from "./actions/expenses";

export const store = configureStore();

const jsx = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);

function App() {
	const [loading, setLoading] = useState({isLoading: true});

	store.dispatch(startSetExpenses()).then(() => {
		setLoading({isLoading: false})
	});
	return (
		<>
			{loading ? <p>Loading...</p> : jsx}
		</>
	)
}

export default App;