import React, { useCallback } from "react";
import { Modal } from "antd";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchResidents } from "../../../../redux/asyncActions/fetchData";
import { formattedAddress } from "../../../constants";

const DeleteResident = ({
  isModalVisible,
  closeModal,
  bindId,
  name,
  phone,
}) => {
  const dispatch = useDispatch();
  const address = useSelector((state) => state.residents.address);

  const handleOk = useCallback(async () => {
    await axios.delete(`HousingStock/bind_client/${bindId}`);
    dispatch(fetchResidents(address.id));
    closeModal();
  }, [address]);

  return (
    <Modal
      title="Отвязка жильца от квартиры"
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={closeModal}
    >
      <h4>{formattedAddress(address)}</h4>

      <div>ФИО: {name}</div>
      <div>Телефон: +7{phone}</div>
      <br />

      <p>Отвязать этого жильца от текущего адреса?</p>
    </Modal>
  );
};

export default DeleteResident;
