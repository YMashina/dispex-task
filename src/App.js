import React from "react";
import { addCashAction, addFetchedDataAction } from "./store/actions";

import { Provider, useDispatch, useSelector } from "react-redux";
import { fetchData } from "./store/asyncActions/fetchData";

const App = () => {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash);
  const data = useSelector((state) => state.data);
  const addCash = (addValue) => {
    dispatch(addCashAction(addValue));
  };

  const addData = () => {
    dispatch(fetchData());
  };

  return (
    <div>
      <div>{cash}</div>
      <button onClick={() => addCash(Number(prompt()))}>click me</button>
      <button onClick={addData}>get</button>

      <div>
        {data?.map((dataItem) => {
          return <div>{dataItem.name}</div>;
        })}
      </div>
    </div>
  );
};

export default App;
