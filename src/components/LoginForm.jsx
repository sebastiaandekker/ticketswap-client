import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

export default class LoginForm extends React.Component {
  render() {
    return (
      <Grid container justify="center">
        <form onSubmit={this.props.onSubmit}>
          <Grid item>
            <Typography variant="h3">Login</Typography>
            <TextField
              required
              id="standard-basic"
              label="Email"
              name="email"
              onChange={this.props.onChange}
              value={this.props.values.email}
            />
          </Grid>
          <Grid item>
            <TextField
              required
              id="standard-basic"
              label="Password"
              name="password"
              onChange={this.props.onChange}
              value={this.props.values.password}
            />
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" type="submit">
              Login
            </Button>
          </Grid>
        </form>
      </Grid>
    );
  }
}
