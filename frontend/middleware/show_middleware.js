import { SHOW_CONSTANTS, receiveListing } from '../actions/show_actions';
import { requestListing, newReservation } from '../utils/show_ajax_util';
import { updateReserveErrors } from '../actions/error_actions';
import { requestReservations } from '../actions/session_actions';

const ShowMiddleware = (store) => (next) => (action) => {
  const errorCallback = (errorMessage) => {
    store.dispatch(updateReserveErrors(errorMessage));
  };

  const successfulRequest = (listingObject) => {
    store.dispatch(receiveListing(listingObject));
  };

  const flashTheModal = () => {
    $("#new-reservation-modal").show();
    $(window).on("click",function(){
      $('#new-reservation-modal').hide();
      $(window).off('click');
    });
  };

  const successfulReservation = (data) => {
    store.dispatch(requestReservations());
    store.dispatch(updateReserveErrors({}));
    flashTheModal();
  };


  switch (action.type) {
    case SHOW_CONSTANTS.REQUEST_LISTING:
      requestListing(action.searchParams,successfulRequest);
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

export default ShowMiddleware;
