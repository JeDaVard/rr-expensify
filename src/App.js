import React from "react";
import AppRouter from './routes/AppRouter';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css'
import "./styles/App.scss";
import { addExpense, editExpense } from "./actions/expenses";
import { sortByAmount } from "./actions/filters";
import getVisibleExpenses from './selectors/expenses';


const store = configureStore();

store.dispatch(addExpense({description: 'Skechers', amount: 40}));
store.dispatch(addExpense({description: 'Strings', amount: 7.5}));
store.dispatch(addExpense({description: 'Listerine', amount: 17.99}));
store.dispatch(sortByAmount());

const state = store.getState();
const visibleUpdates = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleUpdates);

const jsx = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);

export default function App() {
	return (
		jsx
	)
}