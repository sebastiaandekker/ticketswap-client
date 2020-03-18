import React from "react";
import TicketForm from "./TicketForm";
import { connect } from "react-redux";
import { createTicket } from "../store/event/actions";
import { updateTicket } from "../store/ticket/actions";

class TicketFormContainer extends React.Component {
  state = {
    description: "",
    picture: "",
    price: "",
    createMode: false
  };

  componentDidMount() {
    if (this.props.createMode) {
      this.setState({ ...this.state, createMode: true });
    }
  }

  onSubmit = ticket => {
    ticket.preventDefault();
    const ticketData = {
      ...this.state,
      eventId: this.props.event.id
    };
    if (this.props.createMode) {
      this.props.createTicket(ticketData);
    } else {
      const ticketUpdateData = { ...ticketData, id: this.props.ticketId };
      this.props.updateTicket(ticketUpdateData);
    }
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
        createMode={this.state.createMode}
        updateMode={this.state.updateMode}
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

export default connect(mapStateToProps, { createTicket, updateTicket })(
  TicketFormContainer
);
