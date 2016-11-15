import reducers from "../reducers";
import { createStore } from "redux";

const store = createStore(reducers);
console.log(store.getState());

export default store;