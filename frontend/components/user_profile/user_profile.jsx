import React from 'react';
import { Router, withRouter } from 'react-router';

class UserProfile extends React.Component {
  constructor (props) {
    super(props);
  }

  handleClick (e) {
    e.preventDefault();
  }

  componentWillMount() {
    debugger
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
    return(
      <div>
        <div className="username">{"Welcome " + this.props.username + "!"}</div>
        <div className="reservation-dropdown">Your Reservations</div>
        <ul>

        </ul>






      </div>
    );
  }

}

export default UserProfile;
