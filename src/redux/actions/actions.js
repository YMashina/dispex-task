import {
  SET_STREETS,
  SET_HOUSES,
  SET_APARTMENTS,
  SET_RESIDENTS,
  SET_ADDRESS,
  RESET_RESIDENTS_DATA,
  SET_STREETS_LOADING,
  SET_HOUSES_LOADING,
  SET_APARTMENTS_LOADING,
  SET_RESIDENTS_LOADING,
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

export const setStreetsLoadingAction = (payload) => {
  return {
    type: SET_STREETS_LOADING,
    payload,
  };
};

export const setHousesLoadingAction = (payload) => {
  return {
    type: SET_HOUSES_LOADING,
    payload,
  };
};

export const setApartmentsLoadingAction = (payload) => {
  return {
    type: SET_APARTMENTS_LOADING,
    payload,
  };
};

export const setResidentsLoadingAction = (payload) => {
  return {
    type: SET_RESIDENTS_LOADING,
    payload,
  };
};
