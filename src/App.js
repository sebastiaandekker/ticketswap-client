import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "./components/Header";

export default function App() {
  return (
    <Provider store={store}>
      <React.Fragment>
        <CssBaseline />
        <Header></Header>
      </React.Fragment>
    </Provider>
  );
}
