import React from "react";
import { connect } from "react-redux";
// import { getEvents } from "../actions";
// import EventList from "./EventList";

class EventListContainer extends React.Component {
  componentDidMount() {
    // this.props.getEvents();
  }

  render() {
    return (
      <div>
        <h1>EventListContainer</h1>
        {/* <EventList events={this.props.events} /> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    // events: state.events
  };
};

export default connect(mapStateToProps)(EventListContainer);
