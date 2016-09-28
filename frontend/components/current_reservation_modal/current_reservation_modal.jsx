import React from 'react';

class CurrentSessionModal extends React.Component {
  constructor (props) {
    super(props);
  }

  redirectToShowPage(object,e) {
    // e.preventDefault();
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
          <div className={"modal-content"} onClick={this.preventPropagation.bind(this)}>
            <h2>Description</h2>
            <p>{currentRes.description}</p>
            <h2>Rental Date</h2>
            <p>From: {this.datePrettifier(currentRes.start_date)}</p>
            <p>To: {this.datePrettifier(currentRes.end_date)}</p>
            <h2>Listing Information</h2>
            <img src={thumbUrl} className="listing-thumbnail"
              onClick={this.redirectToShowPage.bind(this,currentRes.listing_id)}/>
            <h2>Reservation Status</h2>
            <p className={confirmColor}> {confirmText} </p>
            <p>{confirmText2}</p>
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

export default CurrentSessionModal;
