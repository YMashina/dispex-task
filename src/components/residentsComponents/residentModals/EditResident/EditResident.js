import React from "react";
import { Button, Form, Input, Modal, Space } from "antd";
import { API_URL } from "../../../../redux/asyncActions/constants";
import { fetchResidents } from "../../../../redux/asyncActions/fetchData";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const EditResident = ({
  isModalVisible,
  closeModal,
  name,
  phone,
  email,
  bindId,
}) => {
  const dispatch = useDispatch();
  const address = useSelector((state) => state.residents.address);

  const onFinish = async (values) => {
    const postResponse = await axios.post(`HousingStock/client`, {
      Name: values.editedName,
      Phone: values.editedPhone,
      Email: values.editedEmail,
    });
    if (values.editedPhone !== phone) {
      await axios.put(`HousingStock/bind_client`, {
        ClientId: postResponse.data.id,
        AddressId: address.id,
      });
      await axios.delete(`HousingStock/bind_client/${bindId}`);
    }
    dispatch(fetchResidents(address.id));
    closeModal();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Modal
      title="Редактирование жильца"
      visible={isModalVisible}
      onCancel={closeModal}
      footer={null}
    >
      <Form
        initialValues={{
          editedName: name,
          editedPhone: phone,
          editedEmail: email,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item label="ФИО" name={"editedName"}>
          <Input placeholder={"Введите ФИО"} />
        </Form.Item>
        <Form.Item
          label="Телефон"
          name={"editedPhone"}
          rules={[
            {
              required: true,
              message: "Пожалуйста, введите номер телефона",
            },
          ]}
        >
          <Input addonBefore="+7" placeholder={"Введите номер телефона"} />
        </Form.Item>
        <Form.Item label="E-mail" name={"editedEmail"}>
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

export default EditResident;
