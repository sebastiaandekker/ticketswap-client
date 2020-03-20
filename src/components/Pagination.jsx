import React from "react";
import Grid from "@material-ui/core/Grid";

export default class Pagination extends React.Component {
  render() {
    const { pageNumbers } = this.props;

    return (
      <Grid container justify="center">
        <Grid item xs={12}>
          <div>
            {pageNumbers.map(number => (
              <button key={number} id={number} onClick={this.props.handleClick}>
                {number}
              </button>
            ))}
          </div>
        </Grid>
      </Grid>
    );
  }
}
