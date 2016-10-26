import React from 'react';

class BecomeHost extends React.Component {
  showModal(e){
    e.preventDefault();
    $("#host-modal").fadeIn(200);
  }

  hideModal(e){
    $("#host-modal").fadeOut(200);
    e.stopPropagation();
  }

  render(){
    return(
      <div className="header_element" onClick={this.showModal}>
        <p>Become a Host</p>
        <div id="host-modal">
          <div className={"modal-background"} onClick={this.hideModal}>
            <div className={"modal-content-fit"}>
              <p style={{"lineHeight":"12px"}}>At this time, we are not accepting new listings.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default BecomeHost;
