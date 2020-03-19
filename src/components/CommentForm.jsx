import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

export default class CommentForm extends React.Component {
  render() {
    return (
      <Grid container justify="center">
        <Grid item xs={12}>
          <Typography variant="h3" align="center">
            Add Comment
          </Typography>
        </Grid>
        <form onSubmit={this.props.onSubmit}>
          <Grid item>
            <TextField
              required
              id="standard-basic"
              label="Text"
              name="text"
              onChange={this.props.onChange}
              value={this.props.values.text}
            />
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" type="submit">
              Add Comment
            </Button>
          </Grid>
        </form>
      </Grid>
    );
  }
}
