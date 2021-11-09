import {
  RESET_RESIDENTS_DATA,
  SET_ADDRESS,
  SET_RESIDENTS,
} from "../actions/actionTypes";

const defaultState = {
  address: null,
  residents: [],
};

const residentsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_RESIDENTS:
      return { ...state, residents: action.payload };
    case SET_ADDRESS:
      return { ...state, address: action.payload };
    case RESET_RESIDENTS_DATA:
      return defaultState;
    default:
      return state;
  }
};

export default residentsReducer;
