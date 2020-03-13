import { createStore } from "redux";
// import { devToolsEnhancer } from "redux-devtools-extension/logOnlyInProduction";
import dataGridApp from "../reducers";

const store = createStore(dataGridApp /*, devToolsEnhancer() */);

export default store;
