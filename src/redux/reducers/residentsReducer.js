import {
  RESET_RESIDENTS_DATA,
  SET_ADDRESS,
  SET_RESIDENTS,
  SET_RESIDENTS_LOADING,
} from "../actions/actionTypes";

const defaultState = {
  address: null,
  residents: [],
  isResidentsLoading: false,
};

const residentsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_RESIDENTS:
      return { ...state, residents: action.payload, isResidentsLoading: false };
    case SET_ADDRESS:
      return { ...state, address: action.payload };
    case RESET_RESIDENTS_DATA:
      return defaultState;
    case SET_RESIDENTS_LOADING:
      return { ...state, isResidentsLoading: action.payload };
    default:
      return state;
  }
};

export default residentsReducer;
