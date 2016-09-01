import React from 'react';
import { Router, withRouter } from 'react-router';
import {SHOW_CONSTANTS, requestListing} from '../../actions/show_actions';


class Show extends React.Component {
  constructor () {
    super();
  }

  componentDidMount() {
    debugger
    this.props.requestListing(this.props.params.id);
  }

  handleClick (e) {
    e.preventDefault();
  }

  render() {

    return(
      <div>


      </div>
    );
  }

}

export default Show;
// export default withRouter(Show);
