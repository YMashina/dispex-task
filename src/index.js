import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import { Provider } from "react-redux";
import store from "./redux/store";
import "antd/dist/antd.css";
import axios from "axios";
import { API_URL } from "./redux/asyncActions/constants";

axios.defaults.baseURL = API_URL;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
