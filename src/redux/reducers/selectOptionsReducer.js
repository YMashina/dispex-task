import {
  SET_STREETS,
  SET_HOUSES,
  SET_APARTMENTS,
} from "../actions/actionTypes";

const defaultState = {
  streetOptions: [],
  houseOptions: [],
  apartmentOptions: [],
};

const selectOptionsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_STREETS:
      return { ...state, streetOptions: action.payload };
    case SET_HOUSES:
      return { ...state, houseOptions: action.payload };
    case SET_APARTMENTS:
      return { ...state, apartmentOptions: action.payload };
    default:
      return state;
  }
};

export default selectOptionsReducer;
