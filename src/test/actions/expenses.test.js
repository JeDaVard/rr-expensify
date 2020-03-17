import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
    addExpense,
    editExpense,
    removeExpense,
    startAddExpense,
} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import db from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc',
    });
});

test('should setup edit expense action object', () => {
    const action = editExpense('123abc', {
        description: 'test description',
        amount: 12,
    });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            description: 'test description',
            amount: 12,
        },
    });
});

test('should setup add expense action object', () => {
    const action = addExpense(expenses[0]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[0],
    });
});

test('should add expense to db and store', done => {
    const store = createMockStore({});
    const expenseData = {
        description: 'Nike',
        amount: 0,
        note: 'this one',
        createdAt: 100,
    };
    store
        .dispatch(startAddExpense(expenseData))
        .then(() => {
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type: 'ADD_EXPENSE',
                expense: {
                    id: expect.any(String),
                    ...expenseData,
                },
            });
            return db.ref(`expenses/${actions[0].expense.id}`).once('value');
        })
        .then(snap => {
            expect(snap.val()).toEqual(expenseData);

            done();
        });
});

test('Should add expense to db and store with defaults', done => {
    const store = createMockStore({});
    const expenseDefData = {
        description: '',
        amount: 0,
        note: '',
        createdAt: 0,
    };
    store
        .dispatch(startAddExpense({}))
        .then(() => {
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type: 'ADD_EXPENSE',
                expense: {
                    id: expect.any(String),
                    ...expenseDefData,
                },
            });
            return db.ref(`expenses/${actions[0].expense.id}`).once('value');
        })
        .then(snap => {
            expect(snap.val()).toEqual(expenseDefData);

            done();
        });
});
