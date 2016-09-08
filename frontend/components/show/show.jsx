import React from 'react';
import { Router, withRouter } from 'react-router';
import NewReservationForm from '../new_reservation_form/new_reservation_form_container';
import CommentItem from './comment_item';
import NewCommentForm from './new_comment_form';


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
  componentWillUnmount() {

    // this.props.clearComments();
  }

  render() {
    let currentPostingBG = {
      backgroundImage: 'url('+ this.props.imageUrl + ')',
      height: 500,
    };

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
            <td><i className="material-icons">directions_car</i></td>
            <td><i className="material-icons">event_seat</i></td>
            <td><i className="material-icons">monetization_on</i></td>
            <td><i className="material-icons">local_gas_station</i></td>
          <tr>
            <td>{this.props.makeModel}</td>
            <td>{this.props.seating}</td>
            <td>{this.props.pricePerDay}</td>
            <td>{this.props.mpg}</td>
          </tr>
        </table>

        <h2>User Comments</h2>
        <NewCommentForm createComment={this.props.newComment} listingId={this.props.params.id}/>
        {this.props.comments.map ((el) => {
          return(<CommentItem comment={el} key={el.id + "-comment"}/>);
        })}

        <div id="reservation-modal">
          <p>Your rental request has been sent to:</p>
          <h2>{this.props.hostname}</h2>
        </div>
      </div>
    );
  }

}

export default Show;
// export default withRouter(Show);
