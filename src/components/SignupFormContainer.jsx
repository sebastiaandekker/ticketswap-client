import React from "react";
// import LoginForm from "./LoginForm";
import { connect } from "react-redux";
// import { login } from "../actions";

class SignupFormContainer extends React.Component {
  state = { name: "", email: "", password: "" };

  render() {
    return (
      <div>
        <h1>Signup Form Container</h1>
      </div>
    );
  }
}
export default connect(null)(SignupFormContainer);
