import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

export default class EventDetails extends React.Component {
  render() {
    // const event = this.props.event;

    return (
      <Grid container justify="center">
        <Grid item xs={12}>
          <Typography variant="h3" align="center">
            Event
          </Typography>
        </Grid>
      </Grid>
    );
  }
}
