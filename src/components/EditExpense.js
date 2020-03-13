import React from "react";

const EditExpense = (props) => {
    return (
        <h1>Editing the expense with the ID of {props.match.params.id}</h1>
    )
};

export default EditExpense;
