import React from 'react';
import { hashHistory } from 'react-router';

class ResultItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
  }

  handleClick(e) {
    e.preventDefault();
    hashHistory.push("show/" + this.props.listing.id);
  }

  handleMouseOver(e) {
    this.props.highlightMarker(this.props.listing.id);
  }

  handleMouseLeave(e) {
    this.props.highlightMarker(null);
  }

  render() {
    let bgImage = {
      "backgroundImage":`url(${this.props.listing.thumb_url})`,
      "backgroundSize" : "cover",
      "backgroundPosition" : "center",
    }
    //iumage tag taken out because it takes a long time to load.
    // <img src={this.props.listing.thumb_url} className="listing-thumbnail"/>
    if (this.props.listing.meetsFilters) {
      return(
        <div className="displayListing"
          onClick={this.handleClick}
          onMouseOver={this.handleMouseOver}
          onMouseLeave={this.handleMouseLeave}>
        <div className="listing_background" style={bgImage}>
          <p>{this.props.listing.title} <br/>
          {this.props.listing.make_model} &#8729;
          <i className="material-icons">event_seat</i> {this.props.listing.num_seats} &#8729;
          <i className="material-icons">monetization_on</i> {this.props.listing.price_per_day} </p>
        </div>
        <div className="gradient"></div>
        </div>
      );
    } else {
      return null;
    }

      }
}
export default ResultItem;
