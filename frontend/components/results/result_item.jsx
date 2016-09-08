import React from 'react';
import { hashHistory } from 'react-router';

class ResultItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    hashHistory.push("show/" + this.props.listing.id);
  }

  render() {
    //iumage tag taken out because it takes a long time to load.
    // <img src={this.props.listing.image_url} className="listing-thumbnail"/>
    return(
      <div className="displayListing" onClick={this.handleClick}>
        <img src={this.props.listing.thumb_url} className="listing-thumbnail"/>
        {(this.props.listing.title)}
      </div>
    );
  }
}

export default ResultItem;
