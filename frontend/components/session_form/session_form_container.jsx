import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { createSession, createUser, destroySession, updateUser } from '../../actions/session_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.username,
  loggedIn: state.session.logged_in
});

const mapDispatchToProps = (dispatch) => ({
  onLoginClick: (creds) => {dispatch(createSession(creds));},
  onSignUpClick: (creds) => {dispatch(createUser(creds));},
  onLogoutClick: (creds) => {dispatch(destroySession(creds));},
  // setInitialState: (userInfo) => {dispatch(updateUser(userInfo));}
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
