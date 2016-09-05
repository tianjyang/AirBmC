import { SHOW_CONSTANTS, receiveListing } from '../actions/show_actions';
import { requestListing, newReservation } from '../utils/show_ajax_util';
import { updateErrors } from '../actions/error_actions';
import { requestReservations } from '../actions/session_actions';

const SessionMiddleware = (store) => (next) => (action) => {

  const errorCallback = (errorMessage) => {
    store.dispatch(updateErrors(errorMessage));
  };

  switch (action.type) {
    case SHOW_CONSTANTS.REQUEST_LISTING:
      let successfulRequest = (listingObject) => {
        store.dispatch(receiveListing(listingObject));
      };
      requestListing(action.searchParams,successfulRequest);
      break;
    case SHOW_CONSTANTS.REQUEST_COMMENTS:
      break;
    case SHOW_CONSTANTS.POST_RESERVATION:
      const successfulReservation = (data) => {
        store.dispatch(requestReservations());
      };
      const unseuccesfulReservation = (data) => {

      };
      newReservation(action.listingId,action.reservationInfo,successfulReservation);
      break;

    default:
      return next(action);

  }
};

export default SessionMiddleware;
