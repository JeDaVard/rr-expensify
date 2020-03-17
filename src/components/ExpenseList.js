import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from '../selectors/expenses'

export const ExpenseList = ({ expenses }) =>  (
    <div>
        <h1>Expense</h1>
        {expenses.length ? (
            expenses.map((expense) => {
                return <ExpenseListItem key={expense.id} {...expense}/>
            })) : (
            <p>You haven't expense records</p>
        )}
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters),
    };
};

export default connect(mapStateToProps)(ExpenseList);