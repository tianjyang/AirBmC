import React from 'react';
import { Router, withRouter, hashHistory } from 'react-router';


class UserProfile extends React.Component {
  constructor (props) {
    super(props);
    // this.handleClick = this.handleClicks.bind(this)
  }

  handleClick (object,e) {
    e.preventDefault();
    this.props.deleteReservation(object.id);
  }

  redirectToShowPage(object,e) {
    e.preventDefault();
    hashHistory.push(`/show/${object.listing_id}`);
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

  render() {

    let showIfLoggedOut, showIfLoggedIn;
    if ( this.props.loggedIn ){
      showIfLoggedOut = "hidden";
      showIfLoggedIn = "";
    } else {
      showIfLoggedOut = "";
      showIfLoggedIn = "hidden";
    }

    const datePrettifier = (dateString) => {
        let a = new Date(dateString);
        return a.toDateString();
    };

    return(
      <div className={"user-profile " + showIfLoggedIn}>
        <div className={"username " + showIfLoggedIn}>{"Welcome " + this.props.username + "!"}</div>
        <div className={"reservation-dropdown " + showIfLoggedIn}>
          Your Reservations
        <ul className={"dropdown-content"}>
          {
            this.props.reservations.map((el)=>{
              if (el.id) {
                return(
                  <li className="dropdown-content" key={el.id + "reservation"}>
                    <a href="#" onClick={this.redirectToShowPage.bind(this,el)}> {el.description} on {datePrettifier(el.start_date)} </a>


                    <a href="#" className="cancel-link" onClick={this.handleClick.bind(this,el)}>Cancel</a>
                  </li>
                )
              } else {
                return (<li className="dropdown-content" key={el.id + "reservation"}>{el.description}</li>);
              }

            })
          }
        </ul>
          </div>

      </div>

    );
  }

}

export default withRouter(UserProfile);
