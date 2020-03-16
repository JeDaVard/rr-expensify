import {setEndDate, setStartDate, setTextFilter, sortByAmount, sortByDate} from "../../actions/filters";
import moment from "moment";


test('Should filter by a text', () => {
    const text = 'Text';
   const action =  setTextFilter('teXt'.toLowerCase());
   expect(action).toEqual({
       type: 'SET_TEXT_FILTER',
       text: text.toLowerCase()
   })
});

test('Should filter by default', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
});

test('Should generate set start date action object', () => {
   const action = setStartDate(moment(152000001));
   expect(action).toEqual({
       type: 'SET_START_DATE',
       startDate: moment(152000001)
   })
});

test('Should generate set end date action object', () => {
    const action = setEndDate(moment(152000001));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(152000001)
    })
});

test('Should generate action object for sort by date', () => {
   expect(sortByDate()).toEqual({
       type: 'SORT_BY_DATE',
   })
});

test('Should generate action object for sort by date', () => {
    expect(sortByAmount()).toEqual({
        type: 'SORT_BY_AMOUNT',
    })
});