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
      <p>{this.props.comment.body}</p>
      <p style={{opacity: 0.5}}>Posted by {this.props.comment.username}</p>
      </div>
    );
  }

}

export default CommentItem;
