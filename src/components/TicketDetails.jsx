import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
// import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";

export default class TicketDetails extends React.Component {
  render() {
    const ticket = this.props.ticket;
    const event = this.props.event;

    let editTicketElement = null;
    if (this.props.editable) {
      editTicketElement = (
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            startIcon={<EditIcon />}
            onClick={this.props.changeToEditMode}
          >
            Edit Ticket
          </Button>
        </CardActions>
      );
    }

    if (!ticket || !event) {
      return <div>Loading</div>;
    } else {
      return (
        <Grid container justify="center">
          <Grid item xs={12}>
            <Typography variant="h3" align="center">
              Ticket
            </Typography>
          </Grid>
          <Grid item>
            <Card>
              <CardHeader title={event.name} subheader={event.startDate} />
              <CardMedia image={ticket.picture} title="Awesome" />
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  {ticket.author}
                </Typography>
                <Typography variant="h5" className="mb-10">
                  € {ticket.price}
                </Typography>
                <Typography gutterBottom>
                  Fraud risk: {this.props.fraudRisk}%
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {ticket.description}
                </Typography>
              </CardContent>
              {editTicketElement}
            </Card>
          </Grid>
        </Grid>
      );
    }
  }
}
