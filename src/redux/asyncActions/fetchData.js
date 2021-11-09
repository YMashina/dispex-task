import axios from "axios";
import {
  setStreetsAction,
  setHousesAction,
  setApartmentsAction,
  setResidentsAction,
  resetResidentsAction,
} from "../actions/actions";
import { API_URL } from "./constants";

export const fetchStreets = () => {
  return async (dispatch) => {
    const { data } = await axios.get(`${API_URL}/Request/streets`);
    const filteredStreets = data.filter((street) => street.cityId === 1);
    return dispatch(setStreetsAction(filteredStreets));
  };
};

export const fetchHouses = (id) => {
  return async (dispatch) => {
    const { data } = await axios.get(`${API_URL}/Request/houses/${id}`);
    dispatch(setApartmentsAction([]));
    dispatch(resetResidentsAction());
    return dispatch(setHousesAction(data));
  };
};

export const fetchApartments = (id) => {
  return async (dispatch) => {
    const { data } = await axios.get(`${API_URL}/Request/house_flats/${id}`);

    dispatch(resetResidentsAction());
    return dispatch(setApartmentsAction(data));
  };
};

export const fetchResidents = (id) => {
  return async (dispatch) => {
    const { data } = await axios.get(
      `${API_URL}/HousingStock/clients?addressId=${id}`
    );
    return dispatch(setResidentsAction(data));
  };
};
