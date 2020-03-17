import React from "react";
import SignupForm from "./SignupForm";
import { connect } from "react-redux";
import { signup } from "../store/user/actions";
import { Redirect } from "react-router-dom";

class SignupFormContainer extends React.Component {
  state = { name: "", email: "", password: "" };

  onSubmit = event => {
    event.preventDefault();
    this.props.signup(this.state.name, this.state.email, this.state.password);
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    if (this.props.user) {
      return <Redirect to="/events" />;
    }
    return (
      <SignupForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps, { signup })(SignupFormContainer);
