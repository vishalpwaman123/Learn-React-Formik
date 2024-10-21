import { DECREMENT_COUNT, INCREMENT_COUNT } from "./CounterType";

const initialState = {
  count: 0,
};

const CounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      // debugger;
      return {
        ...state,
        count: state.count + 1,
      };

    case DECREMENT_COUNT:
      // debugger;
      return {
        ...state,
        count: state.count - 1,
      };

    default:
      return state;
  }
};

export default CounterReducer;
