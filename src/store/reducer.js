import { ADD_CASH, FETCH_DATA } from "./actionTypes";

const defaultState = { cash: 11 };

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_CASH:
      return { ...state, cash: state.cash + action.payload };
    case FETCH_DATA:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default reducer;
