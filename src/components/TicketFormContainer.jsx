import React from "react";
import TicketForm from "./TicketForm";
import { connect } from "react-redux";
// import { createTicket } from "../store/events/actions";

class TicketFormContainer extends React.Component {
  state = {
    description: "",
    picture: "",
    price: ""
  };

  onSubmit = ticket => {
    ticket.preventDefault();
    // this.props.createTicket(this.state);
    this.setState({
      description: "",
      picture: "",
      price: ""
    });
  };

  onChange = ticket => {
    this.setState({
      [ticket.target.name]: ticket.target.value
    });
  };

  render() {
    return (
      <TicketForm
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

// export default connect(mapStateToProps, { createEvent })(EventFormContainer);
export default connect(mapStateToProps)(TicketFormContainer);
