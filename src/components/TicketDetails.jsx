import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";

export default class TicketDetails extends React.Component {
  render() {
    const ticket = this.props.ticket;

    if (!ticket) {
      return <div>Loading</div>;
    } else {
      return (
        <Grid container justify="center">
          <Grid item>
            <Card>
              <CardMedia image={ticket.picture} title="Awesome" />
              <CardContent>
                <Typography component="p">€ {ticket.price}</Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {ticket.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  Edit Ticket
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      );
    }
  }
}
