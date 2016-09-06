import React from 'react';

class CommentItem extends React.Component {
  constructor () {
    super();
  }

  render() {
    debugger
    return(
      <div className="comment-container">
      <h2>{this.props.comment.title}</h2>
      <p>{this.props.comment.body}</p>
      <p>Posted by {this.props.comment.username}</p>
      </div>
    );
  }

}

export default CommentItem;
