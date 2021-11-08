import axios from "axios";
import { addFetchedDataAction } from "../actions";

export const fetchData = () => {
  return (dispatch) => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res);
        return res.data;
      })
      .then((json) => {
        console.log(json);
        return dispatch(addFetchedDataAction(json));
      });
  };
};
