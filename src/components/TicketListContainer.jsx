import React from "react";
// import { connect } from "react-redux";
// import TicketList from "./TicketList";
// import TicketFormContainer from "./TicketFormContainer";

export default class TicketListContainer extends React.Component {
  render() {
    const tickets = this.props.tickets;
    console.log("tickets", tickets);

    return (
      <div>
        <h1>TicketListContainer</h1>
        {/* <TicketList events={this.props.events} /> */}
      </div>
    );
  }
}
