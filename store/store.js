import { createStore, combineReducers } from "redux";
import reducers from "./reducers";

const initialState = { time: 60, score: 0 };

const store = createStore(combineReducers(reducers), initialState);

export default store;
