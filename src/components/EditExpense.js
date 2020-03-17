import React from "react";
import { connect } from 'react-redux'
import ExpenseForm from "./ExpenseForm";
import {startEditExpense, startRemoveExpense} from "../actions/expenses";


const EditExpense = (props) => {
    return (
        <>
            <ExpenseForm
                expense={props.expenses}
                onSubmit={(expense) => {
                props.dispatch(startEditExpense(props.expenses.id, expense));
                props.history.push('/dashboard');
            }}/>
            <button
                onClick={() => {
                    const id = props.expenses.id;
                    props.dispatch(startRemoveExpense({ id }));
                    props.history.push('/dashboard');
                }}>
                Delete
            </button>
        </>
    )
};
const mapStateToProps = (state, props) => {
    return {
        expenses: state.expenses.find((expense) => expense.id === props.match.params.id)
    }
};

export default connect(mapStateToProps)(EditExpense);
