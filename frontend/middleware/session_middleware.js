import { SESSION_CONSTANTS, updateUser, receiveReservations, requestReservations } from '../actions/session_actions';
import { CAR_CONSTANTS, requestCars, receiveCars } from '../actions/car_actions'
import { signUpUser, newSession, destroySession, getReservations, deleteReservation, getCarsAJAX, deleteCarsAJAX } from '../utils/session_ajax_util';
import { updateSessionErrors } from '../actions/error_actions';

const SessionMiddleware = (store) => (next) => (action) => {
  const success = (reply) => {
    store.dispatch(updateUser(reply));
    store.dispatch(updateSessionErrors({}));
    if (action.type === SESSION_CONSTANTS.CREATE_SESSION) {
      getReservations(addReservationsToState);
    }
  };

  const errorCallback = (errorMessage) => {
    store.dispatch(updateSessionErrors(errorMessage));
  };

  const addReservationsToState = (reply) => {
    store.dispatch(receiveReservations(reply));
  };

  const addCarstoState = (reply) => {
    store.dispatch(receiveCars(reply));
  }

  switch (action.type) {
    case CAR_CONSTANTS.REQUEST_CARS:
      getCarsAJAX(addCarstoState);
      break;

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
