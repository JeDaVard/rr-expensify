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
        <div className="container">
            <div className="list-header">
                <div className="show-for-mobile">Expenses</div>
                <div className="show-for-desktop">Expense</div>
                <div className="show-for-desktop">Amount</div>
            </div>
            <div className="list-body">
                {loading ? <div className="list-item list-item--message">
                    <span>Loading ...</span>
                </div> : expenses.length ? (
                    expenses.map((expense) => {
                        return <ExpenseListItem key={expense.id} {...expense}/>
                    })) : (
                    <div className="list-item list-item--message">
                        <span>No expenses</span>
                    </div>
                )}
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters),
    };
};

export default connect(mapStateToProps)(ExpenseList);