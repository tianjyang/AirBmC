import React from 'react';
import { Router, withRouter } from 'react-router';
import ReservationErrors from '../errors/reservation_errors';
// import {SHOW_CONSTANTS, requestListing} from '../../actions/show_actions';


class NewReservationForm extends React.Component {
  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (e) {
    e.preventDefault();
    const reservation = {
      start_date: e.currentTarget.form[0].value,
      end_date: e.currentTarget.form[1].value,
      description: e.currentTarget.form[2].value
    };
    this.props.newReservation(this.props.listingId,reservation);
  }

  render() {
    let startDateIndent = {
      margin: "0px 0px 0px 10px",
    }
    return(
      <form className="reservation-form">
        <label>
          Start Date
        <input style={{margin: "0px 0px 0px 10px"}} type="date" name="reservation[start_date]"></input>
        </label>


        <label>
          End Date
        <input style={{margin: "0px 0px 0px 17px"}} type="date" name="reservation[end_date]"></input>
        </label>

        <textarea rows="4" cols="40"name=" reservation[description]" placeholder="Tell me about your trip!"></textarea>
        <input style={{margin: "0px 65px"}} type="submit" className="reservation-submit" onClick={this.handleClick}/>
        <ReservationErrors errors={this.props.errors}/>

      </form>
    );
  }

}

export default withRouter(NewReservationForm);
