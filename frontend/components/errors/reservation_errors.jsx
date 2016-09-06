import React from 'react';

class ReservationErrors extends React.Component {
  constructor (props) {
    super(props);
  }



  render() {
    let errorArray;
    if (this.props.errors.responseText) {
      errorArray = JSON.parse(this.props.errors.responseText);
    } else {
      errorArray = [];
    }
    return(
      <ul className = "errors-box">
        {errorArray.map((el,idx) => {
          return (<li className="errors-message" key = {idx + "error"} >{el}</li>);
        })
      }
      </ul>
    );
  }
}

export default ReservationErrors;
