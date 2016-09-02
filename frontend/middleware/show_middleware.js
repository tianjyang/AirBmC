import { SHOW_CONSTANTS, receiveListing } from '../actions/show_actions';
import { requestListing } from '../utils/show_ajax_util';

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

      break;
    default:
      return next(action);

  }
};

export default SessionMiddleware;
