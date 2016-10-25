import React from 'react';
import SessionErrors from '../errors/session_errors';
import ReservationModal from '../current_reservation_modal/current_reservation_modal';

class LogOut extends React.Component {
  constructor () {
    super();
    this.destroySession = this.destroySession.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    if (window.currentUser) {
      let userInfo = {
        username: window.currentUser,
        logged_in: true,
      };
      this.props.setInitialState(userInfo);
    }
  }

  handleClick (e) {
    e.preventDefault();
    this.destroySession();
    this.showModal();
  }


  destroySession () {
    this.props.onLogoutClick();
  }

  showModal(e){
    e.preventDefault()
    $("#logout-modal").fadeIn(200);
  }

  hideModal(e){
    $("#logout-modal").fadeOut(200);
    e.stopPropagation();
  }
  preventPropagation(e){
    e.stopPropagation();
  }

  render() {
    let showIfLoggedOut, showIfLoggedIn;
    if ( this.props.session.loggedIn ){
      showIfLoggedOut = "none";
      showIfLoggedIn = "";
    } else {
      showIfLoggedOut = "";
      showIfLoggedIn = "none";
    }

    if (this.props.session.logged_in) {
      return(
        <div onClick={this.showModal} className="header_element">
          Log Out
          <div id="logout-modal">
            <div className={"modal-background"} onClick={this.hideModal}>
              <div className={"modal-content-fit"} onClick={this.preventPropagation.bind(this)}>
                <p>Are you sure you want to log out?</p>
                <input type="submit" style={{"margin":"10px auto"}} onClick={this.destroySession} value="Log Out" className={"submit_button "}></input>

              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return null
    }
  }

}

export default LogOut
