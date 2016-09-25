import React from 'react';
import SessionErrors from '../errors/session_errors';


class SessionForm extends React.Component {
  constructor () {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (e) {
    e.preventDefault();
    let creds = {};
    creds.username = e.currentTarget.form[0].value;
    creds.password = e.currentTarget.form[1].value;
    e.currentTarget.form[0].value = "";
    e.currentTarget.form[1].value = "";
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
      case "Log Out":
        this.props.onLogoutClick(creds);
        break;
      default:
    }
  }

  render() {
    let showIfLoggedOut, showIfLoggedIn;
    if ( this.props.loggedIn ){
      showIfLoggedOut = "hidden";
      showIfLoggedIn = "";
    } else {
      showIfLoggedOut = "";
      showIfLoggedIn = "hidden";
    }

    return(
        <form className={"session_form"}>
          <span className={ showIfLoggedOut }>
              <input className="input_field" type="text" name="user[username]" placeholder="Username"></input>
              <input className="input_field" type="password" name="user[password]" placeholder="Password"></input>
          </span>
          <SessionErrors errors={this.props.errors}/>
          <span>
            <input type="submit" onClick={this.handleClick} value="Log In" className={"session_button " + showIfLoggedOut}></input>
            <input type="submit" onClick={this.handleClick} value="Sign Up" className={"session_button " + showIfLoggedOut}></input>
            <input type="submit" onClick={this.handleClick} value="Guest" className={"session_button " + showIfLoggedOut}></input>
            <input type="submit" onClick={this.handleClick} value="Log Out" className={"logout_button " + showIfLoggedIn}></input>
        </span>

        </form>
    );
  }

}

export default SessionForm
