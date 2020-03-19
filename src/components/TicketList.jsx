import React from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";

export default class TicketList extends React.Component {
  fraudRiskCalculation = ticket => {
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
      if (!ticket.comments) {
        return 0;
      } else {
        let commentRisk = ticket.comments.length > 3 ? 5 : 0;
        return commentRisk;
      }
    };

    const calculateTimeRisk = () => {
      const date = new Date(ticket.updatedAt);
      const time = date.getHours();
      let timeRisk = time >= 9 || time <= 17 ? -10 : 10;
      return timeRisk;
    };

    const calculateFraudRisk = () => {
      let riskTotal =
        calculateAuthorRisk() +
        calculatePriceRisk() +
        calculateCommentRisk() +
        calculateTimeRisk();

      const fraudRisk = riskTotal < 5 ? 5 : riskTotal > 95 ? 95 : riskTotal;
      return Math.round(fraudRisk);
    };
    return calculateFraudRisk();
  };

  render() {
    const tickets = this.props.tickets;
    const event = this.props.event;

    return (
      <Grid container justify="center">
        <Grid item xs={12}>
          <Typography variant="h3" align="center">
            Tickets
          </Typography>
        </Grid>
        {tickets.map(ticket => (
          <Grid item key={ticket.id}>
            <Card>
              <CardMedia image={ticket.picture} title="Awesome" />
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  {ticket.author}
                </Typography>
                <Typography variant="h5" className="mb-10">
                  <Typography gutterBottom>
                    Risk:{" "}
                    <span
                      className={
                        this.fraudRiskCalculation(ticket) < 25
                          ? "green"
                          : this.fraudRiskCalculation(ticket) < 50
                          ? "yellow"
                          : "red"
                      }
                    >
                      {this.fraudRiskCalculation(ticket)}%
                    </span>
                  </Typography>
                  € {ticket.price}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {ticket.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Link to={`/event/${event.id}/${ticket.id}`}>
                  <Button size="small" color="primary">
                    See Ticket
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  }
}
