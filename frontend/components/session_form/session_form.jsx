import React from 'react';


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
      console.log("Nothing happened");
    }
  }

  render() {
    let loginFormClass, submitButtonClass, logoutButtonClass;
    if ( this.props.loggedIn ){
      loginFormClass = "hidden";
      submitButtonClass = "hidden";
      logoutButtonClass = "";
    } else {
      loginFormClass = "";
      submitButtonClass = "";
      logoutButtonClass = "hidden";
    }

    return(
        <form className={"session_form"}>
          <span className={loginFormClass}>
            <label>Username
              <input type="text" name="user[username]" placeholder="Username"></input>
            </label>
            <label>Password
              <input type="text" name="user[password]" placeholder="Password"></input>
            </label>
          </span>
          <span>
            <input type="submit" onClick={this.handleClick} value="Log In" className={"session_button " + submitButtonClass}></input>
            <input type="submit" onClick={this.handleClick} value="Sign Up" className={"session_button " + submitButtonClass}></input>
            <input type="submit" onClick={this.handleClick} value="Guest" className={"session_button " + submitButtonClass}></input>
            <input type="submit" onClick={this.handleClick} value="Log Out" className={"session_button " + logoutButtonClass}></input>
          </span>
        </form>
    );
  }

}

export default SessionForm
