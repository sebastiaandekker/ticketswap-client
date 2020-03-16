import React from "react";
import { connect } from "react-redux";
import SignupForm from "./SignupForm";
// import { login } from "../actions";

class SignupFormContainer extends React.Component {
  state = { name: "", email: "", password: "" };

  onSubmit = event => {
    event.preventDefault();
    // this.props.login(this.state.email, this.state.password);
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <SignupForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
      />
    );
  }
}
export default connect(null)(SignupFormContainer);
