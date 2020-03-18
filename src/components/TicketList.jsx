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
                <Typography variant="h5" className="mb-10">
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
