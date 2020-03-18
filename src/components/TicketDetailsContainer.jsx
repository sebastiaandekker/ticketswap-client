import React from "react";
import { connect } from "react-redux";
import { getEvent } from "../store/event/actions";
import { getTicket } from "../store/ticket/actions";
import TicketDetails from "./TicketDetails";
import TicketFormContainer from "./TicketFormContainer";
// // import CommentListContainer from "./CommentListContainer";

class TicketDetailsContainer extends React.Component {
  state = {
    editMode: false
  };

  componentDidMount() {
    this.props.getTicket(this.props.match.params.ticketId);
    this.props.getEvent(this.props.match.params.eventId);
  }

  changeToEditMode = () => {
    this.setState({ ...this.state, editMode: true });
  };

  render() {
    if (!this.props.ticket) {
      return <div>Loading</div>;
    } else if (
      !this.props.user ||
      this.props.user.name !== this.props.ticket.author.toLowerCase()
    ) {
      return (
        <div>
          <TicketDetails
            ticket={this.props.ticket}
            event={this.props.event}
            editable={false}
            changeToEditMode={this.changeToEditMode}
          />
          {/* <CommentListContainer /> */}
        </div>
      );
    } else if (!this.state.editMode) {
      return (
        <div>
          <TicketDetails
            ticket={this.props.ticket}
            event={this.props.event}
            editable={true}
            changeToEditMode={this.changeToEditMode}
          />
          {/* <CommentListContainer /> */}
        </div>
      );
    } else {
      return (
        <div>
          <TicketDetails
            ticket={this.props.ticket}
            event={this.props.event}
            editable={true}
            changeToEditMode={this.changeToEditMode}
          />
          <TicketFormContainer ticketId={this.props.ticket.id} />
          {/* <CommentListContainer /> */}
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    event: state.event,
    user: state.user,
    ticket: state.ticket
  };
};

// export default connect(mapStateToProps, { getTicket })(TicketDetailsContainer);
export default connect(mapStateToProps, { getEvent, getTicket })(
  TicketDetailsContainer
);
