import React from 'react';
import { Router, withRouter } from 'react-router';
import {SHOW_CONSTANTS, requestListing} from '../../actions/show_actions';


class Show extends React.Component {
  constructor () {
    super();
  }

  componentWillMount() {
    this.props.requestListing(this.props.params.id);
  }

  handleClick (e) {
    e.preventDefault();
  }

  render() {

    let currentPostingBG = {
      backgroundImage: 'url('+ this.props.image_url + ')',
      height: 500,
    }

    return(
      <div style={currentPostingBG}>
        <p>{this.props.title}</p>


      </div>
    );
  }

}

export default Show;
// export default withRouter(Show);
