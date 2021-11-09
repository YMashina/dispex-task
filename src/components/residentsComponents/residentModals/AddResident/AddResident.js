import React, { useCallback } from "react";
import { Button, Form, Input, Modal, Space } from "antd";
import axios from "axios";
import { API_URL } from "../../../../redux/asyncActions/constants";
import { useDispatch, useSelector } from "react-redux";
import { fetchResidents } from "../../../../redux/asyncActions/fetchData";

const AddResident = ({ isModalVisible, closeModal }) => {
  const dispatch = useDispatch();
  const address = useSelector((state) => state.residents.address);

  const onFinish = useCallback(
    async (values) => {
      const postResponse = await axios.post(`${API_URL}/HousingStock/client`, {
        Name: values.addResidentName,
        Phone: values.addResidentPhone,
        Email: values.addResidentEmail,
      });
      await axios.put(`${API_URL}/HousingStock/bind_client`, {
        ClientId: postResponse.data.id,
        AddressId: address.id,
      });
      dispatch(fetchResidents(address.id));
      closeModal();
    },
    [address]
  );

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Modal
      title="Добавление жильца"
      visible={isModalVisible}
      onCancel={closeModal}
      footer={null}
    >
      <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <Form.Item label="ФИО" name={"addResidentName"}>
          <Input placeholder={"Введите ФИО"} />
        </Form.Item>
        <Form.Item
          label="Телефон"
          name={"addResidentPhone"}
          rules={[
            {
              required: true,
              message: "Пожалуйста, введите номер телефона",
            },
          ]}
        >
          <Input placeholder={"Введите номер телефона"} />
        </Form.Item>
        <Form.Item label="E-mail" name={"addResidentEmail"}>
          <Input placeholder={"Введите email"} />
        </Form.Item>
        <Form.Item>
          <Space>
            <Button htmlType="button" onClick={closeModal}>
              Отмена
            </Button>
            <Button type="primary" htmlType="submit">
              ОК
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddResident;
