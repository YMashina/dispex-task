import axios from "axios";
import {
  setStreetsAction,
  setHousesAction,
  setApartmentsAction,
  setResidentsAction,
  resetResidentsAction,
} from "../actions/actions";

export const fetchStreets = () => {
  return async (dispatch) => {
    const { data } = await axios.get(`Request/streets`);
    const filteredStreets = data.filter((street) => street.cityId === 1);
    return dispatch(setStreetsAction(filteredStreets));
  };
};

export const fetchHouses = (id) => {
  return async (dispatch) => {
    const { data } = await axios.get(`Request/houses/${id}`);
    dispatch(setApartmentsAction([]));
    dispatch(resetResidentsAction());
    return dispatch(setHousesAction(data));
  };
};

export const fetchApartments = (id) => {
  return async (dispatch) => {
    const { data } = await axios.get(`Request/house_flats/${id}`);

    dispatch(resetResidentsAction());
    return dispatch(setApartmentsAction(data));
  };
};

export const fetchResidents = (id) => {
  return async (dispatch) => {
    const { data } = await axios.get(`HousingStock/clients?addressId=${id}`);
    return dispatch(setResidentsAction(data));
  };
};
