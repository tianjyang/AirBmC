import React from 'react';
import { hashHistory } from 'react-router';

class NewCommentForm extends React.Component {
  constructor () {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    let commentParams = {};
    commentParams.title = e.currentTarget.form[0].value;
    commentParams.body = e.currentTarget.form[1].value;
    commentParams.rating = e.currentTarget.form[2].value;
    commentParams.listing_id = this.props.listingId;
    this.props.createComment(commentParams);
  }

  render() {
    return(

      <form className="comment-form">
        <h2>User Comments</h2>
        <label className="input_field title">Title
          <input className="input_field title" type="text" placeholder="Title"></input>
        </label>
        <label className="input_field body">Body
          <input className="input_field body" type="text" placeholder="Body"></input>
        </label>
        <label>Rating
          <div className="input_field select-container">
          <select className="input_field dropdown">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          </div>
        </label>
        <span>
          <input type="submit" onClick={this.handleClick} value="Submit" className={"comment-submit"}></input>
      </span>
      </form>
    );
  }

}

export default NewCommentForm;
