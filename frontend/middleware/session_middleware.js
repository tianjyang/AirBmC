import { SESSION_CONSTANTS, updateUser, receiveReservations, requestReservations } from '../actions/session_actions';
import { signUpUser, newSession, destroySession, getReservations, deleteReservation } from '../utils/session_ajax_util';
import { updateErrors } from '../actions/error_actions';

const SessionMiddleware = (store) => (next) => (action) => {
  const success = (reply) => {
    store.dispatch(updateUser(reply));
    if (action.type === SESSION_CONSTANTS.CREATE_SESSION) {
      getReservations(addReservationsToState);
    }
  };

  const failure = (reply) => {
    store.dispatch(updateErrors(reply));
  };

  const addReservationsToState = (reply) => {
    store.dispatch(receiveReservations(reply));
  };

  switch (action.type) {
    case SESSION_CONSTANTS.CREATE_SESSION:
      newSession(action.creds,success,failure);
      break;
    case SESSION_CONSTANTS.CREATE_USER:

      signUpUser(action.creds,success,failure);
      break;
    case SESSION_CONSTANTS.DESTROY_SESSION:
      destroySession(action.creds,success,failure);
      return next(action);
    case SESSION_CONSTANTS.REQUEST_RESERVATIONS:
      getReservations(addReservationsToState);
      break;
    case SESSION_CONSTANTS.DESTROY_RESERVATION:
      deleteReservation(action.reservationId,addReservationsToState);
      break;
    default:
      return next(action);

  }
};

export default SessionMiddleware;
