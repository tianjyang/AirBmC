import React from 'react';
import SessionErrors from '../errors/session_errors';
import ReservationModal from '../current_reservation_modal/current_reservation_modal';

class LogIn extends React.Component {
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
    if (e.currentTarget.value !== "Log Out") {
      creds.username = e.currentTarget.form[0].value;
      creds.password = e.currentTarget.form[1].value;
      e.currentTarget.form[0].value = "";
      e.currentTarget.form[1].value = "";
    }

    switch (e.currentTarget.value) {
      case "Log In":
        this.props.onLoginClick(creds);
        break;
      case "Guest":
        creds.username = "guest";
        creds.password = "password";
        this.props.onLoginClick(creds);
        break;
    }
  }

  destroySession (e) {
    e.preventDefault();
    this.props.onLogoutClick();
  }

  showModal(e){
    e.preventDefault();
    $("#login-modal").fadeIn(200);
  }

  hideModal(e){
    $("#login-modal").fadeOut(200);
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
    if ( this.props.session.loggedIn ){
      showIfLoggedOut = "none";
      showIfLoggedIn = "";
    } else {
      showIfLoggedOut = "";
      showIfLoggedIn = "none";
    }

    if (!this.props.session.logged_in) {
      return(
        <div onClick={this.showModal} className="header_element">
          Log In
          <div id="login-modal">
            <div className={"modal-background"} onClick={this.hideModal}>
              <div className={"modal-content-fit"} onClick={this.preventPropagation.bind(this)}>
                <img className="logo" style={{"cursor":"default","backgroundColor":"#008AC9","marginBottom":"10px","border":"2px solid #2B115A"}}
                  src={"http://res.cloudinary.com/drf8botsi/image/upload/c_crop,h_198,w_400,y_80/v1476245154/logo_qgje6h.png"}/>
                <p style={{"lineHeight":"12px"}}>Login or Sign Up Here!</p>
                <form className={"session_form"}>
                  <input className={"session_field"} type="text" name="user[username]" placeholder="Username"></input>
                  <input className={"session_field"} type="password" name="user[password]" placeholder="Password"></input>
                  <div className="button_container">
                    <input type="submit" onClick={this.makeNewSession} value="Log In" className={"session_button "}></input>
                    <input type="submit" onClick={this.makeNewSession} value="Sign Up" className={"session_button "}></input>
                    <input type="submit" onClick={this.makeNewSession} value="Guest" className={"session_button "}></input>
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

export default LogIn
