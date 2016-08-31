import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { createSession, createUser, destroySession } from '../../actions/session_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.username,
  loggedIn: state.session.logged_in
});

const mapDispatchToProps = (dispatch) => ({
  onLoginClick: (creds) => {dispatch(createSession(creds));},
  onSignUpClick: (creds) => {dispatch(createUser(creds));},
  onLogoutClick: () => {dispatch(destroySession());}
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
