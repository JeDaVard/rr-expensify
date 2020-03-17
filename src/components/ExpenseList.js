import React, {useState} from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from '../selectors/expenses'
import {startSetExpenses} from "../actions/expenses";
import {store} from "../App";

export const ExpenseList = ({ expenses }) =>  {
    const [loading, setLoading] = useState(true);

    store.dispatch(startSetExpenses()).then(() => {
        setLoading(false)
    });

    return(
        <div>
            <h1>Expenses</h1>
            {loading ? <p>Loading...</p> : expenses.length ? (
                expenses.map((expense) => {
                    return <ExpenseListItem key={expense.id} {...expense}/>
                })) : (
                <p>You haven't expense records</p>
            )}
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters),
    };
};

export default connect(mapStateToProps)(ExpenseList);