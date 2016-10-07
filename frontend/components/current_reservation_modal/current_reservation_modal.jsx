import React from 'react';
import ReservationItem from './reservation_item';
import {objToArray} from '../../reducers/selector';


class CurrentReservationModal extends React.Component {
  constructor (props) {
    super(props);
  }

  redirectToShowPage(object,e) {
    e.preventDefault();
    this.props.hashHistory.push(`/show/${object}`);
    this.hideModal()
  }
  hideModal(){
    $("#reservation-modal").fadeOut(200);
  }

  preventPropagation(e){
    e.stopPropagation();
  }

  render() {
    console.log("this.props.reservations are ", this.props.reservations);
    let currentRes = this.props.currentReservation || {};
    let thumbUrl = this.props.currentThumb || "";
    let confirmColor = "";
    let confirmText = "";
    let confirmText2 = "";
    if (currentRes.confirm) {
      confirmColor = "confirmed";
      confirmText = "Confirmed";
      confirmText2 = "Your trip is go!";
    } else {
      confirmColor = "pending";
      confirmText = "Pending";
      confirmText2 = "The owner is still reviewing your trip.";
    }




    return(
      <div id="reservation-modal">
        <div className={"modal-background"} onClick={this.hideModal}>
          <div className={"modal-content-fit"} onClick={this.preventPropagation.bind(this)}>
            <h2>Your Reservations</h2>
            {this.props.reservations.map((reservation,idx)=>{
              return(<ReservationItem reservation={reservation} hashHistory={this.props.hashHistory} key={"reservation" + idx}/>)})
            }
          </div>
        </div>

      </div>
    );
  }

  datePrettifier(dateString){
      let a = new Date(dateString);
      return a.toDateString();
  };
}

export default CurrentReservationModal;
