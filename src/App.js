import React from "react";
import AppRouter, { history } from './routes/AppRouter';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import "./styles/App.scss";
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from "./firebase/firebase";
import { login, logout } from './actions/auth';

export const store = configureStore();

const jsx = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);

function App() {
	firebase.auth().onAuthStateChanged((user) => {
		if (user) {
			store.dispatch(login(user.uid));

			if (history.location.pathname === '/') {
				history.push('/dashboard')
			}
		} else {
			store.dispatch(logout());
			history.push('/')
		}
	});
	return (
		<>
			{jsx}
		</>
	)
}

export default App;