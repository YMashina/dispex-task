import {
  SET_STREETS,
  SET_HOUSES,
  SET_APARTMENTS,
  SET_RESIDENTS,
  SET_ADDRESS,
  RESET_RESIDENTS_DATA,
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

export const setAddressAction = (payload) => {
  return {
    type: SET_ADDRESS,
    payload,
  };
};

export const resetResidentsAction = (payload) => {
  return {
    type: RESET_RESIDENTS_DATA,
    payload,
  };
};
