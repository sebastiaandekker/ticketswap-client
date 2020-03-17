import React from "react";
import TicketForm from "./TicketForm";
import { connect } from "react-redux";
import { createTicket } from "../store/event/actions";

class TicketFormContainer extends React.Component {
  state = {
    description: "",
    picture: "",
    price: ""
  };

  onSubmit = ticket => {
    ticket.preventDefault();
    const ticketData = { ...this.state, eventId: this.props.event.id };
    this.props.createTicket(ticketData);
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
    user: state.user,
    event: state.event
  };
};

export default connect(mapStateToProps, { createTicket })(TicketFormContainer);
