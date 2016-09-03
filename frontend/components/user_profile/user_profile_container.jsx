import React from 'react';
import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { requestReservations } from '../../actions/session_actions';
import { updateUser } from '../../actions/session_actions';


const mapStateToProps = (state) => {
  return ({
    username: state.session.username,
    logged_in: state.session.logged_in,
    reservations: state.session.reservations
  });
};

const mapDispatchToProps = (dispatch) => ({
  requestReservations: () => {dispatch(requestReservations());},
  setInitialState: (userInfo) => {dispatch(updateUser(userInfo));}
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
