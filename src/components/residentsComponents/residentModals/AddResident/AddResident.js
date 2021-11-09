import styles from "./AddResident.module.scss";
import React, { useCallback } from "react";
import { Button, Form, Input, Modal, Space } from "antd";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchResidents } from "../../../../redux/asyncActions/fetchData";
import { UserAddOutlined } from "@ant-design/icons";
import { formattedAddress } from "../../../constants";

const AddResident = ({ isModalVisible, closeModal }) => {
  const dispatch = useDispatch();
  const address = useSelector((state) => state.residents.address);

  const onFinish = useCallback(
    async (values) => {
      const postResponse = await axios.post(`HousingStock/client`, {
        Name: values.addResidentName,
        Phone: values.addResidentPhone,
        Email: values.addResidentEmail,
      });
      await axios.put(`HousingStock/bind_client`, {
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

  const addResidentTitle = (
    <span className={styles.addResidentTitle}>
      <UserAddOutlined className={styles.addResidentTitleIcon} />
      <span className={styles.addResidentTitleText}>
        <span>Добавление жильца</span>
      </span>
    </span>
  );

  return (
    <Modal
      title={addResidentTitle}
      visible={isModalVisible}
      onCancel={closeModal}
      footer={null}
    >
      <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <h4>{formattedAddress(address)}</h4>
        <br />
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
          <Input addonBefore="+7" placeholder={"Введите номер телефона"} />
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
