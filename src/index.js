import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import {
  createMuiTheme,
  MuiThemeProvider,
  CssBaseline,
} from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#27292A",
    },
    secondary: {
      main: "#0A88C7",
    },
  },
  typography: {
    fontFamily: ['"Roboto"'].join(","),
    h1: {
      fontWeight: "300",
      fontSize: "3.05rem ",
    },
    h2: {
      fontWeight: "400",
      fontSize: "2.44rem",
    },
    h3: {
      fontWeight: "400",
      fontSize: "1.95rem",
    },
    h4: {
      fontWeight: "400",
      fontSize: "1.56rem",
    },
    h5: {
      fontWeight: "400",
      fontSize: "1.25rem",
    },
    h6: {
      fontWeight: "400",
      fontSize: "1.05rem",
    },
    body1: {
      fontWeight: "400",
    },
    caption: {
      fontWeight: "400",
      fontSize: "0.8rem",
    },
    body2: {
      fontWeight: "400",
    },
  },
});

ReactDOM.render(
  <Provider store={store}>
    <CssBaseline />
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById("root")
);
