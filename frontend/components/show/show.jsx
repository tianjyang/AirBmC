import React from 'react';
import { Router, withRouter } from 'react-router';
// import {SHOW_CONSTANTS, requestListing} from '../../actions/show_actions';
import NewReservationForm from '../new_reservation_form/new_reservation_form_container';


class Show extends React.Component {
  constructor () {
    super();
  }

  componentWillMount() {
    this.props.requestListing(this.props.params.id);
    this.props.requestComments(this.props.params.id);
  }

  handleClick (e) {
    e.preventDefault();
  }

  render() {
    let currentPostingBG = {
      backgroundImage: 'url('+ this.props.imageUrl + ')',
      height: 500,
    };
    debugger

    return(
      <div className="show-content">
        <div style={currentPostingBG} className="listing-container">
          <div className="listing-title">{this.props.title}</div>

        </div>

        <div className="listing-information">
          <div className="host-information">
            <h2>Host Name</h2>
            <p>{this.props.hostname}</p>
            <h2>Description</h2>
            <p>{this.props.description}</p>
          </div>

          <NewReservationForm listingId={this.props.params.id}/>
        </div>

        <table className="vehicle-info">
          <tr>
            <th>Car Model</th>
            <th>Number of Seats</th>
            <th>Price Per Day</th>
            <th>Miles per Gallon</th>
          </tr>
          <tr>
            <td>{this.props.makeModel}</td>
            <td>{this.props.seating}</td>
            <td>{this.props.pricePerDay}</td>
            <td>{this.props.mpg}</td>
          </tr>
        </table>


        


      </div>
    );
  }

}

export default Show;
// export default withRouter(Show);
