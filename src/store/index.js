import { createStore } from "redux";
import dataGridApp from "../reducers";

const store = createStore(
  dataGridApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
