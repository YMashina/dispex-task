import { ADD_CASH, FETCH_DATA } from "./actionTypes";

export const addCashAction = (payload) => {
  return {
    type: ADD_CASH,
    payload,
  };
};

export const addFetchedDataAction = (payload) => {
  return {
    type: FETCH_DATA,
    payload,
  };
};
