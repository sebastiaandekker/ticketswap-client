import React from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";

export default class EventList extends React.Component {
  render() {
    const events = this.props.events;

    return (
      <Grid container justify="center">
        <Grid item xs={12}>
          <Typography variant="h3" align="center">
            Events
          </Typography>
        </Grid>
        {events.map(event => (
          <Grid item key={event.id}>
            <Card>
              <CardHeader title={event.name} subheader={event.startDate} />
              <CardMedia
                image="/static/images/cards/contemplative-reptile.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  {event.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Link to={`/event/${event.id}`}>
                  <Button size="small" color="primary">
                    Explore Event
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
