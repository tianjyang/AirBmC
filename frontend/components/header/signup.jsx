import React from 'react';
import SessionErrors from '../errors/session_errors';
import ReservationModal from '../current_reservation_modal/current_reservation_modal';

class SignUp extends React.Component {
  constructor () {
    super();
    this.makeNewSession = this.makeNewSession.bind(this);
    this.destroySession = this.destroySession.bind(this);
  }

  componentWillMount() {
    if (window.currentUser) {
      let userInfo = {
        username: window.currentUser,
        logged_in: true,
      };
      this.props.setInitialState(userInfo);
      this.props.requestReservations();
    }
  }

  makeNewSession (e) {
    e.preventDefault();
    let creds = {};
    creds.firstname = e.currentTarget.form[0].value;
    creds.lastname = e.currentTarget.form[1].value;
    creds.username = e.currentTarget.form[2].value;
    creds.email = e.currentTarget.form[3].value;
    creds.password = e.currentTarget.form[4].value;
    creds.promotions = e.currentTarget.form[5].value;
    e.currentTarget.form[0].value = "";
    e.currentTarget.form[1].value = "";
    e.currentTarget.form[2].value = "";
    e.currentTarget.form[3].value = "";
    e.currentTarget.form[4].value = "";


    this.props.onSignUpClick(creds);
  }

  destroySession (e) {
    e.preventDefault();
    this.props.onLogoutClick();
  }

  showModal(e){
    e.preventDefault();
    $("#signup-modal").fadeIn(200);
  }

  hideModal(e){
    $("#signup-modal").fadeOut(200);
    e.stopPropagation();
  }
  preventPropagation(e){
    e.stopPropagation();
  }

  showReservations(e){
    e.preventDefault();
    $("#reservation-modal").fadeIn(200);
  }

  render() {
    let showIfLoggedOut, showIfLoggedIn;
    if ( this.props.loggedIn ){
      showIfLoggedOut = "none";
      showIfLoggedIn = "";
    } else {
      showIfLoggedOut = "";
      showIfLoggedIn = "none";
    }
    if (!this.props.session.logged_in) {
      return(
        <div onClick={this.showModal} className="header_element">
          Sign Up
          <div id="signup-modal">
            <div className={"modal-background"} onClick={this.hideModal}>
              <div className={"modal-content-fit"} onClick={this.preventPropagation.bind(this)}>
                <p style={{"lineHeight":"12px","margin":"10px auto"}}>Sign Up With Email</p>
                <form className={"session_form"}>
                  <input className={"session_field"} type="text" placeholder="First Name"></input>
                  <input className={"session_field"} type="text" placeholder="Last Name"></input>
                  <input className={"session_field"} type="text" placeholder="Username"></input>
                  <input className={"session_field"} type="text" placeholder="Email"></input>
                  <input className={"session_field"} type="password" placeholder="New Password"></input>
                    <span style={{"fontSize":"12px","backgroundColor":"white","lineHeight":"12px","margin":"10px auto"}}>
                      <input type="checkbox"/> Please send me promotional updates and keep me updated with the latest features!</span>
                  <div className="button_container">
                    <input type="submit" style={{"margin":"10px auto"}} onClick={this.makeNewSession} value="Sign Up" className={"submit_button "}></input>
                  </div>

                  <SessionErrors errors={this.props.errors}/>
                </form>
              </div>
            </div>
          </div>
          <ReservationModal reservations={this.props.reservations} hashHistory={this.props.hashHistory}/>
        </div>
      );
    } else {
      return null
    }

  }

}

export default SignUp
