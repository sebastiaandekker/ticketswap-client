import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "./components/Header";
import SignupFormContainer from "./components/SignupFormContainer";
import LoginFormContainer from "./components/LoginFormContainer";
import EventListContainer from "./components/EventListContainer";
import EventDetailsContainer from "./components/EventDetailsContainer";
import TicketDetailsContainer from "./components/TicketDetailsContainer";
import { Route } from "react-router";

export default function App() {
  return (
    <Provider store={store}>
      <React.Fragment>
        <CssBaseline />
        <Header></Header>
        <Route path="/login" component={LoginFormContainer} />
        <Route path="/signup" component={SignupFormContainer} />
        <Route exact path="/event" component={EventListContainer} />
        <Route exact path="/event/:eventId" component={EventDetailsContainer} />
        <Route
          path="/event/:eventId/:ticketId"
          component={TicketDetailsContainer}
        />
      </React.Fragment>
    </Provider>
  );
}
