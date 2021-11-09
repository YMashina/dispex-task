import axios from "axios";
import {
  setStreetsAction,
  setHousesAction,
  setApartmentsAction,
  setResidentsAction,
  resetResidentsAction,
  setApartmentsLoadingAction,
  setResidentsLoadingAction,
  setHousesLoadingAction,
  setStreetsLoadingAction,
} from "../actions/actions";

export const fetchStreets = () => {
  return async (dispatch) => {
    try {
      dispatch(setStreetsLoadingAction(true));
      const { data } = await axios.get(`Request/streets`);
      const filteredStreets = data.filter((street) => street.cityId === 1);
      return dispatch(setStreetsAction(filteredStreets));
    } catch (e) {
      console.error(e);
    }
  };
};

export const fetchHouses = (id) => {
  return async (dispatch) => {
    try {
      dispatch(setHousesLoadingAction(true));
      const { data } = await axios.get(`Request/houses/${id}`);
      dispatch(setApartmentsAction([]));
      dispatch(resetResidentsAction());
      return dispatch(setHousesAction(data));
    } catch (e) {
      console.error(e);
    }
  };
};

export const fetchApartments = (id) => {
  return async (dispatch) => {
    try {
      dispatch(setApartmentsLoadingAction(true));
      const { data } = await axios.get(`Request/house_flats/${id}`);
      dispatch(resetResidentsAction());
      return dispatch(setApartmentsAction(data));
    } catch (e) {
      console.error(e);
    }
  };
};

export const fetchResidents = (id) => {
  return async (dispatch) => {
    try {
      dispatch(setResidentsLoadingAction(true));
      const { data } = await axios.get(`HousingStock/clients?addressId=${id}`);
      return dispatch(setResidentsAction(data));
    } catch (e) {
      console.error(e);
    }
  };
};
