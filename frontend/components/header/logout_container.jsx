import React from 'react';
import { connect } from 'react-redux';
import LogOut from './logout';
import { createSession, createUser, destroySession, updateUser } from '../../actions/session_actions';
import { requestReservations, destroyReservation } from '../../actions/session_actions';
const mapStateToProps = (state) => ({
  session: state.session,
  errors: state.sessionErrors,
  reservations: state.reservations,
});

const mapDispatchToProps = (dispatch) => ({
  onLogoutClick: (creds) => {dispatch(destroySession(creds));},
  setInitialState: (userInfo) => {dispatch(updateUser(userInfo));},
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogOut);
