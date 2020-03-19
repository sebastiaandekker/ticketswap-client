import React from "react";
import { connect } from "react-redux";
import { getEvents } from "../store/events/actions";
import EventList from "./EventList";
import EventFormContainer from "./EventFormContainer";

class EventListContainer extends React.Component {
  componentDidMount() {
    this.props.getEvents();
  }

  render() {
    const eventsFiltered = this.props.events
      .filter(event => new Date() < new Date(event.startDate))
      .sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
    if (!this.props.user) {
      return (
        <div>
          <EventList events={eventsFiltered} />
        </div>
      );
    } else {
      return (
        <div>
          <EventList events={eventsFiltered} />
          <EventFormContainer />
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    events: state.events,
    user: state.user
  };
};

export default connect(mapStateToProps, { getEvents })(EventListContainer);
