import React from 'react';

class CommentItem extends React.Component {
  constructor () {
    super();
  }

  render() {
    return(
      <div className="comment-container">
      <h2>{this.props.comment.title}</h2>
      <h3>Rating: {this.props.comment.rating}</h3>
      <h3>{this.props.comment.body}</h3>
      <p>Posted by {this.props.comment.username}</p>
      </div>
    );
  }

}

export default CommentItem;