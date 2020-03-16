import expensesReducer from "../../reducers/expenses";
import expenses from '../fixtures/expenses';
import moment from "moment";

test('Should set default state', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([])
});

test('Should add expense', () => {
    const expense = {
        id: '4',
        description: 'Will be removed soon',
        amount: 0,
        createdAt: 0,
        note: ''
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense])
});

test('Should add expense', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates: {
            description: 'Edited description by JTest',
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state[0].description).toBe('Edited description by JTest')
});

test('Should remove expense by id', () => {
    const state = expensesReducer(expenses,{type: 'REMOVE_EXPENSE', id: expenses[0].id});
    expect(state.length).toBe(expenses.length - 1)
});

test('Shouldn\'t remove if id doesn\'t exist', () => {
    const state = expensesReducer(expenses,{type: 'REMOVE_EXPENSE', id: 'JTest_thisIdDoesntExist'});
    expect(state.length).toBe(expenses.length)
});