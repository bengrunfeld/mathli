import App from "next/app";
import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../utils/theme";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <style global jsx>{`
          @import url("https://fonts.googleapis.com/css?family=Raleway&display=swap");
          @import url("https://fonts.googleapis.com/css?family=Montserrat&display=swap");

          html {
            font-size: 10px;
          }

          html,
          body,
          h1,
          h2,
          h3,
          h4,
          h5,
          p,
          a,
          ul,
          li {
            margin: 0;
            padding: 0;
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          p,
          a {
            font-family: helvetica;
          }
        `}</style>
      </ThemeProvider>
    );
  }
}
