import React from "react";
import { connect } from "react-redux";
import { getEvents } from "../store/events/actions";
import EventList from "./EventList";
import EventFormContainer from "./EventFormContainer";
import Pagination from "./Pagination";

class EventListContainer extends React.Component {
  state = {
    currentPage: 1,
    eventsPerPage: 8
  };

  componentDidMount() {
    this.props.getEvents();
  }

  handleClick = event => {
    this.setState({ currentPage: Number(event.target.id) });
  };

  render() {
    const eventsFiltered = this.props.events
      .filter(event => new Date() < new Date(event.startDate))
      .sort((a, b) => new Date(a.startDate) - new Date(b.startDate));

    const { currentPage, eventsPerPage } = this.state;
    const indexOfLastEvent = currentPage * eventsPerPage;
    const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
    const currentEvents = eventsFiltered.slice(
      indexOfFirstEvent,
      indexOfLastEvent
    );

    const pageNumbers = [];
    for (
      let i = 1;
      i <= Math.ceil(eventsFiltered.length / eventsPerPage);
      i++
    ) {
      pageNumbers.push(i);
    }

    if (!this.props.user) {
      return (
        <div>
          <EventList events={currentEvents} />
          <Pagination
            pageNumbers={pageNumbers}
            handleClick={this.handleClick}
          ></Pagination>
        </div>
      );
    } else {
      return (
        <div>
          <EventList events={currentEvents} />
          <Pagination
            pageNumbers={pageNumbers}
            handleClick={this.handleClick}
          ></Pagination>
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
