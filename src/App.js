import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "./components/Header";
import SignupFormContainer from "./components/SignupFormContainer";
import { Route } from "react-router";

export default function App() {
  return (
    <Provider store={store}>
      <React.Fragment>
        <CssBaseline />
        <Header></Header>
        <Route path="/signup" component={SignupFormContainer} />
      </React.Fragment>
    </Provider>
  );
}
