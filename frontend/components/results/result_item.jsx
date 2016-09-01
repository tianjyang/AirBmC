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
    debugger
    return(
      <div onClick={this.handleClick}>

        <p> you mad eit here! </p>
        <p> {JSON.stringify(this.props.listing)}</p>

      </div>
    );
  }
}

export default ResultItem;
