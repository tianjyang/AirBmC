import { SHOW_CONSTANTS, receiveListing } from '../actions/show_actions';
import { requestListing, newReservation } from '../utils/show_ajax_util';
import { updateErrors } from '../actions/error_actions';
import { requestReservations } from '../actions/session_actions';

const SessionMiddleware = (store) => (next) => (action) => {

  const errorCallback = (errorMessage) => {
    store.dispatch(updateErrors(errorMessage));
  };

  const successfulRequest = (listingObject) => {
    // store.dispatch(updateErrors);
    store.dispatch(receiveListing(listingObject));
  };

  const successfulReservation = (data) => {
    // store.dispatch(updateErrors);
    store.dispatch(requestReservations());
  };


  switch (action.type) {
    case SHOW_CONSTANTS.REQUEST_LISTING:
      requestListing(action.searchParams,successfulRequest,errorCallback);
      break;
    case SHOW_CONSTANTS.REQUEST_COMMENTS:
      break;
    case SHOW_CONSTANTS.POST_RESERVATION:
      newReservation(action.listingId,action.reservationInfo,successfulReservation,errorCallback);
      break;

    default:
      return next(action);

  }
};

export default SessionMiddleware;
