import React from 'react';
import { GoogleGeocoding } from '../../utils/search_ajax_util';
import { withRouter } from 'react-router';

class Results extends React.Component {
  constructor () {
    super();

  }

  handleClick (e) {
    e.preventDefault();
  }

  render() {

    return(
      <h3>hit the search results!</h3>
    );
  }

}

export default withRouter(Results)
