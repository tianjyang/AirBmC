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

  componentWillReceiveProps(){
    console.log("will receive props");
  }

  hideModal(){
    $("#reservation-modal").fadeOut();
  }

  preventPropagation(e){
    e.stopPropagation();
  }

  render() {
    console.log(this.props);

    let currentRes = this.props.currentReservation || {};
    let currentLis = this.props.currentListing || {}

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
            <img src={currentLis.thumb_url} className="listing-thumbnail"
              onClick={this.redirectToShowPage.bind(this,currentLis.id)}/>
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
