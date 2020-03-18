import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

export default class EventForm extends React.Component {
  render() {
    return (
      <Grid container justify="center">
        <Grid item xs={12}>
          <Typography variant="h3" align="center">
            Add Event
          </Typography>
        </Grid>
        <form onSubmit={this.props.onSubmit}>
          <Grid item>
            <TextField
              required
              id="standard-basic"
              label="Name"
              name="name"
              onChange={this.props.onChange}
              value={this.props.values.name}
            />
          </Grid>
          <Grid item>
            <TextField
              required
              id="standard-basic"
              label="Description"
              name="description"
              onChange={this.props.onChange}
              value={this.props.values.description}
            />
          </Grid>
          <Grid item>
            <TextField
              required
              id="standard-basic"
              label="Picture"
              name="picture"
              onChange={this.props.onChange}
              value={this.props.values.picture}
            />
          </Grid>
          <Grid item>
            <TextField
              id="date"
              label="Start date"
              name="startDate"
              onChange={this.props.onChange}
              value={this.props.values.startDate}
              type="date"
              InputLabelProps={{
                shrink: true
              }}
            />
          </Grid>
          <Grid item>
            <TextField
              id="date"
              label="End date"
              name="endDate"
              onChange={this.props.onChange}
              value={this.props.values.endDate}
              type="date"
              InputLabelProps={{
                shrink: true
              }}
            />
          </Grid>

          <Grid item>
            <Button variant="contained" color="primary" type="submit">
              Add Event
            </Button>
          </Grid>
        </form>
      </Grid>
    );
  }
}
