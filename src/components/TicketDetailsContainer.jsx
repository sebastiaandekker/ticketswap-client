import React from "react";
import { connect } from "react-redux";
import { getEvent } from "../store/event/actions";
// import { getTicket } from "../store/ticket/actions";
// import TicketDetails from "./EventDetails";
// // import CommentListContainer from "./CommentListContainer";

class TicketDetailsContainer extends React.Component {
  componentDidMount() {
    const eventId = this.props.match.params.eventId;
    const ticketId = this.props.match.params.ticketId;
    this.props.getEvent(eventId);
    // this.props.getTicket(ticketId);
  }

  render() {
    if (!this.props.event) {
      return <div>Loading Event</div>;
    } else {
      return (
        <div>
          <h1>TicketDetailsContainer</h1>
          {/* <TicketDetails event={this.props.event} /> */}
          {/* <CommentListContainer /> */}
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

// export default connect(mapStateToProps, { getTicket })(TicketDetailsContainer);
export default connect(mapStateToProps, { getEvent })(TicketDetailsContainer);
