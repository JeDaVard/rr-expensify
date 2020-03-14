import { createStore, combineReducers } from "redux";






// Store creation


//Subscribe to
store.subscribe(() => {
    const state = store.getState();
    const VisibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(VisibleExpenses);
});

// Dispatch
const exp1 = store.dispatch(addExpense({ description: 'Viva', amount: '3500', createdAt: 1000 }));
const exp2 = store.dispatch(addExpense({ description: 'Bounty', amount: '220', createdAt: -1000 }));
const exp3 = store.dispatch(addExpense({ description: 'Mars', amount: '230' }));
//
// store.dispatch(removeExpense({ id: exp1.expense.id }));
// store.dispatch(editExpense(exp2.expense.id, { description: 'Snickers' }));
// console.log(exp1);
//
// store.dispatch(setTextFilter('Bounty'));
store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(2125));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250));
// store.dispatch(setTextFilter('va'));



const demoState = {
    expenses: [
        {
            id: "expenseid",
            description: "Expense description",
            note: "Some expense note",
            amount: 5000,
            createdAt: 0
        }
    ],
    filters: {
        text: "filter text",
        sortBy: "amount",
        startDate: undefined,
        endDate: undefined
    }
};
