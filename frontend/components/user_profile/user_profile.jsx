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
    return(
      <div>
        <div className="username">{"Welcome " + this.props.username + "!"}</div>
        <div className="reservation-dropdown">Your Reservations</div>
        <ul>
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
    );
  }

}

export default UserProfile;
