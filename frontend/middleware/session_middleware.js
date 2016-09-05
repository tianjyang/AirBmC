import { SESSION_CONSTANTS, updateUser, receiveReservations, requestReservations } from '../actions/session_actions';
import { signUpUser, newSession, destroySession, getReservations, deleteReservation } from '../utils/session_ajax_util';
import { updateErrors } from '../actions/error_actions';

const SessionMiddleware = (store) => (next) => (action) => {
  const success = (reply) => {
    store.dispatch(updateUser(reply));
    store.dispatch(updateErrors({}));
    if (action.type === SESSION_CONSTANTS.CREATE_SESSION) {
      getReservations(addReservationsToState);
    }
  };

  const errorCallback = (errorMessage) => {
    store.dispatch(updateErrors(errorMessage));
  };

  const addReservationsToState = (reply) => {
    store.dispatch(receiveReservations(reply));
  };

  switch (action.type) {
    case SESSION_CONSTANTS.CREATE_SESSION:
      newSession(action.creds,success,errorCallback);
      break;
    case SESSION_CONSTANTS.CREATE_USER:

      signUpUser(action.creds,success,errorCallback);
      break;
    case SESSION_CONSTANTS.DESTROY_SESSION:
      destroySession(action.creds,success,errorCallback);
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
