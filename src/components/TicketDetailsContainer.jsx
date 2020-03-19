import React from "react";
import { connect } from "react-redux";
import { getEvent } from "../store/event/actions";
import { getTicket } from "../store/ticket/actions";
import TicketDetails from "./TicketDetails";
import TicketFormContainer from "./TicketFormContainer";
import CommentListContainer from "./CommentListContainer";

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

  fraudRiskCalculation = () => {
    const ticket = this.props.ticket;
    const event = this.props.event;

    const calculateAuthorRisk = () => {
      const authorTicketsAmount = event.tickets.filter(
        ticketItem =>
          ticketItem.author.toLowerCase() === ticket.author.toLowerCase()
      ).length;

      let authorRisk = authorTicketsAmount <= 1 ? 10 : 0;
      return authorRisk;
    };

    const calculateAveragePrice = () => {
      const averagePrice =
        event.tickets.reduce((totalPrice, currentTicket) => {
          return totalPrice + currentTicket.price;
        }, 0) / event.tickets.length;
      return averagePrice;
    };

    const calculatePriceRisk = () => {
      let priceRisk = null;
      if (ticket.price < calculateAveragePrice()) {
        priceRisk =
          (calculateAveragePrice() - ticket.price) /
          (calculateAveragePrice() / 100);
      } else if (ticket.price > calculateAveragePrice()) {
        priceRisk =
          -(ticket.price - calculateAveragePrice()) /
          (calculateAveragePrice() / 100);
        if (priceRisk < -10) {
          priceRisk = -10;
        }
      }
      return priceRisk;
    };

    const calculateCommentRisk = () => {
      let commentRisk = ticket.comments.length > 3 ? 5 : 0;
      return commentRisk;
    };

    const calculateTimeRisk = () => {
      const date = new Date(ticket.updatedAt);
      const time = date.getHours();
      let timeRisk = time >= 9 || time <= 17 ? -10 : 10;
      return timeRisk;
    };

    const calculateFraudRisk = () => {
      // console.log("averagePrice", calculateAveragePrice());
      // console.log("authorRisk", calculateAuthorRisk());
      console.log("priceRisk", calculatePriceRisk());
      // console.log("commentRisk", calculateCommentRisk());
      // console.log("timeRisk", calculateTimeRisk());
      let riskTotal =
        calculateAuthorRisk() +
        calculatePriceRisk() +
        calculateCommentRisk() +
        calculateTimeRisk();
      console.log("riskTotal", riskTotal);

      const fraudRisk = riskTotal < 5 ? 5 : riskTotal > 95 ? 95 : riskTotal;
      return Math.round(fraudRisk);
    };

    console.log("fraudRisk", calculateFraudRisk());
    return calculateFraudRisk();
  };

  render() {
    if (!this.props.ticket) {
      return <div>Loading Ticket</div>;
    } else if (!this.props.event) {
      return <div>Loading Event</div>;
    } else if (
      !this.props.user ||
      this.props.user.name.toLowerCase() !==
        this.props.ticket.author.toLowerCase()
    ) {
      return (
        <div>
          <TicketDetails
            ticket={this.props.ticket}
            event={this.props.event}
            editable={false}
            changeToEditMode={this.changeToEditMode}
            fraudRisk={this.fraudRiskCalculation()}
          />
          <CommentListContainer />
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
            fraudRisk={this.fraudRiskCalculation()}
          />
          <CommentListContainer />
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
            fraudRisk={this.fraudRiskCalculation()}
          />
          <TicketFormContainer ticketId={this.props.ticket.id} />
          <CommentListContainer />
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
