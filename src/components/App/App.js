import React from "react";
import styles from "./App.module.scss";
import SelectAddress from "../SelectAddress/SelectAddress";
import Residents from "../Residents/Residents";
import { useSelector } from "react-redux";

const App = () => {
  const address = useSelector((state) => state.residents.address);

  return (
    <div className={styles.appContent}>
      <SelectAddress />
      {address && <Residents />}
    </div>
  );
};

export default App;
