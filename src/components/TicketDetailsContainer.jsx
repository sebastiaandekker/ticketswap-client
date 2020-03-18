import React from "react";
import { connect } from "react-redux";
import { getEvent } from "../store/event/actions";
import { getTicket } from "../store/ticket/actions";
import TicketDetails from "./TicketDetails";
// // import CommentListContainer from "./CommentListContainer";

class TicketDetailsContainer extends React.Component {
  state = {
    editable: false,
    editMode: false
  };

  checkUserIsAuthor = (user, ticket) => {
    if (!user) {
      return;
    } else {
      const ticketAuthor = ticket.author.toLowerCase();

      if (user.name === ticketAuthor) {
        this.setState({ ...this.state, editable: true });
      }
    }
  };

  changeToEditMode = () => {
    console.log("changeToEditMode");

    this.setState({ ...this.state, editMode: true });
  };

  componentDidMount() {
    const eventId = this.props.match.params.eventId;
    const ticketId = this.props.match.params.ticketId;

    this.props.getEvent(eventId);
    this.props.getTicket(ticketId);

    this.checkUserIsAuthor(this.props.user, this.props.ticket);
  }

  render() {
    if (!this.props.event) {
      return <div>Loading Event</div>;
    } else {
      return (
        <div>
          <TicketDetails
            ticket={this.props.ticket}
            event={this.props.event}
            editable={this.state.editable}
            changeToEditMode={this.changeToEditMode}
          />
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
