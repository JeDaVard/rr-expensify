import { createStore } from "redux";


const incrementCount = ({ incrementBy = 1}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({ count }) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET'
});

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {
                count: state.count + action.incrementBy
            };
        case "DECREMENT":
            return {
                count: state.count - action.decrementBy
            };
        case "RESET":
            return {
                count: 0
            };
        case "SET":
            return {
                count: action.count
            };
        default:
            return state;
    }
};

const reduxStore = createStore(countReducer);

reduxStore.subscribe(() => {
  console.log(reduxStore.getState());
});

reduxStore.dispatch(incrementCount({incrementBy: 3}));
reduxStore.dispatch(resetCount());

reduxStore.dispatch(decrementCount({decrementBy: 32}));
reduxStore.dispatch(setCount({count: 111}));
