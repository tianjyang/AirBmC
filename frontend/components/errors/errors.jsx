import React from 'react';
// import { Router, withRouter } from 'react-router';



class Errors extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    return(
      <div className = "errors-message">
        {this.props.errors}
      </div>
    );
  }

}

export default Errors
// export default withRouter(Errors);
