import React from 'react';
import { connect } from 'react-redux';

const ExpenseList = (props) => (
    <div>
        <h1>Expense</h1>
        <p>Expenses: {props.expenses.length}</p>
    </div>
);

const ConnectedExpenseList = connect((state) => {
    return {
        expenses: state.expenses,
    };
})(ExpenseList);

export default ConnectedExpenseList;