import React from "react";
import { connect } from "react-redux";
import CommentList from "./CommentList";
// import CommentFormContainer from "./CommentFormContainer";

class CommentListContainer extends React.Component {
  render() {
    if (!this.props.ticket) {
      return <div>Loading Event</div>;
    } else if (!this.props.user) {
      return <CommentList comments={this.props.ticket.comments} />;
    } else {
      return (
        <div>
          CommentListContainer
          <CommentList comments={this.props.ticket.comments} />
          {/* <CommentFormContainer createMode={true} /> */}
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    // event: state.event,
    user: state.user,
    ticket: state.ticket
  };
};

export default connect(mapStateToProps)(CommentListContainer);
