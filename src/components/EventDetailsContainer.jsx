import React from "react";
import { connect } from "react-redux";
import { getEvent } from "../store/event/actions";
import EventDetails from "./EventDetails";
// // import TicketListContainer from "./TicketListContainer";

class EventDetailsContainer extends React.Component {
  componentDidMount() {
    const eventId = this.props.match.params.eventId;
    this.props.getEvent(eventId);
  }

  render() {
    if (!this.props.user) {
      return (
        <div>
          <EventDetails event={this.props.event} />
        </div>
      );
    } else {
      return (
        <div>
          <EventDetails event={this.props.event} />
          {/* <TicketListContainer /> */}
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

export default connect(mapStateToProps, { getEvent })(EventDetailsContainer);
// export default connect(mapStateToProps, { getEvent })(EventDetailsContainer);
