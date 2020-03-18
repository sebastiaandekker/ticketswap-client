import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

export default class CommentList extends React.Component {
  render() {
    const comments = this.props.comments;

    return (
      <Grid container justify="center">
        <Grid item xs={12}>
          <Typography variant="h3" align="center">
            Comments
          </Typography>
        </Grid>
        {comments.map(comment => (
          <Grid item key={comment.id}>
            <Card>
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  {comment.author}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {comment.text}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  }
}
