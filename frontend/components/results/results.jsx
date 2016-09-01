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
      <div>
        <div className="results-searchForm">

        </div>

      </div>
    );
  }

}

export default withRouter(Results)
