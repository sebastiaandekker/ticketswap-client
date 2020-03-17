import React from "react";
import { connect } from "react-redux";
// // import { getEvent } from "../store/event/actions";
// // import EventDetails from "./EventDetails";
// // import TicketListContainer from "./TicketListContainer";

class EventDetailsContainer extends React.Component {
  componentDidMount() {
    // this.props.getEvent();
  }

  render() {
    if (!this.props.user) {
      return (
        <div>
          <h1>EventDetailsContainer</h1>
          {/* <EventDetails events={this.props.events} /> */}
        </div>
      );
    } else {
      return (
        <div>
          <h1>EventDetailsContainer</h1>
          {/* <EventDetails events={this.props.events} /> */}
          {/* <TicketListContainer /> */}
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    // events: state.events,
    user: state.user
  };
};

export default connect(mapStateToProps)(EventDetailsContainer);
// export default connect(mapStateToProps, { getEvents })(EventDetailsContainer);
