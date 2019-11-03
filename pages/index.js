import React from "react";
import Head from "next/head";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import { Heading } from "../components/index.styles";
import Text from "../components/Text";

function counter(state = 5, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}

let store = createStore(counter);

const Home = () => (
  <Provider store={store}>
    <Text />
  </Provider>
);

export default Home;
