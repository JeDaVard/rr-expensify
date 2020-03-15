import React from "react";
import { connect } from 'react-redux'
import ExpenseForm from "./ExpenseForm";
import {editExpense, removeExpense} from "../actions/expenses";


const EditExpense = (props) => {
    return (
        <>
            <ExpenseForm
                expense={props.expenses}
                onSubmit={(expense) => {
                props.dispatch(editExpense(props.expenses.id, expense));
                props.history.push('/');
            }}/>
            <button
                onClick={() => {
                    const id = props.expenses.id;
                    props.dispatch(removeExpense({ id }));
                    props.history.push('/');
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
