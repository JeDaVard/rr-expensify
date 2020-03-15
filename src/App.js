import {hot} from "react-hot-loader";
import React from "react";
import AppRouter from './routes/AppRouter';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import "./styles/App.scss";
import { addExpense, editExpense } from "./actions/expenses";
import getVisibleExpenses from './selectors/expenses';


const store = configureStore();

store.dispatch(addExpense({ description: 'Skechers', amount: 40, createdAt: 1584278219287 }));
store.dispatch(addExpense({ description: 'Strings', amount: 7.5 , createdAt: 1584278209287 }));
store.dispatch(addExpense({ description: 'Listerine', amount: 17.99, createdAt: 1582199109287 }));

const state = store.getState();
const visibleUpdates = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleUpdates);

const jsx = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);

function App() {
	return (
		jsx
	)
}

export default hot(module)(App);