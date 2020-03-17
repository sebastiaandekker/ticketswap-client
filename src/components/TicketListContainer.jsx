import React from "react";
import { connect } from "react-redux";
import TicketList from "./TicketList";
import TicketFormContainer from "./TicketFormContainer";

class TicketListContainer extends React.Component {
  render() {
    if (!this.props.event) {
      return <div>Loading Event</div>;
    } else {
      console.log("tickets", this.props.event.tickets);
      return (
        <div>
          <TicketList
            tickets={this.props.event.tickets}
            event={this.props.event}
          />
          <TicketFormContainer />
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
