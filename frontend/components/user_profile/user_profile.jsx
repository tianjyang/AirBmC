import React from 'react';
import { Router, withRouter } from 'react-router';

class UserProfile extends React.Component {
  constructor (props) {
    super(props);
    // this.handleClick = this.handleClicks.bind(this)
  }

  handleClick (object,e) {
    this.props.deleteReservation(object.id);
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

  // componentDidMount() {
  //   debugger
  //   if (this.props.logged_in) {
  //     debugger
  //     this.props.requestReservations();
  //   }
  // }



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
      <div className={"user-profile " + showIfLoggedIn}>
        <div className={"username " + showIfLoggedIn}>{"Welcome " + this.props.username + "!"}</div>
        <div className={"reservation-dropdown " + showIfLoggedIn}>
          <p className={"user-profile " + showIfLoggedIn}>Your Reservations</p>
        <ul className={"dropdown-content"}>
          {
            this.props.reservations.map((el)=>{
              return(
                <li key={el.id + "reservation"}>{el.description} on {el.start_date}
                  <a href="#" onClick={this.handleClick.bind(this,el)}>Cancel</a>
                </li>
              );
            })
          }

        </ul>
        </div>






      </div>
    );
  }

}

export default UserProfile;
