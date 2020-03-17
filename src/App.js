import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "./components/Header";
import SignupFormContainer from "./components/SignupFormContainer";
import LoginFormContainer from "./components/LoginFormContainer";
import EventListContainer from "./components/EventListContainer";
import { Route } from "react-router";

export default function App() {
  return (
    <Provider store={store}>
      <React.Fragment>
        <CssBaseline />
        <Header></Header>
        <Route path="/login" component={LoginFormContainer} />
        <Route path="/signup" component={SignupFormContainer} />
        <Route path="/event" component={EventListContainer} />
      </React.Fragment>
    </Provider>
  );
}
