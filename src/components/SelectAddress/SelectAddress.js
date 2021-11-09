import React, { useEffect, useState } from "react";
import styles from "./SelectAddress.module.scss";
import { Select } from "antd";
import { filterSort, filterOption, formattedAddress } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchStreets,
  fetchHouses,
  fetchApartments,
  fetchResidents,
} from "../../redux/asyncActions/fetchData";
import {
  setHousesAction,
  setApartmentsAction,
  setResidentsAction,
  setAddress,
} from "../../redux/actions/actions";

const SelectAddress = () => {
  const dispatch = useDispatch();

  const address = useSelector((state) => state.residents.address);

  const streetOptions = useSelector(
    (state) => state.selectOptions.streetOptions
  );
  const houseOptions = useSelector((state) => state.selectOptions.houseOptions);
  const apartmentOptions = useSelector(
    (state) => state.selectOptions.apartmentOptions
  );

  const [street, setStreet] = useState(null);
  const [house, setHouse] = useState(null);
  const [apartment, setApartment] = useState(null);

  const handleStreetChange = (value) =>
    setStreet({ id: value.value, name: value.label });
  const handleHouseChange = (value) =>
    setHouse({ id: value.value, name: value.label });
  const handleApartmentChange = (value) =>
    setApartment({ id: value.value, name: value.label });

  useEffect(() => {
    dispatch(fetchStreets());
  }, []);

  useEffect(() => {
    setHouse(null);
    dispatch(setHousesAction([]));
    setApartment(null);
    dispatch(setApartmentsAction([]));
    dispatch(setResidentsAction([]));
    dispatch(setAddress(null));
    if (street) {
      dispatch(fetchHouses(street.id));
    }
  }, [street]);

  useEffect(() => {
    dispatch(setApartmentsAction([]));
    setApartment(null);
    dispatch(setResidentsAction([]));
    dispatch(setAddress(null));
    if (house) {
      dispatch(fetchApartments(house.id));
    }
  }, [house]);

  useEffect(() => {
    dispatch(setAddress(null));
    if (apartment) {
      dispatch(
        setAddress({
          id: apartment.id,
          street: street.name,
          house: house.name,
          apartment: apartment.name,
        })
      );
      dispatch(fetchResidents(apartment.id));
    }
  }, [apartment]);

  return (
    <div>
      <h3>Адрес</h3>
      <div className={styles.selectAddress}>
        <Select
          labelInValue
          showSearch
          value={street && { value: street.id, label: street.name }}
          onChange={handleStreetChange}
          style={{ width: 200 }}
          placeholder="Улица"
          optionFilterProp="children"
          filterOption={filterOption}
          filterSort={filterSort}
          options={streetOptions.map((streetOption) => {
            return {
              label: streetOption.name,
              value: streetOption.id,
            };
          })}
        />
        <Select
          labelInValue
          showSearch
          value={house && { value: house.id, label: house.name }}
          onChange={handleHouseChange}
          style={{ width: 200 }}
          placeholder="Дом"
          optionFilterProp="children"
          filterOption={filterOption}
          filterSort={filterSort}
          options={houseOptions.map((houseOption) => {
            return { value: houseOption.id, label: houseOption.name };
          })}
        />
        <Select
          labelInValue
          showSearch
          value={apartment && { value: apartment.id, label: apartment.name }}
          onChange={handleApartmentChange}
          style={{ width: 200 }}
          placeholder="Кв./Офис"
          optionFilterProp="children"
          filterOption={filterOption}
          filterSort={filterSort}
          options={apartmentOptions.map((aptOption) => {
            return { value: aptOption.id, label: aptOption.name };
          })}
        />
      </div>
      {address ? (
        <h4 className={styles.fullAddress}>{formattedAddress(address)}</h4>
      ) : null}
    </div>
  );
};

export default SelectAddress;
