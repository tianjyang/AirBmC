import React from 'react';
import { hashHistory } from 'react-router';

class ResultItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    console.log("you clicked on" + this.props.listing.id);
    hashHistory.push("show/" + this.props.listing.id);
  }

  render() {
    //iumage tag taken out because it takes a long time to load.
    // <img src={this.props.listing.image_url} className="listing-thumbnail"/>
    return(
      <div className="displayListing" onClick={this.handleClick}>


        <p> {(this.props.listing.title)}</p>
      </div>
    );
  }
}

export default ResultItem;
