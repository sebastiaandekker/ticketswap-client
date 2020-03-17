import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

export default class TicketForm extends React.Component {
  render() {
    return (
      <Grid container justify="center">
        <form onSubmit={this.props.onSubmit}>
          <Grid item>
            <TextField
              required
              id="standard-basic"
              label="Price"
              name="price"
              onChange={this.props.onChange}
              value={this.props.values.price}
            />
          </Grid>
          <Grid item>
            <TextField
              id="standard-multiline-static"
              label="Description"
              name="description"
              multiline
              rows="4"
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
            <Button variant="contained" color="primary" type="submit">
              Add Ticket
            </Button>
          </Grid>
        </form>
      </Grid>
    );
  }
}
