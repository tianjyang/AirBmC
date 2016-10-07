import React from 'react';

class ReservationItem extends React.Component {
  // constructor (props) {
  //   super(props);
  // }

  redirectToShowPage(object,e) {
    e.preventDefault();
    this.props.hashHistory.push(`/show/${object}`);
    this.hideModal();
  }
  hideModal(){
    $("#reservation-modal").fadeOut(200);
  }

  preventPropagation(e){
    e.stopPropagation();
  }

  handleClick(id,e) {
    e.preventDefault();
    this.props.hashHistory.push("show/" + id);
    $("#reservation-modal").fadeOut(200);
  }


  render() {
    let currentRes = this.props.reservation || {};
    let confirmColor, confirmText, confirmText2;
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
      <div className={"reservation-item"} onClick={this.preventPropagation.bind(this)}>
        <h3>Description</h3>
        <p>{currentRes.description}</p>
        <h3>Rental Date</h3>
        <p>From: {this.datePrettifier(currentRes.start_date)}</p>
        <p>To: {this.datePrettifier(currentRes.end_date)}</p>
        <h3>Listing Information</h3>
        <a href="#" onClick={this.handleClick.bind(this,currentRes.listing_id)}>
          <img src={currentRes.thumb_url}></img>
        </a>
        <h3>Reservation Status</h3>
        <p className={confirmColor}> {confirmText} </p>
        <p>{confirmText2}</p>
      </div>
    );
  }

  datePrettifier(dateString){
      let a = new Date(dateString);
      return a.toDateString();
  };
}

export default ReservationItem;
