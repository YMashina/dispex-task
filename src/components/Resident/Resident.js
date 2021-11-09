import React, { useState } from "react";
import {
  DeleteOutlined,
  EditOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
import styles from "../Residents/Residents.module.scss";
import DeleteResident from "../DeleteResident/DeleteResident";
import EditResident from "../EditResident/EditResident";

const Resident = ({ id, name, phone, email, bindId }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const closeModal = () => {
    setShowDeleteModal(false);
    setShowEditModal(false);
  };

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
      <PhoneOutlined /> <span>{phone}</span>
    </div>
  );

  return (
    <div>
      <Card
        style={{ width: 300 }}
        actions={[
          <DeleteOutlined onClick={(e) => clickDelete(e, id)} />,
          <EditOutlined onClick={(e) => clickEdit(e, id)} />,
        ]}
      >
        <Card.Meta
          avatar={
            <Avatar src="https://i2.wp.com/vdostavka.ru/wp-content/uploads/2019/05/no-avatar.png?w=512&ssl=1" />
          }
          title={name || phoneNumber}
        />
        <div className={styles.cardDescription}>
          {name ? phoneNumber : null}

          {email ? (
            <div className={styles.email}>
              <MailOutlined /> <span>{email}</span>
            </div>
          ) : null}
        </div>
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
