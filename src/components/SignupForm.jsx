import React from "react";

export default class SignupForm extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <input
          type="text"
          name="name"
          onChange={this.props.onChange}
          value={this.props.values.name}
          placeholder="name"
        />
        <input
          type="text"
          name="email"
          onChange={this.props.onChange}
          value={this.props.values.email}
          placeholder="email"
        />
        <input
          type="text"
          name="password"
          onChange={this.props.onChange}
          value={this.props.values.password}
          placeholder="password"
        />
        <button type="submit">Login</button>
      </form>
    );
  }
}
