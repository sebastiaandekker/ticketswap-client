import React from "react";
import CommentForm from "./CommentForm";
import { connect } from "react-redux";
import { createComment } from "../store/ticket/actions";

class CommentFormContainer extends React.Component {
  state = {
    text: ""
  };

  onSubmit = comment => {
    comment.preventDefault();
    const commentData = { ...this.state, ticketId: this.props.ticket.id };
    // const commentData = { ...this.state, ticketId: 5 };
    this.props.createComment(commentData);
    this.setState({
      text: ""
    });
  };

  onChange = comment => {
    this.setState({
      [comment.target.name]: comment.target.value
    });
  };

  render() {
    return (
      <CommentForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    ticket: state.ticket
  };
};

export default connect(mapStateToProps, { createComment })(
  CommentFormContainer
);
