import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

export default class EventDetails extends React.Component {
  render() {
    const event = this.props.event;

    if (!event) {
      return <div>Loading</div>;
    } else {
      return (
        <Grid container justify="center">
          <Grid item xs={12}>
            <Typography variant="h3" align="center">
              Event
            </Typography>
          </Grid>
          <Grid item>
            <Card>
              <CardHeader title={event.name} />
              <CardMedia image={event.picture} title="Contemplative Reptile" />
              <CardContent>
                <Typography
                  varian="p"
                  // color="textSecondary"
                  className="mb-10"
                >
                  {event.startDate} - {event.endDate}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {event.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      );
    }
  }
}
