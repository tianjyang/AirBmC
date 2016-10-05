import React from 'react';
import SessionErrors from '../errors/session_errors';


class SessionForm extends React.Component {
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
      case "Sign Up":
        this.props.onSignUpClick(creds);
        break;
      case "Guest":
        creds.username = "guest";
        creds.password = "password";
        this.props.onLoginClick(creds);
        break;
    }
  }

  destroySession () {
    this.props.onLogoutClick();
  }

  showModal(){
    $("#session-modal").fadeIn(200);
  }

  hideModal(){
    $("#session-modal").fadeOut(200);
  }
  preventPropagation(e){
    e.stopPropagation();
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

    return(
      <div className="reservation-dropdown">
        <i className="material-icons">perm_identity</i> Your Profile
        <ul className={"dropdown-content"}>
          <li className={"dropdown-content "}
            style={{"display":showIfLoggedOut}}>
            <a href="#" onClick={this.showModal}>Login</a>
          </li>
          <li className={"dropdown-content "}
            style={{"display":showIfLoggedIn}}>
            <a href="#">Reservations</a>
          </li>
          <li className={"dropdown-content"}
            style={{"display":showIfLoggedIn}}
            value = "Log Out"
            onClick={this.destroySession}>
            <a href="#">Logout</a>
          </li>
        </ul>

        <div id="session-modal">
          <div className={"modal-background"} onClick={this.hideModal}>
            <div className={"modal-content-fit"} onClick={this.preventPropagation.bind(this)}>
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
      </div>
    );
  }

}

export default SessionForm
