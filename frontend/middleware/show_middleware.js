import { SHOW_CONSTANTS, } from '../actions/show_actions';
import { requestListing } from '../utils/show_ajax_util';

const SessionMiddleware = (store) => (next) => (action) => {

  switch (action.type) {
    case SHOW_CONSTANTS.REQUEST_LISTING:
    console.log("reqeuesting listing");
      requestListing(action.searchParams);
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
