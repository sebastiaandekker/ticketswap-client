import React from "react";
import EventForm from "./EventForm";
import { connect } from "react-redux";
import { createEvent } from "../store/events/actions";

class EventFormContainer extends React.Component {
  state = {
    name: "",
    description: "",
    picture: "",
    startDate: "",
    endDate: ""
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.createEvent(this.state);
    this.setState({
      name: "",
      description: "",
      picture: "",
      startDate: "",
      endDate: ""
    });
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <EventForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps, { createEvent })(EventFormContainer);
// export default connect(mapStateToProps)(EventFormContainer);
