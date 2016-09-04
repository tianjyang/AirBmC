import React from 'react';
import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { requestReservations, destroyReservation } from '../../actions/session_actions';
import { updateUser } from '../../actions/session_actions';
import { objToArray } from '../../reducers/selector';


const mapStateToProps = (state) => {
  return ({
    username: state.session.username,
    loggedIn: state.session.logged_in,
    reservations: objToArray(state.reservations)
  });
};

const mapDispatchToProps = (dispatch) => ({
  requestReservations: () => {dispatch(requestReservations());},
  setInitialState: (userInfo) => {dispatch(updateUser(userInfo));},
  deleteReservation: (id) => {dispatch(destroyReservation(id));}
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
