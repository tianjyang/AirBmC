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
    //iumage tag taken out because it takes a long time to load.
    // <img src={this.props.listing.image_url} className="listing-thumbnail"/>
    if (this.props.listing.meetsFilters) {
      return(
        <div className="displayListing"
          onClick={this.handleClick}
          onMouseOver={this.handleMouseOver}
          onMouseLeave={this.handleMouseLeave}>
          <img src={this.props.listing.thumb_url} className="listing-thumbnail"/>
          <h2>{(this.props.listing.title)}</h2>
          <table>
            <tr>
              <td>Make and Model: </td>
              <td>{this.props.listing.make_model}</td>
            </tr>
            <tr>
              <td>Number of Seats:</td>
              <td>{this.props.listing.num_seats}</td>
            </tr>
            <tr>
              <td>Price Per Day:</td>
              <td>{this.props.listing.price_per_day}</td>
            </tr>
          </table>
        </div>
      );
    } else {
      return null;
    }

      }
}

export default ResultItem;
