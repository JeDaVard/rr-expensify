import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { removeExpense } from "../actions/expenses";

function ExpenseListItem({ dispatch, id, description, amount, createdAt }) {
    return (
        <div>
            <Link to={`/edit/${id}`}>
                <h3>{description}</h3>
            </Link>
            <p>{amount} [{createdAt}]</p>
            <Link to={`/edit/${id}`}>
            <button>
                Edit
            </button>
            </Link>
            <button
                onClick={() => {
                    dispatch(removeExpense({ id }))
                }}>
                Delete
            </button>
        </div>
    )
}
export default connect()(ExpenseListItem);