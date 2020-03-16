import filtersReducer from "../../reducers/filters";
import moment from "moment";

test('Should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
});

test('Should set to sortBy amount', () => {
    const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
});

test('Should set to sortBy date', () => {
    const state = filtersReducer(undefined, {type: 'SORT_BY_DATE'});
    expect(state.sortBy).toBe('date');
});

test('Should set text filter', () => {
    const testState = {
        text: 'someText'
    };
    const action = { type: 'SET_TEXT_FILTER', text: 'someText' };
    const state = filtersReducer(undefined, action);

    expect(state.text).toBe(testState.text)
});

test('Should set startDate filter', () => {
    const startDate = moment();
    const action = {
        type: 'SET_START_DATE',
        startDate
    };
    const state = filtersReducer(undefined, action);
    expect(state.startDate).toEqual(startDate)
});

test('Should set startDate filter', () => {
    const endDate = moment();
    const action = {
        type: 'SET_END_DATE',
        endDate
    };
    const state = filtersReducer(undefined, action);
    expect(state.endDate).toEqual(endDate)
});