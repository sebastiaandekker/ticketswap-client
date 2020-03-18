import React from "react";
import { connect } from "react-redux";
// import CommentList from "./CommentList";
// import CommentFormContainer from "./CommentFormContainer";

class CommentListContainer extends React.Component {
  render() {
    if (!this.props.ticket) {
      return <div>Loading Event</div>;
    } else if (!this.props.user) {
      return (
        <div>CommentListContainer</div>
        // <CommentList
        //   tickets={this.props.event.tickets}
        //   event={this.props.event}
        // />
      );
    } else {
      return (
        <div>
          CommentListContainer
          {/* <CommentList
            tickets={this.props.event.tickets}
            event={this.props.event}
          /> */}
          {/* <CommentFormContainer createMode={true} /> */}
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    event: state.event,
    user: state.user,
    ticket: state.ticket
  };
};

export default connect(mapStateToProps)(CommentListContainer);
