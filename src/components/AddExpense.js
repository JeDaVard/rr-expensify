import React from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from 'react-redux';
import { startAddExpense } from "../actions/expenses";

const AddExpense = (props) => {
    const onSubmit = (expense) => {
        props.startAddExpense(expense);
        props.history.push('/dashboard');
    };
    return (
        <div>
            <h1>Add Expense</h1>
            <ExpenseForm butname={'Add expense'} onSubmit={onSubmit}/>
        </div>
    )
};
const mapDispatchToProps = dispatch => ({
    startAddExpense: expense => dispatch(startAddExpense(expense))
});

export default connect(undefined ,mapDispatchToProps)(AddExpense);
