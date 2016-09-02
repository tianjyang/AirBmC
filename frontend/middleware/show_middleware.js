import { SHOW_CONSTANTS, receiveListing } from '../actions/show_actions';
import { requestListing, newReservation } from '../utils/show_ajax_util';

const SessionMiddleware = (store) => (next) => (action) => {

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
      console.log("posting a reservation!");
      const successfulReservation = (data) => {
        console.log(data);
      }

      const unseuccesfulReservation = (data) => {
        console.log(data);
      }
      newReservation(action.listingId,action.reservationInfo,successfulReservation)

      break;

      newReservation(action.reservationInfo,successfulReservation)

      break;
    default:
      return next(action);

  }
};

export default SessionMiddleware;
