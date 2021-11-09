import {
  SET_STREETS,
  SET_HOUSES,
  SET_APARTMENTS,
  SET_RESIDENTS,
  SET_ADDRESS,
} from "./actionTypes";

export const setStreetsAction = (payload) => {
  return {
    type: SET_STREETS,
    payload,
  };
};

export const setHousesAction = (payload) => {
  return {
    type: SET_HOUSES,
    payload,
  };
};

export const setApartmentsAction = (payload) => {
  return {
    type: SET_APARTMENTS,
    payload,
  };
};

export const setResidentsAction = (payload) => {
  return {
    type: SET_RESIDENTS,
    payload,
  };
};

export const setAddress = (payload) => {
  return {
    type: SET_ADDRESS,
    payload,
  };
};
