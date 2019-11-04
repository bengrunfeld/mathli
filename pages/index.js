import React from "react";
import Head from "next/head";
import { Provider } from "react-redux";
import { App } from "../components/App";
import { store } from "../store";

const Home = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Home;
