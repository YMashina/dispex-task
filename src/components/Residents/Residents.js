import React, { useState } from "react";
import { Button, Col, Row } from "antd";
import { UserAddOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import styles from "./Residents.module.scss";
import Resident from "../Resident/Resident";
import AddResident from "../AddResident/AddResident";

const Residents = () => {
  const residents = useSelector((state) => state.residents.residents);
  const [showAddResidentModal, setShowAddResidentModal] = useState(false);

  const closeModal = () => setShowAddResidentModal(false);

  const clickAddResident = () => {
    setShowAddResidentModal(true);
  };

  return (
    <div className={styles.residentsContent}>
      <h3>Жильцы</h3>

      <div className={styles.addResidentsButton}>
        <Button
          icon={<UserAddOutlined />}
          type={"primary"}
          size={"large"}
          onClick={clickAddResident}
        >
          Добавить жильца
        </Button>
      </div>
      {residents.length ? (
        <Row gutter={[16, 16]}>
          {residents.map((resident) => {
            return (
              <Col key={resident.id}>
                <Resident
                  id={resident.id}
                  name={resident.name}
                  phone={resident.phone}
                  email={resident.email}
                  bindId={resident.bindId}
                />
              </Col>
            );
          })}
        </Row>
      ) : (
        <div>Жильцы не найдены.</div>
      )}

      <AddResident
        isModalVisible={showAddResidentModal}
        closeModal={closeModal}
      />
    </div>
  );
};

export default Residents;
