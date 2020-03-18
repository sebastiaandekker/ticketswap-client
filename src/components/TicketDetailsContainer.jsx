import React from "react";
import { connect } from "react-redux";
import { getEvent } from "../store/event/actions";
import { getTicket } from "../store/ticket/actions";
import TicketDetails from "./TicketDetails";
// // import CommentListContainer from "./CommentListContainer";

class TicketDetailsContainer extends React.Component {
  componentDidMount() {
    const eventId = this.props.match.params.eventId;
    const ticketId = this.props.match.params.ticketId;
    this.props.getEvent(eventId);
    this.props.getTicket(ticketId);
  }

  render() {
    if (!this.props.event) {
      return <div>Loading Event</div>;
    } else {
      return (
        <div>
          <TicketDetails ticket={this.props.ticket} event={this.props.event} />
          {/* <CommentListContainer /> */}
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    event: state.event,
    user: state.user,
    ticket: state.ticket
  };
};

// export default connect(mapStateToProps, { getTicket })(TicketDetailsContainer);
export default connect(mapStateToProps, { getEvent, getTicket })(
  TicketDetailsContainer
);
