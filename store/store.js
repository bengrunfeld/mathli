import { createStore, combineReducers } from "redux";
import reducers from "./reducers";

const initialState = { time: 8 };

let store = createStore(combineReducers(reducers), initialState);

export default store;
