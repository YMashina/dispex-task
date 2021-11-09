import styles from "./App.module.scss";
import React from "react";
import SelectAddress from "../SelectAddress/SelectAddress";
import Residents from "../residentsComponents/Residents/Residents";
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
