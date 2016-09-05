import { SEARCH_CONSTANTS, receiveListings} from '../actions/search_actions';
import { requestListings, searchListingsByBound } from '../utils/search_ajax_util';

const SearchMiddleware = (store) => (next) => (action) => {
  let success = (data) => {
    store.dispatch(receiveListings(data));
  };

  const errorCallback = (errorMessage) => {
    store.dispatch(updateErrors(errorMessage));
  };

  switch (action.type) {
    case SEARCH_CONSTANTS.FIND_LISTINGS:
      requestListings(action.searchParams,success,errorCallback);
      break;

    case SEARCH_CONSTANTS.SEARCH_BY_BOUNDS:
      searchListingsByBound(action.searchParams,success,errorCallback);

      break;
    default:
      return next(action);

  }
};

export default SearchMiddleware;
