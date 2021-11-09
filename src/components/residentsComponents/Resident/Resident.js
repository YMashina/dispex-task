import React, { useCallback, useState } from "react";
import styles from "./Resident.module.scss";
import {
  DeleteOutlined,
  EditOutlined,
  MailOutlined,
  PhoneOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
import DeleteResident from "../residentModals/DeleteResident/DeleteResident";
import EditResident from "../residentModals/EditResident/EditResident";

const Resident = ({ id, name, phone, email, bindId }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const closeModal = useCallback(() => {
    setShowDeleteModal(false);
    setShowEditModal(false);
  }, []);

  const clickDelete = (e) => {
    e.stopPropagation();
    setShowDeleteModal(true);
  };

  const clickEdit = (e) => {
    e.stopPropagation();
    setShowEditModal(true);
  };

  const phoneNumber = (
    <div className={styles.phoneNumber}>
      <PhoneOutlined /> <span>+7{phone}</span>
    </div>
  );

  const cardDescription = (
    <div>
      {name ? phoneNumber : null}

      {email ? (
        <div className={styles.email}>
          <MailOutlined /> <span>{email}</span>
        </div>
      ) : null}
    </div>
  );

  return (
    <div>
      <Card
        style={{ width: 300 }}
        actions={[
          <DeleteOutlined onClick={clickDelete} />,
          <EditOutlined onClick={clickEdit} />,
        ]}
      >
        <Card.Meta
          avatar={
            <Avatar
              style={{ background: "none" }}
              icon={
                <UserOutlined style={{ fontSize: "2rem", color: "#1890ff" }} />
              }
            />
          }
          title={name || phoneNumber}
          description={cardDescription}
        />
      </Card>
      <DeleteResident
        isModalVisible={showDeleteModal}
        closeModal={closeModal}
        bindId={bindId}
        name={name}
        phone={phone}
      />
      <EditResident
        isModalVisible={showEditModal}
        closeModal={closeModal}
        name={name}
        phone={phone}
        email={email}
        bindId={bindId}
      />
    </div>
  );
};

export default Resident;
