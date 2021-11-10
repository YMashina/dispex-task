import styles from "./SelectAddress.module.scss";
import React, { useEffect, useState } from "react";
import { Select, Input, Spin } from "antd";
import {
  filterSort,
  filterOption,
  formattedAddress,
  filterSortNumbers,
} from "../constants";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchStreets,
  fetchHouses,
  fetchApartments,
  fetchResidents,
} from "../../redux/asyncActions/fetchData";
import { setAddressAction } from "../../redux/actions/actions";

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

  const isStreetsOptionsLoading = useSelector(
    (state) => state.selectOptions.isStreetsOptionsLoading
  );
  const isHousesOptionsLoading = useSelector(
    (state) => state.selectOptions.isHousesOptionsLoading
  );
  const isApartmentsOptionsLoading = useSelector(
    (state) => state.selectOptions.isApartmentsOptionsLoading
  );

  const [street, setStreet] = useState(null);
  const [house, setHouse] = useState(null);
  const [apartment, setApartment] = useState(null);

  const handleStreetChange = (value) => {
    const id = value.value;
    const name = value.label;
    setStreet({ id, name });
    setHouse(null);
    setApartment(null);
    dispatch(fetchHouses(id));
  };
  const handleHouseChange = (value) => {
    const id = value.value;
    const name = value.label;
    setHouse({ id, name });
    setApartment(null);
    dispatch(fetchApartments(id));
  };
  const handleApartmentChange = (value) => {
    const id = value.value;
    const name = value.label;
    setApartment({ id, name });
    dispatch(
      setAddressAction({
        id,
        street: street.name,
        house: house.name,
        apartment: name,
      })
    );
    dispatch(fetchResidents(id));
  };

  const getStreets = () => {
    dispatch(fetchStreets());
  };

  return (
    <div>
      <h3>Адрес</h3>
      <div className={styles.selectAddress}>
        <Input.Group compact>
          <Select
            labelInValue
            showSearch
            notFoundContent={
              isStreetsOptionsLoading ? <Spin size="small" /> : null
            }
            onFocus={getStreets}
            value={street && { value: street.id, label: street.name }}
            onChange={handleStreetChange}
            style={{ width: 250 }}
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
            notFoundContent={
              isHousesOptionsLoading ? <Spin size="small" /> : null
            }
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
            notFoundContent={
              isApartmentsOptionsLoading ? <Spin size="small" /> : null
            }
            value={apartment && { value: apartment.id, label: apartment.name }}
            onChange={handleApartmentChange}
            style={{ width: 200 }}
            placeholder="Кв./Офис"
            optionFilterProp="children"
            filterOption={filterOption}
            filterSort={filterSortNumbers}
            options={apartmentOptions.map((aptOption) => {
              return { value: aptOption.id, label: aptOption.name };
            })}
          />
        </Input.Group>
      </div>
      {address ? (
        <h4 className={styles.fullAddress}>
          Текущий адрес: {formattedAddress(address)}
        </h4>
      ) : null}
    </div>
  );
};

export default SelectAddress;
