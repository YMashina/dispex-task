import React from "react";
import styles from "./App.module.scss";
import SelectAddress from "../SelectAddress/SelectAddress";
import Residents from "../Residents/Residents";
import { useSelector } from "react-redux";
import { Col, Row } from "antd";

const App = () => {
  const address = useSelector((state) => state.residents.address);

  return (
    <div className={styles.appContent}>
      <SelectAddress />
      {address ? <Residents /> : null}
    </div>
  );
};

export default App;
