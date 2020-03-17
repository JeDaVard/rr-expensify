// import { v1 as uuid } from 'uuid';
import db from '../firebase/firebase';

// Add expense
export const addExpense = expense => ({
    type: 'ADD_EXPENSE',
    expense,
});

export const startAddExpense = (expenseData = {}) => {
    return dispatch => {
        const {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0,
        } = expenseData;
        const expense = { description, note, amount, createdAt };
        return db
            .ref('expenses')
            .push(expense)
            .then(ref => {
                dispatch(
                    addExpense({
                        id: ref.key,
                        ...expense,
                    })
                );
            });
    };
};

// Remove Expense
export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id,
});

export const startRemoveExpense = ({ id } = {}) => {
    return dispatch => {
        db.ref(`expenses/${id}`)
            .remove()
            .then(() => {
                dispatch(removeExpense({ id }));
            });
    };
};

// Edit expense
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates,
});
export const startEditExpense = (id, updates) => {
  return dispatch => {
      db.ref(`expenses/${id}`)
          .update(updates)
          .then(() => {
              dispatch(editExpense(id, updates))
          })
  }
};


//set expenses
export const setExpenses = expenses => ({
    type: 'SET_EXPENSES',
    expenses,
});

export const startSetExpenses = () => {
    return dispatch => {
        return db
            .ref('expenses')
            .once('value')
            .then(snapshot => {
                const expenses = [];
                snapshot.forEach(snap => {
                    expenses.push({
                        id: snap.key,
                        ...snap.val(),
                    });
                });

                dispatch(setExpenses(expenses));
            });
    };
};
