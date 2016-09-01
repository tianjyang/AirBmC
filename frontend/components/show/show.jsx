import React from 'react';
import { Router, withRouter } from 'react-router';


class Show extends React.Component {
  constructor () {
    super();
  }

  handleClick (e) {
    e.preventDefault();
  }

  render() {

    return(
      <p> you hit the sho page!</p>
    );
  }

}

export default Show;
// export default withRouter(Show);
