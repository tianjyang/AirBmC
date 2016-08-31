import React from 'react';


class SessionForm extends React.Component {
  constructor () {
    super();
    this.handleClick = this.handleClick.bind(this);


  }

  handleClick (e) {
    e.preventDefault();
    let creds = {}
    creds.username = e.currentTarget.form[0].value;
    creds.password = e.currentTarget.form[1].value;
    switch (e.currentTarget.value) {
      case "Log In":
        this.props.onLoginClick(creds);
        break;
      case "Sign Up":
        this.props.onSignUpClick(creds);
        break;
      case "Log Out":
        this.props.onLogoutClick();
        break;
      default:
      console.log("Nothing happened");
    }
  }

  render() {
    // debugger
    let loginFormClass, submitButtonClass, logoutButtonClass;
    if ( this.props.loggedIn ){
      loginFormClass = "hidden_form";
      submitButtonClass = "hidden_button";
      logoutButtonClass = "visible_button";
    } else {
      loginFormClass = "visible_form";
      submitButtonClass = "visible_button";
      logoutButtonClass = "hidden_button";
    }

    return(
      <span>
        <form>
          <span className={loginFormClass}>
            <label>Username
              <input type="text" name="user[username]" placeholder="Username"></input>
            </label>
            <label>Password
              <input type="text" name="user[password]" placeholder="Password"></input>
            </label>
          </span>
          <span>
            <input type="submit" onClick={this.handleClick} value="Log In" className={submitButtonClass}></input>
            <input type="submit" onClick={this.handleClick} value="Sign Up" className={submitButtonClass}></input>
            <input type="submit" onClick={this.handleClick} value="Log Out" className={logoutButtonClass}></input>
          </span>
        </form>
      </span>
    );
  }

}

export default SessionForm
