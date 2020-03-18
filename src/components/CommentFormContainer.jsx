import React from "react";
import CommentForm from "./CommentForm";
import { connect } from "react-redux";
// import { createComment } from "../store/comment/actions";

class CommentFormContainer extends React.Component {
  state = {
    text: ""
  };

  onSubmit = comment => {
    comment.preventDefault();
    this.props.createComment(this.state);
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

// export default connect(mapStateToProps, { createComment })(CommentFormContainer);
export default connect(mapStateToProps)(CommentFormContainer);
