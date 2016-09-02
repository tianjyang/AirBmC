import React from 'react';
import { Router, withRouter } from 'react-router';
// import {SHOW_CONSTANTS, requestListing} from '../../actions/show_actions';


class NewReservationForm extends React.Component {
  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {

  }

  handleClick (e) {
    e.preventDefault();
    console.log("new reservation clicked!");
    const reservation = {
      start_date: e.currentTarget.form[0].value,
      end_date: e.currentTarget.form[1].value,
      description: e.currentTarget.form[2].value
    };
    this.props.newReservation(this.props.listingId,reservation);
  }

  render() {

    return(
      <form className="reservation-form">
        <input type="date" name="reservation[start_date]"></input>
        <input type="date" name="reservation[end_date]"></input>
        <textarea rows="4" cols="40"name=" reservation[description]" placeholder="Tell me about your trip!"></textarea>
        <input type="submit" onClick={this.handleClick}/>
      </form>
    );
  }

}

export default withRouter(NewReservationForm);
