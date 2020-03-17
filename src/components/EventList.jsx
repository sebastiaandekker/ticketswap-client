import React from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

export default class EventList extends React.Component {
  render() {
    // const events = this.props.events;

    return (
      <Grid container justify="center">
        <Grid item>
          <Typography variant="h3">Events</Typography>
          {/* {events.map(user => (
            <li key={user.id}>
              <Link to={`/user/${user.id}`}>{user.email}</Link>
            </li>
          ))} */}
        </Grid>
      </Grid>
    );
  }
}
