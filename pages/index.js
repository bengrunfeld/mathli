import React from "react";
import Head from "next/head";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import { Heading } from "./index.styles";
import Text from "./Text";

function counterReducer(state = 5, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}

const rootReducer = combineReducers({ counter: counterReducer });
let store = createStore(rootReducer);

const Home = () => (
  <div>
    <Head>
      <title>Mathli - Math Game</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Provider store={store}>
      <Heading>Hello</Heading>
      <Text />
    </Provider>
  </div>
);

export default Home;
