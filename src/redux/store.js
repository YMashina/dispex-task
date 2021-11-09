import { createStore, applyMiddleware, combineReducers } from "redux";
import selectOptionsReducer from "./reducers/selectOptionsReducer";
import thunk from "redux-thunk";
import residentsReducer from "./reducers/residentsReducer";

const rootReducer = combineReducers({
  selectOptions: selectOptionsReducer,
  residents: residentsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
