import React from "react";
import { Card, Modal } from "antd";
import axios from "axios";
import { API_URL } from "../../redux/asyncActions/constants";
import { useDispatch, useSelector } from "react-redux";
import { fetchResidents } from "../../redux/asyncActions/fetchData";
import { formattedAddress } from "../constants";

const DeleteResident = ({
  isModalVisible,
  closeModal,
  bindId,
  name,
  phone,
}) => {
  const dispatch = useDispatch();
  const address = useSelector((state) => state.residents.address);

  const handleOk = async () => {
    await axios.delete(`${API_URL}/HousingStock/bind_client/${bindId}`);
    dispatch(fetchResidents(address.id));
    closeModal();
  };

  return (
    <Modal
      title="Отвязка жильца от квартиры"
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={closeModal}
    >
      <h4>{formattedAddress(address)}</h4>

      <div>ФИО: {name}</div>
      <div>Телефон: {phone}</div>
      <br />

      <p>Отвязать этого жильца от текущего адреса?</p>
    </Modal>
  );
};

export default DeleteResident;
