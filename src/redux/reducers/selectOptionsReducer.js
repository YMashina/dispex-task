import {
  SET_STREETS,
  SET_HOUSES,
  SET_APARTMENTS,
  SET_STREETS_LOADING,
  SET_HOUSES_LOADING,
  SET_APARTMENTS_LOADING,
} from "../actions/actionTypes";

const defaultState = {
  streetOptions: [],
  houseOptions: [],
  apartmentOptions: [],
  isStreetsOptionsLoading: true,
  isHousesOptionsLoading: false,
  isApartmentsOptionsLoading: false,
};

const selectOptionsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_STREETS:
      return {
        ...state,
        streetOptions: action.payload,
        isStreetsOptionsLoading: false,
      };
    case SET_HOUSES:
      return {
        ...state,
        houseOptions: action.payload,
        isHousesOptionsLoading: false,
      };
    case SET_APARTMENTS:
      return {
        ...state,
        apartmentOptions: action.payload,
        isApartmentsOptionsLoading: false,
      };
    case SET_STREETS_LOADING:
      return { ...state, isStreetsOptionsLoading: action.payload };
    case SET_HOUSES_LOADING:
      return { ...state, isHousesOptionsLoading: action.payload };
    case SET_APARTMENTS_LOADING:
      return { ...state, isApartmentsOptionsLoading: action.payload };
    default:
      return state;
  }
};

export default selectOptionsReducer;
