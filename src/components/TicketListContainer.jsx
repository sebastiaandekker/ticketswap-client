import React from "react";
import { connect } from "react-redux";
import TicketList from "./TicketList";
import TicketFormContainer from "./TicketFormContainer";

class TicketListContainer extends React.Component {
  render() {
    const ticketsByPrice = this.props.event.tickets.sort(
      (a, b) => b.price - a.price
    );
    if (!this.props.event) {
      return <div>Loading Event</div>;
    } else if (!this.props.user) {
      return <TicketList tickets={ticketsByPrice} event={this.props.event} />;
    } else {
      return (
        <div>
          <TicketList tickets={ticketsByPrice} event={this.props.event} />
          <TicketFormContainer createMode={true} />
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    event: state.event,
    user: state.user
  };
};

export default connect(mapStateToProps)(TicketListContainer);
