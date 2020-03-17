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
    return (
      <div>
        <EventList events={this.props.events} />
        <EventFormContainer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    events: state.events
  };
};

export default connect(mapStateToProps, { getEvents })(EventListContainer);
