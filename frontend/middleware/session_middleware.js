import { SESSION_CONSTANTS, updateUser } from '../actions/session_actions';
import { signUpUser, newSession } from '../utils/ajax_util';

const SessionMiddleware = (store) => (next) => (action) => {
  const success = (reply) => {
    store.dispatch(updateUser(reply));
  };

  switch (action.type) {
    case SESSION_CONSTANTS.CREATE_SESSION:
      console.log("creating session");
      // console.log(action);
      newSession(action.creds,success);
      break;
    case SESSION_CONSTANTS.CREATE_USER:
      // console.log("creating user");
      // console.log(action);
      signUpUser(action.creds,success);
      break;
    case SESSION_CONSTANTS.DESTROY_SESSION:
      console.log("LOGGING OUT USER");
      console.log(action);
      break;
    default:
      return next(action);

  }
};

export default SessionMiddleware;
