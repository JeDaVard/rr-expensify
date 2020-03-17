import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { startRemoveExpense } from "../actions/expenses";
import moment from "moment";
import numeral from 'numeral';

function ExpenseListItem({ dispatch, id, description, amount, createdAt }) {
    return (
        <div>
            <Link to={`/edit/${id}`}>
                <h3>{description}</h3>
            </Link>
            <p>
                {numeral(amount).format('$0,0.00')} - {moment(createdAt).format('MMM Do, YYYY')}
            </p>
            <Link to={`/edit/${id}`}>
            <button>
                Edit
            </button>
            </Link>
            <button
                onClick={() => {
                    dispatch(startRemoveExpense({ id }))
                }}>
                Delete
            </button>
        </div>
    )
}
export default connect()(ExpenseListItem);